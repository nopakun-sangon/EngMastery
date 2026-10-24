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
    }
  ]
},
// =========================================================================
// MASTERCLASS 7: BUSINESS EMAIL & SLACK FORMULAS
// =========================================================================
{
  id: "mc-business-email-slack",
  title: "Business Email & Slack Formulas: เขียนแชตและอีเมลแบบมืออาชีพ สุภาพ ชัดเจน ได้ผลลัพธ์ทันที",
  titleEn: "Professional Business Email & Slack Formulas: Templates, Etiquette & Impactful Workplace Communication",
  category: "Workplace Communication",
  categoryTh: "การสื่อสารในที่ทำงาน & อีเมลธุรกิจ",
  badge: "💼 Workplace Communication Pro",
  badgeColor: "blue",
  readTime: "15 นาที",
  author: "Executive Communication Coach & Technical Lead",
  publishedDate: "2026-10-20",
  coverEmoji: "✉️",
  summary: "ปลดล็อกทักษะการเขียนอีเมลและข้อความแชต (Slack / Teams) ในองค์กรยุคใหม่: กฎเหล็ก Subject Line ให้คนเปิดอ่านใน 3 วินาที, โครงสร้าง 4-Part Email Blueprint, ศิลปะการทวงงานอย่างสุภาพ (Gentle Follow-ups), การปฏิเสธข้อเสนอโดยไม่เสียความสัมพันธ์, และ 5 สำเร็จรูป Templates พร้อมใช้ทันที",
  tags: ["Business Email", "Slack Etiquette", "Polite English", "Workplace Communication", "Templates"],
  sections: [
    {
      heading: "1. The 4-Part Email Blueprint: โครงสร้างอีเมลทรงพลัง 4 จังหวะ",
      content: `อีเมลธุรกิจในระดับสากลต้อง **Clear (ชัดเจน), Concise (กระชับ) และ Action-oriented (มีจุดประสงค์ชัดเจน)** ไม่ควรเขียนเกริ่นยาวเยิ่นเย้อ โครงสร้างที่มืออาชีพทั่วโลกยอมรับประกอบด้วย 4 ส่วน:

1. **The Professional Salutation (คำทักทาย):**
   - *Hi Alex,* (สุภาพ เป็นกันเอง นิยมสูงสุดในบริษัทเทค)
   - *Dear Mr. Davis,* (ทางการมาก ใช้กับลูกค้าภายนอกหรือผู้บริหารระดับสูง)
   - *Good morning Team,* (ส่งรวมทั้งทีม)

2. **The Context & Purpose Hook (บอกเหตุผลทันทีในประโยคแรก):**
   - *"I am writing to update you on the database migration progress."*
   - *"Following up on our sprint retrospective yesterday..."*
   - *"Quick question regarding the API rate-limiting policy."*

3. **The Core Details & Call to Action (รายละเอียดและสิ่งที่ต้องการให้ทำ):**
   - สรุปประเด็นเป็น Bullet Points สั้น ๆ 2-3 บรรทัด
   - ระบุวันเวลาที่ต้องการคำตอบอย่างชัดเจน: *"Could you please review the attached draft by Friday, 3 PM SGT?"*

4. **The Professional Sign-off (คำลงท้าย):**
   - *Best regards,* / *Warm regards,* (สุภาพ มาตรฐานสากล)
   - *Thanks and regards,* (สไตล์วิศวกรและผู้จัดการโปรเจกต์)
   - *Cheers,* (เป็นกันเองกับเพื่อนร่วมทีมที่สนิทกัน)`,
      keyPhrases: [
        { en: "I am writing to provide an update regarding the staging deployment.", th: "ผมเขียนอีเมลนี้มาเพื่อแจ้งอัปเดตเกี่ยวกับการดีพลอยบน Staging ครับ" },
        { en: "Could you please review the proposed architecture by Wednesday EOD?", th: "รบกวนช่วยตรวจทานสถาปัตยกรรมที่เสนอภายในสิ้นวันพุธนี้ได้ไหมครับ?" }
      ]
    },
    {
      heading: "2. Slack & Teams Etiquette: กฎเหล็กการสื่อสารแบบ Asynchronous",
      content: `การแชตในแอปที่ทำงานอย่าง Slack หรือ Microsoft Teams แตกต่างจากอีเมลอย่างสิ้นเชิง เพื่อไม่ให้รบกวนสมาธิ (Deep Work) ของเพื่อนร่วมทีม จงปฏิบัติตามกฎ 3 ข้อนี้:

• **ห้ามส่งแค่คำว่า "Hi" หรือ "Hello" แล้วเงียบ (No "Hello" in Slack!):**
  - ❌ *Don't:* "Hi John" ... (รอ 10 นาทีแล้วค่อยพิมพ์ต่อ)
  - ✅ *Do:* "Hi John, quick question: do you have the latest API docs for the payment service? No rush!"

• **ใช้ Status และ Reactions ให้คุ้มค่า:**
  - กด 👀 (eyes) เพื่อบอกว่า "กำลังดูให้"
  - กด ✅ (white checkmark) เพื่อบอกว่า "จัดการเรียบร้อยแล้ว"
  - กด 🚀 เพื่อบอกว่า "ดีพลอยขึ้นระบบแล้ว"

• **การแท็กคนอย่างมีมารยาท:**
  - หลีกเลี่ยงการใช้ \`@channel\` หรือ \`@here\` พร่ำเพรื่อ เว้นแต่เป็น Production Incident ร้ายแรงระดับ P0/P1`,
      keyPhrases: [
        { en: "Hey team, heads up: we will be restarting the Redis cluster in 10 minutes.", th: "สวัสดีทีม ขอแจ้งเตือนล่วงหน้า: เราจะรีสตาร์ต Redis cluster ในอีก 10 นาทีครับ" },
        { en: "Acknowledged. Looking into the logs now.", th: "รับทราบครับ กำลังเข้าไปตรวจดูบันทึก Log เดี๋ยวนี้" }
      ]
    },
    {
      heading: "3. Master Templates: 5 แม่แบบสำเร็จรูปพร้อมใช้งานจริง",
      content: `### Template A: การทวงงานอย่างสุภาพ (Gentle Follow-Up)
**Subject:** Following up: [Project Name] Review

> Hi Sarah,
>
> I hope your week is going well.
>
> Just following up on the PR review for the authentication service. We are aiming to merge this ahead of tomorrow's release freeze.
>
> Could you please take a look when you have a moment? If you have any questions or blockers, I am happy to hop on a quick huddle.
>
> Best regards,  
> [Your Name]

---

### Template B: การปฏิเสธคำขอหรือเลื่อนกำหนดส่งอย่างมืออาชีพ (Polite Decline / Rescheduling)
**Subject:** Update on [Feature Name] Timeline

> Hi Team,
>
> Thank you for sharing the updated requirements.
>
> After assessing our team's current sprint capacity and the ongoing P1 bug fixes, we won't be able to deliver this feature by this Friday without compromising test coverage.
>
> We propose targeting the next sprint deployment (Tuesday, Oct 28). Would this timeline work for your stakeholder demo?
>
> Thanks for your understanding,  
> [Your Name]

---

### Template C: การแจ้งเตือนปัญหาเซิร์ฟเวอร์หรือ Incident Report
**Subject:** [INCIDENT UPDATE] High Latency on Payment Gateway

> Hi everyone,
>
> **Summary:** We are currently investigating an elevated error rate (5xx) on the Payment Gateway service.
> **Impact:** Approximately 4% of checkout requests are failing.
> **Current Status:** The on-call SRE team has rolled back the latest container release and traffic is stabilizing.
> **Next Steps:** A root cause analysis (RCA) meeting will be scheduled tomorrow morning.
>
> We will provide another update in 30 minutes.
>
> SRE On-call Team`,
      keyPhrases: [
        { en: "Just wanted to circle back on this before the deadline.", th: "อยากจะขอวนกลับมาติดตามเรื่องนี้ก่อนถึงกำหนดส่งครับ" },
        { en: "Due to unforeseen technical constraints, we need to push back the release date.", th: "เนื่องจากข้อจำกัดทางเทคนิคที่คาดไม่ถึง เราจำเป็นต้องเลื่อนวันเปิดตัวออกไปครับ" }
      ]
    }
  ],
  quiz: [
    {
      id: "mc-email-q1",
      question: "ในการทำงานบน Slack / Teams เหตุผลที่ไม่ควรพิมพ์ทักแค่ 'Hi' หรือ 'Hello' โดด ๆ แล้วเงียบคืออะไร?",
      options: [
        "เพราะทำให้ระบบแจ้งเตือนค้าง",
        "เพราะเป็นการบังคับให้อีกฝ่ายต้องหยุดงานมาตอบรับโดยที่ยังไม่รู้ว่ามีเรื่องอะไร (Context Switching)",
        "เพราะโปรแกรมจะบล็อกข้อความสั้น",
        "เพราะคำว่า Hi เป็นคำไม่สุภาพในทุกกรณี"
      ],
      answer: 1,
      explanation: "ถูกต้อง! ปรากฏการณ์ 'No Hello' ชี้ว่าการทักแค่ 'Hi' ทำให้ผู้รับเกิดความกังวลและเสียสมาธิ ทางที่ดีควรทักพร้อมระบุคำถามหรือประเด็นที่ต้องการให้ครบถ้วนในข้อความเดียว"
    },
    {
      id: "mc-email-q2",
      question: "หากต้องการทวงถามความคืบหน้าของงานจากเพื่อนร่วมงานหรือลูกค้าอย่างสุภาพ ไม่ฟังดูกดดัน ควรใช้วลีใด?",
      options: [
        "Why haven't you finished this yet?",
        "Do your job quickly please.",
        "Just following up to see if you had a chance to look at this.",
        "I demand an answer right now."
      ],
      answer: 2,
      explanation: "ถูกต้อง! 'Just following up to see if you had a chance to look at this' เป็นประโยคติดตามงานที่สุภาพ ให้เกียรติ และมีความเป็นมืออาชีพสูง"
    },
    {
      id: "mc-email-q3",
      question: "คำลงท้ายอีเมล (Sign-off) ข้อใดที่สุภาพและเหมาะสมที่สุดสำหรับติดต่อคู่ค้าหรือลูกค้าภายนอก?",
      options: [
        "Bye bye,",
        "Best regards,",
        "Later bro,",
        "Cya,"
      ],
      answer: 1,
      explanation: "ถูกต้อง! 'Best regards,' เป็นคำลงท้ายมาตรฐานระดับสากลที่มีทั้งความสุภาพและอบอุ่น เหมาะกับทุกระดับความสัมพันธ์ทางธุรกิจ"
    },
    {
      id: "mc-email-q4",
      question: "ในกรณีที่งานเสร็จไม่ทันกำหนดส่ง วิธีชี้แจงที่ดีที่สุดในอีเมลคือข้อใด?",
      options: [
        "เงียบไว้จนกว่าจะเสร็จแล้วค่อยส่ง",
        "โทษว่าทีมอื่นทำงานช้าทำให้เราส่งงานไม่ได้",
        "แจ้งล่วงหน้า อธิบายเหตุผลตามจริง เสนอกำหนดส่งใหม่ และสอบถามความเห็น",
        "ส่งอีเมลไปบ่นเรื่องงานหนัก"
      ],
      answer: 2,
      explanation: "ถูกต้อง! การบริหารความคาดหวัง (Managing Expectations) ด้วยการแจ้งล่วงหน้าอย่างตรงไปตรงมา พร้อมเสนอทางออกหรือกำหนดเวลาใหม่ (Alternative timeline) สะท้อนความเป็นมืออาชีพสูงสุด"
    },
    {
      id: "mc-email-q5",
      question: "คำว่า 'EOD' ที่มักพบบ่อยในอีเมลธุรกิจ (เช่น 'Please submit by Friday EOD') ย่อมาจากอะไร?",
      options: [
        "End of Discussion (จบการเจรจา)",
        "End of Day (สิ้นสุดวันทำการ โดยทั่วไปคือเวลาประมาณ 17:00 - 18:00 น.)",
        "Early on Delivery (ส่งก่อนเวลา)",
        "Error on Database (ข้อผิดพลาดบนฐานข้อมูล)"
      ],
      answer: 1,
      explanation: "ถูกต้อง! EOD ย่อมาจาก 'End of Day' หมายถึงภายในสิ้นสุดวันทำการของวันนั้น ๆ"
    }
  ]
},

// =========================================================================
// MASTERCLASS 8: TECH JOB INTERVIEW MASTERY
// =========================================================================
{
  id: "mc-tech-job-interview",
  title: "Tech Job Interview Mastery: พิชิตการสัมภาษณ์งานภาษาอังกฤษด้วย STAR Framework",
  titleEn: "Ace Your Tech Job Interview: STAR Framework, System Design Discussions & Answering Tricky Questions",
  category: "Career & Interview",
  categoryTh: "สัมภาษณ์งานสายเทค & ความก้าวหน้าอาชีพ",
  badge: "🎯 Interview Champion",
  badgeColor: "emerald",
  readTime: "20 นาที",
  author: "Global Engineering Hiring Manager & Tech Career Coach",
  publishedDate: "2026-10-20",
  coverEmoji: "🚀",
  summary: "คู่มือฉบับสมบูรณ์สำหรับวิศวกรซอฟต์แวร์, DevOps, Cloud Engineers และบุคลากรสายเทคที่ต้องการสัมภาษณ์งานภาษาอังกฤษกับบริษัทข้ามชาติ: โครงสร้าง Elevator Pitch 90 วินาที, การเล่าความสำเร็จด้วย STAR Framework เน้นตัวเลข Impact, เทคนิคตอบคำถามจุดอ่อน (Weaknesses) และการตั้งคำถามทรงพลังกลับไปยังผู้สัมภาษณ์",
  tags: ["Job Interview", "STAR Framework", "Tech Career", "Elevator Pitch", "Behavioral Interview"],
  sections: [
    {
      heading: "1. The 90-Second Elevator Pitch: ตอบ 'Tell me about yourself' ให้โดดเด่น",
      content: `คำถามแรกสุดที่ผู้สัมภาษณ์ถามเกือบ 100% คือ *"Tell me about yourself"* หรือ *"Walk me through your background"*\n\nข้อผิดพลาดที่พบบ่อยคือการเล่าประวัติย่อหน้าต่อหน้าตามเรซูเม่อย่างน่าเบื่อ สูตรสำเร็จของ 90-Second Pitch คือ **Present ➔ Past ➔ Future Impact**:

1. **Present (ปัจจุบันทำอะไรและเชี่ยวชาญด้านใด):**
   - *"Currently, I'm a Senior DevOps Engineer with over five years of experience specializing in Kubernetes, cloud architecture, and CI/CD automation on Google Cloud and AWS."*
2. **Past (ผลงานเด่นในอดีตที่จับต้องได้):**
   - *"In my previous role at XYZ Tech, I led the migration from a monolithic backend to a microservices architecture, which reduced our deployment time from two hours to under eight minutes."*
3. **Future (ทำไมถึงสนใจตำแหน่งนี้และบริษัทนี้):**
   - *"I've been following your team's innovative work in real-time fintech infrastructure, and I'm very excited about this role because it perfectly aligns with my passion for high-reliability systems."*`,
      keyPhrases: [
        { en: "I specialize in architecting scalable and highly available cloud infrastructure.", th: "ผมมีความเชี่ยวชาญด้านการออกแบบสถาปัตยกรรมคลาวด์ที่รองรับการขยายตัวและมีความพร้อมใช้งานสูงครับ" },
        { en: "I am eager to leverage my automation skills to support your team's rapid expansion.", th: "ผมกระตือรือร้นที่จะนำทักษะด้าน Automation มาช่วยผลักดันการเติบโตอย่างรวดเร็วของทีมครับ" }
      ]
    },
    {
      heading: "2. The STAR Framework: เล่าประสบการณ์เชิงพฤติกรรม (Behavioral Questions)",
      content: `เมื่อเจอคำถามประเภท *"Tell me about a time when a production incident occurred"* หรือ *"Describe a difficult conflict with a colleague"*, ผู้สัมภาษณ์ไม่ได้ต้องการฟังความคิดเห็นลอย ๆ แต่ต้องการเห็น **Evidence of Problem-Solving**:

• **S - Situation (ปูบริบทสั้น ๆ 15%):**
  - ตั้งฉากให้เห็นปัญหา: *"During a Black Friday flash sale last year, our primary database CPU spiked to 98%, causing API timeouts."*
• **T - Task (ภารกิจหรือเป้าหมายของคุณ 15%):**
  - บทบาทหน้าที่ของคุณ: *"As the on-call engineer, my objective was to stabilize the database within 15 minutes to prevent revenue loss."*
• **A - Action (การกระทำเชิงลึกของคุณ 50% - สำคัญที่สุด!):**
  - เล่าขั้นตอนที่คุณตัดสินใจ: *"I immediately analyzed the slow-query logs, identified an unindexed query hammering the replica, applied a temporary read-cache via Redis, and throttled non-critical endpoints."*
• **R - Result (ผลลัพธ์และสิ่งที่ได้เรียนรู้ 20%):**
  - วัดผลเป็นตัวเลข: *"Latency dropped back to normal within 9 minutes, with zero data loss. Following the post-mortem, I established automated query indexing checks in our CI pipeline to prevent future regressions."*`,
      keyPhrases: [
        { en: "This initiative led to a 35% decrease in infrastructure costs.", th: "โครงการนี้ส่งผลให้ค่าใช้จ่ายด้านโครงสร้างพื้นฐานลดลงถึง 35%" },
        { en: "We conducted a blameless post-mortem to identify systemic improvements.", th: "พวกเราจัดประชุม Post-mortem แบบไม่จับผิดเพื่อค้นหาแนวทางปรับปรุงเชิงระบบ" }
      ]
    },
    {
      heading: "3. Reverse Interviewing: คำถามเด็ดที่คุณควรถามกลับเพื่อสร้างความประทับใจ",
      content: `ช่วงท้ายของการสัมภาษณ์เมื่อเขาถามว่า *"Do you have any questions for us?"* การบอกว่า "No, I don't have any" คือสัญญาณอันตรายที่บ่งบอกถึงความไม่กระตือรือร้น! จงใช้โอกาสนี้แสดงวิสัยทัศน์:

• **ถามเกี่ยวกับวัฒนธรรมทางเทคนิค (Engineering Culture):**
  - *"How does the team balance shipping new features with paying down technical debt?"* (ทีมจัดสมดุลระหว่างการส่งมอบฟีเจอร์ใหม่กับการลดหนี้ทางเทคนิคอย่างไร?)
  - *"What does your deployment frequency and test automation coverage currently look like?"* (ความถี่ในการดีพลอยและความครอบคลุมของการทดสอบอัตโนมัติของทีมเป็นอย่างไรบ้าง?)
• **ถามเกี่ยวกับตัวชี้วัดความสำเร็จ:**
  - *"What would success look like for someone in this role during the first 90 days?"* (ในมุมมองของคุณ ความสำเร็จของคนในตำแหน่งนี้ในช่วง 90 วันแรกวัดจากอะไร?)
• **ถามเกี่ยวกับความท้าทายของทีม:**
  - *"What is the biggest technical bottleneck your infrastructure team is tackling right now?"* (คอขวดทางเทคนิคที่ใหญ่ที่สุดที่ทีมโครงสร้างพื้นฐานกำลังแก้อยู่ตอนนี้คืออะไร?)`,
      keyPhrases: [
        { en: "What would success look like for this position in the first ninety days?", th: "ความสำเร็จสำหรับตำแหน่งนี้ในช่วงเก้าสิบวันแรกมีหน้าตาเป็นอย่างไรครับ?" },
        { en: "How does your engineering team handle blameless incident reviews?", th: "ทีมวิศวกรรมของคุณมีแนวทางอย่างไรในการรีวิวเหตุการณ์เซิร์ฟเวอร์ล่มแบบสร้างสรรค์?" }
      ]
    }
  ],
  quiz: [
    {
      id: "mc-interview-q1",
      question: "ใน STAR Framework ตัวอักษร 'A' (Action) ควรได้รับน้ำหนักเวลาในการเล่ามากที่สุด (ประมาณ 50%) เพราะเหตุใด?",
      options: [
        "เพราะผู้สัมภาษณ์อยากฟังชื่อเครื่องมือที่คุณรู้จักทั้งหมด",
        "เพราะเป็นส่วนที่แสดงถึงกระบวนการคิด การตัดสินใจ และทักษะจริงที่คุณลงมือปฏิบัติเพื่อแก้ปัญหา",
        "เพราะเป็นส่วนที่พูดง่ายที่สุด",
        "เพราะต้องใช้เวลาในการจำบทพูด"
      ],
      answer: 1,
      explanation: "ถูกต้อง! ตัวอักษร Action แสดงให้เห็นถึงกระบวนการคิดและทักษะเฉพาะตัวของคุณว่า เมื่อเจอปัญหา คุณมีวิธีวิเคราะห์และลงมือแก้ไขอย่างไรอย่างเป็นรูปธรรม"
    },
    {
      id: "mc-interview-q2",
      question: "เมื่อผู้สัมภาษณ์ถามว่า 'What is your greatest weakness?' (จุดอ่อนที่ใหญ่ที่สุดของคุณคืออะไร) แนวทางการตอบที่ฉลาดและเป็นมืออาชีพที่สุดคือข้อใด?",
      options: [
        "ตอบว่า 'I have no weaknesses, I'm a perfectionist who works too hard.'",
        "ตอบจุดอ่อนร้ายแรงที่ขัดกับงาน เช่น 'I hate coding and I am always late for meetings.'",
        "ระบุทักษะจริงที่เคยเป็นจุดที่ต้องพัฒนา พร้อมอธิบายขั้นตอนและผลลัพธ์ที่คุณกำลังฝึกฝนเพื่อปรับปรุงให้ดีขึ้น",
        "เปลี่ยนเรื่องคุยทันทีเพื่อหลีกเลี่ยงการตอบ"
      ],
      answer: 2,
      explanation: "ถูกต้อง! การตอบจุดอ่อนอย่างมืออาชีพคือการแสดง Self-awareness (ความตระหนักรู้ในตนเอง) และ Growth Mindset โดยบอกจุดที่กำลังพัฒนาและแผนการปรับปรุงที่ทำอยู่จริง"
    },
    {
      id: "mc-interview-q3",
      question: "เมื่อผู้สัมภาษณ์ถามว่า 'Do you have any questions for us?' การตอบว่า 'No, I think you covered everything.' ส่งผลอย่างไร?",
      options: [
        "ทำให้ผู้สัมภาษณ์ประทับใจเพราะประหยัดเวลา",
        "แสดงถึงความรอบคอบและความมั่นใจ",
        "อาจทำให้ผู้สัมภาษณ์รู้สึกว่าคุณขาดความสนใจ ความอยากรู้ และความกระตือรือร้นต่อบริษัท",
        "ทำให้ได้คะแนนเต็มในส่วนคำถาม"
      ],
      answer: 2,
      explanation: "ถูกต้อง! การไม่ถามคำถามกลับมักถูกมองว่าขาดความสนใจ การถามคำถามที่มีคุณค่า (Reverse Interviewing) ช่วยตอกย้ำความเฉลียวฉลาดและความตั้งใจจริงของคุณ"
    },
    {
      id: "mc-interview-q4",
      question: "ในการเล่าผลลัพธ์ (Result) ตามสูตร STAR Framework สิ่งใดที่ช่วยสร้างความน่าเชื่อถือและความประทับใจสูงสุด?",
      options: [
        "การบอกว่าทุกคนในทีมชมเชย",
        "ตัวเลขหรือสถิติที่วัดผลได้จริง (Measurable Metrics) เช่น ลดเวลาได้กี่ % หรือลด Downtime ได้เท่าใด",
        "การพูดคำศัพท์ทางเทคนิคให้ยากที่สุด",
        "การบอกว่าตนเองทำสำเร็จคนเดียวโดยไม่พึ่งใคร"
      ],
      answer: 1,
      explanation: "ถูกต้อง! การใช้ตัวเลขที่จับต้องได้ (Measurable Impact) เช่น 'reduced deployment time by 40%' หรือ 'saved $20,000 in monthly cloud costs' จะช่วยเพิ่มความน่าเชื่อถือให้เรื่องเล่าของคุณได้อย่างมหาศาล"
    },
    {
      id: "mc-interview-q5",
      question: "หากคุณไม่เข้าใจคำถามทางเทคนิคที่ผู้สัมภาษณ์ถาม สิ่งที่ควรทำคืออะไร?",
      options: [
        "เดาคำตอบไปมั่ว ๆ เผื่อจะถูก",
        "ยิ้มแล้วพยักหน้า จากนั้นตอบเรื่องอื่นแทน",
        "ขอความชัดเจนอย่างสุภาพ เช่น 'Could you please clarify what you mean by that?' หรือสรุปทวนสิ่งที่เข้าใจก่อนตอบ",
        "บอกผู้สัมภาษณ์ว่าคำถามไม่ดีและไม่ตรงสาย"
      ],
      answer: 2,
      explanation: "ถูกต้อง! ในการทำงานจริง การขอความชัดเจน (Clarification) ก่อนเริ่มลงมือทำถือเป็นคุณสมบัติของวิศวกรที่ดีเยี่ยม ผู้สัมภาษณ์ยินดีที่จะอธิบายบริบทเพิ่มเติมให้คุณเสมอ"
    }
  ]
},
{
  id: "mc-pr-code-review",
  title: "Code Reviews & Pull Request Mastery: สื่อสารบน GitHub อย่างมืออาชีพด้วย Conventional Comments",
  titleEn: "Mastering Asynchronous Code Reviews: GitHub PRs & Conventional Comments",
  category: "Written Communication & PR Reviews",
  categoryTh: "การสื่อสารแบบเขียน & การตรวจโค้ด PR",
  badge: "GitHub & Async Review",
  badgeColor: "purple",
  readTime: "15 นาที",
  author: "Staff Software Engineer & Technical Lead",
  publishedDate: "2026-10-24",
  coverEmoji: "🔍",
  summary: "คู่มือการเขียนคอมเมนต์ตรวจโค้ด (PR Review) ให้สุภาพ เคารพเพื่อนร่วมทีม และได้มาตรฐานสากล: รู้จัก Conventional Comments (suggestion:, nit:, question:, blocking:), เทคนิค Diplomatic Phrasing ลดความขัดแย้ง, และการตอบโต้เมื่อเห็นต่างเชิงเทคนิค",
  tags: [
    "Code Review",
    "Pull Request",
    "Conventional Comments",
    "GitHub",
    "Async Communication"
  ],
  sections: [
    {
      heading: "1. กฎเหล็กสากล Conventional Comments: สื่อเจตนาให้ชัดเจนก่อนเริ่มเขียนคอมเมนต์",
      content: "ปัญหาใหญ่ที่สุดของการตรวจโค้ดแบบ Asynchronous บน GitHub/GitLab คือ **\"น้ำเสียง (Tone)\"** ของข้อความที่ผู้เขียนอาจพิมพ์สั้น ๆ แต่ผู้รับสารรู้สึกเหมือนถูกตำหนิอย่างรุนแรง องค์กรเทคโนโลยีชั้นนำจึงนำมาตรฐาน **Conventional Comments** เข้ามาใช้ โดยกำกับประเภทของคอมเมนต์ไว้ข้างหน้าเสมอ:\n\n### 🏷️ ตารางมาตรฐาน Conventional Comments Matrix:\n\n| คำนำหน้า (Label) | เจตนา (Intent) | ระดับความจำเป็น (Severity) | ตัวอย่างประโยคจริงบน GitHub |\n| :--- | :--- | :--- | :--- |\n| **suggestion:** | เสนอแนะวิธีที่ดีกว่า สะอาดกว่า หรือปลอดภัยกว่า | **Non-blocking** (ขึ้นกับดุลยพินิจของ Author) | *\"**suggestion:** What do you think about using `Array.prototype.find()` here to avoid the nested loop?\"* |\n| **nit (nitpick):** | ติเพื่อก่อเรื่องสไตล์เล็กน้อย เช่น การเว้นวรรค หรือชื่อตัวแปร | **Non-blocking** (ปล่อยผ่านได้ถ้าติดเวลา) | *\"**nit:** Could we rename `d` to `elapsedDurationMs` for better clarity? Non-blocking.\"* |\n| **question:** | ถามเพื่อทำความเข้าใจบริบท ไม่ได้ตัดสินว่าผิด | **Non-blocking** (อยากได้คำอธิบาย) | *\"**question:** Just curious, why did we choose HMAC-SHA256 over Ed25519 for this payload?\"* |\n| **issue (or blocking):** | ข้อผิดพลาดทางเทคนิค บั๊ก หรือช่องโหว่ความปลอดภัยที่ต้องแก้ก่อน Merge | **Blocking** (ต้องแก้ไขก่อนผ่าน) | *\"**issue:** This database query runs inside the loop, causing an N+1 performance issue. We need to batch it.\"* |\n| **chore:** | งานจิปาถะ เช่น อัปเดตเอกสาร หรือการทดสอบประกอบ | **Non-blocking** หรือแล้วแต่ตกลง | *\"**chore:** Don't forget to update the README with the new environment variable.\"* |\n| **praise:** | ชื่นชมการเขียนโค้ดที่ยอดเยี่ยม สร้างพลังบวก | **Positive Feedback** (ควรพิมพ์บ่อย ๆ) | *\"**praise:** Love how clean this state reducer is! Really elegant abstraction.\"* |",
      keyPhrases: [
        {
          en: "Labeling review comments with Conventional Comments eliminates ambiguity and prevents defensive reactions.",
          th: "การติดป้ายกำกับคอมเมนต์รีวิวตามหลัก Conventional Comments ช่วยขจัดความคลุมเครือและป้องกันไม่ให้ผู้เขียนโค้ดเกิดความรู้สึกตั้งกำแพง"
        },
        {
          en: "Explicitly stating 'nit:' or 'non-blocking' grants the author autonomy while keeping the PR review velocity high.",
          th: "การระบุอย่างชัดเจนว่า 'nit:' หรือ 'non-blocking' ช่วยให้อิสระแก่ผู้เขียนโค้ดในขณะที่ยังรักษาความเร็วในการส่งมอบ PR ไว้ได้"
        }
      ]
    },
    {
      heading: "2. ศิลปะการใช้ Diplomatic Hedging & Positive Phrasing: เปลี่ยนคำตำหนิให้เป็นคำถามชวนคิด",
      content: "แทนที่จะใช้คำสั่งโดยตรง (Imperative Commands) เช่น *\"Change this\"* หรือ *\"This is wrong\"* ซึ่งสร้างบรรยากาศตึงเครียด ให้เปลี่ยนเป็นการใช้คำถามปลายเปิดหรือการตั้งข้อสังเกตอย่างนุ่มนวล:\n\n### ⚖️ ตารางเทียบการสื่อสารแบบห้วน ๆ vs มืออาชีพระดับสากล:\n\n| ข้อความแบบห้วน / กล่าวโทษ ❌ | ข้อความแบบมืออาชีพ สุภาพ ชวนคิด ✅ | ผลลัพธ์ทางจิตวิทยา |\n| :--- | :--- | :--- |\n| *\"Why did you write it like this? It is so slow.\"* | *\"**question:** Could you help me understand the reasoning behind this logic? I'm wondering if we might hit latency issues with large payloads.\"* | ผู้เขียนเปิดใจเล่าเหตุผลและพร้อมช่วยหาทางปรับปรุง |\n| *\"This function is duplicated. Delete it.\"* | *\"**suggestion:** It looks like we already have an identical helper in `src/utils/formatters.ts`. What do you think about reusing it here?\"* | ชี้แนะแนวทางโดยไม่ทำให้รู้สึกเสียหน้า |\n| *\"You forgot to handle the error here.\"* | *\"**issue:** What happens if the network call times out? Should we add a `try/catch` block or fallback handler?\"* | มุ่งเน้นไปที่ผลลัพธ์ของระบบ ไม่ใช่ความผิดของบุคคล |\n| *\"Rename this variable, it's terrible.\"* | *\"**nit:** Would you mind renaming `val` to `validatedToken`? It would make the control flow easier to scan.\"* | สุภาพ และมีเหตุผลรองรับชัดเจน |",
      keyPhrases: [
        {
          en: "What do you think about extracting this logic into a custom hook to improve testability?",
          th: "คุณคิดเห็นอย่างไรกับการแยกตรรกะนี้ออกเป็น Custom Hook เพื่อให้เขียนยูนิตเทสต์ได้ง่ายขึ้นครับ?"
        },
        {
          en: "I noticed a potential race condition when two requests land concurrently. How do you feel about adding a lock?",
          th: "ผมสังเกตเห็นโอกาสเกิด Race Condition เมื่อมีสองรีเควสต์เข้ามาพร้อมกัน คุณมองว่าเราควรเพิ่มตัวล็อกตรงนี้ไหมครับ?"
        }
      ]
    },
    {
      heading: "3. การเขียน PR Description ที่ดี & การตอบรับ Feedback เมื่อเห็นต่างเชิงเทคนิค",
      content: "เมื่อเปิด PR ควรอำนวยความสะดวกให้ผู้ตรวจ โดยใช้ Template 4 ส่วน: **Why** (ทำไมถึงทำ), **What** (ทำอะไรไปบ้าง), **How to Test** (วิธีทดสอบพร้อมคำสั่ง), และ **Screenshots / Benchmarks** (หลักฐานผลลัพธ์)\n\n### 💬 วิธีตอบกลับเมื่อมีความเห็นต่างเชิงสถาปัตยกรรม (Respectful Disagreement):\n\n| กลยุทธ์การตอบ | สำนวนสากลที่แนะนำ | บริบทการใช้งาน |\n| :--- | :--- | :--- |\n| **รับฟังและให้ข้อมูลบริบทเพิ่ม** | *\"Good point! The reason I opted for this approach is that...\"* | เมื่อเรามีข้อจำกัดทางเทคนิคที่ Reviewer อาจยังไม่ทราบ |\n| **เสนอทางเลือกประนีประนอม** | *\"I see your concern regarding memory. How about we keep this implementation for now, and I'll create a follow-up ticket to profile it under load?\"* | เมื่อไม่อยากให้ PR บวม หรือกลายเป็น Scope Creep |\n| **ยอมรับและขอบคุณ** | *\"Great catch! I completely overlooked that edge case. Pushed a fix in commit `a1b2c3d`.\"* | เมื่ออีกฝ่ายพบจุดผิดพลาดจริง แสดงความใจกว้าง |",
      keyPhrases: [
        {
          en: "Great catch! I completely overlooked that edge case. I have pushed a fix in commit 7a3f4e.",
          th: "ตรวจพบได้ยอดเยี่ยมมากครับ! ผมมองข้ามกรณีนั้นไปสนิทเลย ตอนนี้ผมได้แก้และดันคอมมิต 7a3f4e ขึ้นไปเรียบร้อยแล้วครับ"
        },
        {
          en: "Given the upcoming release deadline, could we tackle that refactor in a dedicated follow-up ticket?",
          th: "เนื่องจากใกล้กำหนดการปล่อยของรอบนี้แล้ว เราพอจะแยกงานรีแฟกเตอร์ตรงนั้นไปทำเป็นการ์ดเฉพาะในรอบถัดไปได้ไหมครับ?"
        }
      ]
    }
  ],
  quiz: [
    {
      id: "mc-pr-q1",
      question: "ตามมาตรฐาน Conventional Comments ป้ายกำกับ 'nit:' (nitpick) มีความหมายและระดับความเร่งด่วนอย่างไร?",
      options: [
        "เป็นบั๊กความปลอดภัยร้ายแรงที่ต้องแก้ทันที",
        "เป็นข้อเสนอแนะเรื่องเล็กน้อย (เช่น สไตล์การเว้นวรรค หรือชื่อตัวแปร) ซึ่งเป็นแบบ Non-blocking ไม่จำเป็นต้องบล็อกการ Merge หากติดเวลา",
        "เป็นคำชมเชยโค้ดที่เขียนได้ดี",
        "เป็นคำถามขอให้ Reviewer โค้ดใหม่ทั้งหมด"
      ],
      answer: 1,
      explanation: "ถูกต้อง! 'nit:' (ย่อมาจาก nitpick) หมายถึงข้อคิดเห็นเล็ก ๆ น้อย ๆ ที่ไม่ส่งผลต่อฟังก์ชันการทำงานของระบบ ผู้เขียนโค้ดมีสิทธิ์เลือกว่าจะแก้หรือไม่แก้ก็ได้โดยไม่กระทบต่อการอนุมัติ PR"
    },
    {
      id: "mc-pr-q2",
      question: "เมื่อตรวจพบช่องโหว่ความปลอดภัยหรือบั๊กร้ายแรงใน PR ของเพื่อนร่วมทีม คอมเมนต์ในข้อใดสุภาพ เป็นมืออาชีพ และเน้นที่ระบบมากที่สุด?",
      options: [
        "You wrote insecure code again. You don't know how to sanitize SQL inputs.",
        "issue: User input from the query parameter is passed directly into the query, which creates a SQL injection vulnerability. We should use parameterized queries here.",
        "Change this immediately or I will reject your PR.",
        "Why is your code always so bad?"
      ],
      answer: 1,
      explanation: "ถูกต้อง! การใช้ป้าย 'issue:' ระบุจุดบกพร่องทางเทคนิคที่ชัดเจน อธิบายผลกระทบ (SQL injection) และเสนอทางแก้ที่ถูกต้อง (parameterized queries) โดยไม่กล่าวโทษตัวบุคคล"
    },
    {
      id: "mc-pr-q3",
      question: "หาก Reviewer เสนอให้คุณรีแฟกเตอร์สถาปัตยกรรมครั้งใหญ่ซึ่งอยู่นอกเหนือขอบเขตงานของการ์ดนี้ และใกล้กำหนดเวลาส่งมอบ การตอบกลับข้อใดมีความเป็นมืออาชีพสูงสุด?",
      options: [
        "That's stupid, I'm not doing that.",
        "I understand and agree that this refactor would be beneficial long-term. Given our current release timeline, would it make sense to create a follow-up technical debt ticket so we don't hold up this bug fix?",
        "Ignore the comment completely and merge anyway.",
        "Tell the manager that the reviewer is bullying you."
      ],
      answer: 1,
      explanation: "ถูกต้อง! นี่คือศิลปะการทำงานร่วมกัน: ยอมรับคุณค่าของข้อเสนอ (acknowledge value), ชี้แจงข้อจำกัดเรื่องเวลา (release timeline), และเสนอทางออกที่เป็นรูปธรรม (create a follow-up tech debt ticket)"
    },
    {
      id: "mc-pr-q4",
      question: "การใช้เทคนิค 'Diplomatic Hedging' ในการตรวจโค้ดให้ประโยชน์หลักในเรื่องใด?",
      options: [
        "ทำให้ผู้เขียนโค้ดรู้สึกกลัวและไม่กล้าทำผิดอีก",
        "ลดการเกิดความรู้สึกตั้งกำแพง (Defensive reaction) ส่งเสริมวัฒนธรรมการแลกเปลี่ยนเรียนรู้ และมุ่งเน้นการแก้ปัญหาที่โค้ด",
        "ช่วยให้เราไม่ต้องตรวจโค้ดให้ละเอียด",
        "ทำให้ PR ผ่านโดยไม่ต้องเขียนยูนิตเทสต์"
      ],
      answer: 1,
      explanation: "ถูกต้อง! ภาษาที่นุ่มนวลและเปิดกว้างจะช่วยป้องกันความขัดแย้งส่วนบุคคลในทีม ทำให้ทุกคนโฟกัสที่การปรับปรุงคุณภาพซอฟต์แวร์ได้อย่างมีความสุข"
    },
    {
      id: "mc-pr-q5",
      question: "ข้อใดคือองค์ประกอบสำคัญของ Pull Request Description ที่ยอดเยี่ยมบน GitHub?",
      options: [
        "เขียนแค่ 'fixes bug' หรือปล่อยว่างไว้",
        "อธิบายบริบทว่าทำไมถึงทำ (Why), สรุปสิ่งที่มีการเปลี่ยนแปลง (What), วิธีการทดสอบพร้อมผลลัพธ์ (How to test & Benchmarks)",
        "ใส่เฉพาะรูปภาพ Meme ตลก ๆ",
        "คัดลอกประวัติการแชตทั้งหมดใน Slack มาแปะ"
      ],
      answer: 1,
      explanation: "ถูกต้อง! PR Description ที่ดีจะช่วยลดภาระทางความคิด (Cognitive load) ของ Reviewer ทำให้การตรวจโค้ดเป็นไปอย่างรวดเร็วและตรงจุด"
    }
  ]
},
{
  id: "mc-incident-slack-rca",
  title: "Production Incident Communication & Blameless RCA: รายงานเหตุด่วนบน Slack และเขียน Post-Mortem ระดับสากล",
  titleEn: "Production Incident Response & Blameless RCA Writing",
  category: "Incident Management & SRE",
  categoryTh: "การจัดการเหตุการณ์วิกฤต & SRE",
  badge: "SRE & On-Call",
  badgeColor: "rose",
  readTime: "16 นาที",
  author: "Site Reliability Director & Incident Commander",
  publishedDate: "2026-10-24",
  coverEmoji: "🚨",
  summary: "คัมภีร์สื่อสารยามระบบโปรดักชันล่ม (P0/P1 Outages): วิธีอัปเดตสเตตัสบน Slack Incident Channel ให้ชัดเจน (Investigating, Identified, Monitoring, Resolved), เทคนิคเขียน Blameless Post-Mortem / RCA, และการสื่อสารกับผู้บริหารและลูกค้าภายนอก",
  tags: [
    "Incident Management",
    "SRE",
    "Post-Mortem",
    "RCA",
    "Slack",
    "Blameless Culture"
  ],
  sections: [
    {
      heading: "1. โครงสร้างการสื่อสารบน Slack ยามวิกฤต: 4 สถานะมาตรฐานสากล (Incident Lifecycle)",
      content: "เมื่อระบบเกิดเหตุขัดข้องรุนแรง (P0/P1 Outage) สิ่งที่แย่ที่สุดไม่ใช่ตัวบั๊ก แต่คือ **\"ความเงียบและความตื่นตระหนก\"** ในช่อง Slack ทีม SRE และ On-call จะต้องใช้รูปแบบสถานะ 4 ขั้นตอนที่เป็นมาตรฐานสากล:\n\n### ⏱️ ตาราง 4 สถานะอัปเดตเหตุด่วน (Incident Status Cadence):\n\n| สถานะ (Status) | จังหวะเวลา (Frequency) | เนื้อหาสำคัญที่ต้องระบุ | แม่แบบข้อความภาษาอังกฤษสำหรับก๊อปปี้ไปใช้ |\n| :--- | :--- | :--- | :--- |\n| **INVESTIGATING** | อัปเดตทุก 10-15 นาที | ระบุขอบเขตความเสียหาย (Impact), ทีมที่กำลังตรวจสอบ, และช่องทางติดตาม | *\"🚨 **[INCIDENT P0] Investigating**<br>• **Impact:** Checkout API returning HTTP 500 (~35% of users)<br>• **Current Action:** SRE team inspecting database read replicas and connection pool metrics.<br>• **Incident Commander:** @sarah<br>• **Next Update:** In 15 minutes (14:30 UTC)\"* |\n| **IDENTIFIED** | อัปเดตทันทีที่รู้สาเหตุ | ระบุ Root Cause ชัดเจน และแผนการแก้ไข (Mitigation Plan) | *\"🔍 **[INCIDENT P0] Cause Identified**<br>• **Root Cause:** Memory leak in pod version `v2.4.1` causing OOM kills.<br>• **Mitigation:** Initiating immediate rollback to stable release `v2.4.0`.<br>• **ETA to Recover:** Approximately 10 minutes.\"* |\n| **MONITORING** | อัปเดตระหว่างดูอาการ | ระบุว่า Rollback/Patch สำเร็จแล้ว และกำลังเฝ้าดูสถิติตัวชี้วัด | *\"🟡 **[INCIDENT P0] Monitoring**<br>• **Status:** Rollback to `v2.4.0` completed successfully across all nodes.<br>• **Metrics:** Error rates have dropped from 35% back to baseline 0.02%.<br>• **Next Step:** Observing traffic for 30 minutes before declaring resolution.\"* |\n| **RESOLVED** | อัปเดตเมื่อระบบปกติ 100% | ประกาศจบเหตุการณ์อย่างเป็นทางการ และนัดหมายวันเวลาส่งเอกสาร RCA | *\"🟢 **[INCIDENT P0] Resolved**<br>• **Resolution:** All services fully healthy and responding within SLA.<br>• **Total Downtime:** 28 minutes.<br>• **Follow-up:** Blameless Post-Mortem will be published in `#eng-postmortems` by tomorrow 12:00 UTC.\"* |",
      keyPhrases: [
        {
          en: "Clear, time-stamped incident updates prevent stakeholder panic and allow the response team to focus on debugging.",
          th: "การอัปเดตสถานะเหตุการณ์อย่างชัดเจนพร้อมเวลาที่แน่นอนช่วยคลายความตื่นตระหนกของผู้มีส่วนได้ส่วนเสีย และเปิดทางให้ทีมแก้ไขมุ่งมั่นกับการดีบักได้อย่างเต็มที่"
        },
        {
          en: "Always commit to a 'Next Update' time, even if you do not have new technical findings yet.",
          th: "จงระบุเวลา 'Next Update' ครั้งถัดไปเสมอ แม้ว่าคุณจะยังไม่มีความคืบหน้าทางเทคนิคใหม่ ๆ ก็ตาม"
        }
      ]
    },
    {
      heading: "2. ศิลปะการเขียน Blameless Post-Mortem / RCA: มุ่งเน้นความผิดพลาดของระบบ ไม่ใช่ตัวบุคคล",
      content: "วัฒนธรรมวิศวกรรมระดับโลก (Google, Netflix, AWS) ยึดถือหลักการ **Blameless Culture**: ข้อผิดพลาดของมนุษย์ (Human error) เป็นเพียง **อาการ (Symptom)** แต่ไม่ใช่ **สาเหตุที่แท้จริง (Root cause)** ระบบที่ยอดเยี่ยมจะต้องมี Safety Net ที่ป้องกันไม่ให้ความผิดพลาดของคนหนึ่งคนล้มทั้งระบบได้:\n\n### 🛡️ ตารางเปรียบเทียบสำนวนใน Post-Mortem: กล่าวโทษบุคคล vs วิเคราะห์ระบบ:\n\n| สำนวนแบบกล่าวโทษบุคคล (Blame-centric) ❌ | สำนวนเชิงวิศวกรรมระบบ (Blameless Systemic) ✅ |\n| :--- | :--- |\n| *\"John deployed the wrong configuration file by mistake.\"* | *\"The deployment automation lacked schema validation, allowing an invalid configuration key to propagate to production.\"* |\n| *\"The developer didn't test their code properly before pushing.\"* | *\"Our CI pipeline lacked automated integration tests for this payment gateway boundary case.\"* |\n| *\"The on-call engineer was sleeping and responded late.\"* | *\"PagerDuty escalation policies failed to trigger secondary SMS fallback alerts when primary push notifications went unacknowledged.\"* |\n\n### 📋 โครงสร้าง 5 องค์ประกอบของเอกสาร RCA (Post-Mortem Template):\n1. **Executive Summary:** สรุป 3 บรรทัด (อะไรพัง, กระทบใคร, แก้ไขอย่างไร)\n2. **Impact & Metrics:** ตัวเลขจริง (Downtime 42 mins, 12,000 requests dropped, SLA dropped to 99.1%)\n3. **Timeline (UTC):** ลำดับเหตุการณ์นาทีต่อนาทีตั้งแต่ Alert แรกจนถึง Resolve\n4. **Root Cause Analysis (5 Whys):** ขุดลึกลงไปถึงจุดบกพร่องของกลไกและกระบวนการ\n5. **Action Items (SMART):** ตารางมาตรการป้องกันไม่ให้เกิดซ้ำ ระบุผู้รับผิดชอบและวันส่งมอบชัดเจน",
      keyPhrases: [
        {
          en: "A blameless post-mortem assumes that everyone acted with good intentions based on the information they had.",
          th: "การทบทวนหลังเกิดเหตุแบบไม่กล่าวโทษบุคคลตั้งอยู่บนสมมติฐานว่าทุกคนทำหน้าที่ด้วยเจตนาที่ดีที่สุดตามข้อมูลที่มีในขณะนั้น"
        },
        {
          en: "Human error is the starting point of the investigation, never the conclusion.",
          th: "ความผิดพลาดของมนุษย์เป็นเพียงจุดเริ่มต้นของการสืบค้น แต่ไม่ใช่บทสรุปของสาเหตุที่แท้จริง"
        }
      ]
    },
    {
      heading: "3. แม่แบบการสื่อสารกับผู้บริหาร (C-Level) และแถลงการณ์ขออภัยลูกค้าภายนอก",
      content: "เมื่อต้องรายงานผู้บริหารระดับสูงหรือส่งอีเมลแจ้งลูกค้า B2B ห้ามใช้ศัพท์เทคนิคเชิงลึกที่เข้าใจยาก ให้มุ่งเน้นที่ **Impact, Immediate Fix, และ Preventative Measures**:\n\n### 🏢 แม่แบบรายงานผู้บริหาร (Executive Briefing Template):\n```markdown\n**Subject: Executive Summary: Incident INC-8042 (Payment Gateway Outage)**\n\n• **Summary:** On Oct 24 between 14:02 and 14:30 UTC, our payment checkout service experienced an outage affecting 35% of transactions.\n• **Business Impact:** An estimated $4,200 in delayed checkouts; zero customer data was compromised.\n• **Current State:** 100% restored. All pending payment webhooks have been safely reconciled.\n• **Prevention:** We are adding automated canary smoke-testing and rate-limit guardrails to prevent recurrence by end of week.\n```\n\n### 🌍 แถลงการณ์ขออภัยลูกค้าภายนอก (Customer-Facing Public Notice):\n*\"We sincerely apologize for the service disruption experienced earlier today. Our engineering team identified and mitigated the issue within 28 minutes. We hold ourselves to the highest standards of availability and are already implementing additional safeguards to ensure this does not happen again.\"*",
      keyPhrases: [
        {
          en: "Zero customer data was compromised, and all pending transactions have been reconciled.",
          th: "ไม่มีข้อมูลของลูกค้าได้รับผลกระทบหรือรั่วไหล และรายการธุรกรรมที่ค้างอยู่ทั้งหมดได้รับการกระทบยอดอย่างปลอดภัยแล้ว"
        },
        {
          en: "We sincerely apologize for the disruption and are implementing safeguards to prevent recurrence.",
          th: "เราขออภัยอย่างจริงใจสำหรับความไม่สะดวกที่เกิดขึ้น และกำลังนำมาตรการป้องกันมาใช้เพื่อไม่ให้เกิดเหตุซ้ำรอย"
        }
      ]
    }
  ],
  quiz: [
    {
      id: "mc-inc-q1",
      question: "ในระหว่างที่ระบบเกิดเหตุการณ์ P0 Outage ขั้นตอนใดของการสื่อสารบน Slack สำคัญที่สุดต่อการสร้างความมั่นใจให้ทีมบริหาร?",
      options: [
        "ปิดช่องทางแชตเพื่อไม่ให้ใครรบกวน",
        "ส่งอัปเดตสม่ำเสมอตามจังหวะเวลา (Cadence) พร้อมระบุเวลาอัปเดตครั้งถัดไป (Next Update) เสมอ แม้ยังหาสาเหตุไม่พบ",
        "รีบพิมพ์ขอโทษและกล่าวโทษผู้ที่เพิ่งคอมมิตโค้ดขึ้นไป",
        "รอจนกว่าจะแก้ปัญหาเสร็จ 100% แล้วค่อยรายงานทีเดียว"
      ],
      answer: 1,
      explanation: "ถูกต้อง! ความสม่ำเสมอในการสื่อสาร (Predictable Cadence) และการบอกเวลา Next Update เป็นหัวใจสำคัญของ Incident Commander ในการรักษาความสงบและลดความตื่นตระหนก"
    },
    {
      id: "mc-inc-q2",
      question: "หลักการสำคัญที่สุดของ 'Blameless Post-Mortem' (การวิเคราะห์เหตุการณ์หลังระบบล่มแบบไม่กล่าวโทษ) คือข้อใด?",
      options: [
        "การลงโทษวิศวกรที่ทำให้เกิดความผิดพลาดอย่างเปิดเผย",
        "การมองว่าความผิดพลาดของมนุษย์เกิดจากช่องโหว่ของกระบวนการหรือเครื่องมือในระบบ และมุ่งเน้นการสร้างแนวทางป้องกันเชิงระบบไม่ให้เกิดขึ้นซ้ำ",
        "การปกปิดความจริงเพื่อไม่ให้บริษัทเสียชื่อเสียง",
        "การห้ามเขียนเอกสารสรุปเหตุการณ์ใด ๆ ทั้งสิ้น"
      ],
      answer: 1,
      explanation: "ถูกต้อง! Blameless Post-Mortem มองว่าระบบที่ดีต้องมีเครื่องมือ ป้องกัน (Safety Net) หากคนทำงานผิดพลาด แปลว่าระบบยังไม่มีการตรวจสอบที่ดีพอ การแก้ที่ระบบจึงเป็นการแก้ปัญหาที่ยั่งยืนที่สุด"
    },
    {
      id: "mc-inc-q3",
      question: "ประโยคสรุปเหตุการณ์ในข้อใดเขียนได้ถูกต้องตามวัฒนธรรม Blameless Culture มากที่สุด?",
      options: [
        "Bob forgot to run migrations, causing production to crash.",
        "The automated CI/CD pipeline lacked a schema-migration pre-flight check, which allowed the application to start against an unmigrated schema.",
        "The QA engineer was careless and missed the bug.",
        "The outage was entirely caused by the junior developer's lack of experience."
      ],
      answer: 1,
      explanation: "ถูกต้อง! ประโยคนี้มุ่งวิเคราะห์ที่ตัวระบบไปป์ไลน์ (The pipeline lacked a pre-flight check) ซึ่งสะท้อนมาตรฐานการเขียนเชิงวิศวกรรมระดับสูง ไม่พาดพิงบุคคล"
    },
    {
      id: "mc-inc-q4",
      question: "เมื่อเขียนมาตรการป้องกันในส่วน Action Items ของเอกสาร RCA คุณสมบัติใดที่จำเป็นต้องมีเสมอ?",
      options: [
        "ระบุคำสัญญาปากเปล่าว่าทุกคนจะระวังตัวมากขึ้น",
        "ระบุผู้รับผิดชอบที่แน่นอน (Owner), สิ่งที่ต้องทำชัดเจน (Deliverable), และกำหนดส่งที่วัดผลได้ (Due Date)",
        "เขียนให้คลุมเครือเพื่อไม่ให้ใครต้องรับภาระ",
        "มอบหมายให้ทีมอื่นทำทั้งหมด"
      ],
      answer: 1,
      explanation: "ถูกต้อง! Action Items ที่มีประสิทธิภาพต้องเป็น SMART (Specific, Measurable, Achievable, Relevant, Time-bound) และมีเจ้าภาพรับผิดชอบชัดเจน"
    },
    {
      id: "mc-inc-q5",
      question: "ในการสรุปผลกระทบต่อผู้บริหารระดับสูง (C-Level Executive Briefing) สิ่งใดที่ควรหลีกเลี่ยง?",
      options: [
        "การบอกตัวเลขเวลา Downtime และผลกระทบต่อธุรกิจ",
        "การบรรยายรายละเอียดทางเทคนิคเชิงลึกที่เยิ่นเย้อและศัพท์เฉพาะทางโดยไม่มีบทสรุปทางธุรกิจ",
        "การชี้แจงมาตรการป้องกันในอนาคต",
        "การยืนยันความปลอดภัยของข้อมูลลูกค้า"
      ],
      answer: 1,
      explanation: "ถูกต้อง! ผู้บริหารต้องการทราบภาพรวมผลกระทบเชิงธุรกิจ (Business Impact) ความปลอดภัยของข้อมูล และแผนป้องกันระยะยาว ไม่ต้องการอ่าน Log หรือ Stack trace ที่ยาวเหยียด"
    }
  ]
}
,
  // =========================================================================
  // MASTERCLASS 11: TECH PRONUNCIATION PITFALLS
  // =========================================================================
  {
  "id": "mc-tech-pronunciation-pitfalls",
  "title": "Tech Pronunciation Pitfalls: 25+ คำศัพท์เทคที่คนไทยมักออกเสียงผิด พร้อม IPA และวิธีออกเสียงให้ฝรั่งเข้าใจทันที",
  "titleEn": "Tech Pronunciation Pitfalls: 25+ Most Mispronounced Tech Terms with IPA and Audio Guidelines",
  "category": "Pronunciation Mastery",
  "categoryTh": "การออกเสียงศัพท์เทคโนโลยี",
  "badge": "🗣️ Tech Pronunciation Lab",
  "badgeColor": "rose",
  "readTime": "16 นาที",
  "author": "Senior Software Engineer & English Phonetics Specialist",
  "publishedDate": "2026-10-25",
  "coverEmoji": "🎙️",
  "summary": "รวม 26 คำศัพท์ไอทีและวิศวกรรมซอฟต์แวร์ที่โปรแกรมเมอร์ไทยมักอ่านออกเสียงผิดเพี้ยนตามตัวสะกด เช่น cache, parameter, archive, schema, queue, null, variable, suite, tuple, sudo, regex ฯลฯ มาเรียนรู้วิธีอ่านตามสัทศาสตร์สากล (IPA) จุดเน้นพยางค์ (Stress) และประโยคใช้งานจริงในที่ทำงาน เพื่อให้ฝรั่งเข้าใจทันทีตั้งแต่คำแรกโดยไม่ต้องถามซ้ำ",
  "tags": [
    "Pronunciation",
    "Tech Vocabulary",
    "IPA",
    "Speaking Confidence",
    "Daily Standup"
  ],
  "sections": [
    {
      "heading": "1. กลุ่มคำศัพท์โค้ดดิ้งและสถาปัตยกรรม (Code, Data Structures & Architecture)",
      "content": "คำศัพท์ทางเทคนิคด้านโค้ดดิ้งและโครงสร้างข้อมูลหลายคำ มีรากศัพท์มาจากภาษาละตินหรือประดิษฐ์ขึ้นใหม่ หากเราออกเสียงแบบถอดรูปตัวสะกดตรงๆ แบบภาษาไทย ฝรั่งหรือเพื่อนร่วมทีมต่างชาติอาจฟังไม่เข้าใจจนเกิดความเข้าใจผิดได้\n\n### 📊 ตารางสัทศาสตร์กลุ่ม Code & Architecture\n\n| คำศัพท์ (Term) | สัทศาสตร์สากล (IPA) | คำอ่านไทย & จุดเน้นเสียง | ข้อผิดพลาดยอดฮิต (❌) | ตัวอย่างประโยคจริงในงาน (Real-world Example) |\n|---|---|---|---|---|\n| **parameter** | /pəˈræm.ɪ.tər/ | เพอะ-**แรม**-มิ-เถ่อะ *(เน้นพยางค์ 2)* | ❌ พารา-มิเตอร์ | *\"We need to pass an optional config **parameter** into the function.\"* |\n| **variable** | /ˈveə.ri.ə.bəl/ | **แว๊**-เรีย-เบิล *(เน้นพยางค์แรก)* | ❌ วา-เรีย-เบิล | *\"The environment **variable** is not defined in the container.\"* |\n| **schema** | /ˈskiː.mə/ | **สกี**-ม่า *(ch ออกเสียง /k/)* | ❌ เช-ม่า, สเก-ม่า | *\"Let's review the new database **schema** before running migrations.\"* |\n| **null** | /nʌl/ | **นัล** *(สระอะ กึ่งไม้หันอากาศ)* | ❌ นูล, นิว | *\"The API returned a **null** value for the user profile.\"* |\n| **queue** | /kjuː/ | **คิว** *(พยางค์เดียว เหมือน queue แถว)* | ❌ คิว-อี้, เคว | *\"The background worker consumes messages from the SQS **queue**.\"* |\n| **boolean** | /ˈbuː.li.ən/ | **บู**-ลี-เอิน *(เน้น บู)* | ❌ โบ-ลีน, บัว-ลีน | *\"Set the flag to a **boolean** true to enable debug mode.\"* |\n| **tuple** | /ˈtʌp.əl/ หรือ /ˈtuː.pəl/ | **ทัป**-เพิล หรือ **ทู**-เพิล | ❌ ทู-เปิ้ล, ตุ๊บ-เปิ้ล | *\"In Python, a **tuple** is an immutable sequence of elements.\"* |\n| **char** | /tʃɑːr/ หรือ /kær/ | **ชาร์** หรือ **แคร์** | ❌ ชา, ชาร์-แรก-เตอร์ | *\"Store the single currency symbol as a 3-character **char** field.\"* |\n| **NaN** | /næn/ | **แนน** *(อ่านเป็นคำ ไม่สะกดทีละตัว)* | ❌ เอ็น-เอ-เอ็น | *\"The division by zero resulted in a **NaN** floating-point value.\"* |\n\n> 💡 **กฎสำคัญเรื่อง Word Stress:** ในภาษาอังกฤษ หากเราเน้นพยางค์ผิดที่ เช่น คำว่า `parameter` ถ้าไปเน้นพยางค์แรกเป็น *\"พารา-มิเตอร์\"* ฝรั่งอาจประมวลผลไม่ออกทันที แต่ถ้าเน้นพยางค์สองเป็น *\"pə-RAM-i-ter\"* เขาจะเก็ทในเสี้ยววินาที!",
      "keyPhrases": [
        {
          "en": "We need to pass an optional config parameter into the function.",
          "th": "เราจำเป็นต้องส่งค่าพารามิเตอร์คอนฟิกที่เป็นทางเลือกเข้าไปในฟังก์ชัน"
        },
        {
          "en": "The API returned a null value because the record was not found.",
          "th": "API ส่งค่ากลับมาเป็น null เพราะหาเรคคอร์ดดังกล่าวไม่พบ"
        },
        {
          "en": "Messages are piling up in the dead-letter queue.",
          "th": "ข้อความกำลังกองสะสมอยู่ในคิว Dead-letter"
        }
      ]
    },
    {
      "heading": "2. กลุ่มคำศัพท์ระบบไฟล์ ฮาร์ดแวร์ และโครงสร้างพื้นฐาน (OS, Network & Storage)",
      "content": "กลุ่มคำศัพท์ System, Linux และ Infrastructure มักมีคำที่คนไทยอ่านติดปากจากการสะกดผิด หรืออ่านแบบสำเนียงฝรั่งเศส/โบราณ มาดูคำที่ถูกต้องกัน:\n\n### 📊 ตารางสัทศาสตร์กลุ่ม OS & Infrastructure\n\n| คำศัพท์ (Term) | สัทศาสตร์สากล (IPA) | คำอ่านไทย & จุดเน้นเสียง | ข้อผิดพลาดยอดฮิต (❌) | ตัวอย่างประโยคจริงในงาน (Real-world Example) |\n|---|---|---|---|---|\n| **cache** | /kæʃ/ | **แคช** *(ออกเสียงเหมือน cash เงินสด)* | ❌ แค-เช่, คา-เช่ | *\"Clear your browser **cache** and restart the dev server.\"* |\n| **archive** | /ˈɑːr.kaɪv/ | **อาร์**-ไคฟ์ *(ch ออกเสียง /k/)* | ❌ อา-ชีพ, อา-ชีฟ | *\"We should compress and **archive** old audit logs to S3 Glacier.\"* |\n| **hierarchy** | /ˈhaɪə.rɑːr.ki/ | **ไฮ**-เออ-ราร์-คี *(เน้น ไฮ)* | ❌ เฮีย-รา-ชี่, ไฮ-ราก-ชี่ | *\"The organizational chart defines the permission **hierarchy**.\"* |\n| **sudo** | /ˈsuː.duː/ | **ซู**-ดู *(Superuser Do)* | ❌ ซู-โด, ซู-โด้ | *\"Run the installation script with **sudo** privileges.\"* |\n| **chown** | /tʃeɪndʒ ˈoʊn.ər/ หรือ /tʃaʊn/ | **เชาวน์** *(ย่อจาก change owner)* | ❌ โชว์น, ชอน | *\"Run **chown** to change directory ownership to www-data.\"* |\n| **daemon** | /ˈdiː.mən/ | **ดี**-เมิน *(เหมือน demon)* | ❌ แด-มอน, ดา-เอ-มอน | *\"The Docker **daemon** is currently not running on this host.\"* |\n| **nginx** | /ˌen.dʒɪnˈeks/ | เอนจิน-**เอกซ์** | ❌ เอ็น-กิงซ์, เอ็น-จิน-กริกส์ | *\"We configured **NGINX** as a reverse proxy for load balancing.\"* |\n| **epoch** | /ˈiː.pɒk/ หรือ /ˈep.ək/ | **อี**-พ็อค หรือ **เอพ**-เพิค | ❌ อี-โพช, เอ-พ็อช | *\"The timestamp is stored in Unix **epoch** milliseconds.\"* |\n| **repository** | /rɪˈpɒz.ɪ.tər.i/ | ริ-**พอซ**-ซิ-ทรี *(เน้น พอซ)* | ❌ รี-โพ-ซิ-ตอรี่ | *\"Clone the main backend **repository** using SSH.\"* |\n\n> 📌 **Pro Tip:** คำว่า `cache` ออกเสียงเหมือนคำว่า `cash` 100%! ไม่ต้องเติม \"เช่\" ข้างหลังเด็ดขาด!",
      "keyPhrases": [
        {
          "en": "Clear your Redis cache before re-running the integration tests.",
          "th": "เคลียร์แคช Redis ของคุณก่อนรันการทดสอบ Integration ใหม่อีกครั้ง"
        },
        {
          "en": "The Docker daemon stopped responding after the memory spike.",
          "th": "เดมอนของ Docker หยุดตอบสนองหลังจากหน่วยความจำพุ่งสูงผิดปกติ"
        },
        {
          "en": "Clone the frontend repository and run npm install.",
          "th": "โคลน Git repository ของส่วนหน้าบ้าน แล้วรันคำสั่ง npm install"
        }
      ]
    },
    {
      "heading": "3. กลุ่มคำศัพท์การทดสอบ การประมวลผล และคำสั่ง DevOps (Testing, Async & Tools)",
      "content": "คำศัพท์ในชีวิตประจำวันของ Developer เกี่ยวกับการเขียน Test, การรัน Async และเครื่องมือต่างๆ:\n\n### 📊 ตารางสัทศาสตร์กลุ่ม Testing & DevOps\n\n| คำศัพท์ (Term) | สัทศาสตร์สากล (IPA) | คำอ่านไทย & จุดเน้นเสียง | ข้อผิดพลาดยอดฮิต (❌) | ตัวอย่างประโยคจริงในงาน (Real-world Example) |\n|---|---|---|---|---|\n| **suite** (test suite) | /swiːt/ | **สวีท** *(เหมือน sweet ขนมหวาน)* | ❌ ซูท, สวี-เต้ | *\"All 50 unit tests in the authentication **suite** passed.\"* |\n| **regex** / **regexp** | /ˈredʒ.eks/ | **เรจ**-เอกซ์ *(g ออกเสียง /dʒ/)* | ❌ รี-เก็กซ์, เรก-เอ็กซ์ | *\"Write a clean **regex** to validate the email format.\"* |\n| **asynchronous** | /eɪˈsɪŋ.krə.nəs/ | เอ-**ซิง**-โคร-เนิส *(เน้น ซิง)* | ❌ อา-ซิง-โคร-นัส | *\"Node.js handles I/O operations in an **asynchronous** manner.\"* |\n| **synchronous** | /ˈsɪŋ.krə.nəs/ | **ซิง**-โคร-เนิส *(เน้น ซิง)* | ❌ ซิน-โคร-นัส | *\"Avoid blocking the event loop with heavy **synchronous** calls.\"* |\n| **deprecate** | /ˈdep.rə.keɪt/ | **เดป**-เพรอะ-เคท *(เน้น เดป)* | ❌ ดี-ปรี-เคต | *\"This v1 endpoint is **deprecated** and will be removed next month.\"* |\n| **gauge** | /ɡeɪdʒ/ | **เกจ** *(ออกเสียงเหมือน gage)* | ❌ เก๊าก์, เกา-เก้ | *\"Prometheus uses a **gauge** metric to track active connections.\"* |\n| **subtle** | /ˈsʌt.əl/ | **ซัต**-เทิล *(ตัว b ไม่ออกเสียง!)* | ❌ ซับ-เทิล | *\"There is a **subtle** concurrency bug in this goroutine.\"* |\n| **alias** | /ˈeɪ.li.əs/ | **เอ**-เลียส *(เน้น เอ)* | ❌ อา-เลียส, อะ-ไล-แอส | *\"Add a shell **alias** for the kubectl command.\"* |\n\n> 💡 **Silent Letters (ตัวอักษรเงียบ):** ในคำว่า `subtle` ตัว `b` เป็น Silent letter จึงออกเสียงว่า **\"ซัต-เทิล\"** (คล้าย subtle hint) ห้ามออกเสียงตัวบีเด็ดขาด",
      "keyPhrases": [
        {
          "en": "All end-to-end tests in the regression suite passed without flakiness.",
          "th": "การทดสอบ End-to-End ทั้งหมดใน Regression Suite ผ่านฉลุยโดยไม่มีข้อผิดพลาดสุ่มสี่สุ่มห้า"
        },
        {
          "en": "The legacy billing API has been deprecated in favor of Stripe webhooks.",
          "th": "API ชำระเงินรุ่นเก่ายกเลิกการสนับสนุน (deprecated) แล้วเพื่อเปลี่ยนไปใช้ Stripe webhook แทน"
        },
        {
          "en": "Use an asynchronous message broker to decouple the microservices.",
          "th": "ใช้ระบบส่งข้อความแบบ Asynchronous เพื่อลดการยึดติดกันระหว่างไมโครเซอร์วิส"
        }
      ]
    }
  ],
  "quiz": [
    {
      "id": "mc-pron-q1",
      "question": "คำว่า 'cache' ในระบบคอมพิวเตอร์ ออกเสียงที่ถูกต้องตามหลักสากลอย่างไร?",
      "options": [
        "ออกเสียงว่า 'คา-เช่' (ka-shey)",
        "ออกเสียงว่า 'แคช' (/kæʃ/) เหมือนคำว่า cash (เงินสด)",
        "ออกเสียงว่า 'เคค' (cake)",
        "ออกเสียงว่า 'แคต-เช่' (cat-chey)"
      ],
      "answer": 1,
      "explanation": "ถูกต้อง! คำว่า cache ในภาษาอังกฤษออกเสียงพยางค์เดียวว่า 'แคช' (/kæʃ/) เหมือนคำว่า cash ทุกประการ ห้ามเติม 'เช่' ข้างหลัง"
    },
    {
      "id": "mc-pron-q2",
      "question": "คำว่า 'parameter' ควรลงเสียงหนัก (Stress) ที่พยางค์ใด?",
      "options": [
        "พยางค์แรก (PA-ra-me-ter)",
        "พยางค์ที่สอง (pə-RAM-i-ter)",
        "พยางค์ที่สาม (pa-ra-ME-ter)",
        "ทุกพยางค์ออกเสียงเท่ากันหมด"
      ],
      "answer": 1,
      "explanation": "ถูกต้อง! parameter ลงเสียงเน้นที่พยางค์ที่สอง /pəˈræm.ɪ.tər/ (เพอะ-แรม-มิ-เถ่อะ) ซึ่งการเน้นพยางค์สองนี้จะทำให้ฝรั่งเข้าใจได้ทันที"
    },
    {
      "id": "mc-pron-q3",
      "question": "คำว่า 'test suite' (ชุดการทดสอบโค้ด) คำว่า 'suite' ออกเสียงเหมือนคำใดในภาษาอังกฤษ?",
      "options": [
        "เหมือนคำว่า suit (ชุดสูท /suːt/)",
        "เหมือนคำว่า sweet (ขนมหวาน /swiːt/)",
        "เหมือนคำว่า soot (เขม่าดำ /sʊt/)",
        "เหมือนคำว่า sweat (เหงื่อ /swet/)"
      ],
      "answer": 1,
      "explanation": "ถูกต้อง! suite ออกเสียงว่า /swiːt/ (สวีท) เหมือนคำว่า sweet เช่น hotel suite หรือ test suite ไม่ได้ออกเสียงว่า ซูท"
    },
    {
      "id": "mc-pron-q4",
      "question": "คำว่า 'schema' (โครงสร้างฐานข้อมูล) พยัญชนะ 'ch' ในคำนี้ออกเสียงอย่างไร?",
      "options": [
        "ออกเสียง /tʃ/ เหมือนคำว่า 'chair'",
        "ออกเสียง /ʃ/ เหมือนคำว่า 'shoe'",
        "ออกเสียง /k/ เหมือนคำว่า 'sky' (/ˈskiː.mə/ สกี-ม่า)",
        "ไม่ออกเสียง 'ch'"
      ],
      "answer": 2,
      "explanation": "ถูกต้อง! schema มีรากศัพท์จากภาษากรีก ตัว ch ในคำนี้จึงออกเสียงเป็นเสียงเคอะ /k/ รวมกันเป็น /ˈskiː.mə/ (สกี-ม่า) ไม่ใช่ เช-ม่า"
    },
    {
      "id": "mc-pron-q5",
      "question": "คำว่า 'subtle' (เช่น a subtle bug) ตัวอักษรใดคือ Silent Letter (ตัวอักษรเงียบที่ไม่ออกเสียง)?",
      "options": [
        "ตัว s",
        "ตัว b (ออกเสียงว่า /ˈsʌt.əl/ ซัต-เทิล)",
        "ตัว t",
        "ตัว l"
      ],
      "answer": 1,
      "explanation": "ถูกต้อง! ตัวอักษร 'b' ในคำว่า subtle เป็น Silent Letter ไม่ออกเสียง คำนี้จึงอ่านว่า /ˈsʌt.əl/ (ซัต-เทิล) แปลว่า เล็กน้อย หรือแนบเนียน"
    }
  ]
},
  // =========================================================================
  // MASTERCLASS 12: JUNIOR DEV SURVIVAL GUIDE
  // =========================================================================
  {
  "id": "mc-junior-dev-survival",
  "title": "Junior Dev Survival Guide: คู่มือเอาตัวรอดสัปดาห์แรกในทีมเทคระดับสากล (Slack, Access, Standup & Acronyms)",
  "titleEn": "Junior Dev Survival Guide: Essential English for Onboarding, Asking for Help, and Remote Collaboration",
  "category": "Career & Workplace",
  "categoryTh": "การทำงานและเอาตัวรอดในทีมเทค",
  "badge": "🚀 Junior Dev Blueprint",
  "badgeColor": "amber",
  "readTime": "18 นาที",
  "author": "Engineering Manager & Senior Agile Coach",
  "publishedDate": "2026-10-25",
  "coverEmoji": "🐣",
  "summary": "เจาะลึกทักษะภาษาอังกฤษและเทคนิคการสื่อสารที่ Junior Engineer, Intern และมือใหม่ทุกคนต้องใช้ตั้งแต่วันแรก: ตั้งแต่การเขียนแนะนำตัวบน Slack ช่อง #general/#engineering, การขอสิทธิ์ Access (GitHub repo, AWS console, VPN), ศิลปะการขอความช่วยเหลือจาก Senior แบบมีมารยาทด้วยกฎ '3-Step Asking for Help', ประโยคเอาตัวรอดใน Zoom เมื่อฟังฝรั่งพูดเร็วไม่ทัน, และรวมคำย่อไอทียอดฮิต (LGTM, WIP, ETA, PTO, AFK, TBD)",
  "tags": [
    "Junior Developer",
    "Onboarding",
    "Asking for Help",
    "Slack Communication",
    "Tech Acronyms"
  ],
  "sections": [
    {
      "heading": "1. Day 1 Onboarding & Requesting Access (การแนะนำตัวและขอสิทธิ์เข้าระบบอย่างมืออาชีพ)",
      "content": "สัปดาห์แรกของการเข้าทำงาน (Onboarding) คือช่วงเวลาสร้าง First Impression ที่สำคัญที่สุด การแนะนำตัวบน Slack และการขอสิทธิ์การเข้าถึง (Access Rights) ควรมีความชัดเจน เป็นกันเอง และให้ข้อมูลครบถ้วนโดยไม่ต้องให้ทีมถามซ้ำ\n\n### 💬 เทมเพลตแนะนำตัวใน Slack (#general หรือ #engineering)\n\n```markdown\nHi everyone! 👋\nI'm [Name], and I'm super excited to join the team today as a [Junior Software Engineer / Frontend Developer] on the [Core / Platform] team.\n\nI'm really looking forward to working with you all, learning from the codebase, and contributing to the upcoming sprint goals!\n\nOutside of coding, I enjoy [drinking coffee / playing guitar / gaming].\nFeel free to say hi or ping me anytime! 🚀\n```\n\n---\n\n### 🔑 เทมเพลตขอสิทธิ์เข้าระบบ (GitHub, AWS, VPN, Jira)\nการขอ Access ที่ดีต้องระบุ: **คุณเป็นใคร + ต้องการสิทธิ์อะไร + เพื่อทำอะไร + มีตั๋ว Jira หรือคำอนุมัติจากใคร**\n\n```markdown\nHi @DevOps-Team,\nCould you please grant me read/write access to the [repo-name] GitHub repository?\nI am currently setting up my local development environment for ticket [PROJ-102].\n\n- GitHub username: [your-github-handle]\n- Role: Junior Backend Engineer\n- Manager / Mentor: @Senior-Name\n\nThanks in advance for your help! 🙏\n```\n\n> 💡 **มารยาทสากล:** เมื่อมีคนให้สิทธิ์หรือช่วยเหลือเสร็จแล้ว จงกด React อิโมจิ เช่น ✅ หรือ 🙏 พร้อมพิมพ์สั้นๆ ว่า *\"Access verified, thank you so much!\"* เพื่อยืนยันว่าใช้ได้แล้ว",
      "keyPhrases": [
        {
          "en": "I'm really excited to join the team and contribute to the upcoming sprint.",
          "th": "ผมรู้สึกตื่นเต้นมากที่ได้ร่วมงานกับทีมและได้มีส่วนร่วมในสปรินต์ที่กำลังจะมาถึงนี้"
        },
        {
          "en": "Could you please grant me read and write access to the main repository?",
          "th": "รบกวนช่วยเปิดสิทธิ์การอ่านและเขียน (Read/Write) ใน Git repository หลักให้หน่อยได้ไหมครับ"
        },
        {
          "en": "Access verified and working properly on my machine, thanks a lot!",
          "th": "ตรวจสอบสิทธิ์แล้ว ใช้งานได้เรียบร้อยดีบนเครื่องของผม ขอบคุณมากๆ ครับ!"
        }
      ]
    },
    {
      "heading": "2. The 3-Step Asking for Help Formula (สูตรขอความช่วยเหลือจาก Senior แบบได้ใจและได้คำตอบทันที)",
      "content": "ปัญหาใหญ่ที่สุดของ Junior และน้องใหม่ คือ **\"Suffering in Silence\"** (ติดปัญหาแต่เงียบไม่กล้าถามจนหมดวัน) หรือในทางกลับกันคือ **\"ถามแบบไม่มีบริบท\"** เช่น ทักมาแค่ *\"พี่ครับ ทำไมมันรันไม่ขึ้น\"*\n\nSenior วิศวกรทุกคนยินดีช่วยน้องใหม่เสมอ หากน้องใช้ **สูตร 3 จังหวะ (The 3-Step Asking Formula)**:\n\n### 🧩 สูตร 3 จังหวะในการถาม\n\n1. **Step 1: สิ่งที่ต้องการทำ + สิ่งที่ได้พยายามลองไปแล้ว (Context & What I Tried)**\n   - บอกเป้าหมาย และพิสูจน์ว่าเราไม่ได้รอป้อนข้าว แต่ได้หาข้อมูลหรือลองแก้เบื้องต้นมาแล้ว\n2. **Step 2: จุดที่ติด Error ชัดเจนพร้อม Log หรือภาพ (The Exact Roadblock & Evidence)**\n   - แนบ Error message, Stack trace หรือ Command ที่สั่งรัน\n3. **Step 3: คำถามเจาะจง หรือสมมติฐานของเรา (Specific Question or Hypothesis)**\n   - ถามเจาะจง ไม่ถามกว้างๆ เพื่อให้ Senior ชี้เป้าได้ใน 1 บรรทัด\n\n---\n\n### ⚖️ เปรียบเทียบ Before vs After\n\n| ❌ แบบที่ทำให้ Senior ปวดหัว (Don't) | ✅ แบบมืออาชีพที่ Senior พร้อมช่วยทันที (Do) |\n|---|---|\n| *\"พี่ครับ ช่วยดู Docker ให้หน่อย รันไม่ผ่านครับ\"* | *\"Hi @Alex, I'm trying to spin up the local PostgreSQL container for ticket #102. **I've verified** that Docker Desktop is running and I pulled the latest image, but `docker compose up` exits with code 1: `port 5432 already in use`. Could it be that a local Postgres service is already bound to that port? Should I kill the local process or change the mapped port in `.env`?\"* |\n\n> ⏳ **กฎ 30 นาที (The 30-Minute Rule):** หากคุณติดบล็อคเกอร์อะไรก็ตาม ลองค้นคว้าและดีบักด้วยตัวเองไม่เกิน 30 นาที หากยังไม่คืบหน้า ให้เริ่มร่างคำถาม 3 จังหวะนี้ทักหา Senior หรือ Buddy ทันที อย่าปล่อยให้เวลาผ่านไปทั้งวัน!",
      "keyPhrases": [
        {
          "en": "I've tried clearing the cache and rebuilding the image, but the same error persists.",
          "th": "ผมได้ลองเคลียร์แคชและบิลด์ Image ใหม่แล้ว แต่ยังคงพบ Error เดิมอยู่ครับ"
        },
        {
          "en": "Could you point me in the right direction when you have a free minute?",
          "th": "หากพี่พอมีเวลาว่างสักครู่ รบกวนช่วยชี้แนะแนวทางเบื้องต้นให้หน่อยได้ไหมครับ"
        },
        {
          "en": "Here is the exact stack trace and the command I executed.",
          "th": "นี่คือ Stack trace และคำสั่งที่ผมใช้รันตอนที่เกิดปัญหาครับ"
        }
      ]
    },
    {
      "heading": "3. Zoom Meeting Survival & Everyday Tech Acronyms (การเอาตัวรอดในประชุมและรวมคำย่อไอที)",
      "content": "เมื่อต้องเข้าประชุมออนไลน์กับเพื่อนร่วมทีมต่างชาติที่พูดเร็วมากจนฟังไม่ทัน หรือมีคำย่อบน Slack โผล่มาเต็มไปหมด ต่อไปนี้คือประโยคและคำย่อที่จะช่วยให้คุณรอดปลอดภัยและดูเป็นมืออาชีพ:\n\n### 🎙️ 5 ประโยคเอาตัวรอดใน Zoom เมื่อฟังไม่ทัน\n\n1. **เมื่อเสียงขาดหายหรือฟังไม่ทัน:**\n   - *\"Sorry, your audio broke up for a second. Could you please repeat that last sentence?\"* (ขออภัยครับ พอดีสัญญาณเสียงกระตุกไปชั่วขณะ รบกวนพูดประโยคเมื่อสักครู่อีกครั้งได้ไหมครับ)\n2. **เมื่อต้องการเช็กความเข้าใจว่าเราเข้าใจตรงกันไหม:**\n   - *\"Just to make sure I'm on the same page, do you mean we should prioritize the login fix before the refactoring?\"* (เพื่อความแน่ใจว่าเราเข้าใจตรงกัน หมายความว่าเราควรแก้เรื่องล็อกอินก่อนการรีแฟกเตอร์โค้ดใช่ไหมครับ)\n3. **เมื่อต้องการให้เขาส่งลิงก์หรือข้อความในแชต:**\n   - *\"Could you drop that PR link into the meeting chat so I can follow along?\"* (รบกวนแปะลิงก์ PR นั้นลงในแชตของห้องประชุมให้หน่อยได้ไหมครับ เพื่อจะได้เปิดดูตามไปด้วย)\n4. **เมื่อมีคำถามแต่ยังคิดประโยคภาษาอังกฤษไม่ทัน:**\n   - *\"I have a quick question regarding the API contract, if you don't mind.\"* (ผมมีคำถามสั้นๆ เกี่ยวกับข้อตกลง API สักเล็กน้อยครับ)\n5. **เมื่อไมโครโฟนลืมเปิด (Mute):**\n   - *\"Sorry, I was on mute! Let me share my screen real quick.\"* (ขออภัยครับ ลืมเปิดไมค์! เดี๋ยวผมขอแชร์หน้าจอเลยนะครับ)\n\n---\n\n### 📖 รวมคำย่อทางเทคนิคและการทำงานยอดนิยม (Everyday Tech Acronyms)\n\n| คำย่อ (Acronym) | คำเต็ม (Full Term) | ความหมายและการใช้งานจริง |\n|---|---|---|\n| **LGTM** | Looks Good To Me | ใช้บ่อยที่สุดเวลา Approve โค้ดใน Pull Request ว่า *\"โค้ดดูดี อนุมัติผ่าน\"* |\n| **WIP** | Work In Progress | งานที่กำลังทำอยู่ ยังไม่เสร็จสมบูรณ์ (เช่น `[WIP] Refactor auth flow`) |\n| **ETA** | Estimated Time of Arrival | เวลาโดยประมาณที่คาดว่างานหรือฟีเจอร์จะเสร็จสมบูรณ์ |\n| **PTO** | Paid Time Off | การลาพักร้อน / วันหยุดประจำปี |\n| **AFK** | Away From Keyboard | ไม่อยู่หน้าจอชั่วคราว (เช่น ไปหยิบน้ำ เข้าห้องน้ำ) |\n| **TBD / TBA** | To Be Decided / Announced | ยังไม่ได้ข้อสรุป / รอการประกาศภายหลัง |\n| **FYI / FYA** | For Your Information / Action | แจ้งเพื่อทราบ / ส่งต่อเพื่อให้ดำเนินการต่อ |\n| **TL;DR** | Too Long; Didn't Read | สรุปใจความสั้นๆ สำหรับเนื้อหายาว |\n| **PR / MR** | Pull Request / Merge Request | คำขอนำโค้ดเข้าไปรวมกับกิ่งหลักใน GitHub/GitLab |\n| **OOO** | Out of Office | ลางานหรือไม่อยู่ในออฟฟิศ |",
      "keyPhrases": [
        {
          "en": "Just to make sure we are on the same page, should I submit the PR today?",
          "th": "เพื่อความแน่ใจว่าเราเข้าใจตรงกัน ผมควรเปิด Pull Request ภายในวันนี้เลยใช่ไหมครับ"
        },
        {
          "en": "The PR looks good to me (LGTM), feel free to merge whenever you are ready.",
          "th": "โค้ดใน PR ดูเรียบร้อยดีมากครับ (LGTM) พร้อมเมื่อไหร่กด Merge ได้เลยครับ"
        },
        {
          "en": "I'll be away from keyboard (AFK) for lunch, back in 30 minutes.",
          "th": "ผมจะไม่อยู่หน้าจอ (AFK) ไปทานข้าวเที่ยงสักครู่ อีก 30 นาทีกลับมาครับ"
        }
      ]
    }
  ],
  "quiz": [
    {
      "id": "mc-jun-q1",
      "question": "ตามหลัก 'The 3-Step Asking for Help Formula' สิ่งใดที่ Junior ควรเตรียมพร้อมไว้ก่อนทักถาม Senior เสมอ?",
      "options": [
        "รอให้หมดเวลางานก่อนแล้วค่อยทักถาม",
        "บริบทเป้าหมาย สิ่งที่ได้พยายามลองทำไปแล้ว (What I tried) และหลักฐาน Error Log ที่ชัดเจน",
        "พิมพ์แค่ 'พี่ครับ ช่วยด้วย' แล้วรอให้พี่โทรกลับมา",
        "เดาสุ่มลบโค้ดทิ้งทั้งหมดแล้วเริ่มเขียนใหม่"
      ],
      "answer": 1,
      "explanation": "ถูกต้อง! การบอกสิ่งที่พยายามลองไปแล้ว พร้อมบริบทและ Log ชัดเจน แสดงถึงความใส่ใจ ไม่รอป้อนข้าว และช่วยให้ Senior ชี้จุดแก้ปัญหาได้ทันที"
    },
    {
      "id": "mc-jun-q2",
      "question": "เมื่อตรวจโค้ดของเพื่อนร่วมทีมบน GitHub และเห็นว่าโค้ดทำงานถูกต้องเรียบร้อยดี ควรพิมพ์คำย่อใด?",
      "options": [
        "AFK (Away From Keyboard)",
        "LGTM (Looks Good To Me)",
        "TBD (To Be Decided)",
        "PTO (Paid Time Off)"
      ],
      "answer": 1,
      "explanation": "ถูกต้อง! LGTM ย่อมาจาก Looks Good To Me นิยมใช้กันทั่วโลกในการรีวิว Pull Request เพื่อสื่อว่าโค้ดดูดีพร้อม Merge"
    },
    {
      "id": "mc-jun-q3",
      "question": "หากในระหว่างประชุม Zoom สัญญาณเสียงของเพื่อนร่วมงานกระตุกจนฟังไม่รู้เรื่อง ควรพูดอย่างไรอย่างสุภาพ?",
      "options": [
        "'You speak too fast, stop.'",
        "'Sorry, your audio broke up for a second. Could you please repeat that last sentence?'",
        "'I don't care, next topic.'",
        "'Turn off your camera immediately.'"
      ],
      "answer": 1,
      "explanation": "ถูกต้อง! 'Sorry, your audio broke up for a second. Could you please repeat that last sentence?' เป็นประโยคสุภาพ เป็นมืออาชีพ และอธิบายสาเหตุว่าเสียงหลุดจึงขอให้พูดซ้ำ"
    },
    {
      "id": "mc-jun-q4",
      "question": "เมื่อส่งคำขอเปิดสิทธิ์ (Access Request) บน Slack ไปยังทีม DevOps ข้อมูลใดที่จำเป็นต้องระบุ?",
      "options": [
        "Username, ชื่อ Repo หรือเซอร์วิสที่ต้องการสิทธิ์, บทบาทงาน และเลขตั๋วงานหรือผู้รับรอง",
        "รหัสผ่านส่วนตัวของผู้ใช้",
        "ประวัติการศึกษาตั้งแต่ชั้นมัธยม",
        "พิมพ์คำว่า 'ขอสิทธิ์ด่วนที่สุด' โดยไม่ต้องระบุชื่อระบบ"
      ],
      "answer": 0,
      "explanation": "ถูกต้อง! การขอสิทธิ์ต้องระบุ Username, ชื่อ Repository, Role และตั๋วอ้างอิง เพื่อให้ผู้ดูแลระบบตรวจสอบความปลอดภัยและอนุมัติได้อย่างถูกต้อง"
    },
    {
      "id": "mc-jun-q5",
      "question": "คำว่า 'ETA' ที่มักถูกถามใน Standup Meeting ย่อมาจากอะไรและหมายถึงสิ่งใด?",
      "options": [
        "Error Time Allocation - เวลาที่ระบบพัง",
        "Estimated Time of Arrival - เวลาโดยประมาณที่คาดว่างานจะเสร็จสมบูรณ์",
        "Engineering Team Agreement - ข้อตกลงทีม",
        "Emergency Task Action - งานด่วนพิเศษ"
      ],
      "answer": 1,
      "explanation": "ถูกต้อง! ETA ย่อมาจาก Estimated Time of Arrival ซึ่งในบริบทการทำงานหมายถึง 'เวลาโดยประมาณที่คาดว่างานหรือฟีเจอร์จะเสร็จ'"
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

