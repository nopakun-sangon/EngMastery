/**
 * EngMastery: Sentence Builder & Grammar Blueprint Data
 * Based on Kru Dew / OpenDurian "ฝึกแต่งภาษาอังกฤษ 1,000 ประโยค" (Ebook/SHEET1000.pdf)
 * 
 * Features:
 * - 10 Curated Chapters covering real-world conversational formulas
 * - Eye-catching Kru Dew formulas & blueprints with highlighted orange components
 * - Vocabulary bank with audio pronunciation
 * - Interactive sentence challenges with drag-and-drop & tap-to-place word slots
 */

window.sentenceBuilderData = [
  {
    id: "sb-ch1-meeting-friends",
    chapterNo: 1,
    title: "บทที่ 1: Meeting a New Friend (พบเพื่อนใหม่ & แนะนำตัว)",
    subtitle: "It's Nice to Meet You — ปูพื้นฐานการแนะนำตัว ชื่อจริง ชื่อเล่น และบอกถิ่นกำเนิด",
    coverEmoji: "🤝",
    readTime: "8 นาที",
    level: "Beginner (A1)",
    category: "Self-Introduction",
    summary: "เรียนรู้โครงสร้างพื้นฐานสำหรับทักทาย ทำความรู้จักเพื่อนใหม่ แนะนำชื่อจริงและชื่อเล่นด้วย 'My name is..., but you can call me...', บอกถิ่นกำเนิด 'I'm from...', และระยะเวลาที่อยู่อาศัย 'I've lived in... for... years' พร้อมชวนทำกิจกรรมร่วมกัน",
    formulas: [
      {
        formula: "My name is [ชื่อจริง], but you can call me [ชื่อเล่น].",
        meaning: "ฉันชื่อ [ชื่อจริง] แต่คุณจะเรียกฉันว่า [ชื่อเล่น] ก็ได้",
        example: "My name is Thomas, but you can call me Tommy.",
        exampleTh: "ฉันชื่อโธมัส แต่คุณจะเรียกฉันว่าทอมมีก็ได้",
        kruDewTip: "เมื่อใช้ 'call me' ให้ตามด้วยชื่อเล่นได้เลย ไม่ต้องมี as หรือ to อีก!"
      },
      {
        formula: "I'm from [เมือง/จังหวัด/ประเทศ].",
        meaning: "ฉันมาจาก [สถานที่]",
        example: "I'm from Bangkok, Thailand.",
        exampleTh: "ฉันมาจากกรุงเทพมหานคร ประเทศไทย",
        kruDewTip: "มาจากประเทศไหนใช้ 'I am from...' หรือถ้าเน้นการย้ายถิ่นฐานใช้ 'I come from...'"
      },
      {
        formula: "I've lived in [เมือง/เขต] for [จำนวนปี] years.",
        meaning: "ฉันอาศัยอยู่ที่ [เมือง] มาเป็นเวลา [ปี] แล้ว (และยังคงอยู่ปัจจุบัน)",
        example: "I've lived in Bangkok for 10 years.",
        exampleTh: "ฉันอาศัยอยู่ที่กรุงเทพฯ มาเป็นเวลา 10 ปีแล้ว",
        kruDewTip: "Present Perfect (have + lived) แสดงว่าเริ่มอยู่ในอดีตและปัจจุบันก็ยังอาศัยอยู่ที่นี่!"
      },
      {
        formula: "We should [V.inf กิจกรรม] sometime.",
        meaning: "พวกเราน่าจะ [ทำกิจกรรม] กันบ้างนะ",
        example: "We should hang out sometime.",
        exampleTh: "พวกเราน่าจะไปเที่ยว/ใช้เวลาด้วยกันบ้างนะ",
        kruDewTip: "หลัง should ต้องเป็นกริยา infinitive ไม่ผัน ไม่เติม -ing หรือ -s"
      }
    ],
    vocabBank: [
      { en: "hang out", th: "ไปเที่ยว/ใช้เวลาร่วมกัน", pos: "verb" },
      { en: "go shopping", th: "ไปช็อปปิ้ง", pos: "verb" },
      { en: "watch a movie", th: "ไปดูหนัง", pos: "verb" },
      { en: "have dinner", th: "ไปทานอาหารเย็น", pos: "verb" },
      { en: "have some coffee", th: "ไปดื่มกาแฟ", pos: "verb" },
      { en: "go to the beach", th: "ไปเที่ยวทะเล", pos: "verb" },
      { en: "go fishing", th: "ไปตกปลา", pos: "verb" },
      { en: "study", th: "ติวหนังสือ/เรียน", pos: "verb" },
      { en: "relax", th: "พักผ่อน", pos: "verb" },
      { en: "take a nap", th: "งีบหลับ", pos: "verb" }
    ],
    drills: [
      {
        id: "sb-1-1",
        th: "ฉันชื่อโธมัส แต่คุณจะเรียกฉันว่าทอมมีก็ได้",
        targetWords: ["My", "name", "is", "Thomas,", "but", "you", "can", "call", "me", "Tommy."],
        poolWords: ["is", "name", "Tommy.", "My", "am", "Thomas,", "call", "you", "but", "can", "me", "calls"],
        explanation: "โครงสร้าง 'My name is [ชื่อจริง], but you can call me [ชื่อเล่น].' เป็นสำนวนทักทายที่สุภาพและเป็นกันเอง"
      },
      {
        id: "sb-1-2",
        th: "เธอชื่อเอมิเลีย แต่คุณจะเรียกหล่อนว่าเอมีก็ได้",
        targetWords: ["Her", "name", "is", "Amelia,", "but", "you", "can", "call", "her", "Amy."],
        poolWords: ["name", "is", "Amy.", "Her", "call", "Amelia,", "but", "her", "you", "can", "She", "him"],
        explanation: "สรรพนามแสดงความเป็นเจ้าของเพศหญิงคือ 'Her name' และกรรมคือ 'call her'"
      },
      {
        id: "sb-1-3",
        th: "ฉันมาจากกรุงเทพมหานคร",
        targetWords: ["I", "am", "from", "Bangkok."],
        poolWords: ["from", "Bangkok.", "I", "am", "in", "come"],
        explanation: "I am from + เมือง/ประเทศ ใช้บอกถิ่นกำเนิดหรือบ้านเกิดอย่างกระชับ"
      },
      {
        id: "sb-1-4",
        th: "ฉันอาศัยอยู่ที่เชียงใหม่มาเป็นเวลา 5 ปีแล้ว",
        targetWords: ["I", "have", "lived", "in", "Chiang", "Mai", "for", "5", "years."],
        poolWords: ["lived", "in", "Chiang", "years.", "I", "5", "Mai", "for", "have", "living", "since", "at"],
        explanation: "I have lived in... for [ระยะเวลา] years (Present Perfect บอกเหตุการณ์ที่ทำต่อเนื่องถึงปัจจุบัน)"
      },
      {
        id: "sb-1-5",
        th: "พวกเราน่าจะไปเที่ยวกันบ้างนะ",
        targetWords: ["We", "should", "hang", "out", "sometime."],
        poolWords: ["should", "out", "sometime.", "We", "hang", "shall", "hanging", "go"],
        explanation: "We should + V.inf (hang out) + sometime = ชวนไปเที่ยวแบบสบายๆ เป็นกันเอง"
      }
    ]
  },
  {
    id: "sb-ch2-weather-activities",
    chapterNo: 2,
    title: "บทที่ 2: What's the Weather Like? (สภาพอากาศ & ชวนทำกิจกรรม)",
    subtitle: "What a Good Day! — เริ่มบทสนทนาด้วยสภาพอากาศและชวนทำกิจกรรมร่วมกัน",
    coverEmoji: "☀️",
    readTime: "7 นาที",
    level: "Elementary (A1-A2)",
    category: "Small Talk & Invitations",
    summary: "คนอังกฤษชอบเปิดการสนทนาด้วยเรื่องดินฟ้าอากาศ! มาเรียนรู้วิธีชมสภาพอากาศพร้อมใช้ Tag Question 'isn't it?' และการชักชวนเพื่อนทำสิ่งสนุกๆ ด้วย 'Let's + V.inf'",
    formulas: [
      {
        formula: "It is + [Adj. สภาพอากาศ] + today, isn't it?",
        meaning: "วันนี้อากาศ [สภาพอากาศ] จังเลย ใช่ไหมล่ะ",
        example: "It is very nice today, isn't it?",
        exampleTh: "วันนี้อากาศดีจังเลย ใช่ไหมล่ะ",
        kruDewTip: "Question Tag สำหรับประโยคบอกเล่าขึ้นต้นด้วย It is... ต้องลงท้ายปฏิเสธเสมอคือ 'isn't it?'"
      },
      {
        formula: "Let's + [V.inf สิ่งที่ชวนทำร่วมกัน].",
        meaning: "พวกเรามา [ทำกิจกรรม] กันเถอะ",
        example: "Let's have some coffee.",
        exampleTh: "พวกเราไปดื่มกาแฟกันเถอะ",
        kruDewTip: "Let's ย่อมาจาก Let us ดังนั้นกริยาตามหลังต้องเป็นรูปเดิมเสมอ ห้ามเติม -ing หรือ to"
      },
      {
        formula: "How about + [V.ing / Noun]?",
        meaning: "แล้วถ้าพวกเรา [ทำสิ่งนี้] ล่ะ คิดว่ายังไง",
        example: "How about grabbing a quick bite?",
        exampleTh: "ลองหาอะไรทานเร็วๆ หน่อยเป็นไง",
        kruDewTip: "How about ต้องตามด้วย V.ing หรือคำนามเสมอ"
      }
    ],
    vocabBank: [
      { en: "sunny", th: "แดดจ้า ท้องฟ้าโปร่ง", pos: "adjective" },
      { en: "freezing", th: "หนาวเหน็บ หนาวจัด", pos: "adjective" },
      { en: "windy", th: "ลมแรง", pos: "adjective" },
      { en: "pleasant", th: "อากาศดี สบายตัว", pos: "adjective" },
      { en: "work out", th: "ออกกำลังกาย", pos: "verb" },
      { en: "go cycling", th: "ไปปั่นจักรยาน", pos: "verb" },
      { en: "have a party", th: "จัดปาร์ตี้", pos: "verb" },
      { en: "visit a cafe", th: "ไปร้านคาเฟ่", pos: "verb" },
      { en: "call it a day", th: "เลิกงาน/พอแค่นี้สำหรับวันนี้", pos: "idiom" },
      { en: "part ways", th: "แยกย้ายกันตรงนี้", pos: "phrase" }
    ],
    drills: [
      {
        id: "sb-2-1",
        th: "วันนี้อากาศดีมากใช่ไหม",
        targetWords: ["It", "is", "very", "nice", "today,", "isn't", "it?"],
        poolWords: ["very", "nice", "isn't", "It", "today,", "it?", "is", "does", "not", "was"],
        explanation: "ประโยคบอกเล่า 'It is...' เมื่อทำเป็น Question Tag จะใช้ 'isn't it?' เพื่อขอความเห็นพ้อง"
      },
      {
        id: "sb-2-2",
        th: "พวกเราไปดื่มกาแฟกันเถอะ",
        targetWords: ["Let's", "have", "some", "coffee."],
        poolWords: ["some", "coffee.", "have", "Let's", "having", "drink", "to"],
        explanation: "Let's + V.inf (have) + some coffee = สำนวนชวนดื่มกาแฟยอดฮิต"
      },
      {
        id: "sb-2-3",
        th: "พวกเรามาออกกำลังกายกันเถอะ",
        targetWords: ["Let's", "work", "out", "together."],
        poolWords: ["work", "out", "together.", "Let's", "working", "to", "go"],
        explanation: "work out เป็น Phrasal Verb แปลว่า ออกกำลังกาย"
      },
      {
        id: "sb-2-4",
        th: "วันนี้อากาศร้อนมากใช่ไหม",
        targetWords: ["It", "is", "so", "hot", "today,", "isn't", "it?"],
        poolWords: ["hot", "today,", "it?", "It", "so", "is", "isn't", "aren't", "was"],
        explanation: "It is so hot today, isn't it? (ร้อนมาก = so hot / very hot)"
      },
      {
        id: "sb-2-5",
        th: "พวกเราแยกย้ายกันตรงนี้เถอะ",
        targetWords: ["Let's", "part", "ways", "here."],
        poolWords: ["ways", "here.", "part", "Let's", "parting", "go", "way"],
        explanation: "part ways เป็นสำนวนหมายถึง แยกย้ายกันไปตามทางของตนเอง"
      }
    ]
  },
  {
    id: "sb-ch3-sharing-interests",
    chapterNo: 3,
    title: "บทที่ 3: Sharing Interests & Future Plans (งานอดิเรก & แผนอนาคต)",
    subtitle: "I'll Tell You My Stories — บอกเล่าสิ่งที่ชอบทำยามว่างและแผนการในอนาคต",
    coverEmoji: "🎨",
    readTime: "8 นาที",
    level: "Pre-Intermediate (A2)",
    category: "Hobbies & Routine",
    summary: "เรียนรู้วิธีบอกเล่าสิ่งที่คุณหลงใหลยามว่าง และบอกกำหนดการในอนาคตด้วย will + V.inf หรือ be going to พร้อมคำบอกเวลาอนาคต (tomorrow, next week, tonight)",
    formulas: [
      {
        formula: "S. + will + [V.inf] + [Adv. เวลาอนาคต].",
        meaning: "[ประธาน] จะ [ทำกิจกรรม] ในเวลา [อนาคต]",
        example: "I will study tomorrow.",
        exampleTh: "ฉันจะติวหนังสือพรุ่งนี้",
        kruDewTip: "will ตามด้วย V. ไม่ผัน ใช้บอกการตัดสินใจทำ หรือสิ่งที่วางแผนจะทำในอนาคต"
      },
      {
        formula: "In my free time, I love to + [V.inf].",
        meaning: "ในเวลาว่างของฉัน ฉันรักที่จะ [ทำกิจกรรม]",
        example: "In my free time, I love to read books.",
        exampleTh: "ในเวลาว่าง ฉันรักที่จะอ่านหนังสือ",
        kruDewTip: "love to หรือ like to ตามด้วย V.inf แสดงความชอบและงานอดิเรก"
      }
    ],
    vocabBank: [
      { en: "tomorrow", th: "วันพรุ่งนี้", pos: "adverb" },
      { en: "the day after tomorrow", th: "วันมะรืนนี้", pos: "phrase" },
      { en: "this evening", th: "เย็นนี้", pos: "phrase" },
      { en: "next week", th: "สัปดาห์หน้า", pos: "phrase" },
      { en: "next month", th: "เดือนหน้า", pos: "phrase" },
      { en: "in the next 3 days", th: "ในอีก 3 วันข้างหน้า", pos: "phrase" },
      { en: "tonight", th: "คืนนี้", pos: "adverb" },
      { en: "go jogging", th: "ไปวิ่งจ๊อกกิ้ง", pos: "verb" },
      { en: "go fishing", th: "ไปตกปลา", pos: "verb" },
      { en: "go camping", th: "ไปตั้งแคมป์", pos: "verb" }
    ],
    drills: [
      {
        id: "sb-3-1",
        th: "ฉันจะติวหนังสือพรุ่งนี้",
        targetWords: ["I", "will", "study", "tomorrow."],
        poolWords: ["study", "tomorrow.", "I", "will", "am", "studying"],
        explanation: "will + study (V.inf) + tomorrow (คำบอกเวลาอนาคต)"
      },
      {
        id: "sb-3-2",
        th: "ฉันจะไปตกปลาพรุ่งนี้",
        targetWords: ["I", "will", "go", "fishing", "tomorrow."],
        poolWords: ["go", "fishing", "tomorrow.", "will", "I", "goes", "fish"],
        explanation: "go + V.ing ใช้กับกิจกรรมสันทนาการ เช่น go fishing, go shopping, go swimming"
      },
      {
        id: "sb-3-3",
        th: "นิโคลจะไปวิ่งจ๊อกกิ้งเย็นนี้",
        targetWords: ["Nicole", "will", "go", "jogging", "this", "evening."],
        poolWords: ["jogging", "this", "Nicole", "evening.", "will", "go", "goes", "jog"],
        explanation: "will ใช้ได้กับประธานทุกตัว ไม่ต้องเติม -s หลัง will หรือหลัง go"
      },
      {
        id: "sb-3-4",
        th: "พวกเราจะไปเที่ยวทะเลเดือนหน้า",
        targetWords: ["We", "will", "go", "to", "the", "beach", "next", "month."],
        poolWords: ["the", "beach", "We", "next", "month.", "to", "will", "go", "going", "at"],
        explanation: "go to the beach = ไปเที่ยวทะเล, next month = เดือนหน้า"
      },
      {
        id: "sb-3-5",
        th: "ในเวลาว่าง ฉันชอบอ่านหนังสือ",
        targetWords: ["In", "my", "free", "time,", "I", "like", "to", "read", "books."],
        poolWords: ["free", "time,", "I", "In", "my", "like", "to", "read", "books.", "reading", "at"],
        explanation: "In my free time, I like to + V.inf เป็นสำนวนแนะนำงานอดิเรกที่ฝรั่งนิยมใช้มากที่สุด"
      }
    ]
  },
  {
    id: "sb-ch4-going-somewhere",
    chapterNo: 4,
    title: "บทที่ 4: Going Somewhere & Directions (ถามทาง & บอกพิกัดตำแหน่ง)",
    subtitle: "Where Am I? — การใช้ Preposition of Place และ Question Tags เพื่อถามพิกัดสถานที่",
    coverEmoji: "🗺️",
    readTime: "8 นาที",
    level: "Elementary (A2)",
    category: "Travel & Directions",
    summary: "เรียนรู้วิธีถามทาง ระบุตำแหน่งสถานที่สำคัญ และการใช้คำบุพบทบอกตำแหน่ง (in front of, next to, opposite, behind) พร้อมโครงสร้างตรวจสอบความถูกต้องด้วย Question Tag",
    formulas: [
      {
        formula: "The [สถานที่ 1] is [Preposition] [สถานที่ 2], isn't it?",
        meaning: "[สถานที่ 1] อยู่ [ตำแหน่ง] ของ [สถานที่ 2] ใช่ไหม",
        example: "The bus stop is in front of the school, isn't it?",
        exampleTh: "ป้ายรถเมล์อยู่ด้านหน้าโรงเรียนใช่ไหม",
        kruDewTip: "Preposition บอกตำแหน่งสำคัญ: next to (ถัดจาก), in front of (ด้านหน้า), opposite (ตรงข้าม), behind (ด้านหลัง)"
      },
      {
        formula: "How can I get to the + [สถานที่]?",
        meaning: "ฉันจะเดินทางไปที่ [สถานที่] ได้อย่างไร",
        example: "How can I get to the subway station?",
        exampleTh: "ฉันจะไปสถานีรถไฟใต้ดินได้อย่างไร",
        kruDewTip: "get to แปลว่า เดินทางไปถึง เป็นสำนวนถามทางที่เป็นธรรมชาติที่สุด"
      }
    ],
    vocabBank: [
      { en: "next to", th: "ถัดจาก / ติดกับ", pos: "preposition" },
      { en: "in front of", th: "ด้านหน้า", pos: "preposition" },
      { en: "behind", th: "ด้านหลัง", pos: "preposition" },
      { en: "opposite", th: "ตรงข้าม", pos: "preposition" },
      { en: "between", th: "ระหว่าง (สองสิ่ง)", pos: "preposition" },
      { en: "bus stop", th: "ป้ายรถเมล์", pos: "noun" },
      { en: "subway station", th: "สถานีรถไฟใต้ดิน", pos: "noun" },
      { en: "library", th: "ห้องสมุด", pos: "noun" },
      { en: "hospital", th: "โรงพยาบาล", pos: "noun" }
    ],
    drills: [
      {
        id: "sb-4-1",
        th: "ป้ายรถเมล์อยู่ด้านหน้าโรงเรียนใช่ไหม",
        targetWords: ["The", "bus", "stop", "is", "in", "front", "of", "the", "school,", "isn't", "it?"],
        poolWords: ["bus", "front", "school,", "The", "stop", "of", "in", "the", "isn't", "is", "it?", "at", "behind"],
        explanation: "in front of = ด้านหน้า, isn't it? = ใช่ไหม"
      },
      {
        id: "sb-4-2",
        th: "โรงพยาบาลอยู่ตรงข้ามสวนสาธารณะใช่ไหม",
        targetWords: ["The", "hospital", "is", "opposite", "the", "park,", "isn't", "it?"],
        poolWords: ["hospital", "opposite", "park,", "The", "the", "is", "isn't", "it?", "next", "does"],
        explanation: "opposite = ตรงข้าม (ไม่ต้องมี to ต่อท้าย เช่น opposite the park)"
      },
      {
        id: "sb-4-3",
        th: "คาเฟ่อยู่ถัดจากห้องสมุดใช่ไหม",
        targetWords: ["The", "cafe", "is", "next", "to", "the", "library,", "isn't", "it?"],
        poolWords: ["cafe", "next", "library,", "The", "the", "to", "is", "isn't", "it?", "near", "at"],
        explanation: "next to = ถัดจาก / ข้างๆ จำเป็นต้องมี 'to' เสมอ"
      },
      {
        id: "sb-4-4",
        th: "ฉันจะไปสถานีรถไฟใต้ดินได้อย่างไร",
        targetWords: ["How", "can", "I", "get", "to", "the", "subway", "station?"],
        poolWords: ["can", "get", "subway", "How", "I", "to", "the", "station?", "do", "going"],
        explanation: "How can I get to + สถานที่? เป็นประโยคถามเส้นทางยอดนิยมสากล"
      },
      {
        id: "sb-4-5",
        th: "เลี้ยวซ้ายแล้วตรงไป 200 เมตร",
        targetWords: ["Turn", "left", "and", "go", "straight", "for", "200", "meters."],
        poolWords: ["left", "straight", "200", "Turn", "and", "go", "for", "meters.", "turning", "right"],
        explanation: "Turn left = เลี้ยวซ้าย, go straight = ตรงไป, for [ระยะทาง] = เป็นระยะทาง..."
      }
    ]
  },
  {
    id: "sb-ch5-at-a-cafe",
    chapterNo: 5,
    title: "บทที่ 5: At a Cafe & Restaurant (สั่งอาหารและเครื่องดื่มแบบโปร)",
    subtitle: "A Table for Two — สำนวนสั่งอาหาร เครื่องดื่ม และการเช็กบิลอย่างมั่นใจ",
    coverEmoji: "☕",
    readTime: "7 นาที",
    level: "Survival (A1-A2)",
    category: "Dining & Ordering",
    summary: "เรียนรู้วิธีสั่งอาหารว่าง เบเกอรี่ เครื่องดื่มทั้งร้อนและเย็นอย่างสุภาพ ด้วย 'I'd like these...', 'Could I have a cup of...', และการขอเช็กบิลอย่างมั่นใจ",
    formulas: [
      {
        formula: "I'd like these + [ชื่ออาหารพหูพจน์], please.",
        meaning: "ฉันขอรับ [ชื่ออาหาร] เหล่านี้หน่อยค่ะ/ครับ",
        example: "I'd like these french fries, please.",
        exampleTh: "ฉันขอเฟรนช์ฟรายส์ค่ะ",
        kruDewTip: "อาหารที่เสิร์ฟเป็นชิ้นหรือเป็นจานที่มีหลายชิ้น (เช่น french fries, chicken wings, cookies) ให้ใช้ 'these' ไม่ใช่ 'this'"
      },
      {
        formula: "Could I have a cup of + [เครื่องดื่ม], please?",
        meaning: "ขอกาแฟ/เครื่องดื่ม [ชนิด] สักแก้วได้ไหมครับ",
        example: "Could I have a cup of hot latte, please?",
        exampleTh: "ขอกาแฟลาเต้ร้อนสักแก้วได้ไหมครับ",
        kruDewTip: "Could I have... เป็นการขอร้องที่สุภาพมาก เหมาะใช้กับพนักงานบริการในร้านอาหารและคาเฟ่"
      },
      {
        formula: "Could we get the bill, please?",
        meaning: "ขอเช็กบิล / คิดเงินด้วยครับ",
        example: "Could we get the bill, please?",
        exampleTh: "รบกวนเช็กบิลให้ด้วยครับ",
        kruDewTip: "ในอังกฤษนิยมใช้ 'the bill' ส่วนในอเมริกาจะนิยมใช้ 'the check'"
      }
    ],
    vocabBank: [
      { en: "french fries", th: "เฟรนช์ฟรายส์", pos: "noun" },
      { en: "BBQ chicken wings", th: "ปีกไก่บาร์บีคิว", pos: "noun" },
      { en: "sandwiches", th: "แซนด์วิช", pos: "noun" },
      { en: "nachos", th: "นาโช", pos: "noun" },
      { en: "cupcakes", th: "คัพเค้ก", pos: "noun" },
      { en: "cookies", th: "คุกกี้", pos: "noun" },
      { en: "dumplings", th: "เกี๊ยว", pos: "noun" },
      { en: "hot latte", th: "ลาเต้ร้อน", pos: "noun" },
      { en: "iced Americano", th: "อเมริกาโน่เย็น", pos: "noun" }
    ],
    drills: [
      {
        id: "sb-5-1",
        th: "ฉันขอเฟรนช์ฟรายส์ค่ะ",
        targetWords: ["I", "would", "like", "these", "french", "fries,", "please."],
        poolWords: ["like", "french", "please.", "I", "would", "these", "fries,", "want", "this"],
        explanation: "I would like (I'd like) + these french fries, please. สุภาพกว่าคำว่า I want อย่างมาก"
      },
      {
        id: "sb-5-2",
        th: "ฉันขอปีกไก่บาร์บีคิวค่ะ",
        targetWords: ["I", "would", "like", "these", "BBQ", "chicken", "wings,", "please."],
        poolWords: ["these", "chicken", "please.", "I", "would", "like", "BBQ", "wings,", "this", "wing"],
        explanation: "wings เป็นพหูพจน์จึงใช้ these และลงท้ายด้วย please เพื่อความสุภาพ"
      },
      {
        id: "sb-5-3",
        th: "ขอกาแฟลาเต้ร้อนสักแก้วได้ไหมครับ",
        targetWords: ["Could", "I", "have", "a", "cup", "of", "hot", "latte,", "please?"],
        poolWords: ["have", "cup", "hot", "please?", "Could", "I", "a", "of", "latte,", "glasses", "Can"],
        explanation: "Could I have a cup of + เครื่องดื่มร้อน, please?"
      },
      {
        id: "sb-5-4",
        th: "ขอเช็กบิลด้วยครับ",
        targetWords: ["Could", "we", "get", "the", "bill,", "please?"],
        poolWords: ["get", "bill,", "Could", "we", "the", "please?", "give", "paying"],
        explanation: "Could we get the bill, please? คือคำกล่าวเรียกเก็บเงินมาตรฐานสากล"
      },
      {
        id: "sb-5-5",
        th: "ฉันขอแซนด์วิชและคุกกี้ค่ะ",
        targetWords: ["I", "would", "like", "these", "sandwiches", "and", "cookies,", "please."],
        poolWords: ["these", "and", "please.", "I", "would", "like", "sandwiches", "cookies,", "this", "cookie"],
        explanation: "sandwiches และ cookies เป็นพหูพจน์ เชื่อมด้วย 'and'"
      }
    ]
  },
  {
    id: "sb-ch6-talking-about-jobs",
    chapterNo: 6,
    title: "บทที่ 6: Talking about Jobs & Work (พูดคุยเรื่องอาชีพและที่ทำงาน)",
    subtitle: "Two Jobs at Once — การถามไถ่หน้าที่การงาน บริษัท และตำแหน่งที่ทำ",
    coverEmoji: "💼",
    readTime: "8 นาที",
    level: "Intermediate (B1)",
    category: "Career & Work",
    summary: "เรียนรู้วิธีพูดคุยแลกเปลี่ยนเรื่องการทำงาน ถามว่าใครทำงานที่ไหนด้วย 'Where does she work?', บอกตำแหน่งด้วย 'I work as a...', และหน้าที่รับผิดชอบ 'I am responsible for...'",
    formulas: [
      {
        formula: "Where + do/does + S. + work?",
        meaning: "[ประธาน] ทำงานที่ไหน",
        example: "Where does she work?",
        exampleTh: "เธอทำงานที่ไหน",
        kruDewTip: "ถ้าประธานเป็น He, She, It หรือคนคนเดียว ให้ใช้ does ถ้าประธานเป็น I, You, We, They ให้ใช้ do"
      },
      {
        formula: "S. + works as a/an + [อาชีพ] + at + [บริษัท/สถานที่].",
        meaning: "[ประธาน] ทำงานเป็น [อาชีพ] ที่ [บริษัท]",
        example: "I work as a software engineer at a startup.",
        exampleTh: "ฉันทำงานเป็นวิศวกรซอฟต์แวร์ที่บริษัทสตาร์ตอัป",
        kruDewTip: "work as แปลว่า ทำงานในตำแหน่ง... ส่วน work at/for แปลว่า ทำงานที่บริษัท..."
      }
    ],
    vocabBank: [
      { en: "software engineer", th: "วิศวกรซอฟต์แวร์", pos: "noun" },
      { en: "project manager", th: "ผู้จัดการโครงการ", pos: "noun" },
      { en: "data scientist", th: "นักวิทยาศาสตร์ข้อมูล", pos: "noun" },
      { en: "colleague", th: "เพื่อนร่วมงาน", pos: "noun" },
      { en: "responsible for", th: "รับผิดชอบในหน้าที่", pos: "adjective" },
      { en: "startup", th: "บริษัทสตาร์ตอัป", pos: "noun" },
      { en: "remote office", th: "สำนักงานทำงานทางไกล", pos: "noun" }
    ],
    drills: [
      {
        id: "sb-6-1",
        th: "เธอทำงานที่ไหน",
        targetWords: ["Where", "does", "she", "work?"],
        poolWords: ["she", "Where", "work?", "does", "do", "working"],
        explanation: "ประธาน she เป็นเอกพจน์บุรุษที่ 3 คำถามต้องใช้กริยาช่วย 'does'"
      },
      {
        id: "sb-6-2",
        th: "พ่อของคุณทำงานที่ไหน",
        targetWords: ["Where", "does", "your", "father", "work?"],
        poolWords: ["your", "Where", "work?", "does", "father", "do", "works"],
        explanation: "your father นับเป็นคนคนเดียว (He) จึงต้องใช้ 'does'"
      },
      {
        id: "sb-6-3",
        th: "ฉันทำงานเป็นวิศวกรซอฟต์แวร์ที่บริษัทสตาร์ตอัป",
        targetWords: ["I", "work", "as", "a", "software", "engineer", "at", "a", "startup."],
        poolWords: ["as", "software", "at", "startup.", "I", "work", "a", "engineer", "a", "an", "working"],
        explanation: "work as a [ตำแหน่ง] at a [สถานที่/บริษัท]"
      },
      {
        id: "sb-6-4",
        th: "เขาทำงานเป็นผู้จัดการโครงการ",
        targetWords: ["He", "works", "as", "a", "project", "manager."],
        poolWords: ["as", "project", "He", "manager.", "works", "a", "work", "at"],
        explanation: "ประธาน He กริยา work ต้องเติม -s กลายเป็น 'works as a...'"
      },
      {
        id: "sb-6-5",
        th: "คุณรับผิดชอบหน้าที่อะไรในทีม",
        targetWords: ["What", "are", "you", "responsible", "for", "in", "the", "team?"],
        poolWords: ["you", "for", "the", "What", "are", "responsible", "in", "team?", "do", "response"],
        explanation: "be responsible for + คำนาม/V.ing = มีหน้าที่รับผิดชอบในเรื่อง..."
      }
    ]
  },
  {
    id: "sb-ch7-urgent-tasks-asap",
    chapterNo: 7,
    title: "บทที่ 7: Urgent Tasks & Everyday Chitchat (จัดการเรื่องด่วน ASAP & เม้าท์มอย)",
    subtitle: "Care to Talk? — การบอกว่าจะทำสิ่งต่างๆ ให้เสร็จโดยเร็วที่สุด (ASAP) และเตือนความจำ",
    coverEmoji: "⚡",
    readTime: "8 นาที",
    level: "Intermediate (B1)",
    category: "Productivity & Daily Life",
    summary: "คำว่า ASAP ย่อมาจาก 'As Soon As Possible' นิยมใช้สื่อสารเมื่อต้องการแสดงความกระตือรือร้นและรับผิดชอบว่าจะจัดการเรื่องด่วนให้เสร็จสิ้นโดยเร็วที่สุด",
    formulas: [
      {
        formula: "S. + will + [V.inf] + ASAP.",
        meaning: "[ประธาน] จะ [ทำสิ่งนั้น] ให้เร็วที่สุดเท่าที่จะทำได้",
        example: "I will call you ASAP.",
        exampleTh: "ฉันจะโทรหาคุณให้เร็วที่สุด",
        kruDewTip: "ASAP ย่อมาจาก As Soon As Possible ออกเสียงได้สองแบบคือ เอ-แซป /eɪsæp/ หรือสะกดทีละตัว เอ-เอส-เอ-พี"
      },
      {
        formula: "Don't forget to + [V.inf] before + [V.ing / Noun].",
        meaning: "อย่าลืม [ทำสิ่งนี้] ก่อน [ทำสิ่งนั้น] นะ",
        example: "Don't forget to lock the door before leaving.",
        exampleTh: "อย่าลืมล็อคประตูก่อนออกไปนะ",
        kruDewTip: "หลัง forget to ต้องตามด้วย V.inf (กริยารูปเดิม)"
      }
    ],
    vocabBank: [
      { en: "call you", th: "โทรหาคุณ", pos: "verb" },
      { en: "send the email", th: "ส่งอีเมล", pos: "verb" },
      { en: "pay the bill", th: "จ่ายบิล/ชำระเงิน", pos: "verb" },
      { en: "fix the broken window", th: "ซ่อมหน้าต่างที่พัง", pos: "verb" },
      { en: "organize the closet", th: "จัดระเบียบตู้เสื้อผ้า", pos: "verb" },
      { en: "book a hotel room", th: "จองห้องพักโรงแรม", pos: "verb" }
    ],
    drills: [
      {
        id: "sb-7-1",
        th: "ฉันจะโทรหาคุณให้เร็วที่สุด",
        targetWords: ["I", "will", "call", "you", "ASAP."],
        poolWords: ["call", "ASAP.", "I", "will", "you", "calling", "soon"],
        explanation: "I will call you ASAP = ฉันจะโทรกลับอย่างเร็วที่สุด"
      },
      {
        id: "sb-7-2",
        th: "ฉันจะส่งอีเมลให้เร็วที่สุด",
        targetWords: ["I", "will", "send", "the", "email", "ASAP."],
        poolWords: ["send", "email", "I", "the", "ASAP.", "will", "sending", "to"],
        explanation: "will + send (V.inf) + the email + ASAP"
      },
      {
        id: "sb-7-3",
        th: "แมทธิวจะไปซ่อมหน้าต่างที่พังให้เร็วที่สุด",
        targetWords: ["Matthew", "will", "fix", "the", "broken", "window", "ASAP."],
        poolWords: ["fix", "broken", "ASAP.", "Matthew", "the", "window", "will", "fixes", "repairing"],
        explanation: "broken window = หน้าต่างที่แตก/พัง (broken ทำหน้าที่เป็น adjective ขยาย window)"
      },
      {
        id: "sb-7-4",
        th: "ฉันจะจ่ายบิลให้เร็วที่สุด",
        targetWords: ["I", "will", "pay", "the", "bill", "ASAP."],
        poolWords: ["pay", "bill", "I", "will", "the", "ASAP.", "paying", "paid"],
        explanation: "pay the bill = จ่ายบิลค่าน้ำ ค่าไฟ หรือค่าบริการต่างๆ"
      },
      {
        id: "sb-7-5",
        th: "อย่าลืมตรวจสอบโค้ดก่อนส่งงานนะ",
        targetWords: ["Don't", "forget", "to", "check", "the", "code", "before", "submitting."],
        poolWords: ["forget", "check", "code", "submitting.", "Don't", "to", "the", "before", "remember", "checking"],
        explanation: "Don't forget to + check (V.inf) และหลัง before ตามด้วย V.ing (submitting)"
      }
    ]
  },
  {
    id: "sb-ch8-superlatives-experiences",
    chapterNo: 8,
    title: "บทที่ 8: Unforgettable Experiences (บอกเล่าสิ่งที่ดีที่สุดที่เคยเจอ)",
    subtitle: "The Best Ever — โครงสร้าง The best + Noun + I've ever + V.3 เล่าประสบการณ์ประทับใจ",
    coverEmoji: "🏆",
    readTime: "9 นาที",
    level: "Intermediate (B1)",
    category: "Experiences & Opinions",
    summary: "หนึ่งในโครงสร้างที่เจ้าของภาษาใช้บอกความรู้สึกได้ทรงพลังที่สุด: 'The best [สิ่งของ] I've ever [กริยาช่อง 3] is...' ไว้เล่าหนังที่ชอบที่สุด อาหารที่อร่อยที่สุด หรือเมืองที่ประทับใจที่สุด",
    formulas: [
      {
        formula: "The best [คำนาม] I've ever [V.3] is [ชื่อสิ่งนั้น].",
        meaning: "[คำนาม] ที่ดีที่สุดที่ฉันเคย [ทำกริยานั้น] มาคือ [ชื่อสิ่งนั้น]",
        example: "The best movie I've ever watched is Maleficent.",
        exampleTh: "หนังที่ดีที่สุดที่ฉันเคยดูมาคือมาเลฟิเซนต์",
        kruDewTip: "หลัง have ever ต้องใช้กริยาช่อง 3 (Past Participle) เสมอ เช่น watched, read, eaten, visited"
      },
      {
        formula: "This is the most [Adj] [คำนาม] I have ever seen.",
        meaning: "นี่คือ [คำนาม] ที่ [คุณศัพท์ขั้นสุด] ที่สุดเท่าที่ฉันเคยเห็นมา",
        example: "This is the most beautiful sunset I have ever seen.",
        exampleTh: "นี่คือพระอาทิตย์ตกที่งดงามที่สุดเท่าที่ฉันเคยเห็นมา",
        kruDewTip: "ถ้าคำคุณศัพท์ยาว 2 พยางค์ขึ้นไป ให้ใส่ 'the most' ข้างหน้า"
      }
    ],
    vocabBank: [
      { en: "movie (watched)", th: "ภาพยนตร์ (ที่เคยดู)", pos: "noun" },
      { en: "book (read)", th: "หนังสือ (ที่เคยอ่าน)", pos: "noun" },
      { en: "place (visited)", th: "สถานที่ (ที่เคยไปเยือน)", pos: "noun" },
      { en: "food (eaten)", th: "อาหาร (ที่เคยกิน)", pos: "noun" },
      { en: "concert (attended)", th: "คอนเสิร์ต (ที่เคยเข้าร่วม)", pos: "noun" }
    ],
    drills: [
      {
        id: "sb-8-1",
        th: "หนังที่ดีที่สุดที่เคยดูมาคือมาเลฟิเซนต์",
        targetWords: ["The", "best", "movie", "I", "have", "ever", "watched", "is", "Maleficent."],
        poolWords: ["best", "I", "ever", "is", "The", "movie", "have", "watched", "Maleficent.", "saw", "was"],
        explanation: "The best movie I have ever watched is [ชื่อหนัง]"
      },
      {
        id: "sb-8-2",
        th: "หนังสือที่ดีที่สุดที่ฉันเคยอ่านคือแฮร์รี่ พอตเตอร์",
        targetWords: ["The", "best", "book", "I", "have", "ever", "read", "is", "Harry", "Potter."],
        poolWords: ["best", "I", "ever", "is", "Potter.", "The", "book", "have", "read", "Harry", "reading", "was"],
        explanation: "กริยา read ช่อง 3 สะกดเหมือนเดิม (read) แต่ออกเสียงว่า /red/ (เรด)"
      },
      {
        id: "sb-8-3",
        th: "เมืองที่สวยที่สุดที่ฉันเคยไปคือปารีส",
        targetWords: ["The", "most", "beautiful", "city", "I", "have", "ever", "visited", "is", "Paris."],
        poolWords: ["most", "city", "ever", "is", "The", "beautiful", "I", "have", "visited", "Paris.", "visiting", "more"],
        explanation: "The most beautiful city I have ever visited is Paris."
      },
      {
        id: "sb-8-4",
        th: "นี่คืออาหารที่อร่อยที่สุดที่ฉันเคยกินมา",
        targetWords: ["This", "is", "the", "most", "delicious", "food", "I", "have", "ever", "eaten."],
        poolWords: ["is", "most", "food", "have", "eaten.", "This", "the", "delicious", "I", "ever", "ate", "eating"],
        explanation: "delicious ใช้ขั้นสุดเป็น the most delicious, และกินช่อง 3 คือ eaten"
      },
      {
        id: "sb-8-5",
        th: "คอนเสิร์ตที่ดีที่สุดที่ฉันเคยไปคือโคลด์เพลย์",
        targetWords: ["The", "best", "concert", "I", "have", "ever", "attended", "is", "Coldplay."],
        poolWords: ["best", "I", "ever", "is", "The", "concert", "have", "attended", "Coldplay.", "went", "attend"],
        explanation: "attend a concert แปลว่า ไปร่วมชมคอนเสิร์ต (V.3 = attended)"
      }
    ]
  },
  {
    id: "sb-ch9-conditional-plans",
    chapterNo: 9,
    title: "บทที่ 9: What If? (ถ้า...จะทำ... เงื่อนไขและแผนสำรอง)",
    subtitle: "Plans for the Weekend — First Conditional สำหรับพูดคุยแผนการและเงื่อนไข",
    coverEmoji: "🔮",
    readTime: "8 นาที",
    level: "Intermediate (B1)",
    category: "Conditionals & Planning",
    summary: "เรียนรู้วิธีวางแผนแบบมีเงื่อนไขในชีวิตจริงด้วย First Conditional (If + Present Simple, will + V.inf) ทั้งกรณีที่สภาพอากาศเปลี่ยน หรือเวลาว่างตรงกัน",
    formulas: [
      {
        formula: "If + S. + V.1 (s/es), S. + will + [V.inf].",
        meaning: "ถ้า [เงื่อนไขเกิดขึ้น], [ประธาน] จะ [ทำผลลัพธ์นั้น]",
        example: "If Lily is free this weekend, she will go shopping.",
        exampleTh: "ถ้าสุดสัปดาห์นี้ลิลลี่ว่าง หล่อนคงไปชอปปิง",
        kruDewTip: "หลัง If เป็น Present Simple (ห้ามใส่ will หลัง if เด็ดขาด!) ส่วนประโยคหลักถึงจะใช้ will + V.inf"
      }
    ],
    vocabBank: [
      { en: "free this weekend", th: "ว่างในสุดสัปดาห์นี้", pos: "phrase" },
      { en: "rains tomorrow", th: "ฝนตกในวันพรุ่งนี้", pos: "phrase" },
      { en: "finishes work early", th: "เลิกงานเร็ว", pos: "phrase" },
      { en: "go bowling", th: "ไปเล่นโบว์ลิ่ง", pos: "verb" },
      { en: "stay at home", th: "อยู่บ้าน", pos: "verb" },
      { en: "join us for dinner", th: "มาร่วมทานมื้อเย็นกับพวกเรา", pos: "phrase" }
    ],
    drills: [
      {
        id: "sb-9-1",
        th: "ถ้าสุดสัปดาห์นี้ลิลลี่ว่าง หล่อนคงไปชอปปิง",
        targetWords: ["If", "Lily", "is", "free", "this", "weekend,", "she", "will", "go", "shopping."],
        poolWords: ["Lily", "free", "weekend,", "will", "shopping.", "If", "is", "this", "she", "go", "goes", "would"],
        explanation: "If + Lily is free (Present), she will go shopping (Future)"
      },
      {
        id: "sb-9-2",
        th: "ถ้าสุดสัปดาห์นี้พวกเราว่าง พวกเราจะไปเล่นโบว์ลิ่ง",
        targetWords: ["If", "we", "are", "free", "this", "weekend,", "we", "will", "go", "bowling."],
        poolWords: ["we", "free", "weekend,", "will", "bowling.", "If", "are", "this", "we", "go", "is", "went"],
        explanation: "ประธาน we ใช้กับ 'are free'"
      },
      {
        id: "sb-9-3",
        th: "ถ้าพรุ่งนี้ฝนตก พวกเราจะอยู่บ้าน",
        targetWords: ["If", "it", "rains", "tomorrow,", "we", "will", "stay", "at", "home."],
        poolWords: ["it", "tomorrow,", "will", "at", "home.", "If", "rains", "we", "stay", "rain", "staying"],
        explanation: "หลัง If it rains (กริยา rain เติม -s เมื่อประธานคือ it)"
      },
      {
        id: "sb-9-4",
        th: "ถ้าเขาเลิกงานเร็ว เขาจะมาทานมื้อเย็นกับเรา",
        targetWords: ["If", "he", "finishes", "work", "early,", "he", "will", "join", "us", "for", "dinner."],
        poolWords: ["he", "work", "he", "join", "for", "dinner.", "If", "finishes", "early,", "will", "us", "finish", "joins"],
        explanation: "finishes work early (ประธาน he กริยาลงท้าย -sh จึงเติม -es)"
      },
      {
        id: "sb-9-5",
        th: "ถ้าคุณต้องการความช่วยเหลือ กรุณาบอกฉันนะ",
        targetWords: ["If", "you", "need", "any", "help,", "please", "let", "me", "know."],
        poolWords: ["you", "any", "please", "me", "know.", "If", "need", "help,", "let", "needs", "telling"],
        explanation: "let me know เป็นสำนวนสุภาพแปลว่า บอกให้ฉันทราบ/แจ้งให้ฉันรู้"
      }
    ]
  },
  {
    id: "sb-ch10-polite-requests",
    chapterNo: 10,
    title: "บทที่ 10: Polite Requests & Inquiries (ขอร้องและถามอย่างสุภาพระดับโปร)",
    subtitle: "Could You Help Me Out? — การใช้ Would you mind + V.ing และ Indirect Questions สื่อสารอย่างมืออาชีพ",
    coverEmoji: "✨",
    readTime: "8 นาที",
    level: "Upper Intermediate (B1+)",
    category: "Polite Communication",
    summary: "ยกระดับภาษาอังกฤษสู่ระดับมืออาชีพ ด้วยสำนวนขอร้องนุ่มนวล 'Would you mind + V.ing...?' และการถามข้อมูลอ้อมๆ 'Could you please tell me where the file is?' ไม่ขวานผ่าซาก",
    formulas: [
      {
        formula: "Would you mind + [V.ing]...?",
        meaning: "คุณจะรังเกียจไหมถ้าจะรบกวนช่วย [ทำสิ่งนั้น]",
        example: "Would you mind opening the window?",
        exampleTh: "คุณจะรังเกียจไหมถ้าจะช่วยเปิดหน้าต่างให้หน่อย",
        kruDewTip: "กฎเหล็ก: หลัง Would you mind ต้องตามด้วย V.ing เสมอ! และถ้าตอบตกลงช่วย ให้ตอบว่า 'No, not at all.' (ไม่รังเกียจเลย ยินดีช่วย)"
      },
      {
        formula: "Could you please tell me where + [ประธาน] + is/are?",
        meaning: "รบกวนบอกฉันหน่อยได้ไหมว่า [สิ่งนั้น/สถานที่นั้น] อยู่ที่ไหน",
        example: "Could you please tell me where the file is?",
        exampleTh: "รบกวนบอกฉันหน่อยได้ไหมว่าไฟล์อยู่ที่ไหน",
        kruDewTip: "Indirect Question: หลัง where ต้องเรียงประธานมาก่อนกริยา (the file is) ห้ามนำ is ขึ้นหน้า the file!"
      }
    ],
    vocabBank: [
      { en: "opening the window", th: "เปิดหน้าต่าง", pos: "phrase" },
      { en: "explaining this again", th: "อธิบายเรื่องนี้อีกครั้ง", pos: "phrase" },
      { en: "waiting for a moment", th: "รอสักครู่หนึ่ง", pos: "phrase" },
      { en: "sending the report", th: "ส่งรายงาน", pos: "phrase" },
      { en: "lowering the volume", th: "เบาเสียงลงหน่อย", pos: "phrase" }
    ],
    drills: [
      {
        id: "sb-10-1",
        th: "คุณจะรังเกียจไหมถ้าจะเปิดหน้าต่างให้หน่อย",
        targetWords: ["Would", "you", "mind", "opening", "the", "window?"],
        poolWords: ["you", "opening", "window?", "Would", "mind", "the", "open", "to"],
        explanation: "Would you mind + V.ing (opening the window) สำนวนขอร้องสุภาพขั้นสูงสุด"
      },
      {
        id: "sb-10-2",
        th: "คุณจะรังเกียจไหมถ้าจะอธิบายเรื่องนี้อีกครั้ง",
        targetWords: ["Would", "you", "mind", "explaining", "this", "again?"],
        poolWords: ["you", "explaining", "again?", "Would", "mind", "this", "explain", "to"],
        explanation: "Would you mind + explaining (V.ing) this again?"
      },
      {
        id: "sb-10-3",
        th: "รบกวนบอกฉันหน่อยได้ไหมว่าไฟล์อยู่ที่ไหน",
        targetWords: ["Could", "you", "please", "tell", "me", "where", "the", "file", "is?"],
        poolWords: ["you", "tell", "where", "file", "is?", "Could", "please", "me", "the", "is", "where"],
        explanation: "Indirect Question: where the file is (ประธาน the file มาก่อน is ห้ามเขียน where is the file)"
      },
      {
        id: "sb-10-4",
        th: "คุณจะรังเกียจไหมถ้าจะรอสักครู่",
        targetWords: ["Would", "you", "mind", "waiting", "for", "a", "moment?"],
        poolWords: ["you", "waiting", "a", "moment?", "Would", "mind", "for", "wait", "to"],
        explanation: "waiting for a moment = รอสักครู่หนึ่ง (ตามหลัง Would you mind ต้องเป็น V.ing)"
      },
      {
        id: "sb-10-5",
        th: "คุณช่วยส่งรายงานให้ฉันทางอีเมลได้ไหมครับ",
        targetWords: ["Could", "you", "please", "send", "the", "report", "to", "my", "email?"],
        poolWords: ["you", "send", "report", "my", "email?", "Could", "please", "the", "to", "sending", "for"],
        explanation: "Could you please + send (V.inf) the report to my email?"
      }
    ]
  }
];

