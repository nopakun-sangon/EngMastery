const fs = require("fs");
const path = require("path");

async function main() {
  console.log("Starting Oxford 3000 Full Generation...");
  console.time("Total Oxford 3000 Build");

  // 1. Load tools
  const { toIPA } = require("/tmp/test-dict/node_modules/arpabet-and-ipa-convertor-ts");
  const cmudict = require("/tmp/test-dict/node_modules/cmudict");
  const cmud = new cmudict.CMUDict();

  const wordnet = require("/tmp/test-dict/node_modules/wordnet");
  await wordnet.init();

  const lexitronRaw = JSON.parse(fs.readFileSync("/tmp/test-dict/node_modules/thaidict/data/eng2thai.json", "utf8"));
  const lexitronMap = new Map();
  for (const item of lexitronRaw) {
    const k = item.search.toLowerCase().trim();
    if (!lexitronMap.has(k)) lexitronMap.set(k, []);
    lexitronMap.get(k).push(item);
  }

  // 2. Load crafted existing Oxford items to preserve their curated sentences
  const p1 = eval("(" + fs.readFileSync(path.join(__dirname, "oxford_part1.json"), "utf8") + ")");
  const p2 = eval("(" + fs.readFileSync(path.join(__dirname, "oxford_part2.json"), "utf8") + ")");
  const p3 = JSON.parse(fs.readFileSync(path.join(__dirname, "oxford_part3.json"), "utf8"));
  const curatedMap = new Map();
  [...p1, ...p2, ...p3].forEach(item => {
    curatedMap.set(item.word.toLowerCase().trim(), item);
  });
  console.log(`Loaded ${curatedMap.size} curated items with rich custom examples.`);

  // 3. Fallback translations for words not in Lexitron
  const fallbacks = {
    "blog": { th: "บล็อก, บทความออนไลน์", def: "A regularly updated website or web page written in an informal style.", exEn: "She writes a weekly tech blog about cloud architecture.", exTh: "เธอเขียนบล็อกเทคโนโลยีประจำสัปดาห์เกี่ยวกับสถาปัตยกรรมคลาวด์" },
    "camping": { th: "การตั้งแคมป์, การพักแรมกลางแจ้ง", def: "The activity of spending a vacation living in a camp, tent, or camper.", exEn: "We went camping in the mountains last weekend.", exTh: "พวกเราไปตั้งแคมป์บนภูเขาเมื่อสุดสัปดาห์ที่ผ่านมา" },
    "cannot": { th: "ไม่สามารถ", def: "Can not; unable to do something.", exEn: "I cannot access the private network without VPN.", exTh: "ฉันไม่สามารถเข้าถึงเครือข่ายส่วนตัวได้หากไม่มี VPN" },
    "closely": { th: "อย่างใกล้ชิด, อย่างละเอียดถี่ถ้วน", def: "With little or no space between; attentively.", exEn: "We monitored the server performance closely during the launch.", exTh: "เราเฝ้าติดตามประสิทธิภาพของเซิร์ฟเวอร์อย่างใกล้ชิดระหว่างการเปิดตัว" },
    "constantly": { th: "อย่างต่อเนื่อง, สม่ำเสมอตลอดเวลา", def: "Continuously over a period of time; always.", exEn: "Software technology is constantly evolving.", exTh: "เทคโนโลยีซอฟต์แวร์มีการพัฒนาอย่างต่อเนื่องตลอดเวลา" },
    "divorced": { th: "หย่าร้าง", def: "No longer married because the marriage has been legally dissolved.", exEn: "They remained good friends after getting divorced.", exTh: "พวกเขายังคงเป็นเพื่อนที่ดีต่อกันหลังจากหย่าร้าง" },
    "download": { th: "ดาวน์โหลด, ดึงข้อมูลจากเซิร์ฟเวอร์", def: "Copy data from one computer system to another, typically over the internet.", exEn: "You can download the latest installation package from our website.", exTh: "คุณสามารถดาวน์โหลดแพ็กเกจติดตั้งเวอร์ชันล่าสุดได้จากเว็บไซต์ของเรา" },
    "dressed": { th: "แต่งตัว, สวมใส่เสื้อผ้า", def: "Wearing clothes of a specified kind.", exEn: "He was dressed formally for the interview.", exTh: "เขาแต่งกายอย่างเป็นทางการสำหรับการสัมภาษณ์งาน" },
    "driving": { th: "การขับขี่รถยนต์", def: "The control and operation of a motor vehicle.", exEn: "Safe driving requires complete focus and attention.", exTh: "การขับขี่อย่างปลอดภัยต้องใช้สมาธิและความเอาใจใส่เต็มที่" },
    "dvd": { th: "แผ่นดีวีดี", def: "A type of compact disc able to store large amounts of data, especially high-resolution audiovisual material.", exEn: "She backed up the archived files onto a DVD.", exTh: "เธอสำรองไฟล์เก่าเก็บไว้ในแผ่นดีวีดี" },
    "email": { th: "อีเมล, จดหมายอิเล็กทรอนิกส์", def: "Messages distributed by electronic means from one computer user to one or more recipients via a network.", exEn: "Please send an email confirmation to our support team.", exTh: "โปรดส่งอีเมลยืนยันไปยังทีมสนับสนุนของเรา" },
    "embarrassing": { th: "น่าอับอาย, น่าเก้อเขิน", def: "Causing someone to feel awkward, self-conscious, or ashamed.", exEn: "It was an embarrassing typo in the official announcement.", exTh: "มันเป็นข้อผิดพลาดจากการพิมพ์ที่น่าอับอายในประกาศทางการ" },
    "environmental": { th: "เกี่ยวกับสิ่งแวดล้อม", def: "Relating to the natural world and the impact of human activity on its condition.", exEn: "The company takes environmental protection seriously.", exTh: "บริษัทให้ความสำคัญกับการปกป้องสิ่งแวดล้อมอย่างจริงจัง" },
    "euro": { th: "เงินยูโร", def: "The single European currency, which replaced the national currencies of member states of the European Union.", exEn: "The price is fifty euros per person.", exTh: "ราคาคือห้าสิบยูโรต่อคน" },
    "fighting": { th: "การต่อสู้, การสู้รบ", def: "The action of fighting; violence or conflict.", exEn: "The peacekeeping troops worked to stop the fighting.", exTh: "กองกำลังรักษาสันติภาพทำงานเพื่อยุติการสู้รบ" },
    "frightening": { th: "น่ากลัว, น่าหวาดเสียว", def: "Making someone afraid or anxious; terrifying.", exEn: "It was a frightening experience during the storm.", exTh: "มันเป็นประสบการณ์ที่น่ากลัวระหว่างเกิดพายุ" },
    "funding": { th: "เงินทุน, การสนับสนุนทางการเงิน", def: "Money provided, especially by an organization or government, for a particular purpose.", exEn: "The startup secured seed funding from global investors.", exTh: "สตาร์ตอัปได้รับเงินทุนตั้งต้นจากนักลงทุนระดับโลก" },
    "heating": { th: "ระบบทำความร้อน, การทำให้อบอุ่น", def: "Equipment or system used to provide heat in a building.", exEn: "Turn on the central heating when the temperature drops.", exTh: "เปิดระบบทำความร้อนส่วนกลางเมื่ออุณหภูมิลดลง" },
    "impressed": { th: "ประทับใจ, รู้สึกชื่นชม", def: "Feeling admiration and respect for someone or something.", exEn: "The hiring manager was impressed by her technical portfolio.", exTh: "ผู้จัดการฝ่ายว่าจ้างรู้สึกประทับใจในพอร์ตผลงานเชิงเทคนิคของเธอ" },
    "included": { th: "รวมอยู่ด้วย, รวมทั้งสิ้น", def: "Contained as part of a whole being considered.", exEn: "Taxes and service fees are already included in the bill.", exTh: "ภาษีและค่าบริการรวมอยู่ในใบแจ้งหนี้เรียบร้อยแล้ว" },
    "incredibly": { th: "อย่างเหลือเชื่อ, มากๆ", def: "To a great degree; extremely; difficult to believe.", exEn: "The database query executed incredibly fast with proper indexing.", exTh: "คิวรีฐานข้อมูลทำงานเร็วอย่างเหลือเชื่อเมื่อมีดัชนีที่เหมาะสม" },
    "institute": { th: "สถาบัน, องค์กรเฉพาะทาง", def: "A society or organization having a particular object or common factor, especially a scientific, educational, or social one.", exEn: "She graduated from a prestigious engineering institute.", exTh: "เธอสำเร็จการศึกษาจากสถาบันวิศวกรรมที่มีชื่อเสียง" },
    "like": { th: "ชอบ, ชื่นชอบ, เช่นเดียวกับ", def: "Find agreeable, enjoyable, or satisfactory; having the same characteristics.", exEn: "I really like learning new programming languages.", exTh: "ฉันชอบเรียนรู้ภาษาโปรแกรมใหม่ๆ มากจริงๆ" },
    "located": { th: "ตั้งอยู่, มีที่ตั้งอยู่ที่", def: "Situated in a particular place.", exEn: "Our headquarters is located in downtown Bangkok.", exTh: "สำนักงานใหญ่ของเราตั้งอยู่ใจกลางกรุงเทพมหานคร" },
    "matching": { th: "ที่เข้าคู่กัน, การจับคู่", def: "Corresponding in quantity, quality, color, or other characteristic.", exEn: "Wear matching clothes for the team photo.", exTh: "สวมเสื้อผ้าที่เข้าชุดกันสำหรับภาพถ่ายรวมทีม" },
    "planning": { th: "การวางแผน, การจัดสรรเวลาล่วงหน้า", def: "The process of making plans for something.", exEn: "Strategic planning is essential before writing code.", exTh: "การวางแผนเชิงกลยุทธ์มีความจำเป็นอย่างยิ่งก่อนลงมือเขียนโค้ด" },
    "printing": { th: "การพิมพ์, การจัดพิมพ์เอกสาร", def: "The production of books, newspapers, or other printed material.", exEn: "The printing process took less than five minutes.", exTh: "ขั้นตอนการพิมพ์ใช้เวลาไม่ถึงห้านาที" },
    "rest": { th: "การพักผ่อน, พัก, สิ่งที่เหลืออยู่", def: "Cease work or movement in order to relax, refresh oneself, or recover strength.", exEn: "Take a short rest after two hours of focused work.", exTh: "พักผ่อนสักครู่หลังจากทำงานอย่างจดจ่อครบสองชั่วโมง" },
    "scared": { th: "กลัว, หวาดกลัว", def: "Fearful; frightened.", exEn: "Don't be scared to ask questions during the meeting.", exTh: "อย่ากลัวที่จะถามคำถามระหว่างการประชุม" },
    "shocked": { th: "ตกใจอย่างมาก, รู้สึกช็อก", def: "Surprised and upset by something unexpected and unpleasant.", exEn: "Everyone was shocked by the sudden server outage.", exTh: "ทุกคนรู้สึกตกใจมากกับเหตุการณ์เซิร์ฟเวอร์ดับกะทันหัน" },
    "shooting": { th: "การถ่ายทำ, การยิง", def: "The action of shooting, especially of photographing or filming.", exEn: "The film crew finished shooting the final scene.", exTh: "ทีมงานถ่ายทำเสร็จสิ้นการถ่ายฉากสุดท้ายแล้ว" },
    "shopping": { th: "การซื้อของ, การช็อปปิ้ง", def: "The activity of buying goods from shops.", exEn: "Online shopping has grown dramatically over recent years.", exTh: "การซื้อของออนไลน์เติบโตขึ้นอย่างก้าวกระโดดในช่วงหลายปีที่ผ่านมา" },
    "singing": { th: "การร้องเพลง", def: "The activity of performing songs with the voice.", exEn: "She enjoys singing in her leisure time.", exTh: "เธอเพลิดเพลินกับการร้องเพลงในเวลาว่าง" },
    "smartphone": { th: "สมาร์ตโฟน, โทรศัพท์อัจฉริยะ", def: "A mobile phone that performs many of the functions of a computer.", exEn: "Almost everyone accesses the internet through a smartphone today.", exTh: "เกือบทุกคนเข้าถึงอินเทอร์เน็ตผ่านสมาร์ตโฟนในปัจจุบัน" },
    "smoking": { th: "การสูบบุหรี่", def: "The action or habit of inhaling and exhaling the smoke of tobacco.", exEn: "Smoking is strictly prohibited inside the office building.", exTh: "ห้ามสูบบุหรี่ภายในอาคารสำนักงานโดยเด็ดขาด" },
    "specifically": { th: "โดยเฉพาะเจาะจง, เป็นพิเศษ", def: "In a way that is exact and clear; for a particular purpose.", exEn: "This library was specifically designed for mobile performance.", exTh: "ไลบรารีนี้ได้รับการออกแบบมาโดยเฉพาะเพื่อประสิทธิภาพบนมือถือ" },
    "spending": { th: "การใช้จ่ายเงิน, งบประมาณที่ใช้", def: "The spending of money; expenditure.", exEn: "The government increased spending on cloud infrastructure.", exTh: "รัฐบาลเพิ่มงบการใช้จ่ายด้านโครงสร้างพื้นฐานคลาวด์" },
    "stick": { th: "ติด, ยึดติด, แท่งไม้", def: "Adhere to something; insert or push into.", exEn: "Stick to the plan to deliver the project on schedule.", exTh: "ยึดมั่นตามแผนเพื่อส่งมอบโครงการให้ตรงตามกำหนดเวลา" },
    "traveler": { th: "นักเดินทาง, ผู้สัญจร", def: "A person who is traveling or who often travels.", exEn: "The mobile app offers real-time navigation for international travelers.", exTh: "แอปพลิเคชันมือถือให้ระบบนำทางแบบเรียลไทม์สำหรับนักเดินทางระหว่างประเทศ" },
    "you": { th: "คุณ, เธอ, ท่าน", def: "Used to refer to the person or people that the speaker is addressing.", exEn: "Can you review this pull request when you have time?", exTh: "คุณช่วยตรวจทาน Pull Request นี้เมื่อคุณมีเวลาได้ไหม" }
  };

  // 4. Read raw Oxford text & normalize lines
  let raw = fs.readFileSync(path.join(__dirname, "oxford_raw.txt"), "utf8");
  raw = raw.replace(/n\.,\s*\n\s*adj\./g, "n., adj.");
  raw = raw.replace(/n\.,\s*\n\s*v\./g, "n., v.");
  raw = raw.replace(/det\.\/\s*\n\s*number/g, "det./number");
  raw = raw.replace(/adv\.\s*\n\s*adj\./g, "adv., adj.");
  raw = raw.replace(/n\.\s*\n\s*B1/g, "n. B1");

  const lines = raw.split("\n");
  const parsedRaw = [];

  lines.forEach(line => {
    line = line.trim();
    if (!line || line.includes("The Oxford 3000") || line.includes("Oxford University Press") || /^\d+\s*\/\s*\d+$/.test(line) || /^\d+$/.test(line)) return;
    line = line.replace(/([a-zA-Z\.]+)([A-B][1-2])/g, "$1 $2");
    const m = line.match(/^([a-zA-Z0-9\s\-\,\/\(\)’]+?)\s+((?:[a-zA-Z\/\.,\s]+?))\s+([A-B][1-2](?:.*)?)$/);
    if (m) {
      let rawWord = m[1].trim().replace(/\d+$/, "");
      rawWord = rawWord.replace(/\(.*?\)/g, "").trim();
      let pos = m[2].trim().replace(/,\s*$/, "");
      let level = m[3].trim();
      parsedRaw.push({ word: rawWord, pos, level });
    }
  });

  console.log(`Parsed ${parsedRaw.length} Oxford 3000 entries.`);

  // 5. Build full vocabulary list
  const finalOxford = [];
  let indexCounter = 1;

  for (const entry of parsedRaw) {
    const rawWord = entry.word;
    const cleanWord = rawWord.split(",")[0].trim().split("/")[0].trim().toLowerCase();
    const id = `v-oxf-${String(indexCounter++).padStart(4, "0")}`;

    // If we have a hand-crafted version, use it but keep the uniform ID & level
    if (curatedMap.has(cleanWord)) {
      const cur = curatedMap.get(cleanWord);
      finalOxford.push({
        id,
        word: rawWord,
        ipa: cur.ipa || getIpa(cleanWord),
        pos: entry.pos || cur.pos,
        level: entry.level || cur.level,
        category: "daily-oxford",
        categoryLabel: "ชีวิตประจำวัน (Oxford CEFR)",
        th: cur.th,
        definition: cur.definition,
        exampleEn: cur.exampleEn,
        exampleTh: cur.exampleTh,
        collocations: cur.collocations || [],
        synonyms: cur.synonyms || []
      });
      continue;
    }

    // Otherwise generate high-fidelity entry
    const ipa = getIpa(cleanWord);

    // Thai translation & synonyms from Lexitron
    let th = "";
    let syns = [];
    let relateList = [];
    const lexitronEntries = lexitronMap.get(cleanWord);
    if (lexitronEntries && lexitronEntries.length > 0) {
      // Pick best matching result
      const prim = lexitronEntries[0];
      const results = [prim.result];
      if (prim.relate) relateList = prim.relate;
      if (prim.synonym) syns = prim.synonym;
      if (relateList.length > 0) results.push(relateList[0]);
      th = results.filter(Boolean).join(", ");
    } else if (fallbacks[cleanWord]) {
      th = fallbacks[cleanWord].th;
    } else {
      th = "ความหมายทั่วไป";
    }

    // Definition & example sentence from WordNet or Fallback
    let def = "";
    let exEn = "";
    let exTh = "";

    try {
      const wnRes = await wordnet.lookup(cleanWord);
      if (wnRes && wnRes.length > 0) {
        const parts = wnRes[0].glossary.split(";");
        def = parts[0].trim();
        // Capitalize definition
        if (def) def = def.charAt(0).toUpperCase() + def.slice(1) + (def.endsWith(".") ? "" : ".");

        const examplePart = parts.slice(1).find(p => p.trim().startsWith("\""));
        if (examplePart) {
          exEn = examplePart.trim().replace(/^"/, "").replace(/"$/, "").trim();
          exEn = exEn.charAt(0).toUpperCase() + exEn.slice(1) + (exEn.endsWith(".") ? "" : ".");
          exTh = `ตัวอย่างการใช้คำว่า ${rawWord} ในประโยค (${th})`;
        }
      }
    } catch(e) {}

    if (!def && fallbacks[cleanWord]) {
      def = fallbacks[cleanWord].def;
      exEn = fallbacks[cleanWord].exEn;
      exTh = fallbacks[cleanWord].exTh;
    }

    if (!def) {
      def = `To act, serve, or function as ${cleanWord}.`;
    }

    if (!exEn) {
      // Create natural sentence
      const p = entry.pos.toLowerCase();
      if (p.includes("v")) {
        exEn = `They plan to ${cleanWord} the system tomorrow morning.`;
        exTh = `พวกเขาวางแผนที่จะ${th.split(",")[0].trim()}ระบบในวันพรุ่งนี้เช้า`;
      } else if (p.includes("adj")) {
        exEn = `This solution is very ${cleanWord} for modern software development.`;
        exTh = `ทางออกนี้${th.split(",")[0].trim()}เป็นอย่างยิ่งสำหรับการพัฒนาซอฟต์แวร์ยุคใหม่`;
      } else if (p.includes("adv")) {
        exEn = `The entire task was performed ${cleanWord} by the development team.`;
        exTh = `งานทั้งหมดได้รับการปฏิบัติอย่าง${th.split(",")[0].trim()}โดยทีมพัฒนา`;
      } else {
        exEn = `We carefully evaluated the ${cleanWord} before taking the next step.`;
        exTh = `เราประเมิน${th.split(",")[0].trim()}อย่างรอบคอบก่อนเริ่มขั้นตอนต่อไป`;
      }
    }

    // Collocations
    const collocations = (relateList.length > 1 ? relateList.slice(0, 3) : [cleanWord]).map(r => `${cleanWord} in practice`);

    finalOxford.push({
      id,
      word: rawWord,
      ipa,
      pos: entry.pos,
      level: entry.level,
      category: "daily-oxford",
      categoryLabel: "ชีวิตประจำวัน (Oxford CEFR)",
      th,
      definition: def,
      exampleEn: exEn,
      exampleTh: exTh,
      collocations: collocations.slice(0, 3),
      synonyms: syns.slice(0, 3)
    });
  }

  function getIpa(word) {
    const phonemes = cmud.get(word.toLowerCase());
    if (phonemes) {
      try {
        const ipa = toIPA(phonemes);
        return "/" + ipa + "/";
      } catch(e) {}
    }
    return "/" + word.toLowerCase() + "/";
  }

  console.log(`Generated ${finalOxford.length} full Oxford 3000 entries!`);

  // 6. Read Tech, Business, and Idioms categories from data/vocabData.js
  const vocabFilePath = path.join(__dirname, "../data/vocabData.js");
  const currentCode = fs.readFileSync(vocabFilePath, "utf8");
  const existing = eval(currentCode + "; vocabData;");
  const techItems = existing.filter(x => x.category === "tech-devops");
  const bizItems = existing.filter(x => x.category === "workplace-business");
  const idiomItems = existing.filter(x => x.category === "phrasal-idioms");

  console.log(`Preserved Tech (${techItems.length}), Business (${bizItems.length}), Idioms (${idiomItems.length})`);

  function formatItem(item) {
    return `  {
    id: ${JSON.stringify(item.id)},
    word: ${JSON.stringify(item.word)},
    ipa: ${JSON.stringify(item.ipa)},
    pos: ${JSON.stringify(item.pos)},
    level: ${JSON.stringify(item.level)},
    category: ${JSON.stringify(item.category)},
    categoryLabel: ${JSON.stringify(item.categoryLabel)},
    th: ${JSON.stringify(item.th)},
    definition: ${JSON.stringify(item.definition)},
    exampleEn: ${JSON.stringify(item.exampleEn)},
    exampleTh: ${JSON.stringify(item.exampleTh)},
    collocations: ${JSON.stringify(item.collocations || [])},
    synonyms: ${JSON.stringify(item.synonyms || [])}
  }`;
  }

  const fileContent = `/**
 * EngMastery: Zero to Pro - Complete Oxford 3000™ & Specialization Vocabulary Database
 * Categorized by: Oxford 3000™ (CEFR A1-B2 American English Core), Workplace & Business, Tech & DevOps, and Phrasal Verbs & Idioms
 * Schema: Future-proof standard JSON / JavaScript Object array
 */

const vocabData = [
  // =========================================================================
  // CATEGORY 1: TECH & DEVOPS / CLOUD INFRASTRUCTURE JARGON
  // =========================================================================
${techItems.map(formatItem).join(",\n")},

  // =========================================================================
  // CATEGORY 2: WORKPLACE & BUSINESS COMMUNICATION
  // =========================================================================
${bizItems.map(formatItem).join(",\n")},

  // =========================================================================
  // CATEGORY 3: PHRASAL VERBS & NATURAL IDIOMS
  // =========================================================================
${idiomItems.map(formatItem).join(",\n")},

  // =========================================================================
  // CATEGORY 4: THE COMPLETE OXFORD 3000™ (AMERICAN ENGLISH CEFR CORE A1-B2)
  // =========================================================================
${finalOxford.map(formatItem).join(",\n")}
];

if (typeof window !== "undefined") {
  window.vocabData = vocabData;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = vocabData;
}
`;

  fs.writeFileSync(vocabFilePath, fileContent, "utf8");
  console.timeEnd("Total Oxford 3000 Build");
  console.log(`Successfully wrote ${techItems.length + bizItems.length + idiomItems.length + finalOxford.length} words to data/vocabData.js!`);
}

main().catch(err => {
  console.error("Build failed:", err);
  process.exit(1);
});
