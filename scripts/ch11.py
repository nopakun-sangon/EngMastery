# scripts/ch11.py
# Chapter 11: The Unruly Pod Army and the Art of Helm Charts
# "บทที่ 11: กองทัพพอดไร้ระเบียบและวิชาแม่พิมพ์ Helm Chart"

chapter11 = {
    "id": "zd-ch-11",
    "chapterNumber": 11,
    "collection": "zero-downtime",
    "title": "Chapter 11: The Unruly Pod Army and the Art of Helm Charts",
    "titleTh": "บทที่ 11: กองทัพพอดไร้ระเบียบและวิชาแม่พิมพ์ Helm Chart",
    "coverEmoji": "⚓",
    "level": "B1",
    "levelBadge": "Workplace IT Novel",
    "wordCount": 940,
    "estimatedTime": "6 นาที",
    "xpReward": 30,
    "summary": "เมื่อโปรเจกต์ออสเตรเลียขยายเป็น 40 ไมโครเซอร์วิส การก๊อปวางไฟล์ YAML ซ้ำๆ เริ่มทำให้เกิดบั๊กจำชื่อผิด พี่กานต์จึงสอนวิชา Helm Chart ให้อาร์เทอร์สร้างแม่พิมพ์กลาง ลดโค้ดจาก 40 ไฟล์เหลือชุดเดียว จบงานได้โดยไร้บั๊ก!",
    "tags": ["Zero Downtime", "Kubernetes", "Helm", "values.yaml", "Workplace English", "Story"],
    "keyVocab": [
        {
            "word": "DRY principle",
            "ipa": "/draɪ ˈprɪn.sə.pəl/",
            "th": "หลักการ Don't Repeat Yourself (ไม่เขียนโค้ดซ้ำซ้อน)",
            "example": "Following the DRY principle, we replaced forty duplicate YAML files with a single Helm template."
        },
        {
            "word": "Template",
            "ipa": "/ˈtem.plət/",
            "th": "แม่พิมพ์ต้นแบบที่สามารถนำไปใช้ซ้ำและใส่ค่าเฉพาะได้",
            "example": "Helm uses Go templates to dynamically inject values into Kubernetes manifests."
        },
        {
            "word": "Typo",
            "ipa": "/ˈtaɪ.poʊ/",
            "th": "การพิมพ์ผิดตัวอักษรหรือคำผิด",
            "example": "A tiny copy-paste typo in the selector label caused the service to route traffic to the wrong pod."
        },
        {
            "word": "Clean architecture",
            "ipa": "/kliːn ˈɑːr.kə.tek.tʃər/",
            "th": "สถาปัตยกรรมระบบที่สะอาด เป็นระเบียบ ดูแลรักษาง่าย",
            "example": "The Australian engineering lead praised the clean architecture of our shared Helm repository."
        },
        {
            "word": "In one afternoon",
            "ipa": "/ɪn wʌn ˌæf.tərˈnuːn/",
            "th": "เสร็จสิ้นภายในช่วงบ่ายวันเดียว",
            "example": "They managed to standardize forty microservices in one afternoon."
        }
    ],
    "paragraphs": [
        {
            "id": 1,
            "en": "Monday morning, 9:30 AM.\n\nTwo weeks after Arthur passed his AWS certification, the Blue Team was hit by a massive tidal wave of new workloads. The parent company in Australia had decided to launch the **\"ANZ Super App\"**—a consolidated banking and e-commerce portal requiring forty separate microservices!",
            "th": "เช้าวันจันทร์ เวลา 09:30 น.\n\nสองสัปดาห์หลังจากอาร์เทอร์สอบผ่านใบรับรอง AWS ทีม Blue ก็ต้องเผชิญกับคลื่นงานยักษ์ลูกใหม่ เมื่อบริษัทแม่ที่ออสเตรเลียตัดสินใจเปิดตัวโปรเจกต์ **\"ANZ Super App\"** พอร์ทัลรวมการเงินและการค้าที่ต้องแยกการทำงานออกเป็น 40 ไมโครเซอร์วิส!"
        },
        {
            "id": 2,
            "en": "\"My fingers are going numb, P'Arthur...\" Phop groaned, shaking his sore wrists. On his monitor, twenty separate folders were lined up, each containing nearly identical Kubernetes `deployment.yaml` and `service.yaml` files.\n\n\"Hang in there, Phop! We've only got twenty more services to go,\" Arthur cheered him on, though he too was squinting through strained eyes. They were manually copy-pasting YAML files, renaming service names, container ports, and image tags one by one.",
            "th": "\"ปวดนิ้วชะมัดเลยพี่อาร์เทอร์...\" ภพบ่นอุบพลางสะบัดข้อมือไปมา บนหน้าจอของเขามีโฟลเดอร์เรียงรายอยู่ 20 โฟลเดอร์ แต่ละโฟลเดอร์มีไฟล์ deployment.yaml และ service.yaml ที่หน้าตาแทบจะเหมือนกันทุกประการ\n\n\"สู้ๆ ภพ! เหลืออีกแค่ยี่สิบเซอร์วิสเอง เดี๋ยวก็ครบแล้ว\" อาร์เทอร์ให้กำลังใจรุ่นน้อง ทั้งที่สายตาของตัวเองก็เริ่มพร่ามัวจากการก๊อปวางไฟล์ เปลี่ยนชื่อเซอร์วิส พอร์ต และ image tag ทีละไฟล์"
        },
        {
            "id": 3,
            "en": "Human error was inevitable. When Arthur triggered Argo CD to sync the first batch of fifteen microservices to AWS EKS, a bizarre bug surfaced. When Chloe triggered a test push notification in Sydney, the alert payload somehow got routed into the user profile database!\n\n**Chloe (ANZ-Dev):** *\"Uh, Blue Team? Did someone cross the wires? My notification request just updated user profile ID 402 instead of sending an SMS!\"*",
            "th": "และแล้วความผิดพลาดของมนุษย์ก็เกิดขึ้นจนได้ เมื่ออาร์เทอร์กดสั่งให้ Argo CD ซิงค์ระบบชุดแรก 15 ตัวขึ้นบน AWS EKS ปรากฏว่าเมื่อโคลอี้ลองกดส่งข้อความแจ้งเตือนในระบบทดสอบ ข้อมูลกลับวิ่งไปโผล่ที่ระบบจัดการโปรไฟล์ผู้ใช้แทน!\n\n**Chloe (ANZ-Dev):** *\"เอ่อ ทีม Blue คะ? มีใครต่อสายไฟสลับกันหรือเปล่าเนี่ย? คำขอส่งแจ้งเตือนของฉันแทนที่จะส่ง SMS มันกลับไปแก้ข้อมูลโปรไฟล์ผู้ใช้หมายเลข 402 ซะงั้น!\"*"
        },
        {
            "id": 4,
            "en": "Karn walked over, pulled up a chair, and inspected the YAML files. Within thirty seconds, Arthur found the culprit.\n\n\"Found it, P'Karn...\" Arthur confessed with a sheepish sigh. \"When I copied the `deployment.yaml` from user-service to notification-service, I forgot to update the label selector on line 24. Both pods shared the exact same label, so the traffic load balancer got confused!\"\n\n\"Don't beat yourself up, Arthur,\" Karn smiled gently. \"Whenever engineers rely on copy-pasting forty identical files, mistakes are guaranteed. It's time for you two to graduate to **Helm Charts**.\"",
            "th": "พี่กานต์เดินเข้ามาลากเก้าอี้ดูไฟล์ YAML ภายในสามสิบวินาที อาร์เทอร์ก็เจอจุดบกพร่อง\n\n\"เจอแล้วครับพี่กานต์...\" อาร์เทอร์สารภาพเสียงอ่อย \"ตอนผมก๊อปไฟล์มาจาก user-service ผมลืมแก้ชื่อตรงบรรทัด label selector จุดหนึ่งครับ พอดสองตัวเลยใช้ป้ายชื่อเดียวกัน ระบบกระจายทราฟฟิกมันเลยส่งข้อมูลสลับกัน\"\n\n\"อย่าเพิ่งท้อแท้ไปอาร์เทอร์\" พี่กานต์ยิ้มอย่างเข้าใจ \"เวลาคนเราต้องนั่งก๊อปวางไฟล์เดิมๆ ซ้ำกันสี่สิบชุด ยังไงมันก็ต้องมีหลุด ถึงเวลาที่พวกนายต้องรู้จักอาวุธระดับโปรอย่าง **Helm Chart** แล้วล่ะ\""
        },
        {
            "id": 5,
            "en": "\"Helm?\" Phop perked up. \"Isn't that the package manager with the ship's steering wheel logo?\"\n\n\"Precisely!\" Karn nodded. \"In programming, what golden rule do we follow when we want to eliminate duplicate code?\"\n\n\"The **DRY principle**—*Don't Repeat Yourself!*\" Arthur answered instantly.\n\n\"Spot on!\" Karn beamed. \"Instead of keeping forty nearly identical YAML manifests, we build **one single master Template!** Wherever values differ—like service names, replica counts, or memory limits—we leave placeholders: `{{ .Values.serviceName }}`.\"",
            "th": "\"Helm เหรอครับ?\" ภพตาโต \"ที่โลโก้เป็นรูปพวงมาลัยเรือหางเสือหรือเปล่าครับ?\"\n\n\"ถูกต้อง!\" พี่กานต์พยักหน้า \"ในโลกของการเขียนโปรแกรม เวลาเราไม่อยากเขียนโค้ดซ้ำๆ เดิมๆ เราใช้หลักการอะไร?\"\n\n\"หลักการ **DRY — Don't Repeat Yourself!** ครับ!\" อาร์เทอร์ตอบทันควัน\n\n\"เป๊ะเลย!\" พี่กานต์ชม \"แทนที่เราจะมีไฟล์ YAML ซ้ำๆ อยู่สี่สิบชุด... เราจะสร้าง **ไฟล์แม่พิมพ์กลาง (Template)** ขึ้นมาแค่ชุดเดียวพอ! ตรงไหนที่เป็นชื่อเซอร์วิส จำนวนพอด หรือขนาดเมมโมรี่ เราจะเว้นช่องว่างไว้เป็นตัวแปรแบบนี้: `{{ .Values.serviceName }}`\""
        },
        {
            "id": 6,
            "en": "\"Then, for each microservice, we only write a tiny `values.yaml` file containing just five lines of unique configurations! When Argo CD deploys, Helm stamps out the full Kubernetes manifests automatically, with zero copy-paste typos!\"\n\nKarn patted Arthur's shoulder. \"I'm banning you two from copy-pasting starting this second. Arthur, your mission this afternoon is to architect the shared Base Helm Chart for ANZ Super App. Phop, you provide the values. Let's roll!\"",
            "th": "\"จากนั้น แต่ละไมโครเซอร์วิสจะเขียนแค่ไฟล์สั้นๆ ชื่อ `values.yaml` เพียงห้าถึงหกบรรทัดเพื่อบอกค่าเฉพาะตัวเท่านั้น! เวลา Argo CD ทำงาน Helm จะเอาแม่พิมพ์มาปั๊มไฟล์ Kubernetes ออกมาให้เองโดยอัตโนมัติ หมดปัญหาเรื่องก๊อปวางแล้วพิมพ์ชื่อผิดไปตลอดกาล!\"\n\nพี่กานต์ตบไหล่อาร์เทอร์ \"พี่ขอสั่งห้ามพวกนายสองคนก๊อปวางตั้งแต่บัดนี้เป็นต้นไป บ่ายนี้ อาร์เทอร์รับหน้าที่เขียนไฟล์แม่พิมพ์กลาง Base Helm Chart ส่วนภพเตรียมข้อมูลตัวแปร ลุยเลยพวกเรา!\""
        },
        {
            "id": 7,
            "en": "Arthur dove right into the challenge. Drawing on his years of backend architecture, he structured a clean, modular Helm Chart:\n\n- `Chart.yaml`: Chart metadata and versioning.\n- `templates/deployment.yaml`: Master pod blueprint.\n- `templates/service.yaml`: Master networking blueprint.\n- `templates/hpa.yaml`: Master horizontal pod autoscaler.\n\nBefore pushing live, Arthur tested locally with `helm template . --values values.yaml`. Clean, perfectly rendered YAML streamed across his terminal screen. Every label, port, and probe lined up with surgical precision!",
            "th": "อาร์เทอร์กระโจนเข้าใส่งานทันที ด้วยพื้นฐานโปรแกรมเมอร์ที่มีวินัย เขาออกแบบโครงสร้าง Helm Chart อย่างเป็นระเบียบ:\n\n- `Chart.yaml`: กำหนดเวอร์ชันและข้อมูลแม่พิมพ์\n- `templates/deployment.yaml`: แม่พิมพ์ตัวพอด\n- `templates/service.yaml`: แม่พิมพ์ระบบเชื่อมต่อเน็ตเวิร์ก\n- `templates/hpa.yaml`: แม่พิมพ์ขยายพอดอัตโนมัติ\n\nก่อนส่งขึ้นระบบจริง อาร์เทอร์รันคำสั่ง `helm template . --values values.yaml` เพื่อจำลองการเรนเดอร์ไฟล์ออกมาตรวจดูบนเครื่อง ทุกตัวแปรถูกแทนที่อย่างแม่นยำไร้ที่ติ!"
        },
        {
            "id": 8,
            "en": "By 4:30 PM, all forty microservices were connected to the new Helm Chart repository. Arthur committed the changes and watched Argo CD light up across his screen. One by one, forty green hearts pulsed steadily—clean, uniform, and stable!\n\nA Slack notification chimed from Melbourne.\n\n**Liam (ANZ-Lead):** *\"Mate, did you guys just deploy all forty microservices in one afternoon without a single typo?! I inspected the new Helm Chart repo Arthur built—bloody brilliant engineering! That's the cleanest architecture I've seen in months!\"*",
            "th": "พอถึงเวลาสี่โมงครึ่ง ไมโครเซอร์วิสทั้งสี่สิบตัวก็ถูกเชื่อมเข้ากับ Helm Chart กลาง อาร์เทอร์ส่งโค้ดขึ้น GitHub และเฝ้ามอง Argo CD บนหน้าจอ... หัวใจสีเขียวทั้งสี่สิบดวงกะพริบอย่างพร้อมเพรียง สะอาด เรียบร้อย และนิ่งสนิท!\n\nเสียงแจ้งเตือน Slack จากเมลเบิร์นดังขึ้นทันที\n\n**Liam (ANZ-Lead):** *\"Mate, did you guys just deploy all forty microservices in one afternoon without a single typo?! นี่พวกนายเพิ่งดีพลอยทั้งสี่สิบไมโครเซอร์วิสเสร็จในบ่ายวันเดียวโดยไม่มีคำผิดเลยเนี่ยนะ?! ฉันเข้าไปดู Helm Chart ที่อาร์เทอร์เขียนแล้ว—วิศวกรรมโคตรยอดเยี่ยมเลยเพื่อน! นี่คือสถาปัตยกรรมที่สะอาดที่สุดที่ฉันเห็นในรอบหลายเดือนเลย!\"*"
        },
        {
            "id": 9,
            "en": "Chloe quickly chimed in with clapping emojis:\n\n**Chloe (ANZ-Dev):** *\"Notifications are landing in notifications, and profiles are updating profiles! Magic! Drinks on me when you guys visit Sydney!\"*\n\nPhop leaned back in his chair with a blissful grin. \"P'Arthur, Helm feels like wizardry! We just cut hundreds of repetitive YAML files down to a clean template and a few lines of values!\"",
            "th": "โคลอี้รีบพิมพ์เสริมพร้อมส่งอิโมจิปรบมือรัวๆ:\n\n**Chloe (ANZ-Dev):** *\"การแจ้งเตือนลงที่แจ้งเตือน และโปรไฟล์ก็ลงที่โปรไฟล์แล้ว! เหมือนเวทมนตร์เลย! ถ้าพวกนายมาเที่ยวซิดนีย์ ฉันเลี้ยงเครื่องดื่มไม่อั้นเลย!\"*\n\nภพเอนหลังพิงพนักเก้าอี้ด้วยรอยยิ้มฟินสุดๆ \"พี่อาร์เทอร์ครับ Helm นี่มันเหมือนเวทมนตร์ชัดๆ! เราลดโค้ด YAML จากหลายร้อยไฟล์ เหลือแค่แม่พิมพ์ชุดเดียวกับไฟล์ config สั้นๆ ไม่กี่บรรทัดเอง!\""
        },
        {
            "id": 10,
            "en": "Karn smiled at his two proteges. \"You did a fantastic job, Arthur. But you know what this means? You've mastered container orchestration basics, cloud networking, and Helm templating. Now you're ready for the ultimate boss fight of the Kubernetes world: **The Certified Kubernetes Administrator (CKA)** exam!\"\n\nArthur looked up at Karn, a spark of adventure igniting in his eyes. The journey had only just begun!",
            "th": "พี่กานต์ยิ้มมองน้องทั้งสอง \"ทำได้ยอดเยี่ยมมากอาร์เทอร์ แต่นายรู้ใช่ไหมว่านี่หมายความว่ายังไง? นายเชี่ยวชาญทั้งพื้นฐานคอนเทนเนอร์ เน็ตเวิร์กคลาวด์ และแม่พิมพ์ Helm แล้ว... ด่านต่อไปที่รอนายอยู่ คือบอสใหญ่ของสาย Kubernetes: การสอบปฏิบัติ **Certified Kubernetes Administrator (CKA)** ยังไงล่ะ!\"\n\nอาร์เทอร์สบตาพี่กานต์ แววตาเต็มไปด้วยประกายแห่งความท้าทาย การผจญภัยครั้งใหญ่เพิ่งจะเริ่มต้นขึ้นอีกครั้ง!"
        }
    ],
    "quiz": [
        {
            "id": "zd11-q1",
            "question": "What software engineering principle did Karn recommend to replace forty duplicate YAML manifests?",
            "options": [
                "The DRY principle (Don't Repeat Yourself) using a shared Helm Template.",
                "The Waterfall model.",
                "The Copy-Paste-Refactor pattern.",
                "Manual code reviews for every single file."
            ],
            "answer": 0,
            "explanation": "Correct! Karn advised applying the DRY principle by building one master Helm template and injecting unique variables via values.yaml."
        },
        {
            "id": "zd11-q2",
            "question": "What useful command did Arthur use to preview rendered Kubernetes manifests locally before committing?",
            "options": [
                "`helm template . --values values.yaml`",
                "`docker run -d`",
                "`kubectl delete all --all`",
                "`git reset --hard`"
            ],
            "answer": 0,
            "explanation": "Correct! `helm template` renders chart templates locally without connecting to a cluster, allowing developers to verify YAML syntax and variable substitutions."
        },
        {
            "id": "zd11-q3",
            "question": "How did Liam react when the Blue Team deployed all forty microservices without a single typo?",
            "options": [
                "He praised the clean architecture as 'bloody brilliant engineering'.",
                "He asked them to delete the Helm Chart and revert back to plain YAML.",
                "He complained about the deployment taking too long.",
                "He ignored the update completely."
            ],
            "answer": 0,
            "explanation": "Correct! Liam was blown away and praised Arthur's Helm Chart architecture as 'bloody brilliant engineering'."
        }
    ]
}
