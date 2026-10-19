/**
 * EngMastery: Grammar Mastery Syllabus Data
 * 15 Core Pedagogical Grammar Categories with Sub-units,
 * Formulas, Easy-to-understand explanations, and Dual-domain Examples (Daily Life + DevOps/Tech).
 */

window.grammarSyllabusData = [
  // =========================================================================
  // 1. PARTS OF SPEECH
  // =========================================================================
  {
    id: "parts-of-speech",
    title: "Parts of Speech",
    titleTh: "ชนิดของคำในภาษาอังกฤษ (8 ชนิดพื้นฐาน)",
    icon: "🧱",
    badge: "Foundation",
    description: "อิฐบล็อกก้อนแรกของภาษาอังกฤษ รู้หน้าที่ของคำแต่ละประเภทเพื่อวางตำแหน่งในประโยคได้อย่างถูกต้อง ไม่สับสน",
    units: [
      {
        id: "pos-nouns-pronouns",
        title: "Unit 1: Nouns & Pronouns (คำนามและสรรพนาม)",
        summary: "เข้าใจคำเรียกชื่อคน สัตว์ สิ่งของ ระบบ และคำใช้แทนประธาน/กรรม",
        formula: "Subject (Noun/Pronoun) + Verb + Object (Noun/Pronoun)",
        explanation: `
### 1. Noun (คำนาม) คืออะไร?
คำนามคือ **"ชื่อเรียก"** ของทุกสิ่งทุกอย่างรอบตัวเรา ไม่ว่าจะเป็นคน สัตว์ สิ่งของ สถานที่ หรือแม้กระทั่งสิ่งของที่จับต้องไม่ได้ เช่น แนวคิด หรือระบบคอมพิวเตอร์
- **Common Noun (นามทั่วไป ไม่เจาะจง):** user (ผู้ใช้), server (เซิร์ฟเวอร์), meeting (การประชุม), coffee (กาแฟ)
- **Proper Noun (นามเฉพาะ ต้องขึ้นต้นด้วยตัวพิมพ์ใหญ่เสมอ):** John, Bangkok, Linux, Docker, Google

### 2. Pronoun (คำสรรพนาม) คืออะไร?
คำสรรพนามคือคำที่ใช้ **"แทนคำนาม"** เพื่อจะได้ไม่ต้องพูดชื่อเดิมซ้ำๆ ให้เยิ่นเย้อ
- **รูปประธาน (Subject):** I (ฉัน), You (คุณ), We (พวกเรา), They (พวกเขา), He (เขา), She (เธอ), It (มัน/ระบบ)
- **รูปกรรม (Object):** me, you, us, them, him, her, it
- **แสดงความเป็นเจ้าของ (Possessive):** my/mine, your/yours, our/ours, their/theirs, his, her/hers, its

> [!TIP]
> **เคล็ดลับจำง่าย:** ในประโยคภาษาอังกฤษ ประธานต้องเป็น **Noun** หรือ **Pronoun** เสมอ!
        `,
        examples: [
          { en: "The server restarts automatically every midnight.", th: "เซิร์ฟเวอร์จะรีสตาร์ทตัวเองโดยอัตโนมัติทุกเที่ยงคืน", cat: "Tech" },
          { en: "Sarah loves drinking hot green tea in the morning.", th: "ซาร่าชอบดื่มชาเขียวร้อนในตอนเช้า", cat: "Daily" },
          { en: "We invited them to our sprint retrospective meeting.", th: "พวกเราชวนพวกเขามาเข้าร่วมการประชุมสรุปการทำงาน", cat: "Tech" },
          { en: "He forgot his laptop charger at the office.", th: "เขาลืมสายชาร์จแล็ปท็อปไว้ที่ออฟฟิศ", cat: "Daily" }
        ],
        quickCheck: {
          question: "ในประโยค 'The engineer deployed the application yesterday.' คำว่า 'engineer' และ 'application' ทำหน้าที่เป็นคำชนิดใด?",
          options: ["Verbs (คำกริยา)", "Nouns (คำนาม)", "Adjectives (คำคุณศัพท์)", "Prepositions (คำบุพบท)"],
          correctIndex: 1,
          explanation: "engineer (วิศวกร) และ application (แอปพลิเคชัน) เป็นชื่อเรียกบุคคลและสิ่งของ จึงเป็น Noun (คำนาม)"
        }
      },
      {
        id: "pos-verbs-adverbs",
        title: "Unit 2: Verbs & Adverbs (คำกริยาและคำกริยาวิเศษณ์)",
        summary: "หัวใจที่บอกการกระทำ (Action) และคำที่บอกว่าทำอย่างไร บ่อยแค่ไหน",
        formula: "Subject + Verb + (Adverb)",
        explanation: `
### 1. Verb (คำกริยา) - หัวใจของประโยค
ประโยคภาษาอังกฤษขาดประธานบางครั้งได้ (เช่น ประโยคคำสั่ง) แต่ **"ขาดกริยาไม่ได้เด็ดขาด"**!
- **Action Verbs (กริยาแสดงอาการ):** build (สร้าง), test (ทดสอบ), deploy (ติดตั้ง), run (วิ่ง/รัน), sleep (นอน)
- **Linking Verbs / Verb to be (กริยาบอกสภาพ/เป็นอยู่คือ):** is, am, are, was, were, become, feel, look

### 2. Adverb (คำกริยาวิเศษณ์) - ตัวบอกรายละเอียด
Adverb ทำหน้าที่ขยายกริยา เพื่อบอกว่า **"ทำอย่างไร (How)", "ทำที่ไหน (Where)", "ทำเมื่อไร (When)" หรือ "บ่อยแค่ไหน (How often)"**
- มักจะลงท้ายด้วย **-ly**: quickly (อย่างรวดเร็ว), smoothly (อย่างราบรื่น), successfully (อย่างสำเร็จ)
- ตัวบอกความถี่: always (เสมอ), usually (ปกติ), often (บ่อยๆ), sometimes (บางครั้ง), never (ไม่เคย)

> [!NOTE]
> ตัวอย่าง: "The pipeline runs." (ประโยคสมบูรณ์แล้ว) ➔ ขยายด้วย Adverb: "The pipeline runs **smoothly**." (ไพพ์ไลน์ทำงานได้อย่างราบรื่นมาก)
        `,
        examples: [
          { en: "The database responds very quickly today.", th: "ฐานข้อมูลตอบสนองได้อย่างรวดเร็วมากในวันนี้", cat: "Tech" },
          { en: "She speaks English fluently with clients.", th: "เธอพูดภาษาอังกฤษได้อย่างคล่องแคล่วกับลูกค้า", cat: "Daily" },
          { en: "We always backup the database before any release.", th: "พวกเราสำรองข้อมูลฐานข้อมูลเสมอก่อนการปล่อยเวอร์ชันใหม่ทุกครั้ง", cat: "Tech" },
          { en: "He carefully checked his email before sending it.", th: "เขาตรวจทานอีเมลอย่างรอบคอบก่อนที่จะกดส่ง", cat: "Daily" }
        ],
        quickCheck: {
          question: "คำใดในประโยค 'The script executed successfully without any errors.' ทำหน้าที่เป็น Adverb?",
          options: ["script", "executed", "successfully", "errors"],
          correctIndex: 2,
          explanation: "successfully ลงท้ายด้วย -ly ทำหน้าที่ขยายกริยา executed เพื่อบอกว่ารันสำเร็จลุล่วงด้วยดี"
        }
      },
      {
        id: "pos-adj-prep",
        title: "Unit 3: Adjectives & Prepositions (คำคุณศัพท์และคำบุพบท)",
        summary: "คำบรรยายลักษณะ (Adj) และคำเชื่อมบอกตำแหน่ง/เวลา (In, On, At)",
        formula: "Adjective + Noun  |  Preposition + Noun Phrase",
        explanation: `
### 1. Adjective (คำคุณศัพท์) - บรรยายลักษณะคำนาม
วางไว้ **หน้า Noun** หรือ **หลัง Verb to be**:
- วางหน้า Noun: "a **scalable** architecture" (สถาปัตยกรรมที่ขยายขนาดได้), "a **new** feature" (ฟีเจอร์ใหม่)
- หลัง Verb to be: "The system is **stable**." (ระบบมีความเสถียร)

### 2. Preposition (คำบุพบท) - บอกตำแหน่งและเวลา
- **In:** ใช้กับพื้นที่กว้าง, เมือง, ประเทศ, เดือน, ปี (in Thailand, in 2026, in production)
- **On:** ใช้กับวันในสัปดาห์, วันที่, บนพื้นผิว, บนแพลตฟอร์ม (on Monday, on the server, on GitHub)
- **At:** ใช้กับจุดเจาะจง, เวลาที่แน่นอน (at 9:00 AM, at the office, at line 42)
        `,
        examples: [
          { en: "We found a critical bug in the authentication module.", th: "เราพบบั๊กที่วิกฤตตัวหนึ่งในโมดูลยืนยันตัวตน", cat: "Tech" },
          { en: "Our daily stand-up meeting starts at 9:30 AM.", th: "การประชุมสแตนด์อัปประจำวันเริ่มตอน 9 โมงครึ่ง", cat: "Tech" },
          { en: "I left my blue notebook on the meeting table.", th: "ฉันลืมสมุดบันทึกสีน้ำเงินไว้บนโต๊ะประชุม", cat: "Daily" }
        ],
        quickCheck: {
          question: "เติมคำในช่องว่าง: 'The release is scheduled _____ Friday morning.'",
          options: ["in", "on", "at", "to"],
          correctIndex: 1,
          explanation: "ใช้วันในสัปดาห์ (Friday) ต้องใช้บุพบท 'on' เสมอ (on Friday morning)"
        }
      }
    ]
  },

  // =========================================================================
  // 2. DETERMINER
  // =========================================================================
  {
    id: "determiner",
    title: "Determiner",
    titleTh: "คำนำหน้านามและคำระบุจำนวน (A, An, The, Some, Any)",
    icon: "🏷️",
    badge: "Essential",
    description: "เข้าใจการใช้ A, An, The เมื่อไหร่ต้องชี้เฉพาะ และการบอกปริมาณของคำนามนับได้และนับไม่ได้",
    units: [
      {
        id: "det-articles",
        title: "Unit 1: Articles Mastery (A, An vs The)",
        summary: "กฎเหล็กการเลือกระหว่างคำนามทั่วไป (a/an) กับคำนามที่ชี้เฉพาะเจาะจง (the)",
        formula: "a/an + Singular Countable Noun  |  the + Specific Noun",
        explanation: `
### 1. A / An (สิ่งใดสิ่งหนึ่ง ไม่เจาะจง มี 1 ชิ้น)
- ใช้ **a** นำหน้าคำที่ออกเสียงพยัญชนะ: a server, a user, a bug, a university (เสียง ย)
- ใช้ **an** นำหน้าคำที่ออกเสียงสระ (อ): an API, an issue, an hour (เสียง อ ไม่ใช่ตัว h), an error

### 2. The (ชี้เฉพาะ ทั้งคนพูดและคนฟังรู้ว่าเป็นตัวไหน)
- ใช้เมื่อกล่าวถึงสิ่งนั้นซ้ำเป็นครั้งที่สอง
- ใช้เมื่อสิ่งนั้นมีเพียงหนึ่งเดียวในบริบทนั้น: the production environment, the CEO, the internet
- ใช้กับสิ่งที่มีการขยายความเจาะจง: the server *that crashed yesterday*
        `,
        examples: [
          { en: "We need a new database server.", th: "เราต้องการเซิร์ฟเวอร์ฐานข้อมูลเครื่องใหม่สักเครื่อง (เครื่องไหนก็ได้)", cat: "Tech" },
          { en: "The database server went down again.", th: "เซิร์ฟเวอร์ฐานข้อมูลเครื่องนั้นล่มอีกแล้ว (เจาะจงเครื่องที่รู้กัน)", cat: "Tech" },
          { en: "She submitted an error report this morning.", th: "เธอส่งรายงานข้อผิดพลาดมาเมื่อเช้านี้", cat: "Daily" }
        ],
        quickCheck: {
          question: "ทำไมถึงใช้ 'an API' แทนที่จะเป็น 'a API'?",
          options: ["เพราะ API เป็นตัวย่อ", "เพราะตัวอักษร A ออกเสียงสระว่า 'เอ-พี-ไอ' ขึ้นต้นด้วยเสียง อ", "เพราะ API เป็นคำนามพหูพจน์", "เพราะเป็นกฎเฉพาะของไอที"],
          correctIndex: 1,
          explanation: "การใช้ an ยึดตาม 'เสียงอ่าน' เป็นหลัก คำว่า API อ่านออกเสียง /eɪ.piːˈaɪ/ ขึ้นต้นด้วยเสียงสระ จึงใช้ an"
        }
      },
      {
        id: "det-quantifiers",
        title: "Unit 2: Quantifiers (Some, Any, Much, Many, Few, Little)",
        summary: "การบอกปริมาณสำหรับคำนามนับได้และนับไม่ได้อย่างเป็นธรรมชาติ",
        formula: "Some (บอกเล่า/ขอร้อง) vs Any (ปฏิเสธ/คำถาม)  |  Many (นับได้) vs Much (นับไม่ได้)",
        explanation: `
### 1. Some vs Any
- **Some:** ใช้ในประโยคบอกเล่า หรือยื่นข้อเสนอ/ขอร้องอย่างสุภาพ
  - "We have **some** open pull requests." (เรามี PR ค้างอยู่บ้าง)
  - "Would you like **some** coffee?" (รับกาแฟไหมครับ?)
- **Any:** ใช้ในประโยคปฏิเสธและคำถามทั่วไป
  - "Are there **any** pending alerts?" (มี Alert ค้างอยู่ไหม?)
  - "We don't have **any** spare hardware." (เราไม่มีฮาร์ดแวร์สำรองเลย)

### 2. Many vs Much
- **Many + นามนับได้พหูพจน์:** many pods, many developers, many errors
- **Much + นามนับไม่ได้:** much memory, much bandwidth, much time, much traffic
        `,
        examples: [
          { en: "How much RAM does this container require?", th: "คอนเทนเนอร์ตัวนี้ต้องใช้ RAM เท่าไร? (RAM นับไม่ได้)", cat: "Tech" },
          { en: "How many instances are currently running?", th: "ตอนนี้มี Instance กำลังทำงานอยู่กี่ตัว? (Instance นับได้)", cat: "Tech" },
          { en: "Do you have any questions before we wrap up?", th: "มีใครมีคำถามอะไรไหมก่อนที่เราจะปิดการประชุม?", cat: "Daily" }
        ],
        quickCheck: {
          question: "เลือกคำเติมในช่องว่าง: 'We don't have _____ free storage left on the disk.'",
          options: ["many", "much", "few", "some"],
          correctIndex: 1,
          explanation: "storage (พื้นที่จัดเก็บ) เป็นคำนามนับไม่ได้ ในประโยคปฏิเสธจึงต้องใช้ 'much'"
        }
      }
    ]
  },

  // =========================================================================
  // 3. TENSES
  // =========================================================================
  {
    id: "tenses",
    title: "Tenses",
    titleTh: "กาลเวลาทั้ง 12 Tenses ในการทำงานจริง",
    icon: "⏳",
    badge: "Core Pillar",
    description: "สรุปหลักการใช้ Tense ให้ตรงกับบริบทจริง แยกแยะระหว่างสิ่งที่ทำประจำ สิ่งที่กำลังทำ และสิ่งที่เพิ่งเสร็จสิ้น",
    units: [
      {
        id: "tense-present-simple-con",
        title: "Unit 1: Present Simple vs Present Continuous",
        summary: "สิ่งที่ทำเป็นกิจวัตร/ความจริงทางระบบ vs สิ่งที่กำลังทำอยู่ ณ วินาทีนี้",
        formula: "Present Simple: S + V.1 (s/es)  vs  Present Con: S + is/am/are + V.ing",
        explanation: `
### 1. Present Simple (ความจริง กฎเกณฑ์ กิจวัตรประจำวัน)
- ใช้กับสิ่งที่เป็นจริงเสมอ การทำงานตามรอบปกติ หรือพฤติกรรมของระบบ
- **คีย์เวิร์ด:** always, usually, every day, automatically
- ตัวอย่าง: "The cron job **runs** every hour." (Cron job ทำงานทุกๆ 1 ชั่วโมง เป็นกฎปกติ)

### 2. Present Continuous (กำลังทำอยู่ ณ วินาทีนี้ หรือสถานการณ์ชั่วคราว)
- ใช้เมื่อเหตุการณ์กำลังดำเนินอยู่ตอนนี้ หรือช่วงนี้เป็นการชั่วคราว
- **คีย์เวิร์ด:** now, right now, currently, at the moment
- ตัวอย่าง: "We **are currently migrating** the user table." (เรากำลังย้ายตารางข้อมูลผู้ใช้อยู่ ณ ตอนนี้)
        `,
        examples: [
          { en: "The API gateway routes all incoming requests.", th: "API Gateway ทำหน้าที่จัดเส้นทางทุก Request ที่ส่งเข้ามา (ความจริง/หน้าที่ปกติ)", cat: "Tech" },
          { en: "I am investigating the latency spike right now.", th: "ฉันกำลังตรวจสอบปัญหากราฟ Latency พุ่งสูงอยู่ ณ ตอนนี้", cat: "Tech" },
          { en: "She usually works remotely on Wednesdays.", th: "ปกติเธอจะทำงานแบบรีโมทในวันพุธ", cat: "Daily" },
          { en: "Listen! The fire alarm is ringing.", th: "ฟังดูสิ! สัญญาณเตือนไฟไหม้กำลังดังอยู่", cat: "Daily" }
        ],
        quickCheck: {
          question: "ใน Stand-up meeting ถ้าต้องการบอกว่า 'ตอนนี้ฉันกำลังแก้บักตัวนี้อยู่' ควรใช้ Tense ใด?",
          options: ["Past Simple", "Present Continuous", "Future Simple", "Past Perfect"],
          correctIndex: 1,
          explanation: "สิ่งที่กำลังทำอยู่ ณ ปัจจุบัน ใช้ Present Continuous: 'I am currently fixing this bug.'"
        }
      },
      {
        id: "tense-past-vs-perfect",
        title: "Unit 2: Past Simple vs Present Perfect",
        summary: "อดีตจบลงแล้ว (มีเวลาระบุ) vs สิ่งที่เพิ่งเกิดและผลลัพธ์ยังเชื่อมถึงปัจจุบัน",
        formula: "Past Simple: S + V.2  vs  Present Perfect: S + have/has + V.3",
        explanation: `
### 1. Past Simple (จบไปแล้ว มีจุดเวลาในอดีตชัดเจน)
- ต้องมีคำระบุเวลาในอดีต เช่น yesterday, last night, 2 hours ago, in 2025
- ตัวอย่าง: "The server crashed **yesterday**." (เซิร์ฟเวอร์ล่มเมื่อวานนี้ จบไปแล้วและเวลาระบุชัด)

### 2. Present Perfect (ทำมาตั้งแต่อดีตถึงปัจจุบัน หรือเพิ่งเสร็จและส่งผลอยู่)
- ไม่ระบุเวลาที่แน่นอน แต่เน้นผลลัพธ์ว่าทำเสร็จแล้ว หรือยังไม่เสร็จ
- **คีย์เวิร์ด:** already (แล้ว), just (เพิ่งจะ), yet (ยัง), since (ตั้งแต่), for (เป็นเวลา)
- ตัวอย่าง: "We **have already deployed** version 2.4." (พวกเราติดตั้งเวอร์ชัน 2.4 เสร็จเรียบร้อยแล้ว และตอนนี้ระบบกำลังรันอยู่)
        `,
        examples: [
          { en: "We rolled back the release 10 minutes ago.", th: "พวกเราโรลแบ็กเวอร์ชันนั้นกลับไปเมื่อ 10 นาทีที่แล้ว (มีเวลา 10 minutes ago)", cat: "Tech" },
          { en: "Have you reviewed the pull request yet?", th: "คุณได้ตรวจรีวิว PR ตัวนั้นหรือยัง?", cat: "Tech" },
          { en: "I have worked at this tech company for three years.", th: "ฉันทำงานที่บริษัทเทคโนโลยีแห่งนี้มา 3 ปีแล้ว (และปัจจุบันยังทำอยู่)", cat: "Daily" }
        ],
        quickCheck: {
          question: "ประโยคใดถูกต้องเมื่อต้องการบอกว่า 'เราเพิ่งจะแก้ไขปัญหาเสร็จเมื่อสักครู่นี้'?",
          options: ["We just fix the issue.", "We have just resolved the issue.", "We resolved the issue since.", "We are resolve the issue."],
          correctIndex: 1,
          explanation: "สิ่งที่เพิ่งเสร็จสดๆ ร้อนๆ ใช้ Present Perfect ร่วมกับ just: 'We have just resolved the issue.'"
        }
      }
    ]
  },

  // =========================================================================
  // 4. SENTENCE STRUCTURE
  // =========================================================================
  {
    id: "sentence-structure",
    title: "Sentence Structure",
    titleTh: "โครงสร้างประโยค (Simple, Compound, Complex)",
    icon: "🏗️",
    badge: "Syntax",
    description: "เข้าใจองค์ประกอบ Subject, Verb, Object และการเชื่อมประโยคซับซ้อนให้เขียนกระชับ ตรงประเด็น สื่อสารได้ระดับมืออาชีพ",
    units: [
      {
        id: "struct-simple-compound",
        title: "Unit 1: Simple & Compound Sentences",
        summary: "ประโยคใจความเดียวและการเชื่อมประโยคด้วย FANBOYS (for, and, nor, but, or, yet, so)",
        formula: "Compound: Independent Clause 1 + [, coordinating conjunction] + Independent Clause 2",
        explanation: `
### 1. Simple Sentence (ประโยคใจความเดียว)
ประกอบด้วย 1 ประธาน (Subject) + 1 ภาคแสดง (Predicate/Verb) สื่อความหมายสมบูรณ์ในตัวเอง
- "The build passed." (การบิลด์ผ่านแล้ว)
- "DevOps engineers automate infrastructure." (วิศวกร DevOps ทำงานอัตโนมัติบนโครงสร้างพื้นฐาน)

### 2. Compound Sentence (ประโยคความรวม)
เอาประโยคใจความเดียว 2 ประโยคที่มีน้ำหนักเท่ากันมาเชื่อมกันด้วย **FANBOYS**:
- **F**or (เพราะว่า)
- **A**nd (และ)
- **N**or (และไม่)
- **B**ut (แต่)
- **O**r (หรือ)
- **Y**et (แต่ทว่า)
- **S**o (ดังนั้น)

> [!NOTE]
> กฎเครื่องหมาย: เมื่อเชื่อม 2 ประโยคสมบูรณ์ด้วย FANBOYS ให้ใส่เครื่องหมาย **จุลภาค (Comma ,)** ด้านหน้าคำเชื่อมเสมอ!
        `,
        examples: [
          { en: "The CPU usage was high, so the autoscaler launched two more instances.", th: "การใช้งาน CPU สูงมาก ดังนั้นระบบ Autoscaler จึงเปิด Instance เพิ่มอีกสองตัว", cat: "Tech" },
          { en: "We wanted to deploy today, but the QA tests failed.", th: "พวกเราอยากจะขึ้นระบบวันนี้ แต่การทดสอบของ QA ไม่ผ่าน", cat: "Tech" },
          { en: "I like coding in Python, and my colleague prefers Go.", th: "ฉันชอบเขียนโค้ดด้วย Python และเพื่อนร่วมงานของฉันชอบภาษา Go มากกว่า", cat: "Daily" }
        ],
        quickCheck: {
          question: "คำเชื่อมตัวใดในกลุ่ม FANBOYS ใช้บอกเหตุและผล (ผลลัพธ์ที่ตามมา)?",
          options: ["but", "or", "so", "for"],
          correctIndex: 2,
          explanation: "'so' แปลว่า 'ดังนั้น' ใช้บอกผลลัพธ์ที่เกิดขึ้นตามมาจากประโยคหน้า"
        }
      }
    ]
  },

  // =========================================================================
  // 5. QUESTIONS
  // =========================================================================
  {
    id: "questions",
    title: "Questions",
    titleTh: "ประโยคคำถาม (WH-Questions & Indirect Questions)",
    icon: "❓",
    badge: "Masterclass",
    description: "เจาะลึกศิลปะการซักถาม ค้นหาข้อมูล Root Cause และการถามอย่างสุภาพในที่ประชุมด้วย Indirect Questions",
    units: [
      {
        id: "q-wh-fundamentals",
        title: "Unit 1: WH-Questions Mastery (จากชีวิตประจำวันสู่งาน DevOps)",
        summary: "โครงสร้างหลักและการใช้ Who, What, Where, When, Why, Which, How ครบทุกมิติ",
        formula: "WH-Word + Auxiliary Verb (is/am/are/do/does/did/can/will) + Subject + Main Verb?",
        explanation: `
### 1. โครงสร้างแม่แบบ (Universal WH Formula)
จำสูตรง่ายๆ เพียงบรรทัดเดียว:
$$\\text{WH-Word} + \\text{กริยาช่วย (do/does/did/is/am/are/can/will)} + \\text{ประธาน} + \\text{กริยาหลัก} ?$$

### 2. เจาะลึกคำถามและตัวอย่างประโยคใช้งานจริง 2 หมวดหมู่:

#### 1) WHAT (อะไร) - ถามหาข้อมูลและสาเหตุ (Root Cause)
- **Daily:** *"What time does the lunch cafeteria open?"* (โรงอาหารเปิดกี่โมง?)
- **DevOps:** *"What caused the memory leak in the staging environment?"* (อะไรเป็นสาเหตุที่ทำให้หน่วยความจำรั่วใน Staging?)
- **DevOps:** *"What is the rollback strategy for this release?"* (แผนการโรลแบ็กสำหรับการปล่อยเวอร์ชันนี้คืออะไร?)

#### 2) WHO (ใคร) - ถามหาบุคคลผู้รับผิดชอบ (Ownership & Incident Response)
- **Daily:** *"Who is presenting the slide deck today?"* (ใครเป็นคนนำเสนอสไลด์ในวันนี้?)
- **DevOps:** *"Who is the on-call engineer for the payments service tonight?"* (ใครเป็นวิศวกร On-call ประจำคืนนี้ของระบบการชำระเงิน?)
- **DevOps:** *"Who approved this pull request without running tests?"* (ใครเป็นคนกดอนุมัติ PR นี้โดยไม่ได้รันเทสต์?)

#### 3) WHERE (ที่ไหน) - ถามหาตำแหน่ง ล็อก และเส้นทาง (Logs & Infrastructure)
- **Daily:** *"Where are we meeting for the team lunch?"* (พวกเราจะเจอกันที่ไหนสำหรับมื้อเที่ยงของทีม?)
- **DevOps:** *"Where are the application error logs stored?"* (ล็อกข้อผิดพลาดของแอปพลิเคชันถูกจัดเก็บไว้ที่ไหน?)
- **DevOps:** *"Where can I find the Kubernetes deployment manifest?"* (ฉันสามารถหาไฟล์คอนฟิก Deployment ของ Kubernetes ได้ที่ไหน?)

#### 4) WHEN (เมื่อไร) - ถามหากรอบเวลาและรอบการทำงาน (Schedule & Deployments)
- **Daily:** *"When is the project deadline?"* (กำหนดส่งโปรเจกต์คือเมื่อไร?)
- **DevOps:** *"When did the latency spike start occurring?"* (กราฟ Latency เริ่มพุ่งสูงขึ้นตั้งแต่เมื่อไร?)
- **DevOps:** *"When will the scheduled maintenance window conclude?"* (ช่วงเวลาบำรุงรักษาระบบตามกำหนดการจะสิ้นสุดลงเมื่อไร?)

#### 5) WHY (ทำไม) - ถามหาสาเหตุเชิงลึก (Post-Mortem & Architecture)
- **Daily:** *"Why did we reschedule the sprint review?"* (ทำไมเราถึงเลื่อนการประชุมรีวิวสปรินต์ล่ะ?)
- **DevOps:** *"Why did the container terminate with an OOMKilled error?"* (ทำไมคอนเทนเนอร์ถึงหยุดทำงานด้วย Error แรมหมด (OOMKilled)?)
- **DevOps:** *"Why are we not using a managed database service?"* (ทำไมพวกเราถึงไม่ใช้บริการฐานข้อมูลแบบ Managed ล่ะ?)

#### 6) WHICH (อันไหน/สิ่งไหน) - ถามเพื่อเลือกจากตัวเลือกที่มีจำกัด (Decisions & Selection)
- **Daily:** *"Which conference room is booked for our retro?"* (ห้องประชุมห้องไหนถูกจองไว้สำหรับ Retro ของเรา?)
- **DevOps:** *"Which cluster node is experiencing the highest CPU load?"* (โหนดไหนในคลัสเตอร์กำลังเจอโหลด CPU สูงที่สุด?)
- **DevOps:** *"Which cloud region should we deploy our backup to?"* (เราควรติดตั้งระบบสำรองไว้ที่ Cloud Region ไหนดี?)

#### 7) HOW (อย่างไร) - ถามหาวิธีการ กระบวนการ และการแก้ไขปัญหา (Process & Troubleshooting)
- **Daily:** *"How do I connect to the office guest Wi-Fi?"* (ฉันจะต่อ Wi-Fi ของออฟฟิศได้อย่างไร?)
- **DevOps:** *"How do we configure the autoscaling policy in Kubernetes?"* (พวกเราจะตั้งค่ากฎ Autoscaling ใน Kubernetes อย่างไร?)
- **DevOps:** *"How can we reproduce this flaky test locally?"* (เราจะจำลองการเกิดบั๊กเทสต์ตัวนี้ในเครื่องตัวเองได้อย่างไร?)
        `,
        examples: [
          { en: "What is the root cause of this database deadlock?", th: "อะไรคือสาเหตุที่แท้จริง (Root cause) ของปัญหา Deadlock ในฐานข้อมูลนี้?", cat: "Tech" },
          { en: "Who approved the merge request into main branch?", th: "ใครเป็นคนอนุมัติ Merge Request นี้เข้าสู่ Main Branch?", cat: "Tech" },
          { en: "Where can I find the documentation for this API?", th: "ฉันสามารถหาเอกสารคู่มือของ API ตัวนี้ได้จากที่ไหน?", cat: "Tech" },
          { en: "When will the database migration complete?", th: "การย้ายฐานข้อมูลจะเสร็จสิ้นเมื่อไร?", cat: "Tech" },
          { en: "Why did the pipeline fail at the build step?", th: "ทำไม Pipeline ถึงล้มเหลวที่ขั้นตอนการ Build?", cat: "Tech" },
          { en: "How can we reduce our AWS cloud infrastructure costs?", th: "เราจะลดค่าใช้จ่าย Infrastructure บน AWS Cloud ได้อย่างไร?", cat: "Tech" }
        ],
        quickCheck: {
          question: "ถ้าต้องการถามเพื่อนร่วมงานว่า 'ใครเป็นคนรับผิดชอบดูแล Incident นี้อยู่' ควรใช้ประโยคใด?",
          options: [
            "Who is handling this incident right now?",
            "What is handle this incident?",
            "Where does this incident handle?",
            "When will this incident handling?"
          ],
          correctIndex: 0,
          explanation: "ถามหาบุคคลใช้ 'Who' ร่วมกับ Present Continuous: 'Who is handling this incident right now?'"
        }
      },
      {
        id: "q-specific-how",
        title: "Unit 2: Specific How-Questions (How many, How much, How long, How often)",
        summary: "คำถามเจาะจงตัวเลข เวลา ความถี่ และต้นทุน (MTTR, Deployment Time, Cron Schedule)",
        formula: "How + (many / much / long / often / far) + Auxiliary Verb + Subject + Verb?",
        explanation: `
### 1. How Many (จำนวนเท่าไร - คำนามนับได้พหูพจน์)
- *"How many microservices are running in production?"* (มีกี่ Microservices ที่กำลังรันอยู่บน Production?)
- *"How many pull requests are waiting for code review?"* (มี PR กี่ตัวที่กำลังรอการตรวจโค้ด?)

### 2. How Much (ปริมาณเท่าไร / ราคาเท่าไร - คำนามนับไม่ได้)
- *"How much bandwidth does the streaming service consume per second?"* (บริการสตรีมมิ่งใช้แบนด์วิดท์เท่าไรต่อวินาที?)
- *"How much memory should we allocate to the Redis cache?"* (เราควรจัดสรรหน่วยความจำให้ Redis Cache เท่าไร?)

### 3. How Long (นานเท่าไร / ใช้เวลาแค่ไหน - MTTR, Downtime, Duration)
- *"How long will the database reindexing take?"* (การจัดทำดัชนีฐานข้อมูลใหม่จะใช้เวลานานเท่าไร?)
- *"How long was the API service unavailable during the incident?"* (ระบบ API ใช้งานไม่ได้เป็นเวลานานเท่าไรในช่วงที่เกิดเหตุขัดข้อง?)

### 4. How Often (บ่อยแค่ไหน - ความถี่, Sync, Cron, Alerts)
- *"How often does the sync script run?"* (สคริปต์ Sync ข้อมูลทำงานบ่อยแค่ไหน?)
- *"How often do we conduct security penetration testing?"* (พวกเราทดสอบเจาะระบบความปลอดภัยบ่อยแค่ไหน?)
        `,
        examples: [
          { en: "How many pod replicas should we scale during peak hours?", th: "เราควรขยาย Pod เป็นกี่ Replicas ในช่วงเวลาที่มีผู้ใช้สูงสุด?", cat: "Tech" },
          { en: "How long does our CI/CD pipeline take from commit to deploy?", th: "ไพพ์ไลน์ CI/CD ของเราใช้เวลานานเท่าไรตั้งแต่คอมมิตจนถึงติดตั้งเสร็จ?", cat: "Tech" },
          { en: "How often do you push your code changes to GitHub?", th: "คุณพุชโค้ดที่แก้ไขขึ้น GitHub บ่อยแค่ไหน?", cat: "Daily" }
        ],
        quickCheck: {
          question: "ถ้าต้องการถามเวลาเฉลี่ยในการกู้คืนระบบ (MTTR: Mean Time to Recovery) ควรขึ้นต้นด้วยคำใด?",
          options: ["How many", "How much", "How long", "How often"],
          correctIndex: 2,
          explanation: "ถามระยะเวลาความยาวนาน (Duration) ใช้ 'How long' เสมอ (เช่น How long did it take to recover?)"
        }
      },
      {
        id: "q-indirect-questions",
        title: "Unit 3: Indirect Questions & Polite Traps (การถามอย่างสุภาพในที่ประชุม)",
        summary: "กฎเหล็กการแปลง Direct Question เป็น Indirect Question ให้สุภาพและไม่สลับกริยา",
        formula: "Polite Opener + WH-Word + Subject + Verb (เรียงแบบประโยคบอกเล่า)",
        explanation: `
### ⚠️ จุดที่มักผิดบ่อยที่สุด (The Biggest Grammar Trap)
เวลาเราถามคำถามตรงๆ (Direct Question) กริยาช่วยจะอยู่หน้าประธาน:
- Direct: *"Where **is** the config file?"*

แต่เมื่อทำเป็นประโยคคำถามอ้อมๆ เพื่อความสุภาพ (Indirect Question) ขึ้นต้นด้วยคำเกริ่น:
- **Could you tell me...?** (ช่วยบอกฉันหน่อยได้ไหมว่า...)
- **Do you happen to know...?** (คุณพอจะทราบไหมว่า...)
- **I was wondering...?** (ฉันอยากสอบถามหน่อยว่า...)

> [!CAUTION]
> **กฎเหล็กที่ต้องจำ:** ส่วนที่ตามหลังคำเกริ่นจะ **เปลี่ยนกลับเป็นประโยคบอกเล่า (Subject + Verb)** ทันที! ห้ามสลับกริยาช่วยมาข้างหน้าประธานอีกเด็ดขาด!

#### ตารางเปรียบเทียบความแตกต่าง:
| Direct (ตรงๆ ห้วนๆ) | Indirect (สุภาพ ระดับมืออาชีพ) | คำแปลภาษาไทย |
| :--- | :--- | :--- |
| Where **is** the documentation? | Could you tell me where the documentation **is**? | คุณช่วยบอกฉันหน่อยได้ไหมครับว่าเอกสารอยู่ที่ไหน? |
| When **will** the server be ready? | Do you know when the server **will** be ready? | คุณพอจะทราบไหมครับว่าเซิร์ฟเวอร์จะพร้อมเมื่อไร? |
| What **does** this error code mean? | Could you explain what this error code **means**? | ช่วยอธิบายหน่อยได้ไหมครับว่า Error code นี้หมายถึงอะไร? |
| Why **did** the deployment fail? | Do you know why the deployment **failed**? | คุณทราบไหมครับว่าทำไมการขึ้นระบบถึงล้มเหลว? |
        `,
        examples: [
          { en: "Could you please tell me where the API credentials are stored?", th: "ช่วยบอกฉันหน่อยได้ไหมครับว่าข้อมูลยืนยันตัวตนของ API ถูกเก็บไว้ที่ไหน?", cat: "Tech" },
          { en: "Do you happen to know when the staging environment will be back up?", th: "คุณพอจะทราบไหมครับว่าระบบ Staging จะกลับมาใช้งานได้เมื่อไร?", cat: "Tech" },
          { en: "I was wondering if you could review my pull request today.", th: "ผมอยากสอบถามว่าวันนี้คุณพอจะมีเวลาตรวจ PR ให้ผมไหมครับ", cat: "Daily" }
        ],
        quickCheck: {
          question: "ประโยคคำถามอ้อม (Indirect Question) ข้อใดเรียงโครงสร้างได้ถูกต้องตามหลักไวยากรณ์?",
          options: [
            "Could you tell me where is the Kubernetes cluster?",
            "Could you tell me where the Kubernetes cluster is?",
            "Could you tell me where does the Kubernetes cluster?",
            "Where could you tell me the Kubernetes cluster is?"
          ],
          correctIndex: 1,
          explanation: "ใน Indirect Question หลังคำว่า where ต้องเรียงประธานก่อนกริยา (Subject: the Kubernetes cluster + Verb: is)"
        }
      }
    ]
  },

  // =========================================================================
  // 6. NEGATIVE SENTENCES
  // =========================================================================
  {
    id: "negative-sentences",
    title: "Negative Sentences",
    titleTh: "ประโยคปฏิเสธ (Negative Structures & Adverbs)",
    icon: "🚫",
    badge: "Syntax",
    description: "การสร้างประโยคปฏิเสธด้วย not, never และ Negative Adverbs (Hardly, Barely, Seldom) สำหรับรายงานข้อจำกัด",
    units: [
      {
        id: "neg-auxiliary",
        title: "Unit 1: Standard Negative Sentences",
        summary: "การใช้ not ร่วมกับกริยาช่วย (do not, cannot, will not, is not)",
        formula: "Subject + Auxiliary Verb + not + Main Verb",
        explanation: `
### กฎการสร้างประโยคปฏิเสธ
1. **ถ้ามี Verb to be หรือ Modal Verbs อยู่แล้ว:** เติม **not** ด้านหลังได้ทันที
   - is not (isn't), are not (aren't), cannot (can't), will not (won't)
   - *"The service **is not** available."* (ระบบยังไม่พร้อมใช้งาน)
2. **ถ้าเป็นกริยาทั่วไป:** ต้องนำ **do / does / did** มาช่วย แล้วตามด้วยกริยาแท้รูปเดิม (Infinitive)
   - *"The script **does not require** root permissions."* (สคริปต์นี้ไม่ต้องการสิทธิ์ Root)
   - *"The tests **did not fail** yesterday."* (เทสต์ไม่ได้พังเมื่อวานนี้)
        `,
        examples: [
          { en: "This microservice does not accept unauthenticated traffic.", th: "ไมโครเซอร์วิสนี้ไม่รับทราฟฟิกที่ไม่ผ่านการยืนยันตัวตน", cat: "Tech" },
          { en: "We cannot deploy during business hours.", th: "พวกเราไม่สามารถขึ้นระบบระหว่างชั่วโมงทำการได้", cat: "Tech" },
          { en: "I don't have access to the production logs.", th: "ฉันไม่มีสิทธิ์เข้าถึงล็อกของระบบ Production", cat: "Daily" }
        ],
        quickCheck: {
          question: "แก้ประโยคให้ถูกต้อง: 'The system not support this feature.'",
          options: [
            "The system is not support this feature.",
            "The system does not support this feature.",
            "The system do not support this feature.",
            "The system has not support this feature."
          ],
          correctIndex: 1,
          explanation: "system เป็นเอกพจน์ กริยาทั่วไป support ต้องใช้ 'does not support'"
        }
      }
    ]
  },

  // =========================================================================
  // 7. IMPERATIVE SENTENCES
  // =========================================================================
  {
    id: "imperative-sentences",
    title: "Imperative Sentences",
    titleTh: "ประโยคคำสั่ง คำแนะนำ และข้อห้าม (Do's & Don'ts)",
    icon: "⚡",
    badge: "Action",
    description: "ภาษาสำหรับการเขียน Documentation, Setup Guide, และคำสั่ง Runbook (เช่น Restart the container, Do not touch...)",
    units: [
      {
        id: "imp-commands",
        title: "Unit 1: Command & Instruction Formulas",
        summary: "การขึ้นต้นด้วย V.inf โดยไม่ต้องมีประธาน และการสั่งห้ามด้วย Don't",
        formula: "Positive: [V.inf] + Object  |  Negative: Don't + [V.inf] + Object",
        explanation: `
### กฎของ Imperative Sentences
- ละประธาน 'You' ไว้ในฐานที่เข้าใจ
- กริยาตัวแรกต้องเป็น **V.inf (รูปดั้งเดิม ไม่ผัน ไม่เติม s/es/ed)** เสมอ
- หากต้องการห้าม ให้ขึ้นต้นด้วย **Do not (Don't)**
- ถ้าต้องการเพิ่มความสุภาพ ให้เติม **Please** ไว้หน้าหรือหลังประโยค
        `,
        examples: [
          { en: "Run the database migration script before launching the app.", th: "รันสคริปต์ย้ายฐานข้อมูลก่อนที่จะเปิดแอปพลิเคชัน", cat: "Tech" },
          { en: "Do not delete the production volume snapshots.", th: "อย่าลบภาพสแนปช็อตของดิสก์ Production เป็นอันขาด", cat: "Tech" },
          { en: "Please check your connection and try again.", th: "กรุณาตรวจสอบการเชื่อมต่อของคุณแล้วลองใหม่อีกครั้ง", cat: "Daily" }
        ],
        quickCheck: {
          question: "ประโยคคำสั่งใน Runbook ข้อใดเขียนได้ถูกต้อง?",
          options: [
            "Rebooting the server now.",
            "Reboot the server and verify the health check.",
            "You are reboot the server.",
            "Reboots the server immediately."
          ],
          correctIndex: 1,
          explanation: "ประโยคคำสั่งต้องขึ้นต้นด้วยกริยาช่อง 1 ไม่ผัน (Infinitive): 'Reboot the server...'"
        }
      }
    ]
  },

  // =========================================================================
  // 8. SUBJECT-VERB AGREEMENT
  // =========================================================================
  {
    id: "subject-verb-agreement",
    title: "Subject-Verb Agreement",
    titleTh: "ความสอดคล้องของประธานและกริยา (Singular vs Plural)",
    icon: "⚖️",
    badge: "Accuracy",
    description: "แก้กับดักแกรมม่าที่เจอบ่อยที่สุดในการเขียนอีเมลและรายงาน: ประธานเอกพจน์ กริยาต้องเติม s/es",
    units: [
      {
        id: "sva-rules",
        title: "Unit 1: Core S-V Agreement Rules",
        summary: "ประธานเอกพจน์คู่กริยาเอกพจน์ และประธานพหูพจน์คู่กริยาพหูพจน์",
        formula: "Singular Subject + Verb(s/es/is/was/has)  vs  Plural Subject + Verb(base/are/were/have)",
        explanation: `
### กฎข้อที่ 1: ประธานเอกพจน์ (1 สิ่ง) ➔ กริยาต้องเติม s/es
- "The server **restarts** every night." (เซิร์ฟเวอร์ 1 เครื่อง ➔ restarts)
- "Each developer **has** a dedicated test database." (Each = แต่ละคน = เอกพจน์ ➔ has)

### กฎข้อที่ 2: ประธานพหูพจน์ (มากกว่า 1 สิ่ง) ➔ กริยารูปปกติ ไม่เติม s
- "The servers **restart** every night." (เซิร์ฟเวอร์หลายเครื่อง ➔ restart)
- "Both systems **are** running stably." (are)

### ⚠️ กับดักคำขยายคั่นกลาง (Prepositional Phrase Trap)
อย่าหลงกลคำที่มาขยายระหว่างประธานกับกริยา:
- "The list **of available services** [is / are] updated." ➔ ประธานที่แท้จริงคือ **The list (เอกพจน์)** ดังนั้นต้องใช้ **is**!
        `,
        examples: [
          { en: "The number of active users has increased significantly.", th: "จำนวนผู้ใช้งานที่กำลังออนไลน์เพิ่มขึ้นอย่างมีนัยสำคัญ (The number of... เป็นเอกพจน์ ใช้ has)", cat: "Tech" },
          { en: "Neither the frontend nor the backend servers were affected.", th: "ทั้งเซิร์ฟเวอร์ฟรอนต์เอนด์และแบ็กเอนด์ไม่ได้รับผลกระทบ", cat: "Tech" },
          { en: "Everyone in our department works hard.", th: "ทุกคนในแผนกของเราทำงานอย่างหนัก (Everyone เป็นเอกพจน์ กริยาเติม s)", cat: "Daily" }
        ],
        quickCheck: {
          question: "เลือกคำกริยาที่ถูกต้อง: 'A group of engineers _____ investigating the root cause.'",
          options: ["is", "are", "were", "have"],
          correctIndex: 0,
          explanation: "ประธานหลักคือ 'A group' (กลุ่มเดียว = เอกพจน์) จึงต้องใช้กริยา 'is'"
        }
      }
    ]
  },

  // =========================================================================
  // 9. SUBJUNCTIVE SENTENCES
  // =========================================================================
  {
    id: "subjunctive-sentences",
    title: "Subjunctive Sentences",
    titleTh: "ประโยคแสดงความปรารถนาและข้อเสนอแนะทางการ",
    icon: "📜",
    badge: "Formal",
    description: "โครงสร้างภาษาอังกฤษระดับสูงสำหรับใช้ในที่ประชุม: It is crucial that [Subject] + [V.inf]",
    units: [
      {
        id: "subj-formal",
        title: "Unit 1: The Mandative Subjunctive",
        summary: "หลังคำว่า crucial, essential, recommend, insist ประธานจะตามด้วย V.inf เสมอ",
        formula: "It is essential that + Subject + [V.inf (ไม่เติม s ไม่ผัน)]",
        explanation: `
### กฎของ Mandative Subjunctive ในที่ทำงาน
เมื่อต้องการเสนอแนะหรือออกข้อกำหนดที่มีความสำคัญมาก มักใช้คำเหล่านี้:
- **It is essential that...** (จำเป็นอย่างยิ่งที่...)
- **It is crucial / vital that...** (สำคัญอย่างยิ่งยวดที่...)
- **We recommend that...** (พวกเราขอแนะนำว่า...)
- **The client requested that...** (ลูกค้าขอร้องให้...)

> [!IMPORTANT]
> **จุดสำคัญ:** กริยาที่ตามหลังประธานในอนุประโยค 'that' **จะต้องเป็นรูปกริยาดั้งเดิม (Bare Infinitive)** เสมอ ไม่ว่าประธานจะเป็น He, She, หรือ It ก็ห้ามเติม s/es!
        `,
        examples: [
          { en: "It is crucial that every developer review the security policy.", th: "จำเป็นอย่างยิ่งที่นักพัฒนาทุกคนต้องตรวจทานนโยบายความปลอดภัย (developer คนเดียว แต่ใช้ review ไม่เติม s)", cat: "Tech" },
          { en: "The team lead recommended that he take a short break.", th: "หัวหน้าทีมแนะนำให้เขาหยุดพักสักครู่ (he แต่ใช้ take)", cat: "Daily" }
        ],
        quickCheck: {
          question: "ข้อใดถูกต้องตามหลัก Subjunctive: 'It is essential that the administrator _____ the database.'",
          options: ["backup", "backups", "backed up", "is backing up"],
          correctIndex: 0,
          explanation: "ในโครงสร้าง Subjunctive หลัง that + Subject ต้องตามด้วยกริยา Infinitive ไม่ผัน (backup)"
        }
      }
    ]
  },

  // =========================================================================
  // 10. REPORTED SPEECH
  // =========================================================================
  {
    id: "reported-speech",
    title: "Reported Speech",
    titleTh: "การถ่ายทอดคำพูดและการรายงานการประชุม (Indirect Speech)",
    icon: "🗣️",
    badge: "Meeting Pro",
    description: "การนำคำพูดของหัวหน้า ลูกค้า หรือเพื่อนร่วมงานมาเล่าต่ออย่างถูกต้อง (เช่น The client said that they needed...)",
    units: [
      {
        id: "rep-backshift",
        title: "Unit 1: Backshift Tenses in Reported Speech",
        summary: "การถอย Tense 1 จังหวะเมื่อรายงานสิ่งที่คนอื่นพูดในอดีต",
        formula: "Direct: Present Simple ➔ Reported: Past Simple  |  will ➔ would  |  can ➔ could",
        explanation: `
### กฎการถอย Tense (Backshift Rule)
เมื่อเรานำคำพูดของคนอื่นในอดีตมาเล่าต่อ (He said that..., She told me that...):
- **is / am / are** ➔ เปลี่ยนเป็น **was / were**
- **V.1 (Present)** ➔ เปลี่ยนเป็น **V.2 (Past)**
- **will** ➔ เปลี่ยนเป็น **would**
- **can** ➔ เปลี่ยนเป็น **could**
- **have / has + V.3** ➔ เปลี่ยนเป็น **had + V.3**
        `,
        examples: [
          { en: "Direct: 'We will release tomorrow.' ➔ Reported: They said that they would release the following day.", th: "พวกเขาบอกว่าพวกเขาจะปล่อยเวอร์ชันในวันรุ่งขึ้น", cat: "Tech" },
          { en: "Direct: 'I am debugging the API.' ➔ Reported: He mentioned that he was debugging the API.", th: "เขาบอกว่าเขากำลังดีบัก API อยู่", cat: "Tech" }
        ],
        quickCheck: {
          question: "เปลี่ยนประโยคนี้เป็น Reported Speech: John said, 'I can fix this bug.'",
          options: [
            "John said that he can fix this bug.",
            "John said that he could fix this bug.",
            "John said that I can fix this bug.",
            "John says that he fix this bug."
          ],
          correctIndex: 1,
          explanation: "can ถอยเป็น could และสรรพนาม I เปลี่ยนเป็น he: 'John said that he could fix this bug.'"
        }
      }
    ]
  },

  // =========================================================================
  // 11. RELATIVE CLAUSE
  // =========================================================================
  {
    id: "relative-clause",
    title: "Relative Clause",
    titleTh: "อนุประโยคขยายคำนาม (Who, Which, That, Where)",
    icon: "🔗",
    badge: "Clarity",
    description: "การเชื่อมประโยคขยายความสเปกเครื่อง ฟีเจอร์ หรือบุคคลให้สละสลวย ชัดเจน และเป็นมืออาชีพ",
    units: [
      {
        id: "rel-pronouns",
        title: "Unit 1: Defining vs Non-Defining Relative Clauses",
        summary: "การใช้ who (คน), which (สิ่งของ), that (คนหรือสิ่งของ), where (สถานที่)",
        formula: "Noun + [who / which / that / where] + Clause",
        explanation: `
### 1. Relative Pronouns พื้นฐาน
- **Who:** ขยายคน (The developer **who** wrote this code)
- **Which:** ขยายสิ่งของ/ระบบ (The server **which** hosts our database)
- **That:** ขยายได้ทั้งคนและสิ่งของใน Defining clause (The bug **that** caused the crash)
- **Where:** ขยายสถานที่หรือตำแหน่ง (The data center **where** our racks are located)
        `,
        examples: [
          { en: "The engineer who designed this architecture has five years of AWS experience.", th: "วิศวกรผู้ออกแบบสถาปัตยกรรมนี้มีประสบการณ์ AWS ถึง 5 ปี", cat: "Tech" },
          { en: "We patched the vulnerability that was discovered last week.", th: "พวกเราได้อุดช่องโหว่ความปลอดภัยที่ถูกค้นพบเมื่อสัปดาห์ที่แล้วเรียบร้อยแล้ว", cat: "Tech" }
        ],
        quickCheck: {
          question: "เลือกคำเชื่อมที่ถูกต้อง: 'This is the server _____ stores all user transaction logs.'",
          options: ["who", "which", "where", "whose"],
          correctIndex: 1,
          explanation: "ขยาย server (สิ่งของ) ทำหน้าที่เป็นประธานของประโยคย่อย ใช้ 'which' หรือ 'that'"
        }
      }
    ]
  },

  // =========================================================================
  // 12. PARTICIPLES
  // =========================================================================
  {
    id: "participles",
    title: "Participles",
    titleTh: "การย่อประโยคด้วย Participle (V.ing vs V.3)",
    icon: "✂️",
    badge: "Advanced",
    description: "Present Participle (V.ing ทำเอง) vs Past Participle (V.3 ถูกทำ) ย่อประโยคยาวให้อ่านกระชับระดับ Native",
    units: [
      {
        id: "part-ing-ed",
        title: "Unit 1: Participle Clauses in Technical Writing",
        summary: "ลดรูปประโยคเพื่อความกระชับในการเขียนรายงานทางเทคนิค",
        formula: "Active: [V.ing + Object], Main Clause  |  Passive: [V.3 + by...], Main Clause",
        explanation: `
### 1. Present Participle (V.ing - ประธานทำเอง)
- ย่อมาจากประโยค Active: "Running on Linux, this service consumes very little RAM."
  - (ความหมายเดิม: Because this service runs on Linux, it consumes...)

### 2. Past Participle (V.3 - ประธานถูกกระทำ)
- ย่อมาจากประโยค Passive: "Configured properly, Kubernetes manages containers automatically."
  - (ความหมายเดิม: When Kubernetes is configured properly, it manages...)
        `,
        examples: [
          { en: "Deployed to three cloud regions, our service guarantees 99.99% uptime.", th: "เมื่อได้รับการติดตั้งใน 3 Cloud Regions บริการของเราจึงรับประกันความพร้อมใช้งานถึง 99.99%", cat: "Tech" },
          { en: "Knowing the deployment risks, we scheduled the update at midnight.", th: "ด้วยความที่รู้ถึงความเสี่ยงในการขึ้นระบบ พวกเราจึงกำหนดเวลาอัปเดตไว้ตอนเที่ยงคืน", cat: "Daily" }
        ],
        quickCheck: {
          question: "ในประโยค 'Built with React, the dashboard loads in under one second.' คำว่า 'Built' สื่อความหมายอย่างไร?",
          options: ["แดชบอร์ดเป็นคนสร้างตัวเอง", "แดชบอร์ดถูกสร้างขึ้นด้วย React", "กำลังสร้างแดชบอร์ดอยู่", "จะสร้างในอนาคต"],
          correctIndex: 1,
          explanation: "Built เป็น Past Participle (V.3) สื่อว่าประธาน (dashboard) ถูกสร้างขึ้นด้วย React"
        }
      }
    ]
  },

  // =========================================================================
  // 13. ACTIVE-PASSIVE VOICE
  // =========================================================================
  {
    id: "active-passive-voice",
    title: "Active-Passive Voice",
    titleTh: "ประธานทำเอง vs ประธานถูกกระทำ (เน้นผลลัพธ์ของระบบ)",
    icon: "🔄",
    badge: "Industry Standard",
    description: "หัวใจของการเขียน Incident Post-Mortem, Release Notes, และ System Logs ในโลกการทำงาน",
    units: [
      {
        id: "voice-formula",
        title: "Unit 1: Passive Voice Formula & Tech Context",
        summary: "ทำไมสายไอทีจึงใช้ Passive Voice บ่อยมาก? เน้น Action และสิ่งที่ถูกทำ",
        formula: "Passive Formula: Subject + Verb to be (ผันตาม Tense) + V.3 (+ by Agent)",
        explanation: `
### ทำไมวงการไอทีและธุรกิจถึงชอบใช้ Passive Voice?
1. **ไม่เน้นผู้กระทำ:** ไม่สำคัญว่าใครเป็นคนกดปุ่ม แต่สำคัญที่ **"ผลลัพธ์ของระบบ"**
2. **เป็นทางการและเป็นกลาง:** ไม่ชี้เป้าหรือกล่าวโทษบุคคล (No Blame Culture)
   - ไม่พูดว่า: *"Somchai broke the database."* (สมชายทำฐานข้อมูลพัง)
   - พูดอย่างมืออาชีพ: *"The database **was corrupted** during migration."* (ฐานข้อมูลเกิดความเสียหายระหว่างการย้ายข้อมูล)

### สูตรแปลง 3 สเต็ปง่ายๆ:
1. นำกรรม (Object) ของประโยคเดิมมาเป็นประธาน
2. ใส่ **Verb to be** ให้ตรงตาม Tense และประธานตัวใหม่
3. เปลี่ยนกริยาแท้เป็น **V.3 (Past Participle)**

#### ตัวอย่างผันตามแต่ละ Tense:
- **Present Simple:** The code **is reviewed** before every merge.
- **Past Simple:** The vulnerability **was patched** yesterday.
- **Present Perfect:** The release **has been deployed** successfully.
- **Future Simple:** The new cluster **will be provisioned** tomorrow.
        `,
        examples: [
          { en: "All production database backups are encrypted at rest.", th: "ข้อมูลสำรองทั้งหมดของ Production จะถูกเข้ารหัสไว้เสมอในขณะจัดเก็บ", cat: "Tech" },
          { en: "The incident was resolved within fifteen minutes.", th: "เหตุขัดข้องได้รับการแก้ไขลุล่วงภายใน 15 นาที", cat: "Tech" },
          { en: "A new version of the app has been published to the App Store.", th: "แอปพลิเคชันเวอร์ชันใหม่ได้รับการเผยแพร่ลง App Store เรียบร้อยแล้ว", cat: "Daily" }
        ],
        quickCheck: {
          question: "แปลงประโยค Active นี้เป็น Passive: 'The security team patched the system.'",
          options: [
            "The system was patched by the security team.",
            "The system is patched by the security team.",
            "The security team was patched the system.",
            "The system has patched by the security team."
          ],
          correctIndex: 0,
          explanation: "ประโยคเดิมเป็น Past Simple (patched) เมื่อแปลงเป็น Passive จึงใช้ was + V.3: 'The system was patched...'"
        }
      }
    ]
  },

  // =========================================================================
  // 14. COMPARISON
  // =========================================================================
  {
    id: "comparison",
    title: "Comparison",
    titleTh: "การเปรียบเทียบขั้นกว่าและขั้นสุด (Comparative & Superlative)",
    icon: "📊",
    badge: "Evaluation",
    description: "การเปรียบเทียบ Tool A vs Tool B, Performance, Latency, Cost เพื่อนำเสนอทางเลือกในที่ประชุม",
    units: [
      {
        id: "comp-rules",
        title: "Unit 1: Comparative & Superlative Structures",
        summary: "การใช้ -er than, more than, the -est, the most และ as...as",
        formula: "Comparative: Adj + -er than  |  more + Adj + than  --- Superlative: the + Adj + -est  |  the most + Adj",
        explanation: `
### 1. Comparative (ขั้นกว่า - เปรียบเทียบ 2 สิ่ง)
- คำพยางค์สั้น: เติม **-er than** (faster than, cheaper than, larger than)
- คำ 2 พยางค์ขึ้นไป: ใช้ **more ... than** (more reliable than, more scalable than)

### 2. Superlative (ขั้นสุด - ที่สุดในกลุ่ม)
- คำพยางค์สั้น: **the ... -est** (the fastest, the cheapest)
- คำหลายพยางค์: **the most ...** (the most efficient, the most secure)

### 3. As ... as (เท่ากัน)
- "PostgreSQL is **as reliable as** MySQL for this workload." (เสถียรเท่ากัน)
        `,
        examples: [
          { en: "Go is generally faster than Python for CPU-intensive tasks.", th: "ภาษา Go โดยทั่วไปเร็วกว่า Python สำหรับงานที่ต้องประมวลผล CPU หนักๆ", cat: "Tech" },
          { en: "This is the most cost-effective cloud solution for our startup.", th: "นี่คือโซลูชันคลาวด์ที่คุ้มค่ากับต้นทุนมากที่สุดสำหรับสตาร์ทอัพของเรา", cat: "Tech" }
        ],
        quickCheck: {
          question: "เปรียบเทียบ Latency ของระบบ: 'Service A has a _____ response time than Service B.'",
          options: ["more low", "lower", "lowest", "as low"],
          correctIndex: 1,
          explanation: "low เป็นคำพยางค์เดียว ขั้นกว่าเติม -er กลายเป็น 'lower than'"
        }
      }
    ]
  },

  // =========================================================================
  // 15. IF-CLAUSE
  // =========================================================================
  {
    id: "if-clause",
    title: "If-Clause",
    titleTh: "ประโยคเงื่อนไขและตรรกะระบบ (Conditionals 0, 1, 2, 3)",
    icon: "🔀",
    badge: "Logic Pro",
    description: "Conditionals ทั้ง 4 แบบสำหรับคิดตรรกะ วางแผน Scenario รับมือบั๊ก และวิเคราะห์ Edge Cases",
    units: [
      {
        id: "if-type-0-1",
        title: "Unit 1: Type 0 & Type 1 (ความจริง & ความเป็นไปได้ในอนาคต)",
        summary: "Type 0 (ความจริงแท้ทางระบบ) vs Type 1 (คาดการณ์สิ่งที่จะเกิดขึ้นจริง)",
        formula: "Type 0: If + Present Simple, Present Simple  |  Type 1: If + Present Simple, will + V.inf",
        explanation: `
### 1. Zero Conditional (Type 0 - ข้อเท็จจริง กฎเกณฑ์ธรรมชาติและระบบ)
- ใช้เมื่อสิ่งหนึ่งเกิดขึ้น อีกสิ่งหนึ่งจะเกิดขึ้นตามมาอย่างแน่นอน 100%
- **สูตร:** If + Present Simple, Present Simple
- ตัวอย่าง: "If a container crashes, Kubernetes **restarts** it automatically." (ถ้าคอนเทนเนอร์ล่ม Kubernetes ก็จะรีสตาร์ทมันโดยอัตโนมัติ)

### 2. First Conditional (Type 1 - เหตุการณ์ที่เป็นไปได้จริงในอนาคต)
- ใช้เมื่อมีเงื่อนไขในปัจจุบัน และคาดว่าผลลัพธ์จะเกิดขึ้นในอนาคต
- **สูตร:** If + Present Simple, **will / can / may + V.inf**
- ตัวอย่าง: "If we deploy on Friday afternoon, we **will encounter** production issues." (ถ้าเราขึ้นระบบเย็นวันศุกร์ เราจะต้องเจอปัญหาบน Production แน่ๆ)
        `,
        examples: [
          { en: "If the CPU temperature exceeds 85°C, the server shuts down automatically.", th: "ถ้าอุณหภูมิ CPU เกิน 85 องศา เซิร์ฟเวอร์จะปิดตัวลงโดยอัตโนมัติ (Type 0)", cat: "Tech" },
          { en: "If you approve this PR now, I will merge it immediately.", th: "ถ้าคุณกดอนุมัติ PR นี้ตอนนี้ ฉันจะกด Merge ให้ทันที (Type 1)", cat: "Tech" },
          { en: "If it rains tomorrow, we will have our meeting online.", th: "ถ้าพรุ่งนี้ฝนตก พวกเราจะประชุมกันทางออนไลน์ (Type 1)", cat: "Daily" }
        ],
        quickCheck: {
          question: "เติมคำในช่องว่าง Type 1: 'If the tests pass, we _____ the code to production.'",
          options: ["deploy", "will deploy", "deployed", "would deploy"],
          correctIndex: 1,
          explanation: "Type 1 เงื่อนไข If + Present Simple (pass), ประโยคหลักใช้ will + V.inf (will deploy)"
        }
      },
      {
        id: "if-type-2-3",
        title: "Unit 2: Type 2 & Type 3 (สมมติตรงข้ามความจริง & เสียดายในอดีต)",
        summary: "Type 2 (สมมติในปัจจุบันที่ยังไม่จริง) vs Type 3 (เหตุการณ์ในอดีตที่ผ่านไปแล้วและกลับไปแก้ไม่ได้)",
        formula: "Type 2: If + Past Simple, would + V.inf  |  Type 3: If + had + V.3, would have + V.3",
        explanation: `
### 1. Second Conditional (Type 2 - สมมติสิ่งที่ตรงข้ามกับความจริงปัจจุบัน)
- ใช้จินตนาการถึงสิ่งที่แทบไม่มีทางเป็นจริงในตอนนี้
- **สูตร:** If + Past Simple (V.2), **would + V.inf**
  *(หมายเหตุ: ในภาษาอังกฤษทางการ Verb to be ใน if-clause จะนิยมใช้ were กับประธานทุกตัว)*
- ตัวอย่าง: "If I **had** root access, I **would inspect** the hidden system logs." (ถ้าฉันมีสิทธิ์ Root นะ ฉันจะเข้าไปดู Log ลับทันที — แต่ความจริงตอนนี้ไม่มีสิทธิ์)

### 2. Third Conditional (Type 3 - เสียดายสิ่งที่เกิดขึ้นไปแล้วในอดีต)
- ย้อนเวลากลับไปไม่ได้ พูดถึงสิ่งที่เกิดขึ้นไปแล้วและอยากให้ผลลัพธ์เป็นอีกอย่าง
- **สูตร:** If + **had + V.3**, **would have + V.3**
- ตัวอย่าง: "If we **had written** unit tests, we **would not have introduced** this critical bug." (ถ้าตอนนั้นพวกเราเขียน Unit tests นะ เราก็คงไม่ปล่อยให้บั๊กวิกฤตินี้หลุดออกไป — แต่ความจริงคือตอนนั้นไม่ได้เขียน บั๊กเลยหลุด)
        `,
        examples: [
          { en: "If we had more budget, we would hire two more SRE engineers.", th: "ถ้าเรามีงบประมาณมากกว่านี้ เราก็คงจ้างวิศวกร SRE เพิ่มอีกสองคนแล้ว (Type 2)", cat: "Tech" },
          { en: "If we had monitored the database latency, the outage would not have happened.", th: "ถ้าตอนนั้นเราคอยเฝ้าดูกราฟ Latency ของฐานข้อมูล เหตุการณ์ระบบดับก็คงไม่เกิดขึ้น (Type 3)", cat: "Tech" }
        ],
        quickCheck: {
          question: "ประโยค Type 3 ข้อใดสมบูรณ์ตามหลักไวยากรณ์?",
          options: [
            "If we tested the migration, the server would not crash.",
            "If we had tested the migration, the server would not have crashed.",
            "If we test the migration, the server will not crash.",
            "If we would test the migration, the server had not crashed."
          ],
          correctIndex: 1,
          explanation: "Type 3 สูตร If + had + V.3 (had tested), would have + V.3 (would not have crashed)"
        }
      }
    ]
  }
];
