/**
 * EngMastery: Level 2 - The Storyteller (CEFR A2)
 * File: lessons/level-2-storyteller/lesson.js
 * Curriculum: Past Simple (เล่าอดีต) & Future Forms (will vs be going to) + Irregular Verbs Table
 * Designed by: Senior Instructional Designer & Senior Linguist
 */
window.LESSON_2_STORYTELLER = {
  id: "level-2-storyteller",
  level: "A2",
  levelTitle: "Level 2: The Storyteller (CEFR A2)",
  levelSub: "เชื่อมโยง 3 กาลเวลา: เล่าเรื่องอดีต (Past Simple), คาดการณ์และวางแผนอนาคต (will vs be going to) และการเปรียบเทียบขั้นกว่า-ขั้นสุด",
  badgeColor: {
    bg: "bg-blue-100 dark:bg-blue-950/60",
    text: "text-blue-700 dark:text-blue-300",
    border: "border-blue-300 dark:border-blue-800"
  },
  cefrColor: "blue",
  estimatedTime: "35 นาที",
  xpReward: 140,

  // =========================================================================
  // TAB 1: CORE GRAMMAR (หลักการ, กฎเหล็ก, ข้อยกเว้น, การออกเสียง, กับดักแปล)
  // =========================================================================
  coreGrammar: {
    title: "ไวยากรณ์หลัก: Past Simple & Future Forms (will VS be going to) & Comparison",
    summary: "ทักษะการเล่าเรื่องของมืออาชีพ: ลำดับเรื่องราวในอดีตที่เสร็จสิ้นลงแล้ว แยกแยะเจตนาในอนาคตระหว่าง 'การตัดสินใจสด' กับ 'แผนการล่วงหน้า'",

    // A. Conceptual Core & Rules
    rules: [
      {
        ruleName: "1. กฎการเล่าเหตุการณ์ในอดีตที่จบลงแล้วเด็ดขาด (Past Simple: S + V.2)",
        explanation: "ใช้เล่าเหตุการณ์ที่เกิดขึ้นและสิ้นสุดลงแล้วในอดีต โดยมักมีคำระบุเวลาชัดเจน (yesterday, last week, 2 hours ago, in 2023):\n• บอกเล่า (+): S + V.2 (ทั้งกริยาปกติเติม -ed และกริยาเปลี่ยนรูป Irregular Verbs เช่น We deployed the update yesterday.)\n• ปฏิเสธ (-): S + didn't + V.1 รูปเดิมไม่ผัน (เช่น We didn't deploy the update yesterday.)\n• คำถาม (?): Did + S + V.1 รูปเดิมไม่ผัน? (เช่น Did you test the build before shipping?)",
        pitfall: "❌ ผิดบ่อยที่สุด: 'I didn't saw the email.' / ✅ ถูกต้อง: 'I didn't see the email.' (เมื่อมี didn't ช่วยแล้ว กริยาหลักต้องคืนรูป V1 ทันที)",
        proTip: "ในประโยคปฏิเสธและคำถามของ Past Simple จะมีตัวบอกอดีตได้เพียง 'ตำแหน่งเดียว' นั่นคือ 'did / didn't' ตัวกริยาข้างหลังจึงห้ามเป็นอดีตซ้ำสอง"
      },
      {
        ruleName: "2. การพูดถึงอนาคต: การตัดสินใจเดี๋ยวนั้น (will) VS แผนการที่ตั้งใจไว้แล้ว (be going to)",
        explanation: "ภาษาอังกฤษมีมุมมองต่ออนาคต 2 แบบที่สื่อความหมายต่างกันอย่างมีนัยสำคัญ:\n• will + V.1: ใช้เมื่อ 'ตัดสินใจทันทีขณะพูด' (Spontaneous decision), สัญญา (Promises), เสนอความช่วยเหลือ (Offers), หรือคาดเดาแบบไม่มีหลักฐานชัดเจน (เช่น I will send you the file right now. / Don't worry, I will fix it.)\n• be going to + V.1: ใช้เมื่อ 'วางแผนหรือตัดสินใจมาก่อนล่วงหน้าแล้ว' (Prior intentions / Pre-arranged plans) หรือคาดคะเนโดยมีหลักฐานเชิงประจักษ์ตรงหน้า (เช่น Look at the disk space! It is going to crash. / We are going to migrate to AWS next month.)",
        pitfall: "❌ ผิดความหมาย: เพื่อนบอก 'The printer is out of paper.' ตอบว่า 'I am going to buy some.' (ฟังดูเหมือนวางแผนจะซื้อไว้นานแล้วทั้งที่เพิ่งรู้) / ✅ ถูกต้อง: 'I will get some paper.'",
        proTip: "จำง่าย ๆ: 'will' คือคิดสดเดี๋ยวนั้น / 'going to' คือมีแผนในหัวมาก่อนแล้ว"
      },
      {
        ruleName: "3. กฎการเปรียบเทียบขั้นกว่า (Comparative) และขั้นสุด (Superlative)",
        explanation: "• คำ 1-2 พยางค์สั้น: เติม -er than ในขั้นกว่า และ the -est ในขั้นสุด (เช่น fast -> faster than -> the fastest)\n• คำ 2 พยางค์ขึ้นไป: ใช้ more ... than ในขั้นกว่า และ the most ... ในขั้นสุด (เช่น expensive -> more expensive than -> the most expensive)\n• กริยาวิเศษณ์ผันพิเศษที่ต้องจำ: good -> better -> the best | bad -> worse -> the worst | far -> further -> the furthest",
        pitfall: "❌ ผิดซ้ำซ้อน: 'more faster' หรือ 'more better' / ✅ ถูกต้อง: 'faster' หรือ 'much better'",
        proTip: "หากต้องการบอกว่า 'ดีกว่ามาก' ให้ใช้ 'much better' หรือ 'far better' ห้ามใช้ 'more better'"
      }
    ],

    // Structure Matrix
    comparisonTable: {
      headers: ["มิติเวลา", "บอกเล่า (+)", "ปฏิเสธ (-)", "คำถาม (?)"],
      rows: [
        {
          subject: "Past Simple (จบไปแล้ว)",
          positive: "They <span class='text-emerald-600 dark:text-emerald-400 font-bold'>released</span> version 2.0 yesterday.",
          negative: "They <span class='text-red-500 font-bold'>didn't release</span> version 2.0 yesterday.",
          question: "<span class='text-amber-500 font-bold'>Did</span> they <span class='text-amber-500 font-bold'>release</span> version 2.0 yesterday?",
          audioPositive: "They released version 2.0 yesterday.",
          audioNegative: "They didn't release version 2.0 yesterday.",
          audioQuestion: "Did they release version 2.0 yesterday?"
        },
        {
          subject: "Future: will (ตัดสินใจทันที)",
          positive: "I <span class='text-emerald-600 dark:text-emerald-400 font-bold'>will inspect</span> the crash logs right now.",
          negative: "I <span class='text-red-500 font-bold'>will not (won't) inspect</span> the crash logs alone.",
          question: "<span class='text-amber-500 font-bold'>Will</span> you <span class='text-amber-500 font-bold'>inspect</span> the crash logs?",
          audioPositive: "I will inspect the crash logs right now.",
          audioNegative: "I won't inspect the crash logs alone.",
          audioQuestion: "Will you inspect the crash logs?"
        },
        {
          subject: "Future: be going to (แผนงาน)",
          positive: "We <span class='text-emerald-600 dark:text-emerald-400 font-bold'>are going to upgrade</span> the database tonight.",
          negative: "We <span class='text-red-500 font-bold'>are not going to upgrade</span> the database tonight.",
          question: "<span class='text-amber-500 font-bold'>Are</span> you <span class='text-amber-500 font-bold'>going to upgrade</span> the database tonight?",
          audioPositive: "We are going to upgrade the database tonight.",
          audioNegative: "We are not going to upgrade the database tonight.",
          audioQuestion: "Are you going to upgrade the database tonight?"
        }
      ]
    },

    // B. Advanced Sub-Rules & Exceptions
    advancedSubRules: [
      {
        title: "1. กฎการออกเสียงคำลงท้าย -ed (3 กฎทางสัทศาสตร์ที่สร้างสำเนียงมืออาชีพ)",
        explanation: "การออกเสียง -ed ไม่ได้ออกเสียงว่า 'เอ็ด' ทุกคำ! การออกเสียงขึ้นอยู่กับเสียงพยัญชนะตัวสุดท้ายของกริยา:\n1. ออกเสียง /t/ (เสียงลมพ่น ไร้เสียงกังวาน): หลังเสียงไม่ก้อง (p, k, f, s, ʃ, tʃ) เช่น worked /wɜːrkt/, stopped /stɑːpt/, fixed /fɪkst/, launched /lɔːntʃt/\n2. ออกเสียง /d/ (เสียงก้องในลำคอ): หลังเสียงก้อง (b, g, v, z, m, n, l, r) และสระทุกตัว เช่น played /pleɪd/, cleaned /kliːnd/, called /kɔːld/, deployed /dɪˈplɔɪd/\n3. ออกเสียง /ɪd/ (เพิ่ม 1 พยางค์): เฉพาะคำที่ลงท้ายด้วยเสียง /t/ หรือ /d/ เท่านั้น! เช่น started /ˈstɑːr.tɪd/, decided /dɪˈsaɪ.dɪd/, updated /ʌpˈdeɪ.tɪd/, tested /ˈtes.tɪd/",
        examples: [
          { text: "worked (/t/) VS deployed (/d/) VS updated (/ɪd/)", th: "สังเกต: มีเพียง updated เท่านั้นที่เพิ่มเป็น 3 พยางค์ คำอื่นคงพยางค์เท่าเดิม" }
        ]
      },
      {
        title: "2. กลุ่มกริยา 3 ช่องคงรูปเดิม (No-Change Verbs)",
        explanation: "กริยากลุ่มพิเศษที่มีรูป V1, V2 และ V3 เหมือนกันทุกประการ ห้ามเติม -ed หรือเปลี่ยนสระเด็ดขาด:\n• cost -> cost -> cost (มีมูลค่า/ราคา)\n• cut -> cut -> cut (ตัด)\n• hit -> hit -> hit (ชน/กระทบ)\n• put -> put -> put (วาง/ใส่)\n• set -> set -> set (ตั้งค่า/กำหนด)\n• read /riːd/ -> read /red/ -> read /red/ (เขียนเหมือนกัน แต่ออกเสียงอดีตเป็น เรด)",
        examples: [
          { text: "❌ The server costed a lot of money. -> ✅ The server cost a lot of money.", th: "เซิร์ฟเวอร์มีราคาสูงมาก (cost ไม่ผันเติม -ed)" },
          { text: "Yesterday, I read (/red/) the technical documentation.", th: "เมื่อวานนี้ฉันอ่านเอกสารสเปกแล้ว (ออกเสียง เรด)" }
        ]
      }
    ],

    // C. Pronunciation & Accent Secrets
    pronunciationSecrets: [
      {
        rule: "1. การกลืนเสียงและการลดรูป: 'going to' -> 'gonna' และ 'did you' -> 'did-joo'",
        explanation: "ในการสื่อสารจริงอย่างคล่องแคล่ว:\n• 'going to' มักถูกลดรูปเป็น 'gonna' /ˈɡənə/ ในการพูดที่ไม่เป็นทางการ\n• 'Did you...?' เสียง /d/ ชนกับ /j/ เกิดการผสมเสียง (Palatalization) กลายเป็นเสียง /dɪdʒuː/ (ดิด-จู) เช่น 'Did you see it?' -> /ˈdɪdʒuː siː ɪt/",
        phoneticExample: "Did you find the bug? -> /ˈdɪdʒuː faɪnd ðə bʌɡ/",
        audio: "Did you find the bug? We are going to deploy."
      },
      {
        rule: "2. การออกเสียง Flap /t/ สไตล์ American English ในการเปรียบเทียบ",
        explanation: "เมื่อตัว 't' หรือ 'tt' อยู่ระหว่างสระ 2 ตัว เสียงจะถูกออกคล้ายตัว 'ด' เบา ๆ ที่ลิ้นแตะเพดานปากรวดเร็ว:\n• 'better' ออกเสียงเป็น /ˈbe.t̬ɚ/ (เบด-เด้อ)\n• 'faster' ในประโยคเชื่อม 'faster and better' จะลื่นไหลต่อเนื่อง",
        phoneticExample: "better /ˈbe.t̬ɚ/ | later /ˈleɪ.t̬ɚ/ | computer /kəmˈpjuː.t̬ɚ/",
        audio: "This solution is much better and faster."
      }
    ],

    // D. Common Thai-English Traps
    thaiEnglishTraps: [
      {
        wrong: "Yesterday I go to office.",
        right: "Yesterday I went to the office.",
        literalThai: "เมื่อวานนี้ฉันไปออฟฟิศ (ภาษาไทยไม่มีการผันกริยาตามกาลเวลา)",
        why: "ภาษาไทยใช้คำว่า 'เมื่อวาน' กำกับความหมายก็เพียงพอ แต่ภาษาอังกฤษโครงสร้างบังคับว่าคำกริยาต้องผันเป็น Past Form (V.2) ทันทีที่มีบริบทของอดีต"
      },
      {
        wrong: "I didn't saw the incident report.",
        right: "I didn't see the incident report.",
        literalThai: "ฉันไม่ได้เห็นรายงานเหตุการณ์ (ใส่ V.2 ซ้ำซ้อนหลัง didn't)",
        why: "'didn't' เป็นกริยาช่วยที่แบกความเป็นอดีตไปแล้ว กริยาแท้ด้านหลังจึงต้องกลับคืนสู่ Infinitive (V.1) เสมอ"
      },
      {
        wrong: "Our new cloud architecture is more better.",
        right: "Our new cloud architecture is much better. / far better.",
        literalThai: "สถาปัตยกรรมคลาวด์ใหม่ของเราดียิ่งกว่าเดิม (ใส่ more หน้า better)",
        why: "'better' เป็นรูปขั้นกว่าของ 'good' อยู่แล้ว ห้ามใส่ 'more' นำหน้าซ้ำซ้อน หากต้องการขยายความว่า 'ดีกว่ามาก' ให้ใช้ 'much' หรือ 'far'"
      },
      {
        wrong: "I will to test the code.",
        right: "I will test the code.",
        literalThai: "ฉันจะทำการทดสอบโค้ด (ใส่ to ตามหลัง will)",
        why: "'will' เป็น Modal Auxiliary Verb กฎเหล็กของ Modal Verbs คือต้องตามด้วย Bare Infinitive (กริยาไม่ผันและไม่มี to) เสมอ"
      }
    ],

    // Key Examples
    keyExamples: [
      { en: "We identified the memory leak and resolved it in less than an hour.", th: "พวกเราระบุจุดที่หน่วยความจำรั่วไหลได้และแก้ไขเสร็จสิ้นภายในไม่ถึงชั่วโมง", note: "Past Simple แสดงลำดับเหตุการณ์ในอดีต (identified -> resolved)" },
      { en: "I am going to present the quarterly roadmap at 10 AM tomorrow.", th: "ฉันกำลังจะนำเสนอแผนงานประจำไตรมาสในวันพรุ่งนี้เวลา 10 โมงเช้า", note: "be going to สำหรับแผนการที่นัดหมายเวลาแน่นอนไว้แล้ว" },
      { en: "Wait a second, I will check the configuration file for you.", th: "รอสักครู่นะครับ เดี๋ยวผมจะเช็กไฟล์กำหนดค่าให้เดี๋ยวนี้เลย", note: "will สำหรับการตัดสินใจช่วยเหลือทันที ณ ปัจจุบันขณะ" }
    ]
  },

  // =========================================================================
  // TAB 2: CHUNKS & VOCAB (ก้อนประโยค, ตารางกริยา 3 ช่อง 15 คำ, ศัพท์)
  // =========================================================================
  chunksAndVocab: {
    chunks: [
      { chunk: "I ran into an issue with...", th: "ฉันบังเอิญเจอปัญหากับ... (ใช้อธิบายอุปสรรคที่เพิ่งพบ)", example: "Yesterday, I ran into an issue with the Docker container." },
      { chunk: "It took longer than expected.", th: "มันใช้เวลานานกว่าที่คาดไว้", example: "The database index rebuild took longer than expected." },
      { chunk: "I am going to focus on...", th: "ฉันจะมุ่งเน้นทำเรื่อง... (ใช้บอกแผนงานใน Daily Stand-up)", example: "Today, I am going to focus on code refactoring." },
      { chunk: "I will get back to you shortly.", th: "เดี๋ยวผมจะรีบติดต่อกลับไปในไม่ช้านะครับ", example: "Let me check the logs and I will get back to you shortly." }
    ],

    industryTechChunks: [
      { chunk: "We merged the pull request.", th: "เราได้ทำการรวมโค้ด (Merge PR) เรียบร้อยแล้ว", context: "Version Control", example: "We reviewed and merged the pull request this morning." },
      { chunk: "The backup completed successfully.", th: "การสำรองข้อมูลเสร็จสมบูรณ์เรียบร้อย", context: "Database", example: "The nightly backup completed successfully without errors." },
      { chunk: "It is significantly faster than the old build.", th: "มันทำงานเร็วกว่าตัวบิลด์เดิมอย่างเห็นได้ชัด", context: "Performance", example: "The new query engine is significantly faster than the old build." },
      { chunk: "I will push the patch to staging.", th: "เดี๋ยวฉันจะพุชแพตช์ขึ้นระบบทดสอบ (Staging)", context: "DevOps", example: "I will push the patch to staging as soon as the tests pass." }
    ],

    essentialVocab: [
      { word: "resolved", ipa: "/rɪˈzɑːlvd/", pos: "adj./v.", th: "ได้รับการแก้ไขเรียบร้อยแล้ว", example: "The critical ticket is now resolved." },
      { word: "migration", ipa: "/maɪˈɡreɪ.ʃən/", pos: "n.", th: "การย้ายระบบ/การย้ายข้อมูล", example: "The cloud migration will take two weeks." },
      { word: "efficient", ipa: "/ɪˈfɪʃ.ənt/", pos: "adj.", th: "มีประสิทธิภาพสูง (ประหยัดเวลา/ทรัพยากร)", example: "This algorithm is much more efficient." },
      { word: "outage", ipa: "/ˈaʊ.t̬ɪdʒ/", pos: "n.", th: "ช่วงเวลาที่ระบบหยุดทำงาน/ไฟดับ/ระบบล่ม", example: "We had a brief network outage at 3 AM." }
    ],

    // 15 Essential Irregular Verbs Table
    verbForms: [
      { v1: "go", v2: "went", v3: "gone", th: "ไป", example: "We went to the server room." },
      { v1: "do", v2: "did", v3: "done", th: "ทำ", example: "Did you finish the task?" },
      { v1: "make", v2: "made", v3: "made", th: "สร้าง, ทำ", example: "He made a critical mistake in the script." },
      { v1: "get", v2: "got", v3: "gotten / got", th: "ได้รับ, เอา", example: "We got the approval yesterday." },
      { v1: "take", v2: "took", v3: "taken", th: "ใช้เวลา, นำไป", example: "It took two hours to rebuild." },
      { v1: "see", v2: "saw", v3: "seen", th: "เห็น, ตรวจพบ", example: "I saw the error message on the screen." },
      { v1: "know", v2: "knew", v3: "known", th: "รู้, ทราบ", example: "We knew about the deadline last week." },
      { v1: "send", v2: "sent", v3: "sent", th: "ส่ง", example: "She sent the release notes an hour ago." },
      { v1: "spend", v2: "spent", v3: "spent", th: "ใช้จ่าย, ใช้เวลา", example: "They spent three days debugging the issue." },
      { v1: "run", v2: "ran", v3: "run", th: "รันโปรแกรม, วิ่ง", example: "The batch job ran overnight." },
      { v1: "write", v2: "wrote", v3: "written", th: "เขียน", example: "He wrote the unit tests yesterday." },
      { v1: "find", v2: "found", v3: "found", th: "พบ, ค้นพบ", example: "The security scanner found zero flaws." },
      { v1: "buy", v2: "bought", v3: "bought", th: "ซื้อ", example: "The company bought new cloud licenses." },
      { v1: "think", v2: "thought", v3: "thought", th: "คิด", example: "We thought the release was tomorrow." },
      { v1: "give", v2: "gave", v3: "given", th: "ให้", example: "The lead gave us permission to deploy." }
    ]
  },

  // =========================================================================
  // TAB 3: REAL-LIFE DIALOGUE (บทสนทนาสถานการณ์จริง + เหตุผลเบื้องหลัง Tense)
  // =========================================================================
  realLifeDialogue: {
    scenario: "Sprint Stand-up: Yesterday's Fix & Tomorrow's Migration",
    scenarioTh: "สถานการณ์: การประชุมอัปเดตงานประจำวัน (Stand-up Meeting) ระหว่าง Tech Lead กับ Frontend Engineer",
    grammarRationale: "วิเคราะห์การใช้ Tenses: พูดถึงงานที่เสร็จไปแล้วเมื่อวานใช้ Past Simple ('merged', 'fixed'), พูดถึงแผนงานที่กำหนดเวลาไว้แน่นอนแล้วใช้ Be going to ('am going to run'), และเมื่อตัดสินใจช่วยเหลือสด ๆ ในที่ประชุมใช้ Will ('I will assign myself')",
    turns: [
      {
        speaker: "Lead",
        side: "left",
        avatar: "👩‍💼",
        name: "Sarah (Tech Lead)",
        en: "Morning Team! Let's do a quick sync. Did you finish reviewing the authentication pull request yesterday?",
        th: "อรุณสวัสดิ์ทุกคน! มาอัปเดตงานกันสั้น ๆ หน่อยครับ เมื่อวานนี้คุณตรวจสอบโค้ด PR ระบบยืนยันตัวตนเสร็จหรือยังครับ?",
        tenseRationale: "Past Simple question (Did you finish): ถามถึงผลการกระทำที่มีกรอบเวลาคือเมื่อวานนี้ (yesterday)"
      },
      {
        speaker: "You",
        side: "right",
        avatar: "🧑",
        name: "You (Full-Stack Dev)",
        en: "Yes, I did. I tested the edge cases, found a minor token expiration bug, and merged it last night.",
        th: "เรียบร้อยแล้วครับ เมื่อคืนผมได้ทดสอบกรณีพิเศษ ตรวจพบข้อผิดพลาดการหมดอายุของโทเค็นนิดหน่อย และได้รวมโค้ดเรียบร้อยแล้วครับ",
        tenseRationale: "Past Simple sequence (tested -> found -> merged): เล่าชุดลำดับเหตุการณ์ 3 อย่างที่เสร็จสิ้นไปแล้วในอดีต"
      },
      {
        speaker: "Lead",
        side: "left",
        avatar: "👩‍💼",
        name: "Sarah (Tech Lead)",
        en: "Great job! And what are you going to work on today?",
        th: "เยี่ยมมากครับ! แล้ววันนี้คุณวางแผนจะทำงานส่วนไหนต่อครับ?",
        tenseRationale: "Future with be going to: ถามถึงแผนงานประจำวันที่ได้คิดวางแผนล่วงหน้าไว้แล้ว"
      },
      {
        speaker: "You",
        side: "right",
        avatar: "🧑",
        name: "You (Full-Stack Dev)",
        en: "Today, I am going to optimize the user settings page. It is much slower than the main dashboard.",
        th: "วันนี้ผมจะปรับจูนประสิทธิภาพหน้าตั้งค่าผู้ใช้ครับ ตอนนี้มันโหลดช้ากว่าหน้าแดชบอร์ดหลักมากเลยครับ",
        tenseRationale: "be going to + Comparative (much slower than): บอกแผนงานในใจ และเปรียบเทียบความเร็วด้วยขั้นกว่า"
      },
      {
        speaker: "Lead",
        side: "left",
        avatar: "👩‍💼",
        name: "Sarah (Tech Lead)",
        en: "Sounds solid. We also need someone to monitor the database migration tomorrow morning.",
        th: "ฟังดูเข้าท่าเลยครับ แล้วเราก็ต้องการคนมาช่วยมอนิเตอร์การย้ายฐานข้อมูลในเช้าวันพรุ่งนี้ด้วยคนหนึ่งนะครับ",
        tenseRationale: "Present Simple: แจ้งความต้องการหรือข้อกำหนดของโปรเจกต์ในปัจจุบัน"
      },
      {
        speaker: "You",
        side: "right",
        avatar: "🧑",
        name: "You (Full-Stack Dev)",
        en: "Don't worry, Sarah! I will handle the migration monitoring. I will set an alarm for 6 AM.",
        th: "ไม่ต้องกังวลเลยครับซาร่าห์! เดี๋ยวผมรับหน้าที่มอนิเตอร์การย้ายระบบเองครับ เดี๋ยวผมจะตั้งนาฬิกาปลุกไว้ตอน 6 โมงเช้าเลยครับ",
        tenseRationale: "Future with will (I will handle / I will set): การตัดสินใจอาสาและสัญญาเดี๋ยวนั้นในที่ประชุม (Spontaneous offer)"
      }
    ]
  },

  // =========================================================================
  // TAB 4: ACTION DRILL & DETAILED QUIZ (ภารกิจพูด + แบบทดสอบ 5 ข้อพร้อมเฉลย)
  // =========================================================================
  actionDrillAndQuiz: {
    dailyMission: {
      title: "ภารกิจฝึกพูด 3 มิติเวลา (Past, Present & Future Drill)",
      instruction: "ฝึกพูดประโยคเชื่อมต่อ: สิ่งที่ทำเสร็จไปแล้วเมื่อวาน (Past Simple) + สภาพปัจจุบันเปรียบเทียบ (Comparative) + แผนการในอนาคต (will / be going to):",
      targetPhrase: "Yesterday I deployed the patch, the system is much faster now, and I am going to monitor it tomorrow.",
      targetTh: "เมื่อวานนี้ฉันได้ติดตั้งตัวแก้บั๊กไปแล้ว, ตอนนี้ระบบทำงานเร็วกว่าเดิมมาก, และฉันกำลังจะติดตามดูผลในวันพรุ่งนี้",
      tip: "สังเกตความแตกต่าง: deployed (เติม -ed ออกเสียง /d/), much faster (ขั้นกว่า ห้ามใส่ more), และ am going to monitor (แผนงานอนาคต)"
    },

    quizQuestions: [
      {
        id: "q-2-1",
        question: "ประโยคใดต่อไปนี้ถูกต้องตามหลักไวยากรณ์ Past Simple?",
        options: [
          "We didn't found any anomalies during the audit yesterday.",
          "We didn't find any anomalies during the audit yesterday.",
          "We didn't finds any anomalies during the audit yesterday.",
          "We not found any anomalies during the audit yesterday."
        ],
        answer: 1,
        explanation: "ถูกต้อง! เมื่อประโยคปฏิเสธในอดีตใช้กริยาช่วย 'didn't' แล้ว กริยาแท้ด้านหลังจะต้องคืนรูปเดิมเป็น Infinitive (V.1) ซึ่งก็คือคำว่า 'find' (ห้ามใช้ 'didn't found' เพราะเป็นการซ้อนรูปอดีตซ้ำสอง)"
      },
      {
        id: "q-2-2",
        question: "เพื่อนร่วมงานพูดว่า: 'The production server has a memory leak!' คุณต้องการอาสาช่วยแก้ไขทันทีเดี๋ยวนั้น ควรพูดว่าอย่างไร?",
        options: [
          "I am going to check the memory logs.",
          "I will check the memory logs right now.",
          "I check the memory logs right now.",
          "I will to check the memory logs."
        ],
        answer: 1,
        explanation: "ถูกต้องอย่างยิ่ง! เมื่อเป็นการตัดสินใจสด ๆ เดี๋ยวนั้นเพื่อเสนอตัวช่วยเหลือ (Spontaneous Decision / Offer) ตามหลักภาษาอังกฤษต้องใช้ 'will + V.1' (ส่วน 'be going to' ใช้กับการวางแผนที่มีการเตรียมการล่วงหน้ามาก่อนแล้ว)"
      },
      {
        id: "q-2-3",
        question: "การออกเสียงคำว่า 'updated' และ 'launched' ในรูปอดีต ข้อใดระบุเสียงตัวสะกดท้าย -ed ได้ถูกต้องตามหลักสัทศาสตร์?",
        options: [
          "updated ออกเสียงลงท้ายด้วย /d/ และ launched ออกเสียงลงท้ายด้วย /ɪd/",
          "updated ออกเสียงลงท้ายด้วย /ɪd/ และ launched ออกเสียงลงท้ายด้วย /t/",
          "ทั้งสองคำออกเสียงลงท้ายด้วย /ɪd/ เหมือนกัน",
          "updated ออกเสียงลงท้ายด้วย /t/ และ launched ออกเสียงลงท้ายด้วย /d/"
        ],
        answer: 1,
        explanation: "ถูกต้อง! คำว่า 'update' ลงท้ายด้วยเสียง /t/ เมื่อเติม -ed จะต้องออกเสียงเพิ่มอีก 1 พยางค์เป็น /ɪd/ (อัพเดท-ถิด) ส่วน 'launch' ลงท้ายด้วยเสียงเสียดสี /tʃ/ ซึ่งเป็นเสียงไม่ก้อง (Voiceless) เมื่อเติม -ed จะต้องออกเสียงลมพ่นเป็น /t/ (ลอนชท์)"
      },
      {
        id: "q-2-4",
        question: "ข้อใดเขียนประโยคเปรียบเทียบขั้นกว่าได้ถูกต้องตามหลักไวยากรณ์?",
        options: [
          "The new query optimizer is more faster than the previous release.",
          "The new query optimizer is much faster than the previous release.",
          "The new query optimizer is more better than the previous release.",
          "The new query optimizer is very faster than the previous release."
        ],
        answer: 1,
        explanation: "ถูกต้อง! 'fast' เป็นคำพยางค์เดียว เมื่อทำเป็นขั้นกว่าจะเติม -er กลายเป็น 'faster' โดยห้ามใส่ 'more' นำหน้าซ้ำซ้อน และหากต้องการเน้นย้ำว่า 'เร็วกว่ามาก' ต้องใช้คำบอกระดับคือ 'much' (much faster) ไม่สามารถใช้ very หรือ more ได้"
      },
      {
        id: "q-2-5",
        question: "กริยา 'cost' (มีมูลค่า/ราคา) ในรูปอดีต (Past Simple V.2) คือข้อใด?",
        options: [
          "costed",
          "cost",
          "coasted",
          "was cost"
        ],
        answer: 1,
        explanation: "ถูกต้อง! 'cost' จัดอยู่ในกลุ่ม No-Change Irregular Verbs (กริยา 3 ช่องคงรูปเดิม) โดย V1 = cost, V2 = cost, V3 = cost เช่น 'The migration cost 5,000 dollars last month.' ห้ามเติม -ed เป็น costed เด็ดขาด"
      },
      {
        id: "q-2-6",
        question: "หากต้องการสร้างประโยคคำถามถามเหตุการณ์ในอดีต: '_____ you verify the checksum before you pushed the container image?' ควรเติมคำใด?",
        options: [
          "Did",
          "Were",
          "Have",
          "Do"
        ],
        answer: 0,
        explanation: "ถูกต้อง! การสร้างประโยคคำถาม Past Simple กับกริยาแท้ 'verify' ต้องใช้กริยาช่วย 'Did' นำหน้าประธานเสมอ โครงสร้างคือ Did + Subject + V1 (base form)"
      },
      {
        id: "q-2-7",
        question: "เติมกริยาช่อง 2 ให้ถูกต้อง: 'Last night, the database primary node _____ unresponsive for approximately 10 minutes.'",
        options: [
          "becomed",
          "became",
          "become",
          "was become"
        ],
        answer: 1,
        explanation: "ถูกต้อง! กริยา 'become' เป็นกริยาอปกติ (Irregular Verb) ผันรูปอดีต V2 เป็น 'became' (ห้ามเติม -ed เป็น becomed)"
      },
      {
        id: "q-2-8",
        question: "เลือกรูปขั้นสุด (Superlative) ของคำว่า 'good' ที่ถูกต้อง: 'PostgreSQL proved to be _____ database engine for our complex analytics workload.'",
        options: [
          "the most good",
          "the better",
          "the best",
          "most best"
        ],
        answer: 2,
        explanation: "ถูกต้อง! 'good' เป็นคำคุณศัพท์ที่ผันรูปพิเศษ: good ➔ better (ขั้นกว่า) ➔ the best (ขั้นสุด) จึงต้องใช้ 'the best database engine'"
      },
      {
        id: "q-2-9",
        question: "ข้อใดเลือกใช้รูปอนาคตที่ถูกต้องตามบริบท: 'We have already budgeted the cloud credits and reserved the downtime; we _____ our staging cluster next Monday.'",
        options: [
          "migrate",
          "will migrate",
          "are going to migrate",
          "are migrated"
        ],
        answer: 2,
        explanation: "ถูกต้อง! เมื่อมีการวางแผน จัดสรรงบประมาณ หรือกำหนดการเตรียมการไว้ล่วงหน้าอย่างชัดเจน (Pre-planned intention) กฎไวยากรณ์สากลจะนิยมใช้ 'be going to' มากกว่า 'will'"
      },
      {
        id: "q-2-10",
        question: "เติมคำบอกเวลาในอดีตให้ถูกต้อง: 'The vendor released the critical security advisory three days _____.'",
        options: [
          "before",
          "ago",
          "since",
          "last"
        ],
        answer: 1,
        explanation: "ถูกต้อง! 'ago' ใช้วางหลังช่วงระยะเวลา (Duration + ago) เช่น 'three days ago' เพื่อบอกว่าเหตุการณ์เกิดขึ้นเมื่อ 3 วันที่แล้วนับย้อนจากปัจจุบันใน Past Simple"
      },
      {
        id: "q-2-11",
        question: "เลือกคู่กริยาอปกติ (V2) ที่ถูกต้อง: 'Yesterday afternoon, Sarah _____ the bash script and _____ the load test.'",
        options: [
          "writed / runned",
          "wrote / ran",
          "wrote / runned",
          "written / run"
        ],
        answer: 1,
        explanation: "ถูกต้อง! ทั้ง 'write' และ 'run' เป็น Irregular Verbs โดย V2 ของ write คือ 'wrote' และ V2 ของ run คือ 'ran' (ห้ามเติม -ed เป็น writed หรือ runned)"
      },
      {
        id: "q-2-12",
        question: "เลือกรูปเปรียบเทียบขั้นกว่าของคำหลายพยางค์: 'The microservice architecture is significantly _____ to maintain than the legacy monolith.'",
        options: [
          "more easier",
          "more difficult",
          "difficultier",
          "most difficult"
        ],
        answer: 1,
        explanation: "ถูกต้อง! 'difficult' มี 3 พยางค์ การทำเป็นขั้นกว่าต้องใส่ 'more' นำหน้าเป็น 'more difficult' (ส่วน more easier ผิดไวยากรณ์เพราะ easy พยางค์สั้นต้องเปลี่ยน y เป็น ier เป็น easier โดยไม่มี more)"
      },
      {
        id: "q-2-13",
        question: "เติมรูปปฏิเสธ Past Simple ให้ถูกต้อง: 'The DevOps lead _____ the pull request because two automated unit tests failed.'",
        options: [
          "didn't approved",
          "didn't approve",
          "wasn't approve",
          "don't approved"
        ],
        answer: 1,
        explanation: "ถูกต้อง! ในประโยคปฏิเสธของ Past Simple เมื่อใช้ 'didn't' แล้ว กริยาตามหลังต้องคืนสู่รูปกริยาช่อง 1 ไม่ผัน (Base form) คือ 'didn't approve' (ห้ามมี -ed อีก)"
      },
      {
        id: "q-2-14",
        question: "คู่คำศัพท์กริยา Tech ในรูปอดีตคู่ใดที่ออกเสียงลงท้ายด้วยเสียงพยางค์พิเศษ /ɪd/ ทั้งสองคำ?",
        options: [
          "deployed and crashed",
          "migrated and tested",
          "fixed and launched",
          "scaled and logged"
        ],
        answer: 1,
        explanation: "ถูกต้อง! กฎสากลคือ กริยาที่ลงท้ายด้วยเสียง /t/ หรือ /d/ เมื่อเติม -ed จะต้องออกเสียงเพิ่มอีก 1 พยางค์เป็น /ɪd/ ซึ่ง 'migrate' (ลงท้ายเสียง /t/) และ 'test' (ลงท้ายเสียง /t/) จึงออกเสียงเป็น 'migrated' (/ˈmaɪ.ɡreɪ.tɪd/) และ 'tested' (/ˈtes.tɪd/)"
      },
      {
        id: "q-2-15",
        question: "สังเกตสัญญาณตรงหน้า: 'Look at the server telemetry! The CPU graph is hitting 99% and the fan is screaming. The node _____!'",
        options: [
          "will crash perhaps",
          "is going to crash",
          "crashed",
          "is crash"
        ],
        answer: 1,
        explanation: "ถูกต้อง! เมื่อเป็นการคาดการณ์อนาคตโดยมี 'หลักฐานเชิงประจักษ์คาตาในปัจจุบัน' (Evidence in the present) กฎไวยากรณ์ภาษาอังกฤษกำหนดให้ใช้ 'be going to' คือ 'is going to crash'"
      }
    ]
  }
};
