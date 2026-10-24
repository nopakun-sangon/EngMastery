/**
 * EngMastery: Level 4 - The Communicator (CEFR B1+)
 * File: lessons/level-4-communicator/lesson.js
 * Curriculum: Past Continuous, Past Perfect (had + V.3) & Indirect Questions & Relative Clauses
 * Designed by: Senior Instructional Designer & Senior Linguist
 */
window.LESSON_4_COMMUNICATOR = {
  id: "level-4-communicator",
  level: "B1+",
  levelTitle: "Level 4: The Communicator (CEFR B1+)",
  levelSub: "สื่อสารอย่างมีชั้นเชิงและคล่องแคล่ว: Past Continuous, Past Perfect (อดีตซ้อนอดีต), Indirect Questions สุภาพระดับโปร และเทคนิค Paraphrasing",
  badgeColor: {
    bg: "bg-orange-100 dark:bg-orange-950/60",
    text: "text-orange-700 dark:text-orange-300",
    border: "border-orange-300 dark:border-orange-800"
  },
  cefrColor: "orange",
  estimatedTime: "40 นาที",
  xpReward: 160,

  // =========================================================================
  // TAB 1: CORE GRAMMAR (หลักการ, กฎเหล็ก, ข้อยกเว้น, การออกเสียง, กับดักแปล)
  // =========================================================================
  coreGrammar: {
    title: "ไวยากรณ์หลัก: Past Continuous, Past Perfect & Indirect Questions (ความสุภาพชั้นสูง)",
    summary: "ยกระดับการเล่าเหตุการณ์ซับซ้อนและการสื่อสารที่ละมุนละม่อม: จับคู่ Tenses อดีตซ้อนอดีต และเปลี่ยนคำถามห้วน ๆ ให้เป็นประโยคขอร้องระดับมืออาชีพ",

    // A. Conceptual Core & Rules
    rules: [
      {
        ruleName: "1. Tenses คู่หูในอดีต: Past Continuous (กำลังทำ) VS Past Simple (เหตุการณ์แทรก)",
        explanation: "เมื่อมี 2 เหตุการณ์เกิดขึ้นในอดีตพร้อมกันหรือเหลื่อมล้ำกัน:\n• เหตุการณ์ที่ 'กำลังดำเนินอยู่เป็นฉากหลัง' (Long action): ใช้ Past Continuous (S + was/were + V.ing)\n• เหตุการณ์สั้น ๆ ที่ 'เกิดแทรกเข้ามาอย่างกะทันหัน' (Short interrupting action): ใช้ Past Simple (S + V.2)\n• คำเชื่อม: 'While / As' มักตามด้วย Past Continuous (เช่น While we were migrating the database, the network connection dropped.) / 'When' มักตามด้วย Past Simple (เช่น I was writing unit tests when the alarm sounded.)",
        pitfall: "❌ ผิดธรรมชาติ: 'While I tested, the server was crashing.' (สลับบทบาทกัน) / ✅ ถูกต้อง: 'While I was testing, the server crashed.'",
        proTip: "เทคนิคจำภาพ: แอ็กชันยาวที่ไหลเป็นสายน้ำใช้ was/were + V.ing ส่วนแอ็กชันที่ฟันฉับเข้ามาเหมือนฟ้าผ่าใช้ V.2"
      },
      {
        ruleName: "2. อดีตที่เกิดก่อนอีกอดีตหนึ่ง (Past Perfect: S + had + V.3)",
        explanation: "ใช้เมื่อมี 2 เหตุการณ์ในอดีตที่ไม่ได้เกิดพร้อมกัน แต่มีเหตุการณ์หนึ่ง 'เสร็จสิ้นสมบูรณ์ไปก่อน' อีกเหตุการณ์หนึ่ง:\n• เหตุการณ์ที่เกิดขึ้นก่อน (Earlier past event): ใช้ Past Perfect (S + had + V.3)\n• เหตุการณ์ที่เกิดขึ้นทีหลัง (Later past event): ใช้ Past Simple (S + V.2)\n• คำบอกเวลาคู่บารมี: By the time (เมื่อถึงเวลาที่...), Before, After, Already (เช่น By the time the DevOps engineer logged in, the monitoring system had already restarted the pods.)",
        pitfall: "❌ ผิดหลักการลำดับเวลา: 'By the time I arrived, the meeting started.' (ฟังดูเหมือนเพิ่งเริ่มตอนไปถึง) / ✅ ถ้าต้องการบอกว่าเริ่มไปก่อนแล้ว: 'By the time I arrived, the meeting had already started.'",
        proTip: "Past Perfect คือ 'อดีตของอดีต' ถ้ามีแค่เหตุการณ์เดียวในอดีต ห้ามใช้ had + V.3 ลอย ๆ เด็ดขาด ต้องมีเหตุการณ์ V.2 มาเปรียบเทียบเสมอ"
      },
      {
        ruleName: "3. กฎเหล็กของ Indirect Questions (การถามแบบสุภาพนุ่มนวล)",
        explanation: "การถามฝรั่งตรง ๆ แบบ 'Where is the file?' หรือ 'What do you want?' อาจฟังดูห้วนและคุกคามในบริบทการทำงาน มืออาชีพจึงขึ้นต้นด้วยคำนำหน้าที่สุภาพ แล้วตามด้วย 'โครงสร้างประโยคบอกเล่า (S + V)' ห้ามสลับกริยาหน้าประธานอีกเด็ดขาด:\n• ขึ้นต้น: Could you tell me... / Do you know... / I was wondering if...\n• ตามด้วย: Wh-word + S + V (ห้ามมี do/does/did และห้ามเอา is/am/are ขึ้นหน้าประธาน)\n• ตัวอย่าง: 'Where is the file?' -> 'Could you please tell me where the file is?' (สังเกต is ย้ายไปอยู่หลัง the file)",
        pitfall: "❌ ข้อสอบออกบ่อย & ผิดบ่อยที่สุด: 'Could you tell me where is the meeting room?' / ✅ ถูกต้อง 100%: 'Could you tell me where the meeting room is?'",
        proTip: "จำไว้เสมอ: เมื่อสุภาพตั้งแต่หัวประโยคแล้ว ไส้ในต้องคืนร่างเป็นประโยคบอกเล่าธรรมดาทันที"
      }
    ],

    // Structure Matrix
    comparisonTable: {
      headers: ["หัวข้อไวยากรณ์", "รูปแบบโดยตรง / พื้นฐาน", "รูปแบบระดับ B1+ (มืออาชีพ)", "จุดสังเกตสำคัญ"],
      rows: [
        {
          subject: "Interrupted Action",
          positive: "We deployed the code. The system crashed.",
          negative: "While we <span class='text-emerald-600 dark:text-emerald-400 font-bold'>were deploying</span> the code, the system <span class='text-amber-500 font-bold'>crashed</span>.",
          question: "<span class='text-indigo-600 dark:text-indigo-400 font-bold'>Were</span> you deploying when it crashed?",
          audioPositive: "While we were deploying the code, the system crashed.",
          audioNegative: "While we were deploying the code, the system crashed.",
          audioQuestion: "Were you deploying when it crashed?"
        },
        {
          subject: "Past Sequence",
          positive: "He left. Then the incident happened.",
          negative: "When the incident occurred, the lead <span class='text-emerald-600 dark:text-emerald-400 font-bold'>had already left</span>.",
          question: "<span class='text-indigo-600 dark:text-indigo-400 font-bold'>Had</span> he left before the alert fired?",
          audioPositive: "When the incident occurred, the lead had already left.",
          audioNegative: "When the incident occurred, the lead had already left.",
          audioQuestion: "Had he left before the alert fired?"
        },
        {
          subject: "Indirect Question",
          positive: "Where is the staging server?",
          negative: "Could you tell me where the staging server <span class='text-emerald-600 dark:text-emerald-400 font-bold'>is</span>?",
          question: "I was wondering if you <span class='text-indigo-600 dark:text-indigo-400 font-bold'>could help</span> me.",
          audioPositive: "Could you tell me where the staging server is?",
          audioNegative: "Could you tell me where the staging server is?",
          audioQuestion: "I was wondering if you could help me."
        }
      ]
    },

    // B. Advanced Sub-Rules & Exceptions
    advancedSubRules: [
      {
        title: "1. กฎการตอบคำถาม 'Would you mind + V.ing...?' (กับดักตรรกะที่คนไทยตอบผิดประจำ)",
        explanation: "คำว่า 'mind' แปลว่า 'รังเกียจ' หรือ 'ถือสา' ดังนั้นเมื่อฝรั่งถามว่า 'Would you mind reviewing my code?' (คุณจะรังเกียจไหมถ้าจะช่วยตรวจโค้ดให้ฉัน?):\n• ถ้าเรายินดีช่วย: ต้องตอบปฏิเสธความรังเกียจ เช่น 'No, not at all!' หรือ 'Not at all, I would be happy to!' หรือ 'Sure, no problem!'\n• ถ้าเราตอบว่า 'Yes!': จะแปลว่า 'ใช่ ฉันรังเกียจ / ฉันไม่ว่างช่วย' ทันที!\n• กริยาหลัง mind: ต้องเป็น Gerund (V.ing) เสมอ เช่น 'Would you mind opening the door?' (ห้ามใช้ to open)",
        examples: [
          { text: "Q: Would you mind checking this PR? -> A: Not at all! (ยินดีช่วยอย่างยิ่ง)", th: "ตอบ No แปลว่า ยินดีช่วย" }
        ]
      },
      {
        title: "2. กฎการละ Relative Pronoun (who, which, that) เมื่อทำหน้าที่เป็นกรรม",
        explanation: "เราสามารถละคำเชื่อม who, which, that ทิ้งได้ทันทีเมื่อคำนั้นทำหน้าที่เป็น 'กรรม' ของประโยคย่อย (มีประธานอีกตัวตามหลัง):\n• 'The microservice (that) we built last quarter is very stable.' (ละ that ได้ เพราะ we เป็นประธาน)\n• แต่ถ้า Relative Pronoun ทำหน้าที่เป็นประธานเอง ห้ามละเด็ดขาด:\n• 'The engineer who designed this database is on vacation.' (ห้ามละ who เพราะ who เป็นประธานของ designed)",
        examples: [
          { text: "The document (that) you asked for is attached.", th: "เอกสารที่คุณขอแนบมาให้แล้ว (ละ that ได้อย่างเป็นธรรมชาติ)" }
        ]
      }
    ],

    // C. Pronunciation & Accent Secrets
    pronunciationSecrets: [
      {
        rule: "1. การเชื่อมเสียงแบบ Assimilation ใน 'Could you' /kʊdʒuː/ และ 'Would you' /wʊdʒuː/",
        explanation: "เมื่อเสียงพยัญชนะ /d/ ที่ท้ายคำว่า Could หรือ Would มาชนกับเสียง /j/ ของคำว่า you ในการพูดด้วยความเร็วปกติ เสียงจะควบรวมกลายเป็นเสียง /dʒ/ (เสียง จ ควบ ด หรือ j):\n• 'Could you tell me...?' ออกเสียงว่า /kʊdʒuː ˈtel miː/ (คุจ-จู เทล มี)\n• 'Would you mind...?' ออกเสียงว่า /wʊdʒuː ˈmaɪnd/ (วุจ-จู ไมนด์)",
        phoneticExample: "Could you /kʊdʒuː/ | Would you /wʊdʒuː/",
        audio: "Could you tell me where it is? Would you mind helping me?"
      },
      {
        rule: "2. การออกเสียงสูง-ต่ำของ Indirect Questions (Intonation Flow)",
        explanation: "เนื่องจาก Indirect Question ขึ้นต้นด้วยกริยาช่วย (Could you... / Do you know...) ประโยคจึงยังคงสถานะเป็น Yes/No Question ในภาพรวม จึงต้องทอดเสียงขึ้นสูงเล็กน้อยที่ท้ายประโยค:\n• 'Could you tell me where the server is ↗?'",
        phoneticExample: "Do you know what time it starts ↗?",
        audio: "Could you tell me where the server is? Do you know what time it starts?"
      }
    ],

    // D. Common Thai-English Traps
    thaiEnglishTraps: [
      {
        wrong: "Could you tell me where is the database?",
        right: "Could you tell me where the database is?",
        literalThai: "คุณบอกฉันได้ไหมว่าฐานข้อมูลอยู่ที่ไหน (ชินกับการสลับ is ขึ้นหน้าประธานในประโยคคำถาม)",
        why: "ใน Indirect Question เมื่อมี 'Could you tell me' นำหน้าแล้ว ประโยคย่อยข้างหลังจะสูญเสียสถานะคำถามเดี่ยว กลายสภาพเป็น Noun Clause ซึ่งต้องเรียงตามโครงสร้างประธาน + กริยา (where the database is)"
      },
      {
        wrong: "Would you mind to explain this ticket?",
        right: "Would you mind explaining this ticket?",
        literalThai: "คุณจะรังเกียจไหมที่จะช่วยอธิบายใบงานนี้ (ใช้ to + V.1 หลัง mind)",
        why: "คำกริยา 'mind' จัดอยู่ในกลุ่มกริยาเฉพาะที่ต้องตามด้วย Gerund (V.ing) เสมอ ไม่สามารถใช้ Infinitive with to ได้"
      },
      {
        wrong: "The developer which created this tool is brilliant.",
        right: "The developer who created this tool is brilliant.",
        literalThai: "นักพัฒนาอันที่สร้างเครื่องมือนี้ฉลาดมาก (ใช้ which กับมนุษย์)",
        why: "'which' ใช้ขยายเฉพาะสิ่งของ สัตว์ หรือแนวคิดเท่านั้น เมื่อคำนามข้างหน้าเป็นมนุษย์ (The developer, colleague, manager) ต้องใช้ 'who' เสมอ"
      },
      {
        wrong: "While I worked, the power went out.",
        right: "While I was working, the power went out.",
        literalThai: "ในขณะที่ฉันทำงาน ไฟก็ดับ (ใช้ Past Simple หลัง While ในการกระทำที่ยาว)",
        why: "'While' สื่อถึงช่วงเวลาที่การกระทำกำลังดำเนินอยู่อย่างต่อเนื่องในอดีต (Background continuous action) จึงต้องใช้ Past Continuous (was working)"
      }
    ],

    // Key Examples
    keyExamples: [
      { en: "While the QA team was running regression tests, the pipeline failed unexpectedly.", th: "ในขณะที่ทีม QA กำลังรันการทดสอบระบบอยู่นั้น ไปป์ไลน์ก็ล้มเหลวลงอย่างไม่คาดคิด", note: "Past Continuous (was running) ถูกแทรกด้วย Past Simple (failed)" },
      { en: "By the time we noticed the memory spike, the service had already crashed.", th: "เมื่อถึงเวลาที่พวกเราสังเกตเห็นหน่วยความจำพุ่งสูง เซอร์วิสก็ได้ล่มไปก่อนหน้านั้นเรียบร้อยแล้ว", note: "Past Perfect (had already crashed) เกิดก่อน Past Simple (noticed)" },
      { en: "I was wondering if you could share the API documentation with me.", th: "ผมอยากจะขอรบกวนสอบถามว่าคุณพอจะสะดวกแชร์เอกสาร API ให้ผมหน่อยได้ไหมครับ", note: "Indirect request แบบสุภาพนุ่มนวลสูงสุดในการทำงาน" }
    ]
  },

  // =========================================================================
  // TAB 2: CHUNKS & VOCAB (เทคนิค Paraphrasing, Fillers ถ่วงเวลา, ศัพท์)
  // =========================================================================
  chunksAndVocab: {
    chunks: [
      { chunk: "Well, let me see...", th: "เอ่อ... ขอผมดู/คิดสักครู่นะครับ (Filler ถ่วงเวลาคิดอย่างเป็นธรรมชาติ)", example: "Well, let me see... I believe the release is scheduled for Thursday." },
      { chunk: "What I mean is...", th: "สิ่งที่ผมต้องการจะสื่อก็คือ... (ใช้เมื่อต้องการอธิบายความให้ชัดเจนขึ้น)", example: "What I mean is, we need to balance performance and developer velocity." },
      { chunk: "It's a feature that we use to...", th: "มันคือฟีเจอร์ที่เราใช้ในการ... (เทคนิค Paraphrasing เมื่อนึกคำศัพท์ไม่ออก)", example: "It's a tool that we use to inspect real-time network packets." },
      { chunk: "It's essentially the opposite of...", th: "จริง ๆ แล้วมันตรงกันข้ามกับ... (เทคนิคอธิบายเปรียบเทียบ)", example: "Asynchronous is essentially the opposite of synchronous processing." },
      { chunk: "Would you mind if I took a look?", th: "คุณจะว่าอะไรไหมถ้าผมขอเข้าไปดูหน่อย?", example: "Would you mind if I took a quick look at your local configuration?" },
      { chunk: "Could you walk me through this?", th: "ช่วยอธิบายขั้นตอนของสิ่งนี้ให้ผมฟังทีละสเต็ปได้ไหม?", example: "Could you walk me through how this caching mechanism functions?" }
    ],

    industryTechChunks: [
      { chunk: "By the time we deployed, the bug had been fixed.", th: "เมื่อถึงตอนที่เราติดตั้งระบบ บั๊กก็ได้รับการแก้ไขเสร็จไปก่อนแล้ว", context: "Release Lifecycle", example: "By the time we deployed to staging, the bug had been fixed." },
      { chunk: "Could you clarify what you mean by latency?", th: "คุณช่วยขยายความคำว่าความหน่วงที่คุณพูดถึงได้ไหมครับ?", context: "Technical Clarification", example: "Could you clarify what you mean by latency degradation?" },
      { chunk: "I was wondering if we could postpone the release.", th: "ผมอยากปรึกษาว่าเราพอจะเลื่อนวันปล่อยระบบออกไปได้ไหมครับ", context: "Schedule Negotiation", example: "I was wondering if we could postpone the release by two days." },
      { chunk: "The colleague who maintains this repository is away.", th: "เพื่อนร่วมงานที่ดูแลคลังโค้ดนี้ไม่อยู่ในออฟฟิศ", context: "Team Coordination", example: "The colleague who maintains this microservice is currently on leave." }
    ],

    essentialVocab: [
      { word: "clarify", ipa: "/ˈkler.ə.faɪ/", pos: "v.", th: "อธิบายให้เกิดความชัดเจน, ขยายความ", example: "Could you please clarify the third requirement?" },
      { word: "paraphrase", ipa: "/ˈper.ə.freɪz/", pos: "v./n.", th: "การอธิบายความโดยใช้คำพูดอื่นที่เข้าใจง่ายกว่า", example: "If you forget the term, just paraphrase it." },
      { word: "substitute", ipa: "/ˈsʌb.stə.tuːt/", pos: "n./v.", th: "ตัวแทน, ใช้แทนที่", example: "Redis is often used as a substitute for Memcached." },
      { word: "synchronize", ipa: "/ˈsɪŋ.krə.naɪz/", pos: "v.", th: "ทำให้ทำงานสอดคล้องประสานเวลาตรงกัน", example: "The databases synchronize every five seconds." }
    ],

    verbForms: [
      { v1: "clarify", v2: "clarified", v3: "clarified", th: "ขยายความให้ชัดเจน", example: "She clarified the business logic." },
      { v1: "interrupt", v2: "interrupted", v3: "interrupted", th: "ขัดจังหวะ, แทรกแซง", example: "The alarm interrupted our deployment." },
      { v1: "postpone", v2: "postponed", v3: "postponed", th: "เลื่อนเวลาออกไป", example: "We postponed the release." },
      { v1: "maintain", v2: "maintained", v3: "maintained", th: "ดูแลรักษา, บำรุงระบบ", example: "They maintained the legacy cluster." }
    ]
  },

  // =========================================================================
  // TAB 3: REAL-LIFE DIALOGUE (บทสนทนาสถานการณ์จริง + เหตุผลเบื้องหลัง Tense)
  // =========================================================================
  realLifeDialogue: {
    scenario: "Cross-Functional Architecture Review: Asking Polite Questions & Paraphrasing",
    scenarioTh: "สถานการณ์: การประชุมทบทวนสถาปัตยกรรมระบบข้ามสายงาน โดยใช้การถามอย่างสุภาพและเทคนิค Paraphrasing",
    grammarRationale: "วิเคราะห์การใช้ Tenses: ใช้ Past Continuous + Past Simple เมื่อเล่าสิ่งที่กำลังทำอยู่แล้วถูกขัดจังหวะ ('While I was profiling the app, I noticed...'), ใช้ Past Perfect เมื่อระบุสิ่งที่เสร็จไปก่อนหน้า ('had already updated'), และใช้ Indirect Questions เพื่อถามข้อสงสัยอย่างมืออาชีพ ('Could you tell me how this service handles...')",
    turns: [
      {
        speaker: "QA Lead",
        side: "left",
        avatar: "👩‍🔬",
        name: "Elena (Senior QA Automation)",
        en: "Hi David! I was wondering if you had five minutes to help me understand the new payment flow?",
        th: "สวัสดีค่ะเดวิด! พอดีฉันอยากรบกวนสอบถามว่าคุณพอมีเวลาสัก 5 นาทีช่วยอธิบายขั้นตอนการชำระเงินแบบใหม่ให้ฉันฟังหน่อยได้ไหมคะ?",
        tenseRationale: "Indirect Request (I was wondering if...): ใช้ Past tense แสดงความสุภาพและลดความกดดันต่อคู่สนทนา"
      },
      {
        speaker: "Architect",
        side: "right",
        avatar: "👨‍💻",
        name: "David (Solutions Architect)",
        en: "Sure, Elena! Not at all. What specific part would you like to walk through?",
        th: "ยินดีเลยครับเอเลน่า ไม่ได้รบกวนเลยครับ มีส่วนไหนเป็นพิเศษที่คุณอยากให้ผมไล่เรียงให้ฟังไหมครับ?",
        tenseRationale: "Not at all: การตอบรับคำขอร้องอย่างสุภาพว่า ยินดีช่วยอย่างยิ่ง"
      },
      {
        speaker: "QA Lead",
        side: "left",
        avatar: "👩‍🔬",
        name: "Elena (Senior QA Automation)",
        en: "Could you tell me where the customer session is stored when the user switches devices?",
        th: "คุณพอจะบอกฉันได้ไหมคะว่าเซสชันของลูกค้าถูกเก็บไว้ที่ไหนเมื่อผู้ใช้สลับเครื่องใช้งาน?",
        tenseRationale: "Indirect Question (where the customer session is stored): ใช้โครงสร้างประโยคบอกเล่า S + V ห้ามสลับ is ขึ้นหน้า"
      },
      {
        speaker: "Architect",
        side: "right",
        avatar: "👨‍💻",
        name: "David (Solutions Architect)",
        en: "Well, let me see... It uses a distributed cache. It is a tool that we use to keep sessions synchronized across regions.",
        th: "เอ่อ... ขอผมดูสักครู่นะครับ ระบบใช้ Distributed Cache ครับ มันคือเครื่องมือที่เราใช้ซิงก์ข้อมูลเซสชันให้ตรงกันข้ามทวีปครับ",
        tenseRationale: "Filler (Well, let me see) + Paraphrasing (It is a tool that we use to...): เทคนิคอธิบายความขยายความด้วย Relative Clause"
      },
      {
        speaker: "QA Lead",
        side: "left",
        avatar: "👩‍🔬",
        name: "Elena (Senior QA Automation)",
        en: "Ah! While I was stress-testing yesterday, I noticed a sudden drop. Had you already deployed the fallback route before 4 PM?",
        th: "อ๋อ เข้าใจแล้วค่ะ! เมื่อวานนี้ในขณะที่ฉันกำลังรันการทดสอบโหลดหนักอยู่นั้น ฉันสังเกตเห็นข้อมูลหล่นหาย คุณได้ติดตั้งเส้นทางสำรองไว้ก่อน 4 โมงเย็นหรือยังคะ?",
        tenseRationale: "Past Continuous (While I was stress-testing) + Past Perfect question (Had you already deployed before 4 PM)"
      },
      {
        speaker: "Architect",
        side: "right",
        avatar: "👨‍💻",
        name: "David (Solutions Architect)",
        en: "Yes! By the time your automated test began, the DevOps team had already configured the redundant fallback.",
        th: "ติดตั้งเรียบร้อยแล้วครับ! เมื่อถึงเวลาที่การทดสอบอัตโนมัติของคุณเริ่มต้นขึ้น ทีม DevOps ก็ได้ตั้งค่าระบบสำรองเผื่อเหนียวไว้เสร็จก่อนหน้านั้นแล้วครับ",
        tenseRationale: "By the time + Past Simple (began), Past Perfect (had already configured): อดีตที่เสร็จสิ้นสมบูรณ์ไปก่อนหน้า"
      }
    ]
  },

  // =========================================================================
  // TAB 4: ACTION DRILL & DETAILED QUIZ (ภารกิจพูด + แบบทดสอบ 5 ข้อพร้อมเฉลย)
  // =========================================================================
  actionDrillAndQuiz: {
    dailyMission: {
      title: "ภารกิจถามอย่างสุภาพและอธิบายอ้อม ๆ (Communicator Speaking Drill)",
      instruction: "ฝึกพูดประโยค Indirect Question สุภาพ + เทคนิค Paraphrasing อธิบายลักษณะฟีเจอร์โดยไม่ต้องเอ่ยคำศัพท์เทคนิคยาก ๆ:",
      targetPhrase: "Could you tell me where the file is? It is a tool that we use to automate cloud deployments.",
      targetTh: "คุณช่วยบอกฉันได้ไหมว่าไฟล์นั้นอยู่ที่ไหน? มันคือเครื่องมือที่เราใช้ในการติดตั้งระบบคลาวด์อัตโนมัติน่ะ",
      tip: "สังเกตความแตกต่าง: where the file is (is อยู่หลัง the file ห้ามสลับ) และ that we use to (Relative Clause ขยายเครื่องมือ)"
    },

    quizQuestions: [
      {
        id: "q-4-1",
        question: "หากต้องการเปลี่ยนประโยคคำถาม 'Where does the lead store the deployment keys?' ให้เป็น Indirect Question ที่สุภาพ ข้อใดถูกต้องตามหลักไวยากรณ์?",
        options: [
          "Could you tell me where does the lead store the deployment keys?",
          "Could you tell me where the lead stores the deployment keys?",
          "Could you tell me where is the lead storing the deployment keys?",
          "Could you tell me where the lead store the deployment keys?"
        ],
        answer: 1,
        explanation: "ถูกต้องอย่างยิ่ง! เมื่อเปลี่ยนเป็น Indirect Question โครงสร้างประโยคย่อยจะต้องคืนรูปเป็นประโยคบอกเล่า (S + V) โดยตัดกริยาช่วย 'does' ออกไป และผันกริยาหลักตามประธานเอกพจน์ 'the lead' เป็น 'stores' กลายเป็น 'Could you tell me where the lead stores the deployment keys?'"
      },
      {
        id: "q-4-2",
        question: "เติมคำในช่องว่างให้ถูกต้อง: 'While the team _____ the network traffic, the main database connection dropped.'",
        options: [
          "monitored",
          "was monitoring",
          "has monitored",
          "had monitored"
        ],
        answer: 1,
        explanation: "ถูกต้อง! อนุประโยคที่ตามหลัง 'While' มักเป็นเหตุการณ์ที่กำลังดำเนินอยู่อย่างต่อเนื่องในอดีต (Continuous Background Action) ซึ่งถูกขัดจังหวะด้วยการกระทำสั้น ๆ (dropped) ดังนั้นจึงต้องใช้ Past Continuous คือ 'was monitoring'"
      },
      {
        id: "q-4-3",
        question: "ประโยคที่แสดงลำดับเหตุการณ์ในอดีตข้อใดถูกต้องตามกฎของ Past Perfect?",
        options: [
          "By the time the security auditor arrived, the hacker already deleted the logs.",
          "By the time the security auditor arrived, the hacker had already deleted the logs.",
          "By the time the security auditor had arrived, the hacker deleted the logs.",
          "By the time the security auditor arrives, the hacker had deleted the logs."
        ],
        answer: 1,
        explanation: "ถูกต้อง! เมื่อใช้สำนวนบอกเวลา 'By the time + Past Simple' (เมื่อถึงเวลาที่ผู้ตรวจสอบมาถึง) เหตุการณ์ที่เกิดขึ้นและเสร็จสิ้นไปก่อนหน้านั้น (แฮกเกอร์ลบประวัติไปก่อนแล้ว) จะต้องใช้ Past Perfect คือ 'had already deleted'"
      },
      {
        id: "q-4-4",
        question: "หัวหน้างานถามคุณว่า: 'Would you mind reviewing the sprint documentation?' หากคุณ 'ยินดีและพร้อมช่วยเหลืออย่างยิ่ง' ข้อใดคือการตอบที่ถูกต้องตามธรรมเนียมสากล?",
        options: [
          "Yes, I would mind it.",
          "Yes, I will review it right now.",
          "Not at all! I would be glad to help.",
          "Yes, of course I mind."
        ],
        answer: 2,
        explanation: "ถูกต้อง! คำว่า 'mind' แปลว่า 'รังเกียจ/ถือสา' เมื่อฝรั่งถามว่า Would you mind...? หากเรายินดีทำให้ ต้องตอบปฏิเสธว่า 'Not at all!' (ไม่รังเกียจเลยแม้แต่น้อย / ยินดีทำให้อย่างยิ่ง) หากตอบ 'Yes' จะกลายเป็นการบอกว่าเรารังเกียจและไม่อยากทำ"
      },
      {
        id: "q-4-5",
        question: "เติม Relative Pronoun ลงในช่องว่าง: 'The senior software architect _____ designed this distributed caching layer has just received an award.'",
        options: [
          "which",
          "who",
          "where",
          "whose"
        ],
        answer: 1,
        explanation: "ถูกต้อง! คำนามข้างหน้าคือ 'The senior software architect' (บุคคล/มนุษย์) และทำหน้าที่เป็นประธานของกริยา 'designed' ในประโยคย่อย ดังนั้น Relative Pronoun ที่ต้องใช้เชื่อมจึงเป็น 'who' เท่านั้น (which ใช้กับสิ่งของ, where ใช้กับสถานที่, whose ใช้แสดงความเป็นเจ้าของ)"
      },
      {
        id: "q-4-6",
        question: "โครงสร้างแสดงความเสียดายในอดีต (Past Regret: should have + V3): 'The deployment failed because we skipped integration tests. We _____ them before releasing to production.'",
        options: [
          "should have run",
          "should run",
          "must have run",
          "could run"
        ],
        answer: 0,
        explanation: "ถูกต้อง! 'should have + V3' ใช้พูดถึงสิ่งที่ 'ควรจะทำในอดีต แต่ความจริงไม่ได้ทำ' เพื่อถอดบทเรียน (Post-mortem lesson) โดย V3 ของ run คือ run (run ➔ ran ➔ run) จึงได้ 'should have run'"
      },
      {
        id: "q-4-7",
        question: "เปลี่ยนประโยค Yes/No Question 'Does the new API endpoint support rate limiting?' ให้เป็น Indirect Question ที่นุ่มนวลและสุภาพ:",
        options: [
          "I was wondering does the new API endpoint support rate limiting.",
          "I was wondering whether the new API endpoint supports rate limiting.",
          "I was wondering if supports the new API endpoint rate limiting.",
          "I was wondering that the new API endpoint supported rate limiting."
        ],
        answer: 1,
        explanation: "ถูกต้อง! เมื่อเปลี่ยน Yes/No Question เป็น Indirect Question ต้องเชื่อมด้วย 'whether' หรือ 'if' ตามด้วยโครงสร้างประโยคบอกเล่า (S + V) ตัด does ทิ้ง และผันกริยาตามประธานเอกพจน์เป็น 'supports'"
      },
      {
        id: "q-4-8",
        question: "เลือกโครงสร้างเหตุการณ์คู่ขนานที่ถูกแทรกแซงในอดีต: 'The server ran out of memory _____ the batch worker _____ the 10GB payload.'",
        options: [
          "while / was processing",
          "when / processed",
          "during / processes",
          "since / has processed"
        ],
        answer: 0,
        explanation: "ถูกต้อง! เหตุการณ์ที่กำลังดำเนินอยู่อย่างต่อเนื่องในอดีต (Background action) ใช้ Past Continuous 'was processing' นำหน้าด้วย 'while' และเหตุการณ์ที่เข้ามาแทรกแซงสั้น ๆ ใช้ Past Simple 'ran out'"
      },
      {
        id: "q-4-9",
        question: "จัดลำดับกาลเวลาในอดีตด้วย Past Perfect: 'By the time the DevOps on-call engineer received the alert, the cluster _____ automatically.'",
        options: [
          "had recovered",
          "recovered",
          "has recovered",
          "recovers"
        ],
        answer: 0,
        explanation: "ถูกต้อง! สำนวน 'By the time + Past Simple' (เมื่อถึงเวลาที่วิศวกรได้รับแจ้งเตือน) เหตุการณ์ที่คลัสเตอร์ฟื้นตัวกลับมาได้ก่อนหน้านั้นเสร็จสิ้นเรียบร้อยแล้ว ต้องใช้ Past Perfect คือ 'had recovered'"
      },
      {
        id: "q-4-10",
        question: "หากเพื่อนร่วมทีมหรือ Stakeholder เข้าใจประเด็นที่คุณอธิบายคลาดเคลื่อน ประโยคในข้อใดช่วย Paraphrase แก้ไขความเข้าใจได้อย่างมืออาชีพและสุภาพที่สุด?",
        options: [
          "You completely misunderstood what I said.",
          "That's not quite what I meant. Let me rephrase that another way to make it clearer.",
          "Listen to me carefully this time.",
          "Why is this so difficult for everyone to understand?"
        ],
        answer: 1,
        explanation: "ถูกต้อง! วัฒนธรรมการสื่อสารระดับสากลจะไม่กล่าวโทษคู่สนทนาตรง ๆ แต่จะใช้สำนวนการจัดรูปประโยคใหม่ (Paraphrasing & Softening) เช่น 'That's not quite what I meant. Let me rephrase that...'"
      },
      {
        id: "q-4-11",
        question: "เลือก Relative Pronoun แสดงความเป็นเจ้าของ (Possessive): 'We are integrating with an external vendor _____ API rate limits are extremely strict.'",
        options: [
          "whose",
          "which",
          "whom",
          "that its"
        ],
        answer: 0,
        explanation: "ถูกต้อง! 'whose' ใช้เชื่อมคำนามเพื่อแสดงความเป็นเจ้าของ (Possessive Relative Pronoun) ในที่นี้หมายถึง 'vendor ผู้ซึ่งมี API rate limits ที่เข้มงวดมาก' (whose + noun)"
      },
      {
        id: "q-4-12",
        question: "โครงสร้างการคาดคะเนข้อเท็จจริงในอดีตด้วยหลักฐานแน่นหนา (Past Deduction: must have + V3): 'All 502 errors ceased immediately after reverting the release container. The latest commit _____ the culprit.'",
        options: [
          "must have been",
          "should be",
          "can be",
          "might be"
        ],
        answer: 0,
        explanation: "ถูกต้อง! เมื่อมีหลักฐานชัดเจนว่าพอ Rollback ปุ๊บแล้วระบบหายพังทันที การสรุปด้วยความมั่นใจ 95%+ ว่าต้นเหตุต้องเป็น commit ล่าสุดแน่นอน ต้องใช้ 'must have been' (ต้องเป็นอย่างนั้นแน่ ๆ ในอดีต)"
      },
      {
        id: "q-4-13",
        question: "ข้อใดเรียงลำดับคำในประโยคคำถามซ้อน (Embedded Question) ได้ถูกต้องตามมาตรฐานไวยากรณ์?",
        options: [
          "Do you happen to know what time is the architectural review meeting?",
          "Do you happen to know what time the architectural review meeting is?",
          "Do you happen to know what is the architectural review meeting time?",
          "Do you happen to know when does the architectural review meeting start is?"
        ],
        answer: 1,
        explanation: "ถูกต้อง! ใน Indirect/Embedded Question ลำดับคำในอนุประโยคคำถามย่อยจะต้องเรียงเป็น 'Wh-phrase + Subject + Verb' เสมือนประโยคบอกเล่า ดังนั้น Verb to be (is) จึงต้องอยู่ท้ายประธาน เป็น 'what time the meeting is'"
      },
      {
        id: "q-4-14",
        question: "เลือกคำเชื่อมแสดงความแตกต่างเชิงเปรียบเทียบระหว่าง 2 ระบบ: 'Relational databases enforce strict predefined schemas, _____ document stores provide flexible unstructured schemas.'",
        options: [
          "whereas",
          "despite",
          "in spite of",
          "therefore"
        ],
        answer: 0,
        explanation: "ถูกต้อง! 'whereas' (หรือ 'while') เป็นคำเชื่อมสองอนุประโยค (Conjunction) ที่ใช้เปรียบเทียบความแตกต่างตรงข้ามระหว่างสองสิ่งอย่างเป็นทางการ (ในขณะที่...)"
      },
      {
        id: "q-4-15",
        question: "ผู้บริหารหรือลูกค้าขอแทรกฟีเจอร์ใหญ่กลาง Sprint กะทันหัน ข้อใดคือประโยคปฏิเสธและต่อรองอย่างมืออาชีพตามหลัก Agile Communication?",
        options: [
          "No, we don't accept changes mid-sprint. It violates Scrum rules.",
          "I completely understand the value of this feature. Given our committed sprint capacity, let's backlog it and size it together during next Monday's planning session.",
          "Ask the Product Owner, it's not my responsibility.",
          "We can try, but the whole production system will probably crash."
        ],
        answer: 1,
        explanation: "ถูกต้อง! นี่คือศิลปะการสื่อสารระดับสากล (Assertive yet Collaborative): รับฟังคุณค่าของคำขอ (acknowledge value) ชี้แจงข้อจำกัดเชิงระบบ (capacity commitment) และเสนอแนวทางออกที่สร้างสรรค์ (size it in next sprint planning)"
      }
    ]
  }
};
