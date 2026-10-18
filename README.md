# ⚡ EngMastery: Zero to Pro (6 CEFR Levels - Modular Architecture)
**แพลตฟอร์ม E-Learning ภาษาอังกฤษครบวงจร (CEFR Aligned: A1 ถึง C2)**

> โครงสร้างหลักสูตร 6 ระดับแบบ **แยก Folder อิสระ** ตามมาตรฐานสากล ออกแบบสำหรับผู้เรียนตั้งแต่ระดับเริ่มต้น (Zero) จนถึงระดับผู้บริหารสูงสุด (Executive Pro)

---

## 📁 โครงสร้างโฟลเดอร์หลักสูตรแบบแยกส่วน (Modular Directory Structure)

```
Eng/
├── index.html                                # หน้าเว็บหลัก (Single Page Application - SPA)
├── css/
│   └── styles.css                           # สไตล์เสริมสำหรับ 3D Card Flip, Glassmorphism, Animations
├── lessons/                                 # 🌟 แหล่งรวมโฟลเดอร์บทเรียน 6 ระดับ (แยกอิสระ)
│   ├── level-1-survivor/lesson.js           # 🟢 Level 1: The Survivor (CEFR A1)
│   ├── level-2-storyteller/lesson.js        # 🔵 Level 2: The Storyteller (CEFR A2)
│   ├── level-3-connector/lesson.js          # 🟡 Level 3: The Connector (CEFR B1)
│   ├── level-4-communicator/lesson.js       # 🟠 Level 4: The Communicator (CEFR B1+)
│   ├── level-5-professional/lesson.js       # 🔴 Level 5: The Professional (CEFR B2)
│   ├── level-6-master/lesson.js             # 🟣 Level 6: The Master (CEFR C1)
│   ├── courseData.js                        # ตัวรวบรวมบทเรียน (Modular Aggregator)
│   └── courseData.standalone.js             # ชุดข้อมูลสมบูรณ์แบบไฟล์เดียว (Standalone Single-File JSON/JS)
├── data/                                    # 🌟 แหล่งรวมฐานข้อมูลแยกส่วน (Future-Proof Modular Datasets)
│   ├── vocabData.js                         # 🎲 คลังคำศัพท์ 4 หมวด (Oxford 3000™, Tech, Workplace, Phrasal Verbs)
│   ├── articlesData.js                      # 📚 คลังบทความเชิงลึก 4 เรื่อง พร้อมควิซวัดความเข้าใจ
│   └── masterclassData.js                   # 🎯 คลังเนื้อหาติวเข้ม 12 Tenses Blueprint & Grammar Pitfalls
├── js/
│   ├── audio.js                             # Web Audio API ระบบสังเคราะห์เสียง SFX (Chime, Victory, Flip)
│   ├── speech.js                            # Web Speech API (TTS en-US + Voice Recognition)
│   ├── storage.js                           # คลาส StorageManager พร้อมระบบ Backup/Restore JSON & Gamification
│   └── app.js                               # ตัวควบคุมหลัก (Router, Flashcards, Reader, Masterclass, Quiz)
└── README.md                                # คู่มือการใช้งานและเอกสารอ้างอิง
```

---

## 📚 รายละเอียดหลักสูตรทั้ง 6 ระดับ (Curriculum Roadmap)

### 🟢 Level 1: The Survivor (CEFR A1 — ปรับพื้นฐานและเอาตัวรอด)
- **เป้าหมาย:** แยกแยะประโยคบอกสถานะ (Verb to be) กับประโยคบอกการกระทำ (Action Verb) ได้เด็ดขาด และตั้งคำถามพื้นฐานได้
- **Tab 1: Core Grammar:**
  1. สูตรบอกสถานะ/ตำแหน่ง/ความรู้สึก (is, am, are) vs ปฏิเสธ (not) vs คำถาม (Is/Am/Are + S)
  2. สูตรบอกการกระทำ (Action Verb) ห้ามใส่ is/am/are! กริยาเติม s/es, ปฏิเสธ (don't/doesn't), คำถาม (Do/Does)
  3. การใช้ `There is / There are` บอกว่า "มี..." และคำถาม Wh- Questions (What, Where, When, Why, How)
- **Tab 2: Ready Chunks:** "There is a problem with...", "How much does it cost?", "Can I have..., please?", "What time does it start?", "Let me check.", "Does that make sense?"
- **Tab 3: Real-Life Dialogue:** บทสนทนาแจ้งปัญหาการใช้งานระบบในที่ทำงาน เปรียบเทียบการใช้ *Are you...?* กับ *Do/Does...?*
- **Tab 4: Action Drill & Quiz:** ภารกิจฝึกพูดประโยคสถานะ + กิจวัตร + ข้อสอบ 5 ข้อพร้อมเฉลยละเอียด

---

### 🔵 Level 2: The Storyteller (CEFR A2 — เล่าเรื่องและบอกเวลา)
- **เป้าหมาย:** เล่าเรื่องในอดีต บอกสิ่งที่กำลังทำอยู่ วางแผนอนาคต และเปรียบเทียบได้
- **Tab 1: Core Grammar:**
  1. สิ่งที่กำลังทำอยู่ (Present Continuous: `is/am/are + V.ing`) เทียบกับสิ่งที่ทำประจำ (Present Simple) + Stative Verbs ที่ห้ามเติม -ing
  2. จบไปแล้วในอดีต (Past Simple: `S + V.2`, `didn't + V.1`) และเหตุการณ์แทรก (`was/were + V.ing`)
  3. อนาคต (Future): ความต่างระหว่าง `will` (ตัดสินใจเดี๋ยวนั้น) กับ `is/am/are going to` (วางแผนไว้แล้ว)
  4. การเปรียบเทียบขั้นกว่า (`-er than`, `more ... than`) และขั้นสุด (`good -> better -> the best`, `bad -> worse -> the worst`)
- **Tab 2: Chunks & 15 Irregular Verbs:** ตารางกริยา 3 ช่อง 15 คำความถี่สูง (go, do, make, get, take, see, know, send, spend, run, write, find, buy, think, give)
- **Tab 3: Real-Life Dialogue:** บทสนทนา Daily Standup ถามไถ่สิ่งที่กำลังทำ เล่าปัญหาเมื่อวาน และบอกแผนพรุ่งนี้
- **Tab 4: Action Drill & Quiz:** ภารกิจพูด 3 ช่วงเวลา (อดีต, ปัจจุบัน, อนาคต) + ข้อสอบ 5 ข้อพร้อมเฉลยละเอียด

---

### 🟡 Level 3: The Connector (CEFR B1 — เชื่อมความคิดและแสดงเหตุผล)
- **เป้าหมาย:** พูดประโยคยาวที่มีเหตุผล ใช้ Present Perfect, Passive Voice และประโยคเงื่อนไข If-Clauses ได้
- **Tab 1: Core Grammar:**
  1. Present Perfect (`have/has + V.3`): เพิ่งทำเสร็จ/ผลลัพธ์ (`already, just, yet`) และทำตั้งแต่อดีตถึงปัจจุบัน (`for, since`)
  2. Passive Voice (`Verb to be + V.3`): ประธานเป็นผู้ถูกกระทำเพื่อเน้นตัวงานหรือระบบแทนบุคคล (*The data is backed up daily*)
  3. If-Clauses: Type 1 เป็นไปได้จริง (`If + V.1, will + V.1`) และ Type 2 สมมติตรงข้ามปัจจุบัน/ให้คำแนะนำ (`If I were you, I would...`)
- **Tab 2: Chunks & Connectors:** คำเชื่อมบอกเหตุผล (`because, since, as` + ประโยค vs `due to, because of` + คำนาม) และคำเชื่อมความขัดแย้ง (`Although, Even though, However, Instead of`)
- **Tab 3: Real-Life Dialogue:** บทสนทนาติดตามงานและอธิบายเหตุผลที่งานล่าช้าด้วย Passive Voice และ If-Clause
- **Tab 4: Action Drill & Quiz:** ภารกิจพูดอธิบายเหตุผลและวิธีแก้ไขด้วย If-Clause + ข้อสอบ 5 ข้อพร้อมเฉลยละเอียด

---

### 🟠 Level 4: The Communicator (CEFR B1+ — สื่อสารอย่างมีชั้นเชิงและคล่องแคล่ว)
- **เป้าหมาย:** ปรับระดับภาษาให้สุภาพนุ่มนวล ขยายความด้วย Relative Clauses และใช้เทคนิคอธิบายอ้อมๆ เมื่อนึกศัพท์ไม่ออก
- **Tab 1: Core Grammar:**
  1. Indirect Questions & Polite Requests (`Could you tell me...`, `Do you know...`, `I was wondering if...` ตามด้วยรูปประโยคบอกเล่า `S + V` และ `Would you mind + V.ing...?`)
  2. Relative Clauses (`who, which, that, where`): รวบ 2 ประโยคเข้าด้วยกันเพื่อขยายคำนาม
- **Tab 2: Chunks & Paraphrasing Techniques:**
  - คำเชื่อมถ่วงเวลาคิดอย่างเป็นธรรมชาติ (Fillers): "Well, let me see...", "How should I put it...", "What I mean is...", "Basically,..."
  - โครงสร้างอธิบายอ้อมๆ เมื่อนึกศัพท์ไม่ออก (Paraphrasing): "It's a tool/feature that we use to...", "It's similar to...", "It's the opposite of..."
- **Tab 3: Real-Life Dialogue:** บทสนทนาขอความช่วยเหลือเพื่อนร่วมงานอย่างสุภาพ และใช้วิธีอธิบายลักษณะของฟีเจอร์เมื่อนึกคำศัพท์ไม่ออก
- **Tab 4: Action Drill & Quiz:** ภารกิจฝึกอธิบายสิ่งของรอบตัวโดยห้ามพูดชื่อสิ่งนั้น + ข้อสอบ 5 ข้อพร้อมเฉลยละเอียด

---

### 🔴 Level 5: The Professional (CEFR B2 — ภาษาอังกฤษระดับมืออาชีพ)
- **เป้าหมาย:** อัปเดตงาน ประชุม เขียนอีเมล อธิบายปัญหาทางเทคนิค และต่อรองเวลาทำงานได้อย่างมืออาชีพ
- **Tab 1: Core Grammar & Frameworks:**
  1. สูตรการอัปเดตงานรายวัน (Daily Stand-up Framework 3 จังหวะ: Done - Doing - Blockers)
  2. สูตรการรายงานปัญหาและสาเหตุ (Incident & Root Cause 3 จังหวะ: Symptom - Root Cause - Fix/Prevention)
  3. โครงสร้างอีเมลและข้อความแชทอย่างมืออาชีพ (Opening - Purpose - Call to Action - Sign-off)
- **Tab 2: Workplace Chunks & Phrasal Verbs:**
  - Phrasal Verbs ความถี่สูง 7 คำ: look into, follow up on, bring up, point out, fall behind, call off, walk through
  - สำนวนที่ต้องมีในที่ประชุม: "Could you elaborate on that?", "Let's touch base next week", "I have a hard stop at 3 PM"
- **Tab 3: Real-Life Dialogue:** บทสนทนาการประชุม Stand-up meeting และเจรจาขอเลื่อน Deadline อย่างมืออาชีพ
- **Tab 4: Action Drill & Quiz:** ภารกิจฝึกพูดอัปเดตงานแบบ Stand-up (Done - Doing - Blocker) + ข้อสอบ 5 ข้อพร้อมเฉลยละเอียด

---

### 🟣 Level 6: The Master (CEFR C1 — ศิลปะการใช้ภาษาระดับสูงและการเป็นผู้นำ)
- **เป้าหมาย:** สื่อสารคมคาย โน้มน้าวใจในระดับผู้นำ ลดแรงปะทะทางความคิด และถ่ายทอดไอเดียเชิงกลยุทธ์
- **Tab 1: Core Grammar & Advanced Rhetoric:**
  1. ศิลปะการลดแรงปะทะ (Hedging & Softening Language): ตารางเปรียบเทียบ Too Direct vs C1 Professional Softened Tone
  2. การเน้นย้ำประเด็นสำคัญ (Cleft Sentences): "What we really need to focus on is...", "It was the lack of testing that caused the issue."
  3. กรอบการพูดเชิงกลยุทธ์ PREP Framework (Point - Reason - Example - Point)
- **Tab 2: C1 Chunks & Idioms:**
  - สำนวนระดับ C1 ความถี่สูง: double-edged sword, hit the nail on the head, touch base, play devil's advocate, keep someone in the loop
  - ก้อนประโยคคุมการประชุมระดับผู้บริหาร: "To put things into perspective...", "From a strategic standpoint..."
- **Tab 3: Real-Life Dialogue:** บทสนทนาการเจรจาระดับผู้นำ ระหว่าง Head of Product กับ Tech Lead ในการตัดสินใจทิศทางสถาปัตยกรรมระบบ
- **Tab 4: Action Drill & Quiz:** ภารกิจฝึกเสนอความคิดเห็นแบบ PREP Framework + ข้อสอบ 5 ข้อพร้อมเฉลยละเอียด

---

## ⚡ 3 ฟีเจอร์เสริมยกระดับการเรียนรู้ (Learning Power-Ups)

### 🎲 1. คลังคำศัพท์ & โหมดสุ่มการ์ด (Vocabulary & Flashcard Mode)
- **แหล่งข้อมูล:** `data/vocabData.js`
- **หมวดหมู่คำศัพท์:** 4 หมวด (Oxford 3000™, Workplace & Business, Tech & DevOps Jargon, Phrasal Verbs & Idioms)
- **ฟีเจอร์เด่น:**
  - **3D Interactive Flip Card:** แตะพลิกการ์ด 3 มิติเพื่อสลับระหว่างคำศัพท์ + สัทอักษร IPA กับคำแปลภาษาไทย + คำนิยาม + ประโยคตัวอย่าง
  - **Instant Audio Pronunciation:** ปุ่มลำโพง Web Speech TTS อ่านออกเสียงคำศัพท์และประโยคตัวอย่างสำเนียงสากล
  - **Random Shuffle:** โหมดสุ่มคำศัพท์ขึ้นมาท้าทายความจำ
  - **Category Filters & Real-time Search:** ค้นหาคำศัพท์ คำแปล หรือกรองตามหมวดหมู่
  - **Gamification Reward:** กดปุ่ม *"ฉันจำคำนี้ได้แล้ว"* รับทันที **+5 XP** พร้อมเก็บประวัติลง LocalStorage

---

### 📚 2. คลังบทความเชิงลึก (Articles Library & Reader)
- **แหล่งข้อมูล:** `data/articlesData.js`
- **บทความระดับพรีเมียม 4 เรื่อง:**
  1. *เทคนิคคิดเป็นภาษาอังกฤษ: ปลดล็อกทางลัดสมอง ไม่ต้องแปลไทยในหัว (Thinking in English)*
  2. *DevOps & Cloud Battlefield English: ภาษาอังกฤษสมรภูมิงานระบบและ Incident Response*
  3. *ศิลปะการเขียน Business Email & Slack Message สไตล์มืออาชีพสากล*
  4. *ถอดรหัสสำเนียงสากล (Decoding Global Accents): เคล็ดลับฟังสำเนียงอินเดียและอังกฤษ*
- **ฟีเจอร์เด่น:**
  - **Distraction-Free Reader Mode:** เลย์เอาต์อ่านบทความสบายตา พร้อมกล่องสรุปใจความสำคัญและก้อนประโยคทองคำ (Key Phrases)
  - **AI Audio Reader (Read Aloud):** ปุ่มฟังเสียง AI อ่านเนื้อหาภาษาอังกฤษทั้งบทความ
  - **Reading Comprehension Quiz:** แบบทดสอบท้ายบทความ 3 ข้อ ตอบถูก 2 ข้อขึ้นไปรับโบนัส **+30 XP** พร้อมเฉลยละเอียดภาษาไทย

---

### 🎯 3. ห้องติวเข้มเฉพาะหัวข้อ (Masterclass Hub)
- **แหล่งข้อมูล:** `data/masterclassData.js`
- **หลักสูตรติวเข้ม 2 หัวข้อ:**
  1. **Ultimate Tense Masterclass:**
     - แผนที่รวบยอด 12 Tenses Comprehensive Matrix (โครงสร้างกริยา, มโนทัศน์, ตัวอย่างประโยคจริงสาย Tech)
     - สูตรเจาะลึก 4 Tense คู่ที่ออกสอบบ่อยที่สุด (Past Cont. + Past Sim, Past Perf. + Past Sim, Present Perf. vs Past Sim, Future Perf. + Present Sim)
     - แบบทดสอบวัดความชำนาญ 5 ข้อ (+50 XP Bonus)
  2. **Grammar Pitfalls & Traps (4 จุดตายไวยากรณ์):**
     - จุดตายที่ 1: Passive Voice กับกริยาอกรรม (Intransitive Verbs: happen, occur, exist, arise)
     - จุดตายที่ 2: ความลี้ลับของ Articles (A/An/The และ Zero Article)
     - จุดตายที่ 3: คำบุพบทเจ้าปัญหาในบริบทงานไอที (on the website, in the meeting, discuss)
     - จุดตายที่ 4: กลลวง Subject-Verb Agreement (Neither/nor, along with, Each of)
     - แบบทดสอบวัดความชำนาญ 5 ข้อ (+50 XP Bonus)

---

## 🚀 วิธีการทดสอบและรันระบบ

คุณสามารถเปิดไฟล์ `index.html` ผ่านเบราว์เซอร์ได้ทันที หรือรันผ่าน Local Server:
```bash
python3 -m http.server 3000
```
แล้วเปิดเบราว์เซอร์ไปที่: `http://localhost:3000`
