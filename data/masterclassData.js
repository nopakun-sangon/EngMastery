/**
 * EngMastery: Zero to Pro - Masterclass Hub Database (masterclassData)
 * Dedicated intensive modules & educational blogs covering:
 * 1. Complete 12 Tenses Masterclass (The Visual Matrix, Rules, Mnemonics & Subject-Verb Agreement)
 * 2. High-Frequency Paired Tenses (The 3 Golden Rules: Past Con + Past Sim, Past Perfect + Past Sim, Future Perfect + Present Sim)
 * 3. Grammar Pitfalls & Traps (Passive Voice vs Intransitive, Articles, Prepositions & Subject-Verb Agreement)
 */

const masterclassData = [
  // =========================================================================
  // MASTERCLASS 1: THE COMPLETE 12 TENSES MASTERCLASS
  // =========================================================================
  {
    id: "mc-12-tenses-complete",
    title: "สรุป 12 Tenses ฉบับสมบูรณ์: จำใน 1 ตาราง โครงสร้าง กฎการใช้ และกลอนช่วยจำ",
    titleEn: "The Complete 12 Tenses Blueprint: Master Every Tense in One Visual Matrix & Mnemonics",
    category: "Tense Blueprint",
    categoryTh: "พิมพ์เขียวพิชิต 12 Tenses",
    badge: "📌 Ultimate 12 Tenses Masterclass",
    badgeColor: "indigo",
    readTime: "18 นาที",
    author: "Senior Instructional Designer & OpenDurian Tense Framework",
    publishedDate: "2026-10-19",
    coverEmoji: "⏰",
    summary: "ถอดรหัสกาลเวลาทั้ง 12 Tenses ในภาษาอังกฤษแบบรวบยอด เข้าใจง่ายด้วย 'ตาราง 12 Tenses ใน 1 ตาราง', กฎการผันกริยาตามประธาน (เอกพจน์ vs พหูพจน์), กลอนช่วยจำจำง่ายติดหู, เกจเปอร์เซ็นต์ Adverbs of Frequency 100%-0%, และข้อควรระวังสำคัญ เช่น Stative Verbs ที่ห้ามเติม -ing และความต่างของ Since vs For",
    tags: ["12 Tenses", "Grammar Matrix", "Kru Dew Mnemonics", "Exam Preparation", "Speaking Rules"],
    
    // Quick Reference Tables Data for Dynamic High-End Rendering
    matrixTable: {
      columns: ["ประเภท Tense", "🟢 Present (ปัจจุบัน)", "🔵 Past (อดีต)", "🟣 Future (อนาคต)"],
      rows: [
        {
          aspect: "Simple (เรียบง่าย)",
          present: {
            name: "Present Simple",
            formula: "S + V.1 (-s/-es)",
            meaning: "กิจวัตร | เกิดทุกวัน | ความจริงธรรมชาติ | ตารางเวลา",
            exampleEn: "The train arrives at 8 o'clock.",
            exampleTh: "รถไฟมาถึงตอน 8 โมงตรงตามตารางเวลา"
          },
          past: {
            name: "Past Simple",
            formula: "S + V.2",
            meaning: "เกิดแล้ว จบแล้วในอดีต | เล่าเรื่อง | มีเวลาระบุชัดเจน",
            exampleEn: "I watched a movie last night.",
            exampleTh: "ฉันดูภาพยนตร์เรื่องหนึ่งเมื่อคืนนี้"
          },
          future: {
            name: "Future Simple",
            formula: "S + will + V.inf",
            meaning: "ตั้งใจจะทำในอนาคต | ความจริงข้างหน้า | สัญญากับผู้อื่น",
            exampleEn: "I will be thirty next year.",
            exampleTh: "ฉันจะอายุครบ 30 ปีในปีหน้า"
          }
        },
        {
          aspect: "Continuous (กำลังดำเนินอยู่)",
          present: {
            name: "Present Continuous",
            formula: "S + is/am/are + V.ing",
            meaning: "กำลังทำอยู่ ณ ตอนนี้ | จะทำไปเรื่อย ๆ | แผนอนาคตที่แน่นอน",
            exampleEn: "He is coming to the office now.",
            exampleTh: "ตอนนี้เขากำลังเดินทางมาที่ออฟฟิศ"
          },
          past: {
            name: "Past Continuous",
            formula: "S + was/were + V.ing",
            meaning: "กำลังทำสิ่งนี้ ณ เวลาเฉพาะในอดีต | กำลังเกิดพร้อมกัน (while)",
            exampleEn: "We were walking in the park at five yesterday.",
            exampleTh: "พวกเรากำลังเดินเล่นในสวนสาธารณะเมื่อวานนี้ตอน 5 โมงเย็น"
          },
          future: {
            name: "Future Continuous",
            formula: "S + will be + V.ing",
            meaning: "จะกำลังติดพันทำสิ่งนี้ในอนาคต ตามเวลาที่ระบุไว้ชัดเจน",
            exampleEn: "At this time tomorrow, I will be flying to Paris.",
            exampleTh: "พรุ่งนี้เวลานี้ ฉันจะกำลังนั่งเครื่องบินมุ่งหน้าไปปารีส"
          }
        },
        {
          aspect: "Perfect (สมบูรณ์/เชื่อมโยง)",
          present: {
            name: "Present Perfect",
            formula: "S + has/have + V.3",
            meaning: "ทำตั้งแต่อดีตถึงปัจจุบัน | เคย-ไม่เคยทำ | ผลยังอยู่ | เพิ่งจบหมาดๆ",
            exampleEn: "I have lived here for 3 months.",
            exampleTh: "ฉันอาศัยอยู่ที่นี่มา 3 เดือนแล้ว (ปัจจุบันก็ยังอยู่)"
          },
          past: {
            name: "Past Perfect",
            formula: "S + had + V.3",
            meaning: "เกิดก่อนและจบลงก่อนอีกเหตุการณ์หนึ่งในอดีต (อดีตของอดีต)",
            exampleEn: "He had repaired the car before he sold it.",
            exampleTh: "เขาได้ซ่อมรถจนเรียบร้อยก่อนที่จะขายมันออกไป"
          },
          future: {
            name: "Future Perfect",
            formula: "S + will have + V.3",
            meaning: "จะทำสิ่งนั้นเสร็จสิ้นสมบูรณ์ก่อนถึงเวลาหรือเหตุการณ์ในอนาคต",
            exampleEn: "He will have completed the course by next week.",
            exampleTh: "เขาจะเรียนจบคอร์สนี้เรียบร้อยก่อนถึงสัปดาห์หน้า"
          }
        },
        {
          aspect: "Perfect Continuous (ต่อเนื่องยาวนาน)",
          present: {
            name: "Present Perfect Continuous",
            formula: "S + has/have + been + V.ing",
            meaning: "ทำมาตั้งแต่อดีต ยาวนานต่อเนื่องไปจนถึงอนาคต (เน้นการกระทำ)",
            exampleEn: "I have been working here for three years.",
            exampleTh: "ฉันทำงานที่นี่มาต่อเนื่อง 3 ปีแล้ว (และจะทำต่อไปเรื่อย ๆ)"
          },
          past: {
            name: "Past Perfect Continuous",
            formula: "S + had + been + V.ing",
            meaning: "เกิดก่อนและดำเนินต่อเนื่องไม่หยุดในอดีต ก่อนจะมีอีกเหตุการณ์มาแทรก",
            exampleEn: "She had been writing her novel before the power went out.",
            exampleTh: "เธอกำลังนั่งเขียนนิยายอยู่อย่างต่อเนื่องก่อนที่ไฟฟ้าจะดับลง"
          },
          future: {
            name: "Future Perfect Continuous",
            formula: "S + will have been + V.ing",
            meaning: "ทำมาอย่างต่อเนื่อง และจะดำเนินต่อไปเรื่อย ๆ จนถึงจุดเวลาในอนาคต",
            exampleEn: "By next year, I will have been working here for five years.",
            exampleTh: "ภายในปีหน้า ฉันจะทำงานที่นี่ติดต่อกันครบ 5 ปีเต็ม"
          }
        }
      ]
    },

    // Subject-Verb Agreement Rules Matrix
    agreementRules: {
      singular: {
        title: "ประธานเอกพจน์ (คนเดียว / สิ่งเดียว)",
        subjects: "He, She, It, Joe, This, That, Each student",
        present: "กริยาเติม -s หรือ -es | ใช้ is | ใช้ has",
        past: "ใช้ was | ใช้ had (ใน Past Perfect)",
        future: "ใช้ will | ใช้ is going to",
        examples: [
          { en: "She loves him.", th: "เธอรักเขา (ประธานคนเดียว กริยาเติม s)" },
          { en: "He drinks a cup of coffee daily.", th: "เขาดื่มกาแฟวันละหนึ่งแก้วเป็นประจำ" },
          { en: "Joe was late yesterday.", th: "โจมาสายเมื่อวานนี้ (ประธานคนเดียวใช้ was)" },
          { en: "Each student has completed their assignment.", th: "นักเรียนแต่ละคนทำการบ้านเสร็จแล้ว (Each ใช้ has)" }
        ]
      },
      plural: {
        title: "ประธานพหูพจน์ (หลายคน / หลายสิ่ง รวมถึง You และ We)",
        subjects: "I, You, We, They, These, Those, Mom and dad, Students",
        present: "กริยารูปเดิม ไม่เติม -s/-es | ใช้ are (I ใช้ am) | ใช้ have",
        past: "ใช้ were | ใช้ had (ใน Past Perfect)",
        future: "ใช้ will | ใช้ are going to (I ใช้ am going to)",
        examples: [
          { en: "We love him.", th: "พวกเรารักเขา (ประธานหลายคน กริยาไม่เติม s)" },
          { en: "They are playing football.", th: "พวกเขากำลังเล่นฟุตบอล (ใช้ are)" },
          { en: "Many people were late yesterday.", th: "หลายคนมาสายเมื่อวานนี้ (ใช้ were)" },
          { en: "Students have completed their assignments.", th: "เหล่านักเรียนทำการบ้านเสร็จแล้ว (ใช้ have)" }
        ]
      },
      proTips: [
        "📌 had (ใน Past Perfect) ใช้ได้กับ 'ประธานทุกตัว' ไม่มีข้อยกเว้น!",
        "📌 will be (ใน Future Con.) และ will have (ใน Future Perfect) ใช้ได้กับ 'ประธานทุกตัว'!",
        "📌 V.inf (Infinitive) คือ กริยารูปดั้งเดิม ไม่ผัน ไม่เติม -s, -es, -ing, หรือ -ed เด็ดขาด (เช่น I will help you. ✅ / I will helping you. ❌)"
      ]
    },

    // Adverbs of Frequency & Percentage Scale
    frequencyScale: [
      { adverb: "Always", percent: 100, th: "เสมอ ๆ / ตลอดเวลา", example: "I always back up my database before updates." },
      { adverb: "Usually", percent: 90, th: "เป็นปกติ", example: "He usually reviews pull requests in the morning." },
      { adverb: "Generally", percent: 80, th: "บ่อยเป็นปกติ", example: "We generally deploy code on Tuesday mornings." },
      { adverb: "Often", percent: 70, th: "บ่อยครั้ง", example: "They often conduct remote sprint retrospectives." },
      { adverb: "Sometimes", percent: 50, th: "บางครั้ง", example: "The server latency sometimes increases under peak loads." },
      { adverb: "Occasionally", percent: 30, th: "บางครั้งบางคราว", example: "She occasionally writes technical articles." },
      { adverb: "Seldom", percent: 10, th: "ไม่ค่อย", example: "He seldom skips daily team stand-up meetings." },
      { adverb: "Rarely", percent: 5, th: "แทบจะไม่", example: "Our production cluster rarely experiences downtime." },
      { adverb: "Never", percent: 0, th: "ไม่เคย", example: "Never commit sensitive API secret keys to git." }
    ],

    // Blog Structured Sections
    sections: [
      {
        heading: "1. จำ 12 Tenses ใน 1 ตาราง (The 12 Tenses Master Matrix)",
        content: `ภาษาอังกฤษแบ่งการรับรู้เรื่องกาลเวลาออกเป็น 2 แกนหลัก:
1. **แกนแนวนอน (Time/เวลา):** อดีต (Past) ➔ ปัจจุบัน (Present) ➔ อนาคต (Future)
2. **แกนแนวตั้ง (Aspect/ลักษณะของเหตุการณ์):**
   - **Simple:** กิจวัตร, ข้อเท็จจริง, สิ่งที่เกิดเรียบง่าย
   - **Continuous:** กำลังกระทำอยู่ ณ ช่วงเวลานั้น (กำลังติดพัน)
   - **Perfect:** เหตุการณ์ที่เกิดขึ้นเสร็จสิ้น หรือมีผลลัพธ์เชื่อมโยงถึงอีกจุดเวลาหนึ่ง
   - **Perfect Continuous:** เน้นย้ำความต่อเนื่องยาวนานของการกระทำว่าทำติดต่อกันมาโดยไม่หยุดพัก

เมื่อนำ 3 กาลเวลามาคูณกับ 4 ลักษณะเหตุการณ์ จึงได้ออกมาเป็น **12 Tenses สากล** ที่ครอบคลุมทุกการสื่อสารในโลกภาษาอังกฤษ`
      },
      {
        heading: "2. กฎเหล็กการผันกริยาตามประธาน (Subject-Verb Agreement)",
        content: `ปัญหาอันดับหนึ่งที่ทำให้คนสอบตกแกรมม่าร์และพูดผิด คือการลืมดู **"ประธานของประโยค"**:
• **ประธานเอกพจน์ (คนเดียว เช่น He, She, It, This car):** ใน Present กริยาต้องเติม **-s หรือ -es** และใช้ **is / has / was**
• **ประธานพหูพจน์ (หลายคน เช่น We, They, Those friends รวมถึง You):** กริยารูปเดิมไม่เติมอะไร และใช้ **are / have / were**
• **กฎทองคำที่ช่วยชีวิต:** คำว่า **had** (ใน Past Perfect), **will be** (ใน Future Con.), และ **will have** (ใน Future Perfect) สามารถใช้ได้กับ **ประธานทุกตัวในโลก** ไม่ว่าจะเป็นเอกพจน์หรือพหูพจน์!`
      },
      {
        heading: "3. เจาะลึกตระกูล Present (ปัจจุบันกาล)",
        content: `กลุ่ม Present คือหัวใจสำคัญของการทำงานและชีวิตประจำวัน ประกอบด้วย 4 Tenses:

**🟢 A. Present Simple Tense (S + V.1 -s/-es)**
• โครงสร้างประโยค:
  - บอกเล่า (+): **Subject + V.1 (-s/-es เมื่อประธานเป็น He/She/It)**
  - ปฏิเสธ (-): **Subject + do / does + not + V.inf**
  - คำถาม (?): **Do / Does + Subject + V.inf?**
• ใช้กับ: 1) กิจวัตรนิสัยที่ทำประจำ 2) ความจริงทางวิทยาศาสตร์/ธรรมชาติ 3) ตารางเวลากำหนดการที่แน่นอน (เช่น รถไฟ เครื่องบิน)
• **กลอนช่วยจำ:** *"Present Sim. Subject + V.1 / เกิดทุกวัน เกิดประจำ"*
• คำบอกเวลา: Adverbs of Frequency (Always 100% ถึง Never 0%), every day/week/month, once a week, twice a month
• ตัวอย่าง: *"The train arrives at 8 o'clock."* (รถไฟมาถึงตอน 8 โมงตรงตามตารางเวลา)

**🟢 B. Present Continuous Tense (S + is/am/are + V.ing)**
• โครงสร้างประโยค:
  - บอกเล่า (+): **Subject + is / am / are + V.ing**
  - ปฏิเสธ (-): **Subject + is / am / are + not + V.ing**
  - คำถาม (?): **Is / Am / Are + Subject + V.ing?**
• ใช้กับ: 1) กำลังเกิดขึ้นตอนนี้ 2) สิ่งที่กำลังทำไปเรื่อย ๆ ในช่วงนี้ (เช่น กำลังเรียนคอร์สนี้อยู่ทั้งปี) 3) แผนในอนาคตอันใกล้ที่จะทำแน่นอน 100%
• **กลอนช่วยจำ:** *"Present Con. คือปัจจุบัน / ใช้กับเหตุการณ์ กำลังทำ ตอนนี้ / is am are บวก ing / now, currently, at the moment"*
• ⚠️ **Tips กริยา 2 ประเภทที่ไม่นิยมทำเป็น V.ing (Stative Verbs):**
  1. กริยาบอกการรับรู้: *see (เห็น), feel (รู้สึก), smell (ได้กลิ่น), hear (ได้ยิน)*
  2. กริยาแสดงความคิด/ความรู้สึก: *know (รู้), believe (เชื่อ), forget (ลืม), mean (หมายถึง)*
• ตัวอย่าง: *"He is coming to the office now."* (ตอนนี้เขากำลังเดินทางมาที่ออฟฟิศ)

**🟢 C. Present Perfect Tense (S + has/have + V.3)**
• โครงสร้างประโยค:
  - บอกเล่า (+): **Subject + has / have + V.3**
  - ปฏิเสธ (-): **Subject + has / have + not + V.3**
  - คำถาม (?): **Has / Have + Subject + V.3?**
• ใช้กับ: 1) เกิดในอดีต ต่อเนื่องมาจนถึงปัจจุบัน 2) เคย/ไม่เคยทำในชีวิต 3) ทำเสร็จไปแล้ว แต่ผลลัพธ์ยังปรากฏอยู่ตอนนี้ 4) เพิ่งจบหมาด ๆ (already, yet, just)
• **กลอนช่วยจำ:** *"Present Perfect ทำแต่เด็ก จนถึงตอนนี้ / has, have บวก Verb three (V.3/-ed) / มองกี่ทีมักมี since, for"*
• 💡 **Tips การใช้ Already VS Yet:**
  - *yet* มักอยู่ท้ายประโยคปฏิเสธ ("Our guests have not arrived yet.")
  - ในประโยคคำถาม: *yet* = "ทำหรือยัง?" VS *already* = "ทำเสร็จแล้วเหรอ? (แปลกใจที่เสร็จไว)"
• ตัวอย่าง: *"I have lived here for 3 months."* (ฉันอาศัยอยู่ที่นี่มา 3 เดือนแล้ว)

**🟢 D. Present Perfect Continuous Tense (S + has/have been + V.ing)**
• โครงสร้างประโยค:
  - บอกเล่า (+): **Subject + has / have + been + V.ing**
  - ปฏิเสธ (-): **Subject + has / have + not + been + V.ing**
  - คำถาม (?): **Has / Have + Subject + been + V.ing?**
• ใช้เน้นว่าทำมาตั้งแต่อดีต ตอนนี้ก็ยังทำอยู่ และจะทำยาวต่อเนื่องไปในอนาคต (เน้นความต่อเนื่องยาวนานโดยไม่หยุดพัก)
• **เปรียบเทียบ:** *I have worked here for 3 years* (แค่บอกข้อเท็จจริงว่าครบ 3 ปี) VS *I have been working here for 3 years* (เน้นความทุ่มเทว่าทำต่อเนื่องไม่หยุดและจะทำต่อไป)
• กริยาที่ใช้ต้องเป็นกริยาที่กระทำได้ยาวนาน เช่น *read, sit, live, travel, build, plan, work*`
      },
      {
        heading: "4. เจาะลึกตระกูล Past (อดีตกาล)",
        content: `กลุ่ม Past ใช้เล่าเรื่องราวและรายงานเหตุการณ์ที่เกิดขึ้นไปแล้วในอดีต:

**🔵 A. Past Simple Tense (S + V.2)**
• โครงสร้างประโยค:
  - บอกเล่า (+): **Subject + V.2**
  - ปฏิเสธ (-): **Subject + did not (didn't) + V.inf**
  - คำถาม (?): **Did + Subject + V.inf?**
• ใช้กับ: 1) เหตุการณ์ที่เกิดขึ้นและ **จบลงแล้วเด็ดขาดในอดีต** ไม่ส่งผลถึงปัจจุบัน 2) สิ่งที่เคยทำเป็นประจำในอดีต แต่ตอนนี้ไม่ทำแล้ว 3) ลำดับความต่อเนื่องของอดีต
• ⚠️ **เปรียบเทียบ Past Simple VS Present Perfect:**
  - *Past Simple (I worked for two hours):* จบแล้ว มีเวลาระบุชัดเจน ตอนนี้เลิกทำแล้ว
  - *Present Perfect (I have worked for two hours):* ปัจจุบันยังคงทำอยู่ หรือเพิ่งจบหมาด ๆ ผลยังอยู่
• การใช้ **was / were**: ประธานคนเดียว (I, He, She, It) ใช้ was | ประธานหลายคน (You, We, They) ใช้ were
• คำบอกเวลา: **yesterday**, **last night / week / month / year**, **two days ago**, **in 2020**
• ตัวอย่าง: *"I watched a movie last night."* (ฉันดูภาพยนตร์เรื่องหนึ่งเมื่อคืนนี้)

**🔵 B. Past Continuous Tense (S + was/were + V.ing)**
• โครงสร้างประโยค:
  - บอกเล่า (+): **Subject + was / were + V.ing**
  - ปฏิเสธ (-): **Subject + was / were + not + V.ing**
  - คำถาม (?): **Was / Were + Subject + V.ing?**
• ใช้กับ: 1) กำลังทำสิ่งนี้ ณ จุดเวลาที่ระบุในอดีต (เช่น at 5 PM yesterday) 2) เหตุการณ์สองอย่างที่กำลังดำเนินอยู่พร้อม ๆ กันในอดีต (มักมี while หรือ as เชื่อม) 3) เป็นฉากหลังที่กำลังทำอยู่แล้วมี Past Simple เข้ามาแทรก
• ตัวอย่าง: *"We were walking in the park at five yesterday."* (พวกเรากำลังเดินเล่นในสวนสาธารณะเมื่อวานนี้ตอน 5 โมงเย็น)

**🔵 C. Past Perfect Tense (S + had + V.3)**
• โครงสร้างประโยค:
  - บอกเล่า (+): **Subject + had + V.3** (ใช้ had ได้กับประธานทุกตัว!)
  - ปฏิเสธ (-): **Subject + had not (hadn't) + V.3**
  - คำถาม (?): **Had + Subject + V.3?**
• ใช้กับ: เหตุการณ์ที่ **เกิดขึ้นก่อนและจบลงก่อน** อีกเหตุการณ์หนึ่งในอดีต (มักมากับคำเชื่อม before, after, by the time)
• 💡 **สูตรจำแม่น:** เหตุการณ์ที่เกิดก่อนใช้ **Past Perfect (had + V.3)** ➔ เหตุการณ์ที่เกิดตามมาทีหลังใช้ **Past Simple (V.2)**
• ตัวอย่าง: *"He had repaired the car before he sold it."* (เขาได้ซ่อมรถจนเรียบร้อยก่อนที่จะขายมันออกไป)

**🔵 D. Past Perfect Continuous Tense (S + had been + V.ing)**
• โครงสร้างประโยค:
  - บอกเล่า (+): **Subject + had + been + V.ing**
  - ปฏิเสธ (-): **Subject + had not + been + V.ing**
  - คำถาม (?): **Had + Subject + been + V.ing?**
• คล้าย Past Perfect แต่เน้นย้ำความต่อเนื่องว่ากระทำสิ่งนั้นมาอย่างยาวนานและไม่หยุดพัก ก่อนจะมีอีกเหตุการณ์ในอดีตมาตัดจบ
• ตัวอย่าง: *"She had been writing her novel before the power went out."* (เธอกำลังนั่งเขียนนิยายอยู่อย่างต่อเนื่องก่อนที่ไฟฟ้าจะดับลง)`
      },
      {
        heading: "5. เจาะลึกตระกูล Future (อนาคตกาล)",
        content: `กลุ่ม Future ใช้พูดถึงแผนการ การตัดสินใจ และการคาดเดาเหตุการณ์ข้างหน้า:

**🟣 A. Future Simple Tense (S + will + V.inf)**
• โครงสร้างประโยค:
  - บอกเล่า (+): **Subject + will + V.inf** (ใช้ will ได้กับประธานทุกตัว!)
  - ปฏิเสธ (-): **Subject + will not (won't) + V.inf**
  - คำถาม (?): **Will + Subject + V.inf?**
• ใช้กับ: 1) ความจริงในอนาคตที่ต้องเกิดขึ้นแน่ ๆ (I will be thirty next year.) 2) ความตั้งใจจะทำ 3) การให้คำสัญญา
• 💡 **Tips เปรียบเทียบ 3 รูปแบบบอกอนาคต (ความหมายต่างกันอย่างลึกซึ้ง!):**
  1. **Subject + V.1 (Present Sim):** กำหนดการตามตารางเวลาที่แน่นอน (*Our train doesn't leave until 5 p.m.*)
  2. **Subject + is/am/are + V.ing (Present Con):** วางแผนนัดหมายไว้แล้วว่าจะทำแน่นอน 100% (*I am visiting a customer tomorrow.*)
  3. **Subject + be going to + V.inf:** การคาดเดาว่าจะเกิดขึ้นแน่นอนเพราะมีหลักฐานประจักษ์ชัด (*The traffic is heavy. We're going to be late.*)

**🟣 B. Future Continuous Tense (S + will be + V.ing)**
• โครงสร้างประโยค:
  - บอกเล่า (+): **Subject + will be + V.ing**
  - ปฏิเสธ (-): **Subject + will not be + V.ing**
  - คำถาม (?): **Will + Subject + be + V.ing?**
• ใช้บอกว่า ณ เวลาหนึ่งในอนาคต เราจะ **"กำลังติดพันทำสิ่งนี้อยู่"** (เช่น At this time tomorrow, I will be flying to Paris.) หรือใช้บอกสิ่งที่จะทำที่ต่างไปจากกิจวัตรเดิม
• ตัวอย่าง: *"At this time tomorrow, I will be flying to Paris."* (พรุ่งนี้เวลานี้ ฉันจะกำลังนั่งเครื่องบินมุ่งหน้าไปปารีส)

**🟣 C. Future Perfect Tense (S + will have + V.3)**
• โครงสร้างประโยค:
  - บอกเล่า (+): **Subject + will have + V.3**
  - ปฏิเสธ (-): **Subject + will not have + V.3**
  - คำถาม (?): **Will + Subject + have + V.3?**
• ใช้การันตีว่า **"งานหรือเหตุการณ์นั้นจะเสร็จสมบูรณ์เรียบร้อย ก่อนถึงเส้นตายในอนาคต"**
• คำบอกเวลาคู่ใจ: **By + จุดเวลาในอนาคต** (เช่น By next week, By the end of this month, By tomorrow morning)
• ตัวอย่าง: *"He will have completed the course by next week."* (เขาจะเรียนจบคอร์สนี้เรียบร้อยก่อนถึงสัปดาห์หน้า)

**🟣 D. Future Perfect Continuous Tense (S + will have been + V.ing)**
• โครงสร้างประโยค:
  - บอกเล่า (+): **Subject + will have been + V.ing**
  - ปฏิเสธ (-): **Subject + will not have been + V.ing**
  - คำถาม (?): **Will + Subject + have been + V.ing?**
• ใช้เน้นย้ำความต่อเนื่องของการกระทำที่จะดำเนินไปจนครบกำหนดระยะเวลาหนึ่งในอนาคต
• ตัวอย่าง: *"By next year, I will have been working here for five years."* (ภายในปีหน้า ฉันจะทำงานที่นี่ติดต่อกันครบ 5 ปีเต็ม — เน้นว่าทำต่อเนื่องไม่ย้ายไปไหนและจะทำต่อ)`
      }
    ],

    // Interactive Quiz Questions from the PDF
    quizQuestions: [
      {
        id: "mc-t12-1",
        question: "เลือกคำตอบที่ถูกต้องตามกฎ Present Tense: 'John _____ living here since 1999.'",
        options: [
          "has been",
          "have been",
          "was",
          "is being"
        ],
        answer: 0,
        explanation: "ถูกต้อง! ประธานคือ 'John' (ประธานเอกพจน์คนเดียว) และมีคำบอกเวลา 'since 1999' (ตั้งแต่ปี 1999 ถึงปัจจุบัน) จึงต้องใช้ Present Perfect Continuous ในรูป 'has been living'"
      },
      {
        id: "mc-t12-2",
        question: "ข้อใดเลือกใช้ Tense ถูกต้องเมื่อมีคำบอกเวลาสิ้นสุดลงแล้วในอดีต: 'They _____ to the beach last weekend.'",
        options: [
          "have gone",
          "went",
          "had been",
          "were going"
        ],
        answer: 1,
        explanation: "ถูกต้อง! มีคำบอกเวลาในอดีตที่จบลงแล้วเด็ดขาดคือ 'last weekend' (สุดสัปดาห์ที่แล้ว) กฎเหล็กคือต้องใช้ Past Simple (V.2) เท่านั้น คือคำว่า 'went' ห้ามใช้ have gone เด็ดขาด"
      },
      {
        id: "mc-t12-3",
        question: "เติมคำในช่องว่างของ Future Perfect ให้ถูกต้อง: 'By the time she gets home, she _____ for six hours.'",
        options: [
          "will drive",
          "will be driving",
          "will have been driving",
          "has driven"
        ],
        answer: 2,
        explanation: "ถูกต้อง! โครงสร้าง 'By the time + Present Simple (gets home)' ชี้ถึงเส้นตายในอนาคต และมี 'for six hours' บ่งบอกความต่อเนื่องยาวนานของการขับรถ จึงใช้ Future Perfect Continuous คือ 'will have been driving'"
      },
      {
        id: "mc-t12-4",
        question: "ประโยคใดต่อไปนี้ใช้ Stative Verb ได้ถูกต้องตามกฎไวยากรณ์?",
        options: [
          "I am knowing the answer right now.",
          "I know the answer right now.",
          "I am believing your story.",
          "She is smelling like sweet perfume."
        ],
        answer: 1,
        explanation: "ถูกต้อง! คำว่า 'know' (รู้) และ 'believe' (เชื่อ) เป็น Stative Verbs (กริยาบอกสภาวะ/ความคิด) ไม่นิยมนำมาเติม -ing แม้จะมีคำว่า right now ก็ตาม ดังนั้นประโยคที่ถูกต้องคือ 'I know the answer right now.'"
      },
      {
        id: "mc-t12-5",
        question: "เลือก Tense ที่ถูกต้องสำหรับประโยค: 'By next Friday, we _____ the house.'",
        options: [
          "will paint",
          "will be painting",
          "will have painted",
          "have painted"
        ],
        answer: 2,
        explanation: "ถูกต้อง! คำว่า 'By next Friday' (ภายในวันศุกร์หน้า) เป็นการระบุเส้นตายในอนาคตว่างานทาสีบ้านจะเสร็จสมบูรณ์เรียบร้อยก่อนถึงวันนั้น จึงต้องใช้ Future Perfect คือ 'will have painted'"
      }
    ]
  },

  // =========================================================================
  // MASTERCLASS 2: HIGH-FREQUENCY PAIRED TENSES
  // =========================================================================
  {
    id: "mc-paired-tenses",
    title: "Tenses คู่ออกสอบบ่อย: เทคนิคเรียงลำดับกาลเวลา 3 คู่ปราบเซียน (หายสับสนเหตุการณ์ซ้อนกัน)",
    titleEn: "High-Frequency Paired Tenses: Past Con + Past Sim, Past Perfect + Past Sim, Future Perfect + Present Sim",
    category: "Exam & Speaking Hacks",
    categoryTh: "สูตรลัดสอบติด & พูดถูกชัวร์",
    badge: "🎯 3 Golden Paired Tenses",
    badgeColor: "emerald",
    readTime: "14 นาที",
    author: "Senior Instructional Designer & OpenDurian Tense Framework",
    publishedDate: "2026-10-19",
    coverEmoji: "⚡",
    summary: "เบื่อไหมกับข้อสอบและบทสนทนาภาษาอังกฤษที่ Tense มาซ้อนกันจนไม่รู้ว่าเหตุการณ์ไหนเกิดก่อน-เกิดหลัง? สรุป 3 คู่ Tense ที่ออกสอบบ่อยที่สุด: 1) Past Continuous + Past Simple (กำลังทำอยู่ ➔ เกิดแทรกกะทันหัน) 2) Past Perfect + Past Simple (เกิดก่อนในอดีต ➔ เกิดตามมาทีหลัง) 3) Future Perfect + Present Simple (คาดว่าจะเสร็จก่อน ➔ เกิดตามมาในอนาคต)",
    tags: ["Paired Tenses", "Past Con & Past Sim", "Past Perfect", "Time Clauses", "Exam Hacks"],

    pairedTensesData: [
      {
        pairTitle: "คู่ที่ 1: Past Continuous กับ Past Simple (กำลังทำอยู่ ➔ เข้ามาแทรก)",
        formula: "Past Con (was/were + V.ing) [เกิดก่อน/ดำเนินอยู่] + Past Sim (V.2) [เข้ามาแทรก]",
        mnemonic: "จำแค่ Past Con. เพราะหลังคำเชื่อมจะเป็น Past Sim. ➔ 'หน้า when หลัง while คือ Past Con.'",
        explanation: "เมื่อมี 2 เหตุการณ์เกิดขึ้นในอดีต: เหตุการณ์ที่ 'กำลังดำเนินอยู่เป็นฉากหลังยาว ๆ' ให้ใช้ Past Continuous (was/were + V.ing) ส่วนเหตุการณ์สั้น ๆ ฉับพลันที่ 'ผ่าเข้ามาขัดจังหวะหรือแทรกเข้ามา' ให้ใช้ Past Simple (V.2)",
        examples: [
          {
            en: "He was working on his project when his computer crashed.",
            th: "เขากำลังทำงานอยู่ตอนที่คอมพิวเตอร์พัง",
            analysis: "• ทำงานอยู่ก่อน (Past Con: was working) ➔ คอมฯ พังแทรกเข้ามาทีหลัง (Past Sim: crashed)"
          },
          {
            en: "I was eating when you called me.",
            th: "ฉันกำลังกินข้าวอยู่ตอนที่คุณโทรเข้ามา",
            analysis: "• กำลังกินอยู่เกิดก่อน (Past Con: was eating) ➔ คุณโทรเข้ามาแทรก (Past Sim: called)"
          },
          {
            en: "While she was talking on the phone, her baby started crying.",
            th: "ในขณะที่เธอกำลังคุยโทรศัพท์ ลูกของเธอก็เริ่มร้องไห้",
            analysis: "• หลัง while คือ Past Con (was talking) ➔ ร้องไห้แทรกเข้ามาคือ Past Sim (started)"
          }
        ]
      },
      {
        pairTitle: "คู่ที่ 2: Past Perfect กับ Past Simple (เกิดก่อนในอดีต ➔ เกิดตามมาทีหลัง)",
        formula: "Past Perfect (had + V.3) [เกิดก่อน] + Past Simple (V.2) [เกิดตามมาทีหลัง]",
        mnemonic: "ใช้คำบอกเวลาจัดลำดับ: 'เกิดขึ้นก่อนในอดีตใช้ Past Perfect ➔ เกิดหลังใช้ Past Simple'",
        explanation: "ใช้เปรียบเทียบ 2 เหตุการณ์ในอดีตที่ไม่ได้เกิดพร้อมกัน: เหตุการณ์ที่เกิดก่อนและจบลงไปเรียบร้อยแล้วในอดีต ต้องใช้ Past Perfect (had + V.3) เสมอ ส่วนเหตุการณ์ที่เกิดตามมาทีหลังให้ใช้ Past Simple (V.2)",
        examples: [
          {
            en: "By the time we got to the airport, the plane had already taken off.",
            th: "ตอนที่พวกเราไปถึงสนามบิน เครื่องบินได้บินออกไปเรียบร้อยแล้ว",
            analysis: "• เครื่องบินบินออกไปก่อนแล้ว (Past Perfect: had taken off) ➔ เราไปถึงทีหลัง (Past Sim: got) = ตกเครื่อง!"
          },
          {
            en: "She had cleaned the house before the guests arrived.",
            th: "เธอทำความสะอาดบ้านเสร็จเรียบร้อยแล้ว ก่อนที่แขกจะเดินทางมาถึง",
            analysis: "• ทำความสะอาดบ้านเสร็จก่อน (Past Perfect: had cleaned) ➔ แขกมาถึงทีหลัง (Past Sim: arrived)"
          },
          {
            en: "He had sent the email before he went to bed.",
            th: "เขาได้ส่งอีเมลเสร็จเรียบร้อยแล้ว ก่อนที่เขาจะเข้านอน",
            analysis: "• ส่งอีเมลเกิดก่อน (Past Perfect: had sent) ➔ เข้านอนเกิดทีหลัง (Past Sim: went)"
          }
        ]
      },
      {
        pairTitle: "คู่ที่ 3: Future Perfect กับ Present Simple (คาดว่าจะเกิดก่อน ➔ จะเกิดตามมาในอนาคต)",
        formula: "Future Perfect (will have + V.3) [เกิดก่อนในอนาคต] + Present Simple (V.1) [เกิดตามมา]",
        mnemonic: "กฎเหล็ก Time Clause: 'หลังคำเชื่อมบอกเวลา when, after, before, by the time ในอนาคต ห้ามใส่ will เด็ดขาด ให้ใช้ Present Simple!'",
        explanation: "ใช้เมื่อพูดถึง 2 เหตุการณ์ในอนาคต โดยเหตุการณ์หนึ่งคาดว่าจะทำเสร็จสมบูรณ์เรียบร้อยก่อน (Future Perfect) ก่อนที่อีกเหตุการณ์หนึ่งจะตามมา โดยอนุประโยคที่ตามหลังคำบอกเวลา (Time Clause) ต้องใช้ Present Simple เสมอ",
        examples: [
          {
            en: "After I finish workout, he will have already gone for a run.",
            th: "หลังจากที่ฉันออกกำลังกายเสร็จ เขาก็คงออกไปวิ่งเรียบร้อยแล้ว",
            analysis: "• เดาว่าเขาจะออกไปวิ่งเสร็จก่อน (will have gone) ➔ ฉันออกกำลังเสร็จตามมาในอนาคต (finish)"
          },
          {
            en: "He will have washed his car when I get home.",
            th: "เขาคงจะล้างรถเสร็จเรียบร้อยแล้วตอนที่ฉันกลับถึงบ้าน",
            analysis: "• เดาว่าเขาจะล้างรถเสร็จก่อน (will have washed) ➔ ฉันถึงบ้านตามมา (get home)"
          },
          {
            en: "By the time the manager arrives, we will have prepared the presentation.",
            th: "เมื่อผู้จัดการเดินทางมาถึง พวกเราก็คงเตรียมพรีเซนเทชันเสร็จเรียบร้อยแล้ว",
            analysis: "• เตรียมพรีเซนต์เสร็จก่อน (will have prepared) ➔ ผู้จัดการมาถึงทีหลัง (arrives)"
          }
        ]
      }
    ],

    sections: [
      {
        heading: "1. ทำไมข้อสอบและชีวิตจริงถึงชอบออก 'Tense คู่'?",
        content: `ในชีวิตจริง มนุษย์เราไม่ได้พูดประโยคเดี่ยว ๆ ที่มีกาลเวลาเดียว แต่เรามักเล่าเรื่องที่มี **"2 เหตุการณ์ซ้อนทับกัน"** เช่น:
• *"กำลังคุยโทรศัพท์อยู่ แล้วจู่ ๆ สัญญาณก็ตัด"* (กำลังทำอยู่ ➔ เกิดแทรก)
• *"ตอนที่ฉันไปถึงโรงหนัง หนังมันฉายไปก่อนแล้ว"* (เกิดก่อน ➔ เกิดทีหลัง)
• *"ตอนที่คุณตื่นนอนพรุ่งนี้ ฉันคงเดินทางถึงสนามบินแล้ว"* (คาดว่าจะเสร็จก่อน ➔ เกิดตามมา)

ถ้าคุณจำสูตร 3 คู่ทองคำนี้ได้ คุณจะทำข้อสอบพาร์ต Reading & Incomplete Sentences ได้ไวขึ้น 3 เท่า และสื่อสารได้อย่างลื่นไหลไร้ข้อผิดพลาด!`
      },
      {
        heading: "2. คู่ที่ 1: Past Continuous กับ Past Simple (เกิดก่อน ➔ เข้ามาแทรก)",
        content: `**กฎเหล็ก:**
1. เหตุการณ์ที่กำลังดำเนินอยู่ยาว ๆ เป็นฉากหลังในอดีต = **Past Continuous (was/were + V.ing)**
2. เหตุการณ์สั้น ๆ ที่เกิดแทรกเข้ามาขัดจังหวะฉับพลัน = **Past Simple (V.2)**
3. **Keyword ช่วยจำ:**
   - **while / as** แปลว่า 'ในขณะที่' มักตามหลังด้วย Past Continuous (เช่น While I was sleeping, the dog kept barking.)
   - **when** แปลว่า 'เมื่อ/ตอนที่' มักตามหลังด้วย Past Simple (เช่น I was reading when my friend called me.)
   - ท่องจำง่าย ๆ: **"หน้า when หลัง while คือ Past Continuous!"**`
      },
      {
        heading: "3. คู่ที่ 2: Past Perfect กับ Past Simple (เกิดก่อน ➔ เกิดทีหลัง ในอดีต)",
        content: `**กฎเหล็ก:**
1. เมื่อพูดถึงอดีต 2 เหตุการณ์ที่เกิดขึ้นไม่พร้อมกัน: เหตุการณ์ที่เกิดก่อนให้ใช้ **Past Perfect (had + V.3)**
2. เหตุการณ์ที่ตามมาทีหลังให้ใช้ **Past Simple (V.2)**
3. **Keyword จัดลำดับ:**
   - **by the time** (ตอนที่/เมื่อถึงเวลาที่)
   - **before** (ก่อนที่) ➔ หลัง before เป็นเหตุการณ์เกิดทีหลัง (Past Simple)
   - **after** (หลังจากที่) ➔ หลัง after เป็นเหตุการณ์ที่เกิดก่อน (Past Perfect: After she had cleaned the house, she left.)`
      },
      {
        heading: "4. คู่ที่ 3: Future Perfect กับ Present Simple ( Time Clause ในอนาคต)",
        content: `**กฎเหล็ก:**
1. เหตุการณ์ที่คาดว่าจะเสร็จสิ้นสมบูรณ์ก่อนในอนาคต = **Future Perfect (will have + V.3)**
2. อีกเหตุการณ์หนึ่งที่ตามมาทีหลังในอนาคต = **Present Simple (S + V.1)**
3. ⚠️ **ข้อควรระวังอันดับ 1:** ในภาษาอังกฤษ ในอนุประโยคบอกเวลา (Time Clause ที่ขึ้นต้นด้วย when, before, after, by the time, as soon as) **"ห้ามใส่ will เด็ดขาด!"** แม้ว่าเหตุการณ์นั้นจะเป็นอนาคตก็ตาม โดยต้องลดรูปมาใช้ Present Simple เสมอ!`
      }
    ],

    quizQuestions: [
      {
        id: "mc-pt-1",
        question: "เติมกริยาในช่องว่างให้ถูกต้องตามกฎ Tense คู่: 'While I _____ to music, she _____ the door.'",
        options: [
          "listened / was opening",
          "was listening / opened",
          "had listened / opened",
          "was listening / was opening"
        ],
        answer: 1,
        explanation: "ถูกต้อง! หลังคำว่า 'While' กำลังดำเนินอยู่เป็นฉากหลังยาว ๆ ใช้ Past Continuous คือ 'was listening' ส่วนการเปิดประตูเข้ามาแทรกฉับพลันใช้ Past Simple คือ 'opened'"
      },
      {
        id: "mc-pt-2",
        question: "เลือกคำตอบที่ถูกต้องตามกฎ Past Perfect: 'By the time we _____ at the party, everyone _____ already _____.'",
        options: [
          "arrived / had ... left",
          "had arrived / ... left",
          "were arriving / has ... left",
          "arrived / was ... leaving"
        ],
        answer: 0,
        explanation: "ถูกต้อง! ทุกคนเดินทางกลับไปก่อนหน้าแล้ว (เกิดก่อน = Past Perfect 'had already left') ก่อนที่พวกเราจะเดินทางไปถึงงานปาร์ตี้ (เกิดทีหลัง = Past Simple 'arrived')"
      },
      {
        id: "mc-pt-3",
        question: "ข้อใดเขียนประโยคเชื่อม Future Perfect กับ Present Simple ได้ถูกต้องตามกฎ Time Clause?",
        options: [
          "He will have washed his car when I will get home.",
          "He will have washed his car when I get home.",
          "He will wash his car when I will have gotten home.",
          "He has washed his car when I get home."
        ],
        answer: 1,
        explanation: "ถูกต้อง! หลังคำเชื่อมบอกเวลา 'when' ที่พูดถึงอนาคต ห้ามใส่ will เด็ดขาด ต้องใช้ Present Simple 'get home' คู่กับ Future Perfect 'will have washed'"
      },
      {
        id: "mc-pt-4",
        question: "เติมคำในช่องว่าง: 'She _____ the house after she _____ it thoroughly.'",
        options: [
          "left / had cleaned",
          "had left / cleaned",
          "was leaving / cleaned",
          "left / has cleaned"
        ],
        answer: 0,
        explanation: "ถูกต้อง! เธอทำความสะอาดบ้านเสร็จก่อน (หลัง after ใช้ Past Perfect 'had cleaned') แล้วเธอจึงค่อยออกจากบ้านไปทีหลัง (เกิดทีหลังใช้ Past Simple 'left')"
      },
      {
        id: "mc-pt-5",
        question: "ประโยค 'He was reading a novel when his friend _____ him.' ควรเติมคำใด?",
        options: [
          "was calling",
          "called",
          "had called",
          "calls"
        ],
        answer: 1,
        explanation: "ถูกต้อง! เขากำลังอ่านนิยายอยู่ (Past Continuous: was reading) เมื่อเพื่อนโทรศัพท์เข้ามาขัดจังหวะแทรกกะทันหัน เหตุการณ์ที่เข้ามาแทรกหลัง when ต้องเป็น Past Simple คือ 'called'"
      }
    ]
  },

  // =========================================================================
  // MASTERCLASS 3: GRAMMAR PITFALLS & TRAPS
  // =========================================================================
  {
    id: "mc-grammar-pitfalls",
    title: "Grammar Pitfalls & Traps: 4 จุดตายไวยากรณ์ที่คนทำงานมักพลาด",
    titleEn: "The 4 Fatal Grammar Pitfalls: Passive Voice, Articles, Prepositions & Agreement",
    category: "Error Elimination",
    categoryTh: "ขจัดจุดตายไวยากรณ์คนทำงาน",
    badge: "⚠️ Error Elimination Blueprint",
    badgeColor: "rose",
    readTime: "12 นาที",
    author: "Senior Instructional Designer & Linguistic Error Analyst",
    publishedDate: "2026-10-19",
    coverEmoji: "🛡️",
    summary: "รวม 4 ปมไวยากรณ์อันตรายที่สร้างความเข้าใจผิดบ่อยที่สุดในหมู่วิศวกรและคนทำงานสากล: ความแตกต่างระหว่างกริยาถูกกระทำกับกริยาอกรรม, ความลี้ลับของ Articles a/an/the, คำบุพบทที่ใช้ผิดประจำ, และกลลวง Subject-Verb Agreement",
    tags: ["Grammar Traps", "Passive Voice", "Articles", "Prepositions", "Subject-Verb Agreement"],

    traps: [
      {
        trapName: "จุดตายที่ 1: Passive Voice กับกริยาอกรรม (Intransitive Verbs)",
        description: "คนไทยมักชินกับการแปลคำว่า 'ถูก...' ลงในประโยคภาษาอังกฤษ แต่คำกริยาที่ไม่ต้องการกรรม (Intransitive Verbs) เช่น happen (เกิดขึ้น), occur (เกิดขึ้น), exist (มีอยู่), arise (อุบัติขึ้น), disappear (หายไป) ไม่สามารถนำมาทำเป็น Passive Voice ได้เด็ดขาดเพราะไม่มีกรรมมารองรับ!",
        wrong: "❌ The outage was happened at 3 AM. / ❌ An unexpected error was occurred.",
        right: "✅ The outage happened at 3 AM. / ✅ An unexpected error occurred.",
        proTip: "ท่องจำ: Happen, Occur, Exist, Arise ห้ามใส่ was/were + V.3 เด็ดขาด"
      },
      {
        trapName: "จุดตายที่ 2: ความลี้ลับของ Articles (A / An / The และ Zero Article)",
        description: "การใช้ a, an, the ไม่ใช่แค่เรื่องเสียงสระ แต่เป็นเรื่องของ 'ความชี้เฉพาะเจาะจง (Definiteness)':\n• 'A/An': กล่าวถึงสิ่งใดสิ่งหนึ่งเป็นครั้งแรก หรือสิ่งทั่วไปหนึ่งหน่วย (*'We need a database.'* = ฐานข้อมูลอะไรก็ได้สักตัว)\n• 'The': ผู้พูดและผู้ฟังรู้ตรงกันว่าหมายถึงสิ่งไหนเจาะจง (*'The database is slow.'* = ตัวที่เรากำลังใช้อยู่นี้)\n• 'Zero Article' (ไม่ใส่ Article): คำนามพหูพจน์หรือนามนับไม่ได้ที่พูดถึงในภาพรวมเชิงกว้าง (*'Developers love automation.'* ห้ามใส่ The เพราะหมายถึงนักพัฒนาทุกคนในโลก)",
        wrong: "❌ The developers love the coffee. (ถ้าพูดถึงนักพัฒนาและกาแฟทั่วโลก) / ❌ I am using internet.",
        right: "✅ Developers love coffee. / ✅ I am using the internet. (อินเทอร์เน็ตมีสิ่งเดียวในโลก ต้องมี the)",
        proTip: "สิ่งที่มีเอกลักษณ์เฉพาะหนึ่งเดียวในโลก (the internet, the cloud, the moon) ต้องมี the เสมอ"
      },
      {
        trapName: "จุดตายที่ 3: คำบุพบทเจ้าปัญหาในบริบทเทคโนโลยีและการทำงาน (Prepositions)",
        description: "การแปลบุพบทตรงตัวจากภาษาไทยมักนำไปสู่ความผิดพลาด:\n• บนเว็บไซต์/บนเซิร์ฟเวอร์: ใช้ on (on the website, on the staging server, on the cloud [หรือ in the cloud])\n• ในการประชุม: ใช้ in (in the meeting, in the conference call)\n• กริยาห้ามใส่ about: discuss (ห้าม discuss about!), mention (ห้าม mention about!)\n• ติดตามงาน: follow up with someone (กับคน) VS follow up on something (กับเรื่อง/เอกสาร)",
        wrong: "❌ Let's discuss about the schema. / ❌ I saw the error in the website.",
        right: "✅ Let's discuss the schema. / ✅ I saw the error on the website.",
        proTip: "หลัง discuss, mention, contact, emphasize ห้ามใส่ about หรือ to เด็ดขาด ใส่กรรมตรงได้ทันที"
      },
      {
        trapName: "จุดตายที่ 4: กลลวงความสอดคล้องประธาน-กริยา (Subject-Verb Agreement)",
        description: "ข้อสอบและเอกสารสัญญามักหลอกด้วยการแทรกคำขยายยาว ๆ ระหว่างประธานกับกริยา:\n• 'Neither... nor...' / 'Either... or...': กริยาผันตามประธานตัวหลังสุดที่อยู่ติดกับมัน (*'Neither the manager nor the engineers were aware.'*)\n• 'Along with / As well as / In addition to': กริยาผันตามประธานตัวหน้าสุดเท่านั้น (*'The CEO, along with his tech leads, is attending the summit.'*)\n• 'Each of / One of': ประธานคือ Each หรือ One จึงถือเป็นเอกพจน์ กริยาต้องเติม s (*'Each of the servers has its own backup.'*)",
        wrong: "❌ Each of the microservices have a health check. / ❌ The lead, as well as the developers, are ready.",
        right: "✅ Each of the microservices has a health check. / ✅ The lead, as well as the developers, is ready.",
        proTip: "มองข้ามวลีในเครื่องหมายจุลภาค (, along with... ,) เพื่อหาประธานตัวจริงข้างหน้า"
      }
    ],

    sections: [
      {
        heading: "1. ทำไมจุดตายไวยากรณ์เหล่านี้ถึงสร้างความเสียหาย?",
        content: `ในบริบทการทำงานระดับสากล ไม่ว่าจะเป็นการเขียนอีเมลถึงลูกค้า การตอบคอมเมนต์ Code Review บน GitHub หรือการสื่อสารใน Slack ข้อผิดพลาดเล็ก ๆ ทางไวยากรณ์สามารถส่งผลต่อความน่าเชื่อถือระดับมืออาชีพ (Professional Credibility) ของคุณได้อย่างมีนัยสำคัญ

บทความนี้คัดเลือก 4 ปมไวยากรณ์ที่คนทำงานมักตกม้าตายบ่อยที่สุด พร้อมวิธีแก้ไขให้ถูกต้องแบบธรรมชาติ`
      },
      {
        heading: "2. เจาะลึก 4 ปมอันตราย พร้อมตัวอย่างผิด-ถูก",
        content: `ศึกษาคำอธิบายและตัวอย่างเปรียบเทียบในแต่ละหัวข้อด้านล่าง เพื่อนำไปปรับใช้ในการทำงานจริงได้ทันที`
      }
    ],

    quizQuestions: [
      {
        id: "mc-p-1",
        question: "ประโยคใดต่อไปนี้เขียนได้อย่างถูกต้องโดยไม่มีข้อผิดพลาดเรื่อง Intransitive Verb?",
        options: [
          "A major security incident was occurred during the deployment window.",
          "A major security incident occurred during the deployment window.",
          "A major security incident was happened during the deployment window.",
          "A major security incident has been occurred during the deployment window."
        ],
        answer: 1,
        explanation: "ถูกต้อง! 'occur' และ 'happen' เป็น Intransitive Verbs (อกรรมกริยา) ซึ่งไม่มีกรรมมารองรับ จึงไม่สามารถแปลงเป็นรูป Passive Voice (was occurred / was happened) ได้เด็ดขาด ประโยคที่ถูกต้องคือ 'A major security incident occurred...'"
      },
      {
        id: "mc-p-2",
        question: "เติมคำในช่องว่างให้ถูกต้อง: 'The CTO, as well as several lead software architects, _____ attending the keynote address.'",
        options: [
          "is",
          "are",
          "were",
          "have been"
        ],
        answer: 0,
        explanation: "ถูกต้อง! วลีที่ขึ้นต้นด้วย 'as well as / along with / together with' เป็นเพียงส่วนขยาย ไม่ใช่ประธานร่วม ประธานหลักของประโยคคือ 'The CTO' ซึ่งเป็นเอกพจน์คนเดียว ดังนั้นกริยาจึงต้องเป็น 'is'"
      },
      {
        id: "mc-p-3",
        question: "ข้อใดใช้คำบุพบทในประโยคภาษาอังกฤษได้อย่างถูกต้องสมบูรณ์?",
        options: [
          "We need to discuss about the database indexing strategy.",
          "We need to discuss the database indexing strategy.",
          "We need to discuss regarding the database indexing strategy.",
          "We need to discuss on the database indexing strategy."
        ],
        answer: 1,
        explanation: "ถูกต้อง! กริยา 'discuss' เป็น Transitive Verb (สกรรมกริยา) ที่ต้องการกรรมตรงมารองรับทันที ห้ามใส่บุพบท 'about', 'regarding', หรือ 'on' ตามหลังเด็ดขาด ดังนั้น 'We need to discuss the database indexing strategy.' จึงถูกต้อง 100%"
      },
      {
        id: "mc-p-4",
        question: "เติม Articles (a, an, the, หรือ Zero Article) ในประโยคต่อไปนี้ให้ถูกต้อง: '_____ engineers need to ensure that _____ credentials are never hard-coded in _____ repository.'",
        options: [
          "The / the / a",
          "Zero Article (—) / the / the",
          "An / a / the",
          "The / an / a"
        ],
        answer: 1,
        explanation: "ถูกต้อง! 1) 'Engineers' กล่าวถึงวิศวกรทุกคนในโลกแบบกว้างจึงไม่ใส่ Article (Zero Article) 2) 'the credentials' พูดถึงรหัสผ่านเฉพาะชุดที่มีในระบบ 3) 'the repository' เจาะจงคลังโค้ดของโปรเจกต์นั้น"
      },
      {
        id: "mc-p-5",
        question: "เติมคำในช่องว่าง: 'Each of the distributed cluster nodes _____ an automated failover script configured.'",
        options: [
          "have",
          "has",
          "are having",
          "were have"
        ],
        answer: 1,
        explanation: "ถูกต้อง! โครงสร้าง 'Each of + นามพหูพจน์' ตัวประธานแท้จริงคือคำว่า 'Each' ซึ่งมีความหมายเป็นเอกพจน์ (แต่ละโหนดเดี่ยว ๆ) ดังนั้นกริยาจึงต้องผันเป็นเอกพจน์คือ 'has'"
      }
    ]
  },
  // =========================================================================
    // =========================================================================
  // MASTERCLASS 4: WH QUESTIONS MASTERY (PART 1/3)
  // =========================================================================
  {
  "id": "mc-wh-part-1",
  "title": "WH Questions Mastery (Part 1/3): กฎเหล็กโครงสร้างสากล & การรวบรวมข้อเท็จจริง (Who, What, Where, When)",
  "titleEn": "WH Questions Mastery Part 1: Core Formulas & Information Gathering (Who, What, Where, When)",
  "category": "Communication & Workplace",
  "categoryTh": "ไวยากรณ์ & การสื่อสารสายงาน Tech",
  "badge": "🔍 WH Mastery • Part 1/3",
  "badgeColor": "emerald",
  "readTime": "6 นาที",
  "author": "Senior English Curriculum Designer & Practical English Coach",
  "publishedDate": "2026-10-19",
  "coverEmoji": "🔍",
  "summary": "ปูพื้นฐานหัวใจของคำถามปลายเปิด (Open-Ended Questions) สรุป 2 สูตรจำสากล (Standard Formula vs Subject Question Formula) พร้อมคลังประโยคตัวอย่าง Who, What, Where, When เปรียบเทียบสองมิติระหว่างชีวิตประจำวันกับบริบทจริงในทีม Tech และ DevOps",
  "tags": [
    "WH Questions",
    "Part 1",
    "Who What Where When",
    "DevOps English",
    "Workplace"
  ],
  "sections": [
    {
      "heading": "1. บทนำและหัวใจสำคัญของ WH Questions (The Core Philosophy & Universal Formulas)",
      "content": "ในภาษาอังกฤษ คำถามแบ่งออกเป็น 2 ประเภทใหญ่:\n1. **Closed Questions (Yes/No Questions):** คำถามปลายปิดที่ตอบได้เพียง ใช่ หรือ ไม่ใช่\n2. **Open-Ended Questions (WH Questions):** คำถามปลายเปิดที่ใช้เพื่อขอ **ข้อมูลเชิงลึก (Specific Information)** เช่น ข้อเท็จจริง, สาเหตุ, บุคคล, สถานที่, หรือขั้นตอนการแก้ปัญหา ซึ่งเป็นหัวใจสำคัญสูงสุดในการทำงานและการสนทนาในชีวิตจริง\n\n---\n\n### 📐 โครงสร้างไวยากรณ์สากล 2 รูปแบบ (The 2 Universal Formulas)\n\n#### 🔹 รูปแบบที่ 1: Standard Formula (ถามหากรรม หรือส่วนขยายของประโยค)\nใช้เมื่อเราทราบประธาน หรือมีประธานในประโยคคำถามอยู่แล้ว (ต้องใช้กริยาช่วย do / does / did / is / am / are / has / have / will / can / should):\n\n`WH-Word + Auxiliary Verb + Subject + Main Verb (V.inf) + ... ?`\n\n• ตัวอย่าง Daily Life: *\"Where do you live?\"* (คุณอาศัยอยู่ที่ไหน?)\n• ตัวอย่าง DevOps: *\"Why did the pipeline fail?\"* (ทำไมไปป์ไลน์ถึงล้มเหลว?)\n\n#### 🔹 รูปแบบที่ 2: Subject Question Formula (ถามหาตัว 'ประธาน' ผู้กระทำ)\nใช้เมื่อคำว่า **Who** หรือ **What** ทำหน้าที่เป็นตัวประธานของประโยคเสียเอง **กฎเหล็ก: ห้ามใส่ do / does / did มาช่วยเด็ดขาด!** ให้ผันกริยาแท้ตาม Tense นั้น ๆ ทันที:\n\n`WH-Word (Subject) + Main Verb (ผันตาม Tense) + Object / Complement ?`\n\n• *\"Who approved this pull request?\"* (ใครเป็นคนอนุมัติ PR นี้? — Who เป็นประธานกระทำกริยา approve)\n• *\"What caused the memory leak?\"* (อะไรเป็นสาเหตุที่ทำให้เกิดเมมโมรีรั่ว?)\n\n⚠️ **เปรียบเทียบข้อแตกต่างที่หลายคนสับสน:**\n• *\"Who called you?\"* (ใครโทรหาคุณ? ➔ Who เป็นประธาน ถามหาคนโทร)\n• *\"Who did you call?\"* (คุณโทรหาใคร? ➔ You เป็นประธาน ถามหากรรม)",
      "keyPhrases": [
        {
          "en": "WH-questions demand actionable information, not just a simple yes or no.",
          "th": "คำถาม WH ต้องการข้อมูลที่นำไปปฏิบัติได้จริง ไม่ใช่เพียงแค่ตอบรับหรือปฏิเสธ"
        },
        {
          "en": "Never use auxiliary do/does/did when the WH-word is the subject.",
          "th": "ห้ามใช้กริยาช่วย do/does/did เมื่อคำ WH ทำหน้าที่เป็นประธานของประโยค"
        }
      ]
    },
    {
      "heading": "2. เจาะลึก Who & What (ถามหาบุคคล, ผู้รับผิดชอบ, สิ่งของ และปัญหา)",
      "content": "### 👤 1. WHO (ถามหาบุคคล, ทีม, หรือผู้รับผิดชอบ)\n• **หมวด A: ชีวิตประจำวัน (Daily Life):**\n  - *\"Who is coming to dinner tonight?\"* (คืนนี้ใครจะมากินข้าวเย็นด้วย?)\n  - *\"Who did you go to the cinema with?\"* (คุณไปดูหนังกับใครมา?)\n  - *\"Who left the front door unlocked?\"* (ใครเปิดประตูหน้าบ้านทิ้งไว้ไม่ได้ล็อก?)\n  - *\"Who is your favorite musical artist?\"* (ใครคือศิลปินเพลงคนโปรดของคุณ?)\n  - *\"Who recommended this coffee shop to you?\"* (ใครแนะนำร้านกาแฟนี้ให้คุณ?)\n\n• **หมวด B: สายงาน DevOps & ที่ทำงาน (Workplace & DevOps):**\n  - *\"Who is currently on-call for production incidents?\"* (ตอนนี้ใครเป็นคนเข้าเวร On-call สำหรับเหตุการณ์ระบบโปรดักชัน?)\n  - *\"Who approved this hotfix to be merged into main?\"* (ใครเป็นผู้อนุมัติให้ผสานตัวแก้บักด่วนนี้เข้าสู่กิ่ง main?)\n  - *\"Who has administrative access to the AWS IAM console?\"* (ใครมีสิทธิ์ระดับแอดมินในการเข้าถึงคอนโซล AWS IAM?)\n  - *\"Who is the primary contact person for this third-party payment gateway outage?\"* (ใครคือผู้ประสานงานหลักสำหรับเหตุการณ์เกตเวย์การชำระเงินของพาร์ตเนอร์ล่ม?)\n  - *\"Who will lead the post-mortem retro on Friday?\"* (ใครจะเป็นผู้นำการประชุมวิเคราะห์สาเหตุหลังเหตุการณ์ระบบล่ม (Post-mortem) ในวันศุกร์?)\n\n---\n\n### 📦 2. WHAT (ถามหาสิ่งของ, การกระทำ, ปัญหา, หรือสถานะ)\n• **หมวด A: ชีวิตประจำวัน (Daily Life):**\n  - *\"What are your plans for the upcoming weekend?\"* (สุดสัปดาห์ที่จะถึงนี้คุณมีแผนจะทำอะไรบ้าง?)\n  - *\"What happened to your smartphone screen?\"* (หน้าจอโทรศัพท์ของคุณไปโดนอะไรมา?)\n  - *\"What kind of food do you usually cook at home?\"* (ปกติคุณชอบทำอาหารประเภทไหนทานที่บ้าน?)\n  - *\"What time do you usually wake up on weekdays?\"* (ปกติวันธรรมดาคุณตื่นนอนกี่โมง?)\n  - *\"What is the best way to get to the airport from here?\"* (วิธีที่ดีที่สุดในการเดินทางไปสนามบินจากที่นี่คือทางไหน?)\n\n• **หมวด B: สายงาน DevOps & ที่ทำงาน (Workplace & DevOps):**\n  - *\"What is the root cause of this sudden 504 Gateway Timeout spike?\"* (สาเหตุที่แท้จริง (Root Cause) ของการที่เออร์เรอร์ 504 พุ่งสูงขึ้นอย่างกะทันหันคืออะไร?)\n  - *\"What version of Kubernetes are we running across our staging clusters?\"* (คลัสเตอร์ Staging ของเรากำลังรัน Kubernetes เวอร์ชันไหนอยู่?)\n  - *\"What is our rollback plan if the database migration fails midway?\"* (แผนการย้อนกลับ (Rollback) ของเราคืออะไร หากการไมเกรตฐานข้อมูลล้มเหลวกลางคัน?)\n  - *\"What key blockers are preventing us from closing this sprint goal?\"* (มีอุปสรรคสำคัญ (Blockers) อะไรบ้างที่ทำให้เราปิดเป้าหมายของสปรินต์นี้ไม่ได้?)\n  - *\"What does the error trace in Datadog indicate?\"* (Stack trace ของข้อผิดพลาดใน Datadog บ่งชี้ถึงปัญหาตรงจุดไหน?)\n  - *\"What is our target Mean Time to Recovery (MTTR) for Tier-1 services?\"* (เป้าหมายระยะเวลาเฉลี่ยในการกู้คืนระบบ (MTTR) สำหรับบริการระดับ Tier-1 คือเท่าใด?)",
      "keyPhrases": [
        {
          "en": "Who is currently on-call for production incidents?",
          "th": "ตอนนี้ใครเป็นคนเข้าเวร On-call สำหรับเหตุการณ์ระบบโปรดักชัน?"
        },
        {
          "en": "What is the root cause of this sudden 504 Gateway Timeout spike?",
          "th": "สาเหตุที่แท้จริงของการที่เออร์เรอร์ 504 พุ่งสูงขึ้นอย่างกะทันหันคืออะไร?"
        }
      ]
    },
    {
      "heading": "3. เจาะลึก Where & When (ถามหาสถานที่, Environment, และกำหนดการ Deployment)",
      "content": "### 📍 3. WHERE (ถามหาสถานที่, ที่ตั้งไฟล์, Path, หรือ Environment)\n• **หมวด A: ชีวิตประจำวัน (Daily Life):**\n  - *\"Where did you buy those comfortable running shoes?\"* (คุณซื้อรองเท้าวิ่งที่ใส่สบายคู่นั้นมาจากที่ไหน?)\n  - *\"Where can I find an ATM around this corner?\"* (แถวหัวมุมนี้มีตู้ ATM อยู่ตรงไหนบ้าง?)\n  - *\"Where are we meeting for lunch tomorrow?\"* (พรุ่งนี้พวกเราจะนัดเจอกันกินข้าวเที่ยงที่ไหน?)\n  - *\"Where did I leave my car keys?\"* (ฉันวางกุญแจรถทิ้งไว้ที่ไหนนะ?)\n\n• **หมวด B: สายงาน DevOps & ที่ทำงาน (Workplace & DevOps):**\n  - *\"Where are the persistent logs stored for this Docker container?\"* (ไฟล์ Log ถาวรของคอนเทนเนอร์ตัวนี้ถูกเก็บไว้ที่พาทไหน?)\n  - *\"Where is the secret encryption key mounted in the Kubernetes pod?\"* (คีย์ลับสำหรับถอดรหัสถูกเมานต์ไว้ที่ไดเรกทอรีใดใน Pod?)\n  - *\"Where can I find the Terraform configuration files for the production VPC?\"* (ฉันจะหาไฟล์คอนฟิก Terraform ของโปรดักชัน VPC ได้จากโฟลเดอร์ไหน?)\n  - *\"Where did the memory leak occur in the recent heap dump analysis?\"* (จากการวิเคราะห์ Heap dump ล่าสุด พบว่าการรั่วไหลของหน่วยความจำเกิดขึ้นที่ส่วนใดของโค้ด?)\n  - *\"Where should we redirect incoming traffic during the scheduled maintenance?\"* (ระหว่างการปิดปรับปรุงระบบตามกำหนดการ เราควรเปลี่ยนเส้นทางทราฟฟิกไปที่ใด?)\n\n---\n\n### ⏱️ 4. WHEN (ถามหาเวลา, กำหนดการ, หรือจุดกระตุ้น Event)\n• **หมวด A: ชีวิตประจำวัน (Daily Life):**\n  - *\"When does the next express train arrive?\"* (รถไฟด่วนขบวนถัดไปจะมาถึงเมื่อไหร่?)\n  - *\"When was the last time you visited your hometown?\"* (ครั้งล่าสุดที่คุณกลับไปเยี่ยมบ้านเกิดคือเมื่อไหร่?)\n  - *\"When will the package be delivered to my apartment?\"* (พัสดุจะถูกนำมาส่งที่อพาร์ตเมนต์ของฉันช่วงเวลาไหน?)\n\n• **หมวด B: สายงาน DevOps & ที่ทำงาน (Workplace & DevOps):**\n  - *\"When is the scheduled maintenance window for the core database?\"* (ช่วงเวลาปิดปรับปรุงระบบ (Maintenance Window) ของฐานข้อมูลหลักกำหนดไว้เมื่อไหร่?)\n  - *\"When does our wildcard SSL certificate expire?\"* (ใบรับรองความปลอดภัย Wildcard SSL ของเราจะหมดอายุลงเมื่อใด?)\n  - *\"When will the automated end-to-end regression tests complete?\"* (การทดสอบระบบอัตโนมัติแบบครอบคลุมทั้งระบบ (E2E Regression) จะเสร็จสิ้นเมื่อไหร่?)\n  - *\"When was this breaking commit merged into the release candidate branch?\"* (คอมมิตที่ทำให้โค้ดพังตัวนี้ถูกผสานเข้าสู่กิ่ง Release Candidate ตั้งแต่เมื่อไหร่?)\n  - *\"When should we trigger the canary deployment to 10% of users?\"* (เราควรเริ่มปล่อยเวอร์ชันทดสอบแบบ Canary ไปยังผู้ใช้ 10% แรกเมื่อไหร่?)",
      "keyPhrases": [
        {
          "en": "Where are the persistent logs stored for this Docker container?",
          "th": "ไฟล์ Log ถาวรของคอนเทนเนอร์ตัวนี้ถูกเก็บไว้ที่พาทไหน?"
        },
        {
          "en": "When does our wildcard SSL certificate expire?",
          "th": "ใบรับรองความปลอดภัย Wildcard SSL ของเราจะหมดอายุลงเมื่อใด?"
        }
      ]
    }
  ],
  "quizQuestions": [
    {
      "id": "mc-wh1-q1",
      "question": "คุณต้องการถามในที่ประชุมว่า \"ใครเป็นคนอนุมัติ Pull Request นี้เมื่อเช้า?\" ประโยคภาษาอังกฤษข้อใดถูกต้องตามหลัก Subject Question?",
      "options": [
        "Who did approve this pull request this morning?",
        "Who approved this pull request this morning?",
        "Who was approved this pull request this morning?",
        "Whom did approve this pull request this morning?"
      ],
      "answer": 1,
      "explanation": "ถูกต้อง! เมื่อ \"Who\" ทำหน้าที่เป็นประธานผู้กระทำกริยาอนุมัติโดยตรง (Subject Question) ห้ามใช้กริยาช่วย did ให้ผันกริยาแท้เป็นอดีต (V.2) ได้ทันที คือ \"Who approved...\""
    },
    {
      "id": "mc-wh1-q2",
      "question": "ประโยคใดถามหา \"สาเหตุที่แท้จริงของการที่เซิร์ฟเวอร์ล่ม\" ได้ถูกต้องตามหลักไวยากรณ์?",
      "options": [
        "What did cause the server crash?",
        "What caused the server crash?",
        "What does caused the server crash?",
        "What was cause the server crash?"
      ],
      "answer": 1,
      "explanation": "ถูกต้อง! \"What\" ในที่นี้ทำหน้าที่เป็นประธาน (อะไรเป็นสาเหตุ) จึงตามด้วยกริยา V.2 คือ \"caused\" โดยไม่ต้องใส่กริยาช่วย did"
    },
    {
      "id": "mc-wh1-q3",
      "question": "ต้องการถามหาพาทที่เก็บไฟล์ Log ถาวรของคอนเทนเนอร์ ข้อใดถูกต้องตาม Standard WH Formula?",
      "options": [
        "Where are the persistent logs stored for this container?",
        "Where the persistent logs are stored for this container?",
        "Where do the persistent logs stored for this container?",
        "Where stored the persistent logs for this container?"
      ],
      "answer": 0,
      "explanation": "ถูกต้อง! โครงสร้างคือ WH-Word (Where) + Auxiliary verb (are) + Subject (the persistent logs) + V.3 (stored)... ?"
    },
    {
      "id": "mc-wh1-q4",
      "question": "ข้อใดใช้คำถาม \"เมื่อไหร่\" ในบริบทการหมดอายุของใบรับรองความปลอดภัย SSL ได้ถูกต้อง?",
      "options": [
        "When is our SSL certificate expire?",
        "When does our SSL certificate expire?",
        "When our SSL certificate does expire?",
        "When expires our SSL certificate?"
      ],
      "answer": 1,
      "explanation": "ถูกต้อง! โครงสร้าง Standard WH Question ใน Present Simple คือ WH-Word (When) + does + Subject (our SSL certificate) + V.inf (expire)?"
    },
    {
      "id": "mc-wh1-q5",
      "question": "ประโยค \"Who did you call?\" มีความหมายต่างจาก \"Who called you?\" อย่างไร?",
      "options": [
        "Who did you call? = ใครโทรหาคุณ (ถามหาประธาน) / Who called you? = คุณโทรหาใคร (ถามหากรรม)",
        "Who did you call? = คุณโทรหาใคร (ถามหากรรม) / Who called you? = ใครโทรหาคุณ (ถามหาประธาน)",
        "ทั้งสองประโยคมีความหมายเหมือนกันทุกประการ",
        "ประโยคแรกผิดไวยากรณ์ ต้องใช้ Whom เสมอ"
      ],
      "answer": 1,
      "explanation": "ถูกต้อง! \"Who did you call?\" คุณ (you) เป็นประธาน จึงถามหากรรมว่าคุณโทรหาใคร ส่วน \"Who called you?\" who เป็นประธาน จึงถามว่าใครโทรหาคุณ"
    }
  ]
},
  // =========================================================================
  // MASTERCLASS 5: WH QUESTIONS MASTERY (PART 2/3)
  // =========================================================================
  {
  "id": "mc-wh-part-2",
  "title": "WH Questions Mastery (Part 2/3): การวิเคราะห์สาเหตุ, การตัดสินใจ & ตัวชี้วัดระบบ (Why, Which, How)",
  "titleEn": "WH Questions Mastery Part 2: Deep Analysis, Decision-Making & System Metrics (Why, Which, How)",
  "category": "DevOps & Engineering",
  "categoryTh": "การวิเคราะห์ & ตัวชี้วัดวิศวกรรม",
  "badge": "⚙️ WH Mastery • Part 2/3",
  "badgeColor": "indigo",
  "readTime": "7 นาที",
  "author": "Senior English Curriculum Designer & Practical English Coach",
  "publishedDate": "2026-10-19",
  "coverEmoji": "⚙️",
  "summary": "เจาะลึกมิติการวิเคราะห์เชิงเทคนิคด้วย 5 Whys, การเปรียบเทียบตัวเลือกด้วย Which, กระบวนการแก้ปัญหาด้วย How และตระกูลวัดผลเชิงตัวเลข (How Many, How Much, How Long, How Often) สำหรับ SRE, Incident Retro และ Metrics",
  "tags": [
    "WH Questions",
    "Part 2",
    "Why Which How",
    "Metrics & SRE",
    "Troubleshooting"
  ],
  "sections": [
    {
      "heading": "1. เจาะลึก Why & Which (5 Whys Root Cause Analysis และการเปรียบเทียบสถาปัตยกรรม)",
      "content": "### 🧠 5. WHY (ถามหาเหตุผล, Root Cause, และการตัดสินใจเชิงเทคนิค)\nในแนวคิด DevOps และ SRE คำว่า **Why** ถูกนำมาใช้ในกระบวนการ **\"The 5 Whys Methodology\"** เพื่อสืบหาสาเหตุที่แท้จริง ไม่ใช่แค่แก้ปัญหาที่ปลายเหตุ:\n\n• **หมวด A: ชีวิตประจำวัน (Daily Life):**\n  - *\"Why did they cancel the outdoor concert?\"* (ทำไมพวกเขาถึงยกเลิกคอนเสิร์ตกลางแจ้งล่ะ?)\n  - *\"Why are you looking so stressed today?\"* (ทำไมวันนี้คุณดูเคร่งเครียดจัง?)\n  - *\"Why don't we try that new Japanese ramen place?\"* (ทำไมเราไม่ลองไปกินร้านราเมนญี่ปุ่นเปิดใหม่ร้านนั้นดูล่ะ?)\n  - *\"Why did the flight get delayed by three hours?\"* (ทำไมเที่ยวบินถึงล่าช้าไปตั้ง 3 ชั่วโมง?)\n\n• **หมวด B: สายงาน DevOps & ที่ทำงาน (Workplace & DevOps):**\n  - *\"Why did the autoscaling group fail to provision additional EC2 instances?\"* (ทำไมระบบ Autoscaling ถึงไม่สามารถเปิดเครื่อง EC2 เพิ่มขึ้นตามที่ตั้งไว้?)\n  - *\"Why are we observing a sudden surge in 5xx server errors on the payment endpoint?\"* (ทำไมเราถึงพบการพุ่งขึ้นอย่างกะทันหันของเออร์เรอร์ 5xx บนเอนด์พอยต์ชำระเงิน?)\n  - *\"Why did we choose Apache Kafka over RabbitMQ for this streaming pipeline?\"* (ทำไมทีมเราถึงตัดสินใจเลือกใช้ Apache Kafka แทน RabbitMQ สำหรับไปป์ไลน์ข้อมูลแบบสตรีมมิ่ง?)\n  - *\"Why was this pull request merged without passing the mandatory linting checks?\"* (ทำไม Pull Request นี้ถึงถูกเมิร์จโดยที่ยังไม่ผ่านการตรวจโค้ดตามมาตรฐาน Linting?)\n  - *\"Why is the cache hit ratio dropping below our defined SLA threshold?\"* (ทำไมอัตราความคุ้มค่าของการดึงแคช (Cache Hit Ratio) ถึงร่วงลงต่ำกว่าเกณฑ์ SLA ที่ตกลงไว้?)\n\n---\n\n### 🔀 6. WHICH (ถามหาตัวเลือกที่มีอยู่อย่างจำกัด หรือการเปรียบเทียบ)\nข้อแตกต่างระหว่าง **Which** กับ **What**:\n- ใช้ **Which** เมื่อมีตัวเลือกชัดเจนในใจ (เช่น จาก 2 หรือ 3 สิ่งตรงหน้า)\n- ใช้ **What** เมื่อเป็นการถามปลายเปิดกว้างไม่จำกัดตัวเลือก\n\n• **หมวด A: ชีวิตประจำวัน (Daily Life):**\n  - *\"Which shirt looks better on me, the navy or the white one?\"* (เสื้อตัวไหนดูดีกว่าสำหรับฉัน ตัวสีกรมท่าหรือสีขาว?)\n  - *\"Which platform does the train to Oxford depart from?\"* (รถไฟไปออกซฟอร์ดออกจากชานชาลาไหน?)\n  - *\"Which dish would you recommend for someone who loves spicy food?\"* (คุณจะแนะนำอาหารจานไหนสำหรับคนที่ชอบทานรสจัด?)\n\n• **หมวด B: สายงาน DevOps & ที่ทำงาน (Workplace & DevOps):**\n  - *\"Which deployment strategy should we adopt: blue-green or rolling update?\"* (เราควรเลือกใช้กลยุทธ์การดีพลอยแบบไหน: Blue-Green หรือ Rolling Update?)\n  - *\"Which cloud provider offers lower network latency for users in Southeast Asia?\"* (ผู้ให้บริการคลาวด์เจ้าไหนให้ค่าความหน่วงของเครือข่าย (Latency) ที่ต่ำกว่าสำหรับผู้ใช้ในเอเชียตะวันออกเฉียงใต้?)\n  - *\"Which microservice is responsible for publishing events to the order topic?\"* (ไมโครเซอร์วิสตัวไหนมีหน้าที่ยิง Event ไปยัง Topic คำสั่งซื้อ?)\n  - *\"Which branch should I rebase my feature branch against before opening the PR?\"* (ฉันควรทำ Rebase กิ่งฟีเจอร์ของฉันเทียบกับกิ่งใดก่อนเปิด PR?)\n  - *\"Which database node is currently designated as the primary read-write replica?\"* (โหนดฐานข้อมูลตัวไหนถูกกำหนดให้เป็นเครื่องหลักสำหรับอ่าน-เขียนในปัจจุบัน?)",
      "keyPhrases": [
        {
          "en": "Why did we choose Apache Kafka over RabbitMQ for this streaming pipeline?",
          "th": "ทำไมทีมเราถึงตัดสินใจเลือกใช้ Apache Kafka แทน RabbitMQ สำหรับไปป์ไลน์นี้?"
        },
        {
          "en": "Which deployment strategy should we adopt: blue-green or rolling update?",
          "th": "เราควรเลือกใช้กลยุทธ์การดีพลอยแบบไหน: Blue-Green หรือ Rolling Update?"
        }
      ]
    },
    {
      "heading": "2. เจาะลึก How (ถามถึงวิธีการ, สภาพ, หรือขั้นตอนการทำงาน)",
      "content": "### ⚙️ 7. HOW (ถามถึงวิธีการ, สภาพ, หรือขั้นตอนการทำงาน)\n• **หมวด A: ชีวิตประจำวัน (Daily Life):**\n  - *\"How was your flight back from Tokyo?\"* (เที่ยวบินขากลับจากโตเกียวของคุณราบรื่นดีไหม?)\n  - *\"How do you make this pasta sauce taste so creamy?\"* (คุณทำซอสพาสต้านี้ยังไงถึงรสชาติเข้มข้นกลมกล่อมขนาดนี้?)\n  - *\"How did you resolve the conflict with your roommate?\"* (คุณแก้ปัญหาความขัดแย้งกับรูมเมตของคุณอย่างไร?)\n  - *\"How can I reset my password on this application?\"* (ฉันสามารถรีเซ็ตรหัสผ่านในแอปนี้ได้อย่างไร?)\n\n• **หมวด B: สายงาน DevOps & ที่ทำงาน (Workplace & DevOps):**\n  - *\"How do we reproduce this race condition bug in our local development environment?\"* (เราจะจำลองปัญหา Race Condition นี้ในเครื่อง Development ส่วนตัวได้อย่างไร?)\n  - *\"How does the API gateway route authenticated requests to downstream services?\"* (API Gateway กระจายคำขอที่ยืนยันตัวตนแล้วไปยังบริการปลายทางอย่างไร?)\n  - *\"How can we optimize our Elasticsearch indexing pipeline to reduce disk I/O?\"* (เราจะปรับปรุงไปป์ไลน์ Indexing ของ Elasticsearch อย่างไรเพื่อลดภาระการอ่านเขียนดิสก์?)\n  - *\"How do we orchestrate a zero-downtime database schema migration?\"* (เราจะจัดการการเปลี่ยนโครงสร้างฐานข้อมูลโดยที่ระบบไม่หยุดทำงาน (Zero-Downtime) ได้อย่างไร?)\n  - *\"How can we automate the teardown of ephemeral test environments via CI scripts?\"* (เราจะเขียนสคริปต์ CI สั่งทำลายสภาพแวดล้อมทดสอบชั่วคราวแบบอัตโนมัติได้อย่างไร?)",
      "keyPhrases": [
        {
          "en": "How do we reproduce this race condition bug in our local environment?",
          "th": "เราจะจำลองปัญหา Race Condition นี้ในเครื่อง Local ได้อย่างไร?"
        },
        {
          "en": "How do we orchestrate a zero-downtime database schema migration?",
          "th": "เราจะจัดการการเปลี่ยนโครงสร้างฐานข้อมูลแบบ Zero-Downtime ได้อย่างไร?"
        }
      ]
    },
    {
      "heading": "3. กลุ่มคำถามเจาะจงตระกูล How (How Many, How Much, How Long, How Often)",
      "content": "ในการทำงานด้าน IT และ DevOps ตัวเลข สถิติ และระยะเวลา คือข้อมูลชี้วัดสำคัญ กลุ่มคำถาม **How + ส่วนขยาย** จึงถูกใช้งานบ่อยที่สุดในการวัดผล Metrics:\n\n### 🔢 1. How Many (ถามหา \"จำนวนนับได้\" — Countable Nouns)\n• **Daily Life:**\n  - *\"How many cups of espresso do you drink in a typical workday?\"* (วันทำงานปกติคุณดื่มเอสเพรสโซกี่แก้ว?)\n  - *\"How many people are attending the team building workshop?\"* (มีกี่คนที่จะเข้าร่วมเวิร์กช็อปสร้างทีมสัมพันธ์?)\n• **DevOps & Workplace:**\n  - *\"How many active replicas are currently running in the payment namespace?\"* (มี Pod ที่ทำงานอยู่กี่ตัวใน Namespace การชำระเงิน?)\n  - *\"How many concurrent HTTP connections can this load balancer sustain simultaneously?\"* (โหลดบาลานเซอร์ตัวนี้สามารถรองรับการเชื่อมต่อพร้อมกันได้กี่การเชื่อมต่อ?)\n  - *\"How many failed login attempts occurred before the IP was blocked?\"* (มีการพยายามล็อกอินผิดพลาดกี่ครั้งก่อนที่ IP นั้นจะถูกบล็อก?)\n\n---\n\n### 💰 2. How Much (ถามหา \"ปริมาณนับไม่ได้\" หรือ \"ราคา/งบประมาณ\" — Uncountable Nouns & Cost)\n• **Daily Life:**\n  - *\"How much time do you spend commuting to the office every morning?\"* (คุณใช้เวลาเดินทางไปออฟฟิศตอนเช้ามากน้อยแค่ไหน?)\n  - *\"How much did you pay for this mechanical keyboard?\"* (คีย์บอร์ดกลไกตัวนี้ราคาเท่าไหร่?)\n• **DevOps & Workplace:**\n  - *\"How much disk capacity is remaining on the primary database storage volume?\"* (เหลือพื้นที่ความจุดิสก์อยู่เท่าไหร่บนโวลุมจัดเก็บข้อมูลของฐานข้อมูลหลัก?)\n  - *\"How much network bandwidth are our backup snapshots consuming during peak hours?\"* (การทำสแนปช็อตสำรองข้อมูลกินแบนด์วิธเครือข่ายไปเท่าไหร่ในช่วงชั่วโมงเร่งด่วน?)\n  - *\"How much will migrating this Kubernetes cluster to managed EKS cost per month?\"* (การย้ายคลัสเตอร์ Kubernetes ไปใช้บริการ EKS แบบ Managed จะมีค่าใช้จ่ายประมาณเท่าไหร่ต่อเดือน?)\n\n---\n\n### ⏳ 3. How Long (ถามหา \"ระยะเวลา\" — Duration & Timeframes)\n• **Daily Life:**\n  - *\"How long have you been working as a software developer?\"* (คุณทำงานเป็นนักพัฒนาซอฟต์แวร์มานานแค่ไหนแล้ว?)\n  - *\"How long does it take to walk from the train station to your office?\"* (เดินจากสถานีรถไฟไปถึงออฟฟิศของคุณใช้เวลานานเท่าไหร่?)\n• **DevOps & Workplace:**\n  - *\"How long did the automated failover take during the simulated drill?\"* (การสลับระบบสำรองอัตโนมัติ (Failover) ใช้เวลานานแค่ไหนระหว่างการซ้อมแผนฉุกเฉิน?)\n  - *\"How long has this background worker job been stuck in the processing queue?\"* (งาน Background Worker ตัวนี้ค้างอยู่ในคิวประมวลผลมานานเท่าไหร่แล้ว?)\n  - *\"How long will the blue-green traffic switchover take to reach 100%?\"* (การสลับทราฟฟิกแบบ Blue-Green จะใช้เวลานานเท่าใดในการปรับขึ้นเต็ม 100%?)\n\n---\n\n### 🔄 4. How Often (ถามหา \"ความถี่\" — Frequency & Cadence)\n• **Daily Life:**\n  - *\"How often do you go to the gym during the week?\"* (คุณไปออกกำลังกายที่ยิมบ่อยแค่ไหนในแต่ละสัปดาห์?)\n  - *\"How often do you back up your personal laptop data?\"* (คุณสำรองข้อมูลในแล็ปท็อปส่วนตัวบ่อยแค่ไหน?)\n• **DevOps & Workplace:**\n  - *\"How often do we run automated vulnerability scans on our base container images?\"* (เราสแกนหาช่องโหว่ด้านความปลอดภัยบนอิมเมจพื้นฐานของคอนเทนเนอร์บ่อยแค่ไหน?)\n  - *\"How often does Prometheus scrape metrics from this target endpoint?\"* (Prometheus ดึงข้อมูลสถิติตัวชี้วัดจากเอนด์พอยต์นี้ทุก ๆ กี่วินาที/นาที?)\n  - *\"How often do we review and rotate our production API secrets?\"* (เรามีรอบในการตรวจสอบและผลัดเปลี่ยน (Rotate) รหัสลับ API ของโปรดักชันบ่อยแค่ไหน?)",
      "keyPhrases": [
        {
          "en": "How many active replicas are currently running in the payment namespace?",
          "th": "มี Pod ที่ทำงานอยู่กี่ตัวใน Namespace การชำระเงิน?"
        },
        {
          "en": "How long did the automated failover take during the drill?",
          "th": "การสลับระบบสำรองอัตโนมัติ (Failover) ใช้เวลานานแค่ไหน?"
        }
      ]
    }
  ],
  "quizQuestions": [
    {
      "id": "mc-wh2-q1",
      "question": "ต้องการถามเพื่อนร่วมงานว่า \"ทำไมอัตราความผิดพลาดของระบบถึงพุ่งสูงขึ้น?\" ข้อใดถูกต้องตามหลัก Past Simple?",
      "options": [
        "Why did the system error rate spike so suddenly?",
        "Why the system error rate spiked so suddenly?",
        "Why was the system error rate spike so suddenly?",
        "Why does the system error rate spiked so suddenly?"
      ],
      "answer": 0,
      "explanation": "ถูกต้อง! ใช้ Past Simple: Why + did + Subject (the system error rate) + V.inf (spike) ... ?"
    },
    {
      "id": "mc-wh2-q2",
      "question": "เมื่อมี 2 แนวทางสถาปัตยกรรมที่ชัดเจนตรงหน้า และต้องการถามว่า \"ตัวไหนช่วยประหยัดต้นทุนคลาวด์ได้ดีกว่ากัน\" ควรใช้คำถามใด?",
      "options": [
        "What architecture saves more cloud costs?",
        "Which architecture saves more cloud costs?",
        "Where architecture saves more cloud costs?",
        "How architecture saves more cloud costs?"
      ],
      "answer": 1,
      "explanation": "ถูกต้อง! เมื่อมีตัวเลือกที่จำกัดและเฉพาะเจาะจงให้เปรียบเทียบ ต้องใช้ \"Which\" แทน \"What\""
    },
    {
      "id": "mc-wh2-q3",
      "question": "\"How can we simulate high-traffic load in our staging environment?\" มีความหมายตรงกับข้อใด?",
      "options": [
        "ทำไมเราถึงต้องจำลองทราฟฟิกสูงในสเตจจิ้ง?",
        "เราจะจำลองโหลดทราฟฟิกสูงในสภาพแวดล้อมสเตจจิ้งได้อย่างไร?",
        "เมื่อไหร่ที่เราควรจำลองทราฟฟิกสูงในสเตจจิ้ง?",
        "ใครเป็นคนจำลองทราฟฟิกสูงในสเตจจิ้ง?"
      ],
      "answer": 1,
      "explanation": "ถูกต้อง! \"How can we...\" หมายถึง \"พวกเราจะสามารถทำ...ได้อย่างไร\" ซึ่งถามถึงวิธีปฏิบัติหรือขั้นตอนทางเทคนิค"
    },
    {
      "id": "mc-wh2-q4",
      "question": "ต้องการถามจำนวนเครื่องเซิร์ฟเวอร์ที่ได้รับผลกระทบจากเหตุการณ์ระบบล่ม (เซิร์ฟเวอร์นับได้) ต้องขึ้นต้นด้วยคำใด?",
      "options": [
        "How much servers were affected by the outage?",
        "How many servers were affected by the outage?",
        "How long servers were affected by the outage?",
        "How often servers were affected by the outage?"
      ],
      "answer": 1,
      "explanation": "ถูกต้อง! \"servers\" เป็นคำนามนับได้พหูพจน์ ต้องใช้ \"How many\" (ส่วน How much ใช้กับคำนามนับไม่ได้ เช่น disk space หรือ money)"
    },
    {
      "id": "mc-wh2-q5",
      "question": "ต้องการถามว่า \"ฐานข้อมูลใช้เวลากู้คืนนานแค่ไหน?\" ข้อใดถูกต้อง?",
      "options": [
        "How often did the database recovery take?",
        "How long did the database recovery take?",
        "How many did the database recovery take?",
        "How much time was the database recovery take?"
      ],
      "answer": 1,
      "explanation": "ถูกต้อง! ถามถึงระยะเวลา (Duration) ใช้ \"How long did ... take?\""
    }
  ]
},
  // =========================================================================
  // MASTERCLASS 6: WH QUESTIONS MASTERY (PART 3/3)
  // =========================================================================
  {
  "id": "mc-wh-part-3",
  "title": "WH Questions Mastery (Part 3/3): ศิลปะการถามแบบสุภาพมืออาชีพ & จุดที่มักผิดบ่อย (Indirect Questions)",
  "titleEn": "WH Questions Mastery Part 3: Workplace Diplomacy & The Indirect Questions Trap",
  "category": "Professional Communication",
  "categoryTh": "การสื่อสารระดับสากล & มารยาทการทำงาน",
  "badge": "💼 WH Mastery • Part 3/3",
  "badgeColor": "purple",
  "readTime": "6 นาที",
  "author": "Senior English Curriculum Designer & Practical English Coach",
  "publishedDate": "2026-10-19",
  "coverEmoji": "💼",
  "summary": "เปลี่ยนคำถามตรงๆ ที่อาจฟังดูห้วนหรือจับผิด ให้กลายเป็นประโยค Indirect Questions ที่สุภาพและมืออาชีพ พร้อมตารางเปรียบเทียบคำต่อคำ กฎเหล็กการเรียงคำแบบประโยคบอกเล่า และแนวทางตั้งคำถามใน Slack / Incident Post-mortem",
  "tags": [
    "WH Questions",
    "Part 3",
    "Indirect Questions",
    "Workplace Diplomacy",
    "Slack Communication"
  ],
  "sections": [
    {
      "heading": "1. ทำไมต้องใช้ Indirect Questions? (ความสุภาพและจิตวิทยาการทำงานร่วมกัน)",
      "content": "ในการทำงานระดับสากล โดยเฉพาะการสื่อสารกับผู้บริหาร, ลูกค้า, หรือเพื่อนร่วมงานต่างชาติ การถามคำถามตรงๆ เกินไป (Direct Questions) เช่น:\n• *\"Where is the report?\"* (รายงานอยู่ที่ไหน?)\n• *\"Why did the build fail?\"* (ทำไมบิลด์พัง?)\n• *\"Who made this change?\"* (ใครแก้ตรงนี้?)\n\nแม้ว่าจะถูกต้องตามไวยากรณ์ แต่ในบริบทการทำงาน บางครั้งอาจฟังดู **ห้วน แข็งกระด้าง หรือเป็นการจับผิด (Accusatory/Aggressive)**\n\nทักษะขั้นสูงที่มืออาชีพนิยมใช้คือ **Indirect Questions (การถามแบบอ้อมและสุภาพ)** ซึ่งช่วยสร้างบรรยากาศเชิงบวก (Psychological Safety) และแสดงถึงความเคารพต่อคู่สนทนา",
      "keyPhrases": [
        {
          "en": "Indirect questions soften the tone and prevent sounding confrontational in technical discussions.",
          "th": "คำถามแบบอ้อมช่วยลดความกระด้างของน้ำเสียง และป้องกันไม่ให้ฟังดูเป็นการจับผิดในการคุยงานเชิงเทคนิค"
        }
      ]
    },
    {
      "heading": "2. กฎเหล็กของ Indirect Questions (The Golden Rule & Word Order)",
      "content": "### ⚠️ กฎเหล็กของ Indirect Questions (The Golden Rule)\nเมื่อคุณนำประโยคเกริ่นสุภาพ เช่น:\n- *\"Could you please tell me...\"* (คุณพอจะบอกฉันได้ไหมว่า...)\n- *\"Do you happen to know...\"* (คุณพอจะทราบไหมว่า...)\n- *\"Would you mind explaining...\"* (คุณจะรังเกียจไหมหากช่วยอธิบายว่า...)\n- *\"I was wondering...\"* (ฉันอยากทราบว่า...)\n- *\"Do you have any idea...\"* (คุณพอจะมีข้อมูลไหมว่า...)\n\n**กฎไวยากรณ์:** ประโยคด้านหลังจะถูกเปลี่ยนกลับเป็น **\"โครงสร้างประโยคบอกเล่า\" (Subject + Verb)** เสมอ! ห้ามสลับกริยาช่วย (is/are/did) มาไว้หน้าประธานอีกต่อไป:\n\n• Direct: *\"Where **is** the API gateway?\"*\n• Indirect: *\"Could you tell me where the API gateway **is**?\"* (กริยา is ย้ายไปอยู่หลังประธาน the API gateway)\n\n• Direct: *\"Why **did** the build fail?\"*\n• Indirect: *\"Can you explain why the build **failed**?\"* (ตัด did ทิ้ง แล้วผันกริยากลับเป็น V.2 คือ failed)",
      "keyPhrases": [
        {
          "en": "In indirect questions, word order always reverts to standard statement format: Subject + Verb.",
          "th": "ในประโยค Indirect Questions ลำดับคำจะเรียงแบบประโยคบอกเล่าเสมอ คือ ประธาน ตามด้วย กริยา"
        }
      ]
    },
    {
      "heading": "3. ตารางเปรียบเทียบ Direct VS Indirect ในการทำงานไอที และ Checklist ก่อนส่ง Slack",
      "content": "### 📊 ตารางเปรียบเทียบประโยค Direct VS Indirect ในการทำงานจริง\n\n| Direct Question (ตรงๆ ห้วนๆ) | Indirect Question (สุภาพ มืออาชีพ) | จุดที่ห้ามผิดเด็ดขาด |\n| :--- | :--- | :--- |\n| **Where is** the API gateway? | Could you tell me where the API gateway **is**? | ❌ ห้ามใช้ *where is the API gateway* |\n| **When will** the deployment finish? | Do you know when the deployment **will finish**? | ❌ ห้ามใช้ *when will the deployment...* |\n| **Why did** the build fail? | Can you explain why the build **failed**? | ❌ ตัด *did* ทิ้ง แล้วผันกริยากลับเป็น *V.2 (failed)* |\n| **How does** this cache eviction work? | I was wondering how this cache eviction **works**. | ❌ ตัด *does* ทิ้ง แล้วผันกริยาเติม *-s (works)* |\n| **Who is** responsible for this service? | Do you happen to know who **is** responsible for this service? | กริยาย้ายไปอยู่หลังประธานเสมอ |\n\n---\n\n### 💡 สรุป Checklist ก่อนกดส่งข้อความคำถามใน Slack / Teams\n1. ถ้าต้องการความช่วยเหลือจากทีมอื่น ให้เปิดด้วย *\"Could you please let me know where/when/how...\"*\n2. ถ้าตั้งคำถามด้วย Who ในฐานะผู้ลงมือทำ อย่าเผลอใส่ *Who did make this change?* ให้ใช้ *Who made this change?*\n3. ใช้ **Why** อย่างระมัดระวัง เพราะการถาม *\"Why did you do that?\"* อาจฟังดูเป็นการตำหนิ ให้เปลี่ยนเป็น *\"What was the reasoning behind this design decision?\"* (อะไรคือเหตุผลเบื้องหลังการตัดสินใจออกแบบนี้?) ซึ่งจะฟังดูเป็นมืออาชีพและสร้างสรรค์กว่ามาก!",
      "keyPhrases": [
        {
          "en": "Could you please let me know where the deployment guide is located?",
          "th": "คุณพอจะบอกฉันได้ไหมว่าคู่มือการดีพลอยอยู่ที่ไหน?"
        },
        {
          "en": "What was the reasoning behind this design decision?",
          "th": "อะไรคือเหตุผลเบื้องหลังการตัดสินใจออกแบบสถาปัตยกรรมนี้?"
        }
      ]
    }
  ],
  "quizQuestions": [
    {
      "id": "mc-wh3-q1",
      "question": "ต้องการถามหาที่เก็บไฟล์คอนฟิกอย่างสุภาพด้วย Indirect Question: \"Could you please tell me where _____?\"",
      "options": [
        "are the Kubernetes config files stored",
        "the Kubernetes config files are stored",
        "do the Kubernetes config files store",
        "is stored the Kubernetes config files"
      ],
      "answer": 1,
      "explanation": "ถูกต้อง! ใน Indirect Questions ลำดับคำจะต้องเรียงแบบประโยคบอกเล่า คือ ประธาน (the Kubernetes config files) มาก่อนกริยา (are stored)"
    },
    {
      "id": "mc-wh3-q2",
      "question": "แปลงประโยค Direct Question: \"Why did the microservice crash?\" เป็นประโยคสุภาพ Indirect Question: \"Do you have any idea _____?\"",
      "options": [
        "why did the microservice crash",
        "why the microservice crashed",
        "why does the microservice crashed",
        "why was the microservice crash"
      ],
      "answer": 1,
      "explanation": "ถูกต้อง! ใน Indirect Question ต้องตัด did ทิ้ง แล้วผันกริยากลับเป็นประโยคบอกเล่ารูปอดีต: \"why the microservice crashed\""
    },
    {
      "id": "mc-wh3-q3",
      "question": "ต้องการถามอย่างสุภาพว่า \"การดีพลอยจะเสร็จเมื่อไหร่\": \"Do you know when _____?\"",
      "options": [
        "will the deployment finish",
        "the deployment will finish",
        "does the deployment finish will",
        "will finish the deployment"
      ],
      "answer": 1,
      "explanation": "ถูกต้อง! ประธาน (the deployment) มาก่อนกริยาช่วย (will finish)"
    },
    {
      "id": "mc-wh3-q4",
      "question": "ประโยคเกริ่นสุภาพ: \"I was wondering how this cache eviction algorithm _____.\"",
      "options": [
        "does work",
        "works",
        "is work",
        "working"
      ],
      "answer": 1,
      "explanation": "ถูกต้อง! ในประโยคบอกเล่ารูป Present Simple ประธานเอกพจน์ (this cache eviction algorithm) กริยาแท้ต้องเติม -s คือ \"works\" (ไม่ต้องใส่ does)"
    },
    {
      "id": "mc-wh3-q5",
      "question": "ในการประชุม Incident Retro หากต้องการถามเหตุผลการตัดสินใจทางเทคนิคอย่างสร้างสรรค์ ไม่ฟังดูจับผิดหรือตำหนิ ควรใช้ประโยคใด?",
      "options": [
        "Why did you make such a bad mistake?",
        "Who is to blame for this failure?",
        "What was the reasoning behind this design decision?",
        "Why couldn't you test this before merging?"
      ],
      "answer": 2,
      "explanation": "ถูกต้อง! \"What was the reasoning behind this design decision?\" เป็นประโยคที่มุ่งเน้นการทำความเข้าใจบริบทการตัดสินใจ (Blameless culture) ฟังดูเป็นมืออาชีพและสร้างสรรค์ที่สุด"
    }
  ]
}
];

if (typeof window !== "undefined") {
  window.masterclassData = masterclassData;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = masterclassData;
}
