# scripts/ch13.py
# Chapter 13: The Lunchtime Boot Camp and Elena's Invisible Wall
# "บทที่ 13: ค่ายฝึกนรกยามพักเที่ยงและกำแพงที่มองไม่เห็นของเอเลน่า"

chapter13 = {
    "id": "zd-ch-13",
    "chapterNumber": 13,
    "collection": "zero-downtime",
    "title": "Chapter 13: The Lunchtime Boot Camp and Elena's Invisible Wall",
    "titleTh": "บทที่ 13: ค่ายฝึกนรกยามพักเที่ยงและกำแพงที่มองไม่เห็นของเอเลน่า",
    "coverEmoji": "🛡️",
    "level": "B1",
    "levelBadge": "Workplace IT Novel",
    "wordCount": 960,
    "estimatedTime": "6 นาที",
    "xpReward": 30,
    "summary": "ระหว่างค่ายฝึกพิมพ์ไวช่วงพักเที่ยง เอเลน่าบินมาออฟฟิศกรุงเทพฯ พร้อมบั๊กไฟลุก: NetworkPolicy ทำระบบ EKS พังทั้งคลัสเตอร์! อาร์เทอร์จับจุดบกพร่องเรื่องพอร์ต 53 DNS และไวยากรณ์ Dash ช่วยปลดล็อกวิกฤตได้ทันที",
    "tags": ["Zero Downtime", "Kubernetes", "NetworkPolicy", "CoreDNS", "Workplace English", "Story"],
    "keyVocab": [
        {
            "word": "Imperative command",
            "ipa": "/ɪmˈper.ə.t̬ɪv kəˈmænd/",
            "th": "คำสั่งสั่งการด่วนในบรรทัดเดียว (ไม่ต้องเขียนไฟล์ YAML เองตั้งแต่ต้น)",
            "example": "Using imperative commands with --dry-run=client generates manifest templates in seconds."
        },
        {
            "word": "Default allow",
            "ipa": "/dɪˈfɑːlt əˈlaʊ/",
            "th": "สถานะเริ่มต้นที่เปิดอนุญาตให้ทุกส่วนคุยกันได้อิสระ",
            "example": "Kubernetes pod networking defaults to 'default allow' until a NetworkPolicy is applied."
        },
        {
            "word": "DNS resolution",
            "ipa": "/ˌdiː.enˈes ˌrez.əˈluː.ʃən/",
            "th": "การแปลงชื่อโดเมนหรือชื่อเซอร์วิสให้เป็นหมายเลข IP (ผ่านพอร์ต UDP 53)",
            "example": "If egress port 53 is blocked, CoreDNS resolution fails completely."
        },
        {
            "word": "AND vs OR condition",
            "ipa": "/ænd vɜːr.səs ɔːr kənˈdɪʃ.ən/",
            "th": "เงื่อนไข 'และ' เทียบกับ 'หรือ' ในการเขียนโครงสร้าง YAML (ขึ้นอยู่กับการใส่เครื่องหมายขีด -)",
            "example": "Adding an extra dash changes the YAML list from an AND condition into an OR condition."
        },
        {
            "word": "Sharp eyes",
            "ipa": "/ʃɑːrp aɪz/",
            "th": "สายตาเฉียบแหลม ช่างสังเกต",
            "example": "'You have incredibly sharp eyes, mate,' Elena said with genuine admiration."
        }
    ],
    "paragraphs": [
        {
            "id": 1,
            "en": "\"Stopwatch starts in three... two... one... GO!\"\n\nPhop slammed his palm onto his smartphone's timer. At 12:30 PM, while other colleagues were heading out for lunch, the Blue Team corner transformed into an intense command-line boot camp.",
            "th": "\"นาฬิกาจับเวลาเริ่มในสาม... สอง... หนึ่ง... ไปเลยพี่!\"\n\nภพกดปุ่มจับเวลาบนหน้าจอมือถือทันที ในเวลาเที่ยงครึ่ง ขณะที่คนอื่นๆ เดินออกไปทานข้าวกลางวัน มุมโต๊ะของทีม Blue ก็กลายสภาพเป็นค่ายฝึกวิชาหน้าจอดำสุดเข้มข้น"
        },
        {
            "id": 2,
            "en": "Arthur's fingers danced across the keyboard like machine-gun fire. Instead of painfully opening a text editor to type twenty lines of YAML from scratch, he leveraged terminal shortcuts and imperative commands:\n\n```bash\nalias k=kubectl\nexport do=\"--dry-run=client -o yaml\"\nk run nginx --image=nginx $do > pod.yaml\n```\n\nIn four seconds flat, a flawless YAML blueprint was generated on his screen!",
            "th": "นิ้วของอาร์เทอร์พรมลงบนคีย์บอร์ดอย่างรวดเร็วจนเกิดเสียงดังรัวเหมือนปืนกล แทนที่จะมานั่งเปิดโปรแกรมพิมพ์โค้ดทีละบรรทัด เขาใช้คีย์ลัดและคำสั่งด่วนที่ฝึกมาอย่างช่ำชอง:\n\n```bash\nalias k=kubectl\nexport do=\"--dry-run=client -o yaml\"\nk run nginx --image=nginx $do > pod.yaml\n```\n\nเพียงสี่วินาที โครงสร้างไฟล์ YAML ที่สมบูรณ์แบบก็ปรากฏขึ้นบนหน้าจอ!"
        },
        {
            "id": 3,
            "en": "\"Done! Pod manifest generated in 4.2 seconds!\" Arthur grinned, sweating lightly.\n\n\"Brilliant speed!\" Karn nodded with satisfaction. \"Now, task two: Pod isolation! By default, pods in Kubernetes act like tenants in an open apartment building—anyone can knock on any door and chat. But for PCI-DSS banking compliance, we must lock down the payment database so only the checkout pod can enter!\"",
            "th": "\"เสร็จ! เสกไฟล์ Pod สำเร็จใน 4.2 วินาที!\" อาร์เทอร์ปาดเหงื่อพร้อมรอยยิ้ม\n\n\"เร็วขึ้นเยอะมาก!\" พี่กานต์พยักหน้าชื่นชม \"ทีนี้โจทย์ข้อสอง: การกั้นกำแพงพอด (NetworkPolicy)! ปกติพอดใน Kubernetes มันเหมือนคนเช่าห้องในคอนโดเดียวกัน คือใครจะเดินไปเคาะห้องใครก็ได้... แต่ตามมาตรฐานความปลอดภัยการเงิน เราต้องกั้นห้องนอนฐานข้อมูล ให้เฉพาะพอดชำระเงินเข้ามาได้เท่านั้น!\""
        },
        {
            "id": 4,
            "en": "Before Karn could finish explaining, the glass entrance doors of the office swung open. Walking straight toward their desk with purposeful strides was **Elena**, the Green Team's Security Lead from Sydney!\n\nShe had flown into Bangkok for the quarterly security audit. Her sharp face was clouded with intense frustration, clutching her laptop.",
            "th": "ก่อนที่พี่กานต์จะอธิบายต่อ ประตูกระจกหน้าออฟฟิศก็เปิดออก คนที่เดินหน้าเครียดตรงดิ่งมาที่โต๊ะของพวกเขาคือ **เอเลน่า** หัวหน้าทีมความปลอดภัยสีเขียวผู้บินมาจากซิดนีย์เพื่อตรวจระบบประจำไตรมาส!\n\nใบหน้าคมเข้มของเธอเต็มไปด้วยความเคร่งเครียด มือข้างหนึ่งถือแล็ปท็อปแน่น"
        },
        {
            "id": 5,
            "en": "*\"Karn, Blue Team, we have a code-red blocker on Staging,\"* Elena spoke without greeting pleasantries, her voice taut. *\"I just applied our new security NetworkPolicy to isolate the payment database on EKS. But the moment Argo CD synced it, all pods in the entire namespace went completely deaf and blind! They can't even reach other microservices! What broke in your cluster?!\"*",
            "th": "*\"กานต์ ทีม Blue เกิดเรื่องใหญ่ระดับโค้ดแดงขึ้นใน Staging แล้ว\"* เอเลน่าเอ่ยด้วยน้ำเสียงตึงเครียดโดยไม่แวะทักทาย *\"ฉันเพิ่งเอา NetworkPolicy ตัวใหม่ขึ้นไปกั้นความปลอดภัยให้ระบบจ่ายเงินบน EKS แต่พอ Argo CD ซิงค์เสร็จ... พอดทั้งระบบกลับหูหนวกตาบอด คุยกับเซอร์วิสไหนไม่ได้เลยสักตัว! คลัสเตอร์ของพวกนายมีปัญหาอะไรกันแน่?!\"*"
        },
        {
            "id": 6,
            "en": "Karn stayed calm under fire. \"Phop, pull up Elena's NetworkPolicy manifest on the big screen right now!\"\n\nA block of YAML appeared on the central wall monitor:\n\n```yaml\napiVersion: networking.k8s.io/v1\nkind: NetworkPolicy\nmetadata:\n  name: secure-payment-policy\nspec:\n  podSelector:\n    matchLabels:\n      app: payment-db\n  policyTypes:\n  - Ingress\n  - Egress\n```",
            "th": "พี่กานต์นิ่งสงบตามประสาผู้นำ \"ภพ ดึงไฟล์ NetworkPolicy ของเอเลน่าขึ้นมาดูบนจอกลางเดี๋ยวนี้!\"\n\nโค้ด YAML ปรากฏขึ้นบนหน้าจอมอนิเตอร์ใหญ่:\n\n```yaml\napiVersion: networking.k8s.io/v1\nkind: NetworkPolicy\nmetadata:\n  name: secure-payment-policy\nspec:\n  podSelector:\n    matchLabels:\n      app: payment-db\n  policyTypes:\n  - Ingress\n  - Egress\n```"
        },
        {
            "id": 7,
            "en": "Arthur leaned in, examining the lines. In his study notebook, Karn had penned a golden warning in bold red ink:\n\n*\"When you specify Egress in policyTypes without an explicit rule for CoreDNS on port 53, your pod becomes blind to all internal domain names!\"*\n\nArthur's eyes ignited. \"Elena, I see the first issue. You enabled `Egress` in `policyTypes`, but didn't write an outgoing rule permitting **UDP port 53**. Because Kubernetes Egress is now locked, the pod can't even query CoreDNS to resolve hostnames! It's choking on its own internal lookups!\"",
            "th": "อาร์เทอร์ขยับเข้าไปดูใกล้ๆ ในสมุดโน้ตเตรียมสอบ พี่กานต์เคยเขียนเตือนด้วยหมึกสีแดงตัวโตๆ ว่า:\n\n*\"เมื่อไหร่ที่นายสั่งล็อก Egress (ขาออก) โดยไม่เปิดกฎให้ CoreDNS พอร์ต 53 พอดของนายจะหูหนวกตาบอดทันที เพราะมันไม่สามารถแปลงชื่อเซอร์วิสเป็น IP ได้!\"*\n\nอาร์เทอร์เอ่ยขึ้นทันที \"เอเลน่าครับ ผมเห็นปัญหาข้อแรกแล้ว คุณสั่งล็อก Egress ขาออก แต่ไม่ได้เปิดให้พอดคุยกับ **CoreDNS บนพอร์ต 53** พอดเลยแปลงชื่อโฮสต์ไม่สำเร็จ มันเลยคุยกับใครไม่ได้เลยครับ!\""
        },
        {
            "id": 8,
            "en": "Elena's eyes widened in realization. *\"Good grief... CoreDNS port 53! Of course!\"*\n\n\"And that's not all,\" Arthur continued, pointing his pen at the Ingress block. \"Notice this dash syntax:\n\n```yaml\n  ingress:\n  - from:\n    - namespaceSelector:\n        matchLabels:\n          team: checkout\n    - podSelector:\n        matchLabels:\n          role: frontend\n```\n\nBecause there is a dash `-` before `podSelector`, Kubernetes interprets this as an **OR** condition—allowing any pod from checkout OR any frontend pod anywhere! Without the dash, it becomes an **AND** condition, strictly locking it down to only the checkout frontend pod!\"",
            "th": "เอเลน่าตาค้าง *\"จริงด้วย... พอร์ต 53 ของ CoreDNS! ตายล่ะ ฉันลืมไปสนิทเลย!\"*\n\n\"และยังมีอีกจุดครับ\" อาร์เทอร์ชี้ปลายปากกาไปที่กฎ Inbound ขาเข้า \"ดูตรงเครื่องหมายขีดลบ (-) หน้านี้ครับ:\n\n```yaml\n  ingress:\n  - from:\n    - namespaceSelector:\n        matchLabels:\n          team: checkout\n    - podSelector:\n        matchLabels:\n          role: frontend\n```\n\nการใส่ขีดลบ (-) หน้า podSelector ทำให้ Kubernetes มองเป็นเงื่อนไข **OR (หรือ)** คือยอมให้พอดไหนก็ได้ในทีม checkout หรือพอด frontend จากที่ไหนก็ได้เข้ามา! ถ้าต้องการให้เป็นเงื่อนไข **AND (และ)** ต้องลบขีดลบออกครับ!\""
        },
        {
            "id": 9,
            "en": "Elena stared at Arthur in sheer astonishment. In less than two minutes, this thirty-year-old developer had pinpointed two of the most treacherous, invisible gotchas in the entire Kubernetes networking ecosystem!\n\nArthur took the keyboard, added the DNS egress rule on port 53, cleaned up the dash syntax, and committed the patch via Git.\n\n`git commit -m \"fix(security): allow CoreDNS port 53 and enforce AND condition on ingress policy\"`\n\nArgo CD synced within seconds. Staging pods instantly went from error states to solid, healthy green!",
            "th": "เอเลน่ามองอาร์เทอร์ด้วยความทึ่งสุดขีด ภายในเวลาไม่ถึงสองนาที วิศวกรคนนี้จับจุดกับดักที่ซับซ้อนที่สุดของ Kubernetes NetworkPolicy ได้ถึงสองจุดซ้อน!\n\nอาร์เทอร์ขออนุญาตพิมพ์แก้โค้ด เติมกฎพอร์ต 53 และลบขีดลบส่วนเกินออก ก่อนจะส่งโค้ดขึ้น Git:\n\n`git commit -m \"fix(security): allow CoreDNS port 53 and enforce AND condition on ingress policy\"`\n\nArgo CD ทำการซิงค์ระบบภายในไม่กี่วินาที... พอดบน Staging ทั้งหมดกลับมาเขียวชอุ่มและทำงานได้อย่างราบรื่นทันที!"
        },
        {
            "id": 10,
            "en": "Elena let out a long breath, a slow, genuine smile warming her face.\n\n*\"Arthur... That dash syntax between namespaceSelector and podSelector, plus the port 53 DNS egress rule... even senior engineers trip over that! You have remarkably sharp eyes, mate! Thank you so much!\"*\n\n\"All part of our lunchtime boot camp!\" Arthur laughed, winking at Phop and Karn.\n\nElena chuckled softly. *\"Well, if you can debug live NetworkPolicies with that kind of precision under pressure, the CKA exam will be a walk in the park for you! Keep up the brilliant work!\"*",
            "th": "เอเลน่าถอนหายใจยาว คลี่รอยยิ้มจริงใจออกมาอย่างที่ไม่ค่อยได้เห็นบ่อยนัก\n\n*\"อาร์เทอร์... เรื่องไวยากรณ์ขีดลบระหว่าง namespaceSelector กับ podSelector แล้วก็กฎพอร์ต 53 ของ DNS เนี่ย... แม้แต่วิศวกรระดับซีเนียร์หลายคนยังพลาดบ่อยๆ เลยนะ! นายนี่สายตาเฉียบแหลมยอดเยี่ยมมากเพื่อน ขอบคุณมากๆ เลยนะ!\"*\n\n\"เครดิตค่ายฝึกวิชาช่วงพักเที่ยงเลยครับ!\" อาร์เทอร์หัวเราะร่า ขยิบตาให้ภพและพี่กานต์\n\nเอเลน่าหัวเราะเบาๆ *\"ถ้าแก้โจทย์ NetworkPolicy สดๆ ภายใต้ความกดดันได้ขนาดนี้ ข้อสอบ CKA คงไม่ยากเกินมือนายแล้วล่ะ สู้ๆ นะอาร์เทอร์!\"*"
        }
    ],
    "quiz": [
        {
            "id": "zd13-q1",
            "question": "Why did all pods lose internal network communication when Elena enabled Egress in her NetworkPolicy?",
            "options": [
                "Egress was locked down without an explicit rule allowing UDP port 53 to reach CoreDNS for domain resolution.",
                "EKS deleted the entire virtual private cloud.",
                "Docker containers ran out of hard disk storage.",
                "Argo CD was uninstalled by mistake."
            ],
            "answer": 0,
            "explanation": "Correct! When Egress is listed in policyTypes, all outbound traffic is denied unless explicitly permitted. Blocking UDP port 53 breaks CoreDNS resolution for all internal service names."
        },
        {
            "id": "zd13-q2",
            "question": "In a Kubernetes NetworkPolicy `from` block, what happens when an extra dash (`-`) is placed before `podSelector`?",
            "options": [
                "It turns the rule into an OR condition (either namespaceSelector OR podSelector matches).",
                "It automatically encrypts the data packets with TLS.",
                "It causes a fatal syntax error and crashes the Kubernetes API server.",
                "It ignores the rule completely."
            ],
            "answer": 0,
            "explanation": "Correct! In YAML lists, each item with a dash is a separate element. With a dash, Kubernetes evaluates them as OR; without a dash under the same map, it evaluates them as an AND condition."
        },
        {
            "id": "zd13-q3",
            "question": "What high praise did Elena give Arthur after he resolved the NetworkPolicy outage?",
            "options": [
                "'You have remarkably sharp eyes, mate!'",
                "'Better luck next time!'",
                "'Too little, too late!'",
                "'Don't push your luck!'"
            ],
            "answer": 0,
            "explanation": "Correct! Elena praised Arthur by saying 'You have remarkably sharp eyes, mate!', acknowledging his keen eye for intricate Kubernetes configurations."
        }
    ]
}
