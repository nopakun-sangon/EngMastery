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
        "summary": "เจาะลึกคำนาม (Countable/Uncountable/Plural) และสรรพนามแม่บท 5 รูปแบบ พร้อมจุดระวังที่คนใช้ผิดบ่อย",
        "formula": "Subject (Noun/Pronoun) + Verb + Object (Noun/Pronoun)",
        "explanation": "\n### 1. Noun (คำนาม) คืออะไรและทำหน้าที่อะไรในประโยค?\nคำนาม (Noun) คือ **\"ชื่อเรียก\"** ของทุกสิ่งทุกอย่างรอบตัวเรา ไม่ว่าจะเป็นบุคคล สัตว์ สิ่งของ สถานที่ ระบบดิจิทัล ข้อมูล หรือแนวคิดนามธรรมที่จับต้องไม่ได้\nคำนามทำหน้าที่สำคัญ 4 ประการในโครงสร้างประโยคภาษาอังกฤษ:\n1. **Subject (ประธานของประโยค):** อยู่หน้ากริยาหลัก เช่น *\"The server restarts automatically.\"*\n2. **Direct Object (กรรมตรง):** สิ่งหรือคนที่ถูกกระทำโดยตรง อยู่หลังกริยา เช่น *\"The engineer deployed the application.\"*\n3. **Indirect Object (กรรมรอง):** ผู้รับผลจากการกระทำ อยู่ระหว่างกริยาและกรรมตรง เช่น *\"She sent the client an email.\"*\n4. **Object of Preposition (กรรมของบุพบท):** คำนามที่ตามหลังบุพบท เช่น *\"We stored logs in the database.\"*\n\n### 2. การจำแนกประเภทคำนาม 4 มิติสำคัญ (Noun Classifications)\n\n#### มิติที่ 1: Common Nouns vs Proper Nouns (นามทั่วไป vs นามเฉพาะ)\n- **Common Noun (นามทั่วไป):** ใช้เรียกสิ่งทั่วไป ไม่ชี้เฉพาะ เขียนด้วยตัวพิมพ์เล็กเสมอ เช่น `developer`, `computer`, `city`, `system`\n- **Proper Noun (นามเฉพาะ):** ใช้เรียกชื่อเฉพาะของคน สถานที่ บริษัท ซอฟต์แวร์ หรือองค์กร **ต้องขึ้นต้นด้วยตัวพิมพ์ใหญ่ (Capital Letter) เสมอ** เช่น `Sarah`, `London`, `Google`, `Kubernetes`, `PostgreSQL`\n- *\"Sarah deployed PostgreSQL on Google Cloud.\"* (Sarah, PostgreSQL และ Google Cloud เป็น Proper Noun จึงต้องขึ้นต้นด้วยตัวพิมพ์ใหญ่)\n\n#### มิติที่ 2: Countable vs Uncountable Nouns (นามนับได้ vs นามนับไม่ได้)\n💡 **จุดสังเกตสำคัญ:** เป็นข้อสอบและจุดผิดที่พบบ่อยที่สุดในการทำงานและการเขียนภาษาอังกฤษ!\n- **Countable Noun (นามนับได้):**\n  - **รูปเอกพจน์ (Singular):** ห้ามปล่อยโดดเดี่ยว ต้องมี `a`, `an`, หรือ `the` นำหน้าเสมอ เช่น `a laptop`, `an issue`, `the server`\n  - **รูปพหูพจน์ (Plural):** เติม `-s` หรือ `-es` เพื่อบอกว่ามีหลายชิ้น เช่น `three laptops`, `many issues`, `servers`\n- **Uncountable Noun (นามนับไม่ได้):** สิ่งที่ไม่สามารถนับเป็นชิ้นๆ ได้ เป็นกลุ่มก้อน ของเหลว หรือแนวคิดนามธรรม\n  - ❌ **กฎเหล็ก 1:** ห้ามเติม `-s` หรือ `-es` ท้ายคำเด็ดขาด\n  - ❌ **กฎเหล็ก 2:** ห้ามใช้ `a` หรือ `an` นำหน้าเด็ดขาด\n  - ✔️ **กฎเหล็ก 3:** เมื่อทำหน้าที่เป็นประธาน ต้องใช้กริยาเอกพจน์ (Singular Verb เช่น is, has, verb เติม s)\n\n| คำศัพท์นามนับไม่ได้ (Tech & Daily) | ความหมาย | ❌ รูปที่ห้ามใช้ (ผิดไวยากรณ์) | ✔️ วิธีบอกปริมาณที่ถูกต้อง |\n| `information` | ข้อมูล | an information / informations | some information / a piece of information |\n| `software` | ซอฟต์แวร์ | a software / softwares | software / software tools / applications |\n| `equipment` | อุปกรณ์เครื่องมือ | an equipment / equipments | equipment / pieces of equipment |\n| `advice` | คำแนะนำ | an advice / advices | some advice / a piece of advice |\n| `feedback` | คำติชม/ผลตอบรับ | a feedback / feedbacks | some feedback / valuable feedback |\n| `hardware` | อุปกรณ์ฮาร์ดแวร์ | a hardware / hardwares | hardware components / devices |\n| `progress` | ความคืบหน้า | a progress / progresses | good progress / steady progress |\n| `knowledge` | องค์ความรู้ | a knowledge / knowledges | specialized knowledge / deep knowledge |\n\n#### มิติที่ 3: Regular vs Irregular Plurals (กฎการเปลี่ยนรูปพหูพจน์)\n| รูปแบบการเปลี่ยน | กฎเกณฑ์ | รูปเอกพจน์ (Singular) | รูปพหูพจน์ (Plural) |\n| ทั่วไป | เติม `-s` ท้ายคำ | `server`, `project`, `client` | `servers`, `projects`, `clients` |\n| ลงท้าย -s, -sh, -ch, -x, -z | เติม `-es` | `process`, `branch`, `box` | `processes`, `branches`, `boxes` |\n| พยัญชนะ + y | เปลี่ยน y เป็น `-ies` | `repository`, `policy`, `city` | `repositories`, `policies`, `cities` |\n| สระ (a,e,i,o,u) + y | เติม `-s` ได้เลย | `key`, `delay`, `day` | `keys`, `delays`, `days` |\n| ลงท้าย -f หรือ -fe | เปลี่ยนเป็น `-ves` | `leaf`, `life`, `half` | `leaves`, `lives`, `halves` |\n| เปลี่ยนรูปสระภายใน | Irregular Vowels | `man`, `woman`, `foot`, `tooth` | `men`, `women`, `feet`, `teeth` |\n| คำยืมกรีก/ละติน (Tech/Academic) | -is เปลี่ยนเป็น `-es`, -on เปลี่ยนเป็น `-a` | `analysis`, `basis`, `criterion` | `analyses`, `bases`, `criteria` |\n| รูปคงเดิมทั้งเอกและพหูพจน์ | No Change | `species`, `series`, `data` | `species`, `series`, `data` |\n\n#### มิติที่ 4: Collective Noun (คำนามกลุ่มก้อน)\nคำนามที่เรียกกลุ่มคน เช่น `team`, `committee`, `family`, `staff`, `audience`\n- หากมองเป็น **หน่วยเดียวกัน (Single Unit)** ➔ ใช้กริยาเอกพจน์: *\"The DevOps team has completed the migration.\"*\n- หากมอง **สมาชิกแต่ละคนแยกย้ายกันทำ (Individual Members)** ➔ ใช้กริยาพหูพจน์: *\"The team are working on their separate tasks.\"*\n\n---\n\n### 3. Pronoun (คำสรรพนาม) คืออะไร?\nคำสรรพนาม (Pronoun) คือคำที่ใช้ **\"แทนคำนาม\"** เพื่อหลีกเลี่ยงการพูดชื่อเดิมซ้ำๆ ช่วยให้ประโยคกระชับและลื่นไหลเป็นธรรมชาติ\n\n#### ตารางแม่บทสรรพนาม 5 รูปแบบ (Master Pronoun Matrix)\n| Person (บุรุษ) | Subject (ประธาน) | Object (กรรม) | Possessive Adj. (+Noun) | Possessive Pronoun (วางเดี่ยว) | Reflexive (สะท้อนกลับ) |\n| บุรุษที่ 1 เอกพจน์ | `I` (ฉัน) | `me` | `my` (+นาม) | `mine` | `myself` (ตัวฉันเอง) |\n| บุรุษที่ 1 พหูพจน์ | `we` (พวกเรา) | `us` | `our` (+นาม) | `ours` | `ourselves` (พวกเราเอง) |\n| บุรุษที่ 2 (เอก/พหู) | `you` (คุณ/พวกคุณ) | `you` | `your` (+นาม) | `yours` | `yourself` / `yourselves` |\n| บุรุษที่ 3 เพศชาย | `he` (เขา) | `him` | `his` (+นาม) | `his` | `himself` |\n| บุรุษที่ 3 เพศหญิง | `she` (เธอ) | `her` | `her` (+นาม) | `hers` | `herself` |\n| บุรุษที่ 3 สิ่งของ/ระบบ | `it` (มัน/ระบบ) | `it` | `its` (+นาม) | `its` (ไม่นิยมใช้) | `itself` |\n| บุรุษที่ 3 พหูพจน์ | `they` (พวกเขา/พวกมัน) | `them` | `their` (+นาม) | `theirs` | `themselves` |\n\n#### เจาะลึกความแตกต่างที่คนมักสับสน:\n1. **Possessive Adjective vs Possessive Pronoun:**\n   - **Possessive Adjective (`my`, `your`, `our`, `their`, `his`, `her`):** ต้องมีคำนามตามหลังเสมอ เช่น *\"This is my laptop.\"*\n   - **Possessive Pronoun (`mine`, `yours`, `ours`, `theirs`, `hers`):** วางโดดเดี่ยวท้ายประโยคได้เลย ห้ามใส่คำนามตามหลังเด็ดขาด เช่น *\"This laptop is mine.\"* (ไม่ใช่ *mine laptop)\n2. **Reflexive Pronoun (`myself`, `itself`, `themselves`):**\n   - ใช้เมื่อ **ประธานและกรรมเป็นบุคคล/สิ่งเดียวกัน**: *\"The cluster automatically heals itself.\"*\n   - ใช้เพื่อ **เน้นย้ำประธาน (Emphatic)**: *\"The CTO himself approved the release.\"*\n3. **Indefinite Pronouns (สรรพนามไม่เจาะจง):**\n   - เช่น `everyone`, `everybody`, `someone`, `nobody`, `everything`, `something`\n   - 💡 **กฎสำคัญ:** แม้ความหมายจะฟังดูเหมือนมีหลายคน แต่ในทางไวยากรณ์ถือเป็น **เอกพจน์ (Singular)** เสมอ! กริยาต้องผันตามประธานเอกพจน์ เช่น:\n   - *\"Everyone is excited about the new release.\"* (ใช้ `is` ห้ามใช้ are)\n   - *\"Nobody knows the root cause of this incident.\"* (ใช้ `knows` เติม s)\n\n---\n\n### 4. จุดผิดที่พบบ่อยและข้อควรระวัง (Common Pitfalls)\n⚠️ **ข้อควรระวัง 1: สับสนระหว่าง `its` และ `it's`**\n- `it's` (มี apostrophe) = ย่อมาจาก `it is` หรือ `it has` เช่น *\"It's a high-priority bug.\"*\n- `its` (ไม่มี apostrophe) = แสดงความเป็นเจ้าของของระบบ/สิ่งของ เช่น *\"The server restarted its background service.\"*\n\n⚠️ **ข้อควรระวัง 2: สรรพนามที่อยู่หลังคำบุพบท (Preposition + Object Pronoun)**\n- หลังคำบุพบท เช่น `to`, `for`, `with`, `between`, `about` ต้องใช้รูปกรรม (Object Pronoun) เสมอ\n- *\"Between you and me, the deployment was delayed.\"* ✔️ (ไม่ใช่ *Between you and I ❌)\n- *\"The architect explained the architecture to him and us.\"* ✔️\n\n⚠️ **ข้อควรระวัง 3: เผลอเติม -s ให้คำนามนับไม่ได้ (Uncountable Nouns)**\n- ❌ ห้ามพูด: *We received many feedbacks and advices.*\n- ✔️ ต้องพูด: *\"We received a lot of feedback and advice.\"*\n",
        "examples": [
          {
            "en": "The microservice restarts itself whenever memory usage exceeds ninety percent.",
            "th": "ไมโครเซอร์วิสจะรีสตาร์ทตัวเองทุกครั้งที่การใช้งานหน่วยความจำเกินเก้าสิบเปอร์เซ็นต์",
            "cat": "Tech"
          },
          {
            "en": "Sarah bought a new smartphone because hers stopped working during the trip.",
            "th": "ซาร่าซื้อสมาร์ตโฟนเครื่องใหม่เพราะเครื่องของเธอหยุดทำงานระหว่างการเดินทาง",
            "cat": "Daily"
          },
          {
            "en": "The senior architect shared valuable advice on database partitioning.",
            "th": "สถาปนิกอาวุโสได้แบ่งปันคำแนะนำที่มีค่ายิ่งเกี่ยวกับการทำ Partitioning บนฐานข้อมูล",
            "cat": "Tech"
          },
          {
            "en": "Everyone in our department is invited to the company celebration dinner.",
            "th": "ทุกคนในแผนกของเราได้รับเชิญไปร่วมงานเลี้ยงอาหารค่ำฉลองความสำเร็จของบริษัท",
            "cat": "Daily"
          },
          {
            "en": "Our engineering team updated its incident response policy yesterday.",
            "th": "ทีมวิศวกรของเราได้อัปเดตนโยบายการรับมือกับอุบัติการณ์ของทีมไปเมื่อวานนี้",
            "cat": "Tech"
          },
          {
            "en": "Between you and me, I think the project deadline is too tight.",
            "th": "รู้กันแค่ระหว่างคุณกับฉันนะ ฉันคิดว่ากำหนดส่งโปรเจกต์กระชั้นชิดเกินไปหน่อย",
            "cat": "Daily"
          },
          {
            "en": "The DevOps engineers deployed three new microservices to Kubernetes.",
            "th": "วิศวกร DevOps ได้ติดตั้งไมโครเซอร์วิสใหม่สามตัวขึ้นสู่ระบบ Kubernetes",
            "cat": "Tech"
          },
          {
            "en": "He lost his access badge, so the security guard gave him a temporary one.",
            "th": "เขาทำบัตรผ่านเข้าตึกหาย เจ้าหน้าที่รักษาความปลอดภัยจึงออกบัตรชั่วคราวให้เขา",
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
        "summary": "เจาะลึกคำกริยา (Action, Linking, Transitive) และคำกริยาวิเศษณ์ขยายกริยา พร้อมตำแหน่ง Adverb of Frequency",
        "formula": "Subject + (Adverb of Frequency) + Verb + (Object) + (Adverb of Manner/Place/Time)",
        "explanation": "\n### 1. Verb (คำกริยา) - เสาหลักที่ขับเคลื่อนทุกประโยค\nในภาษาอังกฤษ ประโยคอาจละประธานได้ในประโยคคำสั่ง แต่ **\"จะขาดคำกริยาไม่ได้เด็ดขาด\"**! กริยาเป็นตัวบอกการกระทำ สถานะ หรือการดำรงอยู่ของประธาน\n\n#### 1) Action Verbs (กริยาแสดงอาการ)\nแสดงการกระทำทางกายภาพหรือความคิด:\n- **Transitive Verbs (กริยาต้องการกรรม):** ต้องมีกรรมมารับ ไม่อย่างนั้นความหมายจะไม่สมบูรณ์ เช่น `deploy`, `fix`, `build`, `send`\n  - *\"The engineer fixed the critical bug.\"* (fixed อะไร? ➔ fixed the bug)\n- **Intransitive Verbs (กริยาไม่ต้องการกรรม):** ประธานทำเอง จบความสมบูรณ์ในตัวเอง เช่น `sleep`, `arrive`, `crash`, `fail`\n  - *\"The application crashed.\"* (จบประโยคได้เลย ไม่ต้องมีกรรม)\n\n#### 2) Linking Verbs (กริยาเชื่อมบอกสภาพ)\nเชื่อมประธานเข้ากับ **Subject Complement (ส่วนเติมเต็มประธาน ซึ่งมักเป็น Adjective)** เพื่อบอกคุณลักษณะ ไม่ได้แสดงการกระทำ:\n- ได้แก่: `is / am / are / was / were`, `become`, `seem`, `appear`, `look`, `feel`, `remain`, `stay`\n- *\"The production environment remains stable.\"* (stable เป็น Adjective ขยายประธาน environment)\n- ⚠️ **ข้อควรระวัง:** หลัง Linking Verb ต้องตามด้วย **Adjective** เสมอ ห้ามตามด้วย Adverb เช่น *\"The food smells delicious.\"* (ไม่ใช่ *deliciously)\n\n---\n\n### 2. Adverb (คำกริยาวิเศษณ์) - เครื่องขยายรายละเอียด\nAdverb ทำหน้าที่ขยาย **Verb (กริยา)**, **Adjective (คุณศัพท์)**, หรือ **Adverb ตัวอื่น** เพื่อตอบคำถาม 4 ประการ:\n1. **How (ทำอย่างไร):** `carefully`, `smoothly`, `efficiently`, `fast`\n2. **Where (ที่ไหน):** `here`, `there`, `everywhere`, `remotely`\n3. **When (เมื่อไร):** `yesterday`, `now`, `soon`, `already`\n4. **How often (บ่อยแค่ไหน):** `always`, `often`, `rarely`, `never`\n\n#### ตารางประเภท Adverb และตำแหน่งการวางในประโยค\n| ประเภท Adverb | ตัวอย่างคำศัพท์ | กฎตำแหน่งการวางในประโยค | ตัวอย่างประโยคจริง |\n| Adverb of Manner (บอกอาการ) | `quickly`, `safely`, `successfully` | วางท้ายประโยค หรือหลังกรรม | *\"The script executed successfully.\"* |\n| Adverb of Frequency (บอกความถี่) | `always`, `usually`, `sometimes`, `never` | หน้ากริยาแท้ / หลัง Verb to be | *\"We always backup our databases.\"* |\n| Adverb of Degree (บอกระดับ) | `very`, `extremely`, `quite`, `too` | วางหน้า Adjective หรือ Adverb ที่ต้องการขยาย | *\"The response time is extremely fast.\"* |\n| Adverb of Time (บอกเวลา) | `today`, `recently`, `tomorrow` | วางต้นหรือท้ายประโยค | *\"We released the patch yesterday.\"* |\n\n---\n\n### 3. จุดกับดักที่คนมักผิดบ่อย (Adverb Pitfalls)\n💡 **คำที่ลงท้ายด้วย -ly แต่เป็น Adjective (ไม่ใช่ Adverb!):**\n- `friendly` (เป็นมิตร), `costly` (ราคาแพง), `timely` (ตรงเวลา), `orderly` (เป็นระเบียบ)\n- *\"He is a friendly manager.\"* (friendly เป็น Adjective ขยาย manager)\n- หากต้องการใช้เป็น Adverb ต้องพูดว่า: *\"in a friendly manner\"*\n\n⚠️ **คำที่รูปเดิมทั้ง Adjective และ Adverb (ห้ามเติม -ly!):**\n| คำศัพท์ | รูป Adjective (คุณศัพท์) | รูป Adverb (กริยาวิเศษณ์) | ❌ รูปที่ผิด (ห้ามใช้) |\n| `fast` | a fast network | runs fast | ~~fastly~~ |\n| `hard` | a hard problem | works hard | ~~hardly~~ (hardly แปลว่า แทบจะไม่) |\n| `late` | a late train | arrived late | ~~lately~~ (lately แปลว่า เมื่อเร็วๆ นี้) |\n| `early` | an early meeting | woke up early | ~~earlyly~~ |\n",
        "examples": [
          {
            "en": "The database cluster responds very quickly under heavy load.",
            "th": "คลัสเตอร์ฐานข้อมูลตอบสนองได้อย่างรวดเร็วมากแม้จะอยู่ภายใต้โหลดที่หนักหน่วง",
            "cat": "Tech"
          },
          {
            "en": "She speaks English fluently during international client meetings.",
            "th": "เธอพูดภาษาอังกฤษได้อย่างคล่องแคล่วระหว่างการประชุมกับลูกค้าระดับนานาชาติ",
            "cat": "Daily"
          },
          {
            "en": "We always backup the production data before initiating any major migration.",
            "th": "พวกเราสำรองข้อมูลโปรดักชันเสมอก่อนเริ่มการย้ายระบบครั้งใหญ่ทุกครั้ง",
            "cat": "Tech"
          },
          {
            "en": "He carefully verified the flight details before confirming his reservation.",
            "th": "เขาตรวจสอบรายละเอียดเที่ยวบินอย่างรอบคอบก่อนที่จะยืนยันการจอง",
            "cat": "Daily"
          },
          {
            "en": "The background worker process crashed unexpectedly due to memory exhaustion.",
            "th": "โพรเซสทำงานเบื้องหลังหยุดทำงานกะทันหันเนื่องจากหน่วยความจำไม่เพียงพอ",
            "cat": "Tech"
          },
          {
            "en": "Our team lead is always friendly and approachable to new developers.",
            "th": "หัวหน้าทีมของเราเป็นมิตรและเปิดรับนักพัฒนาใหม่อยู่เสมอ",
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
        "summary": "ทำความเข้าใจคำคุณศัพท์บอกลักษณะ (Adjectives) และคำบุพบทบอกพิกัดเวลาและสถานที่ (Prepositions of Time & Place)",
        "formula": "Adjective + Noun / Linking Verb + Adjective | Preposition + Noun Phrase",
        "explanation": "\n### 1. Adjective (คำคุณศัพท์) คืออะไร?\nAdjective มีหน้าที่เดียวคือ **\"ขยายคำนาม (Noun)\"** หรือสรรพนาม เพื่อบอกว่าคำนามนั้นมีลักษณะอย่างไร ขนาดไหน สีอะไร หรือรู้สึกอย่างไร\n\n#### 2 ตำแหน่งสำคัญของ Adjective ในประโยค:\n1. **วางหน้าคำนามโดยตรง (Attributive Position):**\n   - *\"We deployed a **scalable** architecture.\"* (scalable ขยาย architecture)\n   - *\"She bought a **comfortable** office chair.\"*\n2. **วางหลัง Linking Verb (Predicative Position):**\n   - *\"The latency is **high** today.\"* (high ขยายประธาน latency ผ่าน is)\n   - *\"The security audit seemed **thorough**.\"*\n\n#### ตารางลำดับการเรียงคุณศัพท์ (Royal Order of Adjectives - OSASCOMP)\nเมื่อมีคุณศัพท์หลายคำขยายคำนามตัวเดียวกัน ให้เรียงตามลำดับนี้เสมอ:\n| ลำดับ | หมวดหมู่ | ตัวอย่างคำศัพท์ |\n| 1. Opinion (ความคิดเห็น) | `beautiful`, `efficient`, `expensive`, `reliable` |\n| 2. Size (ขนาด) | `large`, `compact`, `tiny`, `huge` |\n| 3. Age (อายุ/ความใหม่) | `new`, `modern`, `legacy`, `ancient` |\n| 4. Shape (รูปทรง) | `round`, `square`, `rectangular` |\n| 5. Color (สี) | `blue`, `dark`, `white` |\n| 6. Origin (แหล่งกำเนิด) | `Japanese`, `American`, `cloud-native` |\n| 7. Material (วัสดุ) | `silicon`, `aluminum`, `wooden` |\n| 8. Purpose (จุดประสงค์การใช้งาน) | `production` (server), `swimming` (pool) |\n\n💡 **ตัวอย่างการเรียง:** *\"an **efficient modern cloud-native** application\"*\n\n---\n\n### 2. Preposition (คำบุพบท) - สะพานเชื่อมตำแหน่งและเวลา\nคำบุพบทเชื่อมคำนามเข้ากับส่วนอื่นๆ ของประโยค เพื่อบอก **เวลา (Time)**, **สถานที่ (Place)**, หรือ **ทิศทาง (Direction)**\n\n#### กฎทองสามเหลี่ยม In / On / At\n| มิติ | IN (กว้างที่สุด/ภาพใหญ่) | ON (เฉพาะเจาะจงระดับกลาง) | AT (เฉพาะเจาะจงสูงสุด/จุดพิกัด) |\n| เวลา (Time) | • ปี/ศตวรรษ: in 2026<br>• เดือน: in October<br>• ช่วงวัน: in the morning | • วันในสัปดาห์: on Monday<br>• วันที่: on October 25th<br>• วันพิเศษ: on New Year's Day | • เวลาตามนาฬิกา: at 9:00 AM<br>• ช่วงเทศกาล: at Christmas<br>• จุดเวลา: at midnight, at noon |\n| สถานที่ (Place) | • ประเทศ: in Thailand<br>• เมือง: in Bangkok<br>• พื้นที่ปิด: in the server room | • ชื่อถนน: on Sukhumvit Road<br>• บนพื้นผิว: on the table, on the screen<br>• ยานพาหนะรวม: on the bus, on the train | • ที่อยู่มีบ้านเลขที่: at 123 Main St.<br>• สถานที่เฉพาะเจาะจง: at the airport, at the office |\n\n⚠️ **Prepositions ในงานไอที & ดิจิทัล:**\n- **On:** `on the internet`, `on the website`, `on the server`, `on AWS`, `on GitHub`\n- **In:** `in the database`, `in the cloud`, `in the log file`, `in production`\n",
        "examples": [
          {
            "en": "We store critical user tokens in an encrypted Redis database.",
            "th": "พวกเราจัดเก็บโทเคนสำคัญของผู้ใช้ไว้ในฐานข้อมูล Redis ที่ถูกเข้ารหัสไว้อย่างปลอดภัย",
            "cat": "Tech"
          },
          {
            "en": "The quarterly review meeting is scheduled at nine in the morning on Friday.",
            "th": "การประชุมทบทวนผลงานประจำไตรมาสมีกำหนดจัดขึ้นตอน 9 โมงเช้าในวันศุกร์",
            "cat": "Daily"
          },
          {
            "en": "The new feature is deployed on production and runs smoothly.",
            "th": "ฟีเจอร์ใหม่ได้รับการติดตั้งขึ้นสู่ Production แล้วและทำงานได้อย่างราบรื่น",
            "cat": "Tech"
          },
          {
            "en": "She left her notebook on the conference table in room four.",
            "th": "เธอลืมสมุดบันทึกไว้บนโต๊ะประชุมในห้องหมายเลขสี่",
            "cat": "Daily"
          },
          {
            "en": "An efficient cloud-native pipeline reduces build time significantly.",
            "th": "ไปป์ไลน์แบบ Cloud-native ที่มีประสิทธิภาพช่วยลดเวลาการบิลด์ระบบลงอย่างมีนัยสำคัญ",
            "cat": "Tech"
          },
          {
            "en": "I met him at the airport before flying to Singapore.",
            "th": "ฉันพบเขาที่สนามบินก่อนออกเดินทางไปสิงคโปร์",
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
        "summary": "ไขรหัสการใช้ A, An, The และกรณีที่ไม่ต้องใส่ Article (Zero Article) ตามหลักสากล",
        "formula": "Indefinite (A/An) vs Definite (The) vs Zero Article (Ø)",
        "explanation": "\n### 1. Indefinite Articles: A vs AN (ไม่เจาะจง)\nใช้กับคำนามนับได้เอกพจน์ (Singular Countable Noun) ที่พูดถึงเป็นครั้งแรกหรือไม่ได้ชี้เฉพาะเจาะจงว่าอันไหน\n\n💡 **กฎเหล็กที่แท้จริง:** การเลือกใช้ **A** หรือ **AN** ขึ้นอยู่กับ **\"เสียงขึ้นต้น (Phonetic Sound)\"** ไม่ใช่ตัวอักษรที่เขียน!\n- **ใช้ AN:** เมื่อคำถัดไปออกเสียงขึ้นต้นด้วย **เสียงสระ (Vowel Sound: อ / ออ)**\n  - `an issue` (เสียง อ)\n  - `an API` (ออกเสียง เอ)\n  - `an hour` (h ไม่ออกเสียง ออกเป็น อาว-เออะ)\n  - `an honest engineer` (h ไม่ออกเสียง)\n- **ใช้ A:** เมื่อคำถัดไปออกเสียงขึ้นต้นด้วย **เสียงพยัญชนะ (Consonant Sound)**\n  - `a server`\n  - `a user` (ตัว u แต่ออกเสียง ยู-เซอะ เสียง ย เป็นพยัญชนะ!)\n  - `a unique design` (เสียง ย)\n  - `a European country` (เสียง ย)\n  - `a one-time password (OTP)` (เสียง ว - วัน)\n\n---\n\n### 2. Definite Article: THE (ชี้เฉพาะเจาะจง)\nใช้ได้กับทั้งนามนับได้เอกพจน์ พหูพจน์ และนามนับไม่ได้ เมื่อผู้พูดและผู้ฟัง **รู้แน่ชัดว่ากำลังหมายถึงสิ่งไหน**\n1. **เมื่อพูดถึงสิ่งนั้นซ้ำเป็นครั้งที่สอง:**\n   - *\"We encountered **a** bug. **The** bug caused high CPU usage.\"*\n2. **มีสิ่งเดียวในโลกหรือในบริบทนั้น:**\n   - `the sun`, `the internet`, `the root directory`, `the CEO`\n3. **ใช้กับคุณศัพท์ขั้นสูงสุด (Superlative Degree):**\n   - `the highest latency`, `the best algorithm`, `the most scalable solution`\n4. **ชื่อสถานที่ทางภูมิศาสตร์เฉพาะ:**\n   - มหาสมุทร/แม่น้ำ: `the Pacific Ocean`, `the Chao Phraya River`\n   - ประเทศที่เป็นพหูพจน์หรือสหพันธรัฐ: `the United States`, `the United Kingdom`, `the Netherlands`\n\n---\n\n### 3. Zero Article (ไม่ต้องใส่ Article ใดๆ เลย)\nห้ามใส่ a, an, หรือ the ในกรณีต่อไปนี้:\n| หมวดหมู่ | ตัวอย่าง | ❌ ผิด (ห้ามใส่) |\n| นามพหูพจน์ที่พูดถึงทั่วไปในภาพรวม | *\"Engineers write clean code.\"* | ~~The engineers write...~~ (ถ้าพูดถึงวิศวกรทั่วๆ ไป) |\n| นามนับไม่ได้ที่พูดถึงทั่วไป | *\"Security is our top priority.\"* | ~~The security is...~~ |\n| ชื่อมื้ออาหาร | `have breakfast`, `eat lunch` | ~~eat a lunch~~ |\n| ชื่อภาษาและวิชา | `English`, `Python`, `Mathematics` | ~~the English language~~ (ถ้าไม่มีคำว่า language) |\n| ชื่อประเทศส่วนใหญ่ที่เป็นชื่อเดี่ยว | `Thailand`, `Japan`, `Germany` | ~~the Thailand~~ |\n| กีฬาและเกม | `play football`, `play chess` | ~~play the football~~ |\n",
        "examples": [
          {
            "en": "We encountered an unexpected error while provisioning the infrastructure.",
            "th": "พวกเราพบข้อผิดพลาดที่ไม่คาดคิดในขณะที่กำลังจัดเตรียมระบบโครงสร้างพื้นฐาน",
            "cat": "Tech"
          },
          {
            "en": "She has been working as a software architect for over an hour today.",
            "th": "เธอทำงานในฐานะสถาปนิกซอฟต์แวร์มานานกว่าหนึ่งชั่วโมงแล้วในวันนี้",
            "cat": "Tech"
          },
          {
            "en": "The server room temperature must remain below twenty degrees Celsius.",
            "th": "อุณหภูมิในห้องเซิร์ฟเวอร์จะต้องถูกควบคุมให้ต่ำกว่ายี่สิบองศาเซลเซียสเสมอ",
            "cat": "Tech"
          },
          {
            "en": "He bought a unique laptop bag before his trip to Singapore.",
            "th": "เขาซื้อกระเป๋าแล็ปท็อปดีไซน์เฉพาะตัวก่อนการเดินทางไปสิงคโปร์",
            "cat": "Daily"
          },
          {
            "en": "Information security requires continuous vigilance across all teams.",
            "th": "ความมั่นคงปลอดภัยของข้อมูลต้องอาศัยความระมัดระวังอย่างต่อเนื่องในทุกทีม",
            "cat": "Tech"
          },
          {
            "en": "They had lunch together at the company cafeteria.",
            "th": "พวกเขารับประทานอาหารกลางวันร่วมกันที่โรงอาหารของบริษัท",
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
        "summary": "บอกปริมาณอย่างแม่นยำด้วย Some, Any, Much, Many, Few, Little และหลักการเลือกใช้กับคำนาม",
        "formula": "Quantifier + Countable Plural / Uncountable Noun",
        "explanation": "\n### 1. กฎพื้นฐาน: การจับคู่ Quantifier กับประเภทคำนาม\nการเลือกใช้คำบอกปริมาณขึ้นอยู่กับว่าคำนามที่ตามหลังเป็น **นามนับได้พหูพจน์ (Plural Countable)** หรือ **นามนับไม่ได้ (Uncountable)**\n\n#### ตารางสรุปการจับคู่ Quantifier ที่ถูกต้อง:\n| คำบอกปริมาณ | ใช้กับนามนับได้พหูพจน์ | ใช้กับนามนับไม่ได้ | ตัวอย่างประโยคจริง |\n| `many` (มาก) | ✔️ | ❌ | *\"There are **many** microservices in the cluster.\"* |\n| `much` (มาก) | ❌ | ✔️ | *\"We don't have **much** disk space left.\"* |\n| `a lot of / lots of` (มาก) | ✔️ | ✔️ (ใช้ได้ทั้งคู่) | *\"The database handles **a lot of** traffic.\"* |\n| `a few` (พอมีบ้าง 2-3 อัน) | ✔️ | ❌ | *\"We have **a few** pull requests to review.\"* |\n| `few` (แทบจะไม่มีเลย เชิงลบ) | ✔️ | ❌ | *\"**Few** developers understand this legacy code.\"* |\n| `a little` (พอมีอยู่บ้าง เล็กน้อย) | ❌ | ✔️ | *\"We need **a little** patience during the migration.\"* |\n| `little` (แทบไม่มีเลย เชิงลบ) | ❌ | ✔️ | *\"There is **little** documentation available.\"* |\n\n---\n\n### 2. Some vs Any: การใช้งานที่ถูกต้อง\n- **Some (บ้าง/บางส่วน):**\n  - ใช้ใน **ประโยคบอกเล่า (Affirmative):** *\"We have **some** questions about the roadmap.\"*\n  - ใช้ใน **ประโยคคำถามที่เป็นการยื่นข้อเสนอหรือขอร้อง (Offers & Requests):**\n    - *\"Would you like **some** coffee?\"* (ยื่นข้อเสนอ)\n    - *\"Could you give me **some** advice?\"* (ขอร้องอย่างสุภาพ)\n- **Any (บ้างไหม/เลย):**\n  - ใช้ใน **ประโยคปฏิเสธ (Negative):** *\"We don't have **any** active incidents right now.\"*\n  - ใช้ใน **ประโยคคำถามทั่วไป (Questions):** *\"Do you have **any** objections to this design?\"*\n  - ใช้ในประโยคบอกเล่าในความหมายว่า **\"อันไหนก็ได้ / ใครก็ได้ (No matter which/who):\"**\n    - *\"You can run this container on **any** cloud platform.\"*\n\n---\n\n### 3. Each, Every, Both, Either, Neither (ข้อสอบยอดฮิต!)\n1. **Each / Every (แต่ละ / ทุกๆ):**\n   - **ต้องตามด้วยคำนามเอกพจน์ และกริยาเอกพจน์เสมอ!**\n   - *\"**Each** engineer **has** their own development environment.\"* (ไม่ใช่ have)\n   - *\"**Every** deployment **requires** automated testing.\"*\n2. **Both (ทั้งสอง) vs Either (อันใดอันหนึ่ง) vs Neither (ไม่ทั้งคู่):**\n   - `Both A and B` ➔ กริยาพหูพจน์: *\"Both servers are responding.\"*\n   - `Either A or B` / `Neither A nor B` ➔ กริยาผันตามประธานตัวที่อยู่ใกล้กริยาที่สุด (Proximity Rule):\n     - *\"Neither the manager nor the developers **were** aware of the bug.\"*\n",
        "examples": [
          {
            "en": "We don't have much disk space left on the primary database instance.",
            "th": "พวกเราเหลือพื้นที่ดิสก์ไม่มากแล้วบนอินสแตนซ์ฐานข้อมูลหลัก",
            "cat": "Tech"
          },
          {
            "en": "Could you give me some feedback on my presentation slides?",
            "th": "คุณช่วยให้ข้อคิดเห็นบางอย่างเกี่ยวกับสไลด์นำเสนอของฉันหน่อยได้ไหม?",
            "cat": "Daily"
          },
          {
            "en": "There are few engineers who can debug the legacy kernel module.",
            "th": "มีวิศวกรน้อยคนมาก (แทบจะไม่มีเลย) ที่สามารถแก้ไขบั๊กโมดูลเคอร์เนลตัวเก่านี้ได้",
            "cat": "Tech"
          },
          {
            "en": "I only have a little free time this afternoon between meetings.",
            "th": "ฉันมีเวลาว่างเพียงเล็กน้อยเท่านั้นในช่วงบ่ายนี้ระหว่างการประชุมแต่ละรอบ",
            "cat": "Daily"
          },
          {
            "en": "Each microservice maintains its own independent database schema.",
            "th": "แต่ละไมโครเซอร์วิสจะดูแลรักษาสคีมาฐานข้อมูลอิสระเป็นของตนเอง",
            "cat": "Tech"
          },
          {
            "en": "Do you have any suggestions for improving our daily standup meeting?",
            "th": "คุณมีข้อเสนอแนะอะไรบ้างไหมสำหรับการปรับปรุงการประชุมสแตนด์อัปประจำวันของเรา?",
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
        "summary": "แยกแยะความจริง ความถี่ นิสัย (Present Simple) ออกจากสิ่งที่กำลังดำเนินอยู่หรือการเปลี่ยนแปลงชั่วคราว (Present Continuous)",
        "formula": "Present Simple: S + V1(s/es) | Present Continuous: S + is/am/are + V.ing",
        "explanation": "\n### 1. Present Simple: ความจริง กิจวัตร และข้อเท็จจริงสากล\n`Subject + V1 (เติม s/es เมื่อประธานเป็นเอกพจน์ He/She/It/Single Noun)`\n\n#### บริบทการใช้งาน Present Simple:\n1. **General Truths & Facts (ความจริงทั่วไป/สัจธรรม/ระบบการทำงาน):**\n   - *\"PostgreSQL stores data in structured tables.\"*\n   - *\"The sun rises in the east.\"*\n2. **Habits & Routines (นิสัย กิจวัตร สิ่งที่ทำสม่ำเสมอ):**\n   - มักมี Adverb of Frequency: `always`, `usually`, `every day`, `often`\n   - *\"Our team holds a sprint review every two weeks.\"*\n3. **Fixed Timetables & Schedules (ตารางเวลาที่กำหนดไว้แน่นอน):**\n   - *\"The conference starts at nine tomorrow morning.\"*\n\n---\n\n### 2. Present Continuous: กำลังเกิดขึ้น หรืออยู่ระหว่างการเปลี่ยนแปลง\n`Subject + is / am / are + Verb-ing`\n\n#### บริบทการใช้งาน Present Continuous:\n1. **Actions Happening Right Now (กำลังเกิดขึ้นขณะพูด):**\n   - *\"The CI/CD pipeline is deploying version 2.4 right now.\"*\n   - *\"Listen! The fire alarm is ringing.\"*\n2. **Temporary Situations (สถานการณ์ชั่วคราว ไม่ใช่เรื่องถาวร):**\n   - *\"I am working from home this week because my office is being renovated.\"*\n3. **Trends & Changing Situations (แนวโน้มที่กำลังเปลี่ยนแปลง):**\n   - *\"Cloud computing costs are increasing rapidly.\"*\n4. **Definite Near-Future Arrangements (นัดหมายในอนาคตอันใกล้ที่จัดเตรียมไว้แล้ว):**\n   - *\"We are meeting the enterprise clients tomorrow morning.\"*\n\n---\n\n### 3. ตารางเปรียบเทียบและการวิเคราะห์กริยาต้องห้าม (Stative Verbs)\n| มิติการเปรียบเทียบ | Present Simple | Present Continuous |\n| โครงสร้างบอกเล่า | `S + V.1 (s/es)` | `S + is/am/are + V.ing` |\n| โครงสร้างปฏิเสธ | `S + do/does not + V.inf` | `S + is/am/are not + V.ing` |\n| โครงสร้างคำถาม | `Do/Does + S + V.inf?` | `Is/Am/Are + S + V.ing?` |\n| คีย์เวิร์ดบอกเวลา | `always`, `never`, `every day`, `normally` | `now`, `at the moment`, `currently`, `these days` |\n\n⚠️ **Stative Verbs (กริยาบอกสภาวะ ห้ามใช้รูป V.ing เด็ดขาด!):**\nกริยาที่บอกความรู้สึก การรับรู้ ความคิด หรือความเป็นเจ้าของ ไม่ใช่การกระทำทางกายภาพ:\n- **ความคิด/ความเข้าใจ:** `know`, `understand`, `believe`, `remember`, `suppose`\n- **ความรู้สึก/ความชอบ:** `like`, `love`, `hate`, `want`, `need`, `prefer`\n- **การเป็นเจ้าของ:** `belong to`, `own`, `possess`, `contain`\n- **การรับรู้ประสาทสัมผัส:** `hear`, `smell`, `taste`, `seem`\n- ❌ **ห้ามพูด:** *I am knowing the answer.* ➔ ✔️ **ต้องพูด:** *\"I know the answer.\"*\n- ❌ **ห้ามพูด:** *The app is containing bugs.* ➔ ✔️ **ต้องพูด:** *\"The app contains bugs.\"*\n",
        "examples": [
          {
            "en": "The automated backup process runs every midnight without interruption.",
            "th": "กระบวนการสำรองข้อมูลอัตโนมัติจะทำงานทุกเที่ยงคืนโดยไม่มีการหยุดชะงัก",
            "cat": "Tech"
          },
          {
            "en": "Our engineers are currently investigating the network latency issue.",
            "th": "วิศวกรของเรากำลังตรวจสอบปัญหาความหน่วงของเครือข่ายอยู่ในขณะนี้",
            "cat": "Tech"
          },
          {
            "en": "She usually drinks black coffee before starting her morning standup meeting.",
            "th": "ปกติเธอจะดื่มกาแฟดำก่อนเริ่มการประชุมสแตนด์อัปในตอนเช้า",
            "cat": "Daily"
          },
          {
            "en": "I am working on the authentication microservice this afternoon.",
            "th": "บ่ายนี้ฉันกำลังนั่งทำระบบยืนยันตัวตนสำหรับไมโครเซอร์วิสอยู่",
            "cat": "Tech"
          },
          {
            "en": "He understands the architecture deeply and leads the technical discussions.",
            "th": "เขาเข้าใจสถาปัตยกรรมระบบอย่างลึกซึ้งและเป็นผู้นำการสนทนาเชิงเทคนิค",
            "cat": "Tech"
          },
          {
            "en": "They are staying at a hotel near the office until Friday.",
            "th": "พวกเขาพักอยู่ที่โรงแรมใกล้กับออฟฟิศชั่วคราวจนถึงวันศุกร์นี้",
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
        "summary": "กุญแจสำคัญในการแยกอดีตที่จบลงแล้ว (Past Simple) ออกจากเหตุการณ์ที่มีผลเชื่อมโยงถึงปัจจุบัน (Present Perfect) และอดีตก่อนอดีต (Past Perfect)",
        "formula": "Past Simple: S + V2 | Present Perfect: S + have/has + V3 | Past Perfect: S + had + V3",
        "explanation": "\n### 1. Past Simple: อดีตที่จบสมบูรณ์และตัดขาดจากปัจจุบัน\n`Subject + V2 (Regular: -ed / Irregular: เปลี่ยนรูป)`\nใช้บอกเล่าเรื่องราวที่ **เกิดขึ้นและจบลงไปแล้วในอดีต** โดยมักมี **เวลาระบุไว้อย่างชัดเจน (Definite Time Marker)**:\n- Time Markers: `yesterday`, `last night`, `in 2024`, `two hours ago`, `when I was young`\n- *\"We deployed the patch **yesterday**.\"* (การติดตั้งจบลงไปแล้วเมื่อวานนี้)\n- *\"Steve Jobs founded Apple **in 1976**.\"*\n\n---\n\n### 2. Present Perfect: อดีตที่มีสะพานเชื่อมโยงถึงปัจจุบัน\n`Subject + have / has + V.3 (Past Participle)`\nใช้กับเหตุการณ์ที่เริ่มต้นในอดีต แต่ **ผลลัพธ์หรือประสบการณ์ยังส่งผลมาถึงปัจจุบัน**:\n1. **สิ่งที่ทำตั้งแต่อดีตและดำเนินต่อเนื่องมาจนถึงตอนนี้ (Duration):**\n   - มักใช้กับ `since` (ตั้งแต่จุดเวลา) และ `for` (เป็นระยะเวลานานเท่าใด)\n   - *\"I **have worked** at this tech firm **for five years**.\"* (ทำมา 5 ปีแล้ว และตอนนี้ก็ยังทำอยู่)\n2. **ประสบการณ์ในชีวิต (Life Experience):**\n   - มักใช้กับ `ever`, `never`, `already`, `yet`\n   - *\"**Have** you **ever** configured a Kubernetes ingress?\"*\n   - *\"We **have already fixed** that bug.\"*\n3. **สิ่งที่เพิ่งเกิดขึ้นสดๆ ร้อนๆ และมีผลต่อปัจจุบัน (Recent Actions):**\n   - *\"The server **has crashed**! (ดังนั้นตอนนี้ระบบจึงยังล่มอยู่)\"*\n   - *\"I **have lost** my key. (ตอนนี้เลยเข้าห้องไม่ได้)\"*\n\n---\n\n### 3. ตารางเปรียบเทียบ Past Simple vs Present Perfect\n| จุดสังเกต | Past Simple (S + V2) | Present Perfect (S + have/has + V3) |\n| เวลาระบุชัดเจน | ระบุชัดเจน (`yesterday`, `two days ago`, `in 2023`) | ไม่ระบุเวลาเจาะจง หรือใช้ `since` / `for` |\n| สภาพในปัจจุบัน | เหตุการณ์จบสิ้นแล้ว ไม่เกี่ยวกับปัจจุบัน | ผลลัพธ์หรือสถานะยังคงส่งผลถึงปัจจุบัน |\n| โครงสร้างปฏิเสธ | `S + did not + V.inf` | `S + have/has not + V.3` |\n| โครงสร้างคำถาม | `Did + S + V.inf?` | `Have/Has + S + V.3?` |\n\n---\n\n### 4. Past Perfect: เหตุการณ์ที่เกิดก่อนในอดีต (Past of the Past)\n`Subject + had + V.3`\nเมื่อมีเหตุการณ์ในอดีตเกิดขึ้น **2 เหตุการณ์ซ้อนกัน**:\n- **เหตุการณ์ที่ 1 (เกิดก่อน):** ใช้ **Past Perfect (`had + V.3`)**\n- **เหตุการณ์ที่ 2 (เกิดตามมาทีหลัง):** ใช้ **Past Simple (`V.2`)**\n- *\"The database **had already crashed** before we **noticed** the alert.\"*\n- *\"When she **arrived** at the station, the train **had already left**.\"*\n",
        "examples": [
          {
            "en": "We resolved the production incident yesterday after three hours of debugging.",
            "th": "พวกเราแก้ไขปัญหาบนระบบ Production ลุล่วงไปได้เมื่อวานนี้หลังจากการดีบักนานสามชั่วโมง",
            "cat": "Tech"
          },
          {
            "en": "Our company has grown rapidly since we launched the cloud platform.",
            "th": "บริษัทของเราเติบโตอย่างรวดเร็วตั้งแต่เราเปิดตัวแพลตฟอร์มคลาวด์",
            "cat": "Tech"
          },
          {
            "en": "Have you ever deployed an application using Docker containers?",
            "th": "คุณเคยติดตั้งแอปพลิเคชันโดยใช้ Docker Container มาก่อนหรือไม่?",
            "cat": "Tech"
          },
          {
            "en": "She has lived in Bangkok for ten years and loves the food culture.",
            "th": "เธออาศัยอยู่ในกรุงเทพฯ มานานสิบปีแล้วและชื่นชอบวัฒนธรรมอาหารมาก",
            "cat": "Daily"
          },
          {
            "en": "The system had already executed the rollback script before the engineer logged in.",
            "th": "ระบบได้ทำการรันสคริปต์ย้อนกลับ (Rollback) เสร็จสิ้นไปแล้วก่อนที่วิศวกรจะล็อกอินเข้ามา",
            "cat": "Tech"
          },
          {
            "en": "I realized that I had left my access card at home when I arrived at the gate.",
            "th": "ฉันตระหนักได้ว่าฉันลืมคีย์การ์ดไว้ที่บ้านเมื่อฉันเดินทางมาถึงหน้าประตูทางเข้า",
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
        "summary": "เชี่ยวชาญการต่อประโยค 3 รูปแบบ (Simple, Compound, Complex) พร้อมหลักการใช้ FANBOYS และ Subordinating Conjunctions",
        "formula": "Simple: S + V | Compound: IC, + FANBOYS + IC | Complex: DC, + IC / IC + DC",
        "explanation": "\n### 1. Simple Sentence (ประโยคความเดียว)\nประกอบด้วย **1 Independent Clause (ประโยคอิสระที่มีประธานและกริยาครบถ้วน)** สื่อความหมายสมบูรณ์ในตัวเอง:\n- *\"The server operates continuously.\"*\n- *\"Alex and Sarah reviewed and approved the pull request.\"* (มีประธานร่วมและกริยาร่วม แต่ยังเป็นประโยคความเดียวเพราะมีใจความหลักอันเดียว)\n\n---\n\n### 2. Compound Sentence (ประโยคความรวม)\nเกิดจากการนำ **Independent Clause 2 ประโยคขึ้นไป** มาเชื่อมเข้าด้วยกัน โดยมีน้ำหนักเท่าเทียมกัน\n\n#### การเชื่อมด้วย FANBOYS (Coordinating Conjunctions)\nจำสูตรอักษรย่อ **F-A-N-B-O-Y-S**:\n- **For:** เพราะว่า (บอกสาเหตุ)\n- **And:** และ (เสริมข้อมูล)\n- **Nor:** และไม่ทั้งสอง (ปฏิเสธคู่)\n- **But:** แต่ (ขัดแย้ง)\n- **Or:** หรือ (ให้เลือก)\n- **Yet:** แต่กระนั้น (ขัดแย้งอย่างสละสลวย)\n- **So:** ดังนั้น (บอกผลลัพธ์)\n\n⚠️ **กฎเครื่องหมาย Comma (,) ใน Compound Sentence:**\nต้องใส่ **Comma (,) หน้า FANBOYS เสมอ** เมื่อเชื่อมสองประโยคที่มีประธานเป็นของตัวเอง!\n`Independent Clause 1, + FANBOYS + Independent Clause 2`\n- *\"The unit tests passed**, but** the staging deployment failed.\"*\n- *\"We scaled up the cluster**, so** the response time improved immediately.\"*\n\n---\n\n### 3. Complex Sentence (ประโยคความซ้อน)\nประกอบด้วย:\n- **1 Independent Clause (ประโยคหลักที่อยู่เดี่ยวๆ ได้)**\n- **1 Dependent / Subordinate Clause (ประโยคย่อยที่ขึ้นต้นด้วยคำเชื่อม อยู่เดี่ยวๆ ไม่ได้)**\n\n#### คำเชื่อมประโยคความซ้อน (Subordinating Conjunctions) ที่พบบ่อย:\n| หมวดหมู่ | คำเชื่อม | ตัวอย่างประโยค |\n| สาเหตุ (Cause/Reason) | `because`, `since`, `as` | *\"The build failed **because** a dependency was missing.\"* |\n| ขัดแย้ง (Contrast/Concession) | `although`, `even though`, `while`, `whereas` | *\"**Although** the traffic spiked, the site remained online.\"* |\n| เวลา (Time) | `when`, `while`, `after`, `before`, `until` | *\"We will release **when** all tests pass.\"* |\n| เงื่อนไข (Condition) | `if`, `unless`, `provided that` | *\"The job will run **if** the trigger is active.\"* |\n\n💡 **กฎเครื่องหมาย Comma ใน Complex Sentence:**\n- **ถ้า Dependent Clause ขึ้นต้นประโยค ➔ ต้องใส่ Comma คั่น:**\n  - *\"**Because the database locked up**, the service timed out.\"*\n- **ถ้า Independent Clause ขึ้นต้นประโยค ➔ ไม่ต้องใส่ Comma:**\n  - *\"The service timed out **because the database locked up**.\"*\n\n---\n\n### 4. กับดักไวยากรณ์: Comma Splice & Run-on Sentence\n❌ **Comma Splice (ความผิดร้ายแรงในงานเขียน):** เอา Comma มาคั่นระหว่าง 2 ประโยคสมบูรณ์โดยไม่มีคำเชื่อม\n- *The server crashed, the engineer restarted it. ❌*\n✔️ **วิธีแก้ไขที่ถูกต้อง:**\n1. ใส่ FANBOYS: *\"The server crashed, **and** the engineer restarted it.\"*\n2. เปลี่ยนเป็น Complex Sentence: *\"**When** the server crashed, the engineer restarted it.\"*\n3. ใช้ Semicolon (;): *\"The server crashed**;** the engineer restarted it.\"*\n",
        "examples": [
          {
            "en": "The automated pipeline ran all integration tests, and it deployed the build to staging.",
            "th": "ไปป์ไลน์อัตโนมัติรันการทดสอบการเชื่อมต่อระบบทั้งหมด และได้ทำการติดตั้งบิลด์ขึ้นสู่ Staging",
            "cat": "Tech"
          },
          {
            "en": "Although the website experienced record traffic, the cloud servers remained fully responsive.",
            "th": "แม้ว่าเว็บไซต์จะเผชิญกับปริมาณทราฟฟิกสูงสุดเป็นประวัติการณ์ แต่เซิร์ฟเวอร์คลาวด์ก็ยังคงตอบสนองได้อย่างสมบูรณ์",
            "cat": "Tech"
          },
          {
            "en": "She wanted to attend the conference, but she had to finish an urgent client delivery.",
            "th": "เธออยากไปร่วมงานประชุมวิชาการนั้น แต่เธอจำเป็นต้องส่งมอบงานด่วนของลูกค้าให้เสร็จก่อน",
            "cat": "Daily"
          },
          {
            "en": "Because the security certificate expired, users could not access the payment gateway.",
            "th": "เนื่องจากใบรับรองความปลอดภัยหมดอายุ ผู้ใช้งานจึงไม่สามารถเข้าถึงช่องทางการชำระเงินได้",
            "cat": "Tech"
          },
          {
            "en": "The meeting concluded on time, so we had thirty minutes to prepare for lunch.",
            "th": "การประชุมเสร็จสิ้นลงตรงเวลา ดังนั้นพวกเราจึงมีเวลาสามสิบนาทีเพื่อเตรียมตัวสำหรับมื้อกลางวัน",
            "cat": "Daily"
          },
          {
            "en": "We will trigger the production deployment after the security team completes the audit.",
            "th": "พวกเราจะเริ่มปล่อยระบบโปรดักชันหลังจากทีมความปลอดภัยดำเนินการตรวจสอบเสร็จสิ้น",
            "cat": "Tech"
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
        "summary": "เจาะลึกคำถามตระกูล HOW ทั้งหมด: How much, How many, How long, How often, How come และ How about ในงานจริง",
        "formula": "How + Adjective/Adverb + Auxiliary Verb + Subject + Main Verb?",
        "explanation": "\n### 1. โครงสร้างคำถามตระกูล HOW (The HOW Family Formula)\nคำว่า **HOW** เมื่อนำมารวมกับ Adjective หรือ Adverb จะแปลงร่างเป็นคำถามที่เจาะจงมิติการวัดและประเมินผลได้อย่างแม่นยำ:\n`How + Adjective/Adverb + กริยาช่วย (do/does/did/is/are/can) + ประธาน + กริยาหลัก ?`\n\n---\n\n### 2. ตารางเจาะลึก 7 รูปแบบคำถาม HOW ที่ใช้บ่อยที่สุด\n| รูปแบบ HOW | มิติที่ถาม | ตัวอย่างคำถามในงาน Tech & DevOps | ตัวอย่างคำถามในชีวิตประจำวัน |\n| **How long** | ระยะเวลา / กรอบเวลา | *\"How long does the container image build take?\"* (บิลด์อิมเมจใช้เวลานานเท่าไร?) | *\"How long have you lived in Chiang Mai?\"* (คุณอยู่ที่เชียงใหม่มากี่ปีแล้ว?) |\n| **How often** | ความถี่ในการเกิดขึ้น | *\"How often do we run automated vulnerability scans?\"* (เราสแกนช่องโหว่บ่อยแค่ไหน?) | *\"How often do you go to the gym?\"* (คุณไปฟิตเนสบ่อยแค่ไหน?) |\n| **How much** | ปริมาณ (นามนับไม่ได้) / ราคา | *\"How much memory is allocated to this pod?\"* (พ็อดนี้จัดสรรแรมไว้เท่าไร?) | *\"How much did this mechanical keyboard cost?\"* (คีย์บอร์ดตัวนี้ราคาเท่าไร?) |\n| **How many** | จำนวนชิ้น (นามนับได้พหูพจน์) | *\"How many nodes are currently running in the cluster?\"* (มีโหนดรันอยู่ในคลัสเตอร์กี่ตัว?) | *\"How many people are attending the dinner?\"* (มีคนไปร่วมงานเลี้ยงกี่คน?) |\n| **How far** | ระยะทาง / ความคืบหน้า | *\"How far are we from finishing the sprint goals?\"* (เราใกล้บรรลุเป้าหมายสปรินต์แค่ไหนแล้ว?) | *\"How far is the headquarters from the station?\"* (สำนักงานใหญ่อยู่ไกลจากสถานีแค่ไหน?) |\n| **How come** | ทำไม (ภาษาพูด = Why) | *\"How come the staging pipeline didn't catch this bug?\"* (ทำไมไปป์ไลน์ Staging ถึงจับบั๊กนี้ไม่ได้?) | *\"How come you didn't join the team lunch today?\"* (ทำไมวันนี้คุณถึงไม่ไปกินข้าวกับทีม?) |\n| **How about** | การเสนอไอเดีย / ชักชวน | *\"How about using a message queue to handle traffic spikes?\"* (ลองใช้คิวข้อความรับโหลดพุ่งดีไหม?) | *\"How about taking a short coffee break?\"* (พวกเราพักดื่มกาแฟสั้นๆ กันหน่อยไหม?) |\n\n---\n\n### 3. ข้อควรระวังพิเศษสำหรับ How come และ How about\n💡 **ความพิเศษของ \"How come\":**\n- ไม่ต้องกลับกริยาช่วยมาไว้หน้าประธาน! เรียงเหมือนประโยคบอกเล่าได้เลย:\n  - *\"How come **you are** late?\"* ✔️ (ไม่ใช่ *How come are you late ❌)\n  - ต่างจาก Why: *\"Why **are you** late?\"* ✔️\n\n💡 **ความพิเศษของ \"How about\" & \"What about\":**\n- ต้องตามด้วย **V.ing (Gerund)** หรือ **Noun Phrase** เสมอ:\n  - *\"How about **refactoring** the legacy codebase?\"* (ไม่ใช่ *How about refactor)\n  - *\"What about **a quick meeting** at 2:00 PM?\"*\n",
        "examples": [
          {
            "en": "How long does it take to restore the database from the snapshot backup?",
            "th": "การกู้คืนฐานข้อมูลจากสแนปช็อตสำรองใช้เวลานานเท่าไร?",
            "cat": "Tech"
          },
          {
            "en": "How often do you conduct security awareness training for new employees?",
            "th": "คุณจัดอบรมการตระหนักรู้ด้านความปลอดภัยสำหรับพนักงานใหม่บ่อยแค่ไหน?",
            "cat": "Tech"
          },
          {
            "en": "How many active instances are currently handling the payment service traffic?",
            "th": "มีอินสแตนซ์ที่กำลังทำงานอยู่กี่ตัวที่คอยรับทราฟฟิกของระบบการชำระเงินในขณะนี้?",
            "cat": "Tech"
          },
          {
            "en": "How much bandwidth does our video streaming feature consume per user session?",
            "th": "ฟีเจอร์สตรีมมิ่งวิดีโอของเราใช้แบนด์วิดท์เท่าไรต่อการใช้งานหนึ่งเซสชันของผู้ใช้?",
            "cat": "Tech"
          },
          {
            "en": "How come the monitoring dashboard didn't trigger an alert during the outage?",
            "th": "ทำไมแดชบอร์ดตรวจสอบระบบถึงไม่ส่งสัญญาณแจ้งเตือนระหว่างที่ระบบหยุดทำงาน?",
            "cat": "Tech"
          },
          {
            "en": "How about grabbing a quick sandwich before our retrospective meeting starts?",
            "th": "พวกเราแวะซื้อแซนด์วิชกินรองท้องอย่างรวดเร็วก่อนที่การประชุม Retro จะเริ่มขึ้นดีไหม?",
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
        "summary": "ยกระดับการทำงานระดับมืออาชีพด้วย Indirect Questions ถามสุภาพในที่ประชุม พร้อมกฎการสลับคำเรียงประโยค",
        "formula": "Polite Starter + Question Word / If / Whether + Subject + Verb (Statement Order)",
        "explanation": "\n### 1. Indirect Questions คืออะไร และทำไมต้องใช้?\nในวัฒนธรรมการทำงานระดับสากล การถามแบบขวานผ่าซาก (Direct Question) เช่น *\"Where are the logs?\"* หรือ *\"Why did this fail?\"* บางครั้งอาจฟังดูกดดันหรือก้าวร้าวเกินไป\n**Indirect Question (คำถามทางอ้อม)** คือการซ้อนคำถามไว้หลังวลีเปิดที่สุภาพ นุ่มนวล และแสดงความเป็นมืออาชีพสูง\n\n---\n\n### 2. กฎเหล็กระดับ 5 ดาว: การเรียงประโยคกลับเป็นบอกเล่า\n⚠️ **กฎข้อที่สำคัญที่สุดในข้อสอบและชีวิตจริง:**\nเมื่อเปลี่ยนเป็น Indirect Question **โครงสร้างประโยคจะย้อนกลับมาเป็น \"ประธาน + กริยา\" (Statement Word Order)** ทันที!\n- ❌ **ห้ามใช้กริยาช่วย do / does / did ในส่วนหลังเด็ดขาด!**\n- ❌ **ห้ามสลับกริยามาไว้หน้าประธานเหมือนคำถามตรง!**\n\n| Direct Question (คำถามตรง) | ❌ คำถามทางอ้อมที่ผิด (ห้ามพูด) | ✔️ Indirect Question ที่ถูกต้อง |\n| *\"Where is the API documentation?\"* | ~~Could you tell me where is the API documentation?~~ | *\"Could you tell me **where the API documentation is**?\"* |\n| *\"When does the release start?\"* | ~~Do you know when does the release start?~~ | *\"Do you know **when the release starts**?\"* (ใช้ starts เติม s) |\n| *\"Why did the deployment fail?\"* | ~~Can you explain why did the deployment fail?~~ | *\"Can you explain **why the deployment failed**?\"* (ใช้ failed รูปอดีต) |\n| *\"Is the staging server ready?\"* | ~~Do you know is the staging server ready?~~ | *\"Do you know **if the staging server is ready**?\"* |\n\n---\n\n### 3. วลีเปิดประโยคสุดสุภาพที่ใช้บ่อยในที่ประชุม (Polite Question Starters)\n1. **Could you please tell me...** (คุณพอจะบอกฉันได้ไหมว่า...)\n2. **Do you happen to know...** (คุณบังเอิญทราบไหมว่า...)\n3. **I was wondering if you could clarify...** (ฉันกำลังสงสัยอยู่ว่าคุณพอจะช่วยขยายความได้ไหมว่า...)\n4. **Would you mind explaining...** (คุณจะรังเกียจไหมถ้าจะช่วยอธิบายว่า...)\n5. **Can you let me know when/where...** (รบกวนแจ้งให้ฉันทราบหน่อยได้ไหมว่าเมื่อไร/ที่ไหน...)\n\n💡 **สำหรับคำถามประเภท Yes/No Question ให้ใช้ IF หรือ WHETHER เชื่อม:**\n- Direct: *\"Has the pull request been approved?\"*\n- Indirect: *\"Could you check **whether** the pull request has been approved?\"*\n",
        "examples": [
          {
            "en": "Could you please tell me where the latest API documentation is located?",
            "th": "คุณพอจะช่วยบอกฉันได้ไหมว่าเอกสาร API เวอร์ชันล่าสุดจัดเก็บอยู่ที่ไหน?",
            "cat": "Tech"
          },
          {
            "en": "Do you happen to know when the staging maintenance window concludes?",
            "th": "คุณพอจะทราบไหมว่าช่วงเวลาการบำรุงรักษาระบบ Staging จะเสร็จสิ้นลงเมื่อไร?",
            "cat": "Tech"
          },
          {
            "en": "I was wondering if you could explain how the autoscaling policy triggers.",
            "th": "ฉันอยากรบกวนสอบถามว่าคุณพอจะอธิบายได้ไหมว่ากฎการทำ Autoscaling ถูกสั่งให้ทำงานอย่างไร?",
            "cat": "Tech"
          },
          {
            "en": "Would you mind letting me know whether you can join our sprint retrospective?",
            "th": "รบกวนแจ้งให้ฉันทราบได้ไหมว่าคุณจะสามารถเข้าร่วมการประชุม Retrospective ของเราได้หรือไม่?",
            "cat": "Daily"
          },
          {
            "en": "Can you confirm if the security patch has already been rolled out to production?",
            "th": "คุณช่วยยืนยันหน่อยได้ไหมว่าแพตช์ความปลอดภัยได้รับการติดตั้งขึ้นสู่ Production แล้วหรือยัง?",
            "cat": "Tech"
          },
          {
            "en": "Could you tell me which conference room we booked for the quarterly review?",
            "th": "คุณพอจะบอกฉันได้ไหมว่าพวกเราจองห้องประชุมห้องไหนไว้สำหรับการทบทวนผลงานประจำไตรมาส?",
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
        "summary": "สร้างประโยคปฏิเสธที่ถูกต้องด้วย Auxiliary Verbs, คำปฏิเสธเชิงกึ่ง (Barely/Rarely) และเทคนิค Negative Inversion ขั้นสูง",
        "formula": "Subject + Auxiliary Verb + not + Main Verb | Negative Word + Aux + Subject + Main Verb",
        "explanation": "\n### 1. โครงสร้างปฏิเสธมาตรฐาน (Standard Negation)\nในภาษาอังกฤษ เราไม่สามารถวาง `not` เดี่ยวๆ หน้ากริยาแท้ได้ ต้องมี **Auxiliary Verb (กริยาช่วย)** เข้ามาร่วมเสมอ:\n`Subject + กริยาช่วย (do/does/did/is/am/are/can/will) + not + กริยาหลัก (V.inf)`\n\n#### ตารางการจับคู่กริยาช่วยในประโยคปฏิเสธ:\n| Tense / กริยา | รูปปฏิเสธเต็ม | รูปย่อ (Contraction) | ตัวอย่างประโยค |\n| Present Simple (นามพหูพจน์/I/You) | `do not` | `don't` | *\"We **don't** expose database credentials.\"* |\n| Present Simple (นามเอกพจน์ He/She/It) | `does not` | `doesn't` | *\"The script **doesn't** modify user passwords.\"* |\n| Past Simple (อดีตทุกประธาน) | `did not` | `didn't` | *\"The deployment **didn't** cause any downtime.\"* |\n| Present Continuous | `is/are not` | `isn't / aren't` | *\"The replica **isn't** syncing properly.\"* |\n| Present Perfect | `have/has not` | `haven't / hasn't` | *\"The QA team **hasn't** approved the build.\"* |\n| Future Simple | `will not` | `won't` | *\"The service **won't** accept deprecated tokens.\"* |\n\n---\n\n### 2. Negative Adverbs (คำที่มีความหมายเชิงปฏิเสธในตัวเอง)\nคำเหล่านี้แปลว่า **\"แทบจะไม่ / ไม่ค่อยจะ\"** มีความหมายเป็นปฏิเสธอยู่แล้วในตัว:\n- `rarely` (แทบจะไม่เคย), `seldom` (ไม่บ่อยนัก), `hardly` (แทบจะไม่), `scarcely` (แทบจะไม่มี), `barely` (เกือบจะไม่)\n- *\"The server **hardly** consumes any CPU during idle hours.\"* (เซิร์ฟเวอร์แทบไม่กิน CPU เลย)\n\n⚠️ **กับดัก Double Negative (ปฏิเสธซ้อนปฏิเสธ):**\nในภาษาอังกฤษมาตรฐาน **ห้ามใช้คำปฏิเสธสองตัวซ้อนกันในประโยคเดียว** เพราะจะกลายเป็นความหมายผิด:\n- ❌ *I don't know nothing.* ➔ ✔️ *\"I **don't know anything**.\"* หรือ *\"I **know nothing**.\"*\n- ❌ *We didn't see nobody.* ➔ ✔️ *\"We **didn't see anybody**.\"*\n\n---\n\n### 3. Negative Inversion (การสลับประธาน-กริยาขั้นสูงสำหรับงานเขียนมืออาชีพ)\nเมื่อนำ **Negative Adverb** ขึ้นต้นประโยคเพื่อเน้นย้ำความพิเศษ โครงสร้างจะต้อง **สลับเอากริยาช่วยมาไว้หน้าประธาน**:\n`Negative Adverb + Auxiliary Verb + Subject + Main Verb`\n- ปกติ: *\"We rarely see such a critical vulnerability.\"*\n- Inversion: *\"**Rarely do we see** such a critical vulnerability.\"* (ไพเราะและทรงพลังมากในรายงานเทคนิค)\n- *\"**Hardly had we initiated** the migration when the network connection dropped.\"*\n",
        "examples": [
          {
            "en": "The microservice does not store sensitive authentication tokens in plain text.",
            "th": "ไมโครเซอร์วิสไม่ได้จัดเก็บโทเคนยืนยันตัวตนที่สำคัญไว้เป็นข้อความธรรมดาที่ไม่เข้ารหัส",
            "cat": "Tech"
          },
          {
            "en": "We didn't notice any latency degradation during the database upgrade.",
            "th": "พวกเราไม่พบปัญหาความหน่วงของระบบลดลงเลยในระหว่างการอัปเกรดฐานข้อมูล",
            "cat": "Tech"
          },
          {
            "en": "Rarely do we encounter an infrastructure outage caused by hardware failure.",
            "th": "ไม่บ่อยนักที่พวกเราจะเผชิญกับการหยุดทำงานของระบบโครงสร้างพื้นฐานที่มีสาเหตุมาจากฮาร์ดแวร์ขัดข้อง",
            "cat": "Tech"
          },
          {
            "en": "She doesn't usually attend the daily standup when traveling abroad.",
            "th": "ปกติเธอไม่ได้เข้าร่วมการประชุมสแตนด์อัปประจำวันเมื่อต้องเดินทางไปต่างประเทศ",
            "cat": "Daily"
          },
          {
            "en": "Hardly had the engineers pushed the release when the monitoring alert triggered.",
            "th": "แทบจะทันทีที่วิศวกรทำการพุชเวอร์ชันใหม่ขึ้นสู่ระบบ สัญญาณแจ้งเตือนตรวจสอบก็ดังขึ้น",
            "cat": "Tech"
          },
          {
            "en": "I don't have anything further to add to the meeting minutes.",
            "th": "ฉันไม่มีประเด็นใดเพิ่มเติมที่จะใส่ลงไปในบันทึกการประชุมแล้ว",
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
        "summary": "เขียนคำสั่ง รันบุ๊ก และคู่มือขั้นตอนการทำงาน (Runbooks & Documentation) ด้วย Imperative Mood อย่างมืออาชีพ",
        "formula": "Positive: Verb (Bare Infinitive) + Object | Negative: Do not / Never + Verb (Bare Infinitive)",
        "explanation": "\n### 1. โครงสร้างประโยคคำสั่งและคู่มือปฏิบัติการ (Imperative Sentence)\nประโยค Imperative ใช้เพื่อ **สั่งการ, แนะนำขั้นตอน, ให้คำแนะนำ (Instructions), หรือแจ้งเตือนความปลอดภัย (Warnings)**\nจุดเด่นคือ **\"ไม่มีประธานปรากฏในประโยค\"** เพราะผู้ฟังหรือผู้อ่านรู้โดยอัตโนมัติว่าประธานคือ **YOU (คุณ/ผู้อ่าน)**\n\n#### โครงสร้างหลัก:\n1. **บอกให้ทำ (Positive Imperative):** ขึ้นต้นด้วย **Bare Infinitive (กริยารูปแท้ไม่ผัน ไม่เติม s/ed/ing)**\n   - *\"**Restart** the background worker container.\"*\n   - *\"**Clone** the repository from GitHub.\"*\n   - *\"**Review** the security guidelines before deployment.\"*\n2. **ห้ามทำ (Negative Imperative):** ขึ้นต้นด้วย **Do not (Don't)** หรือ **Never**\n   - *\"**Do not expose** API secret keys in public commits.\"*\n   - *\"**Never run** direct schema migrations on production without a backup.\"*\n\n---\n\n### 2. การประยุกต์ใช้ในสายงาน Tech & DevOps (Runbooks & CI/CD)\nในคู่มือปฏิบัติงานระบบ (SOPs, Runbooks, Readme, CLI Tools) การใช้ Imperative Sentence คือมาตรฐานสากล:\n| บริบททางเทคนิค | ตัวอย่างคำสั่ง Imperative ที่ถูกต้อง | คำแปล |\n| คำสั่ง Git & Terminal | *\"**Commit** your changes and **push** to the feature branch.\"* | คอมมิตโค้ดและพุชไปยังกิ่งฟีเจอร์ |\n| คู่มือแก้ไข Incident | *\"**Check** the error logs in the central dashboard.\"* | ตรวจสอบไฟล์ล็อกข้อผิดพลาดในแดชบอร์ดกลาง |\n| ข้อกำหนดความปลอดภัย | *\"**Rotate** your access credentials every ninety days.\"* | สลับเปลี่ยนรหัสผ่านและคีย์เข้าใช้งานทุกๆ 90 วัน |\n| การจัดการ Cloud | *\"**Scale down** unutilized test instances to reduce costs.\"* | ลดจำนวนอินสแตนซ์ทดสอบที่ไม่ได้ใช้งานเพื่อประหยัดค่าใช้จ่าย |\n\n---\n\n### 3. การปรับโทนเสียงให้สุภาพสำหรับการทำงานร่วมกัน (Polite Imperatives)\nการสั่งการเพื่อนร่วมงานหรือลูกค้าอย่างสุภาพ ไม่ควรใช้คำสั่งห้วนๆ ให้ใช้วลีช่วยปรับความนุ่มนวล:\n- **Please / Kindly:** *\"Please verify your email address to complete registration.\"*\n- **Make sure to... / Be sure to...:** *\"Make sure to run unit tests before creating a pull request.\"*\n- **Remember to...:** *\"Remember to update the changelog before tagging the release.\"*\n",
        "examples": [
          {
            "en": "Verify the database connection strings before launching the microservice.",
            "th": "ตรวจสอบค่าคอนฟิกเชื่อมต่อฐานข้อมูลให้ถูกต้องก่อนเริ่มเปิดใช้งานไมโครเซอร์วิส",
            "cat": "Tech"
          },
          {
            "en": "Do not commit sensitive API keys or credentials directly to the repository.",
            "th": "ห้ามคอมมิตคีย์ API หรือข้อมูลลับสำหรับยืนยันตัวตนลงในคลังโค้ดโดยตรงเด็ดขาด",
            "cat": "Tech"
          },
          {
            "en": "Make sure to back up all persistent volumes prior to initiating the cluster upgrade.",
            "th": "อย่าลืมตรวจสอบให้แน่ใจว่าได้สำรองข้อมูล Persistent Volumes ทั้งหมดก่อนเริ่มอัปเกรดคลัสเตอร์",
            "cat": "Tech"
          },
          {
            "en": "Please review the proposed design document and leave your feedback by Friday.",
            "th": "กรุณาตรวจทานเอกสารข้อเสนอการออกแบบระบบและฝากข้อคิดเห็นไว้ภายในวันศุกร์นี้",
            "cat": "Daily"
          },
          {
            "en": "Never bypass the automated linting checks during the code review process.",
            "th": "อย่าข้ามขั้นตอนการตรวจสอบคุณภาพโค้ดอัตโนมัติ (Linting) ในระหว่างกระบวนการรีวิวโค้ด",
            "cat": "Tech"
          },
          {
            "en": "Remember to mute your microphone when you are not speaking during the conference call.",
            "th": "อย่าลืมปิดไมโครโฟนของคุณเมื่อคุณไม่ได้กำลังพูดในระหว่างการประชุมสาย",
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
        "summary": "ความสอดคล้องของประธานและกริยา (Subject-Verb Agreement) กฎ 6 ข้อที่คนมักพลาดในข้อสอบและการทำงานจริง",
        "formula": "Singular Subject + Singular Verb | Plural Subject + Plural Verb",
        "explanation": "\n### 1. กฎพื้นฐานที่สุด: เอกพจน์คู่เอกพจน์ พหูพจน์คู่พหูพจน์\nประธานและกริยาต้องมีพจน์ (Number) ที่สอดคล้องกันเสมอใน Present Simple:\n- **ประธานเอกพจน์ (He / She / It / คำนามเดี่ยว):** กริยาต้อง **เติม -s หรือ -es** (หรือใช้ `is`, `was`, `has`)\n  - *\"The server **monitors** system performance.\"*\n- **ประธานพหูพจน์ (They / We / คำนามหลายชิ้น):** กริยาต้อง **รูปเดิมไม่เติม s** (หรือใช้ `are`, `were`, `have`)\n  - *\"The servers **monitor** system performance.\"*\n\n---\n\n### 2. กฎทอง 6 ข้อที่มักออกสอบและเป็นกับดักในชีวิตจริง\n\n#### กฎที่ 1: ส่วนขยายคั่นกลาง (Intervening Prepositional Phrases)\nอย่าหลงกลคำนามที่อยู่ในส่วนขยายบุพบท! ให้มองหา **\"ประธานตัวจริง\"** ที่อยู่ข้างหน้าสุด:\n- *\"The **box** of spare server components **is** ready.\"* (ประธานคือ box เอกพจน์ จึงใช้ `is` แม้ components จะเป็นพหูพจน์)\n- *\"The **configuration** for multiple microservices **requires** validation.\"* (ประธานคือ configuration เอกพจน์)\n\n#### กฎที่ 2: สรรพนามไม่เจาะจง (Indefinite Pronouns) ถือเป็นเอกพจน์เสมอ!\n`Everyone`, `everybody`, `someone`, `nobody`, `each`, `either of`, `neither of`\n- *\"**Everyone** on our engineering team **wants** to deploy on Friday.\"* (ใช้ `wants` เติม s)\n- *\"**Each** of the microservices **has** an independent database.\"* (ใช้ `has`)\n\n#### กฎที่ 3: ประธานเชื่อมด้วย AND vs OR / NOR\n- เชื่อมด้วย **AND** ➔ ถือเป็นพหูพจน์เสมอ: *\"The architect **and** the engineer **are** reviewing the PR.\"*\n- เชื่อมด้วย **Either...or / Neither...nor** ➔ ผันตาม **ประธานตัวที่อยู่ใกล้กริยาที่สุด (Proximity Rule)**:\n  - *\"Neither the manager nor the **developers were** aware of the bug.\"* (ผันตาม developers ➔ were)\n  - *\"Neither the developers nor the **manager was** aware of the bug.\"* (ผันตาม manager ➔ was)\n\n#### กฎที่ 4: คำบอกสัดส่วนและเปอร์เซ็นต์ (Fractions & Percentages)\nผันตาม **คำนามที่อยู่หลัง of**:\n- *\"Fifty percent of the **memory is** used.\"* (memory นามนับไม่ได้ ➔ is)\n- *\"Fifty percent of the **containers are** healthy.\"* (containers นามนับได้พหูพจน์ ➔ are)\n\n#### กฎที่ 5: โครงสร้าง There is / There are\nผันตาม **คำนามตัวแรกที่ตามหลัง**:\n- *\"There **is a** critical security vulnerability in the legacy library.\"*\n- *\"There **are three** critical security vulnerabilities in the legacy library.\"*\n\n#### กฎที่ 6: คำนามที่ลงท้ายด้วย -s แต่เป็นเอกพจน์\n`news` (ข่าวสาร), `mathematics` (คณิตศาสตร์), `physics` (ฟิสิกส์), `series` (ชุด)\n- *\"The **news** about the successful launch **is** encouraging.\"* (news เป็นเอกพจน์เสมอ!)\n",
        "examples": [
          {
            "en": "The architecture of these microservices ensures high availability during peak traffic.",
            "th": "สถาปัตยกรรมของไมโครเซอร์วิสเหล่านี้รับประกันความพร้อมใช้งานสูงในระหว่างช่วงทราฟฟิกสูงสุด",
            "cat": "Tech"
          },
          {
            "en": "Everyone on the platform infrastructure team participates in the on-call rotation.",
            "th": "ทุกคนในทีมโครงสร้างพื้นฐานของแพลตฟอร์มมีส่วนร่วมในการเข้าเวรรับมือเหตุฉุกเฉิน (On-call)",
            "cat": "Tech"
          },
          {
            "en": "Neither the cloud provider nor our local data centers were affected by the outage.",
            "th": "ทั้งผู้ให้บริการคลาวด์และศูนย์ข้อมูลในพื้นที่ของเราต่างก็ไม่ได้รับผลกระทบจากเหตุการณ์ระบบล่ม",
            "cat": "Tech"
          },
          {
            "en": "A list of newly identified security vulnerabilities has been sent to all leads.",
            "th": "รายชื่อช่องโหว่ความปลอดภัยที่ตรวจพบล่าสุดได้ถูกส่งไปยังหัวหน้าทีมทุกคนแล้ว",
            "cat": "Tech"
          },
          {
            "en": "There are several unresolved questions regarding the quarterly budget allocation.",
            "th": "มีคำถามหลายข้อที่ยังไม่ได้ข้อสรุปเกี่ยวกับการจัดสรรงบประมาณประจำไตรมาส",
            "cat": "Daily"
          },
          {
            "en": "Eighty percent of the database storage is currently occupied by log archives.",
            "th": "แปดสิบเปอร์เซ็นต์ของพื้นที่จัดเก็บฐานข้อมูลกำลังถูกใช้งานโดยไฟล์ล็อกที่จัดเก็บถาวร",
            "cat": "Tech"
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
        "summary": "โครงสร้าง Subjunctive สำหรับมติที่ประชุม คำสั่ง และข้อเสนอแนะทางการ (Mandative) พร้อมกฎกริยาไม่ผันรูป (Bare Infinitive)",
        "formula": "S + recommend/insist/suggest + that + S + (should) + Bare Infinitive",
        "explanation": "\n### 1. Mandative Subjunctive คืออะไร?\nในภาษาอังกฤษระดับสูง โดยเฉพาะ **มติที่ประชุมทางธุรกิจ, ข้อเสนอแนะของสถาปนิกซอฟต์แวร์, หรือนโยบายทางการ** เมื่อต้องการแสดงว่าบางสิ่ง **\"ควรจะเกิดขึ้น, เป็นเรื่องจำเป็น, หรือได้รับการร้องขอ\"** จะใช้โครงสร้าง Subjunctive\n\n#### โครงสร้างมหัศจรรย์ (กริยาห้ามผันเด็ดขาด!):\n`Subject 1 + กริยาทางการ + that + Subject 2 + [should] + Bare Infinitive (กริยาแท้รูปเดิม)`\n\n💡 **จุดสังเกตสำคัญที่สุดในข้อสอบระดับสากล:**\nกริยาหลัง Subject 2 **ต้องเป็น Bare Infinitive (รูปดั้งเดิม ไม่เติม s/es, ไม่เปลี่ยนรูปอดีต, และ Verb to be ต้องเป็น \"be\")** แม้ประธานจะเป็น He, She, It ก็ตาม!\n- *\"The architect recommended that he **deploy** (ไม่ใช่ deploys) the application to multiple zones.\"*\n- *\"The compliance policy requires that all data **be** (ไม่ใช่ is) encrypted at rest.\"*\n\n---\n\n### 2. กลุ่มคำกริยาและคำคุณศัพท์ที่บังคับใช้ Subjunctive\n#### 1) กริยาที่แสดงการขอร้อง แนะนำ สั่งการ (Verbs of Request & Demand):\n- `recommend` (แนะนำ)\n- `suggest` (เสนอแนะ)\n- `insist` (ยืนกราน)\n- `demand` (เรียกร้อง)\n- `require` (กำหนด/บังคับ)\n- `propose` (เสนอข้อคิดเห็น)\n- *\"We suggest that she **take** the lead on the migration project.\"*\n\n#### 2) คุณศัพท์ที่บอกความสำคัญอย่างยิ่งยวด (Adjectives of Necessity):\nโครงสร้าง: `It is + Adjective + that + S + Bare Infinitive`\n- `essential` (จำเป็นยิ่ง)\n- `crucial` (สำคัญยิ่งยวด)\n- `vital` (คอขาดบาดตาย)\n- `mandatory` (ต้องทำตามกฎ)\n- `important` (สำคัญ)\n- *\"It is **crucial** that the cluster **remain** accessible during updates.\"*\n\n---\n\n### 3. Unreal Subjunctive (การสมมติสิ่งที่ตรงข้ามกับความเป็นจริง)\nใช้กับโครงสร้าง `I wish...` หรือ `If only...` เพื่อบอกความปรารถนาในสิ่งที่เป็นไปไม่ได้:\n1. **ปรารถนาในปัจจุบัน (ใช้ Past Simple / were สำหรับทุกประธาน):**\n   - *\"I wish our servers **were** closer to our European users.\"* (ใช้ were แทน was)\n   - *\"If only we **had** more time to refactor this module.\"*\n2. **ปรารถนา/เสียดายสิ่งที่ผ่านไปแล้วในอดีต (ใช้ Past Perfect: had + V.3):**\n   - *\"I wish we **had run** the load tests before launching publicly.\"* (เสียดายที่ในอดีตไม่ได้รัน)\n",
        "examples": [
          {
            "en": "The security team recommended that the engineer revoke the exposed API secret immediately.",
            "th": "ทีมความปลอดภัยแนะนำให้วิศวกรทำการเพิกถอนคีย์ความลับ API ที่หลุดออกไปโดยทันที",
            "cat": "Tech"
          },
          {
            "en": "It is crucial that every database write operation be logged to an immutable audit trail.",
            "th": "เป็นเรื่องสำคัญอย่างยิ่งยวดที่การเขียนข้อมูลลงฐานข้อมูลทุกครั้งจะต้องถูกบันทึกลงใน Audit Trail ที่แก้ไขไม่ได้",
            "cat": "Tech"
          },
          {
            "en": "The CTO insisted that all developers write unit tests for every new feature.",
            "th": "ประธานเจ้าหน้าที่ฝ่ายเทคโนโลยี (CTO) ยืนกรานให้นักพัฒนาทุกคนเขียน Unit Test สำหรับฟีเจอร์ใหม่ทุกตัว",
            "cat": "Tech"
          },
          {
            "en": "I wish our staging environment were an exact replica of the production infrastructure.",
            "th": "ฉันอยากให้ระบบ Staging ของเราเป็นร่างโคลนที่เหมือนกับโครงสร้างพื้นฐานของ Production ทุกประการ",
            "cat": "Tech"
          },
          {
            "en": "It is mandatory that every employee complete the compliance training before next week.",
            "th": "เป็นข้อบังคับตามระเบียบที่พนักงานทุกคนจะต้องผ่านการอบรมด้านการปฏิบัติตามกฎเกณฑ์ก่อนสัปดาห์หน้า",
            "cat": "Daily"
          },
          {
            "en": "The committee proposed that we postpone the release until all security audits are signed off.",
            "th": "คณะกรรมการเสนอแนะให้พวกเราเลื่อนการปล่อยระบบออกไปจนกว่าการตรวจสอบความปลอดภัยทั้งหมดจะได้รับการอนุมัติ",
            "cat": "Tech"
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
        "summary": "ถ่ายทอดคำพูดและสรุปการประชุมอย่างแม่นยำด้วย Reported Speech พร้อมกฎ Tense Backshift และการเปลี่ยนสรรพนาม/เวลา",
        "formula": "S + said (that) / told + Object + (that) + Backshifted Clause",
        "explanation": "\n### 1. Direct Speech vs Reported (Indirect) Speech\n- **Direct Speech (คำพูดตรง):** ยกคำพูดของคนอื่นมาใส่ในเครื่องหมายคำพูด (\"...\") ทุกตัวอักษร:\n  - *Sarah said, \"I am investigating the database deadlock.\"*\n- **Reported Speech (การรายงานคำพูด):** การนำสาระสำคัญของคำพูดมาเล่าต่ออย่างเป็นธรรมชาติโดยไม่ต้องใส่เครื่องหมายคำพูด:\n  - *Sarah said that she **was investigating** the database deadlock.*\n\n---\n\n### 2. ตารางแม่บทการถอย Tense (Tense Backshift Rules)\nเมื่อกริยานำเป็นอดีต (`said`, `told`, `reported`, `explained`) กริยาในประโยคที่ถูกรายงานต้อง **\"ถอยหลัง 1 Tense (Backshift)\"** เสมอ:\n\n| Direct Speech (คำพูดเดิม) | Reported Speech (เมื่อนำมารายงาน) | ตัวอย่างประโยคเปรียบเทียบ |\n| Present Simple (`V.1`) | Past Simple (`V.2`) | *\"We monitor logs.\"* ➔ He said they **monitored** logs. |\n| Present Continuous (`is/am/are + V.ing`) | Past Continuous (`was/were + V.ing`) | *\"I am deploying.\"* ➔ She said she **was deploying**. |\n| Past Simple (`V.2`) | Past Perfect (`had + V.3`) | *\"We fixed the bug.\"* ➔ They said they **had fixed** the bug. |\n| Present Perfect (`have/has + V.3`) | Past Perfect (`had + V.3`) | *\"I have pushed the commit.\"* ➔ He said he **had pushed** the commit. |\n| Future Simple (`will + V.inf`) | Conditional (`would + V.inf`) | *\"We will release tomorrow.\"* ➔ They said they **would release** the next day. |\n| `can` | `could` | *\"I can reproduce it.\"* ➔ She said she **could reproduce** it. |\n| `must / have to` | `had to` | *\"We must restart.\"* ➔ He said they **had to restart**. |\n\n💡 **ข้อยกเว้นที่ไม่ต้องถอย Tense:**\nถ้าสิ่งที่รายงานเป็น **ข้อเท็จจริงทางวิทยาศาสตร์ สัจธรรม หรือเรื่องที่ยังคงเป็นจริงอยู่ในปัจจุบัน**:\n- *\"The architect said that light **travels** faster than sound.\"* (ไม่เปลี่ยนเป็น traveled)\n\n---\n\n### 3. การเปลี่ยนคำบอกเวลาและสถานที่ (Time & Place Shifts)\nเมื่อบริบทเวลาและสถานที่เปลี่ยนไป คำเหล่านี้ต้องปรับตาม:\n- `now` ➔ `then`\n- `today` ➔ `that day`\n- `yesterday` ➔ `the day before` หรือ `the previous day`\n- `tomorrow` ➔ `the next day` หรือ `the following day`\n- `here` ➔ `there`\n- `this / these` ➔ `that / those`\n\n---\n\n### 4. Say vs Tell ต่างกันอย่างไร?\n⚠️ **จุดผิดยอดนิยม:**\n- **Say:** ไม่ต้องมีกรรมมารับตามหลัง: *\"She **said that** the pipeline failed.\"* (หรือ say to someone)\n- **Tell:** **ต้องมีกรรม (ผู้ฟัง) มารับตามหลังเสมอ!**: *\"She **told me that** the pipeline failed.\"* (ห้ามพูด *She told that ❌)\n",
        "examples": [
          {
            "en": "The lead architect said that the new cluster configuration would reduce latency by half.",
            "th": "หัวหน้าสถาปนิกกล่าวว่าการกำหนดค่าคลัสเตอร์ใหม่จะช่วยลดความหน่วงลงได้ครึ่งหนึ่ง",
            "cat": "Tech"
          },
          {
            "en": "She told the team that she had already verified all the database backups.",
            "th": "เธอแจ้งให้ทีมทราบว่าเธอได้ตรวจสอบไฟล์สำรองฐานข้อมูลทั้งหมดเรียบร้อยแล้ว",
            "cat": "Tech"
          },
          {
            "en": "Alex mentioned that he was taking a day off the following Monday.",
            "th": "อเล็กซ์แจ้งให้ทราบว่าเขาจะลางานหนึ่งวันในวันจันทร์ที่จะถึงนี้",
            "cat": "Daily"
          },
          {
            "en": "The security engineer reported that the vulnerability had been patched in the previous release.",
            "th": "วิศวกรความปลอดภัยรายงานว่าช่องโหว่นั้นได้รับการแพตช์แก้ไขไปแล้วในเวอร์ชันก่อนหน้า",
            "cat": "Tech"
          },
          {
            "en": "He asked me if I could help him configure the environment variables.",
            "th": "เขาถามฉันว่าฉันพอจะช่วยเขาตั้งค่าตัวแปรสภาพแวดล้อม (Environment Variables) ได้หรือไม่",
            "cat": "Tech"
          },
          {
            "en": "They told us that the conference room had already been reserved for the quarterly review.",
            "th": "พวกเขาแจ้งเราว่าห้องประชุมนั้นถูกจองไว้แล้วสำหรับการประชุมทบทวนผลงานประจำไตรมาส",
            "cat": "Daily"
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
        "summary": "เชื่อมโยงและขยายความคำนามอย่างมืออาชีพด้วย Relative Clause (Who, Whom, Whose, Which, That, Where) และแยกแยะ Defining vs Non-defining",
        "formula": "Noun + [Relative Pronoun + Clause] + Rest of Sentence",
        "explanation": "\n### 1. Relative Clause คืออะไร?\nRelative Clause (ประพันธสรรพนาม) คือ **\"อนุประโยคที่ทำหน้าที่เหมือน Adjective ขนาดยาว\"** วางไว้ติดกับคำนามที่ต้องการขยายความ เพื่อให้ข้อมูลเพิ่มเติมโดยไม่ต้องตัดเป็นประโยคสั้นๆ หลายประโยค\n\n#### ตารางการเลือกใช้ Relative Pronoun:\n| คำสรรพนามเชื่อม | คำนามที่ขยาย | หน้าที่ใน Relative Clause | ตัวอย่างประโยค |\n| **Who** | คน | เป็นประธาน (Subject) | *\"The engineer **who designed this system** is presenting.\"* |\n| **Whom** | คน | เป็นกรรม (Object) | *\"The developer **whom we hired last month** solved the bug.\"* |\n| **Whose** | คน / สิ่งของ / องค์กร | แสดงความเป็นเจ้าของ (Possessive) | *\"The company **whose cloud servers we use** announced maintenance.\"* |\n| **Which** | สิ่งของ / สัตว์ / ระบบ | เป็นประธานหรือกรรม | *\"We need a database **which can scale horizontally**.\"* |\n| **That** | คน หรือ สิ่งของ | ใช้ใน Defining Clause | *\"The fix **that was deployed yesterday** works perfectly.\"* |\n| **Where** | สถานที่ | บอกพิกัด | *\"This is the repository **where we store documentation**.\"* |\n| **When** | เวลา | บอกจังหวะเวลา | *\"I remember the day **when our service went viral**.\"* |\n\n---\n\n### 2. Defining vs Non-Defining Relative Clauses (จุดออกสอบที่สำคัญที่สุด!)\n\n#### 1) Defining Relative Clause (อนุประโยคระบุชี้เฉพาะ):\n- **จำเป็นต่อความหมายของประโยค** หากตัดออก ผู้ฟังจะไม่รู้ว่าหมายถึงอันไหน\n- **❌ ห้ามใส่เครื่องหมาย Comma (,) คั่นเด็ดขาด!**\n- **✔️ สามารถใช้ `that` แทน who หรือ which ได้**\n- *\"The microservice **that handles payments** experienced high latency.\"* (จำเป็นต้องบอก ไม่งั้นไม่รู้ว่าไมโครเซอร์วิสตัวไหน)\n\n#### 2) Non-Defining Relative Clause (อนุประโยคให้ข้อมูลเสริม):\n- คำนามข้างหน้าชัดเจนในตัวเองอยู่แล้ว (เช่น เป็นชื่อเฉพาะ Proper Noun หรือสิ่งที่มีหนึ่งเดียว)\n- ข้อมูลใน clause เป็นเพียง **\"ของแถม\"** แม้ตัดทิ้งประโยคหลักก็ยังสมบูรณ์\n- **✔️ ต้องใส่เครื่องหมาย Comma (,) คั่นหัวท้ายเสมอ!**\n- **❌ ห้ามใช้ `that` เด็ดขาด! (ต้องใช้ who หรือ which เท่านั้น)**\n- *\"Kubernetes**, which was originally developed by Google,** is now maintained by the CNCF.\"*\n\n---\n\n### 3. การละ Relative Pronoun (Omission)\nเราสามารถ **\"ละ (ตัดทิ้ง)\"** Relative Pronoun (who, which, that) ได้ **เมื่อมันทำหน้าที่เป็น \"กรรม\" ของประโยคย่อยเท่านั้น**:\n- *\"The pull request **[that] you submitted** has been approved.\"* (you เป็นประธาน submitted เป็นกริยา that เป็นกรรม ➔ ละได้)\n- ❌ แต่ถ้าทำหน้าที่เป็นประธาน **ห้ามละเด็ดขาด!**: *\"The pull request **that was** approved...\"* (ห้ามตัด that)\n",
        "examples": [
          {
            "en": "The engineer who designed the distributed messaging architecture just received a promotion.",
            "th": "วิศวกรผู้ออกแบบสถาปัตยกรรมระบบส่งข้อความแบบกระจายเพิ่งได้รับการเลื่อนตำแหน่ง",
            "cat": "Tech"
          },
          {
            "en": "PostgreSQL, which is an open-source relational database, offers robust transactional integrity.",
            "th": "PostgreSQL ซึ่งเป็นฐานข้อมูลเชิงสัมพันธ์แบบโอเพนซอร์ส มอบความถูกต้องสมบูรณ์ของการทำธุรกรรมที่แข็งแกร่ง",
            "cat": "Tech"
          },
          {
            "en": "The configuration file that you uploaded yesterday contains a syntax error.",
            "th": "ไฟล์กำหนดค่าคอนฟิกที่คุณอัปโหลดไปเมื่อวานนี้มีข้อผิดพลาดทางไวยากรณ์อยู่",
            "cat": "Tech"
          },
          {
            "en": "Sarah, whose team handles cloud infrastructure, presented the quarterly capacity report.",
            "th": "ซาร่า ซึ่งทีมของเธอดูแลระบบโครงสร้างพื้นฐานบนคลาวด์ ได้นำเสนอรายงานการใช้ทรัพยากรประจำไตรมาส",
            "cat": "Tech"
          },
          {
            "en": "This is the conference room where we usually host our daily standup meetings.",
            "th": "นี่คือห้องประชุมที่พวกเรามักจะใช้จัดประชุมสแตนด์อัปประจำวันอยู่เป็นประจำ",
            "cat": "Daily"
          },
          {
            "en": "The candidate whom we interviewed this morning demonstrated excellent problem-solving skills.",
            "th": "ผู้สมัครงานที่เราสัมภาษณ์ไปเมื่อเช้านี้ได้แสดงให้เห็นถึงทักษะการแก้ปัญหาที่ยอดเยี่ยม",
            "cat": "Daily"
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
        "summary": "ทำความเข้าใจการใช้ Participle (V.ing vs V.3) ทั้งในฐานะ Adjective และการย่อประโยคขั้นสูง (Participle Clauses)",
        "formula": "Present Participle (V.ing - Active/Cause) vs Past Participle (V.3 - Passive/Feeling)",
        "explanation": "\n### 1. Participle คืออะไร?\nParticiple คือรูปคำกริยาที่แปลงร่างมาทำหน้าที่เป็น **Adjective (คำคุณศัพท์)** หรือใช้สร้าง **Participle Clauses (การย่อประโยค)** เพื่อความกระชับและสละสลวยในงานเขียน\n\n---\n\n### 2. V.ing (Present Participle) vs V.3 (Past Participle)\n\n#### 1) ในบทบาทการบอกความรู้สึก / คุณลักษณะ:\n- **V.ing:** มีความหมายว่า **\"น่า... / ก่อให้เกิดความรู้สึก\"** หรือประธาน **\"เป็นผู้กระทำเอง (Active)\"**\n  - `interesting` (น่าสนใจ)\n  - `confusing` (น่าสับสน)\n  - `exhausting` (น่าเหน็ดเหนื่อย)\n  - *\"The documentation is **confusing**.\"* (เอกสารนี้น่าสับสน)\n  - *\"a **running** container\"* (คอนเทนเนอร์ที่กำลังรันอยู่)\n- **V.3:** มีความหมายว่า **\"รู้สึก... / ถูกกระทำ (Passive)\"**\n  - `interested` (รู้สึกสนใจ)\n  - `confused` (รู้สึกสับสน)\n  - `exhausted` (รู้สึกเหน็ดเหนื่อย)\n  - *\"The new developer was **confused** by the legacy codebase.\"* (นักพัฒนารู้สึกสับสน)\n  - *\"a **deployed** container\"* (คอนเทนเนอร์ที่ถูกติดตั้งเรียบร้อยแล้ว)\n\n---\n\n### 3. Participle Clauses (การย่อประโยคขั้นสูงสำหรับมืออาชีพ)\nแทนที่จะเขียนประโยคยาวๆ ด้วยคำเชื่อม `When`, `Because`, หรือ `After` เราสามารถย่อประโยคหน้าให้เหลือเพียง Participle:\n\n#### กฎทองของการย่อประโยค:\n⚠️ **ประธานของทั้งสองประโยคต้องเป็น \"คน/สิ่งเดียวกัน\" เท่านั้น!**\n\n1. **ย่อประโยคที่เป็น Active (ประธานทำเอง) ➔ ใช้ V.ing:**\n   - ประโยคเต็ม: *\"**Because the engineer noticed** a memory leak, he restarted the pod.\"*\n   - ย่อเหลือ: *\"**Noticing** a memory leak, the engineer restarted the pod.\"*\n2. **ย่อประโยคที่เป็น Passive (ประธานถูกกระทำ) ➔ ใช้ V.3:**\n   - ประโยคเต็ม: *\"**Because the software was tested** thoroughly, it showed zero defects in production.\"*\n   - ย่อเหลือ: *\"**Tested** thoroughly, the software showed zero defects in production.\"*\n3. **ย่อสิ่งที่ทำเสร็จก่อนแล้วค่อยทำอีกสิ่ง (Perfect Participle) ➔ ใช้ Having + V.3:**\n   - *\"**Having resolved** the incident, the on-call engineer wrote the post-mortem report.\"*\n",
        "examples": [
          {
            "en": "Noticing an unusual spike in database connections, the engineer investigated the connection pool.",
            "th": "เมื่อสังเกตเห็นการพุ่งสูงขึ้นผิดปกติของการเชื่อมต่อฐานข้อมูล วิศวกรจึงเข้าตรวจสอบ Connection Pool ทันที",
            "cat": "Tech"
          },
          {
            "en": "Tested under extreme load conditions, the microservice proved its exceptional resilience.",
            "th": "เมื่อได้รับการทดสอบภายใต้สภาวะโหลดที่หนักหน่วง ไมโครเซอร์วิสก็ได้พิสูจน์ถึงความทนทานอันยอดเยี่ยม",
            "cat": "Tech"
          },
          {
            "en": "The architecture workshop was fascinating, and everyone felt deeply inspired.",
            "th": "เวิร์กช็อปสถาปัตยกรรมระบบนั้นน่าสนใจมาก และทุกคนรู้สึกได้รับแรงบันดาลใจอย่างลึกซึ้ง",
            "cat": "Daily"
          },
          {
            "en": "Having completed the quarterly infrastructure audit, the DevOps team presented their findings.",
            "th": "หลังจากเสร็จสิ้นการตรวจสอบโครงสร้างพื้นฐานประจำไตรมาส ทีม DevOps ก็ได้นำเสนอข้อค้นพบของพวกเขา",
            "cat": "Tech"
          },
          {
            "en": "Deploying applications without automated integration tests is a high-risk practice.",
            "th": "การติดตั้งแอปพลิเคชันโดยไม่มีการทดสอบการเชื่อมต่อระบบอัตโนมัติเป็นการปฏิบัติที่มีความเสี่ยงสูง",
            "cat": "Tech"
          },
          {
            "en": "Exhausted from the long incident triage call, the team took a well-deserved break.",
            "th": "ด้วยความเหน็ดเหนื่อยจากการประชุมคัดกรองปัญหาที่ยาวนาน ทีมงานจึงได้พักผ่อนอย่างเต็มที่",
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
        "summary": "เน้นผลลัพธ์ของระบบและรายงานเหตุการณ์ด้วย Passive Voice ครอบคลุม 12 Tenses พร้อมเกณฑ์การเลือกว่าเมื่อใดควรใช้",
        "formula": "Subject + Verb to be + V.3 (Past Participle) + (by Agent)",
        "explanation": "\n### 1. ทำไมวงการ Tech และวิทยาศาสตร์จึงนิยมใช้ Passive Voice?\n- **Active Voice:** เน้นว่า **\"ใครเป็นคนทำ\"** (*\"Sarah deployed the code.\"*)\n- **Passive Voice:** เน้นว่า **\"อะไรถูกทำ / เกิดอะไรขึ้นกับระบบ\"** (*\"The code was deployed.\"*)\n\nในเอกสารทางเทคนิค (Technical Documentation, Release Notes, Post-mortem Reports) เรามักไม่สนใจว่าใครกดปุ่ม แต่เราสนใจ **\"สถานะของระบบและผลลัพธ์ที่เกิดขึ้น\"**:\n1. เมื่อไม่รู้ว่าใครทำ หรือผู้กระทำไม่สำคัญ (*\"A security vulnerability was discovered.\"*)\n2. เพื่อเน้นความเป็นกลาง ไม่ชี้นิ้วกล่าวโทษบุคคล (No-blame Culture) (*\"A database table was accidentally deleted.\"*)\n3. ในกระบวนการทางวิศวกรรม (*\"Incoming requests are balanced across three replicas.\"*)\n\n---\n\n### 2. ตารางแม่บท Passive Voice ทุก Tense สำคัญ\nโครงสร้างสากลคือ: `Verb to be (ผันตาม Tense และประธาน) + V.3`\n\n| Tense | Active Voice | Passive Voice Formula | ตัวอย่างประโยคจริง |\n| Present Simple | `S + V.1` | `is / am / are + V.3` | *\"Sensitive data **is encrypted** at rest.\"* |\n| Present Continuous | `S + is/am/are + V.ing` | `is / am / are + being + V.3` | *\"The new release **is being tested**.\"* |\n| Past Simple | `S + V.2` | `was / were + V.3` | *\"The issue **was resolved** yesterday.\"* |\n| Past Continuous | `S + was/were + V.ing` | `was / were + being + V.3` | *\"The server **was being patched** during the downtime.\"* |\n| Present Perfect | `S + have/has + V.3` | `have / has + been + V.3` | *\"The build **has been approved** by the lead.\"* |\n| Past Perfect | `S + had + V.3` | `had + been + V.3` | *\"The backup **had been created** before the crash.\"* |\n| Future Simple | `S + will + V.inf` | `will + be + V.3` | *\"The feature **will be launched** next week.\"* |\n| Modals (can/must/should) | `Modal + V.inf` | `Modal + be + V.3` | *\"Passwords **must be changed** regularly.\"* |\n\n---\n\n### 3. เมื่อใดควรใส่ \"by + Agent\" (ผู้กระทำ)?\nใส่เมื่อ **ผู้กระทำเป็นบุคคลสำคัญ หรือข้อมูลนั้นมีค่าต่อการตัดสินใจ**:\n- *\"The pull request was reviewed **by the security team**.\"*\n- แต่ถ้าเป็นคนทั่วไปหรือเห็นชัดอยู่แล้ว ให้ **ตัดทิ้ง**:\n  - *\"The server was restarted.\"* (ไม่ต้องบอกว่า by someone)\n",
        "examples": [
          {
            "en": "All customer passwords and access tokens are hashed and encrypted in the database.",
            "th": "รหัสผ่านและโทเคนการเข้าถึงของลูกค้าทั้งหมดได้รับการแฮชและเข้ารหัสไว้ในฐานข้อมูล",
            "cat": "Tech"
          },
          {
            "en": "The critical zero-day security vulnerability was patched within two hours of discovery.",
            "th": "ช่องโหว่ความปลอดภัยระดับ Zero-day ที่สำคัญได้รับการติดตั้งแพตช์แก้ไขภายในเวลาสองชั่วโมงหลังตรวจพบ",
            "cat": "Tech"
          },
          {
            "en": "A new staging environment is being set up to test the microservices migration.",
            "th": "สภาพแวดล้อม Staging ใหม่กำลังถูกจัดเตรียมขึ้นเพื่อทดสอบการย้ายระบบไมโครเซอร์วิส",
            "cat": "Tech"
          },
          {
            "en": "The quarterly financial report has been approved by the board of directors.",
            "th": "รายงานทางการเงินประจำไตรมาสได้รับการอนุมัติจากคณะกรรมการบริหารเรียบร้อยแล้ว",
            "cat": "Daily"
          },
          {
            "en": "Automated integration tests must be executed before any code can be merged.",
            "th": "การทดสอบการเชื่อมต่อระบบอัตโนมัติจะต้องถูกเรียกทำงานก่อนที่โค้ดจะได้รับอนุญาตให้รวมเข้ากับกิ่งหลัก",
            "cat": "Tech"
          },
          {
            "en": "The team lunch venue was reserved by our office coordinator yesterday morning.",
            "th": "สถานที่รับประทานอาหารกลางวันของทีมได้รับการสำรองที่นั่งไว้โดยผู้ประสานงานออฟฟิศเมื่อเช้าวานนี้",
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
        "summary": "เปรียบเทียบประสิทธิภาพ สถาปัตยกรรม และความเร็วด้วยขั้นปกติ ขั้นกว่า (Comparative) และขั้นสุด (Superlative)",
        "formula": "Positive: as...as | Comparative: -er than / more...than | Superlative: the -est / the most",
        "explanation": "\n### 1. 3 ระดับการเปรียบเทียบในภาษาอังกฤษ\nการเปรียบเทียบช่วยให้วิศวกรและผู้บริหารตัดสินใจเลือกเทคโนโลยี (Benchmark & Architecture Selection):\n1. **Positive Degree (ขั้นเท่ากัน):** `as + Adjective/Adverb + as`\n   - *\"PostgreSQL is **as reliable as** MySQL in this workload.\"*\n   - ปฏิเสธ: *\"The replica is **not as fast as** the primary node.\"*\n2. **Comparative Degree (ขั้นกว่า):** เปรียบเทียบ 2 สิ่ง\n   - `Adjective-er + than` หรือ `more + Adjective + than`\n   - *\"Redis is **faster than** disk-based storage.\"*\n3. **Superlative Degree (ขั้นสูงสุด):** เปรียบเทียบ 3 สิ่งขึ้นไป\n   - `the + Adjective-est` หรือ `the most + Adjective`\n   - *\"This is **the most secure** algorithm currently available.\"*\n\n---\n\n### 2. กฎการผันคำคุณศัพท์\n| ประเภทคำ | กฎขั้นกว่า (Comparative) | กฎขั้นสุด (Superlative) | ตัวอย่าง |\n| คำพยางค์เดียว | เติม `-er than` | เติม `the -est` | `fast` ➔ faster ➔ the fastest |\n| พยางค์เดียว ลงท้ายด้วย พยัญชนะ+สระตัวเดียว | เบิ้ลพยัญชนะท้าย + `-er` | เบิ้ลพยัญชนะท้าย + `-est` | `big` ➔ bigger ➔ the biggest |\n| 2 พยางค์ลงท้ายด้วย -y | เปลี่ยน y เป็น `-ier` | เปลี่ยน y เป็น `-iest` | `easy` ➔ easier ➔ the easiest |\n| 2 พยางค์ขึ้นไป | ใช้ `more ... than` | ใช้ `the most ...` | `scalable` ➔ more scalable ➔ the most scalable |\n\n#### ตารางกลุ่มคำเปลี่ยนรูปพิเศษ (Irregular Comparisons - ต้องจำ!):\n| รูปปกติ | ขั้นกว่า (Comparative) | ขั้นสุด (Superlative) |\n| `good / well` | **better** | **the best** |\n| `bad / badly` | **worse** | **the worst** |\n| `far` (ระยะทางจริง) | **farther** | **the farthest** |\n| `far` (ความลึกซึ้ง/เพิ่มเติม) | **further** | **the furthest** |\n| `little` (ปริมาณ) | **less** | **the least** |\n| `many / much` | **more** | **the most** |\n\n---\n\n### 3. โครงสร้างขั้นสูง: The more..., the more... (ยิ่ง...ก็ยิ่ง...)\nใช้แสดงความสัมพันธ์แบบแปรผันตรงหรือแปรผกผันในสถาปัตยกรรมระบบ:\n`The + ขั้นกว่า..., the + ขั้นกว่า...`\n- *\"**The larger** the cache size, **the lower** the database query latency.\"* (ยิ่งขนาดแคชใหญ่ ความหน่วงของคิวรีก็ยิ่งต่ำลง)\n- *\"**The more** automated tests we have, **the safer** our deployments become.\"*\n",
        "examples": [
          {
            "en": "Redis provides significantly faster read latency than traditional disk-based databases.",
            "th": "Redis มอบความหน่วงในการอ่านข้อมูลที่เร็วกว่าฐานข้อมูลแบบจัดเก็บบนดิสก์ดั้งเดิมอย่างเห็นได้ชัด",
            "cat": "Tech"
          },
          {
            "en": "This microservice architecture is much more scalable than our previous monolithic design.",
            "th": "สถาปัตยกรรมไมโครเซอร์วิสนี้สามารถรองรับการขยายตัวได้ดีกว่าการออกแบบระบบแบบ Monolith เดิมของเรามาก",
            "cat": "Tech"
          },
          {
            "en": "This is the most critical infrastructure vulnerability our security team has ever identified.",
            "th": "นี่คือช่องโหว่ของโครงสร้างพื้นฐานที่วิกฤตที่สุดเท่าที่ทีมความปลอดภัยของเราเคยตรวจพบมา",
            "cat": "Tech"
          },
          {
            "en": "The more automated tests we execute in CI/CD, the fewer bugs reach our production users.",
            "th": "ยิ่งเราเรียกทำงานการทดสอบอัตโนมัติใน CI/CD มากขึ้นเท่าไร บั๊กที่หลุดไปถึงผู้ใช้จริงบน Production ก็จะยิ่งน้อยลงเท่านั้น",
            "cat": "Tech"
          },
          {
            "en": "The morning express train is twice as fast as driving through downtown Bangkok traffic.",
            "th": "รถไฟด่วนรอบเช้าเร็วกว่าการขับรถฝ่าการจราจรใจกลางกรุงเทพฯ ถึงสองเท่า",
            "cat": "Daily"
          },
          {
            "en": "Her presentation was clearer and better structured than any other proposal submitted today.",
            "th": "การนำเสนอของเธอมีความชัดเจนและมีโครงสร้างที่ดีกว่าข้อเสนออื่นๆ ทั้งหมดที่ยื่นเข้ามาในวันนี้",
            "cat": "Daily"
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
        "summary": "ตรรกะเงื่อนไขความจริงทางวิทยาศาสตร์และโค้ด (Type 0) และการคาดการณ์สิ่งที่มีโอกาสเกิดขึ้นจริงในอนาคต (Type 1)",
        "formula": "Type 0: If + Present Simple, Present Simple | Type 1: If + Present Simple, will + V.inf",
        "explanation": "\n### 1. Conditionals (If-Clause) คือตรรกะพื้นฐานของทุกระบบ\nIf-Clause ประกอบด้วย 2 ส่วนเสมอ:\n1. **If-Clause (เงื่อนไข):** ขึ้นต้นด้วย `If` หรือคำเทียบเท่า\n2. **Main Clause (ผลลัพธ์):** สิ่งที่จะเกิดขึ้นตามมา\n\n---\n\n### 2. Type 0: Zero Conditional (ความจริงสากล & ตรรกะโปรแกรม)\nใช้กับ **กฎทางธรรมชาติ, กฎเกณฑ์ทางกายภาพ, หรือตรรกะระบบโค้ด** ที่เมื่อเหตุการณ์ A เกิด ผลลัพธ์ B จะเกิดขึ้น **100% แน่นอน**:\n`If + Present Simple (S + V.1), Present Simple (S + V.1)`\n- *\"If CPU temperature **exceeds** 90 degrees, the server **throttles** automatically.\"*\n- *\"If you **heat** water to 100 degrees Celsius, it **boils**.\"*\n- 💡 ใน Type 0 สามารถใช้คำว่า `When` แทนคำว่า `If` ได้โดยความหมายแทบไม่เปลี่ยน:\n  - *\"**When** the disk fills up, writes **fail**.\"*\n\n---\n\n### 3. Type 1: First Conditional (สิ่งที่เป็นไปได้จริงในอนาคต)\nใช้กับเหตุการณ์ที่มี **โอกาสเกิดขึ้นได้จริงในปัจจุบันหรืออนาคต (Real Possibility)**:\n`If + Present Simple (S + V.1), will / can / should + V.inf`\n⚠️ **กฎเหล็กข้อห้าม:** ห้ามใส่ `will` ไว้ในประโยคย่อยหลัง If เด็ดขาด! (ห้ามพูด *If it will rain ❌)\n- *\"If all automated tests **pass**, we **will deploy** the release tonight.\"*\n- *\"If you **need** any assistance with the API, I **can help** you.\"*\n\n---\n\n### 4. คำเชื่อมแทน IF ที่วิศวกรและมืออาชีพต้องรู้:\n1. **Unless (ถ้าไม่... = If not):**\n   - *\"**Unless** we optimize the database query, the server **will crash** under peak traffic.\"*\n   - (= If we do not optimize the database query, ...)\n2. **Provided that / As long as (ตราบใดที่ / มีเงื่อนไขว่า):**\n   - *\"We can deploy to production **as long as** the test coverage remains above 80%.\"*\n3. **In case (เผื่อว่า):**\n   - *\"Keep the rollback script ready **in case** the deployment fails.\"*\n",
        "examples": [
          {
            "en": "If the cluster memory consumption exceeds ninety percent, the autoscaler spawns new pods automatically.",
            "th": "หากการใช้หน่วยความจำของคลัสเตอร์เกินเก้าสิบเปอร์เซ็นต์ ระบบขยายอัตโนมัติจะสร้างพ็อดใหม่โดยทันที",
            "cat": "Tech"
          },
          {
            "en": "If all integration tests pass on the staging environment, we will trigger the production release tonight.",
            "th": "หากการทดสอบการเชื่อมต่อระบบทั้งหมดผ่านบน Staging คืนนี้พวกเราจะเริ่มปล่อยระบบโปรดักชัน",
            "cat": "Tech"
          },
          {
            "en": "Unless we renew the TLS security certificates this week, users will encounter browser security warnings.",
            "th": "หากพวกเราไม่ต่ออายุใบรับรองความปลอดภัย TLS ภายในสัปดาห์นี้ ผู้ใช้จะพบคำเตือนความปลอดภัยบนเบราว์เซอร์",
            "cat": "Tech"
          },
          {
            "en": "You can work remotely from anywhere as long as you maintain consistent communication with the team.",
            "th": "คุณสามารถทำงานระยะไกลจากที่ใดก็ได้ ตราบใดที่คุณยังคงรักษาการสื่อสารกับทีมอย่างสม่ำเสมอ",
            "cat": "Daily"
          },
          {
            "en": "Keep a local database snapshot ready in case the cloud migration encounters unexpected corruption.",
            "th": "สำรองไฟล์สแนปช็อตฐานข้อมูลไว้บนเครื่องตัวเองด้วย เผื่อว่าการย้ายระบบขึ้นคลาวด์จะเจอข้อมูลเสียหายที่ไม่คาดคิด",
            "cat": "Tech"
          },
          {
            "en": "If you finish your sprint deliverables early, feel free to explore the new monitoring tools.",
            "th": "หากคุณทำงานส่งมอบประจำสปรินต์เสร็จก่อนเวลา คุณสามารถใช้เวลาสำรวจเครื่องมือตรวจสอบระบบตัวใหม่ได้อย่างเต็มที่",
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
        "summary": "การสมมติตรงข้ามปัจจุบัน (Type 2) และการวิเคราะห์บทเรียนความผิดพลาด/เสียดายในอดีต (Type 3 & Post-mortem Analysis)",
        "formula": "Type 2: If + Past Simple (were), would + V.inf | Type 3: If + Past Perfect, would have + V.3",
        "explanation": "\n### 1. Type 2: Second Conditional (สมมติตรงข้ามกับความจริงในปัจจุบัน)\nใช้กับเหตุการณ์ที่ **เป็นไปไม่ได้ในปัจจุบัน หรือโอกาสเกิดขึ้นน้อยมาก (Hypothetical & Unreal Present)**:\n`If + Past Simple (V.2), would / could / might + V.inf`\n\n💡 **กฎพิเศษของ Verb to be:**\nในภาษาทางการหรือข้อสอบมาตรฐาน ให้ใช้ **WERE** กับประธานทุกตัว (รวมถึง I, He, She, It):\n- *\"If I **were** the CTO, I **would migrate** our infrastructure to Kubernetes.\"*\n- *\"If our legacy database **supported** real-time streaming, we **would build** the feature immediately.\"* (แต่ความจริงปัจจุบันฐานข้อมูลไม่รองรับ)\n- ใช้ในการให้คำแนะนำ: *\"If I **were** you, I **would consult** the senior architect.\"*\n\n---\n\n### 2. Type 3: Third Conditional (สมมติตรงข้ามกับอดีต / เสียดายในอดีต)\nใช้ในการวิเคราะห์เหตุการณ์ที่ **ผ่านไปแล้วในอดีต และไม่สามารถกลับไปแก้ไขได้แล้ว (Unreal Past & Regret)** หัวใจสำคัญของการเขียนรายงานวิเคราะห์ปัญหา (Post-mortem Analysis):\n`If + Past Perfect (had + V.3), would / could / might + have + V.3`\n\n- *\"If we **had configured** the database alerts properly, we **would have detected** the outage sooner.\"*\n  - (ความจริงในอดีต: ตอนนั้นไม่ได้ตั้งค่าการแจ้งเตือนไว้ดีพอ ➔ จึงตรวจจับปัญหาได้ช้า)\n- *\"If she **had attended** the standup meeting, she **would have known** about the deployment freeze.\"*\n  - (ความจริงในอดีต: เธอไม่ได้เข้าประชุม ➔ เลยไม่รู้เรื่องการระงับการปล่อยระบบ)\n\n---\n\n### 3. ตารางสรุปเปรียบเทียบ If-Clause ครบทั้ง 4 ประเภท\n| ประเภท If-Clause | Tense ใน If-Clause | Tense ใน Main Clause | มิติความเป็นจริง |\n| **Type 0** | Present Simple (`V.1`) | Present Simple (`V.1`) | จริงแท้ 100% / ตรรกะโค้ด |\n| **Type 1** | Present Simple (`V.1`) | `will + V.inf` | มีโอกาสเกิดขึ้นจริงในอนาคต |\n| **Type 2** | Past Simple (`V.2 / were`) | `would + V.inf` | จินตนาการ / ตรงข้ามกับปัจจุบัน |\n| **Type 3** | Past Perfect (`had + V.3`) | `would have + V.3` | ย้อนอดีต / เสียดาย / แก้ไขไม่ได้แล้ว |\n\n---\n\n### 4. Mixed Conditionals (เงื่อนไขผสมอดีตส่งผลถึงปัจจุบัน)\nเมื่อ **เหตุการณ์ในอดีต (Past)** ส่งผลกระทบต่อ **สถานะในปัจจุบัน (Present)**:\n`If + Past Perfect (อดีต), would + V.inf (ปัจจุบัน)`\n- *\"If we **had backed up** the database yesterday, our website **would be** online right now.\"*\n  - (เมื่อวานไม่ได้แบ็กอัป ➔ ตอนนี้เว็บเลยยังล่มอยู่)\n",
        "examples": [
          {
            "en": "If I were the lead architect, I would redesign our monolithic billing service into event-driven microservices.",
            "th": "หากฉันเป็นหัวหน้าสถาปนิก ฉันจะออกแบบระบบเรียกเก็บเงินที่เป็น Monolith ใหม่ให้กลายเป็นไมโครเซอร์วิสแบบขับเคลื่อนด้วย Event",
            "cat": "Tech"
          },
          {
            "en": "If we had performed comprehensive load testing before launch, the server wouldn't have crashed on Black Friday.",
            "th": "หากพวกเราได้ทำการทดสอบการรับโหลดอย่างครอบคลุมก่อนเปิดตัว เซิร์ฟเวอร์ก็คงไม่ล่มในวัน Black Friday",
            "cat": "Tech"
          },
          {
            "en": "If our team had more senior frontend engineers, we could complete this dashboard in two sprints.",
            "th": "หากทีมของเรามีวิศวกร Frontend ระดับซีเนียร์มากกว่านี้ พวกเราคงจะทำแดชบอร์ดนี้เสร็จได้ภายในสองสปรินต์",
            "cat": "Tech"
          },
          {
            "en": "If she had received the calendar invite on time, she would have joined the executive quarterly briefing.",
            "th": "หากเธอได้รับคำเชิญบนปฏิทินตรงเวลา เธอคงจะได้เข้าร่วมการประชุมสรุปภาพรวมประจำไตรมาสของผู้บริหารไปแล้ว",
            "cat": "Daily"
          },
          {
            "en": "If the DevOps team had automated the certificate renewal, the HTTPS connection would not have expired.",
            "th": "หากทีม DevOps ได้ตั้งค่าต่ออายุใบรับรองความปลอดภัยแบบอัตโนมัติ การเชื่อมต่อแบบ HTTPS ก็คงไม่หมดอายุลง",
            "cat": "Tech"
          },
          {
            "en": "If I were in your position, I would take advantage of the international cloud certification sponsorship.",
            "th": "หากฉันอยู่ในจุดเดียวกับคุณ ฉันจะคว้าโอกาสรับทุนสอบใบรับรองคลาวด์ระดับสากลนี้ไว้อย่างแน่นอน",
            "cat": "Daily"
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
        "summary": "แม่บทกริยาช่วย Modal Verbs (Can, Could, May, Might, Must, Should, Would) และ Modal Perfects เพื่อการสื่อสารอย่างมืออาชีพ",
        "formula": "Subject + Modal Verb + Bare Infinitive (V.inf) | Modal + have + V.3",
        "explanation": "\n### 1. กฎทองสากลของ Modal Verbs\nModal Verbs (กริยาช่วยแสดงทัศนคติ ความจำเป็น หรือความสามารถ) มีกฎเหล็ก 3 ข้อที่ไม่เคยเปลี่ยนแปลง:\n1. **ตามด้วย Bare Infinitive (กริยาแท้รูปเดิม) เสมอ:** ห้ามเติม `-s`, `-ed`, `-ing` หรือมี `to` คั่น\n   - *\"The server **can handle** 10,000 requests per second.\"* (ไม่ใช่ can handles หรือ can to handle)\n2. **ห้ามเติม s ที่ตัว Modal:** แม้ประธานจะเป็น He/She/It (He can, She must)\n3. **ทำเป็นปฏิเสธและคำถามได้ทันที:** โดยไม่ต้องใช้ do/does/did (*\"You **should not** commit passwords.\"*, *\"**Can** you review this?\"*)\n\n---\n\n### 2. ตารางเจาะลึก 7 Modal Verbs และระดับการใช้งานจริง\n| Modal Verb | การใช้งานหลัก | ระดับความเป็นไปได้ / ความสุภาพ | ตัวอย่างประโยคจริง |\n| **Can** | • ความสามารถ (Ability)<br>• การอนุญาตแบบเป็นกันเอง | ความสามารถ 100% / ไม่เป็นทางการ | *\"Our service **can process** bulk transactions.\"* |\n| **Could** | • ความสามารถในอดีต<br>• การขอร้องอย่างสุภาพมาก | สุภาพระดับธุรกิจ (Polite Request) | *\"**Could** you please review my pull request?\"* |\n| **May** | • การขออนุญาตทางการ<br>• ความเป็นไปได้ระดับ 50% | ทางการสูง / อาจจะ | *\"**May** I ask a clarifying question about the schema?\"* |\n| **Might** | • ความเป็นไปได้ระดับ 30-40% (น้อยกว่า may) | มีโอกาสเกิดขึ้นไม่มาก | *\"The latency **might** spike during the data migration.\"* |\n| **Must** | • ข้อบังคับเด็ดขาด (Obligation)<br>• การอนุมานที่มั่นใจ 95%+ | จำเป็นต้องทำ 100% (กฎหมาย/ระบบ) | *\"All API endpoints **must** authenticate with a token.\"* |\n| **Should** | • ข้อเสนอแนะ / คำแนะนำที่ดี (Advice)<br>• ความคาดหวัง | ควรทำ / สิ่งที่น่าจะเกิดตามแผน | *\"You **should** add unit tests for edge cases.\"* |\n| **Would** | • การยื่นข้อเสนอสุภาพ<br>• สมมติใน If-Clause Type 2 | สุภาพและนุ่มนวล | *\"**Would** you like to lead the technical demonstration?\"* |\n\n---\n\n### 3. Must vs Have to ต่างกันอย่างไร?\n- **Must:** ความจำเป็นที่เกิดจาก **ความรู้สึกของผู้พูดเอง หรือเป็นกฎเกณฑ์เด็ดขาดของระบบ**:\n  - *\"I **must** finish this security patch before going to bed.\"*\n  - ปฏิเสธ **Must not (ห้ามทำเด็ดขาด!):** *\"You **must not** share production database access.\"*\n- **Have to:** ความจำเป็นที่มาจาก **ปัจจัยภายนอก (กฎระเบียบบริษัท / กฎหมาย)**:\n  - *\"We **have to** comply with GDPR data privacy regulations.\"*\n  - ปฏิเสธ **Don't have to (ไม่จำเป็นต้องทำ แต่จะทำก็ได้):** *\"You **don't have to** work overtime tonight.\"*\n\n---\n\n### 4. Modal Perfects: การวิเคราะห์และประเมินสิ่งที่ผ่านไปแล้วในอดีต\nเมื่อนำ Modal มารวมกับ `have + V.3` จะกลายเป็นการแสดงความคิดเห็นต่อเหตุการณ์ในอดีต:\n1. **Should have + V.3 (น่าจะได้ทำ... แต่ไม่ได้ทำ):**\n   - *\"We **should have backed up** the database before upgrading.\"* (เสียดาย ตอนนั้นไม่ได้แบ็กอัป)\n2. **Could have + V.3 (ทำได้ในตอนนั้น... แต่ไม่ได้เลือกทำ):**\n   - *\"We **could have scaled up** the server, but we chose to optimize queries instead.\"*\n3. **Must have + V.3 (ต้องเป็นแบบนั้นแน่ๆ ในอดีต - มั่นใจสูงมาก):**\n   - *\"The deployment **must have failed** because the notification never arrived.\"*\n",
        "examples": [
          {
            "en": "All engineers must verify their two-factor authentication credentials every ninety days.",
            "th": "วิศวกรทุกคนต้องทำการยืนยันตัวตนแบบสองปัจจัย (2FA) ใหม่ทุกๆ เก้าสิบวันตามระเบียบบังคับ",
            "cat": "Tech"
          },
          {
            "en": "Could you please review the architectural design diagram before our client presentation?",
            "th": "คุณพอจะช่วยตรวจทานแผนภาพการออกแบบสถาปัตยกรรมระบบก่อนการนำเสนอต่อลูกค้าได้ไหม?",
            "cat": "Tech"
          },
          {
            "en": "We should have executed comprehensive integration tests before rolling out the release to production.",
            "th": "พวกเราน่าจะได้ทำการทดสอบการเชื่อมต่อระบบอย่างครอบคลุมก่อนที่จะปล่อยเวอร์ชันนี้ขึ้นสู่ Production",
            "cat": "Tech"
          },
          {
            "en": "The database connection might experience minor intermittent latency during the scheduled index rebuild.",
            "th": "การเชื่อมต่อฐานข้อมูลอาจมีอาการหน่วงเป็นระยะๆ เล็กน้อยในระหว่างการสร้างดัชนีข้อมูลใหม่ตามกำหนดการ",
            "cat": "Tech"
          },
          {
            "en": "You don't have to stay late at the office if you have already completed all your sprint tasks.",
            "th": "คุณไม่จำเป็นต้องอยู่ดึกที่ออฟฟิศหากคุณทำงานส่งมอบประจำสปรินต์เสร็จสิ้นหมดแล้ว",
            "cat": "Daily"
          },
          {
            "en": "Would you like me to schedule a brief technical alignment call for tomorrow morning?",
            "th": "คุณต้องการให้ฉันนัดหมายการประชุมปรึกษาหารือเชิงเทคนิคสั้นๆ สำหรับช่วงเช้าวันพรุ่งนี้หรือไม่?",
            "cat": "Daily"
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
        "summary": "ประมวลผลความรู้ไวยากรณ์ภาษาอังกฤษ 16 หัวข้อ สู่ทักษะการสื่อสารที่ถูกต้อง มั่นใจ และพร้อมใช้งานจริง",
        "formula": "Universal Grammar Architecture: Syntax + Tenses + Clauses + Voice + Modals",
        "explanation": "\n### 1. ยินดีด้วย! คุณเดินทางมาถึงบทสรุปภาพรวมของ Grammar Mastery\nการเรียนรู้ไวยากรณ์ไม่ใช่การท่องจำกฎเกณฑ์ที่แห้งแล้ง แต่คือการ **\"เข้าใจสถาปัตยกรรมของภาษา (Language Architecture)\"** เพื่อถ่ายทอดความคิด โค้ด ตรรกะ และวิสัยทัศน์ของคุณออกไปสู่ระดับสากลได้อย่างแม่นยำ ไร้ข้อผิดพลาด\n\n---\n\n### 2. แผนที่สถาปัตยกรรมไวยากรณ์ (The 5 Core Pillars Review)\n\n#### เสาหลักที่ 1: Building Blocks (ชนิดของคำและคำนำหน้านาม)\n- **Nouns & Pronouns:** แยกแยะนามนับได้/ไม่ได้ (`information`, `software` ห้ามเติม s), สรรพนามประธาน/กรรม/แสดงเจ้าของ (`my` vs `mine`), และสรรพนามสะท้อนกลับ (`itself`)\n- **Determiners:** กฎเสียงสระของ `an` (`an hour`, `an API`) vs `a` (`a user`), และความแตกต่างของ `some` vs `any`, `few` vs `little`\n\n#### เสาหลักที่ 2: Tenses & Time Logic (มิติกาลเวลา)\n- **Present Simple vs Continuous:** ข้อเท็จจริง/กิจวัตร (`V.1`) vs กำลังทำ/ชั่วคราว (`is/am/are + V.ing`) พร้อมกฎห้ามใช้ V.ing กับ Stative Verbs (`know`, `contain`)\n- **Past Simple vs Present Perfect:** อดีตจบแล้วระบุเวลาชัดเจน (`yesterday`) vs ผลลัพธ์เชื่อมโยงถึงปัจจุบัน (`since`, `for`, `already`)\n\n#### เสาหลักที่ 3: Sentence Mechanics & Questions (โครงสร้างและคำถาม)\n- **Compound & Complex Sentences:** การเชื่อมด้วย FANBOYS พร้อมเครื่องหมาย Comma, และคำเชื่อมสาเหตุ/เงื่อนไข (`because`, `although`)\n- **Questions:** โครงสร้างคำถามตรง `WH + Aux + S + V?` และ Indirect Questions สุภาพ `Could you tell me where the server is?` (ไม่สลับกริยา)\n\n#### เสาหลักที่ 4: Advanced Synthesis (การสังเคราะห์ขั้นสูง)\n- **Subject-Verb Agreement:** กฎการจับคู่ประธานและกริยา โดยเฉพาะการไม่หลงกลส่วนขยายคั่นกลาง และ Indefinite Pronouns (`everyone is`)\n- **Active vs Passive Voice:** การเน้นผลลัพธ์ของระบบ `be + V.3` ในรายงานเทคนิค\n- **Relative Clauses:** `who`, `which`, `that` และการใช้ Comma ใน Non-defining clause\n\n#### เสาหลักที่ 5: Logic & Modals (ตรรกะและกริยาช่วย)\n- **Conditionals (If-Clause):** Type 0 (จริง 100%), Type 1 (อนาคตเป็นไปได้), Type 2 (สมมติปัจจุบัน were), Type 3 (ย้อนอดีต had + V.3)\n- **Modal Verbs:** `must` vs `have to`, และ Modal Perfects เพื่อการวิเคราะห์สิ่งที่ผ่านไปแล้ว (`should have done`)\n\n---\n\n### 3. เช็กลิสต์ตรวจทานงานเขียนก่อนกดส่ง (The Pre-flight Writing Checklist)\nก่อนกดส่ง Pull Request, ส่งอีเมลหาผู้บริหาร หรือโพสต์ข้อความลง Slack/Teams ให้ตรวจสอบ 4 ข้อนี้:\n1. ✔️ **Subject-Verb Match:** ประธานเอกพจน์ กริยาเติม s หรือยัง?\n2. ✔️ **Uncountable Nouns:** เผลอเติม s ให้คำอย่าง `information`, `software`, `feedback` หรือไม่?\n3. ✔️ **Pronoun Case:** สรรพนามหลังบุพบทเป็นรูปกรรมหรือไม่? (`Between you and me`)\n4. ✔️ **Indirect Question:** ในคำถามสุภาพ ได้เรียงคำเป็น ประธาน + กริยา (ไม่ใส่ did/do) แล้วหรือยัง?\n\n---\n\n### 4. ก้าวต่อไป: ฝึกทำแบบทดสอบ Capstone 10 ข้อด้านล่างนี้!\nแบบทดสอบด้านล่างรวบรวมโจทย์ประมวลความรู้ครอบคลุมทุกเสาหลัก ลองทดสอบความแม่นยำของคุณได้ทันที!\n",
        "examples": [
          {
            "en": "The lead architect recommended that our team deploy the containerized microservices to multiple cloud regions.",
            "th": "หัวหน้าสถาปนิกแนะนำให้ทีมของเราติดตั้งไมโครเซอร์วิสในรูปแบบคอนเทนเนอร์ขึ้นสู่คลาวด์หลายภูมิภาค",
            "cat": "Tech"
          },
          {
            "en": "If we had performed rigorous load testing, we would have discovered the database deadlock before the launch.",
            "th": "หากพวกเราได้ทำการทดสอบการรับโหลดอย่างเข้มงวด พวกเราคงจะตรวจพบปัญหา Deadlock ในฐานข้อมูลก่อนการเปิดตัว",
            "cat": "Tech"
          },
          {
            "en": "Could you please let me know whether the automated security scanning pipeline has completed its audit?",
            "th": "คุณช่วยแจ้งให้ฉันทราบหน่อยได้ไหมว่าไปป์ไลน์การสแกนความปลอดภัยอัตโนมัติได้ดำเนินการตรวจสอบเสร็จสิ้นแล้วหรือยัง?",
            "cat": "Tech"
          },
          {
            "en": "Between you and me, the new continuous delivery framework is much more efficient than our legacy scripts.",
            "th": "รู้กันแค่ระหว่างคุณกับฉันนะ เฟรมเวิร์กการส่งมอบซอฟต์แวร์แบบต่อเนื่องตัวใหม่นี้มีประสิทธิภาพมากกว่าสคริปต์เก่าของเรามาก",
            "cat": "Tech"
          },
          {
            "en": "Everyone in the organization is required to complete the annual cybersecurity awareness certification.",
            "th": "ทุกคนในองค์กรจำเป็นต้องผ่านการรับรองการตระหนักรู้ด้านความปลอดภัยทางไซเบอร์ประจำปีให้เสร็จสิ้น",
            "cat": "Daily"
          },
          {
            "en": "The conference presentation was fascinating, and it inspired the engineers to adopt modern DevOps practices.",
            "th": "การนำเสนอในงานสัมมนานั้นน่าประทับใจมาก และได้สร้างแรงบันดาลใจให้วิศวกรนำแนวปฏิบัติด้าน DevOps สมัยใหม่มาปรับใช้",
            "cat": "Daily"
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
