import json
import re
import subprocess
import os

print("Starting VocabData Upgrade...")

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
        "exampleTh": "เธอซื้อแล็ปท็อปเครื่องใหม่สำหรับทำงาน",
        "collocations": ["a few", "a lot of", "a little"],
        "synonyms": ["an", "one", "single"]
    },
    "according": {
        "word": "according to",
        "pos": "prep.",
        "th": "ตามที่, ตามข้อกำหนดของ, อ้างอิงจาก",
        "definition": "As stated by or in; in a manner conforming or corresponding to.",
        "exampleEn": "According to the schedule, the meeting starts at two o'clock.",
        "exampleTh": "ตามตารางเวลา การประชุมจะเริ่มตอนบ่ายสองโมง",
        "collocations": ["according to plan", "according to law", "according to reports"],
        "synonyms": ["as per", "in accordance with", "in line with"]
    },
    "anymore": {
        "word": "anymore",
        "pos": "adv.",
        "th": "อีกต่อไป (ใช้ในประโยคปฏิเสธหรือคำถาม)",
        "definition": "To any further extent; any longer.",
        "exampleEn": "He does not work here anymore.",
        "exampleTh": "เขาไม่ได้ทำงานที่นี่อีกต่อไปแล้ว",
        "collocations": ["not anymore", "hardly anymore", "barely anymore"],
        "synonyms": ["any longer", "no longer"]
    },
    "as": {
        "word": "as",
        "pos": "prep., conj.",
        "th": "ในฐานะที่เป็น, เช่นเดียวกับ, ขณะที่",
        "definition": "Used to refer to the function or character that someone or something has.",
        "exampleEn": "She works as a software engineer at a tech company.",
        "exampleTh": "เธอทำงานในตำแหน่งวิศวกรซอฟต์แวร์ที่บริษัทเทคโนโลยี",
        "collocations": ["as well as", "as soon as", "as if"],
        "synonyms": ["like", "while", "since"]
    },
    "at": {
        "word": "at",
        "pos": "prep.",
        "th": "ที่, ณ, ในเวลา",
        "definition": "Expressing location or arrival in a particular place or position.",
        "exampleEn": "We will meet at the office tomorrow morning.",
        "exampleTh": "พวกเราจะพบกันที่สำนักงานในวันพรุ่งนี้เช้า",
        "collocations": ["at work", "at home", "at once"],
        "synonyms": ["in", "near", "by"]
    },
    "be": {
        "word": "be",
        "pos": "v., auxiliary v.",
        "th": "เป็น, อยู่, คือ",
        "definition": "Exist; occur; have a specified state or characteristic.",
        "exampleEn": "Please be ready before the presentation begins.",
        "exampleTh": "โปรดเตรียมตัวให้พร้อมก่อนการนำเสนอจะเริ่มต้นขึ้น",
        "collocations": ["be able to", "be ready", "be sure"],
        "synonyms": ["exist", "remain", "stay"]
    },
    "blond": {
        "word": "blond",
        "pos": "adj.",
        "th": "ผมสีบลอนด์, สีทองอ่อน",
        "definition": "Having fair hair and light skin.",
        "exampleEn": "She has natural blond hair and blue eyes.",
        "exampleTh": "เธอมีผมสีบลอนด์ธรรมชาติและดวงตาสีฟ้า",
        "collocations": ["blond hair", "natural blond", "blond highlights"],
        "synonyms": ["fair-haired", "golden", "light-haired"]
    },
    "by": {
        "word": "by",
        "pos": "prep., adv.",
        "th": "โดย, ด้วย, ข้างๆ, ภายใน (เวลา)",
        "definition": "Identifying the agent performing an action; near or through.",
        "exampleEn": "The report must be submitted by Friday afternoon.",
        "exampleTh": "รายงานจะต้องส่งภายในช่วงบ่ายวันศุกร์",
        "collocations": ["by tomorrow", "by hand", "by mistake"],
        "synonyms": ["via", "through", "beside"]
    },
    "colored": {
        "word": "colored",
        "pos": "adj.",
        "th": "ที่มีสีสัน, หลากสี",
        "definition": "Having a color or colors; not black and white.",
        "exampleEn": "The designer used brightly colored graphics for the website banner.",
        "exampleTh": "นักออกแบบใช้กราฟิกสีสันสดใสสำหรับแบนเนอร์เว็บไซต์",
        "collocations": ["brightly colored", "colored pencils", "colored lights"],
        "synonyms": ["colorful", "tinted", "painted"]
    },
    "corn": {
        "word": "corn",
        "pos": "n.",
        "th": "ข้าวโพด",
        "definition": "A North American cereal plant that yields large grains on a cob.",
        "exampleEn": "Fresh sweet corn is harvested during the summer season.",
        "exampleTh": "ข้าวโพดหวานสดจะถูกเก็บเกี่ยวในช่วงฤดูร้อน",
        "collocations": ["sweet corn", "corn field", "corn on the cob"],
        "synonyms": ["maize", "grain"]
    },
    "defense": {
        "word": "defense",
        "pos": "n.",
        "th": "การป้องกัน, การตั้งรับ, การแก้ต่าง",
        "definition": "The action of defending from or resisting attack.",
        "exampleEn": "The company strengthened its cyber defense against ransomware attacks.",
        "exampleTh": "บริษัทได้เสริมความแข็งแกร่งให้กับการป้องกันทางไซเบอร์จากการโจมตีด้วยมัลแวร์เรียกค่าไถ่",
        "collocations": ["air defense", "in defense of", "defense mechanism"],
        "synonyms": ["protection", "shield", "security"]
    },
    "disk": {
        "word": "disk",
        "pos": "n.",
        "th": "ดิสก์, แผ่นบันทึกข้อมูล, จานแม่เหล็ก",
        "definition": "A storage device for digital data in a computer.",
        "exampleEn": "Please make sure there is sufficient disk space available before downloading.",
        "exampleTh": "โปรดตรวจสอบให้แน่ใจว่ามีพื้นที่ดิสก์ว่างเพียงพอก่อนเริ่มดาวน์โหลด",
        "collocations": ["hard disk", "disk space", "disk drive"],
        "synonyms": ["disc", "platter", "drive"]
    },
    "downward": {
        "word": "downward",
        "pos": "adj., adv.",
        "th": "ทิศทางลง, ลดลง, สู่เบื้องล่าง",
        "definition": "Moving towards a lower place or level.",
        "exampleEn": "Inflation showed a steady downward trend over the past six months.",
        "exampleTh": "อัตราเงินเฟ้อแสดงแนวโน้มลดลงอย่างต่อเนื่องตลอดหกเดือนที่ผ่านมา",
        "collocations": ["downward trend", "downward spiral", "point downward"],
        "synonyms": ["descending", "downwards", "declining"]
    },
    "favor": {
        "word": "favor",
        "pos": "n., v.",
        "th": "ความช่วยเหลือ, การสนับสนุน, โปรดปราน",
        "definition": "An act of kindness beyond what is due or usual.",
        "exampleEn": "Could you please do me a favor and review this document?",
        "exampleTh": "คุณช่วยอะไรฉันสักอย่างแล้วช่วยตรวจทานเอกสารฉบับนี้หน่อยได้ไหม?",
        "collocations": ["do a favor", "in favor of", "return the favor"],
        "synonyms": ["kindness", "support", "approval"]
    },
    "he": {
        "word": "he",
        "pos": "pron.",
        "th": "เขา (สรรพนามบุรุษที่ 3 เพศชาย)",
        "definition": "Used to refer to a man, boy, or male animal previously mentioned.",
        "exampleEn": "He joined the development team as a senior DevOps engineer.",
        "exampleTh": "เขาเข้าร่วมทีมพัฒนาในตำแหน่งวิศวกร DevOps อาวุโส",
        "collocations": ["he himself", "he is", "he said"],
        "synonyms": ["that man", "the male"]
    },
    "hi": {
        "word": "hi",
        "pos": "exclam.",
        "th": "สวัสดี (คำทักทายแบบเป็นกันเอง)",
        "definition": "Used as a friendly greeting or to attract attention.",
        "exampleEn": "Hi everyone, welcome to today's English workshop.",
        "exampleTh": "สวัสดีทุกคน ยินดีต้อนรับสู่เวิร์กช็อปภาษาอังกฤษในวันนี้",
        "collocations": ["say hi", "hi there", "wave hi"],
        "synonyms": ["hello", "greetings", "hey"]
    },
    "humor": {
        "word": "humor",
        "pos": "n.",
        "th": "อารมณ์ขัน, ความตลกขบขัน",
        "definition": "The quality of being amusing or comic, especially as expressed in literature or speech.",
        "exampleEn": "His great sense of humor made everyone feel comfortable during the interview.",
        "exampleTh": "อารมณ์ขันที่ยอดเยี่ยมของเขาทำให้ทุกคนรู้สึกผ่อนคลายระหว่างการสัมภาษณ์",
        "collocations": ["sense of humor", "dark humor", "dry humor"],
        "synonyms": ["wit", "comedy", "amusement"]
    },
    "i": {
        "word": "I",
        "pos": "pron.",
        "th": "ฉัน, ผม, ดิฉัน (สรรพนามบุรุษที่ 1)",
        "definition": "Used by a speaker to refer to himself or herself.",
        "exampleEn": "I am looking forward to working with you on this project.",
        "exampleTh": "ผมตั้งตารอที่จะได้ร่วมงานกับคุณในโครงการนี้ครับ",
        "collocations": ["I think", "I see", "I hope"],
        "synonyms": ["myself", "me"]
    },
    "if": {
        "word": "if",
        "pos": "conj.",
        "th": "ถ้า, หาก, ถ้าหากว่า",
        "definition": "Introducing a conditional clause.",
        "exampleEn": "If you have any questions, feel free to ask me anytime.",
        "exampleTh": "หากคุณมีคำถามใดๆ สามารถถามฉันได้ตลอดเวลาเลยนะคะ",
        "collocations": ["if necessary", "if possible", "as if"],
        "synonyms": ["provided that", "in case", "whether"]
    },
    "in": {
        "word": "in",
        "pos": "prep., adv.",
        "th": "ใน, ข้างใน, ภายใน",
        "definition": "Expressing the situation of something that is or appears to be enclosed or surrounded by something else.",
        "exampleEn": "The configuration file is stored in the root directory.",
        "exampleTh": "ไฟล์การตั้งค่าถูกจัดเก็บไว้ในไดเรกทอรีหลัก",
        "collocations": ["in general", "in time", "in fact"],
        "synonyms": ["inside", "within", "into"]
    },
    "it": {
        "word": "it",
        "pos": "pron.",
        "th": "มัน (สรรพนามแทนสิ่งของหรือสัตว์)",
        "definition": "Used to refer to an animal or thing previously mentioned or easily identified.",
        "exampleEn": "The server crashed because it ran out of memory.",
        "exampleTh": "เซิร์ฟเวอร์ล่มเนื่องจากหน่วยความจำของมันหมดลง",
        "collocations": ["it seems", "it depends", "it works"],
        "synonyms": ["that thing", "the item"]
    },
    "kilometer": {
        "word": "kilometer",
        "pos": "n.",
        "th": "กิโลเมตร",
        "definition": "A metric unit of measurement equal to 1,000 meters.",
        "exampleEn": "The office is located only two kilometers away from the train station.",
        "exampleTh": "สำนักงานตั้งอยู่ห่างจากสถานีรถไฟเพียงสองกิโลเมตร",
        "collocations": ["per kilometer", "square kilometer", "kilometer radius"],
        "synonyms": ["km", "metric mile"]
    },
    "labor": {
        "word": "labor",
        "pos": "n.",
        "th": "แรงงาน, การทำงาน, ผู้ใช้แรงงาน",
        "definition": "Work, especially hard physical work.",
        "exampleEn": "The automation tools helped reduce manual labor by fifty percent.",
        "exampleTh": "เครื่องมืออัตโนมัติช่วยลดแรงงานที่ต้องทำด้วยมือลงถึงห้าสิบเปอร์เซ็นต์",
        "collocations": ["manual labor", "labor market", "division of labor"],
        "synonyms": ["work", "toil", "effort"]
    },
    "last": {
        "word": "last",
        "pos": "det., adj., v.",
        "th": "สุดท้าย, ล่าสุด / คงอยู่, กินเวลา",
        "definition": "Coming after all others in time or order; or continue for a specified period of time.",
        "exampleEn": "We resolved all reported issues during the last release.",
        "exampleTh": "พวกเราแก้ไขปัญหาทั้งหมดที่ได้รับรายงานในระหว่างการเปิดตัวเวอร์ชันล่าสุด",
        "collocations": ["at last", "last year", "last minute"],
        "synonyms": ["final", "ultimate", "endure"]
    },
    "lie": {
        "word": "lie",
        "pos": "v., n.",
        "th": "โกหก, คำโกหก / นอนลง, วางอยู่",
        "definition": "Tell an intentional untruth; or be in a horizontal resting position.",
        "exampleEn": "It is always better to tell the truth than to tell a lie.",
        "exampleTh": "การพูดความจริงย่อมดีกว่าการโกหกเสมอ",
        "collocations": ["tell a lie", "lie down", "lie awake"],
        "synonyms": ["deceive", "recline", "rest"]
    },
    "math": {
        "word": "math",
        "pos": "n.",
        "th": "คณิตศาสตร์ (ย่อมาจาก mathematics)",
        "definition": "The abstract science of number, quantity, and space.",
        "exampleEn": "Data science algorithms require a solid background in math and statistics.",
        "exampleTh": "อัลกอริทึมของวิทยาการข้อมูลจำเป็นต้องมีพื้นฐานด้านคณิตศาสตร์และสถิติที่แน่น",
        "collocations": ["math problem", "applied math", "do the math"],
        "synonyms": ["mathematics", "arithmetic", "calculation"]
    },
    "me": {
        "word": "me",
        "pos": "pron.",
        "th": "ฉัน, ผม, ดิฉัน (รูปกรรม)",
        "definition": "Used by a speaker to refer to himself or herself as the object of a verb or preposition.",
        "exampleEn": "Please send me the updated meeting minutes by tomorrow.",
        "exampleTh": "โปรดส่งรายงานการประชุมฉบับล่าสุดให้ผมภายในวันพรุ่งนี้นะครับ",
        "collocations": ["let me know", "excuse me", "trust me"],
        "synonyms": ["myself", "this person"]
    },
    "meter": {
        "word": "meter",
        "pos": "n.",
        "th": "เมตร (หน่วยวัดความยาว), มิเตอร์วัด",
        "definition": "The fundamental unit of length in the metric system, equal to 100 centimeters.",
        "exampleEn": "The ethernet cable has a total length of fifteen meters.",
        "exampleTh": "สายสัญญาณอีเทอร์เน็ตมีความยาวรวมสิบห้าเมตร",
        "collocations": ["cubic meter", "parking meter", "water meter"],
        "synonyms": ["metre", "gauge"]
    },
    "mom": {
        "word": "mom",
        "pos": "n.",
        "th": "แม่ (ภาษาพูดที่อบอุ่น)",
        "definition": "One's mother.",
        "exampleEn": "She called her mom to share the exciting news about her promotion.",
        "exampleTh": "เธอโทรหาคุณแม่เพื่อเล่าข่าวที่น่าตื่นเต้นเรื่องการเลื่อนตำแหน่งของเธอ",
        "collocations": ["working mom", "stay-at-home mom", "proud mom"],
        "synonyms": ["mother", "mum", "mama"]
    },
    "my": {
        "word": "my",
        "pos": "det.",
        "th": "ของฉัน, ของผม",
        "definition": "Belonging to or associated with the speaker.",
        "exampleEn": "This is my primary email address for all business communications.",
        "exampleTh": "นี่คือที่อยู่อีเมลหลักของผมสำหรับการติดต่อสื่อสารทางธุรกิจทั้งหมดครับ",
        "collocations": ["in my opinion", "my pleasure", "my fault"],
        "synonyms": ["mine", "personal"]
    },
    "o'clock": {
        "word": "o'clock",
        "pos": "adv.",
        "th": "นาฬิกา (บอกเวลาตรงตามชั่วโมง)",
        "definition": "Used after a number from one to twelve to indicate the time of day.",
        "exampleEn": "The daily standup meeting begins promptly at nine o'clock.",
        "exampleTh": "การประชุมสแตนด์อัปประจำวันจะเริ่มตรงเวลา ณ เก้าโมงเช้า",
        "collocations": ["five o'clock", "nine o'clock", "around ten o'clock"],
        "synonyms": ["hours", "sharp"]
    },
    "of": {
        "word": "of",
        "pos": "prep.",
        "th": "ของ, แห่ง, เกี่ยวกับ",
        "definition": "Expressing the relationship between a part and a whole.",
        "exampleEn": "Here is a complete summary of the system architecture.",
        "exampleTh": "นี่คือบทสรุปที่สมบูรณ์ของสถาปัตยกรรมระบบ",
        "collocations": ["one of", "because of", "part of"],
        "synonyms": ["belonging to", "from", "concerning"]
    },
    "offense": {
        "word": "offense",
        "pos": "n.",
        "th": "ความผิดทางกฎหมาย, การล่วงละเมิด, การทำให้ขุ่นเคือง",
        "definition": "A breach of a law or rule; an illegal act.",
        "exampleEn": "Unauthorized access to private database records is a serious criminal offense.",
        "exampleTh": "การเข้าถึงระเบียนฐานข้อมูลส่วนตัวโดยไม่ได้รับอนุญาตถือเป็นความผิดทางอาญาที่ร้ายแรง",
        "collocations": ["criminal offense", "take offense", "commit an offense"],
        "synonyms": ["crime", "violation", "wrongdoing"]
    },
    "oh": {
        "word": "oh",
        "pos": "exclam.",
        "th": "โอ้, อ๋อ (คำอุทานแสดงความประหลาดใจหรือเข้าใจ)",
        "definition": "Used to express a range of emotions including surprise, disappointment, or understanding.",
        "exampleEn": "Oh, I see what you mean now; thanks for clarifying!",
        "exampleTh": "อ๋อ ฉันเข้าใจความหมายของคุณแล้วค่ะ ขอบคุณที่ช่วยอธิบายนะคะ!",
        "collocations": ["oh dear", "oh really", "oh no"],
        "synonyms": ["ah", "oho", "wow"]
    },
    "ok": {
        "word": "OK",
        "pos": "exclam., adj., adv.",
        "th": "ตกลง, เรียบร้อย, ใช้ได้",
        "definition": "Used to express agreement or of a satisfactory quality.",
        "exampleEn": "Everything is OK with the latest software deployment.",
        "exampleTh": "ทุกอย่างเรียบร้อยดีสำหรับการปล่อยซอฟต์แวร์เวอร์ชันล่าสุด",
        "collocations": ["are you OK", "that is OK", "feel OK"],
        "synonyms": ["fine", "acceptable", "alright"]
    },
    "on": {
        "word": "on",
        "pos": "prep., adv.",
        "th": "บน, ที่, เกี่ยวกับ, เปิดอยู่",
        "definition": "Physically in contact with and supported by a surface.",
        "exampleEn": "The documentation is published on our official developer portal.",
        "exampleTh": "เอกสารคู่มือถูกเผยแพร่อยู่บนพอร์ทัลนักพัฒนาทางการของเรา",
        "collocations": ["on time", "on purpose", "on duty"],
        "synonyms": ["upon", "atop", "above"]
    },
    "or": {
        "word": "or",
        "pos": "conj.",
        "th": "หรือ, หรือมิฉะนั้น",
        "definition": "Used to link alternatives.",
        "exampleEn": "You can log in using your work email or your GitHub account.",
        "exampleTh": "คุณสามารถเข้าสู่ระบบด้วยอีเมลที่ทำงานหรือบัญชี GitHub ของคุณก็ได้",
        "collocations": ["either or", "or else", "more or less"],
        "synonyms": ["alternatively", "otherwise"]
    },
    "railroad": {
        "word": "railroad",
        "pos": "n.",
        "th": "ทางรถไฟ, รถไฟ",
        "definition": "A track or set of tracks made of steel rails along which passenger and freight trains run.",
        "exampleEn": "The new trans-continental railroad accelerated trade across the region.",
        "exampleTh": "ทางรถไฟข้ามทวีปสายใหม่ช่วยเร่งการค้าทั่วทั้งภูมิภาคให้รวดเร็วยิ่งขึ้น",
        "collocations": ["railroad track", "railroad car", "underground railroad"],
        "synonyms": ["railway", "train line", "tracks"]
    },
    "second": {
        "word": "second",
        "pos": "det., number, n.",
        "th": "ที่สอง, ลำดับที่สอง / วินาที",
        "definition": "Constituting number two in a sequence; or a sixtieth of a minute.",
        "exampleEn": "This is our second release candidate for the project.",
        "exampleTh": "นี่คือเวอร์ชันผู้สมัครปล่อยตัวจริงลำดับที่สองสำหรับโครงการนี้",
        "collocations": ["second thought", "second chance", "every second"],
        "synonyms": ["next", "secondary", "moment"]
    },
    "so": {
        "word": "so",
        "pos": "adv., conj.",
        "th": "ดังนั้น, มาก, เช่นนั้น",
        "definition": "To such a great extent; therefore.",
        "exampleEn": "The automated build finished quickly, so we deployed it immediately.",
        "exampleTh": "กระบวนการบิลด์อัตโนมัติเสร็จสิ้นอย่างรวดเร็ว ดังนั้นเราจึงปล่อยใช้งานในทันที",
        "collocations": ["so far", "so that", "and so on"],
        "synonyms": ["therefore", "thus", "hence"]
    },
    "tear": {
        "word": "tear",
        "pos": "v., n.",
        "th": "ฉีก, ขาด / น้ำตา",
        "definition": "Pull or rip something apart; or a drop of clear salty liquid from the eye.",
        "exampleEn": "Handle the old contract carefully so you do not tear the paper.",
        "exampleTh": "ถือสัญญาฉบับเก่าอย่างระมัดระวังเพื่อไม่ให้กระดาษฉีกขาด",
        "collocations": ["tear down", "in tears", "wear and tear"],
        "synonyms": ["rip", "shred", "drop of sorrow"]
    },
    "tire": {
        "word": "tire",
        "pos": "n., v.",
        "th": "ยางรถยนต์ / ทำให้เหนื่อยล้า",
        "definition": "A rubber covering placed around a wheel; or feel or cause to feel in need of rest.",
        "exampleEn": "Before going on a long road trip, check the tire pressure.",
        "exampleTh": "ก่อนออกเดินทางไกลบนถนน โปรดตรวจสอบแรงดันลมยางรถยนต์",
        "collocations": ["flat tire", "spare tire", "tire pressure"],
        "synonyms": ["tyre", "wheel cover", "exhaust"]
    },
    "to": {
        "word": "to",
        "pos": "prep., infinitive marker",
        "th": "ถึง, ไปยัง, เพื่อ",
        "definition": "Expressing motion in the direction of a particular location; or used with the base form of a verb.",
        "exampleEn": "We need to send the final proposal to the client today.",
        "exampleTh": "พวกเราจำเป็นต้องส่งข้อเสนอฉบับสมบูรณ์ไปยังลูกค้าในวันนี้",
        "collocations": ["to and fro", "in order to", "prior to"],
        "synonyms": ["towards", "unto", "into"]
    },
    "toward": {
        "word": "toward",
        "pos": "prep.",
        "th": "ไปยัง, มุ่งหน้าสู่, เพื่อ",
        "definition": "In the direction of.",
        "exampleEn": "The company made great progress toward achieving its sustainability goals.",
        "exampleTh": "บริษัทมีความก้าวหน้าอย่างมากมุ่งสู่การบรรลุเป้าหมายความยั่งยืน",
        "collocations": ["move toward", "step toward", "attitude toward"],
        "synonyms": ["towards", "in the direction of", "headed for"]
    },
    "trash": {
        "word": "trash",
        "pos": "n., v.",
        "th": "ขยะ, ถังขยะ / ทิ้งขยะ",
        "definition": "Discarded matter; refuse.",
        "exampleEn": "Remember to empty the recycling bin and trash can before leaving.",
        "exampleTh": "อย่าลืมเทถังรีไซเคิลและถังขยะก่อนเดินทางกลับบ้าน",
        "collocations": ["trash can", "take out the trash", "trash bin"],
        "synonyms": ["garbage", "rubbish", "waste"]
    },
    "traveler": {
        "word": "traveler",
        "pos": "n.",
        "th": "นักเดินทาง, ผู้สัญจร",
        "definition": "A person who is traveling or who often travels.",
        "exampleEn": "The international airport provides free high-speed Wi-Fi for every traveler.",
        "exampleTh": "ท่าอากาศยานนานาชาติให้บริการ Wi-Fi ความเร็วสูงฟรีแก่ผู้เดินทางทุกคน",
        "collocations": ["frequent traveler", "business traveler", "seasoned traveler"],
        "synonyms": ["tourist", "passenger", "voyager"]
    },
    "upward": {
        "word": "upward",
        "pos": "adv., adj.",
        "th": "ขึ้นข้างบน, เพิ่มขึ้น, สู่ระดับที่สูงขึ้น",
        "definition": "Towards a higher place, point, or level.",
        "exampleEn": "Company revenue has maintained an upward trend throughout the fiscal year.",
        "exampleTh": "รายได้ของบริษัทมีแนวโน้มเพิ่มขึ้นอย่างต่อเนื่องตลอดปีงบประมาณ",
        "collocations": ["upward trend", "upward mobility", "point upward"],
        "synonyms": ["upwards", "ascending", "climbing"]
    },
    "us": {
        "word": "us",
        "pos": "pron.",
        "th": "พวกเรา (รูปกรรม)",
        "definition": "Used by a speaker to refer to himself or herself and one or more other people as the object of a verb or preposition.",
        "exampleEn": "Please contact us if you need any technical assistance.",
        "exampleTh": "โปรดติดต่อพวกเราหากคุณต้องการความช่วยเหลือทางเทคนิคใดๆ นะครับ",
        "collocations": ["between us", "with us", "for us"],
        "synonyms": ["ourselves", "our team"]
    },
    "we": {
        "word": "we",
        "pos": "pron.",
        "th": "พวกเรา (สรรพนามประธาน)",
        "definition": "Used by a speaker to refer to himself or herself and one or more other people considered together.",
        "exampleEn": "We are committed to delivering the best user experience possible.",
        "exampleTh": "พวกเรามุ่งมั่นที่จะส่งมอบประสบการณ์การใช้งานที่ดีที่สุดเท่าที่จะเป็นไปได้",
        "collocations": ["we will", "we have", "we are"],
        "synonyms": ["our group", "ourselves"]
    }
}

# 3. Read current vocabData
proc = subprocess.run(['node', '-e', 'const d = require("./data/vocabData.js"); console.log(JSON.stringify(d));'], capture_output=True, text=True)
current_data = json.loads(proc.stdout)
print(f"Loaded {len(current_data)} items from data/vocabData.js")

updated_examples = 0
updated_translations = 0

for item in current_data:
    if item.get("category") != "daily-oxford":
        continue
    
    raw_word = item.get("word", "")
    cw = re.sub(r'[0-9,\.]', '', raw_word.lower()).replace('’', "'").strip()
    
    # Fix word field if it had typos
    if raw_word == "a,":
        item["word"] = "a"
    elif raw_word in ["last1", "second1", "lie2"]:
        item["word"] = cw
    elif raw_word == "o’clock":
        item["word"] = "o'clock"
    
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
        cw in [
            "can", "candy", "century", "shop", "speed", "stretch", "wheel", "hit",
            "activity", "adventure", "ankle", "alarm", "angle", "anger", "down",
            "and", "about", "around", "behind", "between", "beyond", "but", "by",
            "except", "following", "letter", "initial", "want", "reject", "switch",
            "thank", "link", "refuse", "repair", "reserve", "rush", "see", "shoot",
            "supply", "tomorrow", "wash", "watch", "wonder", "wound", "produce",
            "mail", "may", "might", "mount", "murder", "nor", "percent", "pin"
        ]
    )
    
    rep = None
    if cw in handcrafted_map:
        rep = handcrafted_map[cw]
    elif cw in ref_map:
        ref_item = ref_map[cw]
        ex_list = ref_item.get("examples", [])
        if ex_list:
            first_ex = ex_list[0]
            r_ex_en = first_ex.get("en", "").strip()
            r_ex_th = first_ex.get("translations", {}).get("th", "").strip()
            r_th = ref_item.get("translations", {}).get("th", "").strip()
            r_def = ref_item.get("definition", "").strip()
            r_syns = ref_item.get("synonyms", [])
            if r_ex_en and r_ex_th:
                rep = {
                    "th": r_th,
                    "definition": r_def,
                    "exampleEn": r_ex_en,
                    "exampleTh": r_ex_th,
                    "synonyms": r_syns
                }
    
    if rep:
        # Always fix boilerplate example sentences
        if is_boilerplate_en or is_placeholder_th or not ex_en or not ex_th:
            item["exampleEn"] = rep["exampleEn"]
            item["exampleTh"] = rep["exampleTh"]
            updated_examples += 1
            
        # Always fix suspicious or archaic Thai translations
        if is_suspicious_th or not th or th == "ความหมายทั่วไป":
            item["th"] = rep["th"]
            updated_translations += 1
            
        # Clean definition if needed
        if rep.get("definition") and ("diverting" in item.get("definition", "") or len(item.get("definition", "")) < 8):
            item["definition"] = rep["definition"]
            
        # Collocations cleanup
        cols = item.get("collocations", [])
        if rep.get("collocations"):
            item["collocations"] = rep["collocations"]
        elif cols:
            # deduplicate
            seen = set()
            clean_cols = []
            for c in cols:
                c_clean = c.replace(" in practice", "").strip()
                if c_clean and c_clean not in seen:
                    seen.add(c_clean)
                    clean_cols.append(f"{c_clean} in context")
            if clean_cols:
                item["collocations"] = clean_cols[:3]

print(f"Updated {updated_examples} example sentences.")
print(f"Updated {updated_translations} Thai definitions.")

# Verification counts
rem_eval = sum(1 for x in current_data if "We carefully evaluated the" in x.get("exampleEn", ""))
rem_plan = sum(1 for x in current_data if "the system tomorrow morning" in x.get("exampleEn", ""))
rem_th_ph = sum(1 for x in current_data if "ตัวอย่างการใช้คำว่า" in x.get("exampleTh", ""))
print(f"Remaining 'We carefully evaluated the': {rem_eval}")
print(f"Remaining 'the system tomorrow morning': {rem_plan}")
print(f"Remaining 'ตัวอย่างการใช้คำว่า': {rem_th_ph}")

if rem_eval > 0 or rem_plan > 0 or rem_th_ph > 0:
    print("WARNING: Some boilerplates still remain!")
else:
    print("ALL BOILERPLATES HAVE BEEN COMPLETELY ELIMINATED! (0 REMAINING)")

# Format JavaScript output
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

tech_items = [x for x in current_data if x.get("category") == "tech-devops"]
biz_items = [x for x in current_data if x.get("category") == "workplace-business"]
idiom_items = [x for x in current_data if x.get("category") == "phrasal-idioms"]
oxford_items = [x for x in current_data if x.get("category") == "daily-oxford"]

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

print(f"Successfully wrote {len(current_data)} updated items to data/vocabData.js!")
