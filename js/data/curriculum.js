/**
 * EngMastery: Zero to Pro - Comprehensive Curriculum Data
 * Designed by Senior Instructional Designer & Linguist
 * CEFR Levels: A1-A2 (Foundation), B1 (Intermediate), B2 (Professional), C1-C2 (Executive Mastery)
 */
window.CURRICULUM_DATA = [
  // =========================================================================
  // LEVEL 1: FOUNDATION (A1-A2) - ก้าวแรกสู่ความมั่นใจ
  // =========================================================================
  {
    id: "lesson-1",
    level: "A1_A2",
    levelBadge: "A1-A2",
    levelTitle: "Foundation: Zero to Basic",
    title: "ถอดรหัสการออกเสียง Phonics & IPA ที่คนไทยมักสับสน",
    titleEn: "Mastering English Phonics, IPA & Tricky Sounds",
    icon: "volume-2",
    duration: "20 นาที",
    xp: 50,
    summary: "ปูพื้นฐานการออกเสียงภาษาอังกฤษตั้งแต่ระดับอะตอม แก้จุดตายเรื่องเสียงท้ายคำ (Ending Sounds), เสียง TH, R vs L และกฎการออกเสียง -ed",
    theory: [
      {
        heading: "1. ทำไมคนไทยถึงพูดแล้วฝรั่งไม่เข้าใจ? (The Ending Sound Secret)",
        explanation: "ภาษาไทยเป็นภาษาที่ 'ตัดเสียงท้าย' (No final explosion) เช่น คำว่า 'บัตร' เราไม่ออกเสียง ต แต่ภาษาอังกฤษ 'เสียงท้ายคำกำหนดความหมาย' หากไม่พูดเสียงท้าย ฝรั่งจะฟังเป็นคำอื่นทันที!",
        examples: [
          { en: "Wife vs White vs Wine", ipa: "/waɪf/ vs /waɪt/ vs /waɪn/", th: "ภรรยา (จบด้วยเสียง F) vs สีขาว (จบด้วยเสียง T) vs ไวน์ (จบด้วยเสียง N)", note: "ห้ามตัดเสียงท้ายเด็ดขาด" },
          { en: "Rice vs Right vs Ride", ipa: "/raɪs/ vs /raɪt/ vs /raɪd/", th: "ข้าว (จบด้วย S) vs ถูกต้อง (จบด้วย T) vs ขี่ (จบด้วย D)", note: "ฝึกเน้นเสียงท้ายเบา ๆ เพื่อความชัดเจน" }
        ],
        proTip: "💡 Pro Tip: ให้จินตนาการว่าเสียงพยัญชนะท้ายคำคือ 'ตัวสะกดที่มีลมระบายออกมา' ลองฝึกพ่นลม /s/, /t/, /d/, /k/ เบา ๆ เสมอ"
      },
      {
        heading: "2. เสียง TH (/θ/ และ /ð/) ลิ้นแตะฟันหน้า ไม่ใช่ ด หรือ ซ",
        explanation: "เสียง TH ไม่มีในภาษาไทย! หากออกเป็น 'แต๊งกิ้ว' (T sound) ฝรั่งอาจได้ยินเป็น 'Tank you' (ยิงรถถังใส่คุณ). วิธีออกเสียงที่ถูกต้อง: แลบปลายลิ้นออกมาระหว่างฟันบนและฟันล่าง แล้วพ่นลมผ่านลิ้น",
        examples: [
          { en: "Thank you so much", ipa: "/θæŋk juː səʊ mʌtʃ/", th: "ขอบคุณมากครับ/ค่ะ (เสียงไร้เสียง - Voiceless TH)", note: "เอาลิ้นแตะฟันหน้าแล้วพ่นลม" },
          { en: "This, That, These, Those", ipa: "/ðɪs/, /ðæt/, /ðiːz/, /ðəʊz/", th: "สิ่งนี้, สิ่งนั้น, สิ่งเหล่านี้, สิ่งเหล่านั้น (เสียงก้อง - Voiced TH)", note: "กล่องเสียงสั่นตอนแลบลิ้น" }
        ],
        proTip: "🎯 Quick Rule: ถ้าเป็นคำบอกตำแหน่งหรือสรรพนาม (The, This, That, They) จะเป็นเสียงก้อง /ð/ นอกนั้นมักเป็นเสียงพ่นลม /θ/ เช่น Think, Three, Thank"
      },
      {
        heading: "3. กฎทอง 3 ข้อของการออกเสียงกริยาลงท้าย -ED",
        explanation: "คนไทยกว่า 80% มักออกเสียง -ed เป็น 'เอ็ด' ทุกคำ (เช่น walk-ed เป็น 'วอล์ค-เอ็ด' ซึ่งผิด!). ในความเป็นจริง -ed ออกเสียงได้ 3 แบบตามเสียงลงท้ายของกริยาช่อง 1:",
        examples: [
          { en: "Wanted / Needed", ipa: "/ˈwɒn.tɪd/ , /ˈniː.dɪd/", th: "ออกเสียง /ɪd/ (อิด) เฉพาะเมื่อลงท้ายด้วยเสียง T หรือ D เท่านั้น", note: "want -> wanted, need -> needed" },
          { en: "Walked / Watched / Kissed", ipa: "/wɔːkt/ , /wɒtʃt/ , /kɪst/", th: "ออกเสียงเป็นลม /t/ เมื่อลงท้ายด้วยเสียงไม่ก้อง (k, p, s, sh, ch, f)", note: "ห้ามอ่าน วอล์ค-เอ็ด เด็ดขาด ให้อ่าน 'วอล์คท'" },
          { en: "Played / Cleaned / Loved", ipa: "/pleɪd/ , /kliːnd/ , /lʌvd/", th: "ออกเสียงเป็นเสียง /d/ ก้องในลำคอ สำหรับเสียงสระและเสียงก้องอื่น ๆ", note: "อ่าน 'เพลด' ต่อเนื่อง ไม่ใช่ เพล-เอ็ด" }
        ]
      }
    ],
    dialogue: {
      scenario: "At the Language Coaching Clinic: Practicing natural accents",
      speakers: [
        { role: "Coach", name: "Sarah (Instructor)", text: "Remember to put your tongue between your teeth for 'Think'. Don't say 'Tink'!", th: "อย่าลืมวางปลายลิ้นไว้ระหว่างฟันบนล่างสำหรับคำว่า 'Think' นะคะ อย่าพูดว่า 'Tink'!", avatar: "👩‍🏫" },
        { role: "Learner", name: "Korn (Student)", text: "I think I get it now! I thought it was difficult.", th: "ผมคิดว่าผมเข้าใจแล้วครับ! ตอนแรกผมนึกว่ามันยากซะอีก", avatar: "🧑‍🎓" },
        { role: "Coach", name: "Sarah (Instructor)", text: "Brilliant! Your pronunciation is already sounding so crisp and natural.", th: "ยอดเยี่ยมมากค่ะ! การออกเสียงของคุณฟังดูชัดเจนและเป็นธรรมชาติขึ้นมากเลยค่ะ", avatar: "👩‍🏫" }
      ]
    },
    practice: [
      {
        id: "q1-1",
        type: "multiple-choice",
        question: "คำว่า 'Decided' (ตัดสินใจแล้ว) ส่วนท้าย '-ed' ควรออกเสียงอย่างไร?",
        options: ["ออกเสียงเป็น /t/ สั้น ๆ", "ออกเสียงเป็น /ɪd/ (อิด)", "ออกเสียงเป็น /d/ สั่นในคอ", "ไม่ออกเสียง"],
        answer: 1,
        explanation: "ถูกต้อง! คำว่า Decide ลงท้ายด้วยเสียง /d/ ดังนั้นเมื่อเติม -ed จึงต้องเพิ่มพยางค์เป็นเสียง /ɪd/ (ดิ-ไซ-ดิด)"
      },
      {
        id: "q1-2",
        type: "unscramble",
        question: "เรียงประโยคเพื่อฝึกการใช้คำว่า Thank you และ appreciate:",
        words: ["I", "really", "appreciate", "your", "kind", "help"],
        answer: "I really appreciate your kind help",
        explanation: "ประโยคที่ถูกต้องคือ 'I really appreciate your kind help' (ฉันซาบซึ้งในความช่วยเหลืออันมีน้ำใจของคุณมากจริง ๆ)"
      },
      {
        id: "q1-3",
        type: "speaking",
        question: "ฝึกพูดประโยคนี้ออกเสียงชัด ๆ (แตะไมค์แล้วพูด):",
        targetText: "Thank you for this wonderful opportunity",
        explanation: "ฝึกออกเสียง Th ใน Thank และ This พร้อมทั้งเน้นเสียงท้ายคำใน wonderful และ opportunity"
      }
    ]
  },

  {
    id: "lesson-2",
    level: "A1_A2",
    levelBadge: "A1-A2",
    levelTitle: "Foundation: Zero to Basic",
    title: "ไวยากรณ์โครงสร้างหลัก: Present Simple vs Present Continuous",
    titleEn: "Grammar Core: Daily Routine vs Happening Right Now",
    icon: "book-open",
    duration: "25 นาที",
    xp: 50,
    summary: "เคลียร์ให้ขาดระหว่าง 'สิ่งที่ทำเป็นประจำ' (Present Simple) กับ 'สิ่งที่กำลังทำอยู่ตอนนี้' (Present Continuous) พร้อมการใช้ Verb to Be อย่างถูกต้อง",
    theory: [
      {
        heading: "1. Present Simple: ใช้กับความจริง กิจวัตร นิสัย (Facts & Habits)",
        explanation: "โครงสร้างคือ `Subject + Verb(s/es)`. ข้อผิดพลาดอันดับ 1 ของคนไทยคือลืมผัน s/es เมื่อประธานเป็น He / She / It หรือคำนามเอกพจน์คนเดียว",
        examples: [
          { en: "She drinks coffee every morning.", ipa: "/ʃiː drɪŋks ˈkɒf.i ˈev.ri ˈmɔː.nɪŋ/", th: "เธอดื่มกาแฟทุก ๆ เช้า (เป็นกิจวัตร สังเกต drinks มี s)", note: "He / She / It + กริยาเติม s/es" },
          { en: "They work remotely on Fridays.", ipa: "/ðeɪ wɜːk rɪˈməʊt.li ɒn ˈfraɪ.deɪz/", th: "พวกเขาทำงานจากที่บ้านในวันศุกร์ (พหูพจน์ ไม่ต้องเติม s)", note: "I / You / We / They + กริยาช่อง 1 ปกติ" }
        ],
        proTip: "⚠️ Warning: ห้ามใส่ Verb to Be (is/am/are) หน้ากริยาแท้ เช่น 'She is drink coffee' ผิด 100%! เลือกใช้อย่างใดอย่างหนึ่งเท่านั้น"
      },
      {
        heading: "2. Present Continuous: กำลังทำอยู่ในขณะนี้ (Right Now)",
        explanation: "โครงสร้างคือ `Subject + is/am/are + Verb-ing`. ใช้เมื่อมีคำบอกเวลาชัดเจน เช่น now, right now, at the moment หรือมีเหตุการณ์เกิดขึ้นตรงหน้า",
        examples: [
          { en: "I am preparing the presentation right now.", ipa: "/aɪ æm prɪˈpeə.rɪŋ ðə ˌprez.ənˈteɪ.ʃən raɪt naʊ/", th: "ฉันกำลังเตรียมสไลด์พรีเซนต์อยู่ตอนนี้เลย", note: "Subject + am + V-ing" },
          { en: "He is talking on the phone at the moment.", ipa: "/hiː ɪz ˈtɔː.kɪŋ ɒn ðə fəʊn æt ðə ˈməʊ.mənt/", th: "ตอนนี้เขากำลังคุยโทรศัพท์อยู่", note: "Subject + is + V-ing" }
        ]
      },
      {
        heading: "3. ข้อควรระวัง: Stative Verbs (กริยาบอกสภาวะ ห้ามเติม -ing)",
        explanation: "กริยาที่แสดงความรู้สึก อารมณ์ ความนึกคิด หรือการรับรู้ จะไม่ใช้ในรูป Continuous แม้จะเกิดในตอนนี้ก็ตาม เช่น want, need, know, understand, believe, love",
        examples: [
          { en: "I understand the concept now. (NOT: I am understanding)", ipa: "/aɪ ˌʌn.dəˈstænd ðə ˈkɒn.sept naʊ/", th: "ตอนนี้ฉันเข้าใจแนวคิดนี้แล้ว (ห้ามใช้ am understanding)", note: "understand เป็น stative verb" },
          { en: "She wants a cup of tea. (NOT: She is wanting)", ipa: "/ʃiː wɒnts ə kʌp əv tiː/", th: "เธอต้องการชาสักถ้วย (ห้ามใช้ is wanting)", note: "want เป็น stative verb" }
        ]
      }
    ],
    dialogue: {
      scenario: "Co-workers checking in at lunchtime",
      speakers: [
        { role: "Colleague A", name: "David", text: "Hey Anna, do you usually eat lunch at your desk?", th: "เฮ้แอนนา ปกติคุณทานข้าวเที่ยงที่โต๊ะทำงานเหรอ?", avatar: "👨‍💻" },
        { role: "Colleague B", name: "Anna", text: "No, but I'm rushing today because I am finishing an urgent report.", th: "ปกติไม่นะ แต่แต่วันนี้ฉันรีบมากเพราะกำลังปั่นรายงานด่วนอยู่น่ะ", avatar: "👩‍💼" },
        { role: "Colleague A", name: "David", text: "Got it! Take your time, let me know if you need any help.", th: "เข้าใจเลย! ค่อย ๆ ทำนะ บอกฉันได้เลยถ้าต้องการความช่วยเหลือ", avatar: "👨‍💻" }
      ]
    },
    practice: [
      {
        id: "q2-1",
        type: "multiple-choice",
        question: "ประโยคใดถูกต้องตามหลักไวยากรณ์?",
        options: [
          "He is drink coffee every day.",
          "He drinks coffee every day.",
          "He drinking coffee every day.",
          "He is drinks coffee every day."
        ],
        answer: 1,
        explanation: "ถูกต้อง! 'He drinks coffee every day' เพราะเป็นกิจวัตร (Present Simple) ประธาน He กริยาต้องเติม s และไม่ต้องใส่ is"
      },
      {
        id: "q2-2",
        type: "unscramble",
        question: "เรียงประโยคที่กำลังเกิดขึ้น ณ ขณะนี้:",
        words: ["We", "are", "currently", "working", "on", "the", "new", "design"],
        answer: "We are currently working on the new design",
        explanation: "ประโยคที่ถูกต้องคือ 'We are currently working on the new design' (พวกเรากำลังทำงานกับดีไซน์ใหม่อยู่ในขณะนี้)"
      },
      {
        id: "q2-3",
        type: "speaking",
        question: "ฝึกพูดประโยคแสดงกิจวัตรประจำวัน:",
        targetText: "She works efficiently under pressure",
        explanation: "ฝึกเชื่อมเสียง works-efficiently และเน้นเสียง under pressure"
      }
    ]
  },

  {
    id: "lesson-3",
    level: "A1_A2",
    levelBadge: "A1-A2",
    levelTitle: "Foundation: Zero to Basic",
    title: "ภาษาอังกฤษเอาชีวิตรอด: ทักทาย สั่งอาหาร ซื้อของ ถามทาง",
    titleEn: "Real-Life Survival English: Ordering, Shopping & Directions",
    icon: "coffee",
    duration: "25 นาที",
    xp: 50,
    summary: "รวมบทสนทนาสถานการณ์จริงที่ทุกคนต้องเจอ เลิกพูด 'Can I have...' แบบเกร็ง ๆ สู่การใช้ประโยคสุภาพ เป็นธรรมชาติ ดั่งเจ้าของภาษา",
    theory: [
      {
        heading: "1. สั่งกาแฟและอาหารอย่างมั่นใจ (The Cafe & Restaurant Formula)",
        explanation: "แทนที่จะพูดว่า 'I want...' (ซึ่งฟังดูห้วนเกินไป) เจ้าของภาษานิยมใช้ 3 รูปประโยคนี้เพื่อความสุภาพแต่เป็นกันเอง:",
        examples: [
          { en: "Could I get an iced Americano with oat milk, please?", ipa: "/kʊd aɪ ɡet ən aɪst əˌmer.ɪˈkɑː.nəʊ wɪð əʊt mɪlk pliːz/", th: "ขอกาแฟอเมริกาโน่เย็นใส่นมโอ๊ตหนึ่งแก้วครับ/ค่ะ", note: "สุภาพและใช้ได้ทั่วโลก" },
          { en: "Can I get this for takeaway / to go?", ipa: "/kæn aɪ ɡet ðɪs fɔː ˈteɪk.ə.weɪ / tuː ɡəʊ/", th: "อันนี้ขอสั่งกลับบ้านได้ไหมครับ/ค่ะ? (to go นิยมในอเมริกา, takeaway นิยมในอังกฤษ/ออสเตรเลีย)", note: "to go vs takeaway" },
          { en: "Could we have the bill / check, please?", ipa: "/kʊd wiː hæv ðə bɪl / tʃek pliːz/", th: "ขอเช็คบิล/เก็บเงินด้วยครับ (Bill นิยมใน UK, Check นิยมใน US)", note: "เรียกเก็บเงินอย่างสุภาพ" }
        ],
        proTip: "💡 Culture Hack: คนตะวันตกให้ความสำคัญกับคำว่า 'Please' และ 'Thank you' มาก เติมท้ายประโยคเสมอแล้วพนักงานจะยิ้มแย้มบริการคุณเป็นพิเศษ"
      },
      {
        heading: "2. ถามทางอย่างโปร (Asking for Directions Without Panic)",
        explanation: "เริ่มด้วย 'Excuse me' เสมอ จากนั้นใช้คำถามทางอ้อม (Indirect Question) เพื่อความนุ่มนวลและสุภาพขั้นสูงสุด",
        examples: [
          { en: "Excuse me, do you know where the nearest subway station is?", ipa: "/ɪkˈskjuːz miː, duː juː nəʊ weər ðə ˈnɪə.rɪst ˈsʌb.weɪ ˈsteɪ.ʃən ɪz/", th: "ขอโทษนะคะ/ครับ คุณพอจะทราบไหมว่าสถานีรถไฟใต้ดินที่ใกล้ที่สุดอยู่ตรงไหน?", note: "สังเกต: is อยู่ท้ายประโยค" },
          { en: "Is it within walking distance?", ipa: "/ɪz ɪt wɪˈðɪn ˈwɔː.kɪŋ ˈdɪs.təns/", th: "มันอยู่ในระยะที่เดินไปถึงได้ไหมครับ/ค่ะ?", note: "วลียอดฮิตเวลาไปเที่ยวต่างประเทศ" }
        ]
      }
    ],
    dialogue: {
      scenario: "Ordering specialty coffee in downtown Seattle",
      speakers: [
        { role: "Barista", name: "Tyler", text: "Hi there! What can I get started for you today?", th: "สวัสดีครับ วันนี้รับอะไรดีครับ?", avatar: "☕" },
        { role: "Customer", name: "Mint", text: "Hi! Could I please get a hot latte with almond milk and an extra shot?", th: "สวัสดีค่ะ ขอนมร้อนลาเต้ใส่นมอัลมอนด์แล้วเพิ่มช็อตกาแฟ 1 ช็อตค่ะ", avatar: "👩" },
        { role: "Barista", name: "Tyler", text: "You got it! Would you like that for here or to go?", th: "ได้เลยครับ! ทานที่นี่หรือรับกลับบ้านดีครับ?", avatar: "☕" },
        { role: "Customer", name: "Mint", text: "To go, please. And can I pay with contactless?", th: "รับกลับค่ะ แล้วสแกนจ่ายแตะบัตรได้ไหมคะ?", avatar: "👩" }
      ]
    },
    practice: [
      {
        id: "q3-1",
        type: "multiple-choice",
        question: "หากต้องการสั่งอาหารกลับบ้านในร้านอาหารสไตล์อเมริกัน ควรพูดว่าอย่างไร?",
        options: [
          "I want bring home food.",
          "Could I get this to go, please?",
          "Give me food takeaway immediately.",
          "I will take home now."
        ],
        answer: 1,
        explanation: "ถูกต้อง! 'Could I get this to go, please?' เป็นประโยคที่เป็นธรรมชาติ สุภาพ และใช้กันแพร่หลายที่สุด"
      },
      {
        id: "q3-2",
        type: "unscramble",
        question: "เรียงประโยคขอเรียกเก็บเงินอย่างสุภาพ:",
        words: ["Could", "we", "please", "have", "the", "bill", "when", "you", "are", "ready"],
        answer: "Could we please have the bill when you are ready",
        explanation: "ประโยคที่ถูกต้องคือ 'Could we please have the bill when you are ready' (เมื่อคุณสะดวกแล้ว ขอรบกวนเช็คบิลหน่อยนะครับ/ค่ะ)"
      },
      {
        id: "q3-3",
        type: "speaking",
        question: "ฝึกพูดประโยคถามทาง:",
        targetText: "Excuse me, is this within walking distance?",
        explanation: "ออกเสียง Excuse me นุ่มนวล และเน้นคำว่า walking distance"
      }
    ]
  },

  {
    id: "lesson-4",
    level: "A1_A2",
    levelBadge: "A1-A2",
    levelTitle: "Foundation: Zero to Basic",
    title: "เทคนิคตั้งคำถามให้คล่องปาก: WH-Questions & Yes/No Questions",
    titleEn: "Effortless Question Formations: WH & Inversion",
    icon: "help-circle",
    duration: "20 นาที",
    xp: 50,
    summary: "เลิกนิ่งเงียบเวลาฝรั่งถาม! ฝึกสร้างคำถามด้วยสูตร Q-A-S-V (Question word - Auxiliary verb - Subject - Main Verb) พูดได้ไหลลื่นไม่มีสะดุด",
    theory: [
      {
        heading: "1. กฎทองสูตรลับ: Q - A - S - V",
        explanation: "ในการสร้างคำถามภาษาอังกฤษแทบทุกชนิด ให้จำตัวย่อ 'Q-A-S-V':\n• Q = Question Word (What, Where, When, Why, How)\n• A = Auxiliary Verb (do, does, did, is, am, are, can, will)\n• S = Subject (ประธาน: you, he, they, this product)\n• V = Main Verb (กริยาหลักรูปเดิม)",
        examples: [
          { en: "Where (Q) do (A) you (S) work (V)?", ipa: "/weər duː juː wɜːk/", th: "คุณทำงานที่ไหน?", note: "Present Simple สำหรับบุคคลทั่วไป" },
          { en: "How long (Q) did (A) it (S) take (V)?", ipa: "/haʊ lɒŋ dɪd ɪt teɪk/", th: "มันใช้เวลานานเท่าไหร่? (เป็นอดีต ใช้ did)", note: "Past Simple" },
          { en: "What time (Q) does (A) the flight (S) leave (V)?", ipa: "/wɒt taɪm dʌz ðə flaɪt liːv/", th: "เที่ยวบินออกเดินทางตอนกี่โมง?", note: "flight เอกพจน์ ใช้ does" }
        ]
      },
      {
        heading: "2. How + Adjective/Adverb: คำถามยอดฮิตวัดระดับปริมาณและระยะทาง",
        explanation: "คำว่า 'How' พอจับคู่กับคำขยายจะแปลงเป็นคำถามได้สารพัดรูปแบบที่คนทำงานต้องใช้ประจำ:",
        examples: [
          { en: "How often do you travel abroad?", ipa: "/haʊ ˈɒf.ən duː juː ˈtræv.əl əˈbrɔːd/", th: "คุณเดินทางไปต่างประเทศบ่อยแค่ไหน?", note: "ถามความถี่" },
          { en: "How much does it cost?", ipa: "/haʊ mʌtʃ dʌz ɪt kɒst/", th: "ราคาเท่าไหร่?", note: "ถามราคา" },
          { en: "How far is it from here?", ipa: "/haʊ fɑːr ɪz ɪt frɒm hɪər/", th: "จากตรงนี้ไปไกลแค่ไหน?", note: "ถามระยะทาง" }
        ]
      }
    ],
    dialogue: {
      scenario: "Networking chat at an international meetup",
      speakers: [
        { role: "Networker A", name: "Liam", text: "Nice to meet you! How long have you lived in Bangkok?", th: "ยินดีที่ได้รู้จักครับ! คุณอาศัยอยู่ในกรุงเทพฯ มานานแค่ไหนแล้วครับ?", avatar: "🧔" },
        { role: "Networker B", name: "Ploy", text: "Nice to meet you too! I've been here for about three years now. Where are you from originally?", th: "ยินดีที่ได้รู้จักเช่นกันค่ะ! ฉันอยู่ที่นี่มาได้ราว ๆ 3 ปีแล้วค่ะ แล้วคุณมาจากประเทศอะไรเหรอคะ?", avatar: "👩‍💼" }
      ]
    },
    practice: [
      {
        id: "q4-1",
        type: "multiple-choice",
        question: "ข้อใดคือการตั้งคำถามที่ถูกต้องตามสูตร Q-A-S-V?",
        options: [
          "Where you did buy this laptop?",
          "Where did you buy this laptop?",
          "Where did you bought this laptop?",
          "Where you bought this laptop?"
        ],
        answer: 1,
        explanation: "ถูกต้อง! 'Where did you buy this laptop?' (Where = Q, did = A, you = S, buy = กริยาแท้รูปเดิม V1 เมื่อมี did แล้วไม่ต้องผัน bought ซ้ำ)"
      },
      {
        id: "q4-2",
        type: "unscramble",
        question: "เรียงคำถามถามความถี่:",
        words: ["How", "often", "do", "you", "exercise", "each", "week"],
        answer: "How often do you exercise each week",
        explanation: "ประโยคที่ถูกต้องคือ 'How often do you exercise each week' (คุณออกกำลังกายบ่อยแค่ไหนในแต่ละสัปดาห์)"
      },
      {
        id: "q4-3",
        type: "speaking",
        question: "ฝึกพูดคำถามถามเวลาอย่างมั่นใจ:",
        targetText: "How long will this meeting take?",
        explanation: "ฝึกออกเสียง How long และ will this meeting take ให้ลื่นไหล"
      }
    ]
  },

  // =========================================================================
  // LEVEL 2: INTERMEDIATE (B1) - สื่อสารลื่นไหล ไม่ติดขัด
  // =========================================================================
  {
    id: "lesson-5",
    level: "B1",
    levelBadge: "B1",
    levelTitle: "Intermediate: Building Fluency",
    title: "จุดตายที่คนสับสนที่สุด: Past Simple vs Present Perfect",
    titleEn: "The Ultimate Showdown: Past Simple vs Present Perfect",
    icon: "clock",
    duration: "30 นาที",
    xp: 60,
    summary: "เข้าใจไทม์ไลน์ความแตกต่างอย่างแท้จริง ระหว่าง 'เรื่องที่จบไปแล้วในอดีต' (Past Simple) กับ 'เรื่องในอดีตที่ส่งผลหรือเชื่อมโยงถึงปัจจุบัน' (Present Perfect)",
    theory: [
      {
        heading: "1. Past Simple: จบไปแล้ว ปิดกล่อง ระบุเวลาชัดเจน (Finished Time)",
        explanation: "ใช้เมื่อเหตุการณ์เกิดขึ้นและสิ้นสุดลงไปแล้วในอดีต มักมีคำบอกเวลาเฉพาะเจาะจง เช่น yesterday, last week, in 2021, two days ago, when I was young.",
        examples: [
          { en: "I lost my keys yesterday, but I found them.", ipa: "/aɪ lɒst maɪ kiːz ˈjes.tə.deɪ, bʌt aɪ faʊnd ðem/", th: "ฉันทำกุญแจหายเมื่อวานนี้ (แต่ตอนนี้หาเจอแล้ว เรื่องจบไปแล้ว)", note: "Past Simple" },
          { en: "We launched the product last month.", ipa: "/wiː lɔːntʃt ðə ˈprɒd.ʌkt lɑːst mʌnθ/", th: "พวกเราเปิดตัวผลิตภัณฑ์ไปเมื่อเดือนที่แล้ว", note: "ระบุเวลาชัดเจน last month" }
        ]
      },
      {
        heading: "2. Present Perfect: จากอดีตสู่ปัจจุบัน หรือผลลัพธ์ยังคาอยู่ (Unfinished / Relevant Now)",
        explanation: "โครงสร้างคือ `Subject + have/has + Verb 3 (Past Participle)`. ใช้เมื่อ:\n1. ไม่ระบุเวลาเจาะจง (เน้นประสบการณ์ ว่า 'เคย/ไม่เคย')\n2. เหตุการณ์เริ่มในอดีตและยังดำเนินต่อมาถึงตอนนี้ (มักใช้กับ since, for)\n3. เพิ่งเกิดขึ้นและส่งผลกระทบถึงสภาพปัจจุบัน",
        examples: [
          { en: "I have lost my keys! Can you help me look for them?", ipa: "/aɪ hæv lɒst maɪ kiːz/", th: "ฉันทำกุญแจหาย! (ตอนนี้ก็ยังหาไม่เจอ ยังไม่มีกุญแจเข้าบ้าน)", note: "ผลลัพธ์ส่งถึงปัจจุบัน" },
          { en: "I have worked at this tech firm for five years.", ipa: "/aɪ hæv wɜːkt æt ðɪs tek fɜːm fɔː faɪv jɪəz/", th: "ฉันทำงานที่บริษัทเทคโนโลยีแห่งนี้มาเป็นเวลา 5 ปีแล้ว (ตอนนี้ก็ยังทำงานอยู่ที่นี่)", note: "ยังทำอยู่ ณ ปัจจุบัน" }
        ],
        proTip: "💡 Contrast Test: เปรียบเทียบ: 'I lived in London for 2 years' (เคยอยู่ ปัจจุบันไม่ได้อยู่แล้ว) VS 'I have lived in London for 2 years' (อยู่มา 2 ปีแล้ว และปัจจุบันยังคงอาศัยอยู่ที่ลอนดอน)"
      }
    ],
    dialogue: {
      scenario: "Job Interview: Explaining professional experience",
      speakers: [
        { role: "Interviewer", name: "Rachel", text: "Have you ever managed a remote engineering team before?", th: "คุณเคยบริหารจัดการทีมวิศวกรแบบทำงานทางไกลมาก่อนหรือไม่ครับ?", avatar: "👩‍💼" },
        { role: "Candidate", name: "Tan", text: "Yes, I have managed cross-functional teams for over four years. In fact, in my previous role in 2023, I led a team of twelve engineers.", th: "เคยครับ ผมบริหารทีมข้ามสายงานมานานกว่าสี่ปีแล้ว และจริง ๆ แล้วในปี 2023 ที่ผ่านมา ผมได้นำทีมวิศวกรจำนวน 12 คนครับ", avatar: "👨‍💻" }
      ]
    },
    practice: [
      {
        id: "q5-1",
        type: "multiple-choice",
        question: "ประโยคใดถูกต้องเมื่อต้องการบอกว่า 'ฉันอาศัยอยู่ที่นี่มา 10 ปีแล้ว และตอนนี้ก็ยังคงอาศัยอยู่'?",
        options: [
          "I lived here for 10 years.",
          "I have lived here for 10 years.",
          "I am living here since 10 years.",
          "I live here since 10 years ago."
        ],
        answer: 1,
        explanation: "ถูกต้อง! 'I have lived here for 10 years' ใช้ Present Perfect เพื่อบอกการกระทำที่เริ่มในอดีตและยังดำเนินต่อมาจนถึงปัจจุบัน"
      },
      {
        id: "q5-2",
        type: "unscramble",
        question: "เรียงประโยคถามประสบการณ์ในการทำงาน:",
        words: ["Have", "you", "ever", "worked", "with", "international", "clients", "before"],
        answer: "Have you ever worked with international clients before",
        explanation: "ประโยคที่ถูกต้องคือ 'Have you ever worked with international clients before' (คุณเคยร่วมงานกับลูกค้าต่างประเทศมาก่อนหรือไม่)"
      },
      {
        id: "q5-3",
        type: "speaking",
        question: "ฝึกพูดประโยคสรุปผลงาน:",
        targetText: "We have accomplished all our quarterly targets",
        explanation: "ฝึกออกเสียง accomplished /əˈkʌm.plɪʃt/ และ quarterly targets"
      }
    ]
  },

  {
    id: "lesson-6",
    level: "B1",
    levelBadge: "B1",
    levelTitle: "Intermediate: Building Fluency",
    title: "Modals & Conditionals: ถ้า... แล้วจะ... ในชีวิตจริง",
    titleEn: "Mastering Modals & If-Clauses: Reality vs Hypothetical",
    icon: "git-branch",
    duration: "25 นาที",
    xp: 60,
    summary: "เชี่ยวชาญการใช้ If-clauses (Type 1 & Type 2) และกริยาช่วย Modal Verbs (Could, Would, Should, Might) เพื่อแสดงความสุภาพและสถานการณ์สมมติ",
    theory: [
      {
        heading: "1. First Conditional (Type 1): เป็นไปได้จริงในอนาคต (Real Possibility)",
        explanation: "สูตร: `If + Present Simple, will + Verb 1`. ใช้เมื่อเงื่อนไขมีโอกาสเกิดขึ้นจริงในอนาคต",
        examples: [
          { en: "If we finish the sprint early, we will celebrate on Friday.", ipa: "/ɪf wiː ˈfɪn.ɪʃ ðə sprɪnt ˈɜː.li, wiː wɪl ˈsel.ə.breɪt ɒn ˈfraɪ.deɪ/", th: "ถ้าพวกเราทำงานในสปรินต์เสร็จก่อนกำหนด เราจะไปฉลองกันวันศุกร์นี้", note: "โอกาสเกิดขึ้นจริงสูง" },
          { en: "If it rains, the outdoor event will be postponed.", ipa: "/ɪf ɪt reɪnz, ðiː ˌaʊtˈdɔːr ɪˈvent wɪl biː pəʊstˈpəʊnd/", th: "ถ้าฝนตก งานกลางแจ้งจะถูกเลื่อนออกไป", note: "เป็นเหตุเป็นผลในอนาคต" }
        ]
      },
      {
        heading: "2. Second Conditional (Type 2): สมมติในสิ่งที่ไม่เป็นจริงในปัจจุบัน (Unreal / Dream)",
        explanation: "สูตร: `If + Past Simple, would + Verb 1`. ใช้เมื่อจินตนาการถึงสิ่งที่ไม่เป็นจริง หรือตรงกันข้ามกับความเป็นจริงในปัจจุบัน (หมายเหตุ: กริยา be มักใช้ were กับทุกประธานในภาษาทางการ)",
        examples: [
          { en: "If I had more free time, I would learn Spanish.", ipa: "/ɪf aɪ hæd mɔːr friː taɪm, aɪ wʊd lɜːn ˈspæn.ɪʃ/", th: "ถ้าฉันมีเวลาว่างมากกว่านี้ (แต่ความจริงตอนนี้ยุ่งมาก) ฉันคงจะไปเรียนภาษาสเปน", note: "สมมติตรงข้ามกับปัจจุบัน" },
          { en: "If I were in your shoes, I would accept the job offer.", ipa: "/ɪf aɪ wɜːr ɪn jɔːr ʃuːz, aɪ wʊd əkˈsept ðə dʒɒb ˈɒf.ər/", th: "ถ้าฉันเป็นคุณ (in your shoes = อยู่ในสถานการณ์ของคุณ) ฉันจะตอบรับข้อเสนอเข้าทำงานนั้นอย่างแน่นอน", note: "สำนวนให้คำแนะนำยอดนิยม" }
        ]
      }
    ],
    dialogue: {
      scenario: "Career advice between mentors",
      speakers: [
        { role: "Mentee", name: "Ken", text: "I'm not sure if I should switch to data engineering or stay in web development.", th: "ผมไม่แน่ใจเลยว่าจะย้ายสายไปเป็น Data Engineer หรือทำ Web Development ต่อดีครับ", avatar: "🧑‍💻" },
        { role: "Mentor", name: "Elena", text: "If I were you, I would explore data engineering tutorials this weekend. If you find it exciting, you can make a calculated pivot.", th: "ถ้าฉันเป็นคุณนะ ฉันจะลองเปิดดูคลิปสอน Data Engineering สุดสัปดาห์นี้ก่อน ถ้าคุณพบว่ามันน่าตื่นเต้น คุณค่อยวางแผนย้ายสายอย่างรอบคอบค่ะ", avatar: "👩‍💼" }
      ]
    },
    practice: [
      {
        id: "q6-1",
        type: "multiple-choice",
        question: "เลือกคำเติมในช่องว่าง: 'If I _____ a million dollars, I would invest in clean energy technology.'",
        options: ["have", "had", "will have", "am having"],
        answer: 1,
        explanation: "ถูกต้อง! 'had' เพราะนี่คือ Second Conditional (Type 2: If + Past Simple, would + V1) เป็นการสมมติในสิ่งที่ไม่เป็นจริงในปัจจุบัน"
      },
      {
        id: "q6-2",
        type: "unscramble",
        question: "เรียงประโยคสำนวนให้คำแนะนำ:",
        words: ["If", "I", "were", "in", "your", "position", "I", "would", "negotiate"],
        answer: "If I were in your position I would negotiate",
        explanation: "ประโยคที่ถูกต้องคือ 'If I were in your position I would negotiate' (ถ้าฉันอยู่ในตำแหน่งสถานการณ์ของคุณ ฉันจะเจรจาต่อรอง)"
      },
      {
        id: "q6-3",
        type: "speaking",
        question: "ฝึกพูดประโยคเงื่อนไขทางธุรกิจ:",
        targetText: "If we sign the contract today, we will deploy next week",
        explanation: "ฝึกออกเสียง contract และ deploy next week ให้ชัดถ้อยชัดคำ"
      }
    ]
  },

  {
    id: "lesson-7",
    level: "B1",
    levelBadge: "B1",
    levelTitle: "Intermediate: Building Fluency",
    title: "กริยาวลี Phrasal Verbs & Collocations ที่ฝรั่งใช้ทุกวัน",
    titleEn: "High-Frequency Phrasal Verbs & Natural Word Partnerships",
    icon: "zap",
    duration: "25 นาที",
    xp: 60,
    summary: "อัปเกรดภาษาอังกฤษให้ฟังดูเป็นธรรมชาติเหมือนเจ้าของภาษา ด้วยกริยาวลีที่ใช้บ่อยที่สุดในชีวิตจริงและการทำงาน",
    theory: [
      {
        heading: "1. ทำไม Phrasal Verbs จึงสำคัญที่สุดในการพูดให้เป็นธรรมชาติ?",
        explanation: "ในตำราเรียนเรามักเจอคำศัพท์ทางการ (Latinate words) เช่น investigate, cancel, delay แต่ในชีวิตจริงเจ้าของภาษาจะพูดว่า look into, call off, put off เสมอ!",
        examples: [
          { en: "Figure out (คิดหาคำตอบได้)", ipa: "/ˈfɪɡ.ər aʊt/", th: "We need to figure out why the user retention dropped.", note: "แทนการใช้ solve / calculate" },
          { en: "Run out of (หมดเกลี้ยง)", ipa: "/rʌn aʊt əv/", th: "We are running out of budget for marketing.", note: "แทนการใช้ deplete" },
          { en: "Call off (ยกเลิก)", ipa: "/kɔːl ɒf/", th: "They decided to call off the meeting due to bad weather.", note: "แทนการใช้ cancel" },
          { en: "Put off (เลื่อนออกไป)", ipa: "/pʊt ɒf/", th: "Don't put off until tomorrow what you can do today.", note: "แทนการใช้ postpone / delay" }
        ]
      },
      {
        heading: "2. Essential Collocations: คำที่ต้องมาคู่กันเสมอ",
        explanation: "คนไทยมักแปลตรงตัว เช่น 'ทำข้อสอบ' แปลเป็น 'make exam' ซึ่งฝรั่งไม่พูด! ภาษาอังกฤษมีคำคู่เฉพาะตัว (Collocations):",
        examples: [
          { en: "Make a decision / Make a mistake", ipa: "/meɪk ə dɪˈsɪʒ.ən/", th: "ตัดสินใจ / ทำผิดพลาด (ใช้ make เสมอ ไม่ใช้ do)", note: "Make a decision" },
          { en: "Do business / Do research / Do your best", ipa: "/duː ˈbɪz.nɪs/", th: "ทำธุรกิจ / ทำวิจัย / พยายามเต็มที่ (ใช้ do เสมอ ไม่ใช้ make)", note: "Do business" },
          { en: "Take notes / Take a break", ipa: "/teɪk nəʊts/", th: "จดบันทึก / พักเบรก (ใช้ take)", note: "Take a break" }
        ]
      }
    ],
    dialogue: {
      scenario: "Office stand-up discussion",
      speakers: [
        { role: "Project Manager", name: "Sam", text: "Team, we ran into an unexpected bug this morning. Can we look into it right away?", th: "ทุกคนครับ เช้านี้เราเจอบั๊กที่ไม่คาดคิดเข้า คุณพอจะช่วยเข้าไปตรวจสอบเดี๋ยวนี้ได้ไหมครับ?", avatar: "👨‍💻" },
        { role: "Developer", name: "Joy", text: "I'm already on it. Give me an hour to figure out the root cause before we call off the demo.", th: "ฉันกำลังดูอยู่เลยค่ะ ขอเวลาสักชั่วโมงในการหาสาเหตุที่แท้จริง ก่อนที่เราจะตัดสินใจยกเลิกการเดโมนะคะ", avatar: "👩‍💻" }
      ]
    },
    practice: [
      {
        id: "q7-1",
        type: "multiple-choice",
        question: "หากต้องการพูดว่า 'พวกเราต้องเลื่อนการประชุมออกไปเป็นสัปดาห์หน้า' ข้อใดเป็นธรรมชาติที่สุด?",
        options: [
          "We must put off the meeting until next week.",
          "We must run out the meeting until next week.",
          "We must call off until next week.",
          "We must make late the meeting."
        ],
        answer: 0,
        explanation: "ถูกต้อง! 'put off' แปลว่า เลื่อนกำหนดเวลาออกไป (postpone) ส่วน 'call off' แปลว่า ยกเลิกไปเลย"
      },
      {
        id: "q7-2",
        type: "unscramble",
        question: "เรียงประโยคที่ใช้กริยาวลี look forward to:",
        words: ["I", "look", "forward", "to", "collaborating", "with", "your", "team"],
        answer: "I look forward to collaborating with your team",
        explanation: "ประโยคที่ถูกต้องคือ 'I look forward to collaborating with your team' (ฉันตั้งตารอคอยที่จะได้ร่วมงานกับทีมของคุณ) สังเกตว่าหลัง to ต้องเป็น V-ing เสมอ"
      },
      {
        id: "q7-3",
        type: "speaking",
        question: "ฝึกพูดประโยคแก้ไขปัญหา:",
        targetText: "Let us figure out a feasible solution together",
        explanation: "ฝึกพูด figure out เชื่อมเสียงเป็น 'ฟิกเกอะ-เราท์' และ feasible solution"
      }
    ]
  },

  {
    id: "lesson-8",
    level: "B1",
    levelBadge: "B1",
    levelTitle: "Intermediate: Building Fluency",
    title: "ภาษาอังกฤษสถานการณ์ฉุกเฉินและแก้ปัญหาเฉพาะหน้าในการเดินทาง",
    titleEn: "Travel Mastery: Handling Flight Delays, Lost Luggage & Hotel Issues",
    icon: "compass",
    duration: "25 นาที",
    xp: 60,
    summary: "รับมือกับทุกปัญหาเวลาเดินทางต่างประเทศอย่างมืออาชีพ ทั้งเที่ยวบินดีเลย์ กระเป๋าหาย ห้องพักมีปัญหา และการขอชดเชย",
    theory: [
      {
        heading: "1. ปัญหาเที่ยวบินและกระเป๋าเดินทาง (Airport & Airline Dilemmas)",
        explanation: "เมื่อเกิดปัญหาที่สนามบิน อย่าตื่นตระหนก! ใช้ประโยคที่มีโครงสร้างชัดเจนและระบุความต้องการได้ตรงประเด็น:",
        examples: [
          { en: "My connecting flight was canceled. What are my rebooking options?", ipa: "/maɪ kəˈnek.tɪŋ flaɪt wɒz ˈkæn.səld/", th: "เที่ยวบินต่อเครื่องของฉันถูกยกเลิก ฉันมีทางเลือกในการจองตั๋วใหม่เที่ยวไหนได้บ้างครับ/ค่ะ?", note: "ถามทางเลือกอย่างใจเย็น" },
          { en: "My checked baggage has not arrived on the carousel.", ipa: "/maɪ tʃekt ˈbæɡ.ɪdʒ hæz nɒt əˈraɪvd ɒn ðə ˈkær.ə.sel/", th: "กระเป๋าโหลดใต้เครื่องของฉันยังไม่มาที่สายพานเลยครับ", note: "แจ้งกระเป๋าหายที่ Lost & Found" },
          { en: "Could you provide a Property Irregularity Report (PIR)?", ipa: "/kʊd juː prəˈvaɪd ə ˈprɒp.ə.ti ɪˌreɡ.jʊˈlær.ə.ti rɪˈpɔːt/", th: "คุณช่วยออกเอกสารแจ้งกระเป๋าตกหล่น (PIR) ให้ฉันได้ไหมคะ?", note: "คำศัพท์สำคัญในการเคลมประกัน" }
        ]
      },
      {
        heading: "2. ร้องเรียนปัญหาโรงแรมอย่างสุภาพแต่ได้ผล (Polite Hotel Complaints)",
        explanation: "เทคนิคการเคลมปัญหาโรงแรมโดยไม่ใช้อารมณ์ คือการขึ้นต้นด้วย 'I'm afraid there seems to be an issue with...'",
        examples: [
          { en: "I'm afraid the air conditioning in room 402 is not functioning properly.", ipa: "/aɪm əˈfreɪd ðeər siːmz tuː biː ən ˈɪʃ.uː/", th: "เกรงว่าเครื่องปรับอากาศในห้อง 402 จะทำงานผิดปกติครับ", note: "ขึ้นต้นด้วย I'm afraid สุภาพมาก" },
          { en: "Would it be possible to switch to another quiet room?", ipa: "/wʊd ɪt biː ˈpɒs.ə.bəl tuː swɪtʃ tuː əˈnʌð.ər ˈkwaɪ.ət ruːm/", th: "พอจะเป็นไปได้ไหมที่จะขอย้ายไปห้องอื่นที่เงียบสงบกว่านี้?", note: "การขอเปลี่ยนห้องอย่างสุภาพ" }
        ]
      }
    ],
    dialogue: {
      scenario: "Customer Service Counter at Tokyo Narita Airport",
      speakers: [
        { role: "Agent", name: "Kenji", text: "Good evening sir, how may I assist you?", th: "สวัสดีครับ มีอะไรให้ผมช่วยเหลือไหมครับ?", avatar: "👨‍✈️" },
        { role: "Passenger", name: "Alex", text: "Good evening. My flight from London was delayed, and I missed my connecting flight to Bangkok.", th: "สวัสดีครับ เที่ยวบินของผมจากลอนดอนดีเลย์ ทำให้ผมต่อเครื่องไปกรุงเทพฯ ไม่ทันครับ", avatar: "🧳" },
        { role: "Agent", name: "Kenji", text: "I deeply apologize for the inconvenience. Let me check the next available flight and arrange a hotel voucher for tonight.", th: "ผมต้องขออภัยในความไม่สะดวกเป็นอย่างยิ่งครับ ขอผมตรวจสอบเที่ยวบินถัดไปและออกเวาเชอร์โรงแรมคืนนี้ให้นะครับ", avatar: "👨‍✈️" }
      ]
    },
    practice: [
      {
        id: "q8-1",
        type: "multiple-choice",
        question: "เมื่อกระเป๋าเดินทางไม่มาที่สายพาน ควรพูดกับเคาน์เตอร์ Lost & Found ว่าอย่างไร?",
        options: [
          "You took my bag, give me back now!",
          "My checked baggage has not arrived on the carousel.",
          "I don't have bag, what you do?",
          "Airplane forgot my box."
        ],
        answer: 1,
        explanation: "ถูกต้อง! 'My checked baggage has not arrived on the carousel' เป็นรูปประโยคที่ถูกต้อง สุภาพ และตรงประเด็นทางการบินที่สุด"
      },
      {
        id: "q8-2",
        type: "unscramble",
        question: "เรียงประโยคแจ้งปัญหาอย่างสุภาพ:",
        words: ["I", "am", "afraid", "there", "is", "a", "problem", "with", "my", "reservation"],
        answer: "I am afraid there is a problem with my reservation",
        explanation: "ประโยคที่ถูกต้องคือ 'I am afraid there is a problem with my reservation' (ฉันเกรงว่าน่าจะมีปัญหากับการจองของฉันค่ะ)"
      },
      {
        id: "q8-3",
        type: "speaking",
        question: "ฝึกพูดประโยคเจรจาขอเปลี่ยนห้อง:",
        targetText: "Would it be possible to switch to a quieter room?",
        explanation: "ฝึกออกเสียง Would it be possible เชื่อมเสียงให้ลื่นไหล"
      }
    ]
  },

  // =========================================================================
  // LEVEL 3: UPPER-INTERMEDIATE (B2) - ภาษาอังกฤษเพื่อการทำงานและธุรกิจ
  // =========================================================================
  {
    id: "lesson-9",
    level: "B2",
    levelBadge: "B2",
    levelTitle: "Upper-Intermediate: Professional Communication",
    title: "เขียนอีเมลธุรกิจแบบ Professional (Business Email Mastery)",
    titleEn: "Writing High-Impact Professional Business Emails & Follow-ups",
    icon: "mail",
    duration: "30 นาที",
    xp: 70,
    summary: "โครงสร้างอีเมลธุรกิจระดับสากล การเกริ่นนำ การขอความร่วมมืออย่างสุภาพแต่หนักแน่น เทคนิคการเขียน Follow-up และเทมเพลตพร้อมใช้งาน",
    theory: [
      {
        heading: "1. โครงสร้างอีเมล 4 ขั้นตอนแบบสากล (The 4-Part Email Blueprint)",
        explanation: "อีเมลธุรกิจที่ดีต้องสั้น ชัดเจน สุภาพ และมี Call-to-Action (CTA) ที่ไม่ต้องเดา:\n1. Salutation (คำทักทาย: Dear Mr. Watson, / Hi Sarah,)\n2. The Hook / Opening Context (วัตถุประสงค์ที่เขียนมา)\n3. Core Details & Action Required (เนื้อหาหลักและสิ่งที่ต้องการให้ทำ)\n4. Professional Sign-off (คำลงท้าย: Best regards, / Sincerely,)",
        examples: [
          { en: "I am writing to follow up on our discussion regarding the Q3 budget.", ipa: "/aɪ æm ˈraɪ.tɪŋ tuː ˈfɒl.əʊ ʌp ɒn ˈaʊər dɪˈskʌʃ.ən/", th: "ผมเขียนมาเพื่อติดตามความคืบหน้าเกี่ยวกับการหารือเรื่องงบประมาณประจำไตรมาสที่ 3 ครับ", note: "ประโยคเปิดยอดฮิต" },
          { en: "Please find the revised proposal attached for your review.", ipa: "/pliːz faɪnd ðə rɪˈvaɪzd prəˈpəʊ.zəl əˈtætʃt fɔː jɔːr rɪˈvjuː/", th: "เอกสารข้อเสนอฉบับแก้ไขแนบมาพร้อมกับอีเมลฉบับนี้เพื่อให้ท่านพิจารณาครับ", note: "การแจ้งไฟล์แนบอย่างโปร" }
        ]
      },
      {
        heading: "2. การปรับระดับความสุภาพ (Softening Tone for Polite Requests)",
        explanation: "ในภาษาอังกฤษเชิงธุรกิจ เราไม่สั่งด้วยคำว่า 'Do this by Friday.' แต่จะใช้โครงสร้าง 'Softening' เพื่อสร้างความสัมพันธ์ที่ดี:",
        examples: [
          { en: "Direct (ห้วน): Send me the report today.", ipa: "", th: "ส่งรายงานมาวันนี้ (ฟังดูก้าวร้าว)", note: "ควรหลีกเลี่ยง" },
          { en: "Professional: Could you please send me the updated report by 5 PM today?", ipa: "/kʊd juː pliːz send miː ðiː ʌpˈdeɪ.tɪd rɪˈpɔːt/", th: "คุณพอจะช่วยส่งรายงานฉบับอัปเดตให้ผมภายใน 5 โมงเย็นวันนี้ได้ไหมครับ?", note: "สุภาพและมีกำหนดเวลาชัดเจน" },
          { en: "Executive: I would greatly appreciate it if you could share the final figures at your earliest convenience.", ipa: "", th: "ผมจะซาบซึ้งเป็นอย่างยิ่งหากคุณสามารถส่งตัวเลขสรุปมาให้เมื่อคุณสะดวกที่สุดครับ", note: "ระดับผู้บริหาร / ลูกค้าคนสำคัญ" }
        ],
        proTip: "⚠️ Don't say: 'As I said in my last email' (ฟังดูประชดประชันว่าคุณไม่อ่านอีเมลฉัน!) ให้เปลี่ยนเป็น 'To recap our previous note,' หรือ 'As per our last conversation,'"
      }
    ],
    dialogue: {
      scenario: "Email exchange with an overseas partner",
      speakers: [
        { role: "Sender", name: "Pat (Business Dev)", text: "Dear Marcus, I hope this email finds you well. I'm following up on our partnership proposal.", th: "เรียน มาร์คัส หวังว่าคุณจะสบายดีนะครับ ผมขอติดตามความคืบหน้าเรื่องข้อเสนอความร่วมมือครับ", avatar: "💼" },
        { role: "Recipient", name: "Marcus (Director)", text: "Hi Pat, thank you for checking in. Our legal team is reviewing the terms, and I will get back to you by Wednesday.", th: "สวัสดีแพท ขอบคุณที่ทักมานะครับ ทีมกฎหมายกำลังตรวจสัญญาอยู่ และผมจะตอบกลับภายในวันพุธครับ", avatar: "👨‍💼" }
      ]
    },
    practice: [
      {
        id: "q9-1",
        type: "multiple-choice",
        question: "ประโยคใดเหมาะสมที่สุดในการติดตามงาน (Follow-up) กับลูกค้าสำคัญโดยไม่ดูเร่งรัดจนน่าเกลียด?",
        options: [
          "Why haven't you answered my previous email yet?",
          "I am gently following up on our proposal to see if you have any questions.",
          "Reply to me immediately before today ends.",
          "You forgot my email, please read it."
        ],
        answer: 1,
        explanation: "ถูกต้อง! 'I am gently following up on our proposal to see if you have any questions' สุภาพ มืออาชีพ และเปิดโอกาสให้ลูกค้าถามคำถาม"
      },
      {
        id: "q9-2",
        type: "unscramble",
        question: "เรียงประโยคลงท้ายอีเมลเพื่อเสนอความช่วยเหลือ:",
        words: ["Please", "do", "not", "hesitate", "to", "contact", "me", "if", "needed"],
        answer: "Please do not hesitate to contact me if needed",
        explanation: "ประโยคที่ถูกต้องคือ 'Please do not hesitate to contact me if needed' (หากมีสิ่งใดเพิ่มเติม โปรดอย่าลังเลที่จะติดต่อฉันนะคะ/ครับ)"
      },
      {
        id: "q9-3",
        type: "speaking",
        question: "ฝึกพูดประโยคสรุปการส่งมอบงาน:",
        targetText: "Please find the quarterly financial report attached for your review",
        explanation: "ฝึกออกเสียง quarterly financial report และ attached for your review"
      }
    ]
  },

  {
    id: "lesson-10",
    level: "B2",
    levelBadge: "B2",
    levelTitle: "Upper-Intermediate: Professional Communication",
    title: "ประชุมและพรีเซนต์ระดับสากล: การแสดงความคิดเห็นอย่างสร้างสรรค์",
    titleEn: "Meetings & Presentations: Speaking Up, Agreeing & Disagreeing Politely",
    icon: "users",
    duration: "30 นาที",
    xp: 70,
    summary: "ก้าวข้ามความเงียบในที่ประชุมระดับนานาชาติ เรียนรู้วิธีขอแทรกจังหวะพูดอย่างมืออาชีพ การเห็นต่างโดยไม่สร้างความบาดหมาง และการสรุป Action Items",
    theory: [
      {
        heading: "1. การขอแทรกจังหวะพูดในที่ประชุม (Interrupting Politely)",
        explanation: "อย่ารอให้คนอื่นหยุดพูดจนหมดเวลา! การแทรกเพื่อเสริมประเด็นเป็นเรื่องปกติในวัฒนธรรมตะวันตก หากใช้ประโยคที่ถูกต้อง:",
        examples: [
          { en: "May I quickly jump in here with a quick data point?", ipa: "/meɪ aɪ ˈkwɪk.li dʒʌmp ɪn hɪər/", th: "ผมขออนุญาตเสริมจุดข้อมูลสั้น ๆ ตรงนี้สักนิดได้ไหมครับ?", note: "สุภาพและเป็นมืออาชีพ" },
          { en: "Before we move to the next slide, could I clarify one detail?", ipa: "/bɪˈfɔːr wiː muːv tuː ðə nekst slaɪd/", th: "ก่อนที่เราจะไปสไลด์ถัดไป ผมขออนุญาตเคลียร์จุดนี้ให้ชัดเจนสักนิดได้ไหมครับ?", note: "ใช้ตอนกำลังเปลี่ยนสไลด์" }
        ]
      },
      {
        heading: "2. การแสดงความเห็นต่างอย่างสร้างสรรค์ (Disagreeing Without Being Disagreeable)",
        explanation: "อย่าพูดว่า 'You are wrong' หรือ 'I totally disagree' ในที่ประชุมผู้บริหาร ให้ใช้วิธี 'เห็นด้วยก่อน แล้วหักมุมด้วยมุมมองใหม่' (Acknowledge & Pivot):",
        examples: [
          { en: "I see your point, however, we also need to consider the timeline constraint.", ipa: "/aɪ siː jɔːr pɔɪnt, haʊˈev.ər/", th: "ผมเข้าใจประเด็นของคุณครับ อย่างไรก็ตาม เราจำเป็นต้องพิจารณาข้อจำกัดด้านกรอบเวลาด้วยเช่นกัน", note: "สูตร I see your point + however" },
          { en: "You've raised a valid concern, but from my perspective, the risk is manageable.", ipa: "/jʊv reɪzd ə ˈvæl.ɪd kənˈsɜːn/", th: "ข้อกังวลที่คุณยกมานั้นมีน้ำหนักมากครับ แต่จากมุมมองของผม ผมคิดว่าความเสี่ยงนี้อยู่ในระดับที่ควบคุมได้", note: "ยอมรับก่อนแล้วจึงเสนอทางออก" }
        ]
      }
    ],
    dialogue: {
      scenario: "Product Strategy Meeting via Zoom",
      speakers: [
        { role: "VP of Product", name: "Claire", text: "We are considering pushing the launch date to Q4 to add three more features.", th: "เรากำลังพิจารณาเลื่อนวันเปิดตัวไปไตรมาส 4 เพื่อเพิ่มฟีเจอร์ใหม่อีก 3 อย่างค่ะ", avatar: "👩‍💼" },
        { role: "Lead Engineer", name: "Ken", text: "If I may jump in, Claire. While those features are valuable, our beta users are eager for the core MVP now. Could we launch on time and ship those in version 2.0?", th: "ขออนุญาตเสริมตรงนี้ครับแคลร์ แม้ฟีเจอร์เหล่านั้นจะมีคุณค่า แต่ผู้ใช้กลุ่มเบต้าของเรากำลังต้องการตัว MVP หลักตอนนี้แล้ว เราเปิดตัวตามกำหนดเดิมแล้วปล่อยฟีเจอร์เหล่านั้นในเวอร์ชัน 2.0 ดีไหมครับ?", avatar: "👨‍💻" },
        { role: "VP of Product", name: "Claire", text: "That is a very pragmatic compromise, Ken. Let's do that.", th: "นั่นเป็นการประนีประนอมที่เน้นผลลัพธ์จริงที่ดีมากเลยเคน เอาตามนั้นค่ะ", avatar: "👩‍💼" }
      ]
    },
    practice: [
      {
        id: "q10-1",
        type: "multiple-choice",
        question: "หากต้องการแสดงความเห็นต่างในที่ประชุมผู้บริหารอย่างสุภาพ ควรใช้ประโยคใด?",
        options: [
          "Your idea makes no sense.",
          "I see where you're coming from, but have we considered the cost implications?",
          "No, that is completely wrong.",
          "I disagree because you don't understand."
        ],
        answer: 1,
        explanation: "ถูกต้อง! 'I see where you're coming from, but have we considered...' เป็นเทคนิคการสื่อสารชั้นสูงที่ให้เกียรติคู่สนทนาพร้อมกระตุ้นให้คิดรอบด้าน"
      },
      {
        id: "q10-2",
        type: "unscramble",
        question: "เรียงประโยคเพื่อขอแทรกในที่ประชุมอย่างสุภาพ:",
        words: ["May", "I", "quickly", "add", "something", "to", "that", "point"],
        answer: "May I quickly add something to that point",
        explanation: "ประโยคที่ถูกต้องคือ 'May I quickly add something to that point' (ผมขออนุญาตเสริมประเด็นนั้นสั้น ๆ สักนิดได้ไหมครับ)"
      },
      {
        id: "q10-3",
        type: "speaking",
        question: "ฝึกพูดประโยคสรุปการประชุม:",
        targetText: "Let us summarize the key takeaways and action items",
        explanation: "ฝึกพูด summarize the key takeaways and action items ให้กระชับ มั่นใจ"
      }
    ]
  },

  {
    id: "lesson-11",
    level: "B2",
    levelBadge: "B2",
    levelTitle: "Upper-Intermediate: Professional Communication",
    title: "ไวยากรณ์เชิงวิชาชีพ: Passive Voice & Relative Clauses",
    titleEn: "Advanced Sentence Crafting: Passive Voice & Relative Clauses",
    icon: "layers",
    duration: "25 นาที",
    xp: 70,
    summary: "ยกระดับภาษาเขียนให้ดูเป็นกลาง เป็นมืออาชีพ ไม่กล่าวโทษบุคคล ด้วย Passive Voice และเชื่อมความคิดที่ซับซ้อนด้วย Relative Clauses",
    theory: [
      {
        heading: "1. ทำไมวงการธุรกิจจึงชอบใช้ Passive Voice? (Objectivity & Diplomacy)",
        explanation: "Passive Voice (`Subject + be + Verb 3`) ไม่ได้มีไว้แค่ออกข้อสอบ! ในการทำงาน มันถูกใช้เพื่อ:\n1. ไม่กล่าวโทษบุคคล (Diplomatic language: แทนที่จะพูดว่า 'John made a huge mistake' ให้ใช้ 'A mistake was made')\n2. เน้นผลลัพธ์หรือตัวระบบมากกว่าคนทำ",
        examples: [
          { en: "Active (ชี้นิ้ว): You didn't submit the invoice on time.", ipa: "", th: "คุณไม่ได้ส่งใบแจ้งหนี้ให้ทันเวลา (ฟังดูโจมตีบุคคล)", note: "สร้างความขัดแย้ง" },
          { en: "Passive (สันติวิธี): The invoice was not received by the billing department on time.", ipa: "", th: "ใบแจ้งหนี้ยังไม่ได้รับโดยแผนกการเงินตามกำหนดเวลาครับ", note: "มุ่งเน้นที่เอกสาร ไม่ได้ต่อว่าใคร" },
          { en: "All transactions are encrypted with enterprise-grade security.", ipa: "/ɔːl trænˈzæk.ʃənz ɑːr ɪnˈkrɪp.tɪd/", th: "ธุรกรรมทั้งหมดได้รับการเข้ารหัสด้วยมาตรฐานความปลอดภัยระดับองค์กร", note: "เน้นตัวระบบ" }
        ]
      },
      {
        heading: "2. Relative Clauses (Who, Which, That, Where, Whose): รวมประโยคให้กระชับ",
        explanation: "แทนที่จะพูดประโยคสั้น ๆ เหมือนเด็กประถม 3 ประโยคติดกัน คนระดับ B2 จะรวมประโยคด้วย Relative Pronouns เพื่อความลื่นไหล:",
        examples: [
          { en: "We are partnering with a Swiss firm that specializes in artificial intelligence.", ipa: "/wiː ɑːr ˈpɑːt.nər.ɪŋ wɪð ə swɪs fɜːm ðæt ˈspeʃ.əl.aɪ.zɪz/", th: "พวกเรากำลังจับมือเป็นพันธมิตรกับบริษัทสวิสที่มีความเชี่ยวชาญเฉพาะทางด้านปัญญาประดิษฐ์", note: "that ขยายบริษัทสวิส" },
          { en: "The engineer whose code solved the memory leak received an award.", ipa: "/ðiː ˌen.dʒɪˈnɪər huːz kəʊd sɒlvd/", th: "วิศวกรผู้ซึ่งโค้ดของเขาแก้ไขปัญหาหน่วยความจำรั่วไหลได้รับรางวัล", note: "whose แสดงความเป็นเจ้าของ" }
        ]
      }
    ],
    dialogue: {
      scenario: "Security incident review debrief",
      speakers: [
        { role: "Auditor", name: "Greg", text: "How was the data breach handled yesterday?", th: "เมื่อวานนี้เหตุการณ์ข้อมูลรั่วไหลได้รับการจัดการอย่างไรบ้าง?", avatar: "🕵️" },
        { role: "CTO", name: "Sita", text: "The vulnerability was identified at 2 AM, and the patched firmware was deployed immediately before any confidential data could be compromised.", th: "ช่องโหว่ได้รับการตรวจพบตอนตี 2 และเฟิร์มแวร์ที่อุดช่องโหว่ได้รับการติดตั้งทันทีก่อนที่ข้อมูลลับใด ๆ จะได้รับความเสียหายครับ", avatar: "👩‍💻" }
      ]
    },
    practice: [
      {
        id: "q11-1",
        type: "multiple-choice",
        question: "เปลี่ยนประโยคนี้เป็น Passive Voice ที่เป็นมืออาชีพ: 'Our team launched the new mobile application last week.'",
        options: [
          "The new mobile application was launched by our team last week.",
          "The new mobile application launched our team last week.",
          "Our team was launched the mobile application last week.",
          "Last week is launched the application."
        ],
        answer: 0,
        explanation: "ถูกต้อง! 'The new mobile application was launched by our team last week' (was + launched = V. to be + V3 ในอดีต)"
      },
      {
        id: "q11-2",
        type: "unscramble",
        question: "เรียงประโยคที่ใช้ Relative Clause ขยายคำนาม:",
        words: ["This", "is", "the", "platform", "which", "revolutionized", "our", "sales", "process"],
        answer: "This is the platform which revolutionized our sales process",
        explanation: "ประโยคที่ถูกต้องคือ 'This is the platform which revolutionized our sales process' (นี่คือแพลตฟอร์มที่เข้ามาปฏิวัติขั้นตอนการขายของพวกเรา)"
      },
      {
        id: "q11-3",
        type: "speaking",
        question: "ฝึกพูดประโยครายงานเชิงระบบ:",
        targetText: "All critical user data is encrypted and backed up daily",
        explanation: "ฝึกออกเสียง encrypted and backed up ให้ชัดเจนต่อเนื่อง"
      }
    ]
  },

  {
    id: "lesson-12",
    level: "B2",
    levelBadge: "B2",
    levelTitle: "Upper-Intermediate: Professional Communication",
    title: "แก้ 15 จุดผิดยอดฮิตที่คนไทยชอบแปลตรงตัว (Common Thai-English Pitfalls)",
    titleEn: "Busting Common Thai-English Pitfalls: Sound Like a True Native",
    icon: "alert-triangle",
    duration: "25 นาที",
    xp: 70,
    summary: "หยุดแปลไทยเป็นอังกฤษตรงตัว! รวบรวม 15 กับดักที่คนไทยกว่า 90% พูดผิดโดยไม่รู้ตัว เช่น 'open the light', 'play internet', 'borrow vs lend', 'remember vs remind'",
    theory: [
      {
        heading: "1. กับดักคำกริยาเครื่องใช้ไฟฟ้าและการกระทำ",
        explanation: "คนไทยติดคำว่า 'เปิด/ปิด' และ 'เล่น' จึงแปลตรงตัวเป็น open/close และ play ซึ่งในภาษาอังกฤษมีความหมายเฉพาะ:",
        examples: [
          { en: "❌ Open the light / Close the air", ipa: "", th: "ผิด! ฝรั่งจะนึกว่าคุณเอามีดไปผ่าหลอดไฟ หรือเอาประตูปิดแอร์", note: "Don't use" },
          { en: "✅ Turn on / Turn off the light (or Switch on / off)", ipa: "/tɜːn ɒn / tɜːn ɒf ðə laɪt/", th: "เปิดไฟ / ปิดไฟ (ใช้ turn on/off กับเครื่องใช้ไฟฟ้าทุกชนิด)", note: "Correct" },
          { en: "❌ Play internet / Play Facebook", ipa: "", th: "ผิด! อินเทอร์เน็ตไม่ใช่ของเล่นเหมือนฟุตบอลหรือเปียโน", note: "Don't use" },
          { en: "✅ Surf the internet / Browse Facebook / Scroll on TikTok", ipa: "/sɜːf ðiː ˈɪn.tə.net/", th: "เล่นเน็ต / ไถฟีดเฟซบุ๊ก / เล่นติ๊กต็อก", note: "Correct" }
        ]
      },
      {
        heading: "2. คู่คำสับสน: Borrow vs Lend & Remember vs Remind",
        explanation: "สองคู่นี้มีความหมายทิศทางตรงกันข้าม จำทางไหลของสิ่งของหรือความคิดให้แม่น:",
        examples: [
          { en: "Borrow (ยืม = ของไหลเข้าหาเรา): Can I borrow your charger?", ipa: "/ˈbɒr.əʊ/", th: "ฉันขอยืมที่ชาร์จของคุณหน่อยได้ไหม?", note: "ขอยืม" },
          { en: "Lend (ให้ยืม = ของไหลออกจากเรา): Can you lend me 20 dollars?", ipa: "/lend/", th: "คุณช่วยให้ฉันยืม 20 ดอลลาร์ได้ไหม?", note: "ให้ยืม" },
          { en: "Remember (จำได้เอง): I remember meeting you in Singapore.", ipa: "/rɪˈmem.bər/", th: "ฉันจำได้ว่าเคยเจอคุณที่สิงคโปร์", note: "ระลึกได้เอง" },
          { en: "Remind (ช่วยเตือนสติ): Please remind me to send the file.", ipa: "/rɪˈmaɪnd/", th: "ช่วยเตือนฉันหน่อยนะให้ส่งไฟล์", note: "ทำให้คนอื่นจำได้" }
        ],
        proTip: "💡 Bonus Pitfall: คำว่า 'Cost expensive' ไม่มีในภาษาอังกฤษ! ให้พูดว่า 'It is expensive' หรือ 'It costs a lot' (ห้ามเอา cost กับ expensive มาชนกัน)"
      }
    ],
    dialogue: {
      scenario: "Co-workers correcting friendly habits",
      speakers: [
        { role: "Junior Dev", name: "Nook", text: "Can you please open the light? It's getting dark.", th: "ช่วยเปิดไฟหน่อยได้ไหมครับ เริ่มมืดแล้ว", avatar: "🧑" },
        { role: "Senior Dev", name: "Tom", text: "Sure! By the way, remember to say 'turn on the light' instead of 'open the light' when presenting to international clients.", th: "ได้เลย! อ้อ อย่าลืมพูดว่า 'turn on the light' แทน 'open the light' นะเวลาพรีเซนต์ให้ลูกค้าต่างชาติฟัง", avatar: "👨‍🏫" }
      ]
    },
    practice: [
      {
        id: "q12-1",
        type: "multiple-choice",
        question: "ประโยคใดถูกต้องเมื่อต้องการบอกเพื่อนว่า 'อย่าลืมเตือนฉันนะเรื่องการประชุมพรุ่งนี้'?",
        options: [
          "Please remember me about the meeting tomorrow.",
          "Please remind me about the meeting tomorrow.",
          "Please alert memory me about meeting tomorrow.",
          "Please recall me for the meeting."
        ],
        answer: 1,
        explanation: "ถูกต้อง! 'remind me' แปลว่า ช่วยเตือนความจำฉัน ส่วน 'remember me' แปลว่า จดจำฉันไว้ (เช่น เพลง Remember Me)"
      },
      {
        id: "q12-2",
        type: "unscramble",
        question: "เรียงประโยคที่ถูกต้องสำหรับการเปิดอุปกรณ์:",
        words: ["Could", "you", "please", "turn", "on", "the", "projector", "now"],
        answer: "Could you please turn on the projector now",
        explanation: "ประโยคที่ถูกต้องคือ 'Could you please turn on the projector now' (ช่วยเปิดเครื่องโปรเจกเตอร์ตอนนี้เลยได้ไหมครับ)"
      },
      {
        id: "q12-3",
        type: "speaking",
        question: "ฝึกพูดประโยคขอยืมอุปกรณ์อย่างเป็นธรรมชาติ:",
        targetText: "Could I borrow your laptop charger for an hour?",
        explanation: "ฝึกพูด borrow your laptop charger ให้ชัดเจนและสุภาพ"
      }
    ]
  },

  // =========================================================================
  // LEVEL 4: ADVANCED TO PRO (C1-C2) - ขั้นสูง คมกริบ ดั่งเจ้าของภาษา
  // =========================================================================
  {
    id: "lesson-13",
    level: "C1_C2",
    levelBadge: "C1-C2",
    levelTitle: "Advanced to Pro: Mastery & Executive Polish",
    title: "ไวยากรณ์ขั้นสูงทรงพลัง: Inversion & Subjunctive Mood",
    titleEn: "Executive Rhetoric: Dramatic Inversion & The Subjunctive Mood",
    icon: "award",
    duration: "30 นาที",
    xp: 80,
    summary: "กลยุทธ์การเรียบเรียงประโยคชั้นสูงที่ผู้บริหารและนักพูดระดับโลกใช้ เพื่อเน้นย้ำความสำคัญ สร้างความประทับใจ และสื่อสารอย่างมีพลังสะกดผู้ฟัง",
    theory: [
      {
        heading: "1. Dramatic Inversion (การกลับประธาน-กริยาเพื่อสร้างพลังทางภาษา)",
        explanation: "เมื่อนำคำบอกความถี่เชิงปฏิเสธ (Negative Adverbs: Seldom, Rarely, Never, Scarcely, Not only) มาไว้หน้าประโยค เราจะต้อง 'กลับกริยาช่วยมาไว้หน้าประธาน' คล้ายโครงสร้างคำถาม เพื่อสร้างความตื่นเต้นและน้ำหนักทางภาษา:",
        examples: [
          { en: "Standard: We have seldom seen such remarkable growth.", ipa: "", th: "พวกเราไม่ค่อยได้เห็นการเติบโตที่โดดเด่นเช่นนี้มาก่อน (ภาษาทั่วไป)", note: "ประโยคธรรมดา" },
          { en: "Executive Inversion: Seldom have we seen such remarkable growth.", ipa: "/ˈsel.dəm hæv wiː siːn/", th: "น้อยครั้งนักที่พวกเราจะได้ประจักษ์ถึงการเติบโตก้าวกระโดดอันโดดเด่นเช่นนี้! (ภาษาผู้บริหาร/ปราศรัย)", note: "ทรงพลังและเฉียบคม" },
          { en: "Not only did the team beat the quarterly quota, but they also reduced overhead costs.", ipa: "/nɒt ˈəʊn.li dɪd ðə tiːm biːt/", th: "ทีมงานไม่เพียงแต่ทำยอดทะลุเป้าประจำไตรมาสเท่านั้น แต่ยังช่วยลดต้นทุนค่าใช้จ่ายในการดำเนินงานลงได้อีกด้วย", note: "Not only did... but also..." }
        ]
      },
      {
        heading: "2. The Subjunctive Mood: ข้อกำหนดทางการระดับสูงสุด",
        explanation: "ใช้ในภาษาเอกสารสัญญา ข้อบังคับกฎหมาย หรือมติคณะกรรมการ เมื่อกริยาหลักคือ insist, recommend, suggest, mandate, demand... ประธานในประโยคย่อยจะต้องตามด้วย **กริยา infinitive รูปดั้งเดิม (Base Form)** เสมอ ไม่ว่าประธานจะเป็นใครก็ตาม!",
        examples: [
          { en: "The board recommended that the CEO take immediate action. (NOT: takes)", ipa: "/ðə bɔːd ˌrek.əˈmen.dɪd ðæt ðə ˌsiː.iːˈəʊ teɪk/", th: "คณะกรรมการเสนอแนะให้ซีอีโอดำเนินการทันที (สังเกตว่า take ไม่เติม s แม้ CEO จะเป็นเอกพจน์)", note: "Subjunctive mood" },
          { en: "It is imperative that every employee adhere to compliance protocols.", ipa: "/ɪt ɪz ɪmˈper.ə.tɪv ðæt/", th: "เป็นเรื่องจำเป็นอย่างยิ่งยวดที่พนักงานทุกคนต้องปฏิบัติตามระเบียบข้อบังคับอย่างเคร่งครัด", note: "adhere รูปดั้งเดิม" }
        ]
      }
    ],
    dialogue: {
      scenario: "Annual Shareholder Address",
      speakers: [
        { role: "Chairman", name: "Arthur Vance", text: "Never before has our company confronted such geopolitical headwinds, yet seldom have our employees demonstrated such resilience.", th: "ไม่เคยมีครั้งใดมาก่อนที่บริษัทของเราต้องเผชิญกับคลื่นลมมรสุมทางภูมิรัฐศาสตร์เช่นนี้ ทว่าน้อยครั้งนักที่พนักงานของเราจะได้แสดงให้เห็นถึงความทรหดอดทนอันน่าทึ่งเช่นนี้", avatar: "🎙️" }
      ]
    },
    practice: [
      {
        id: "q13-1",
        type: "multiple-choice",
        question: "เลือกคำตอบที่ถูกต้องตามหลัก Inversion: 'Not only _____ our delivery deadlines, but we also expanded our user base.'",
        options: ["did we meet", "we met", "we did meet", "have we meet"],
        answer: 0,
        explanation: "ถูกต้อง! 'did we meet' เพราะเมื่อขึ้นต้นด้วย Not only ในอดีต ต้องนำกริยาช่วย did มาวางหน้าประธาน we และตามด้วยกริยาแท้รูปเดิม meet"
      },
      {
        id: "q13-2",
        type: "unscramble",
        question: "เรียงประโยค Inversion สุดหรู:",
        words: ["Rarely", "have", "I", "witnessed", "such", "exceptional", "leadership"],
        answer: "Rarely have I witnessed such exceptional leadership",
        explanation: "ประโยคที่ถูกต้องคือ 'Rarely have I witnessed such exceptional leadership' (น้อยครั้งนักที่ข้าพเจ้าจะได้ประจักษ์ถึงความเป็นผู้นำที่ยอดเยี่ยมเช่นนี้)"
      },
      {
        id: "q13-3",
        type: "speaking",
        question: "ฝึกพูดประโยคปราศรัยระดับสูง:",
        targetText: "Seldom have we witnessed such remarkable digital transformation",
        explanation: "ฝึกออกเสียง Seldom have we witnessed และ digital transformation อย่างหนักแน่น"
      }
    ]
  },

  {
    id: "lesson-14",
    level: "C1_C2",
    levelBadge: "C1-C2",
    levelTitle: "Advanced to Pro: Mastery & Executive Polish",
    title: "ศิลปะการเจรจาต่อรองและการโน้มน้าวใจ (High-Stakes Negotiation)",
    titleEn: "Executive Negotiation: Persuasion, Tact & Win-Win Concessions",
    icon: "briefcase",
    duration: "30 นาที",
    xp: 80,
    summary: "เทคนิคการเจรจาต่อรองธุรกิจระดับนานาชาติ การปฏิเสธข้อเรียกร้องโดยไม่ให้ดีลล่ม การยื่นข้อเสนอแลกเปลี่ยนแบบ Win-Win และจิตวิทยาการใช้ภาษา",
    theory: [
      {
        heading: "1. การปฏิเสธอย่างมีชั้นเชิงและเสนอเงื่อนไขแลกเปลี่ยน (Conditional Concession)",
        explanation: "นักเจรจาระดับโลกจะไม่พูดว่า 'No way' หรือ 'That's too cheap' แต่จะใช้กลยุทธ์ 'แลกเปลี่ยนเงื่อนไข' (If you do X, we can do Y):",
        examples: [
          { en: "We could potentially accommodate that discount, provided that you commit to a two-year enterprise license.", ipa: "/wiː kʊd pəˈten.ʃəl.i əˈkɒm.ə.deɪt/", th: "พวกเราอาจสามารถพิจารณาส่วนลดดังกล่าวให้ได้ โดยมีเงื่อนไขว่าท่านจะต้องตกลงทำสัญญาใช้งานระดับองค์กรเป็นเวลาสองปี", note: "สูตร provided that = ภายใต้เงื่อนไขว่า" },
          { en: "While we appreciate your constraints, that price point would make this engagement unfeasible for us.", ipa: "/waɪl wiː əˈpriː.ʃi.eɪt/", th: "แม้เราจะเข้าใจถึงข้อจำกัดของคุณเป็นอย่างดี แต่ระดับราคานั้นจะทำให้การร่วมงานครั้งนี้ไม่สามารถดำเนินการได้จริงในทางปฏิบัติสำหรับเราครับ", note: "ปฏิเสธอย่างสุภาพแต่มั่นคง" }
        ]
      },
      {
        heading: "2. วาทศิลป์ลดความตึงเครียด (Tactful De-escalation Phrases)",
        explanation: "เมื่อการเจรจาเริ่มติดหล่ม ใช้ประโยคเหล่านี้เพื่อรีเซ็ตบรรยากาศและดึงทุกฝ่ายกลับมาที่เป้าหมายร่วมกัน:",
        examples: [
          { en: "Let's take a step back and revisit our shared objectives.", ipa: "/lets teɪk ə step bæk/", th: "พวกเราลองถอยออกมาหนึ่งก้าวแล้วกลับมาดูเป้าหมายร่วมกันที่เราต้องการบรรลุดีกว่าครับ", note: "ดึงสติคู่เจรจา" },
          { en: "Where do you see room for flexibility on your end?", ipa: "/weər duː juː siː ruːm fɔː ˌflek.səˈbɪl.ə.ti/", th: "ในฝั่งของคุณ มีจุดไหนที่คุณคิดว่าพอจะมีความยืดหยุ่นปรับเปลี่ยนได้บ้างครับ?", note: "โยนคำถามปลายเปิดเพื่อหาทางออก" }
        ]
      }
    ],
    dialogue: {
      scenario: "Enterprise Software Contract Negotiation",
      speakers: [
        { role: "Procurement Director", name: "Victoria", text: "Your proposed licensing fee is 25% higher than our allocated budget.", th: "ค่าธรรมเนียมสัญญาที่คุณเสนอมาสูงกว่างบประมาณที่เราจัดสรรไว้ถึง 25% นะคะ", avatar: "👩‍💼" },
        { role: "VP of Enterprise Sales", name: "Daniel", text: "I completely understand your budget concerns, Victoria. If we were to unbundle the on-site consulting hours and handle onboarding remotely, could we meet in the middle at a 10% adjustment?", th: "ผมเข้าใจข้อกังวลเรื่องงบประมาณของคุณวิกตอเรียเป็นอย่างดีครับ หากเราแยกค่าที่ปรึกษานอกสถานที่ออกแล้วเปลี่ยนมาดูแลการ Onboarding ผ่านระบบออนไลน์แทน เราพอจะเจอกันครึ่งทางด้วยการปรับลด 10% ได้ไหมครับ?", avatar: "👨‍💼" },
        { role: "Procurement Director", name: "Victoria", text: "That sounds like a fair compromise. Let's draft the terms accordingly.", th: "นั่นฟังดูเป็นการประนีประนอมที่ยุติธรรมดีค่ะ ร่างสัญญาตามเงื่อนไขนี้ได้เลยค่ะ", avatar: "👩‍💼" }
      ]
    },
    practice: [
      {
        id: "q14-1",
        type: "multiple-choice",
        question: "วลีใดมีความหมายเดียวกับ 'under the condition that' (ภายใต้เงื่อนไขว่า) ที่นิยมใช้ในการเจรจาสัญญา?",
        options: ["in spite of", "provided that", "as long nowhere", "even though"],
        answer: 1,
        explanation: "ถูกต้อง! 'provided that' หรือ 'providing that' มีความหมายว่า 'ตราบใดที่ / ภายใต้เงื่อนไขว่า' เป็นคำทางการระดับ C1 สำหรับการร่างสัญญาและเจรจา"
      },
      {
        id: "q14-2",
        type: "unscramble",
        question: "เรียงประโยคเพื่อหาทางออกร่วมกัน:",
        words: ["Let", "us", "explore", "a", "mutually", "beneficial", "solution", "together"],
        answer: "Let us explore a mutually beneficial solution together",
        explanation: "ประโยคที่ถูกต้องคือ 'Let us explore a mutually beneficial solution together' (เรามาร่วมกันหาทางออกที่เกิดประโยชน์สูงสุดร่วมกันของทั้งสองฝ่ายเถอะครับ)"
      },
      {
        id: "q14-3",
        type: "speaking",
        question: "ฝึกพูดประโยคเจรจาทางยุทธศาสตร์:",
        targetText: "We can accommodate your timeline provided that requirements remain fixed",
        explanation: "ฝึกออกเสียง accommodate your timeline และ provided that requirements remain fixed"
      }
    ]
  },

  {
    id: "lesson-15",
    level: "C1_C2",
    levelBadge: "C1-C2",
    levelTitle: "Advanced to Pro: Mastery & Executive Polish",
    title: "สำนวนระดับผู้บริหารและคำศัพท์เชิงกลยุทธ์ (Executive Idioms)",
    titleEn: "Executive Idioms, Nuances & Cultural Registers",
    icon: "trending-up",
    duration: "25 นาที",
    xp: 80,
    summary: "เจาะลึก Idioms และคำศัพท์ระดับ C-Level ที่ใช้ในการประชุมบอร์ดบริหาร บทความ Forbes / Harvard Business Review และงานประชุมระดับโลก",
    theory: [
      {
        heading: "1. Strategic Executive Idioms ที่คนทำงานระดับท็อปต้องรู้",
        explanation: "การใช้สำนวนเปรียบเทียบที่คมคายจะช่วยให้การสื่อสารสั้นกระชับแต่เห็นภาพชัดเจน:",
        examples: [
          { en: "Move the needle (สร้างความเปลี่ยนแปลงที่วัดผลได้จริง)", ipa: "/muːv ðə ˈniː.dəl/", th: "Social media likes are fine, but will this campaign really move the needle on sales?", note: "สร้างอิมแพกต์ชัดเจน" },
          { en: "A double-edged sword (ดาบสองคม มีทั้งผลดีและผลร้าย)", ipa: "/ə ˌdʌb.əl.edʒd ˈsɔːd/", th: "Aggressive price cuts are a double-edged sword that could erode our brand value.", note: "มีผลเสียแฝงอยู่" },
          { en: "Think outside the box / Push the envelope (คิดนอกกรอบ ทลายขีดจำกัดเดิม)", ipa: "/pʊʃ ðiː ˈen.və.ləʊp/", th: "We need our R&D division to push the envelope on battery efficiency.", note: "สร้างนวัตกรรมใหม่" }
        ]
      },
      {
        heading: "2. Strategic Executive Vocabulary (ศัพท์หรูที่เปลี่ยนระดับภาษาของคุณ)",
        explanation: "แทนที่จะใช้คำศัพท์พื้นฐาน ลองแทนที่ด้วยศัพท์วิเคราะห์ระดับ C1-C2:",
        examples: [
          { en: "Instead of 'important' -> Paramount / Pivotal", ipa: "/ˈpær.ə.maʊnt/ , /ˈpɪv.ə.təl/", th: "User security is of paramount importance to our infrastructure.", note: "สำคัญยิ่งยวด" },
          { en: "Instead of 'everywhere' -> Ubiquitous", ipa: "/juːˈbɪk.wɪ.təs/", th: "Mobile payments have become ubiquitous throughout Southeast Asia.", note: "แพร่หลายไปทั่ว" },
          { en: "Instead of 'practical' -> Pragmatic", ipa: "/præɡˈmæt.ɪk/", th: "We adopted a pragmatic roadmap that delivers immediate ROI.", note: "เน้นผลได้จริง" }
        ]
      }
    ],
    dialogue: {
      scenario: "Board of Directors Strategy Session",
      speakers: [
        { role: "Board Member", name: "Helena", text: "Is this acquisition genuinely pivotal for our long-term market valuation?", th: "การเข้าซื้อกิจการในครั้งนี้มีความสำคัญยิ่งยวดต่อมูลค่าตลาดระยะยาวของเราจริงหรือ?", avatar: "👩‍💼" },
        { role: "Managing Director", name: "Vikram", text: "Undoubtedly. It provides immediate access to proprietary patents that will permanently move the needle in our competitive landscape.", th: "อย่างไม่ต้องสงสัยครับ การซื้อกิจการนี้ทำให้เราเข้าถึงสิทธิบัตรเฉพาะทางได้ทันที ซึ่งจะสร้างความเปลี่ยนแปลงครั้งใหญ่ที่วัดผลได้จริงในสมรภูมิการแข่งขันของเราครับ", avatar: "👨‍💼" }
      ]
    },
    practice: [
      {
        id: "q15-1",
        type: "multiple-choice",
        question: "สำนวนใดมีความหมายว่า 'สร้างผลกระทบหรือความเปลี่ยนแปลงที่เห็นได้ชัดเจนและวัดผลได้'?",
        options: ["Bite the bullet", "Move the needle", "Break the ice", "Hit the road"],
        answer: 1,
        explanation: "ถูกต้อง! 'Move the needle' แปลว่า สร้างความก้าวหน้าหรือความเปลี่ยนแปลงที่สังเกตเห็นได้ชัดเจนและวัดผลได้ เป็นสำนวนที่นิยมใช้อย่างยิ่งในเชิงธุรกิจและการตลาด"
      },
      {
        id: "q15-2",
        type: "unscramble",
        question: "เรียงประโยคกลยุทธ์เชิงบริหาร:",
        words: ["Maintaining", "data", "privacy", "is", "of", "paramount", "importance", "to", "us"],
        answer: "Maintaining data privacy is of paramount importance to us",
        explanation: "ประโยคที่ถูกต้องคือ 'Maintaining data privacy is of paramount importance to us' (การรักษาความเป็นส่วนตัวของข้อมูลมีความสำคัญสูงสุดยิ่งยวดสำหรับพวกเรา)"
      },
      {
        id: "q15-3",
        type: "speaking",
        question: "ฝึกพูดประโยคกลยุทธ์ชั้นสูง:",
        targetText: "We need a pragmatic approach that moves the needle on revenue",
        explanation: "ฝึกออกเสียง pragmatic approach และ moves the needle on revenue"
      }
    ]
  },

  {
    id: "lesson-16",
    level: "C1_C2",
    levelBadge: "C1-C2",
    levelTitle: "Advanced to Pro: Mastery & Executive Polish",
    title: "Pro Capstone Exam: แบบทดสอบรวม 4 ทักษะเพื่อรับใบเซอร์ติฟิเคต",
    titleEn: "Comprehensive Capstone Assessment & Official Certification",
    icon: "shield-check",
    duration: "35 นาที",
    xp: 150,
    summary: "บททดสอบจำลองวัดระดับแบบองค์รวม (CEFR A1-C2) ครอบคลุมไวยากรณ์ การสื่อสารเชิงธุรกิจ สำนวน และการออกเสียง เมื่อสอบผ่านรับใบ Certificate of Completion ประจำตัวทันที!",
    theory: [
      {
        heading: "🎓 ยินดีต้อนรับสู่แบบทดสอบประมวลผลความรู้ขั้นสูงสุด (Capstone Exam)",
        explanation: "ขอแสดงความยินดีที่คุณเดินทางมาถึงจุดสูงสุดของหลักสูตร EngMastery: Zero to Pro! การทดสอบนี้จะประเมินทั้ง 4 มิติสำคัญ:\n• แม่นยำเรื่องไวยากรณ์และการผันรูป (Grammar Precision)\n• การเลือกใช้กริยาวลีและสำนวนตามบริบทจริง (Idiomatic Fluency)\n• การเขียนและเจรจาเชิงธุรกิจ (Business & Professional Tact)\n• ความถูกต้องและมั่นใจในการออกเสียง (Pronunciation Clarity)\n\nเมื่อคุณทำคะแนนได้ 80% ขึ้นไป ระบบจะปลดล็อกตราเกียรติยศ 'Pro Certified' และคุณสามารถพิมพ์ใบประกาศนียบัตร (Certificate of Achievement) ใส่ชื่อของคุณได้ทันที!",
        examples: [
          { en: "Mastery is not about never making a mistake; it is about communicating with clarity, confidence, and nuance.", ipa: "", th: "ความเชี่ยวชาญไม่ได้แปลว่าห้ามทำผิดแม้แต่ครั้งเดียว แต่หมายถึงการสื่อสารด้วยความชัดเจน ความมั่นใจ และเข้าใจชั้นเชิงทางภาษา", note: "Philosophy of Fluency" }
        ]
      }
    ],
    practice: [
      {
        id: "q16-1",
        type: "multiple-choice",
        question: "[Grammar Check]: 'By the time the board arrived, the finance team _____ the entire audit.'",
        options: [
          "already finished",
          "has already finished",
          "had already finished",
          "is finishing"
        ],
        answer: 2,
        explanation: "ถูกต้อง! 'had already finished' ใช้ Past Perfect เพื่อบอกเหตุการณ์ที่เกิดขึ้นและสิ้นสุดลง 'ก่อน' อีกเหตุการณ์หนึ่งในอดีต (the board arrived)"
      },
      {
        id: "q16-2",
        type: "multiple-choice",
        question: "[Business Protocol]: ลูกค้าเสนอราคาต่ำเกินไป คุณต้องการปฏิเสธอย่างมืออาชีพพร้อมเปิดทางเลือก ควรพูดว่าอย่างไร?",
        options: [
          "That price is an insult to our development team.",
          "While that number is below our standard threshold, we could explore a phased delivery model to accommodate your budget.",
          "We reject your offer completely.",
          "No, please give us more money."
        ],
        answer: 1,
        explanation: "ถูกต้อง! ข้อ 2 เป็นภาษาการทูตธุรกิจระดับสูงสุด ที่ยอมรับเงื่อนไขลูกค้าแต่เสนอโซลูชันแบบแบ่งเฟส (phased delivery) เพื่อให้สอดคล้องกับงบ"
      },
      {
        id: "q16-3",
        type: "unscramble",
        question: "[Rhetoric Unscramble]: เรียงประโยค Inversion แสดงความสำเร็จ:",
        words: ["Not", "only", "did", "we", "innovate", "we", "also", "set", "the", "benchmark"],
        answer: "Not only did we innovate we also set the benchmark",
        explanation: "ประโยคที่ถูกต้องคือ 'Not only did we innovate we also set the benchmark' (พวกเราไม่เพียงแต่สร้างนวัตกรรมใหม่ แต่เรายังได้สร้างเกณฑ์มาตรฐานให้กับวงการอีกด้วย)"
      },
      {
        id: "q16-4",
        type: "speaking",
        question: "[Pro Speaking Test]: ฝึกพูดประโยคแสดงความเป็นผู้นำ (แตะไมค์แล้วพูด):",
        targetText: "Effective communication bridges the gap between vision and execution",
        explanation: "การสื่อสารที่มีประสิทธิภาพคือสะพานเชื่อมระหว่างวิสัยทัศน์และการลงมือปฏิบัติจริง"
      }
    ]
  }
];

