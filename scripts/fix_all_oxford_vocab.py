import json
import re
import subprocess

print("Loading current data/vocabData.js...")
proc = subprocess.run(
    ['node', '-e', 'const d = require("./data/vocabData.js"); console.log(JSON.stringify(d));'],
    capture_output=True, text=True, check=True
)
current_data = json.loads(proc.stdout)
print(f"Loaded {len(current_data)} items.")

print("Loading /tmp/ref_vocabulary.json...")
with open('/tmp/ref_vocabulary.json', 'r', encoding='utf-8') as f:
    ref_data = json.load(f)

ref_map = {}
for item in ref_data:
    w = item.get('word', '').strip().lower()
    if w and w not in ref_map:
        ref_map[w] = item

# Load handcrafted_map from apply_vocab_upgrade.py by extracting its dict
with open('scripts/apply_vocab_upgrade.py', 'r', encoding='utf-8') as f:
    upg_code = f.read()
start_idx = upg_code.find("handcrafted_map = {")
end_idx = upg_code.find("# 3. Read current vocabData")
hc_namespace = {}
exec(upg_code[start_idx:end_idx], hc_namespace)
handcrafted_map = hc_namespace['handcrafted_map']
print(f"Loaded {len(handcrafted_map)} handcrafted entries and {len(ref_map)} reference entries.")

# Explicit ID overrides for all user-audited entries (v-oxf-0001 to v-oxf-0321),
# all 29 duplicate/homograph/multi-word groups across v-oxf-0001..3000,
# and all -ed/-ing emotion adjective pairs.
explicit_id_overrides = {
    # === ช่วงที่ 1: v-oxf-0001 ถึง v-oxf-0100 ===
    "v-oxf-0001": {
        "word": "a",
        "pos": "indefinite article",
        "th": "หนึ่ง (คำนำหน้านามนับได้เอกพจน์ที่ไม่ชี้เฉพาะ)",
        "definition": "Used before a singular countable noun when mentioning someone or something for the first time.",
        "exampleEn": "She bought a new laptop for work.",
        "exampleTh": "เธอซื้อแล็ปท็อปเครื่องใหม่สำหรับทำงาน",
        "synonyms": ["an", "one", "any"]
    },
    "v-oxf-0005": {
        "th": "เกี่ยวกับ, ประมาณ",
        "definition": "On the subject of; concerning; approximately.",
        "synonyms": ["concerning", "regarding", "approximately"]
    },
    "v-oxf-0006": {
        "th": "เหนือ, ข้างบน, มากกว่า",
        "definition": "In extended space over and not touching; at a higher level or layer than.",
        "synonyms": ["over", "higher than", "beyond"]
    },
    "v-oxf-0011": {
        "th": "ยอมรับ, ตอบรับ",
        "definition": "To agree to take something offered; to say yes to an invitation or offer.",
        "synonyms": ["receive", "agree to", "approve"]
    },
    "v-oxf-0016": {
        "word": "according to",
        "pos": "prep.",
        "th": "ตามที่..., อ้างอิงจาก...",
        "definition": "As stated or reported by someone or something; in a way that agrees with.",
        "exampleEn": "According to the schedule, the meeting starts at two o'clock.",
        "exampleTh": "ตามตารางเวลา การประชุมจะเริ่มตอนบ่ายสองโมง",
        "synonyms": ["as stated by", "as per", "in line with"]
    },
    "v-oxf-0017": {
        "th": "บัญชี (ธนาคาร/ผู้ใช้), รายงาน",
        "definition": "An arrangement with a bank to keep your money there; a registered user profile or a report of an event.",
        "synonyms": ["record", "report", "statement"]
    },
    "v-oxf-0024": {
        "th": "ข้าม, ไปอีกฝั่งหนึ่ง",
        "definition": "From one side to the other of something with clear limits, such as a street, river, or room.",
        "synonyms": ["over", "from side to side", "athwart"]
    },
    "v-oxf-0025": {
        "th": "กระทำ, แสดง (ละคร/ภาพยนตร์)",
        "definition": "To take action or do something; to perform a role in a play, film, or television show.",
        "synonyms": ["perform", "behave", "do"]
    },
    "v-oxf-0026": {
        "th": "การกระทำ, การลงมือทำ",
        "definition": "The fact or process of doing something, typically to achieve an aim.",
        "synonyms": ["act", "deed", "measure"]
    },
    "v-oxf-0027": {
        "th": "กระฉับกระเฉง, ซึ่งทำงานอยู่",
        "definition": "Engaging or ready to engage in physical or mental pursuits; working or operating.",
        "synonyms": ["energetic", "lively", "dynamic"]
    },
    "v-oxf-0028": {
        "th": "กิจกรรม, การกระทำ",
        "definition": "Something that a person or group does or has done, especially for interest or pleasure.",
        "synonyms": ["pursuit", "pastime", "action"]
    },
    "v-oxf-0029": {
        "th": "นักแสดง, นักแสดงชาย",
        "definition": "A person whose profession is acting on the stage, in movies, or on television.",
        "synonyms": ["performer", "player", "thespian"]
    },
    "v-oxf-0030": {
        "th": "นักแสดงหญิง",
        "definition": "A woman whose profession is acting on the stage, in movies, or on television.",
        "synonyms": ["female actor", "leading lady", "performer"]
    },
    "v-oxf-0031": {
        "th": "ที่แท้จริง, ตามความเป็นจริง",
        "definition": "Existing in fact; real and exact as opposed to imagined or estimated.",
        "synonyms": ["real", "genuine", "authentic"]
    },
    "v-oxf-0033": {
        "th": "โฆษณา (คำย่อของ advertisement)",
        "definition": "A public notice or commercial announcement promoting a product, service, or event; an advertisement.",
        "exampleEn": "We saw an ad for the new smartphone on television.",
        "exampleTh": "พวกเราเห็นโฆษณาสมาร์ตโฟนรุ่นใหม่ทางโทรทัศน์",
        "synonyms": ["advertisement", "commercial", "notice"]
    },
    "v-oxf-0035": {
        "th": "เพิ่ม, บวก, เติม",
        "definition": "To put something together with something else so as to increase the size, number, or amount.",
        "synonyms": ["include", "append", "combine"]
    },
    "v-oxf-0036": {
        "th": "การเพิ่ม, สิ่งที่เพิ่มเติม, นอกจากนี้",
        "definition": "The action or process of adding something to something else; a person or thing added.",
        "synonyms": ["supplement", "inclusion", "expansion"]
    },
    "v-oxf-0038": {
        "pos": "n., v.",
        "th": "ที่อยู่ / จัดการปัญหา",
        "definition": "The particulars of the place where someone lives or an organization is situated; to deal with a matter or problem.",
        "synonyms": ["location", "residence", "tackle"]
    },
    "v-oxf-0039": {
        "th": "การบริหารจัดการ, คณะผู้บริหาร",
        "definition": "The process or activity of running a business, organization, or government.",
        "synonyms": ["management", "governance", "direction"]
    },
    "v-oxf-0042": {
        "th": "รับเลี้ยงเป็นลูกบุญธรรม / นำมาใช้",
        "definition": "To legally take another's child and bring it up as one's own; to choose to take up or follow an idea or method.",
        "synonyms": ["foster", "embrace", "take on"]
    },
    "v-oxf-0043": {
        "th": "ผู้ใหญ่, ที่โตเต็มวัย",
        "definition": "A person who is fully grown or developed and has reached the age of majority.",
        "synonyms": ["grown-up", "mature person"]
    },
    "v-oxf-0044": {
        "th": "ก้าวหน้า, ความก้าวหน้า, ล่วงหน้า",
        "definition": "To move forward in a purposeful way; to make progress or develop.",
        "synonyms": ["progress", "proceed", "develop"]
    },
    "v-oxf-0045": {
        "th": "ระดับสูง, ขั้นสูง, ก้าวหน้า",
        "definition": "Far on or ahead in development, complexity, or progress.",
        "synonyms": ["high-level", "sophisticated", "progressive"]
    },
    "v-oxf-0046": {
        "th": "ข้อได้เปรียบ, ประโยชน์",
        "definition": "A condition or circumstance that puts one in a favorable or superior position.",
        "synonyms": ["benefit", "edge", "asset"]
    },
    "v-oxf-0048": {
        "th": "โฆษณา, ประชาสัมพันธ์",
        "definition": "To describe or draw attention to a product, service, or event in a public medium in order to promote sales.",
        "synonyms": ["promote", "publicize", "market"]
    },
    "v-oxf-0050": {
        "th": "การโฆษณา, อุตสาหกรรมโฆษณา",
        "definition": "The activity or profession of producing advertisements for commercial products or services.",
        "synonyms": ["marketing", "promotion", "publicity"]
    },
    "v-oxf-0052": {
        "th": "แนะนำ, ให้คำปรึกษา",
        "definition": "To offer suggestions about the best course of action to someone.",
        "synonyms": ["counsel", "recommend", "guide"]
    },
    "v-oxf-0053": {
        "th": "กิจการ, ธุระ, เรื่องราว",
        "definition": "An event or sequence of events of a specified kind; public or political business and matters.",
        "synonyms": ["matter", "business", "concern"]
    },
    "v-oxf-0054": {
        "th": "ส่งผลกระทบ, มีผลต่อ",
        "definition": "To have an effect on; to make a difference to someone or something.",
        "synonyms": ["influence", "impact", "alter"]
    },
    "v-oxf-0055": {
        "th": "มีกำลังซื้อ, มีเงินหรือเวลาพอที่จะทำได้",
        "definition": "To have enough money, time, or resources to be able to buy or do something.",
        "synonyms": ["pay for", "bear the cost of", "manage"]
    },
    "v-oxf-0057": {
        "th": "หลังจาก, ถัดจาก, ข้างหลัง",
        "definition": "In the time following an event or another period of time; behind or later than.",
        "synonyms": ["following", "subsequent to", "behind"]
    },
    "v-oxf-0060": {
        "th": "อีกครั้ง, อีกที",
        "definition": "Another time; once more.",
        "synonyms": ["once more", "anew", "afresh"]
    },
    "v-oxf-0061": {
        "th": "ต่อต้าน, ปะทะกับ, พิงกับ",
        "definition": "In opposition to; in contact with and supported by a surface.",
        "synonyms": ["opposed to", "versus", "touching"]
    },
    "v-oxf-0062": {
        "th": "อายุ, ยุคสมัย",
        "definition": "The length of time that a person has lived or a thing has existed; a distinct period of history.",
        "synonyms": ["lifetime", "era", "period"]
    },
    "v-oxf-0063": {
        "th": "หน่วยงาน, บริษัทตัวแทน (เอเจนซี่)",
        "definition": "A business or organization established to provide a particular service, or a government department.",
        "synonyms": ["organization", "bureau", "firm"]
    },
    "v-oxf-0065": {
        "th": "ตัวแทน, นายหน้า, เจ้าหน้าที่",
        "definition": "A person who acts on behalf of another person, group, or company.",
        "synonyms": ["representative", "broker", "deputy"]
    },
    "v-oxf-0066": {
        "th": "ก้าวร้าว, ดุดัน, รุกหนัก",
        "definition": "Ready or likely to attack or confront; behaving in an angry, forceful, or determined way.",
        "synonyms": ["hostile", "belligerent", "forceful"]
    },
    "v-oxf-0070": {
        "th": "อ๋อ, อา (คำอุทานแสดงความเข้าใจ ประหลาดใจ หรือพอใจ)",
        "definition": "An exclamation used to express surprise, realization, pleasure, or sympathy.",
        "synonyms": ["oh", "aha"]
    },
    "v-oxf-0072": {
        "th": "ความช่วยเหลือ / ช่วยเหลือ",
        "definition": "Help, typically of a practical or financial nature; to help or support someone.",
        "synonyms": ["help", "assistance", "relief"]
    },
    "v-oxf-0073": {
        "th": "เล็งเป้าหมาย, มุ่งหมาย, เป้าหมาย",
        "definition": "To point or direct a weapon or camera at a target; to have the intention of achieving a goal.",
        "synonyms": ["target", "point", "strive"]
    },
    "v-oxf-0075": {
        "th": "อากาศยาน, เครื่องบิน",
        "definition": "An airplane, helicopter, or other machine capable of flight.",
        "synonyms": ["airplane", "plane", "jet"]
    },
    "v-oxf-0076": {
        "th": "สายการบิน",
        "definition": "A company that provides regular flights for passengers or cargo.",
        "synonyms": ["carrier", "airways", "aviation company"]
    },
    "v-oxf-0078": {
        "th": "สัญญาณเตือนภัย, นาฬิกาปลุก, ความตกใจกลัว",
        "definition": "A warning sound or device that alerts people to danger or wakes them up.",
        "synonyms": ["siren", "alert", "warning"]
    },
    "v-oxf-0079": {
        "th": "อัลบั้มเพลง, อัลบั้มรูปภาพ",
        "definition": "A collection of musical recordings issued as a single item, or a blank book for keeping photographs.",
        "synonyms": ["record", "collection", "compilation"]
    },
    "v-oxf-0080": {
        "th": "เครื่องดื่มแอลกอฮอล์, สุรา, แอลกอฮอล์",
        "definition": "Drinks such as beer, wine, and spirits that can make people drunk; a colorless flammable liquid.",
        "synonyms": ["liquor", "spirits", "intoxicant"]
    },
    "v-oxf-0081": {
        "th": "ที่มีส่วนผสมของแอลกอฮอล์, ที่ติดสุรา",
        "definition": "Containing alcohol, or relating to beverages that contain alcohol.",
        "synonyms": ["intoxicating", "fermented", "hard"]
    },
    "v-oxf-0083": {
        "word": "all",
        "pos": "det., pron., adv.",
        "th": "ทั้งหมด, ทุกๆ",
        "definition": "Used to refer to the whole quantity or extent of a particular group or thing.",
        "exampleEn": "All the students passed the final exam.",
        "exampleTh": "นักเรียนทั้งหมดสอบผ่านการสอบปลายภาค",
        "synonyms": ["every", "entire", "whole"]
    },
    "v-oxf-0084": {
        "word": "all right",
        "pos": "adj., adv., exclam.",
        "th": "โอเค, เรียบร้อยดี, ไม่เป็นไร",
        "definition": "Satisfactory or acceptable; safe and well; used to agree to a suggestion.",
        "exampleEn": "Are you feeling all right after the long journey?",
        "exampleTh": "คุณรู้สึกโอเคไหมหลังจากการเดินทางไกล?",
        "synonyms": ["okay", "fine", "satisfactory"]
    },
    "v-oxf-0085": {
        "th": "อนุญาต, ยินยอม",
        "definition": "To give permission for someone to do something, or to let something happen.",
        "synonyms": ["permit", "let", "authorize"]
    },
    "v-oxf-0088": {
        "th": "ไปตามแนว..., ตลอดแนว, ไปข้างหน้า",
        "definition": "Moving in a constant direction on a road, path, or river; from one end to the other.",
        "synonyms": ["beside", "alongside", "down"]
    },
    "v-oxf-0090": {
        "th": "ด้วย, เช่นกัน, นอกจากนี้",
        "definition": "In addition; too; as well.",
        "synonyms": ["too", "as well", "furthermore"]
    },
    "v-oxf-0091": {
        "th": "เปลี่ยนแปลง, แก้ไข, ดัดแปลง",
        "definition": "To change or cause to change in character, composition, or form.",
        "synonyms": ["change", "modify", "adjust"]
    },
    "v-oxf-0093": {
        "th": "แม้ว่า, ทั้งๆ ที่",
        "definition": "In spite of the fact that; even though.",
        "synonyms": ["though", "even though", "while"]
    },
    "v-oxf-0095": {
        "th": "รู้สึกประหลาดใจ, รู้สึกทึ่ง",
        "definition": "Feeling or showing great surprise or wonder; greatly astonished.",
        "synonyms": ["astonished", "astounded", "stunned"]
    },
    "v-oxf-0096": {
        "th": "น่าทึ่ง, น่าอัศจรรย์, ยอดเยี่ยมมาก",
        "definition": "Causing great surprise or wonder; astonishing or very impressive.",
        "synonyms": ["astonishing", "incredible", "wonderful"]
    },
    "v-oxf-0098": {
        "th": "ท่ามกลาง, ในหมู่...",
        "definition": "Situated more or less centrally in relation to several other things; in the middle of or surrounded by.",
        "synonyms": ["amid", "amongst", "surrounded by"]
    },
    "v-oxf-0099": {
        "th": "จำนวน, ปริมาณ",
        "definition": "A quantity of something, especially the total of a thing or things in number, size, or value.",
        "synonyms": ["quantity", "total", "volume"]
    },

    # === ช่วงที่ 2: v-oxf-0101 ถึง v-oxf-0200 ===
    "v-oxf-0102": {
        "th": "โบราณ, เก่าแก่มาก",
        "definition": "Belonging to the very distant past and no longer in existence; very old.",
        "synonyms": ["antique", "archaic", "prehistoric"]
    },
    "v-oxf-0103": {
        "th": "และ, กับ",
        "definition": "Used to connect words of the same part of speech, clauses, or sentences that are to be taken jointly.",
        "synonyms": ["plus", "along with", "as well as"]
    },
    "v-oxf-0106": {
        "th": "โกรธ, โมโห",
        "definition": "Feeling or showing strong annoyance, displeasure, or hostility.",
        "synonyms": ["furious", "mad", "irate"]
    },
    "v-oxf-0107": {
        "th": "สัตว์",
        "definition": "A living organism that feeds on organic matter and typically has specialized sense organs and nervous system.",
        "synonyms": ["creature", "beast", "fauna"]
    },
    "v-oxf-0108": {
        "th": "ข้อเท้า",
        "definition": "The joint connecting the foot with the leg.",
        "synonyms": ["tarsus", "ankle joint"]
    },
    "v-oxf-0110": {
        "th": "ประกาศ, แจ้งให้ทราบอย่างเป็นทางการ",
        "definition": "To make a public and typically formal declaration about a fact, occurrence, or intention.",
        "synonyms": ["declare", "proclaim", "broadcast"]
    },
    "v-oxf-0113": {
        "th": "รู้สึกหงุดหงิด, รู้สึกรำคาญใจ",
        "definition": "Slightly angry; irritated by something unpleasant.",
        "synonyms": ["irritated", "bothered", "frustrated"]
    },
    "v-oxf-0115": {
        "th": "ประจำปี, ปีละครั้ง",
        "definition": "Occurring once every year.",
        "synonyms": ["yearly", "once-a-year"]
    },
    "v-oxf-0116": {
        "th": "อีกอันหนึ่ง, อื่นๆ",
        "definition": "Used to refer to an additional person or thing of the same type as one already mentioned, or a different one.",
        "synonyms": ["one more", "additional", "different"]
    },
    "v-oxf-0117": {
        "th": "คำตอบ / ตอบ",
        "definition": "A thing said, written, or done to deal with or as a reaction to a question, statement, or situation.",
        "synonyms": ["reply", "response", "solution"]
    },
    "v-oxf-0118": {
        "th": "รู้สึกวิตกกังวล, กระวนกระวายใจ",
        "definition": "Experiencing worry, unease, or nervousness, typically about an imminent event or something with an uncertain outcome.",
        "synonyms": ["worried", "nervous", "apprehensive"]
    },
    "v-oxf-0120": {
        "th": "ใครก็ได้, มีใครบ้างไหม",
        "definition": "Anyone; any person at all.",
        "synonyms": ["anyone", "any person"]
    },
    "v-oxf-0121": {
        "th": "อีกต่อไป (ใช้ในประโยคปฏิเสธหรือคำถาม)",
        "definition": "To any further extent; any longer.",
        "synonyms": ["any longer", "no longer"]
    },
    "v-oxf-0122": {
        "th": "ใครก็ได้, ใครก็ตาม",
        "definition": "Any person or any people; used in questions and negative sentences.",
        "synonyms": ["anybody", "any person"]
    },
    "v-oxf-0123": {
        "th": "อะไรก็ได้, สิ่งใดก็ตาม",
        "definition": "Used to refer to a thing, no matter what, especially in questions and negative clauses.",
        "synonyms": ["whatever", "any object"]
    },
    "v-oxf-0124": {
        "th": "อย่างไรก็ตาม, ยังไงซะ",
        "definition": "Used to confirm or support a point or idea just mentioned; regardless of other considerations.",
        "synonyms": ["anyhow", "nevertheless", "regardless"]
    },
    "v-oxf-0125": {
        "th": "ที่ไหนก็ได้, ไม่ว่าที่ใด",
        "definition": "In or to any place.",
        "synonyms": ["anyplace", "wherever"]
    },
    "v-oxf-0127": {
        "th": "อพาร์ตเมนต์, ห้องชุดพักอาศัย",
        "definition": "A suite of rooms forming one residence, typically in a building containing a number of these.",
        "synonyms": ["flat", "condo", "unit"]
    },
    "v-oxf-0129": {
        "th": "แอปพลิเคชัน, แอป",
        "definition": "An application, especially as downloaded by a user to a mobile device or computer.",
        "synonyms": ["application", "software", "program"]
    },
    "v-oxf-0131": {
        "th": "ดูเหมือนว่า..., เท่าที่ทราบมา...",
        "definition": "As far as one knows or can see; according to what people say.",
        "synonyms": ["seemingly", "evidently", "ostensibly"]
    },
    "v-oxf-0132": {
        "th": "ดึงดูดใจ, น่าสนใจ, ร้องขอ",
        "definition": "To be attractive or interesting to someone; to make a serious or urgent request.",
        "synonyms": ["attract", "interest", "plead"]
    },
    "v-oxf-0133": {
        "th": "ปรากฏขึ้น, ดูเหมือนว่า",
        "definition": "To come into sight; to become visible or noticeable, or to seem to be.",
        "synonyms": ["emerge", "show up", "seem"]
    },
    "v-oxf-0136": {
        "th": "ใบสมัคร, การสมัคร, แอปพลิเคชัน/การประยุกต์ใช้",
        "definition": "A formal request to an authority for a job, admission, or permission; a computer software program.",
        "synonyms": ["request", "submission", "program"]
    },
    "v-oxf-0137": {
        "th": "สมัคร (งาน/เรียน), นำมาประยุกต์ใช้, ทา",
        "definition": "To make a formal application or request for a job or place; to put to practical use.",
        "synonyms": ["request", "utilize", "employ"]
    },
    "v-oxf-0138": {
        "th": "การนัดหมาย, การแต่งตั้ง",
        "definition": "An arrangement to meet someone at a particular time and place.",
        "synonyms": ["meeting", "consultation", "booking"]
    },
    "v-oxf-0142": {
        "th": "การอนุมัติ, การเห็นชอบ",
        "definition": "Official permission or agreement for a plan, request, or action.",
        "synonyms": ["consent", "authorization", "endorsement"]
    },
    "v-oxf-0144": {
        "th": "โดยประมาณ, ราวๆ",
        "definition": "Used to show that something is almost, but not completely, accurate or exact; roughly.",
        "synonyms": ["roughly", "about", "around"]
    },
    "v-oxf-0146": {
        "th": "สถาปนิก",
        "definition": "A person who designs buildings and advises in their construction.",
        "synonyms": ["designer", "planner", "builder"]
    },
    "v-oxf-0149": {
        "th": "โต้เถียง, ทะเลาะ, ให้เหตุผล",
        "definition": "To exchange or express diverging or opposite views, typically in a heated or angry way.",
        "synonyms": ["quarrel", "dispute", "debate"]
    },
    "v-oxf-0150": {
        "th": "การโต้เถียง, การทะเลาะ, ข้อถกเถียง",
        "definition": "An angry disagreement between two or more people, or a set of reasons given in support of an idea.",
        "synonyms": ["dispute", "quarrel", "debate"]
    },
    "v-oxf-0152": {
        "th": "แขน",
        "definition": "Each of the two upper limbs of the human body from the shoulder to the hand.",
        "synonyms": ["upper limb", "appendage"]
    },
    "v-oxf-0153": {
        "th": "ที่ติดอาวุธ, ที่มีอาวุธ",
        "definition": "Equipped with or carrying a firearm or other weapon.",
        "synonyms": ["weaponed", "equipped", "heavily armed"]
    },
    "v-oxf-0155": {
        "th": "กองทัพบก, กองทัพ",
        "definition": "An organized military force equipped for fighting on land.",
        "synonyms": ["military", "armed forces", "troops"]
    },
    "v-oxf-0157": {
        "th": "จัดเรียง, จัดเตรียม, นัดหมาย",
        "definition": "To put things in a neat, attractive, or required order; to organize or make plans for an event.",
        "synonyms": ["organize", "prepare", "schedule"]
    },
    "v-oxf-0159": {
        "th": "จับกุม, การจับกุมของตำรวจ",
        "definition": "To seize someone by legal authority and take them into custody.",
        "synonyms": ["detain", "apprehend", "capture"]
    },
    "v-oxf-0160": {
        "th": "การมาถึง",
        "definition": "The action or process of arriving at a place.",
        "synonyms": ["coming", "appearance", "landing"]
    },
    "v-oxf-0162": {
        "th": "ศิลปะ, งานศิลปะ",
        "definition": "The expression or application of human creative skill and imagination, typically in a visual form such as painting or sculpture.",
        "synonyms": ["artwork", "fine art", "craft"]
    },
    "v-oxf-0163": {
        "th": "บทความ, สิ่งของ, คำนำหน้านาม",
        "definition": "A piece of writing included with others in a newspaper, magazine, or website; a particular item or object.",
        "synonyms": ["essay", "report", "item"]
    },
    "v-oxf-0164": {
        "th": "เทียม, สังเคราะห์, ประดิษฐ์ขึ้น",
        "definition": "Made or produced by human beings rather than occurring naturally, especially as a copy of something natural.",
        "exampleEn": "Artificial intelligence is advancing rapidly across every industry.",
        "exampleTh": "ปัญญาประดิษฐ์กำลังก้าวหน้าอย่างรวดเร็วในทุกอุตสาหกรรม",
        "synonyms": ["synthetic", "man-made", "simulated"]
    },
    "v-oxf-0165": {
        "th": "ศิลปิน, จิตรกร",
        "definition": "A person who creates paintings, drawings, sculptures, or other works of art.",
        "synonyms": ["painter", "creator", "sculptor"]
    },
    "v-oxf-0167": {
        "pos": "prep., adv., conj.",
        "th": "ในฐานะที่เป็น, เช่นเดียวกับ, ขณะที่",
        "definition": "Used to refer to the function or role that someone or something has; to the same degree or while.",
        "exampleEn": "She works as a software engineer at a tech company.",
        "exampleTh": "เธอทำงานในฐานะวิศวกรซอฟต์แวร์ที่บริษัทเทคโนโลยี",
        "synonyms": ["in the role of", "like", "while"]
    },
    "v-oxf-0169": {
        "th": "ไปด้านข้าง, แยกไว้ต่างหาก",
        "definition": "To or on one side; out of the way or saved for a future purpose.",
        "synonyms": ["to one side", "apart", "separately"]
    },
    "v-oxf-0170": {
        "th": "ถาม, ขอร้อง, ขอ",
        "definition": "To say something in order to obtain an answer or some information; to request something.",
        "synonyms": ["inquire", "question", "request"]
    },
    "v-oxf-0171": {
        "th": "ที่กำลังนอนหลับ, หลับอยู่",
        "definition": "In a state of sleep; not awake.",
        "synonyms": ["sleeping", "slumbering", "dozing"]
    },
    "v-oxf-0172": {
        "th": "แง่มุม, ด้าน (ของปัญหาหรือเรื่องราว)",
        "definition": "A particular part or feature of a situation, idea, or problem.",
        "synonyms": ["facet", "feature", "dimension"]
    },
    "v-oxf-0176": {
        "th": "ช่วยเหลือ, สนับสนุน",
        "definition": "To help someone, typically by doing a share of the work.",
        "synonyms": ["help", "aid", "support"]
    },
    "v-oxf-0178": {
        "th": "เชื่อมโยงความคิด, คบค้าสมาคม",
        "definition": "To connect someone or something with something else in one's mind.",
        "synonyms": ["connect", "link", "relate"]
    },
    "v-oxf-0179": {
        "th": "ที่เกี่ยวข้องกัน, ที่เชื่อมโยงกัน",
        "definition": "Connected with something else.",
        "synonyms": ["related", "linked", "connected"]
    },
    "v-oxf-0180": {
        "th": "สมาคม, องค์กร, ความเชื่อมโยง",
        "definition": "A group of people organized for a joint purpose; a connection or cooperative link between people or organizations.",
        "synonyms": ["organization", "society", "alliance"]
    },
    "v-oxf-0182": {
        "word": "at",
        "pos": "prep.",
        "th": "ที่, ณ (สถานที่), เวลา...",
        "definition": "Expressing location or arrival in a particular place or position, or the time when an event takes place.",
        "exampleEn": "We will meet at the office tomorrow morning.",
        "exampleTh": "พวกเราจะพบกันที่สำนักงานในวันพรุ่งนี้เช้า",
        "synonyms": ["in", "near", "by"]
    },
    "v-oxf-0184": {
        "th": "ชั้นบรรยากาศโลก, บรรยากาศรอบตัว",
        "definition": "The envelope of gases surrounding the earth or another planet; the pervading tone or mood of a place.",
        "synonyms": ["ambiance", "environment", "air"]
    },
    "v-oxf-0185": {
        "th": "แนบ (ไฟล์/เอกสาร), ติดเข้าด้วยกัน",
        "definition": "To fasten, join, or connect something to another thing, such as including a file with an email.",
        "synonyms": ["fasten", "append", "affix"]
    },
    "v-oxf-0188": {
        "th": "เข้าร่วม (ประชุม/งาน/ชั้นเรียน), เข้าฟัง",
        "definition": "To be present at an event, meeting, or function.",
        "synonyms": ["be present at", "go to", "participate in"]
    },
    "v-oxf-0192": {
        "th": "ดึงดูด, ดึงดูดความสนใจ",
        "definition": "To cause someone to have a liking or interest in something; to draw by physical force.",
        "synonyms": ["draw", "appeal to", "captivate"]
    },
    "v-oxf-0193": {
        "th": "สถานที่ท่องเที่ยวที่น่าสนใจ, แรงดึงดูด",
        "definition": "A place that draws visitors by providing something of interest or pleasure; the action or power of evoking interest.",
        "synonyms": ["landmark", "sight", "appeal"]
    },
    "v-oxf-0196": {
        "th": "เดือนสิงหาคม",
        "definition": "The eighth month of the year, in the northern hemisphere usually considered the last month of summer.",
        "synonyms": ["Aug.", "eighth month"]
    },
    "v-oxf-0197": {
        "th": "ป้า, น้าสาว, อาสาว",
        "definition": "The sister of one's father or mother or the wife of one's uncle.",
        "synonyms": ["auntie", "female relative"]
    },
    "v-oxf-0198": {
        "th": "ผู้เขียน, นักประพันธ์",
        "definition": "A writer of a book, article, or report.",
        "synonyms": ["writer", "novelist", "creator"]
    },

    # === ช่วงที่ 3: v-oxf-0201 ถึง v-oxf-0300 ===
    "v-oxf-0201": {
        "th": "โดยอัตโนมัติ",
        "definition": "By itself with little or no direct human control.",
        "synonyms": ["mechanically", "by itself", "autonomously"]
    },
    "v-oxf-0205": {
        "pos": "n., v.",
        "th": "รางวัล / มอบรางวัล",
        "definition": "A prize or other mark of recognition given in honor of an achievement; to give or order the giving of a prize.",
        "synonyms": ["prize", "trophy", "honor"]
    },
    "v-oxf-0207": {
        "th": "ห่างออกไป, จากไป, ไม่อยู่",
        "definition": "To or at a distance from a particular place, person, or thing.",
        "synonyms": ["off", "apart", "absent"]
    },
    "v-oxf-0210": {
        "th": "ทารก, เด็กอ่อน",
        "definition": "A very young child, especially one newly or recently born.",
        "synonyms": ["infant", "newborn", "child"]
    },
    "v-oxf-0211": {
        "pos": "n., adv., adj., v.",
        "th": "ด้านหลัง, ข้างหลัง, กลับคืน, แผ่นหลัง",
        "definition": "The rear surface of the human body from the shoulders to the hips; the side or part of something that is furthest from the front.",
        "synonyms": ["rear", "reverse", "return"]
    },
    "v-oxf-0212": {
        "th": "ฉากหลัง, พื้นหลัง, ประวัติความเป็นมา",
        "definition": "The area or scenery behind the main object of contemplation, or a person's education, experience, and social circumstances.",
        "synonyms": ["backdrop", "setting", "history"]
    },
    "v-oxf-0215": {
        "th": "แย่, ไม่ดี, เลวร้าย",
        "definition": "Of poor quality or a low standard; unpleasant or unwelcome.",
        "synonyms": ["poor", "unpleasant", "inferior"]
    },
    "v-oxf-0216": {
        "th": "อย่างรุนแรง/สาหัส, อย่างแย่",
        "definition": "In an unsatisfactory, inadequate, or unsuccessful way; to a severe or serious degree.",
        "synonyms": ["poorly", "severely", "seriously"]
    },
    "v-oxf-0217": {
        "th": "กระเป๋า, ถุง",
        "definition": "A flexible container with an opening at the top, used for carrying things.",
        "synonyms": ["sack", "pouch", "handbag"]
    },
    "v-oxf-0218": {
        "th": "อบ (ขนม/อาหารด้วยเตาอบ)",
        "definition": "To cook food such as bread, cakes, or potatoes by dry heat in an oven.",
        "synonyms": ["cook in an oven", "roast"]
    },
    "v-oxf-0220": {
        "th": "ลูกบอล",
        "definition": "A solid or hollow spherical or egg-shaped object that is kicked, thrown, or hit in a game.",
        "synonyms": ["sphere", "orb", "globe"]
    },
    "v-oxf-0223": {
        "th": "วงดนตรี, แถบคาด",
        "definition": "A small group of musicians and vocalists who play pop, jazz, or rock music; a flat, thin strip or loop of material.",
        "synonyms": ["music group", "ensemble", "strip"]
    },
    "v-oxf-0224": {
        "word": "bank",
        "pos": "n.",
        "th": "ธนาคาร",
        "definition": "A financial institution licensed to receive deposits, make loans, and provide financial services.",
        "exampleEn": "She went to the bank to deposit her paycheck.",
        "exampleTh": "เธอไปที่ธนาคารเพื่อฝากเช็คเงินเดือนของเธอ",
        "synonyms": ["financial institution", "treasury", "vault"]
    },
    "v-oxf-0225": {
        "word": "bank",
        "pos": "n.",
        "th": "ตลิ่ง, ริมฝั่งแม่น้ำ",
        "definition": "The sloping land alongside a river, stream, or lake.",
        "exampleEn": "We sat on the grassy river bank and watched the boats pass by.",
        "exampleTh": "พวกเรานั่งบนตลิ่งริมแม่น้ำที่มีหญ้าเขียวขจีและมองดูเรือแล่นผ่านไป",
        "synonyms": ["riverbank", "shore", "embankment"]
    },
    "v-oxf-0226": {
        "th": "บาร์เครื่องดื่ม, แท่ง (เช่น แท่งช็อกโกแลต/สบู่), ลูกกรง",
        "definition": "An establishment where alcoholic drinks and refreshments are served; a long rigid piece of wood, metal, or solid material.",
        "synonyms": ["pub", "tavern", "rod"]
    },
    "v-oxf-0228": {
        "th": "ฐานรองรับ, รากฐาน, ฐานทัพ",
        "definition": "The lowest part or edge of something, especially the part on which it rests or is supported.",
        "synonyms": ["foundation", "bottom", "headquarters"]
    },
    "v-oxf-0229": {
        "th": "กีฬาเบสบอล, ลูกเบสบอล",
        "definition": "A ball game played between two teams of nine on a field with a diamond-shaped circuit of four bases.",
        "synonyms": ["ballgame", "hardball"]
    },
    "v-oxf-0230": {
        "th": "มีฐานที่ตั้งอยู่ใน..., อ้างอิงจาก...",
        "definition": "Having a specified place as the center of operations; founded on a particular idea or fact.",
        "synonyms": ["headquartered", "located", "founded"]
    },
    "v-oxf-0231": {
        "th": "พื้นฐาน, ขั้นต้น",
        "definition": "Forming an essential foundation or starting point; fundamental and simple.",
        "synonyms": ["fundamental", "elementary", "essential"]
    },
    "v-oxf-0233": {
        "th": "รากฐาน, พื้นฐาน, เกณฑ์",
        "definition": "The underlying support or foundation for an idea, argument, or process.",
        "synonyms": ["foundation", "grounds", "premise"]
    },
    "v-oxf-0235": {
        "th": "การอาบน้ำ, อ่างอาบน้ำ",
        "definition": "An act of washing the whole body in a large container of water, or the container itself.",
        "synonyms": ["bathtub", "soak", "wash"]
    },
    "v-oxf-0237": {
        "th": "แบตเตอรี่, ถ่านไฟฉาย",
        "definition": "A container consisting of one or more cells, in which chemical energy is converted into electricity and used as a source of power.",
        "synonyms": ["power cell", "accumulator"]
    },
    "v-oxf-0238": {
        "pos": "n., v.",
        "th": "การรบ, สมรภูมิ, การต่อสู้",
        "definition": "A sustained fight between large organized armed forces; a lengthy and difficult conflict or struggle.",
        "synonyms": ["combat", "warfare", "struggle"]
    },
    "v-oxf-0239": {
        "word": "be",
        "pos": "v., auxiliary v.",
        "th": "เป็น, อยู่, คือ",
        "definition": "To exist, occur, or have a specified state, quality, identity, or role.",
        "exampleEn": "Please be ready before the presentation begins.",
        "exampleTh": "โปรดเตรียมตัวให้พร้อมก่อนการนำเสนอจะเริ่มต้นขึ้น",
        "synonyms": ["exist", "remain", "live"]
    },
    "v-oxf-0240": {
        "th": "ชายหาด",
        "definition": "A pebbly or sandy shore, especially by the ocean between high- and low-water marks.",
        "synonyms": ["seashore", "seaside", "coast"]
    },
    "v-oxf-0242": {
        "word": "bear",
        "pos": "v.",
        "th": "อดทน, แบกรับ, ทนทาน",
        "definition": "To endure an ordeal or difficulty; to carry the weight of or accept responsibility for something.",
        "exampleEn": "She could not bear the cold weather any longer.",
        "exampleTh": "เธอไม่สามารถทนต่อสภาพอากาศที่หนาวเย็นได้อีกต่อไป",
        "synonyms": ["endure", "tolerate", "withstand"]
    },
    "v-oxf-0243": {
        "word": "bear",
        "pos": "n.",
        "th": "หมี",
        "definition": "A large, heavy mammal that walks on the soles of its feet, having thick fur and a very short tail.",
        "exampleEn": "We saw a large brown bear in the national park.",
        "exampleTh": "พวกเราเห็นหมีสีน้ำตาลตัวใหญ่ในอุทยานแห่งชาติ",
        "synonyms": ["grizzly", "bruin"]
    },
    "v-oxf-0244": {
        "pos": "v., n.",
        "th": "เอาชนะ, ตี, จังหวะการเต้น",
        "definition": "To defeat someone in a game or other competitive situation; to strike repeatedly.",
        "synonyms": ["defeat", "conquer", "strike"]
    },
    "v-oxf-0246": {
        "th": "ความงาม, ความสวยงาม",
        "definition": "A combination of qualities, such as shape, color, or form, that pleases the aesthetic senses, especially the sight.",
        "synonyms": ["loveliness", "attractiveness", "elegance"]
    },
    "v-oxf-0247": {
        "th": "เพราะว่า, เนื่องจาก",
        "definition": "For the reason that; since.",
        "synonyms": ["since", "as", "for the reason that"]
    },
    "v-oxf-0248": {
        "th": "กลายเป็น",
        "definition": "To begin to be; to grow or turn into a specified state.",
        "synonyms": ["turn into", "grow to be", "come to be"]
    },
    "v-oxf-0249": {
        "th": "เตียงนอน",
        "definition": "A piece of furniture for sleep or rest, typically a framework with a mattress and coverings.",
        "synonyms": ["bunk", "cot", "berth"]
    },
    "v-oxf-0252": {
        "th": "เนื้อวัว",
        "definition": "The flesh of a cow, bull, or ox, used as food.",
        "synonyms": ["steak", "cattle meat"]
    },
    "v-oxf-0256": {
        "th": "เริ่มต้น, เริ่ม",
        "definition": "To perform or undergo the first part of an action or activity; to start.",
        "synonyms": ["start", "commence", "initiate"]
    },
    "v-oxf-0257": {
        "th": "จุดเริ่มต้น, ตอนเริ่มต้น",
        "definition": "The point in time or space at which something starts.",
        "synonyms": ["start", "outset", "commencement"]
    },
    "v-oxf-0258": {
        "th": "ประพฤติตัว, ปฏิบัติตัว",
        "definition": "To act or conduct oneself in a specified way, especially toward others.",
        "synonyms": ["conduct oneself", "act", "comport oneself"]
    },
    "v-oxf-0260": {
        "th": "ข้างหลัง, ด้านหลัง, ล้าหลัง",
        "definition": "At or to the far side of something, typically so as to be hidden by it; in support of or less advanced than.",
        "synonyms": ["at the back of", "beyond", "after"]
    },
    "v-oxf-0261": {
        "th": "การมีชีวิตอยู่, สิ่งมีชีวิต",
        "definition": "Existence; the nature or essence of a person, or a living creature.",
        "synonyms": ["existence", "creature", "entity"]
    },
    "v-oxf-0262": {
        "th": "ความเชื่อ, ความศรัทธา",
        "definition": "An acceptance that a statement is true or that something exists; trust, faith, or confidence in someone or something.",
        "synonyms": ["faith", "conviction", "confidence"]
    },
    "v-oxf-0264": {
        "th": "ระฆัง, กระดิ่ง, กริ่ง",
        "definition": "A hollow metal object, typically cup-shaped, that makes a ringing sound when struck, or an electrical signaling device.",
        "synonyms": ["chime", "buzzer", "ringer"]
    },
    "v-oxf-0265": {
        "th": "เป็นของ... (belong to), เป็นสมาชิกของ",
        "definition": "To be the property of someone; to be a member of a particular group or organization.",
        "synonyms": ["be owned by", "pertain to", "fit in"]
    },
    "v-oxf-0267": {
        "th": "เข็มขัด, สายพาน",
        "definition": "A strip of leather or other material worn around the waist to support clothes or for decoration.",
        "synonyms": ["waistband", "strap", "sash"]
    },
    "v-oxf-0268": {
        "th": "งอ, ดัดโค้ง, โค้ง",
        "definition": "To shape or force something straight into a curve or angle; to incline the body downward from the vertical.",
        "synonyms": ["curve", "flex", "crook"]
    },
    "v-oxf-0270": {
        "th": "คดงอ, โค้งงอ",
        "definition": "Sharply curved or having an angle; no longer straight or flat.",
        "synonyms": ["curved", "crooked", "twisted"]
    },
    "v-oxf-0272": {
        "th": "พนัน, เดิมพัน",
        "definition": "To risk a sum of money or valued item against someone else's on the basis of the outcome of an unpredictable event.",
        "synonyms": ["wager", "gamble", "stake"]
    },
    "v-oxf-0276": {
        "th": "รถจักรยาน",
        "definition": "A vehicle composed of two wheels held in a frame one behind the other, propelled by pedals and steered with handlebars.",
        "synonyms": ["bike", "cycle", "two-wheeler"]
    },
    "v-oxf-0277": {
        "th": "ใหญ่, สำคัญ",
        "definition": "Of considerable size, extent, or intensity; of great importance.",
        "synonyms": ["large", "huge", "sizable"]
    },
    "v-oxf-0278": {
        "th": "จักรยาน, รถมอเตอร์ไซค์",
        "definition": "A bicycle or motorcycle.",
        "synonyms": ["bicycle", "cycle"]
    },
    "v-oxf-0279": {
        "th": "ใบเสร็จ/บิลค่าใช้จ่าย, ธนบัตร, ร่างกฎหมาย",
        "definition": "A printed or written statement of the money owed for goods or services; a piece of paper money or a draft of a proposed law.",
        "synonyms": ["invoice", "banknote", "check"]
    },
    "v-oxf-0281": {
        "th": "วิชาชีววิทยา",
        "definition": "The study of living organisms, divided into many specialized fields that cover their morphology, physiology, and behavior.",
        "synonyms": ["life science", "natural science"]
    },
    "v-oxf-0282": {
        "th": "นก, สัตว์ปีก",
        "definition": "A warm-blooded egg-laying vertebrate distinguished by the possession of feathers, wings, and a beak, and typically able to fly.",
        "synonyms": ["avian", "feathered friend", "fowl"]
    },
    "v-oxf-0285": {
        "th": "นิดหน่อย, เล็กน้อย, ชิ้นส่วนเล็กๆ",
        "definition": "A small piece, part, or quantity of something.",
        "synonyms": ["little", "piece", "fragment"]
    },
    "v-oxf-0286": {
        "th": "กัด, ขบ, รอยกัด",
        "definition": "To use the teeth to cut into or through something.",
        "synonyms": ["nip", "chomp", "chew"]
    },
    "v-oxf-0287": {
        "th": "ขม (รสชาติ), ขมขื่น",
        "definition": "Having a sharp, pungent taste or smell, not sweet; feeling or showing anger, hurt, or resentment.",
        "synonyms": ["unsweetened", "acrid", "resentful"]
    },
    "v-oxf-0289": {
        "th": "ตำหนิ, กล่าวโทษ / ความรับผิด",
        "definition": "To assign responsibility for a fault or wrong to someone.",
        "synonyms": ["accuse", "hold responsible", "fault"]
    },
    "v-oxf-0290": {
        "th": "ว่างเปล่า, ที่เว้นว่างไว้ / ช่องว่าง",
        "definition": "Not written or printed on; empty or showing no expression.",
        "synonyms": ["empty", "unfilled", "unmarked"]
    },
    "v-oxf-0291": {
        "th": "ตาบอด, มองไม่เห็น",
        "definition": "Unable to see because of injury, disease, or a congenital condition.",
        "synonyms": ["sightless", "visually impaired", "unseeing"]
    },
    "v-oxf-0292": {
        "pos": "n., v.",
        "th": "ปิดกั้น, ขัดขวาง / ช่วงตึก, ก้อนเหลี่ยม",
        "definition": "To make the movement or flow in a passage, pipe, or road difficult or impossible; a large solid piece of hard material or a group of buildings.",
        "synonyms": ["obstruct", "barricade", "hinder"]
    },
    "v-oxf-0295": {
        "th": "เลือด, โลหิต",
        "definition": "The red liquid that circulates in the arteries and veins of humans and other vertebrate animals.",
        "synonyms": ["lifeblood", "vital fluid"]
    },
    "v-oxf-0296": {
        "th": "เป่า, พัด (ลม)",
        "definition": "Of wind, to move creating an air current; for a person, to expel air through pursed lips.",
        "synonyms": ["puff", "gust", "exhale"]
    },
    "v-oxf-0297": {
        "th": "สีฟ้า, สีน้ำเงิน",
        "definition": "Of a color intermediate between green and violet, as of the sky or sea on a sunny day.",
        "synonyms": ["azure", "cobalt", "navy"]
    },
    "v-oxf-0298": {
        "pos": "n., v.",
        "th": "กระดาน, คณะกรรมการบริหาร, ขึ้นยานพาหนะ",
        "definition": "A long, thin, flat piece of wood or other hard material; the decision-making group of an organization; to get on a plane, ship, or train.",
        "synonyms": ["panel", "committee", "embark"]
    },
    "v-oxf-0299": {
        "th": "เรือ",
        "definition": "A small vessel for propelled on water by oars, sails, or an engine.",
        "synonyms": ["vessel", "watercraft", "ship"]
    },
    "v-oxf-0300": {
        "th": "ร่างกาย, ลำตัว",
        "definition": "The physical structure, including the bones, flesh, and organs, of a person or an animal.",
        "synonyms": ["physique", "anatomy", "frame"]
    },

    # === ช่วงที่ 4: v-oxf-0301 ถึง v-oxf-0321 ===
    "v-oxf-0301": {
        "th": "ต้ม, เดือด",
        "definition": "To reach or cause to reach the temperature at which a liquid bubbles and turns to vapor; to cook food in boiling water.",
        "synonyms": ["simmer", "seethe", "cook"]
    },
    "v-oxf-0302": {
        "th": "ลูกระเบิด / ทิ้งระเบิด",
        "definition": "A container filled with explosive material designed to explode on impact or by a timer; to attack a place with bombs.",
        "synonyms": ["explosive", "shell", "detonate"]
    },
    "v-oxf-0303": {
        "th": "สายสัมพันธ์, ความผูกพัน, พันธบัตร",
        "definition": "A relationship between people or groups based on shared feelings, interests, or experiences; a financial certificate of debt.",
        "synonyms": ["connection", "tie", "relationship"]
    },
    "v-oxf-0304": {
        "th": "กระดูก",
        "definition": "Any of the pieces of hard whitish tissue making up the skeleton in humans and other vertebrates.",
        "synonyms": ["skeleton", "os"]
    },
    "v-oxf-0305": {
        "pos": "n., v.",
        "th": "หนังสือ / จอง (ตั๋ว/ที่พัก)",
        "definition": "A written or printed work consisting of pages glued or sewn together along one side and bound in covers; to reserve accommodations or tickets.",
        "synonyms": ["volume", "publication", "reserve"]
    },
    "v-oxf-0307": {
        "th": "พรมแดน, ชายแดน, ขอบ",
        "definition": "A line separating two political or geographical areas, especially countries; the edge or boundary of something.",
        "synonyms": ["frontier", "boundary", "edge"]
    },
    "v-oxf-0308": {
        "th": "รู้สึกเบื่อ",
        "definition": "Feeling weary and impatient because one is unoccupied or lacks interest in one's current activity.",
        "synonyms": ["uninterested", "weary", "fed up"]
    },
    "v-oxf-0310": {
        "th": "เกิด, กำเนิด, โดยกำเนิด",
        "definition": "Existing as a result of birth; brought into life.",
        "synonyms": ["delivered", "birthed", "native"]
    },
    "v-oxf-0311": {
        "th": "ขอยืม",
        "definition": "To take and use something that belongs to someone else with the intention of returning it.",
        "synonyms": ["take on loan", "use temporarily"]
    },
    "v-oxf-0312": {
        "th": "เจ้านาย, หัวหน้า",
        "definition": "A person who is in charge of a worker, a group, or an organization.",
        "synonyms": ["manager", "supervisor", "employer"]
    },
    "v-oxf-0314": {
        "th": "รบกวน, กวนใจ",
        "definition": "To take the trouble to do something; to interrupt, worry, or annoy someone.",
        "synonyms": ["disturb", "trouble", "annoy"]
    },
    "v-oxf-0316": {
        "th": "ด้านล่างสุด, ก้น (ภาชนะ/ทะเล), ต่ำสุด",
        "definition": "The lowest point or part of something.",
        "synonyms": ["base", "underside", "floor"]
    },
    "v-oxf-0317": {
        "th": "ชาม, ถ้วย",
        "definition": "A round, deep dish or basin used for food or liquid.",
        "synonyms": ["basin", "dish", "vessel"]
    },
    "v-oxf-0318": {
        "th": "กล่อง, ลัง",
        "definition": "A container with a flat base and sides, typically square or rectangular and having a lid.",
        "synonyms": ["carton", "crate", "case"]
    },
    "v-oxf-0319": {
        "th": "เด็กผู้ชาย",
        "definition": "A male child or youth.",
        "synonyms": ["lad", "youth", "youngster"]
    },
    "v-oxf-0321": {
        "th": "สมอง, สติปัญญา",
        "definition": "An organ of soft nervous tissue contained in the skull of vertebrates, functioning as the coordinating center of sensation and intellect.",
        "synonyms": ["cerebrum", "mind", "intellect"]
    },

    # === Duplicate / Homograph / Multi-word Entries Across v-oxf-0322 to v-oxf-3000 ===
    "v-oxf-0374": {
        "word": "can",
        "pos": "modal v.",
        "th": "สามารถ, ทำได้",
        "definition": "To be able to; to have the ability, opportunity, or permission to do something.",
        "exampleEn": "She can speak three languages fluently.",
        "exampleTh": "เธอสามารถพูดได้สามภาษาอย่างคล่องแคล่ว",
        "synonyms": ["be able to", "know how to"]
    },
    "v-oxf-0375": {
        "word": "can",
        "pos": "n.",
        "th": "กระป๋อง",
        "definition": "A cylindrical metal container for storing food, drink, or paint.",
        "exampleEn": "He opened a can of soup for lunch.",
        "exampleTh": "เขาเปิดซุปกระป๋องสำหรับมื้อกลางวัน",
        "synonyms": ["tin", "canister", "container"]
    },
    "v-oxf-0474": {
        "word": "close",
        "pos": "v.",
        "th": "ปิด",
        "definition": "To move a door, window, or lid so as to cover an opening; to bring or come to an end.",
        "exampleEn": "Please close the window before you leave the room.",
        "exampleTh": "กรุณาปิดหน้าต่างก่อนที่คุณจะออกจากห้อง",
        "synonyms": ["shut", "fasten", "seal"]
    },
    "v-oxf-0475": {
        "word": "close",
        "pos": "adj., adv.",
        "th": "ใกล้, ใกล้ชิด, สนิทสนม",
        "definition": "A short distance away or apart in space or time; having strong relationships and shared feelings.",
        "exampleEn": "The hotel is very close to the train station.",
        "exampleTh": "โรงแรมอยู่ใกล้กับสถานีรถไฟมาก",
        "synonyms": ["near", "nearby", "intimate"]
    },
    "v-oxf-0499": {
        "word": "colored",
        "pos": "adj.",
        "th": "ที่มีสีสัน, ที่ระบายสี",
        "definition": "Having a color or colors, especially as opposed to being black and white or transparent.",
        "exampleEn": "The designer used brightly colored graphics for the banner.",
        "exampleTh": "นักออกแบบใช้กราฟิกที่มีสีสันสดใสสำหรับแบนเนอร์",
        "synonyms": ["colorful", "tinted", "dyed"]
    },
    "v-oxf-0550": {
        "th": "รู้สึกสับสน, งุนงง",
        "definition": "Unable to think clearly; bewildered or perplexed.",
        "synonyms": ["bewildered", "puzzled", "perplexed"]
    },
    "v-oxf-0551": {
        "th": "น่าสับสน, ชวนให้งง",
        "definition": "Bewildering or perplexing; difficult to understand clearly.",
        "synonyms": ["puzzling", "baffling", "unclear"]
    },
    "v-oxf-0582": {
        "th": "การมีส่วนร่วม, การสนับสนุน, เงินบริจาค",
        "definition": "Something given, done, or said that helps to achieve a result or support a cause.",
        "synonyms": ["input", "donation", "support"]
    },
    "v-oxf-0709": {
        "th": "รู้สึกซึมเศร้า, หดหู่ใจ",
        "definition": "In a state of general unhappiness or despondency.",
        "synonyms": ["sad", "dejected", "downhearted"]
    },
    "v-oxf-0710": {
        "th": "น่าหดหู่ใจ, ที่ทำให้เศร้า",
        "definition": "Causing a feeling of miserable dejection or sadness.",
        "synonyms": ["gloomy", "bleak", "disheartening"]
    },
    "v-oxf-0758": {
        "th": "รู้สึกผิดหวัง, เสียใจ",
        "definition": "Sad or displeased because someone or something has failed to fulfill one's hopes or expectations.",
        "synonyms": ["let down", "disheartened", "dissatisfied"]
    },
    "v-oxf-0759": {
        "th": "น่าผิดหวัง",
        "definition": "Failing to fulfill someone's hopes or expectations.",
        "synonyms": ["unsatisfactory", "underwhelming", "displeasing"]
    },
    "v-oxf-0867": {
        "th": "รู้สึกเขินอาย, รู้สึกอับอาย",
        "definition": "Feeling or showing awkwardness, self-consciousness, or shame.",
        "synonyms": ["ashamed", "mortified", "self-conscious"]
    },
    "v-oxf-0868": {
        "th": "น่าอับอาย, น่าขายหน้า",
        "definition": "Causing a feeling of self-consciousness, shame, or awkwardness.",
        "synonyms": ["humiliating", "awkward", "shameful"]
    },
    "v-oxf-0945": {
        "th": "รู้สึกตื่นเต้น, ดีใจ",
        "definition": "Very enthusiastic and eager about something.",
        "synonyms": ["thrilled", "enthusiastic", "eager"]
    },
    "v-oxf-0947": {
        "th": "น่าตื่นเต้น, เร้าใจ",
        "definition": "Causing great enthusiasm and eagerness.",
        "synonyms": ["thrilling", "exhilarating", "stimulating"]
    },
    "v-oxf-1117": {
        "th": "รู้สึกตกใจกลัว, หวาดกลัว",
        "definition": "Feeling fear or anxiety; afraid.",
        "synonyms": ["scared", "terrified", "afraid"]
    },
    "v-oxf-1118": {
        "th": "น่ากลัว, น่าตกใจ",
        "definition": "Making someone afraid or anxious; terrifying.",
        "synonyms": ["scary", "terrifying", "alarming"]
    },
    "v-oxf-1229": {
        "word": "have",
        "pos": "v., auxiliary v.",
        "th": "มี, รับประทาน",
        "definition": "To possess, own, or hold; used with a past participle to form perfect tenses.",
        "exampleEn": "Do you have time for a quick coffee this afternoon?",
        "exampleTh": "บ่ายนี้คุณมีเวลาดื่มกาแฟสักครู่ไหม?",
        "synonyms": ["possess", "own", "hold"]
    },
    "v-oxf-1230": {
        "word": "have to",
        "pos": "modal v.",
        "th": "ต้อง, จำเป็นต้อง",
        "definition": "Used to express obligation, necessity, or certainty that something must be done.",
        "exampleEn": "I have to finish this report before Friday.",
        "exampleTh": "ฉันต้องทำรายงานฉบับนี้ให้เสร็จก่อนวันศุกร์",
        "synonyms": ["must", "need to", "be required to"]
    },
    "v-oxf-1312": {
        "word": "ice",
        "pos": "n.",
        "th": "น้ำแข็ง",
        "definition": "Frozen water, a brittle transparent crystalline solid.",
        "exampleEn": "Would you like some ice in your water?",
        "exampleTh": "คุณต้องการน้ำแข็งในน้ำของคุณไหม?",
        "synonyms": ["frozen water", "frost"]
    },
    "v-oxf-1313": {
        "word": "ice cream",
        "pos": "n.",
        "th": "ไอศกรีม",
        "definition": "A soft frozen food made with sweetened and flavored milk fat.",
        "exampleEn": "We bought chocolate ice cream for dessert.",
        "exampleTh": "พวกเราซื้อไอศกรีมรสช็อกโกแลตเป็นของหวาน",
        "synonyms": ["gelato", "sundae", "frozen dessert"]
    },
    "v-oxf-1402": {
        "th": "รู้สึกสนใจ, อยากรู้",
        "definition": "Showing curiosity or concern about something or someone; having a feeling of interest.",
        "synonyms": ["curious", "attentive", "keen"]
    },
    "v-oxf-1403": {
        "th": "น่าสนใจ",
        "definition": "Arousing curiosity or interest; holding or catching the attention.",
        "synonyms": ["fascinating", "engaging", "compelling"]
    },
    "v-oxf-1426": {
        "word": "IT",
        "pos": "n.",
        "th": "เทคโนโลยีสารสนเทศ (ไอที)",
        "definition": "Information technology; the study or use of computers and telecommunications to store, retrieve, and send information.",
        "exampleEn": "She works in the IT department at a multinational bank.",
        "exampleTh": "เธอทำงานในแผนกไอทีที่ธนาคารข้ามชาติแห่งหนึ่ง",
        "synonyms": ["information technology", "computing"]
    },
    "v-oxf-1427": {
        "word": "it",
        "pos": "pron.",
        "th": "มัน (สรรพนามแทนสิ่งของ สัตว์ หรือเหตุการณ์)",
        "definition": "Used to refer to a thing, animal, situation, or idea previously mentioned or easily identified.",
        "exampleEn": "I bought a new book and read it over the weekend.",
        "exampleTh": "ฉันซื้อหนังสือเล่มใหม่และอ่านมันในช่วงสุดสัปดาห์",
        "synonyms": ["this", "that", "the thing"]
    },
    "v-oxf-1462": {
        "word": "kind",
        "pos": "n.",
        "th": "ชนิด, ประเภท",
        "definition": "A group of people or things having similar characteristics; a particular type or sort.",
        "exampleEn": "What kind of music do you like to listen to?",
        "exampleTh": "คุณชอบฟังเพลงแนวไหน?",
        "synonyms": ["type", "sort", "variety"]
    },
    "v-oxf-1463": {
        "word": "kind",
        "pos": "adj.",
        "th": "ใจดี, มีเมตตา, กรุณา",
        "definition": "Having or showing a friendly, generous, and considerate nature.",
        "exampleEn": "She is always very kind and helpful to new colleagues.",
        "exampleTh": "เธอใจดีและคอยช่วยเหลือเพื่อนร่วมงานใหม่อยู่เสมอ",
        "synonyms": ["caring", "generous", "considerate"]
    },
    "v-oxf-1486": {
        "word": "last",
        "pos": "det., adv., n.",
        "th": "สุดท้าย, ที่แล้ว, ล่าสุด",
        "definition": "Coming after all others in time or order; most recent.",
        "exampleEn": "We went to Japan on holiday last year.",
        "exampleTh": "พวกเราไปเที่ยวพักผ่อนที่ประเทศญี่ปุ่นเมื่อปีที่แล้ว",
        "synonyms": ["final", "previous", "latest"]
    },
    "v-oxf-1487": {
        "word": "last",
        "pos": "v.",
        "th": "คงอยู่, กินเวลา, ยาวนาน",
        "definition": "To continue for a specified period of time.",
        "exampleEn": "The training session will last for about two hours.",
        "exampleTh": "เซสชันการฝึกอบรมจะใช้เวลาประมาณสองชั่วโมง",
        "synonyms": ["continue", "endure", "persist"]
    },
    "v-oxf-1526": {
        "word": "lie",
        "pos": "v.",
        "th": "นอนลง, เอนกาย, ตั้งอยู่",
        "definition": "To be in or assume a horizontal or resting position on a supporting surface; to be situated in a specified place.",
        "exampleEn": "He likes to lie on the sofa and read after work.",
        "exampleTh": "เขาชอบเอนตัวนอนบนโซฟาและอ่านหนังสือหลังเลิกงาน",
        "synonyms": ["recline", "rest", "be situated"]
    },
    "v-oxf-1527": {
        "word": "lie",
        "pos": "v., n.",
        "th": "โกหก, คำโกหก",
        "definition": "To say something that is not true in order to deceive someone; an intentionally false statement.",
        "exampleEn": "You should never lie to your friends or family.",
        "exampleTh": "คุณไม่ควรโกหกเพื่อนหรือครอบครัวของคุณเด็ดขาด",
        "synonyms": ["fib", "untruth", "deceive"]
    },
    "v-oxf-1531": {
        "word": "light",
        "pos": "n., v.",
        "th": "แสงสว่าง, หลอดไฟ / จุดไฟ",
        "definition": "The natural agent that stimulates sight and makes things visible; a source of illumination such as a lamp.",
        "exampleEn": "Please turn off the light when you leave the room.",
        "exampleTh": "กรุณาปิดไฟเมื่อคุณออกจากห้อง",
        "synonyms": ["illumination", "brightness", "lamp"]
    },
    "v-oxf-1532": {
        "word": "light",
        "pos": "adj.",
        "th": "เบา (น้ำหนักไม่มาก), สีอ่อน",
        "definition": "Of little weight; not heavy, or pale in color.",
        "exampleEn": "This laptop is very light and easy to carry around.",
        "exampleTh": "แล็ปท็อปเครื่องนี้เบามากและพกพาไปไหนมาไหนได้สะดวก",
        "synonyms": ["lightweight", "portable", "pale"]
    },
    "v-oxf-1533": {
        "word": "like",
        "pos": "prep., conj.",
        "th": "เหมือนกับ, เช่น",
        "definition": "Having the same characteristics or qualities as; similar to.",
        "exampleEn": "She looks very much like her mother.",
        "exampleTh": "เธอดูคล้ายกับแม่ของเธอมาก",
        "synonyms": ["similar to", "resembling", "such as"]
    },
    "v-oxf-1534": {
        "word": "like",
        "pos": "v., n.",
        "th": "ชอบ, ถูกใจ",
        "definition": "To find agreeable, enjoyable, or satisfactory.",
        "exampleEn": "I really like working with this team.",
        "exampleTh": "ฉันชอบทำงานร่วมกับทีมนี้มากจริงๆ",
        "synonyms": ["enjoy", "appreciate", "be fond of"]
    },
    "v-oxf-1548": {
        "word": "live",
        "pos": "v.",
        "th": "อาศัยอยู่, มีชีวิตอยู่",
        "definition": "To remain alive; to make one's home in a particular place.",
        "exampleEn": "They live in a quiet neighborhood near the park.",
        "exampleTh": "พวกเขาอาศัยอยู่ในย่านที่เงียบสงบใกล้สวนสาธารณะ",
        "synonyms": ["reside", "dwell", "inhabit"]
    },
    "v-oxf-1549": {
        "word": "live",
        "pos": "adj., adv.",
        "th": "สด (ถ่ายทอดสด/แสดงสด), ที่มีชีวิต",
        "definition": "Not dead; transmitted at the time of occurrence rather than from a recording.",
        "exampleEn": "Millions of fans watched the live broadcast of the concert.",
        "exampleTh": "แฟนๆ หลายล้านคนรับชมการถ่ายทอดสดคอนเสิร์ต",
        "synonyms": ["unrecorded", "in person", "living"]
    },
    "v-oxf-1617": {
        "word": "May",
        "pos": "n.",
        "th": "เดือนพฤษภาคม",
        "definition": "The fifth month of the year, following April and preceding June.",
        "exampleEn": "The new semester begins in May.",
        "exampleTh": "ภาคการศึกษาใหม่จะเริ่มต้นในเดือนพฤษภาคม",
        "synonyms": ["fifth month"]
    },
    "v-oxf-1618": {
        "word": "may",
        "pos": "modal v.",
        "th": "อาจจะ, ขออนุญาต",
        "definition": "Expressing possibility or used to ask for or give permission.",
        "exampleEn": "May I ask you a question about the project?",
        "exampleTh": "ฉันขอถามคำถามเกี่ยวกับโปรเจกต์หน่อยได้ไหม?",
        "synonyms": ["might", "could", "be permitted to"]
    },
    "v-oxf-1656": {
        "word": "mine",
        "pos": "pron.",
        "th": "ของฉัน (สรรพนามแสดงความเป็นเจ้าของ)",
        "definition": "Used to refer to a thing or things belonging to or associated with the speaker.",
        "exampleEn": "That blue umbrella by the door is mine.",
        "exampleTh": "ร่มสีฟ้าตรงข้างประตูคันนั้นเป็นของฉัน",
        "synonyms": ["my own", "belonging to me"]
    },
    "v-oxf-1657": {
        "word": "mine",
        "pos": "n., v.",
        "th": "เหมืองแร่ / ขุดเหมือง",
        "definition": "An excavation in the earth for extracting coal or other minerals.",
        "exampleEn": "His grandfather worked in a coal mine for thirty years.",
        "exampleTh": "คุณปู่ของเขาทำงานในเหมืองถ่านหินเป็นเวลาสามสิบปี",
        "synonyms": ["quarry", "pit", "excavation"]
    },
    "v-oxf-1745": {
        "word": "next",
        "pos": "adj., adv., n.",
        "th": "ถัดไป, ต่อไป, หน้า (เช่น สัปดาห์หน้า)",
        "definition": "Coming immediately after the present one in time, space, or order.",
        "exampleEn": "We are launching the new feature next week.",
        "exampleTh": "พวกเรากำลังจะเปิดตัวฟีเจอร์ใหม่ในสัปดาห์หน้า",
        "synonyms": ["following", "subsequent", "upcoming"]
    },
    "v-oxf-1746": {
        "word": "next to",
        "pos": "prep.",
        "th": "ข้างๆ, ติดกับ, ถัดจาก",
        "definition": "In or into a position immediately beside someone or something.",
        "exampleEn": "The pharmacy is right next to the supermarket.",
        "exampleTh": "ร้านขายยาอยู่ติดกับซูเปอร์มาร์เก็ตพอดี",
        "synonyms": ["beside", "adjacent to", "alongside"]
    },
    "v-oxf-1753": {
        "word": "no",
        "pos": "exclam., det., adv.",
        "th": "ไม่, ไม่มี",
        "definition": "Used to give a negative response; not any.",
        "exampleEn": "There is no milk left in the refrigerator.",
        "exampleTh": "ไม่มีนมเหลืออยู่ในตู้เย็นเลย",
        "synonyms": ["not any", "zero", "nay"]
    },
    "v-oxf-1754": {
        "word": "no one",
        "pos": "pron.",
        "th": "ไม่มีใครเลย",
        "definition": "No person; nobody.",
        "exampleEn": "No one knew the answer to the last question.",
        "exampleTh": "ไม่มีใครรู้คำตอบของคำถามข้อสุดท้ายเลย",
        "synonyms": ["nobody", "not a single person"]
    },
    "v-oxf-1908": {
        "pos": "n., adj., adv.",
        "th": "เปอร์เซ็นต์, ร้อยละ",
        "definition": "One part in every hundred.",
        "synonyms": ["percentage", "proportion", "rate"]
    },
    "v-oxf-2114": {
        "word": "race",
        "pos": "n., v.",
        "th": "การแข่งขันความเร็ว / แข่งความเร็ว",
        "definition": "A competition between runners, horses, vehicles, or boats to see which is the fastest in covering a set course.",
        "exampleEn": "She won first place in the ten-kilometer race.",
        "exampleTh": "เธอคว้าอันดับหนึ่งในการแข่งขันวิ่งสิบกิโลเมตร",
        "synonyms": ["competition", "marathon", "sprint"]
    },
    "v-oxf-2115": {
        "word": "race",
        "pos": "n.",
        "th": "เชื้อชาติ, เผ่าพันธุ์",
        "definition": "Each of the major divisions of humankind, having distinct physical characteristics or shared ancestry.",
        "exampleEn": "The law protects people of every race and nationality.",
        "exampleTh": "กฎหมายคุ้มครองผู้คนทุกเชื้อชาติและทุกสัญชาติ",
        "synonyms": ["ethnicity", "ancestry", "heritage"]
    },
    "v-oxf-2182": {
        "th": "รู้สึกผ่อนคลาย, สบายใจ",
        "definition": "Free from tension and anxiety; at ease.",
        "synonyms": ["calm", "at ease", "untroubled"]
    },
    "v-oxf-2183": {
        "th": "ที่ช่วยให้ผ่อนคลาย, น่าสบายใจ",
        "definition": "Reducing tension or anxiety; making one feel calm and rested.",
        "synonyms": ["soothing", "calming", "restful"]
    },
    "v-oxf-2226": {
        "word": "rest",
        "pos": "n.",
        "th": "ส่วนที่เหลือ, ที่เหลือทั้งหมด",
        "definition": "The remaining part of something, or the remaining people or things.",
        "exampleEn": "You can eat the rest of the pizza if you are hungry.",
        "exampleTh": "คุณสามารถกินพิซซ่าส่วนที่เหลือได้นะถ้าคุณหิว",
        "synonyms": ["remainder", "balance", "leftovers"]
    },
    "v-oxf-2227": {
        "word": "rest",
        "pos": "v., n.",
        "th": "พักผ่อน, การพักผ่อน",
        "definition": "To cease work or movement in order to relax, refresh oneself, or recover strength.",
        "exampleEn": "The doctor advised him to stay home and rest for a few days.",
        "exampleTh": "คุณหมอแนะนำให้เขาอยู่บ้านและพักผ่อนสักสองสามวัน",
        "synonyms": ["relax", "repose", "take a break"]
    },
    "v-oxf-2245": {
        "word": "ring",
        "pos": "n.",
        "th": "แหวน, วงกลม, สังเวียน",
        "definition": "A small circular band, typically of precious metal, worn on a finger as an ornament or token of marriage.",
        "exampleEn": "She wore a beautiful silver ring on her finger.",
        "exampleTh": "เธอสวมแหวนเงินที่สวยงามบนนิ้วของเธอ",
        "synonyms": ["band", "circle", "hoop"]
    },
    "v-oxf-2246": {
        "word": "ring",
        "pos": "v., n.",
        "th": "ส่งเสียงดัง (โทรศัพท์/กระดิ่ง), โทรหา",
        "definition": "To make a clear resonant or vibrating sound; to call someone by telephone.",
        "exampleEn": "My phone started to ring right in the middle of the meeting.",
        "exampleTh": "โทรศัพท์ของฉันเริ่มดังขึ้นกลางที่ประชุมพอดี",
        "synonyms": ["chime", "peal", "call"]
    },
    "v-oxf-2252": {
        "word": "rock",
        "pos": "n.",
        "th": "หิน, ก้อนหิน, โขดหิน",
        "definition": "The solid mineral material forming part of the surface of the earth; a large stone or boulder.",
        "exampleEn": "The waves crashed against the rocks along the coast.",
        "exampleTh": "เกลียวคลื่นซัดเข้ากับโขดหินตามแนวชายฝั่ง",
        "synonyms": ["stone", "boulder", "crag"]
    },
    "v-oxf-2253": {
        "word": "rock",
        "pos": "n., v.",
        "th": "ดนตรีร็อก / โยก, แกว่งไกว",
        "definition": "A form of popular music with a strong beat driven by electric guitars and drums; to move gently back and forth.",
        "exampleEn": "He plays electric guitar in a local rock band.",
        "exampleTh": "เขาเล่นกีตาร์ไฟฟ้าในวงดนตรีร็อกท้องถิ่น",
        "synonyms": ["rock music", "sway", "oscillate"]
    },
    "v-oxf-2318": {
        "word": "second",
        "pos": "det., number, adv.",
        "th": "ที่สอง, ลำดับที่สอง",
        "definition": "Constituting number two in a sequence; coming after the first in time or order.",
        "exampleEn": "Their office is on the second floor of the building.",
        "exampleTh": "สำนักงานของพวกเขาอยู่บนชั้นที่สองของอาคาร",
        "synonyms": ["next", "runner-up", "secondary"]
    },
    "v-oxf-2319": {
        "word": "second",
        "pos": "n.",
        "th": "วินาที, ชั่วครู่",
        "definition": "A sixtieth of a minute of time, or a very short period of time.",
        "exampleEn": "Wait a second while I grab my coat.",
        "exampleTh": "รอสักครู่นะเดี๋ยวฉันไปหยิบเสื้อโค้ทก่อน",
        "synonyms": ["moment", "instant", "flash"]
    },
    "v-oxf-2353": {
        "word": "set",
        "pos": "v.",
        "th": "ตั้งค่า, จัดวาง, กำหนด",
        "definition": "To put, lay, or stand something in a specified place or position; to adjust a device or establish a goal.",
        "exampleEn": "Remember to set your alarm for six o'clock tomorrow morning.",
        "exampleTh": "อย่าลืมตั้งนาฬิกาปลุกตอนหกโมงเช้าวันพรุ่งนี้นะ",
        "synonyms": ["place", "put", "adjust"]
    },
    "v-oxf-2354": {
        "word": "set",
        "pos": "n.",
        "th": "ชุด, เซต, ฉากถ่ายทำ",
        "definition": "A group or collection of things that belong together or resemble one another.",
        "exampleEn": "She bought a new set of kitchen knives.",
        "exampleTh": "เธอซื้อมีดทำครัวชุดใหม่มา",
        "synonyms": ["collection", "kit", "series"]
    },
    "v-oxf-2542": {
        "word": "stick",
        "pos": "v.",
        "th": "ติด, แปะ, ยึดมั่น, ทิ่ม",
        "definition": "To adhere or cling to something; to push a pointed object into or through something.",
        "exampleEn": "Use glue to stick the label onto the package.",
        "exampleTh": "ใช้กาวติดฉลากลงบนกล่องพัสดุ",
        "synonyms": ["adhere", "attach", "fasten"]
    },
    "v-oxf-2543": {
        "word": "stick",
        "pos": "n.",
        "th": "กิ่งไม้, ไม้เรียว, แท่ง",
        "definition": "A thin piece of wood that has fallen or been cut from a tree, or a long slender piece of something.",
        "exampleEn": "The dog ran across the park to fetch the wooden stick.",
        "exampleTh": "สุนัขวิ่งข้ามสวนสาธารณะเพื่อไปคาบกิ่งไม้กลับมา",
        "synonyms": ["branch", "twig", "rod"]
    },
    "v-oxf-2610": {
        "th": "รู้สึกประหลาดใจ, รู้สึกแปลกใจ",
        "definition": "Feeling or showing surprise because something unexpected has happened.",
        "synonyms": ["astonished", "amazed", "startled"]
    },
    "v-oxf-2611": {
        "th": "น่าประหลาดใจ, น่าแปลกใจ",
        "definition": "Causing surprise; unexpected.",
        "synonyms": ["unexpected", "astonishing", "remarkable"]
    },
    "v-oxf-2649": {
        "word": "tear",
        "pos": "v., n.",
        "th": "ฉีก, ขาด / รอยฉีกขาด",
        "definition": "To pull or rip something apart or to pieces with force.",
        "exampleEn": "Be careful not to tear the paper when you open the envelope.",
        "exampleTh": "ระวังอย่าทำกระดาษฉีกขาดตอนที่คุณเปิดซองจดหมาย",
        "synonyms": ["rip", "shred", "split"]
    },
    "v-oxf-2650": {
        "word": "tear",
        "pos": "n.",
        "th": "น้ำตา",
        "definition": "A drop of clear salty liquid secreted from glands in a person's eye when crying or when the eye is irritated.",
        "exampleEn": "A tear rolled down her cheek as she watched the sad movie.",
        "exampleTh": "น้ำตาหยดหนึ่งไหลอาบแก้มของเธอขณะที่ดูภาพยนตร์เศร้า",
        "synonyms": ["teardrop", "weeping"]
    },
    "v-oxf-2717": {
        "th": "รู้สึกเหนื่อย, อ่อนล้า",
        "definition": "In need of sleep or rest; weary.",
        "synonyms": ["exhausted", "weary", "fatigued"]
    },
    "v-oxf-2718": {
        "th": "น่าเหน็ดเหนื่อย, ที่ทำให้เหนื่อยล้า",
        "definition": "Causing one to need rest or sleep; fatiguing.",
        "synonyms": ["exhausting", "fatiguing", "draining"]
    },
    "v-oxf-2839": {
        "word": "used",
        "pos": "adj.",
        "th": "ที่คุ้นเคย, ที่ชินกับ (used to)",
        "definition": "Familiar with a condition or activity so that it seems normal or usual (followed by 'to').",
        "exampleEn": "She is used to waking up early every morning.",
        "exampleTh": "เธอชินกับการตื่นนอนแต่เช้าในทุกๆ วันแล้ว",
        "synonyms": ["accustomed", "habituated", "familiar"]
    },
    "v-oxf-2840": {
        "word": "used",
        "pos": "adj.",
        "th": "มือสอง, ที่ผ่านการใช้งานแล้ว",
        "definition": "Having already been used; second-hand.",
        "exampleEn": "He bought a used car in great condition.",
        "exampleTh": "เขาซื้อรถยนต์มือสองที่อยู่ในสภาพดีเยี่ยม",
        "synonyms": ["second-hand", "pre-owned"]
    },
    "v-oxf-2841": {
        "word": "used to",
        "pos": "modal v.",
        "th": "เคย (ทำในอดีตแต่ปัจจุบันไม่ทำแล้ว)",
        "definition": "Used to say that something happened continuously or frequently during a period in the past.",
        "exampleEn": "I used to play the guitar when I was in high school.",
        "exampleTh": "ฉันเคยเล่นกีตาร์สมัยที่ยังเรียนอยู่ชั้นมัธยมปลาย",
        "synonyms": ["formerly", "in the past"]
    },
    "v-oxf-2946": {
        "word": "wind",
        "pos": "n.",
        "th": "ลม, กระแสลม",
        "definition": "The perceptible natural movement of the air, especially in the form of a current of air blowing from a particular direction.",
        "exampleEn": "A strong wind blew the leaves across the yard.",
        "exampleTh": "ลมแรงพัดใบไม้ปลิวข้ามสนามหญ้า",
        "synonyms": ["breeze", "gale", "gust"]
    },
    "v-oxf-2947": {
        "word": "wind",
        "pos": "v.",
        "th": "คดเคี้ยว, หมุนไขลาน, พันรอบ",
        "definition": "To follow a twisting or spiral course; to wrap or twist something around another object.",
        "exampleEn": "The narrow road winds up through the mountains.",
        "exampleTh": "ถนนแคบๆ คดเคี้ยวขึ้นไปตามแนวภูเขา",
        "synonyms": ["twist", "meander", "coil"]
    }
}

def clean_def(d):
    if not d:
        return d
    d = d.strip()
    if d:
        d = d[0].upper() + d[1:]
        if not d.endswith(('.', '!', '?')):
            d += '.'
    return d

def clean_synonyms(syns):
    if not syns:
        return []
    out = []
    seen = set()
    for s in syns:
        for part in str(s).split(','):
            p = part.strip()
            if p == "porximately":
                p = "approximately"
            elif p == "open-mounthed":
                p = "open-mouthed"
            if p and p.lower() not in seen:
                seen.add(p.lower())
                out.append(p)
    return out[:4]

updated_count = 0
for item in current_data:
    if item.get("category") != "daily-oxford":
        continue

    cid = item.get("id", "")
    raw_word = item.get("word", "")
    cw = re.sub(r'[0-9,\.]', '', raw_word.lower()).replace('’', "'").strip()

    # Step 1: Apply base upgrade from handcrafted_map or ref_map
    if cw in handcrafted_map:
        hc = handcrafted_map[cw]
        item["word"] = hc.get("word", item["word"])
        item["pos"] = hc.get("pos", item["pos"])
        item["th"] = hc.get("th", item["th"])
        item["definition"] = hc.get("definition", item["definition"])
        item["exampleEn"] = hc.get("exampleEn", item["exampleEn"])
        item["exampleTh"] = hc.get("exampleTh", item["exampleTh"])
        if hc.get("collocations"):
            item["collocations"] = hc["collocations"]
        if hc.get("synonyms"):
            item["synonyms"] = hc["synonyms"]
        updated_count += 1
    elif cw in ref_map:
        ref_item = ref_map[cw]
        r_th = ref_item.get("translations", {}).get("th", "").strip()
        r_def = ref_item.get("definition", "").strip()
        r_syns = ref_item.get("synonyms", [])
        ex_list = ref_item.get("examples", [])
        if r_th:
            item["th"] = r_th
        if r_def:
            item["definition"] = r_def
        if ex_list:
            first_ex = ex_list[0]
            r_ex_en = first_ex.get("en", "").strip()
            r_ex_th = first_ex.get("translations", {}).get("th", "").strip()
            if r_ex_en and r_ex_th:
                item["exampleEn"] = r_ex_en
                item["exampleTh"] = r_ex_th
        if r_syns:
            item["synonyms"] = r_syns
        updated_count += 1

    # Step 2: Apply explicit ID overrides (highest priority)
    if cid in explicit_id_overrides:
        ov = explicit_id_overrides[cid]
        for k, v in ov.items():
            item[k] = v

    # Step 3: Normalize definition and synonyms
    item["definition"] = clean_def(item.get("definition", ""))
    item["synonyms"] = clean_synonyms(item.get("synonyms", []))

print(f"Updated {updated_count} daily-oxford items and applied {len(explicit_id_overrides)} explicit ID overrides.")

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

print("Successfully wrote updated data/vocabData.js!")
