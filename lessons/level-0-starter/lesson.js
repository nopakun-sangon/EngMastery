/**
 * EngMastery: Level 0 - The Starter Kit (Pre-A1)
 * ปูรากฐานจากศูนย์: โครงสร้างประโยค, สัญลักษณ์โค้ด, และตัวเลขทางเทคนิค
 * Standard Curriculum Schema compliant with Level 1-6
 */

window.LESSON_0_STARTER = {
  id: "level-0-starter",
  level: "Pre-A1",
  levelTitle: "Level 0: The Starter Kit (Pre-A1)",
  levelSub: "ปูรากฐานจากศูนย์: โครงสร้างประโยค, สัญลักษณ์โค้ด, และตัวเลขทางเทคนิค",
  badgeColor: {
    bg: "bg-sky-100 dark:bg-sky-950/60",
    text: "text-sky-700 dark:text-sky-300",
    border: "border-sky-300 dark:border-sky-800"
  },
  cefrColor: "sky",
  estimatedTime: "45 นาที",
  xpReward: 250,

  // =========================================================================
  // TAB 1: CORE GRAMMAR & SYNTAX BLUEPRINT (ไวยากรณ์แกนหลัก & โครงสร้างประโยค)
  // =========================================================================
  coreGrammar: {
    title: "4 เสาหลัก Parts of Speech & โครงสร้างประโยคพื้นฐาน (S + V + O)",
    summary: "รากฐานสำคัญที่สุดของภาษาอังกฤษคือการเข้าใจ 'ชนิดของคำ (Parts of Speech)' และการเรียงลำดับประโยค หากเข้าใจกฎพื้นฐานนี้ คุณจะสามารถสร้างประโยคได้ถูกต้อง ไม่แปลตรงตัวจากภาษาไทย และสื่อสารกับคอมพิวเตอร์และเพื่อนร่วมงานได้อย่างมั่นใจ",
    rules: [
      {
        ruleName: "1. 4 เสาหลักชนิดของคำ (Parts of Speech) ที่ต้องรู้",
        explanation: "ในประโยคภาษาอังกฤษ คำแต่ละคำทำหน้าที่ต่างกันอย่างชัดเจน:\n" +
          "• Noun (คำนาม): คน สัตว์ สิ่งของ ระบบ เช่น laptop, server, user, database\n" +
          "• Verb (คำกริยา): การกระทำหรือสภาวะ เช่น check, run, click, is, have\n" +
          "• Adjective (คำคุณศัพท์): ขยายคำนาม บอกลักษณะ เช่น slow, ready, new, secure (วางหน้า Noun หรือหลัง Verb to be)\n" +
          "• Adverb (คำวิเศษณ์): ขยายกริยาหรือคุณศัพท์ บอกระดับ เช่น quickly, really, very",
        pitfall: "❌ ผิดบ่อย: 'I very like this code.' (เพราะ very เป็น Adverb ขยาย Adjective ห้ามขยายกริยาตรงๆ) / ✅ ถูกต้อง: 'I really like this code.' หรือ 'I like this code very much.'",
        proTip: "เทคนิคจำแม่น: Adjective บอกสภาพของคำนาม (a slow server) ส่วน Adverb บอกอาการของการกระทำ (The server runs slowly)"
      },
      {
        ruleName: "2. โครงสร้างกริยาแท้ (S + V + O) vs โครงสร้างบอกสภาพ (S + Be + Adj)",
        explanation: "ประโยคภาษาอังกฤษแบ่งเป็น 2 ตระกูลหลักเสมอ:\n" +
          "1. ประโยคมีการกระทำ (Action): ประธาน + กริยาแท้ + กรรม (เช่น I write code. / She tests the API.)\n" +
          "2. ประโยคบอกสภาพ/สถานะ (State): ประธาน + Verb to be + คำคุณศัพท์ (เช่น The server is ready. / The password is wrong.)\n" +
          "• กฎเหล็ก: ห้ามเอา Verb to be ไปปนกับกริยาแท้เดี่ยวๆ เช่น 'I am check' (ผิดมหันต์!)",
        pitfall: "❌ ผิดบ่อย: 'I am agree with you.' / ✅ ถูกต้อง: 'I agree with you.' (เพราะ agree เป็นกริยาแท้อยู่แล้ว ไม่ต้องมี am)",
        proTip: "ถ้ามีกริยาแท้แล้ว ห้ามใส่ is/am/are เด็ดขาด เว้นแต่จะเป็นรูป Continuous (-ing)"
      },
      {
        ruleName: "3. บุรุษสรรพนามประธาน (Subject) vs กรรม (Object) & กริยา Have/Has",
        explanation: "• ประธาน (Subject): I, You, We, They (พหูพจน์ใช้ have / do) และ He, She, It (เอกพจน์ใช้ has / does)\n" +
          "• กรรม (Object): Me, You, Us, Them, Him, Her, It (วางหลังกริยา เช่น Ping me, Ask him, Email them)\n" +
          "• ปฏิเสธในปัจจุบัน: ใช้ don't กับ I/You/We/They และ doesn't กับ He/She/It ตามด้วยกริยาไม่ผันเสมอ",
        pitfall: "❌ ผิดบ่อย: 'He have a new laptop.' / ✅ ถูกต้อง: 'He has a new laptop.' หรือ 'He doesn't have a new laptop.'",
        proTip: "หลัง don't และ doesn't กริยาต้องคืนร่างเดิมเป็นช่อง 1 เสมอ (doesn't have, doesn't know)"
      }
    ],

    comparisonTable: {
      headers: ["ประเภทประโยค", "บอกเล่า (+)", "ปฏิเสธ (-)", "คำถาม (?)"],
      rows: [
        {
          subject: "บอกสถานะ (Be + Adj)",
          positive: "The port <span class='text-emerald-600 dark:text-emerald-400 font-bold'>is</span> open.",
          negative: "The port <span class='text-red-500 font-bold'>is not</span> open.",
          question: "<span class='text-amber-500 font-bold'>Is</span> the port open?",
          audioPositive: "The port is open.",
          audioNegative: "The port is not open.",
          audioQuestion: "Is the port open?"
        },
        {
          subject: "ประธาน I / You (กริยาแท้)",
          positive: "I <span class='text-emerald-600 dark:text-emerald-400 font-bold'>have</span> the wifi password.",
          negative: "I <span class='text-red-500 font-bold'>don't have</span> the wifi password.",
          question: "<span class='text-amber-500 font-bold'>Do</span> you have the wifi password?",
          audioPositive: "I have the wifi password.",
          audioNegative: "I don't have the wifi password.",
          audioQuestion: "Do you have the wifi password?"
        },
        {
          subject: "ประธาน He / She / It (เอกพจน์)",
          positive: "He <span class='text-emerald-600 dark:text-emerald-400 font-bold'>needs</span> admin access.",
          negative: "He <span class='text-red-500 font-bold'>doesn't need</span> admin access.",
          question: "<span class='text-amber-500 font-bold'>Does</span> he need admin access?",
          audioPositive: "He needs admin access.",
          audioNegative: "He doesn't need admin access.",
          audioQuestion: "Does he need admin access?"
        }
      ]
    },

    advancedSubRules: [
      {
        title: "A. การใช้คำสั่งสั้นๆ (Imperative Verbs)",
        description: "เวลาสั่งการคอมพิวเตอร์หรือแนะนำเพื่อนร่วมงาน ให้ขึ้นต้นประโยคด้วยกริยาช่อง 1 ไม่ผันทันที เช่น 'Click here', 'Restart the router', 'Press Enter', 'Run this command'"
      },
      {
        title: "B. การบอกความเป็นเจ้าของ (Possessive Adjectives)",
        description: "my (ของฉัน), your (ของคุณ), our (ของพวกเรา), their (ของพวกเขา), his (ของเขา), her (ของเธอ), its (ของมัน - ไม่มี apostrophe) เช่น 'my password', 'his ticket', 'its IP address'"
      }
    ],

    pronunciationSecrets: [
      {
        title: "การออกเสียงตัว s ท้ายคำนามและกริยา",
        content: "อย่าตัดเสียง 'สึ' ท้ายคำทิ้ง! คำว่า keys, files, servers, needs, checks หากไม่ยอมออกเสียง s ฝรั่งจะไม่เข้าใจว่าหมายถึงเอกพจน์หรือพหูพจน์"
      },
      {
        title: "การออกเสียงคำเชื่อม and และ but",
        content: "คำว่า 'and' ในภาษาพูดมักออกเสียงสั้นๆ ว่า /ən/ หรือ /ənd/ และ 'but' ออกเสียงสั้นกระชับ ไม่ต้องลากเสียงยาว"
      }
    ],

    thaiEnglishTraps: [
      {
        wrong: "I no have password.",
        right: "I don't have the password.",
        literalThai: "ฉันไม่มีรหัสผ่าน (คนไทยแปล 'no = ไม่' ตรงๆ)",
        why: "ในภาษาอังกฤษ เมื่อปฏิเสธกริยาแท้ 'have' ต้องใช้กริยาช่วย 'don't have' ห้ามใช้ no have"
      },
      {
        wrong: "I very like this framework.",
        right: "I really like this framework. / I like this framework very much.",
        literalThai: "ฉันชอบเฟรมเวิร์กนี้มาก (แปล 'มาก = very' ไว้หน้ากริยา)",
        why: "'very' ขยายได้เฉพาะ Adjective/Adverb เช่น very good, very fast หากขยายกริยา like ต้องใช้ really หรือวาง very much ไว้ท้ายประโยค"
      },
      {
        wrong: "Please open the screen / open the light.",
        right: "Please turn on the screen / turn on the light.",
        literalThai: "ช่วยเปิดจอ / เปิดไฟหน่อย (คนไทยใช้คำว่า 'เปิด' คำเดียว)",
        why: "อุปกรณ์ไฟฟ้าและคอมพิวเตอร์ต้องใช้ 'turn on / switch on' ส่วน 'open' ใช้กับการเปิดประตู หนังสือ หรือกล่องที่มีฝาเปิด-ปิดทางกายภาพ"
      },
      {
        wrong: "He is agree with this design.",
        right: "He agrees with this design.",
        literalThai: "เขาเห็นด้วยกับการออกแบบนี้ (ใส่ is หน้า agree)",
        why: "'agree' เป็นคำกริยาแท้ ห้ามใส่ Verb to be (is) นำหน้าเด็ดขาด"
      }
    ],

    keyExamples: [
      {
        en: "I am a new junior developer, and I need access to the repository.",
        th: "ฉันเป็นนักพัฒนารุ่นใหม่ และฉันต้องการสิทธิ์เข้าถึงคลังโค้ด",
        note: "am (สถานะ) + need (กริยาแท้ความต้องการ)"
      },
      {
        en: "The staging server is offline, so we cannot test the application.",
        th: "เซิร์ฟเวอร์สเตจจิ้งออฟไลน์อยู่ พวกเราจึงไม่สามารถทดสอบแอปพลิเคชันได้",
        note: "is offline (สภาพ) + cannot test (Modal + V1)"
      },
      {
        en: "Please turn on your VPN before connecting to the database.",
        th: "กรุณาเปิด VPN ของคุณก่อนเชื่อมต่อกับฐานข้อมูล",
        note: "turn on (คำสั่งเปิดระบบไฟฟ้า) + connecting to (เชื่อมต่อไปยัง)"
      }
    ]
  },

  // =========================================================================
  // TAB 2: CHUNKS & ESSENTIAL TECH VOCABULARY (คลังประโยค & สัญลักษณ์แป้นพิมพ์)
  // =========================================================================
  chunksAndVocab: {
    chunks: [
      {
        chunk: "Could you please give me...?",
        th: "คุณช่วยส่ง/ให้...กับฉันได้ไหมครับ?",
        example: "Could you please give me the wifi credentials?"
      },
      {
        chunk: "I don't have access to...",
        th: "ฉันไม่มีสิทธิ์เข้าถึง...",
        example: "I don't have access to the production dashboard."
      },
      {
        chunk: "Where can I find...?",
        th: "ฉันสามารถหา...ได้จากที่ไหนครับ?",
        example: "Where can I find the API documentation?"
      },
      {
        chunk: "How do I connect to...?",
        th: "ฉันจะเชื่อมต่อกับ...ได้อย่างไรครับ?",
        example: "How do I connect to the internal staging server?"
      },
      {
        chunk: "Is this correct?",
        th: "อันนี้ถูกต้องไหมครับ?",
        example: "I set the port to 8080. Is this correct?"
      }
    ],

    industryTechChunks: [
      {
        category: "สัญลักษณ์วงเล็บ (Brackets & Parentheses)",
        items: [
          { symbol: "{ }", name: "curly braces / curly brackets", th: "วงเล็บปีกกา", example: "Wrap the JSON payload in curly braces." },
          { symbol: "[ ]", name: "square brackets", th: "วงเล็บเหลี่ยม", example: "Arrays in JavaScript use square brackets." },
          { symbol: "( )", name: "parentheses / parens", th: "วงเล็บกลม / วงเล็บโค้ง", example: "Pass the arguments inside parentheses." },
          { symbol: "< >", name: "angle brackets", th: "วงเล็บแหลม (เครื่องหมายมากกว่า/น้อยกว่า)", example: "HTML tags are enclosed in angle brackets." }
        ]
      },
      {
        category: "เครื่องหมายขีด เส้น และตัวคั่น (Slashes, Dashes & Separators)",
        items: [
          { symbol: "/", name: "forward slash (or slash)", th: "เครื่องหมายทับ (เฉียงไปข้างหน้าตาม URL)", example: "Type https slash slash localhost." },
          { symbol: "\\", name: "backslash", th: "เครื่องหมายแบ็กสแลช (เฉียงกลับหลังใน Windows path)", example: "Escape characters using a backslash." },
          { symbol: "-", name: "hyphen / dash / minus", th: "เครื่องหมายยัติภังค์ / ขีดกลาง", example: "Pass the flag with double dash verbose." },
          { symbol: "_", name: "underscore", th: "เครื่องหมายขีดล่าง", example: "Use snake_case with underscores for Python variables." },
          { symbol: "|", name: "pipe", th: "เครื่องหมายไปป์ (แท่งตรงกลางแป้นพิมพ์)", example: "Pipe the terminal output to grep." },
          { symbol: "~", name: "tilde", th: "เครื่องหมายตัวหนอน (แทน home directory)", example: "Navigate to tilde slash projects." }
        ]
      },
      {
        category: "เครื่องหมายสัญลักษณ์เฉพาะทาง (Special Symbols)",
        items: [
          { symbol: "*", name: "asterisk / star", th: "เครื่องหมายดอกจัน (Wildcard)", example: "Select star from users table." },
          { symbol: "&", name: "ampersand", th: "เครื่องหมายแอนด์ (&)", example: "Put the ampersand to run the process in background." },
          { symbol: "` `", name: "backtick / backquote", th: "เครื่องหมายแบ็กทิก (ใต้ปุ่ม Esc)", example: "Template literals in JavaScript require backticks." },
          { symbol: "!", name: "exclamation mark / bang", th: "เครื่องหมายอัศเจรีย์ (ใน Linux เรียก bang)", example: "Add a bang to force overwrite." },
          { symbol: "#", name: "hash / pound / sharp", th: "เครื่องหมายแฮช / ชาร์ป", example: "Comments in Python start with a hash." },
          { symbol: ".", name: "dot / period", th: "จุด", example: "Type dot env to inspect the config file." },
          { symbol: ":", name: "colon", th: "โคลอน (จุดคู่)", example: "Separate host and port with a colon." },
          { symbol: ";", name: "semicolon", th: "เซมิโคลอน (จุดและจุลภาค)", example: "End each statement in C++ with a semicolon." }
        ]
      },
      {
        category: "การอ่านตัวเลขและที่อยู่ระบบ (Tech Numbers & Addresses)",
        items: [
          { symbol: "192.168.1.1", name: "one-nine-two dot one-six-eight dot one dot one", th: "การอ่าน IP Address", example: "The gateway address is one nine two dot one six eight dot one dot one." },
          { symbol: ":8080", name: "port eighty eighty", th: "การอ่านพอร์ต 4 หลัก", example: "The web app listens on port eighty eighty." },
          { symbol: ":443", name: "port four four three", th: "การอ่านพอร์ต 3 หลัก", example: "HTTPS uses port four four three." },
          { symbol: "v2.4.1", name: "version two point four point one", th: "การอ่านเวอร์ชันซอฟต์แวร์", example: "We upgraded the client library to version two point four point one." },
          { symbol: "500MB / 16GB", name: "five hundred megabytes / sixteen gigabytes", th: "การอ่านหน่วยความจำ", example: "The container requires at least sixteen gigabytes of RAM." }
        ]
      }
    ],

    essentialVocab: [
      { word: "workstation", ipa: "/ˈwɜːk.steɪ.ʃən/", pos: "n.", th: "เครื่องคอมพิวเตอร์ทำงานประจำตำแหน่ง", example: "Please configure your new workstation." },
      { word: "credentials", ipa: "/krɪˈden.ʃəlz/", pos: "n.", th: "ข้อมูลรับรองตัวตน (Username & Password)", example: "Store your credentials securely." },
      { word: "access", ipa: "/ˈæk.ses/", pos: "n./v.", th: "สิทธิ์การเข้าถึง / เข้าถึงระบบ", example: "You need permission to access this repository." },
      { word: "permission", ipa: "/pəˈmɪʃ.ən/", pos: "n.", th: "การอนุญาต / สิทธิ์ที่ได้รับ", example: "Check file permissions before execution." },
      { word: "repository", ipa: "/rɪˈpɒz.ɪ.tər.i/", pos: "n.", th: "คลังเก็บโค้ด (เรียกสั้นๆ ว่า repo)", example: "Clone the frontend repository to your laptop." },
      { word: "terminal", ipa: "/ˈtɜː.mɪ.nəl/", pos: "n.", th: "หน้าต่างพิมพ์คำสั่ง (Command line)", example: "Open your terminal and type git status." },
      { word: "reboot", ipa: "/riːˈbuːt/", pos: "v.", th: "รีสตาร์ตเครื่องใหม่", example: "Please reboot your computer after installing Docker." },
      { word: "install", ipa: "/ɪnˈstɔːl/", pos: "v.", th: "ติดตั้งโปรแกรม", example: "Install VS Code and Node.js today." }
    ],

    verbForms: [
      { v1: "click", v2: "clicked", v3: "clicked", th: "คลิกเมาส์" },
      { v1: "type", v2: "typed", v3: "typed", th: "พิมพ์ตัวอักษร" },
      { v1: "open", v2: "opened", v3: "opened", th: "เปิด (ไฟล์/แอปพลิเคชัน)" },
      { v1: "close", v2: "closed", v3: "closed", th: "ปิดหน้าต่าง" },
      { v1: "turn on", v2: "turned on", v3: "turned on", th: "เปิดเครื่อง/เปิดไฟ" },
      { v1: "turn off", v2: "turned off", v3: "turned off", th: "ปิดเครื่อง/ดับระบบ" },
      { v1: "connect", v2: "connected", v3: "connected", th: "เชื่อมต่อ" },
      { v1: "disconnect", v2: "disconnected", v3: "disconnected", th: "ตัดการเชื่อมต่อ" }
    ]
  },

  // =========================================================================
  // TAB 3: REAL-LIFE DIALOGUE (บทสนทนาสถานการณ์จริง: วันแรกของการทำงาน)
  // =========================================================================
  realLifeDialogue: {
    scenario: "First Day Onboarding: Setting up Laptop & Asking for Access",
    scenarioTh: "วันแรกของการทำงาน: การตั้งค่าแล็ปท็อปและสอบถามรหัส Wi-Fi รวมถึงสิทธิ์ระบบ",
    grammarRationale: "ฝึกใช้ Verb to be (สถานะ), Present Simple (คำถาม Do/Does), และประโยคขอร้องสุภาพ Could you please... ในชีวิตการทำงานจริง",
    turns: [
      {
        speaker: "DevOps Lead",
        side: "left",
        avatar: "👨‍💻",
        name: "Dave (Senior DevOps / Onboarding Buddy)",
        en: "Good morning! Welcome to the team. Is your new company laptop ready?",
        th: "สวัสดีตอนเช้าครับ! ยินดีต้อนรับสู่ทีมนะ คอมพิวเตอร์แล็ปท็อปใหม่ของคุณพร้อมใช้งานหรือยังครับ?",
        tenseRationale: "Verb to be (Is your laptop ready?): ถามสภาพความพร้อมของสิ่งของ"
      },
      {
        speaker: "Junior Dev",
        side: "right",
        avatar: "👩‍💻",
        name: "May (Junior Software Engineer)",
        en: "Good morning Dave! Yes, the laptop is booted up, but I don't have the office wifi password yet.",
        th: "สวัสดีค่ะพี่เดฟ! แล็ปท็อปเปิดเครื่องเรียบร้อยแล้วค่ะ แต่เมย์ยังไม่มีรหัสผ่าน Wi-Fi ของออฟฟิศเลยค่ะ",
        tenseRationale: "Present Simple ปฏิเสธ (I don't have): ปฏิเสธการครอบครองสิ่งของ"
      },
      {
        speaker: "DevOps Lead",
        side: "left",
        avatar: "👨‍💻",
        name: "Dave (Senior DevOps / Onboarding Buddy)",
        en: "No problem. The SSID is 'Office-Guest', and the password is 'DevOps#2026' with a capital D and a hash symbol.",
        th: "ไม่มีปัญหาครับ ชื่อ Wi-Fi คือ 'Office-Guest' และรหัสคือ 'DevOps#2026' ตัว D ตัวใหญ่ และมีเครื่องหมายแฮชด้วยนะ",
        tenseRationale: "การสะกดสัญลักษณ์เทคนิค: hash symbol (#), capital letter"
      },
      {
        speaker: "Junior Dev",
        side: "right",
        avatar: "👩‍💻",
        name: "May (Junior Software Engineer)",
        en: "Thank you! I am connected to the network now. Where can I find the GitHub repository?",
        th: "ขอบคุณมากค่ะ! ตอนนี้เชื่อมต่อเครือข่ายได้แล้วค่ะ เมย์สามารถหาคลังโค้ด GitHub ได้จากที่ไหนคะ?",
        tenseRationale: "Wh-Question (Where can I find): การถามหาพิกัดหรือลิงก์งาน"
      },
      {
        speaker: "DevOps Lead",
        side: "left",
        avatar: "👨‍💻",
        name: "Dave (Senior DevOps / Onboarding Buddy)",
        en: "I sent an invitation link to your corporate email. Do you have access to your email account?",
        th: "ผมส่งลิงก์คำเชิญไปที่อีเมลบริษัทของคุณแล้วครับ คุณมีสิทธิ์ล็อกอินเข้าอีเมลของคุณได้หรือยังครับ?",
        tenseRationale: "Present Simple คำถาม (Do you have access to...): ถามเรื่องสิทธิ์การเข้าถึง"
      },
      {
        speaker: "Junior Dev",
        side: "right",
        avatar: "👩‍💻",
        name: "May (Junior Software Engineer)",
        en: "Yes, I have it open right here. Should I clone the repo using HTTPS or SSH?",
        th: "ใช่ค่ะ เปิดค้างไว้ตรงนี้เลยค่ะ เมย์ควร Clone โค้ดด้วย HTTPS หรือ SSH ดีคะ?",
        tenseRationale: "Modal verb (Should I clone): ปรึกษาแนวทางปฏิบัติที่ถูกต้อง"
      },
      {
        speaker: "DevOps Lead",
        side: "left",
        avatar: "👨‍💻",
        name: "Dave (Senior DevOps / Onboarding Buddy)",
        en: "Use SSH. You need to generate an SSH key first and paste it into GitHub.",
        th: "ใช้ SSH เลยครับ คุณต้องสร้าง SSH Key ก่อน แล้วนำไปวางในหน้าตั้งค่าของ GitHub นะ",
        tenseRationale: "Imperative + Present Simple (Use SSH / You need to generate)"
      },
      {
        speaker: "Junior Dev",
        side: "right",
        avatar: "👩‍💻",
        name: "May (Junior Software Engineer)",
        en: "Understood! I will generate the key right now. If I hit any errors, I will ping you on Slack.",
        th: "เข้าใจแล้วค่ะ! เดี๋ยวเมย์สร้างคีย์เดี๋ยวนี้เลย ถ้ามีข้อผิดพลาดอะไร เดี๋ยวเมย์ทักแชตหาพี่เดฟใน Slack นะคะ",
        tenseRationale: "Future with will + First Conditional: ให้คำมั่นสัญญาและขั้นตอนถัดไป"
      }
    ]
  },

  // =========================================================================
  // TAB 4: ACTION DRILL & 15 COMPREHENSIVE QUIZ QUESTIONS (ภารกิจ + ข้อสอบ 15 ข้อ)
  // =========================================================================
  actionDrillAndQuiz: {
    dailyMission: {
      title: "ภารกิจฝึกพูดประโยคพื้นฐานวันแรก (Onboarding Drill)",
      instruction: "ฝึกพูด 3 ประโยคพื้นฐาน: บอกตัวตน (I am...) + สิ่งที่มี (I have...) + สิ่งที่ต้องการ (I need...):",
      targetPhrase: "I am a new software engineer, I have a company laptop, and I need access to the repository.",
      targetTh: "ฉันเป็นวิศวกรซอฟต์แวร์คนใหม่, ฉันมีแล็ปท็อปของบริษัทแล้ว, และฉันต้องการสิทธิ์เข้าถึงคลังเก็บโค้ด",
      tip: "สังเกตความแตกต่าง: I am (บอกสถานะตนเอง), I have (บอกการถือครองสิ่งของ), และ I need (บอกความต้องการทางระบบ)"
    },

    quizQuestions: [
      {
        id: "q-0-1",
        question: "ประโยคบอกเล่าว่า 'ฉันชอบโค้ดนี้มาก' ข้อใดถูกต้องตามหลักไวยากรณ์สากล?",
        options: [
          "I very like this code.",
          "I really like this code.",
          "I am like this code very.",
          "I liking this code much."
        ],
        answer: 1,
        explanation: "ถูกต้อง! คำว่า 'very' ในภาษาอังกฤษห้ามใช้วางหน้าคำกริยาตรงๆ เด็ดขาด หากต้องการบอกว่าชอบมาก ให้ใช้ Adverb 'really' วางหน้ากริยาเป็น 'I really like this code.' หรือใช้ 'I like this code very much.'"
      },
      {
        id: "q-0-2",
        question: "หากต้องการบอกว่า 'ฉันไม่มีรหัสผ่านฐานข้อมูล' ประโยคปฏิเสธข้อใดถูกต้อง?",
        options: [
          "I no have the database password.",
          "I not have the database password.",
          "I don't have the database password.",
          "I am not have the database password."
        ],
        answer: 2,
        explanation: "ถูกต้อง! ใน Present Simple การปฏิเสธกริยาแท้ 'have' กับประธาน 'I' จะต้องใช้กริยาช่วย 'don't' เข้ามาช่วย กลายเป็น 'I don't have...' (ห้ามพูด I no have)"
      },
      {
        id: "q-0-3",
        question: "สัญลักษณ์เครื่องหมายวงเล็บปีกกา '{ }' ในภาษาอังกฤษของสายโปรแกรมเมอร์เรียกว่าอะไร?",
        options: [
          "Square brackets",
          "Curly braces (or curly brackets)",
          "Parentheses",
          "Angle brackets"
        ],
        answer: 1,
        explanation: "ถูกต้อง! { } เรียกว่า 'curly braces' (หรือ curly brackets) ส่วน [ ] เรียกว่า square brackets และ ( ) เรียกว่า parentheses"
      },
      {
        id: "q-0-4",
        question: "เครื่องหมายแท่งตรงกลางแป้นพิมพ์ '|' ที่ใช้ส่งต่อคำสั่งใน Terminal เรียกว่าอะไร?",
        options: [
          "Slash",
          "Backslash",
          "Pipe",
          "Tilde"
        ],
        answer: 2,
        explanation: "ถูกต้อง! สัญลักษณ์ '|' ในโลกเทคโนโลยีและ Linux เรียกว่า 'pipe' (เช่น cat log.txt | grep error)"
      },
      {
        id: "q-0-5",
        question: "ประโยคที่ต้องการขอร้องให้เปิดจอคอมพิวเตอร์ ข้อใดถูกต้องตามหลักภาษาอังกฤษ?",
        options: [
          "Please open the monitor screen.",
          "Please turn on the monitor screen.",
          "Please start up the monitor screen open.",
          "Please make the screen open."
        ],
        answer: 1,
        explanation: "ถูกต้อง! อุปกรณ์ไฟฟ้าและเครื่องคอมพิวเตอร์ต้องใช้กริยา 'turn on' หรือ 'switch on' คำว่า 'open' จะใช้กับการเปิดประตู กล่อง หรือหน้าต่างจริงทางกายภาพ"
      },
      {
        id: "q-0-6",
        question: "การอ่านเลขที่อยู่ IP Address '192.168.1.1' ในการประชุมเชิงเทคนิค ข้อใดถูกต้อง?",
        options: [
          "one-nine-two dot one-six-eight dot one dot one",
          "one hundred ninety-two point one hundred sixty-eight point one point one",
          "one-nine-two comma one-six-eight comma one comma one",
          "nineteen-two slash sixteen-eight slash one slash one"
        ],
        answer: 0,
        explanation: "ถูกต้อง! ในการสื่อสารระดับสากล วิศวกรจะอ่านตัวเลข IP ทีละตัวคั่นด้วยคำว่า 'dot' เช่น 'one-nine-two dot one-six-eight dot one dot one'"
      },
      {
        id: "q-0-7",
        question: "เติมกริยาในช่องว่างให้ถูกต้อง: 'Alex _____ access to the AWS production console.'",
        options: [
          "have",
          "has",
          "is having",
          "haves"
        ],
        answer: 1,
        explanation: "ถูกต้อง! 'Alex' เป็นประธานเอกพจน์บุรุษที่ 3 (He) ใน Present Simple กริยาบอกการครอบครองจึงต้องผันเป็น 'has' (ห้ามใช้ have)"
      },
      {
        id: "q-0-8",
        question: "สัญลักษณ์เครื่องหมาย '~' ที่แทน Home Directory ในระบบ Linux/Mac เรียกว่าอะไร?",
        options: [
          "Tilde",
          "Underscore",
          "Hyphen",
          "Asterisk"
        ],
        answer: 0,
        explanation: "ถูกต้อง! เครื่องหมายตัวหนอน '~' เรียกว่า 'tilde' (ทิล-เดอะ) ใช้แทน path ไปยัง home directory ของ user เช่น ~/projects"
      },
      {
        id: "q-0-9",
        question: "ประโยคคำถามว่า 'คุณมีสิทธิ์เข้าถึงคลังโค้ดนี้หรือไม่?' ข้อใดถูกต้องตามหลักไวยากรณ์?",
        options: [
          "Are you have access to this repo?",
          "Do you have access to this repo?",
          "Does you have access to this repo?",
          "Have you access to this repo?"
        ],
        answer: 1,
        explanation: "ถูกต้อง! การตั้งคำถามใน Present Simple กับกริยาแท้ 'have' และประธาน 'you' ต้องใช้กริยาช่วย 'Do' นำหน้า: 'Do you have access...?' (ห้ามใช้ Are you have)"
      },
      {
        id: "q-0-10",
        question: "เครื่องหมายเฉียงกลับหลัง '\\' ที่พบบ่อยใน Windows file path หรือการ Escape อักขระ เรียกว่าอะไร?",
        options: [
          "Slash (Forward slash)",
          "Backslash",
          "Dash",
          "Pipe"
        ],
        answer: 1,
        explanation: "ถูกต้อง! '\\' คือ 'backslash' (เฉียงถอยหลัง) ส่วน '/' คือ 'forward slash' หรือ 'slash' ที่พบบน URL เว็บไซต์"
      },
      {
        id: "q-0-11",
        question: "เลือกคำสรรพนามรูปกรรม (Object Pronoun) เติมในช่องว่าง: 'If you have any questions, please ping _____ on Slack.'",
        options: [
          "I",
          "me",
          "my",
          "mine"
        ],
        answer: 1,
        explanation: "ถูกต้อง! หลังคำกริยา 'ping' ทำหน้าที่เป็นกรรมของประโยค จึงต้องใช้รูปกรรมคือ 'me' (ห้ามใช้ประธาน I หรือคำแสดงความเป็นเจ้าของ my)"
      },
      {
        id: "q-0-12",
        question: "การอ่านพอร์ตเซิร์ฟเวอร์ ':8080' ในภาษาพูดระดับสากล นิยมอ่านอย่างไร?",
        options: [
          "eight thousand and eighty",
          "eighty eighty",
          "eight zero eight zero",
          "eight hundred eighty"
        ],
        answer: 1,
        explanation: "ถูกต้อง! พอร์ตที่เป็นเลข 4 หลัก โดยเฉพาะคู่เลขเหมือนกัน วิศวกรซอฟต์แวร์สากลนิยมอ่านแยกเป็นคู่ตัวเลขสั้นๆ เช่น 'port eighty eighty' (80-80)"
      },
      {
        id: "q-0-13",
        question: "ประโยคคำสั่งใน Terminal ข้อใดใช้รูป Imperative Verb ได้ถูกต้องตามหลักสากล?",
        options: [
          "To restart the docker container now.",
          "Restart the docker container now.",
          "Restarting the docker container now.",
          "You must to restart the docker container now."
        ],
        answer: 1,
        explanation: "ถูกต้อง! ประโยคคำสั่ง (Imperative sentence) ในภาษาอังกฤษจะขึ้นต้นด้วยกริยาช่อง 1 (Base form) ไม่ผันทันที เช่น 'Restart the container.'"
      },
      {
        id: "q-0-14",
        question: "เครื่องหมาย '``' (ปุ่มใต้ปุ่ม Esc) ที่ใช้สร้าง Template Literal ใน JavaScript เรียกว่าอะไร?",
        options: [
          "Single quote",
          "Double quote",
          "Backtick",
          "Ampersand"
        ],
        answer: 2,
        explanation: "ถูกต้อง! เครื่องหมาย `` เรียกว่า 'backtick' (หรือ grave accent) สำคัญมากในการเขียน JavaScript/TypeScript และ Markdown"
      },
      {
        id: "q-0-15",
        question: "ประโยคบอกสถานะข้อใดถูกต้อง: 'เซิร์ฟเวอร์ยังไม่พร้อมใช้งาน'?",
        options: [
          "The server is not ready.",
          "The server does not ready.",
          "The server not is ready.",
          "The server no ready."
        ],
        answer: 0,
        explanation: "ถูกต้อง! คำว่า 'ready' เป็นคำคุณศัพท์ (Adjective) บอกสภาพความพร้อม โครงสร้างจึงต้องใช้ Verb to be แล้วตามด้วย not: 'The server is not ready.' (ห้ามใช้ does not ready)"
      }
    ]
  }
};
