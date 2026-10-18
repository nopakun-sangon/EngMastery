import json

with open('data/vocabData.js', 'r', encoding='utf-8') as f:
    raw = f.read()

# Load using node
import subprocess
proc = subprocess.run(['node', '-e', 'const d = require("./data/vocabData.js"); console.log(JSON.stringify(d));'], capture_output=True, text=True)
data = json.loads(proc.stdout)

fixes = {
    "v-oxf-0176": { "th": "ช่วยเหลือ, สนับสนุน", "exampleEn": "She volunteered to assist with organizing the annual conference.", "exampleTh": "เธออาสาช่วยจัดงานประชุมประจำปี" },
    "v-oxf-0374": { "th": "สามารถ, ทำได้", "definition": "Be able to; have the ability or capacity to do something.", "exampleEn": "Can you speak English fluently?", "exampleTh": "คุณสามารถพูดภาษาอังกฤษได้อย่างคล่องแคล่วไหม?" },
    "v-oxf-0640": { "th": "ร้องไห้, ตะโกน", "exampleEn": "The baby started to cry because she was hungry.", "exampleTh": "ทารกเริ่มร้องไห้เพราะเธอหิว" },
    "v-oxf-0671": { "th": "จัดการ, ซื้อขาย, จัดการกับ", "exampleEn": "Our customer support team knows how to deal with difficult situations.", "exampleTh": "ทีมสนับสนุนลูกค้าของเรารู้วิธีจัดการกับสถานการณ์ที่ยากลำบาก" },
    "v-oxf-0809": { "th": "ขับรถ, ผลักดัน", "exampleEn": "He learned to drive a car when he was eighteen.", "exampleTh": "เขาเรียนขับรถยนต์เมื่อตอนอายุสิบแปดปี" },
    "v-oxf-0839": { "th": "ให้การศึกษา, สั่งสอน, อบรม", "exampleEn": "Good schools educate students to become critical thinkers.", "exampleTh": "โรงเรียนที่ดีจะให้การศึกษาแก่นักเรียนเพื่อเป็นนักคิดเชิงวิเคราะห์" },
    "v-oxf-1260": { "th": "ซ่อน, หลบซ่อน, ปกปิด", "definition": "Put or keep out of sight; conceal.", "exampleEn": "The little girl wanted to hide behind the door.", "exampleTh": "เด็กหญิงตัวเล็กๆ อยากจะซ่อนตัวอยู่หลังประตู" },
    "v-oxf-1276": { "th": "ถือ, จับ, ยึดไว้, จัด (งาน)", "exampleEn": "Please hold this bag for a second while I find my keys.", "exampleTh": "โปรดช่วยถือกระเป๋าใบนี้สักครู่ในขณะที่ฉันหากุญแจนะคะ" },
    "v-oxf-1305": { "th": "ล่าสัตว์, ค้นหา", "exampleEn": "Lions hunt in packs to catch their prey.", "exampleTh": "สิงโตออกล่าสัตว์เป็นฝูงเพื่อจับเหยื่อ" },
    "v-oxf-1459": { "th": "ฆ่า, ปลิดชีพ", "exampleEn": "Smoking cigarettes can kill thousands of people each year.", "exampleTh": "การสูบบุหรี่สามารถคร่าชีวิตผู้คนได้นับพันคนในแต่ละปี" },
    "v-oxf-1574": { "th": "ลดลง, ลดระดับ, ทำให้ต่ำลง", "exampleEn": "The store decided to lower the prices on winter clothes.", "exampleTh": "ร้านค้าตัดสินใจลดราคาเสื้อผ้าฤดูหนาวลง" },
    "v-oxf-1618": { "th": "อาจจะ, ขออนุญาต", "definition": "Expressing possibility or requesting permission.", "exampleEn": "May I come in and speak with the manager?", "exampleTh": "ขออนุญาตเข้าไปพูดคุยกับผู้จัดการได้ไหมครับ?" },
    "v-oxf-1640": { "th": "กล่าวถึง, เอ่ยถึง, พูดถึง", "exampleEn": "Did she mention the deadline during the meeting?", "exampleTh": "เธอได้เอ่ยถึงกำหนดส่งงานระหว่างการประชุมไหม?" },
    "v-oxf-1709": { "th": "ต้อง, จำเป็นต้อง", "definition": "Be obliged to; should (expressing necessity).", "exampleEn": "You must wear a seatbelt at all times while driving.", "exampleTh": "คุณต้องคาดเข็มขัดนิรภัยตลอดเวลาขณะขับรถ" },
    "v-oxf-2120": { "th": "ยกขึ้น, เพิ่มขึ้น, เลี้ยงดู", "exampleEn": "Please raise your hand if you have a question.", "exampleTh": "โปรดยกมือขึ้นหากคุณมีคำถามครับ" },
    "v-oxf-2130": { "th": "เอื้อมถึง, ไปถึง, ติดต่อ", "exampleEn": "You can reach our help desk by phone or email twenty-four hours a day.", "exampleTh": "คุณสามารถติดต่อแผนกช่วยเหลือของเราทางโทรศัพท์หรืออีเมลได้ตลอด 24 ชั่วโมง" },
    "v-oxf-2199": { "th": "ทำซ้ำ, พูดซ้ำ", "exampleEn": "Could you please repeat what you just said?", "exampleTh": "คุณช่วยพูดซ้ำสิ่งที่คุณเพิ่งพูดไปอีกครั้งได้ไหมครับ?" },
    "v-oxf-2267": { "th": "ถู, ขัด, นวด", "exampleEn": "Rub your hands together to keep them warm.", "exampleTh": "ถูมือทั้งสองข้างเข้าด้วยกันเพื่อให้อบอุ่น" },
    "v-oxf-2280": { "th": "แล่นเรือ, ล่องเรือ", "exampleEn": "They plan to sail across the Mediterranean next summer.", "exampleTh": "พวกเขาวางแผนที่จะล่องเรือข้ามทะเลเมดิเตอร์เรเนียนในฤดูร้อนหน้า" },
    "v-oxf-2334": { "th": "ขาย, จำหน่าย", "exampleEn": "They sell fresh organic vegetables at the local market.", "exampleTh": "พวกเขาขายผักออร์แกนิกสดที่ตลาดท้องถิ่น" },
    "v-oxf-2393": { "th": "ควรจะ, น่าจะ", "definition": "Used to indicate obligation, duty, or correctness.", "exampleEn": "You should get plenty of rest before tomorrow's exam.", "exampleTh": "คุณควรพักผ่อนให้เพียงพอก่อนการสอบในวันพรุ่งนี้" },
    "v-oxf-2440": { "th": "นอนหลับ, พักผ่อน", "exampleEn": "Doctors recommend getting eight hours of sleep each night.", "exampleTh": "แพทย์แนะนำให้นอนหลับให้ได้แปดชั่วโมงในแต่ละคืน" },
    "v-oxf-2525": { "th": "ยืน, ตั้งอยู่, อดทน", "exampleEn": "Everyone was asked to stand during the national anthem.", "exampleTh": "ทุกคนได้รับขอร้องให้ยืนขึ้นระหว่างเพลงชาติ" },
    "v-oxf-2635": { "th": "พูดคุย, สนทนา", "exampleEn": "We need to talk about the project requirements.", "exampleTh": "พวกเราจำเป็นต้องพูดคุยกันเกี่ยวกับข้อกำหนดของโครงการ" },
    "v-oxf-2831": { "th": "เคย (กระทำในอดีต)", "definition": "Used to describe an action or state that happened regularly in the past but no longer happens.", "exampleEn": "I used to walk to school every morning when I was a child.", "exampleTh": "ฉันเคยเดินไปโรงเรียนทุกเช้าเมื่อตอนยังเป็นเด็ก" },
    "v-oxf-2940": { "th": "จะ (กริยาช่วยแสดงอนาคต)", "definition": "Expressing the future tense.", "exampleEn": "I will send you the confirmation email shortly.", "exampleTh": "ฉันจะส่งอีเมลยืนยันให้คุณในอีกสักครู่ครับ" },
    "v-oxf-2973": { "th": "กังวล, เป็นห่วง", "exampleEn": "Don't worry about making mistakes; they are part of learning.", "exampleTh": "อย่ากังวลเรื่องการทำผิดพลาด เพราะมันเป็นส่วนหนึ่งของการเรียนรู้" }
}

for item in data:
    item_id = item.get("id")
    if item_id in fixes:
        for k, v in fixes[item_id].items():
            item[k] = v

def format_item(it):
    return f"""  {{
    id: {json.dumps(it.get('id', ''), ensure_ascii=False)},
    word: {json.dumps(it.get('word', ''), ensure_ascii=False)},
    ipa: {json.dumps(it.get('ipa', ''), ensure_ascii=False)},
    pos: {json.dumps(it.get('pos', ''), ensure_ascii=False)},
    level: {json.dumps(it.get('level', ''), ensure_ascii=False)},
    category: {json.dumps(it.get('category', ''), ensure_ascii=False)},
    categoryLabel: {json.dumps(it.get('categoryLabel', ''), ensure_ascii=False)},
    th: {json.dumps(it.get('th', ''), ensure_ascii=False)},
    definition: {json.dumps(it.get('definition', ''), ensure_ascii=False)},
    exampleEn: {json.dumps(it.get('exampleEn', ''), ensure_ascii=False)},
    exampleTh: {json.dumps(it.get('exampleTh', ''), ensure_ascii=False)},
    collocations: {json.dumps(it.get('collocations', []), ensure_ascii=False)},
    synonyms: {json.dumps(it.get('synonyms', []), ensure_ascii=False)}
  }}"""

tech_items = [x for x in data if x.get("category") == "tech-devops"]
biz_items = [x for x in data if x.get("category") == "workplace-business"]
idiom_items = [x for x in data if x.get("category") == "phrasal-idioms"]
oxford_items = [x for x in data if x.get("category") == "daily-oxford"]

sep = ",\n"
tech_str = sep.join(format_item(x) for x in tech_items)
biz_str = sep.join(format_item(x) for x in biz_items)
idiom_str = sep.join(format_item(x) for x in idiom_items)
oxford_str = sep.join(format_item(x) for x in oxford_items)

file_content = f"""/**
 * EngMastery: Zero to Pro - Complete Oxford 3000™ & Specialization Vocabulary Database
 * Categorized by: Oxford 3000™ (CEFR A1-B2 American English Core), Workplace & Business, Tech & DevOps, and Phrasal Verbs & Idioms
 * Schema: Future-proof standard JSON / JavaScript Object array
 */

const vocabData = [
  // =========================================================================
  // CATEGORY 1: TECH & DEVOPS / CLOUD INFRASTRUCTURE JARGON
  // =========================================================================
{tech_str},

  // =========================================================================
  // CATEGORY 2: WORKPLACE & BUSINESS COMMUNICATION
  // =========================================================================
{biz_str},

  // =========================================================================
  // CATEGORY 3: PHRASAL VERBS & NATURAL IDIOMS
  // =========================================================================
{idiom_str},

  // =========================================================================
  // CATEGORY 4: THE COMPLETE OXFORD 3000™ (AMERICAN ENGLISH CEFR CORE A1-B2)
  // =========================================================================
{oxford_str}
];

if (typeof window !== "undefined") {{
  window.vocabData = vocabData;
}}

if (typeof module !== "undefined" && module.exports) {{
  module.exports = vocabData;
}}
"""

with open('data/vocabData.js', 'w', encoding='utf-8') as f:
    f.write(file_content)

print("Applied targeted fixes to data/vocabData.js successfully!")
