/**
 * EngMastery: Zero to Pro - Reading Lab Database (readingData.js)
 * High-quality graded reading articles mapped to international CEFR levels (A1 to C2).
 * Equipped with audio TTS transcripts, vocabulary chunks, bilingual translations, and comprehension quizzes.
 */

const readingData = [
  // =========================================================================
  // LEVEL 1: A1 - THE BEGINNER / SURVIVOR (50–80 words)
  // Short, clear sentences, Present Simple, everyday routine & basic office terms
  // =========================================================================
  {
    id: "read-a1-01",
    level: "A1",
    levelTitle: "Level 1: The Survivor (A1)",
    levelBadge: "A1 • Beginner",
    levelColor: "emerald",
    coverEmoji: "☕",
    title: "My Daily Routine as a Cloud Engineer",
    titleTh: "กิจวัตรประจำวันของฉันในฐานะวิศวกรคลาวด์",
    wordCount: 72,
    estimatedTime: "2 นาที",
    xpReward: 50,
    summary: "ฝึกอ่านประโยค Present Simple พื้นฐานผ่านกิจวัตรประจำวันและการตรวจเช็กระบบเซิร์ฟเวอร์ยามเช้าของวิศวกรคลาวด์",
    tags: ["Daily Routine", "Present Simple", "Workplace Basics"],
    keyVocab: [
      { word: "routine", ipa: "/ruːˈtiːn/", pos: "n.", th: "กิจวัตรประจำวัน", chunk: "daily routine" },
      { word: "check", ipa: "/tʃek/", pos: "v.", th: "ตรวจสอบ, ตรวจเช็ก", chunk: "check the system" },
      { word: "server", ipa: "/ˈsɜːrvər/", pos: "n.", th: "เซิร์ฟเวอร์, เครื่องแม่ข่าย", chunk: "cloud servers" },
      { word: "healthy", ipa: "/ˈhelθi/", pos: "adj.", th: "อยู่ในสภาพดี, ไร้ปัญหา", chunk: "healthy and stable" }
    ],
    paragraphs: [
      {
        id: "p1",
        en: "I wake up at seven o'clock every morning. First, I drink a glass of fresh water and eat breakfast with my family.",
        th: "ฉันตื่นนอนตอนเจ็ดโมงเช้าทุกวัน อันดับแรก ฉันดื่มน้ำเปล่าหนึ่งแก้วและรับประทานอาหารเช้าร่วมกับครอบครัว"
      },
      {
        id: "p2",
        en: "At eight o'clock, I turn on my computer and open my email. I check all system alerts from our cloud servers.",
        th: "เวลาแปดโมงตรง ฉันเปิดคอมพิวเตอร์และเปิดอีเมล ฉันตรวจสอบการแจ้งเตือนระบบทั้งหมดจากคลาวด์เซิร์ฟเวอร์ของเรา"
      },
      {
        id: "p3",
        en: "Everything is green and healthy. Then, I join a short morning meeting with my team. We share our daily tasks and help each other. I love my job because I learn new things every day.",
        th: "ทุกอย่างเป็นสีเขียวและทำงานได้ดี จากนั้น ฉันเข้าร่วมการประชุมสั้น ๆ ยามเช้ากับทีมของฉัน เราแชร์ภารกิจประจำวันและช่วยเหลือกัน ฉันรักงานของฉันเพราะฉันได้เรียนรู้สิ่งใหม่ ๆ ในทุกวัน"
      }
    ],
    quiz: [
      {
        type: "multiple-choice",
        question: "What does the author do first after waking up?",
        options: [
          "Turns on the computer",
          "Drinks fresh water and eats breakfast",
          "Joins a morning meeting",
          "Checks server alerts"
        ],
        answer: 1,
        explanation: "ในย่อหน้าแรกระบุชัดเจนว่า: 'First, I drink a glass of fresh water and eat breakfast with my family.'"
      },
      {
        type: "true-false",
        question: "The author checks server alerts before joining the team meeting.",
        options: ["True", "False", "Not Given"],
        answer: 0,
        explanation: "เป็นความจริง (True) เพราะผู้เขียนตรวจเช็กการแจ้งเตือนเซิร์ฟเวอร์ในย่อหน้าที่ 2 ก่อนที่จะเข้าร่วมการประชุมทีมในย่อหน้าที่ 3 ('Then, I join a short morning meeting...')"
      },
      {
        type: "multiple-choice",
        question: "Why does the author love their job?",
        options: [
          "Because they earn a very high salary",
          "Because they work completely alone",
          "Because they learn new things every day",
          "Because they finish work before noon"
        ],
        answer: 2,
        explanation: "ประโยคสุดท้ายของบทความระบุว่า: 'I love my job because I learn new things every day.'"
      }
    ]
  },
  {
    id: "read-a1-02",
    level: "A1",
    levelTitle: "Level 1: The Survivor (A1)",
    levelBadge: "A1 • Beginner",
    levelColor: "emerald",
    coverEmoji: "🏢",
    title: "Welcome to Our New Tech Office",
    titleTh: "ยินดีต้อนรับสู่ออฟฟิศเทคโนโลยีแห่งใหม่ของเรา",
    wordCount: 78,
    estimatedTime: "2 นาที",
    xpReward: 50,
    summary: "ฝึกอ่านบทความแนะนำสถานที่ทำงาน ห้องประชุม และสิ่งอำนวยความสะดวกในออฟฟิศยุคใหม่",
    tags: ["Office Tour", "Directions", "Workplace Facilities"],
    keyVocab: [
      { word: "modern", ipa: "/ˈmɑːdərn/", pos: "adj.", th: "ทันสมัย", chunk: "modern workspace" },
      { word: "quiet", ipa: "/ˈkwaɪət/", pos: "adj.", th: "เงียบสงบ", chunk: "quiet zone" },
      { word: "comfortable", ipa: "/ˈkʌmftəbl/", pos: "adj.", th: "สะดวกสบาย", chunk: "comfortable chairs" },
      { word: "available", ipa: "/əˈveɪləbl/", pos: "adj.", th: "พร้อมใช้งาน, ว่าง", chunk: "freely available" }
    ],
    paragraphs: [
      {
        id: "p1",
        en: "Welcome to our new Bangkok office. Our workspace is bright, clean, and modern. There are fifty desks on the tenth floor.",
        th: "ยินดีต้อนรับสู่ออฟฟิศใหม่ของเราในกรุงเทพฯ พื้นที่ทำงานของเราสว่าง สะอาด และทันสมัย มีโต๊ะทำงานห้าสิบตัวบนชั้นสิบ"
      },
      {
        id: "p2",
        en: "On the left side, we have three quiet meeting rooms with large whiteboards. On the right side, there is a cozy cafeteria.",
        th: "ทางด้านซ้าย เรามีห้องประชุมที่เงียบสงบสามห้องพร้อมกระดานไวท์บอร์ดขนาดใหญ่ ทางด้านขวา มีโรงอาหารที่อบอุ่นและผ่อนคลาย"
      },
      {
        id: "p3",
        en: "Coffee and healthy snacks are free for all employees. Everyone is friendly and helpful. Please feel at home and enjoy your first day!",
        th: "กาแฟและขนมเพื่อสุขภาพฟรีสำหรับพนักงานทุกคน ทุกคนเป็นมิตรและยินดีช่วยเหลือ ขอให้รู้สึกเหมือนอยู่บ้านและมีความสุขกับวันแรกของคุณ!"
      }
    ],
    quiz: [
      {
        type: "multiple-choice",
        question: "On which floor is the office located?",
        options: ["Third floor", "Fifth floor", "Tenth floor", "Twentieth floor"],
        answer: 2,
        explanation: "ในย่อหน้าแรกระบุว่า: 'There are fifty desks on the tenth floor.'"
      },
      {
        type: "true-false",
        question: "Employees have to pay for coffee and snacks.",
        options: ["True", "False", "Not Given"],
        answer: 1,
        explanation: "เป็นเท็จ (False) เพราะในบทความระบุชัดเจนว่า: 'Coffee and healthy snacks are free for all employees.'"
      },
      {
        type: "multiple-choice",
        question: "What is located on the left side of the workspace?",
        options: [
          "A cozy cafeteria",
          "Fifty private desks",
          "Three quiet meeting rooms",
          "A gym and fitness center"
        ],
        answer: 2,
        explanation: "ในย่อหน้าที่ 2 ระบุว่า: 'On the left side, we have three quiet meeting rooms with large whiteboards.'"
      }
    ]
  },

  // =========================================================================
  // LEVEL 2: A2 - THE STORYTELLER (100–150 words)
  // Narrative structures, Past Simple, sequential connectors, personal anecdotes
  // =========================================================================
  {
    id: "read-a2-01",
    level: "A2",
    levelTitle: "Level 2: The Storyteller (A2)",
    levelBadge: "A2 • Elementary",
    levelColor: "teal",
    coverEmoji: "🚀",
    title: "My Memorable First Day at a Tech Startup",
    titleTh: "วันแรกสุดประทับใจในการทำงานที่สตาร์ทอัพเทคโนโลยี",
    wordCount: 132,
    estimatedTime: "3 นาที",
    xpReward: 65,
    summary: "เล่าเรื่องราวความตื่นเต้นในวันแรกของการเปลี่ยนสายงานเข้าสู่วงการเทคโนโลยี และการต้อนรับที่อบอุ่นจากพี่เลี้ยง",
    tags: ["Past Simple", "First Day", "Onboarding Experience"],
    keyVocab: [
      { word: "nervous", ipa: "/ˈnɜːrvəs/", pos: "adj.", th: "ประหม่า, กังวล", chunk: "felt very nervous" },
      { word: "mentor", ipa: "/ˈmentɔːr/", pos: "n.", th: "พี่เลี้ยง, ที่ปรึกษา", chunk: "assigned mentor" },
      { word: "confident", ipa: "/ˈkɑːnfɪdənt/", pos: "adj.", th: "มั่นใจ", chunk: "grow more confident" },
      { word: "relieved", ipa: "/rɪˈliːvd/", pos: "adj.", th: "โล่งใจ, คลายกังวล", chunk: "felt deeply relieved" }
    ],
    paragraphs: [
      {
        id: "p1",
        en: "Last month, I joined an exciting software startup in Bangkok. When I walked through the glass doors on Monday morning, I felt very nervous. My heart beat fast because this was my first full-time role as a developer.",
        th: "เมื่อเดือนที่แล้ว ฉันได้เข้าร่วมงานกับบริษัทสตาร์ทอัพซอฟต์แวร์ที่น่าตื่นเต้นแห่งหนึ่งในกรุงเทพฯ เมื่อฉันก้าวผ่านประตูกระจกเข้ามาในเช้าวันจันทร์ ฉันรู้สึกประหม่ามาก หัวใจของฉันเต้นรัวเพราะนี่คืองานเต็มเวลาครั้งแรกในฐานะนักพัฒนา"
      },
      {
        id: "p2",
        en: "Luckily, a senior engineer named Sarah welcomed me with a warm smile. She gave me my new laptop and guided me through the codebase. At lunchtime, the entire team took me out for authentic Thai noodles.",
        th: "โชคดีที่วิศวกรอาวุโสชื่อซาร่าได้เข้ามาต้อนรับฉันด้วยรอยยิ้มอันอบอุ่น เธอได้มอบแล็ปท็อปเครื่องใหม่ให้ฉันและพาแนะนำโครงสร้างโค้ด ในช่วงพักกลางวัน ทั้งทีมได้พาฉันออกไปทานก๋วยเตี๋ยวไทยแท้ ๆ ด้วยกัน"
      },
      {
        id: "p3",
        en: "By the end of the day, I had submitted my first pull request. I felt relieved and proud. That first day taught me that having a supportive team makes all the difference in the world.",
        th: "เมื่อถึงตอนสิ้นวัน ฉันสามารถส่ง Pull Request แรกของฉันได้สำเร็จ ฉันรู้สึกโล่งใจและภาคภูมิใจ วันแรกนั้นสอนให้ฉันรู้ว่าการมีทีมที่คอยช่วยเหลือเกื้อกูลกันสร้างความแตกต่างได้อย่างมหาศาล"
      }
    ],
    quiz: [
      {
        type: "multiple-choice",
        question: "How did the author feel on Monday morning?",
        options: [
          "Bored and tired",
          "Very nervous",
          "Angry and frustrated",
          "Completely uninterested"
        ],
        answer: 1,
        explanation: "ในย่อหน้าแรกระบุว่า: 'When I walked through the glass doors on Monday morning, I felt very nervous.'"
      },
      {
        type: "true-false",
        question: "The author ate lunch completely alone on their first day.",
        options: ["True", "False", "Not Given"],
        answer: 1,
        explanation: "เป็นเท็จ (False) เพราะในย่อหน้าที่ 2 ระบุว่า: 'At lunchtime, the entire team took me out for authentic Thai noodles.'"
      },
      {
        type: "multiple-choice",
        question: "What milestone did the author achieve before the end of the day?",
        options: [
          "Fixed a high-priority production bug",
          "Delivered a keynote presentation",
          "Submitted their first pull request",
          "Hired two new junior engineers"
        ],
        answer: 2,
        explanation: "ในย่อหน้าที่ 3 ระบุว่า: 'By the end of the day, I had submitted my first pull request.'"
      }
    ]
  },
  {
    id: "read-a2-02",
    level: "A2",
    levelTitle: "Level 2: The Storyteller (A2)",
    levelBadge: "A2 • Elementary",
    levelColor: "teal",
    coverEmoji: "🐞",
    title: "How We Solved the Weekend Production Bug",
    titleTh: "พวกเราช่วยกันแก้ปัญหาบั๊กฉุกเฉินบน Production ในช่วงวันหยุดอย่างไร",
    wordCount: 144,
    estimatedTime: "3 นาที",
    xpReward: 65,
    summary: "เรียนรู้คำศัพท์และโครงสร้างการเล่าเรื่องตามลำดับเวลา (Sequence Connectors) เมื่อเกิดเหตุการณ์ฉุกเฉินในระบบ",
    tags: ["Incident Response", "Teamwork", "Sequence Connectors"],
    keyVocab: [
      { word: "incident", ipa: "/ˈɪnsɪdənt/", pos: "n.", th: "เหตุการณ์ฉุกเฉิน, ปัญหาที่เกิดขึ้น", chunk: "critical incident" },
      { word: "alert", ipa: "/əˈlɜːrt/", pos: "n.", th: "การแจ้งเตือนภัย", chunk: "receive an alert" },
      { word: "investigate", ipa: "/ɪnˈvestɪɡeɪt/", pos: "v.", th: "สืบสวน, ตรวจสอบหาสาเหตุ", chunk: "investigate the root cause" },
      { word: "resolved", ipa: "/rɪˈzɑːlvd/", pos: "adj.", th: "ได้รับการแก้ไขเรียบร้อย", chunk: "successfully resolved" }
    ],
    paragraphs: [
      {
        id: "p1",
        en: "Last Saturday afternoon, our monitoring system triggered a red alert. Over ten thousand users suddenly could not complete their checkout payments on our shopping app. I immediately received a high-priority notification on my phone.",
        th: "เมื่อบ่ายวันเสาร์ที่แล้ว ระบบตรวจสอบของเราส่งสัญญาณเตือนสีแดง ผู้ใช้กว่าหนึ่งหมื่นคนไม่สามารถชำระเงินในแอปช้อปปิ้งของเราได้ทันที ฉันได้รับการแจ้งเตือนระดับด่วนที่สุดบนโทรศัพท์ทันที"
      },
      {
        id: "p2",
        en: "First, our on-call engineer created an incident channel on Slack. Next, three developers logged in to inspect the server error logs. We discovered that a recent database index update had caused severe query timeouts.",
        th: "อันดับแรก วิศวกรผู้อยู่เวรได้สร้างช่องเหตุการณ์ฉุกเฉินบน Slack ต่อมา นักพัฒนาสามคนได้ล็อกอินเข้าไปตรวจสอบ Log ข้อผิดพลาดของเซิร์ฟเวอร์ เราค้นพบว่าการอัปเดตดัชนีฐานข้อมูลล่าสุดทำให้เกิดการหมดเวลาของการเรียกดูข้อมูลอย่างรุนแรง"
      },
      {
        id: "p3",
        en: "Finally, our lead developer rolled back the database configuration. Within twenty minutes, all payment services returned to normal. We wrote a detailed post-incident review to make sure this mistake would never happen again.",
        th: "ในที่สุด หัวหน้านักพัฒนาของเราได้ย้อนการตั้งค่าฐานข้อมูลกลับสู่เวอร์ชันเดิม ภายในยี่สิบนาที บริการชำระเงินทั้งหมดกลับมาเป็นปกติ เราได้เขียนรายงานสรุปหลังเหตุการณ์เพื่อรับประกันว่าความผิดพลาดนี้จะไม่เกิดขึ้นอีก"
      }
    ],
    quiz: [
      {
        type: "multiple-choice",
        question: "What issue did users face on Saturday afternoon?",
        options: [
          "They could not create new user accounts",
          "They could not complete checkout payments",
          "The mobile app crashed on startup",
          "Product images disappeared"
        ],
        answer: 1,
        explanation: "ในย่อหน้าแรกระบุว่า: 'Over ten thousand users suddenly could not complete their checkout payments...'"
      },
      {
        type: "multiple-choice",
        question: "What was the root cause of the incident?",
        options: [
          "A power outage in the local datacenter",
          "A cyber attack from unknown hackers",
          "A database index update that caused query timeouts",
          "A broken payment gateway API"
        ],
        answer: 2,
        explanation: "ย่อหน้าที่ 2 ระบุว่า: '...a recent database index update had caused severe query timeouts.'"
      },
      {
        type: "true-false",
        question: "The team did not write any report after solving the issue.",
        options: ["True", "False", "Not Given"],
        answer: 1,
        explanation: "เป็นเท็จ (False) เพราะประโยคสุดท้ายระบุว่า: 'We wrote a detailed post-incident review to make sure this mistake would never happen again.'"
      }
    ]
  },

  // =========================================================================
  // LEVEL 3: B1 - THE CONNECTOR (200–300 words)
  // Cause & Effect, Present Perfect, Passive Voice, professional workplace dynamics
  // =========================================================================
  {
    id: "read-b1-01",
    level: "B1",
    levelTitle: "Level 3: The Connector (B1)",
    levelBadge: "B1 • Intermediate",
    levelColor: "sky",
    coverEmoji: "🌐",
    title: "Why Remote Work Has Changed Tech Teams Forever",
    titleTh: "ทำไมการทำงานทางไกลจึงเปลี่ยนวิถีทีมเทคโนโลยีไปตลอดกาล",
    wordCount: 238,
    estimatedTime: "4 นาที",
    xpReward: 80,
    summary: "บทความวิเคราะห์ข้อดีและข้อท้าทายของการทำงานแบบ Remote Work พร้อมคำศัพท์และไวยากรณ์เชื่อมโยงเหตุและผล",
    tags: ["Remote Work", "Present Perfect", "Cause and Effect"],
    keyVocab: [
      { word: "productivity", ipa: "/ˌproʊdʌkˈtɪvəti/", pos: "n.", th: "ผลิตภาพ, ประสิทธิภาพในการทำงาน", chunk: "boost team productivity" },
      { word: "flexibility", ipa: "/ˌfleksəˈbɪləti/", pos: "n.", th: "ความยืดหยุ่น", chunk: "greater workplace flexibility" },
      { word: "asynchronous", ipa: "/eɪˈsɪŋkrənəs/", pos: "adj.", th: "แบบไม่พร้อมกัน, การสื่อสารข้ามเวลา", chunk: "asynchronous communication" },
      { word: "isolated", ipa: "/ˈaɪsəleɪtɪd/", pos: "adj.", th: "โดดเดี่ยว, ขาดการปฏิสัมพันธ์", chunk: "feel emotionally isolated" }
    ],
    paragraphs: [
      {
        id: "p1",
        en: "Over the past several years, the global software industry has experienced an unprecedented transformation. What began as a temporary response to global health concerns has now evolved into a permanent operational model: remote and hybrid work. For many software developers, the daily commute has been replaced by home offices and digital workspaces.",
        th: "ในช่วงหลายปีที่ผ่านมา อุตสาหกรรมซอฟต์แวร์ระดับโลกได้เผชิญกับการเปลี่ยนแปลงครั้งประวัติศาสตร์ สิ่งที่เริ่มต้นจากการรับมือชั่วคราวต่อความกังวลด้านสุขภาพระดับโลก บัดนี้ได้วิวัฒนาการไปสู่รูปแบบการดำเนินงานถาวร นั่นคือการทำงานแบบรีโมตและไฮบริด สำหรับนักพัฒนาซอฟต์แวร์จำนวนมาก การเดินทางไปทำงานทุกวันถูกแทนที่ด้วยโฮมออฟฟิศและพื้นที่ทำงานดิจิทัล"
      },
      {
        id: "p2",
        en: "Research has shown that remote work offers substantial advantages. Engineers report higher levels of job satisfaction due to greater schedule flexibility and fewer unnecessary physical meetings. Furthermore, companies can recruit top engineering talent regardless of geographical boundaries, which allows multinational organizations to build highly diverse and specialized teams.",
        th: "งานวิจัยแสดงให้เห็นว่าการทำงานทางไกลมอบข้อได้เปรียบมากมาย วิศวกรรายงานถึงระดับความพึงพอใจในงานที่สูงขึ้นอันเนื่องมาจากความยืดหยุ่นของตารางเวลาที่มากขึ้นและการประชุมที่ไม่จำเป็นลดลง ยิ่งไปกว่านั้น บริษัทยังสามารถสรรหาบุคลากรที่มีความสามารถระดับแนวหน้าได้โดยไม่ขึ้นกับข้อจำกัดทางภูมิศาสตร์ ซึ่งเปิดโอกาสให้องค์กรข้ามชาติสามารถสร้างทีมที่มีความหลากหลายและเชี่ยวชาญเฉพาะทางสูง"
      },
      {
        id: "p3",
        en: "However, this model also presents notable challenges. Because team members work across multiple time zones, asynchronous communication must be mastered. When documentation is poor, misunderstandings frequently occur. Additionally, some workers feel isolated after long periods without face-to-face interaction. Consequently, modern engineering managers are continually developing creative strategies to maintain social connection and team morale.",
        th: "อย่างไรก็ดี รูปแบบนี้ก็นำมาซึ่งความท้าทายที่น่าสังเกตเช่นกัน เนื่องจากสมาชิกในทีมทำงานข้ามหลายเขตเวลา ทักษะการสื่อสารแบบอะซิงโครนัสจึงเป็นสิ่งที่จะต้องเชี่ยวชาญ เมื่อเอกสารบันทึกไม่มีคุณภาพ ความเข้าใจผิดจึงเกิดขึ้นบ่อยครั้ง นอกจากนี้ พนักงานบางคนยังรู้สึกโดดเดี่ยวหลังจากไม่ได้พบปะพูดคุยกันต่อหน้าเป็นเวลานาน ด้วยเหตุนี้ ผู้จัดการฝ่ายวิศวกรรมยุคใหม่จึงต้องพัฒนาวิธีคิดเชิงสร้างสรรค์อย่างต่อเนื่องเพื่อรักษาความผูกพันทางสังคมและขวัญกำลังใจของทีม"
      }
    ],
    quiz: [
      {
        type: "multiple-choice",
        question: "According to paragraph 2, what is a primary advantage of remote work for companies?",
        options: [
          "They can eliminate all company software expenses",
          "They can hire talented engineers regardless of geographic location",
          "They no longer need to conduct performance appraisals",
          "They can force all staff to work on weekends"
        ],
        answer: 1,
        explanation: "ในย่อหน้าที่ 2 ระบุว่า: '...companies can recruit top engineering talent regardless of geographical boundaries...'"
      },
      {
        type: "true-false",
        question: "Remote workers never experience feelings of isolation.",
        options: ["True", "False", "Not Given"],
        answer: 1,
        explanation: "เป็นเท็จ (False) เพราะในย่อหน้าที่ 3 ระบุชัดเจนว่า: 'Additionally, some workers feel isolated after long periods without face-to-face interaction.'"
      },
      {
        type: "multiple-choice",
        question: "What communication skill is essential when teams collaborate across different time zones?",
        options: [
          "Daily telemarketing",
          "Asynchronous communication",
          "Handwritten postal mail",
          "Mandatory video calls 24 hours a day"
        ],
        answer: 1,
        explanation: "ในย่อหน้าที่ 3 ระบุว่า: 'Because team members work across multiple time zones, asynchronous communication must be mastered.'"
      }
    ]
  },
  {
    id: "read-b1-02",
    level: "B1",
    levelTitle: "Level 3: The Connector (B1)",
    levelBadge: "B1 • Intermediate",
    levelColor: "sky",
    coverEmoji: "⏱️",
    title: "Mastering the Daily Standup: Keep It Concise, Keep It Clear",
    titleTh: "เทคนิคการพูด Standup ประจำวันให้กระชับ ชัดเจน และตรงประเด็น",
    wordCount: 255,
    estimatedTime: "4 นาที",
    xpReward: 80,
    summary: "เข้าใจหัวใจของการประชุมแบบ Agile Scrum พร้อมโครงสร้าง 3 คำถามทองคำเพื่อรายงานความคืบหน้าอย่างมืออาชีพ",
    tags: ["Agile Culture", "Standup Meetings", "Professional Speaking"],
    keyVocab: [
      { word: "concise", ipa: "/kənˈsaɪs/", pos: "adj.", th: "กระชับ, รัดกุม", chunk: "concise summary" },
      { word: "blocker", ipa: "/ˈblɑːkər/", pos: "n.", th: "อุปสรรค, ปัญหาที่ขัดขวางการทำงาน", chunk: "identify blockers" },
      { word: "collaborate", ipa: "/kəˈlæbəreɪt/", pos: "v.", th: "ร่วมมือ, ทำงานร่วมกัน", chunk: "collaborate effectively" },
      { word: "transparent", ipa: "/trænsˈpærənt/", pos: "adj.", th: "โปร่งใส, ชัดเจนตรวจสอบได้", chunk: "transparent workflow" }
    ],
    paragraphs: [
      {
        id: "p1",
        en: "In modern Agile software organizations, the Daily Standup is perhaps the most ubiquitous ritual. Usually scheduled for fifteen minutes every morning, this meeting is designed to synchronize the development team, identify impediments, and reinforce collective accountability. However, many engineers unintentionally turn this quick check-in into an exhaustive status lecture.",
        th: "ในองค์กรซอฟต์แวร์แบบ Agile ยุคใหม่ การประชุม Daily Standup น่าจะเป็นพิธีกรรมที่พบเห็นได้บ่อยที่สุด โดยปกติจะจัดขึ้นเป็นเวลาสิบห้านาทีทุกเช้า การประชุมนี้ได้รับการออกแบบมาเพื่อปรับข้อมูลของทีมพัฒนาให้ตรงกัน ระบุอุปสรรค และเสริมสร้างความรับผิดชอบร่วมกัน อย่างไรก็ตาม วิศวกรหลายคนกลับเปลี่ยนการพูดคุยสั้น ๆ นี้ให้กลายเป็นการบรรยายสถานะงานที่ยืดยาวโดยไม่ได้ตั้งใจ"
      },
      {
        id: "p2",
        en: "To deliver an effective standup update, seasoned professionals adhere strictly to the classic three-question framework: What did I complete yesterday? What do I plan to accomplish today? Are there any blockers in my way? By focusing exclusively on outcomes rather than reciting every minor task, you respect your teammates' valuable attention.",
        th: "เพื่อให้การรายงานสถานะมีประสิทธิภาพ มืออาชีพที่มีประสบการณ์จะยึดมั่นในกรอบ 3 คำถามคลาสสิกอย่างเคร่งครัด: เมื่อวานนี้ฉันทำอะไรเสร็จสิ้นไปแล้ว? วันนี้ฉันวางแผนจะทำอะไรให้สำเร็จ? และมีอุปสรรคใดที่ขัดขวางฉันอยู่หรือไม่? การเน้นเฉพาะผลลัพธ์แทนที่จะร่ายยาวทุกงานย่อย แสดงถึงความเคารพต่อเวลาอันมีค่าของเพื่อนร่วมทีม"
      },
      {
        id: "p3",
        en: "When a blocker requires in-depth technical debate, it should immediately be designated as an 'offline discussion.' This means the relevant engineers schedule a separate huddle after the standup concludes, allowing the rest of the squad to return promptly to their code. Practicing this discipline keeps meetings energetic, transparent, and genuinely valuable.",
        th: "เมื่อมีปัญหาหรืออุปสรรคที่ต้องถกเถียงเชิงเทคนิคในเชิงลึก ปัญหานั้นควรถูกกำหนดให้เป็นการสนทนานอกรอบทันที ซึ่งหมายความว่าวิศวกรที่เกี่ยวข้องจะนัดคุยแยกต่างหากหลังจากจบการ Standup เพื่อเปิดโอกาสให้สมาชิกคนอื่นในทีมสามารถกลับไปเขียนโค้ดได้ทันที การฝึกวินัยนี้จะช่วยให้การประชุมเปี่ยมด้วยพลัง โปร่งใส และมีคุณค่าอย่างแท้จริง"
      }
    ],
    quiz: [
      {
        type: "multiple-choice",
        question: "What is the typical intended duration of a Daily Standup meeting?",
        options: ["5 minutes", "15 minutes", "45 minutes", "1 hour"],
        answer: 1,
        explanation: "ในย่อหน้าแรกระบุว่า: 'Usually scheduled for fifteen minutes every morning...'"
      },
      {
        type: "multiple-choice",
        question: "What should engineers do when an impediment requires a lengthy technical debate?",
        options: [
          "Continue arguing until everyone agrees, even if it takes an hour",
          "Cancel the sprint immediately",
          "Take the issue offline in a separate discussion with relevant people",
          "Ignore the problem and hope it resolves itself"
        ],
        answer: 2,
        explanation: "ในย่อหน้าที่ 3 ระบุว่า: 'When a blocker requires in-depth technical debate, it should immediately be designated as an offline discussion.'"
      },
      {
        type: "true-false",
        question: "Engineers are encouraged to recite every single minor detail of their day during standup.",
        options: ["True", "False", "Not Given"],
        answer: 1,
        explanation: "เป็นเท็จ (False) เพราะย่อหน้าที่ 2 ระบุชัดเจนว่าให้เน้นผลลัพธ์สำคัญ ไม่ควรร่ายงานย่อย ('...focusing exclusively on outcomes rather than reciting every minor task...')"
      }
    ]
  },

  // =========================================================================
  // LEVEL 4: B2 - THE PROFESSIONAL & TECH WRITER (350–500 words)
  // Specialized domain depth, CI/CD, DevOps, Architecture, High-context nuance
  // =========================================================================
  {
    id: "read-b2-01",
    level: "B2",
    levelTitle: "Level 4: The Professional (B2)",
    levelBadge: "B2 • Upper-Intermediate",
    levelColor: "indigo",
    coverEmoji: "⚙️",
    title: "Building Resilient Systems: The Philosophy of CI/CD and Chaos Engineering",
    titleTh: "การสร้างระบบที่มีความยืดหยุ่น: ปรัชญาของ CI/CD และ Chaos Engineering",
    wordCount: 378,
    estimatedTime: "5 นาที",
    xpReward: 100,
    summary: "เจาะลึกปรัชญาของระบบการส่งมอบซอฟต์แวร์สมัยใหม่ การทดสอบอัตโนมัติ และการทดลองความเสี่ยงเพื่อป้องกันการล่มของระบบ",
    tags: ["DevOps", "CI/CD Pipeline", "Chaos Engineering", "Resilience"],
    keyVocab: [
      { word: "resilient", ipa: "/rɪˈzɪliənt/", pos: "adj.", th: "ยืดหยุ่น, ฟื้นตัวได้เร็วจากวิกฤต", chunk: "resilient distributed systems" },
      { word: "deployment", ipa: "/dɪˈplɔɪmənt/", pos: "n.", th: "การปล่อยเวอร์ชัน, การนำระบบขึ้นใช้งานจริง", chunk: "automated deployment pipeline" },
      { word: "vulnerability", ipa: "/ˌvʌlnərəˈbɪləti/", pos: "n.", th: "ช่องโหว่, จุดเปราะบาง", chunk: "uncover latent vulnerabilities" },
      { word: "downtime", ipa: "/ˈdaʊntaɪm/", pos: "n.", th: "เวลาที่ระบบหยุดทำงาน, ระบบล่ม", chunk: "zero downtime release" }
    ],
    paragraphs: [
      {
        id: "p1",
        en: "In the formative decades of enterprise computing, software delivery was characterized by monolithic architectures and infrequent, high-stakes deployments. Teams accumulated months of untested code, resulting in tense midnight maintenance windows that often ended in catastrophic service outages. Today, however, high-performing engineering organizations embrace Continuous Integration and Continuous Delivery (CI/CD) as non-negotiable foundations of modern platform reliability.",
        th: "ในยุคแรกเริ่มของระบบคอมพิวเตอร์ระดับองค์กร การส่งมอบซอฟต์แวร์มีลักษณะเป็นสถาปัตยกรรมขนาดใหญ่แบบโมโนลิธิก และการปล่อยเวอร์ชันมักเกิดขึ้นไม่บ่อยแต่เต็มไปด้วยความเสี่ยง ทีมงานต้องสะสมโค้ดที่ยังไม่ผ่านการทดสอบไว้นานหลายเดือน ส่งผลให้การปรับปรุงระบบยามค่ำคืนเต็มไปด้วยความตึงเครียดและมักจบลงด้วยการที่ระบบล่มอย่างรุนแรง อย่างไรก็ตาม ในปัจจุบัน องค์กรวิศวกรรมชั้นนำต่างยึดถือ CI/CD เป็นรากฐานสำคัญที่ไม่สามารถต่อรองได้สำหรับความน่าเชื่อถือของแพลตฟอร์มยุคใหม่"
      },
      {
        id: "p2",
        en: "The fundamental premise of Continuous Integration is that code changes should be validated continuously rather than deferred. Every time an engineer pushes commits to a repository, automated testing suites—spanning unit tests, integration assertions, security scanning, and static code analysis—are executed in ephemeral container environments. Consequently, regressions are surfaced within minutes, dramatically reducing the cognitive cost required to diagnose and remediate errors.",
        th: "สมมติฐานพื้นฐานของการผสานรวมอย่างต่อเนื่อง (CI) คือการเปลี่ยนแปลงของโค้ดควรได้รับการตรวจสอบความถูกต้องอย่างสม่ำเสมอแทนที่จะถูกเลื่อนออกไป ทุกครั้งที่วิศวกรส่งโค้ดขึ้นสู่ Repository ชุดการทดสอบอัตโนมัติซึ่งครอบคลุมการทดสอบระดับยูนิต, การทดสอบการผสานรวม, การสแกนความปลอดภัย และการวิเคราะห์โค้ดสถิต จะถูกรันขึ้นในคอนเทนเนอร์ชั่วคราว ด้วยเหตุนี้ ความผิดพลาดถอยหลังจึงถูกตรวจพบภายในไม่กี่นาที ซึ่งช่วยลดต้นทุนทางความคิดในการวินิจฉัยและแก้ไขข้อผิดพลาดลงได้อย่างมหาศาล"
      },
      {
        id: "p3",
        en: "Complementing CI/CD is the emergent discipline of Chaos Engineering, pioneered by Netflix and popularized across hyperscale cloud providers. Rather than waiting passively for unpredicted catastrophic failures in production, Chaos Engineering proactively introduces controlled disturbances—such as terminating virtual machine instances, injecting network latency, or simulating regional datacenter blackouts. By intentionally stressing systems under live traffic, architects verify whether fallback mechanisms and circuit breakers behave as intended.",
        th: "สิ่งที่เข้ามาเสริมพลังให้แก่ CI/CD คือศาสตร์ใหม่อย่าง Chaos Engineering ซึ่งบุกเบิกโดย Netflix และได้รับความนิยมอย่างแพร่หลายในหมู่ผู้ให้บริการคลาวด์ขนาดใหญ่ แทนที่จะรอคอยอย่างเฉยเมยให้เกิดความล้มเหลวครั้งใหญ่บน Production โดยไม่คาดฝัน วิศวกรรมความโกลาหลจะชิงลงมือสร้างความปั่นป่วนที่ควบคุมได้ เช่น การปิด Virtual Machine กะทันหัน, การเพิ่มความหน่วงของเครือข่าย หรือการจำลองสถานการณ์ศูนย์ข้อมูลดับ การจงใจเพิ่มแรงกดดันต่อระบบภายใต้ทราฟฟิกจริงช่วยให้สถาปนิกตรวจสอบได้ว่ากลไกสำรองและ Circuit Breaker ทำงานได้ตามที่ออกแบบไว้หรือไม่"
      },
      {
        id: "p4",
        en: "Ultimately, building resilient distributed systems is as much a cultural paradigm as a technical accomplishment. It shifts an engineering organization's objective from attempting to prevent all possible failures to designing architectures that gracefully tolerate inevitable disruptions without degrading the end-user experience.",
        th: "ในท้ายที่สุด การสร้างระบบแบบกระจายที่มีความยืดหยุ่นถือเป็นเรื่องของการเปลี่ยนกระบวนทัศน์ทางวัฒนธรรมพอ ๆ กับความสำเร็จทางเทคนิค มันช่วยปรับเปลี่ยนเป้าหมายขององค์กรวิศวกรรมจากการพยายามป้องกันความล้มเหลวที่เป็นไปได้ทั้งหมด ไปสู่การออกแบบสถาปัตยกรรมที่สามารถยอมรับความขัดข้องที่ไม่อาจหลีกเลี่ยงได้อย่างสง่างาม โดยไม่ลดทอนประสบการณ์การใช้งานของผู้ใช้ปลายทาง"
      }
    ],
    quiz: [
      {
        type: "multiple-choice",
        question: "What was a major disadvantage of traditional monolithic software releases mentioned in paragraph 1?",
        options: [
          "Software code was too small to be meaningful",
          "Deployments were infrequent, high-risk, and often led to service outages",
          "Automated tests took over three weeks to write",
          "Customers were forced to rewrite the server code themselves"
        ],
        answer: 1,
        explanation: "ในย่อหน้าแรกระบุว่า: '...infrequent, high-stakes deployments... often ended in catastrophic service outages.'"
      },
      {
        type: "multiple-choice",
        question: "What is the primary methodology behind Chaos Engineering?",
        options: [
          "Ignoring monitoring alerts until customers complain",
          "Proactively injecting controlled failures into systems to test fallback mechanisms",
          "Deleting all automated pipelines to see if developers can manually deploy",
          "Allowing random users to edit production database tables"
        ],
        answer: 1,
        explanation: "ในย่อหน้าที่ 3 อธิบายว่า Chaos Engineering จงใจใส่ความผิดพลาดที่มีการควบคุมเข้าไปในระบบ เช่น ปิด VM หรือเพิ่มความหน่วงเครือข่าย เพื่อทดสอบการทำงานของ Fallback"
      },
      {
        type: "true-false",
        question: "According to paragraph 4, the ultimate goal of resilience is to build systems that gracefully tolerate inevitable failures.",
        options: ["True", "False", "Not Given"],
        answer: 0,
        explanation: "เป็นความจริง (True) ประโยคสรุปในย่อหน้าที่ 4 ยืนยันว่า: '...designing architectures that gracefully tolerate inevitable disruptions without degrading the end-user experience.'"
      }
    ]
  },
  {
    id: "read-b2-02",
    level: "B2",
    levelTitle: "Level 4: The Professional (B2)",
    levelBadge: "B2 • Upper-Intermediate",
    levelColor: "indigo",
    coverEmoji: "🌍",
    title: "Navigating Cultural Nuances in Global Code Reviews and Asynchronous Discussions",
    titleTh: "การรับมือกับความแตกต่างทางวัฒนธรรมในการตรวจโค้ดและการสื่อสารในทีมสากล",
    wordCount: 395,
    estimatedTime: "5 นาที",
    xpReward: 100,
    summary: "เรียนรู้ศิลปะการให้ Feedback ใน Pull Request ข้ามวัฒนธรรม การรักษา Psychological Safety และมารยาทการสื่อสารระดับสากล",
    tags: ["Code Reviews", "Cross-Cultural Communication", "Psychological Safety"],
    keyVocab: [
      { word: "constructive", ipa: "/kənˈstrʌktɪv/", pos: "adj.", th: "เชิงสร้างสรรค์, เป็นประโยชน์", chunk: "constructive feedback" },
      { word: "nuance", ipa: "/ˈnuːɑːns/", pos: "n.", th: "ความแตกต่างเพียงเล็กน้อย, นัยแฝง", chunk: "cultural nuances" },
      { word: "psychological", ipa: "/ˌsaɪkəˈlɑːdʒɪkl/", pos: "adj.", th: "ทางจิตวิทยา", chunk: "psychological safety" },
      { word: "empathy", ipa: "/ˈempəθi/", pos: "n.", th: "ความเข้าอกเข้าใจผู้อื่น", chunk: "demonstrate genuine empathy" }
    ],
    paragraphs: [
      {
        id: "p1",
        en: "As software engineering teams increasingly transition into globally distributed collectives, technical excellence alone is no longer sufficient to guarantee team harmony. When engineers from North America, Northern Europe, East Asia, and Latin America collaborate asynchronously on platforms like GitHub and GitLab, subtle cultural discrepancies in communication styles frequently emerge in code reviews.",
        th: "ในขณะที่ทีมวิศวกรรมซอฟต์แวร์กำลังเปลี่ยนผ่านไปสู่การรวมตัวกันของคนทำงานทั่วโลก ความเป็นเลิศทางเทคนิคเพียงอย่างเดียวจึงไม่เพียงพออีกต่อไปที่จะรับประกันความกลมเกลียวในทีม เมื่อวิศวกรจากอเมริกาเหนือ, ยุโรปเหนือ, เอเชียตะวันออก และละตินอเมริกา ต้องทำงานร่วมกันแบบอะซิงโครนัสบนแพลตฟอร์มอย่าง GitHub และ GitLab ความแตกต่างทางวัฒนธรรมที่ละเอียดอ่อนในรูปแบบการสื่อสารจึงมักปรากฏให้เห็นในการตรวจโค้ด"
      },
      {
        id: "p2",
        en: "Linguists and sociologists frequently categorize workplace communication along a spectrum between 'low-context' and 'high-context' cultures. Engineers hailing from low-context cultures (such as Germany, the Netherlands, or the United States) tend to view written critique as purely objective and task-oriented. A brief comment like 'This loop is inefficient; refactor it' is intended as direct technical feedback with zero emotional malice.",
        th: "นักภาษาศาสตร์และนักสังคมวิทยามักจัดกลุ่มการสื่อสารในสถานที่ทำงานตามสเปกตรัมระหว่างวัฒนธรรมแบบ 'Low-Context' (สื่อสารตรงไปตรงมา) และ 'High-Context' (สื่อสารโดยคำนึงถึงบริบทและความสัมพันธ์) วิศวกรที่มาจากวัฒนธรรม Low-Context (เช่น เยอรมนี, เนเธอร์แลนด์ หรือสหรัฐอเมริกา) มักมองข้อความวิจารณ์เป็นเรื่องเชิงวัตถุวิสัยและเน้นที่ตัวงาน ข้อความสั้น ๆ เช่น 'ลูปนี้ไม่มีประสิทธิภาพ จงเขียนใหม่' จึงมีเจตนาเพียงเพื่อแนะนำทางเทคนิคอย่างตรงไปตรงมาโดยไม่มีเจตนาร้ายทางอารมณ์ใด ๆ"
      },
      {
        id: "p3",
        en: "Conversely, developers raised in high-context, consensus-driven environments (including Thailand, Japan, and parts of Latin America) often perceive blunt feedback as a direct indictment of their personal competence or professionalism. In these cultures, criticism is customarily softened with praise, conditional framing, or polite inquiry, such as: 'Thanks for this solution! Could we explore whether memoizing this function might yield better performance?'",
        th: "ในทางกลับกัน นักพัฒนาที่เติบโตมาในสภาพแวดล้อมแบบ High-Context ที่ให้ความสำคัญกับการประนีประนอมและความรู้สึก (รวมถึงไทย, ญี่ปุ่น และบางส่วนของละตินอเมริกา) มักรับรู้ว่าข้อความที่ห้วนสั้นตรง ๆ คือการตำหนิติเตียนความสามารถหรือความเป็นมืออาชีพของตน ในวัฒนธรรมเหล่านี้ ข้อวิจารณ์มักจะถูกทำให้ละมุนละม่อมลงด้วยคำชม การใช้ประโยคเงื่อนไข หรือการตั้งคำถามอย่างสุภาพ เช่น: 'ขอบคุณสำหรับวิธีแก้นี้นะครับ! เราลองมาดูร่วมกันไหมว่าการทำ Memoization ฟังก์ชันนี้จะช่วยเพิ่มประสิทธิภาพได้ดีขึ้นหรือไม่ครับ?'"
      },
      {
        id: "p4",
        en: "To foster durable psychological safety across distributed rosters, progressive engineering organizations establish explicit code review guidelines. Techniques such as conventional comment prefixes (e.g., 'nitpick:', 'suggestion:', 'blocking:'), explaining the architectural rationale behind requested changes, and pairing written critique with generous recognition of good work ensure that reviews remain educational, respectful, and universally empowering.",
        th: "เพื่อเสริมสร้างความปลอดภัยทางจิตวิทยา (Psychological Safety) ที่ยั่งยืนในทีมข้ามชาติ องค์กรวิศวกรรมที่ก้าวหน้าจึงกำหนดแนวทางการตรวจโค้ดที่ชัดเจน เช่น การใช้คำนำหน้าคอมเมนต์ตามธรรมเนียม (เช่น 'nitpick:', 'suggestion:', 'blocking:'), การอธิบายเหตุผลเชิงสถาปัตยกรรมเบื้องหลังการขอให้แก้ไข และการประกบข้อวิจารณ์เข้ากับการกล่าวชื่นชมงานที่ดี สิ่งเหล่านี้ช่วยให้การตรวจโค้ดยังคงเป็นพื้นที่แห่งการเรียนรู้ ให้เกียรติซึ่งกันและกัน และส่งเสริมศักยภาพของทุกคนอย่างแท้จริง"
      }
    ],
    quiz: [
      {
        type: "multiple-choice",
        question: "How do engineers from low-context cultures typically perceive concise technical critique in pull requests?",
        options: [
          "As an intentional emotional attack on their integrity",
          "As purely objective feedback focused on improving the code",
          "As a sign that they should resign immediately",
          "As an informal invitation to have lunch"
        ],
        answer: 1,
        explanation: "ในย่อหน้าที่ 2 ระบุว่า วิศวกรจาก Low-context cultures มองข้อความวิจารณ์ว่า: '...as purely objective and task-oriented... with zero emotional malice.'"
      },
      {
        type: "multiple-choice",
        question: "Which of the following phrases is characteristic of a high-context feedback approach?",
        options: [
          "'Delete this entire class immediately.'",
          "'This code is completely unacceptable.'",
          "'Thanks for this solution! Could we explore whether memoizing might yield better performance?'",
          "'Why did you write this?'"
        ],
        answer: 2,
        explanation: "ในย่อหน้าที่ 3 ยกตัวอย่างประโยคสุภาพที่มีการขอบคุณและตั้งคำถามเพื่อเปิดทางเลือกอย่างสร้างสรรค์"
      },
      {
        type: "true-false",
        question: "Using prefix labels like 'nitpick:' or 'suggestion:' can help reduce misunderstandings in global code reviews.",
        options: ["True", "False", "Not Given"],
        answer: 0,
        explanation: "เป็นความจริง (True) ย่อหน้าที่ 4 ระบุว่าการใช้ Conventional comment prefixes ช่วยสร้างความชัดเจนและคงไว้ซึ่ง Psychological safety"
      }
    ]
  },

  // =========================================================================
  // LEVEL 5: C1–C2 - THE MASTER (500+ words)
  // Sophisticated analytical discourse, autonomous AI agents, architectural entropy
  // =========================================================================
  {
    id: "read-c1-01",
    level: "C1",
    levelTitle: "Level 5: The Master (C1–C2)",
    levelBadge: "C1 • Advanced / Master",
    levelColor: "purple",
    coverEmoji: "🧠",
    title: "The Autonomous Frontier: Cognitive Offloading and the Architectural Metamorphosis of Enterprise AI",
    titleTh: "พรมแดนใหม่ของระบบอัตโนมัติ: การแบ่งเบาภาระการคิดและการเปลี่ยนผ่านเชิงสถาปัตยกรรมของ AI ระดับองค์กร",
    wordCount: 524,
    estimatedTime: "7 นาที",
    xpReward: 120,
    summary: "บทความวิเคราะห์เชิงลึกระดับ C1–C2 สำรวจการเปลี่ยนผ่านจากโมเดลถาม-ตอบ สู่ระบบ Autonomous AI Agents ที่สามารถวางแผน ตรวจสอบตนเอง และปรับเปลี่ยนสถาปัตยกรรมระบบได้แบบไดนามิก",
    tags: ["Autonomous Agents", "Cognitive Linguistics", "Enterprise Architecture", "LLMs"],
    keyVocab: [
      { word: "paradigm", ipa: "/ˈpærədaɪm/", pos: "n.", th: "กระบวนทัศน์, แบบแผนทางความคิด", chunk: "fundamental paradigm shift" },
      { word: "autonomous", ipa: "/ɔːˈtɑːnəməs/", pos: "adj.", th: "ที่เป็นอัตโนมัติ, มีอำนาจตัดสินใจด้วยตนเอง", chunk: "autonomous reasoning agents" },
      { word: "metamorphosis", ipa: "/ˌmetəˈmɔːrfəsɪs/", pos: "n.", th: "การเปลี่ยนแปลงรูปพรรณสัณฐานอย่างสิ้นเชิง", chunk: "architectural metamorphosis" },
      { word: "orchestration", ipa: "/ˌɔːrkɪˈstreɪʃn/", pos: "n.", th: "การประสานงานระบบที่ซับซ้อนให้ทำงานร่วมกัน", chunk: "multi-agent orchestration" }
    ],
    paragraphs: [
      {
        id: "p1",
        en: "The contemporary trajectory of artificial intelligence has transcended the simplistic novelty of conversational interfaces. While the initial wave of generative language models captivated the global imagination through conversational fluency, enterprise technologists quickly discovered that isolated prompt-and-response paradigms were fundamentally inadequate for high-assurance, business-critical workloads. In response to this operational bottleneck, the paradigm has decisively pivoted toward agentic workflows—autonomous computational entities capable of multi-step reasoning, external tool invocation, reflective self-correction, and collaborative goal decomposition.",
        th: "ทิศทางร่วมสมัยของปัญญาประดิษฐ์ได้ก้าวข้ามความตื่นตาตื่นใจแบบผิวเผินของหน้าต่างแชทไปแล้ว แม้ว่ากระแสระลอกแรกของโมเดลภาษาเชิงสร้างสรรค์จะเคยสะกดจินตนาการของผู้คนทั่วโลกด้วยความลื่นไหลในการสนทนา แต่นักเทคโนโลยีระดับองค์กรก็ค้นพบอย่างรวดเร็วว่า รูปแบบการถาม-ตอบแบบแยกส่วนนั้นไม่เพียงพออย่างยิ่งสำหรับงานสำคัญทางธุรกิจที่ต้องการความแม่นยำและการรับประกันระดับสูง เพื่อตอบสนองต่อคอขวดในการปฏิบัติการนี้ กระบวนทัศน์จึงได้เบนทิศทางอย่างเด็ดขาดไปสู่วงจรการทำงานของ Agentic Systems หรือตัวตนเชิงคำนวณอัตโนมัติที่สามารถให้เหตุผลหลายขั้นตอน, เรียกใช้เครื่องมือภายนอก, ตรวจสอบแก้ไขตนเอง และย่อยสลายเป้าหมายที่ซับซ้อนร่วมกันได้"
      },
      {
        id: "p2",
        en: "At the epicenter of this architectural metamorphosis lies the principle of 'cognitive offloading.' In conventional software engineering, business logic is explicitly encoded into deterministic algorithmic branches. If an unhandled edge case manifests, the system abruptly faults. Conversely, agentic frameworks synthesize non-deterministic probabilistic reasoning with deterministic execution environments. When tasked with a multifaceted objective—such as orchestrating a distributed cloud migration or diagnosing an erratic database deadlock—the agent establishes a dynamic hypothesis, interrogates observability metrics, writes ephemeral diagnostic scripts, and critically evaluates intermediate results before committing changes.",
        th: "ณ จุดศูนย์กลางของการเปลี่ยนแปลงรูปพรรณสัณฐานเชิงสถาปัตยกรรมนี้ คือหลักการของการ 'แบ่งเบาภาระการคิด' (Cognitive Offloading) ในวิศวกรรมซอฟต์แวร์แบบดั้งเดิม ตรรกะทางธุรกิจจะถูกเข้ารหัสไว้อย่างโจ่งแจ้งในโครงสร้างอัลกอริทึมที่มีผลลัพธ์แน่นอนตายตัว หากเกิดกรณีสุดโต่งที่ไม่ได้รับการดักจับ ระบบก็จะหยุดทำงานทันที ในทางตรงกันข้าม เฟรมเวิร์กของ Agent จะผสมผสานการให้เหตุผลเชิงความน่าจะเป็นเข้ากับสภาพแวดล้อมการทำงานจริง เมื่อได้รับมอบหมายเป้าหมายที่หลากหลาย เช่น การจัดการการย้ายระบบคลาวด์แบบกระจายตัว หรือการวินิจฉัยปัญหา Deadlock ของฐานข้อมูล ตัวแทน AI จะตั้งสมมติฐานแบบไดนามิก, สอบถามข้อมูลมาตรวัดความพร้อมใช้งาน, เขียนสคริปต์วินิจฉัยชั่วคราว และประเมินผลลัพธ์ระหว่างทางอย่างรอบคอบก่อนที่จะลงมือยืนยันการเปลี่ยนแปลง"
      },
      {
        id: "p3",
        en: "Nevertheless, conferring autonomy upon probabilistic systems introduces formidable governance and architectural dilemmas. Primary among these is the non-trivial risk of cascading hallucination, where a subtle logical aberration in an initial sub-agent propagates through subsequent execution layers, culminating in catastrophic operational divergence. To mitigate this vulnerability, enterprise architectures increasingly mandate robust guardrails: cryptographic provenance tracking, human-in-the-loop escalation checkpoints, and formal policy enforcement engines that govern agentic blast radiuses.",
        th: "อย่างไรก็ดี การมอบอำนาจตัดสินใจให้แก่ระบบที่ทำงานบนพื้นฐานความน่าจะเป็นย่อมนำมาซึ่งภาวะกลืนไม่เข้าคายไม่ออกด้านการกำกับดูแลและสถาปัตยกรรมที่น่าหวาดหวั่น สิ่งสำคัญอันดับแรกคือความเสี่ยงของการเกิดภาพหลอนแบบลูกโซ่ (Cascading Hallucination) ซึ่งความคลาดเคลื่อนทางตรรกะเพียงเล็กน้อยใน Agent ตัวแรกอาจแพร่กระจายไปยังชั้นการทำงานถัดไป และนำไปสู่ความเบี่ยงเบนในการดำเนินงานที่ร้ายแรง เพื่อบรรเทาจุดเปราะบางนี้ สถาปัตยกรรมระดับองค์กรจึงจำเป็นต้องมีเกราะกำบังที่แข็งแกร่ง เช่น การติดตามที่มาของข้อมูลด้วยการเข้ารหัส, จุดตรวจสอบที่มีมนุษย์คอยกำกับดูแล และระบบบังคับใช้นโยบายที่เป็นทางการเพื่อควบคุมขอบเขตผลกระทบ (Blast Radius) ของตัวแทน AI"
      },
      {
        id: "p4",
        en: "As this frontier matures, the traditional boundary demarcating software creators from software artifacts will irrevocably blur. The software engineer of the impending epoch will increasingly resemble a maestro orchestrating autonomous cognitive ensembles—defining conceptual invariants, architecting ontological boundaries, and arbitrating overarching ethical constraints rather than laboriously writing iterative syntax by hand.",
        th: "เมื่อพรมแดนนี้เติบโตเต็มที่ เส้นแบ่งดั้งเดิมที่แยกระหว่างผู้สร้างซอฟต์แวร์กับผลงานซอฟต์แวร์จะเลือนรางลงอย่างไม่อาจย้อนกลับ วิศวกรซอฟต์แวร์ในยุคสมัยข้างหน้าจะมีลักษณะเหมือนวาทยกรผู้ควบคุมวงดนตรีประสานเสียงแห่งปัญญาประดิษฐ์อัตโนมัติ โดยทำหน้าที่กำหนดกฎเกณฑ์ที่ต้องไม่เปลี่ยนแปลง, วางขอบเขตโครงสร้างทางความหมาย และตัดสินข้อจำกัดทางจริยธรรมภาพรวม แทนที่จะต้องมานั่งเขียนโค้ดทีละบรรทัดอย่างเหน็ดเหนื่อยด้วยมือ"
      }
    ],
    quiz: [
      {
        type: "multiple-choice",
        question: "Why did enterprise engineering teams transition beyond basic conversational AI prompts according to paragraph 1?",
        options: [
          "Conversational models became too expensive to host locally",
          "Prompt-and-response interactions lacked the reliability required for mission-critical business operations",
          "Users lost interest in typing and preferred paper forms",
          "Open-source databases banned all neural networks"
        ],
        answer: 1,
        explanation: "ในย่อหน้าแรกระบุชัดเจนว่า: '...isolated prompt-and-response paradigms were fundamentally inadequate for high-assurance, business-critical workloads.'"
      },
      {
        type: "multiple-choice",
        question: "What is described as the danger of 'cascading hallucination' in paragraph 3?",
        options: [
          "The complete hardware destruction of local computer chips",
          "An initial logical error in one sub-agent compounding through subsequent layers into severe operational failure",
          "Developers dreaming about writing code in their sleep",
          "A network router becoming physically overheated"
        ],
        answer: 1,
        explanation: "ในย่อหน้าที่ 3 อธิบายความเสี่ยงว่าความผิดพลาดทางตรรกะในขั้นแรกอาจแพร่กระจายไปสู่เลเยอร์ถัดไปจนเกิดความเสียหายร้ายแรง"
      },
      {
        type: "true-false",
        question: "In the future described in paragraph 4, software engineers will focus more on high-level orchestration and guardrails than writing syntax by hand.",
        options: ["True", "False", "Not Given"],
        answer: 0,
        explanation: "เป็นความจริง (True) ประโยคสรุปในย่อหน้าที่ 4 เปรียบวิศวกรเหมือนวาทยกร (maestro) ผู้วางกรอบและกำกับดูแล แทนที่จะมานั่งเขียน syntax ทีละตัว"
      }
    ]
  },
  {
    id: "read-c1-02",
    level: "C1",
    levelTitle: "Level 5: The Master (C1–C2)",
    levelBadge: "C1 • Advanced / Master",
    levelColor: "purple",
    coverEmoji: "🏛️",
    title: "Taming Architectural Entropy and Technical Debt in Hyper-Growth Ecosystems",
    titleTh: "การจัดการความเสื่อมสภาพเชิงสถาปัตยกรรมและหนี้ทางเทคนิคในระบบที่เติบโตแบบก้าวกระโดด",
    wordCount: 535,
    estimatedTime: "7 นาที",
    xpReward: 120,
    summary: "การวิเคราะห์เชิงลึกว่าด้วยการจัดการ Architectural Entropy, กฎของ Conway (Conway's Law) และการป้องกันไม่ให้หนี้ทางเทคนิคกัดกร่อนความสามารถในการส่งมอบคุณค่าขององค์กร",
    tags: ["Technical Debt", "System Architecture", "Conway's Law", "Hyper-Growth"],
    keyVocab: [
      { word: "entropy", ipa: "/ˈentrəpi/", pos: "n.", th: "ความเสื่อมสภาพ, ภาวะความไร้ระเบียบตามธรรมชาติ", chunk: "architectural entropy" },
      { word: "monolithic", ipa: "/ˌmɑːnəˈlɪθɪk/", pos: "adj.", th: "ที่รวมเป็นก้อนเดียวขนาดใหญ่และแก้ไขยาก", chunk: "legacy monolithic codebase" },
      { word: "decoupling", ipa: "/diːˈkʌplɪŋ/", pos: "n.", th: "การตัดขาดการพึ่งพากัน, การแยกส่วนประกอบให้เป็นอิสระ", chunk: "systematic decoupling" },
      { word: "insidious", ipa: "/ɪnˈsɪdiəs/", pos: "adj.", th: "ที่ค่อย ๆ ก่อตัวขึ้นอย่างเงียบ ๆ แต่แฝงอันตรายร้ายแรง", chunk: "insidious accumulation" }
    ],
    paragraphs: [
      {
        id: "p1",
        en: "In the lifecycle of rapidly expanding enterprise technology companies, technical debt is frequently analogized to financial leverage: a pragmatic, deliberate trade-off where engineering rigor is temporarily compromised to seize immediate market windows. However, when hyper-growth continues unabated without deliberate periods of architectural consolidation, technical debt ceases to function as a beneficial loan. Instead, it metastasizes into architectural entropy—a systemic decay wherein even trivial feature additions trigger disproportionate regressions across unrelated domains.",
        th: "ในวัฏจักรชีวิตของบริษัทเทคโนโลยีระดับองค์กรที่ขยายตัวอย่างรวดเร็ว หนี้ทางเทคนิคมักถูกเปรียบเปรยเหมือนเลเวอเรจทางการเงิน นั่นคือการประนีประนอมอย่างมีสติและมีเป้าหมาย โดยยอมลดทอนความเข้มงวดทางวิศวกรรมลงชั่วคราวเพื่อคว้าโอกาสทางการตลาดตรงหน้า อย่างไรก็ดี เมื่อการเติบโตแบบก้าวกระโดดยังคงดำเนินต่อไปโดยไม่มีการจัดสรรเวลาสำหรับการจัดระเบียบสถาปัตยกรรม หนี้ทางเทคนิคจะหยุดทำหน้าที่เป็นเงินกู้ที่ก่อประโยชน์ แต่กลับลุกลามกลายเป็นความเสื่อมสภาพเชิงสถาปัตยกรรม (Architectural Entropy) ซึ่งเป็นความเสื่อมทรามทั้งระบบที่แม้แต่การเพิ่มฟีเจอร์เล็ก ๆ ก็สามารถก่อให้เกิดความผิดพลาดลุกลามข้ามระบบที่ไม่เกี่ยวข้องกันได้"
      },
      {
        id: "p2",
        en: "This deterioration is profoundly exacerbated by the social dynamics codified in Conway's Law, which posits that organizations inevitably design systems that mirror their internal communication structures. During periods of aggressive recruitment, cross-functional engineering squads proliferate exponentially. In the absence of meticulously governed bounded contexts and domain-driven interfaces, disparate squads inevitably create tight, covert couplings across databases and microservices, creating what distributed systems theorists label a 'distributed monolith.'",
        th: "ความเสื่อมถอยนี้ถูกทำให้ทวีความรุนแรงยิ่งขึ้นด้วยพลวัตทางสังคมที่ถูกระบุไว้ในกฎของคอนเวย์ (Conway's Law) ซึ่งระบุว่าองค์กรจะออกแบบระบบที่สะท้อนโครงสร้างการสื่อสารภายในของตนเองอย่างไม่อาจเลี่ยงได้ ในช่วงที่มีการรับพนักงานใหม่อย่างดุเดือด ทีมวิศวกรรมแบบข้ามสายงานจะเพิ่มจำนวนขึ้นเป็นทวีคูณ หากปราศจากขอบเขตบริบทที่ถูกควบคุมอย่างพิถีพิถันและอินเทอร์เฟซที่ขับเคลื่อนด้วยโดเมน ทีมต่าง ๆ จะสร้างการผูกโยงที่แนบแน่นและซ่อนเร้นระหว่างฐานข้อมูลและไมโครเซอร์วิส จนก่อให้เกิดสิ่งที่นักทฤษฎีระบบแบบกระจายเรียกว่า 'โมโนลิธิกแบบกระจายตัว'"
      },
      {
        id: "p3",
        en: "To counteract architectural entropy before it suffocates engineering velocity, mature technology executives adopt systematic refactoring frameworks. Rather than pursuing naive, high-risk total system rewrites—which historically succumb to the 'second-system syndrome' and deliver negligible commercial value—seasoned architects employ incremental migration methodologies such as the Strangler Fig pattern. By gradually intercepting traffic and routing domain boundaries to decoupled, autonomous services, legacy systems can be gracefully deprecated in place.",
        th: "เพื่อยับยั้งความเสื่อมสภาพทางสถาปัตยกรรมก่อนที่มันจะบดขยี้ความเร็วในการพัฒนาของทีม ผู้บริหารเทคโนโลยีที่มีวุฒิภาวะจึงนำเฟรมเวิร์กการปรับปรุงโครงสร้างโค้ดแบบเป็นระบบมาใช้ แทนที่จะเลือกการรื้อระบบเขียนใหม่ทั้งหมดซึ่งมีความเสี่ยงสูงอย่างไร้เดียงสา—ซึ่งในประวัติศาสตร์มักพ่ายแพ้ให้กับ 'อาการโรคระบบที่สอง' และแทบไม่สร้างคุณค่าเชิงพาณิชย์—สถาปนิกผู้มีประสบการณ์จะใช้วิธีการย้ายระบบแบบค่อยเป็นค่อยไป เช่น รูปแบบ Strangler Fig โดยการค่อย ๆ ดักจับทราฟฟิกและส่งต่อไปยังบริการที่แยกตัวเป็นอิสระ ระบบเก่าจึงสามารถถูกปลดระวางลงได้อย่างสง่างามในตำแหน่งเดิม"
      },
      {
        id: "p4",
        en: "Ultimately, institutional resilience against architectural decay is governed by organizational culture rather than technological tooling. Engineering organizations must cultivate an ethos where refactoring and paying down technical debt are celebrated as foundational virtues of equal parity with delivering visible customer features.",
        th: "ในท้ายที่สุด ความยืดหยุ่นขององค์กรต่อการเสื่อมสลายทางสถาปัตยกรรมถูกขับเคลื่อนโดยวัฒนธรรมองค์กรมากกว่าเครื่องมือทางเทคโนโลยี องค์กรวิศวกรรมต้องปลูกฝังค่านิยมที่การรีแฟกเตอร์และการชำระหนี้ทางเทคนิคได้รับการยกย่องให้เป็นคุณธรรมพื้นฐานที่มีคุณค่าเทียบเท่ากับการส่งมอบฟีเจอร์ใหม่ ๆ ที่ลูกค้ามองเห็นได้ด้วยตา"
      }
    ],
    quiz: [
      {
        type: "multiple-choice",
        question: "What is 'Architectural Entropy' as described in paragraph 1?",
        options: [
          "A formal computer science award given to clean code",
          "A systemic decay where even minor code additions cause widespread, unexpected regressions",
          "A complete lack of computers in the company",
          "The legal process of registering software patents"
        ],
        answer: 1,
        explanation: "ในย่อหน้าแรกระบุว่า Architectural entropy คือ: '...a systemic decay wherein even trivial feature additions trigger disproportionate regressions across unrelated domains.'"
      },
      {
        type: "multiple-choice",
        question: "Why do seasoned architects typically avoid complete, ground-up system rewrites according to paragraph 3?",
        options: [
          "Because programming languages become completely obsolete every month",
          "Because total rewrites are high-risk, often suffer from second-system syndrome, and deliver negligible immediate commercial value",
          "Because rewriting code is prohibited under open-source software licenses",
          "Because hardware cannot run newly written code"
        ],
        answer: 1,
        explanation: "ในย่อหน้าที่ 3 อธิบายว่าการรื้อเขียนใหม่ทั้งหมดมีความเสี่ยงสูงและมักติด 'second-system syndrome' จึงนิยมใช้ Strangler Fig ค่อย ๆ ย้ายระบบ"
      },
      {
        type: "true-false",
        question: "Conway's Law suggests that a company's software architecture inevitably mirrors its internal organizational and communication structure.",
        options: ["True", "False", "Not Given"],
        answer: 0,
        explanation: "เป็นความจริง (True) ย่อหน้าที่ 2 ระบุกฎของคอนเวย์ว่า: '...organizations inevitably design systems that mirror their internal communication structures.'"
      }
    ]
  }
];

if (typeof window !== "undefined") {
  window.readingData = readingData;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = readingData;
}
