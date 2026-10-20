/**
 * EngMastery: Grammar Mastery Syllabus Data
 * 17 Core Pedagogical Grammar Categories with Sub-units,
 * Formulas, Easy-to-understand explanations, Dual-domain Examples, and 10-Question Quick Check Quizzes per unit.
 */

window.grammarSyllabusData = [
  {
    "id": "parts-of-speech",
    "title": "Parts of Speech",
    "titleTh": "ชนิดของคำในภาษาอังกฤษ (8 ชนิดพื้นฐาน)",
    "icon": "🧱",
    "badge": "Foundation",
    "description": "อิฐบล็อกก้อนแรกของภาษาอังกฤษ รู้หน้าที่ของคำแต่ละประเภทเพื่อวางตำแหน่งในประโยคได้อย่างถูกต้อง ไม่สับสน",
    "units": [
      {
        "id": "pos-nouns-pronouns",
        "title": "Unit 1: Nouns & Pronouns (คำนามและสรรพนาม)",
        "summary": "เข้าใจคำเรียกชื่อคน สัตว์ สิ่งของ ระบบ และคำใช้แทนประธาน/กรรม",
        "formula": "Subject (Noun/Pronoun) + Verb + Object (Noun/Pronoun)",
        "explanation": "\n### 1. Noun (คำนาม) คืออะไร?\nคำนามคือ **\"ชื่อเรียก\"** ของทุกสิ่งทุกอย่างรอบตัวเรา ไม่ว่าจะเป็นคน สัตว์ สิ่งของ สถานที่ หรือแม้กระทั่งสิ่งของที่จับต้องไม่ได้ เช่น แนวคิด หรือระบบคอมพิวเตอร์\n- **Common Noun (นามทั่วไป ไม่เจาะจง):** user (ผู้ใช้), server (เซิร์ฟเวอร์), meeting (การประชุม), coffee (กาแฟ)\n- **Proper Noun (นามเฉพาะ ต้องขึ้นต้นด้วยตัวพิมพ์ใหญ่เสมอ):** John, Bangkok, Linux, Docker, Google\n\n### 2. Pronoun (คำสรรพนาม) คืออะไร?\nคำสรรพนามคือคำที่ใช้ **\"แทนคำนาม\"** เพื่อจะได้ไม่ต้องพูดชื่อเดิมซ้ำๆ ให้เยิ่นเย้อ\n- **รูปประธาน (Subject):** I (ฉัน), You (คุณ), We (พวกเรา), They (พวกเขา), He (เขา), She (เธอ), It (มัน/ระบบ)\n- **รูปกรรม (Object):** me, you, us, them, him, her, it\n- **แสดงความเป็นเจ้าของ (Possessive):** my/mine, your/yours, our/ours, their/theirs, his, her/hers, its\n\n> [!TIP]\n> **เคล็ดลับจำง่าย:** ในประโยคภาษาอังกฤษ ประธานต้องเป็น **Noun** หรือ **Pronoun** เสมอ!\n        ",
        "examples": [
          {
            "en": "The server restarts automatically every midnight.",
            "th": "เซิร์ฟเวอร์จะรีสตาร์ทตัวเองโดยอัตโนมัติทุกเที่ยงคืน",
            "cat": "Tech"
          },
          {
            "en": "Sarah loves drinking hot green tea in the morning.",
            "th": "ซาร่าชอบดื่มชาเขียวร้อนในตอนเช้า",
            "cat": "Daily"
          },
          {
            "en": "We invited them to our sprint retrospective meeting.",
            "th": "พวกเราชวนพวกเขามาเข้าร่วมการประชุมสรุปการทำงาน",
            "cat": "Tech"
          },
          {
            "en": "He forgot his laptop charger at the office.",
            "th": "เขาลืมสายชาร์จแล็ปท็อปไว้ที่ออฟฟิศ",
            "cat": "Daily"
          }
        ],
        "quickCheck": [
          {
            "question": "ในประโยค 'The engineer deployed the application yesterday.' คำว่า 'engineer' และ 'application' ทำหน้าที่เป็นคำชนิดใด?",
            "options": [
              "Verbs (คำกริยา)",
              "Nouns (คำนาม)",
              "Adjectives (คำคุณศัพท์)",
              "Prepositions (คำบุพบท)"
            ],
            "correctIndex": 1,
            "explanation": "engineer (วิศวกร) และ application (แอปพลิเคชัน) เป็นชื่อเรียกบุคคลและสิ่งของ จึงเป็น Noun (คำนาม)"
          },
          {
            "question": "ควรเลือก Pronoun ตัวใดแทน 'Alex and Sarah' ในประโยค 'Alex and Sarah reviewed the pull request. ___ approved it.'?",
            "options": [
              "We",
              "They",
              "Them",
              "He"
            ],
            "correctIndex": 1,
            "explanation": "Alex and Sarah เป็นบุคคลที่สามพหูพจน์ ทำหน้าที่เป็นประธานของประโยคหลัง จึงต้องใช้ 'They'"
          },
          {
            "question": "ประโยคใดใช้ Possessive Pronoun (สรรพนามแสดงความเป็นเจ้าของ) ได้ถูกต้อง?",
            "options": [
              "This laptop is my.",
              "This laptop is mine.",
              "This laptop is me.",
              "This laptop is myself."
            ],
            "correctIndex": 1,
            "explanation": "'mine' เป็น Possessive Pronoun วางไว้เดี่ยวๆ ท้ายประโยคได้โดยไม่ต้องมีคำนามตามหลัง (ต่างจาก my ที่ต้องมีนามตามหลัง เช่น my laptop)"
          },
          {
            "question": "คำนามในข้อใดเป็น Uncountable Noun (นามนับไม่ได้) ที่ห้ามเติม -s และห้ามใช้ a/an นำหน้าเด็ดขาด?",
            "options": [
              "Server",
              "Information",
              "Feature",
              "Database"
            ],
            "correctIndex": 1,
            "explanation": "'Information' เป็นนามนับไม่ได้เสมอในภาษาอังกฤษ ห้ามพูด an information หรือ informations ให้ใช้ 'some information' หรือ 'a piece of information'"
          },
          {
            "question": "ควรเติมสรรพนามใดลงในช่องว่าง: 'The system administrator gave access credentials to ___.'?",
            "options": [
              "he",
              "him",
              "his",
              "himself"
            ],
            "correctIndex": 1,
            "explanation": "อยู่หลังคำบุพบท 'to' ทำหน้าที่เป็นกรรมของบุพบท จึงต้องใช้รูปกรรมคือ 'him'"
          },
          {
            "question": "คำใดในตัวเลือกต่อไปนี้เป็น Proper Noun (คำนามเฉพาะ) ที่ต้องขึ้นต้นด้วยตัวพิมพ์ใหญ่เสมอ?",
            "options": [
              "microservices",
              "kubernetes",
              "operating system",
              "Kubernetes"
            ],
            "correctIndex": 3,
            "explanation": "Kubernetes เป็นชื่อเฉพาะของซอฟต์แวร์/ระบบ จึงเป็น Proper Noun ต้องขึ้นต้นด้วยตัวพิมพ์ใหญ่"
          },
          {
            "question": "ประโยคใดใช้ Reflexive Pronoun (สรรพนามสะท้อนกลับ) ได้ถูกต้อง?",
            "options": [
              "The server restarts it every night.",
              "The server restarts itself every night.",
              "The server restarts its every night.",
              "The server restarts himself every night."
            ],
            "correctIndex": 1,
            "explanation": "ประธานคือ The server (สิ่งของ/ระบบ) เมื่อกระทำกับตัวเอง ต้องใช้ Reflexive Pronoun รูป 'itself'"
          },
          {
            "question": "คำนาม 'analysis' เมื่อเปลี่ยนเป็นรูปพหูพจน์ (Plural Noun) จะสะกดอย่างไร?",
            "options": [
              "analysises",
              "analyses",
              "analysiss",
              "analysi"
            ],
            "correctIndex": 1,
            "explanation": "คำนามที่มาจากภาษากรีก/ละตินลงท้ายด้วย -is เมื่อเป็นพหูพจน์จะเปลี่ยนเป็น -es เช่น analysis -> analyses, crisis -> crises"
          },
          {
            "question": "ประโยคใดใช้สรรพนามแทนคำนามได้ถูกต้องตามหลักไวยากรณ์?",
            "options": [
              "Each engineer must submit their report.",
              "Everyone brought their laptops.",
              "The company updated its privacy policy.",
              "ถูกต้องทุกข้อ"
            ],
            "correctIndex": 3,
            "explanation": "ถูกต้องทุกข้อ โดยเฉพาะ The company (องค์กร/นิติบุคคลถือเป็นเอกพจน์) ใช้สรรพนามแสดงความเป็นเจ้าของคือ 'its'"
          },
          {
            "question": "ในประโยค 'Nobody knows the root cause yet.' คำว่า 'Nobody' จัดเป็นคำประเภทใด?",
            "options": [
              "Indefinite Pronoun (สรรพนามไม่เจาะจง)",
              "Relative Pronoun (ประพันธสรรพนาม)",
              "Demonstrative Pronoun (สรรพนามชี้เฉพาะ)",
              "Personal Pronoun (บุรุษสรรพนาม)"
            ],
            "correctIndex": 0,
            "explanation": "'Nobody', 'Someone', 'Everyone' จัดเป็น Indefinite Pronoun (สรรพนามไม่เจาะจง) และถือเป็นประธานเอกพจน์เสมอ (กริยาจึงเติม -s เช่น knows)"
          }
        ]
      },
      {
        "id": "pos-verbs-adverbs",
        "title": "Unit 2: Verbs & Adverbs (คำกริยาและคำกริยาวิเศษณ์)",
        "summary": "หัวใจที่บอกการกระทำ (Action) และคำที่บอกว่าทำอย่างไร บ่อยแค่ไหน",
        "formula": "Subject + Verb + (Adverb)",
        "explanation": "\n### 1. Verb (คำกริยา) - หัวใจของประโยค\nประโยคภาษาอังกฤษขาดประธานบางครั้งได้ (เช่น ประโยคคำสั่ง) แต่ **\"ขาดกริยาไม่ได้เด็ดขาด\"**!\n- **Action Verbs (กริยาแสดงอาการ):** build (สร้าง), test (ทดสอบ), deploy (ติดตั้ง), run (วิ่ง/รัน), sleep (นอน)\n- **Linking Verbs / Verb to be (กริยาบอกสภาพ/เป็นอยู่คือ):** is, am, are, was, were, become, feel, look\n\n### 2. Adverb (คำกริยาวิเศษณ์) - ตัวบอกรายละเอียด\nAdverb ทำหน้าที่ขยายกริยา เพื่อบอกว่า **\"ทำอย่างไร (How)\", \"ทำที่ไหน (Where)\", \"ทำเมื่อไร (When)\" หรือ \"บ่อยแค่ไหน (How often)\"**\n- มักจะลงท้ายด้วย **-ly**: quickly (อย่างรวดเร็ว), smoothly (อย่างราบรื่น), successfully (อย่างสำเร็จ)\n- ตัวบอกความถี่: always (เสมอ), usually (ปกติ), often (บ่อยๆ), sometimes (บางครั้ง), never (ไม่เคย)\n\n> [!NOTE]\n> ตัวอย่าง: \"The pipeline runs.\" (ประโยคสมบูรณ์แล้ว) ➔ ขยายด้วย Adverb: \"The pipeline runs **smoothly**.\" (ไพพ์ไลน์ทำงานได้อย่างราบรื่นมาก)\n        ",
        "examples": [
          {
            "en": "The database responds very quickly today.",
            "th": "ฐานข้อมูลตอบสนองได้อย่างรวดเร็วมากในวันนี้",
            "cat": "Tech"
          },
          {
            "en": "She speaks English fluently with clients.",
            "th": "เธอพูดภาษาอังกฤษได้อย่างคล่องแคล่วกับลูกค้า",
            "cat": "Daily"
          },
          {
            "en": "We always backup the database before any release.",
            "th": "พวกเราสำรองข้อมูลฐานข้อมูลเสมอก่อนการปล่อยเวอร์ชันใหม่ทุกครั้ง",
            "cat": "Tech"
          },
          {
            "en": "He carefully checked his email before sending it.",
            "th": "เขาตรวจทานอีเมลอย่างรอบคอบก่อนที่จะกดส่ง",
            "cat": "Daily"
          }
        ],
        "quickCheck": [
          {
            "question": "คำใดในประโยค 'The script executed successfully without any errors.' ทำหน้าที่เป็น Adverb?",
            "options": [
              "script",
              "executed",
              "successfully",
              "errors"
            ],
            "correctIndex": 2,
            "explanation": "successfully ลงท้ายด้วย -ly ทำหน้าที่ขยายกริยา executed เพื่อบอกว่ารันสำเร็จลุล่วงด้วยดี"
          },
          {
            "question": "ข้อใดเป็น Linking Verb (กริยาเชื่อมบอกสภาพ ไม่แสดงการกระทำ)?",
            "options": [
              "compile",
              "remain",
              "deploy",
              "delete"
            ],
            "correctIndex": 1,
            "explanation": "'remain' ทำหน้าที่เป็น Linking Verb เชื่อมประธานกับคำคุณศัพท์ เช่น 'The connection remains stable.'"
          },
          {
            "question": "ตำแหน่งของ Adverb of Frequency (always, usually, never) ที่ถูกต้องคือข้อใด?",
            "options": [
              "We backup always the database.",
              "Always we backup the database.",
              "We always backup the database.",
              "We backup the database always."
            ],
            "correctIndex": 2,
            "explanation": "Adverb of Frequency มักวางอยู่หน้ากริยาแท้ (Main Verb) เสมอ เช่น 'We always backup...'"
          },
          {
            "question": "ควรเติมคำใดลงในช่องว่าง: 'The background worker processes data very ___.'?",
            "options": [
              "quick",
              "quickly",
              "more quick",
              "quickness"
            ],
            "correctIndex": 1,
            "explanation": "ต้องการ Adverb มาขยายกริยา 'processes' ว่าประมวลผล 'อย่างไร' จึงต้องใช้ 'quickly'"
          },
          {
            "question": "ข้อใดเป็น Stative Verb (กริยาแสดงสถานะ/ความรู้สึก ที่ไม่นิยมใช้ในรูป -ing Continuous)?",
            "options": [
              "understand",
              "write",
              "test",
              "download"
            ],
            "correctIndex": 0,
            "explanation": "'understand' (เข้าใจ) เป็น Stative Verb บอกสถานะความเข้าใจ จึงพูด 'I understand' ไม่พูด 'I am understanding'"
          },
          {
            "question": "ประโยคใดใช้คำว่า 'fast' ได้ถูกต้อง?",
            "options": [
              "The query runs fastly.",
              "The query runs fast.",
              "The query is running more fastly.",
              "The query runs with fastly."
            ],
            "correctIndex": 1,
            "explanation": "'fast' เป็นได้ทั้ง Adjective และ Adverb ในรูปเดียวกัน ไม่มีคำว่า 'fastly' ในภาษาอังกฤษ"
          },
          {
            "question": "ควรเติมคำใดลงในช่องว่าง: 'The system feels ___ after the latest patch.'?",
            "options": [
              "sluggishly",
              "sluggish",
              "sluggishness",
              "more sluggishly"
            ],
            "correctIndex": 1,
            "explanation": "'feels' ในที่นี้ทำหน้าที่เป็น Linking Verb จึงต้องตามด้วย Adjective คือ 'sluggish' (อืด/ช้า) ไม่ใช่ Adverb"
          },
          {
            "question": "คำว่า 'highly' ในวลี 'a highly scalable architecture' ทำหน้าที่ขยายคำใด?",
            "options": [
              "architecture",
              "scalable",
              "a",
              "ทั้ง architecture และ scalable"
            ],
            "correctIndex": 1,
            "explanation": "'highly' เป็น Adverb ทำหน้าที่ขยาย Adjective คือ 'scalable' (ขยายขนาดได้อย่างยิ่งยวด)"
          },
          {
            "question": "ข้อใดคือความหมายของ Phrasal Verb 'roll back' ในบริบทการทำงาน?",
            "options": [
              "กลิ้งลูกบอลกลับไป",
              "ย้อนกลับไปใช้เวอร์ชันหรือการตั้งค่าก่อนหน้า",
              "ลบข้อมูลทั้งหมดทิ้งทันที",
              "บันทึกไฟล์ลงฮาร์ดดิสก์"
            ],
            "correctIndex": 1,
            "explanation": "'roll back' แปลว่าการย้อนระบบกลับไปยังเวอร์ชันก่อนหน้าเพื่อความปลอดภัยเมื่อมีข้อผิดพลาด"
          },
          {
            "question": "ประโยคใดใช้ Adverb ขยายกริยาช่วยและกริยาแท้ได้ถูกต้องที่สุด?",
            "options": [
              "We have completely resolved the network outage.",
              "We completely have resolved the network outage.",
              "We have resolved completely the network outage.",
              "Completely we have resolved the network outage."
            ],
            "correctIndex": 0,
            "explanation": "Adverb มักวางอยู่ตรงกลางระหว่างกริยาช่วย (have) และกริยาช่อง 3 (resolved): 'have completely resolved'"
          }
        ]
      },
      {
        "id": "pos-adj-prep",
        "title": "Unit 3: Adjectives & Prepositions (คำคุณศัพท์และคำบุพบท)",
        "summary": "คำบรรยายลักษณะ (Adj) และคำเชื่อมบอกตำแหน่ง/เวลา (In, On, At)",
        "formula": "Adjective + Noun  |  Preposition + Noun Phrase",
        "explanation": "\n### 1. Adjective (คำคุณศัพท์) - บรรยายลักษณะคำนาม\nวางไว้ **หน้า Noun** หรือ **หลัง Verb to be**:\n- วางหน้า Noun: \"a **scalable** architecture\" (สถาปัตยกรรมที่ขยายขนาดได้), \"a **new** feature\" (ฟีเจอร์ใหม่)\n- หลัง Verb to be: \"The system is **stable**.\" (ระบบมีความเสถียร)\n\n### 2. Preposition (คำบุพบท) - บอกตำแหน่งและเวลา\n- **In:** ใช้กับพื้นที่กว้าง, เมือง, ประเทศ, เดือน, ปี (in Thailand, in 2026, in production)\n- **On:** ใช้กับวันในสัปดาห์, วันที่, บนพื้นผิว, บนแพลตฟอร์ม (on Monday, on the server, on GitHub)\n- **At:** ใช้กับจุดเจาะจง, เวลาที่แน่นอน (at 9:00 AM, at the office, at line 42)\n        ",
        "examples": [
          {
            "en": "We found a critical bug in the authentication module.",
            "th": "เราพบบั๊กที่วิกฤตตัวหนึ่งในโมดูลยืนยันตัวตน",
            "cat": "Tech"
          },
          {
            "en": "Our daily stand-up meeting starts at 9:30 AM.",
            "th": "การประชุมสแตนด์อัปประจำวันเริ่มตอน 9 โมงครึ่ง",
            "cat": "Tech"
          },
          {
            "en": "I left my blue notebook on the meeting table.",
            "th": "ฉันลืมสมุดบันทึกสีน้ำเงินไว้บนโต๊ะประชุม",
            "cat": "Daily"
          }
        ],
        "quickCheck": [
          {
            "question": "ควรเติมคำบุพบทใด: 'The automated deployment starts ___ 9:00 AM every Tuesday.'?",
            "options": [
              "in",
              "on",
              "at",
              "by"
            ],
            "correctIndex": 2,
            "explanation": "ใช้ 'at' กับเวลาที่ระบุแน่นอนบนหน้าปัดนาฬิกา (at 9:00 AM)"
          },
          {
            "question": "ควรเติมคำบุพบทใด: 'The source code repository is hosted ___ GitHub.'?",
            "options": [
              "in",
              "on",
              "at",
              "to"
            ],
            "correctIndex": 1,
            "explanation": "ใช้ 'on' กับแพลตฟอร์ม เว็บไซต์ หรือระบบออนไลน์ เช่น on GitHub, on AWS, on the internet"
          },
          {
            "question": "ตำแหน่งของ Adjective ในประโยคภาษาอังกฤษคือข้อใด?",
            "options": [
              "วางไว้หน้าคำนาม (Noun) หรือหลัง Linking Verb (เช่น be)",
              "วางไว้หลังคำกริยาแท้เสมอ",
              "วางไว้ท้ายประโยคเท่านั้น",
              "วางไว้หน้าคำบุพบทเสมอ"
            ],
            "correctIndex": 0,
            "explanation": "Adjective วางไว้หน้า Noun (เช่น a stable version) หรืออยู่หลัง Linking Verb (เช่น The system is stable)"
          },
          {
            "question": "ควรเติมคำบุพบทใด: 'The incident occurred ___ production environment.'?",
            "options": [
              "at",
              "on",
              "in",
              "by"
            ],
            "correctIndex": 2,
            "explanation": "สภาพแวดล้อมระบบหรือพื้นที่การทำงานใช้ 'in production' หรือ 'in staging'"
          },
          {
            "question": "คู่คำบุพบทเฉพาะ (Dependent Prepositions) ในข้อใดถูกต้อง?",
            "options": [
              "depend on / responsible for / interested in",
              "depend at / responsible of / interested on",
              "depend in / responsible with / interested to",
              "depend by / responsible at / interested with"
            ],
            "correctIndex": 0,
            "explanation": "depend คู่กับ on, responsible คู่กับ for, interested คู่กับ in เป็นคู่คำบุพบทที่ใช้คู่กันเสมอ"
          },
          {
            "question": "ควรเติมคำบุพบทใด: 'The annual tech conference will take place ___ Monday.'?",
            "options": [
              "in",
              "on",
              "at",
              "from"
            ],
            "correctIndex": 1,
            "explanation": "วันในสัปดาห์ (Days of the week) และวันที่เจาะจง ใช้ 'on' เสมอ เช่น on Monday, on October 20th"
          },
          {
            "question": "ลำดับคำคุณศัพท์ (Adjective Order) ในข้อใดถูกต้องที่สุด?",
            "options": [
              "a small new Japanese laptop",
              "a new Japanese small laptop",
              "a Japanese small new laptop",
              "a laptop small new Japanese"
            ],
            "correctIndex": 0,
            "explanation": "ลำดับ Adjective มาตรฐาน: Size (small) -> Age (new) -> Origin (Japanese) + Noun (laptop)"
          },
          {
            "question": "ควรเติมคำบุพบทใด: 'The container image was pushed ___ the registry container.'?",
            "options": [
              "into",
              "onto",
              "under",
              "above"
            ],
            "correctIndex": 0,
            "explanation": "การเคลื่อนที่เข้าไปข้างในพื้นที่หรือคอนเทนเนอร์ ใช้ 'into'"
          },
          {
            "question": "ควรเติมคำใดลงในช่องว่าง: 'This API design is ___ and easy to maintain.'?",
            "options": [
              "clean",
              "cleanly",
              "cleanness",
              "cleaning"
            ],
            "correctIndex": 0,
            "explanation": "อยู่หลัง Verb to be (is) เชื่อมกับ 'easy' (Adjective) จึงต้องเป็น Adjective รูปเดียวกันคือ 'clean'"
          },
          {
            "question": "ประโยคใดใช้ Preposition of Place บอกตำแหน่งในโค้ดได้ถูกต้อง?",
            "options": [
              "The error is located at line 42.",
              "The error is located on line 42.",
              "The error is located in line 42.",
              "The error is located by line 42."
            ],
            "correctIndex": 0,
            "explanation": "จุดเจาะจงพิกัดในเอกสารหรือบรรทัดโค้ด ใช้ 'at line 42' เป็นมาตรฐานสากล"
          }
        ]
      }
    ]
  },
  {
    "id": "determiner",
    "title": "Determiner",
    "titleTh": "คำนำหน้านามและคำระบุจำนวน (A, An, The, Some, Any)",
    "icon": "🏷️",
    "badge": "Essential",
    "description": "เข้าใจการใช้ A, An, The เมื่อไหร่ต้องชี้เฉพาะ และการบอกปริมาณของคำนามนับได้และนับไม่ได้",
    "units": [
      {
        "id": "det-articles",
        "title": "Unit 1: Articles Mastery (A, An vs The)",
        "summary": "กฎเหล็กการเลือกระหว่างคำนามทั่วไป (a/an) กับคำนามที่ชี้เฉพาะเจาะจง (the)",
        "formula": "a/an + Singular Countable Noun  |  the + Specific Noun",
        "explanation": "\n### 1. A / An (สิ่งใดสิ่งหนึ่ง ไม่เจาะจง มี 1 ชิ้น)\n- ใช้ **a** นำหน้าคำที่ออกเสียงพยัญชนะ: a server, a user, a bug, a university (เสียง ย)\n- ใช้ **an** นำหน้าคำที่ออกเสียงสระ (อ): an API, an issue, an hour (เสียง อ ไม่ใช่ตัว h), an error\n\n### 2. The (ชี้เฉพาะ ทั้งคนพูดและคนฟังรู้ว่าเป็นตัวไหน)\n- ใช้เมื่อกล่าวถึงสิ่งนั้นซ้ำเป็นครั้งที่สอง\n- ใช้เมื่อสิ่งนั้นมีเพียงหนึ่งเดียวในบริบทนั้น: the production environment, the CEO, the internet\n- ใช้กับสิ่งที่มีการขยายความเจาะจง: the server *that crashed yesterday*\n        ",
        "examples": [
          {
            "en": "We need a new database server.",
            "th": "เราต้องการเซิร์ฟเวอร์ฐานข้อมูลเครื่องใหม่สักเครื่อง (เครื่องไหนก็ได้)",
            "cat": "Tech"
          },
          {
            "en": "The database server went down again.",
            "th": "เซิร์ฟเวอร์ฐานข้อมูลเครื่องนั้นล่มอีกแล้ว (เจาะจงเครื่องที่รู้กัน)",
            "cat": "Tech"
          },
          {
            "en": "She submitted an error report this morning.",
            "th": "เธอส่งรายงานข้อผิดพลาดมาเมื่อเช้านี้",
            "cat": "Daily"
          }
        ],
        "quickCheck": [
          {
            "question": "ควรเติม Article ใด: 'We designed ___ API gateway for our microservices.'?",
            "options": [
              "a",
              "an",
              "the",
              "ไม่ต้องเติม"
            ],
            "correctIndex": 1,
            "explanation": "'API' ออกเสียงขึ้นต้นด้วยสระ /eɪ-piː-aɪ/ จึงต้องใช้ 'an API gateway'"
          },
          {
            "question": "ประโยคใดใช้ Article 'The' เพื่อสื่อถึงสิ่งชี้เฉพาะเจาะจงได้ถูกต้อง?",
            "options": [
              "A database we created yesterday crashed.",
              "The database we created yesterday crashed.",
              "An database we created yesterday crashed.",
              "Database we created yesterday crashed."
            ],
            "correctIndex": 1,
            "explanation": "มีส่วนขยายเจาะจงว่า 'ที่เราสร้างขึ้นเมื่อวาน' ผู้ฟังและผู้พูดรู้ว่าหมายถึงอันไหน จึงต้องใช้ 'The'"
          },
          {
            "question": "ข้อใดใช้ Zero Article (ไม่ต้องมี Article นำหน้า) ได้ถูกต้อง?",
            "options": [
              "Software engineers write code daily.",
              "The software engineers write a code daily.",
              "A software engineers write code daily.",
              "An software engineers write code daily."
            ],
            "correctIndex": 0,
            "explanation": "การกล่าวถึงวิศวกรซอฟต์แวร์โดยทั่วไปในรูปพหูพจน์ และ code (นามนับไม่ได้ในบริบททั่วไป) ไม่ต้องมี article นำหน้า"
          },
          {
            "question": "ควรเติม Article ใด: 'It takes ___ hour to complete the backup job.'?",
            "options": [
              "a",
              "an",
              "the",
              "ไม่ต้องเติม"
            ],
            "correctIndex": 1,
            "explanation": "'hour' ตัว h ไม่ออกเสียง ออกเสียงขึ้นต้นด้วยเสียงสระ /aʊər/ จึงต้องใช้ 'an hour'"
          },
          {
            "question": "ควรเติม Article ใด: '___ internet has changed how teams collaborate worldwide.'?",
            "options": [
              "A",
              "An",
              "The",
              "ไม่ต้องเติม"
            ],
            "correctIndex": 2,
            "explanation": "สิ่งที่มีเพียงหนึ่งเดียวในโลกหรือระบบสากล (the internet, the world, the moon) ต้องใช้ 'The' เสมอ"
          },
          {
            "question": "ควรเติม Article ใด: 'We installed ___ SSL certificate on our load balancer.'?",
            "options": [
              "a",
              "an",
              "the",
              "ไม่ต้องเติม"
            ],
            "correctIndex": 1,
            "explanation": "'SSL' อ่านออกเสียงตัว S ว่า /es/ ขึ้นต้นด้วยเสียงสระ จึงใช้ 'an SSL certificate'"
          },
          {
            "question": "ควรเติม Article ใด: 'She speaks ___ English fluently in international meetings.'?",
            "options": [
              "a",
              "an",
              "the",
              "ไม่ต้องเติม"
            ],
            "correctIndex": 3,
            "explanation": "ชื่อภาษาเดี่ยวๆ (English, Thai, Japanese) ไม่ต้องมี article นำหน้า (ยกเว้นมีคำว่า language เช่น the English language)"
          },
          {
            "question": "ควรเติม Article ใด: 'Python is ___ most popular language for data engineering.'?",
            "options": [
              "a",
              "an",
              "the",
              "ไม่ต้องเติม"
            ],
            "correctIndex": 2,
            "explanation": "ขั้นสูงสุด (Superlative) 'most popular' ต้องมี 'the' นำหน้าเสมอ: 'the most popular'"
          },
          {
            "question": "ประโยคใดใช้การอ้างอิง A -> The ได้ถูกต้อง?",
            "options": [
              "We found a bug. The bug caused a crash.",
              "We found the bug. A bug caused a crash.",
              "We found an bug. An bug caused the crash.",
              "We found bug. The bug caused crash."
            ],
            "correctIndex": 0,
            "explanation": "เมื่อกล่าวถึงสิ่งใหม่ครั้งแรกใช้ 'a bug' เมื่อกล่าวถึงซ้ำครั้งที่สองเพราะรู้แล้วว่าเป็นตัวไหนจึงใช้ 'The bug'"
          },
          {
            "question": "ควรเติม Article ใด: '___ data privacy is extremely important in healthcare tech.'?",
            "options": [
              "A",
              "An",
              "The",
              "ไม่ต้องเติม (Zero Article)"
            ],
            "correctIndex": 3,
            "explanation": "การพูดถึงแนวคิดทั่วไปของความเป็นส่วนตัวของข้อมูล (Data privacy) โดยรวม ไม่เจาะจง จึงไม่ต้องใส่ Article"
          }
        ]
      },
      {
        "id": "det-quantifiers",
        "title": "Unit 2: Quantifiers (Some, Any, Much, Many, Few, Little)",
        "summary": "การบอกปริมาณสำหรับคำนามนับได้และนับไม่ได้อย่างเป็นธรรมชาติ",
        "formula": "Some (บอกเล่า/ขอร้อง) vs Any (ปฏิเสธ/คำถาม)  |  Many (นับได้) vs Much (นับไม่ได้)",
        "explanation": "\n### 1. Some vs Any\n- **Some:** ใช้ในประโยคบอกเล่า หรือยื่นข้อเสนอ/ขอร้องอย่างสุภาพ\n  - \"We have **some** open pull requests.\" (เรามี PR ค้างอยู่บ้าง)\n  - \"Would you like **some** coffee?\" (รับกาแฟไหมครับ?)\n- **Any:** ใช้ในประโยคปฏิเสธและคำถามทั่วไป\n  - \"Are there **any** pending alerts?\" (มี Alert ค้างอยู่ไหม?)\n  - \"We don't have **any** spare hardware.\" (เราไม่มีฮาร์ดแวร์สำรองเลย)\n\n### 2. Many vs Much\n- **Many + นามนับได้พหูพจน์:** many pods, many developers, many errors\n- **Much + นามนับไม่ได้:** much memory, much bandwidth, much time, much traffic\n        ",
        "examples": [
          {
            "en": "How much RAM does this container require?",
            "th": "คอนเทนเนอร์ตัวนี้ต้องใช้ RAM เท่าไร? (RAM นับไม่ได้)",
            "cat": "Tech"
          },
          {
            "en": "How many instances are currently running?",
            "th": "ตอนนี้มี Instance กำลังทำงานอยู่กี่ตัว? (Instance นับได้)",
            "cat": "Tech"
          },
          {
            "en": "Do you have any questions before we wrap up?",
            "th": "มีใครมีคำถามอะไรไหมก่อนที่เราจะปิดการประชุม?",
            "cat": "Daily"
          }
        ],
        "quickCheck": [
          {
            "question": "ควรเติมคำใด: 'There isn't ___ error found in the unit tests.'?",
            "options": [
              "some",
              "any",
              "no",
              "much"
            ],
            "correctIndex": 1,
            "explanation": "ในประโยคปฏิเสธ (isn't) ใช้ 'any' เพื่อบอกว่า 'ไม่มีเลยแม้แต่อันเดียว'"
          },
          {
            "question": "ควรเติมคำใด: 'How ___ virtual machines do we need to launch?'?",
            "options": [
              "much",
              "many",
              "little",
              "any"
            ],
            "correctIndex": 1,
            "explanation": "'virtual machines' เป็นคำนามนับได้พหูพจน์ จึงต้องถามด้วย 'How many'"
          },
          {
            "question": "ประโยคใดสื่อความหมายในเชิงบวก (พอมีอยู่บ้าง เล็กน้อยแต่เพียงพอ)?",
            "options": [
              "We have few developers available today.",
              "We have a few developers available today.",
              "We have little developers available today.",
              "We have not any developers available today."
            ],
            "correctIndex": 1,
            "explanation": "'a few' สื่อความหมายเชิงบวกว่า 'พอมีอยู่บ้างสองสามคน' (ขณะที่ 'few' ไม่มี 'a' สื่อว่า 'มีน้อยมากจนแทบไม่พอ')"
          },
          {
            "question": "ควรเติมคำใดกับนามนับไม่ได้: 'We have ___ storage left on the production disk.' (เหลือน้อยมากจนน่าเป็นห่วง)?",
            "options": [
              "few",
              "little",
              "a few",
              "many"
            ],
            "correctIndex": 1,
            "explanation": "'storage' เป็นนามนับไม่ได้ และเหลือน้อยมากในเชิงลบ จึงใช้ 'little'"
          },
          {
            "question": "ประโยคยื่นข้อเสนออย่างสุภาพ (Polite Offer) ข้อใดใช้คำบอกปริมาณถูกต้อง?",
            "options": [
              "Would you like any coffee?",
              "Would you like some coffee?",
              "Would you like much coffee?",
              "Would you like many coffee?"
            ],
            "correctIndex": 1,
            "explanation": "ในประโยคคำถามที่เป็นการเสนอ (Offer) หรือขอร้อง (Request) อย่างสุภาพ นิยมใช้ 'some' มากกว่า any"
          },
          {
            "question": "ประโยคใดใช้กริยาถูกต้องตามหลักไวยากรณ์?",
            "options": [
              "Each server has its own IP address.",
              "Each server have its own IP address.",
              "All server has its own IP address.",
              "Every servers have its own IP address."
            ],
            "correctIndex": 0,
            "explanation": "'Each + นามเอกพจน์' (Each server) ต้องใช้กริยาเอกพจน์คือ 'has'"
          },
          {
            "question": "ควรเติมคำใด: '___ Kubernetes and Docker are widely used in DevOps.'?",
            "options": [
              "Either",
              "Neither",
              "Both",
              "Each"
            ],
            "correctIndex": 2,
            "explanation": "ใช้ 'Both ... and ...' เพื่อบอกว่า 'ทั้งสองอย่าง' (ทั้ง Kubernetes และ Docker)"
          },
          {
            "question": "ควรเติมคำใด: 'Neither database ___ responding to health checks.'?",
            "options": [
              "are",
              "is",
              "were",
              "have"
            ],
            "correctIndex": 1,
            "explanation": "'Neither + นามเอกพจน์' ถือเป็นประธานเอกพจน์ จึงใช้ 'is'"
          },
          {
            "question": "ประโยคใดมีความหมายว่า 'ไม่มีคำถามใดๆ เลย'?",
            "options": [
              "I have any questions.",
              "I have no questions.",
              "I don't have no questions.",
              "I have none questions."
            ],
            "correctIndex": 1,
            "explanation": "'I have no questions.' เป็นโครงสร้างบอกเล่าแต่ความหมายปฏิเสธที่กระชับและเป็นมืออาชีพ"
          },
          {
            "question": "ควรเติมคำใด: 'We received ___ valuable feedback from the beta testers.'?",
            "options": [
              "many",
              "a lot of",
              "a few",
              "few"
            ],
            "correctIndex": 1,
            "explanation": "'feedback' เป็นนามนับไม่ได้ จึงใช้ 'a lot of' ได้อย่างถูกต้อง (ห้ามใช้ many หรือ a few)"
          }
        ]
      }
    ]
  },
  {
    "id": "tenses",
    "title": "Tenses",
    "titleTh": "กาลเวลาทั้ง 12 Tenses ในการทำงานจริง",
    "icon": "⏳",
    "badge": "Core Pillar",
    "description": "สรุปหลักการใช้ Tense ให้ตรงกับบริบทจริง แยกแยะระหว่างสิ่งที่ทำประจำ สิ่งที่กำลังทำ และสิ่งที่เพิ่งเสร็จสิ้น",
    "units": [
      {
        "id": "tense-present-simple-con",
        "title": "Unit 1: Present Simple vs Present Continuous",
        "summary": "สิ่งที่ทำเป็นกิจวัตร/ความจริงทางระบบ vs สิ่งที่กำลังทำอยู่ ณ วินาทีนี้",
        "formula": "Present Simple: S + V.1 (s/es)  vs  Present Con: S + is/am/are + V.ing",
        "explanation": "\n### 1. Present Simple (ความจริง กฎเกณฑ์ กิจวัตรประจำวัน)\n- ใช้กับสิ่งที่เป็นจริงเสมอ การทำงานตามรอบปกติ หรือพฤติกรรมของระบบ\n- **คีย์เวิร์ด:** always, usually, every day, automatically\n- ตัวอย่าง: \"The cron job **runs** every hour.\" (Cron job ทำงานทุกๆ 1 ชั่วโมง เป็นกฎปกติ)\n\n### 2. Present Continuous (กำลังทำอยู่ ณ วินาทีนี้ หรือสถานการณ์ชั่วคราว)\n- ใช้เมื่อเหตุการณ์กำลังดำเนินอยู่ตอนนี้ หรือช่วงนี้เป็นการชั่วคราว\n- **คีย์เวิร์ด:** now, right now, currently, at the moment\n- ตัวอย่าง: \"We **are currently migrating** the user table.\" (เรากำลังย้ายตารางข้อมูลผู้ใช้อยู่ ณ ตอนนี้)\n        ",
        "examples": [
          {
            "en": "The API gateway routes all incoming requests.",
            "th": "API Gateway ทำหน้าที่จัดเส้นทางทุก Request ที่ส่งเข้ามา (ความจริง/หน้าที่ปกติ)",
            "cat": "Tech"
          },
          {
            "en": "I am investigating the latency spike right now.",
            "th": "ฉันกำลังตรวจสอบปัญหากราฟ Latency พุ่งสูงอยู่ ณ ตอนนี้",
            "cat": "Tech"
          },
          {
            "en": "She usually works remotely on Wednesdays.",
            "th": "ปกติเธอจะทำงานแบบรีโมทในวันพุธ",
            "cat": "Daily"
          },
          {
            "en": "Listen! The fire alarm is ringing.",
            "th": "ฟังดูสิ! สัญญาณเตือนไฟไหม้กำลังดังอยู่",
            "cat": "Daily"
          }
        ],
        "quickCheck": [
          {
            "question": "ควรเติมกริยารูปใด: 'The automated health-check script ___ every 10 minutes.'?",
            "options": [
              "run",
              "runs",
              "is running",
              "are running"
            ],
            "correctIndex": 1,
            "explanation": "ประธานเอกพจน์ (The script) บอกกิจวัตรหรือความจริงที่เกิดขึ้นประจำ (every 10 minutes) กริยาใน Present Simple ต้องเติม -s -> 'runs'"
          },
          {
            "question": "ควรเติมกริยารูปใด: 'Listen! The alarm is sounding. The team ___ the server right now.'?",
            "options": [
              "troubleshoots",
              "is troubleshooting",
              "troubleshot",
              "has troubleshooted"
            ],
            "correctIndex": 1,
            "explanation": "มีคำบอกเวลา 'right now' แสดงการกระทำที่กำลังดำเนินอยู่ขณะพูด ต้องใช้ Present Continuous: 'is troubleshooting'"
          },
          {
            "question": "ประโยคใดถูกต้องตามกฎ Stative Verb (กริยาแสดงสภาวะความรู้สึก/ความจำ)?",
            "options": [
              "I am knowing the root cause of this incident.",
              "I know the root cause of this incident.",
              "I am knowing root cause.",
              "I have been knowing the root cause."
            ],
            "correctIndex": 1,
            "explanation": "'know' เป็น Stative Verb บอกสถานะความรู้ ไม่นิยมใช้ในรูป continuous (-ing) จึงต้องใช้ 'I know'"
          },
          {
            "question": "ประโยคคำถาม Present Simple ข้อใดถูกต้อง?",
            "options": [
              "Does the API returns JSON format?",
              "Does the API return JSON format?",
              "Do the API returns JSON format?",
              "Is the API return JSON format?"
            ],
            "correctIndex": 1,
            "explanation": "เมื่อใช้กริยาช่วย 'Does' แล้ว กริยาแท้ต้องกลับมาเป็น Infinitive ไม่เติม -s เสมอ: 'Does the API return...?'"
          },
          {
            "question": "ประโยคใดสื่อถึง 'สถานการณ์ชั่วคราว' (Temporary Situation)?",
            "options": [
              "He lives in Bangkok.",
              "He is working remotely from Chiang Mai this month.",
              "The sun rises in the east.",
              "We build cloud architectures."
            ],
            "correctIndex": 1,
            "explanation": "'is working ... this month' ใช้ Present Continuous เพื่อบอกว่าทำอยู่เพียงชั่วคราวเฉพาะเดือนนี้ ไม่ใช่กิจวัตรถาวร"
          },
          {
            "question": "ควรเติมกริยารูปใด: 'Sarah ___ five different programming languages fluently.'?",
            "options": [
              "speak",
              "speaks",
              "is speaking",
              "are speaking"
            ],
            "correctIndex": 1,
            "explanation": "บอกความสามารถหรือข้อเท็จจริงทั่วไปของบุคคล ประธานเอกพจน์ (Sarah) ใช้ Present Simple กริยาเติม -s -> 'speaks'"
          },
          {
            "question": "ประโยคปฏิเสธ Present Continuous ข้อใดถูกต้อง?",
            "options": [
              "The microservice doesn't responding.",
              "The microservice is not responding to ping requests.",
              "The microservice not responding.",
              "The microservice don't is responding."
            ],
            "correctIndex": 1,
            "explanation": "โครงสร้างปฏิเสธ Present Continuous: Subject + is/am/are + not + V.ing -> 'is not responding'"
          },
          {
            "question": "การใช้ Present Simple บอกตารางเวลาในอนาคต (Scheduled Timetable) ข้อใดถูกต้อง?",
            "options": [
              "The flight departs at 7:30 PM tomorrow evening.",
              "The flight is depart at 7:30 PM tomorrow evening.",
              "The flight will be depart at 7:30 PM tomorrow evening.",
              "The flight departing at 7:30 PM tomorrow evening."
            ],
            "correctIndex": 0,
            "explanation": "ตารางเวลาหรือกำหนดการที่แน่นอน (Timetable) เช่น รถไฟ เครื่องบิน สามารถใช้ Present Simple (departs) บอกเหตุการณ์ในอนาคตได้"
          },
          {
            "question": "ประโยคใดบอกแนวโน้มการเปลี่ยนแปลง (Changing Trends)?",
            "options": [
              "Cloud adoption is increasing across all enterprises.",
              "Cloud adoption increases.",
              "Cloud adoption has increased yesterday.",
              "Cloud adoption increase."
            ],
            "correctIndex": 0,
            "explanation": "การบอกแนวโน้มที่กำลังค่อยๆ เปลี่ยนแปลงในปัจจุบัน นิยมใช้ Present Continuous: 'is increasing'"
          },
          {
            "question": "ควรเติมคำใด: 'Why ___ the backend server using so much CPU right now?'?",
            "options": [
              "does",
              "is",
              "are",
              "do"
            ],
            "correctIndex": 1,
            "explanation": "กริยาแท้คือ 'using' (-ing) และประธานเป็นเอกพจน์ (the backend server) จึงต้องใช้กริยาช่วย 'is'"
          }
        ]
      },
      {
        "id": "tense-past-vs-perfect",
        "title": "Unit 2: Past Simple vs Present Perfect",
        "summary": "อดีตจบลงแล้ว (มีเวลาระบุ) vs สิ่งที่เพิ่งเกิดและผลลัพธ์ยังเชื่อมถึงปัจจุบัน",
        "formula": "Past Simple: S + V.2  vs  Present Perfect: S + have/has + V.3",
        "explanation": "\n### 1. Past Simple (จบไปแล้ว มีจุดเวลาในอดีตชัดเจน)\n- ต้องมีคำระบุเวลาในอดีต เช่น yesterday, last night, 2 hours ago, in 2025\n- ตัวอย่าง: \"The server crashed **yesterday**.\" (เซิร์ฟเวอร์ล่มเมื่อวานนี้ จบไปแล้วและเวลาระบุชัด)\n\n### 2. Present Perfect (ทำมาตั้งแต่อดีตถึงปัจจุบัน หรือเพิ่งเสร็จและส่งผลอยู่)\n- ไม่ระบุเวลาที่แน่นอน แต่เน้นผลลัพธ์ว่าทำเสร็จแล้ว หรือยังไม่เสร็จ\n- **คีย์เวิร์ด:** already (แล้ว), just (เพิ่งจะ), yet (ยัง), since (ตั้งแต่), for (เป็นเวลา)\n- ตัวอย่าง: \"We **have already deployed** version 2.4.\" (พวกเราติดตั้งเวอร์ชัน 2.4 เสร็จเรียบร้อยแล้ว และตอนนี้ระบบกำลังรันอยู่)\n        ",
        "examples": [
          {
            "en": "We rolled back the release 10 minutes ago.",
            "th": "พวกเราโรลแบ็กเวอร์ชันนั้นกลับไปเมื่อ 10 นาทีที่แล้ว (มีเวลา 10 minutes ago)",
            "cat": "Tech"
          },
          {
            "en": "Have you reviewed the pull request yet?",
            "th": "คุณได้ตรวจรีวิว PR ตัวนั้นหรือยัง?",
            "cat": "Tech"
          },
          {
            "en": "I have worked at this tech company for three years.",
            "th": "ฉันทำงานที่บริษัทเทคโนโลยีแห่งนี้มา 3 ปีแล้ว (และปัจจุบันยังทำอยู่)",
            "cat": "Daily"
          }
        ],
        "quickCheck": [
          {
            "question": "ควรเติมกริยารูปใด: 'Our team ___ the new payment gateway yesterday afternoon.'?",
            "options": [
              "deployed",
              "has deployed",
              "have deployed",
              "was deployed"
            ],
            "correctIndex": 0,
            "explanation": "มีคำบอกเวลาในอดีตชัดเจน (yesterday afternoon) ต้องใช้ Past Simple (V.2) เสมอ -> 'deployed'"
          },
          {
            "question": "ควรเติมกริยารูปใด: 'I ___ my password, so I cannot log into AWS right now.'?",
            "options": [
              "forgot",
              "have forgotten",
              "forget",
              "was forgetting"
            ],
            "correctIndex": 1,
            "explanation": "เหตุการณ์เกิดขึ้นในอดีตแต่ส่งผลถึงปัจจุบัน (ตอนนี้เข้าไม่ได้) ต้องใช้ Present Perfect: 'have forgotten'"
          },
          {
            "question": "ควรเติมคำใด: 'We have maintained this legacy system ___ three years.'?",
            "options": [
              "since",
              "for",
              "in",
              "during"
            ],
            "correctIndex": 1,
            "explanation": "ใช้ 'for' กับช่วงระยะเวลา (Duration) เช่น 'for three years', 'for 6 months' (ขณะที่ since ใช้กับจุดเริ่มต้นของเวลา เช่น since 2023)"
          },
          {
            "question": "ควรเติมกริยารูปใด: 'Did you ___ the staging branch before opening the PR?'?",
            "options": [
              "merged",
              "merge",
              "merging",
              "have merged"
            ],
            "correctIndex": 1,
            "explanation": "ประโยคคำถาม Past Simple เมื่อมีกริยาช่วย 'Did' แล้ว กริยาแท้ต้องเป็น Base Form (Infinitive ไม่ผัน) เสมอ: 'Did you merge...?'"
          },
          {
            "question": "ตำแหน่งของ 'just' ใน Present Perfect ข้อใดถูกต้อง?",
            "options": [
              "The CI/CD pipeline just has completed.",
              "The CI/CD pipeline has just completed.",
              "The CI/CD pipeline has completed just.",
              "Just the CI/CD pipeline has completed."
            ],
            "correctIndex": 1,
            "explanation": "คำว่า 'just', 'already' มักวางอยู่กึ่งกลางระหว่าง have/has และ V.3: 'has just completed'"
          },
          {
            "question": "ควรเติมกริยารูปใด: 'Have you ever ___ a production incident at 3:00 AM?'?",
            "options": [
              "handle",
              "handled",
              "handling",
              "was handled"
            ],
            "correctIndex": 1,
            "explanation": "โครงสร้าง 'Have you ever + V.3' ใช้ถามประสบการณ์ในชีวิต -> 'Have you ever handled...?'"
          },
          {
            "question": "ประโยคใดถูกต้องตามหลักไวยากรณ์?",
            "options": [
              "We have migrated the database two weeks ago.",
              "We migrated the database two weeks ago.",
              "We migrate the database two weeks ago.",
              "We had migrated the database two weeks ago."
            ],
            "correctIndex": 1,
            "explanation": "เมื่อมีคำว่า 'ago' (two weeks ago) ชี้ชัดเวลาในอดีต ต้องใช้ Past Simple (migrated) ห้ามใช้ Present Perfect"
          },
          {
            "question": "ควรเติมคำใด: 'The team has not released any new version ___ last December.'?",
            "options": [
              "for",
              "since",
              "in",
              "by"
            ],
            "correctIndex": 1,
            "explanation": "ใช้ 'since' กับจุดเริ่มต้นของเวลาที่เจาะจง (since last December, since yesterday)"
          },
          {
            "question": "ประโยคปฏิเสธ Present Perfect ข้อใดใช้ 'yet' ได้ถูกต้อง?",
            "options": [
              "The QA engineer hasn't tested the new build yet.",
              "The QA engineer yet hasn't tested the new build.",
              "The QA engineer hasn't yet tested not the build.",
              "The QA engineer has tested the new build yet."
            ],
            "correctIndex": 0,
            "explanation": "'yet' แปลว่า 'ยัง' มักวางไว้ท้ายประโยคปฏิเสธหรือประโยคคำถามใน Present Perfect"
          },
          {
            "question": "กริยา 3 ช่องของคำว่า 'write' ในรูป V.2 และ V.3 คือข้อใด?",
            "options": [
              "writed / writed",
              "wrote / written",
              "wrote / wrote",
              "written / wrote"
            ],
            "correctIndex": 1,
            "explanation": "write (V.1) -> wrote (V.2 Past Simple) -> written (V.3 Past Participle)"
          }
        ]
      }
    ]
  },
  {
    "id": "sentence-structure",
    "title": "Sentence Structure",
    "titleTh": "โครงสร้างประโยค (Simple, Compound, Complex)",
    "icon": "🏗️",
    "badge": "Syntax",
    "description": "เข้าใจองค์ประกอบ Subject, Verb, Object และการเชื่อมประโยคซับซ้อนให้เขียนกระชับ ตรงประเด็น สื่อสารได้ระดับมืออาชีพ",
    "units": [
      {
        "id": "struct-simple-compound",
        "title": "Unit 1: Simple & Compound Sentences",
        "summary": "ประโยคใจความเดียวและการเชื่อมประโยคด้วย FANBOYS (for, and, nor, but, or, yet, so)",
        "formula": "Compound: Independent Clause 1 + [, coordinating conjunction] + Independent Clause 2",
        "explanation": "\n### 1. Simple Sentence (ประโยคใจความเดียว)\nประกอบด้วย 1 ประธาน (Subject) + 1 ภาคแสดง (Predicate/Verb) สื่อความหมายสมบูรณ์ในตัวเอง\n- \"The build passed.\" (การบิลด์ผ่านแล้ว)\n- \"DevOps engineers automate infrastructure.\" (วิศวกร DevOps ทำงานอัตโนมัติบนโครงสร้างพื้นฐาน)\n\n### 2. Compound Sentence (ประโยคความรวม)\nเอาประโยคใจความเดียว 2 ประโยคที่มีน้ำหนักเท่ากันมาเชื่อมกันด้วย **FANBOYS**:\n- **F**or (เพราะว่า)\n- **A**nd (และ)\n- **N**or (และไม่)\n- **B**ut (แต่)\n- **O**r (หรือ)\n- **Y**et (แต่ทว่า)\n- **S**o (ดังนั้น)\n\n> [!NOTE]\n> กฎเครื่องหมาย: เมื่อเชื่อม 2 ประโยคสมบูรณ์ด้วย FANBOYS ให้ใส่เครื่องหมาย **จุลภาค (Comma ,)** ด้านหน้าคำเชื่อมเสมอ!\n        ",
        "examples": [
          {
            "en": "The CPU usage was high, so the autoscaler launched two more instances.",
            "th": "การใช้งาน CPU สูงมาก ดังนั้นระบบ Autoscaler จึงเปิด Instance เพิ่มอีกสองตัว",
            "cat": "Tech"
          },
          {
            "en": "We wanted to deploy today, but the QA tests failed.",
            "th": "พวกเราอยากจะขึ้นระบบวันนี้ แต่การทดสอบของ QA ไม่ผ่าน",
            "cat": "Tech"
          },
          {
            "en": "I like coding in Python, and my colleague prefers Go.",
            "th": "ฉันชอบเขียนโค้ดด้วย Python และเพื่อนร่วมงานของฉันชอบภาษา Go มากกว่า",
            "cat": "Daily"
          }
        ],
        "quickCheck": [
          {
            "question": "ข้อใดจัดเป็น Simple Sentence (ประโยคความเดียว ที่มี 1 Independent Clause)?",
            "options": [
              "The engineer wrote the script, and she deployed it to production.",
              "The engineer wrote the unit test script before deployment.",
              "Because the pipeline failed, the release was delayed.",
              "Although it was late, we fixed the server."
            ],
            "correctIndex": 1,
            "explanation": "'The engineer wrote the unit test script before deployment.' มีประธาน 1 ตัว (The engineer) และกริยา 1 ตัว (wrote) ไม่มีประโยคย่อยอื่น จึงเป็น Simple Sentence"
          },
          {
            "question": "Coordinating Conjunctions กลุ่ม 'FANBOYS' ประกอบด้วยคำใดบ้าง?",
            "options": [
              "For, And, Nor, But, Or, Yet, So",
              "From, Also, Neither, Because, Over, Yes, Since",
              "For, After, Now, Before, On, Yet, So",
              "First, And, Next, But, Or, Then, So"
            ],
            "correctIndex": 0,
            "explanation": "สูตรจำ FANBOYS = For, And, Nor, But, Or, Yet, So ใช้เชื่อมประโยคความรวม (Compound Sentences)"
          },
          {
            "question": "ประโยคใดเชื่อม Compound Sentence ด้วยเครื่องหมายวรรคตอนและ Conjunction ได้ถูกต้อง?",
            "options": [
              "The disk was full, so the database stopped responding.",
              "The disk was full so the database stopped responding.",
              "The disk was full, and so the database stopped responding.",
              "The disk was full but so the database stopped responding."
            ],
            "correctIndex": 0,
            "explanation": "ตามมาตรฐานไวยากรณ์สากล เมื่อเชื่อมสองประโยคอิสระด้วย FANBOYS ต้องมีเครื่องหมายคอมมา (,) อยู่หน้า conjunction: ', so'"
          },
          {
            "question": "ข้อผิดพลาดแบบ 'Comma Splice' หมายถึงข้อใด?",
            "options": [
              "การลืมใส่คอมมาหน้าประโยค",
              "การเอาคอมมาเดี่ยวๆ ไปเชื่อม 2 ประโยคสมบูรณ์โดยไม่มีคำเชื่อม FANBOYS",
              "การใส่คอมมามากเกินไปในประโยคคำสั่ง",
              "การสะกดคำว่า comma ผิด"
            ],
            "correctIndex": 1,
            "explanation": "Comma Splice คือข้อผิดพลาดที่นำคอมมา (,) มาคั่นสองประโยคสมบูรณ์โดยไม่มี conjunction เช่น 'The server crashed, we restarted it.' (ที่ถูกคือต้องมี and หรือใช้ semicolon ';')"
          },
          {
            "question": "ควรเติม Conjunction ใด: 'The build was successful, ___ the automated tests failed.'?",
            "options": [
              "and",
              "but",
              "so",
              "for"
            ],
            "correctIndex": 1,
            "explanation": "สองประโยคมีความหมายขัดแย้งกัน (บิลด์ผ่าน แต่ เทสต์พัง) จึงต้องใช้ 'but'"
          },
          {
            "question": "ควรเติม Conjunction ใด: 'You must provide a valid API key, ___ the request will be rejected.'?",
            "options": [
              "or",
              "and",
              "but",
              "nor"
            ],
            "correctIndex": 0,
            "explanation": "บอกทางเลือกหรือผลลัพธ์ที่จะตามมาหากไม่ทำ (มิฉะนั้น) จึงต้องใช้ 'or'"
          },
          {
            "question": "ประโยคใดคือ Complex Sentence (ประโยคความซ้อนที่มี Independent + Dependent Clause)?",
            "options": [
              "We finished the sprint, and we celebrated.",
              "Because the network latency was high, the API timed out.",
              "The database server runs on Linux.",
              "We can deploy now, or we can wait until Monday."
            ],
            "correctIndex": 1,
            "explanation": "'Because the network latency was high' เป็น Dependent Clause นำหน้าประโยคหลัก จึงเป็น Complex Sentence"
          },
          {
            "question": "เครื่องหมาย Semicolon (;) สามารถใช้แทนข้อใดในประโยคความรวม?",
            "options": [
              "แทน Comma + Coordinating Conjunction (เช่น แทน , and)",
              "แทนจุด Full stop เท่านั้น",
              "แทนเครื่องหมายคำถาม",
              "แทนเครื่องหมายตกใจ"
            ],
            "correctIndex": 0,
            "explanation": "Semicolon (;) สามารถใช้เชื่อม 2 Independent Clauses ที่มีความหมายสัมพันธ์กันอย่างใกล้ชิดได้ โดยไม่ต้องมีคำเชื่อม FANBOYS"
          },
          {
            "question": "ประโยคใดมี Compound Predicate (ประธาน 1 ตัว ทำกริยา 2 อย่าง ไม่ต้องใส่คอมมา)?",
            "options": [
              "Alex reviewed the code and merged the pull request.",
              "Alex reviewed the code, and he merged the pull request.",
              "Alex reviewed the code, because it was clean.",
              "Alex reviewed the code, so it was merged."
            ],
            "correctIndex": 0,
            "explanation": "'Alex reviewed ... and merged ...' ประธานตัวเดียวกันทำกริยา 2 อย่าง เรียกว่า Compound Predicate ไม่ต้องใส่คอมมาหน้า and"
          },
          {
            "question": "ควรเติม Conjunction ใด: 'The team worked overtime, ___ they delivered the project on schedule.'?",
            "options": [
              "yet",
              "nor",
              "for",
              "or"
            ],
            "correctIndex": 0,
            "explanation": "'yet' ในความหมาย FANBOYS แปลว่า 'แต่กระนั้น / ถึงกระนั้น' สื่อความหมายขัดแย้งได้อย่างสละสลวย"
          }
        ]
      }
    ]
  },
  {
    "id": "questions",
    "title": "Questions",
    "titleTh": "ประโยคคำถาม (WH-Questions & Indirect Questions)",
    "icon": "❓",
    "badge": "Masterclass",
    "description": "เจาะลึกศิลปะการซักถาม ค้นหาข้อมูล Root Cause และการถามอย่างสุภาพในที่ประชุมด้วย Indirect Questions",
    "units": [
      {
        "id": "q-wh-fundamentals",
        "title": "Unit 1: WH-Questions Mastery (จากชีวิตประจำวันสู่งาน DevOps)",
        "summary": "โครงสร้างหลักและการใช้ Who, What, Where, When, Why, Which, How ครบทุกมิติ",
        "formula": "WH-Word + Auxiliary Verb (is/am/are/do/does/did/can/will) + Subject + Main Verb?",
        "explanation": "\n### 1. โครงสร้างแม่แบบ (Universal WH Formula)\nจำสูตรง่ายๆ เพียงบรรทัดเดียว:\n$$\\text{WH-Word} + \\text{กริยาช่วย (do/does/did/is/am/are/can/will)} + \\text{ประธาน} + \\text{กริยาหลัก} ?$$\n\n### 2. เจาะลึกคำถามและตัวอย่างประโยคใช้งานจริง 2 หมวดหมู่:\n\n#### 1) WHAT (อะไร) - ถามหาข้อมูลและสาเหตุ (Root Cause)\n- **Daily:** *\"What time does the lunch cafeteria open?\"* (โรงอาหารเปิดกี่โมง?)\n- **DevOps:** *\"What caused the memory leak in the staging environment?\"* (อะไรเป็นสาเหตุที่ทำให้หน่วยความจำรั่วใน Staging?)\n- **DevOps:** *\"What is the rollback strategy for this release?\"* (แผนการโรลแบ็กสำหรับการปล่อยเวอร์ชันนี้คืออะไร?)\n\n#### 2) WHO (ใคร) - ถามหาบุคคลผู้รับผิดชอบ (Ownership & Incident Response)\n- **Daily:** *\"Who is presenting the slide deck today?\"* (ใครเป็นคนนำเสนอสไลด์ในวันนี้?)\n- **DevOps:** *\"Who is the on-call engineer for the payments service tonight?\"* (ใครเป็นวิศวกร On-call ประจำคืนนี้ของระบบการชำระเงิน?)\n- **DevOps:** *\"Who approved this pull request without running tests?\"* (ใครเป็นคนกดอนุมัติ PR นี้โดยไม่ได้รันเทสต์?)\n\n#### 3) WHERE (ที่ไหน) - ถามหาตำแหน่ง ล็อก และเส้นทาง (Logs & Infrastructure)\n- **Daily:** *\"Where are we meeting for the team lunch?\"* (พวกเราจะเจอกันที่ไหนสำหรับมื้อเที่ยงของทีม?)\n- **DevOps:** *\"Where are the application error logs stored?\"* (ล็อกข้อผิดพลาดของแอปพลิเคชันถูกจัดเก็บไว้ที่ไหน?)\n- **DevOps:** *\"Where can I find the Kubernetes deployment manifest?\"* (ฉันสามารถหาไฟล์คอนฟิก Deployment ของ Kubernetes ได้ที่ไหน?)\n\n#### 4) WHEN (เมื่อไร) - ถามหากรอบเวลาและรอบการทำงาน (Schedule & Deployments)\n- **Daily:** *\"When is the project deadline?\"* (กำหนดส่งโปรเจกต์คือเมื่อไร?)\n- **DevOps:** *\"When did the latency spike start occurring?\"* (กราฟ Latency เริ่มพุ่งสูงขึ้นตั้งแต่เมื่อไร?)\n- **DevOps:** *\"When will the scheduled maintenance window conclude?\"* (ช่วงเวลาบำรุงรักษาระบบตามกำหนดการจะสิ้นสุดลงเมื่อไร?)\n\n#### 5) WHY (ทำไม) - ถามหาสาเหตุเชิงลึก (Post-Mortem & Architecture)\n- **Daily:** *\"Why did we reschedule the sprint review?\"* (ทำไมเราถึงเลื่อนการประชุมรีวิวสปรินต์ล่ะ?)\n- **DevOps:** *\"Why did the container terminate with an OOMKilled error?\"* (ทำไมคอนเทนเนอร์ถึงหยุดทำงานด้วย Error แรมหมด (OOMKilled)?)\n- **DevOps:** *\"Why are we not using a managed database service?\"* (ทำไมพวกเราถึงไม่ใช้บริการฐานข้อมูลแบบ Managed ล่ะ?)\n\n#### 6) WHICH (อันไหน/สิ่งไหน) - ถามเพื่อเลือกจากตัวเลือกที่มีจำกัด (Decisions & Selection)\n- **Daily:** *\"Which conference room is booked for our retro?\"* (ห้องประชุมห้องไหนถูกจองไว้สำหรับ Retro ของเรา?)\n- **DevOps:** *\"Which cluster node is experiencing the highest CPU load?\"* (โหนดไหนในคลัสเตอร์กำลังเจอโหลด CPU สูงที่สุด?)\n- **DevOps:** *\"Which cloud region should we deploy our backup to?\"* (เราควรติดตั้งระบบสำรองไว้ที่ Cloud Region ไหนดี?)\n\n#### 7) HOW (อย่างไร) - ถามหาวิธีการ กระบวนการ และการแก้ไขปัญหา (Process & Troubleshooting)\n- **Daily:** *\"How do I connect to the office guest Wi-Fi?\"* (ฉันจะต่อ Wi-Fi ของออฟฟิศได้อย่างไร?)\n- **DevOps:** *\"How do we configure the autoscaling policy in Kubernetes?\"* (พวกเราจะตั้งค่ากฎ Autoscaling ใน Kubernetes อย่างไร?)\n- **DevOps:** *\"How can we reproduce this flaky test locally?\"* (เราจะจำลองการเกิดบั๊กเทสต์ตัวนี้ในเครื่องตัวเองได้อย่างไร?)\n        ",
        "examples": [
          {
            "en": "What is the root cause of this database deadlock?",
            "th": "อะไรคือสาเหตุที่แท้จริง (Root cause) ของปัญหา Deadlock ในฐานข้อมูลนี้?",
            "cat": "Tech"
          },
          {
            "en": "Who approved the merge request into main branch?",
            "th": "ใครเป็นคนอนุมัติ Merge Request นี้เข้าสู่ Main Branch?",
            "cat": "Tech"
          },
          {
            "en": "Where can I find the documentation for this API?",
            "th": "ฉันสามารถหาเอกสารคู่มือของ API ตัวนี้ได้จากที่ไหน?",
            "cat": "Tech"
          },
          {
            "en": "When will the database migration complete?",
            "th": "การย้ายฐานข้อมูลจะเสร็จสิ้นเมื่อไร?",
            "cat": "Tech"
          },
          {
            "en": "Why did the pipeline fail at the build step?",
            "th": "ทำไม Pipeline ถึงล้มเหลวที่ขั้นตอนการ Build?",
            "cat": "Tech"
          },
          {
            "en": "How can we reduce our AWS cloud infrastructure costs?",
            "th": "เราจะลดค่าใช้จ่าย Infrastructure บน AWS Cloud ได้อย่างไร?",
            "cat": "Tech"
          }
        ],
        "quickCheck": [
          {
            "question": "ควรเติมคำถามใด: '___ caused the database connection pool to exhaust?'?",
            "options": [
              "What",
              "Which",
              "Whom",
              "Where"
            ],
            "correctIndex": 0,
            "explanation": "ถามถึงสิ่งของ เหตุการณ์ หรือสาเหตุที่เป็นประธานของกริยา 'caused' จึงใช้ 'What'"
          },
          {
            "question": "ความแตกต่างระหว่าง 'What' และ 'Which' คือข้อใด?",
            "options": [
              "What ใช้กับคน Which ใช้กับสิ่งของ",
              "What ใช้เมื่อมีตัวเลือกเปิดกว้างไม่จำกัด ส่วน Which ใช้เมื่อมีตัวเลือกจำกัดให้เลือก",
              "What ใช้เฉพาะในอดีต Which ใช้เฉพาะในอนาคต",
              "ไม่มีความแตกต่างกัน ใช้แทนกันได้เสมอ"
            ],
            "correctIndex": 1,
            "explanation": "'Which' ใช้เมื่อมีตัวเลือกที่จำกัดหรือระบุไว้ชัดเจน เช่น 'Which cloud provider do you prefer: AWS or GCP?'"
          },
          {
            "question": "โครงสร้างคำถาม WH-Question ที่มีประธานคือข้อใด?",
            "options": [
              "WH-word + Auxiliary verb + Subject + Main verb ...?",
              "WH-word + Subject + Auxiliary verb + Main verb ...?",
              "WH-word + Main verb + Subject ...?",
              "Auxiliary verb + WH-word + Subject ...?"
            ],
            "correctIndex": 0,
            "explanation": "โครงสร้างมาตรฐาน: WH + กริยาช่วย (Auxiliary) + ประธาน (Subject) + กริยาแท้ (Main verb) เช่น 'Where do you work?'"
          },
          {
            "question": "ควรเติมคำใด: '___ approved the pull request before deployment?' (ถามหาผู้กระทำที่เป็นประธาน)?",
            "options": [
              "Who",
              "Whom",
              "Whose",
              "Which"
            ],
            "correctIndex": 0,
            "explanation": "ถามหาคนที่เป็นประธานของประโยค ใช้ 'Who' และตามด้วยกริยาแท้ได้ทันทีไม่ต้องมีกริยาช่วย do/did"
          },
          {
            "question": "ควรเติมกริยาช่วยใด: 'Where ___ the incident occur yesterday evening?'?",
            "options": [
              "does",
              "did",
              "was",
              "has"
            ],
            "correctIndex": 1,
            "explanation": "เหตุการณ์เกิดขึ้นในอดีต (yesterday evening) กริยาแท้คือ 'occur' (infinitive) จึงต้องใช้กริยาช่วย 'did'"
          },
          {
            "question": "ควรเติมคำใด: '___ laptop charger is this on the meeting table?' (ถามหาเจ้าของ)?",
            "options": [
              "Who's",
              "Whose",
              "Whom",
              "Who"
            ],
            "correctIndex": 1,
            "explanation": "'Whose' ใช้ถามแสดงความเป็นเจ้าของว่า 'ของใคร' (ส่วน Who's ย่อมาจาก Who is หรือ Who has)"
          },
          {
            "question": "ประโยคคำถามที่มี Preposition อยู่ท้ายประโยคข้อใดถูกต้อง?",
            "options": [
              "What are you looking at?",
              "At what are you looking?",
              "What you are looking at?",
              "What do you looking at?"
            ],
            "correctIndex": 0,
            "explanation": "'What are you looking at?' เป็นโครงสร้างสนทนาภาษาอังกฤษที่เป็นธรรมชาติและนิยมใช้มากที่สุด"
          },
          {
            "question": "ควรเติมคำใด: '___ did you choose to migrate from monolith to microservices?' (ถามเหตุผล)?",
            "options": [
              "Why",
              "How",
              "When",
              "Where"
            ],
            "correctIndex": 0,
            "explanation": "ถามหาเหตุผล แรงจูงใจ หรือสาเหตุ ต้องใช้ 'Why'"
          },
          {
            "question": "ประโยคคำถามข้อใดถูกต้องตามหลักไวยากรณ์?",
            "options": [
              "When did the sprint started?",
              "When did the sprint start?",
              "When the sprint started?",
              "When was the sprint start?"
            ],
            "correctIndex": 1,
            "explanation": "เมื่อมี 'did' แล้ว กริยาแท้ต้องเป็น Base form (start ไม่เติม -ed): 'When did the sprint start?'"
          },
          {
            "question": "ควรเติมคำใด: '___ of these two architectures is more fault-tolerant?'?",
            "options": [
              "What",
              "Which",
              "How",
              "Where"
            ],
            "correctIndex": 1,
            "explanation": "มีตัวเลือกจำกัดเจาะจงชัดเจน (these two architectures) จึงต้องใช้ 'Which'"
          }
        ]
      },
      {
        "id": "q-specific-how",
        "title": "Unit 2: Specific How-Questions (How many, How much, How long, How often)",
        "summary": "คำถามเจาะจงตัวเลข เวลา ความถี่ และต้นทุน (MTTR, Deployment Time, Cron Schedule)",
        "formula": "How + (many / much / long / often / far) + Auxiliary Verb + Subject + Verb?",
        "explanation": "\n### 1. How Many (จำนวนเท่าไร - คำนามนับได้พหูพจน์)\n- *\"How many microservices are running in production?\"* (มีกี่ Microservices ที่กำลังรันอยู่บน Production?)\n- *\"How many pull requests are waiting for code review?\"* (มี PR กี่ตัวที่กำลังรอการตรวจโค้ด?)\n\n### 2. How Much (ปริมาณเท่าไร / ราคาเท่าไร - คำนามนับไม่ได้)\n- *\"How much bandwidth does the streaming service consume per second?\"* (บริการสตรีมมิ่งใช้แบนด์วิดท์เท่าไรต่อวินาที?)\n- *\"How much memory should we allocate to the Redis cache?\"* (เราควรจัดสรรหน่วยความจำให้ Redis Cache เท่าไร?)\n\n### 3. How Long (นานเท่าไร / ใช้เวลาแค่ไหน - MTTR, Downtime, Duration)\n- *\"How long will the database reindexing take?\"* (การจัดทำดัชนีฐานข้อมูลใหม่จะใช้เวลานานเท่าไร?)\n- *\"How long was the API service unavailable during the incident?\"* (ระบบ API ใช้งานไม่ได้เป็นเวลานานเท่าไรในช่วงที่เกิดเหตุขัดข้อง?)\n\n### 4. How Often (บ่อยแค่ไหน - ความถี่, Sync, Cron, Alerts)\n- *\"How often does the sync script run?\"* (สคริปต์ Sync ข้อมูลทำงานบ่อยแค่ไหน?)\n- *\"How often do we conduct security penetration testing?\"* (พวกเราทดสอบเจาะระบบความปลอดภัยบ่อยแค่ไหน?)\n        ",
        "examples": [
          {
            "en": "How many pod replicas should we scale during peak hours?",
            "th": "เราควรขยาย Pod เป็นกี่ Replicas ในช่วงเวลาที่มีผู้ใช้สูงสุด?",
            "cat": "Tech"
          },
          {
            "en": "How long does our CI/CD pipeline take from commit to deploy?",
            "th": "ไพพ์ไลน์ CI/CD ของเราใช้เวลานานเท่าไรตั้งแต่คอมมิตจนถึงติดตั้งเสร็จ?",
            "cat": "Tech"
          },
          {
            "en": "How often do you push your code changes to GitHub?",
            "th": "คุณพุชโค้ดที่แก้ไขขึ้น GitHub บ่อยแค่ไหน?",
            "cat": "Daily"
          }
        ],
        "quickCheck": [
          {
            "question": "ควรเติมคำใด: '___ do you backup the production database?' - 'Every Sunday night.'?",
            "options": [
              "How long",
              "How often",
              "How many",
              "How much"
            ],
            "correctIndex": 1,
            "explanation": "คำตอบบอกความถี่ (Every Sunday night) จึงต้องถามด้วย 'How often' (บ่อยแค่ไหน)"
          },
          {
            "question": "ควรเติมคำใด: '___ does the database recovery process take?' - 'About 45 minutes.'?",
            "options": [
              "How often",
              "How long",
              "How much",
              "How many"
            ],
            "correctIndex": 1,
            "explanation": "คำตอบบอกระยะเวลา (About 45 minutes) จึงต้องถามด้วย 'How long' (นานเท่าใด)"
          },
          {
            "question": "ควรเติมคำใด: '___ microservices are running in this cluster?'?",
            "options": [
              "How much",
              "How many",
              "How long",
              "How often"
            ],
            "correctIndex": 1,
            "explanation": "'microservices' เป็นนามนับได้พหูพจน์ ถามจำนวนชิ้น/ระบบ จึงต้องใช้ 'How many'"
          },
          {
            "question": "ควรเติมคำใด: '___ memory does this Docker container consume?'?",
            "options": [
              "How much",
              "How many",
              "How far",
              "How often"
            ],
            "correctIndex": 0,
            "explanation": "'memory' ในเชิงปริมาณข้อมูลเป็นคำนามนับไม่ได้ จึงต้องใช้ 'How much'"
          },
          {
            "question": "สำนวน 'How come...?' มีความหมายเทียบเท่ากับคำถามใด?",
            "options": [
              "Why...?",
              "How...?",
              "When...?",
              "Where...?"
            ],
            "correctIndex": 0,
            "explanation": "'How come...?' แปลว่า 'ทำไม / ไหงงั้นล่ะ' ใช้เหมือน 'Why' แต่เรียงประโยคแบบบอกเล่า เช่น 'How come you didn't join the meeting?'"
          },
          {
            "question": "ควรเติมคำใด: '___ is the disaster recovery datacenter from Bangkok?'?",
            "options": [
              "How long",
              "How far",
              "How often",
              "How much"
            ],
            "correctIndex": 1,
            "explanation": "ถามระยะทางความไกลระหว่างสถานที่สองแห่ง ต้องใช้ 'How far' (ไกลแค่ไหน)"
          },
          {
            "question": "ควรเติมคำใด: '___ can this API handle concurrent requests per second?'?",
            "options": [
              "How fast",
              "How much fast",
              "How speed",
              "How many fast"
            ],
            "correctIndex": 0,
            "explanation": "ถามความเร็วในการตอบสนองหรือประมวลผล ใช้ 'How fast' (เร็วแค่ไหน)"
          },
          {
            "question": "ประโยคถามราคาค่าบริการคลาวด์รายเดือนข้อใดถูกต้อง?",
            "options": [
              "How much does this cloud hosting cost per month?",
              "How many does this cloud hosting cost per month?",
              "How price is this cloud hosting per month?",
              "How cost does this cloud hosting have per month?"
            ],
            "correctIndex": 0,
            "explanation": "ถามราคาค่าใช้จ่ายใช้ 'How much does it cost...?' หรือ 'How much is it...?'"
          },
          {
            "question": "ควรเติมคำใด: '___ times has the CI/CD pipeline failed today?'?",
            "options": [
              "How much",
              "How many",
              "How often",
              "How long"
            ],
            "correctIndex": 1,
            "explanation": "'times' ในความหมายว่า 'จำนวนครั้ง' เป็นนามนับได้พหูพจน์ จึงใช้ 'How many times'"
          },
          {
            "question": "สูตรการตั้งคำถามด้วย 'How + Adjective' ข้อใดถูกต้อง?",
            "options": [
              "How reliable is this system?",
              "How is reliable this system?",
              "How this system is reliable?",
              "How reliable does this system?"
            ],
            "correctIndex": 0,
            "explanation": "สูตรมาตรฐาน: How + Adjective (reliable) + Verb to be (is) + Subject (this system)?"
          }
        ]
      },
      {
        "id": "q-indirect-questions",
        "title": "Unit 3: Indirect Questions & Polite Traps (การถามอย่างสุภาพในที่ประชุม)",
        "summary": "กฎเหล็กการแปลง Direct Question เป็น Indirect Question ให้สุภาพและไม่สลับกริยา",
        "formula": "Polite Opener + WH-Word + Subject + Verb (เรียงแบบประโยคบอกเล่า)",
        "explanation": "\n### ⚠️ จุดที่มักผิดบ่อยที่สุด (The Biggest Grammar Trap)\nเวลาเราถามคำถามตรงๆ (Direct Question) กริยาช่วยจะอยู่หน้าประธาน:\n- Direct: *\"Where **is** the config file?\"*\n\nแต่เมื่อทำเป็นประโยคคำถามอ้อมๆ เพื่อความสุภาพ (Indirect Question) ขึ้นต้นด้วยคำเกริ่น:\n- **Could you tell me...?** (ช่วยบอกฉันหน่อยได้ไหมว่า...)\n- **Do you happen to know...?** (คุณพอจะทราบไหมว่า...)\n- **I was wondering...?** (ฉันอยากสอบถามหน่อยว่า...)\n\n> [!CAUTION]\n> **กฎเหล็กที่ต้องจำ:** ส่วนที่ตามหลังคำเกริ่นจะ **เปลี่ยนกลับเป็นประโยคบอกเล่า (Subject + Verb)** ทันที! ห้ามสลับกริยาช่วยมาข้างหน้าประธานอีกเด็ดขาด!\n\n#### ตารางเปรียบเทียบความแตกต่าง:\n| Direct (ตรงๆ ห้วนๆ) | Indirect (สุภาพ ระดับมืออาชีพ) | คำแปลภาษาไทย |\n| :--- | :--- | :--- |\n| Where **is** the documentation? | Could you tell me where the documentation **is**? | คุณช่วยบอกฉันหน่อยได้ไหมครับว่าเอกสารอยู่ที่ไหน? |\n| When **will** the server be ready? | Do you know when the server **will** be ready? | คุณพอจะทราบไหมครับว่าเซิร์ฟเวอร์จะพร้อมเมื่อไร? |\n| What **does** this error code mean? | Could you explain what this error code **means**? | ช่วยอธิบายหน่อยได้ไหมครับว่า Error code นี้หมายถึงอะไร? |\n| Why **did** the deployment fail? | Do you know why the deployment **failed**? | คุณทราบไหมครับว่าทำไมการขึ้นระบบถึงล้มเหลว? |\n        ",
        "examples": [
          {
            "en": "Could you please tell me where the API credentials are stored?",
            "th": "ช่วยบอกฉันหน่อยได้ไหมครับว่าข้อมูลยืนยันตัวตนของ API ถูกเก็บไว้ที่ไหน?",
            "cat": "Tech"
          },
          {
            "en": "Do you happen to know when the staging environment will be back up?",
            "th": "คุณพอจะทราบไหมครับว่าระบบ Staging จะกลับมาใช้งานได้เมื่อไร?",
            "cat": "Tech"
          },
          {
            "en": "I was wondering if you could review my pull request today.",
            "th": "ผมอยากสอบถามว่าวันนี้คุณพอจะมีเวลาตรวจ PR ให้ผมไหมครับ",
            "cat": "Daily"
          }
        ],
        "quickCheck": [
          {
            "question": "ประโยคคำถามทางอ้อม (Indirect Question) ข้อใดถูกต้อง?",
            "options": [
              "Could you tell me where is the server?",
              "Could you tell me where the server is?",
              "Could you tell me where does the server?",
              "Could you tell me where is server located?"
            ],
            "correctIndex": 1,
            "explanation": "กฎเหล็กของ Indirect Question: หลังคำเชื่อม (where) ต้องเรียงแบบ 'ประโยคบอกเล่า' (Subject + Verb) เสมอ -> 'where the server is' (ไม่ใช่ where is the server)"
          },
          {
            "question": "เมื่อแปลงคำถาม Yes/No 'Did the build pass?' เป็น Indirect Question ต้องใช้คำเชื่อมใด?",
            "options": [
              "Do you know if the build passed?",
              "Do you know that did the build pass?",
              "Do you know why did the build pass?",
              "Do you know where the build passed?"
            ],
            "correctIndex": 0,
            "explanation": "คำถาม Yes/No เมื่อเป็นคำถามทางอ้อมต้องเชื่อมด้วย 'if' หรือ 'whether' และผันกริยาตามกาลเวลาปกติ -> 'if the build passed'"
          },
          {
            "question": "ประโยค Indirect Question ข้อใดตัดกริยาช่วย do/does ออกได้ถูกต้อง?",
            "options": [
              "Can you tell me what time the daily standup starts?",
              "Can you tell me what time does the daily standup start?",
              "Can you tell me what time is the daily standup start?",
              "Can you tell me what time the daily standup does start?"
            ],
            "correctIndex": 0,
            "explanation": "ในประโยคคำถามทางอ้อม ไม่ใช้กริยาช่วย do/does/did ให้ผันกริยาแท้ตามประธานปกติ -> 'what time the daily standup starts'"
          },
          {
            "question": "คำขึ้นต้นที่สุภาพเป็นทางการที่สุดในการสอบถามเพื่อนร่วมงานต่างชาติคือข้อใด?",
            "options": [
              "I want to know where...",
              "Would you mind letting me know if...",
              "Tell me now whether...",
              "Give me the info when..."
            ],
            "correctIndex": 1,
            "explanation": "'Would you mind letting me know if...' เป็นสำนวนที่สุภาพมากและนิยมใช้ในอีเมลหรือแชทระดับมืออาชีพ"
          },
          {
            "question": "ประโยค 'I wonder ___ we should deploy the hotfix now or wait until tomorrow.' ควรเติมคำใด?",
            "options": [
              "weather",
              "whether",
              "if that",
              "which"
            ],
            "correctIndex": 1,
            "explanation": "เมื่อมีตัวเลือก '... or ...' นิยมใช้ 'whether' มากกว่า if: 'whether we should ... or wait...'"
          },
          {
            "question": "การใส่เครื่องหมายวรรคตอนท้ายประโยค 'I would like to know what caused the crash' ข้อใดถูกต้อง?",
            "options": [
              "I would like to know what caused the crash?",
              "I would like to know what caused the crash.",
              "I would like to know what did cause the crash?",
              "I would like to know what caused the crash?!"
            ],
            "correctIndex": 1,
            "explanation": "ถ้าประโยคหลักขึ้นต้นด้วยประโยคบอกเล่า (I would like to know...) ให้ปิดท้ายด้วยเครื่องหมายจุด (Period '.') ไม่ใช่เครื่องหมายคำถาม"
          },
          {
            "question": "ประโยคใดถูกต้องตามหลักไวยากรณ์?",
            "options": [
              "Do you have any idea how much this cloud service costs?",
              "Do you have any idea how much does this cloud service cost?",
              "Do you have any idea how much is this cloud service costs?",
              "Do you have any idea how much this cloud service cost?"
            ],
            "correctIndex": 0,
            "explanation": "ประธานเอกพจน์ (this cloud service) กริยาในโครงสร้างบอกเล่าต้องเติม -s -> 'how much this cloud service costs'"
          },
          {
            "question": "ประโยคใดเปลี่ยนจาก 'Who wrote this script?' เป็นคำถามทางอ้อมได้ถูกต้อง?",
            "options": [
              "Could you tell me who wrote this script?",
              "Could you tell me who did write this script?",
              "Could you tell me who was wrote this script?",
              "Could you tell me who this script wrote?"
            ],
            "correctIndex": 0,
            "explanation": "เมื่อ WH-word (who) ทำหน้าที่เป็นประธานอยู่แล้ว ให้คงรูปเดิมไว้ได้เลย: 'Could you tell me who wrote this script?'"
          },
          {
            "question": "ควรเติมคำใด: 'Please let me know ___ you have any questions.'?",
            "options": [
              "if",
              "what",
              "where",
              "how"
            ],
            "correctIndex": 0,
            "explanation": "'Please let me know if you have any questions.' (กรุณาแจ้งให้ทราบหากมีคำถามใดๆ) เป็นประโยคยอดนิยมในการทำงาน"
          },
          {
            "question": "ข้อใดคือข้อผิดพลาดที่พบบ่อยที่สุดในการตั้งคำถามทางอ้อม?",
            "options": [
              "การลืมใส่คำว่า please",
              "การสลับกริยาช่วยมาไว้หน้าประธานเหมือนคำถามตรง (Inversion Trap)",
              "การใช้นามนับไม่ได้",
              "การไม่ใส่คอมมา"
            ],
            "correctIndex": 1,
            "explanation": "ข้อผิดพลาดอันดับ 1 คือ Inversion Trap เช่น เผลอพูด 'Do you know where is it?' แทนที่จะพูด 'Do you know where it is?'"
          }
        ]
      }
    ]
  },
  {
    "id": "negative-sentences",
    "title": "Negative Sentences",
    "titleTh": "ประโยคปฏิเสธ (Negative Structures & Adverbs)",
    "icon": "🚫",
    "badge": "Syntax",
    "description": "การสร้างประโยคปฏิเสธด้วย not, never และ Negative Adverbs (Hardly, Barely, Seldom) สำหรับรายงานข้อจำกัด",
    "units": [
      {
        "id": "neg-auxiliary",
        "title": "Unit 1: Standard Negative Sentences",
        "summary": "การใช้ not ร่วมกับกริยาช่วย (do not, cannot, will not, is not)",
        "formula": "Subject + Auxiliary Verb + not + Main Verb",
        "explanation": "\n### กฎการสร้างประโยคปฏิเสธ\n1. **ถ้ามี Verb to be หรือ Modal Verbs อยู่แล้ว:** เติม **not** ด้านหลังได้ทันที\n   - is not (isn't), are not (aren't), cannot (can't), will not (won't)\n   - *\"The service **is not** available.\"* (ระบบยังไม่พร้อมใช้งาน)\n2. **ถ้าเป็นกริยาทั่วไป:** ต้องนำ **do / does / did** มาช่วย แล้วตามด้วยกริยาแท้รูปเดิม (Infinitive)\n   - *\"The script **does not require** root permissions.\"* (สคริปต์นี้ไม่ต้องการสิทธิ์ Root)\n   - *\"The tests **did not fail** yesterday.\"* (เทสต์ไม่ได้พังเมื่อวานนี้)\n        ",
        "examples": [
          {
            "en": "This microservice does not accept unauthenticated traffic.",
            "th": "ไมโครเซอร์วิสนี้ไม่รับทราฟฟิกที่ไม่ผ่านการยืนยันตัวตน",
            "cat": "Tech"
          },
          {
            "en": "We cannot deploy during business hours.",
            "th": "พวกเราไม่สามารถขึ้นระบบระหว่างชั่วโมงทำการได้",
            "cat": "Tech"
          },
          {
            "en": "I don't have access to the production logs.",
            "th": "ฉันไม่มีสิทธิ์เข้าถึงล็อกของระบบ Production",
            "cat": "Daily"
          }
        ],
        "quickCheck": [
          {
            "question": "ควรเติมคำใด: 'The backend service ___ responding to incoming webhook requests.'?",
            "options": [
              "is not",
              "does not",
              "has not",
              "are not"
            ],
            "correctIndex": 0,
            "explanation": "กริยาแท้ลงท้ายด้วย -ing ('responding') และประธานเป็นเอกพจน์ (The backend service) จึงต้องใช้ 'is not'"
          },
          {
            "question": "ประโยคปฏิเสธกับกริยาแท้ 'have' ข้อใดถูกต้อง?",
            "options": [
              "He has not write access to the repository.",
              "He does not have write access to the repository.",
              "He does not has write access to the repository.",
              "He hasn't write access to the repository."
            ],
            "correctIndex": 1,
            "explanation": "เมื่อใช้กริยาช่วย 'does not' กริยาแท้ต้องกลับเป็น base form (have) เสมอ -> 'does not have'"
          },
          {
            "question": "ข้อใดเป็นข้อผิดพลาดแบบ 'Double Negative' (ปฏิเสธซ้อนปฏิเสธ)?",
            "options": [
              "We don't have no backups.",
              "We don't have any backups.",
              "We have no backups.",
              "There are no backups available."
            ],
            "correctIndex": 0,
            "explanation": "'don't' เป็นปฏิเสธแล้ว ซ้อนกับ 'no' กลายเป็น Double Negative ซึ่งผิดหลักไวยากรณ์สากล ที่ถูกคือ 'We don't have any backups.'"
          },
          {
            "question": "คำว่า 'hardly' สื่อความหมายเชิงปฏิเสธในตัวเอง ควรใช้ในประโยคใดถูกต้อง?",
            "options": [
              "The cluster can hardly handle more traffic.",
              "The cluster cannot hardly handle more traffic.",
              "The cluster can't hardly handle more traffic.",
              "The cluster hardly cannot handle more traffic."
            ],
            "correctIndex": 0,
            "explanation": "'hardly' แปลว่า 'แทบจะไม่' มีความหมายเชิงปฏิเสธอยู่แล้ว จึงห้ามใส่ not หรือ cannot ซ้อนเข้าไปอีก"
          },
          {
            "question": "ประโยคปฏิเสธของ Modal Verb 'cannot' ข้อใดสะกดถูกต้องตามมาตรฐาน?",
            "options": [
              "cannot",
              "can not",
              "can't",
              "ทั้ง cannot และ can't ถูกต้อง"
            ],
            "correctIndex": 3,
            "explanation": "'cannot' เขียนติดกันเป็นคำเดียว หรือใช้รูปย่อ 'can't' ถือเป็นมาตรฐานที่ถูกต้องทั้งคู่"
          },
          {
            "question": "เมื่อใช้ 'never' ในประโยคบอกเล่า ข้อใดถูกต้อง?",
            "options": [
              "We never deploy on Friday evenings.",
              "We don't never deploy on Friday evenings.",
              "We never don't deploy on Friday evenings.",
              "We never not deploy on Friday evenings."
            ],
            "correctIndex": 0,
            "explanation": "'never' เป็นปฏิเสธในตัว ไม่ต้องมี don't/doesn't อีก -> 'We never deploy...'"
          },
          {
            "question": "ควรเติมคำใด: 'There is ___ latency in our local test environment.' (ไม่มีความหน่วงเลย)?",
            "options": [
              "no",
              "not",
              "none",
              "any"
            ],
            "correctIndex": 0,
            "explanation": "'There is no + noun' (There is no latency) แปลว่า 'ไม่มี... เลย'"
          },
          {
            "question": "รูปย่อ (Contraction) ในข้อใดสะกดถูกต้อง?",
            "options": [
              "wont't",
              "won't",
              "willn't",
              "wo'nt"
            ],
            "correctIndex": 1,
            "explanation": "รูปปฏิเสธของ 'will not' ย่อเป็น 'won't'"
          },
          {
            "question": "ประโยคคำสั่งห้าม (Negative Imperative) ข้อใดถูกต้อง?",
            "options": [
              "Don't push secrets into public repositories.",
              "Not push secrets into public repositories.",
              "No push secrets into public repositories.",
              "Doesn't push secrets into public repositories."
            ],
            "correctIndex": 0,
            "explanation": "คำสั่งห้ามขึ้นต้นด้วย 'Don't + V.inf' เสมอ: 'Don't push...'"
          },
          {
            "question": "ประโยคคำถามปฏิเสธ (Negative Question) เพื่อยืนยันความเข้าใจข้อใดถูกต้อง?",
            "options": [
              "Isn't the staging server ready yet?",
              "Is not the staging server ready yet?",
              "Doesn't the staging server ready yet?",
              "Aren't the staging server ready yet?"
            ],
            "correctIndex": 0,
            "explanation": "'Isn't the staging server ready yet?' (เซิร์ฟเวอร์สเตจจิ้งยังไม่พร้อมอีกเหรอ?) เป็นโครงสร้างคำถามปฏิเสธที่ถูกต้อง"
          }
        ]
      }
    ]
  },
  {
    "id": "imperative-sentences",
    "title": "Imperative Sentences",
    "titleTh": "ประโยคคำสั่ง คำแนะนำ และข้อห้าม (Do's & Don'ts)",
    "icon": "⚡",
    "badge": "Action",
    "description": "ภาษาสำหรับการเขียน Documentation, Setup Guide, และคำสั่ง Runbook (เช่น Restart the container, Do not touch...)",
    "units": [
      {
        "id": "imp-commands",
        "title": "Unit 1: Command & Instruction Formulas",
        "summary": "การขึ้นต้นด้วย V.inf โดยไม่ต้องมีประธาน และการสั่งห้ามด้วย Don't",
        "formula": "Positive: [V.inf] + Object  |  Negative: Don't + [V.inf] + Object",
        "explanation": "\n### กฎของ Imperative Sentences\n- ละประธาน 'You' ไว้ในฐานที่เข้าใจ\n- กริยาตัวแรกต้องเป็น **V.inf (รูปดั้งเดิม ไม่ผัน ไม่เติม s/es/ed)** เสมอ\n- หากต้องการห้าม ให้ขึ้นต้นด้วย **Do not (Don't)**\n- ถ้าต้องการเพิ่มความสุภาพ ให้เติม **Please** ไว้หน้าหรือหลังประโยค\n        ",
        "examples": [
          {
            "en": "Run the database migration script before launching the app.",
            "th": "รันสคริปต์ย้ายฐานข้อมูลก่อนที่จะเปิดแอปพลิเคชัน",
            "cat": "Tech"
          },
          {
            "en": "Do not delete the production volume snapshots.",
            "th": "อย่าลบภาพสแนปช็อตของดิสก์ Production เป็นอันขาด",
            "cat": "Tech"
          },
          {
            "en": "Please check your connection and try again.",
            "th": "กรุณาตรวจสอบการเชื่อมต่อของคุณแล้วลองใหม่อีกครั้ง",
            "cat": "Daily"
          }
        ],
        "quickCheck": [
          {
            "question": "โครงสร้างประโยคคำสั่ง (Imperative Sentence) ขึ้นต้นด้วยคำชนิดใด?",
            "options": [
              "Base Verb (กริยารูปเดิม ไม่ผัน ไม่เติม s/es/ed/ing)",
              "Subject (ประธานเสมอ)",
              "Adverb of frequency",
              "Preposition"
            ],
            "correctIndex": 0,
            "explanation": "ประโยคคำสั่งจะละประธาน (เข้าใจกันว่าเป็น You) และขึ้นต้นด้วย Base Verb (Infinitive) ทันที เช่น 'Run the script.'"
          },
          {
            "question": "ประโยคคำสั่งในเอกสารคู่มือ (Documentation) ข้อใดถูกต้อง?",
            "options": [
              "Clone the repository and install the dependencies.",
              "You cloning the repository and install.",
              "To clone the repository and installs.",
              "Cloned the repository and install."
            ],
            "correctIndex": 0,
            "explanation": "ใน README หรือ Documentation นิยมใช้ประโยคคำสั่ง Base Form: 'Clone the repository and install...'"
          },
          {
            "question": "การทำประโยคคำสั่งให้สุภาพและเป็นมิตรยิ่งขึ้น ควรใส่คำใด?",
            "options": [
              "Please",
              "Kindly",
              "Please หรือ Kindly ก็ได้",
              "Must"
            ],
            "correctIndex": 2,
            "explanation": "ใส่ 'Please' หน้าหรือหลังประโยค หรือใช้ 'Kindly' เพื่อเพิ่มระดับความสุภาพและเป็นมืออาชีพ"
          },
          {
            "question": "ประโยคชักชวนให้ทำร่วมกัน (Suggestion) ข้อใดถูกต้อง?",
            "options": [
              "Let's review the pull request together.",
              "Let's to review the pull request together.",
              "Let's reviewing the pull request together.",
              "Let we review the pull request together."
            ],
            "correctIndex": 0,
            "explanation": "'Let's + Base Verb' (Let's review) ใช้ชักชวนว่า 'พวกเรามา...กันเถอะ'"
          },
          {
            "question": "ประโยคคำสั่งห้ามเด็ดขาด (Strict Prohibition) ข้อใดถูกต้อง?",
            "options": [
              "Never commit API keys into version control.",
              "Always don't commit API keys.",
              "Not never commit API keys.",
              "No commit API keys."
            ],
            "correctIndex": 0,
            "explanation": "ขึ้นต้นด้วย 'Never + Base Verb' (Never commit...) เพื่อเน้นย้ำข้อห้ามเด็ดขาด"
          },
          {
            "question": "ประโยค 'Make sure to backup the database, and you will prevent data loss.' เป็นการใช้ Imperative ในลักษณะใด?",
            "options": [
              "การสั่งและบอกเงื่อนไขผลลัพธ์ (Condition & Result)",
              "การถามคำถาม",
              "การแสดงความยินดี",
              "การขอโทษ"
            ],
            "correctIndex": 0,
            "explanation": "Imperative + and/or สื่อถึงเงื่อนไข 'ถ้าทำสิ่งนี้... แล้วจะเกิดผลลัพธ์ที่ดีตามมา'"
          },
          {
            "question": "ควรเติมคำใด: '___ that all tests pass before requesting a review.'?",
            "options": [
              "Ensure",
              "Ensuring",
              "Ensured",
              "Ensures"
            ],
            "correctIndex": 0,
            "explanation": "ประโยคคำสั่งเริ่มต้นประโยคด้วย Base Verb -> 'Ensure that...'"
          },
          {
            "question": "ประโยคคำสั่งในกรณีเตือนภัยฉุกเฉิน (Warning) ข้อใดถูกต้อง?",
            "options": [
              "Watch out for the database deadlock!",
              "Watching out for deadlock!",
              "To watch out deadlock!",
              "Watches out deadlock!"
            ],
            "correctIndex": 0,
            "explanation": "'Watch out!' หรือ 'Be careful!' ใช้เตือนให้ระมัดระวัง"
          },
          {
            "question": "ประโยคปฏิเสธของ 'Let's' คือข้อใด?",
            "options": [
              "Let's not deploy today.",
              "Don't let's deploy today.",
              "Let's don't deploy today.",
              "Not let's deploy today."
            ],
            "correctIndex": 0,
            "explanation": "ปฏิเสธของ Let's คือ 'Let's not + Base Verb' เช่น 'Let's not deploy today.'"
          },
          {
            "question": "คำว่า 'Please' เมื่อวางไว้ท้ายประโยคคำสั่ง ต้องใส่เครื่องหมายวรรคตอนใดคั่นหน้า?",
            "options": [
              "เครื่องหมายคอมมา (,)",
              "เครื่องหมายเซมิโคลอน (;)",
              "ไม่ต้องใส่เครื่องหมายใดๆ",
              "เครื่องหมายขีด (-)"
            ],
            "correctIndex": 0,
            "explanation": "เมื่อ Please อยู่ท้ายประโยค ต้องมีคอมมาคั่น เช่น 'Submit the pull request, please.'"
          }
        ]
      }
    ]
  },
  {
    "id": "subject-verb-agreement",
    "title": "Subject-Verb Agreement",
    "titleTh": "ความสอดคล้องของประธานและกริยา (Singular vs Plural)",
    "icon": "⚖️",
    "badge": "Accuracy",
    "description": "แก้กับดักแกรมม่าที่เจอบ่อยที่สุดในการเขียนอีเมลและรายงาน: ประธานเอกพจน์ กริยาต้องเติม s/es",
    "units": [
      {
        "id": "sva-rules",
        "title": "Unit 1: Core S-V Agreement Rules",
        "summary": "ประธานเอกพจน์คู่กริยาเอกพจน์ และประธานพหูพจน์คู่กริยาพหูพจน์",
        "formula": "Singular Subject + Verb(s/es/is/was/has)  vs  Plural Subject + Verb(base/are/were/have)",
        "explanation": "\n### กฎข้อที่ 1: ประธานเอกพจน์ (1 สิ่ง) ➔ กริยาต้องเติม s/es\n- \"The server **restarts** every night.\" (เซิร์ฟเวอร์ 1 เครื่อง ➔ restarts)\n- \"Each developer **has** a dedicated test database.\" (Each = แต่ละคน = เอกพจน์ ➔ has)\n\n### กฎข้อที่ 2: ประธานพหูพจน์ (มากกว่า 1 สิ่ง) ➔ กริยารูปปกติ ไม่เติม s\n- \"The servers **restart** every night.\" (เซิร์ฟเวอร์หลายเครื่อง ➔ restart)\n- \"Both systems **are** running stably.\" (are)\n\n### ⚠️ กับดักคำขยายคั่นกลาง (Prepositional Phrase Trap)\nอย่าหลงกลคำที่มาขยายระหว่างประธานกับกริยา:\n- \"The list **of available services** [is / are] updated.\" ➔ ประธานที่แท้จริงคือ **The list (เอกพจน์)** ดังนั้นต้องใช้ **is**!\n        ",
        "examples": [
          {
            "en": "The number of active users has increased significantly.",
            "th": "จำนวนผู้ใช้งานที่กำลังออนไลน์เพิ่มขึ้นอย่างมีนัยสำคัญ (The number of... เป็นเอกพจน์ ใช้ has)",
            "cat": "Tech"
          },
          {
            "en": "Neither the frontend nor the backend servers were affected.",
            "th": "ทั้งเซิร์ฟเวอร์ฟรอนต์เอนด์และแบ็กเอนด์ไม่ได้รับผลกระทบ",
            "cat": "Tech"
          },
          {
            "en": "Everyone in our department works hard.",
            "th": "ทุกคนในแผนกของเราทำงานอย่างหนัก (Everyone เป็นเอกพจน์ กริยาเติม s)",
            "cat": "Daily"
          }
        ],
        "quickCheck": [
          {
            "question": "ควรเติมกริยาใด: 'The list of approved IP addresses ___ updated daily.'?",
            "options": [
              "is",
              "are",
              "were",
              "have been"
            ],
            "correctIndex": 0,
            "explanation": "ประธานที่แท้จริงคือ 'The list' (เอกพจน์) ส่วน 'of approved IP addresses' เป็นเพียงส่วนขยาย กริยาจึงต้องเป็น 'is'"
          },
          {
            "question": "ควรเติมกริยาใด: 'Everyone in the engineering department ___ access to the staging server.'?",
            "options": [
              "has",
              "have",
              "are having",
              "having"
            ],
            "correctIndex": 0,
            "explanation": "'Everyone', 'Everybody', 'Someone' ถือเป็นประธานเอกพจน์เสมอ จึงต้องใช้ 'has'"
          },
          {
            "question": "กฎ Either...or / Neither...nor กริยาจะผันตามประธานตัวใด?",
            "options": [
              "ผันตามประธานตัวที่อยู่ใกล้กริยาที่สุด",
              "ผันตามประธานตัวแรกเสมอ",
              "เป็นพหูพจน์เสมอ",
              "เป็นเอกพจน์เสมอ"
            ],
            "correctIndex": 0,
            "explanation": "สูตร Proximity Rule: กริยาจะผันตามประธานตัวที่อยู่ใกล้กริยาที่สุด เช่น 'Neither the manager nor the engineers are available.'"
          },
          {
            "question": "ควรเติมกริยาใด: 'Neither the team lead nor the developers ___ able to reproduce the error.'?",
            "options": [
              "was",
              "were",
              "is",
              "has been"
            ],
            "correctIndex": 1,
            "explanation": "ประธานตัวที่อยู่ใกล้กริยาที่สุดคือ 'the developers' (พหูพจน์) กริยาในรูปอดีตจึงต้องใช้ 'were'"
          },
          {
            "question": "ควรเติมกริยาใด: 'A number of microservices ___ deployed to the Kubernetes cluster.'?",
            "options": [
              "were",
              "was",
              "is",
              "has been"
            ],
            "correctIndex": 0,
            "explanation": "'A number of + นามพหูพจน์' มีความหมายว่า หลายๆ ระบบ (Many) จึงใช้กริยาพหูพจน์ -> 'were'"
          },
          {
            "question": "ควรเติมกริยาใด: 'The number of active users ___ growing rapidly.'?",
            "options": [
              "is",
              "are",
              "were",
              "have been"
            ],
            "correctIndex": 0,
            "explanation": "'The number of...' เน้นที่ตัวเลขยอดรวม (ยอดเดียว) จึงถือเป็นเอกพจน์เสมอ ใช้ 'is'"
          },
          {
            "question": "ควรเติมกริยาใด: 'Sensitive user data ___ encrypted before storing.'?",
            "options": [
              "is",
              "are",
              "were",
              "have"
            ],
            "correctIndex": 0,
            "explanation": "ในภาษาอังกฤษปัจจุบัน 'data' ในการใช้งานทั่วไปถือเป็น Uncountable Noun และนิยมใช้กับกริยาเอกพจน์ 'is'"
          },
          {
            "question": "ควรเติมกริยาใด: 'There ___ several critical bugs reported in the latest release.'?",
            "options": [
              "is",
              "was",
              "are",
              "has been"
            ],
            "correctIndex": 2,
            "explanation": "ประโยคขึ้นต้นด้วย There is/are กริยาจะผันตามคำนามข้างหลัง คือ 'several critical bugs' (พหูพจน์) จึงใช้ 'are'"
          },
          {
            "question": "ควรเติมกริยาใด: 'Half of the database storage ___ already consumed.'?",
            "options": [
              "is",
              "are",
              "were",
              "have"
            ],
            "correctIndex": 0,
            "explanation": "สัดส่วนหรือเปอร์เซ็นต์ (Half of...) กริยาผันตามนามข้างหลัง 'storage' (นามนับไม่ได้) จึงใช้ 'is'"
          },
          {
            "question": "ควรเติมกริยาใด: 'The development team ___ working on the new architecture.'?",
            "options": [
              "is",
              "are",
              "ทั้ง is และ are ถูกต้องตามบริบท",
              "were not"
            ],
            "correctIndex": 2,
            "explanation": "Collective noun (ทีม, คณะ) ใน American English นิยมใช้เอกพจน์ (is) มองเป็นหนึ่งหน่วย ส่วน British English ใช้พหูพจน์ (are) ได้เมื่อมองเป็นรายบุคคล"
          }
        ]
      }
    ]
  },
  {
    "id": "subjunctive-sentences",
    "title": "Subjunctive Sentences",
    "titleTh": "ประโยคแสดงความปรารถนาและข้อเสนอแนะทางการ",
    "icon": "📜",
    "badge": "Formal",
    "description": "โครงสร้างภาษาอังกฤษระดับสูงสำหรับใช้ในที่ประชุม: It is crucial that [Subject] + [V.inf]",
    "units": [
      {
        "id": "subj-formal",
        "title": "Unit 1: The Mandative Subjunctive",
        "summary": "หลังคำว่า crucial, essential, recommend, insist ประธานจะตามด้วย V.inf เสมอ",
        "formula": "It is essential that + Subject + [V.inf (ไม่เติม s ไม่ผัน)]",
        "explanation": "\n### กฎของ Mandative Subjunctive ในที่ทำงาน\nเมื่อต้องการเสนอแนะหรือออกข้อกำหนดที่มีความสำคัญมาก มักใช้คำเหล่านี้:\n- **It is essential that...** (จำเป็นอย่างยิ่งที่...)\n- **It is crucial / vital that...** (สำคัญอย่างยิ่งยวดที่...)\n- **We recommend that...** (พวกเราขอแนะนำว่า...)\n- **The client requested that...** (ลูกค้าขอร้องให้...)\n\n> [!IMPORTANT]\n> **จุดสำคัญ:** กริยาที่ตามหลังประธานในอนุประโยค 'that' **จะต้องเป็นรูปกริยาดั้งเดิม (Bare Infinitive)** เสมอ ไม่ว่าประธานจะเป็น He, She, หรือ It ก็ห้ามเติม s/es!\n        ",
        "examples": [
          {
            "en": "It is crucial that every developer review the security policy.",
            "th": "จำเป็นอย่างยิ่งที่นักพัฒนาทุกคนต้องตรวจทานนโยบายความปลอดภัย (developer คนเดียว แต่ใช้ review ไม่เติม s)",
            "cat": "Tech"
          },
          {
            "en": "The team lead recommended that he take a short break.",
            "th": "หัวหน้าทีมแนะนำให้เขาหยุดพักสักครู่ (he แต่ใช้ take)",
            "cat": "Daily"
          }
        ],
        "quickCheck": [
          {
            "question": "ประโยค Mandative Subjunctive ข้อใดใช้กริยาถูกต้อง?",
            "options": [
              "We recommend that he attend the sprint planning meeting.",
              "We recommend that he attends the sprint planning meeting.",
              "We recommend that he will attend the sprint planning meeting.",
              "We recommend that he attended the sprint planning meeting."
            ],
            "correctIndex": 0,
            "explanation": "กฎเหล็ก Subjunctive: หลังกริยาเสนอแนะ/สั่งการ (recommend that) ประธานทุกตัว (รวมถึง he/she) ต้องตามด้วย Base Form (attend ไม่เติม -s) เสมอ"
          },
          {
            "question": "ควรเติมกริยารูปใด: 'The security auditor insisted that all passwords ___ encrypted.'?",
            "options": [
              "be",
              "are",
              "were",
              "will be"
            ],
            "correctIndex": 0,
            "explanation": "ในโครงสร้าง Passive Subjunctive กริยา to be ต้องอยู่ในรูป Base Form คือ 'be' เสมอ: 'insisted that all passwords be encrypted'"
          },
          {
            "question": "กริยาในข้อใดกระตุ้นให้เกิดโครงสร้าง Mandative Subjunctive (Verb of Urgency)?",
            "options": [
              "demand / insist / recommend / suggest / require",
              "like / love / hate / prefer",
              "sleep / walk / run / eat",
              "see / hear / smell / feel"
            ],
            "correctIndex": 0,
            "explanation": "กริยากลุ่มคำสั่งและคำขอร้องเร่งด่วน: demand, insist, recommend, suggest, require, propose มักตามด้วย that + Subject + Base Verb"
          },
          {
            "question": "ควรเติมกริยารูปใด: 'It is essential that each developer ___ the documentation.'?",
            "options": [
              "read",
              "reads",
              "will read",
              "has read"
            ],
            "correctIndex": 0,
            "explanation": "หลัง Adjective บอกความสำคัญยิ่งยวด 'It is essential that...' ประธานตามด้วย Base Verb -> 'read' (ไม่เติม -s)"
          },
          {
            "question": "โครงสร้างปฏิเสธของ Subjunctive ข้อใดถูกต้อง?",
            "options": [
              "The lead architect requested that we not deploy the hotfix yet.",
              "The lead architect requested that we don't deploy the hotfix yet.",
              "The lead architect requested that we do not deploy the hotfix yet.",
              "The lead architect requested that we not to deploy the hotfix yet."
            ],
            "correctIndex": 0,
            "explanation": "ปฏิเสธของ Subjunctive ให้ใส่ 'not + Base Verb' โดยตรง ไม่ใช้ do/does: 'that we not deploy...'"
          },
          {
            "question": "ควรเติมกริยารูปใด: 'It is crucial that the root certificate ___ valid before renewal.'?",
            "options": [
              "be",
              "is",
              "was",
              "will be"
            ],
            "correctIndex": 0,
            "explanation": "'It is crucial that...' ต้องตามด้วยรูป Subjunctive ของ Verb to be คือ 'be'"
          },
          {
            "question": "ประโยคใดใช้ Subjunctive ได้อย่างถูกต้องตามมาตรฐานภาษาอังกฤษทางวิชาการ/กฎหมาย?",
            "options": [
              "The compliance officer demands that the company delete the audit logs.",
              "The compliance officer demands that the company deletes the audit logs.",
              "The compliance officer demands that the company will delete the audit logs.",
              "The compliance officer demands that the company must delete the audit logs."
            ],
            "correctIndex": 0,
            "explanation": "demands that the company (ถือเป็นประธานเอกพจน์) แต่ใน Subjunctive ต้องใช้ Base Verb -> 'delete' ไม่เติม -s"
          },
          {
            "question": "ข้อใดเป็นข้อผิดพลาดที่พบบ่อยที่สุดในข้อสอบ Subjunctive?",
            "options": [
              "เผลอเติม -s หรือใส่ would/should หน้ากริยาใน Subjunctive clause",
              "การลืมใส่จุด full stop",
              "การใช้คำว่า that",
              "การใช้คำว่า recommend"
            ],
            "correctIndex": 0,
            "explanation": "ข้อผิดพลาดอันดับ 1 คือเผลอผันกริยาเติม -s ตามประธาน he/she/it หรือเผลอเติม would/should"
          },
          {
            "question": "ควรเติมกริยารูปใด: 'The CTO suggested that our infrastructure ___ migrated to AWS.'?",
            "options": [
              "be",
              "is",
              "was",
              "are"
            ],
            "correctIndex": 0,
            "explanation": "'suggested that ... be + V.3' เป็นรูป Passive Subjunctive ที่ถูกต้อง"
          },
          {
            "question": "สำนวน Subjunctive โบราณที่ยังนิยมใช้ในปัจจุบันเช่น 'God save the Queen' หรือ 'Long live the King' มีลักษณะโครงสร้างอย่างไร?",
            "options": [
              "ใช้ Base Verb โดยไม่ผันตามประธานเพื่อแสดงความปรารถนา",
              "ใช้กริยาอดีต",
              "ใช้กริยาช่วย do",
              "ใช้ Verb to be เท่านั้น"
            ],
            "correctIndex": 0,
            "explanation": "เป็น Formulaic Subjunctive ใช้ Base Verb (save, live) ไม่เติม -s แม้ประธานจะเป็นเอกพจน์ เพื่ออวยพรหรือแสดงความปรารถนา"
          }
        ]
      }
    ]
  },
  {
    "id": "reported-speech",
    "title": "Reported Speech",
    "titleTh": "การถ่ายทอดคำพูดและการรายงานการประชุม (Indirect Speech)",
    "icon": "🗣️",
    "badge": "Meeting Pro",
    "description": "การนำคำพูดของหัวหน้า ลูกค้า หรือเพื่อนร่วมงานมาเล่าต่ออย่างถูกต้อง (เช่น The client said that they needed...)",
    "units": [
      {
        "id": "rep-backshift",
        "title": "Unit 1: Backshift Tenses in Reported Speech",
        "summary": "การถอย Tense 1 จังหวะเมื่อรายงานสิ่งที่คนอื่นพูดในอดีต",
        "formula": "Direct: Present Simple ➔ Reported: Past Simple  |  will ➔ would  |  can ➔ could",
        "explanation": "\n### กฎการถอย Tense (Backshift Rule)\nเมื่อเรานำคำพูดของคนอื่นในอดีตมาเล่าต่อ (He said that..., She told me that...):\n- **is / am / are** ➔ เปลี่ยนเป็น **was / were**\n- **V.1 (Present)** ➔ เปลี่ยนเป็น **V.2 (Past)**\n- **will** ➔ เปลี่ยนเป็น **would**\n- **can** ➔ เปลี่ยนเป็น **could**\n- **have / has + V.3** ➔ เปลี่ยนเป็น **had + V.3**\n        ",
        "examples": [
          {
            "en": "Direct: 'We will release tomorrow.' ➔ Reported: They said that they would release the following day.",
            "th": "พวกเขาบอกว่าพวกเขาจะปล่อยเวอร์ชันในวันรุ่งขึ้น",
            "cat": "Tech"
          },
          {
            "en": "Direct: 'I am debugging the API.' ➔ Reported: He mentioned that he was debugging the API.",
            "th": "เขาบอกว่าเขากำลังดีบัก API อยู่",
            "cat": "Tech"
          }
        ],
        "quickCheck": [
          {
            "question": "เมื่อเปลี่ยน Direct Speech 'I am deploying the app.' เป็น Reported Speech กริยา 'am deploying' จะเปลี่ยนเป็นรูปใด?",
            "options": [
              "was deploying",
              "deployed",
              "had deployed",
              "is deploying"
            ],
            "correctIndex": 0,
            "explanation": "กฎ Backshift Tense: Present Continuous (am deploying) จะถอย 1 กาลเวลาเป็น Past Continuous -> 'was deploying'"
          },
          {
            "question": "คำว่า 'will' ใน Direct Speech จะเปลี่ยนเป็นคำใดใน Reported Speech?",
            "options": [
              "would",
              "shall",
              "could",
              "had will"
            ],
            "correctIndex": 0,
            "explanation": "เมื่อถอย Tense: will จะเปลี่ยนเป็น 'would' เสมอ"
          },
          {
            "question": "ความแตกต่างระหว่าง 'say' และ 'tell' ใน Reported Speech คือข้อใด?",
            "options": [
              "'tell' ต้องมีกรรมตามหลังเสมอ (เช่น told me) ส่วน 'say' ไม่ต้องมีกรรม (เช่น said that)",
              "'say' ใช้เฉพาะในอดีต ส่วน 'tell' ใช้เฉพาะในปัจจุบัน",
              "'tell' ใช้กับคน ส่วน 'say' ใช้กับสัตว์",
              "ไม่มีความแตกต่างกัน ใช้แทนกันได้ 100%"
            ],
            "correctIndex": 0,
            "explanation": "กฎสำคัญ: 'tell + someone' (He told me that...) ส่วน 'say' ไม่ต้องมีกรรม (He said that...)"
          },
          {
            "question": "คำบอกเวลา 'tomorrow' ใน Direct Speech เมื่อเปลี่ยนเป็น Reported Speech จะเปลี่ยนเป็นคำใด?",
            "options": [
              "the next day / the following day",
              "yesterday",
              "that day",
              "the day before"
            ],
            "correctIndex": 0,
            "explanation": "'tomorrow' จะเปลี่ยนเป็น 'the next day' หรือ 'the following day'"
          },
          {
            "question": "กรณีใดที่ไม่ต้องถอย Tense (No Backshift) ใน Reported Speech?",
            "options": [
              "เมื่อข้อความที่พูดเป็นความจริงนิรันดร์ ข้อเท็จจริงทางวิทยาศาสตร์ หรือยังคงเป็นจริงอยู่ในขณะที่เล่า",
              "เมื่อผู้พูดเป็นผู้จัดการ",
              "เมื่อพูดในวันจันทร์",
              "เมื่อประโยคยาวเกิน 10 คำ"
            ],
            "correctIndex": 0,
            "explanation": "หากข้อความนั้นเป็นความจริงทั่วไป (Universal Truth) เช่น 'The earth moves around the sun' ไม่ต้องถอย Tense"
          },
          {
            "question": "ควรเติมคำใด: 'Sarah ___ me that the migration was successful.'?",
            "options": [
              "told",
              "said",
              "spoke",
              "talked"
            ],
            "correctIndex": 0,
            "explanation": "มีกรรม 'me' รับอยู่ข้างหลัง จึงต้องใช้ 'told me' (ถ้าใช้ said ต้องมี to me เช่น said to me)"
          },
          {
            "question": "เมื่อแปลงคำถาม 'Do you know Python?' เป็น Reported Speech ข้อใดถูกต้อง?",
            "options": [
              "He asked me if I knew Python.",
              "He asked me do I know Python.",
              "He asked me that did I know Python.",
              "He asked me if I know Python."
            ],
            "correctIndex": 0,
            "explanation": "คำถาม Yes/No ใช้ 'if/whether' + เรียงแบบบอกเล่า + ถอย Tense จาก know เป็น 'knew'"
          },
          {
            "question": "คำว่า 'here' ใน Direct Speech จะเปลี่ยนเป็นคำใดใน Reported Speech?",
            "options": [
              "there",
              "where",
              "that place",
              "hereเดิม"
            ],
            "correctIndex": 0,
            "explanation": "สถานที่ใกล้ตัว 'here' จะเปลี่ยนเป็น 'there'"
          },
          {
            "question": "การแปลงคำสั่ง 'Please don't touch the production server.' เป็น Reported Speech ข้อใดถูกต้อง?",
            "options": [
              "He told us not to touch the production server.",
              "He told us to not touch the production server.",
              "He told us don't touch the production server.",
              "He said us not touch the production server."
            ],
            "correctIndex": 0,
            "explanation": "คำสั่งห้ามใช้โครงสร้าง 'tell + someone + not to + V.inf': 'told us not to touch...'"
          },
          {
            "question": "ประโยค 'I haven't seen the error logs.' เมื่อเปลี่ยนเป็น Reported Speech จะเป็นข้อใด?",
            "options": [
              "He said he hadn't seen the error logs.",
              "He said he hasn't seen the error logs.",
              "He said he didn't see the error logs.",
              "He said he won't see the error logs."
            ],
            "correctIndex": 0,
            "explanation": "Present Perfect (haven't seen) ถอย Tense เป็น Past Perfect -> 'hadn't seen'"
          }
        ]
      }
    ]
  },
  {
    "id": "relative-clause",
    "title": "Relative Clause",
    "titleTh": "อนุประโยคขยายคำนาม (Who, Which, That, Where)",
    "icon": "🔗",
    "badge": "Clarity",
    "description": "การเชื่อมประโยคขยายความสเปกเครื่อง ฟีเจอร์ หรือบุคคลให้สละสลวย ชัดเจน และเป็นมืออาชีพ",
    "units": [
      {
        "id": "rel-pronouns",
        "title": "Unit 1: Defining vs Non-Defining Relative Clauses",
        "summary": "การใช้ who (คน), which (สิ่งของ), that (คนหรือสิ่งของ), where (สถานที่)",
        "formula": "Noun + [who / which / that / where] + Clause",
        "explanation": "\n### 1. Relative Pronouns พื้นฐาน\n- **Who:** ขยายคน (The developer **who** wrote this code)\n- **Which:** ขยายสิ่งของ/ระบบ (The server **which** hosts our database)\n- **That:** ขยายได้ทั้งคนและสิ่งของใน Defining clause (The bug **that** caused the crash)\n- **Where:** ขยายสถานที่หรือตำแหน่ง (The data center **where** our racks are located)\n        ",
        "examples": [
          {
            "en": "The engineer who designed this architecture has five years of AWS experience.",
            "th": "วิศวกรผู้ออกแบบสถาปัตยกรรมนี้มีประสบการณ์ AWS ถึง 5 ปี",
            "cat": "Tech"
          },
          {
            "en": "We patched the vulnerability that was discovered last week.",
            "th": "พวกเราได้อุดช่องโหว่ความปลอดภัยที่ถูกค้นพบเมื่อสัปดาห์ที่แล้วเรียบร้อยแล้ว",
            "cat": "Tech"
          }
        ],
        "quickCheck": [
          {
            "question": "ควรเติม Relative Pronoun ใด: 'The DevOps engineer ___ configured our CI/CD pipeline is on leave.'?",
            "options": [
              "who",
              "which",
              "whose",
              "where"
            ],
            "correctIndex": 0,
            "explanation": "ขยายคน (The DevOps engineer) ทำหน้าที่เป็นประธานของ clause จึงต้องใช้ 'who'"
          },
          {
            "question": "ควรเติม Relative Pronoun ใด: 'The microservice ___ handles authentication crashed.'?",
            "options": [
              "which",
              "who",
              "whom",
              "where"
            ],
            "correctIndex": 0,
            "explanation": "ขยายสิ่งของหรือระบบ (The microservice) จึงใช้ 'which' หรือ 'that'"
          },
          {
            "question": "ความแตกต่างระหว่าง Defining และ Non-defining Relative Clause คือข้อใด?",
            "options": [
              "Non-defining clause มีเครื่องหมายคอมมา (,) คั่น เป็นข้อมูลเสริม และ 'ห้ามใช้ that' เด็ดขาด",
              "Defining clause มีคอมมาคั่นเสมอ",
              "Non-defining clause ใช้ได้เฉพาะกับสัตว์",
              "ไม่มีความแตกต่างกัน"
            ],
            "correctIndex": 0,
            "explanation": "กฎเหล็กสากล: Non-defining Relative Clause (มีคอมมาคั่น) ให้ข้อมูลเสริม ห้ามใช้ 'that' ต้องใช้ who หรือ which เท่านั้น"
          },
          {
            "question": "ประโยคใดใช้ Relative Pronoun แสดงความเป็นเจ้าของ (Possession) ได้ถูกต้อง?",
            "options": [
              "The company whose servers we manage is expanding.",
              "The company who's servers we manage is expanding.",
              "The company which servers we manage is expanding.",
              "The company that servers we manage is expanding."
            ],
            "correctIndex": 0,
            "explanation": "'whose' แสดงความเป็นเจ้าของ (เซิร์ฟเวอร์ของบริษัทนั้น) ส่วน who's ย่อมาจาก who is"
          },
          {
            "question": "ควรเติมคำใด: 'The datacenter ___ we store offsite backups is located in Singapore.'?",
            "options": [
              "where",
              "which",
              "who",
              "when"
            ],
            "correctIndex": 0,
            "explanation": "บอกสถานที่ที่เกิดการกระทำข้างใน (เราเก็บข้อมูลไว้ที่นั่น) ใช้ 'where'"
          },
          {
            "question": "กรณีใดที่เราสามารถละ (Omit) Relative Pronoun ออกไปได้โดยประโยคยังคงถูกต้อง?",
            "options": [
              "เมื่อ Relative Pronoun ทำหน้าที่เป็นกรรม (Object) ของ Relative Clause",
              "เมื่อ Relative Pronoun ทำหน้าที่เป็นประธาน",
              "เมื่อมีเครื่องหมายคอมมา",
              "ห้ามละเด็ดขาดทุกกรณี"
            ],
            "correctIndex": 0,
            "explanation": "เมื่อเป็นกรรม สามารถละได้ เช่น 'The script (which) I wrote yesterday' -> 'The script I wrote yesterday'"
          },
          {
            "question": "ควรเติมคำใด: 'The incident occurred on the day ___ we launched the major release.'?",
            "options": [
              "when",
              "where",
              "which",
              "who"
            ],
            "correctIndex": 0,
            "explanation": "ขยายวันหรือเวลา (on the day) จึงต้องใช้ 'when'"
          },
          {
            "question": "ประโยคทางการที่มี Preposition อยู่หน้า Relative Pronoun ข้อใดถูกต้อง?",
            "options": [
              "The architect with whom I consulted approved the design.",
              "The architect with who I consulted approved the design.",
              "The architect with that I consulted approved the design.",
              "The architect with whose I consulted approved the design."
            ],
            "correctIndex": 0,
            "explanation": "หลังบุพบท (with, to, for) ที่ขยายคน ต้องใช้รูปกรรม 'whom' เสมอ: 'with whom'"
          },
          {
            "question": "การย่อ Relative Clause 'The server which was installed yesterday' ให้สั้นลงจะได้ข้อใด?",
            "options": [
              "The server installed yesterday",
              "The server install yesterday",
              "The server installing yesterday",
              "The server was install yesterday"
            ],
            "correctIndex": 0,
            "explanation": "Reduced Relative Clause แบบ Passive ให้ตัด which was ออก เหลือเพียง Past Participle: 'The server installed yesterday'"
          },
          {
            "question": "ประโยคใดผิดหลักไวยากรณ์เรื่อง Relative Clause?",
            "options": [
              "Kubernetes, that was created by Google, is open-source.",
              "Kubernetes, which was created by Google, is open-source.",
              "The container that crashed has restarted.",
              "The person who called you was Alex."
            ],
            "correctIndex": 0,
            "explanation": "ผิดข้อแรกเต็มๆ เพราะมีคอมมา (Non-defining clause) ห้ามใช้ 'that' เด็ดขาด ต้องใช้ 'which'"
          }
        ]
      }
    ]
  },
  {
    "id": "participles",
    "title": "Participles",
    "titleTh": "การย่อประโยคด้วย Participle (V.ing vs V.3)",
    "icon": "✂️",
    "badge": "Advanced",
    "description": "Present Participle (V.ing ทำเอง) vs Past Participle (V.3 ถูกทำ) ย่อประโยคยาวให้อ่านกระชับระดับ Native",
    "units": [
      {
        "id": "part-ing-ed",
        "title": "Unit 1: Participle Clauses in Technical Writing",
        "summary": "ลดรูปประโยคเพื่อความกระชับในการเขียนรายงานทางเทคนิค",
        "formula": "Active: [V.ing + Object], Main Clause  |  Passive: [V.3 + by...], Main Clause",
        "explanation": "\n### 1. Present Participle (V.ing - ประธานทำเอง)\n- ย่อมาจากประโยค Active: \"Running on Linux, this service consumes very little RAM.\"\n  - (ความหมายเดิม: Because this service runs on Linux, it consumes...)\n\n### 2. Past Participle (V.3 - ประธานถูกกระทำ)\n- ย่อมาจากประโยค Passive: \"Configured properly, Kubernetes manages containers automatically.\"\n  - (ความหมายเดิม: When Kubernetes is configured properly, it manages...)\n        ",
        "examples": [
          {
            "en": "Deployed to three cloud regions, our service guarantees 99.99% uptime.",
            "th": "เมื่อได้รับการติดตั้งใน 3 Cloud Regions บริการของเราจึงรับประกันความพร้อมใช้งานถึง 99.99%",
            "cat": "Tech"
          },
          {
            "en": "Knowing the deployment risks, we scheduled the update at midnight.",
            "th": "ด้วยความที่รู้ถึงความเสี่ยงในการขึ้นระบบ พวกเราจึงกำหนดเวลาอัปเดตไว้ตอนเที่ยงคืน",
            "cat": "Daily"
          }
        ],
        "quickCheck": [
          {
            "question": "ความแตกต่างระหว่าง Present Participle (-ing) และ Past Participle (-ed) เมื่อใช้เป็น Adjective คือข้อใด?",
            "options": [
              "-ing สื่อถึง 'ทำให้เกิดความรู้สึก / เป็นผู้กระทำเอง' ส่วน -ed สื่อถึง 'รู้สึก / ถูกกระทำ'",
              "-ed ใช้กับสัตว์เท่านั้น ส่วน -ing ใช้กับคน",
              "-ing ใช้เฉพาะในอดีต ส่วน -ed ใช้เฉพาะในอนาคต",
              "ไม่มีความแตกต่างกัน ใช้แทนกันได้เสมอ"
            ],
            "correctIndex": 0,
            "explanation": "ตัวอย่างเช่น 'The meeting was boring.' (การประชุมน่าเบื่อ) vs 'We felt bored.' (พวกเรารู้สึกเบื่อ)"
          },
          {
            "question": "ควรเติมคำใด: 'The team was very ___ about the upcoming cloud migration project.'?",
            "options": [
              "exciting",
              "excited",
              "excite",
              "excitement"
            ],
            "correctIndex": 1,
            "explanation": "คนรู้สึกตื่นเต้น (ได้รับความรู้สึก) ต้องใช้รูป -ed -> 'excited'"
          },
          {
            "question": "การย่อประโยคบอกเหตุผล 'Because we knew the risks, we implemented backups.' ด้วย Participle Clause จะได้ข้อใด?",
            "options": [
              "Knowing the risks, we implemented backups.",
              "Known the risks, we implemented backups.",
              "Knew the risks, we implemented backups.",
              "To know the risks, we implemented backups."
            ],
            "correctIndex": 0,
            "explanation": "ประธานทำกริยาเอง (Active) ย่อด้วย Present Participle (V.ing): 'Knowing the risks...'"
          },
          {
            "question": "ควรเติมคำใด: 'All files ___ on this encrypted volume are protected.'?",
            "options": [
              "storing",
              "stored",
              "store",
              "stores"
            ],
            "correctIndex": 1,
            "explanation": "ไฟล์ 'ถูกจัดเก็บ' (Passive) ย่อมาจาก 'which are stored' จึงใช้ Past Participle: 'stored'"
          },
          {
            "question": "ข้อใดเป็นข้อผิดพลาดแบบ 'Dangling Participle' (วลีขยายลอย หาประธานที่กระทำจริงไม่เจอ)?",
            "options": [
              "Running the test script, the error appeared suddenly.",
              "Running the test script, we discovered a memory leak.",
              "While testing the application, Sarah found a bug.",
              "Having reviewed the code, Alex merged the PR."
            ],
            "correctIndex": 0,
            "explanation": "'Running the test script, the error appeared...' ผิดไวยากรณ์เพราะตัว error ไม่ได้เป็นคนรันสคริปต์ (ประธานในประโยคหลักต้องเป็นคนทำกริยาในวลีข้างหน้า)"
          },
          {
            "question": "ควรเติมคำใด: 'There is a background process ___ on port 8080.'?",
            "options": [
              "listening",
              "listened",
              "listen",
              "listens"
            ],
            "correctIndex": 0,
            "explanation": "โปรเซสกำลังดักฟังสัญญาณอยู่ด้วยตัวเอง (Active) ย่อมาจาก 'which is listening' จึงใช้ 'listening'"
          },
          {
            "question": "โครงสร้าง 'Having + V.3' (Perfect Participle) ใช้ในกรณีใด?",
            "options": [
              "เพื่อเน้นย้ำว่าการกระทำหนึ่งเสร็จสิ้นสมบูรณ์ก่อนที่อีกการกระทำหนึ่งจะเริ่มขึ้น",
              "ใช้เป็นประโยคคำสั่ง",
              "ใช้เฉพาะกับ Verb to be",
              "ใช้บอกสิ่งที่ไม่เคยเกิดขึ้นเลย"
            ],
            "correctIndex": 0,
            "explanation": "เช่น 'Having completed the penetration test, the team published the security report.' (เมื่อทำเทสต์เสร็จเรียบร้อยแล้ว จึงค่อยออกรายงาน)"
          },
          {
            "question": "ควรเติมคำใด: 'Do not use this ___ API function in new codebases.' (ฟังก์ชันที่เลิกแนะนำให้ใช้แล้ว)?",
            "options": [
              "deprecating",
              "deprecated",
              "deprecate",
              "deprecation"
            ],
            "correctIndex": 1,
            "explanation": "ฟังก์ชัน 'ถูกประกาศยกเลิก/ไม่สนับสนุนแล้ว' ใช้รูป Past Participle -> 'deprecated API'"
          },
          {
            "question": "ประโยคใดใช้ Participle Clause บอกเหตุการณ์ที่เกิดขึ้นพร้อมกันได้ถูกต้อง?",
            "options": [
              "Working remotely, she communicates with the team via Slack.",
              "Work remotely, she communicates with the team via Slack.",
              "Worked remotely, she communicates with the team via Slack.",
              "To work remotely, she communicates with the team via Slack."
            ],
            "correctIndex": 0,
            "explanation": "'Working remotely, she communicates...' ประธานคนเดียวกันทำสองสิ่งไปพร้อมๆ กัน"
          },
          {
            "question": "ควรเติมคำใด: 'The result was very ___, so we investigated further.'?",
            "options": [
              "confusing",
              "confused",
              "confuse",
              "confusion"
            ],
            "correctIndex": 0,
            "explanation": "ผลลัพธ์ (สิ่งไม่มีชีวิต) 'น่าสับสน / ก่อให้เกิดความสับสน' จึงต้องใช้รูป -ing คือ 'confusing'"
          }
        ]
      }
    ]
  },
  {
    "id": "active-passive-voice",
    "title": "Active-Passive Voice",
    "titleTh": "ประธานทำเอง vs ประธานถูกกระทำ (เน้นผลลัพธ์ของระบบ)",
    "icon": "🔄",
    "badge": "Industry Standard",
    "description": "หัวใจของการเขียน Incident Post-Mortem, Release Notes, และ System Logs ในโลกการทำงาน",
    "units": [
      {
        "id": "voice-formula",
        "title": "Unit 1: Passive Voice Formula & Tech Context",
        "summary": "ทำไมสายไอทีจึงใช้ Passive Voice บ่อยมาก? เน้น Action และสิ่งที่ถูกทำ",
        "formula": "Passive Formula: Subject + Verb to be (ผันตาม Tense) + V.3 (+ by Agent)",
        "explanation": "\n### ทำไมวงการไอทีและธุรกิจถึงชอบใช้ Passive Voice?\n1. **ไม่เน้นผู้กระทำ:** ไม่สำคัญว่าใครเป็นคนกดปุ่ม แต่สำคัญที่ **\"ผลลัพธ์ของระบบ\"**\n2. **เป็นทางการและเป็นกลาง:** ไม่ชี้เป้าหรือกล่าวโทษบุคคล (No Blame Culture)\n   - ไม่พูดว่า: *\"Somchai broke the database.\"* (สมชายทำฐานข้อมูลพัง)\n   - พูดอย่างมืออาชีพ: *\"The database **was corrupted** during migration.\"* (ฐานข้อมูลเกิดความเสียหายระหว่างการย้ายข้อมูล)\n\n### สูตรแปลง 3 สเต็ปง่ายๆ:\n1. นำกรรม (Object) ของประโยคเดิมมาเป็นประธาน\n2. ใส่ **Verb to be** ให้ตรงตาม Tense และประธานตัวใหม่\n3. เปลี่ยนกริยาแท้เป็น **V.3 (Past Participle)**\n\n#### ตัวอย่างผันตามแต่ละ Tense:\n- **Present Simple:** The code **is reviewed** before every merge.\n- **Past Simple:** The vulnerability **was patched** yesterday.\n- **Present Perfect:** The release **has been deployed** successfully.\n- **Future Simple:** The new cluster **will be provisioned** tomorrow.\n        ",
        "examples": [
          {
            "en": "All production database backups are encrypted at rest.",
            "th": "ข้อมูลสำรองทั้งหมดของ Production จะถูกเข้ารหัสไว้เสมอในขณะจัดเก็บ",
            "cat": "Tech"
          },
          {
            "en": "The incident was resolved within fifteen minutes.",
            "th": "เหตุขัดข้องได้รับการแก้ไขลุล่วงภายใน 15 นาที",
            "cat": "Tech"
          },
          {
            "en": "A new version of the app has been published to the App Store.",
            "th": "แอปพลิเคชันเวอร์ชันใหม่ได้รับการเผยแพร่ลง App Store เรียบร้อยแล้ว",
            "cat": "Daily"
          }
        ],
        "quickCheck": [
          {
            "question": "สูตรโครงสร้างพื้นฐานของ Passive Voice ในภาษาอังกฤษคือข้อใด?",
            "options": [
              "Subject + Verb to be + V.3 (Past Participle)",
              "Subject + have + V.3",
              "Subject + do/does + V.inf",
              "Subject + Verb to be + V.ing"
            ],
            "correctIndex": 0,
            "explanation": "โครงสร้าง Passive Voice: ประธานถูกกระทำ = Verb to be + กริยาช่อง 3 (V.3)"
          },
          {
            "question": "ควรเติมกริยารูปใด: 'The database ___ automatically every midnight.' (Present Simple Passive)?",
            "options": [
              "is backed up",
              "are backed up",
              "backs up",
              "backed up"
            ],
            "correctIndex": 0,
            "explanation": "The database (เอกพจน์) ถูกสำรองข้อมูลเป็นประจำ -> 'is backed up'"
          },
          {
            "question": "ควรเติมกริยารูปใด: 'The critical security vulnerability ___ by our team yesterday.' (Past Simple Passive)?",
            "options": [
              "was patched",
              "were patched",
              "patched",
              "has patched"
            ],
            "correctIndex": 0,
            "explanation": "ประธานเอกพจน์ (vulnerability) และมีคำว่า yesterday ในอดีต -> 'was patched'"
          },
          {
            "question": "ควรเติมกริยารูปใด: 'The new feature ___ to production next Monday.' (Future Passive)?",
            "options": [
              "will be deployed",
              "will deploy",
              "is deployed yesterday",
              "will being deployed"
            ],
            "correctIndex": 0,
            "explanation": "โครงสร้าง Future Passive: will + be + V.3 -> 'will be deployed'"
          },
          {
            "question": "ควรเติมกริยารูปใด: 'User passwords must ___ with a strong hashing algorithm.' (Modal Passive)?",
            "options": [
              "be hashed",
              "hashed",
              "are hashed",
              "been hashed"
            ],
            "correctIndex": 0,
            "explanation": "หลัง Modal Verb (must, should, can) ใน Passive Voice ต้องตามด้วย 'be + V.3' -> 'must be hashed'"
          },
          {
            "question": "ควรเติมกริยารูปใด: 'Please wait, the server cluster ___ right now.' (Present Continuous Passive)?",
            "options": [
              "is being upgraded",
              "is upgrading",
              "upgrades",
              "was upgraded"
            ],
            "correctIndex": 0,
            "explanation": "กำลังถูกกระทำอยู่ในขณะนี้ (right now) โครงสร้างคือ is/am/are + being + V.3 -> 'is being upgraded'"
          },
          {
            "question": "กรณีใดที่นิยมละการระบุผู้กระทำ 'by + agent' ออกจาก Passive Voice?",
            "options": [
              "เมื่อไม่ทราบผู้กระทำ, ไม่สำคัญ, หรือเห็นได้ชัดเจนอยู่แล้วในบริบท",
              "เมื่อผู้กระทำเป็นผู้บริหารเท่านั้น",
              "เมื่อประโยคมีคำศัพท์มากกว่า 15 คำ",
              "ห้ามละเด็ดขาดในทุกกรณี"
            ],
            "correctIndex": 0,
            "explanation": "ในงานเทคนิคและบทความวิชาการ นิยมละ 'by someone' หากไม่จำเป็น เพื่อเน้นที่ 'ตัวงานหรือระบบ' ที่ถูกกระทำ"
          },
          {
            "question": "ประโยค Active 'Alex merged the pull request.' เมื่อแปลงเป็น Passive Voice จะได้ข้อใด?",
            "options": [
              "The pull request was merged by Alex.",
              "The pull request is merged by Alex.",
              "The pull request had merged by Alex.",
              "The pull request was merging by Alex."
            ],
            "correctIndex": 0,
            "explanation": "กริยาเดิมคือ merged (Past Simple) แปลงเป็น Passive ในอดีตได้ 'was merged by Alex'"
          },
          {
            "question": "กริยาในข้อใดเป็น Intransitive Verb (กริยาที่ไม่ต้องการกรรม) ซึ่ง 'ห้ามทำเป็น Passive Voice' เด็ดขาด?",
            "options": [
              "happen",
              "build",
              "create",
              "deploy"
            ],
            "correctIndex": 0,
            "explanation": "'happen', 'occur', 'arrive' เป็นกริยาที่ไม่ต้องการกรรม ห้ามพูด 'The accident was happened' (ต้องพูดว่า 'The accident happened')"
          },
          {
            "question": "ประโยคใดในรายงานอุบัติการณ์ (Incident Report) ใช้ Passive Voice ได้กระชับและเป็นมืออาชีพที่สุด?",
            "options": [
              "All affected microservices were restored within 15 minutes.",
              "Somebody has restored all affected microservices.",
              "We were restoring of all affected microservices.",
              "Microservices were being restore within 15 minutes."
            ],
            "correctIndex": 0,
            "explanation": "เน้นผลลัพธ์ของการกู้คืนระบบได้อย่างเป็นกลาง ชัดเจน และเป็นสากล"
          }
        ]
      }
    ]
  },
  {
    "id": "comparison",
    "title": "Comparison",
    "titleTh": "การเปรียบเทียบขั้นกว่าและขั้นสุด (Comparative & Superlative)",
    "icon": "📊",
    "badge": "Evaluation",
    "description": "การเปรียบเทียบ Tool A vs Tool B, Performance, Latency, Cost เพื่อนำเสนอทางเลือกในที่ประชุม",
    "units": [
      {
        "id": "comp-rules",
        "title": "Unit 1: Comparative & Superlative Structures",
        "summary": "การใช้ -er than, more than, the -est, the most และ as...as",
        "formula": "Comparative: Adj + -er than  |  more + Adj + than  --- Superlative: the + Adj + -est  |  the most + Adj",
        "explanation": "\n### 1. Comparative (ขั้นกว่า - เปรียบเทียบ 2 สิ่ง)\n- คำพยางค์สั้น: เติม **-er than** (faster than, cheaper than, larger than)\n- คำ 2 พยางค์ขึ้นไป: ใช้ **more ... than** (more reliable than, more scalable than)\n\n### 2. Superlative (ขั้นสุด - ที่สุดในกลุ่ม)\n- คำพยางค์สั้น: **the ... -est** (the fastest, the cheapest)\n- คำหลายพยางค์: **the most ...** (the most efficient, the most secure)\n\n### 3. As ... as (เท่ากัน)\n- \"PostgreSQL is **as reliable as** MySQL for this workload.\" (เสถียรเท่ากัน)\n        ",
        "examples": [
          {
            "en": "Go is generally faster than Python for CPU-intensive tasks.",
            "th": "ภาษา Go โดยทั่วไปเร็วกว่า Python สำหรับงานที่ต้องประมวลผล CPU หนักๆ",
            "cat": "Tech"
          },
          {
            "en": "This is the most cost-effective cloud solution for our startup.",
            "th": "นี่คือโซลูชันคลาวด์ที่คุ้มค่ากับต้นทุนมากที่สุดสำหรับสตาร์ทอัพของเรา",
            "cat": "Tech"
          }
        ],
        "quickCheck": [
          {
            "question": "การเปรียบเทียบขั้นกว่า (Comparative) ของคำคุณศัพท์สั้น 1 พยางค์ 'fast' คือข้อใด?",
            "options": [
              "faster than",
              "more fast than",
              "fastest than",
              "as fast than"
            ],
            "correctIndex": 0,
            "explanation": "คำคุณศัพท์สั้น 1 พยางค์ เติม -er + than -> 'faster than'"
          },
          {
            "question": "การเปรียบเทียบขั้นกว่าของคำคุณศัพท์ยาว 3 พยางค์ 'reliable' คือข้อใด?",
            "options": [
              "more reliable than",
              "reliabler than",
              "most reliable than",
              "as reliable than"
            ],
            "correctIndex": 0,
            "explanation": "คำคุณศัพท์ 2 พยางค์ขึ้นไปส่วนใหญ่ ใช้ 'more + adjective + than' -> 'more reliable than'"
          },
          {
            "question": "รูปขั้นสูงสุด (Superlative) ของคำว่า 'secure' คือข้อใด?",
            "options": [
              "the most secure",
              "the securest",
              "more secure",
              "the more secure"
            ],
            "correctIndex": 0,
            "explanation": "คำว่า secure นิยมใช้ 'the most secure' เป็นขั้นสูงสุด"
          },
          {
            "question": "รูปเปรียบเทียบขั้นกว่าและขั้นสูงสุดของคำว่า 'good' คือข้อใด?",
            "options": [
              "better / the best",
              "gooder / the goodest",
              "more good / the most good",
              "well / the best"
            ],
            "correctIndex": 0,
            "explanation": "good เป็น Irregular Adjective: good -> better (ขั้นกว่า) -> the best (ขั้นสูงสุด)"
          },
          {
            "question": "โครงสร้างเปรียบเทียบความเท่ากัน (Equality) ข้อใดถูกต้อง?",
            "options": [
              "Our new server is as fast as the old one.",
              "Our new server is as faster as the old one.",
              "Our new server is so fast as the old one.",
              "Our new server is as fast than the old one."
            ],
            "correctIndex": 0,
            "explanation": "โครงสร้างเปรียบเทียบความเท่ากัน: as + Adjective รูปธรรมดา + as -> 'as fast as'"
          },
          {
            "question": "หากต้องการเน้นย้ำความแตกต่างให้เด่นชัด (Much / Far) ควรวางคำไว้ตำแหน่งใด?",
            "options": [
              "This framework is much faster than the previous one.",
              "This framework is more much faster than the previous one.",
              "This framework is faster much than the previous one.",
              "This framework is very faster than the previous one."
            ],
            "correctIndex": 0,
            "explanation": "ใช้ 'much' หรือ 'far' วางหน้าขั้นกว่าเพื่อเน้นย้ำ: 'much faster than' (ห้ามใช้ very หน้าขั้นกว่า)"
          },
          {
            "question": "โครงสร้าง 'The more... the more...' ในข้อใดถูกต้อง?",
            "options": [
              "The more automated tests we write, the more stable our release becomes.",
              "The more automated tests we write, the stable our release becomes.",
              "More automated tests we write, more stable our release becomes.",
              "The most automated tests we write, the most stable our release becomes."
            ],
            "correctIndex": 0,
            "explanation": "สูตรความสัมพันธ์: 'The + comparative ..., the + comparative ...' (ยิ่ง... ก็ยิ่ง...)"
          },
          {
            "question": "การเปรียบเทียบขั้นกว่าของคำกริยาวิเศษณ์ 'smoothly' คือข้อใด?",
            "options": [
              "more smoothly than",
              "smoothlier than",
              "most smoothly than",
              "smooth than"
            ],
            "correctIndex": 0,
            "explanation": "Adverb ที่ลงท้ายด้วย -ly ให้ใช้ 'more + adverb + than' -> 'more smoothly than'"
          },
          {
            "question": "รูปเปรียบเทียบขั้นกว่าและขั้นสูงสุดของคำว่า 'bad' คือข้อใด?",
            "options": [
              "worse / the worst",
              "badder / the baddest",
              "more bad / the most bad",
              "worser / the worst"
            ],
            "correctIndex": 0,
            "explanation": "bad เป็น Irregular: bad -> worse (ขั้นกว่า) -> the worst (ขั้นสูงสุด)"
          },
          {
            "question": "ควรเติมคำใด: 'Serverless architecture is often ___ expensive than dedicated servers for low-traffic apps.'?",
            "options": [
              "less",
              "least",
              "fewer",
              "few"
            ],
            "correctIndex": 0,
            "explanation": "เปรียบเทียบว่า 'แพงน้อยกว่า' ใช้ 'less expensive than'"
          }
        ]
      }
    ]
  },
  {
    "id": "if-clause",
    "title": "If-Clause",
    "titleTh": "ประโยคเงื่อนไขและตรรกะระบบ (Conditionals 0, 1, 2, 3)",
    "icon": "🔀",
    "badge": "Logic Pro",
    "description": "Conditionals ทั้ง 4 แบบสำหรับคิดตรรกะ วางแผน Scenario รับมือบั๊ก และวิเคราะห์ Edge Cases",
    "units": [
      {
        "id": "if-type-0-1",
        "title": "Unit 1: Type 0 & Type 1 (ความจริง & ความเป็นไปได้ในอนาคต)",
        "summary": "Type 0 (ความจริงแท้ทางระบบ) vs Type 1 (คาดการณ์สิ่งที่จะเกิดขึ้นจริง)",
        "formula": "Type 0: If + Present Simple, Present Simple  |  Type 1: If + Present Simple, will + V.inf",
        "explanation": "\n### 1. Zero Conditional (Type 0 - ข้อเท็จจริง กฎเกณฑ์ธรรมชาติและระบบ)\n- ใช้เมื่อสิ่งหนึ่งเกิดขึ้น อีกสิ่งหนึ่งจะเกิดขึ้นตามมาอย่างแน่นอน 100%\n- **สูตร:** If + Present Simple, Present Simple\n- ตัวอย่าง: \"If a container crashes, Kubernetes **restarts** it automatically.\" (ถ้าคอนเทนเนอร์ล่ม Kubernetes ก็จะรีสตาร์ทมันโดยอัตโนมัติ)\n\n### 2. First Conditional (Type 1 - เหตุการณ์ที่เป็นไปได้จริงในอนาคต)\n- ใช้เมื่อมีเงื่อนไขในปัจจุบัน และคาดว่าผลลัพธ์จะเกิดขึ้นในอนาคต\n- **สูตร:** If + Present Simple, **will / can / may + V.inf**\n- ตัวอย่าง: \"If we deploy on Friday afternoon, we **will encounter** production issues.\" (ถ้าเราขึ้นระบบเย็นวันศุกร์ เราจะต้องเจอปัญหาบน Production แน่ๆ)\n        ",
        "examples": [
          {
            "en": "If the CPU temperature exceeds 85°C, the server shuts down automatically.",
            "th": "ถ้าอุณหภูมิ CPU เกิน 85 องศา เซิร์ฟเวอร์จะปิดตัวลงโดยอัตโนมัติ (Type 0)",
            "cat": "Tech"
          },
          {
            "en": "If you approve this PR now, I will merge it immediately.",
            "th": "ถ้าคุณกดอนุมัติ PR นี้ตอนนี้ ฉันจะกด Merge ให้ทันที (Type 1)",
            "cat": "Tech"
          },
          {
            "en": "If it rains tomorrow, we will have our meeting online.",
            "th": "ถ้าพรุ่งนี้ฝนตก พวกเราจะประชุมกันทางออนไลน์ (Type 1)",
            "cat": "Daily"
          }
        ],
        "quickCheck": [
          {
            "question": "โครงสร้าง If-Clause Type 0 (ความจริงทั่วไป/หลักวิทยาศาสตร์) คือข้อใด?",
            "options": [
              "If + Present Simple, Present Simple",
              "If + Present Simple, will + V.inf",
              "If + Past Simple, would + V.inf",
              "If + Past Perfect, would have + V.3"
            ],
            "correctIndex": 0,
            "explanation": "Type 0 สื่อความจริงเสมอ: 'If + Present Simple, Present Simple' เช่น 'If you heat water, it boils.'"
          },
          {
            "question": "ควรเติมกริยารูปใด: 'If memory usage reaches 95%, the system automatically ___ an alert.' (Type 0 กฎระบบ)?",
            "options": [
              "sends",
              "will send",
              "sent",
              "would send"
            ],
            "correctIndex": 0,
            "explanation": "เมื่อระบบถูกตั้งค่าให้ทำอัตโนมัติเป็นความจริงแน่นอน จัดเป็น Type 0 ใช้ Present Simple -> 'sends'"
          },
          {
            "question": "โครงสร้าง If-Clause Type 1 (ความเป็นไปได้จริงในอนาคต) คือข้อใด?",
            "options": [
              "If + Present Simple, will + V.infinitive",
              "If + Past Simple, will + V.infinitive",
              "If + Present Simple, would + V.infinitive",
              "If + will + V.infinitive, Present Simple"
            ],
            "correctIndex": 0,
            "explanation": "Type 1: If + Present Simple, will + V.inf (ถ้าเหตุการณ์นี้เกิดขึ้น จะเกิดผลลัพธ์นั้นในอนาคต)"
          },
          {
            "question": "ข้อใดเป็นข้อผิดพลาดร้ายแรงใน If-Clause Type 1 ที่พบบ่อยที่สุด?",
            "options": [
              "การใส่ 'will' เข้าไปในประโยคย่อยหลัง If (เช่น If it will rain...)",
              "การใช้กริยาช่อง 1",
              "การใส่คอมมาคั่นสองประโยค",
              "การใช้คำว่า then"
            ],
            "correctIndex": 0,
            "explanation": "กฎเหล็กสากล: ในส่วนของ If-clause 'ห้ามใส่ will เด็ดขาด' ต้องใช้ Present Simple เสมอ เช่น 'If you run the script, it will deploy.'"
          },
          {
            "question": "คำว่า 'Unless' มีความหมายและโครงสร้างเทียบเท่ากับข้อใด?",
            "options": [
              "If ... not",
              "If ... only",
              "Because",
              "Although"
            ],
            "correctIndex": 0,
            "explanation": "'Unless' = 'If ... not' (เว้นแต่ว่า / ถ้าไม่...) เช่น 'Unless we scale up, the server will crash.'"
          },
          {
            "question": "ประโยค 'Unless you verify the backup, you cannot be sure the data is safe.' มีความหมายตรงกับข้อใด?",
            "options": [
              "If you do not verify the backup, you cannot be sure the data is safe.",
              "If you verify the backup, you cannot be sure the data is safe.",
              "Because you verify the backup, data is safe.",
              "Although you verify the backup, data is safe."
            ],
            "correctIndex": 0,
            "explanation": "เปลี่ยน Unless เป็น If you do not verify... ได้ความหมายเหมือนกันทุกประการ"
          },
          {
            "question": "ประโยค Type 1 ที่ใช้ประโยคคำสั่ง (Imperative) ในประโยคหลักข้อใดถูกต้อง?",
            "options": [
              "If you see an error log, notify the DevOps team immediately.",
              "If you see an error log, you will notify.",
              "If you will see an error log, notify.",
              "If you seeing an error log, notify."
            ],
            "correctIndex": 0,
            "explanation": "ใน If-clause Type 1 ประโยคหลักสามารถเป็น Imperative (คำสั่ง) ได้: 'If you see an error, notify...'"
          },
          {
            "question": "คำว่า 'Provided that' หรือ 'Providing that' ใช้แทนคำใดได้?",
            "options": [
              "If (ในเงื่อนไขว่า/ตราบใดที่)",
              "Because",
              "Although",
              "Unless"
            ],
            "correctIndex": 0,
            "explanation": "'Provided that' แปลว่า 'ภายใต้เงื่อนไขว่า / หากว่า' ใช้แทน If ในภาษาอังกฤษเชิงธุรกิจหรือสัญญาได้"
          },
          {
            "question": "ควรเติมกริยารูปใด: 'If the CI/CD pipeline ___ green, we will trigger the production release.'?",
            "options": [
              "turns",
              "will turn",
              "turned",
              "would turn"
            ],
            "correctIndex": 0,
            "explanation": "ใน If-clause ใช้ Present Simple กับประธานเอกพจน์ (the pipeline) -> 'turns'"
          },
          {
            "question": "ความแตกต่างระหว่าง 'in case' และ 'if' ในบริบทความปลอดภัยคือข้อใด?",
            "options": [
              "'in case' หมายถึง ทำเตรียมการไว้ล่วงหน้าเพื่อป้องกัน ส่วน 'if' หมายถึง รอให้เกิดเหตุก่อนแล้วค่อยทำ",
              "in case ใช้เฉพาะในอดีต",
              "if ใช้เฉพาะกับสภาพอากาศ",
              "ไม่มีความแตกต่างกัน"
            ],
            "correctIndex": 0,
            "explanation": "'We take backups in case the disk fails.' (สำรองข้อมูลเผื่อไว้ล่วงหน้าก่อนที่ดิสก์จะพัง)"
          }
        ]
      },
      {
        "id": "if-type-2-3",
        "title": "Unit 2: Type 2 & Type 3 (สมมติตรงข้ามความจริง & เสียดายในอดีต)",
        "summary": "Type 2 (สมมติในปัจจุบันที่ยังไม่จริง) vs Type 3 (เหตุการณ์ในอดีตที่ผ่านไปแล้วและกลับไปแก้ไม่ได้)",
        "formula": "Type 2: If + Past Simple, would + V.inf  |  Type 3: If + had + V.3, would have + V.3",
        "explanation": "\n### 1. Second Conditional (Type 2 - สมมติสิ่งที่ตรงข้ามกับความจริงปัจจุบัน)\n- ใช้จินตนาการถึงสิ่งที่แทบไม่มีทางเป็นจริงในตอนนี้\n- **สูตร:** If + Past Simple (V.2), **would + V.inf**\n  *(หมายเหตุ: ในภาษาอังกฤษทางการ Verb to be ใน if-clause จะนิยมใช้ were กับประธานทุกตัว)*\n- ตัวอย่าง: \"If I **had** root access, I **would inspect** the hidden system logs.\" (ถ้าฉันมีสิทธิ์ Root นะ ฉันจะเข้าไปดู Log ลับทันที — แต่ความจริงตอนนี้ไม่มีสิทธิ์)\n\n### 2. Third Conditional (Type 3 - เสียดายสิ่งที่เกิดขึ้นไปแล้วในอดีต)\n- ย้อนเวลากลับไปไม่ได้ พูดถึงสิ่งที่เกิดขึ้นไปแล้วและอยากให้ผลลัพธ์เป็นอีกอย่าง\n- **สูตร:** If + **had + V.3**, **would have + V.3**\n- ตัวอย่าง: \"If we **had written** unit tests, we **would not have introduced** this critical bug.\" (ถ้าตอนนั้นพวกเราเขียน Unit tests นะ เราก็คงไม่ปล่อยให้บั๊กวิกฤตินี้หลุดออกไป — แต่ความจริงคือตอนนั้นไม่ได้เขียน บั๊กเลยหลุด)\n        ",
        "examples": [
          {
            "en": "If we had more budget, we would hire two more SRE engineers.",
            "th": "ถ้าเรามีงบประมาณมากกว่านี้ เราก็คงจ้างวิศวกร SRE เพิ่มอีกสองคนแล้ว (Type 2)",
            "cat": "Tech"
          },
          {
            "en": "If we had monitored the database latency, the outage would not have happened.",
            "th": "ถ้าตอนนั้นเราคอยเฝ้าดูกราฟ Latency ของฐานข้อมูล เหตุการณ์ระบบดับก็คงไม่เกิดขึ้น (Type 3)",
            "cat": "Tech"
          }
        ],
        "quickCheck": [
          {
            "question": "โครงสร้าง If-Clause Type 2 (สมมติตรงข้ามความจริงในปัจจุบัน/สิ่งที่เป็นไปได้ยาก) คือข้อใด?",
            "options": [
              "If + Past Simple, would + V.infinitive",
              "If + Present Simple, will + V.infinitive",
              "If + Past Perfect, would have + V.3",
              "If + Past Simple, will + V.infinitive"
            ],
            "correctIndex": 0,
            "explanation": "Type 2 สมมติในปัจจุบัน: 'If + Past Simple (V.2), would + V.infinitive'"
          },
          {
            "question": "ใน If-Clause Type 2 นิยมใช้ Verb to be รูปใดกับประธานทุกตัว (I, he, she, it)?",
            "options": [
              "were",
              "was",
              "is",
              "been"
            ],
            "correctIndex": 0,
            "explanation": "ตามหลักไวยากรณ์สากล นิยมใช้ 'were' กับประธานทุกตัว เช่น 'If I were the lead architect...'"
          },
          {
            "question": "โครงสร้าง If-Clause Type 3 (สมมติตรงข้ามความจริงในอดีต / เสียดายสิ่งที่ผ่านไปแล้ว) คือข้อใด?",
            "options": [
              "If + Past Perfect (had + V.3), would have + V.3",
              "If + Past Simple, would + V.inf",
              "If + Present Perfect, would have + V.3",
              "If + had + V.3, will have + V.3"
            ],
            "correctIndex": 0,
            "explanation": "Type 3 เสียดายอดีต: 'If + had + V.3, would have + V.3' เช่น 'If we had tested earlier, the server wouldn't have crashed.'"
          },
          {
            "question": "ควรเติมกริยารูปใด: 'If we ___ a larger cloud budget, we would hire more site reliability engineers.' (Type 2)?",
            "options": [
              "had",
              "have",
              "had had",
              "will have"
            ],
            "correctIndex": 0,
            "explanation": "Type 2 สมมติตรงข้ามกับความจริงปัจจุบัน (ตอนนี้งบไม่พอ) หลัง If ใช้ Past Simple -> 'had'"
          },
          {
            "question": "ควรเติมกริยารูปใด: 'If the QA team ___ the edge cases, the bug would not have reached production.' (Type 3)?",
            "options": [
              "had caught",
              "caught",
              "catches",
              "has caught"
            ],
            "correctIndex": 0,
            "explanation": "Type 3 สมมติในอดีต (ตอนนั้นไม่ได้ตรวจจับ) หลัง If ใช้ Past Perfect -> 'had caught'"
          },
          {
            "question": "การละ If แล้วสลับกริยาช่วยขึ้นต้นประโยค (Inversion) ใน Type 3 ข้อใดถูกต้อง?",
            "options": [
              "Had we known about the memory leak, we would have postponed the release.",
              "If had we known about the memory leak, we would have postponed.",
              "Did we know about the memory leak, we would have postponed.",
              "Have we known about the memory leak, we would have postponed."
            ],
            "correctIndex": 0,
            "explanation": "Inversion Type 3: ตัด If ออก เอา Had ขึ้นต้น -> 'Had we known ..., we would have ...'"
          },
          {
            "question": "ประโยคแสดงความปรารถนาในปัจจุบัน 'I wish I ___ more experience with Kubernetes.' ควรเติมคำใด?",
            "options": [
              "had",
              "have",
              "will have",
              "am having"
            ],
            "correctIndex": 0,
            "explanation": "หลัง 'I wish' แสดงความปรารถนาที่ตรงข้ามความจริงปัจจุบัน ให้ใช้ Past Simple -> 'I wish I had...'"
          },
          {
            "question": "ประโยคแสดงความเสียดายในอดีต 'I wish we ___ the database migration last night.' ควรเติมคำใด?",
            "options": [
              "hadn't attempted",
              "didn't attempt",
              "haven't attempted",
              "wouldn't attempt"
            ],
            "correctIndex": 0,
            "explanation": "เสียดายเหตุการณ์ในอดีต (เมื่อคืนไม่น่าทำเลย) หลัง I wish ใช้ Past Perfect -> 'hadn't attempted'"
          },
          {
            "question": "ในรายงานสรุปสาเหตุความผิดพลาด (Post-mortem RCA) ความแตกต่างระหว่าง 'should have' และ 'could have' คือข้อใด?",
            "options": [
              "'should have + V.3' แปลว่า ควรจะทำแต่ไม่ได้ทำ ส่วน 'could have + V.3' แปลว่า มีความสามารถที่จะทำได้แต่ไม่ได้ทำ",
              "could have ใช้เฉพาะในอนาคต",
              "should have ใช้เฉพาะกับตัวเลข",
              "ไม่มีความแตกต่างกัน"
            ],
            "correctIndex": 0,
            "explanation": "'We should have added monitoring.' (เราควรใส่ระบบมอนิเตอร์ตั้งแต่แรกแต่ไม่ได้ใส่)"
          },
          {
            "question": "ประโยค Mixed Conditional (เหตุในอดีตส่งผลต่อสภาพปัจจุบัน) ข้อใดถูกต้อง?",
            "options": [
              "If we had migrated to microservices last year, our system would be more scalable today.",
              "If we migrated last year, our system will be scalable.",
              "If we had migrated last year, our system will have been scalable.",
              "If we migrate last year, our system would be scalable."
            ],
            "correctIndex": 0,
            "explanation": "If + Past Perfect (เหตุในอดีต), would + V.inf (ผลในปัจจุบันที่มี today กำกับ)"
          }
        ]
      }
    ]
  },
  {
    "id": "modal-verbs",
    "title": "Modal Verbs",
    "titleTh": "กริยาช่วย (Can, Could, May, Might, Must, Should, Would)",
    "icon": "🎛️",
    "badge": "Syntax",
    "description": "เจาะลึกกริยาช่วยบอกความสามารถ ความจำเป็น การขอร้องอย่างสุภาพ และระดับความเป็นไปได้ สรุปกฎเหล็กและการสื่อสารระดับสากล พร้อมแบบทดสอบ 10 ข้อ",
    "units": [
      {
        "id": "modal-verbs-core",
        "title": "Unit 1: Modal Verbs Mastery (กริยาช่วยและระดับความสุภาพในการทำงาน)",
        "summary": "เข้าใจเจตนา ความจำเป็น และการขอร้องอย่างสุภาพระดับสากล (Workplace & Tech)",
        "formula": "Subject + Modal Verb (Can / Could / Should / Must / Would) + Verb (Infinitive ไม่ผัน)",
        "explanation": "\n### 1. กฎเหล็กของ Modal Verbs (The Golden Rules)\nModal Verbs คือกริยาช่วยพิเศษที่นำมาวางหน้ากริยาแท้เพื่อ **\"บอกเจตนา อารมณ์ ความเป็นไปได้ หรือระดับความจำเป็น\"**\n- **กฎข้อที่ 1:** หลัง Modal Verb ต้องตามด้วย **Base Form (Infinitive ไม่ผัน)** เสมอ! ห้ามเติม -s, -es, -ed, -ing และไม่มี to\n  - *ถูก:* He **can configure** the server.\n  - *ผิด:* He cans configure / He can to configure.\n- **กฎข้อที่ 2:** ประธานทุกตัว (I, You, We, They, He, She, It) ใช้ Modal Verb รูปเดียวกันหมด ไม่มีการเติม -s ที่ตัว Modal\n\n---\n\n### 2. แยกตามเจตนาการใช้งาน (Core Functions)\n\n#### 1. Ability & Permission (ความสามารถและการขออนุญาต)\n- **Can:** สามารถทำได้ในปัจจุบัน / ขออนุญาตแบบเป็นกันเอง (*\"Can I check the logs?\"*)\n- **Could:** ความสามารถในอดีต หรือการขออนุญาต/ขอร้องอย่างสุภาพมาก (*\"Could you please review my PR?\"*)\n- **May:** ขออนุญาตอย่างเป็นทางการ (*\"May I deploy the patch now?\"*)\n\n#### 2. Advice & Obligation (คำแนะนำและความจำเป็น)\n- **Should:** ควรจะทำ (คำแนะนำที่ดี): *\"We should add automated tests.\"*\n- **Must:** ต้องทำ (กฎเหล็ก/ข้อบังคับสำคัญ): *\"All endpoints must use HTTPS.\"*\n- **Have to:** จำเป็นต้องทำ (ตามสถานการณ์หรือกฎระเบียบภายนอก): *\"I have to renew the SSL certificate.\"*\n\n> [!WARNING]\n> **จุดตายที่คนสับสนบ่อยที่สุด:**\n> - **Must not:** แปลว่า **\"ห้ามทำโดยเด็ดขาด\"** (Prohibition) -> *\"You must not commit secrets to Git.\"*\n> - **Don't have to:** แปลว่า **\"ไม่จำเป็นต้องทำ (จะทำหรือไม่ก็ได้)\"** (No obligation) -> *\"You don't have to join the optional call.\"*\n\n#### 3. Probability & Deduction (การคาดเดาความเป็นไปได้)\n- **Must be:** ต้องเป็นแบบนั้นแน่ๆ (มั่นใจ 95-100%): *\"The server is silent; it must be offline.\"*\n- **Can't be:** เป็นไปไม่ได้เด็ดขาด (มั่นใจเชิงปฏิเสธ): *\"The credentials can't be wrong; I just copied them.\"*\n- **Might / May:** อาจจะเกิดขึ้น (โอกาส 30-50%): *\"The deployment might cause brief latency.\"*\n\n---\n\n### 3. ตารางความสุภาพในการขอร้องในที่ทำงาน (Polite Requests)\n1. **เป็นกันเอง:** *Can you check this?*\n2. **สุภาพระดับมาตรฐาน:** *Could you please check this when you have time?*\n3. **สุภาพระดับสูงสุด:** *Would you mind checking this pull request?* (ตอบรับด้วย: *Not at all, I'd be happy to.*)\n",
        "examples": [
          {
            "en": "Could you please review my pull request when you have a moment?",
            "th": "รบกวนช่วยตรวจทาน Pull Request ให้หน่อยได้ไหมครับเมื่อคุณสะดวก",
            "cat": "Tech"
          },
          {
            "en": "We must backup the production database before running any migration.",
            "th": "พวกเราต้องสำรองข้อมูลฐานข้อมูลก่อนรันสคริปต์ไมเกรตเสมอ",
            "cat": "Tech"
          },
          {
            "en": "You don't have to attend the optional retrospective meeting today.",
            "th": "คุณไม่จำเป็นต้องเข้าร่วมการประชุมสรุปงานที่ไม่บังคับในวันนี้ก็ได้",
            "cat": "Daily"
          },
          {
            "en": "The microservice might experience brief latency during rollout.",
            "th": "ไมโครเซอร์วิสอาจจะมีความหน่วงสั้นๆ ระหว่างการทยอยติดตั้งระบบ",
            "cat": "Tech"
          }
        ],
        "quickCheck": [
          {
            "question": "กฎเหล็กข้อสำคัญที่สุดของ Modal Verbs (can, could, should, must, might, will, would) คือข้อใด?",
            "options": [
              "ต้องตามหลังด้วย Base Verb (Infinitive ไม่ผัน ไม่เติม s/es/ed/ing และไม่มี to) เสมอ",
              "ต้องเติม -s เมื่อประธานเป็น He/She/It",
              "ต้องมี to ตามหลังเสมอ",
              "ผันเป็นรูปอดีตด้วยการเติม -ed"
            ],
            "correctIndex": 0,
            "explanation": "กฎเหล็กสากล: Modal Verb + Base Verb (กริยารูปเดิมเปลือยๆ) เช่น 'He can code.' (ห้ามพูด He cans code หรือ He can to code)"
          },
          {
            "question": "ประโยคขอความช่วยเหลือในที่ทำงานอย่างสุภาพและเป็นมืออาชีพข้อใดดีที่สุด?",
            "options": [
              "Could you please review my pull request when you have a moment?",
              "Can you review my pull request now?",
              "You must review my pull request.",
              "Review my pull request please."
            ],
            "correctIndex": 0,
            "explanation": "'Could you please...?' มีระดับความสุภาพ นุ่มนวล และเป็นมืออาชีพมากกว่า Can you ในบริบทการทำงานร่วมกัน"
          },
          {
            "question": "ความแตกต่างระหว่าง 'must not' และ 'don't have to' คือข้อใด?",
            "options": [
              "'must not' แปลว่า ห้ามทำเด็ดขาด ส่วน 'don't have to' แปลว่า ไม่จำเป็นต้องทำ (จะทำหรือไม่ทำก็ได้)",
              "'must not' แปลว่า ไม่จำเป็นต้องทำ ส่วน 'don't have to' แปลว่า ห้ามทำ",
              "มีความหมายเหมือนกัน 100%",
              "'don't have to' ใช้เฉพาะกับสัตว์"
            ],
            "correctIndex": 0,
            "explanation": "ข้อแตกต่างที่ออกสอบบ่อยที่สุด: Must not = ห้ามทำโดยเด็ดขาด (Prohibition) vs Don't have to = ไม่จำเป็นต้องทำ (No obligation)"
          },
          {
            "question": "ควรเติม Modal Verb ใด: 'You ___ commit passwords to GitHub repositories. It is strictly forbidden.'?",
            "options": [
              "must not",
              "don't have to",
              "might not",
              "should"
            ],
            "correctIndex": 0,
            "explanation": "เป็นข้อห้ามเด็ดขาดและมีผลเสียร้ายแรง (strictly forbidden) จึงต้องใช้ 'must not'"
          },
          {
            "question": "ควรเติม Modal Verb ใด: 'The database server ___ be down. The CPU and memory metrics look completely normal.'?",
            "options": [
              "can't",
              "must",
              "should",
              "might"
            ],
            "correctIndex": 0,
            "explanation": "การคาดคะเนเชิงปฏิเสธอย่างมั่นใจเต็มร้อย (Deduction) ว่า 'เป็นไปไม่ได้ที่จะพัง' ใช้ 'can't be'"
          },
          {
            "question": "ประโยค 'Would you mind checking this log file?' ผู้ตอบหากยินดีที่จะช่วย ควรตอบว่าอย่างไร?",
            "options": [
              "Not at all, I'd be happy to help.",
              "Yes, I mind.",
              "Yes, of course I mind.",
              "Yes, I would."
            ],
            "correctIndex": 0,
            "explanation": "คำถาม 'Would you mind...?' (คุณจะรังเกียจไหมถ้า...) หากยินดีช่วย ต้องตอบปฏิเสธว่า 'Not at all.' (ไม่รังเกียจเลย ยินดีช่วยครับ)"
          },
          {
            "question": "ควรเติม Modal Verb ใด: 'We ___ upgrade the staging environment before testing the new release.' (คำแนะนำที่ดี)?",
            "options": [
              "should",
              "must not",
              "can't",
              "might not"
            ],
            "correctIndex": 0,
            "explanation": "การให้คำแนะนำที่ควรทำ (Recommendation / Advice) ใช้ 'should' (ควรจะ)"
          },
          {
            "question": "ควรเติม Modal Verb ใด: 'Take an umbrella with you; it ___ rain later this evening.' (โอกาสเกิดประมาณ 30-40%)?",
            "options": [
              "might",
              "must",
              "shall",
              "has to"
            ],
            "correctIndex": 0,
            "explanation": "การคาดเดาความน่าจะเป็นที่มีโอกาสเกิดขึ้นไม่สูงมาก (Possibility) นิยมใช้ 'might' หรือ 'may'"
          },
          {
            "question": "ประโยคใดใช้ Modal Verb ผิดหลักไวยากรณ์?",
            "options": [
              "He must to attend the security training.",
              "He must attend the security training.",
              "He can configure Kubernetes.",
              "He should review the logs."
            ],
            "correctIndex": 0,
            "explanation": "ผิดข้อแรกเต็มๆ เพราะ Modal Verb (must) ห้ามมี 'to' ตามหลังเด็ดขาด (ที่ถูกคือ He must attend...)"
          },
          {
            "question": "ประโยค 'You don't have to attend the optional meeting.' มีความหมายตรงกับข้อใด?",
            "options": [
              "You are not required to attend, but you can if you want.",
              "You are strictly forbidden from attending.",
              "You must attend.",
              "You cannot attend."
            ],
            "correctIndex": 0,
            "explanation": "'don't have to' = ไม่บังคับ ไม่จำเป็นต้องเข้า แต่ถ้าอยากเข้าก็เข้าได้"
          }
        ]
      }
    ]
  },
  {
    "id": "comprehensive-capstone",
    "title": "Comprehensive Capstone",
    "titleTh": "รวมแบบทดสอบไวยากรณ์ท้ายบท & สรุปภาพรวม (Final Exam)",
    "icon": "🏆",
    "badge": "Advanced",
    "description": "บทความสรุป 5 กฎเหล็กไวยากรณ์ภาษาอังกฤษ และแบบทดสอบประมวลผลความรู้ 10 ข้อ ท้ายบท ครอบคลุมเนื้อหาสำคัญทั้งหมดเพื่อความมั่นใจ 100%",
    "units": [
      {
        "id": "grammar-capstone-test",
        "title": "Unit 1: Final Grammar Mastery Exam (รวมแบบทดสอบ 10 ข้อ ท้ายบท)",
        "summary": "ทบทวนสรุปภาพรวมโครงสร้างภาษาอังกฤษ พร้อมทำแบบทดสอบประมวลผลความรู้ 10 ข้อ ท้ายบท",
        "formula": "Core Grammar Mastery = Accuracy + Context + Confidence",
        "explanation": "\n### 🎓 ยินดีต้อนรับสู่บทความสรุปและแบบทดสอบประมวลผลความรู้ท้ายบท!\nหลังจากที่คุณได้เรียนรู้ไวยากรณ์ครบทุกหมวดหมู่ ตั้งแต่ชนิดของคำ (Parts of Speech), การชี้เฉพาะ (Determiners), กาลเวลาทั้ง 12 Tenses, โครงสร้างประโยค, การถาม, เงื่อนไข (If-Clauses) ไปจนถึง Modal Verbs \n\nนี่คือ **5 กฎเหล็กที่ทรงพลังที่สุด** ที่คุณต้องพกติดตัวไปใช้ในการเขียนและพูดภาษาอังกฤษจริง:\n\n---\n\n### 1. กฎ Subject-Verb Agreement (ประธานและกริยาต้องสอดคล้องกัน)\n- อย่าหลงกลส่วนขยาย: มองหา **\"ประธานแท้\"** ให้เจอเสมอ\n  - *The list of 500 servers **is** ready.* (ประธานคือ The list ไม่ใช่ servers)\n- Indefinite Pronouns เป็นเอกพจน์เสมอ: *Everyone **has** a login account.*\n\n---\n\n### 2. กฎการเลือก Tense (Past Simple vs Present Perfect)\n- **Past Simple (V.2):** ใช้เมื่อมี **เวลาในอดีตเจาะจง** (yesterday, last year, two hours ago)\n- **Present Perfect (have/has + V.3):** ใช้เมื่อ **ผลลัพธ์ยังส่งผลถึงปัจจุบัน** หรือเชื่อมโยงอดีตถึงตอนนี้ด้วย **since / for**\n  - *We deployed the fix yesterday.* (อดีตจบแล้ว)\n  - *We have deployed 10 versions this month.* (เดือนนี้ยังไม่จบ)\n\n---\n\n### 3. กฎ Indirect Questions (คำถามทางอ้อมต้องเรียงแบบบอกเล่า)\n- เมื่อนำคำถามไปซ้อนหลังวลีสุภาพ (Could you tell me... / Do you know...)\n- **ต้องเรียงแบบบอกเล่า (Subject + Verb) เสมอ** และตัดกริยาช่วย do/does ออก\n  - *Could you tell me **where the server is**?* (ห้าม where is the server)\n\n---\n\n### 4. กฎ If-Clauses (ห้ามมี will ในประโยคหลัง If)\n- Type 1: *If it **rains**, the event will be postponed.* (ห้าม If it will rain)\n- Type 2: *If I **were** you, I would take the offer.* (สมมติตรงข้ามความจริงปัจจุบัน ใช้ were)\n- Type 3: *If we **had tested** earlier, we would not have caused the outage.* (เสียดายในอดีต)\n\n---\n\n### 5. กฎ Modal Verbs (ตามด้วย Base Verb เปลือยๆ)\n- หลัง can, could, may, might, must, should, would -> ตามด้วย **Infinitive ไม่ผัน** เสมอ\n- ระวังความแตกต่างระหว่าง **Must not (ห้ามเด็ดขาด)** และ **Don't have to (ไม่จำเป็นต้องทำ)**\n\n---\n\n### 📝 แบบทดสอบประมวลผลความรู้ 10 ข้อ ท้ายบท\nด้านล่างนี้คือแบบทดสอบ 10 ข้อที่คัดสรรจากสถานการณ์จริง ทดสอบความแม่นยำของคุณได้ทันทีครับ!\n",
        "examples": [
          {
            "en": "The list of microservices is updated every morning by the CI pipeline.",
            "th": "รายชื่อไมโครเซอร์วิสได้รับการอัปเดตทุกเช้าโดยไปป์ไลน์ CI (S-V Agreement & Passive)",
            "cat": "Tech"
          },
          {
            "en": "If we had monitored memory usage, the outage could have been prevented.",
            "th": "หากเรามอนิเตอร์การใช้แรมตั้งแต่แรก ระบบก็คงไม่ล่ม (Conditional Type 3)",
            "cat": "Tech"
          },
          {
            "en": "Could you please tell me where the configuration file is located?",
            "th": "ช่วยบอกผมหน่อยได้ไหมครับว่าไฟล์คอนฟิกเก็บอยู่ที่ไหน (Indirect Question)",
            "cat": "Daily"
          },
          {
            "en": "Sensitive customer data must be encrypted at rest and in transit.",
            "th": "ข้อมูลลูกค้าที่สำคัญต้องถูกเข้ารหัสเสมอทั้งขณะพักและส่งผ่านเครือข่าย (Modal Passive)",
            "cat": "Tech"
          }
        ],
        "quickCheck": [
          {
            "question": "[Parts of Speech & S-V Agreement] ประโยคใดถูกต้องตามหลักไวยากรณ์สากล?",
            "options": [
              "The list of all registered developers is updated every morning.",
              "The list of all registered developers are updated every morning.",
              "The list of all registered developers were updated every morning.",
              "The list of all registered developers have been updated every morning."
            ],
            "correctIndex": 0,
            "explanation": "ประธานที่แท้จริงคือ 'The list' (เอกพจน์) ส่วน 'of all registered developers' เป็น prepositional phrase กริยาจึงต้องใช้ 'is'"
          },
          {
            "question": "[Tenses Comparison] 'We ___ this microservices architecture since 2023, and it ___ completely stable.' ควรเติมกริยาคู่ใด?",
            "options": [
              "have used / has remained",
              "used / remained",
              "are using / was remaining",
              "had used / remained"
            ],
            "correctIndex": 0,
            "explanation": "มีคำว่า 'since 2023' (ตั้งแต่ปี 2023 จนถึงปัจจุบัน) ต้องใช้ Present Perfect ทั้งสองส่วน: 'have used / has remained'"
          },
          {
            "question": "[Determiners] ควรเติม Determiners ใด: 'There is ___ latency and ___ errors during the stress test.'?",
            "options": [
              "little / few",
              "few / little",
              "much / much",
              "many / many"
            ],
            "correctIndex": 0,
            "explanation": "latency เป็นนามนับไม่ได้ ใช้ 'little' (เหลือน้อยมาก) ส่วน errors เป็นนามนับได้พหูพจน์ ใช้ 'few' (พบน้อยมาก)"
          },
          {
            "question": "[Questions] ประโยคคำถามทางอ้อม (Indirect Question) ข้อใดถูกต้อง?",
            "options": [
              "Could you please tell me where the configuration file is located?",
              "Could you please tell me where is the configuration file located?",
              "Could you please tell me where does the configuration file locate?",
              "Could you please tell me where is located the configuration file?"
            ],
            "correctIndex": 0,
            "explanation": "Indirect Question ต้องเรียงตามลำดับประโยคบอกเล่า: where + Subject (the configuration file) + Verb (is located)"
          },
          {
            "question": "[Conditionals] 'If the incident response team ___ earlier, the data corruption ___ prevented.' ควรเติมกริยารูปใด (Type 3)?",
            "options": [
              "had intervened / could have been",
              "intervened / could be",
              "intervenes / will be",
              "intervened / would have"
            ],
            "correctIndex": 0,
            "explanation": "Type 3 เสียดายเหตุการณ์ในอดีต: If + had + V.3, could/would have been + V.3 (Passive)"
          },
          {
            "question": "[Relative Clause] 'Kubernetes, ___ was originally designed by Google, automates container deployment.' ควรเติมคำใด?",
            "options": [
              "which",
              "that",
              "who",
              "whom"
            ],
            "correctIndex": 0,
            "explanation": "Non-defining clause มีคอมมาคั่น และขยายสิ่งของ/ระบบ 'ห้ามใช้ that' เด็ดขาด ต้องใช้ 'which'"
          },
          {
            "question": "[Passive Voice] 'Critical database transactions must ___ before acknowledgment.' ควรเติมกริยารูปใด?",
            "options": [
              "be committed",
              "committed",
              "is committed",
              "have committed"
            ],
            "correctIndex": 0,
            "explanation": "Modal Passive: must + be + V.3 -> 'must be committed'"
          },
          {
            "question": "[Subjunctive] 'The security policy mandates that every employee ___ two-factor authentication.' ควรเติมกริยารูปใด?",
            "options": [
              "enable",
              "enables",
              "enabled",
              "will enable"
            ],
            "correctIndex": 0,
            "explanation": "Mandative Subjunctive หลังกริยา mandates that: ประธานทุกตัวตามด้วย Base Verb เสมอ -> 'enable' (ไม่เติม -s)"
          },
          {
            "question": "[Reported Speech] Alex said: 'I will finish the deployment tonight.' เมื่อเปลี่ยนเป็น Reported Speech จะได้ข้อใด?",
            "options": [
              "Alex said that he would finish the deployment that night.",
              "Alex said that he will finish the deployment tonight.",
              "Alex said that he finished the deployment tonight.",
              "Alex said that he had finished the deployment that night."
            ],
            "correctIndex": 0,
            "explanation": "will เปลี่ยนเป็น would, tonight เปลี่ยนเป็น that night ตามกฎ Backshift ของ Reported Speech"
          },
          {
            "question": "[Modal Verbs] 'You ___ modify configuration files in production directly. Always use the CI/CD pipeline.' ควรเติมคำใด?",
            "options": [
              "must not",
              "don't have to",
              "might",
              "can"
            ],
            "correctIndex": 0,
            "explanation": "เป็นข้อห้ามเด็ดขาดเพื่อป้องกันระบบพัง (Strict prohibition) ต้องใช้ 'must not'"
          }
        ]
      }
    ]
  }
];
