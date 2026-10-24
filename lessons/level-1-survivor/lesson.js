/**
 * EngMastery: Level 1 - The Survivor (CEFR A1)
 * File: lessons/level-1-survivor/lesson.js
 * Curriculum: Present Simple & Present Continuous (Verb to be vs Action Verbs & Stative Verbs)
 * Designed by: Senior Instructional Designer & Senior Linguist
 */
window.LESSON_1_SURVIVOR = {
  id: "level-1-survivor",
  level: "A1",
  levelTitle: "Level 1: The Survivor (CEFR A1)",
  levelSub: "ปูรากฐานมั่นคง: แยกแยะ Verb to Be กับ Action Verb, กฎ Present Simple VS Present Continuous และการตั้งคำถามในชีวิตประจำวัน",
  badgeColor: {
    bg: "bg-emerald-100 dark:bg-emerald-950/60",
    text: "text-emerald-700 dark:text-emerald-300",
    border: "border-emerald-300 dark:border-emerald-800"
  },
  cefrColor: "emerald",
  estimatedTime: "30 นาที",
  xpReward: 120,

  // =========================================================================
  // TAB 1: CORE GRAMMAR (หลักการ, กฎเหล็ก, ข้อยกเว้น, การออกเสียง, กับดักแปล)
  // =========================================================================
  coreGrammar: {
    title: "ไวยากรณ์หลัก: Present Simple & Present Continuous (Be vs Action & Stative Verbs)",
    summary: "รากฐานที่สำคัญที่สุดของภาษาอังกฤษ: แยกแยะให้ออกว่าประโยคกำลัง 'บอกสถานะ/สภาวะ', 'บอกกิจวัตรความจริง', หรือ 'บอกสิ่งที่กำลังเกิดขึ้นชั่วคราว'",
    
    // A. Conceptual Core & Rules
    rules: [
      {
        ruleName: "1. โครงสร้างบอกสถานะ สภาพ หรือตำแหน่ง (Verb to Be: is / am / are)",
        explanation: "ใช้เมื่อประโยคไม่มีการกระทำจริง แต่ต้องการบอกว่า 'ประธานเป็นใคร (Noun)', 'รู้สึกอย่างไร/มีลักษณะอย่างไร (Adjective)', หรือ 'อยู่ที่ไหน (Prepositional Phrase)':\n• ประโยคบอกเล่า (+): S + is/am/are + Complement (เช่น I am ready. / The system is offline.)\n• ประโยคปฏิเสธ (-): เติม not หลัง Verb to be (เช่น I am not ready. / The system is not offline.)\n• ประโยคคำถาม (?): สลับ Is, Am, Are ขึ้นหน้าประธาน (เช่น Are you ready? / Is the system offline?)",
        pitfall: "❌ ผิดร้ายแรง: 'Are you agree with me?' (เพราะ agree เป็นกริยาแท้ ไม่ใช่ Adjective) / ✅ ถูกต้อง: 'Do you agree with me?'",
        proTip: "เทคนิคจำแม่น: สังเกตคำตามหลัง ถ้าเป็นคำบอกสภาพ (ready, busy, happy, late, available) ให้ใช้ Verb to Be เสมอ"
      },
      {
        ruleName: "2. โครงสร้างบอกกิจวัตร ความจริง และข้อเท็จจริง (Present Simple: Action Verbs)",
        explanation: "ใช้กับการกระทำที่เกิดขึ้นซ้ำ ๆ เป็นนิสัย (Routines), งานประจำวัน, หรือความจริงทางธรรมชาติ:\n• ประโยคบอกเล่า (+): ประธานพหูพจน์ (I, You, We, They) ใช้ V1 รูปเดิม / ประธานเอกพจน์ (He, She, It) กริยาต้องผันเติม -s หรือ -es (เช่น She runs the report daily.)\n• ประโยคปฏิเสธ (-): ใช้ don't หรือ doesn't + V1 รูปเดิมไม่ผัน (เช่น He doesn't work here.)\n• ประโยคคำถาม (?): นำ Do หรือ Does มาช่วยวางหน้าประธาน แล้วตามด้วย V1 ไม่ผัน (เช่น Do you use this tool? / Does it work?)",
        pitfall: "❌ ผิด 100%: 'I am work at Google.' หรือ 'He is work here.' / ✅ ถูกต้อง: 'I work at Google.' หรือ 'He works here.' (ห้ามใส่ is/am ชนกับ Action Verb เด็ดขาด)",
        proTip: "เมื่อมี Do, Does, Don't, Doesn't มาช่วยแล้ว ตัวกริยาหลักด้านหลังจะถูก 'ปลดการผัน' กลับไปเป็นรูปต้นฉบับ (Infinitive without to) เสมอ"
      },
      {
        ruleName: "3. โครงสร้างสิ่งที่กำลังทำอยู่ ณ วินาทีนี้ หรือสถานการณ์ชั่วคราว (Present Continuous)",
        explanation: "ใช้เมื่อเหตุการณ์กำลังดำเนินอยู่ขณะพูด (Right now, At the moment) หรือเป็นโปรเจกต์ระยะสั้นชั่วคราว (These days, Currently):\n• โครงสร้าง: S + is/am/are + V.ing (เช่น We are fixing the issue right now.)\n• ปฏิเสธ: S + is/am/are + not + V.ing (เช่น They are not deploying today.)\n• คำถาม: Is/Am/Are + S + V.ing? (เช่น Are you downloading the update?)",
        pitfall: "❌ ผิดประจำ: ลืม Verb to be เช่น 'I working now.' หรือใส่ V1 ซ้ำซ้อน เช่น 'I am work now.' / ✅ ถูกต้อง: 'I am working now.'",
        proTip: "Present Continuous ต้องมีทั้ง 'Verb to be' และ 'V.ing' เสมือนตะเกียบคู่กัน ขาดตัวใดตัวหนึ่งไม่ได้"
      }
    ],

    // Structure Matrix
    comparisonTable: {
      headers: ["ประเภทโครงสร้าง", "บอกเล่า (+)", "ปฏิเสธ (-)", "คำถาม (?)"],
      rows: [
        {
          subject: "Verb to Be (สถานะ)",
          positive: "The server <span class='text-emerald-600 dark:text-emerald-400 font-bold'>is</span> active.",
          negative: "The server <span class='text-red-500 font-bold'>is not</span> active.",
          question: "<span class='text-amber-500 font-bold'>Is</span> the server active?",
          audioPositive: "The server is active.",
          audioNegative: "The server is not active.",
          audioQuestion: "Is the server active?"
        },
        {
          subject: "Present Simple (กิจวัตร)",
          positive: "She <span class='text-emerald-600 dark:text-emerald-400 font-bold'>tests</span> the code every morning.",
          negative: "She <span class='text-red-500 font-bold'>doesn't test</span> the code today.",
          question: "<span class='text-amber-500 font-bold'>Does</span> she <span class='text-amber-500 font-bold'>test</span> the code every morning?",
          audioPositive: "She tests the code every morning.",
          audioNegative: "She doesn't test the code today.",
          audioQuestion: "Does she test the code every morning?"
        },
        {
          subject: "Present Continuous (กำลังทำ)",
          positive: "We <span class='text-emerald-600 dark:text-emerald-400 font-bold'>are resolving</span> the bug right now.",
          negative: "We <span class='text-red-500 font-bold'>are not resolving</span> the bug yet.",
          question: "<span class='text-amber-500 font-bold'>Are</span> you <span class='text-amber-500 font-bold'>resolving</span> the bug right now?",
          audioPositive: "We are resolving the bug right now.",
          audioNegative: "We are not resolving the bug yet.",
          audioQuestion: "Are you resolving the bug right now?"
        }
      ]
    },

    // B. Advanced Sub-Rules & Exceptions
    advancedSubRules: [
      {
        title: "1. กฎเหล็กของ Stative Verbs (กริยาบอกสภาวะที่ 'ห้ามเติม -ing' เด็ดขาด)",
        explanation: "คำกริยาที่แสดงสภาวะจิตใจ ความรู้สึก การรับรู้ ความเป็นเจ้าของ หรือความเข้าใจ ไม่สามารถใช้ในรูป Continuous ได้ แม้จะกำลังเกิดขึ้น ณ วินาทีนี้ก็ตาม ต้องใช้ Present Simple เสมอ:\n• กลุ่มความรู้สึก/ต้องการ: want, need, prefer, like, love, hate\n• กลุ่มความคิด/ความเข้าใจ: understand, know, believe, think (ความเห็น), remember, agree, disagree\n• กลุ่มประสาทสัมผัส: hear, see, smell, taste (สภาวะ)\n• กลุ่มความเป็นเจ้าของ/การมีอยู่: belong to, own, have (มีความหมายว่าครอบครอง), exist",
        examples: [
          { text: "❌ I am understanding the problem. -> ✅ I understand the problem.", th: "ฉันเข้าใจปัญหานี้แล้ว (เข้าใจเป็นสภาวะทางสมอง ไม่ใช่การออกแรงกระทำ)" },
          { text: "❌ He is needing your approval. -> ✅ He needs your approval.", th: "เขาต้องการการอนุมัติจากคุณ" },
          { text: "❌ Are you having a laptop? -> ✅ Do you have a laptop?", th: "คุณมีแล็ปท็อปไหม? (have แปลว่ามีในแง่ครอบครอง ห้าม -ing)" }
        ]
      },
      {
        title: "2. กฎการผันกริยาเอกพจน์บุรุษที่ 3 (-s / -es) และการเบิ้ลอักษรใน -ing",
        explanation: "• เติม -es: เมื่อคำกริยาลงท้ายด้วย -s, -ss, -sh, -ch, -x, -z, หรือ -o (เช่น passes, washes, watches, fixes, goes, does)\n• หน้า -y เป็นพยัญชนะ: เปลี่ยน y เป็น i แล้วเติม -es (เช่น fly -> flies, study -> studies) แต่ถ้าหน้า y เป็นสระ เติม -s ปกติ (เช่น play -> plays)\n• การเบิ้ลตัวสะกดก่อนเติม -ing: คำ 1 พยางค์ สระเสียงสั้น 1 ตัว พยัญชนะสะกด 1 ตัว (สูตร CVC) ให้เบิ้ลพยัญชนะท้าย 1 ตัว (เช่น run -> running, stop -> stopping, plan -> planning)",
        examples: [
          { text: "fix -> fixes, watch -> watches, run -> running", th: "ผันตามสูตรโฟเนติกส์เพื่อให้ออกเสียงได้สะดวก" }
        ]
      }
    ],

    // C. Pronunciation & Accent Secrets
    pronunciationSecrets: [
      {
        rule: "1. กฎการออกเสียงท้ายคำ -s / -es (3 เสียงมาตรฐานสากล)",
        explanation: "การออกเสียง -s ตอนท้ายไม่ใช่แค่เสียง 'ส' เสมอไป:\n1. เสียง /s/ (ไร้เสียงกังวาน): หลังเสียงพยัญชนะไม่ก้อง (p, t, k, f, θ) เช่น works /wɜːrks/, stops /stɑːps/\n2. เสียง /z/ (เสียงสั่นในลำคอ): หลังเสียงก้อง (b, d, g, v, m, n, l, r) และสระทุกตัว เช่น runs /rʌnz/, plays /pleɪz/, reads /riːdz/\n3. เสียง /ɪz/ (เพิ่มพยางค์): หลังเสียงเสียดสี s, z, ʃ, tʃ, dʒ เช่น fixes /ˈfɪk.sɪz/, watches /ˈwɑː.tʃɪz/",
        phoneticExample: "works /wɜːrks/ VS reads /riːdz/ VS watches /ˈwɑː.tʃɪz/",
        audio: "works, reads, watches"
      },
      {
        rule: "2. การเชื่อมเสียงพยัญชนะกับสระ (Consonant-to-Vowel Linking)",
        explanation: "เจ้าของภาษาไม่ออกเสียงทีละคำ แต่จะรวบเสียงท้ายของคำหน้า เข้ากับเสียงสระของคำถัดไป:\n• 'Is it...?' ฟังเป็น /ɪ-zɪt/ (อิซ-ซิท)\n• 'Does he...?' เสียง h มักถูกละ กลายเป็น /dʌ-zi/ (ดัซ-ซี)\n• 'There is a problem.' ฟังเป็น /ðer-ɪ-zə-prɑː.bləm/",
        phoneticExample: "Is it ready? -> /ɪ-zɪt ˈre.di/ | Does he know? -> /ˈdʌ-zi noʊ/",
        audio: "Is it ready? Does he know? There is a problem."
      }
    ],

    // D. Common Thai-English Traps
    thaiEnglishTraps: [
      {
        wrong: "Are you agree?",
        right: "Do you agree?",
        literalThai: "คุณเห็นด้วยไหม? (คนไทยนึกว่า agree เป็นคำคุณศัพท์)",
        why: "'agree' เป็น Action Verb (กริยาแท้) ประโยคคำถามปัจจุบันจึงต้องใช้กริยาช่วย 'Do/Does' เท่านั้น ห้ามนำ Verb to be มาประกบ"
      },
      {
        wrong: "Have a meeting at 2 PM.",
        right: "There is a meeting at 2 PM. / We have a meeting at 2 PM.",
        literalThai: "มีประชุมบ่ายสอง (แปลตรงตัวจากคำว่า 'มี' ขึ้นต้นประโยค)",
        why: "ในภาษาอังกฤษ กริยา 'Have' ต้องมีประธานที่เป็นผู้ครอบครองเสมอ หากต้องการบอกการมีอยู่ของสิ่งของหรือเหตุการณ์ ให้ขึ้นต้นด้วย 'There is / There are'"
      },
      {
        wrong: "I am very like this project.",
        right: "I really like this project. / I like this project very much.",
        literalThai: "ฉันชอบโปรเจกต์นี้มากๆ (เอา very มาขยายกริยา like ตรงๆ)",
        why: "'very' เป็น Adverb ที่ใช้ขยาย Adjective/Adverb เท่านั้น (เช่น very good, very slow) ถ้าต้องการเน้นย้ำกริยา ให้ใช้ 'really' วางหน้ากริยา หรือใช้ 'very much' วางท้ายประโยค"
      },
      {
        wrong: "I am boring in the office.",
        right: "I am bored in the office.",
        literalThai: "ฉันเบื่อในออฟฟิศ (สับสนระหว่าง -ed กับ -ing)",
        why: "Adjective ที่ลงท้ายด้วย '-ed' หมายถึง 'รู้สึก...' (I am bored = ฉันรู้สึกเบื่อ) ส่วน '-ing' หมายถึง 'น่า...' (I am boring = ฉันเป็นคนน่าเบื่อ)"
      }
    ],

    // Key Examples
    keyExamples: [
      { en: "There is a critical issue with the database connection.", th: "มีปัญหาวิกฤตเกิดขึ้นกับการเชื่อมต่อฐานข้อมูล", note: "ใช้ There is บอกการมีอยู่ของเอกพจน์" },
      { en: "Our development team deploys updates every Tuesday.", th: "ทีมพัฒนาของเราติดตั้งตัวอัปเดตทุกวันอังคาร", note: "Present Simple สำหรับ Routine ที่ทำประจำ" },
      { en: "Alex is investigating the network latency right now.", th: "อเล็กซ์กำลังตรวจสอบความหน่วงของเครือข่ายอยู่ ณ ตอนนี้", note: "Present Continuous สำหรับการกระทำที่กำลังดำเนินอยู่" }
    ]
  },

  // =========================================================================
  // TAB 2: CHUNKS & VOCAB (ก้อนประโยคใช้งานทันที, ศัพท์ IPA, กริยาวลี)
  // =========================================================================
  chunksAndVocab: {
    chunks: [
      { chunk: "There is a problem with...", th: "มีปัญหากับ... (ใช้แจ้งปัญหาได้ทุกสถานการณ์)", example: "There is a problem with my login credentials." },
      { chunk: "How much does it cost?", th: "สิ่งนี้ราคาเท่าไหร่? (ถามราคาอย่างถูกต้อง)", example: "How much does the annual cloud license cost?" },
      { chunk: "Could I have..., please?", th: "ขอ...หน่อยได้ไหมครับ/ค่ะ? (การขอร้องแบบสุภาพ)", example: "Could I have temporary access to the staging server, please?" },
      { chunk: "What time does it start?", th: "เริ่มกี่โมง? (ถามเวลานัดหมายหรือการประชุม)", example: "What time does the sprint planning meeting start?" },
      { chunk: "Let me check.", th: "ขอฉันเช็ก/ตรวจสอบดูก่อนนะ", example: "Let me check the system logs first." },
      { chunk: "Does that make sense?", th: "ที่คุณฟังมาเข้าใจไหม? / สมเหตุสมผลไหม?", example: "We will reboot at midnight. Does that make sense?" }
    ],

    industryTechChunks: [
      { chunk: "The system is currently down.", th: "ระบบกำลังล่มอยู่ ณ ขณะนี้", context: "IT Incident", example: "The production API is currently down." },
      { chunk: "I am working on the ticket now.", th: "ฉันกำลังดำเนินการแก้ปัญหาตามใบงานนี้อยู่", context: "Helpdesk", example: "I am working on ticket 404 now." },
      { chunk: "It takes about 10 minutes to reboot.", th: "ใช้เวลาประมาณ 10 นาทีในการรีสตาร์ต", context: "Maintenance", example: "It takes about 10 minutes to reboot the server cluster." },
      { chunk: "Do you have access to the dashboard?", th: "คุณมีสิทธิ์เข้าถึงหน้าแดชบอร์ดไหม?", context: "Permissions", example: "Do you have access to the monitoring dashboard?" }
    ],

    essentialVocab: [
      { word: "available", ipa: "/əˈveɪ.lə.bəl/", pos: "adj.", th: "ว่าง, พร้อมใช้งาน", example: "The server is available now." },
      { word: "investigate", ipa: "/ɪnˈves.tə.ɡeɪt/", pos: "v.", th: "สืบสวน, ตรวจสอบหาสาเหตุ", example: "We investigate all security alerts." },
      { word: "routine", ipa: "/ruːˈtiːn/", pos: "n.", th: "กิจวัตรประจำ, ขั้นตอนปกติ", example: "Running backups is our daily routine." },
      { word: "temporary", ipa: "/ˈtem.pə.rer.i/", pos: "adj.", th: "ชั่วคราว", example: "This is a temporary workaround." }
    ],

    verbForms: [
      { v1: "is / am / are", v2: "was / were", v3: "been", th: "เป็น, อยู่, คือ", example: "He is ready today." },
      { v1: "have / has", v2: "had", v3: "had", th: "มี, รับประทาน", example: "We have two daily meetings." },
      { v1: "do / does", v2: "did", v3: "done", th: "ทำ, ปฏิบัติ", example: "She does her work thoroughly." },
      { v1: "check", v2: "checked", v3: "checked", th: "ตรวจสอบ", example: "I check my email every hour." }
    ]
  },

  // =========================================================================
  // TAB 3: REAL-LIFE DIALOGUE (บทสนทนาสถานการณ์จริง + เหตุผลเบื้องหลัง Tense)
  // =========================================================================
  realLifeDialogue: {
    scenario: "IT Helpdesk: Reporting Account Lockout & VPN Failure",
    scenarioTh: "สถานการณ์: การติดต่อแผนก IT Helpdesk เพื่อแจ้งปัญหาบัญชีผู้ใช้ถูกระงับและการเชื่อมต่อ VPN",
    grammarRationale: "สังเกตความแตกต่างในการสนทนา: เมื่อผู้แจ้งพูดถึงสถานะตัวเองจะใช้ Verb to Be ('I am locked out'), เมื่อถามความสามารถหรือกิจวัตรจะใช้ Present Simple ('Do you remember...?'), และเมื่อ IT กำลังตรวจสอบระบบ ณ วินาทีนั้นจะใช้ Present Continuous ('I am checking the log now')",
    turns: [
      {
        speaker: "Support",
        side: "left",
        avatar: "👨‍💻",
        name: "Alex (IT Support Specialist)",
        en: "Good morning! How can I assist you with your workstation today?",
        th: "สวัสดีครับ มีอะไรให้ผมช่วยเหลือเกี่ยวกับเครื่องคอมพิวเตอร์ของคุณในวันนี้ไหมครับ?",
        tenseRationale: "Present Simple (Modal can): ถามความช่วยเหลือทั่วไปในสถานการณ์บริการ"
      },
      {
        speaker: "You",
        side: "right",
        avatar: "🧑",
        name: "You (Software Staff)",
        en: "Hi Alex! There is a problem with my credentials. I am locked out of the internal repository.",
        th: "สวัสดีครับอเล็กซ์ พอดีมีปัญหากับรหัสผ่านของผมครับ ตอนนี้บัญชีของผมถูกล็อก ไม่สามารถเข้าคลังโค้ดภายในได้ครับ",
        tenseRationale: "There is + Verb to be (am locked out): บอกการมีอยู่ของปัญหา และบอกสภาวะว่ากำลังติดล็อก"
      },
      {
        speaker: "Support",
        side: "left",
        avatar: "👨‍💻",
        name: "Alex (IT Support Specialist)",
        en: "Understood. Do you remember your employee ID and your last working password?",
        th: "รับทราบครับ คุณยังจำรหัสพนักงานและรหัสผ่านล่าสุดที่ใช้งานได้อยู่ไหมครับ?",
        tenseRationale: "Present Simple (Do you remember): ใช้ Do you เพราะ remember เป็น Stative Verb ด้านความจำ ห้ามใช้ Are you remembering"
      },
      {
        speaker: "You",
        side: "right",
        avatar: "🧑",
        name: "You (Software Staff)",
        en: "Yes, I do. My ID is TH-8842, but the VPN client shows an authentication error.",
        th: "จำได้ครับ รหัสคือ TH-8842 แต่โปรแกรม VPN มันขึ้นเตือนข้อผิดพลาดในการยืนยันตัวตนครับ",
        tenseRationale: "Present Simple (shows): ประธานเอกพจน์ กริยา show เติม -s สำหรับข้อเท็จจริงที่ปรากฏบนหน้าจอ"
      },
      {
        speaker: "Support",
        side: "left",
        avatar: "👨‍💻",
        name: "Alex (IT Support Specialist)",
        en: "I see the issue in the security console. I am resetting your access token right now.",
        th: "ผมเห็นสาเหตุในคอนโซลความปลอดภัยแล้วครับ ผมกำลังรีเซ็ตโทเค็นการเข้าถึงให้คุณอยู่ ณ วินาทีนี้ครับ",
        tenseRationale: "Present Continuous (am resetting right now): การกระทำที่ฝ่าย IT กำลังกดคีย์บอร์ดดำเนินการอยู่ขณะพูด"
      },
      {
        speaker: "You",
        side: "right",
        avatar: "🧑",
        name: "You (Software Staff)",
        en: "Awesome! The dashboard is accessible again. Does the system require a fresh restart?",
        th: "ยอดเยี่ยมเลยครับ! แดชบอร์ดกลับมาใช้งานได้แล้ว ระบบจำเป็นต้องรีสตาร์ตใหม่ด้วยไหมครับ?",
        tenseRationale: "Present Simple (Does the system require): คำถามถามข้อกำหนดทั่วไป require เป็นกริยาแท้ จึงใช้ Does"
      },
      {
        speaker: "Support",
        side: "left",
        avatar: "👨‍💻",
        name: "Alex (IT Support Specialist)",
        en: "No, it doesn't. Everything is running smoothly now. Have a productive day!",
        th: "ไม่ต้องเลยครับ ตอนนี้ทุกอย่างกำลังทำงานอย่างราบรื่นแล้ว ขอให้วันนี้ทำงานอย่างมีประสิทธิภาพนะครับ!",
        tenseRationale: "Present Continuous (is running): อธิบายการทำงานของระบบที่กำลังดำเนินไปอย่างต่อเนื่องในปัจจุบัน"
      }
    ]
  },

  // =========================================================================
  // TAB 4: ACTION DRILL & DETAILED QUIZ (ภารกิจพูด + แบบทดสอบ 5 ข้อพร้อมเฉลย)
  // =========================================================================
  actionDrillAndQuiz: {
    dailyMission: {
      title: "ภารกิจฝึกพูดรายวัน (Speaking Mastery Drill)",
      instruction: "ฝึกพูดประโยคเชื่อมโยง 3 โครงสร้าง: บอกสถานะความพร้อม (Be) + กิจวัตรการทำงาน (Action Verb) + สิ่งที่กำลังทำอยู่ ณ ตอนนี้ (Present Continuous):",
      targetPhrase: "I am ready, I check the server every morning, and I am monitoring the database right now.",
      targetTh: "ฉันพร้อมแล้ว, ฉันตรวจสอบเซิร์ฟเวอร์ทุกเช้า, และฉันกำลังติดตามดูฐานข้อมูลอยู่ ณ ตอนนี้",
      tip: "สังเกตความแตกต่าง: I am ready (ใช้ am กับ Adjective), I check (ห้ามใส่ am), และ I am monitoring (กำลังทำขณะนี้ ต้องมีทั้ง am และ -ing)"
    },

    quizQuestions: [
      {
        id: "q-1-1",
        question: "ประโยคใดต่อไปนี้ถูกต้องตามหลักไวยากรณ์สากล?",
        options: [
          "He is understand the technical requirements.",
          "He understands the technical requirements.",
          "He is understanding the technical requirements.",
          "He does understands the technical requirements."
        ],
        answer: 1,
        explanation: "ถูกต้องอย่างยิ่ง! คำว่า 'understand' จัดเป็น Stative Verb (กริยาแสดงสภาวะความเข้าใจทางสติปัญญา) กฎเหล็กคือห้ามนำมาทำเป็นรูป Continuous (-ing) เด็ดขาด จึงต้องใช้ Present Simple โดยประธานเอกพจน์ 'He' ผันกริยาเติม -s เป็น 'understands'"
      },
      {
        id: "q-1-2",
        question: "หากคุณต้องการถามเพื่อนร่วมงานว่า 'คุณเห็นด้วยกับข้อเสนอนี้หรือไม่?' ข้อใดถูกต้องที่สุด?",
        options: [
          "Are you agree with this proposal?",
          "Do you agree with this proposal?",
          "Are you agreeing with this proposal?",
          "Does you agree with this proposal?"
        ],
        answer: 1,
        explanation: "ถูกต้อง! 'agree' เป็น Action Verb (กริยาแท้) ประธานคือ 'you' การตั้งคำถามใน Present Simple จึงต้องใช้กริยาช่วย 'Do' (ห้ามใช้ 'Are you agree?' เพราะ agree ไม่ใช่คำคุณศัพท์ และห้ามเติม -ing เพราะ agree เป็น Stative Verb)"
      },
      {
        id: "q-1-3",
        question: "เติมคำในช่องว่างให้ถูกต้อง: 'Look at the server rack! The warning lights _____ rapidly.'",
        options: [
          "flash",
          "flashes",
          "are flashing",
          "is flashing"
        ],
        answer: 2,
        explanation: "ถูกต้อง! ประโยคขึ้นต้นด้วย 'Look at...!' เป็นคำส่งสัญญาณบอกว่าเหตุการณ์กำลังเกิดขึ้นตรงหน้า ณ วินาทีนั้น (Present Continuous) และประธานคือ 'The warning lights' เป็นพหูพจน์ (มีหลายดวง) จึงใช้ 'are flashing'"
      },
      {
        id: "q-1-4",
        question: "ประโยคบอกเล่าคือ 'She usually works from home on Fridays.' ข้อใดคือประโยคปฏิเสธที่ถูกต้องตามกฎไวยากรณ์?",
        options: [
          "She doesn't works from home on Fridays.",
          "She isn't work from home on Fridays.",
          "She doesn't work from home on Fridays.",
          "She not work from home on Fridays."
        ],
        answer: 2,
        explanation: "ถูกต้อง! เมื่อทำเป็นประโยคปฏิเสธใน Present Simple ประธานเอกพจน์ (She) ต้องใช้กริยาช่วย 'doesn't' และกริยาหลัก 'work' จะต้องคืนรูปเป็นช่องที่ 1 ไม่ผัน (Infinitive without to ห้ามมี -s อีก)"
      },
      {
        id: "q-1-5",
        question: "ประโยค 'There is a severe security vulnerability in the codebase.' หากต้องการเปลี่ยนเป็นประโยคคำถาม ต้องเขียนอย่างไร?",
        options: [
          "Does there is a severe security vulnerability in the codebase?",
          "Is there a severe security vulnerability in the codebase?",
          "Are there a severe security vulnerability in the codebase?",
          "Has there a severe security vulnerability in the codebase?"
        ],
        answer: 1,
        explanation: "ถูกต้อง! โครงสร้าง 'There is / There are' เมื่อทำเป็นประโยคคำถาม ให้ทำการสลับ Verb to be ขึ้นมาไว้หน้า There ทันที โดยสิ่งของที่กล่าวถึงคือ 'a severe security vulnerability' (เอกพจน์ 1 จุด) จึงสลับ 'Is' ขึ้นต้นเป็น 'Is there...?'"
      },
      {
        id: "q-1-6",
        question: "เติมคำในช่องว่างให้ถูกต้อง: 'The backend team _____ additional memory to handle peak load.'",
        options: [
          "is needing",
          "needs",
          "need",
          "is need"
        ],
        answer: 1,
        explanation: "ถูกต้อง! 'need' เป็น Stative Verb (กริยาบอกความต้องการ/สภาวะ) ห้ามทำเป็น Continuous (-ing) โดยเด็ดขาด และประธาน 'The backend team' ในบริบทนี้ถือเป็นนามเอกพจน์ (องค์กรหรือทีมเดียว) กริยาจึงต้องผันเติม -s เป็น 'needs'"
      },
      {
        id: "q-1-7",
        question: "หากต้องการสร้างประโยคคำถาม WH-Question: 'Where _____ the microservice store user authentication tokens?' ควรเติมคำใด?",
        options: [
          "does",
          "is",
          "do",
          "has"
        ],
        answer: 0,
        explanation: "ถูกต้อง! ในประโยคคำถาม Present Simple ที่มีกริยาแท้คือ 'store' (จัดเก็บ) และประธานเป็นเอกพจน์คือ 'the microservice' โครงสร้างคือ Wh-word + does + Subject + V1 (base form) จึงต้องใช้ 'Where does the microservice store...?'"
      },
      {
        id: "q-1-8",
        question: "ข้อใดเลือกใช้ Tense ถูกต้องตามบริบท: 'Normally I use VS Code, but this week I _____ IntelliJ IDEA for Java debugging.'",
        options: [
          "am using",
          "use",
          "uses",
          "am use"
        ],
        answer: 0,
        explanation: "ถูกต้อง! คำบอกเวลา 'Normally' (ปกติเป็นกิจวัตร) ใช้ Present Simple (I use) แต่ท่อนหลังมีคำว่า 'this week' (เฉพาะสัปดาห์นี้ เป็นพฤติกรรมชั่วคราว) กฎไวยากรณ์สากลกำหนดให้ใช้ Present Continuous คือ 'am using'"
      },
      {
        id: "q-1-9",
        question: "ข้อใดเรียงลำดับคำกริยาวิเศษณ์บอกความถี่ (Adverbs of Frequency) ได้ถูกต้องตามหลักไวยากรณ์?",
        options: [
          "Our team deploys always on Wednesday.",
          "Our team always deploys on Wednesday.",
          "Always our team deploys on Wednesday.",
          "Our team deploys on Wednesday always."
        ],
        answer: 1,
        explanation: "ถูกต้อง! กฎตำแหน่งของ Adverbs of Frequency (always, usually, often, never) คือ 'ต้องอยู่หน้ากริยาแท้' (Before Main Verbs) แต่ 'อยู่หลัง Verb to be' ดังนั้น 'always deploys' จึงเป็นตำแหน่งที่ถูกต้องตามมาตรฐานสากล"
      },
      {
        id: "q-1-10",
        question: "เติมคำในช่องว่างให้ถูกต้อง: 'These load balancers _____ support HTTP/3 yet.'",
        options: [
          "doesn't",
          "aren't",
          "don't",
          "not"
        ],
        answer: 2,
        explanation: "ถูกต้อง! ประธาน 'These load balancers' เป็นพหูพจน์ (มีหลายตัว สังเกต These และ -s) เมื่อปฏิเสธใน Present Simple กับกริยาแท้ 'support' จึงต้องใช้ 'don't' (ห้ามใช้ aren't เพราะมีกริยาแท้ support อยู่แล้ว)"
      },
      {
        id: "q-1-11",
        question: "เติมคำในช่องว่าง: 'System throughput _____ heavily on the number of available database connections.'",
        options: [
          "is depending",
          "depends",
          "depend",
          "are depending"
        ],
        answer: 1,
        explanation: "ถูกต้อง! 'depend on' เป็น Stative Verb (ขึ้นอยู่กับ / ผูกพันกับสภาวะ) ห้ามใช้ในรูป Continuous และประธาน 'System throughput' เป็นนามนับไม่ได้ (เอกพจน์) กริยาจึงต้องผันเติม -s เป็น 'depends'"
      },
      {
        id: "q-1-12",
        question: "เลือกคู่กริยาที่ถูกต้อง: 'The production database _____ stable, so we _____ any maintenance right now.'",
        options: [
          "is / don't need",
          "does / aren't need",
          "is / aren't needing",
          "has / don't need"
        ],
        answer: 0,
        explanation: "ถูกต้อง! ส่วนแรก 'stable' เป็น Adjective (คำคุณศัพท์) ต้องใช้ Verb to be คือ 'is' ส่วนหลัง 'need' เป็น Stative Verb ในรูปปฏิเสธกับประธาน 'we' จึงต้องใช้ 'don't need' (ห้ามใช้ aren't needing)"
      },
      {
        id: "q-1-13",
        question: "หากต้องการถามว่า 'ใครดูแลคิว On-call สัปดาห์นี้?' โดย Who ทำหน้าที่เป็นประธานของประโยค ข้อใดถูกต้อง?",
        options: [
          "Who handle the primary on-call rotation this week?",
          "Who handles the primary on-call rotation this week?",
          "Who does handle the primary on-call rotation this week?",
          "Who is handle the primary on-call rotation this week?"
        ],
        answer: 1,
        explanation: "ถูกต้อง! เมื่อ 'Who' ทำหน้าที่เป็นประธาน (Subject Question) กฎไวยากรณ์คือไม่ต้องใส่กริยาช่วย do/does เข้ามาคั่น แต่ให้ผันกริยาแท้เสมือนเป็นประธานเอกพจน์ทันที จึงได้ 'Who handles...?'"
      },
      {
        id: "q-1-14",
        question: "เลือกคำสะกดที่ถูกต้องตามหลักการเติม -ing (Spelling Rules): 'The CI pipeline is currently _____ the automated regression tests.'",
        options: [
          "runing",
          "stoping",
          "running",
          "runned"
        ],
        answer: 2,
        explanation: "ถูกต้อง! กริยา 'run' มี 1 พยางค์ สระเสียงสั้น 1 ตัว (u) และตัวสะกด 1 ตัว (n) ตามกฎ CVC (Consonant-Vowel-Consonant) จะต้อง 'เบิ้ลตัวสะกดท้าย' อีก 1 ตัวก่อนเติม -ing จึงสะกดเป็น 'running'"
      },
      {
        id: "q-1-15",
        question: "ประโยคใดที่วิศวกรซอฟต์แวร์นำไปใช้ในที่ประชุมได้อย่างถูกต้อง ปราศจากกับดักไวยากรณ์ยอดฮิต?",
        options: [
          "I am totally agree with the architecture proposal.",
          "I totally agree with the architecture proposal.",
          "I am agree totally with the architecture proposal.",
          "I does agree with the architecture proposal completely."
        ],
        answer: 1,
        explanation: "ถูกต้อง! 'agree' เป็นคำกริยาแท้ (ไม่ใช่ Adjective) จึง 'ห้ามใส่ Verb to be (am)' นำหน้าเด็ดขาด โครงสร้างที่ถูกต้องสากลคือ 'I agree...' หรือขยายด้วย Adverb เป็น 'I totally agree with...'"
      }
    ]
  }
};
