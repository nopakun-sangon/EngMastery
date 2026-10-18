/**
 * EngMastery: Level 3 - The Connector (CEFR B1)
 * File: lessons/level-3-connector/lesson.js
 * Curriculum: Present Perfect (have/has + V.3), Passive Voice (be + V.3) & If-Clauses (Type 1-2)
 * Designed by: Senior Instructional Designer & Senior Linguist
 */
window.LESSON_3_CONNECTOR = {
  id: "level-3-connector",
  level: "B1",
  levelTitle: "Level 3: The Connector (CEFR B1)",
  levelSub: "เชื่อมความคิดและแสดงเหตุผล: ปลดล็อก Present Perfect (อดีตส่งผลถึงปัจจุบัน), Passive Voice (เน้นผลลัพธ์ของระบบ) และเงื่อนไข If-Clauses",
  badgeColor: {
    bg: "bg-amber-100 dark:bg-amber-950/60",
    text: "text-amber-700 dark:text-amber-300",
    border: "border-amber-300 dark:border-amber-800"
  },
  cefrColor: "amber",
  estimatedTime: "35 นาที",
  xpReward: 150,

  // =========================================================================
  // TAB 1: CORE GRAMMAR (หลักการ, กฎเหล็ก, ข้อยกเว้น, การออกเสียง, กับดักแปล)
  // =========================================================================
  coreGrammar: {
    title: "ไวยากรณ์หลัก: Present Perfect, Passive Voice & Conditionals (If-Clauses)",
    summary: "ก้าวข้ามการพูดประโยคสั้น ๆ สู่การสื่อสารเชิงเหตุผล: เชื่อมต่อผลลัพธ์ในอดีตสู่ปัจจุบัน เน้นย้ำกระบวนการด้วยรูปถูกกระทำ และการวิเคราะห์เงื่อนไขคาดการณ์",

    // A. Conceptual Core & Rules
    rules: [
      {
        ruleName: "1. กฎหัวใจของ Present Perfect (S + have/has + V.3: อดีตที่ส่งผลถึงปัจจุบัน)",
        explanation: "Present Perfect ไม่ใช่แค่อดีตธรรมดา แต่เป็น 'สะพานเชื่อมระหว่างอดีตกับปัจจุบัน' มี 3 ฟังก์ชันหลักที่ต้องใช้:\n1. เพิ่งเสร็จสิ้น และผลลัพธ์ยังเห็นเด่นชัดในปัจจุบัน (คำบอกเวลา: already, just, yet เช่น We have just deployed the hotfix.)\n2. ประสบการณ์ตั้งแต่อดีตจนถึงปัจจุบัน (คำบอกเวลา: ever, never, so far เช่น Have you ever worked with Kubernetes?)\n3. การกระทำที่เริ่มตั้งแต่อดีตและดำเนินต่อเนื่องมาจนถึงปัจจุบัน (คำบอกเวลา: for + ระยะเวลา, since + จุดเริ่มต้นเวลา เช่น I have worked here for 3 years / since 2021.)",
        pitfall: "❌ ผิดร้ายแรงในข้อสอบและการทำงาน: 'I have seen him yesterday.' (ถ้ามีคำบอกเวลาอดีตที่จบไปแล้วเด็ดขาดอย่าง yesterday, last week, ago ห้ามใช้ Present Perfect เด็ดขาด ต้องใช้ Past Simple: 'I saw him yesterday.')",
        proTip: "ท่องจำ: ถ้ามีกรอบเวลาจบแล้ว (Yesterday) -> ใช้ V.2 / ถ้าไม่มีเวลาระบุ หรือต่อเนื่องถึงตอนนี้ (Already, Since) -> ใช้ have/has + V.3"
      },
      {
        ruleName: "2. กฎการเน้นตัวงานและระบบ (Passive Voice: S + Verb to Be + V.3)",
        explanation: "ใช้เมื่อต้องการเน้นที่ 'ตัวผลงาน', 'ตัวระบบ', หรือ 'ผู้ถูกกระทำ' มากกว่าคนทำ หรือเมื่อผู้กระทำไม่สำคัญหรือไม่ทราบแน่ชัด (ใช้มากที่สุดใน Technical Documentation และ Incident Reports):\n• Present Simple Passive: S + is/am/are + V.3 (เช่น The database is backed up every 6 hours.)\n• Past Simple Passive: S + was/were + V.3 (เช่น The critical bug was discovered during the pen test.)\n• Present Perfect Passive: S + have/has been + V.3 (เช่น All security patches have been applied.)",
        pitfall: "❌ ผิดธรรมชาติ: 'The developer updated the server, then the developer restarted it.' / ✅ สุภาพและเป็นมืออาชีพแบบ Passive: 'The server was updated and restarted.'",
        proTip: "รูปกริยาของ Passive Voice จะต้องมี 'Verb to be' ผันตาม Tense เสมอ แล้วตามด้วย 'V.3' ขาดตัวใดตัวหนึ่งไม่ได้"
      },
      {
        ruleName: "3. กฎประโยคเงื่อนไขและการวิเคราะห์ผลกระทบ (Conditionals: If-Clauses)",
        explanation: "• Type 1 (เป็นไปได้จริงในอนาคต): If + Present Simple (V.1), S + will + V.1 (เช่น If the server load exceeds 85%, the autoscaler will launch a new instance.)\n• Type 2 (สมมติตรงข้ามความจริงในปัจจุบัน / ให้คำแนะนำ): If + Past Simple (V.2 หรือ were), S + would + V.1 (เช่น If I were the product owner, I would prioritize this security fix. / If we had more bandwidth, we would rewrite the backend.)",
        pitfall: "❌ ผิดไวยากรณ์: 'If it will rain, we will cancel.' (ในประโยคย่อยหลัง If ห้ามใส่ will เด็ดขาด) / ✅ ถูกต้อง: 'If it rains, we will cancel.'",
        proTip: "ใน Type 2 ภาษาทางการและมืออาชีพจะใช้ 'were' กับประธานทุกตัว (If I were you..., If he were here...)"
      }
    ],

    // Structure Matrix
    comparisonTable: {
      headers: ["โครงสร้าง", "บอกเล่า (+)", "ปฏิเสธ (-)", "คำถาม (?)"],
      rows: [
        {
          subject: "Present Perfect (มีผลถึงปัจจุบัน)",
          positive: "We <span class='text-emerald-600 dark:text-emerald-400 font-bold'>have tested</span> all API endpoints.",
          negative: "We <span class='text-red-500 font-bold'>haven't tested</span> all endpoints yet.",
          question: "<span class='text-amber-500 font-bold'>Have</span> you <span class='text-amber-500 font-bold'>tested</span> all endpoints?",
          audioPositive: "We have tested all API endpoints.",
          audioNegative: "We haven't tested all endpoints yet.",
          audioQuestion: "Have you tested all endpoints?"
        },
        {
          subject: "Passive Voice (ถูกกระทำ)",
          positive: "The data <span class='text-emerald-600 dark:text-emerald-400 font-bold'>is encrypted</span> at rest.",
          negative: "The data <span class='text-red-500 font-bold'>is not encrypted</span> in transit.",
          question: "<span class='text-amber-500 font-bold'>Is</span> the data <span class='text-amber-500 font-bold'>encrypted</span> at rest?",
          audioPositive: "The data is encrypted at rest.",
          audioNegative: "The data is not encrypted in transit.",
          audioQuestion: "Is the data encrypted at rest?"
        },
        {
          subject: "If-Clause Type 1 (เงื่อนไขจริง)",
          positive: "If you <span class='text-emerald-600 dark:text-emerald-400 font-bold'>push</span> code, the pipeline <span class='text-emerald-600 dark:text-emerald-400 font-bold'>will trigger</span>.",
          negative: "If tests <span class='text-red-500 font-bold'>fail</span>, it <span class='text-red-500 font-bold'>will not deploy</span>.",
          question: "If it fails, <span class='text-amber-500 font-bold'>will</span> the alert <span class='text-amber-500 font-bold'>sound</span>?",
          audioPositive: "If you push code, the pipeline will trigger.",
          audioNegative: "If tests fail, it will not deploy.",
          audioQuestion: "If it fails, will the alert sound?"
        }
      ]
    },

    // B. Advanced Sub-Rules & Exceptions
    advancedSubRules: [
      {
        title: "1. ข้อห้ามสำคัญของ Passive Voice: กริยาอกรรม (Intransitive Verbs) ห้ามทำเป็น Passive เด็ดขาด",
        explanation: "กริยาที่ไม่ต้องการกรรม (ไม่มี Object รองรับ) เช่น happen (เกิดขึ้น), occur (เกิดขึ้น), exist (มีอยู่), arrive (มาถึง), disappear (หายไป), rise (เพิ่มขึ้น) ไม่สามารถแปลงเป็นรูป Passive Voice ได้เด็ดขาด เพราะไม่มีกรรมให้ยกขึ้นมาเป็นประธาน:\n• ❌ The incident was happened at 2 AM.\n• ✅ The incident happened at 2 AM.\n• ❌ The issue was occurred yesterday.\n• ✅ The issue occurred yesterday.",
        examples: [
          { text: "❌ A problem was occurred. -> ✅ A problem occurred.", th: "เกิดปัญหาขึ้น (occur เป็นอกรรมกริยา ห้ามใช้ was occurred)" }
        ]
      },
      {
        title: "2. กฎการเลือกใช้ For VS Since ใน Present Perfect",
        explanation: "• 'For' + Period of time (ช่วงความยาวของเวลา): เช่น for 3 hours, for two days, for a decade (ตอบคำถามว่า How long?)\n• 'Since' + Starting point in time (จุดเริ่มต้นของเวลาในอดีต): เช่น since Monday, since 9:00 AM, since we launched the product, since 2020\n• ❌ ข้อห้าม: ห้ามใช้ 'since' ตามด้วยตัวเลขบอกระยะเวลา เช่น 'since 3 years' (ต้องใช้ 'for 3 years' หรือ 'since 3 years ago')",
        examples: [
          { text: "We have monitored this cluster for 48 hours / since yesterday morning.", th: "เรามอนิเตอร์คลัสเตอร์นี้มาเป็นเวลา 48 ชม. / ตั้งแต่เมื่อวานเช้า" }
        ]
      }
    ],

    // C. Pronunciation & Accent Secrets
    pronunciationSecrets: [
      {
        rule: "1. การออกเสียงรูปย่อและ Weak Forms ของ have / has",
        explanation: "ในการพูดอย่างเป็นธรรมชาติ เจ้าของภาษาจะไม่เน้นเสียงคำว่า have / has:\n• 'I have' ลดรูปเป็น 'I've' /aɪv/ (ไอฟว์)\n• 'They have' ลดรูปเป็น 'They've' /ðeɪv/\n• 'It has' ลดรูปเป็น 'It's' /ɪts/\n• 'have been' มักออกเสียงเสียงสระเบา (Schwa /ə/) เป็น /həv bɪn/ หรือ /əv bɪn/",
        phoneticExample: "I've been working here -> /aɪv bɪn ˈwɜːr.kɪŋ hɪr/",
        audio: "I've resolved the issue. We've been notified."
      },
      {
        rule: "2. จังหวะการหยุดเสียงใน If-Clauses (Intonation & Pause)",
        explanation: "เมื่อประโยคเงื่อนไขขึ้นต้นด้วย If-Clause ให้ขึ้นเสียงสูงเล็กน้อย (Rising Intonation) ที่ท้ายประโยคเงื่อนไข และหยุดพักครึ่งจังหวะ (Micro-pause) ก่อนจะลงเสียงต่ำ (Falling Intonation) ในประโยคผลลัพธ์:\n• 'If the tests pass ↗ (หยุดพัก), we will deploy the build ↘.'",
        phoneticExample: "If the server crashes ↗, the system will restart ↘.",
        audio: "If the tests pass, we will deploy the build."
      }
    ],

    // D. Common Thai-English Traps
    thaiEnglishTraps: [
      {
        wrong: "I have seen the client yesterday.",
        right: "I saw the client yesterday. / I have already seen the client.",
        literalThai: "ฉันได้พบลูกค้าเมื่อวานนี้ (สับสนการใช้ have + V3 กับคำว่า yesterday)",
        why: "'yesterday' เป็นเวลาในอดีตที่ปิดฉากลงแล้ว (Finished time) กฎเหล็กของภาษาอังกฤษคือห้ามใช้ Present Perfect ร่วมกับคำระบุเวลาอดีตที่สิ้นสุดแล้ว ต้องใช้ Past Simple (saw)"
      },
      {
        wrong: "The bug was happened after the update.",
        right: "The bug happened after the update.",
        literalThai: "บั๊กถูกเกิดขึ้นหลังจากการอัปเดต (แปลคำว่า 'ถูก' ลงไปตรง ๆ)",
        why: "'happen' แปลว่าเกิดขึ้นเองตามธรรมชาติ เป็นกริยาที่ไม่ต้องการกรรม (Intransitive Verb) จึงไม่สามารถถูกกระทำได้ ห้ามใช้ 'was happened' เด็ดขาด"
      },
      {
        wrong: "I have worked here since 5 years.",
        right: "I have worked here for 5 years. / ...since 2019.",
        literalThai: "ฉันทำงานที่นี่มาตั้งแต่ 5 ปี (ใช้ since กับระยะเวลา)",
        why: "ระยะเวลาที่มีความยาว (5 years, 3 months, 2 days) ต้องใช้คู่กับบุพบท 'for' ส่วน 'since' ต้องตามด้วยจุดเริ่มต้นของกาลเวลาเท่านั้น"
      },
      {
        wrong: "If it will fail, please notify me.",
        right: "If it fails, please notify me.",
        literalThai: "ถ้าหากมันจะล้มเหลว กรุณาแจ้งฉันด้วย (ใส่ will ในอนุประโยค If)",
        why: "ในประโยคเงื่อนไข Clause ที่อยู่ติดกับ 'If' ถือเป็นเงื่อนไขสมมติ ห้ามใส่ 'will' เข้าไป ต้องใช้รูป Present Simple (fails) เสมอ"
      }
    ],

    // Key Examples
    keyExamples: [
      { en: "All user passwords have been encrypted using the SHA-256 algorithm.", th: "รหัสผ่านของผู้ใช้ทุกคนได้รับการเข้ารหัสด้วยอัลกอริทึม SHA-256 เรียบร้อยแล้ว", note: "Present Perfect Passive (have been encrypted) เน้นความปลอดภัยของระบบ" },
      { en: "If we don't scale up the database cluster, the response latency will spike.", th: "หากพวกเราไม่ขยายขนาดคลัสเตอร์ฐานข้อมูล ความหน่วงในการตอบสนองจะพุ่งสูงขึ้นแน่นอน", note: "If-Clause Type 1 คาดการณ์ผลกระทบเชิงเทคนิค" },
      { en: "The incident occurred due to an unexpected hardware failure on node 3.", th: "เหตุการณ์ขัดข้องเกิดขึ้นเนื่องจากความล้มเหลวของฮาร์ดแวร์ที่ไม่คาดคิดบนโหนด 3", note: "occurred กริยาอกรรมในรูป Past Simple ไม่ใช้ Passive" }
    ]
  },

  // =========================================================================
  // TAB 2: CHUNKS & VOCAB (ก้อนประโยค, คำเชื่อมบอกเหตุผล, ศัพท์)
  // =========================================================================
  chunksAndVocab: {
    chunks: [
      { chunk: "The issue has already been resolved.", th: "ปัญหานี้ได้รับการแก้ไขเสร็จเรียบร้อยแล้ว", example: "Good news! The issue has already been resolved by the DevOps team." },
      { chunk: "It hasn't been tested yet.", th: "สิ่งนี้ยังไม่ผ่านการทดสอบเลย", example: "Do not merge this branch; it hasn't been tested yet." },
      { chunk: "If I were in your position, I would...", th: "ถ้าฉันเป็นคุณ / ถ้าฉันอยู่ในสถานการณ์ของคุณ ฉันจะ...", example: "If I were in your position, I would roll back to the previous stable release." },
      { chunk: "Due to unforeseen circumstances...", th: "เนื่องจากสถานการณ์ที่ไม่คาดฝัน...", example: "Due to unforeseen network spikes, deployment is delayed." },
      { chunk: "Although the build passed...", th: "แม้ว่าตัวบิลด์จะผ่านการทดสอบแล้ว แต่ว่า...", example: "Although the build passed, we must run end-to-end regression tests." }
    ],

    industryTechChunks: [
      { chunk: "The changes have been pushed to production.", th: "การเปลี่ยนแปลงได้รับการพุชขึ้นโปรดักชันเรียบร้อยแล้ว", context: "Release", example: "All approved changes have been pushed to production." },
      { chunk: "Due to high traffic volume, latency has increased.", th: "เนื่องจากปริมาณการใช้งานหนาแน่น ความหน่วงจึงเพิ่มสูงขึ้น", context: "Network", example: "Due to high traffic volume, latency has increased by 20%." },
      { chunk: "The vulnerability was patched immediately.", th: "ช่องโหว่ความปลอดภัยได้รับการอุดทันที", context: "Security", example: "The zero-day vulnerability was patched immediately upon discovery." },
      { chunk: "If the load balancer fails, traffic redirects automatically.", th: "ถ้าโหลดบาลานเซอร์มีปัญหา ทราฟฟิกจะถูกส่งต่อไปยังอีกจุดอัตโนมัติ", context: "High Availability", example: "If node A fails, traffic redirects automatically to node B." }
    ],

    essentialVocab: [
      { word: "vulnerability", ipa: "/ˌvʌl.nɚ.əˈbɪl.ə.t̬i/", pos: "n.", th: "ช่องโหว่ด้านความปลอดภัย, จุดอ่อน", example: "The security scan detected a major vulnerability." },
      { word: "redundancy", ipa: "/rɪˈdʌn.dən.si/", pos: "n.", th: "ระบบสำรองเผื่อฉุกเฉิน", example: "We designed dual power redundancy for the servers." },
      { word: "implement", ipa: "/ˈɪm.plə.ment/", pos: "v.", th: "ติดตั้งใช้งาน, ปฏิบัติตามแผน", example: "We will implement the new caching layer next sprint." },
      { word: "compromised", ipa: "/ˈkɑːm.prə.maɪzd/", pos: "adj./v.", th: "ถูกละเมิดความปลอดภัย/รั่วไหล", example: "No customer credentials were compromised." }
    ],

    verbForms: [
      { v1: "apply", v2: "applied", v3: "applied", th: "ปรับใช้, สมัคร", example: "The security update was applied." },
      { v1: "occur", v2: "occurred", v3: "occurred", th: "เกิดขึ้น (อกรรมกริยา)", example: "The crash occurred at midnight." },
      { v1: "encrypt", v2: "encrypted", v3: "encrypted", th: "เข้ารหัสข้อมูล", example: "All passwords have been encrypted." },
      { v1: "prevent", v2: "prevented", v3: "prevented", th: "ป้องกัน, ขัดขวาง", example: "This firewall rule prevented unauthorized access." }
    ]
  },

  // =========================================================================
  // TAB 3: REAL-LIFE DIALOGUE (บทสนทนาสถานการณ์จริง + เหตุผลเบื้องหลัง Tense)
  // =========================================================================
  realLifeDialogue: {
    scenario: "War Room: Post-Incident Debrief & Preventive SLA Policy",
    scenarioTh: "สถานการณ์: ห้อง War Room วิเคราะห์ปัญหาหลังระบบล่ม และการวางนโยบายป้องกันเชิงโครงสร้าง",
    grammarRationale: "วิเคราะห์การใช้ Tenses: พูดถึงสถานะปัจจุบันที่งานเสร็จแล้วใช้ Present Perfect ('has been restored'), อธิบายการกระทำต่อระบบโดยเน้นความปลอดภัยใช้ Passive Voice ('was caused by', 'have been isolated'), และการเสนอแนวทางป้องกันในอนาคตใช้ If-Clause Type 1 และ 2",
    turns: [
      {
        speaker: "Incident Commander",
        side: "left",
        avatar: "👮‍♂️",
        name: "Marcus (Incident Commander)",
        en: "Team, can I get a status update on the payment gateway outage? Has service been fully restored?",
        th: "ทุกคนครับ ขออัปเดตสถานะปัญหาระบบชำระเงินขัดข้องหน่อยครับ ตอนนี้บริการได้รับการกู้คืนกลับมาสมบูรณ์หรือยังครับ?",
        tenseRationale: "Present Perfect Passive question: ถามสถานะผลลัพธ์ของระบบ ณ ปัจจุบันโดยเน้นที่ตัวบริการ (service)"
      },
      {
        speaker: "You",
        side: "right",
        avatar: "🧑",
        name: "You (Senior Site Reliability Engineer)",
        en: "Yes, Marcus. Service has been fully restored for 30 minutes, and all queued transactions have been processed.",
        th: "เรียบร้อยแล้วครับมาร์คัส บริการได้รับการกู้คืนกลับมาสมบูรณ์เป็นเวลา 30 นาทีแล้ว และธุรกรรมที่ตกค้างในคิวทั้งหมดได้รับการประมวลผลแล้วครับ",
        tenseRationale: "Present Perfect Passive (has been restored / have been processed): ยืนยันผลลัพธ์ของงานที่เสร็จและยังคงส่งผลดีในปัจจุบัน"
      },
      {
        speaker: "Incident Commander",
        side: "left",
        avatar: "👮‍♂️",
        name: "Marcus (Incident Commander)",
        en: "Excellent news. Do we know what caused the downtime? Was it triggered by the new microservice release?",
        th: "ยอดเยี่ยมมากครับ แล้วเราทราบสาเหตุหรือยังว่าเกิดจากอะไร? มันถูกกระตุ้นจากตัวไมโครเซอร์วิสที่เพิ่งปล่อยไปหรือเปล่าครับ?",
        tenseRationale: "Past Simple Passive: ถามถึงเหตุการณ์ต้นเหตุในอดีต (Was it triggered...)"
      },
      {
        speaker: "You",
        side: "right",
        avatar: "🧑",
        name: "You (Senior Site Reliability Engineer)",
        en: "No. The incident occurred due to an unexpected memory exhaustion. The bad containers have already been isolated.",
        th: "ไม่ใช่ครับ เหตุการณ์นี้เกิดขึ้นเนื่องจากหน่วยความจำหมดลงโดยไม่คาดคิด คอนเทนเนอร์ตัวที่มีปัญหาได้รับการแยกกักกันไว้เรียบร้อยแล้วครับ",
        tenseRationale: "occurred (อกรรมกริยาห้ามใช้ Passive) + have already been isolated (Passive เน้นการป้องกัน)"
      },
      {
        speaker: "Incident Commander",
        side: "left",
        avatar: "👮‍♂️",
        name: "Marcus (Incident Commander)",
        en: "What is our architectural recommendation to prevent this from repeating?",
        th: "แล้วเรามีคำแนะนำเชิงสถาปัตยกรรมอย่างไรบ้างเพื่อป้องกันไม่ให้เกิดเหตุการณ์นี้ซ้ำรอยอีก?",
        tenseRationale: "Present Simple: ถามคำแนะนำและแนวทางปฏิบัติเชิงวิศวกรรม"
      },
      {
        speaker: "You",
        side: "right",
        avatar: "🧑",
        name: "You (Senior Site Reliability Engineer)",
        en: "If we configure automated CPU and memory limits, the orchestrator will kill runaway processes before they crash the host.",
        th: "หากพวกเราตั้งค่าขีดจำกัดซีพียูและหน่วยความจำอัตโนมัติ ตัวจัดการจะตัดกระบวนการที่ทำงานผิดปกติทิ้งทันทีก่อนที่มันจะทำโฮสต์พังครับ",
        tenseRationale: "If-Clause Type 1 (If we configure ..., will kill ...): คาดการณ์ทางออกทางเทคนิคที่มีโอกาสเป็นจริงและได้ผลแน่นอน"
      }
    ]
  },

  // =========================================================================
  // TAB 4: ACTION DRILL & DETAILED QUIZ (ภารกิจพูด + แบบทดสอบ 5 ข้อพร้อมเฉลย)
  // =========================================================================
  actionDrillAndQuiz: {
    dailyMission: {
      title: "ภารกิจพูดเชื่อมโยงผลลัพธ์และเงื่อนไข (Connector Speaking Drill)",
      instruction: "ฝึกพูดประโยคที่ผสาน: Present Perfect Passive (งานได้รับการทำเสร็จแล้ว) + เหตุผล (due to) + เงื่อนไขอนาคต (If-Clause Type 1):",
      targetPhrase: "The database has been updated, and if we monitor the metrics, no errors will occur.",
      targetTh: "ฐานข้อมูลได้รับการอัปเดตเรียบร้อยแล้ว, และหากพวกเราเฝ้าดูสถิติตัวชี้วัด, ก็จะไม่มีข้อผิดพลาดใด ๆ เกิดขึ้นแน่นอน",
      tip: "สังเกตความแตกต่าง: has been updated (ถูกกระทำสมบูรณ์), if we monitor (ห้ามใส่ will หลัง if), และ no errors will occur (occur เป็นอกรรมกริยา)"
    },

    quizQuestions: [
      {
        id: "q-3-1",
        question: "ประโยคใดต่อไปนี้ใช้ไวยากรณ์ได้ถูกต้องตามหลักภาษาอังกฤษสากล?",
        options: [
          "We have launched the new billing platform yesterday afternoon.",
          "We launched the new billing platform yesterday afternoon.",
          "We have launched the new billing platform since yesterday afternoon.",
          "We were launched the new billing platform yesterday afternoon."
        ],
        answer: 1,
        explanation: "ถูกต้อง! เมื่อประโยคมีคำระบุเวลาอดีตที่สิ้นสุดลงแล้วอย่างชัดเจนคือ 'yesterday afternoon' กฎเหล็กบังคับว่าต้องใช้ Past Simple (launched) เท่านั้น ห้ามใช้ Present Perfect (have launched) ร่วมกับ yesterday เด็ดขาด"
      },
      {
        id: "q-3-2",
        question: "เติมคำในช่องว่างให้ถูกต้องตามหลัก Passive Voice: 'All confidential customer records _____ with advanced encryption standard.'",
        options: [
          "is protected",
          "are protected",
          "protects",
          "have protecting"
        ],
        answer: 1,
        explanation: "ถูกต้อง! ประธานของประโยคคือ 'All confidential customer records' เป็นพหูพจน์ (มีหลายระเบียนข้อมูล) และเป็นผู้ถูกกระทำ (ถูกปกป้อง) จึงต้องใช้ Verb to be พหูพจน์ 'are' ตามด้วยกริยาช่อง 3 'protected' กลายเป็น 'are protected'"
      },
      {
        id: "q-3-3",
        question: "ข้อใดคือการใช้คำว่า 'occur' (เกิดขึ้น) ในประโยคอดีตได้อย่างถูกต้อง?",
        options: [
          "The unexpected outage was occurred during the routine maintenance.",
          "The unexpected outage occurred during the routine maintenance.",
          "The unexpected outage has been occurred during the routine maintenance.",
          "The unexpected outage was being occurred during the routine maintenance."
        ],
        answer: 1,
        explanation: "ถูกต้องอย่างยิ่ง! 'occur' เป็น Intransitive Verb (อกรรมกริยา ที่ไม่มีกรรมมารองรับ) กฎเหล็กของภาษาอังกฤษคือห้ามนำกริยากลุ่มนี้มาทำเป็นรูป Passive Voice เด็ดขาด ดังนั้น 'was occurred' จึงผิดไวยากรณ์ ต้องเขียนเป็น 'occurred' ในรูป Active Voice ปกติ"
      },
      {
        id: "q-3-4",
        question: "เติมคำในช่องว่าง: 'I have been managing this cloud infrastructure _____ the company was founded in 2020.'",
        options: [
          "for",
          "since",
          "during",
          "from"
        ],
        answer: 1,
        explanation: "ถูกต้อง! 'the company was founded in 2020' เป็นจุดเริ่มต้นของเวลา (Starting point in time) ในอดีต ดังนั้นคำเชื่อมบอกเวลาที่ถูกต้องใน Present Perfect คือ 'since' (ส่วน 'for' จะใช้กับช่วงระยะเวลาที่มีความยาว เช่น for 4 years)"
      },
      {
        id: "q-3-5",
        question: "ประโยคเงื่อนไข If-Clause ข้อใดถูกต้องตามหลักไวยากรณ์?",
        options: [
          "If the build will fail, the system will send an automated alert.",
          "If the build fails, the system will send an automated alert.",
          "If the build failed, the system will send an automated alert.",
          "If the build is failing, the system would send an automated alert."
        ],
        answer: 1,
        explanation: "ถูกต้อง! ในประโยคเงื่อนไข Type 1 (เหตุการณ์ที่เป็นไปได้จริงในอนาคต) โครงสร้างคือ 'If + Present Simple (V.1), S + will + V.1' โดยในส่วนของประโยคย่อยหลัง If ห้ามใส่ will เด็ดขาด จึงต้องใช้ 'If the build fails...'"
      }
    ]
  }
};
