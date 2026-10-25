# scripts/ch14.py
# Chapter 14: Mid-Air Surgery and the Missing License Plate
# "บทที่ 14: ผ่าตัดใหญ่กลางอากาศ และป้ายทะเบียนที่สาบสูญ"

chapter14 = {
    "id": "zd-ch-14",
    "chapterNumber": 14,
    "collection": "zero-downtime",
    "title": "Chapter 14: Mid-Air Surgery and the Missing License Plate",
    "titleTh": "บทที่ 14: ผ่าตัดใหญ่กลางอากาศ และป้ายทะเบียนที่สาบสูญ",
    "coverEmoji": "⚡",
    "level": "B1",
    "levelBadge": "Workplace IT Novel",
    "wordCount": 870,
    "estimatedTime": "5 นาที",
    "xpReward": 30,
    "summary": "ภารกิจอัปเกรดคลัสเตอร์ EKS กลางอากาศจาก v1.28 สู่ v1.29 โดยห้ามระบบล่มแม้แต่วินาทีเดียว! พี่กานต์ปล่อยให้อาร์เทอร์ลงมือใช้คำสั่ง Drain โหนด ย้ายพอด และจัดการ Taints & Tolerations ด้วยตัวเองอย่างช่ำชอง",
    "tags": ["Zero Downtime", "Kubernetes", "Node Drain", "EKS Upgrade", "Workplace English", "Story"],
    "keyVocab": [
        {
            "word": "Mid-air surgery",
            "ipa": "/mɪd er ˈsɜːr.dʒər.i/",
            "th": "การผ่าตัดกลางอากาศ (เปรียบเปรยการอัปเกรดระบบสดขณะมีผู้ใช้งานจริงโดยห้ามหยุดทำงาน)",
            "example": "Upgrading a live EKS production cluster is like performing mid-air surgery on a flying jet."
        },
        {
            "word": "Drain a node",
            "ipa": "/dreɪn ə noʊd/",
            "th": "การสั่งอพยพพอดทั้งหมดออกจากเครื่องเซิร์ฟเวอร์อย่างปลอดภัยเพื่อเตรียมปิดปรับปรุง",
            "example": "Before taking the server offline for maintenance, Arthur safely drained the worker node."
        },
        {
            "word": "DaemonSet",
            "ipa": "/ˈdiː.mən set/",
            "th": "พอดพิเศษที่ต้องรันอยู่บนทุกๆ โหนดเสมอ เช่น ตัวเก็บ Log หรือระบบ Network",
            "example": "He added the --ignore-daemonsets flag so system networking pods wouldn't block the drain."
        },
        {
            "word": "Taints and Tolerations",
            "ipa": "/teɪnts ænd ˌtɑː.ləˈreɪ.ʃənz/",
            "th": "กลไกการแปะป้ายห้ามพอดทั่วไปเข้ามา และการกำหนดข้อยกเว้นให้เฉพาะพอดพิเศษเข้าไปได้",
            "example": "Taints repel unwanted pods, while tolerations allow specific workloads to be scheduled there."
        },
        {
            "word": "Walking encyclopedia",
            "ipa": "/ˈwɑː.kɪŋ ɪnˌsaɪ.kləˈpiː.di.ə/",
            "th": "สารานุกรมเคลื่อนที่ (ผู้ที่มีความรู้รอบตัวแน่นเปรี๊ยะในเรื่องนั้นๆ)",
            "example": "'Mate, you're practically a walking kubectl encyclopedia now!' Raj cheered."
        }
    ],
    "paragraphs": [
        {
            "id": 1,
            "en": "Thursday morning. The atmosphere in the Blue Team area was quiet yet electric with focus, resembling the operating room of a major hospital.\n\nToday was the scheduled live version upgrade of the Australian production AWS EKS cluster, moving from Kubernetes **v1.28 to v1.29**. The prime directive was absolute: **Zero Downtime**. Not a single checkout request or mobile banking transfer could be dropped!",
            "th": "เช้าวันพฤหัสบดี บรรยากาศในโซนของทีม Blue เงียบสงบแต่แฝงไปด้วยความตึงเครียดเหมือนห้องผ่าตัดของโรงพยาบาลใหญ่\n\nวันนี้คือวันอัปเกรดคลัสเตอร์ EKS ตัวจริงของออสเตรเลียจาก Kubernetes **v1.28 ขึ้นสู่ v1.29** ภายใต้กฎเหล็กอันศักดิ์สิทธิ์: **Zero Downtime** ห้ามให้ทราฟฟิกลูกค้าที่กำลังกดโอนเงินหรือจ่ายบิลสะดุดแม้แต่วินาทีเดียว!"
        },
        {
            "id": 2,
            "en": "\"Upgrading Kubernetes in production is like performing mid-air surgery on a flying passenger jet,\" Karn whispered with a calm smile, sliding his chair right next to Arthur. \"The control plane is already upgraded via AWS. Now, Arthur, you have the helm: you will upgrade the worker node groups.\"\n\nArthur took a deep breath, resting his hands lightly on the mechanical keyboard. \"Ready, P'Karn!\"",
            "th": "\"การอัปเกรดระบบที่กำลังมีคนใช้งานจริง มันเหมือนการเปลี่ยนเครื่องยนต์กลางอากาศตอนเครื่องบินกำลังบินอยู่บนฟ้า\" พี่กานต์กระซิบบอกด้วยรอยยิ้มสงบ เลื่อนเก้าอี้มานั่งข้างๆ อาร์เทอร์ \"ระบบควบคุมฝั่ง AWS อัปเกรดเสร็จแล้ว... หน้าที่นายตอนนี้คือการอัปเกรดเครื่องเซิร์ฟเวอร์ Worker Nodes ทั้งหมด\"\n\nอาร์เทอร์สูดหายใจเข้าลึกๆ วางมือลงบนคีย์บอร์ดอย่างมั่นคง \"พร้อมครับพี่กานต์!\""
        },
        {
            "id": 3,
            "en": "\"First step: before upgrading an EC2 server, we must safely evacuate all running customer pods to healthy neighboring nodes. What command do we run in the CKA exam?\"\n\nWithout blinking, Arthur typed:\n\n```bash\nkubectl drain node-syd-worker-01 --ignore-daemonsets --delete-emptydir-data\n```\n\n\"Explain those two flags to me, doctor,\" Karn tested him with a playful wink.",
            "th": "\"ขั้นตอนแรก: ก่อนจะปิดเครื่องเซิร์ฟเวอร์เพื่ออัปเกรด เราต้องอพยพพอดของลูกค้าทั้งหมดไปยังเครื่องข้างๆ ให้ปลอดภัยก่อน ข้อสอบ CKA เราใช้คำสั่งอะไร?\"\n\nโดยไม่ต้องหยุดคิด อาร์เทอร์พิมพ์คำสั่งลงไปทันที:\n\n```bash\nkubectl drain node-syd-worker-01 --ignore-daemonsets --delete-emptydir-data\n```\n\n\"อธิบายให้ฟังหน่อยซิ คุณหมอ สองตัวเลือกข้างหลังนั้นใส่ไปทำไม?\" พี่กานต์แกล้งลองภูมิพร้อมรอยยิ้ม"
        },
        {
            "id": 4,
            "en": "\"Easily, P'Karn!\" Arthur answered with crisp clarity. \"`--ignore-daemonsets` is necessary because DaemonSet pods—like `aws-node` networking and log collectors—live permanently on every machine. If we don't tell Kubernetes to ignore them, the drain command will fail and block forever!\nAnd `--delete-emptydir-data` confirms that ephemeral temporary cache data inside pods can be recreated safely on the new node.\"\n\n\"Ten out of ten! Hit Enter!\" Karn approved.",
            "th": "\"ง่ายมากครับพี่กานต์!\" อาร์เทอร์ตอบฉะฉาน \"`--ignore-daemonsets` จำเป็นต้องใส่ เพราะพอดพวก DaemonSet อย่างระบบเครือข่าย aws-node มันต้องอยู่บนทุกเครื่องตลอดเวลา ถ้าเราไม่สั่งให้ข้าม คำสั่ง Drain จะเออเร่อและค้างเติ่งทันที!\nส่วน `--delete-emptydir-data` คือการยินยอมให้พอดที่ใช้พื้นที่แคชชั่วคราวถูกย้ายไปสร้างใหม่บนเครื่องอื่นได้อย่างปลอดภัยครับ\"\n\n\"เต็มสิบไม่หัก! กด Enter ได้เลย!\" พี่กานต์สั่ง"
        },
        {
            "id": 5,
            "en": "The terminal scrolled rapidly:\n\n`node/node-syd-worker-01 cordoned`\n`evicting pod checkout-service-78f9`\n`evicting pod payment-gateway-44bc`\n\nWithin forty seconds, seventy microservice pods floated seamlessly over to the newly provisioned v1.29 nodes. On the Grafana dashboard, the Sydney transaction success rate held steady at **100.00%**. Not a single user in Melbourne or Sydney noticed a thing!",
            "th": "ข้อความบนหน้าจอดำเลื่อนขึ้นอย่างรวดเร็ว:\n\n`node/node-syd-worker-01 cordoned`\n`evicting pod checkout-service-78f9`\n`evicting pod payment-gateway-44bc`\n\nภายในเวลาสี่สิบวินาที พอดไมโครเซอร์วิสกว่าเจ็ดสิบตัวก็ถูกอพยพอย่างนุ่มนวลไปยังเครื่องเวอร์ชัน v1.29 ตัวใหม่ บนแดชบอร์ดกราฟานา กราฟอัตราความสำเร็จของการชำระเงินในซิดนีย์นิ่งสนิทอยู่ที่ **100.00%** ไม่มีผู้ใช้คนไหนในออสเตรเลียรู้ตัวเลยแม้แต่คนเดียว!"
        },
        {
            "id": 6,
            "en": "Suddenly, a warning alert flashed on the Sydney monitoring channel. An analytics batch job pod was stuck in `Pending` state!\n\n\"There it is! Just like clockwork!\" Karn pointed to the alert. \"Why is the pod refusing to schedule on our new nodes?\"\n\nArthur ran `k describe pod analytics-batch-44` and scanned the Events section:\n\n`0/6 nodes are available: 3 node(s) had untolerated taint {workload: analytics:NoSchedule}`.",
            "th": "ทันใดนั้น การแจ้งเตือนสีส้มก็เด้งขึ้นมาในห้องแชทซิดนีย์ พอดประมวลผลข้อมูลตัวหนึ่งติดสถานะ `Pending` ไม่ยอมทำงาน!\n\n\"นั่นไง มาตามนัดจริงๆ ด้วย!\" พี่กานต์ชี้ไปที่จอ \"ทำไมพอดตัวนี้ถึงไม่ยอมวิ่งขึ้นเครื่องใหม่ล่ะอาร์เทอร์?\"\n\nอาร์เทอร์รันคำสั่ง `k describe pod analytics-batch-44` แล้วกวาดสายตาดูช่อง Events ทันที:\n\n`0/6 nodes are available: 3 node(s) had untolerated taint {workload: analytics:NoSchedule}`"
        },
        {
            "id": 7,
            "en": "\"A Taint and Toleration mismatch!\" Arthur smiled, completely unfazed. \"The new node pool has a dedicated Taint: `workload=analytics:NoSchedule` so general web pods don't crowd the high-memory nodes. But the analytics deployment manifest is missing the matching `tolerations` block!\"\n\nArthur quickly updated the Helm `values.yaml` for analytics, adding the matching toleration. Within ten seconds of Argo CD syncing, the analytics pod scheduled instantly and turned healthy green!",
            "th": "\"เรื่อง Taint และ Toleration ครับ!\" อาร์เทอร์ยิ้มอย่างไม่สะทกสะท้าน \"เครื่องกลุ่มใหม่ถูกแปะป้าย Taint ไว้ว่าห้ามพอดทั่วไปเข้า เพื่อกันไว้ให้งานประมวลผลหนักๆ แต่ในไฟล์คอนฟิกของพอดตัวนี้ ลืมใส่ใบอนุญาต Toleration ครับ!\"\n\nอาร์เทอร์เข้าไปแก้ไฟล์ `values.yaml` ของ Helm เติมบล็อก Toleration ลงไป ภายในสิบวินาทีหลังจาก Argo CD ซิงค์ พอดก็ถูกส่งขึ้นเครื่องและทำงานได้อย่างสมบูรณ์แบบ!"
        },
        {
            "id": 8,
            "en": "Raj, who had been watching the entire operation over their shoulders with a grin, clapped his hands in delight.\n\n\"Mate, you're practically a walking kubectl encyclopedia now!\" Raj cheered with a wide smile. \"Handling live node drains, DaemonSets, and Taint mismatches in the middle of a live production upgrade without breaking a sweat? You are going to absolutely crush that CKA exam on Sunday night!\"\n\nArthur smiled, feeling a deep, solid confidence anchoring his spirit. The surgery was complete. His mind was razor sharp.",
            "th": "ราจที่ยืนดูการผ่าตัดคลัสเตอร์สดมาตั้งแต่ต้นตบมือดังฉาดด้วยความประทับใจ\n\n\"Mate, you're practically a walking kubectl encyclopedia now!\" ราจเอ่ยชมด้วยรอยยิ้มกว้าง \"จัดการทั้ง Drain โหนด, DaemonSet, แล้วก็ Taint ผิดพลาดระหว่างการอัปเกรดระบบจริงได้อย่างใจเย็นขนาดนี้เนี่ยนะ? นายพร้อมไปขยี้ข้อสอบ CKA ในคืนวันอาทิตย์นี้แบบขาดลอยแล้วเพื่อน!\"\n\nอาร์เทอร์ยิ้มรับด้วยความภาคภูมิใจ ความรู้ทุกอย่างตกผลึกอย่างสมบูรณ์แบบ เขากำลังจะก้าวขึ้นสู่สังเวียนการสอบจริงด้วยความมั่นใจเกินร้อย!"
        }
    ],
    "quiz": [
        {
            "id": "zd14-q1",
            "question": "What is the primary purpose of the `kubectl drain` command in production Kubernetes management?",
            "options": [
                "To safely evict all application pods from a worker node so the server can undergo maintenance or upgrades without downtime.",
                "To permanently delete the entire Kubernetes cluster.",
                "To restart the local Docker engine.",
                "To clear the cache of Argo CD."
            ],
            "answer": 0,
            "explanation": "Correct! `kubectl drain` cordons the node to prevent new pods from arriving and gracefully evicts existing pods to healthy nodes so the server can be safely maintained."
        },
        {
            "id": "zd14-q2",
            "question": "Why must the `--ignore-daemonsets` flag be supplied when draining a Kubernetes node?",
            "options": [
                "Because DaemonSets run on every node permanently; without this flag, drain would fail and block indefinitely.",
                "Because DaemonSets cause memory leaks on AWS EKS.",
                "Because DaemonSets are only used in test environments.",
                "Because DaemonSets do not support Linux operating systems."
            ],
            "answer": 0,
            "explanation": "Correct! DaemonSet pods manage node-level services and cannot be evicted to another node. The flag informs Kubernetes to bypass them during node evacuation."
        },
        {
            "id": "zd14-q3",
            "question": "What complimentary idiom did Raj use to describe Arthur's deep command-line proficiency?",
            "options": [
                "'A walking kubectl encyclopedia'",
                "'A fish out of water'",
                "'A wild goose chase'",
                "'A diamond in the rough'"
            ],
            "answer": 0,
            "explanation": "Correct! A 'walking encyclopedia' refers to someone who has an extensive, deeply reliable reservoir of knowledge about a specific subject."
        }
    ]
}
