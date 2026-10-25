# scripts/ch15.py
# Chapter 15: Two Hours of Destiny on the Black Screen
# "บทที่ 15: สองชั่วโมงตัดสินชะตาบนหน้าจอดำ"

chapter15 = {
    "id": "zd-ch-15",
    "chapterNumber": 15,
    "collection": "zero-downtime",
    "title": "Chapter 15: Two Hours of Destiny on the Black Screen",
    "titleTh": "บทที่ 15: สองชั่วโมงตัดสินชะตาบนหน้าจอดำ",
    "coverEmoji": "💻",
    "level": "B1",
    "levelBadge": "Workplace IT Novel",
    "wordCount": 990,
    "estimatedTime": "6 นาที",
    "xpReward": 30,
    "summary": "คืนวันอาทิตย์ อาร์เทอร์เข้าสอบ CKA ออนไลน์จากที่บ้าน โดยมีผู้คุมสอบฝรั่งส่องกล้องตรวจเข้ม เขาต้องแก้ปัญหา etcd และปลุก Kubelet ที่ตายให้ฟื้นใน 3 นาทีสุดท้าย จนคว้าใบเซอร์ระดับยากที่สุดของสาย Kubernetes มาครองได้สำเร็จ!",
    "tags": ["Zero Downtime", "Kubernetes", "CKA", "etcd", "Kubelet", "Workplace English", "Story"],
    "keyVocab": [
        {
            "word": "Proctor",
            "ipa": "/ˈprɑːk.tər/",
            "th": "ผู้คุมสอบ (โดยเฉพาะการสอบออนไลน์ผ่านเว็บแคม)",
            "example": "The online proctor asked him to pan his webcam 360 degrees around the room."
        },
        {
            "word": "Down to the wire",
            "ipa": "/daʊn tuː ðə ˈwaɪ.ər/",
            "th": "ลุ้นระทึกจนถึงวินาทีสุดท้าย",
            "example": "The exam went right down to the wire with only three minutes left on the clock."
        },
        {
            "word": "Dual-certified",
            "ipa": "/ˈduː.əl ˈsɜːr.t̬ə.faɪd/",
            "th": "ผู้ที่ได้รับใบรับรองความเชี่ยวชาญระดับสากลครบ 2 สาขาหลัก (AWS + Kubernetes)",
            "example": "Arthur was now officially dual-certified in AWS Cloud Architecture and Kubernetes Administration."
        },
        {
            "word": "Troubleshoot",
            "ipa": "/ˈtrʌb.əl.ʃuːt/",
            "th": "การค้นหาและแก้ไขปัญหาทางเทคนิคอย่างเป็นระบบ",
            "example": "He used journalctl logs to troubleshoot why the kubelet service failed to start."
        },
        {
            "word": "Around the corner",
            "ipa": "/əˈraʊnd ðə ˈkɔːr.nər/",
            "th": "อยู่ใกล้แค่เอื้อม กำลังจะมาถึงในอีกไม่ช้า",
            "example": "With Black Friday right around the corner, his new skills would be put to the ultimate test."
        }
    ],
    "paragraphs": [
        {
            "id": 1,
            "en": "Sunday night, 8:30 PM. The small home office was utterly silent.\n\nArthur sat at his desk under the soft glow of a warm desk lamp. His desk was wiped completely bare: no paper, no coffee mugs, no dual monitors. Only his laptop, an external webcam, and a glass of clear water.",
            "th": "คืนวันอาทิตย์ เวลา 20:30 น. ห้องทำงานเล็กๆ ในบ้านเงียบกริบจนได้ยินเสียงจิ้งหรีดนอกหน้าต่าง\n\nอาร์เทอร์นั่งอยู่หน้าโต๊ะทำงานภายใต้แสงไฟสีนวล โต๊ะถูกเคลียร์จนโล่งเตียน ไม่มีเศษกระดาษ ไม่มีแก้วกาแฟ ไม่มีหน้าจอเสริม มีเพียงแล็ปท็อป เว็บแคมภายนอก และแก้วน้ำเปล่าใสหนึ่งใบตามกฎเหล็กของ Linux Foundation"
        },
        {
            "id": 2,
            "en": "At the doorway, six-year-old August in blue dinosaur pajamas peeked in with wide, hopeful eyes, Jane holding his shoulders gently.\n\n\"Daddy, go defeat the giant computer monster!\" August whispered with a sweet smile, waving his tiny hand.\n\n\"You bet I will, buddy. Sleep tight!\" Arthur smiled warmly. As the door clicked softly shut, his focus dialed in with razor sharpness.",
            "th": "ที่หน้าประตูห้อง น้องออกัสในชุดนอนลายไดโนเสาร์ยืนเกาะขอบประตูมองพ่อตาแป๋ว โดยมีแพรคอยจับไหล่ลูกชายไว้เบาๆ\n\n\"ปะป๊า ไปปราบสัตว์ประหลาดในคอมพิวเตอร์ให้ชนะนะคร้าบ!\" ออกัสกระซิบเชียร์พร้อมโบกมือน้อยๆ ให้\n\n\"แน่นอนครับลูก นอนหลับฝันดีนะครับ!\" อาร์เทอร์ยิ้มตอบ เมื่อประตูปิดลงอย่างนุ่มนวล ความตั้งใจทั้งหมดของเขาก็รวมศูนย์อยู่ที่หน้าจอตรงหน้า"
        },
        {
            "id": 3,
            "en": "The test proctor connected via chat:\n\n*\"Hello Arthur. Please slowly pan your camera 360 degrees around the room, show me the floor, the ceiling, under your desk, and your wrists.\"*\n\nArthur followed every instruction methodically. Once verified, the proctor typed: *\"Your environment is approved. You have sixteen tasks and two hours. You may begin now. Good luck.\"*",
            "th": "ผู้คุมสอบชาวต่างชาติพิมพ์ข้อความเปิดกล้องเข้ามา:\n\n*\"Hello Arthur. Please slowly pan your camera 360 degrees around the room, show me the floor, the ceiling, under your desk, and your wrists.\"*\n\nอาร์เทอร์หมุนกล้องกวาดให้ดูรอบห้องทุกซอกทุกมุมอย่างใจเย็น เมื่อผ่านการตรวจ ผู้คุมสอบก็พิมพ์ยืนยัน: *\"Your environment is approved. You have sixteen tasks and two hours. You may begin now. Good luck.\"*"
        },
        {
            "id": 4,
            "en": "The exam window loaded.\n\nOn the left: Task instructions in technical English. On the right: A pitch-black terminal with a blinking green cursor.\n\n`alias k=kubectl`\n`export do=\"--dry-run=client -o yaml\"`\n\nArthur initialized his environment in three seconds flat. The muscle memory forged over two weeks of lunchtime boot camps took over. Ingress routing... multi-container pods... PersistentVolume claims... rolling updates... He breezed through the first twelve tasks with astonishing rhythm!",
            "th": "หน้าต่างข้อสอบโหลดขึ้นมา\n\nทางซ้ายคือคำสั่งภาษาอังกฤษ 16 ข้อ ทางขวาคือหน้าจอเทอร์มินัลสีดำสนิทพร้อมเคอร์เซอร์สีเขียวกะพริบรอรับคำสั่ง\n\n`alias k=kubectl`\n`export do=\"--dry-run=client -o yaml\"`\n\nอาร์เทอร์ตั้งค่าคีย์ลัดในสามวินาทีแรก ความจำของกล้ามเนื้อที่ฝึกฝนมาอย่างหนักหน่วงพาเขาตะลุยผ่านโจทย์ทีละข้อ: ทั้ง Ingress, Multi-container, PersistentVolume, และ Rolling update... สิบสองข้อแรกผ่านไปอย่างรวดเร็วและแม่นยำ!"
        },
        {
            "id": 5,
            "en": "Then came the boss-level gauntlet.\n\n**Task 15:** *Control Plane Disaster Recovery (etcd Snapshot Backup & Restore).* Arthur calmly ran `ETCDCTL_API=3 etcdctl snapshot restore`, re-pointed the host paths in `/etc/kubernetes/manifests/etcd.yaml`, and watched the API server reboot gracefully.\n\nThen came **Task 16—the final mountain:**\n\n*\"Worker node `wk-node-02` is in `NotReady` status. Identify the root cause, fix the node without restarting the host, and ensure it joins the cluster as `Ready`.\"*",
            "th": "และแล้วด่านระดับบอสก็มาถึง\n\n**ข้อ 15:** *การกู้คืนสมองกล etcd Snapshot Backup & Restore* อาร์เทอร์รันคำสั่ง snapshot restore อย่างไม่ลนลาน สลับ path ในไฟล์คอนฟิก etcd.yaml รอจน API server รีบูตกลับมาเขียวสมบูรณ์แบบ\n\nจากนั้นคือ **ข้อ 16 — บอสใหญ่ข้อสุดท้าย:**\n\n*\"เครื่องโหนด `wk-node-02` ติดสถานะ `NotReady` จงค้นหาสาเหตุ ซ่อมแซมระบบโดยห้ามรีสตาร์ตเครื่อง และทำให้โหนดกลับมาพร้อมใช้งาน (Ready)\"* "
        },
        {
            "id": 6,
            "en": "Twenty minutes remained on the clock.\n\nArthur SSH'd into the broken worker node. He ran `systemctl status kubelet`. The service was dead in the water, trapped in an endless crash loop!\n\n*Stay cool, Arthur,* he told himself, taking a slow breath. *When a background daemon dies, where do you look? The system logs!*\n\nHe punched in `journalctl -u kubelet -n 30 --no-pager`. Red text flashed on screen:\n\n`failed to load Kubelet config file /var/lib/kubelet/config.yaml: no such file or directory`",
            "th": "เหลือเวลาอีกเพียงยี่สิบนาทีสุดท้าย\n\nอาร์เทอร์ SSH เข้าไปในเครื่องโหนดที่พัง รันคำสั่ง `systemctl status kubelet`... ปรากฏว่าเซอร์วิส kubelet ดับสนิทและติดลูปแครช!\n\n*ใจเย็นไว้ไอ้อาร์เทอร์* เขาสูดหายใจลึกๆ *เวลาโปรแกรมบนเซิร์ฟเวอร์เปิดแล้วดับ เราต้องดูอะไร? ดู System Logs ไงล่ะ!*\n\nเขารัวคำสั่ง `journalctl -u kubelet -n 30 --no-pager` ทันใดนั้น บรรทัดสีแดงก็ปรากฏขึ้น:\n\n`failed to load Kubelet config file /var/lib/kubelet/config.yaml: no such file or directory`"
        },
        {
            "id": 7,
            "en": "\"A missing config file?!\" Arthur checked the directory with `ls -la /var/lib/kubelet`.\n\nThere it was: someone had accidentally renamed it `config.yml` instead of `config.yaml`!\n\nA classic Linux gotcha! In three seconds, Arthur renamed the file: `mv /var/lib/kubelet/config.yml /var/lib/kubelet/config.yaml`, ran `systemctl restart kubelet`, and hopped back to the master terminal.\n\n`k get nodes`\n\n`wk-node-02   Ready   worker   14m   v1.29.0`\n\nThree minutes remained on the clock! Arthur smiled, took off his glasses, and submitted his exam.",
            "th": "\"ไฟล์คอนฟิกหายไป?!\" อาร์เทอร์ใช้คำสั่ง `ls -la /var/lib/kubelet` ส่องดูในโฟลเดอร์ทันที\n\nโป๊ะเชะ! มีคนไปตั้งชื่อไฟล์ผิดเป็น `config.yml` แทนที่จะเป็น `config.yaml`!\n\nเส้นผมบังภูเขาตามสไตล์ข้อสอบ Linux! อาร์เทอร์เปลี่ยนชื่อไฟล์กลับ: `mv /var/lib/kubelet/config.yml /var/lib/kubelet/config.yaml` รัน `systemctl restart kubelet` แล้วสลับกลับมาเช็กที่เครื่องหลัก:\n\n`k get nodes`\n\n`wk-node-02   Ready   worker   14m   v1.29.0`\n\nเหลือเวลาอีกสามนาทีสุดท้ายบนหน้าจอ! อาร์เทอร์ยิ้มกว้าง ถอดแว่นตาออก แล้วกดส่งข้อสอบด้วยความโล่งอกอย่างแท้จริง"
        },
        {
            "id": 8,
            "en": "Twenty-four hours later, on Monday night after dinner, an email pinged on his phone from the Linux Foundation:\n\n**Subject: Examination Results for Certified Kubernetes Administrator (CKA)**\n\nArthur held his breath, opening the notification.\n\n**🎉 Score: 88% — PASSED (Passing score: 66%)**\n**Credential ID: CKA-2409-ARTHUR-SANGON**\n\nArthur let out a triumphant roar, lifting August and swinging him around the living room as Jane clapped and laughed with tears of pride!",
            "th": "ยี่สิบสี่ชั่วโมงต่อมา ในคืนวันจันทร์หลังอาหารเย็น เสียงแจ้งเตือนอีเมลจาก Linux Foundation ก็ดังขึ้นบนมือถือ:\n\n**Subject: Examination Results for Certified Kubernetes Administrator (CKA)**\n\nอาร์เทอร์กลั้นหายใจ เปิดอีเมลขึ้นมาดู...\n\n**🎉 Score: 88% — PASSED (Passing score: 66%)**\n**Credential ID: CKA-2409-ARTHUR-SANGON**\n\nอาร์เทอร์ตะโกนเฮลั่นบ้าน อุ้มลูกชายหมุนไปรอบห้องนั่งเล่น ท่ามกลางเสียงปรบมือและรอยยิ้มปลาบปลื้มของแพร!"
        },
        {
            "id": 9,
            "en": "He snapped a screenshot of the certificate and shared it to the Blue Team Slack. The channel erupted instantly:\n\n**Liam (ANZ-Lead):** *\"HOLY SMOKES, ARTHUR!! 88% on the CKA?! That is an elite score mate! You are officially dual-certified: AWS Solutions Architect + Certified Kubernetes Administrator!\"*\n\n**Karn:** *\"I'm so proud of you, Arthur! You earned every bit of this with pure grit!\"*\n\n**Liam:** *\"Enjoy the celebration tonight, team. Because next week is the biggest shopping festival in Australia: **Black Friday**. And we're going to need every ounce of your wizardry!\"*",
            "th": "เขาแคปหน้าจอใบเซอร์ CKA ส่งเข้าไปใน Slack ของทีม Blue ช่องแชทระเบิดเสียงฉลองทันที:\n\n**Liam (ANZ-Lead):** *\"HOLY SMOKES, ARTHUR!! 88% ในข้อสอบ CKA เนี่ยนะ?! นี่มันคะแนนระดับหัวกะทิเลยเพื่อน! ตอนนี้คุณคือวิศวกรผู้ถือสองใบเซอร์ระดับโลกคู่กัน: AWS Solutions Architect + Certified Kubernetes Administrator!\"*\n\n**Karn:** *\"พี่ยินดีด้วยจากใจจริงเลยอาร์เทอร์ นายพิสูจน์ตัวเองด้วยหยาดเหงื่อและความมุ่งมั่นจริงๆ!\"*\n\n**Liam:** *\"ฉลองให้เต็มที่คืนนี้นะทุกคน เพราะสัปดาห์หน้าคือเทศกาลช้อปปิ้งที่ใหญ่ที่สุดของออสเตรเลีย: **Black Friday**... และพวกเราต้องพึ่งพาสกิลขั้นเทพของอาร์เทอร์ในการรับศึกใหญ่ครั้งนี้!\"*"
        },
        {
            "id": 10,
            "en": "Arthur looked at the two digital certificates gleaming on his profile. From a fearful displaced legacy coder to a battle-hardened, dual-certified cloud DevOps engineer in just two months.\n\nHe hugged his family tightly. Whatever storms lay ahead on Black Friday, he was ready to face them head-on!",
            "th": "อาร์เทอร์มองดูใบรับรองระดับโลกสองใบที่เปล่งประกายอยู่บนโปรไฟล์ของเขา จากโปรแกรมเมอร์ยุคเก่าที่เคยหวาดกลัว สู่การเป็นวิศวกร Cloud & DevOps ที่ถือสองใบเซอร์มาตรฐานโลกในเวลาเพียงสองเดือน\n\nเขากอดลูกและภรรยาแน่น ไม่ว่าศึกหนัก Black Friday ข้างหน้าจะถาโถมเข้ามาแค่ไหน... เขาพร้อมชนทุกสถานการณ์!"
        }
    ],
    "quiz": [
        {
            "id": "zd15-q1",
            "question": "What was the root cause that prevented the worker node `wk-node-02` from starting its Kubelet service in Task 16?",
            "options": [
                "A typo in the filename: `/var/lib/kubelet/config.yml` instead of `config.yaml`.",
                "The server had run out of disk space.",
                "The Linux kernel was incompatible with AWS.",
                "The root password had expired."
            ],
            "answer": 0,
            "explanation": "Correct! Looking at `journalctl -u kubelet` logs revealed that the kubelet failed because the config file had been incorrectly named `.yml` instead of `.yaml`."
        },
        {
            "id": "zd15-q2",
            "question": "What impressive score did Arthur achieve on his CKA examination?",
            "options": [
                "Score: 88% (PASS)",
                "Score: 66% (PASS)",
                "Score: 70% (PASS)",
                "Score: 100% (PASS)"
            ],
            "answer": 0,
            "explanation": "Correct! Arthur passed with a phenomenal 88% score, far exceeding the 66% passing threshold."
        },
        {
            "id": "zd15-q3",
            "question": "What two prestigious credentials did Arthur now hold simultaneously (dual-certified)?",
            "options": [
                "AWS Solutions Architect - Associate (SAA) & Certified Kubernetes Administrator (CKA).",
                "Google Cloud Digital Leader & Cisco CCNA.",
                "Microsoft Azure Fundamentals & Oracle Java SE.",
                "Scrum Master & PMP."
            ],
            "answer": 0,
            "explanation": "Correct! Arthur achieved dual-certified status across AWS Cloud Architecture and Kubernetes Administration."
        }
    ]
}
