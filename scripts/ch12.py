# scripts/ch12.py
# Chapter 12: Confronting the CKA Trial: The Hands-on Exam
# "บทที่ 12: ท้าชนด่านอรหันต์ CKA (ใบเซอร์ที่ไม่ให้กากบาท)"

chapter12 = {
    "id": "zd-ch-12",
    "chapterNumber": 12,
    "collection": "zero-downtime",
    "title": "Chapter 12: Confronting the CKA Trial: The Hands-on Exam",
    "titleTh": "บทที่ 12: ท้าชนด่านอรหันต์ CKA (ใบเซอร์ที่ไม่ให้กากบาท)",
    "coverEmoji": "⚔️",
    "level": "B1",
    "levelBadge": "Workplace IT Novel",
    "wordCount": 890,
    "estimatedTime": "5 นาที",
    "xpReward": 30,
    "summary": "เลียมมอบโควตาสอบใบเซอร์ระดับตำนาน CKA ให้แก่อาร์เทอร์ ข้อสอบนี้ไม่มีช้อยส์ให้เลือก แต่เป็นข้อสอบแล็บสดบนหน้าจอดำที่ต้องแก้ระบบคลัสเตอร์พังให้เสร็จใน 2 ชั่วโมง!",
    "tags": ["Zero Downtime", "Kubernetes", "CKA", "CLI", "Workplace English", "Story"],
    "keyVocab": [
        {
            "word": "Hands-on lab",
            "ipa": "/ˌhændzˈɑːn læb/",
            "th": "ข้อสอบหรือห้องทดลองแบบลงมือปฏิบัติจริง",
            "example": "Unlike multiple-choice tests, the CKA is a 100% hands-on lab in a real terminal."
        },
        {
            "word": "Voucher",
            "ipa": "/ˈvaʊ.tʃər/",
            "th": "คูปองหรือสิทธิ์ออกค่าใช้จ่ายแทน",
            "example": "Liam approved a company exam voucher worth almost four hundred dollars."
        },
        {
            "word": "Muscle memory",
            "ipa": "/ˈmʌs.əl ˈmem.ər.i/",
            "th": "ความจำของกล้ามเนื้อ (ความคล่องแคล่วจนพิมพ์ได้โดยไม่ต้องคิด)",
            "example": "Typing kubectl commands requires pure muscle memory to beat the strict clock."
        },
        {
            "word": "Terminal speed",
            "ipa": "/ˈtɜːr.mɪ.nəl spiːd/",
            "th": "ความเร็วและความคล่องตัวในการสั่งการผ่านหน้าจอ Command Line",
            "example": "He practiced shell shortcuts every lunch break to boost his terminal speed."
        },
        {
            "word": "Game on",
            "ipa": "/ɡeɪm ɑːn/",
            "th": "การท้าทายเริ่มต้นขึ้นแล้ว! ลุยกันเลย!",
            "example": "Arthur accepted the company challenge with a confident grin: 'Game on!'"
        }
    ],
    "paragraphs": [
        {
            "id": 1,
            "en": "Tuesday morning. Arthur arrived at the office in high spirits after setting a personal best during his morning 5K jog in the park.\n\nAs he sat at his desk, Liam called a quick three-minute video sync from Melbourne. The Australian engineering manager had a mischievous sparkle in his eyes.",
            "th": "เช้าวันอังคาร อาร์เทอร์เดินเข้าออฟฟิศมาด้วยอารมณ์แจ่มใสหลังจากเมื่อเช้าทำสถิติวิ่ง 5 กิโลเมตรในสวนสาธารณะได้เร็วขึ้นกว่าเดิมหนึ่งนาที\n\nเมื่อเขานั่งลงที่โต๊ะ เลียมก็เปิดวิดีโอคอลเข้ามาจากเมลเบิร์น ผู้จัดการหนุ่มชาวออสซี่มีรอยยิ้มพราวระยับในดวงตา"
        },
        {
            "id": 2,
            "en": "*\"G'day Arthur!\"* Liam greeted him warmly. *\"Look, mate, your Helm Chart delivery yesterday blew the leadership team away. HQ just approved our annual high-performer training budget. I have one corporate voucher for the **Certified Kubernetes Administrator (CKA)** exam, worth almost four hundred bucks. I want to give it to you!\"*\n\nPhop, overhearing from the adjacent desk, gasped so loud his chair creaked. \"The CKA?! The legendary black-belt cert of the cloud native world?!\"",
            "th": "*\"G'day Arthur!\"* เลียมทักทายอย่างอบอุ่น *\"เพื่อน ผลงาน Helm Chart ของนายเมื่อวานทำเอาทีมผู้บริหารประทับใจมาก ทางสำนักงานใหญ่เพิ่งอนุมัติงบฝึกอบรมสำหรับคนเก่งประจำปี ฉันมีโควตาสอบ CKA (Certified Kubernetes Administrator) ฟรีมูลค่าเกือบสี่ร้อยดอลลาร์อยู่หนึ่งสิทธิ์... และฉันอยากจะยกมันให้นาย!\"*\n\nภพที่นั่งฟังอยู่ข้างๆ ถึงกับอ้าปากค้างจนเก้าอี้ลั่น \"CKA เหรอครับพี่เลียม?! ใบเซอร์สายดำระดับตำนานของวงการ Kubernetes เลยนะนั่น!\""
        },
        {
            "id": 3,
            "en": "\"Thank you so much, Liam! I'd be honored to take it on!\" Arthur smiled, thrilled by the trust placed in him.\n\n*\"Good on ya, mate! But fair warning—it's a whole different beast compared to AWS,\"* Liam chuckled. *\"No multiple-choice questions where you can guess or use process of elimination. It's a two-hour live lab on a raw Linux command line. They break real clusters, and you have to fix them against a ticking clock!\"*",
            "th": "\"ขอบคุณมากครับเลียม! ผมยินดีรับความท้าทายนี้ครับ!\" อาร์เทอร์ยิ้มรับด้วยความตื่นเต้นที่ได้รับความไว้วางใจ\n\n*\"Good on ya, mate! แต่เตือนไว้ก่อนนะเพื่อน ว่าด่านนี้มันคนละเรื่องกับข้อสอบ AWS เลยนะ\"* เลียมหัวเราะ *\"ไม่มีช้อยส์ให้ตัด ไม่มีตัวเลือกให้เดา มันคือข้อสอบแล็บสดสองชั่วโมงเต็มบนหน้าจอดำ Linux เขาจะพังคลัสเตอร์จริงๆ แล้วสั่งให้นายซ่อมให้ฟื้นคืนชีพแข่งกับเวลา!\"*"
        },
        {
            "id": 4,
            "en": "Karn turned his chair around to join the conversation. \"Liam's 100% right. In the AWS exam, you had time to sit back and ponder architecture scenarios. In the CKA, you have seventeen real tasks in one hundred and twenty minutes. That's barely seven minutes per problem!\"\n\n\"Seven minutes?!\" Arthur felt his stomach flutter.",
            "th": "พี่กานต์หมุนเก้าอี้เข้ามาร่วมวง \"ที่เลียมพูดคือเรื่องจริงร้อยเปอร์เซ็นต์ ตอนสอบ AWS นายยังมีเวลานั่งอ่านวิเคราะห์โจทย์ แต่ CKA มีโจทย์ปฏิบัติจริง 17 ข้อ ในเวลา 120 นาที เฉลี่ยแล้วมีเวลาข้อละแค่ 7 นาทีเท่านั้น!\"\n\n\"ข้อละเจ็ดนาทีเหรอครับ?!\" อาร์เทอร์เริ่มรู้สึกขนลุกซู่"
        },
        {
            "id": 5,
            "en": "\"If you have to type out `kubectl get pods --namespace=production` character by character every time, you'll run out of time before reaching question ten,\" Karn explained. \"To conquer the CKA, your terminal speed and command-line shortcuts must become second nature—pure muscle memory!\"\n\nPhop slammed his palm on the desk with sudden determination. \"P'Arthur! Starting today, during every lunch break, I'll be your drill sergeant! I'll break dummy clusters, set a kitchen timer, and test your speed!\"",
            "th": "\"ถ้ามัวแต่มานั่งพิมพ์คำสั่งยาวๆ อย่าง kubectl get pods --namespace=production ทีละตัวอักษร แค่ข้อสิบเวลาก็หมดแล้ว\" พี่กานต์อธิบาย \"การจะพิชิต CKA ได้ นายต้องมีวิชากระบี่มือไว คีย์ลัดใน Terminal ต้องฝังเข้าไปในความจำกล้ามเนื้อ พิมพ์ได้โดยไม่ต้องคิด!\"\n\nภพตบโต๊ะดังปังด้วยความมุ่งมั่น \"พี่อาร์เทอร์ครับ! ตั้งแต่วันนี้เป็นต้นไป ทุกพักเที่ยง ผมขอเป็นครูฝึกให้พี่เอง! ผมจะแอบพังคลัสเตอร์จำลอง แล้วจับเวลาให้พี่ซ่อมเลย!\""
        },
        {
            "id": 6,
            "en": "Arthur laughed, touched by his teammates' incredible support. \"Sounds like a plan! Let's build our Kubernetes boot camp!\"\n\nThat evening on the train ride home, Arthur opened his notebook. He sketched out his training schedule for the next two weeks:\n\n1. Master essential shell shortcuts: `alias k=kubectl`.\n2. Master imperative commands: generating YAML templates with `--dry-run=client -o yaml` in five seconds.\n3. Master cluster surgery: upgrading kubeadm control planes, troubleshooting etcd, and configuring NetworkPolicies.",
            "th": "อาร์เทอร์หัวเราะร่า ซาบซึ้งในมิตรภาพและพลังสนับสนุนของเพื่อนร่วมทีม \"เอาเลยภพ! มาเปิดค่ายฝึกวิชา Kubernetes กัน!\"\n\nเย็นวันนั้นบนรถไฟฟ้าขากลับบ้าน อาร์เทอร์เปิดสมุดโน้ตขึ้นมาวางตารางซ้อมสำหรับสองสัปดาห์ข้างหน้า:\n\n1. ฝึกใช้คีย์ลัด: alias k=kubectl ให้คล่องมือ\n2. ฝึกใช้คำสั่งด่วน: เสกไฟล์ YAML ด้วย --dry-run=client -o yaml ภายใน 5 วินาที\n3. ผ่าตัดคลัสเตอร์: ซ่อม kubeadm, แบ็กอัป etcd, และเขียน NetworkPolicy ป้องกันแฮกเกอร์"
        },
        {
            "id": 7,
            "en": "When he unlocked his front door, August sprinted over and leaped into his arms. \"Daddy! Did you build another cool robot today?\"\n\n\"Even better, buddy,\" Arthur chuckled, tossing his son up into the air with a grin. \"Daddy is learning to captain a giant spaceship called Kubernetes!\"\n\nAugust's eyes lit up with wonder. \"Can I be your co-pilot, Daddy?!\"\n\n\"You're already the chief co-pilot, Captain August!\"\n\nLooking into his son's beaming face, Arthur knew he would conquer this challenge. The CKA trial was fierce, but he was armed with determination, love, and a world-class team. Game on!",
            "th": "เมื่อเปิดประตูบ้าน น้องออกัสก็วิ่งโผเข้ามากอดคอพ่อแน่น \"ปะป๊า! วันนี้สร้างหุ่นยนต์ตัวใหม่สำเร็จไหมครับ?\"\n\n\"ยิ่งกว่าหุ่นยนต์อีกครับลูก\" อาร์เทอร์หัวเราะ อุ้มลูกชายลอยขึ้นฟ้า \"ปะป๊ากำลังฝึกขับยานอวกาศลำยักษ์ที่ชื่อ Kubernetes อยู่ครับ!\"\n\nดวงตาของน้องออกัสเป็นประกาย \"ออกัสเป็นผู้ช่วยกัปตันให้ปะป๊าได้ไหมครับ?!\"\n\n\"ออกัสเป็นกัปตันเบอร์หนึ่งของปะป๊าอยู่แล้วครับ!\"\n\nมองรอยยิ้มของลูกและภรรยา อาร์เทอร์รู้ดีว่าเขาจะไม่ยอมแพ้ ด่านอรหันต์ CKA อาจจะหิน... แต่ด้วยพลังใจและทีมที่ยอดเยี่ยม เขาพร้อมลุยเต็มร้อย!"
        }
    ],
    "quiz": [
        {
            "id": "zd12-q1",
            "question": "How does the CKA examination differ fundamentally from standard multiple-choice cloud exams?",
            "options": [
                "It is a 100% hands-on practical lab on a live Linux terminal, fixing real broken clusters.",
                "It consists of 100 multiple-choice questions.",
                "It is an oral presentation exam evaluated by an Australian committee.",
                "It requires writing a 5,000-word essay about containers."
            ],
            "answer": 0,
            "explanation": "Correct! The Certified Kubernetes Administrator (CKA) is a purely hands-on performance-based exam where candidates solve real operational challenges in a live command line."
        },
        {
            "id": "zd12-q2",
            "question": "What is the average time candidates have per question on the CKA exam?",
            "options": [
                "Approximately 7 minutes per task (17 questions in 120 minutes).",
                "30 minutes per task.",
                "15 minutes per task.",
                "Over an hour per task."
            ],
            "answer": 0,
            "explanation": "Correct! With 17 multi-step cluster tasks in 120 minutes, candidates have an average of about 7 minutes per task, demanding high terminal speed."
        },
        {
            "id": "zd12-q3",
            "question": "What did Phop offer to do every lunch break to help Arthur prepare?",
            "options": [
                "Act as a drill sergeant, breaking dummy clusters and timing Arthur's repairs.",
                "Buy Arthur lunch every day.",
                "Take over Arthur's on-call shifts.",
                "Write Arthur's exam notes for him."
            ],
            "answer": 0,
            "explanation": "Correct! Phop volunteered to be Arthur's drill coach, breaking practice clusters and timing his troubleshooting during lunch."
        }
    ]
}
