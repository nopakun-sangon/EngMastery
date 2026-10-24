/**
 * EngMastery: Level 6 - The Master (CEFR C1)
 * File: lessons/level-6-master/lesson.js
 * Curriculum: All 3 Perfect Continuous Tenses, Hedging Language, Cleft Sentences & PREP Framework
 * Designed by: Senior Instructional Designer & Senior Linguist
 */
window.LESSON_6_MASTER = {
  id: "level-6-master",
  level: "C1",
  levelTitle: "Level 6: The Master (CEFR C1)",
  levelSub: "ความเชี่ยวชาญระดับสูง: Perfect Continuous ทั้ง 3 ตัว, ศิลปะ Hedging ลดแรงปะทะ, Cleft Sentences เน้นประเด็น และ PREP Framework",
  badgeColor: {
    bg: "bg-purple-100 dark:bg-purple-950/60",
    text: "text-purple-700 dark:text-purple-300",
    border: "border-purple-300 dark:border-purple-800"
  },
  cefrColor: "purple",
  estimatedTime: "45 นาที",
  xpReward: 200,

  // =========================================================================
  // TAB 1: CORE GRAMMAR (หลักการ, กฎเหล็ก, ข้อยกเว้น, การออกเสียง, กับดักแปล)
  // =========================================================================
  coreGrammar: {
    title: "ไวยากรณ์หลัก: Perfect Continuous Tenses, Hedging & Cleft Sentences",
    summary: "วาทศิลป์และการสื่อสารชั้นสูงระดับผู้นำองค์กร: เน้นย้ำความต่อเนื่องของเวลาด้วย Perfect Continuous, การใช้ภาษาลดแรงปะทะ (Hedging), และการตรึงความสนใจด้วย Cleft Sentences",

    // A. Conceptual Core & Rules
    rules: [
      {
        ruleName: "1. ตระกูล Perfect Continuous ทั้ง 3 มิติเวลา (เน้นย้ำความทุ่มเทและระยะเวลาอย่างต่อเนื่อง)",
        explanation: "ในขณะที่ Simple Perfect เน้นที่ 'ผลลัพธ์ว่าเสร็จหรือยัง' แต่ Perfect Continuous ถูกสร้างขึ้นมาเพื่อ 'เน้นย้ำความต่อเนื่อง ความเหน็ดเหนื่อย และระยะเวลาที่ดำเนินมาอย่างไม่หยุดหย่อน (Duration & Ongoingness)':\n• 1) Present Perfect Continuous: S + have/has been + V.ing (ทำต่อเนื่องตั้งแต่อดีตจนถึงวินาทีนี้ เช่น 'We have been refactoring this legacy monolith for six months.')\n• 2) Past Perfect Continuous: S + had been + V.ing (ทำต่อเนื่องในอดีตจนกระทั่งมีอีกเหตุการณ์ในอดีตมาตัดจบ เช่น 'The team had been investigating the memory leak for four hours before they discovered the deadlock.')\n• 3) Future Perfect Continuous: S + will have been + V.ing (ดำเนินต่อเนื่องไปจนถึงจุดหนึ่งในอนาคต เช่น 'By next October, I will have been leading this cloud transformation for five years.')",
        pitfall: "❌ สับสนจุดเน้น: 'I have written emails all morning.' (เน้นว่าเขียนเสร็จกี่ฉบับ) / ✅ เน้นว่าใช้เวลาและความพยายามทั้งเช้า: 'I have been writing emails all morning.'",
        proTip: "หากต้องการเน้นย้ำความทุ่มเท หรือแสดงหลักฐานว่าทำสิ่งนั้นมาอย่างหนักหน่วง ให้เลือกใช้รูป Continuous เสมอ"
      },
      {
        ruleName: "2. ศิลปะการลดแรงปะทะทางความคิด (Hedging & Softening Language)",
        explanation: "ผู้นำระดับสูงในองค์กรสากลจะไม่พูดจาขวานผ่าซากหรือตัดสินถูก-ผิดแบบทื่อ ๆ แต่จะใช้เทคนิค 'Hedging' เพื่อสร้างพื้นที่ปลอดภัยทางความคิดและลดความขัดแย้งในที่ประชุม:\n• หลีกเลี่ยงคำฟันธง: Always, Never, Wrong, Bad, Impossible\n• ใช้ Modal Shields: 'It would seem that...', 'This could potentially indicate...', 'We might want to reconsider...'\n• ใช้ Epistemic Verbs & Adverbs: tend to, appear to, arguably, tentatively, somewhat\n• ตัวอย่าง: แทนที่จะพูด 'Your architecture is wrong and slow.' ให้เปลี่ยนเป็น 'It appears that this architectural pattern might introduce potential latency under high concurrency.'",
        pitfall: "❌ พูดตรงเกินไปจนสร้างศัตรู: 'I disagree with your proposal.' / ✅ แบบ C1 Professional: 'I see your point; however, from a scalability perspective, there might be a few caveats we need to address.'",
        proTip: "Hedging ไม่ใช่ความไม่มั่นใจ แต่เป็น 'วาทศิลป์ชั้นสูง' ที่แสดงถึงความสุขุม รอบคอบ และการเปิดรับฟังมุมมองที่แตกต่าง"
      },
      {
        ruleName: "3. การเน้นย้ำประเด็นสำคัญด้วยประโยคตัดแยก (Cleft Sentences)",
        explanation: "ใช้เน้นย้ำให้ผู้ฟังรู้ว่า 'อะไรคือจุดสำคัญที่สุดจริง ๆ' ของสิ่งที่เรากำลังพูดถึง โดยการผ่าโครงสร้างประโยคเดิมออกเป็นสองส่วน:\n• What-Cleft (เน้นสิ่งที่ต้องทำ): What + S + V + is/was + Complement (เช่น 'What we really need to focus on is system resilience.' จากเดิม 'We need to focus on system resilience.')\n• It-Cleft (เน้นตัวการหรือสาเหตุ): It + is/was + คำที่ต้องการเน้น + that/who... (เช่น 'It was the unindexed database query that caused the entire outage.' จากเดิม 'The unindexed query caused the outage.')",
        pitfall: "❌ เขียนไวยากรณ์ตกหล่น: 'What we need is solve the issue.' / ✅ ถูกต้อง: 'What we need to do is solve the issue.' หรือ 'What we need is a scalable solution.'",
        proTip: "ใช้ Cleft Sentence ในช่วงบทสรุปของการนำเสนอเพื่อตรึงใจคณะกรรมการบริหารหรือลูกค้า"
      }
    ],

    // Structure Matrix
    comparisonTable: {
      headers: ["ระดับภาษา", "การสื่อสารทั่วไป (Too Direct / Flat)", "การสื่อสารระดับ C1 Executive (Softened & Strategic)", "กลวิธีทางภาษา (Technique)"],
      rows: [
        {
          subject: "การแสดงความเห็นต่าง",
          positive: "That won't work.",
          negative: "I am <span class='text-emerald-600 dark:text-emerald-400 font-bold'>not entirely convinced</span> that this approach would yield the desired ROI.",
          question: "<span class='text-purple-600 dark:text-purple-400 font-bold'>Hedging Shield</span>",
          audioPositive: "That won't work.",
          audioNegative: "I am not entirely convinced that this approach would yield the desired ROI.",
          audioQuestion: "I am not entirely convinced that this approach would yield the desired ROI."
        },
        {
          subject: "การชี้ข้อผิดพลาด",
          positive: "Your code caused the bug.",
          negative: "<span class='text-emerald-600 dark:text-emerald-400 font-bold'>It was the unexpected edge case in the parser that</span> triggered the race condition.",
          question: "<span class='text-purple-600 dark:text-purple-400 font-bold'>It-Cleft Focus</span>",
          audioPositive: "Your code caused the bug.",
          audioNegative: "It was the unexpected edge case in the parser that triggered the race condition.",
          audioQuestion: "It was the unexpected edge case in the parser that triggered the race condition."
        },
        {
          subject: "การสรุปประเด็นหลัก",
          positive: "We must reduce cloud costs.",
          negative: "<span class='text-emerald-600 dark:text-emerald-400 font-bold'>What we fundamentally need to address</span> is our idle infrastructure overhead.",
          question: "<span class='text-purple-600 dark:text-purple-400 font-bold'>What-Cleft Focus</span>",
          audioPositive: "We must reduce cloud costs.",
          audioNegative: "What we fundamentally need to address is our idle infrastructure overhead.",
          audioQuestion: "What we fundamentally need to address is our idle infrastructure overhead."
        }
      ]
    },

    // B. Advanced Sub-Rules & Exceptions
    advancedSubRules: [
      {
        title: "1. ข้อยกเว้นของ Stative Verbs ใน Perfect Continuous (กฎเหล็กที่ข้อสอบ C1 ดักทุกปี)",
        explanation: "แม้ว่าใจความจะต้องการเน้นความต่อเนื่องยาวนานแค่ไหนก็ตาม หากคำกริยาเป็น Stative Verb (เช่น know, believe, understand, belong, own, have ที่แปลว่ามี) 'ห้ามเติม -ing' เด็ดขาด และต้องถอยกลับมาใช้ Present Perfect Simple แทน:\n• ❌ I have been knowing him for ten years.\n• ✅ I have known him for ten years.\n• ❌ We have been understanding this architecture since day one.\n• ✅ We have understood this architecture since day one.",
        examples: [
          { text: "❌ I have been having this laptop for 3 years. -> ✅ I have had this laptop for 3 years.", th: "have แปลว่าครอบครอง ต้องใช้ have had ห้ามใช้ have been having" }
        ]
      },
      {
        title: "2. วาทศิลป์การกลับหัวประโยคเชิงลบ (Negative Inversion for Dramatic Emphasis)",
        explanation: "เมื่อนำคำบอกความถี่เชิงปฏิเสธ (Seldom, Rarely, Never before, Not only, Little) ขึ้นต้นประโยคเพื่อการปราศรัยหรือการนำเสนอระดับสูง จะต้อง 'สลับกริยาช่วยขึ้นหน้าประธาน' เสมือนรูปประโยคคำถาม:\n• 'We have rarely witnessed such resilience.' -> 'Rarely have we witnessed such engineering resilience.'\n• 'We not only hit the target, but we also cut costs.' -> 'Not only did we hit the target, but we also cut infrastructure costs by 30%.'",
        examples: [
          { text: "Seldom have we encountered such a complex distributed deadlock.", th: "ไม่บ่อยนักที่พวกเราจะได้เผชิญกับปัญหา Deadlock ที่ซับซ้อนเช่นนี้" }
        ]
      },
      {
        title: "3. กรอบการสื่อสารเชิงกลยุทธ์ PREP Framework",
        explanation: "กรอบการตอบคำถามของผู้บริหารระดับสากลเมื่อถูกยิงคำถามยาก:\n• P (Point): สรุปแก่นความคิดใน 1 ประโยคชัดเจน\n• R (Reason): ให้เหตุผลทางตรรกะหรือข้อมูลรองรับ\n• E (Example): ยกตัวอย่างรูปธรรม สถิติ หรือ Use case จริง\n• P (Point): ย้ำหมุดประเด็นเดิมเพื่อความหนักแน่น",
        examples: [
          { text: "P: We should adopt Event-Driven Architecture. R: It decouples our core services. E: For instance, Black Friday traffic won't crash checkout. P: Therefore, EDA is our best strategic move.", th: "กรอบ PREP ช่วยให้การพูดกระชับ คม และมีพลังโน้มน้าวใจสูงสุด" }
        ]
      }
    ],

    // C. Pronunciation & Accent Secrets
    pronunciationSecrets: [
      {
        rule: "1. การเน้นเสียงหนักที่จุดโฟกัส (Nuclear Stress in Cleft Sentences)",
        explanation: "ในประโยค Cleft Sentence คำที่เราต้องการเน้นย้ำจะได้รับ 'น้ำหนักเสียงสูงสุดในประโยค' (Pitch Peak & Primary Stress) เพื่อให้ผู้ฟังจำคำนั้นได้ทันที:\n• 'What we really need is *INNOVATION* ↗↘.'\n• 'It was the *DATABASE* ↗↘ that crashed, not the API gateway.'",
        phoneticExample: "What we need is SPEED /ˈspid/ | It was the CACHE /ˈkæʃ/",
        audio: "What we really need is innovation. It was the database that failed."
      },
      {
        rule: "2. ทำนองเสียงขึ้นแล้วลงแบบ Diplomatic Hedging (Fall-Rise Tone)",
        explanation: "เมื่อใช้ประโยค Hedging ลดแรงปะทะ เจ้าของภาษาจะใช้ทำนองเสียง 'ตกแล้วช้อนขึ้นเล็กน้อย' (Fall-Rise Tone /v/) ที่ท้ายประโยคเพื่อส่งสัญญาณทางน้ำเสียงว่า 'ฉันกำลังเปิดรับฟังความคิดเห็นของคุณอยู่นะ ไม่ได้มีเจตนาตัดสิน':\n• 'That might be a viable alternative ↘↗...'",
        phoneticExample: "That might be true ↘↗...",
        audio: "That might be a viable alternative. I see where you are coming from."
      }
    ],

    // D. Common Thai-English Traps
    thaiEnglishTraps: [
      {
        wrong: "I have been knowing Sarah since 2018.",
        right: "I have known Sarah since 2018.",
        literalThai: "ฉันรู้จักซาร่าห์มาอย่างต่อเนื่องตั้งแต่ปี 2018 (ใส่ -ing เพราะเห็นว่ารู้จักมานาน)",
        why: "'know' เป็น Stative Verb เกี่ยวกับความทรงจำ/ความสัมพันธ์ ซึ่งไม่มีรูปการกระทำทางกายภาพ จึงห้ามใช้ในรูป Continuous ทุกกรณี แม้จะทำต่อเนื่องมาเป็น 10 ปี ก็ต้องใช้ Present Perfect Simple (have known)"
      },
      {
        wrong: "Your idea is wrong and inefficient.",
        right: "I see where you're coming from, but there might be a potential scalability concern.",
        literalThai: "ความคิดของคุณผิดและไม่มีประสิทธิภาพ (การสื่อสารแบบขวานผ่าซากทำลายความสัมพันธ์)",
        why: "ในวัฒนธรรมองค์กรสากลระดับ C1 การวิจารณ์งานต้องแยกแยะระหว่าง 'บุคคล' กับ 'ไอเดีย' โดยใช้ Hedging เพื่อชี้ให้เห็นความเสี่ยงทางเทคนิคแทนการโจมตีความคิดของเพื่อนร่วมงาน"
      },
      {
        wrong: "Not only we improved performance, but we also cut costs.",
        right: "Not only did we improve performance, but we also cut costs.",
        literalThai: "ไม่เพียงแค่พวกเราปรับปรุงประสิทธิภาพได้ แต่เรายังลดต้นทุนได้ด้วย (ลืมสลับกริยาช่วยใน Negative Inversion)",
        why: "เมื่อนำ 'Not only' ขึ้นต้นประโยคหน้า โครงสร้างไวยากรณ์ขั้นสูงกำหนดให้ต้องเกิด Inversion โดยดึงกริยาช่วย (did) ขึ้นมาวางหน้าประธาน (we) เสมือนรูปประโยคคำถาม"
      },
      {
        wrong: "What we need is solve the deployment latency.",
        right: "What we need to do is solve the deployment latency. / What we need is a solution for deployment latency.",
        literalThai: "สิ่งที่เราต้องการคือแก้ปัญหาความหน่วง (ใช้ Verb แท้ชนกันหลัง is)",
        why: "ในโครงสร้าง What-Cleft หากใช้ 'What we need is...' ด้านหลังคำว่า is จะต้องตามด้วยคำนาม (Noun Phrase) หรือหากต้องการใช้กริยา ต้องขึ้นต้นด้วย 'What we need TO DO is (to) solve...'"
      }
    ],

    // Key Examples
    keyExamples: [
      { en: "By Q4, our cloud infrastructure team will have been operating this serverless platform for three consecutive years.", th: "ก่อนถึงไตรมาสที่ 4 ทีมสถาปัตยกรรมคลาวด์ของเราจะได้ดำเนินงานแพลตฟอร์มไร้เซิร์ฟเวอร์นี้ติดต่อกันเป็นเวลาครบ 3 ปีเต็ม", note: "Future Perfect Continuous เน้นย้ำความต่อเนื่องยาวนานของภารกิจ" },
      { en: "What we fundamentally need to reconcile is the trade-off between rapid feature delivery and technical debt.", th: "สิ่งที่พวกเราจำเป็นต้องประนีประนอมให้ลงตัวจริง ๆ คือความสมดุลระหว่างความเร็วในการส่งมอบฟีเจอร์กับหนี้ทางเทคนิค", note: "What-Cleft Sentence ตรึงความสนใจของที่ประชุมในจุดยุทธศาสตร์" },
      { en: "It was arguably the lack of end-to-end integration testing that allowed the vulnerability to reach staging.", th: "ปฏิเสธได้ยากว่าการขาดการทดสอบการเชื่อมต่อแบบครบวงจรคือตัวการที่ทำให้ช่องโหว่ความปลอดภัยหลุดรอดไปถึงระบบทดสอบ", note: "It-Cleft ผสาน Probability adverb (arguably) อย่างคมคาย" }
    ]
  },

  // =========================================================================
  // TAB 2: CHUNKS & VOCAB (C1 Idioms, ก้อนประโยคผู้บริหาร, ศัพท์ขั้นสูง)
  // =========================================================================
  chunksAndVocab: {
    chunks: [
      { chunk: "A double-edged sword", th: "ดาบสองคม (มีทั้งข้อดีมหาศาลและข้อเสียที่ต้องระวัง)", example: "Microservices are a double-edged sword: they offer scalability but introduce operational overhead." },
      { chunk: "Hit the nail on the head", th: "พูดได้ตรงประเด็นเป๊ะ ๆ / เจาะตรงใจกลางปัญหา", example: "You hit the nail on the head regarding our database bottlenecks." },
      { chunk: "Play devil's advocate", th: "แกล้งสวมบทบาทเป็นฝ่ายตรงข้ามเพื่อท้าทายสมมติฐานและหาช่องโหว่", example: "Allow me to play devil's advocate: what happens if AWS suffers a multi-region outage?" },
      { chunk: "Keep someone in the loop", th: "คอยอัปเดตข้อมูลให้รับรู้ความเคลื่อนไหวอย่างต่อเนื่อง", example: "Please keep the security team in the loop throughout the audit." },
      { chunk: "To put things into perspective...", th: "เพื่อให้เห็นภาพรวมที่แท้จริงและเป็นธรรม...", example: "To put things into perspective, our downtime was less than 0.01% this year." },
      { chunk: "From a strategic standpoint...", th: "หากมองจากมุมมองเชิงกลยุทธ์ระยะยาวแล้ว...", example: "From a strategic standpoint, investing in automated CI/CD is an absolute necessity." }
    ],

    industryTechChunks: [
      { chunk: "We must strike a balance between speed and reliability.", th: "เราต้องสร้างสมดุลระหว่างความเร็วในการส่งมอบงานกับความเสถียรของระบบ", context: "Engineering Strategy", example: "We must strike a balance between velocity and architectural integrity." },
      { chunk: "Not only did we mitigate the risk, but we also cut cloud spend.", th: "ไม่เพียงแต่เราลดความเสี่ยงลงได้ แต่เรายังลดค่าใช้จ่ายคลาวด์ลงได้อีกด้วย", context: "Executive Presentation", example: "Not only did we mitigate the risk, but we also cut cloud spend by 25%." },
      { chunk: "It is arguably the most resilient architecture in our portfolio.", th: "นี่อาจกล่าวได้ว่าเป็นสถาปัตยกรรมที่มีความทนทานต่อความล้มเหลวสูงสุดในองค์กร", context: "Architecture Review", example: "It is arguably the most resilient architecture in our production portfolio." },
      { chunk: "I am inclined to believe that a gradual migration is prudent.", th: "ผมมีแนวโน้มที่จะเชื่อว่าการค่อย ๆ ทยอยย้ายระบบทีละส่วนเป็นการตัดสินใจที่รอบคอบกว่า", context: "Diplomatic Hedging", example: "I am inclined to believe that an incremental rollout is more prudent." }
    ],

    essentialVocab: [
      { word: "resilience", ipa: "/rɪˈzɪl.jəns/", pos: "n.", th: "ความสามารถในการฟื้นตัวกลับสู่สภาพปกติได้อย่างรวดเร็ว", example: "The platform's resilience under load was exceptional." },
      { word: "prudent", ipa: "/ˈpruː.dənt/", pos: "adj.", th: "รอบคอบ, สุขุม, ระมัดระวังความเสี่ยง", example: "It is prudent to conduct a dry-run before live migration." },
      { word: "reconcile", ipa: "/ˈrek.ən.saɪl/", pos: "v.", th: "ประนีประนอม, ปรับสิ่งขัดแย้งให้ลงรอยกัน", example: "We must reconcile developer autonomy with corporate compliance." },
      { word: "caveat", ipa: "/ˈkæv.i.æt/", pos: "n.", th: "ข้อแม้, ข้อพึงระวัง, เงื่อนไขเตือนใจ", example: "The benchmark looks promising, with one major caveat." }
    ],

    verbForms: [
      { v1: "reconcile", v2: "reconciled", v3: "reconciled", th: "ปรับให้ลงรอยกัน", example: "They reconciled the diverging requirements." },
      { v1: "mitigate", v2: "mitigated", v3: "mitigated", th: "บรรเทาความเสียหาย", example: "The circuit breaker mitigated the cascade failure." },
      { v1: "underestimate", v2: "underestimated", v3: "underestimated", th: "ประเมินค่าต่ำเกินไป", example: "We underestimated the network latency." },
      { v1: "deviate", v2: "deviated", v3: "deviated", th: "เบี่ยงเบนออกจากมาตรฐาน", example: "The implementation did not deviate from the spec." }
    ]
  },

  // =========================================================================
  // TAB 3: REAL-LIFE DIALOGUE (บทสนทนาสถานการณ์จริง + เหตุผลเบื้องหลัง Tense)
  // =========================================================================
  realLifeDialogue: {
    scenario: "Executive Architectural Committee: Microservices vs Modular Monolith Debate",
    scenarioTh: "สถานการณ์: การประชุมคณะกรรมการสถาปัตยกรรมเทคโนโลยีระดับผู้บริหาร ถกเถียงทิศทางระบบระหว่าง Microservices กับ Modular Monolith",
    grammarRationale: "วิเคราะห์การใช้ Tenses และวาทศิลป์: ทั้งสองฝ่ายใช้ Present Perfect Continuous เพื่อแสดงความทุ่มเท ('have been analyzing'), ใช้ Hedging เพื่อค้านความคิดเห็นอย่างละมุนละม่อม ('I am somewhat skeptical', 'might arguably introduce'), และใช้ What-Cleft กับ It-Cleft เพื่อปิดประเด็นอย่างทรงพลัง",
    turns: [
      {
        speaker: "Chief Architect",
        side: "left",
        avatar: "👨‍💼",
        name: "Dr. Arthur (Principal Architect)",
        en: "Our architecture committee has been evaluating our distributed system for six months, and what we really need to address is network overhead.",
        th: "คณะกรรมการสถาปัตยกรรมของเราได้ประเมินระบบกระจายศูนย์นี้ต่อเนื่องมาตลอด 6 เดือน และสิ่งที่พวกเราจำเป็นต้องจัดการอย่างแท้จริงคือความสูญเปล่าของเครือข่ายครับ",
        tenseRationale: "Present Perfect Continuous (has been evaluating for six months) + What-Cleft (what we really need to address is...)"
      },
      {
        speaker: "VP of Engineering",
        side: "right",
        avatar: "👩‍💼",
        name: "Victoria (VP of Engineering)",
        en: "I see your perspective, Arthur. However, I am somewhat inclined to believe that breaking down into more microservices might introduce operational friction.",
        th: "ฉันเข้าใจมุมมองของคุณนะคะอาร์เธอร์ อย่างไรก็ตาม ฉันมีแนวโน้มที่จะเชื่อว่าการซอยย่อยเป็นไมโครเซอร์วิสเพิ่มขึ้นอาจก่อให้เกิดความฝืดเคืองในการบริหารจัดการได้ค่ะ",
        tenseRationale: "Diplomatic Hedging: ใช้ 'somewhat inclined to believe' และ 'might introduce' เพื่อลดแรงต้านทานทางความคิด"
      },
      {
        speaker: "Chief Architect",
        side: "left",
        avatar: "👨‍💼",
        name: "Dr. Arthur (Principal Architect)",
        en: "Allow me to play devil's advocate for a moment. If we remain with a monolith, wouldn't team deployment velocity be severely constrained?",
        th: "ขออนุญาตสวมบทเป็นฝ่ายค้านสักครู่นะครับ หากพวกเรายังคงอยู่กับ Monolith ต่อไป ความเร็วในการปล่อยงานของแต่ละทีมจะไม่ถูกจำกัดอย่างรุนแรงหรือครับ?",
        tenseRationale: "C1 Idiom (play devil's advocate) + Hypothetical Conditional (wouldn't team velocity be constrained)"
      },
      {
        speaker: "VP of Engineering",
        side: "right",
        avatar: "👩‍💼",
        name: "Victoria (VP of Engineering)",
        en: "To put things into perspective, our teams had been deploying cleanly for two quarters before the microservices rollout began. It was the distributed transactions that broke velocity.",
        th: "เพื่อให้เห็นภาพตามความเป็นจริง ก่อนที่การปรับใช้ไมโครเซอร์วิสจะเริ่มขึ้น ทีมของเราเคยปล่อยงานได้อย่างราบรื่นต่อเนื่องมาถึง 2 ไตรมาส มันคือธุรกรรมแบบกระจายศูนย์ต่างหากที่ทำลายความเร็วลงค่ะ",
        tenseRationale: "Past Perfect Continuous (had been deploying for two quarters) + It-Cleft sentence (It was the distributed transactions that...)"
      },
      {
        speaker: "Chief Architect",
        side: "left",
        avatar: "👨‍💼",
        name: "Dr. Arthur (Principal Architect)",
        en: "You hit the nail on the head regarding distributed transactions. What we fundamentally need is a modular monolith with clear domain boundaries.",
        th: "คุณพูดได้ตรงเป้าเป๊ะ ๆ เลยครับเกี่ยวกับประเด็นธุรกรรมกระจายศูนย์ สิ่งที่พวกเราต้องการจริง ๆ ก็คือ Modular Monolith ที่มีขอบเขตโดเมนที่คมชัดครับ",
        tenseRationale: "C1 Idiom (hit the nail on the head) + What-Cleft resolution (What we fundamentally need is...)"
      }
    ]
  },

  // =========================================================================
  // TAB 4: ACTION DRILL & DETAILED QUIZ (ภารกิจพูด + แบบทดสอบ 5 ข้อพร้อมเฉลย)
  // =========================================================================
  actionDrillAndQuiz: {
    dailyMission: {
      title: "ภารกิจการสื่อสารระดับผู้บริหาร (Executive Mastery Drill)",
      instruction: "ฝึกพูดตามกรอบ PREP ผสาน What-Cleft และ Hedging: Point (What we need is...) + Reason (because it mitigates...) + Example (for instance...) + Point (therefore...):",
      targetPhrase: "What we really need is a modular architecture, because it would arguably reduce operational complexity while preserving developer velocity.",
      targetTh: "สิ่งที่พวกเราต้องการจริง ๆ คือสถาปัตยกรรมแบบแยกโมดูล, เพราะมันมีแนวโน้มสูงที่จะช่วยลดความซับซ้อนในการจัดการโดยที่ยังรักษาความเร็วในการพัฒนาไว้ได้",
      tip: "สังเกตความคมคาย: What we really need is (What-Cleft) ผสาน would arguably reduce (Hedging ลดแรงต้าน)"
    },

    quizQuestions: [
      {
        id: "q-6-1",
        question: "ประโยคที่ต้องการเน้นย้ำความต่อเนื่องยาวนานข้อใดถูกต้องตามกฎไวยากรณ์สากล (Stative Verb Trap)?",
        options: [
          "Our lead architect has been knowing the system topology for over eight years.",
          "Our lead architect has known the system topology for over eight years.",
          "Our lead architect is knowing the system topology for over eight years.",
          "Our lead architect had been knowing the system topology for over eight years."
        ],
        answer: 1,
        explanation: "ถูกต้องอย่างยิ่ง! 'know' จัดเป็น Stative Verb (กริยาแสดงสภาวะความรู้/ความจำ) กฎเหล็กของภาษาอังกฤษระบุว่าห้ามนำมาใช้ในรูป Continuous (-ing) โดยเด็ดขาด แม้จะมีคำบอกระยะเวลา 'for over eight years' ก็ตาม จึงต้องถอยกลับมาใช้ Present Perfect Simple คือ 'has known'"
      },
      {
        id: "q-6-2",
        question: "หากต้องการเน้นย้ำประโยค 'The lack of caching caused the database slowdown.' ด้วยโครงสร้าง It-Cleft Sentence ข้อใดถูกต้องที่สุด?",
        options: [
          "What caused the database slowdown was the lack of caching.",
          "It was the lack of caching that caused the database slowdown.",
          "It is the lack of caching which causing the database slowdown.",
          "The lack of caching it was that caused the database slowdown."
        ],
        answer: 1,
        explanation: "ถูกต้อง! โครงสร้างของ It-Cleft Sentence คือ 'It + was + [ประเด็นที่ต้องการเน้นย้ำ] + that + [ส่วนขยายของประโยค]' ดังนั้น 'It was the lack of caching that caused the database slowdown.' จึงถูกต้องและทรงพลังในการตรึงความสนใจ"
      },
      {
        id: "q-6-3",
        question: "ประโยคที่ใช้เทคนิค Negative Inversion (การกลับหัวประโยคปฏิเสธเพื่อการนำเสนอเชิงกลยุทธ์) ข้อใดถูกต้องตามกฎไวยากรณ์?",
        options: [
          "Not only we achieved our SLA targets, but we also reduced cloud infrastructure cost.",
          "Not only did we achieve our SLA targets, but we also reduced cloud infrastructure cost.",
          "Not only we did achieve our SLA targets, but we also reduced cloud infrastructure cost.",
          "Not only achieved we our SLA targets, but we also reduced cloud infrastructure cost."
        ],
        answer: 1,
        explanation: "ถูกต้อง! เมื่อนำคำเชื่อมเชิงลบ 'Not only' มาขึ้นต้นประโยค โครงสร้างไวยากรณ์บังคับให้เกิด Inversion โดยต้องนำกริยาช่วยในอดีต 'did' มาวางหน้าประธาน 'we' และตามด้วยกริยาไม่ผัน 'achieve' (Not only did we achieve...)"
      },
      {
        id: "q-6-4",
        question: "ในที่ประชุมระดับผู้บริหาร หากคุณต้องการแสดงความเห็นต่างต่อข้อเสนอของเพื่อนร่วมงานอย่างมีชั้นเชิง (Diplomatic Hedging) โดยไม่สร้างความขุ่นเคือง ประโยคใดเหมาะสมที่สุด?",
        options: [
          "Your proposed architecture is completely flawed and will fail.",
          "I disagree 100% with your calculations.",
          "I see your point; however, there appear to be a few potential scalability caveats we might want to examine.",
          "You must change your design immediately because it is bad."
        ],
        answer: 2,
        explanation: "ถูกต้อง! ในการสื่อสารระดับผู้นำ (CEFR C1) การใช้ Hedging เช่น 'there appear to be...', 'potential caveats', และ 'we might want to examine' ช่วยเปิดพื้นที่สำหรับการอภิปรายอย่างสร้างสรรค์ ชี้ประเด็นความเสี่ยงทางเทคนิคได้อย่างตรงจุดโดยไม่ทำลายความสัมพันธ์ในทีม"
      },
      {
        id: "q-6-5",
        question: "ความหมายของสำนวนทางธุรกิจและเทคโนโลยี 'to play devil's advocate' คือข้อใด?",
        options: [
          "การแกล้งทำงานผิดพลาดเพื่อทดสอบระบบรักษาความปลอดภัย",
          "การจงใจสวมบทบาทเป็นฝ่ายค้านเพื่อท้าทายสมมติฐานและมองหาช่องโหว่ที่อาจซ่อนอยู่",
          "การกล่าวโทษเพื่อนร่วมงานในที่ประชุมต่อหน้าผู้บริหาร",
          "การแก้ปัญหาเฉพาะหน้าด้วยการประนีประนอม"
        ],
        answer: 1,
        explanation: "ถูกต้อง! 'To play devil's advocate' เป็นสำนวนชั้นสูง หมายถึงการที่ใครคนหนึ่งแกล้งแสดงความคิดเห็นหรือโต้แย้งในมุมมองตรงกันข้ามกับสิ่งที่คนส่วนใหญ่เห็นชอบ เพื่อทดสอบว่าไอเดียหรือสถาปัตยกรรมนั้นมีความรัดกุมและคิดมารอบด้านจริงหรือไม่"
      },
      {
        id: "q-6-6",
        question: "การกลับประโยคเงื่อนไขขั้นสูง (Third Conditional Inversion): ข้อใดแปลงประโยค 'If we had tested the failover mechanism earlier, the outage wouldn't have lasted two hours.' ได้อย่างสมบูรณ์แบบ?",
        options: [
          "Had we tested the failover mechanism earlier, the outage wouldn't have lasted two hours.",
          "Had we not tested the failover mechanism earlier, the outage wouldn't have lasted two hours.",
          "Did we test the failover mechanism earlier, the outage wouldn't have lasted two hours.",
          "Were we tested the failover mechanism earlier, the outage wouldn't have lasted two hours."
        ],
        answer: 0,
        explanation: "ถูกต้อง! ในภาษาอังกฤษระดับทางการ (Formal C1) สามารถตัด 'If' ทิ้งแล้วสลับ 'Had' ขึ้นมาไว้หน้าประธานได้ทันที (Inversion): 'Had we tested...' โดยคงความหมายเดิมอย่างทรงพลัง"
      },
      {
        id: "q-6-7",
        question: "โครงสร้าง Subjunctive Mood หลังคำสั่ง/ข้อกำหนดทางการ: 'The Chief Security Officer mandated that multi-factor authentication _____ enforced across all internal microservices.'",
        options: [
          "be",
          "is",
          "was",
          "will be"
        ],
        answer: 0,
        explanation: "ถูกต้อง! หลังคำกริยาแสดงคำสั่งหรือความจำเป็นยิ่งยวด (demand, insist, mandate, recommend, require that...) กริยาในประโยคย่อยจะต้องเป็น Base Form (Infinitive without to) เสมอ โครงสร้าง Passive จึงต้องใช้ 'be enforced' (ห้ามใช้ is หรือ was)"
      },
      {
        id: "q-6-8",
        question: "โครงสร้าง Inversion หลัง Adverb เชิงปฏิเสธ (Rarely / Seldom): 'Rarely _____ such severe degradation in query throughput without an accompanying spike in locks.'",
        options: [
          "have we encountered",
          "we have encountered",
          "we encountered",
          "did we encountered"
        ],
        answer: 0,
        explanation: "ถูกต้อง! เมื่อนำคำกริยาวิเศษณ์เชิงปฏิเสธที่มีความหมายว่าแทบจะไม่ (Rarely, Seldom, Little) ขึ้นต้นประโยค จะต้องสลับกริยาช่วยขึ้นมาหน้าประธานเสมือนรูปประโยคคำถาม จึงได้ 'Rarely have we encountered...'"
      },
      {
        id: "q-6-9",
        question: "ข้อใดคือโครงสร้าง What-Cleft Sentence ที่ถูกต้องเพื่อเน้นย้ำประเด็นว่า 'ความหน่วงเวลาต่ำ (Low latency) คือสิ่งที่สำคัญที่สุดต่อผู้ใช้งาน'?",
        options: [
          "What matters most to users is low latency.",
          "What matter most to users are low latency.",
          "What does matter most to users it is low latency.",
          "That what matters to users is low latency."
        ],
        answer: 0,
        explanation: "ถูกต้อง! โครงสร้าง What-Cleft Clause ทำหน้าที่เป็นเอกพจน์: 'What matters most to users is [focus point]' เป็นกลยุทธ์การสื่อสารชั้นสูงในการดึงโฟกัสของผู้ฟังไปยังประเด็นหลัก"
      },
      {
        id: "q-6-10",
        question: "การกลับประโยคเงื่อนไขอนาคตด้วย 'Should' (First Conditional Inversion): '_____ any performance regressions during canary verification, the CI pipeline will abort the rollout.'",
        options: [
          "Should you detect",
          "If you detected",
          "Had you detected",
          "Were you detecting"
        ],
        answer: 0,
        explanation: "ถูกต้อง! 'Should + Subject + Base Verb' ใช้แทน 'If + Subject + Present Simple' ในระดับทางการและสัญญาข้อตกลง (SLA) มีความหมายว่า 'หากมีกรณีที่ตรวจพบข้อผิดพลาดแม้เพียงเล็กน้อย...'"
      },
      {
        id: "q-6-11",
        question: "ในการวิจารณ์สถาปัตยกรรมระบบเดิมต่อหน้าทีมบริหาร ประโยคใดนำเสนอการวิพากษ์เชิงสร้างสรรค์ระดับผู้นำ (Diplomatic Executive Critique) ได้ดีที่สุด?",
        options: [
          "This architecture is garbage and we must rewrite it.",
          "While this legacy architecture has served us well, current metrics suggest it may struggle to sustain our projected tenfold traffic growth.",
          "I hate this codebase and everyone knows it is broken.",
          "Whoever designed this monolithic mess clearly lacked foresight."
        ],
        answer: 1,
        explanation: "ถูกต้อง! C1 Executive Communication ให้เกียรติบริบทอดีต ('has served us well') อ้างอิงตัวชี้วัดที่เป็นกลาง ('current metrics suggest') และใช้ Hedging ชี้แจงความเสี่ยงในอนาคต ('may struggle to sustain') ทำให้ทุกฝ่ายพร้อมร่วมมือ ไม่เกิดการตั้งกำแพงป้องกันตนเอง"
      },
      {
        id: "q-6-12",
        question: "การกลับประโยคสมมุติปัจจุบันด้วย 'Were' (Second Conditional Inversion): ข้อใดแปลงประโยค 'If we were to re-architect our data pipeline from scratch' ได้ถูกต้อง?",
        options: [
          "Were we to re-architect our data pipeline from scratch, we would select Apache Kafka.",
          "Were we re-architect our data pipeline from scratch, we would select Apache Kafka.",
          "Did we were to re-architect our data pipeline from scratch, we would select Apache Kafka.",
          "Had we to re-architect our data pipeline from scratch, we would select Apache Kafka."
        ],
        answer: 0,
        explanation: "ถูกต้อง! โครงสร้าง 'Were + Subject + to-Infinitive' เป็นรูป Inversion ของ Second Conditional เพื่อกล่าวถึงสมมุติฐานเชิงทฤษฎีในอนาคตได้อย่างสละสลวย"
      },
      {
        id: "q-6-13",
        question: "โครงสร้าง Subjunctive Mood หลังคำแนะนำของทีม: 'The site reliability team recommended that the gateway connection timeout _____ increased from 30s to 60s.'",
        options: [
          "be",
          "is",
          "would be",
          "should been"
        ],
        answer: 0,
        explanation: "ถูกต้อง! หลัง 'recommend that...' กริยาต้องอยู่ในรูป Base Form เสมอ และในโครงสร้าง Passive Voice จึงต้องใช้ 'be + V3' (be increased)"
      },
      {
        id: "q-6-14",
        question: "ในการประชุมทบทวน Sprint (Retrospective) เพื่อนร่วมงานเอ่ยว่า: 'Before we discuss story points, let's address the elephant in the room.' สำนวนนี้หมายถึงสิ่งใด?",
        options: [
          "ปัญหาหรือประเด็นใหญ่ที่ชัดเจนมากจนทุกคนรับรู้อยู่เต็มอก แต่ต่างฝ่ายต่างพยายามหลีกเลี่ยงที่จะพูดถึง",
          "ฟีเจอร์ขนาดใหญ่มากที่ฝ่ายการตลาดขอแทรกเข้ามา",
          "เซิร์ฟเวอร์ขนาดใหญ่ที่มีราคาสูงเกินงบประมาณ",
          "สมาชิกในทีมที่ส่งเสียงดังเกินไปในที่ประชุม"
        ],
        answer: 0,
        explanation: "ถูกต้อง! 'The elephant in the room' เป็นสำนวนระดับสูงที่พบบ่อยมากในอุตสาหกรรม หมายถึงปัญหาใหญ่เบิ้มที่มองเห็นชัดเจนราวกับมีช้างยืนอยู่กลางห้อง แต่ทุกคนกลับแกล้งทำเป็นมองไม่เห็นและไม่ยอมพูดถึง"
      },
      {
        id: "q-6-15",
        question: "เมื่อต้องนำเสนอการตัดสินใจทางสถาปัตยกรรม (Architectural Decision Record) ต่อ CTO ลำดับขั้นตอนตาม PREP Framework ที่ถูกต้องและทรงพลังที่สุดคือข้อใด?",
        options: [
          "Point (แถลงจุดยืนตรงประเด็น) ➔ Reason (ให้เหตุผลเชิงเทคนิคและธุรกิจ) ➔ Example (ยกหลักฐาน Benchmark หรือกรณีศึกษา) ➔ Point (ตอกย้ำข้อสรุปและขั้นตอนถัดไป)",
          "Background (เล่าประวัติความเป็นมา) ➔ Complaint (บ่นปัญหา) ➔ Solution (เสนอทางแก้) ➔ Budget (ของบ)",
          "Apology (ขอโทษที่ระบบช้า) ➔ Code review (เปิดโค้ดให้ดู) ➔ Opinion (บอกความรู้สึก) ➔ Exit (จบการพูด)",
          "Point (เปิดด้วยข้อเรียกร้อง) ➔ Example (ยกตัวอย่าง) ➔ Criticize (วิจารณ์ทีมอื่น) ➔ Summary (สรุป)"
        ],
        answer: 0,
        explanation: "ถูกต้อง! โครงสร้าง PREP (Point ➔ Reason ➔ Example/Evidence ➔ Point/Next Steps) เป็นหัวใจสำคัญของการสื่อสารระดับ Executive ในบริษัทเทคโนโลยีชั้นนำ ช่วยให้ตอบคำถามได้คม ชัดเจน กระชับ และโน้มน้าวใจได้สูงสุด"
      }
    ]
  }
};
