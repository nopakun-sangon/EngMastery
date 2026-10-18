import json
import re
import subprocess

# 1. Load ref_vocabulary.json
with open('scripts/ref_vocabulary.json', 'r', encoding='utf-8') as f:
    ref_data = json.load(f)

ref_map = {}
for item in ref_data:
    w = item.get('word', '').strip().lower()
    if w and w not in ref_map:
        ref_map[w] = item

# 2. Handcrafted map for unmatched or special words
handcrafted_map = {
    "a": {
        "word": "a",
        "pos": "indefinite article",
        "th": "หนึ่ง (คำนำหน้านามนับได้เอกพจน์ที่ไม่ชี้เฉพาะ)",
        "definition": "Used when mentioning someone or something for the first time in a text or conversation.",
        "exampleEn": "She bought a new laptop for work.",
        "exampleTh": "เธอซื้อแล็ปท็อปเครื่องใหม่สำหรับทำงาน"
    },
    "according": {
        "word": "according to",
        "pos": "prep.",
        "th": "ตามที่, ตามข้อกำหนดของ, อ้างอิงจาก",
        "definition": "As stated by or in; in a manner conforming or corresponding to.",
        "exampleEn": "According to the schedule, the meeting starts at two o'clock.",
        "exampleTh": "ตามตารางเวลา การประชุมจะเริ่มตอนบ่ายสองโมง"
    },
    "anymore": {
        "word": "anymore",
        "pos": "adv.",
        "th": "อีกต่อไป (ใช้ในประโยคปฏิเสธหรือคำถาม)",
        "definition": "To any further extent; any longer.",
        "exampleEn": "He does not work here anymore.",
        "exampleTh": "เขาไม่ได้ทำงานที่นี่อีกต่อไปแล้ว"
    },
    "as": {
        "word": "as",
        "pos": "prep., conj.",
        "th": "ในฐานะที่เป็น, เช่นเดียวกับ, ขณะที่",
        "definition": "Used to refer to the function or character that someone or something has.",
        "exampleEn": "She works as a software engineer at a tech company.",
        "exampleTh": "เธอทำงานในตำแหน่งวิศวกรซอฟต์แวร์ที่บริษัทเทคโนโลยี"
    },
    "at": {
        "word": "at",
        "pos": "prep.",
        "th": "ที่, ณ, ในเวลา",
        "definition": "Expressing location or arrival in a particular place or position.",
        "exampleEn": "We will meet at the office tomorrow morning.",
        "exampleTh": "พวกเราจะพบกันที่สำนักงานในวันพรุ่งนี้เช้า"
    },
    "be": {
        "word": "be",
        "pos": "v., auxiliary v.",
        "th": "เป็น, อยู่, คือ",
        "definition": "Exist; occur; have a specified state or characteristic.",
        "exampleEn": "Please be ready before the presentation begins.",
        "exampleTh": "โปรดเตรียมตัวให้พร้อมก่อนการนำเสนอจะเริ่มต้นขึ้น"
    },
    "blond": {
        "word": "blond",
        "pos": "adj.",
        "th": "ผมสีบลอนด์, สีทองอ่อน",
        "definition": "Having fair hair and light skin.",
        "exampleEn": "She has natural blond hair and blue eyes.",
        "exampleTh": "เธอมีผมสีบลอนด์ธรรมชาติและดวงตาสีฟ้า"
    },
    "by": {
        "word": "by",
        "pos": "prep., adv.",
        "th": "โดย, ด้วย, ข้างๆ, ภายใน (เวลา)",
        "definition": "Identifying the agent performing an action; near or through.",
        "exampleEn": "The report must be submitted by Friday afternoon.",
        "exampleTh": "รายงานจะต้องส่งภายในช่วงบ่ายวันศุกร์"
    },
    "colored": {
        "word": "colored",
        "pos": "adj.",
        "th": "ที่มีสีสัน, หลากสี",
        "definition": "Having a color or colors; not black and white.",
        "exampleEn": "The designer used brightly colored graphics for the website banner.",
        "exampleTh": "นักออกแบบใช้กราฟิกสีสันสดใสสำหรับแบนเนอร์เว็บไซต์"
    },
    "corn": {
        "word": "corn",
        "pos": "n.",
        "th": "ข้าวโพด",
        "definition": "A North American cereal plant that yields large grains on a cob.",
        "exampleEn": "Fresh sweet corn is harvested during the summer season.",
        "exampleTh": "ข้าวโพดหวานสดจะถูกเก็บเกี่ยวในช่วงฤดูร้อน"
    },
    "defense": {
        "word": "defense",
        "pos": "n.",
        "th": "การป้องกัน, การตั้งรับ, การแก้ต่าง",
        "definition": "The action of defending from or resisting attack.",
        "exampleEn": "The company strengthened its cyber defense against ransomware attacks.",
        "exampleTh": "บริษัทได้เสริมความแข็งแกร่งให้กับการป้องกันทางไซเบอร์จากการโจมตีด้วยมัลแวร์เรียกค่าไถ่"
    },
    "disk": {
        "word": "disk",
        "pos": "n.",
        "th": "ดิสก์, แผ่นบันทึกข้อมูล, จานแม่เหล็ก",
        "definition": "A storage device for digital data in a computer.",
        "exampleEn": "Please make sure there is sufficient disk space available before downloading.",
        "exampleTh": "โปรดตรวจสอบให้แน่ใจว่ามีพื้นที่ดิสก์ว่างเพียงพอก่อนเริ่มดาวน์โหลด"
    },
    "downward": {
        "word": "downward",
        "pos": "adj., adv.",
        "th": "ทิศทางลง, ลดลง, สู่เบื้องล่าง",
        "definition": "Moving towards a lower place or level.",
        "exampleEn": "Inflation showed a steady downward trend over the past six months.",
        "exampleTh": "อัตราเงินเฟ้อแสดงแนวโน้มลดลงอย่างต่อเนื่องตลอดหกเดือนที่ผ่านมา"
    },
    "favor": {
        "word": "favor",
        "pos": "n., v.",
        "th": "ความช่วยเหลือ, การสนับสนุน, โปรดปราน",
        "definition": "An act of kindness beyond what is due or usual.",
        "exampleEn": "Could you please do me a favor and review this document?",
        "exampleTh": "คุณช่วยอะไรฉันสักอย่างแล้วช่วยตรวจทานเอกสารฉบับนี้หน่อยได้ไหม?"
    },
    "he": {
        "word": "he",
        "pos": "pron.",
        "th": "เขา (สรรพนามบุรุษที่ 3 เพศชาย)",
        "definition": "Used to refer to a man, boy, or male animal previously mentioned.",
        "exampleEn": "He joined the development team as a senior DevOps engineer.",
        "exampleTh": "เขาเข้าร่วมทีมพัฒนาในตำแหน่งวิศวกร DevOps อาวุโส"
    },
    "hi": {
        "word": "hi",
        "pos": "exclam.",
        "th": "สวัสดี (คำทักทายแบบเป็นกันเอง)",
        "definition": "Used as a friendly greeting or to attract attention.",
        "exampleEn": "Hi everyone, welcome to today's English workshop.",
        "exampleTh": "สวัสดีทุกคน ยินดีต้อนรับสู่เวิร์กช็อปภาษาอังกฤษในวันนี้"
    },
    "humor": {
        "word": "humor",
        "pos": "n.",
        "th": "อารมณ์ขัน, ความตลกขบขัน",
        "definition": "The quality of being amusing or comic, especially as expressed in literature or speech.",
        "exampleEn": "His great sense of humor made everyone feel comfortable during the interview.",
        "exampleTh": "อารมณ์ขันที่ยอดเยี่ยมของเขาทำให้ทุกคนรู้สึกผ่อนคลายระหว่างการสัมภาษณ์"
    },
    "i": {
        "word": "I",
        "pos": "pron.",
        "th": "ฉัน, ผม, ดิฉัน (สรรพนามบุรุษที่ 1)",
        "definition": "Used by a speaker to refer to himself or herself.",
        "exampleEn": "I am looking forward to working with you on this project.",
        "exampleTh": "ผมตั้งตารอที่จะได้ร่วมงานกับคุณในโครงการนี้ครับ"
    },
    "if": {
        "word": "if",
        "pos": "conj.",
        "th": "ถ้า, หาก, ถ้าหากว่า",
        "definition": "Introducing a conditional clause.",
        "exampleEn": "If you have any questions, feel free to ask me anytime.",
        "exampleTh": "หากคุณมีคำถามใดๆ สามารถถามฉันได้ตลอดเวลาเลยนะคะ"
    },
    "in": {
        "word": "in",
        "pos": "prep., adv.",
        "th": "ใน, ข้างใน, ภายใน",
        "definition": "Expressing the situation of something that is or appears to be enclosed or surrounded by something else.",
        "exampleEn": "The configuration file is stored in the root directory.",
        "exampleTh": "ไฟล์การตั้งค่าถูกจัดเก็บไว้ในไดเรกทอรีหลัก"
    },
    "it": {
        "word": "it",
        "pos": "pron.",
        "th": "มัน (สรรพนามแทนสิ่งของหรือสัตว์)",
        "definition": "Used to refer to an animal or thing previously mentioned or easily identified.",
        "exampleEn": "The server crashed because it ran out of memory.",
        "exampleTh": "เซิร์ฟเวอร์ล่มเนื่องจากหน่วยความจำของมันหมดลง"
    },
    "kilometer": {
        "word": "kilometer",
        "pos": "n.",
        "th": "กิโลเมตร",
        "definition": "A metric unit of measurement equal to 1,000 meters.",
        "exampleEn": "The office is located only two kilometers away from the train station.",
        "exampleTh": "สำนักงานตั้งอยู่ห่างจากสถานีรถไฟเพียงสองกิโลเมตร"
    },
    "labor": {
        "word": "labor",
        "pos": "n.",
        "th": "แรงงาน, การทำงาน, ผู้ใช้แรงงาน",
        "definition": "Work, especially hard physical work.",
        "exampleEn": "The automation tools helped reduce manual labor by fifty percent.",
        "exampleTh": "เครื่องมืออัตโนมัติช่วยลดแรงงานที่ต้องทำด้วยมือลงถึงห้าสิบเปอร์เซ็นต์"
    },
    "last": {
        "word": "last",
        "pos": "det., adj., v.",
        "th": "สุดท้าย, ล่าสุด / คงอยู่, กินเวลา",
        "definition": "Coming after all others in time or order; or continue for a specified period of time.",
        "exampleEn": "We resolved all reported issues during the last release.",
        "exampleTh": "พวกเราแก้ไขปัญหาทั้งหมดที่ได้รับรายงานในระหว่างการเปิดตัวเวอร์ชันล่าสุด"
    },
    "lie": {
        "word": "lie",
        "pos": "v., n.",
        "th": "โกหก, คำโกหก / นอนลง, วางอยู่",
        "definition": "Tell an intentional untruth; or be in a horizontal resting position.",
        "exampleEn": "It is always better to tell the truth than to tell a lie.",
        "exampleTh": "การพูดความจริงย่อมดีกว่าการโกหกเสมอ"
    },
    "math": {
        "word": "math",
        "pos": "n.",
        "th": "คณิตศาสตร์ (ย่อมาจาก mathematics)",
        "definition": "The abstract science of number, quantity, and space.",
        "exampleEn": "Data science algorithms require a solid background in math and statistics.",
        "exampleTh": "อัลกอริทึมของวิทยาการข้อมูลจำเป็นต้องมีพื้นฐานด้านคณิตศาสตร์และสถิติที่แน่น"
    },
    "me": {
        "word": "me",
        "pos": "pron.",
        "th": "ฉัน, ผม, ดิฉัน (รูปกรรม)",
        "definition": "Used by a speaker to refer to himself or herself as the object of a verb or preposition.",
        "exampleEn": "Please send me the updated meeting minutes by tomorrow.",
        "exampleTh": "โปรดส่งรายงานการประชุมฉบับล่าสุดให้ผมภายในวันพรุ่งนี้นะครับ"
    },
    "meter": {
        "word": "meter",
        "pos": "n.",
        "th": "เมตร (หน่วยวัดความยาว), มิเตอร์วัด",
        "definition": "The fundamental unit of length in the metric system, equal to 100 centimeters.",
        "exampleEn": "The ethernet cable has a total length of fifteen meters.",
        "exampleTh": "สายสัญญาณอีเทอร์เน็ตมีความยาวรวมสิบห้าเมตร"
    },
    "mom": {
        "word": "mom",
        "pos": "n.",
        "th": "แม่ (ภาษาพูดที่อบอุ่น)",
        "definition": "One's mother.",
        "exampleEn": "She called her mom to share the exciting news about her promotion.",
        "exampleTh": "เธอโทรหาคุณแม่เพื่อเล่าข่าวที่น่าตื่นเต้นเรื่องการเลื่อนตำแหน่งของเธอ"
    },
    "my": {
        "word": "my",
        "pos": "det.",
        "th": "ของฉัน, ของผม",
        "definition": "Belonging to or associated with the speaker.",
        "exampleEn": "This is my primary email address for all business communications.",
        "exampleTh": "นี่คือที่อยู่อีเมลหลักของผมสำหรับการติดต่อสื่อสารทางธุรกิจทั้งหมดครับ"
    },
    "o'clock": {
        "word": "o'clock",
        "pos": "adv.",
        "th": "นาฬิกา (บอกเวลาตรงตามชั่วโมง)",
        "definition": "Used after a number from one to twelve to indicate the time of day.",
        "exampleEn": "The daily standup meeting begins promptly at nine o'clock.",
        "exampleTh": "การประชุมสแตนด์อัปประจำวันจะเริ่มตรงเวลา ณ เก้าโมงเช้า"
    },
    "of": {
        "word": "of",
        "pos": "prep.",
        "th": "ของ, แห่ง, เกี่ยวกับ",
        "definition": "Expressing the relationship between a part and a whole.",
        "exampleEn": "Here is a complete summary of the system architecture.",
        "exampleTh": "นี่คือบทสรุปที่สมบูรณ์ของสถาปัตยกรรมระบบ"
    },
    "offense": {
        "word": "offense",
        "pos": "n.",
        "th": "ความผิดทางกฎหมาย, การล่วงละเมิด, การทำให้ขุ่นเคือง",
        "definition": "A breach of a law or rule; an illegal act.",
        "exampleEn": "Unauthorized access to private database records is a serious criminal offense.",
        "exampleTh": "การเข้าถึงระเบียนฐานข้อมูลส่วนตัวโดยไม่ได้รับอนุญาตถือเป็นความผิดทางอาญาที่ร้ายแรง"
    },
    "oh": {
        "word": "oh",
        "pos": "exclam.",
        "th": "โอ้, อ๋อ (คำอุทานแสดงความประหลาดใจหรือเข้าใจ)",
        "definition": "Used to express a range of emotions including surprise, disappointment, or understanding.",
        "exampleEn": "Oh, I see what you mean now; thanks for clarifying!",
        "exampleTh": "อ๋อ ฉันเข้าใจความหมายของคุณแล้วค่ะ ขอบคุณที่ช่วยอธิบายนะคะ!"
    },
    "ok": {
        "word": "OK",
        "pos": "exclam., adj., adv.",
        "th": "ตกลง, เรียบร้อย, ใช้ได้",
        "definition": "Used to express agreement or of a satisfactory quality.",
        "exampleEn": "Everything is OK with the latest software deployment.",
        "exampleTh": "ทุกอย่างเรียบร้อยดีสำหรับการปล่อยซอฟต์แวร์เวอร์ชันล่าสุด"
    },
    "on": {
        "word": "on",
        "pos": "prep., adv.",
        "th": "บน, ที่, เกี่ยวกับ, เปิดอยู่",
        "definition": "Physically in contact with and supported by a surface.",
        "exampleEn": "The documentation is published on our official developer portal.",
        "exampleTh": "เอกสารคู่มือถูกเผยแพร่อยู่บนพอร์ทัลนักพัฒนาทางการของเรา"
    },
    "or": {
        "word": "or",
        "pos": "conj.",
        "th": "หรือ, หรือมิฉะนั้น",
        "definition": "Used to link alternatives.",
        "exampleEn": "You can log in using your work email or your GitHub account.",
        "exampleTh": "คุณสามารถเข้าสู่ระบบด้วยอีเมลที่ทำงานหรือบัญชี GitHub ของคุณก็ได้"
    },
    "railroad": {
        "word": "railroad",
        "pos": "n.",
        "th": "ทางรถไฟ, รถไฟ",
        "definition": "A track or set of tracks made of steel rails along which passenger and freight trains run.",
        "exampleEn": "The new trans-continental railroad accelerated trade across the region.",
        "exampleTh": "ทางรถไฟข้ามทวีปสายใหม่ช่วยเร่งการค้าทั่วทั้งภูมิภาคให้รวดเร็วยิ่งขึ้น"
    },
    "second": {
        "word": "second",
        "pos": "det., number, n.",
        "th": "ที่สอง, ลำดับที่สอง / วินาที",
        "definition": "Constituting number two in a sequence; or a sixtieth of a minute.",
        "exampleEn": "This is our second release candidate for the project.",
        "exampleTh": "นี่คือเวอร์ชันผู้สมัครปล่อยตัวจริงลำดับที่สองสำหรับโครงการนี้"
    },
    "so": {
        "word": "so",
        "pos": "adv., conj.",
        "th": "ดังนั้น, มาก, เช่นนั้น",
        "definition": "To such a great extent; therefore.",
        "exampleEn": "The automated build finished quickly, so we deployed it immediately.",
        "exampleTh": "กระบวนการบิลด์อัตโนมัติเสร็จสิ้นอย่างรวดเร็ว ดังนั้นเราจึงปล่อยใช้งานในทันที"
    },
    "tear": {
        "word": "tear",
        "pos": "v., n.",
        "th": "ฉีก, ขาด / น้ำตา",
        "definition": "Pull or rip something apart; or a drop of clear salty liquid from the eye.",
        "exampleEn": "Handle the old contract carefully so you do not tear the paper.",
        "exampleTh": "ถือสัญญาฉบับเก่าอย่างระมัดระวังเพื่อไม่ให้กระดาษฉีกขาด"
    },
    "tire": {
        "word": "tire",
        "pos": "n., v.",
        "th": "ยางรถยนต์ / ทำให้เหนื่อยล้า",
        "definition": "A rubber covering placed around a wheel; or feel or cause to feel in need of rest.",
        "exampleEn": "Before going on a long road trip, check the tire pressure.",
        "exampleTh": "ก่อนออกเดินทางไกลบนถนน โปรดตรวจสอบแรงดันลมยางรถยนต์"
    },
    "to": {
        "word": "to",
        "pos": "prep., infinitive marker",
        "th": "ถึง, ไปยัง, เพื่อ",
        "definition": "Expressing motion in the direction of a particular location; or used with the base form of a verb.",
        "exampleEn": "We need to send the final proposal to the client today.",
        "exampleTh": "พวกเราจำเป็นต้องส่งข้อเสนอฉบับสมบูรณ์ไปยังลูกค้าในวันนี้"
    },
    "toward": {
        "word": "toward",
        "pos": "prep.",
        "th": "ไปยัง, มุ่งหน้าสู่, เพื่อ",
        "definition": "In the direction of.",
        "exampleEn": "The company made great progress toward achieving its sustainability goals.",
        "exampleTh": "บริษัทมีความก้าวหน้าอย่างมากมุ่งสู่การบรรลุเป้าหมายความยั่งยืน"
    },
    "trash": {
        "word": "trash",
        "pos": "n., v.",
        "th": "ขยะ, ถังขยะ / ทิ้งขยะ",
        "definition": "Discarded matter; refuse.",
        "exampleEn": "Remember to empty the recycling bin and trash can before leaving.",
        "exampleTh": "อย่าลืมเทถังรีไซเคิลและถังขยะก่อนเดินทางกลับบ้าน"
    },
    "traveler": {
        "word": "traveler",
        "pos": "n.",
        "th": "นักเดินทาง, ผู้สัญจร",
        "definition": "A person who is traveling or who often travels.",
        "exampleEn": "The international airport provides free high-speed Wi-Fi for every traveler.",
        "exampleTh": "ท่าอากาศยานนานาชาติให้บริการ Wi-Fi ความเร็วสูงฟรีแก่ผู้เดินทางทุกคน"
    },
    "upward": {
        "word": "upward",
        "pos": "adv., adj.",
        "th": "ขึ้นข้างบน, เพิ่มขึ้น, สู่ระดับที่สูงขึ้น",
        "definition": "Towards a higher place, point, or level.",
        "exampleEn": "Company revenue has maintained an upward trend throughout the fiscal year.",
        "exampleTh": "รายได้ของบริษัทมีแนวโน้มเพิ่มขึ้นอย่างต่อเนื่องตลอดปีงบประมาณ"
    },
    "us": {
        "word": "us",
        "pos": "pron.",
        "th": "พวกเรา (รูปกรรม)",
        "definition": "Used by a speaker to refer to himself or herself and one or more other people as the object of a verb or preposition.",
        "exampleEn": "Please contact us if you need any technical assistance.",
        "exampleTh": "โปรดติดต่อพวกเราหากคุณต้องการความช่วยเหลือทางเทคนิคใดๆ นะครับ"
    },
    "we": {
        "word": "we",
        "pos": "pron.",
        "th": "พวกเรา (สรรพนามประธาน)",
        "definition": "Used by a speaker to refer to himself or herself and one or more other people considered together.",
        "exampleEn": "We are committed to delivering the best user experience possible.",
        "exampleTh": "พวกเรามุ่งมั่นที่จะส่งมอบประสบการณ์การใช้งานที่ดีที่สุดเท่าที่จะเป็นไปได้"
    }
}

# 3. Read current vocabData
proc = subprocess.run(['node', '-e', 'const d = require("./data/vocabData.js"); console.log(JSON.stringify(d));'], capture_output=True, text=True)
current_data = json.loads(proc.stdout)
print(f"Loaded {len(current_data)} items from data/vocabData.js")

updated_count = 0
suspicious_th_fixes = 0

for item in current_data:
    # Only update daily-oxford items (preserve tech-devops, workplace-business, phrasal-idioms)
    if item.get("category") != "daily-oxford":
        continue
    
    clean_w = item.get("word", "").strip().lower().replace(",", "").replace(".", "").replace("1", "").replace("2", "")
    
    # Check if needs replacement
    ex_en = item.get("exampleEn", "")
    ex_th = item.get("exampleTh", "")
    th = item.get("th", "")
    
    is_boilerplate_en = (
        "We carefully evaluated the" in ex_en or
        "the system tomorrow morning" in ex_en or
        "for modern software development" in ex_en or
        "The engineering process was executed in a very" in ex_en
    )
    is_placeholder_th = "ตัวอย่างการใช้คำว่า" in ex_th
    is_suspicious_th = (
        "สแลง" in th or
        "พยัญชนะ" in th or
        "อักษร" in th or
        "ปฏิกริยาเคมี" in th or
        "การเก็งกำไร" in th or
        th == "ความหมายทั่วไป" or
        clean_w in ["can", "candy", "century", "shop", "speed", "stretch", "wheel", "hit", "activity", "adventure", "ankle", "alarm", "angle", "anger", "down", "and", "about", "around", "behind", "between", "beyond", "but", "by", "down", "except", "following", "letter", "initial"]
    )
    
    # Clean word typo if any
    if item["word"] == "a,":
        item["word"] = "a"
    if item["word"] in ["last1", "second1", "lie2"]:
        item["word"] = clean_w
        
    # Get replacement data
    replacement = None
    if clean_w in handcrafted_map:
        replacement = handcrafted_map[clean_w]
    elif clean_w in ref_map:
        ref_item = ref_map[clean_w]
        ex_list = ref_item.get("examples", [])
        if ex_list:
            first_ex = ex_list[0]
            ref_ex_en = first_ex.get("en", "").strip()
            ref_ex_th = first_ex.get("translations", {}).get("th", "").strip()
            ref_th = ref_item.get("translations", {}).get("th", "").strip()
            ref_def = ref_item.get("definition", "").strip()
            if ref_ex_en and ref_ex_th:
                replacement = {
                    "th": ref_th if (is_suspicious_th or not th) else th,
                    "definition": ref_def or item.get("definition"),
                    "exampleEn": ref_ex_en,
                    "exampleTh": ref_ex_th
                }
    
    if replacement:
        if is_boilerplate_en or is_placeholder_th:
            item["exampleEn"] = replacement["exampleEn"]
            item["exampleTh"] = replacement["exampleTh"]
            updated_count += 1
        if is_suspicious_th:
            item["th"] = replacement["th"]
            suspicious_th_fixes += 1
        if replacement.get("definition") and ("diverting" in item.get("definition", "") or len(item.get("definition", "")) < 5):
            item["definition"] = replacement["definition"]

print(f"Total example sentences updated: {updated_count}")
print(f"Total suspicious Thai translations fixed: {suspicious_th_fixes}")

# 4. Check remaining boilerplates
remaining_eval = sum(1 for x in current_data if "We carefully evaluated the" in x.get("exampleEn", ""))
remaining_plan = sum(1 for x in current_data if "the system tomorrow morning" in x.get("exampleEn", ""))
remaining_th_ph = sum(1 for x in current_data if "ตัวอย่างการใช้คำว่า" in x.get("exampleTh", ""))
print(f"Remaining 'We carefully evaluated': {remaining_eval}")
print(f"Remaining 'the system tomorrow morning': {remaining_plan}")
print(f"Remaining 'ตัวอย่างการใช้คำว่า': {remaining_th_ph}")

