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
  }
];

if (typeof window !== "undefined") {
  window.masterclassData = masterclassData;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = masterclassData;
}
