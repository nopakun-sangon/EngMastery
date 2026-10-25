# scripts/ch16.py
# Chapter 16: The Gathering Storm and Terraform's Architecture Magic
# "บทที่ 16: พายุที่กำลังก่อตัว และมนตราเสกตึกของ Terraform"

chapter16 = {
    "id": "zd-ch-16",
    "chapterNumber": 16,
    "collection": "zero-downtime",
    "title": "Chapter 16: The Gathering Storm and Terraform's Architecture Magic",
    "titleTh": "บทที่ 16: พายุที่กำลังก่อตัว และมนตราเสกตึกของ Terraform",
    "coverEmoji": "🏗️",
    "level": "B1",
    "levelBadge": "Workplace IT Novel",
    "wordCount": 980,
    "estimatedTime": "6 นาที",
    "xpReward": 30,
    "summary": "พี่กานต์บินไปเมลเบิร์น มอบหมายให้อาร์เทอร์เป็น Acting Lead ดูแลการเตรียมความพร้อมสำหรับศึก Black Friday อาร์เทอร์ได้เรียนรู้ Terraform (IaC) และช่วยชีวิตระบบ Production จากการที่ภพเกือบสั่งลบเซิร์ฟเวอร์ทั้ง 5 เครื่องด้วยการตรวจ terraform plan อย่างเฉียบขาด!",
    "tags": ["Zero Downtime", "Terraform", "Infrastructure as Code", "AWS EKS", "DevOps", "Workplace English", "Story"],
    "keyVocab": [
        {
            "word": "Infrastructure as Code (IaC)",
            "ipa": "/ˈɪn.frəˌstrʌk.tʃɚ æz koʊd/",
            "th": "การจัดการและสร้างโครงสร้างพื้นฐานระบบคลาวด์ด้วยโค้ดคำสั่ง",
            "example": "Using Infrastructure as Code ensures that cloud environments can be reliably reproduced and audited."
        },
        {
            "word": "Blueprint",
            "ipa": "/ˈbluː.prɪnt/",
            "th": "พิมพ์เขียว หรือแบบแปลนการสร้างระบบ (เปรียบเทียบกับคำสั่ง terraform plan)",
            "example": "Before applying any changes, always review the execution blueprint to see what will be created or destroyed."
        },
        {
            "word": "Catastrophe",
            "ipa": "/kəˈtæs.trə.fi/",
            "th": "หายนะ หรือวิกฤตความเสียหายร้ายแรง",
            "example": "Arthur's quick inspection prevented a major production catastrophe that could have cost millions."
        },
        {
            "word": "Spot on",
            "ipa": "/spɑːt ɑːn/",
            "th": "แม่นยำ ถูกเผง หรือตรงจุดอย่างสมบูรณ์แบบ",
            "example": "Karn messaged Arthur that his code review was spot on."
        },
        {
            "word": "Acting Lead",
            "ipa": "/ˈæk.tɪŋ liːd/",
            "th": "รักษาการหัวหน้าทีม (ผู้ปฏิบัติหน้าที่แทนชั่วคราว)",
            "example": "Arthur stepped up as Acting Lead for the Blue Team while Karn was away in Melbourne."
        }
    ],
    "paragraphs": [
        {
            "id": 1,
            "en": "Wednesday morning. Karn walked into the 22nd-floor office wheeling a compact travel suitcase.\n\n\"Arthur, Phop, Raj... As you know, I'm flying out to Melbourne this afternoon to plan next year's roadmap with Liam for a full week,\" Karn announced with a warm grin, clapping Arthur firmly on the shoulder. Arthur's company profile now proudly displayed his shiny new CKA digital badge alongside his AWS certification.",
            "th": "เช้าวันพุธ พี่กานต์เดินเข้ามาในออฟฟิศพร้อมกับกระเป๋าเดินทางใบย่อม\n\n\"อาร์เทอร์ ภพ ราจ... อย่างที่รู้กันว่าบ่ายนี้พี่ต้องบินไปประชุมวางแผนงานปีหน้าที่เมลเบิร์นกับเลียมเป็นเวลาหนึ่งสัปดาห์เต็ม\" พี่กานต์พูดพลางตบไหล่อาร์เทอร์ที่ตอนนี้มีป้ายดิจิทัล CKA ประดับอยู่ในโปรไฟล์บริษัทเรียบร้อยแล้ว"
        },
        {
            "id": 2,
            "en": "\"And this coming Friday is Australia's Black Friday... the biggest annual retail bonanza of the year! Traffic won't just spike five times like a standard Flash Sale—it will surge up to fifteen times normal volume! While I'm up in the air and stuck in cross-border meetings, Arthur will be stepping up as Acting Lead for Blue Team, steering all battle preparations right here in Bangkok!\"",
            "th": "\"และในวันศุกร์ที่จะถึงนี้ คือเทศกาล Black Friday ของออสเตรเลีย... แคมเปญช้อปปิ้งที่ใหญ่ที่สุดในรอบปี ที่ทราฟฟิกจะไม่ได้มาแค่ 5 เท่าเหมือนตอน Flash Sale แต่จะพุ่งสูงถึง 15 เท่า จากปกติ! ระหว่างที่พี่อยู่บนเครื่องบินและติดประชุมที่นู่น อาร์เทอร์จะต้องรับหน้าที่เป็น Acting Lead (รักษาการหัวหน้าทีม Blue) ดูแลการเตรียมความพร้อมทั้งหมดที่นี่!\""
        },
        {
            "id": 3,
            "en": "The words *Acting Lead* made Arthur stand tall with unwavering resolve.\n\n\"You can count on us, Karn. Phop, Raj, and I will keep the fort rock-solid while you're away!\"\n\n\"Outstanding,\" Karn nodded. \"Our first mission to brace for Black Friday: We must expand our AWS EKS cluster capacity and spin up a dedicated high-speed AWS ElastiCache Redis cluster to offload Raj's database tier.\"",
            "th": "คำว่า รักษาการหัวหน้าทีม ทำให้อาร์เทอร์ยืดตัวตรงด้วยความมุ่งมั่น\n\n\"ไว้ใจได้เลยครับพี่กานต์ ผมกับภพและพี่ราจจะดูแลทางนี้ให้ดีที่สุดครับ\"\n\n\"ดีมาก... และงานแรกของการเตรียมรับพายุ Black Friday คือ เราต้องขยายขนาดคลัสเตอร์ AWS EKS และสร้างระบบแคชข้อมูลความเร็วสูง (AWS ElastiCache Redis) เพิ่มขึ้นมาอีกชุดหนึ่งเพื่อช่วยแบ่งเบาภาระฐานข้อมูลของราจ\""
        },
        {
            "id": 4,
            "en": "Karn pointed firmly at the monitor.\n\n\"Under no circumstances is anyone allowed to click around in the AWS Console web UI! If you build infrastructure manually with point-and-click, the moment the sale ends, nobody will remember what knobs were turned where... We must manage everything with code. That brings us to your final DevOps weapon: **Terraform (Infrastructure as Code)**!\"",
            "th": "พี่กานต์ชี้ไปที่หน้าจอ\n\n\"แต่ห้ามใครเข้าไปกดสร้างเซิร์ฟเวอร์ด้วยมือในหน้าเว็บ AWS Console เด็ดขาดนะ! เพราะถ้ากดสร้างด้วยมือ วันไหนจบแคมเปญแล้วอยากลบออก เราจะลืมว่าเราไปกดตั้งค่าอะไรไว้ตรงไหนบ้าง... เราต้องใช้เครื่องมือชิ้นสุดท้ายที่จะทำให้อาร์เทอร์กลายเป็น DevOps ที่สมบูรณ์แบบ นั่นคือ Terraform (Infrastructure as Code)!\""
        },
        {
            "id": 5,
            "en": "Arthur had heard Elena and Raj mention Terraform before—a powerhouse tool represented by a geometric purple 'T' logo.\n\n\"Think of it like this, mate,\" Raj chimed in with fluent English that Arthur could now comprehend with 90% ease. \"If Helm and Argo CD write code to summon the 'pods (tenants inside the building)', Terraform writes code to construct the entire skyscraper: the physical EC2 hosts, VPC highways, subnets, and AWS managed databases from thin air!\"",
            "th": "อาร์เทอร์เคยเห็นเอเลน่ากับราจพูดถึงคำว่า Terraform มาบ้างแล้ว มันคือเครื่องมือที่มีโลโก้เป็นรูปตัว T สีม่วง\n\n\"ถ้า Helm กับ Argo CD คือการเขียนโค้ดเพื่อสั่งเสก 'พอด (คนเช่าตึก)'... เจ้า Terraform ก็คือการเขียนโค้ดเพื่อสั่งเสก 'ตัวตึกเซิร์ฟเวอร์, ถนน VPC, และฐานข้อมูลบน AWS' ทั้งหมดขึ้นมาจากความว่างเปล่า!\" ราจช่วยอธิบายเสริมด้วยภาษาอังกฤษที่ตอนนี้อาร์เทอร์ฟังเข้าใจได้เกือบ 90% แล้วโดยไม่ต้องให้ใครแปล"
        },
        {
            "id": 6,
            "en": "After Karn departed for the airport, Arthur gathered Raj and Phop to dive into the Terraform configuration files (`.tf`).\n\nTerraform operates on two sacred commands every engineer must burn into memory:\n\n1. `terraform plan` (Inspect the Blueprint before building): Calculates what changes will occur—Green (+) for added resources, Yellow (~) for in-place modifications, and Red (-) for destroyed resources.\n2. `terraform apply` (Drive the piles into the ground): Executes the exact approved blueprint against cloud infrastructure.",
            "th": "หลังจากพี่กานต์เดินทางไปสนามบิน อาร์เทอร์ในฐานะรักษาการหัวหน้าทีมก็นั่งลงศึกษาไฟล์โค้ดของ Terraform (.tf) ร่วมกับราจและภพทันที\n\nหลักการทำงานของ Terraform นั้นมี 2 คำสั่งศักดิ์สิทธิ์ที่ต้องจำให้ขึ้นใจ:\n\n1. `terraform plan` (ดูพิมพ์เขียวก่อนสร้างจริง): สั่งให้ระบบคำนวณดูว่า ถ้าเราแก้โค้ดแบบนี้ มันจะไป สร้างเพิ่ม (+ สีเขียว), แก้ไข (~ สีเหลือง), หรือ ทุบทิ้ง (- สีแดง) ตึกหลังไหนบน AWS บ้าง\n2. `terraform apply` (ลงมือตอกเสาเข็มจริง): สั่งให้สร้างหรือทุบตามพิมพ์เขียวที่ได้ตรวจดูแล้ว"
        },
        {
            "id": 7,
            "en": "\"Leave the cluster scaling to me, Arthur!\" Phop offered eagerly. \"I'll edit the code to bump our Sydney EKS nodes from 5 to 20 servers!\"\n\nPhop opened the Terraform repository. He updated the desired capacity to 20. But thinking it sounded cooler, he also renamed the node group parameter from `syd-prod-nodes` to `syd-blackfriday-nodes` without a second thought.\n\nHe pushed a Git Pull Request, which automatically ran `terraform plan` in GitHub Actions.",
            "th": "\"เดี๋ยวผมช่วยแก้โค้ดเพิ่มจำนวนเครื่องเซิร์ฟเวอร์ของ EKS จาก 5 เครื่องเป็น 20 เครื่องให้เองครับพี่อาร์เทอร์!\" ภพอาสาด้วยความกระตือรือร้น\n\nภพเข้าไปแก้ไฟล์โค้ด Terraform ของคลัสเตอร์ซิดนีย์เพื่อเพิ่มจำนวนเครื่อง พร้อมกับแอบแก้ชื่อกลุ่มเซิร์ฟเวอร์ (Node Group Name) จากชื่อเก่า syd-prod-nodes ให้เป็นชื่อใหม่ที่ดูเท่กว่าเดิมคือ syd-blackfriday-nodes โดยไม่ได้คิดอะไร\n\nจากนั้นภพก็ส่งโค้ดขึ้นไปใน GitHub เพื่อให้ระบบรันคำสั่ง terraform plan ออกมาเตรียมให้กดยืนยัน"
        },
        {
            "id": 8,
            "en": "\"Arthur, the PR is up! Could you hit **Approve** so GitHub Actions can run `terraform apply`? That way we can wrap this up before dinner!\" Phop called out cheerfully.\n\nArthur moved his cursor toward the green Approve button... But a deep instinct forged from weeks of exams and high-stakes incidents whispered in his ear: *'As a lead, you must inspect every single line of the plan with your own eyes before granting approval.'*\n\nArthur clicked to expand the 200-line plan output. He scrolled down to the summary footer... and his blood ran stone cold!",
            "th": "\"พี่อาร์เทอร์ครับ ผมส่งโค้ดขึ้นไปแล้ว พี่ช่วยกด Approve (อนุมัติ) ให้มันรัน terraform apply หน่อยครับ จะได้เสร็จก่อนเลิกงาน!\" ภพหันมาบอก\n\nอาร์เทอร์กำลังจะเลื่อนเมาส์ไปกดปุ่มอนุมัติตามที่รุ่นน้องบอก... แต่สัญชาตญาณของคนที่ผ่านสนามสอบและวิกฤตมานับครั้งไม่ถ้วน กระซิบเตือนเขาว่า: ‘เป็นหัวหน้าทีม ต้องตรวจพิมพ์เขียว (plan) ทุกบรรทัดด้วยตาตัวเองก่อนกดอนุมัติเสมอ!’\n\nอาร์เทอร์คลิกเปิดดูผลลัพธ์ของ terraform plan ที่ยาวเหยียดกว่าสองร้อยบรรทัด เขาเลื่อนลงมาดูบรรทัดสรุปสุดท้าย... แล้วเลือดในกายของอาร์เทอร์ก็เย็นเฉียบไปทั้งร่าง!"
        },
        {
            "id": 9,
            "en": "```text\nPlan: 20 to add, 0 to change, 5 to destroy.\n# aws_eks_node_group.main must be replaced (-/+ destroy and then create replacement)\n```\n\nA glaring red marker flashed: **5 to destroy**!\n\n\"Phop!! STOP! Do NOT apply!\" Arthur yelled, instantly clicking **Reject** on GitHub!\n\n\"Wait, what happened, Arthur? I only bumped the node count and updated the name for Black Friday!\" Phop asked, startled.",
            "th": "```text\nPlan: 20 to add, 0 to change, 5 to destroy.\n# aws_eks_node_group.main must be replaced (-/+ destroy and then create replacement)\n```\n\nมีเครื่องหมายลบสีแดง 5 to destroy (สั่งทุบทิ้ง 5 เครื่อง) โผล่ขึ้นมาหรา!\n\n\"ภพ!! หยุดเดี๋ยวนี้! ห้ามกด Apply เด็ดขาด!!\" อาร์เทอร์ร้องเสียงหลง รีบกดปุ่ม Reject (ปฏิเสธคำขอ) ใน GitHub ทันที!\n\n\"อ้าว ทำไมล่ะครับพี่อาร์เทอร์? ผมแค่เพิ่มจำนวนเครื่องกับเปลี่ยนชื่อกลุ่มเซิร์ฟเวอร์ให้มันสื่อถึงงาน Black Friday เองนะครับ?\" ภพถามหน้าเหรอหรา"
        },
        {
            "id": 10,
            "en": "Raj peered over Arthur's shoulder, turned ghost white, and clutched his head in horror:\n\n\"Oh my goodness! Phop! In Terraform, modifying `node_group_name` forces a **Replacement (Destroy and Recreate)**! If Arthur had clicked approve, Terraform would have terminated all 5 existing Production servers in Sydney right this second before creating the new ones!\"\n\nPhop went pale as a sheet of paper, cold sweat drenching his brow. \"D-destroy all five live production servers right now?! Just because I altered one line of text?!\"",
            "th": "ราจที่รีบชะโงกหน้ามาดูผล plan ถึงกับหน้าซีดเผือด ยกมือทึ้งหัวตัวเอง \"Oh my goodness! Phop! In Terraform, changing the node_group_name forces a Replacement (Destroy and Recreate)! If Arthur had clicked approve, Terraform would have destroyed all 5 existing Production servers in Sydney right now before creating the new ones!\"(คุณพระช่วย! ภพ! ใน Terraform การเปลี่ยนชื่อกลุ่มโหนดจะบังคับให้ระบบทำการ 'ทุบทิ้งแล้วสร้างใหม่'! ถ้าเมื่อกี้อาร์เทอร์เผลอกดอนุมัติไป Terraform จะทำการระเบิดเครื่องเซิร์ฟเวอร์ Production ทั้ง 5 เครื่องที่ซิดนีย์ทิ้งทันทีก่อนที่จะสร้างเครื่องใหม่ขึ้นมา!)\n\nภพหน้าซีดเป็นกระดาษ A4 เหงื่อแตกพลั่กออกเต็มหน้าผาก \"ทะ... ทุบทิ้งทั้ง 5 เครื่องที่กำลังรันงานจริงอยู่ตอนนี้เลยเหรอครับ?! แค่เปลี่ยนชื่อบรรทัดเดียวเนี่ยนะ?!\""
        },
        {
            "id": 11,
            "en": "\"Exactly, Phop!\" Arthur exhaled heavily, his heart still thumping against his chest. \"In Infrastructure as Code, renaming core cloud resources doesn't mean swapping a sticker on the wall... It means dispatching a wrecking ball to demolish the old skyscraper completely before erecting a new one! If we had approved that, all Australian services would have gone completely dark for at least 15 minutes!\"\n\n\"I'm so sorry, Arthur! I honestly had no idea Terraform worked that way. Thank you so much for reading the plan!\" Phop stammered with trembling hands.",
            "th": "\"ใช่แล้วภพ!\" อาร์เทอร์ถอนหายใจเฮือกใหญ่ หัวใจยังเต้นรัวไม่หาย \"ในโลกของ Infrastructure as Code การเปลี่ยนชื่อทรัพยากรหลัก มันไม่ได้แปลว่าการเอายางลบไปลบป้ายชื่อแล้วเขียนใหม่... แต่มันแปลว่าการสั่งรถแบ็กโฮมาทุบตึกเก่าทิ้งทั้งหลัง แล้วค่อยสร้างตึกใหม่ที่มีชื่อใหม่ขึ้นมาแทน! ถ้าพี่กดอนุมัติไปเมื่อกี้ แอปทั้งหมดของออสเตรเลียจะดับมืดไปอย่างน้อยสิบห้านาทีเลยนะ!\"\n\n\"ผม... ผมขอโทษครับพี่อาร์เทอร์! ผมไม่รู้จริงๆ ว่าการเปลี่ยนชื่อใน Terraform มันร้ายแรงขนาดนี้ ขอบคุณพี่มากนะครับที่อ่าน plan อย่างละเอียดก่อน!\" ภพยกมือไหว้รุ่นพี่ด้วยมือที่สั่นเทา รู้สึกเหมือนตัวเองเพิ่งรอดตายจากการทำบริษัทสูญเงินร้อยล้านมาได้อย่างหวุดหวิด"
        },
        {
            "id": 12,
            "en": "Arthur patted Phop's shoulder reassuringly.\n\n\"Take it as a golden rule, Phop. When using Terraform, never get blinded by the green additions (+ add). Always look at the red deletions (- destroy). If you see `must be replaced` or any deletion number above zero on Production... stop in your tracks immediately!\"\n\nArthur edited the code, keeping the original node group name and modifying solely the instance counts. He also appended a separate block for the Redis cluster. When he re-ran `terraform plan`, the output read cleanly:\n\n```text\nPlan: 15 to add, 1 to change, 0 to destroy.\n```\n\nZero to destroy!",
            "th": "อาร์เทอร์ตบไหล่ภพเบาๆ เพื่อเรียกสติรุ่นน้อง \"จำไว้เป็นบทเรียนนะภพ เวลาใช้ Terraform ห้ามดูแค่ตัวเลขสีเขียว (+ add) อย่างเดียว ต้องดูตัวเลขสีแดง (- destroy) เสมอ ถ้าเห็นคำว่า must be replaced หรือมีตัวเลขสั่งทุบทิ้งแม้แต่เลข 1 บน Production... ต้องหยุดมือทันที!\"\n\nอาร์เทอร์จัดการแก้โค้ดของภพให้ใช้ชื่อกลุ่มเซิร์ฟเวอร์ชื่อเดิม เปลี่ยนแค่ตัวเลขจำนวนเครื่อง และเขียนโค้ดสร้างตึกใหม่แยกต่างหากขึ้นมาอีกชุดแทน คราวนี้เมื่อรัน terraform plan ผลลัพธ์ที่ได้คือ:\n\n```text\nPlan: 15 to add, 1 to change, 0 to destroy.\n```\n\nศูนย์การทุบทิ้ง (0 to destroy)!"
        },
        {
            "id": 13,
            "en": "Arthur authorized the deployment. In minutes, 15 fresh EC2 worker nodes alongside an ElastiCache Redis cluster spun up seamlessly in Sydney AWS—an impregnable fortress prepared for Friday's mega-event.\n\nLate that evening, Karn landed in Melbourne. Reviewing the GitHub PR history and noticing Arthur's life-saving intervention, he sent Arthur a private ping:\n\n*\"Karn: Just saw today's Terraform PR... Spot on review, Arthur. Blue Team is in the best hands. Lead the charge on Friday, Commander!\"*\n\nArthur looked at the message with deep pride. With GitHub Actions, Argo CD, Helm, EKS, and Terraform at his command, he was ready to stand on the front lines for whatever Black Friday brought!",
            "th": "อาร์เทอร์กดปุ่มอนุมัติให้ Terraform ทำงาน เครื่องเซิร์ฟเวอร์ใหม่ 15 เครื่องพร้อมระบบแคชข้อมูล Redis ถูกเสกขึ้นมาบนคลาวด์ AWS ที่ซิดนีย์อย่างปลอดภัยและไร้รอยต่อ เตรียมพร้อมเป็นป้อมปราการเหล็กสำหรับศึกใหญ่ในวันศุกร์นี้เรียบร้อยแล้ว!\n\nค่ำวันนั้น พี่กานต์ที่เพิ่งลงจากเครื่องบินที่เมลเบิร์น ได้เข้ามาเห็นประวัติการตรวจโค้ดใน GitHub และเห็นว่าอาร์เทอร์เพิ่งช่วยหยุดยั้งหายนะจากการสั่งทุบเซิร์ฟเวอร์ด้วย Terraform เอาไว้ได้ทันเวลา\n\nข้อความสั้นๆ จากพี่เลี้ยงถูกส่งมาหาอาร์เทอร์ทางไลน์ส่วนตัว:\n\nพี่กานต์: พี่เพิ่งเห็น PR Terraform ของวันนี้... นายอ่าน plan ขาดมากอาร์เทอร์ พี่คิดไม่ผิดจริงๆ ที่ฝากทีม Blue ไว้กับนาย วันศุกร์นี้ลุยศึก Black Friday ให้เต็มที่นะ ท่านแม่ทัพ!\n\nอาร์เทอร์มองข้อความนั้นด้วยรอยยิ้มภูมิใจ ตอนนี้ทั้งอาวุธ GitHub Actions, Argo CD, Helm, AWS EKS, และ Terraform ได้เข้ามาอยู่ในมือของเขาอย่างสมบูรณ์แล้ว... ไม่ว่าพายุในวันศุกร์นี้จะรุนแรงแค่ไหน คุณพ่อวัยสามสิบคนนี้ก็พร้อมที่จะยืนหยัดอยู่หน้าด่านเพื่อรับมือกับมัน!"
        }
    ],
    "quiz": [
        {
            "id": "zd16-q1",
            "question": "Why did changing the `node_group_name` in Terraform trigger a catastrophic '5 to destroy' plan?",
            "options": [
                "Because renaming certain immutable cloud resources forces Terraform to destroy existing resources before creating replacements.",
                "Because AWS does not allow changing the number of servers on a Wednesday.",
                "Because Terraform ran out of API tokens.",
                "Because GitHub Actions rejected the commit message."
            ],
            "answer": 0,
            "explanation": "Correct! Renaming core infrastructure resources like node groups in Terraform forces a replacement (-/+ destroy then create), which would have taken down all active production nodes."
        },
        {
            "id": "zd16-q2",
            "question": "What is the primary difference between `terraform plan` and `terraform apply`?",
            "options": [
                "`terraform plan` previews proposed changes as a blueprint without modifying resources, while `terraform apply` executes the changes.",
                "`terraform plan` installs Linux packages, while `terraform apply` restarts docker containers.",
                "`terraform plan` bills your credit card, while `terraform apply` requests a refund.",
                "`terraform plan` runs locally offline, while `terraform apply` formats your local hard drive."
            ],
            "answer": 0,
            "explanation": "Correct! `terraform plan` computes and previews the diff (add/change/destroy) without touching real infrastructure; `terraform apply` provisions the actual resources."
        },
        {
            "id": "zd16-q3",
            "question": "What golden rule did Arthur impart to Phop regarding production Terraform reviews?",
            "options": [
                "Never focus solely on green additions (+); always scrutinize red deletions (-) and halt immediately if any production resource is marked for destruction.",
                "Always click Approve as fast as possible to beat the deadline.",
                "Only check the plan if tests fail.",
                "Ignore yellow changes because they are harmless."
            ],
            "answer": 0,
            "explanation": "Correct! Arthur emphasized never getting blinded by green additions (+) and always inspecting red deletions (-) on production."
        }
    ]
}
