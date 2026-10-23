/**
 * EngMastery: Core Verbs & Grammar Mechanics Articles Database
 * Fully Tabularized Version (ทุกหัวข้อย่อยจัดโครงสร้างเป็นตารางอ่านง่าย)
 */

const verbsArticlesData = [
  {
    "id": "art-verb-forms-v1-v2-v3",
    "title": "คัมภีร์กริยา 3 ช่อง (V1, V2, V3) ฉบับเข้าใจลึก นำไปใช้จริง ไม่ต้องนั่งท่องจำ",
    "titleEn": "Mastering English Verb Forms: V1, V2, V3 in Real-World Action",
    "category": "Core Grammar & Mechanics",
    "categoryTh": "ไวยากรณ์แกนหลัก & กริยา 3 ช่อง",
    "readTime": "15 นาที",
    "author": "Senior Language Engineer & Technical Communication Coach",
    "publishedDate": "2026-10-24",
    "coverEmoji": "📖",
    "summary": "ถอดรหัสโครงสร้างกริยา 3 ช่องอย่างทะลุปรุโปร่ง เข้าใจแก่นแท้ของ Base Form, Past Simple และ Past Participle พร้อมจัดหมวดหมู่ 4 กลุ่มจำง่าย (A-A-A, A-B-B, A-B-A, A-B-C), กฎการออกเสียง -ed 3 มิติ, การนำ V3 ไปใช้ใน Perfect Tense และ Passive Voice อย่างมืออาชีพ",
    "tags": [
      "V1 V2 V3",
      "Irregular Verbs",
      "Past Participle",
      "Passive Voice",
      "Pronunciation ed",
      "Core Grammar"
    ],
    "sections": [
      {
        "heading": "1. ถอดรหัสความลับ V1, V2, V3: แต่ละช่องคืออะไรและทำหน้าที่อะไรในประโยค?",
        "content": "หลายคนเรียนภาษาอังกฤษมาหลายปีแต่ยังสับสนว่า **\"ทำไมกริยาต้องมี 3 ช่อง?\"** และเมื่อไหร่ควรใช้ช่องไหน ความจริงแล้ว กริยาทั้ง 3 ช่องไม่ได้มีไว้เพื่อท่องสอบ แต่มีไว้เพื่อทำหน้าที่ทางไวยากรณ์คนละหน้าที่อย่างชัดเจน:\n\n| รูปกริยา | ชื่อทางการ | หน้าที่หลักในประโยค | ตำแหน่งที่พบ | ตัวอย่างในงานจริง |\n| :--- | :--- | :--- | :--- | :--- |\n| **V1** | **Base / Infinitive** | บอกความจริงทั่วไป, กิจวัตร, คำสั่ง, หรือใช้ตามหลังกริยาช่วย | หลัง Modal (can, will, should), หลัง to, หลัง Do/Does/Did | *\"I **deploy** code every Tuesday.\"* |\n| **V2** | **Past Simple** | บอกเหตุการณ์ที่เกิดขึ้นและ **จบสิ้นสมบูรณ์แล้วในอดีต** (มีเวลาชัดเจน) | ใช้เป็นกริยาแท้เดี่ยวๆ ในประโยคอดีต | *\"Yesterday, I **deployed** the hotfix.\"* |\n| **V3** | **Past Participle** | **ไม่ใช่กริยาแท้เดี่ยวๆ** แต่เป็นชิ้นส่วนประกอบร่างใน Perfect Tense และ Passive Voice | หลัง have/has/had หรือหลัง Verb to be | *\"We have **deployed** the release to staging.\"* |\n\n### 💡 กฎเหล็กการใช้งานกริยา V2 vs V3 (Golden Rules Table):\n\n| กฎเหล็กสำคัญ | คำอธิบายโครงสร้าง | ข้อกำหนดทางไวยากรณ์ | ตัวอย่างประโยคจริงในงานวิศวกรรม |\n| :--- | :--- | :--- | :--- |\n| **V2 อยู่คนเดียวได้เสมอ** | ใช้บอกเหตุการณ์ในอดีตที่จบสิ้นลงแล้ว | ทำหน้าที่เป็นกริยาแท้เดี่ยวๆ ได้ทันที **ไม่ต้องมีกริยาช่วยนำหน้า** | *\"We **resolved** the incident at 2 PM.\"* |\n| **V3 อยู่คนเดียวไม่ได้** | ทำหน้าที่บอกความสมบูรณ์หรือถูกกระทำ | **ต้องมีกริยาช่วย (พี่เลี้ยง) เสมอ**: have/has/had หรือ Verb to be | *\"We **have resolved** the issue.\"*<br>*\"The issue **was resolved**.\"* |",
        "keyPhrases": [
          {
            "en": "V1 represents the base form, V2 indicates completed past actions, and V3 functions as a participle.",
            "th": "V1 คือรูปตั้งต้น, V2 บอกการกระทำในอดีตที่จบแล้ว, และ V3 ทำหน้าที่เป็น Participle ร่วมกับกริยาช่วย"
          },
          {
            "en": "V3 can never act as a standalone main verb without an auxiliary like have or be.",
            "th": "V3 ไม่สามารถทำหน้าที่เป็นกริยาแท้เดี่ยวๆ ได้โดยปราศจากกริยาช่วยอย่าง have หรือ be"
          }
        ]
      },
      {
        "heading": "2. กฎการผันกริยาปกติ (Regular Verbs -ed) และเคล็ดลับการออกเสียง 3 มิติ",
        "content": "กริยาส่วนใหญ่ในภาษาอังกฤษเป็น **Regular Verbs** ซึ่งผันเป็น V2 และ V3 ด้วยการเติม **-ed** โดยมีกฎการสะกดและการออกเสียงท้ายคำอย่างเป็นระบบ:\n\n### 📝 ตารางกฎการสะกดคำเติม -ed (Spelling Rules Matrix):\n\n| กฎการเติม -ed | เงื่อนไขของรูปคำกริยาเดิม | กฎการเปลี่ยนแปลง | ตัวอย่างกริยา V1 | รูปหลังผัน (V2 / V3) |\n| :--- | :--- | :--- | :--- | :--- |\n| **กฎที่ 1: เติม -ed ทันที** | กริยาทั่วไปที่ลงท้ายด้วยพยัญชนะส่วนใหญ่ | เติม -ed ต่อท้ายได้เลย | *deploy, patch, track* | *deployed, patched, tracked* |\n| **กฎที่ 2: เติมเฉพาะ -d** | กริยาที่ลงท้ายด้วยตัว **-e** อยู่แล้ว | เติมเฉพาะตัว -d | *configure, migrate, release* | *configured, migrated, released* |\n| **กฎที่ 3: เบิ้ลตัวสะกดท้าย** | สระเสียงสั้น 1 ตัว + ตัวสะกด 1 ตัว (CVC) | เพิ่มตัวสะกดตัวสุดท้ายอีก 1 ตัวก่อนเติม -ed | *stop, drop, plan* | *stopped, dropped, planned* |\n| **กฎที่ 4: เปลี่ยน y เป็น i** | ลงท้ายด้วยตัว **-y** และหน้า y เป็นพยัญชนะ | เปลี่ยน **y เป็น i** แล้วเติม -ed | *retry, verify, modify* | *retried, verified, modified* |\n| **กฎที่ 5: หน้า y เป็นสระ** | ลงท้ายด้วยตัว **-y** แต่หน้า y เป็นสระ (a, e, o) | เติม -ed ได้ทันทีโดยไม่ต้องเปลี่ยน y | *deploy, play, destroy* | *deployed, played, destroyed* |\n\n### 🎧 ตารางกฎการออกเสียง -ed 3 แบบที่ต้องรู้:\n\n| กฎการออกเสียง | เงื่อนไขของเสียงท้ายคำกริยาเดิม | คำอ่านลงท้าย | ตัวอย่างคำศัพท์ Tech | ตัวอย่างประโยคจริง |\n| :--- | :--- | :--- | :--- | :--- |\n| **แบบที่ 1: /ɪd/ หรือ /əd/** | คำกริยาเดิมลงท้ายด้วยเสียง **/t/** หรือ **/d/** | ออกเสียงเพิ่มอีก 1 พยางค์ (\"-อิด\" หรือ \"-เอ็ด\") | *test ➔ tested (/ˈtes.tɪd/)*<br>*start ➔ started*<br>*upgrade ➔ upgraded*<br>*migrate ➔ migrated* | *\"We **tested** the failover cluster yesterday.\"* |\n| **แบบที่ 2: /t/** | คำกริยาเดิมลงท้ายด้วย **เสียงลม (Voiceless)**: /p, k, f, s, ʃ (sh), tʃ (ch), x/ | ออกเสียง /ทึ/ ลมสั้นๆ ห้ามเพิ่มพยางค์ | *fix ➔ fixed (/fɪkst/)*<br>*deploy ➔ deployed*<br>*patch ➔ patched (/pætʃt/)*<br>*check ➔ checked (/tʃekt/)* | *\"I **fixed** the memory leak.\"* *(ออกเสียง \"ฟิกซ์-ทึ\" ไม่ใช่ \"ฟิก-เส็ด\")* |\n| **แบบที่ 3: /d/** | คำกริยาเดิมลงท้ายด้วย **เสียงก้อง (Voiced)** หรือสระ: /b, g, v, z, m, n, l, r/ | ออกเสียง /ดึ/ ในลำคอเบาๆ ห้ามเพิ่มพยางค์ | *configure ➔ configured*<br>*clean ➔ cleaned*<br>*scale ➔ scaled*<br>*trigger ➔ triggered* | *\"The alert **triggered** an automated backup.\"* |\n\n### ⚠️ ตารางข้อควรระวังการออกเสียง -ed ยอดฮิต:\n\n| คำศัพท์ที่คนมักออกเสียงผิด | การออกเสียงที่ผิด ❌ | การออกเสียงที่ถูกต้องสากล ✅ | จำนวนพยางค์ | ตัวอย่างประโยคจริง |\n| :--- | :--- | :--- | :--- | :--- |\n| **fixed** | \"ฟิก-เส็ด\" (/fɪk-sɪd/) | **/fɪkst/** (\"ฟิกซ์-ทึ\") | **1 พยางค์** | *\"I **fixed** the memory leak.\"* |\n| **checked** | \"เช็ค-เก็ด\" (/tʃek-ɪd/) | **/tʃekt/** (\"เช็ค-ทึ\") | **1 พยางค์** | *\"We **checked** all logs.\"* |\n| **stopped** | \"สต็อป-เป็ด\" (/stɒp-ɪd/) | **/stɒpt/** (\"สต็อป-ทึ\") | **1 พยางค์** | *\"The service **stopped** gracefully.\"* |",
        "keyPhrases": [
          {
            "en": "Regular verbs ending in /t/ or /d/ add an extra syllable pronounced as /ɪd/.",
            "th": "กริยาปกติที่ลงท้ายด้วยเสียง /t/ หรือ /d/ จะออกเสียงเพิ่มอีกหนึ่งพยางค์เป็นเสียง /ɪd/"
          },
          {
            "en": "The word 'fixed' is pronounced with a single syllable /fɪkst/, not two syllables.",
            "th": "คำว่า 'fixed' ออกเสียงเพียงพยางค์เดียวคือ /fɪkst/ ไม่ใช่สองพยางค์"
          }
        ]
      },
      {
        "heading": "3. สูตร 4 กลุ่มกริยาอปกติ (Irregular Verbs) จำง่ายตลอดชีพ ไม่ต้องท่อง A-Z",
        "content": "แทนที่จะนั่งท่องตารางกริยา 3 ช่องเรียงตามตัวอักษร A ถึง Z ซึ่งสมองจะจำสับสน ให้แบ่งกริยาอปกติออกเป็น **4 กลุ่มรูปแบบความสัมพันธ์ (Pattern Recognition Table)**:\n\n### 🧩 กลุ่มที่ 1: แบบ A-A-A (รูปเดิมทั้ง 3 ช่อง นิ่งสนิท ไม่เปลี่ยนรูป)\n\n| V1 (Infinitive) | V2 (Past Simple) | V3 (Past Participle) | คำแปลภาษาไทย | ตัวอย่างการใช้งานจริง |\n| :--- | :--- | :--- | :--- | :--- |\n| **set** | **set** | **set** | กำหนดค่า, ติดตั้ง | *\"I have **set** the CPU threshold to 80%.\"* |\n| **cut** | **cut** | **cut** | ตัด, ลดทอน | *\"We **cut** our cloud infrastructure costs by 20%.\"* |\n| **hit** | **hit** | **hit** | ชน, ถึงขีดจำกัด | *\"Our API **hit** the maximum rate limit.\"* |\n| **put** | **put** | **put** | วาง, ใส่ | *\"Please **put** the credentials into Secret Manager.\"* |\n| **cost** | **cost** | **cost** | มีราคา, สิ้นเปลือง | *\"The outage **cost** us two hours of downtime.\"* |\n| **split** | **split** | **split** | แยกส่วน, แบ่ง | *\"We **split** the monolith into three microservices.\"* |\n| **read** /riːd/ | **read** /red/ | **read** /red/ | อ่าน (รูปเดิม แต่ออกเสียงเปลี่ยนเป็น 'เรด') | *\"I **read** the post-mortem report this morning.\"* |\n\n---\n\n### 🧩 กลุ่มที่ 2: แบบ A-B-B (V2 กับ V3 เหมือนกัน ฝาแฝด)\n\n| V1 (Infinitive) | V2 (Past Simple) | V3 (Past Participle) | คำแปลภาษาไทย | ตัวอย่างการใช้งานจริง |\n| :--- | :--- | :--- | :--- | :--- |\n| **build** | **built** | **built** | สร้าง, คอมไพล์ | *\"The CI runner **built** the Docker container in 3 minutes.\"* |\n| **send** | **sent** | **sent** | ส่ง | *\"I have **sent** the meeting invite to the QA team.\"* |\n| **spend** | **spent** | **spent** | ใช้เวลา, ใช้เงิน | *\"We **spent** two hours debugging the network latency.\"* |\n| **find** | **found** | **found** | พบ, ตรวจเจอ | *\"The penetration test **found** zero high-severity vulnerabilities.\"* |\n| **keep** | **kept** | **kept** | รักษาไว้, เก็บ | *\"We **kept** the staging database running overnight.\"* |\n| **leave** | **left** | **left** | ออกจาก, ทิ้งไว้ | *\"The engineer **left** detailed documentation in Confluence.\"* |\n| **make** | **made** | **made** | สร้าง, ตัดสินใจ | *\"We **made** the architectural decision yesterday.\"* |\n\n---\n\n### 🧩 กลุ่มที่ 3: แบบ A-B-A (V1 กับ V3 หน้าตาเหมือนกัน วนกลับมาที่เดิม)\n\n| V1 (Infinitive) | V2 (Past Simple) | V3 (Past Participle) | คำแปลภาษาไทย | ตัวอย่างการใช้งานจริง |\n| :--- | :--- | :--- | :--- | :--- |\n| **run** | **ran** | **run** | ทำงาน, รันคำสั่ง | *\"We **ran** the benchmark test; now it has **run** successfully.\"* |\n| **come** | **came** | **come** | มา, เกิดขึ้น | *\"The webhook traffic **came** in suddenly.\"* |\n| **become** | **became** | **become** | กลายเป็น | *\"Kubernetes has **become** the industry standard orchestrator.\"* |\n\n---\n\n### 🧩 กลุ่มที่ 4: แบบ A-B-C (เปลี่ยนรูปไม่ซ้ำกัน 3 ช่อง 3 สไตล์)\n\n| V1 (Infinitive) | V2 (Past Simple) | V3 (Past Participle) | คำแปลภาษาไทย | ตัวอย่างการใช้งานจริง |\n| :--- | :--- | :--- | :--- | :--- |\n| **write** | **wrote** | **written** | เขียน | *\"I **wrote** the logic yesterday; the unit tests are **written**.\"* |\n| **break** | **broke** | **broken** | พัง, แตกหัก | *\"The upstream update **broke** our staging build.\"* |\n| **choose** | **chose** | **chosen** | เลือก | *\"We **chose** PostgreSQL over MySQL for this feature.\"* |\n| **give** | **gave** | **given** | ให้ | *\"The DevOps team **gave** us read-only production access.\"* |\n| **see** | **saw** | **seen** | เห็น, ตรวจพบ | *\"Have you **seen** any 500 errors in Datadog?\"* |\n| **take** | **took** | **taken** | ใช้เวลา, รับไป | *\"The snapshot backup **took** approximately 45 seconds.\"* |\n| **do** | **did** | **done** | ทำ | *\"I **did** the initial setup, and the task is now **done**.\"* |",
        "keyPhrases": [
          {
            "en": "Categorizing irregular verbs into pattern groups drastically accelerates retention.",
            "th": "การจัดกลุ่มกริยาอปกติตามรูปแบบความสัมพันธ์ช่วยเพิ่มความจำได้อย่างก้าวกระโดด"
          },
          {
            "en": "Verbs like set, cut, and put maintain the exact same spelling across all three forms.",
            "th": "กริยาอย่าง set, cut และ put สะกดเหมือนกันเป๊ะในทั้งสามช่อง"
          }
        ]
      },
      {
        "heading": "4. V3 (Past Participle) กุญแจสำคัญสู่การสื่อสารระดับสากล",
        "content": "ในภาษาอังกฤษเชิงเทคนิคและการทำงาน **V3 คือกริยาที่ถูกใช้งานบ่อยที่สุด** โดยทำหน้าที่หลัก 3 โครงสร้างสากล ดังตารางนี้:\n\n### 📊 ตารางการนำกริยาช่อง 3 (V3) ไปใช้งานจริง 3 รูปแบบสากล:\n\n| โครงสร้างที่นำ V3 ไปใช้ | สูตรไวยากรณ์ | ความหมาย / จุดประสงค์ในการสื่อสาร | ตัวอย่างประโยคงานวิศวกรรม | คำแปลภาษาไทย |\n| :--- | :--- | :--- | :--- | :--- |\n| **1. Perfect Tenses** | have / has / had + V3 | บอกว่ากระทำเสร็จสมบูรณ์แล้ว หรือส่งผลต่อปัจจุบัน | *\"We **have deployed** the release to production.\"* | พวกเราได้ปล่อยรีลีสขึ้นโปรดักชันเรียบร้อยแล้ว |\n| **2. Passive Voice** | Verb to BE + V3 | เน้นที่ตัวระบบหรือผลลัพธ์ว่า **'ถูกกระทำ'** | *\"The incident **was resolved** within 15 minutes.\"* | เหตุการณ์ขัดข้องได้รับการแก้ไขลุล่วงภายใน 15 นาที |\n| **3. Participle Adjective** | V3 + Noun (ขยายคำนาม) | ทำหน้าที่เป็นคำคุณศัพท์บรรยายสภาพที่ถูกกระทำ | *\"We isolated the **compromised** pod.\"* | เราทำการแยก Pod ที่ถูกเจาะระบบออกจากเครือข่าย |\n| **Participle Adjective (คำที่ 2)** | V3 + Noun | บรรยายสภาพความพร้อมหรือการรักษาความปลอดภัย | *\"All **encrypted** backups are stored offsite.\"* | ไฟล์สำรองที่ถูกเข้ารหัสทั้งหมดถูกจัดเก็บแยกไว้ |",
        "keyPhrases": [
          {
            "en": "Passive voice with V3 is standard in engineering documentation to emphasize the system rather than the actor.",
            "th": "Passive Voice ร่วมกับ V3 เป็นมาตรฐานในเอกสารวิศวกรรมเพื่อเน้นตัวระบบมากกว่าตัวผู้กระทำ"
          },
          {
            "en": "Past participles frequently function as adjectives describing a modified system state.",
            "th": "Past Participle มักทำหน้าที่เป็นคำคุณศัพท์บรรยายสถานะของระบบที่ถูกปรับเปลี่ยน"
          }
        ]
      },
      {
        "heading": "5. กับดักและข้อผิดพลาดร้ายแรงที่พบบ่อย (Common Pitfalls)",
        "content": "นี่คือตารางสรุปข้อผิดพลาดอันดับต้นๆ ของคนทำงานเมื่อใช้ V1, V2, V3 พร้อมเหตุผลทางไวยากรณ์:\n\n### ⚠️ ตารางกับดักและข้อผิดพลาดร้ายแรงที่พบบ่อย (Common Pitfalls Table):\n\n| ข้อความที่ผิด (Incorrect) ❌ | ข้อความที่ถูกต้อง (Correct) ✅ | ทำไมถึงผิด? (Grammar Rule) | คำแปลภาษาไทย |\n| :--- | :--- | :--- | :--- |\n| *\"I didn't **saw** the alert.\"* | *\"I didn't **see** the alert.\"* | หลังกริยาช่วย **didn't** กริยาแท้ต้องกลับเป็น **V1 (Infinitive)** เสมอ ห้ามใช้ V2 ซ้ำ | ผมไม่เห็นการแจ้งเตือนนั้น |\n| *\"We have **wrote** the tests.\"* | *\"We have **written** the tests.\"* | หลัง **have/has** ต้องตามด้วย **V3 (Past Participle)** ห้ามใช้ V2 | เราได้เขียนชุดทดสอบเรียบร้อยแล้ว |\n| *\"The VM was **costed** $500.\"* | *\"The VM **cost** $500.\"* | คำว่า **cost** อยู่ในกลุ่ม A-A-A ช่อง 2 และ 3 คือ **cost** ไม่มีการเติม -ed | เครื่องเซิร์ฟเวอร์เสมือนมีค่าใช้จ่าย 500 ดอลลาร์ |\n| *\"Has the PR **merged** yet?\"* | *\"Has the PR **been merged** yet?\"* | PR ไม่สามารถ merge ตัวเองได้ ต้องใช้ Passive: **been + V3 (been merged)** | PR ได้รับการ Merge เรียบร้อยหรือยัง? |\n| *\"I am **agree** with proposal.\"* | *\"I **agree** with proposal.\"* | **agree** เป็นคำกริยาแท้อยู่แล้ว ไม่ต้องใส่ Verb to be (am) นำหน้า | ผมเห็นด้วยกับข้อเสนอดังกล่าว |",
        "keyPhrases": [
          {
            "en": "Never use a past tense verb after didn't; always revert to the base infinitive form.",
            "th": "ห้ามใช้กริยาช่อง 2 หลัง didn't โดยเด็ดขาด ให้กลับไปใช้รูปกริยาตั้งต้น V1 เสมอ"
          },
          {
            "en": "Ensure passive voice is used when the subject cannot perform the action independently.",
            "th": "ตรวจสอบให้แน่ใจว่าใช้ Passive Voice เมื่อประธานไม่สามารถกระทำการนั้นได้ด้วยตัวเอง"
          }
        ]
      },
      {
        "heading": "6. คลัง 40 กริยา 3 ช่องสาย Tech & Office พร้อมบริบทการใช้งานจริง",
        "content": "นี่คือตารางแม่บท 40 กริยา 3 ช่องที่พบและใช้งานบ่อยที่สุดในสายงานวิศวกรรมซอฟต์แวร์, คลาวด์, และการทำงานร่วมกับทีมต่างชาติ:\n\n### 🚀 ตารางแม่บท 40 กริยา 3 ช่องสาย Tech & Office:\n\n| V1 (Infinitive) | V2 (Past Simple) | V3 (Past Participle) | คำแปลภาษาไทย | ตัวอย่างประโยคใช้งานจริงในที่ทำงาน |\n| :--- | :--- | :--- | :--- | :--- |\n| **arise** | arose | arisen | เกิดขึ้น (ปัญหา) | *\"A race condition **arose** during peak hours.\"* |\n| **bear** | bore | borne | รับภาระ, รองรับ | *\"The redis cache **bore** the brunt of the traffic.\"* |\n| **become** | became | become | กลายเป็น | *\"The service **became** unresponsive after the deploy.\"* |\n| **begin** | began | begun | เริ่มต้น | *\"We **began** the database backfill at midnight.\"* |\n| **bind** | bound | bound | ผูกมัด, เชื่อมโยง | *\"The socket is **bound** to port 8080.\"* |\n| **break** | broke | broken | พัง, เสียหาย | *\"The missing environment secret **broke** the pipeline.\"* |\n| **bring** | brought | brought | นำมา, นำเสนอ | *\"She **brought** up an important architectural concern.\"* |\n| **build** | built | built | สร้าง, คอมไพล์ | *\"The CI worker **built** the artifacts in 90 seconds.\"* |\n| **catch** | caught | caught | ดักจับ (Exception) | *\"Our try-catch block **caught** the null pointer error.\"* |\n| **choose** | chose | chosen | เลือก | *\"We **chose** gRPC for fast inter-service communication.\"* |\n| **cost** | cost | cost | สิ้นเปลืองค่าใช้จ่าย | *\"Idle clusters **cost** the organization excessive budget.\"* |\n| **cut** | cut | cut | ตัด, ลดทอน | *\"We **cut** our cold-start latency in half.\"* |\n| **deal** | dealt | dealt | จัดการ, รับมือ | *\"The incident response team **dealt** with the DDoS attack.\"* |\n| **do** | did | done | ทำ, ปฏิบัติ | *\"I **did** the code review, and the task is **done**.\"* |\n| **draw** | drew | drawn | วาด, สรุป | *\"We **drew** the cloud architecture diagram in Miro.\"* |\n| **drive** | drove | driven | ขับเคลื่อน, ผลักดัน | *\"Customer feedback **drove** our roadmap priorities.\"* |\n| **fall** | fell | fallen | ตก, ลดลง | *\"Memory utilization **fell** back to normal baseline levels.\"* |\n| **feed** | fed | fed | ป้อนข้อมูล | *\"The telemetry stream is **fed** directly into BigQuery.\"* |\n| **find** | found | found | ค้นพบ | *\"Static code analysis **found** three insecure dependencies.\"* |\n| **get** | got | got / gotten | ได้รับ, เข้าถึง | *\"We **got** approval to decommission the legacy database.\"* |\n| **give** | gave | given | ให้ | *\"The admin **gave** me temporary IAM write access.\"* |\n| **go** | went | gone | ไป, ดำเนินไป | *\"The production maintenance **went** very smoothly.\"* |\n| **grow** | grew | grown | เติบโต, เพิ่มขึ้น | *\"Our active user base **grew** by 40% quarter-over-quarter.\"* |\n| **hide** | hid | hidden | ซ่อน | *\"API keys must be **hidden** within secure environment vaults.\"* |\n| **hold** | held | held | ถือไว้, จัดประชุม | *\"We **held** a blameless post-mortem this morning.\"* |\n| **keep** | kept | kept | รักษาไว้ | *\"We **kept** the canary deployment running for 24 hours.\"* |\n| **know** | knew | known | รู้, ทราบ | *\"The team **knew** about the deprecation timeline.\"* |\n| **lead** | led | led | นำไปสู่ | *\"The configuration drift **led** to unexpected downtime.\"* |\n| **leave** | left | left | ละทิ้ง, ออกจาก | *\"Make sure no dangling resources are **left** behind.\"* |\n| **make** | made | made | สร้าง, ตัดสินใจ | *\"We **made** several key trade-offs regarding storage.\"* |\n| **mean** | meant | meant | หมายถึง | *\"This error code **meant** that authorization had expired.\"* |\n| **put** | put | put | วาง, จัดเก็บ | *\"I have **put** the migration script into the repository.\"* |\n| **read** | read | read | อ่าน | *\"The parser **read** all JSON configurations sequentially.\"* |\n| **run** | ran | run | รันระบบ, ประมวลผล | *\"The background worker has **run** for over 100 days.\"* |\n| **see** | saw | seen | พบเห็น, ตรวจพบ | *\"We haven't **seen** any abnormal CPU spikes today.\"* |\n| **send** | sent | sent | ส่งข้อมูล | *\"The webhook **sent** the payload to the third-party API.\"* |\n| **set** | set | set | กำหนดค่า | *\"I **set** the alert threshold to 90% memory capacity.\"* |\n| **spend** | spent | spent | ใช้เวลา, ใช้ทรัพยากร | *\"We **spent** the sprint optimizing query execution plans.\"* |\n| **take** | took | taken | ใช้เวลา, ดำเนินการ | *\"Database failover **took** less than three seconds.\"* |\n| **write** | wrote | written | เขียนโค้ด / เอกสาร | *\"She **wrote** comprehensive integration test suites.\"* |",
        "keyPhrases": [
          {
            "en": "Mastering domain-specific irregular verbs allows for precise and confident sprint updates.",
            "th": "การเชี่ยวชาญกริยาอปกติในสายงานช่วยให้อัปเดตงานในสปรินต์ได้อย่างแม่นยำและมั่นใจ"
          },
          {
            "en": "Understanding these 40 verbs covers over 90% of engineering daily communications.",
            "th": "การเข้าใจกริยา 40 คำนี้ครอบคลุมการสื่อสารในงานวิศวกรรมประจำวันมากกว่า 90%"
          }
        ]
      }
    ],
    "readingQuiz": [
      {
        "question": "ในการประชุม Standup หากคุณต้องการบอกว่า 'เมื่อวานผมไม่ได้เห็นการแจ้งเตือนบั๊กนั้น' ข้อใดถูกต้องตามหลักไวยากรณ์ที่สุด?",
        "options": [
          "Yesterday, I didn't saw that bug notification.",
          "Yesterday, I didn't see that bug notification.",
          "Yesterday, I haven't saw that bug notification.",
          "Yesterday, I not see that bug notification."
        ],
        "answer": 1,
        "explanation": "ถูกต้อง! เมื่อมีกริยาช่วย 'didn't' เข้ามาช่วยในประโยคปฏิเสธ กริยาแท้ด้านหลังต้องกลับคืนเป็นรูป V1 (Infinitive) เสมอ นั่นคือ 'see' ห้ามใช้ 'saw' ซ้อนเด็ดขาด"
      },
      {
        "question": "คำว่า 'fixed' (V2/V3 ของ fix) ควรออกเสียงท้ายคำ (-ed) อย่างไรจึงจะถูกต้องตามหลัก Phonetics สากล?",
        "options": [
          "ออกเสียง 2 พยางค์ว่า 'ฟิก-เส็ด' (/fɪk-sɪd/)",
          "ออกเสียงพยางค์เดียวลงท้ายด้วยเสียง /t/ สั้นๆ คือ /fɪkst/",
          "ออกเสียงพยางค์เดียวลงท้ายด้วยเสียง /d/ คือ /fɪkd/",
          "ไม่ต้องออกเสียงท้ายคำใดๆ ทั้งสิ้น"
        ],
        "answer": 1,
        "explanation": "ถูกต้อง! คำว่า 'fix' ลงท้ายด้วยเสียงลมพยัญชนะอโฆษะ /ks/ (Voiceless) เมื่อเติม -ed จะต้องออกเสียงเป็น /t/ กลายเป็น /fɪkst/ พยางค์เดียว ห้ามออกเสียงว่า 'ฟิก-เส็ด'"
      },
      {
        "question": "ข้อใดคือการใช้กริยาช่อง 3 (Past Participle) ในรูปแบบของ 'Passive Voice' (ประธานถูกกระทำ)?",
        "options": [
          "We have built the staging cluster.",
          "The staging cluster was built by the DevOps team.",
          "The engineer built the staging cluster yesterday.",
          "Building the staging cluster took two hours."
        ],
        "answer": 1,
        "explanation": "ถูกต้อง! โครงสร้าง Passive Voice คือ 'Subject + Verb to BE + V3' (The staging cluster was built...) แสดงว่าคลัสเตอร์ถูกสร้างขึ้นโดยทีม DevOps"
      },
      {
        "question": "กริยาในข้อใดต่อไปนี้จัดอยู่ในกลุ่ม 'A-A-A' (รูปเหมือนกันทั้ง 3 ช่อง ไม่เปลี่ยนรูปเลย)?",
        "options": [
          "build - built - built",
          "run - ran - run",
          "set - set - set",
          "write - wrote - written"
        ],
        "answer": 2,
        "explanation": "ถูกต้อง! 'set' เป็นกริยากลุ่ม A-A-A ซึ่ง V1, V2, V3 สะกดเหมือนกันทุกช่อง (set - set - set) เช่นเดียวกับ cut, put, cost, hit"
      },
      {
        "question": "ประโยคใดต่อไปนี้เขียนได้อย่างถูกต้องและเป็นธรรมชาติที่สุดใน Release Notes หรือเอกสารระบบ?",
        "options": [
          "The database schema has been successfully migrated.",
          "The database schema has been successfully migrate.",
          "The database schema was successfully migrate.",
          "We have been migrated the database schema."
        ],
        "answer": 0,
        "explanation": "ถูกต้อง! ใน Present Perfect Passive Voice โครงสร้างคือ 'has/have + been + V3' (has been migrated) ซึ่งสื่อว่า Schema ของฐานข้อมูลได้รับการย้ายเรียบร้อยสมบูรณ์แล้ว"
      }
    ]
  },
  {
    "id": "art-verb-to-do-mastery",
    "title": "เจาะลึก Verb to DO: การใช้ Do, Does, Did, Done ทุกบทบาท ทุกมิติ",
    "titleEn": "The Complete Guide to Verb to DO: Action Verbs, Helping Verbs & Emphatic Forms",
    "category": "Auxiliary Verbs & Tenses",
    "categoryTh": "กริยาช่วย & โครงสร้างประโยค",
    "readTime": "14 นาที",
    "author": "Staff Software Engineer & Agile Communications Coach",
    "publishedDate": "2026-10-24",
    "coverEmoji": "⚡",
    "summary": "เจาะลึกการใช้งาน Verb to DO ทั้งในฐานะกริยาแท้ (ลงมือทำ) และกริยาช่วย (สร้างประโยคปฏิเสธและคำถาม), การใช้ Did ในอดีต, ท่าไม้ตาย Emphatic DO เพื่อเน้นย้ำความจริงจังในที่ประชุม, และการแยกแยะ Do vs Make อย่างแม่นยำ",
    "tags": [
      "Verb to DO",
      "Do Does Did",
      "Emphatic DO",
      "Do vs Make",
      "Auxiliary Verbs",
      "Grammar"
    ],
    "sections": [
      {
        "heading": "1. สองบทบาทของ Verb to DO: เมื่อไหร่เป็นกริยาแท้ vs เมื่อไหร่เป็นกริยาช่วย",
        "content": "Verb to DO สามารถแปลงร่างได้ 2 บทบาทหลักตามหน้าที่ทางไวยากรณ์:\n\n### ⚖️ ตารางสองบทบาทของ Verb to DO: กริยาแท้ vs กริยาช่วย:\n\n| บทบาท (Role) | หน้าที่และความหมาย | ตัวอย่างในประโยค | คำแปลและข้อสังเกต |\n| :--- | :--- | :--- | :--- |\n| **1. กริยาแท้ (Main Verb)** | มีความหมายในตัวเอง แปลว่า **'ทำ, ปฏิบัติ, ดำเนินการ'** | *\"I **do** code reviews every morning.\"* | *do* ในที่นี้คือกริยาแท้ บอกว่าฉันทำหน้าที่รีวิวโค้ด |\n| **2. กริยาช่วย (Auxiliary Verb)** | **ไม่มีความหมายในตัวเอง** แต่มาทำหน้าที่ช่วยสร้างประโยคปฏิเสธและคำถาม | *\"I **do not know** the root cause yet.\"* | *do* เข้ามาช่วยกริยาแท้คือ *know* เพื่อสร้างรูปปฏิเสธ |\n| **3. ใช้คู่กัน (ช่วย + แท้)** | กริยาช่วย + กริยาแท้ในประโยคเดียวกัน | *\"He **doesn't do** manual testing.\"* | *doesn't* (กริยาช่วย) + *do* (กริยาแท้ = ไม่ทำงานทดสอบแบบแมนนวล) |\n\n### 🔍 ตารางวิเคราะห์ประโยคที่มี DO หลายตัวในประโยคเดียว:\n\n| ประโยคตัวอย่าง | บทบาทของ DO ตัวแรก | บทบาทของ DO ตัวหลัง | คำแปลและความหมาย |\n| :--- | :--- | :--- | :--- |\n| *\"What **do** you **do**?\"* | กริยาช่วย (สร้างประโยคคำถาม) | กริยาแท้ (แปลว่า 'ทำงาน/ปฏิบัติ') | \"คุณทำงานอะไรหรือครับ?\" |\n| *\"He **does** not **do** support.\"* | กริยาช่วย (สร้างประโยคปฏิเสธ) | กริยาแท้ (แปลว่า 'ทำหน้าที่') | \"เขาไม่ได้ทำหน้าที่ดูแลงาน Support\" |\n| *\"I **did do** the deployment!\"* | กริยาช่วย (เน้นย้ำ Emphatic) | กริยาแท้ (แปลว่า 'ลงมือปล่อยงาน') | \"ผมได้ลงมือปล่อย Deploy งานนั้นแล้วจริงๆ นะครับ!\" |",
        "keyPhrases": [
          {
            "en": "Verb to do functions both as an action verb meaning 'perform' and as a grammatical auxiliary.",
            "th": "Verb to do ทำหน้าที่ทั้งเป็นกริยาแอ็กชันแปลว่า 'ทำ' และเป็นกริยาช่วยทางไวยากรณ์"
          },
          {
            "en": "In negative sentences, 'do not' or 'does not' supports the primary action verb.",
            "th": "ในประโยคปฏิเสธ 'do not' หรือ 'does not' ทำหน้าที่รองรับกริยาแสดงการกระทำหลัก"
          }
        ]
      },
      {
        "heading": "2. Do vs Does ในปัจจุบัน (Present Simple) และกฎเหล็กคืนรูป V1",
        "content": "ในกาลปัจจุบัน (Present Simple) การเลือกใช้ระหว่าง **Do** กับ **Does** ขึ้นอยู่กับ **ประธานของประโยค (Subject)** เพียงอย่างเดียว:\n\n### 📋 ตาราง Subject Matrix ของ Do vs Does ใน Present Simple:\n\n| ประธาน (Subject) | กริยาช่วยบอกเล่า/เน้นย้ำ | กริยาช่วยปฏิเสธ | กริยาช่วยคำถาม | กริยาแท้ด้านหลัง |\n| :--- | :--- | :--- | :--- | :--- |\n| **I, You, We, They, พหูพจน์** | **do** | **don't** (do not) | **Do ... ?** | **V1 เสมอ (ไม่ผัน ไม่เติม s)** |\n| **He, She, It, เอกพจน์** | **does** | **doesn't** (does not) | **Does ... ?** | **V1 เสมอ (ห้ามเติม s ซ้ำ!)** |\n\n### 🚨 ตารางกฎเหล็ก 'ขโมย s' (The S-Stealing Rule Matrix):\n\n| ข้อความที่ผิด ❌ | ข้อความที่ถูกต้อง ✅ | ทำไมถึงผิด? (กฎไวยากรณ์) | คำแปลภาษาไทย |\n| :--- | :--- | :--- | :--- |\n| *\"He doesn't **knows** K8s.\"* | *\"He doesn't **know** K8s.\"* | doesn't ดึงตัว -s ไปแล้ว กริยาหลักต้องกลับเป็น V1 รูปเดิม | เขาไม่รู้วิธีคอนฟิก Kubernetes |\n| *\"Does the API **supports** gRPC?\"* | *\"Does the API **support** gRPC?\"* | ในประโยคคำถาม Does รับหน้าที่ผันแล้ว support ต้องเป็น V1 | API นี้รองรับโปรโตคอล gRPC ไหม? |\n| *\"She does not **writes** tests.\"* | *\"She does not **write** tests.\"* | หลัง does not ต้องตามด้วย V1 Infinitive (write) ห้ามเติม -s | เธอไม่ได้เขียนยูนิตเทสต์ |",
        "keyPhrases": [
          {
            "en": "Once 'does' or 'doesn't' is introduced, the following main verb must revert to its base form.",
            "th": "เมื่อมี 'does' หรือ 'doesn't' เข้ามาแล้ว กริยาแท้ที่ตามหลังต้องกลับคืนสู่รูปตั้งต้นเสมอ"
          },
          {
            "en": "Singular subjects take 'does' in questions and 'doesn't' in negative statements.",
            "th": "ประธานเอกพจน์ใช้ 'does' ในประโยคคำถาม และใช้ 'doesn't' ในประโยคปฏิเสธ"
          }
        ]
      },
      {
        "heading": "3. Did ในอดีต (Past Simple) ประโยคปฏิเสธและคำถามเดลี่",
        "content": "เมื่อพูดถึง **อดีต (Past Simple)** ความง่ายคือ **Did** ใช้กับประธาน **ทุกตัว** (I, You, We, They, He, She, It) ไม่ต้องแยกเอกพจน์พหูพจน์อีกต่อไป:\n\n### ⏳ ตารางโครงสร้าง Did ใน Past Simple:\n\n| ประเภทประโยค | โครงสร้างไวยากรณ์ | ตัวอย่างในงานวิศวกรรม | ข้อควรระวัง |\n| :--- | :--- | :--- | :--- |\n| **ปฏิเสธในอดีต** | Subject + didn't + V1 | *\"We **didn't deploy** the patch yesterday.\"* | ห้ามใช้ V2 ซ้อน (❌ *didn't deployed*) |\n| **คำถาม Yes/No** | Did + Subject + V1 ... ? | *\"**Did** you **verify** the database metrics?\"* | กริยาแท้คือ verify (V1) ไม่ใช่ verified |\n| **คำถาม Wh- Question** | Wh- + did + Subject + V1 ... ? | *\"Why **did** the pod **restart** suddenly?\"* | ใช้ did ถามหาสาเหตุในอดีต |\n\n### 💬 ตารางถาม-ตอบ Daily Standup ด้วย Verb to DO:\n\n| วัตถุประสงค์ในการสื่อสาร | ประโยคคำถาม (Question) | รูปแบบคำตอบปฏิเสธ (Negative) | รูปแบบคำตอบรับสั้น (Short Affirmative) |\n| :--- | :--- | :--- | :--- |\n| **ตรวจงานรีวิวโค้ด (PR Review)** | *\"**Did** you have a chance to look at PR #204?\"* | *\"I **didn't get** to it yesterday due to an incident.\"* | *\"Yes, I **did**. Looks solid to me.\"* |\n| **ตรวจสถานะไปป์ไลน์ (CI/CD)** | *\"**Did** the staging integration tests pass?\"* | *\"No, they **didn't** pass; we had an OOM error.\"* | *\"Yes, they **did**; build green 100%.\"* |\n| **ถามหาสาเหตุระบบล่ม (Incident)** | *\"Why **did** the database latency spike at 3 AM?\"* | *\"We **didn't find** any slow queries in the log.\"* | *\"Yes, we **did** trace it to a missing index.\"* |",
        "keyPhrases": [
          {
            "en": "The past auxiliary 'did' applies uniformly across all grammatical persons without exception.",
            "th": "กริยาช่วยอดีต 'did' ใช้เหมือนกันกับประธานทุกบุรุษโดยไม่มีข้อยกเว้น"
          },
          {
            "en": "Always pair 'didn't' with an infinitive verb when reporting unfinished blockers in standups.",
            "th": "จับคู่ 'didn't' กับกริยา Infinitive เสมอเมื่อรายงานงานที่ยังไม่เสร็จใน Standup"
          }
        ]
      },
      {
        "heading": "4. ท่าไม้ตาย 'Emphatic DO' ใช้ยืนยันความจริงใจในที่ประชุม",
        "content": "ในวัฒนธรรมการทำงานระดับสากล เมื่อมีคนตั้งข้อสงสัยว่าคุณได้ทำสิ่งนั้นจริงหรือไม่ หรือเมื่อคุณต้องการ **'เน้นย้ำความมั่นใจอย่างหนักแน่น'** เจ้าของภาษาจะใช้เทคนิคที่เรียกว่า **Emphatic DO**:\n\n### ⚡ ตารางท่าไม้ตาย Emphatic DO: ประโยคปกติ vs ประโยคเน้นย้ำความจริงจัง:\n\n| ประโยคบอกเล่าปกติ (Normal) | ประโยคเน้นย้ำ Emphatic DO (Powerful & Firm) | ความหมายและอารมณ์ที่สื่อสาร |\n| :--- | :--- | :--- |\n| *\"I ran the unit tests.\"* | *\"I **did run** the unit tests before opening the PR.\"* | **\"ผมได้รันยูนิตเทสต์แล้วจริง ๆ นะครับ\"** (ใช้เคลียร์ข้อสงสัยเมื่อเทสต์บน CI พัง) |\n| *\"I agree with your proposal.\"* | *\"I **do agree** with your proposal, but we must consider costs.\"* | **\"ผมเห็นด้วยจริง ๆ นะครับ\"** (เน้นว่าเห็นด้วยในหลักการ ก่อนจะขอแย้งเรื่องต้นทุน) |\n| *\"He knows the legacy system.\"* | *\"He **does know** the legacy codebase very well.\"* | **\"เขารู้จักระบบเก่านั้นอย่างทะลุปรุโปร่งจริง ๆ\"** (ยืนยันความเชี่ยวชาญของเพื่อนร่วมทีม) |\n| *\"We want to help.\"* | *\"We **do want** to resolve this outage as fast as possible.\"* | **\"พวกเราต้องการช่วยแก้ปัญหานี้ให้เร็วที่สุดจริง ๆ\"** (แสดง Empathy ใน Incident) |",
        "keyPhrases": [
          {
            "en": "Emphatic DO reinforces affirmation and dispels doubts during technical discussions.",
            "th": "Emphatic DO ช่วยเน้นย้ำการยืนยันและขจัดความเคลือบแคลงในระหว่างการถกเถียงเชิงเทคนิค"
          },
          {
            "en": "Stressing the auxiliary 'did' emphasizes that the action was indeed executed as stated.",
            "th": "การเน้นเสียงที่กริยาช่วย 'did' ย้ำชัดว่าการกระทำนั้นได้ถูกปฏิบัติตามที่กล่าวอ้างจริง"
          }
        ]
      },
      {
        "heading": "5. Do vs Make ต่างกันอย่างไร? รวม Collocations ประจำออฟฟิศและสายเทค",
        "content": "มีกฎการจำสั้นๆ ง่ายๆ ระหว่าง DO (กิจกรรม/กระบวนการ) กับ MAKE (สร้างสรรค์/ผลลัพธ์):\n\n### 📌 ตารางเปรียบเทียบ Do vs Make 20 คู่คำพบบ่อย (Collocations):\n\n| ใช้กับ DO (หน้าที่ / วิเคราะห์ / กิจกรรม) | ใช้กับ MAKE (สร้างสรรค์ / ตัดสินใจ / ผลลัพธ์) |\n| :--- | :--- |\n| **do research** (ค้นคว้าข้อมูล) | **make a decision** (ตัดสินใจ) |\n| **do testing / do QA** (ทำการทดสอบระบบ) | **make changes** (ทำการแก้ไข / เปลี่ยนแปลงโค้ด) |\n| **do a code review** (ตรวจรีวิวโค้ด) | **make a mistake** (ทำข้อผิดพลาด) |\n| **do your best** (ทำให้เต็มที่) | **make an announcement** (ประกาศแจ้งให้ทราบ) |\n| **do damage control** (ควบคุมความเสียหาย) | **make progress** (สร้างความก้าวหน้า) |\n| **do business** (ดำเนินธุรกิจ) | **make a release** (ปล่อยซอฟต์แวร์เวอร์ชันใหม่) |\n| **do an investigation** (สืบหาสาเหตุบั๊ก) | **make a trade-off** (ชั่งน้ำหนักข้อแลกเปลี่ยน) |\n| **do a favor** (ช่วยเหลือ) | **make an appointment** (นัดหมายเวลา) |\n\n### ❌ ตารางเปรียบเทียบประโยคที่คนมักใช้ Do vs Make สับสน:\n\n| ข้อความที่ผิด ❌ | ข้อความที่ถูกต้อง ✅ | ทำไมถึงผิด? (กฎการใช้งาน) |\n| :--- | :--- | :--- |\n| *\"We need to **make more research**.\"* | *\"We need to **do more research**.\"* | การค้นคว้าวิจัยเป็นกระบวนการค้นหา (Process) ต้องใช้ **do** |\n| *\"I **did a big mistake** in production.\"* | *\"I **made a big mistake** in production.\"* | ความผิดพลาดคือผลลัพธ์ที่เกิดขึ้นใหม่ (Result) ต้องใช้ **make** |\n| *\"Please **do an architectural decision**.\"* | *\"Please **make an architectural decision**.\"* | การตัดสินใจเลือกแนวทางต้องใช้ **make a decision** |\n| *\"We will **make a comprehensive audit**.\"* | *\"We will **do a comprehensive audit**.\"* | การตรวจสอบความปลอดภัยเป็นกระบวนการวิเคราะห์ ต้องใช้ **do** |",
        "keyPhrases": [
          {
            "en": "Use 'do' for tasks, investigations, and processes, but 'make' for creating, deciding, or producing results.",
            "th": "ใช้ 'do' กับงาน การสืบค้น และกระบวนการ แต่ใช้ 'make' กับการสร้าง ตัดสินใจ หรือสร้างผลลัพธ์"
          },
          {
            "en": "Collocations such as 'do research' and 'make a decision' are non-negotiable standards.",
            "th": "คู่คำอย่าง 'do research' และ 'make a decision' ถือเป็นมาตรฐานสากลที่ไม่ควรใช้สลับกัน"
          }
        ]
      },
      {
        "heading": "6. Short Answers & Tag Questions ตอบสั้นอย่างมั่นใจในที่ประชุม",
        "content": "ในการประชุมภาษาอังกฤษ เมื่อถูกถามคำถามขึ้นต้นด้วย Do/Does/Did ให้ตอบด้วย **Short Answers** ที่สมบูรณ์แบบ:\n\n### 🗣️ ตาราง Short Answers ตอบสั้นอย่างมั่นใจและสุภาพในที่ประชุม:\n\n| คำถามที่โดนถามในที่ประชุม | ตอบรับสุภาพ (Affirmative) | ตอบปฏิเสธสุภาพ (Negative) |\n| :--- | :--- | :--- |\n| *\"Do you have the latest API docs?\"* | *\"Yes, I **do**.\"* | *\"No, I **don't** at the moment.\"* |\n| *\"Does this query require an index?\"* | *\"Yes, it **does**.\"* | *\"No, it **doesn't** need one.\"* |\n| *\"Did the build finish successfully?\"* | *\"Yes, it **did**.\"* | *\"No, it **didn't**; it timed out.\"* |\n| *\"Did you notify the incident channel?\"* | *\"Yes, I **did** right away.\"* | *\"No, I **didn't** yet; let me do it now.\"* |",
        "keyPhrases": [
          {
            "en": "Responding with short answers using auxiliary verbs sounds professional and complete.",
            "th": "การตอบคำถามสั้นโดยใช้กริยาช่วยฟังดูเป็นมืออาชีพและสมบูรณ์แบบกว่าการตอบคำเดียว"
          },
          {
            "en": "Echoing the question's auxiliary verb maintains grammatical coherence in meeting dialogues.",
            "th": "การสะท้อนกริยาช่วยตามคำถามช่วยรักษาความต่อเนื่องทางไวยากรณ์ในการประชุม"
          }
        ]
      }
    ],
    "readingQuiz": [
      {
        "question": "ข้อใดคือการใช้ 'Emphatic DO' เพื่อเน้นย้ำความจริงจังว่า 'ผมได้ตรวจสอบการตั้งค่าไฟร์วอลล์แล้วจริงๆ'?",
        "options": [
          "I checking the firewall rules.",
          "I did check the firewall rules.",
          "I did checked the firewall rules.",
          "I was checked the firewall rules."
        ],
        "answer": 1,
        "explanation": "ถูกต้อง! โครงสร้าง Emphatic DO ในอดีตคือ 'Subject + did + V1' (I did check...) โดยกริยาแท้ต้องเป็น V1 ไม่ผัน ใช้เน้นย้ำความมั่นใจว่าได้ทำสิ่งนั้นแล้วจริงๆ"
      },
      {
        "question": "ประโยคปฏิเสธในปัจจุบันข้อใดใช้ไวยากรณ์ Verb to DO ได้ถูกต้องสมบูรณ์?",
        "options": [
          "The backend service doesn't handles incoming requests.",
          "The backend service don't handle incoming requests.",
          "The backend service doesn't handle incoming requests.",
          "The backend service not handle incoming requests."
        ],
        "answer": 2,
        "explanation": "ถูกต้อง! ประธานเป็นเอกพจน์ (The backend service) ต้องใช้ 'doesn't' และกริยาแท้ด้านหลังต้องเป็น V1 ไม่เติม -s (handle) จึงได้ 'doesn't handle'"
      },
      {
        "question": "ในการเลือกใช้ระหว่าง DO กับ MAKE ข้อความใดต่อไปนี้ถูกต้องตามหลัก Collocation สากล?",
        "options": [
          "We must make testing before deploying to production.",
          "Let's do a decision regarding the database architecture.",
          "The QA engineer will do a comprehensive security audit.",
          "I need to do an appointment with the product manager."
        ],
        "answer": 2,
        "explanation": "ถูกต้อง! 'do a security audit / do testing' ใช้กับ DO เพราะเป็นกระบวนการวิเคราะห์ตรวจสอบ ส่วน decision และ appointment ต้องใช้กับ MAKE (make a decision, make an appointment)"
      },
      {
        "question": "หากเพื่อนร่วมงานถามว่า 'Did you push your latest commit to GitHub?' คำตอบรับสั้นที่ถูกต้องและสุภาพที่สุดคือข้อใด?",
        "options": [
          "Yes, I pushed.",
          "Yes, I did.",
          "Yes, I do.",
          "Yes, I have."
        ],
        "answer": 1,
        "explanation": "ถูกต้อง! เมื่อคำถามขึ้นต้นด้วยกริยาช่วยในอดีต 'Did you...?' คำตอบรับสั้นที่ถูกต้องทางไวยากรณ์คือ 'Yes, I did.'"
      },
      {
        "question": "จุดผิดพลาดในประโยค 'Why did the microservice crashed yesterday?' คืออะไร?",
        "options": [
          "คำว่า yesterday ต้องเปลี่ยนเป็น tomorrow",
          "หลัง did กริยาแท้ต้องเป็น V1 คือ 'crash' ไม่ใช่ 'crashed'",
          "ต้องเปลี่ยน did เป็น was",
          "ประโยคนี้ถูกต้องสมบูรณ์แล้ว"
        ],
        "answer": 1,
        "explanation": "ถูกต้อง! กฎเหล็กของกริยาช่วยคือเมื่อมี 'did' ในประโยคคำถามแล้ว กริยาหลักต้องกลับคืนเป็นรูป V1 (crash) เสมอ ห้ามใช้ V2 (crashed) ซ้ำซ้อน"
      }
    ]
  },
  {
    "id": "art-verb-to-have-mastery",
    "title": "เจาะลึก Verb to HAVE: การใช้ Have, Has, Had ตั้งแต่พื้นฐานสู่ระดับสูง",
    "titleEn": "Mastering Verb to HAVE: Ownership, Perfect Tenses, Causatives & Modals",
    "category": "Auxiliary & Perfect Tenses",
    "categoryTh": "กริยาช่วย & Perfect Tenses",
    "readTime": "15 นาที",
    "author": "Cloud Solutions Architect & Technical English Specialist",
    "publishedDate": "2026-10-24",
    "coverEmoji": "💎",
    "summary": "ไขรหัส Verb to HAVE แบบครบวงจร: จากกริยาบอกความเป็นเจ้าของ สู่หัวใจหลักของ Present Perfect และ Past Perfect, การใช้ Have to บอกความจำเป็น, และโครงสร้าง Causative (Have something done) สำหรับการมอบหมายงานในองค์กร",
    "tags": [
      "Verb to HAVE",
      "Have Has Had",
      "Present Perfect",
      "Past Perfect",
      "Have to vs Must",
      "Causative"
    ],
    "sections": [
      {
        "heading": "1. 3 บทบาทหลักของ Verb to HAVE: ครอบครอง, กริยาช่วย, และความจำเป็น",
        "content": "Verb to HAVE มีความหลากหลายสูงมากในภาษาอังกฤษระดับมืออาชีพ โดยแยกเป็น 3 บทบาทหลัก:\n\n### 💎 ตาราง 3 บทบาทหลักของ Verb to HAVE:\n\n| บทบาท (Role) | โครงสร้าง | หน้าที่และความหมาย | ตัวอย่างประโยคจริง |\n| :--- | :--- | :--- | :--- |\n| **1. กริยาแท้ (Main Verb)** | Subject + have/has/had + Noun | แปลว่า **'มี, ครอบครอง, ได้รับ'** | *\"We **have** three Kubernetes clusters in production.\"* |\n| **2. กริยาช่วยใน Perfect Tense** | Subject + have/has/had + V3 | สร้าง **Present Perfect / Past Perfect** บอกผลลัพธ์หรือลำดับเวลา | *\"I **have deployed** the application successfully.\"* |\n| **3. กึ่งกริยาช่วย (Semi-Modal)** | Subject + have to / has to / had to + V1 | แปลว่า **'ต้องทำ, จำเป็นต้องทำ'** (เทียบเท่า must) | *\"We **have to restart** the worker pod.\"* |\n\n### 🔍 ตารางวิเคราะห์ประโยค 'have had' และกริยาซ้อน:\n\n| ประโยคตัวอย่าง | หน้าที่ของ have ตัวแรก | หน้าที่ของ had ตัวหลัง | ความหมายและคำแปล |\n| :--- | :--- | :--- | :--- |\n| *\"I **have had** this issue before.\"* | กริยาช่วยใน Present Perfect | กริยาแท้ V3 (เคยประสบพบเจอ) | \"ฉันเคยเจอปัญหานี้มาก่อนในอดีต\" |\n| *\"We **had had** a backup plan.\"* | กริยาช่วยใน Past Perfect | กริยาแท้ V3 (เคยมีแผนสำรอง) | \"พวกเราเคยมีแผนสำรองเตรียมไว้ก่อนหน้านั้นแล้ว\" |\n| *\"They **have to have** credentials.\"* | กริยากึ่งช่วย (have to = จำเป็นต้อง) | กริยาแท้ V1 (have = มี/ครอบครอง) | \"พวกเขาจำเป็นต้องมีรหัสผ่านเข้าถึงระบบ\" |",
        "keyPhrases": [
          {
            "en": "Verb to have operates as an indicator of possession, a perfect auxiliary, and a modal of necessity.",
            "th": "Verb to have ทำหน้าที่ทั้งบอกการครอบครอง เป็นกริยาช่วย Perfect Tense และบอกความจำเป็น"
          },
          {
            "en": "The phrase 'have had' couples the perfect auxiliary with the past participle of experience.",
            "th": "วลี 'have had' เป็นการจับคู่กริยาช่วย Perfect กับกริยาช่อง 3 เพื่อสื่อถึงประสบการณ์ที่เคยเจอมา"
          }
        ]
      },
      {
        "heading": "2. Have / Has ใน Present Perfect Tense (`have/has + V3`) เชื่อมโยงอดีตถึงปัจจุบัน",
        "content": "นี่คือ Tense ที่ **วิศวกรซอฟต์แวร์และคนทำงานใช้บ่อยที่สุดใน Standup และ Status Report**:\n\n### ⏳ ตารางเปรียบเทียบ Past Simple vs Present Perfect ในงานจริง:\n\n| มิติการเปรียบเทียบ | Past Simple (V2 - เน้นเวลาในอดีตที่จบแล้ว) | Present Perfect (have/has + V3 - เน้นผลลัพธ์ถึงปัจจุบัน) |\n| :--- | :--- | :--- |\n| **จุดโฟกัสของการสื่อสาร** | เน้นว่าเหตุการณ์เกิดขึ้นและ **จบไปแล้วในอดีต** | เน้นว่า **ผลลัพธ์ของงานยังคงส่งผลถึงตอนนี้ (Current Impact)** |\n| **ตัวอย่างการรายงานบั๊ก** | *\"I **fixed** the bug at 4 PM yesterday.\"*<br>*(เน้นเวลาว่าทำเสร็จเมื่อวาน)* | *\"I **have fixed** the bug; you can now verify it.\"*<br>*(เน้นว่าแก้เสร็จแล้ว และตอนนี้พร้อมให้เทสต์ได้ทันที)* |\n| **ตัวอย่างกรณีฉุกเฉิน** | *\"The server **crashed** 10 minutes ago.\"*<br>*(บอกข้อเท็จจริงเรื่องเวลา)* | *\"The server **has crashed**! We need to investigate.\"*<br>*(เน้นย้ำความฉุกเฉินว่าตอนนี้ระบบยังคงล่มอยู่)* |\n\n### 🔑 ตารางคำบอกเวลาสำคัญ (Signal Words) ประจำ Present Perfect:\n\n| Signal Word | คำแปลภาษาไทย | ตำแหน่งที่วางในประโยค | ตัวอย่างประโยคการทำงานจริง |\n| :--- | :--- | :--- | :--- |\n| **already** | เรียบร้อยแล้ว (ก่อนเวลาที่คิด) | วางหน้า V3 หรือท้ายประโยค | *\"We have **already** run the database migration.\"* |\n| **yet** | หรือยัง / ยังไม่ได้ทำ | วางท้ายประโยคคำถามหรือปฏิเสธ | *\"I haven't pushed the feature branch **yet**.\"* |\n| **just** | เพิ่งจะเสร็จสดๆ ร้อนๆ | วางหน้า V3 | *\"The staging CI build has **just** passed.\"* |\n| **since** | ตั้งแต่ (จุดเริ่มต้นของเวลา) | วางหน้าจุดเวลา (since 9 AM, since Monday) | *\"The cluster has been running **since** yesterday.\"* |\n| **for** | เป็นเวลา (ความยาวนาน) | วางหน้าช่วงระยะเวลา (for 3 days, for 2 hours) | *\"We have monitored this metric **for** 48 hours.\"* |\n| **recently / so far** | เมื่อเร็วๆ นี้ / จนถึงตอนนี้ | วางต้นหรือท้ายประโยค | *\"We have resolved three vulnerabilities **so far**.\"* |",
        "keyPhrases": [
          {
            "en": "Present perfect emphasizes present relevance and ongoing impact rather than the historic timestamp.",
            "th": "Present Perfect เน้นความสำคัญที่เชื่อมโยงถึงปัจจุบันมากกว่าการระบุเวลาในอดีต"
          },
          {
            "en": "Signal words like 'already', 'yet', and 'just' naturally trigger the present perfect tense.",
            "th": "คำบอกเวลาอย่าง 'already', 'yet' และ 'just' มักถูกนำมาใช้คู่กับ Present Perfect เสมอ"
          }
        ]
      },
      {
        "heading": "3. Had ใน Past Perfect Tense (`had + V3`) ลำดับ 2 เหตุการณ์ในอดีต",
        "content": "ในการเขียน Incident Report หรือ Post-Mortem คุณต้องอธิบายเหตุการณ์ในอดีตที่เกิดขึ้นซ้อนกัน **Past Perfect (`had + V3`)** คือเครื่องมือบอกว่า **'อะไรเกิดก่อน อะไรเกิดหลัง'**:\n\n### 🕒 ตารางลำดับเหตุการณ์ในอดีต (Past Perfect Timeline Matrix):\n\n| เหตุการณ์ที่ 1 (เกิดก่อนในอดีต = had + V3) | คำเชื่อมเวลา | เหตุการณ์ที่ 2 (เกิดตามมาทีหลัง = V2) | ประโยคสรุปใน Incident Report |\n| :--- | :--- | :--- | :--- |\n| The memory usage **had exceeded** 95% | **before** | the worker pod **crashed**. | *\"The memory usage **had exceeded** 95% before the pod **crashed**.\"* |\n| We **had already taken** a snapshot backup | **when** | the persistent disk **corrupted**. | *\"We **had already taken** a snapshot backup when the disk **corrupted**.\"* |\n| The attacker **had infiltrated** the network | **by the time** | the SOC team **detected** the breach. | *\"The attacker **had infiltrated** the network by the time the team **detected** it.\"* |",
        "keyPhrases": [
          {
            "en": "Past perfect is indispensable in post-mortem reports to establish exact chronological precedence.",
            "th": "Past Perfect เป็นสิ่งจำเป็นอย่างยิ่งในรายงาน Post-Mortem เพื่อระบุลำดับก่อนหลังของเหตุการณ์ให้ชัดเจน"
          },
          {
            "en": "The earlier past action takes 'had + V3', while the subsequent event takes a standard V2.",
            "th": "เหตุการณ์ในอดีตที่เกิดก่อนใช้ 'had + V3' ในขณะที่เหตุการณ์ตามมาใช้ V2 ปกติ"
          }
        ]
      },
      {
        "heading": "4. Have to vs Must ต่างกันอย่างไร และใช้อย่างไรให้ถูกต้อง",
        "content": "ทั้ง **Have to** และ **Must** แปลว่า \"ต้องทำ\" เหมือนกัน แต่ในแวดวงการทำงาน มีความแตกต่างเชิงจิตวิทยาและไวยากรณ์ที่สำคัญมาก:\n\n### ⚖️ ตารางเปรียบเทียบ Have to vs Must vs Had to ทุกมิติ:\n\n| มิติการเปรียบเทียบ | HAVE TO (ความจำเป็นจากปัจจัยภายนอก) | MUST (ความจำเป็นจากความรู้สึกภายใน) |\n| :--- | :--- | :--- |\n| **ที่มาของความจำเป็น** | กฎเกณฑ์, นโยบายบริษัท, SLA, สภาพแวดล้อมบังคับ | ผู้พูดรู้สึกเองว่าจำเป็นต้องทำ หรือข้อสรุปตรรกะ |\n| **ตัวอย่างในงาน** | *\"We **have to** comply with GDPR regulations.\"*<br>*(กฎหมายบังคับ ไม่ทำไม่ได้)* | *\"I **must** finish this design document today.\"*<br>*(ตัวฉันเองตั้งใจและมุ่งมั่นจะทำให้เสร็จ)* |\n| **รูปอดีต (Past Tense)** | มีรูปอดีตคือ **HAD TO**<br>*(เช่น \"We **had to** rollback the release yesterday.\")* | **ไม่มีรูปอดีต!** ต้องเปลี่ยนไปใช้ **HAD TO** เสมอ<br>*(ห้ามพูดว่า ❌ musted)* |\n\n### 🛑 ตารางเปรียบเทียบรูปปฏิเสธ: don't have to vs must not:\n\n| รูปปฏิเสธ | ความหมายที่แท้จริง | ตัวอย่างประโยค | คำอธิบายบริบท |\n| :--- | :--- | :--- | :--- |\n| **don't have to** | **'ไม่ต้องทำก็ได้ ไม่ได้บังคับ'** (Lack of obligation) | *\"You **don't have to** attend the optional sync.\"* | จะเข้าประชุมหรือไม่เข้าก็ได้ตามสะดวก |\n| **must not** | **'ห้ามทำเด็ดขาด มีอันตรายหรือผิดกฎ'** (Prohibition) | *\"You **must not** commit API secrets to GitHub.\"* | ห้ามทำเด็ดขาด เป็นการละเมิดความปลอดภัยร้ายแรง |",
        "keyPhrases": [
          {
            "en": "The past tense of must is always 'had to', as must lacks an inflected past form.",
            "th": "รูปอดีตของ must คือ 'had to' เสมอ เนื่องจาก must ไม่มีรูปผันอดีตในตัวเอง"
          },
          {
            "en": "'Don't have to' signifies lack of obligation, whereas 'must not' enforces strict prohibition.",
            "th": "'Don't have to' สื่อว่าไม่ต้องทำก็ได้ ส่วน 'must not' เป็นการสั่งห้ามทำเด็ดขาด"
          }
        ]
      },
      {
        "heading": "5. โครงสร้าง Causative: 'Have something done' การมอบหมายงานให้ทีมอื่นทำ",
        "content": "ในฐานะ Lead หรือ Engineer คุณไม่ได้ลงมือทำทุกอย่างด้วยตนเอง แต่คุณมักจะ **'มอบหมายให้ทีมอื่นจัดการให้'**:\n\n### 🤝 ตารางโครงสร้าง Causative 'Have something done':\n\n| ประโยคทำเอง (Direct Action) | ประโยคให้คนอื่น/ทีมอื่นทำให้ (Causative Have) | ความหมายในบริบทการทำงาน |\n| :--- | :--- | :--- |\n| *\"I renewed the SSL certificate.\"*<br>*(ฉันเป็นคนต่ออายุใบรับรอง SSL เอง)* | *\"I **had the SSL certificate renewed** by the DevOps team.\"* | ฉันมอบหมายให้ทีม DevOps ช่วยต่ออายุใบรับรอง SSL ให้ |\n| *\"We audited the smart contract.\"*<br>*(พวกเราตรวจสอบสัญญาเอง)* | *\"We **had our smart contract audited** by a third-party security firm.\"* | เราจ้างหรือมอบหมายให้บริษัทภายนอกเป็นผู้ตรวจสอบให้ |\n| *\"I will fix my laptop.\"*<br>*(ฉันจะซ่อมโน้ตบุ๊กเอง)* | *\"I will **have my laptop repaired** by the IT support team.\"* | ฉันจะส่งโน้ตบุ๊กให้ทีม IT Support ซ่อมให้ |",
        "keyPhrases": [
          {
            "en": "The causative structure 'have something done' communicates delegation of tasks cleanly.",
            "th": "โครงสร้าง Causative 'have something done' ใช้สื่อสารถึงการมอบหมายงานได้อย่างชัดเจน"
          },
          {
            "en": "Use the past participle V3 after the object to signify that the service was performed externally.",
            "th": "ใช้กริยาช่อง 3 ตามหลังกรรมเพื่อสื่อว่าบริการหรืองานนั้นได้รับการปฏิบัติโดยบุคคลอื่น"
          }
        ]
      },
      {
        "heading": "6. กับดักที่คนไทยมักผิดบ่อย: Have gone to vs Have been to, didn't have vs hadn't",
        "content": "นี่คือตารางสรุปข้อควรระวังในการใช้ Verb to HAVE ที่พบบ่อย:\n\n### ⚠️ ตารางเปรียบเทียบกับดัก Verb to HAVE ที่พบบ่อย:\n\n| ประเด็นที่คนมักสับสน | ตัวเลือกที่ 1 (ความหมาย & การใช้) | ตัวเลือกที่ 2 (ความหมาย & การใช้) | ตัวอย่างประโยคเปรียบเทียบ |\n| :--- | :--- | :--- | :--- |\n| **gone to vs been to** | **have gone to:** เดินทางไปแล้ว **และยังอยู่ที่นั่น** | **have been to:** เคยเดินทางไปมาแล้ว **และกลับมาแล้ว** | *\"He has **gone** to London.\"* (ตอนนี้อยู่ลอนดอน)<br>*\"He has **been** to London.\"* (เคยไปลอนดอน ตอนนี้นั่งอยู่นี่) |\n| **didn't have vs hadn't** | **didn't have:** ปฏิเสธ 'การมี' ในอดีต (กริยาแท้) | **hadn't + V3:** กริยาช่วยใน Past Perfect เท่านั้น | *\"I **didn't have** time.\"* (ไม่มีเวลา)<br>*\"The job **hadn't finished**.\"* (งานยังไม่เสร็จ) |",
        "keyPhrases": [
          {
            "en": "'Have gone to' means the subject is still away, while 'have been to' indicates a completed trip.",
            "th": "'Have gone to' หมายถึงบุคคลนั้นยังอยู่ที่นั่น ส่วน 'have been to' คือเคยไปและกลับมาแล้ว"
          },
          {
            "en": "Use 'didn't have' to negate possession in the past, reserving 'hadn't' solely for the past perfect auxiliary.",
            "th": "ใช้ 'didn't have' เมื่อปฏิเสธการครอบครองในอดีต และสงวน 'hadn't' ไว้เฉพาะกริยาช่วย Past Perfect เท่านั้น"
          }
        ]
      }
    ],
    "readingQuiz": [
      {
        "question": "ในรายงาน Incident Report หากต้องการบอกว่า 'ดาต้าเบสเกิดแครชไปก่อนที่ระบบสำรองข้อมูลจะเริ่มทำงาน' ควรใช้โครงสร้าง Tense ใด?",
        "options": [
          "The database crashed before the backup system started.",
          "The database had crashed before the backup system started.",
          "The database has crashed before the backup system started.",
          "The database was crashed before the backup system had started."
        ],
        "answer": 1,
        "explanation": "ถูกต้อง! เหตุการณ์ที่เกิดก่อนในอดีต (ดาต้าเบสแครช) ต้องใช้ Past Perfect ('had crashed') ส่วนเหตุการณ์ที่ตามมาทีหลัง (ระบบสำรองเริ่มทำงาน) ใช้ Past Simple ('started')"
      },
      {
        "question": "ข้อใดคือความหมายที่ถูกต้องของประโยค 'You don't have to join the optional backlog refinement call'?",
        "options": [
          "คุณห้ามเข้าร่วมประชุมนี้เด็ดขาดเพราะผิดกฎ",
          "คุณไม่จำเป็นต้องเข้าร่วมประชุมนี้ก็ได้ (เป็นทางเลือก ไม่ได้บังคับ)",
          "คุณต้องเข้าร่วมประชุมนี้ในอดีต",
          "คุณควรเข้าร่วมประชุมนี้อย่างยิ่ง"
        ],
        "answer": 1,
        "explanation": "ถูกต้อง! 'don't have to' หมายถึง 'ไม่จำเป็นต้องทำ / ไม่ได้บังคับ' (Lack of obligation) แตกต่างจาก 'must not' ที่แปลว่าห้ามทำเด็ดขาด"
      },
      {
        "question": "ข้อใดเป็นประโยคที่ถูกต้องตามโครงสร้าง Causative Form 'Have something done' (มอบหมายให้ผู้อื่นทำ)?",
        "options": [
          "We had our security audit by external consultants.",
          "We had our infrastructure audited by an external security firm.",
          "We have our infrastructure audit by an external firm.",
          "We had audited our infrastructure by ourselves."
        ],
        "answer": 1,
        "explanation": "ถูกต้อง! โครงสร้าง Causative คือ 'have + something + V3' (had our infrastructure audited) แปลว่าพวกเราได้มอบหมายให้บริษัทภายนอกเป็นผู้ตรวจสอบให้"
      },
      {
        "question": "คำบอกเวลา (Signal Word) ในข้อใดต่อไปนี้ที่นิยมใช้คู่กับ Present Perfect Tense เพื่อบอกว่า 'ทำเสร็จเรียบร้อยแล้ว'?",
        "options": [
          "yesterday",
          "last week",
          "already",
          "ago"
        ],
        "answer": 2,
        "explanation": "ถูกต้อง! 'already' เป็นคำบอกเวลาประจำของ Present Perfect (เช่น 'We have already merged the pull request.') ส่วน yesterday, last week, ago จะใช้กับ Past Simple (V2)"
      },
      {
        "question": "หากคุณต้องการปฏิเสธว่า 'เมื่อวานผมไม่มีสิทธิ์เข้าถึงคลัสเตอร์นั้น' ข้อใดถูกต้องตามหลักไวยากรณ์?",
        "options": [
          "Yesterday, I hadn't access to that cluster.",
          "Yesterday, I didn't have access to that cluster.",
          "Yesterday, I haven't access to that cluster.",
          "Yesterday, I not had access to that cluster."
        ],
        "answer": 1,
        "explanation": "ถูกต้อง! เมื่อ have ทำหน้าที่เป็นกริยาแท้แปลว่า 'มี' การปฏิเสธในอดีตต้องใช้ 'didn't have' (Yesterday, I didn't have access...) ส่วน hadn't จะใช้เป็นกริยาช่วยตามด้วย V3 เท่านั้น"
      }
    ]
  },
  {
    "id": "art-verb-to-be-mastery",
    "title": "เจาะลึก Verb to BE: การใช้ Is, Am, Are, Was, Were, Been, Being รากฐานภาษาอังกฤษ",
    "titleEn": "The Ultimate Guide to Verb to BE: Linking Verb, Continuous Tenses & Passive Voice",
    "category": "Core Foundation & Passive Voice",
    "categoryTh": "กริยาพื้นฐาน & Passive Voice",
    "readTime": "16 นาที",
    "author": "Lead Systems Engineer & Technical Writing Instructor",
    "publishedDate": "2026-10-24",
    "coverEmoji": "🏛️",
    "summary": "คู่มือแม่บท Verb to BE ครบทั้ง 8 รูป (be, is, am, are, was, were, been, being) ตั้งแต่การเป็น Linking Verb เชื่อมสถานะ, การสร้าง Continuous Tense, การเขียน Passive Voice สไตล์วิศวกรรม, และการแยกแยะ Been vs Being อย่างแม่นยำ",
    "tags": [
      "Verb to BE",
      "Is Am Are Was Were",
      "Passive Voice",
      "Been vs Being",
      "Continuous Tense",
      "Linking Verb"
    ],
    "sections": [
      {
        "heading": "1. สัจธรรม 8 ร่างของ Verb to BE: ผันตามประธานและ Tense อย่างไร",
        "content": "Verb to BE คือกริยาที่มีรูปผันมากที่สุดในภาษาอังกฤษ (ถึง 8 รูป) การทำความเข้าใจตารางแม่บทนี้จะช่วยให้คุณไม่มีวันใช้ผิดอีกต่อไป:\n\n### 🏛️ ตารางแม่บทสัจธรรม 8 ร่างของ Verb to BE:\n\n| รูปแบบ (Form) | รูปคำศัพท์ | Tense & บทบาท | ประธานที่จับคู่ | ตัวอย่างประโยคจริง |\n| :--- | :--- | :--- | :--- | :--- |\n| **Base Form** | **be** | รูปตั้งต้น (หลัง Modal หรือ to) | ใช้กับทุกประธานหลัง Modal | *\"The server must **be** resilient.\"* |\n| **Present Form** | **is** | ปัจจุบัน (Present Simple) | He, She, It, คำนามเอกพจน์ | *\"The API **is** currently healthy.\"* |\n| | **am** | ปัจจุบัน (Present Simple) | **I** เท่านั้น | *\"I **am** investigating the latency.\"* |\n| | **are** | ปัจจุบัน (Present Simple) | You, We, They, คำนามพหูพจน์ | *\"These microservices **are** scalable.\"* |\n| **Past Form** | **was** | อดีต (Past Simple) | I, He, She, It, คำนามเอกพจน์ | *\"The node **was** drained yesterday.\"* |\n| | **were** | อดีต (Past Simple) | You, We, They, คำนามพหูพจน์ | *\"The unit tests **were** successful.\"* |\n| **Participle Form** | **been** | กริยาช่อง 3 (หลัง have/has/had) | ใช้กับทุกประธานใน Perfect Tense | *\"The PR has **been** approved.\"* |\n| **Continuous / Gerund** | **being** | กำลังเกิดขึ้น (หลัง be ใน Continuous) | ใช้กับประธานที่กำลังถูกกระทำ | *\"The code is **being** refactored.\"* |",
        "keyPhrases": [
          {
            "en": "Verb to be has eight distinct inflected forms spanning present, past, participle, and continuous aspects.",
            "th": "Verb to be มีรูปผันที่แตกต่างกันถึง 8 รูป ครอบคลุมทั้งปัจจุบัน อดีต Participle และ Continuous"
          },
          {
            "en": "Matching the correct form of 'be' to the grammatical subject is the foundational pillar of English syntax.",
            "th": "การจับคู่รูปของ 'be' ให้ตรงกับประธานทางไวยากรณ์คือเสาหลักรากฐานของโครงสร้างประโยคภาษาอังกฤษ"
          }
        ]
      },
      {
        "heading": "2. บทบาทที่ 1: Linking Verb (เป็น, อยู่, คือ) และ Subject-Verb Agreement",
        "content": "เมื่อทำหน้าที่เป็น **Linking Verb** กริยา Verb to be จะทำหน้าที่เป็นเหมือน 'เครื่องหมายเท่ากับ (=)' เชื่อมประธานเข้ากับข้อมูลขยาย:\n\n### 📌 ตารางบทบาท Linking Verb (เป็น, อยู่, คือ) ตามชนิดคำ:\n\n| ชนิดคำส่วนเติมเต็ม | บทบาทการอธิบายประธาน | โครงสร้างประโยค | ตัวอย่างประโยคงานวิศวกรรม | คำแปลภาษาไทย |\n| :--- | :--- | :--- | :--- | :--- |\n| **Adjective (คุณลักษณะ)** | บรรยายสภาพหรือสถานะของระบบ | be + Adjective | *\"The database is **responsive**.\"* | ฐานข้อมูลตอบสนองได้รวดเร็ว |\n| **Noun (ตัวตน / ตำแหน่ง)** | บรรยายหน้าที่ความรับผิดชอบ | be + Noun | *\"She is our **principal architect**.\"* | เธอคือหัวหน้าสถาปนิกประจำระบบ |\n| **Preposition (สถานที่ / สภาพ)** | บรรยายตำแหน่งหรือสภาวะแวดล้อม | be + Preposition | *\"The cluster is **in the us-central1 region**.\"* | คลัสเตอร์ตั้งอยู่ในโซน us-central1 |\n\n### 📌 ตารางการใช้ 'มี' (There + be) ตามกาลและจำนวนประธาน:\n\n| กาลเวลา (Tense) | จำนวนประธาน | รูปกริยาที่ถูกต้อง | ตัวอย่างประโยค | คำเตือน (ข้อห้าม) |\n| :--- | :--- | :--- | :--- | :--- |\n| **ปัจจุบัน (Present)** | เอกพจน์ (1 สิ่ง) | **There is** | *\"**There is** an issue with the auth token.\"* | ห้ามพูด ❌ *Have an issue* |\n| **ปัจจุบัน (Present)** | พหูพจน์ (หลายสิ่ง) | **There are** | *\"**There are** three pending pull requests.\"* | ห้ามพูด ❌ *Have three PRs* |\n| **อดีต (Past)** | เอกพจน์ (1 สิ่ง) | **There was** | *\"**There was** a network timeout at 3 AM.\"* | ห้ามพูด ❌ *Had a timeout* |\n| **อดีต (Past)** | พหูพจน์ (หลายสิ่ง) | **There were** | *\"**There were** multiple 502 Bad Gateway errors.\"* | ห้ามพูด ❌ *Had multiple errors* |",
        "keyPhrases": [
          {
            "en": "Linking verbs act as semantic equal signs connecting the subject to descriptive complements.",
            "th": "Linking Verb ทำหน้าที่เสมือนเครื่องหมายเท่ากับที่เชื่อมประธานเข้ากับส่วนขยายบอกคุณลักษณะ"
          },
          {
            "en": "Use 'there is' or 'there are' for existence, avoiding the common Thai mistake of using 'have'.",
            "th": "ใช้ 'there is' หรือ 'there are' เพื่อบอกการมีอยู่ หลีกเลี่ยงข้อผิดพลาดที่มักเผลอใช้คำว่า 'have'"
          }
        ]
      },
      {
        "heading": "3. บทบาทที่ 2: Continuous Tenses (`be + V-ing`) บอกสิ่งที่กำลังดำเนินอยู่",
        "content": "เมื่อนำ Verb to BE มารวมร่างกับ **กริยาเติม -ing (`be + V-ing`)** จะกลายเป็น **Continuous Tense** บอกว่าเหตุการณ์นั้น **'กำลังดำเนินอยู่'**:\n\n### ⏳ ตาราง Continuous Tenses (be + V-ing) Present vs Past vs Future:\n\n| Tense | โครงสร้าง | การใช้งานจริง | ตัวอย่างในงานวิศวกรรม |\n| :--- | :--- | :--- | :--- |\n| **Present Continuous** | is/am/are + V-ing | กำลังทำอยู่ ณ วินาทีนี้ หรือแผนการที่กำลังจะเกิดขึ้นแน่นอน | *\"I **am currently migrating** the customer schema to Cloud SQL.\"* |\n| **Past Continuous** | was/were + V-ing | กำลังดำเนินอยู่ในอดีตในจุดเวลาหนึ่ง แล้วมีอีกเหตุการณ์เข้ามาขัดจังหวะ | *\"I **was inspecting** the metrics when the CPU alarm **sounded**.\"* |\n| **Future Continuous** | will be + V-ing | จะกำลังทำอยู่ในช่วงเวลานั้นในอนาคต | *\"We **will be running** the maintenance window from 2 AM to 4 AM.\"* |",
        "keyPhrases": [
          {
            "en": "Continuous tenses capture ongoing progress and time-bound operational windows.",
            "th": "Continuous Tense ช่วยถ่ายทอดความคืบหน้าที่กำลังดำเนินอยู่และช่วงเวลาปฏิบัติการที่ชัดเจน"
          },
          {
            "en": "Past continuous describes background activity interrupted by an acute incident event.",
            "th": "Past Continuous บรรยายกิจกรรมเบื้องหลังที่กำลังดำเนินอยู่ก่อนถูกขัดจังหวะด้วยเหตุการณ์เฉียบพลัน"
          }
        ]
      },
      {
        "heading": "4. บทบาทที่ 3: Passive Voice (`be + V3`) หัวใจของการเขียนเอกสารเชิงเทคนิค",
        "content": "ในเอกสารสถาปัตยกรรม, เอกสาร RFC, และ Release Notes เจ้าของภาษาใช้ **Passive Voice** เป็นหลัก เพราะ **เราโฟกัสที่ระบบและผลลัพธ์ ไม่ใช่ตัวบุคคลที่ทำ**:\n\n### ⚙️ ตาราง Active Voice vs Passive Voice (be + V3) ครบทุก Tense:\n\n| Tense | Active Voice (เน้นผู้กระทำ) | Passive Voice (be + V3 - เน้นผลลัพธ์ที่ระบบ) |\n| :--- | :--- | :--- |\n| **Present Simple** | *\"DevOps **monitors** the cluster.\"* | *\"The cluster **is monitored** 24/7.\"* |\n| **Past Simple** | *\"The engineer **fixed** the bug.\"* | *\"The bug **was fixed** yesterday.\"* |\n| **Present Continuous** | *\"The team **is reviewing** the PR.\"* | *\"The PR **is being reviewed** by the senior lead.\"* |\n| **Present Perfect** | *\"We **have resolved** the issue.\"* | *\"The issue **has been resolved**.\"* |\n| **Past Perfect** | *\"The DBA **had restored** the DB.\"* | *\"The database **had been restored** before traffic resumed.\"* |\n| **Future (will)** | *\"We **will deploy** the service.\"* | *\"The service **will be deployed** tomorrow morning.\"* |\n| **Modal (can/must)** | *\"We must **encrypt** all data.\"* | *\"All data must **be encrypted** at rest.\"* |",
        "keyPhrases": [
          {
            "en": "Passive voice dominates technical documentation because the system state matters more than individual contributors.",
            "th": "Passive Voice ครองพื้นที่ส่วนใหญ่ในเอกสารเชิงเทคนิคเพราะสถานะของระบบสำคัญกว่าตัวบุคคลผู้ทำ"
          },
          {
            "en": "Constructing passive voice requires precisely matching the tense of 'be' with the past participle V3.",
            "th": "การสร้าง Passive Voice ต้องจับคู่ Tense ของ 'be' ให้สอดคล้องกับกริยาช่อง 3 อย่างแม่นยำ"
          }
        ]
      },
      {
        "heading": "5. ความต่างลึกซึ้งระหว่าง Being vs Been: กำลังถูกกระทำ vs เสร็จสิ้นแล้ว",
        "content": "จุดที่ผู้เรียนภาษาอังกฤษสับสนบ่อยที่สุดคือการแยกแยะระหว่าง **being** กับ **been**:\n\n### ⚖️ ตารางเปรียบเทียบ Being vs Been (กำลังถูกกระทำ vs เสร็จสมบูรณ์แล้ว):\n\n| มิติการเปรียบเทียบ | BEING (/ˈbiː.ɪŋ/ - 2 พยางค์) | BEEN (/bɪn/ หรือ /biːn/ - 1 พยางค์) |\n| :--- | :--- | :--- |\n| **รูปกริยา** | รูป Gerund / Continuous ของ be | รูปกริยาช่อง 3 (Past Participle) ของ be |\n| **โครงสร้าง** | ใช้ตามหลัง **is / am / are / was / were** | ใช้ตามหลัง **have / has / had / will have** |\n| **ความหมาย** | **'กำลังถูกกระทำอยู่ ณ ตอนนี้' (ยังไม่เสร็จ)** | **'ได้รับการกระทำเสร็จสิ้นสมบูรณ์แล้ว' (เสร็จแล้ว)** |\n| **ตัวอย่างเปรียบเทียบ** | *\"The code **is being reviewed**.\"*<br>*(โค้ดกำลังอยู่ในระหว่างการรีวิว ยังรีวิวไม่เสร็จ)* | *\"The code **has been reviewed**.\"*<br>*(โค้ดได้รับการรีวิวเสร็จเรียบร้อยแล้ว พร้อม Merge)* |\n| **ตัวอย่างกรณี Incident** | *\"The server **is being patched** right now.\"*<br>*(เซิร์ฟเวอร์กำลังถูกลงแพตช์อยู่ขณะนี้)* | *\"The server **has been patched** and rebooted.\"*<br>*(เซิร์ฟเวอร์ได้รับการลงแพตช์และรีบูตเสร็จแล้ว)* |",
        "keyPhrases": [
          {
            "en": "'Being' denotes an ongoing passive action, whereas 'been' signals completed passive execution.",
            "th": "'Being' สื่อถึงการกระทำแบบ Passive ที่กำลังดำเนินอยู่ ส่วน 'been' สื่อถึงการกระทำที่เสร็จสิ้นสมบูรณ์แล้ว"
          },
          {
            "en": "Distinguishing between 'is being done' and 'has been done' prevents miscommunication regarding task status.",
            "th": "การแยกแยะระหว่าง 'is being done' และ 'has been done' ช่วยป้องกันการสื่อสารคลาดเคลื่อนเรื่องสถานะงาน"
          }
        ]
      },
      {
        "heading": "6. การใช้ Were ในประโยคสมมติ (Unreal Subjunctive / If-clause)",
        "content": "ในประโยคสมมติแบบเป็นไปไม่ได้หรือไม่เป็นจริงในปัจจุบัน (Second Conditional / Subjunctive Mood) เราจะใช้ **were** กับประธานทุกตัว:\n\n### 🔮 ตารางการใช้ Were ในประโยคสมมติ (Unreal Subjunctive Matrix):\n\n| รูปแบบเงื่อนไขสมมติ | โครงสร้างไวยากรณ์ | กฎพิเศษที่ต้องจำ | ตัวอย่างประโยคใช้งานจริง | คำแปลภาษาไทย |\n| :--- | :--- | :--- | :--- | :--- |\n| **สมมติตนเองเป็นผู้อื่น** | If I were you, I would + V1 | ใช้ **were** กับประธาน I เสมอ | *\"If I **were** you, I would scale the pods now.\"* | ถ้าผมเป็นคุณ ผมจะขยาย Pod เดี๋ยวนี้เลย |\n| **สมมติสภาพระบบที่เป็นไปไม่ได้** | If + Subject + were + Adj/Offline | ใช้ **were** แม้ประธานจะเป็นเอกพจน์ | *\"If the primary DB **were** offline, cache would respond.\"* | ถ้าสมมติว่าฐานข้อมูลหลักล่ม แคชจะตอบสนองแทน |\n| **ขอความเห็นทางเลือก** | What would you do if you were...? | ใช้ถามความเห็นเชิงเปรียบเทียบ | *\"What would you do if you **were** the on-call lead?\"* | คุณจะทำอย่างไรถ้าคุณเป็นหัวหน้าเวร On-call ตอนนี้? |",
        "keyPhrases": [
          {
            "en": "In subjunctive conditionals expressing hypothetical states, 'were' is utilized across all subjects.",
            "th": "ในประโยคเงื่อนไขสมมติ Subjunctive จะใช้ 'were' กับประธานทุกตัว"
          },
          {
            "en": "Using 'were' in technical hypotheticals projects professionalism and formal precision.",
            "th": "การใช้ 'were' ในการตั้งสมมติฐานทางเทคนิคช่วยสะท้อนความเป็นมืออาชีพและความแม่นยำทางภาษา"
          }
        ]
      }
    ],
    "readingQuiz": [
      {
        "question": "หากคุณต้องการบอกสถานะการทำงานใน Slack ว่า 'โค้ดฟีเจอร์นี้กำลังอยู่ในระหว่างการรีวิวโดย Senior (ยังไม่เสร็จ)' ควรเลือกใช้ประโยคใด?",
        "options": [
          "The feature code has been reviewed by the senior engineer.",
          "The feature code is being reviewed by the senior engineer.",
          "The feature code was reviewed by the senior engineer.",
          "The feature code is been reviewed by the senior engineer."
        ],
        "answer": 1,
        "explanation": "ถูกต้อง! 'is being reviewed' (is + being + V3) สื่อถึงการกระทำในรูปแบบ Passive Voice ที่กำลังดำเนินอยู่ ณ ตอนนี้ (ยังรีวิวไม่เสร็จ) ส่วน 'has been reviewed' จะแปลว่ารีวิวเสร็จสิ้นแล้ว"
      },
      {
        "question": "ในประโยคบอกว่า 'มีหลาย Microservices ในระบบคลัสเตอร์ของเรา' ข้อใดถูกต้องตามหลัก Subject-Verb Agreement?",
        "options": [
          "There is multiple microservices in our cluster.",
          "There are multiple microservices in our cluster.",
          "There have multiple microservices in our cluster.",
          "There was multiple microservices in our cluster."
        ],
        "answer": 1,
        "explanation": "ถูกต้อง! เมื่อประธานเป็นพหูพจน์ (multiple microservices) และเป็นกาลปัจจุบัน ต้องใช้ 'There are' (ห้ามใช้ 'There is' หรือ 'There have')"
      },
      {
        "question": "ข้อใดคือรูปประโยค Passive Voice ที่ถูกต้องของประโยค Active: 'We must encrypt all customer data'?",
        "options": [
          "All customer data must encrypted.",
          "All customer data must be encrypted.",
          "All customer data must being encrypted.",
          "All customer data must have encrypted."
        ],
        "answer": 1,
        "explanation": "ถูกต้อง! โครงสร้าง Passive Voice หลัง Modal verb (must) คือ 'Modal + be + V3' จึงได้เป็น 'must be encrypted' (ข้อมูลลูกค้าทั้งหมดต้องได้รับการเข้ารหัส)"
      },
      {
        "question": "ในประโยคเงื่อนไขสมมติ (Subjunctive Mood): 'If the staging server _____ offline, we would test locally.' ควรเติมคำใดในช่องว่างจึงจะถูกต้องตามหลักไวยากรณ์สากล?",
        "options": [
          "is",
          "was",
          "were",
          "be"
        ],
        "answer": 2,
        "explanation": "ถูกต้อง! ในประโยคสมมติที่ไม่เป็นจริง (Subjunctive / Second Conditional) ตามหลักไวยากรณ์สากลจะต้องใช้ 'were' กับประธานทุกตัว แม้ประธานจะเป็นเอกพจน์ (the staging server)"
      },
      {
        "question": "ประโยคใดต่อไปนี้ใช้ Verb to BE ได้อย่างถูกต้องสมบูรณ์?",
        "options": [
          "I am agree with the database architecture proposal.",
          "I agree with the database architecture proposal.",
          "I was agree with the database architecture proposal.",
          "I being agree with the database architecture proposal."
        ],
        "answer": 1,
        "explanation": "ถูกต้อง! คำว่า 'agree' เป็นคำกริยาแท้ (Verb) ในตัวเองอยู่แล้ว แปลว่า 'เห็นด้วย' จึงไม่ต้องใส่ Verb to be (am) นำหน้า (ข้อผิดพลาดที่คนไทยเผลอพูดบ่อยคือ 'I am agree' ซึ่งผิดหลักไวยากรณ์)"
      }
    ]
  },
  {
    "id": "art-modal-verbs-mastery",
    "title": "และอื่นๆ ที่ต้องรู้: กริยาช่วยกลุ่ม Modal Verbs (Can, Could, Will, Would, Should, Must)",
    "titleEn": "Essential Modal Verbs in Workplace Communication: Politeness, Possibility & Post-Mortems",
    "category": "Modal Auxiliaries & Nuances",
    "categoryTh": "กริยาช่วยบอกอารมณ์ & การสื่อสารสากล",
    "readTime": "15 นาที",
    "author": "Principal DevOps Lead & Global Team Facilitator",
    "publishedDate": "2026-10-24",
    "coverEmoji": "🛡️",
    "summary": "เชี่ยวชาญการใช้กริยาช่วยกลุ่ม Modal Verbs ในการทำงานจริง: การปรับระดับความสุภาพในการขอร้องและเสนอความคิดเห็น, การประเมินความเป็นไปได้ใน Incident, และสูตรวิเคราะห์เหตุการณ์ย้อนหลัง (Modal Perfect) ในการทำ Post-Mortem และ Retro",
    "tags": [
      "Modal Verbs",
      "Can Could Will Would",
      "Should Must",
      "Polite Requests",
      "Modal Perfect",
      "Post-Mortem RCA"
    ],
    "sections": [
      {
        "heading": "1. กฎเหล็กของ Modal Verbs ที่ห้ามลืมเด็ดขาด",
        "content": "**Modal Verbs** คือกลุ่มกริยาช่วยพิเศษที่เข้ามาแต่งแต้ม 'อารมณ์, ความมั่นใจ, หรือความสุภาพ' ให้กับประโยค:\n\n### 🚨 ตาราง 3 กฎเหล็กของ Modal Verbs ที่ห้ามละเมิดเด็ดขาด:\n\n| กฎเหล็กสำคัญ | ข้อห้ามเด็ดขาด (❌ ผิดไวยากรณ์) | รูปแบบที่ถูกต้อง (✅ ถูกต้องสากล) | เหตุผลทางไวยากรณ์ |\n| :--- | :--- | :--- | :--- |\n| **1. ห้ามเติม -s/-es** | *\"She **cans** write clean Python code.\"* | *\"She **can** write clean Python code.\"* | Modal Verbs ไม่ผันตามประธานเอกพจน์เด็ดขาด |\n| **2. ตามด้วย V1 เพียวๆ** | *\"We must **to fix** this issue immediately.\"* | *\"We must **fix** this issue immediately.\"* | หลัง Modal ต้องเป็น Bare Infinitive (ห้ามมี to) |\n| **3. ไม่มีรูปอดีตเติม -ed** | *\"We **musted** restart the server yesterday.\"* | *\"We **had to** restart the server yesterday.\"* | Modal ไม่มีรูปเติม -ed ต้องใช้รูปอดีตเฉพาะตัว (had to) |\n\n### 🛡️ ตารางสรุป 8 Modal Verbs ความหมาย และตัวอย่างในงานวิศวกรรม:\n\n| Modal Verb | ความหมายหลัก | ตัวอย่างในงานวิศวกรรม | คำแปลภาษาไทย |\n| :--- | :--- | :--- | :--- |\n| **can** | ความสามารถ, การอนุญาต | *\"I **can deploy** the service right now.\"* | ผมสามารถปล่อย Deploy บริการนี้ได้ทันที |\n| **could** | ความสามารถในอดีต, หรือขอร้องสุภาพ | *\"**Could** you please review my pull request?\"* | รบกวนช่วยตรวจดู PR ของผมหน่อยได้ไหมครับ? |\n| **will** | ความตั้งใจในอนาคต, การรับปาก | *\"I **will investigate** the alert after standup.\"* | ผมจะรีบตรวจสอบการแจ้งเตือนนี้หลังจบ Standup ครับ |\n| **would** | ความสุภาพนุ่มนวล, การสมมติ | *\"**Would** you mind sharing your screen?\"* | รบกวนช่วยแชร์หน้าจอของคุณได้ไหมครับ? |\n| **should** | ควรทำ (คำแนะนำตรรกะ), คาดว่าน่าจะ | *\"The migration **should** take less than 10 mins.\"* | การย้ายระบบน่าจะใช้เวลาไม่เกิน 10 นาทีครับ |\n| **must** | ต้องทำอย่างยิ่ง, หรือมั่นใจ 99% | *\"All traffic **must** pass through the gateway.\"* | ทราฟฟิกทั้งหมดต้องวิ่งผ่าน Gateway เสมอ |\n| **may / might** | อาจจะ (ความเป็นไปได้ 30-50%) | *\"The latency **might** be related to database locks.\"* | ความช้าอาจจะเกี่ยวข้องกับการติด Lock ของฐานข้อมูล |",
        "keyPhrases": [
          {
            "en": "Modal auxiliary verbs never inflect with -s or -ed and must strictly precede a bare infinitive.",
            "th": "กริยาช่วย Modal จะไม่มีการผันเติม -s หรือ -ed และต้องตามหลังด้วยกริยารูปตั้งต้นเสมอ"
          },
          {
            "en": "Modals inject tone, degrees of certainty, and polite intent into professional workplace discourse.",
            "th": "Modal ช่วยเพิ่มน้ำเสียง ระดับความมั่นใจ และเจตนาที่สุภาพลงในบทสนทนาการทำงานระดับมืออาชีพ"
          }
        ]
      },
      {
        "heading": "2. บันไดความสุภาพในการขอร้องและเสนอตัว (Polite Requests & Proposals)",
        "content": "ในการสื่อสารกับเพื่อนร่วมทีมต่างชาติ การเลือกใช้ Modal Verb จะบ่งบอกระดับความเป็นมืออาชีพและความเกรงใจของคุณได้อย่างชัดเจน:\n\n### 🪜 ตารางบันได 4 ระดับความสุภาพในการขอร้อง (Polite Requests Matrix):\n\n| ระดับความสุภาพ | ตัวอย่างประโยค | บริบทและสถานการณ์ที่ควรใช้ |\n| :--- | :--- | :--- |\n| **ระดับ 1: ตรงไปตรงมา (Direct)** | *\"**Can** you check this log?\"* | ใช้กับเพื่อนร่วมงานที่สนิทกันมาก หรือในสถานการณ์ฉุกเฉิน (Incident) ที่ต้องการความรวดเร็ว |\n| **ระดับ 2: สุภาพเป็นมาตรฐาน (Polite Standard)** | *\"**Could** you please check this log when you have time?\"* | **มาตรฐานแนะนำ:** ใช้ได้กับทุกคน ทั้งเพื่อนร่วมทีม, QA, และ Scrum Master |\n| **ระดับ 3: สุภาพและให้เกียรติสูง (Very Polite)** | *\"**Would** you be able to take a look at this log?\"* | ใช้กับหัวหน้างาน (Lead), ทีมอื่น (Cross-team), หรือลูกค้าระดับองค์กร |\n| **ระดับ 4: นุ่มนวลเกรงใจสูงสุด (Ultra Polite)** | *\"**Would you mind** checking this log?\"*<br>*(⚠️ ระวัง: mind ต้องตามด้วย **V-ing**)* | ใช้เมื่อขอร้องให้คนอื่นช่วยงานที่อาจกินเวลาของเขามาก |\n\n### 🤝 ตารางการเสนอตัวช่วยเหลืออย่างมืออาชีพ (Polite Offers Matrix):\n\n| รูปแบบการเสนอตัว | ระดับความสุภาพ | ตัวอย่างประโยคใช้งานจริง | คำแปลภาษาไทย |\n| :--- | :--- | :--- | :--- |\n| **ตรงไปตรงมา (Direct)** | I will + V1 | *\"I will check the staging logs.\"* | เดี๋ยวผมตรวจ Log บน Staging ให้ครับ |\n| **สุภาพเป็นมาตรฐาน (Polite)** | Would you like me to + V1? | *\"**Would you like me to** help troubleshoot this issue?\"* | อยากให้ผมช่วยหาสาเหตุปัญหานี้ด้วยไหมครับ? |\n| **เสนอตัวเต็มใจ (Helpful)** | I'd be happy to + V1 | *\"**I'd be happy to** assist with the deployment review.\"* | ผมยินดีเป็นอย่างยิ่งที่จะช่วยรีวิวการปล่อยงานครับ |\n| **เปิดทางเลือก (Gentle Offer)** | Let me know if you need me to + V1 | *\"Let me know if you need me to jump on a quick call.\"* | แจ้งได้เลยนะครับถ้าอยากให้เปิดคอลประชุมสั้นๆ ช่วยดู |",
        "keyPhrases": [
          {
            "en": "Escalating from 'can' to 'could' and 'would' softens imperative tone into collaborative requests.",
            "th": "การยกระดับจาก 'can' ไปเป็น 'could' และ 'would' ช่วยปรับเปลี่ยนน้ำเสียงสั่งการให้กลายเป็นการขอความร่วมมือ"
          },
          {
            "en": "Always follow 'would you mind' with a gerund (-ing form), not a base infinitive.",
            "th": "ตามหลัง 'would you mind' ด้วยกริยาเติม -ing เสมอ ห้ามใช้กริยารูปเดิม"
          }
        ]
      },
      {
        "heading": "3. การบอกระดับความมั่นใจและความเป็นไปได้ (Degrees of Certainty)",
        "content": "การเลือกใช้ Modal Verb ช่วยสื่อถึง **'เปอร์เซ็นต์ความมั่นใจ'** ในการวิเคราะห์ปัญหาระบบได้อย่างแม่นยำ:\n\n### 📊 ตารางสเปกตรัมบอกระดับความมั่นใจและความเป็นไปได้ (0% - 100%):\n\n| ระดับความมั่นใจ | Modal Verb ที่ใช้ | ตัวอย่างประโยควิเคราะห์ใน Incident | ความหมายเชิงลึก |\n| :--- | :--- | :--- | :--- |\n| **95% - 100%**<br>(มั่นใจเกือบเต็มร้อย) | **must** | *\"The Redis container **must be** out of memory; the pods keep crashing with exit code 137.\"* | มีหลักฐานชัดเจน (Exit code 137 = OOM) มั่นใจมากว่าใช่แน่ๆ |\n| **70% - 80%**<br>(คาดการณ์ตามตรรกะ) | **should** | *\"The database index **should resolve** the slow query latency.\"* | ตามหลักการแล้วการทำ Index ควรจะช่วยแก้ปัญหานี้ได้ |\n| **30% - 50%**<br>(สันนิษฐานเบื้องต้น) | **may / might / could** | *\"The network latency **might be** caused by cross-region traffic.\"* | เป็นเพียงหนึ่งในข้อสันนิษฐาน ยังไม่มีข้อมูลยืนยัน |\n| **0%**<br>(เป็นไปไม่ได้แน่นอน) | **cannot / can't** | *\"The service **can't be** reachable because the private subnet has no internet gateway.\"* | ตามโครงสร้างระบบแล้ว เป็นไปไม่ได้อย่างแน่นอน |",
        "keyPhrases": [
          {
            "en": "Calibrating modal verbs accurately reflects diagnostic certainty during incident triage.",
            "th": "การปรับใช้ Modal Verb อย่างแม่นยำช่วยสะท้อนระดับความมั่นใจในการวิเคราะห์ระหว่างรับมือ Incident"
          },
          {
            "en": "Deductive 'must' signifies strong inference based on compelling forensic evidence.",
            "th": "'Must' เชิงอนุมานสื่อถึงข้อสรุปที่หนักแน่นโดยอิงจากหลักฐานทางเทคนิคที่ชัดเจน"
          }
        ]
      },
      {
        "heading": "4. สูตรวิเคราะห์เหตุการณ์ย้อนหลัง (Modal Perfect: Modal + have + V3) สำหรับ RCA & Retro",
        "content": "นี่คือ **สูตรลับระดับ Senior Engineer** สำหรับการเขียนรายงาน **Root Cause Analysis (RCA)** และการประชุม **Sprint Retrospective**:\n\n### 🔍 ตารางสูตรวิเคราะห์เหตุการณ์ย้อนหลัง (Modal Perfect: Modal + have + V3):\n\n| สูตร Modal Perfect | ความหมายเชิงเทคนิค | ตัวอย่างประโยคใน Post-Mortem & Retro |\n| :--- | :--- | :--- |\n| **Should have + V3** | **'รู้งี้ควรจะทำ... (แต่ในอดีตไม่ได้ทำ)'**<br>ใช้ระบุจุดบกพร่องและ Action Item | *\"We **should have implemented** rate limiting on the public API.\"*<br>*(เราควรจะทำ Rate Limiting ตั้งแต่แรก แต่ตอนนั้นไม่ได้ทำ)* |\n| **Could have + V3** | **'จริง ๆ ตอนนั้นทำได้... (แต่ไม่ได้เลือกทำ)'**<br>ใช้พูดถึงทางเลือกที่พลาดไป | *\"We **could have rolled back** 20 minutes earlier to reduce the impact.\"*<br>*(จริง ๆ ตอนนั้นเรา Rollback เร็วกว่านี้ได้ 20 นาทีเพื่อลดผลกระทบ)* |\n| **Must have + V3** | **'ต้องเกิดสิ่งนี้ขึ้นแน่ ๆ ในอดีต'**<br>ใช้สันนิษฐานสาเหตุที่ผ่านไปแล้วอย่างมั่นใจ | *\"The automated cron job **must have failed** during the network blip.\"*<br>*(ตอนนั้นงาน Cron job อัตโนมัติต้องเฟลแน่ ๆ ช่วงที่เครือข่ายสะดุด)* |\n| **Couldn't have + V3** | **'ต่อให้ทำอย่างไร ตอนนั้นก็เป็นไปไม่ได้'**<br>ใช้ชี้แจงข้อจำกัด | *\"We **couldn't have prevented** this without upstream vendor notification.\"*<br>*(เราไม่มีทางป้องกันได้เลยถ้าผู้ให้บริการต้นทางไม่แจ้งเตือนมาก่อน)* |",
        "keyPhrases": [
          {
            "en": "Modal perfect constructions (modal + have + V3) are essential for retrospective post-mortem analyses.",
            "th": "โครงสร้าง Modal Perfect (modal + have + V3) เป็นหัวใจสำคัญสำหรับการวิเคราะห์รายงาน Post-Mortem ย้อนหลัง"
          },
          {
            "en": "'Should have' pinpoints process gaps without assigning toxic personal blame.",
            "th": "'Should have' ช่วยชี้จุดบกพร่องของกระบวนการโดยไม่เป็นการกล่าวโทษตัวบุคคลในเชิงลบ"
          }
        ]
      },
      {
        "heading": "5. Would like to vs Want to / Should vs Ought to: การเลือกใช้คำให้เป็นมืออาชีพ",
        "content": "ในบริบทองค์กรสากล การใช้คำที่นุ่มนวลจะช่วยสร้างสัมพันธภาพและการยอมรับที่ดีกว่า:\n\n### ⚖️ ตารางเปรียบเทียบการเลือกใช้คำให้เป็นมืออาชีพ (Tone & Nuances):\n\n| มิติการสื่อสาร | รูปแบบทั่วไป (Too Direct / Informal) | รูปแบบมืออาชีพ (Professional Standard) | ตัวอย่างประโยคในที่ทำงาน |\n| :--- | :--- | :--- | :--- |\n| **การแจ้งความประสงค์** | **want to** (ฟังดูห้วน/เอาแต่ใจ) | **would like to** (สุภาพ นุ่มนวล) | *\"I **would like to request** temporary read access to the cluster.\"* |\n| **การเลือกตัวเลือกที่ชอบกว่า** | **prefer ... over ...** | **would rather + V1 ... than ...** | *\"I **would rather deploy** on Monday than release on Friday evening.\"* |\n| **คำแนะนำทั่วไป** | **should** (คำแนะนำตามตรรกะ) | **should** (คำแนะนำตามตรรกะ) | *\"We **should add** automated health check endpoints.\"* |\n| **หน้าที่/จรรยาบรรณวิชาชีพ** | **should** | **ought to** (เน้นความถูกต้องทางศีลธรรม/นโยบาย) | *\"We **ought to disclose** this security CVE to our users immediately.\"* |",
        "keyPhrases": [
          {
            "en": "Replacing 'want to' with 'would like to' instantly refines email and ticket communication tone.",
            "th": "การเปลี่ยนจาก 'want to' มาเป็น 'would like to' ช่วยยกระดับน้ำเสียงในอีเมลและ Ticket ได้ทันที"
          },
          {
            "en": "'Would rather' concisely frames architectural preferences during engineering trade-off discussions.",
            "th": "'Would rather' ช่วยระบุตัวเลือกสถาปัตยกรรมที่ต้องการได้อย่างกระชับในระหว่างการถกเถียงเรื่อง Trade-offs"
          }
        ]
      },
      {
        "heading": "6. การปฏิเสธและข้อจำกัดของ Modal Verbs ในการทำงาน",
        "content": "ตารางสรุปข้อห้ามและความหมายเมื่อเติม **not** ให้กับ Modal Verbs แต่ละตัว:\n\n### 🛑 ตารางสรุป Modal Verbs ในรูปปฏิเสธและความหมายที่แท้จริง:\n\n| Modal Verb ปฏิเสธ | ความหมายที่แท้จริง | ตัวอย่างข้อความแจ้งเตือน / นโยบาย | คำแปลภาษาไทย |\n| :--- | :--- | :--- | :--- |\n| **must not / mustn't** | **ห้ามทำเด็ดขาด (Strict Prohibition)** มีบทลงโทษหรืออันตราย | *\"Engineers **must not bypass** branch protection rules.\"* | วิศวกรห้ามบายพาสกฎปกป้องกิ่งโค้ดโดยเด็ดขาด |\n| **cannot / can't** | **ไม่สามารถทำได้ (Inability / Impossibility)** | *\"The service **cannot connect** to the database.\"* | เซอร์วิสไม่สามารถเชื่อมต่อฐานข้อมูลได้ |\n| **should not / shouldn't** | **ไม่ควรทำ (Bad Practice)** อาจก่อให้เกิดปัญหาตามมา | *\"We **shouldn't run** long migrations during peak hours.\"* | เราไม่ควรสั่งรันการย้ายฐานข้อมูลนานๆ ในช่วงคนใช้เยอะ |\n| **might not / may not** | **อาจจะไม่ (Possibility of Not Happening)** | *\"The third-party API **might not respond** in time.\"* | API บุคคลที่สามอาจจะไม่ตอบสนองกลับมาทันเวลา |\n| **would not / wouldn't** | **ปฏิเสธที่จะทำในอดีต / จะไม่ทำในเงื่อนไขสมมติ** | *\"The legacy service **wouldn't start** after container restart.\"* | ระบบเก่าไม่ยอมเริ่มต้นทำงานหลังรีสตาร์ตคอนเทนเนอร์ |",
        "keyPhrases": [
          {
            "en": "Confusing 'must not' with 'don't have to' is dangerous, as the former dictates strict prohibition.",
            "th": "การสับสนระหว่าง 'must not' กับ 'don't have to' เป็นเรื่องอันตราย เพราะตัวแรกคือการสั่งห้ามเด็ดขาด"
          },
          {
            "en": "'Should not' flags anti-patterns and engineering risks before they cause production incidents.",
            "th": "'Should not' ใช้เตือนถึงรูปแบบที่ไม่เหมาะสมและความเสี่ยงทางวิศวกรรมก่อนที่จะเกิด Incident"
          }
        ]
      }
    ],
    "readingQuiz": [
      {
        "question": "ในการเขียนสรุป Post-Mortem หากต้องการระบุว่า 'ทีมของเราควรจะตั้งค่าระบบแจ้งเตือนให้เร็วกว่านี้ (แต่ตอนนั้นไม่ได้ทำ)' ควรใช้ประโยคใด?",
        "options": [
          "We should set up the alert system earlier.",
          "We should have set up the alert system earlier.",
          "We must set up the alert system earlier.",
          "We could set up the alert system earlier."
        ],
        "answer": 1,
        "explanation": "ถูกต้อง! โครงสร้าง 'Should have + V3' (should have set up) แปลว่า 'รู้งี้ควรจะทำในอดีต... แต่ไม่ได้ทำ' ซึ่งเป็นสำนวนมาตรฐานในการทำ Post-Mortem และ Retrospective"
      },
      {
        "question": "ข้อใดเป็นประโยคขอร้องที่ถูกต้องตามหลักไวยากรณ์เมื่อใช้โครงสร้าง 'Would you mind'?",
        "options": [
          "Would you mind to review my pull request?",
          "Would you mind review my pull request?",
          "Would you mind reviewing my pull request?",
          "Would you mind reviewed my pull request?"
        ],
        "answer": 2,
        "explanation": "ถูกต้อง! กฎเหล็กของสำนวน 'Would you mind...' คือคำกริยาที่ตามหลังต้องอยู่ในรูป Gerund (-ing form) เสมอ จึงได้เป็น 'Would you mind reviewing...?'"
      },
      {
        "question": "เมื่อตรวจสอบ Log ใน Incident แล้วพบ Exit Code 137 (OOMKilled) อย่างชัดเจน ข้อความคาดคะเนใดที่สื่อระดับความมั่นใจ 95%+ ได้เหมาะสมที่สุด?",
        "options": [
          "The pod might be out of memory.",
          "The pod must be out of memory.",
          "The pod could be out of memory.",
          "The pod should be out of memory."
        ],
        "answer": 1,
        "explanation": "ถูกต้อง! คำว่า 'must be' แสดงถึงข้อสรุปเชิงตรรกะที่มีความมั่นใจสูงมาก (95%+) อิงตามหลักฐานที่ประจักษ์ชัดเจน"
      },
      {
        "question": "ประโยคใดต่อไปนี้ละเมิด 'กฎเหล็กของ Modal Verbs'?",
        "options": [
          "He can write clean Python code.",
          "She cans write clean Python code.",
          "They can write clean Python code.",
          "We can write clean Python code."
        ],
        "answer": 1,
        "explanation": "ถูกต้อง! กฎเหล็กของ Modal Verbs คือ ห้ามเติม -s หรือ -es เด็ดขาด ไม่ว่าประธานจะเป็นเอกพจน์บุรุษที่ 3 (He/She/It) ก็ตาม ดังนั้น 'She cans...' จึงผิดไวยากรณ์"
      },
      {
        "question": "หากคุณต้องการปฏิเสธคำสั่งในระบบและระบุเป็นนโยบายความปลอดภัยว่า 'ห้ามวิศวกรส่งรหัสลับ (Secrets) ขึ้น GitHub สาธารณะเด็ดขาด' ควรเลือกใช้คำใด?",
        "options": [
          "Engineers don't have to commit secrets to public GitHub.",
          "Engineers must not commit secrets to public GitHub.",
          "Engineers might not commit secrets to public GitHub.",
          "Engineers shouldn't commit secrets if they want."
        ],
        "answer": 1,
        "explanation": "ถูกต้อง! 'must not' แปลว่า 'ห้ามทำโดยเด็ดขาด' (Strict Prohibition) ซึ่งตรงกับนโยบายความปลอดภัยขององค์กรอย่างถูกต้อง ส่วน 'don't have to' จะแปลว่าไม่ต้องทำก็ได้"
      }
    ]
  }
];

// Export to window for browser client
if (typeof window !== "undefined") {
  window.verbsArticlesData = verbsArticlesData;

  // Seamlessly merge into window.articlesData if already loaded
  if (window.articlesData && Array.isArray(window.articlesData)) {
    const alreadyMerged = window.articlesData.some(a => a.id === "art-verb-forms-v1-v2-v3");
    if (!alreadyMerged) {
      window.articlesData.splice(1, 0, ...verbsArticlesData);
    }
  }
}

// Export for Node.js environments
if (typeof module !== "undefined" && module.exports) {
  module.exports = verbsArticlesData;
}
