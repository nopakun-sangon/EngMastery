/**
 * EngMastery: Level 5 - The Professional (CEFR B2)
 * File: lessons/level-5-professional/lesson.js
 * Curriculum: Future Continuous (will be + V.ing), Future Perfect (will have + V.3) & Daily Stand-up & Incident Frameworks
 * Designed by: Senior Instructional Designer & Senior Linguist
 */
window.LESSON_5_PROFESSIONAL = {
  id: "level-5-professional",
  level: "B2",
  levelTitle: "Level 5: The Professional (CEFR B2)",
  levelSub: "ภาษาอังกฤษระดับมืออาชีพ: Future Continuous, Future Perfect (กำหนดส่งงานแม่นยำ), สูตร Stand-up 3 จังหวะ และการรายงาน Root Cause",
  badgeColor: {
    bg: "bg-red-100 dark:bg-red-950/60",
    text: "text-red-700 dark:text-red-300",
    border: "border-red-300 dark:border-red-800"
  },
  cefrColor: "red",
  estimatedTime: "40 นาที",
  xpReward: 180,

  // =========================================================================
  // TAB 1: CORE GRAMMAR (หลักการ, กฎเหล็ก, ข้อยกเว้น, การออกเสียง, กับดักแปล)
  // =========================================================================
  coreGrammar: {
    title: "ไวยากรณ์หลัก: Future Continuous, Future Perfect & Professional Frameworks",
    summary: "ก้าวสู่ความเป็นผู้นำทางเทคนิค: การระบุสถานะงานที่แม่นยำด้วย Future Tenses ขั้นสูง กรอบการอัปเดตงาน 3 จังหวะ และการเขียนรายงานปัญหาทางเทคนิค",

    // A. Conceptual Core & Rules
    rules: [
      {
        ruleName: "1. กฎของเหตุการณ์ที่กำลังดำเนินอยู่ ณ จุดเวลาในอนาคต (Future Continuous: will be + V.ing)",
        explanation: "ใช้บอกว่า ณ จุดเวลาหรือช่วงเวลาเฉพาะเจาะจงในอนาคต 'เหตุการณ์นั้นกำลังดำเนินการอยู่อย่างต่อเนื่อง' ไม่ใช่เพิ่งจะเริ่มหรือทำเสร็จ:\n• โครงสร้าง: S + will be + V.ing\n• ตัวอย่างการทำงาน: 'At 3 PM tomorrow, our infrastructure team will be conducting a live load test.' (บ่ายสามโมงพรุ่งนี้พวกเรากำลังทดสอบโหลดอยู่ ไม่ใช่เพิ่งเริ่มตอนบ่ายสาม)\n• การใช้เชิงมารยาททางธุรกิจ (Polite Inquiry): ใช้ถามแผนการของอีกฝ่ายอย่างสุภาพโดยไม่กดดัน เช่น 'Will you be joining the sprint retro today?'",
        pitfall: "❌ ผิดความละเอียด: 'Tomorrow at 3 PM I will test.' (สื่อแค่ว่าจะเริ่มทำตอนบ่ายสาม) / ✅ สื่อว่ากำลังติดพันอยู่: 'Tomorrow at 3 PM I will be testing.'",
        proTip: "ใช้ Future Continuous เมื่อต้องการบอกเพื่อนร่วมงานว่า 'ช่วงเวลานั้นฉันกำลังติดพันกับงานนี้อยู่นะ อย่าเพิ่งกวน'"
      },
      {
        ruleName: "2. กฎของงานที่จะเสร็จสมบูรณ์ก่อนเส้นตาย (Future Perfect: will have + V.3)",
        explanation: "ใช้การันตีว่า 'งานชิ้นนี้จะเสร็จสิ้นเรียบร้อยก่อนถึงจุดเวลาหนึ่งในอนาคต' เป็น Tense ที่ขาดไม่ได้สำหรับ Project Manager และ Tech Lead ในการคอมมิตงาน:\n• โครงสร้าง: S + will have + V.3\n• คำบอกเวลาคู่บุญ: By + เวลาในอนาคต (By Friday, By the end of this sprint, By Q4, By 5 PM)\n• ตัวอย่าง: 'By Friday afternoon, we will have migrated all customer accounts to the new cluster.' (ก่อนถึงบ่ายวันศุกร์ งานย้ายระบบจะเสร็จสมบูรณ์เรียบร้อย 100%)",
        pitfall: "❌ ผิดไวยากรณ์และลดทอนความมั่นใจ: 'By next week, I will finish the task.' / ✅ ถูกต้องและเป็นมืออาชีพตามมาตรฐานสากล: 'By next week, I will have finished the task.'",
        proTip: "สูตรท่องจำ: เมื่อไหร่ที่เห็นคำว่า 'By + เวลาอนาคต' ให้เตรียมสมองนึกถึง 'will have + V.3' ไว้เป็นอันดับแรก"
      },
      {
        ruleName: "3. กรอบการอัปเดตงานรายวัน 3 จังหวะ (The Daily Stand-up 3-Beat Framework)",
        explanation: "วิศวกรระดับโลกไม่อัปเดตงานสะเปะสะปะ แต่ใช้กรอบ 3 จังหวะที่ผสาน Tenses อย่างทรงพลัง:\n• Beat 1: Done (สิ่งที่ทำเสร็จแล้ว) -> ใช้ Past Simple หรือ Present Perfect: 'Yesterday, I completed the unit test coverage for the payment gateway.'\n• Beat 2: Doing (สิ่งที่กำลังทำวันนี้) -> ใช้ Present Continuous หรือ Future Continuous: 'Today, my main focus is on the webhook listener, and this afternoon I will be syncing with QA.'\n• Beat 3: Blockers (อุปสรรคที่ขวางอยู่) -> ใช้ Present Simple หรือ Passive Voice: 'I am currently blocked by pending API access from the third-party provider.'",
        pitfall: "❌ อัปเดตสะเปะสะปะ: 'Yesterday work coding, today code, no problem.' / ✅ เป็นมืออาชีพแบบ 3 จังหวะ",
        proTip: "หากไม่มีอุปสรรค ให้จบสั้นกระชับว่า: 'No blockers on my end.'"
      }
    ],

    // Structure Matrix
    comparisonTable: {
      headers: ["จังหวะเวลาในอนาคต", "บอกเล่า (+)", "ปฏิเสธ (-)", "คำถาม (?)"],
      rows: [
        {
          subject: "Future Simple (จะทำ)",
          positive: "I <span class='text-emerald-600 dark:text-emerald-400 font-bold'>will start</span> the deployment tonight.",
          negative: "I <span class='text-red-500 font-bold'>won't start</span> without your sign-off.",
          question: "<span class='text-amber-500 font-bold'>Will</span> you <span class='text-amber-500 font-bold'>start</span> the deployment?",
          audioPositive: "I will start the deployment tonight.",
          audioNegative: "I won't start without your sign-off.",
          audioQuestion: "Will you start the deployment?"
        },
        {
          subject: "Future Continuous (กำลังติดพัน)",
          positive: "At 10 AM, I <span class='text-emerald-600 dark:text-emerald-400 font-bold'>will be running</span> stress tests.",
          negative: "I <span class='text-red-500 font-bold'>won't be monitoring</span> logs all night.",
          question: "<span class='text-amber-500 font-bold'>Will</span> you <span class='text-amber-500 font-bold'>be running</span> stress tests?",
          audioPositive: "At 10 AM, I will be running stress tests.",
          audioNegative: "I won't be monitoring logs all night.",
          audioQuestion: "Will you be running stress tests?"
        },
        {
          subject: "Future Perfect (เสร็จก่อนกำหนด)",
          positive: "By noon, we <span class='text-emerald-600 dark:text-emerald-400 font-bold'>will have patched</span> the flaw.",
          negative: "We <span class='text-red-500 font-bold'>won't have completed</span> it by noon.",
          question: "<span class='text-amber-500 font-bold'>Will</span> you <span class='text-amber-500 font-bold'>have patched</span> the flaw by noon?",
          audioPositive: "By noon, we will have patched the flaw.",
          audioNegative: "We won't have completed it by noon.",
          audioQuestion: "Will you have patched the flaw by noon?"
        }
      ]
    },

    // B. Advanced Sub-Rules & Exceptions
    advancedSubRules: [
      {
        title: "1. กฎเหล็กของ Time Clauses ในอนาคต (ห้ามใส่ will ในอนุประโยคบอกเวลา)",
        explanation: "ในประโยคที่มีอนุประโยคบอกเวลาขึ้นต้นด้วย By the time, When, As soon as, Before, After แม้ว่าเหตุการณ์จะเกิดขึ้นในอนาคต กฎไวยากรณ์ห้ามใช้ Future Tense ใน Clause นั้นเด็ดขาด แต่ต้องใช้ 'Present Simple' หรือ 'Present Perfect' แทน:\n• ❌ By the time the client will arrive, we will have finished.\n• ✅ By the time the client arrives (Present Simple), we will have finished (Future Perfect).\n• ❌ As soon as I will receive the token, I will ping you.\n• ✅ As soon as I receive the token, I will ping you.",
        examples: [
          { text: "By the time the sprint ends, we will have deployed the release.", th: "เมื่อถึงตอนที่สปรินต์สิ้นสุดลง พวกเราจะติดตั้งตัวปล่อยระบบเสร็จเรียบร้อยแล้ว" }
        ]
      },
      {
        title: "2. กรอบการรายงานอุบัติการณ์ 3 ขั้นตอน (Incident & Root Cause Framework)",
        explanation: "การเขียนรายงาน Post-Mortem หรือ Incident Report ระดับ B2 ต้องแบ่ง 3 ลำดับชัดเจน:\n1. อาการที่ปรากฏ (Symptom): 'At 14:15 UTC, the payment gateway experienced a 40% error rate.'\n2. สาเหตุที่แท้จริง (Root Cause): 'The incident was triggered by an unindexed query, which exhausted the connection pool.'\n3. การแก้ไขและการป้องกันถาวร (Fix & Prevention): 'We rolled back the migration, and by tomorrow morning, our team will have added connection pooling limits.'",
        examples: [
          { text: "Symptom (Past) -> Root Cause (Passive) -> Fix (Future Perfect)", th: "กรอบการเขียนระดับมืออาชีพที่ได้รับความน่าเชื่อถือสูงสุด" }
        ]
      }
    ],

    // C. Pronunciation & Accent Secrets
    pronunciationSecrets: [
      {
        rule: "1. การรวบเสียงของ Future Perfect: 'will have' -> /wɪləv/",
        explanation: "ในการประชุมที่พูดเร็ว เจ้าของภาษาจะไม่ออกเสียง 'will have' ชัดถ้อยชัดคำ แต่จะกร่อนเสียงกริยา have เป็นเสียง Schwa เบา ๆ:\n• 'We will have finished' ออกเสียงเป็น /wiː wɪləv ˈfɪnɪʃt/ หรือย่อเป็น /wiːləv ˈfɪnɪʃt/ ('We'll have finished')",
        phoneticExample: "By Friday, we'll have resolved it. -> /baɪ ˈfraɪ.deɪ wiːləv rɪˈzɑːlvd ɪt/",
        audio: "By Friday, we will have resolved it."
      },
      {
        rule: "2. การเน้นเสียงหนัก (Stress) ใน Phrasal Verbs สำหรับการทำงาน",
        explanation: "ในคำกริยาวลี (Phrasal Verbs) น้ำหนักเสียงหลัก (Primary Stress) จะตกลงที่ 'บุพบท/คำอนุภาคด้านหลัง' ไม่ใช่กริยาตัวหน้า:\n• look IN-TO /lʊk ˈɪn.tuː/ (ไม่ใช่ LOOK in-to)\n• follow UP on /ˈfɑː.loʊ ˈʌp ɑːn/\n• point OUT /pɔɪnt ˈaʊt/",
        phoneticExample: "look INTO /ˈɪn.tuː/ | follow UP /ˈʌp/ | point OUT /ˈaʊt/",
        audio: "I will look into it. Please follow up on that."
      }
    ],

    // D. Common Thai-English Traps
    thaiEnglishTraps: [
      {
        wrong: "By next week, I will finish the task.",
        right: "By next week, I will have finished the task.",
        literalThai: "ภายในสัปดาห์หน้าฉันจะทำงานนี้เสร็จ (ใช้ will ธรรมดาคู่กับ By)",
        why: "คำว่า 'By + เวลา' บ่งชี้ถึง 'เส้นตาย (Deadline)' ที่การกระทำต้องเสร็จสมบูรณ์เรียบร้อยก่อนถึงจุดนั้น ตามหลักไวยากรณ์สากลจึงต้องใช้ Future Perfect (will have finished)"
      },
      {
        wrong: "I will follow up the manager about the budget.",
        right: "I will follow up with the manager about the budget. / ...follow up on the budget.",
        literalThai: "ฉันจะติดตามผู้จัดการเรื่องงบประมาณ (ขาดบุพบท with หรือ on)",
        why: "'follow up' มีการใช้ 2 แบบที่เคร่งครัด: follow up WITH someone (ติดตามกับบุคคล) และ follow up ON something (ติดตามเรื่องหรือเอกสาร)"
      },
      {
        wrong: "We need to discuss about the technical architecture.",
        right: "We need to discuss the technical architecture.",
        literalThai: "พวกเราจำเป็นต้องพูดคุยเกี่ยวกับสถาปัตยกรรม (ใส่ about หลัง discuss)",
        why: "'discuss' เป็น Transitive Verb (สกรรมกริยา) ที่ต้องการกรรมตรงมารับทันที ห้ามใส่บุพบท 'about' ตามหลังเด็ดขาด (แต่ถ้าเป็น 'talk about' จึงจะใส่ about ได้)"
      },
      {
        wrong: "I have a hard stop at 3 PM, so I must to go.",
        right: "I have a hard stop at 3 PM, so I must go. / ...I have to go.",
        literalThai: "ฉันมีเวลาจำกัดถึงบ่ายสาม ดังนั้นฉันต้องไป (ใส่ to หลัง must)",
        why: "'must' เป็น Modal Verb ที่ต้องตามด้วย Bare Infinitive (กริยาไม่ผันและไม่มี to) เสมอ หากต้องการใช้ to ต้องเปลี่ยนไปใช้ 'have to'"
      }
    ],

    // Key Examples
    keyExamples: [
      { en: "By the end of this sprint, our engineering team will have completed the microservice migration.", th: "ก่อนสิ้นสุดรอบสปรินต์นี้ ทีมวิศวกรของเราจะดำเนินการย้ายไมโครเซอร์วิสเสร็จสิ้นสมบูรณ์เรียบร้อย", note: "Future Perfect (will have completed) ยืนยันการส่งมอบงานตรงตามกำหนดเวลา" },
      { en: "At 2 PM tomorrow, I will be walking the QA team through the new integration tests.", th: "วันพรุ่งนี้เวลาบ่ายสองโมง ฉันจะกำลังพาเดินดูขั้นตอนการทดสอบเชื่อมต่อระบบใหม่กับทีม QA", note: "Future Continuous (will be walking through) ระบุสิ่งที่กำลังติดพันอยู่ ณ จุดเวลา" },
      { en: "Could I quickly jump in here to clarify the database schema before we move on?", th: "ผมขออนุญาตแทรกสั้น ๆ ตรงนี้เพื่อขยายความเรื่องสคีมาฐานข้อมูลก่อนที่เราจะไปต่อได้ไหมครับ?", note: "สำนวนแทรกในที่ประชุมอย่างสุภาพและทรงพลัง" }
    ]
  },

  // =========================================================================
  // TAB 2: CHUNKS & VOCAB (7 Phrasal Verbs ความถี่สูง, สำนวนการประชุม, ศัพท์)
  // =========================================================================
  chunksAndVocab: {
    chunks: [
      { chunk: "Could you elaborate on that?", th: "คุณช่วยขยายความหรือลงรายละเอียดเพิ่มเติมเกี่ยวกับเรื่องนั้นได้ไหมครับ?", example: "That's an interesting approach. Could you elaborate on how caching is handled?" },
      { chunk: "Let's touch base next week.", th: "เดี๋ยวสัปดาห์หน้าเราค่อยมาอัปเดตและพูดคุยสถานะกันอีกทีนะ", example: "Good progress today. Let's touch base next Tuesday after the deployment." },
      { chunk: "I have a hard stop at 3 PM.", th: "ผมมีธุระด่วน/ต้องเข้าประชุมอื่นต่อตอนบ่ายสามเป๊ะ ๆ (แจ้งล่วงหน้าอย่างโปร)", example: "Just a heads-up, I have a hard stop at 3 PM today." },
      { chunk: "Let's take this offline.", th: "ประเด็นนี้ไว้เราค่อยไปคุยแยกกันนอกรอบนะ (เพื่อไม่ให้กินเวลาประชุมหลัก)", example: "This is getting quite specific. Let's take this discussion offline." }
    ],

    industryTechChunks: [
      { chunk: "I am currently blocked by pending credentials.", th: "ตอนนี้ผมติดอุปสรรคเรื่องรอสิทธิ์เข้าถึงระบบอยู่ครับ", context: "Stand-up Blocker", example: "I am currently blocked by pending AWS IAM credentials." },
      { chunk: "By the end of the sprint, we will have resolved all blockers.", th: "ก่อนจบรอบสปรินต์ พวกเราจะเคลียร์อุปสรรคทั้งหมดเสร็จสิ้นแน่นอน", context: "Sprint Commitment", example: "By Friday, we will have resolved all P1 security tickets." },
      { chunk: "The root cause was traced back to a race condition.", th: "สาเหตุที่แท้จริงถูกตรวจสอบย้อนกลับไปพบว่าเป็น Race Condition", context: "Post-Mortem", example: "The incident root cause was traced back to a concurrency deadlock." },
      { chunk: "May I quickly jump in here?", th: "ขออนุญาตแทรกตรงนี้สั้น ๆ ได้ไหมครับ?", context: "Meeting Protocol", example: "May I quickly jump in here before we finalize the sprint backlog?" }
    ],

    essentialVocab: [
      { word: "elaborate", ipa: "/iˈlæb.ə.reɪt/", pos: "v.", th: "ขยายความ, อธิบายรายละเอียดเพิ่มเติม", example: "Please elaborate on your proposed architecture." },
      { word: "concurrency", ipa: "/kənˈkɝː.ən.si/", pos: "n.", th: "การทำงานพร้อมกันหลายกระบวนการ", example: "We optimized the database for high concurrency." },
      { word: "post-mortem", ipa: "/ˌpoʊstˈmɔːr.t̬əm/", pos: "n.", th: "การประชุมวิเคราะห์หลังเกิดปัญหาเพื่อหาแนวทางป้องกัน", example: "We will hold an incident post-mortem at 4 PM." },
      { word: "mitigate", ipa: "/ˈmɪt̬.ə.ɡeɪt/", pos: "v.", th: "บรรเทาความเสียหาย, ลดความรุนแรง", example: "The rate limiter helped mitigate the DDoS impact." }
    ],

    // 7 Workplace High-Frequency Phrasal Verbs
    verbForms: [
      { v1: "look into", v2: "looked into", v3: "looked into", th: "ตรวจสอบหาสาเหตุเชิงลึก", example: "I will look into the error logs immediately." },
      { v1: "follow up on", v2: "followed up on", v3: "followed up on", th: "ติดตามความคืบหน้าของเรื่องที่ค้างไว้", example: "She followed up on the open pull request." },
      { v1: "bring up", v2: "brought up", v3: "brought up", th: "ยกประเด็นขึ้นมาพูดคุยในที่ประชุม", example: "He brought up the security vulnerability during standup." },
      { v1: "point out", v2: "pointed out", v3: "pointed out", th: "ชี้ให้เห็นประเด็นสำคัญหรือข้อผิดพลาด", example: "The QA lead pointed out a edge case in the flow." },
      { v1: "fall behind", v2: "fell behind", v3: "fallen behind", th: "ทำงานล่าช้ากว่ากำหนดการที่วางไว้", example: "We are falling behind schedule due to blockers." },
      { v1: "call off", v2: "called off", v3: "called off", th: "ยกเลิก (นัดหมาย, แผนงาน)", example: "They called off the deployment due to bad metrics." },
      { v1: "walk through", v2: "walked through", v3: "walked through", th: "พาดูและอธิบายทีละขั้นตอนอย่างละเอียด", example: "Can you walk me through the refactored code?" }
    ]
  },

  // =========================================================================
  // TAB 3: REAL-LIFE DIALOGUE (บทสนทนาสถานการณ์จริง + เหตุผลเบื้องหลัง Tense)
  // =========================================================================
  realLifeDialogue: {
    scenario: "Executive Sprint Review: Stand-up Delivery & Deadline Negotiation",
    scenarioTh: "สถานการณ์: การประชุมสรุปความคืบหน้าสปรินต์ระดับผู้บริหาร การต่อรองกำหนดเวลา และการอัปเดตงาน 3 จังหวะ",
    grammarRationale: "วิเคราะห์การใช้ Tenses: ผู้รายงานใช้สูตร Done (Past Simple: 'completed'), Doing (Present Continuous: 'am profiling'), และคอมมิตเส้นตายในอนาคตด้วย Future Perfect ('will have completed by Friday') พร้อมใช้ Phrasal Verbs ในที่ประชุมอย่างแม่นยำ ('look into', 'follow up on')",
    turns: [
      {
        speaker: "Sponsor",
        side: "left",
        avatar: "👔",
        name: "Jonathan (VP of Product)",
        en: "Good morning team. I have a hard stop at 9:30 AM today, so let's cut right to the chase. How is the payment gateway overhaul tracking?",
        th: "อรุณสวัสดิ์ครับทุกคน วันนี้ผมมีเวลาจำกัดถึง 9:30 น. เป๊ะ ๆ นะครับ ดังนั้นขอเข้าประเด็นสำคัญเลย โครงการยกเครื่องระบบชำระเงินคืบหน้าไปถึงไหนแล้วครับ?",
        tenseRationale: "Present Simple (I have a hard stop): การแจ้งข้อจำกัดทางเวลาอย่างมืออาชีพ"
      },
      {
        speaker: "You",
        side: "right",
        avatar: "🧑",
        name: "You (Tech Lead)",
        en: "Morning Jonathan. Yesterday, we completed the core schema migration. Today, my focus is to profile the checkout latency.",
        th: "อรุณสวัสดิ์ครับโจนาธาน เมื่อวานนี้พวกเราดำเนินการย้ายสคีมาหลักเสร็จสมบูรณ์แล้วครับ วันนี้ผมกำลังมุ่งเน้นตรวจจับความหน่วงของหน้าชำระเงินครับ",
        tenseRationale: "Stand-up Beat 1 (Done: Past Simple 'completed') & Beat 2 (Doing: Present Simple 'my focus is to profile')"
      },
      {
        speaker: "Sponsor",
        side: "left",
        avatar: "👔",
        name: "Jonathan (VP of Product)",
        en: "Are there any blockers that might cause us to fall behind schedule for the enterprise launch?",
        th: "มีอุปสรรคอะไรที่อาจทำให้เราทำงานล่าช้ากว่ากำหนดการเปิดตัวระดับองค์กรไหมครับ?",
        tenseRationale: "Phrasal Verb (fall behind schedule): ถามความเสี่ยงต่อเส้นตาย"
      },
      {
        speaker: "You",
        side: "right",
        avatar: "🧑",
        name: "You (Tech Lead)",
        en: "We ran into an edge case with the currency conversion API. However, Alex is looking into it, and I will follow up with the vendor by 11 AM.",
        th: "เราบังเอิญเจอกรณีพิเศษเกี่ยวกับ API แปลงสกุลเงินครับ แต่อเล็กซ์กำลังตรวจสอบเชิงลึกอยู่ และผมจะติดตามความคืบหน้ากับทางผู้ให้บริการก่อน 11 โมงเช้าครับ",
        tenseRationale: "Phrasal verbs (look into / follow up with someone) ในการแก้ปัญหาเฉพาะหน้า"
      },
      {
        speaker: "Sponsor",
        side: "left",
        avatar: "👔",
        name: "Jonathan (VP of Product)",
        en: "Can we guarantee to stakeholders that the staging environment will be ready before the end of the sprint?",
        th: "เราสามารถรับประกันกับผู้มีส่วนได้ส่วนเสียได้ไหมครับว่าระบบ Staging จะพร้อมใช้งานก่อนสิ้นสุดรอบสปรินต์นี้?",
        tenseRationale: "Modal can + Future condition (before the end of the sprint)"
      },
      {
        speaker: "You",
        side: "right",
        avatar: "🧑",
        name: "You (Tech Lead)",
        en: "Absolutely. By Friday noon, our engineering team will have deployed all test suites and we will be monitoring live traffic simulation.",
        th: "รับประกันได้แน่นอนครับ ภายในเที่ยงวันศุกร์ ทีมวิศวกรของเราจะติดตั้งชุดทดสอบทั้งหมดเสร็จสมบูรณ์เรียบร้อย และเราจะกำลังมอนิเตอร์การจำลองทราฟฟิกจริงอยู่ครับ",
        tenseRationale: "Future Perfect (will have deployed) คอมมิตเส้นตาย + Future Continuous (will be monitoring) ระบุสิ่งที่จะกำลังทำอยู่"
      },
      {
        speaker: "Sponsor",
        side: "left",
        avatar: "👔",
        name: "Jonathan (VP of Product)",
        en: "Splendid! Let's touch base briefly on Thursday afternoon to confirm the final numbers. Keep up the great momentum!",
        th: "ยอดเยี่ยมมากครับ! เดี๋ยวบ่ายวันพฤหัสบดีเรามาอัปเดตตัวเลขสรุปสุดท้ายกันสั้น ๆ อีกทีนะ รักษาความกระตือรือร้นในการทำงานไว้นะครับทุกคน!",
        tenseRationale: "Workplace idiom (touch base): นัดหมายอัปเดตสั้น ๆ อย่างเป็นกันเองและมืออาชีพ"
      }
    ]
  },

  // =========================================================================
  // TAB 4: ACTION DRILL & DETAILED QUIZ (ภารกิจพูด + แบบทดสอบ 5 ข้อพร้อมเฉลย)
  // =========================================================================
  actionDrillAndQuiz: {
    dailyMission: {
      title: "ภารกิจอัปเดตงานแบบ Stand-up มืออาชีพ (Stand-up Mastery Drill)",
      instruction: "ฝึกพูด 3 จังหวะ: สิ่งที่ทำเสร็จแล้ว (Yesterday I completed...) + สิ่งที่กำลังทำ (Today I am focusing on...) + การันตีเส้นตาย (By Friday I will have finished...):",
      targetPhrase: "Yesterday I completed the API integration, today I am optimizing queries, and by Friday I will have deployed the feature.",
      targetTh: "เมื่อวานนี้ฉันเชื่อมต่อ API เสร็จเรียบร้อยแล้ว, วันนี้ฉันกำลังปรับจูนคิวรี, และภายในวันศุกร์นี้ฉันจะติดตั้งฟีเจอร์นี้เสร็จสมบูรณ์แน่นอน",
      tip: "สังเกตความแตกต่าง: completed (Past Simple), am optimizing (Present Continuous), และ will have deployed (Future Perfect รับประกันเส้นตาย)"
    },

    quizQuestions: [
      {
        id: "q-5-1",
        question: "ประโยคที่ต้องการระบุเส้นตายว่า 'ก่อนสิ้นสุดไตรมาสนี้ พวกเราจะทำการอัปเกรดคลัสเตอร์เซิร์ฟเวอร์เสร็จสมบูรณ์เรียบร้อย' ข้อใดถูกต้องตามหลักไวยากรณ์?",
        options: [
          "By the end of this quarter, we will upgrade the server cluster.",
          "By the end of this quarter, we will have upgraded the server cluster.",
          "By the end of this quarter, we will be upgrading the server cluster.",
          "By the end of this quarter, we have upgraded the server cluster."
        ],
        answer: 1,
        explanation: "ถูกต้องอย่างยิ่ง! เมื่อมีคำว่า 'By + เวลาในอนาคต' (By the end of this quarter) แสดงถึงการกำหนดเส้นตายที่การกระทำต้อง 'เสร็จสิ้นสมบูรณ์ก่อนจุดนั้น' ตามหลักไวยากรณ์สากลจึงต้องใช้ Future Perfect คือ 'will have upgraded'"
      },
      {
        id: "q-5-2",
        question: "ประโยคที่แสดงเหตุการณ์ในอนาคตข้อใดถูกต้องตามกฎของ Time Clauses?",
        options: [
          "By the time the project manager will arrive, we will have deployed the hotfix.",
          "By the time the project manager arrives, we will have deployed the hotfix.",
          "By the time the project manager will have arrived, we will deploy the hotfix.",
          "By the time the project manager is arriving, we will have deployed the hotfix."
        ],
        answer: 1,
        explanation: "ถูกต้อง! กฎเหล็กของ Time Clauses ระบุว่า อนุประโยคที่ขึ้นต้นด้วย 'By the time, when, as soon as, before' แม้จะพูดถึงอนาคต แต่ห้ามใส่ will เด็ดขาด โดยต้องใช้รูป Present Simple (arrives) ส่วนประโยคหลักจึงใช้ Future Perfect (will have deployed)"
      },
      {
        id: "q-5-3",
        question: "หากต้องการพูดว่า 'ฉันจะติดตามเรื่องนี้กับผู้จัดการโดยตรง' ควรใช้ Phrasal Verb ข้อใดได้อย่างถูกต้องตามหลักภาษา?",
        options: [
          "I will follow up the manager directly.",
          "I will follow up with the manager directly.",
          "I will follow up on the manager directly.",
          "I will follow the manager up directly."
        ],
        answer: 1,
        explanation: "ถูกต้อง! การใช้กริยาวลี 'follow up' มีกฎชัดเจนคือ เมื่อติดตามเรื่องกับ 'บุคคล' ให้ใช้ 'follow up WITH someone' ส่วนการติดตาม 'งานหรือเอกสาร' ให้ใช้ 'follow up ON something'"
      },
      {
        id: "q-5-4",
        question: "ประโยคใดต่อไปนี้เขียนได้อย่างถูกต้องโดยไม่มีข้อผิดพลาดทางไวยากรณ์ (Grammar Trap)?",
        options: [
          "We must to discuss about the system architecture tomorrow.",
          "We have to discuss about the system architecture tomorrow.",
          "We must discuss the system architecture tomorrow.",
          "We must to discuss the system architecture tomorrow."
        ],
        answer: 2,
        explanation: "ถูกต้อง! มี 2 จุดตายที่ต้องระวัง: 1) หลังกริยาช่วย 'must' ต้องตามด้วยกริยาไม่ผันและไม่มี to (must discuss) 2) กริยา 'discuss' เป็น Transitive Verb จึงตามด้วยกรรมตรงได้ทันทีโดยห้ามใส่บุพบท 'about' ตามหลัง ดังนั้น 'We must discuss the system architecture...' จึงเป็นข้อที่ถูกต้องสมบูรณ์"
      },
      {
        id: "q-5-5",
        question: "ในระหว่างการประชุม หากคุณต้องการแจ้งให้ที่ประชุมทราบว่า 'คุณจำเป็นต้องออกจากห้องประชุมเวลา 15:00 น. ตรงเป๊ะเนื่องจากมีภารกิจอื่นต่อ' สำนวนมืออาชีพข้อใดตรงจุดที่สุด?",
        options: [
          "I must stop my life at 3 PM.",
          "I have a hard stop at 3 PM today.",
          "I will kill the meeting at 3 PM.",
          "I am forced to leave at 3 PM."
        ],
        answer: 1,
        explanation: "ถูกต้อง! 'I have a hard stop at [time]' เป็นสำนวนธุรกิจและอุตสาหกรรมเทคโนโลยีสากลที่สุภาพและเป็นมืออาชีพที่สุดในการแจ้งล่วงหน้าว่าคุณมีนัดหมายสำคัญอื่นต่อ และจำเป็นต้องออกจากประชุมตรงเวลาตามที่ระบุ"
      },
      {
        id: "q-5-6",
        question: "โครงสร้างสมมุติอดีตตรงข้ามความจริงและส่งผลในอดีต (Third Conditional): 'If the automated health check _____ triggered in time, our SRE team _____ the database degradation within 5 minutes.'",
        options: [
          "had / would have resolved",
          "has / would resolve",
          "had have / resolved",
          "was / had resolved"
        ],
        answer: 0,
        explanation: "ถูกต้อง! โครงสร้าง Third Conditional คือ If + Past Perfect (had + V3), Subject + would have + V3 ใช้สำหรับการวิเคราะห์ทบทวนหลังเกิดเหตุ (Post-mortem Incident Analysis) สิ่งที่ถ้าเกิดขึ้นในอดีต ผลลัพธ์ในอดีตก็จะเปลี่ยนไป"
      },
      {
        id: "q-5-7",
        question: "โครงสร้างสมมุติผสมผสานกาลเวลา (Mixed Conditional: อดีตส่งผลถึงปัจจุบัน): 'If we had migrated our services to Kubernetes last quarter, we _____ these painful deployment bottlenecks today.'",
        options: [
          "wouldn't be facing",
          "wouldn't have faced",
          "won't face",
          "didn't face"
        ],
        answer: 0,
        explanation: "ถูกต้อง! อนุประโยคหน้าเป็นเงื่อนไขในอดีต (If + Past Perfect: had migrated) แต่อนุประโยคหลังมีคำว่า 'today' ซึ่งเป็นผลลัพธ์ในปัจจุบัน จึงต้องใช้รูป would(n't) + be + V-ing หรือ would(n't) + V1 เพื่อบอกว่า 'ตอนนี้เราคงไม่ต้องมาเผชิญหน้ากับปัญหานี้'"
      },
      {
        id: "q-5-8",
        question: "โครงสร้าง Future Continuous บอกกิจกรรมที่จะกำลังกระทำอยู่ ณ จุดเวลาในอนาคต: 'This time tomorrow, our infrastructure team _____ the zero-downtime database failover drill.'",
        options: [
          "will be executing",
          "will execute",
          "will have been execute",
          "is execute"
        ],
        answer: 0,
        explanation: "ถูกต้อง! สำนวน 'This time tomorrow' บ่งบอกจุดเวลาที่เจาะจงในอนาคตว่าเราจะ 'กำลังปฏิบัติงานนั้นอยู่' จึงต้องใช้ Future Continuous คือ will be + V-ing ('will be executing')"
      },
      {
        id: "q-5-9",
        question: "ในการประชุม Standup หากมีสองวิศวกรถกเถียงรายละเอียดลึกจนกินเวลาคนอื่น ประโยคใดที่นำเสนอการ 'คุยนอกรอบ' ได้อย่างเป็นมืออาชีพที่สุด?",
        options: [
          "Stop talking now because nobody cares.",
          "This is a great discussion, but let's take this offline so we don't hold up the rest of the standup.",
          "Go outside the room right now and argue there.",
          "You two are wasting everybody's sprint time."
        ],
        answer: 1,
        explanation: "ถูกต้อง! สำนวน 'take this offline' เป็นมาตรฐานสากลในวงการ Tech หมายถึง 'ขอแยกประเด็นนี้ไปคุยนอกรอบ/หลังไมค์' เพื่อรักษาเวลาของคนทั้งทีมใน Standup"
      },
      {
        id: "q-5-10",
        question: "เลือกโครงสร้างการใช้คำว่า 'explain' ที่ถูกต้องตามกฎไวยากรณ์สากล: 'Could you please _____ the new rate-limiting algorithm?'",
        options: [
          "explain to me",
          "explain me",
          "explain for me",
          "explain about to me"
        ],
        answer: 0,
        explanation: "ถูกต้อง! 'explain' เป็นกริยาที่ห้ามตามด้วยกรรมบุคคลตรง ๆ (ห้ามพูด 'explain me' เด็ดขาด) กฎสากลคือ 'explain something to someone' หรือ 'explain to someone something' จึงต้องเป็น 'explain to me'"
      },
      {
        id: "q-5-11",
        question: "เลือก Preposition ให้ถูกต้องตามกฎ Phrasal Verb ของ follow up: 'I will follow up _____ the QA engineer regarding the bug, and follow up _____ the ticket status tomorrow.'",
        options: [
          "with / on",
          "on / with",
          "to / about",
          "with / with"
        ],
        answer: 0,
        explanation: "ถูกต้อง! กฎคือ: ติดตามสอบถามกับ 'บุคคล' ใช้ follow up WITH someone และติดตามความคืบหน้าของ 'เรื่องราว/งาน' ใช้ follow up ON something"
      },
      {
        id: "q-5-12",
        question: "โครงสร้าง Future Perfect Continuous เน้นความต่อเนื่องของระยะเวลาในอนาคต: 'By the end of this year, our lead architect _____ this multi-region platform for five full years.'",
        options: [
          "will have been managing",
          "will be managing",
          "will have managed",
          "is managing"
        ],
        answer: 0,
        explanation: "ถูกต้อง! เมื่อมี 'By + เวลาในอนาคต' ผนวกกับ 'for + ระยะเวลา' (for five full years) ที่ต้องการเน้นย้ำความต่อเนื่องยาวนานไม่ขาดสาย ไวยากรณ์ชั้นสูงจะใช้ Future Perfect Continuous คือ 'will have been managing'"
      },
      {
        id: "q-5-13",
        question: "กฎ Time Clause กับกาลอนาคต: 'We will switch production DNS traffic to the new cluster as soon as the automated health check _____ HTTP 200.'",
        options: [
          "returns",
          "will return",
          "returned",
          "shall return"
        ],
        answer: 0,
        explanation: "ถูกต้อง! หลังคำเชื่อมบอกเวลา 'as soon as, when, before, after' ห้ามใส่ will เด็ดขาด โดยต้องผันกริยาเป็น Present Simple เสมอ ประธานเอกพจน์ 'the health check' จึงใช้ 'returns'"
      },
      {
        id: "q-5-14",
        question: "ในบริบทของทีมวิศวกรซอฟต์แวร์ เมื่อเพื่อนร่วมงานบอกว่า 'I don't have the bandwidth to take on another task this sprint' หมายความว่าอย่างไร?",
        options: [
          "ความเร็วสัญญาณอินเทอร์เน็ตของเขาช้าเกินไป",
          "เขาไม่มีเวลาหรือความพร้อมของตารางงานเพียงพอที่จะรับงานเพิ่มในสปรินต์นี้",
          "ซีพียูเครื่องคอมพิวเตอร์ของเขาทำงานหนักเกินไป",
          "เขาปฏิเสธที่จะทำงานร่วมกับทีมอย่างถาวร"
        ],
        answer: 1,
        explanation: "ถูกต้อง! คำว่า 'bandwidth' ในภาษาอังกฤษสายธุรกิจและ Tech ถูกใช้เป็น Metaphor (อุปมาอุปไมย) หมายถึง 'ขีดความสามารถ เวลา หรือกำลังคนที่มีอยู่' (human mental/time capacity)"
      },
      {
        id: "q-5-15",
        question: "เลือก Phrasal Verb ที่แปลว่า 'พึ่งพาแผนสำรองหรือระบบสำรองฉุกเฉิน': 'If the Redis distributed cache becomes unreachable, the service will _____ the local in-memory fallback.'",
        options: [
          "fall back on",
          "fall down to",
          "fall off from",
          "fall out with"
        ],
        answer: 0,
        explanation: "ถูกต้อง! 'fall back on' เป็นกริยาวลีที่ใช้บ่อยมากในระบบวิศวกรรม แปลว่า 'ถอยกลับไปพึ่งพา/ใช้งานระบบสำรอง' (to rely on something as a secondary reserve when others fail)"
      }
    ]
  }
};
