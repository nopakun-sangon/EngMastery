/**
 * EngMastery: Remote & Cross-Cultural Workplace Tracks Database (workplaceTracksData)
 * Specialized English curriculum across 4 Professional Workplace Domains:
 * 1. Async Communication Mastery
 * 2. Constructive Disagreement & Diplomatic Pushback
 * 3. Small Talk & Socializing in Tech
 * 4. Performance Review & Salary Negotiation
 */

const workplaceTracksData = [
  {
    "id": "workplace-async-slack",
    "title": "Async Communication & Context-Rich Messaging",
    "titleTh": "การสื่อสารแบบ Asynchronous บน Slack, Jira และ Teams โดยไม่ต้องรอตอบกลับไปมา",
    "icon": "💬",
    "badge": "Async Mastery",
    "badgeColor": "indigo",
    "description": "เรียนรู้ศิลปะการทำงานข้าม Timezone: ตั้งแต่กฎ No-Hello Rule, การเขียนข้อความให้ครบ 3 องค์ประกอบในข้อความเดียว (Context-Rich), วินัยการใช้ Thread และการส่งต่องานข้ามกะ (Handover Notes)",
    "units": [
      {
        "id": "wp-async-01",
        "title": "Unit 1: The No-Hello Rule & Rich Context (เลิกทักแค่ Hi แล้วเงียบ)",
        "summary": "เปลี่ยนนิสัยการทักแชตที่สร้างความรำคาญ เป็นการส่งสารที่มีประสิทธิภาพ: ทักทาย + ระบุความต้องการ + แนบบริบท + กำหนดเวลาในข้อความเดียว",
        "formula": "[Greeting + Name] + [Core Request/Goal] + [Background Context/Links] + [Action Required & Timeline]",
        "explanation": "### 1. ปัญหาการทัก \"Hi\" แล้วเงียบ (The \"No-Hello\" Rule)\nในองค์กรเทคโนโลยีชั้นนำทั่วโลก วัฒนธรรมอย่างหนึ่งที่เคร่งครัดมากคือ **\"nohello.net\"** นั่นคือ ห้ามทักมาแค่ *\"Hi Alex\"* แล้วรอให้อีกฝ่ายตอบ *\"Hi\"* ก่อนแล้วค่อยบอกเรื่องที่ต้องการ เพราะ:\n1. มันขัดจังหวะสมาธิการเขียนโค้ด (Context Switching)\n2. หากทำงานข้าม Timezone อีกฝ่ายจะเสียเวลาไปเปล่าๆ 1 วันเต็มๆ โดยที่ไม่ได้งาน\n\n### 📊 โครงสร้างข้อความแบบ Context-Rich (3 เสาหลัก)\n| ส่วนประกอบ | วัตถุประสงค์ | ตัวอย่างประโยค |\n|---|---|---|\n| **1. Intent (เจตนา)** | บอกทันทีว่าทักมาเรื่องอะไร | *\"I'm reaching out regarding the Stripe webhook failure in ticket #402.\"* |\n| **2. Context (บริบท & สิ่งที่ทำไปแล้ว)** | แนบลิงก์, log, หรือสาเหตุ | *\"The webhook returned 400 Bad Request because the signing secret was updated in staging.\"* |\n| **3. Call to Action & Timeline (สิ่งที่ต้องการ & กำหนดส่ง)** | บอกชัดเจนว่าต้องการให้อีกฝ่ายทำอะไร | *\"Could you please verify the webhook secret in AWS Secrets Manager by 3 PM today?\"* |\n\n### ❌ ตัวอย่างเปรียบเทียบ Before vs After\n- ❌ **แบบที่สร้างความหงุดหงิด (Bad):**\n  > *User:* \"Hi Sarah\" *(รอ 2 ชั่วโมง)*\n  > *Sarah:* \"Hey, what's up?\"\n  > *User:* \"Do you have a minute?\" *(รออีก 1 ชั่วโมง)*\n- ✅ **แบบมืออาชีพ (Professional Context-Rich):**\n  > *\"Hi Sarah! 👋 Quick question regarding the user registration flow in ticket PROJ-88. When testing on staging, the confirmation email is delayed by 15 minutes. Here is the link to the CloudWatch log: [link]. Could you take a look when you have a free moment today to confirm if the SQS queue is backed up? No rush on this, thanks a lot!\"*",
        "examples": [
          {
            "en": "Please provide full context and relevant PR links in your initial Slack message to minimize back-and-forth ping-pong.",
            "th": "กรุณาระบุบริบทที่ครบถ้วนและแนบลิงก์ PR ที่เกี่ยวข้องในข้อความแรกบน Slack เพื่อลดการถามตอบไปมาซ้ำซ้อน",
            "audio": "Please provide full context and relevant PR links in your initial Slack message to minimize back-and-forth ping-pong."
          },
          {
            "en": "No rush on this, but could you review the staging environment config whenever you get a chance today?",
            "th": "เรื่องนี้ไม่เร่งด่วนครับ แต่หากวันนี้พอมีเวลาว่าง รบกวนช่วยดูคอนฟิกของระบบ Staging ให้หน่อยได้ไหมครับ",
            "audio": "No rush on this, but could you review the staging environment config whenever you get a chance today?"
          },
          {
            "en": "I've attached the terminal output and reproducible steps below to help you debug.",
            "th": "ผมได้แนบข้อความใน Terminal และขั้นตอนการจำลองปัญหาไว้ด้านล่างนี้เพื่อช่วยให้พี่ตรวจสอบได้สะดวกขึ้นครับ",
            "audio": "I've attached the terminal output and reproducible steps below to help you debug."
          }
        ],
        "quickCheck": [
          {
            "question": "ทำไมวัฒนธรรม 'No-Hello Rule' จึงสำคัญมากในทีมพัฒนาซอฟต์แวร์แบบ Remote/Global?",
            "options": [
              "เพราะการทักแค่คำว่า 'Hi' ทำให้เสียมารยาทในการคุย",
              "เพราะการทักแค่ 'Hi' แล้วรอให้อีกฝ่ายตอบก่อน จะทำลายสมาธิ (Flow State) และทำให้เสียเวลาข้ามวันหากอยู่คนละ Timezone",
              "เพราะบริษัทต้องการห้ามพนักงานคุยเล่นกัน",
              "เพราะไม่มีใครตอบแชตในวันจันทร์"
            ],
            "correctIndex": 1,
            "explanation": "ถูกต้อง! การใส่ทั้งเจตนาและบริบทครบในข้อความแรก ช่วยให้อีกฝ่ายอ่านแล้วตัดสินใจตอบหรือลงมือช่วยได้ทันทีเมื่อเขาว่าง โดยไม่ต้องรอทักทายโต้ตอบกันไปมา"
          },
          {
            "question": "ข้อใดคือองค์ประกอบของข้อความ Slack แบบ 'Context-Rich' ที่สมบูรณ์แบบ?",
            "options": [
              "ทักทายชื่อ + แจ้งเรื่องและตั๋วงาน + แนบลิงก์หลักฐาน + ระบุสิ่งที่ขอให้ช่วยและกำหนดเวลา",
              "พิมพ์คำว่า 'ด่วนที่สุด ช่วยด้วย' พร้อมโทรผ่าน Slack ทันที",
              "ส่งสติกเกอร์อย่างเดียว",
              "ส่งรหัสผ่านทั้งหมดเข้าไปในช่องสาธารณะ"
            ],
            "correctIndex": 0,
            "explanation": "ถูกต้อง! ข้อความที่ดีต้องมีเจตนา (Intent), บริบท (Context) และคำขอที่ชัดเจน (Call to Action)"
          },
          {
            "question": "หากงานไม่เร่งด่วนมาก แต่อยากให้อีกฝ่ายช่วยดูเมื่อเขาว่าง ควรลงท้ายข้อความอย่างไรอย่างสุภาพ?",
            "options": [
              "'Answer me right now.'",
              "'Whenever you get a chance, no urgent rush at all!'",
              "'Why are you not replying?'",
              "'I am waiting.'"
            ],
            "correctIndex": 1,
            "explanation": "ถูกต้อง! วลี 'Whenever you get a chance, no urgent rush at all' แสดงถึงความเข้าใจ มารยาท และไม่สร้างความกดดันให้เพื่อนร่วมงาน"
          }
        ]
      },
      {
        "id": "wp-async-02",
        "title": "Unit 2: Thread Discipline & Handover Notes (วินัยการใช้ Thread และการส่งต่องานข้ามกะ)",
        "summary": "การรักษาระเบียบในช่องรวมด้วย Thread, ความหมายของอีโมจิรีแอคชันสากล, และเทมเพลตการส่งต่องาน (Handover Notes) ให้ทีมต่างชาติรับช่วงต่อได้ราบรื่น",
        "formula": "End of Day Handover: [Completed Tasks] + [In-Flight Blockers & Logs] + [Actionable Next Steps for US/EU Team]",
        "explanation": "### 1. วินัยการใช้ Thread และปฏิกิริยาอีโมจิ (Emoji Reactions)\nในทีมรีโมทขนาดใหญ่ ช่องสาธารณะ เช่น `#engineering-core` มีคนอยู่หลักร้อย การพิมพ์ตอบลอยๆ นอก Thread จะทำให้การแจ้งเตือนดังรบกวนทุกคนในช่อง\n\n### 📊 ภาษาอีโมจิที่วิศวกรสากลใช้กัน (Emoji Taxonomy)\n- 👀 (`:eyes:`) = *\"I am looking into this right now.\"* (ผมเห็นเรื่องแล้วและกำลังเปิดดูอยู่)\n- 🧵 (`:thread:`) = *\"Please keep replies in this thread.\"* (กรุณาตอบใน Thread นี้เพื่อไม่ให้ช่องรก)\n- ✅ (`:white_check_mark:`) = *\"Done / Resolved / Approved.\"* (จัดการเสร็จเรียบร้อยแล้ว)\n- 🚀 (`:rocket:`) = *\"Deployed to Staging/Production.\"* (ขึ้นระบบเรียบร้อยแล้ว)\n- 🙏 (`:pray:`) = *\"Thank you for your help!\"* (ขอบคุณมากๆ ครับ)\n\n---\n\n### 📝 เทมเพลตการเขียน Handover Notes ข้าม Timezone\nเมื่อคุณทำงานที่ไทยเลิกงานช่วง 18:00 น. ทีมที่ยุโรปหรือสหรัฐฯ กำลังเริ่มตื่นมาทำงาน การสรุปส่งต่องานที่ดีต้องมีหน้าตาดังนี้:\n\n```markdown\n### 🌅 Daily Handover to US/EU Team:\n1. **What was completed today:**\n   - Merged PR #245 (Auth token expiration patch).\n   - Deployed migration script to staging database.\n\n2. **Current Blockers / In-Flight:**\n   - Blocked on PR #248 due to a failing integration test on GitHub Actions.\n   - Trace log: [datadog-link]\n\n3. **Action requested from @Alex (US Lead):**\n   - Could you please review and approve the database credentials in 1Password?\n   - Once approved, feel free to trigger the canary deployment.\n\nHave a great day ahead! 🚀\n```",
        "examples": [
          {
            "en": "Let's move this technical discussion into a dedicated thread to keep the main channel clean.",
            "th": "เราขอย้ายการสนทนาทางเทคนิคนี้เข้าไปใน Thread เฉพาะ เพื่อรักษาช่องรวมให้สะอาดเรียบร้อยนะครับ",
            "audio": "Let's move this technical discussion into a dedicated thread to keep the main channel clean."
          },
          {
            "en": "Reacting with an eyes emoji signals that someone has already taken ownership of the issue.",
            "th": "การกดรีแอคด้วยอีโมจิดวงตา (👀) เป็นสัญญาณบอกว่ามีคนเข้ามารับเป็นเจ้าภาพตรวจสอบปัญหานั้นแล้ว",
            "audio": "Reacting with an eyes emoji signals that someone has already taken ownership of the issue."
          },
          {
            "en": "Here is the handover summary for the overnight batch processing jobs.",
            "th": "นี่คือสรุปรายงานการส่งต่องานสำหรับรอบประมวลผลแบตช์กะดึกครับ",
            "audio": "Here is the handover summary for the overnight batch processing jobs."
          }
        ],
        "quickCheck": [
          {
            "question": "การกดรีแอคอีโมจิรูปดวงตา (👀) บน Slack มีความหมายสากลว่าอย่างไร?",
            "options": [
              "ฉันกำลังจับตามองพฤติกรรมของคุณ",
              "ฉันรับทราบเรื่องนี้แล้ว และกำลังเปิดเข้าไปตรวจสอบให้เดี๋ยวนี้ (I'm on it)",
              "ไม่สนใจปัญหานี้",
              "ระบบพังอย่างถาวร"
            ],
            "correctIndex": 1,
            "explanation": "ถูกต้อง! ในการทำงานสายเทค อีโมจิ 👀 มีประโยชน์มหาศาลเพื่อสื่อว่า 'มีคนรับเรื่องไปดูแล้ว คนอื่นจะได้ไม่ต้องเสียเวลาทำซ้ำ'"
          },
          {
            "question": "ส่วนประกอบใดที่ขาดไม่ได้ในเอกสารส่งต่องานข้ามกะ (Handover Notes)?",
            "options": [
              "คำบ่นเรื่องงานยาก",
              "สิ่งที่ทำเสร็จแล้ว, จุดที่ยังติดปัญหาพร้อมลิงก์, และขั้นตอนที่ขอให้ทีมปลายทางช่วยทำต่อ",
              "ภาพถ่ายอาหารกลางวัน",
              "การขอลาหยุดกะทันหัน"
            ],
            "correctIndex": 1,
            "explanation": "ถูกต้อง! Handover ที่สมบูรณ์ต้องบอกสถานะปัจจุบัน จุดที่ติด (Blockers) และสิ่งที่เป็น Next steps สำหรับทีมถัดไป"
          },
          {
            "question": "เมื่อเพื่อนร่วมทีมตอบคำถามยาวๆ ในช่องรวมหลัก แทนที่จะตอบใน Thread ควรพิมพ์บอกอย่างไรอย่างสุภาพ?",
            "options": [
              "'Stop spamming the channel.'",
              "'Let's keep the discussion in the thread above so others aren't pinged unnecessarily.'",
              "'Delete your message right now.'",
              "'You are violating the rules.'"
            ],
            "correctIndex": 1,
            "explanation": "ถูกต้อง! ประโยคนี้อธิบายเหตุผลอย่างสุภาพ (เพื่อไม่ให้คนอื่นในช่องโดนแจ้งเตือนโดยไม่จำเป็น) และชวนย้ายเข้า Thread"
          }
        ]
      }
    ]
  },
  {
    "id": "workplace-diplomatic-pushback",
    "title": "Constructive Disagreements & Polite Refusals",
    "titleTh": "ศิลปะการคัดค้านและเห็นต่างอย่างสร้างสรรค์ โดยไม่ทำลายความสัมพันธ์ในทีม",
    "icon": "🤝",
    "badge": "Diplomatic English",
    "badgeColor": "rose",
    "description": "เทคนิคการปฏิเสธอย่างมืออาชีพ: การใช้ Hedging Language เพื่อลดความแข็งกระด้าง, การดันหลังคัดค้านเดดไลน์ที่ไม่สมเหตุผลด้วยข้อมูลตัวเลข, และการคอมเมนต์แย้งใน PR อย่างมีวุฒิภาวะ",
    "units": [
      {
        "id": "wp-push-01",
        "title": "Unit 1: Hedging & Softening Language (การลดความแข็งกระด้างของคำพูด)",
        "summary": "เรียนรู้ไวยากรณ์เชิงการทูต (Diplomatic Hedging): การใช้กริยาช่วย Modal verbs, คำปรับโทน (Qualifiers), และรูปประโยคคำถามปลายเปิดเพื่อโน้มน้าวใจ",
        "formula": "I'm wondering if [Alternative Idea] might help us [Positive Outcome] while mitigating [Potential Risk]?",
        "explanation": "### 1. ทำไมคนไทยมักพูดภาษาอังกฤษดู \"แข็ง\" หรือ \"ห้วน\" เกินไป?\nคนไทยหลายคนแปลคำพูดแบบตรงตัว เช่น *\"This code is bad. You must rewrite it.\"* ในวัฒนธรรมสากล ประโยคแบบนี้ถือว่าก้าวร้าว (Aggressive) และทำลายจิตวิทยาความปลอดภัยในทีม\n\nการใช้ **Hedging Language (ภาษาลดแรงกระแทก)** จะช่วยให้คุณสื่อสารความคิดเห็นที่หนักแน่น แต่ยังคงรักษาน้ำเสียงที่เป็นมิตรและเปิดรับการแลกเปลี่ยน\n\n### 📊 ตารางเปรียบเทียบคำพูดตรงๆ vs การทูต (Direct vs Diplomatic)\n| พูดตรงๆ ขวานผ่าซาก (❌ Direct / Aggressive) | ภาษาการทูตสากล (✅ Diplomatic & Constructive) |\n|---|---|\n| *\"You are wrong about the API format.\"* | *\"I see it a bit differently based on the latest swagger spec.\"* |\n| *\"We can't do this by Friday.\"* | *\"Given our current velocity, Friday seems a bit tight. Could we evaluate scope reduction?\"* |\n| *\"Your solution is too complex.\"* | *\"I'm wondering if there might be a simpler approach, like reusing existing helper functions.\"* |\n| *\"Change this variable name.\"* | *\"Suggestion: Would renaming this to `isUserActive` make the boolean intent clearer?\"* |\n\n### 🛠️ 3 เทคนิคหลักของ Hedging\n1. **ใช้คำกริยาแสดงความคิดเห็นกึ่งคำถาม:**\n   - *\"I was thinking we could...\"*\n   - *\"I'm wondering if it might make sense to...\"*\n2. **ใช้ Softening Adverbs (คำลดความรุนแรง):**\n   - `slightly`, `somewhat`, `a bit`, `potentially`, `arguably`\n3. **เปิดช่องให้คู่สนทนาอธิบายมุมมองของเขา:**\n   - *\"What are your thoughts on that?\"*\n   - *\"Help me understand your rationale behind choosing this library.\"*",
        "examples": [
          {
            "en": "I'm wondering if adopting a micro-frontend architecture might be slightly premature at our current scale.",
            "th": "ผมกำลังคิดว่าการนำสถาปัตยกรรม Micro-frontend มาใช้ อาจจะเร็วเกินไปสักเล็กน้อยเมื่อพิจารณาจากขนาดทีมปัจจุบันของเรา",
            "audio": "I'm wondering if adopting a micro-frontend architecture might be slightly premature at our current scale."
          },
          {
            "en": "Could we perhaps consider caching these responses to take the load off the database?",
            "th": "เราพอจะพิจารณาทำแคชผลลัพธ์เหล่านี้ได้ไหมครับ เพื่อช่วยลดภาระการทำงานของฐานข้อมูลลง",
            "audio": "Could we perhaps consider caching these responses to take the load off the database?"
          },
          {
            "en": "From my perspective, that deadline seems quite ambitious given the pending QA validation.",
            "th": "จากมุมมองของผม กำหนดส่งนั้นดูจะท้าทายค่อนข้างมากเมื่อพิจารณาจากขั้นตอนการทดสอบของ QA ที่ยังค้างอยู่",
            "audio": "From my perspective, that deadline seems quite ambitious given the pending QA validation."
          }
        ],
        "quickCheck": [
          {
            "question": "ประโยคใดเป็นการเสนอแนะปรับปรุงโค้ดอย่างสุภาพและเป็นมืออาชีพที่สุดใน PR Review?",
            "options": [
              "'This function is terribly written, fix it.'",
              "'Suggestion: What do you think about extracting this logic into a helper function to improve testability?'",
              "'Why didn't you follow the clean code principles?'",
              "'I will reject this PR because it is ugly.'"
            ],
            "correctIndex": 1,
            "explanation": "ถูกต้อง! การใช้คำนำหน้า 'Suggestion:' และถามความเห็น 'What do you think about...' ช่วยรักษาความสัมพันธ์และเปิดพื้นที่ถกเถียงเชิงเทคนิค"
          },
          {
            "question": "คำว่า 'Hedging Language' ในการทำงานระดับสากลมีจุดประสงค์หลักเพื่ออะไร?",
            "options": [
              "เพื่อปิดบังความจริง",
              "เพื่อลดความแข็งกระด้างของน้ำเสียง และเปิดโอกาสให้เกิดการแลกเปลี่ยนความเห็นอย่างสร้างสรรค์",
              "เพื่อพูดภาษาอังกฤษให้เร็วขึ้น",
              "เพื่อสั่งการลูกน้อง"
            ],
            "correctIndex": 1,
            "explanation": "ถูกต้อง! Hedging เป็นเทคนิคทางภาษาศาสตร์ที่ช่วยให้ผู้พูดเสนอข้อโต้แย้งหรือคำท้วงติงได้อย่างสุภาพ โดยไม่ฟังดูเหมือนกำลังออกคำสั่งหรือตัดสินผู้อื่น"
          },
          {
            "question": "เมื่อต้องการบอกว่าเดดไลน์วันศุกร์นี้เป็นไปไม่ได้เลย ควรพูดยังไงโดยไม่ฟังดูปฏิเสธอย่างไร้เยื่อใย?",
            "options": [
              "'No way, we will never make it.'",
              "'Given the current backlog and QA capacity, Friday feels a bit tight. Could we look into prioritizing MVP features first?'",
              "'Ask someone else, I'm busy.'",
              "'Impossible.'"
            ],
            "correctIndex": 1,
            "explanation": "ถูกต้อง! ประโยคนี้อ้างอิงข้อเท็จจริง (backlog & QA capacity) ลดความแรงด้วยคำว่า 'a bit tight' และเสนอทางออกด้วยการทำ MVP ก่อน"
          }
        ]
      },
      {
        "id": "wp-push-02",
        "title": "Unit 2: Pushing Back with Data & Constructive PR Reviews (การคัดค้านด้วยตัวเลขและการรีวิวโค้ด)",
        "summary": "วิธีค้านข้อเสนอที่ไม่สมเหตุผลโดยใช้ตัวเลขและข้อเท็จจริงรองรับ (Data-Driven Pushback) และการปฏิบัติตามหลักการ 'Separate Person from Code'",
        "formula": "I understand the business goal of [X]; however, the telemetry data shows [Metric], which means [Risk]. Instead, I propose [Option A or B].",
        "explanation": "### 1. การคัดค้านด้วยข้อมูล (Data-Driven Pushback)\nเวลาที่ฝ่ายบริหารหรือลูกค้าขอดันฟีเจอร์ใหม่ที่อาจทำให้ระบบล่ม สิ่งที่ไม่ควรทำคือการใช้อารมณ์คัดค้าน เช่น *\"ทำไม่ได้หรอก พี่ไม่เข้าใจโค้ด\"* สิ่งที่คุณต้องทำคือ **\"นำตัวเลขจริงมาวางบนโต๊ะ\"**\n\n### 📊 สูตรคัดค้านแบบ 3 จังหวะ (The 3-Part Pushback)\n1. **Acknowledge (ยอมรับเป้าหมายธุรกิจ):** แสดงให้เห็นว่าเราเข้าใจว่าธุรกิจต้องการอะไร\n   - *\"I completely understand why shipping this campaign by Monday is critical for user acquisition...\"*\n2. **Present the Data & Risk (นำเสนอข้อมูลและผลกระทบ):** แสดงหลักฐานเชิงประจักษ์\n   - *\"...however, our load test results show that our auth server caps at 500 requests per second. With the anticipated 3,000 RPS, we risk a total service outage.\"*\n3. **Offer Concrete Alternatives (เสนอทางเลือกที่เป็นไปได้จริง):** ไม่หยุดแค่คำว่าไม่ได้ แต่ให้ทางเลือก\n   - *\"Instead, we could implement a waiting room queue, or deploy the feature behind a feature flag for 10% of users first.\"*\n\n---\n\n### 🛡️ กฎเหล็ก Code Review: \"Separate the Person from the Code\"\n- ❌ **โจมตีตัวบุคคล (You-Statement):** *\"You forgot to handle the null pointer here.\"*\n- ✅ **โฟกัสที่ตัวโค้ดหรือระบบ (It-Statement):** *\"The code doesn't seem to account for null values when the user is anonymous.\"*",
        "examples": [
          {
            "en": "I share the enthusiasm for this launch, but our database IOPS metrics suggest we will hit throttle limits within minutes.",
            "th": "ผมตื่นเต้นกับแคมเปญเปิดตัวนี้เช่นกันครับ แต่ตัวเลข IOPS ของฐานข้อมูลบ่งชี้ว่าเราจะชนเพดานการทำงานภายในเวลาไม่กี่นาที",
            "audio": "I share the enthusiasm for this launch, but our database IOPS metrics suggest we will hit throttle limits within minutes."
          },
          {
            "en": "Rather than building a bespoke auth system from scratch, could we leverage an established OAuth provider like Auth0?",
            "th": "แทนที่จะสร้างระบบยืนยันตัวตนขึ้นมาใหม่ทั้งหมด เราพอจะใช้บริการ OAuth มาตรฐานที่มีอยู่แล้วอย่าง Auth0 ได้ไหมครับ",
            "audio": "Rather than building a bespoke auth system from scratch, could we leverage an established OAuth provider like Auth0?"
          },
          {
            "en": "This test case appears to be flaky on the staging runner; could we isolate it before merging?",
            "th": "เทสต์เคสตัวนี้ดูเหมือนจะติดๆ ดับๆ (Flaky) บนเครื่อง Staging เราพอจะแยกกักกันมันไว้ก่อนจะกด Merge ได้ไหมครับ",
            "audio": "This test case appears to be flaky on the staging runner; could we isolate it before merging?"
          }
        ],
        "quickCheck": [
          {
            "question": "หลักการ 'Separate the Person from the Code' ในการตรวจโค้ด (Code Review) คืออะไร?",
            "options": [
              "ห้ามโปรแกรมเมอร์คุยกับคนตรวจโค้ด",
              "การวิจารณ์ที่ตัวโค้ดและพฤติกรรมของระบบ แทนที่จะใช้คำว่า 'คุณผิด' หรือโจมตีความสามารถของผู้เขียน",
              "การซ่อนชื่อผู้เขียนโค้ดทั้งหมด",
              "การให้ AI ตรวจแทนมนุษย์เท่านั้น"
            ],
            "correctIndex": 1,
            "explanation": "ถูกต้อง! การพูดว่า 'The function lacks error handling' ดีกว่า 'You wrote bad error handling' เพราะมุ่งเน้นการปรับปรุงคุณภาพโค้ดโดยไม่ทำให้เสียกำลังใจ"
          },
          {
            "question": "เมื่อต้องการปฏิเสธคำขอที่เสี่ยงต่อความปลอดภัยของระบบ ขั้นตอนใดที่มีประสิทธิภาพที่สุด?",
            "options": [
              "เงียบและแอบไม่ทำตามคำสั่ง",
              "ยอมรับเป้าหมายธุรกิจ + แสดงข้อมูลเมตริกความเสี่ยง + เสนอทางเลือกที่เป็นไปได้จริง (Alternatives)",
              "ส่งอีเมลไปฟ้องผู้บริหารระดับสูงทันที",
              "ลาออกจากงาน"
            ],
            "correctIndex": 1,
            "explanation": "ถูกต้อง! การคัดค้านแบบมือโปรต้องมีตัวเลขประกอบและให้ทางเลือกเสมอ ผู้บริหารจะรับฟังเพราะเห็นว่าเรามองผลประโยชน์ของบริษัทเป็นที่ตั้ง"
          },
          {
            "question": "ประโยคใดเป็นการทักเรื่อง Null Pointer Exception ตามหลักการวิจารณ์ที่ตัวโค้ด?",
            "options": [
              "'Why did you make such a dumb mistake?'",
              "'It looks like the response could be null here if the API times out. Should we add a safe navigation operator?'",
              "'You never check for null values.'",
              "'Learn how to code before submitting a PR.'"
            ],
            "correctIndex": 1,
            "explanation": "ถูกต้อง! ประโยคนี้โฟกัสที่สถานการณ์ของระบบ (response could be null if API times out) และเสนอทางแก้เชิงสร้างสรรค์"
          }
        ]
      }
    ]
  },
  {
    "id": "workplace-small-talk",
    "title": "Small Talk & Rapport Building in Remote Teams",
    "titleTh": "ศิลปะการคุยเล่น 2-3 นาทีก่อนเริ่ม Zoom และการสร้างสายสัมพันธ์ในทีมข้ามชาติ",
    "icon": "☕",
    "badge": "Small Talk & Rapport",
    "badgeColor": "amber",
    "description": "ทลายความเงียบอันอึดอัด (Awkward Silence): ประโยคเปิดบทสนทนาก่อนเริ่มประชุม, การถามไถ่วันหยุดและสภาพอากาศ, เทคนิคการรับลูกและโยนคำถาม (Conversational Bouncers), และการเล่นมุกแบบปลอดภัยในช่อง Slack สาธารณะ",
    "units": [
      {
        "id": "wp-talk-01",
        "title": "Unit 1: Meeting Pre-Roll Icebreakers (ประโยคเปิดบทสนทนาก่อนเริ่มประชุม)",
        "summary": "วิธีแก้ปัญหาความเงียบช่วง 2-3 นาทีก่อนที่ประธานจะเข้าประชุม Zoom: การคุยเรื่องอากาศ, วันหยุดสุดสัปดาห์, กาแฟ, และการถามความเป็นอยู่แบบธรรมชาติ",
        "formula": "[Casual Greeting] + [Safe Observation/Question about Weekend/Weather/Coffee] + [Conversational Return: 'How about you?']",
        "explanation": "### 1. ความสำคัญของ Small Talk ในวัฒนธรรมสากล\nคนไทยหลายคนเวลาเข้า Zoom กับฝรั่งมักจะปิดกล้อง ปิดไมค์ และเงียบกริบจนกว่าจะเริ่มคุยงาน ในวัฒนธรรมตะวันตก **\"Small Talk (การคุยเล่นสัพเพเหระ)\"** ไม่ใช่การเสียเวลา แต่เป็นเครื่องมือสร้างความไว้วางใจ (Psychological Rapport)\n\n### 📊 หัวข้อปลอดภัยยอดนิยม (Safe Small Talk Topics)\n1. **Weekend Plans / Wrap-up (สุดสัปดาห์):**\n   - *\"Did you get up to anything exciting over the weekend?\"*\n   - *\"Any fun plans for the upcoming bank holiday?\"*\n2. **Coffee / Tea Rituals (เรื่องกาแฟและเครื่องดื่ม):**\n   - *\"I'm still on my first cup of coffee, desperately waiting for the caffeine to kick in!\"*\n3. **Weather / Location (สภาพอากาศและพื้นที่):**\n   - *\"How's the weather over there in London today? Still raining?\"*\n4. **Local Timezone (ความต่างของเวลา):**\n   - *\"Thanks for hopping on so early your time, Alex!\"*\n\n> ⚠️ **หัวข้อต้องห้าม (Taboo Topics):** ห้ามถามเรื่องเงินเดือนส่วนตัว, ศาสนา, การเมืองท้องถิ่น, หรือสถานะทางครอบครัว/น้ำหนักตัวเด็ดขาด!",
        "examples": [
          {
            "en": "Hey everyone! How has your week been treating you so far?",
            "th": "สวัสดีทุกคนครับ! สัปดาห์นี้เป็นอย่างไรกันบ้าง งานราบรื่นดีไหมครับ",
            "audio": "Hey everyone! How has your week been treating you so far?"
          },
          {
            "en": "I spent the weekend hiking in the mountains; it was great to unplug from screens for a bit.",
            "th": "ผมไปเดินป่าปีนเขาช่วงสุดสัปดาห์มาครับ ได้ถอดปลั๊กพักสายตาจากหน้าจอคอมสักพักรู้สึกดีมากเลย",
            "audio": "I spent the weekend hiking in the mountains; it was great to unplug from screens for a bit."
          },
          {
            "en": "I can't believe it's already Thursday! This sprint flew by so quickly.",
            "th": "ไม่อยากจะเชื่อเลยว่าถึงวันพฤหัสฯ แล้ว! สปรินต์รอบนี้เวลาผ่านไปไวมากๆ",
            "audio": "I can't believe it's already Thursday! This sprint flew by so quickly."
          }
        ],
        "quickCheck": [
          {
            "question": "เมื่อเข้าห้องประชุม Zoom ก่อนเวลา 3 นาทีและมีเพื่อนร่วมทีมชาวต่างชาตินั่งอยู่ ควรทำสิ่งใด?",
            "options": [
              "ปิดไมค์ ปิดกล้อง และนั่งเงียบจนกว่าการประชุมจะเริ่ม",
              "เปิดไมค์ทักทายสั้นๆ ด้วยหัวข้อสบายๆ เช่น อากาศ กาแฟ หรือถามไถ่วันหยุดสุดสัปดาห์",
              "ถามเรื่องเงินเดือนของเพื่อนร่วมทีม",
              "เปิดเพลงเสียงดังในห้อง"
            ],
            "correctIndex": 1,
            "explanation": "ถูกต้อง! การทักทาย Small Talk สั้นๆ ช่วยลดความอึดอัด สร้างบรรยากาศเป็นกันเอง และทำให้การประชุมราบรื่นขึ้นอย่างเห็นได้ชัด"
          },
          {
            "question": "หัวข้อใดต่อไปนี้ที่ควร 'หลีกเลี่ยง' ในการคุย Small Talk ในที่ทำงานสากล?",
            "options": [
              "แผนการไปเที่ยวพักผ่อนช่วงวันหยุด",
              "การเมืองในประเทศ ความเชื่อทางศาสนา และเรื่องส่วนตัวเชิงลึก",
              "รสชาติของกาแฟ",
              "สภาพอากาศในแต่ละเมือง"
            ],
            "correctIndex": 1,
            "explanation": "ถูกต้อง! เรื่องการเมืองและศาสนาเป็นเรื่องอ่อนไหวสูงที่อาจก่อให้เกิดความขัดแย้งได้ จึงเป็นกฎสากลที่ห้ามนำมาคุยเล่นในการทำงาน"
          },
          {
            "question": "วลี 'This sprint flew by!' มีความหมายว่าอย่างไร?",
            "options": [
              "สปรินต์นี้เต็มไปด้วยแมลงวัน",
              "สปรินต์รอบนี้เวลาผ่านไปอย่างรวดเร็วมาก",
              "เราต้องบินไปต่างประเทศ",
              "โปรเจกต์ล้มเหลว"
            ],
            "correctIndex": 1,
            "explanation": "ถูกต้อง! สำนวน 'flew by' มาจากกริยา fly past หมายถึงเวลาผ่านไปอย่างรวดเร็วมาก"
          }
        ]
      }
    ]
  },
  {
    "id": "workplace-performance-review",
    "title": "Self-Appraisal & Promotion Negotiations",
    "titleTh": "การเขียนประเมินผลงานตัวเอง และการเจรจาเลื่อนขั้น/ขึ้นเงินเดือนกับผู้จัดการ",
    "icon": "💼",
    "badge": "Career Growth",
    "badgeColor": "emerald",
    "description": "คู่มือความก้าวหน้าในสายอาชีพเทค: การเขียน Brag Sheet ด้วยสูตร Action + Metric + Impact, การเตรียมตัวคุย 1-on-1 เรื่องการเลื่อนขั้น, และศิลปะการต่อรองแพ็กเกจผลตอบแทน (Base, Equity, Bonus)",
    "units": [
      {
        "id": "wp-perf-01",
        "title": "Unit 1: Writing High-Impact Brag Sheets (การเขียนสรุปผลงานตัวเอง)",
        "summary": "สูตรเขียนบันทึกความสำเร็จประจำปี (Self-Appraisal) ด้วยกริยา Action Verbs ที่ทรงพลัง พร้อมตัวเลขวัดผลลัพธ์ทางธุรกิจอย่างเป็นรูปธรรม",
        "formula": "[Strong Action Verb] + [Specific Technical Deliverable] + [Business Impact with Metric: e.g. saved $50k / reduced latency by 40%].",
        "explanation": "### 1. ความผิดพลาดของการประเมินตนเอง\nโปรแกรมเมอร์จำนวนมากทำงานหนักตลอดปี แต่พอถึงรอบเขียนประเมินตนเอง (Self-Review) กลับเขียนแค่:\n- *\"I fixed bugs in the checkout service.\"*\n- *\"I attended daily standups and helped juniors.\"*\nเขียนแบบนี้ ผู้จัดการจะไม่สามารถนำผลงานของคุณไปของบประมาณเลื่อนขั้นหรือขึ้นเงินเดือนจากผู้บริหารได้!\n\n### 📊 สูตร Action + Metric + Impact\n| กริยาธรรมดา (❌ Weak Verbs) | กริยาทรงพลังระดับ Senior (✅ Power Verbs) | ตัวอย่างประโยคผลงานที่ได้ผลลัพธ์ |\n|---|---|---|\n| *helped, worked on* | **Spearheaded, Architected** | *\"**Architected** the event-driven notification engine, cutting push alert latency by 65%.\"* |\n| *fixed, changed* | **Overhauled, Optimized** | *\"**Overhauled** the legacy database schema, reducing monthly AWS RDS expenditures by $12,000.\"* |\n| *made, wrote* | **Engineered, Pioneered** | *\"**Engineered** automated end-to-end regression pipelines, accelerating release cycles from bi-weekly to daily.\"* |\n| *talked to team* | **Mentored, Championed** | *\"**Mentored** two junior developers who successfully delivered their first standalone microservice.\"* |\n\n### 🛠️ โครงสร้างความสำเร็จ 3 ส่วน (CAR Framework)\n1. **Context/Challenge:** ปัญหาคืออะไร (e.g. Ingestion failed during peak hours)\n2. **Action:** สิ่งที่คุณลงมือทำด้วยทักษะเทคนิค (e.g. Migrated to Kafka streaming)\n3. **Result:** ผลลัพธ์เชิงตัวเลขทางธุรกิจ (e.g. 99.99% uptime and zero data drops)",
        "examples": [
          {
            "en": "Spearheaded the migration of 40 microservices to Kubernetes, reducing infrastructure costs by 28%.",
            "th": "เป็นผู้นำในการย้ายเซอร์วิสย่อย 40 ตัวเข้าสู่ Kubernetes ช่วยลดต้นทุนโครงสร้างพื้นฐานลงได้ถึง 28%",
            "audio": "Spearheaded the migration of 40 microservices to Kubernetes, reducing infrastructure costs by 28%."
          },
          {
            "en": "Championed code review standards across the organization, which led to a 45% decrease in production bugs.",
            "th": "เป็นหัวเรี่ยวหัวแรงในการผลักดันมาตรฐานการรีวิวโค้ดทั่วทั้งองค์กร ส่งผลให้บั๊กบน Production ลดลงไปถึง 45%",
            "audio": "Championed code review standards across the organization, which led to a 45% decrease in production bugs."
          },
          {
            "en": "Automated the manual deployment process, saving the engineering team an estimated 15 hours per sprint.",
            "th": "พัฒนาระบบติดตั้งอัตโนมัติทดแทนการทำด้วยมือ ช่วยประหยัดเวลาของทีมวิศวกรไปได้ประมาณ 15 ชั่วโมงต่อสปรินต์",
            "audio": "Automated the manual deployment process, saving the engineering team an estimated 15 hours per sprint."
          }
        ],
        "quickCheck": [
          {
            "question": "กริยาคำใดต่อไปนี้มีความหนักแน่นและแสดงความเป็นผู้นำในการเขียนผลงานประเมินตนเองได้ดีที่สุด?",
            "options": [
              "Helped with",
              "Spearheaded (เป็นหัวหอกริเริ่มและนำพาจนสำเร็จ)",
              "Tried to do",
              "Watched"
            ],
            "correctIndex": 1,
            "explanation": "ถูกต้อง! 'Spearheaded' เป็นคำกริยาแอ็กชันระดับสูงที่สื่อว่าคุณเป็นผู้นำโครงการและขับเคลื่อนจนเกิดผลลัพธ์จริง"
          },
          {
            "question": "ประโยคสรุปผลงานข้อใดมีน้ำหนักและน่าประทับใจต่อการพิจารณาเลื่อนขั้นมากที่สุด?",
            "options": [
              "'I am a hard worker and I write lots of code every single day.'",
              "'Optimized the caching layer, reducing API response times by 35% and saving approximately $15,000 annually.'",
              "'I did everything my manager asked me to do without complaining.'",
              "'Fixed some bugs in the backend system.'"
            ],
            "correctIndex": 1,
            "explanation": "ถูกต้อง! ประโยคนี้มีทั้งการกระทำเชิงเทคนิค (Optimized caching layer) และมีตัวเลขวัดผลลัพธ์ทางธุรกิจชัดเจน (ลดเวลา 35%, ประหยัด $15,000/ปี)"
          },
          {
            "question": "ในกรอบการเขียนผลงาน 'CAR Framework' ตัวอักษร 'R' หมายถึงสิ่งใด?",
            "options": [
              "Repository",
              "Result (ผลลัพธ์ที่วัดค่าได้ทางธุรกิจ)",
              "Request",
              "Review"
            ],
            "correctIndex": 1,
            "explanation": "ถูกต้อง! CAR ย่อมาจาก Context (บริบทปัญหา), Action (สิ่งที่คุณทำ), Result (ผลลัพธ์ที่เป็นรูปธรรม)"
          }
        ]
      }
    ]
  }
];

if (typeof window !== "undefined") {
  window.workplaceTracksData = workplaceTracksData;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = workplaceTracksData;
}
