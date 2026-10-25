# scripts/ch4.py
# Chapter 4: The Deadly Indentation and Elena's Checkpoint

chapter4 = {
    "id": "zd-ch-04",
    "chapterNumber": 4,
    "collection": "zero-downtime",
    "title": "Chapter 4: The Deadly Indentation and Elena's Checkpoint",
    "titleTh": "บทที่ 4: ย่อหน้ามรณะกับด่านตรวจของเอเลน่า",
    "coverEmoji": "🛡️",
    "level": "B1",
    "levelBadge": "Workplace IT Novel",
    "wordCount": 960,
    "estimatedTime": "6 นาที",
    "xpReward": 30,
    "summary": "อาร์เทอร์ต้องต่อสู้กับการเคาะเว้นวรรคในไฟล์ YAML และพบกับเอเลน่า หัวหน้าทีม Security สุดเฮี้ยบ ผู้สั่งห้ามใช้รหัสผ่านถาวร และผลักดันให้อาร์เทอร์เรียนรู้เทคโนโลยีความปลอดภัยระดับสูงอย่าง OIDC จนผ่านการอนุมัติสำเร็จ",
    "tags": ["Zero Downtime", "YAML", "Cloud Security", "OIDC", "DevSecOps"],
    "keyVocab": [
        {
            "word": "Indentation",
            "ipa": "/ˌɪn.denˈteɪ.ʃən/",
            "th": "การย่อหน้า หรือการเคาะเว้นวรรคช่องไฟในไฟล์โค้ด",
            "example": "YAML relies strictly on indentation to define its structure."
        },
        {
            "word": "Strictly forbid",
            "ipa": "/ˈstrɪkt.li fɚˈbɪd/",
            "th": "สั่งห้ามโดยเด็ดขาด",
            "example": "Our policy strictly forbids storing static credentials in GitHub."
        },
        {
            "word": "Temporary token",
            "ipa": "/ˈtem.pə.rer.i ˈtoʊ.kən/",
            "th": "โทเค็นหรือบัตรผ่านชั่วคราวที่มีกำหนดอายุการใช้งานสั้นๆ",
            "example": "OIDC provides a short-lived temporary token that expires in 15 minutes."
        },
        {
            "word": "Assume role",
            "ipa": "/əˈsuːm roʊl/",
            "th": "การสวมบทบาทเพื่อรับสิทธิ์เข้าถึงทรัพยากรบนคลาวด์ชั่วคราว",
            "example": "The workflow assumes an IAM role dynamically during the build."
        },
        {
            "word": "Clean code",
            "ipa": "/kliːn koʊd/",
            "th": "โค้ดที่เขียนอย่างเป็นระเบียบ สะอาดตา และถูกต้องตามมาตรฐาน",
            "example": "Clean code. Approved without further changes."
        }
    ],
    "paragraphs": [
        {
            "id": 1,
            "en": "\"One... two... hit the spacebar twice, and only then type `steps:`...\"\n\nArthur muttered to himself like a wizard chanting a spell. Both of his eyes were fixed intently on his code editor (VS Code), where faint vertical dashed guidelines spanned from top to bottom.",
            "th": "\"หนึ่ง... สอง... เคาะวรรคสองที แล้วค่อยพิมพ์คำว่า steps:\"\n\nอาร์เทอร์พึมพำกับตัวเองเหมือนคนกำลังท่องคาถา ดวงตาทั้งสองข้างจ้องเขม็งไปที่หน้าจอโปรแกรมเขียนโค้ด (VS Code) ซึ่งมีเส้นประแนวตั้งจางๆ เรียงรายอยู่เต็มหน้าจอ"
        },
        {
            "id": 2,
            "en": "It was Wednesday afternoon. Throughout the morning, Arthur had uncovered a brand-new truth in the world of DevOps: something even more daunting than memorizing English technical terms was crafting a file named YAML!\n\nBack when he was a traditional programmer writing code in older languages, extra spaces or newlines never mattered as long as opening and closing curly braces `{ }` matched. But with this automated blueprint for GitHub Actions, the entire hierarchy was measured by raw indentation—spacing with the spacebar.\n\nMiss by a single space, or add one space too many... and the whole pipeline crashes without mercy!",
            "th": "บ่ายวันพุธแล้ว ตลอดครึ่งเช้าที่ผ่านมา อาร์เทอร์ได้ค้นพบสัจธรรมข้อใหม่ของโลก DevOps... นั่นคือสิ่งที่น่าปวดหัวกว่าการจำคำศัพท์ภาษาอังกฤษ คือการเขียนไฟล์ที่ชื่อว่า YAML!\n\nสมัยที่เขาเป็นโปรแกรมเมอร์ยุคเก่า เวลาเขียนโค้ดภาษาอื่น จะเคาะวรรคกี่ทีหรือขึ้นบรรทัดใหม่ตรงไหนก็ได้ ขอแค่มีเครื่องหมายวงเล็บปีกกา { } ปิดท้ายให้ครบ โปรแกรมก็ทำงานได้ปกติ แต่กับไฟล์ใบสั่งงานของ GitHub Actions ที่เขาต้องเขียนขึ้นมานี้ มันวัดโครงสร้างทุกอย่างด้วย \"การเคาะ Spacebar (Indentation)\"\n\nเคาะขาดไปหนึ่งช่อง หรือเคาะเกินมาหนึ่งที... ระบบพังทันทีแบบไม่มีการประนีประนอม!"
        },
        {
            "id": 3,
            "en": "\"Alright, attempt number five... This time it has to pass.\"\n\nArthur took a deep breath and ran `git push` to upload his workflow file named `deploy.yml` to GitHub. The moment the code arrived, the Actions tab on GitHub started spinning in yellow.\n\nHe watched with bated breath as GitHub spun up a temporary runner to execute his steps. Step one: Set up job—passed. Step two: Build Docker Image—passed. Then came step three: push the container box to Amazon ECR in Sydney.\n\nPing! A striking red cross appeared before his eyes, followed by a terse error message:\n\nError: Credentials could not be loaded",
            "th": "\"เอาล่ะ รอบที่ห้า... คราวนี้แหละต้องผ่าน\"\n\nอาร์เทอร์สูดหายใจลึก พิมพ์คำสั่ง git push เพื่อส่งไฟล์ใบสั่งงานที่ชื่อว่า deploy.yml ขึ้นไปทดสอบบน GitHub ทันทีที่โค้ดถูกส่งขึ้นไป เมนู Actions บนหน้าเว็บก็เริ่มหมุนติ้วๆ สีเหลือง\n\nเขานั่งลุ้นตัวโก่ง มองดูเครื่องเซิร์ฟเวอร์ชั่วคราวที่ GitHub เสกขึ้นมาทำงานตามใบสั่งของเขา ขั้นตอนที่หนึ่ง ผ่าน... ขั้นตอนที่สอง กำลังแพ็กโค้ดเป็น Docker Image ผ่าน... มาถึงขั้นตอนที่สาม คือการส่งกล่องโค้ดไปเก็บที่โกดังของ AWS (Amazon ECR) ที่ซิดนีย์\n\nตึ๊ง! เครื่องหมายกากบาทสีแดงเถือกโผล่ขึ้นมาตรงหน้า พร้อมข้อความฟ้องสั้นๆ ว่า:Error: Credentials could not be loaded"
        },
        {
            "id": 4,
            "en": "\"Sigh... stuck on AWS permissions again,\" Arthur sighed, scratching his head.\n\nJust as he was considering copying his personal AWS Access Key and Secret Key directly into GitHub repository settings so he could get the job done, confident high-heeled footsteps approached, accompanied by a brisk, cool sporty fragrance.\n\n\"Are you trying to use long-lived AWS keys in GitHub Actions, Arthur?\"\n\nThe voice was spoken in an Eastern European accent—razor-sharp, chilling, and pronouncing every syllable with crystalline clarity. Arthur jumped in his seat and spun his chair around in a flash.",
            "th": "\"เฮ้อ... ติดเรื่องสิทธิ์การเข้าถึง AWS อีกแล้วแฮะ\" อาร์เทอร์ถอนหายใจ ยกมือขึ้นเกาหัวแกรกๆ\n\nจังหวะที่เขากำลังคิดว่าจะเอาคีย์รหัสผ่าน (Access Key & Secret Key) ของ AWS ที่ตัวเองมีอยู่ ไปแปะใส่ไว้ในตั้งค่าของ GitHub ตรงๆ เลยดีไหมเพื่อให้งานเดินต่อได้ เสียงฝีเท้าส้นสูงที่เดินอย่างมั่นใจก็ดังใกล้เข้ามา พร้อมกับกลิ่นน้ำหอมแนวสปอร์ตเย็นๆ\n\n\"Are you trying to use long-lived AWS keys in GitHub Actions, Arthur?\"\n(คุณกำลังคิดจะใช้คีย์รหัสผ่านแบบถาวรของ AWS ใน GitHub Actions เหรอคะ อาร์เทอร์?)\n\nเสียงภาษาอังกฤษสำเนียงยุโรปตะวันออกที่ชัดเจนทุกพยางค์และเย็นยะเยือกดังขึ้นจากด้านหลัง อาร์เทอร์สะดุ้งสุดตัว รีบหันเก้าอี้กลับไปมอง"
        },
        {
            "id": 5,
            "en": "Standing with arms crossed, gazing down at his screen, was a tall, athletic woman with platinum blonde hair tied back tightly. Dressed in a sleek black button-down shirt, her sharp face held a calm, piercing expression. It was Elena—lead of the Green Team, the iron-willed guardian of the company's cybersecurity!\n\nBehind Elena, Phop was frantically making throat-slashing gestures with wide, terrified eyes, signaling danger to Arthur.\n\n\"U-um... Hi, Elena.\" Arthur's tongue tripped over itself. He sat bolt upright like a military recruit facing a drill sergeant. \"I want to push... Docker image to AWS ECR. But it says error.\"\n\nHe strung together the best sentence he could manage, beads of sweat forming along his hairline as he met her sharp blue eyes.",
            "th": "หญิงสาวร่างสูงโปร่งผมสีบลอนด์สว่างมัดรวบตึง ใบหน้าคมเข้มเรียบนิ่งในชุดเสื้อเชิ้ตสีดำสนิท กำลังยืนกอดอกมองหน้าจอของเขาอยู่... ‘เอเลน่า’ (Elena) หัวหน้าทีมสีเขียว (Green Team) ผู้คุมกฎเหล็กด้าน Security ของบริษัทนั่นเอง!\n\nข้างหลังเอเลน่า ภพที่นั่งอยู่โต๊ะถัดไปแอบทำท่าปาดคอตัวเองพร้อมทำหน้าสยองส่งซิกมาให้อาร์เทอร์\n\n\"อะ... เอ่อ... Hi, Elena.\" อาร์เทอร์ลิ้นพันกัน รีบขยับตัวนั่งหลังตรงแหน่วเหมือนทหารเกณฑ์เจอครูฝึก \"I want to push... Docker image to AWS ECR. But it says error.\"\n\nเขาพยายามเรียงประโยคเท่าที่นึกออก เหงื่อเริ่มซึมตามไรผมเมื่อสบตากับดวงตาสีฟ้าคมกริบของเธอ"
        },
        {
            "id": 6,
            "en": "Elena stepped closer and pointed a slender finger at Arthur's screen.\n\n\"In our company, we strictly forbid putting static AWS Access Keys into GitHub.\" She slowed her cadence slightly upon noticing Arthur's intense focus, though the terms that followed made Arthur's head spin. \"If someone compromises GitHub, they gain our keys forever. You must use OIDC (OpenID Connect) to assume an IAM Role dynamically. No static keys allowed. That is the Green Team policy.\"\n\nArthur blinked rapidly. His brain could only piece together that putting static keys in GitHub was forbidden because a breach would be catastrophic... and he had to use something called O-I-D-C instead!",
            "th": "เอเลน่าขยับเข้ามาใกล้ ชี้ปลายนิ้วเรียวไปที่หน้าจอของอาร์เทอร์\n\n\"In our company, we strictly forbid putting static AWS Access Keys into GitHub.\" เธอพูดช้าลงนิดหน่อยเมื่อเห็นอาร์เทอร์ตั้งใจฟัง แต่คำศัพท์ที่ตามมากลับทำให้อาร์เทอร์มึนตึ้บ \"If someone hacks GitHub, they get our keys forever. You must use OIDC (OpenID Connect) to assume an IAM Role dynamically. No static keys allowed. That's the Green Team policy.\"\n\nอาร์เทอร์กะพริบตาปริบๆ สมองของเขาจับใจความได้แค่ว่า ห้ามเอาคีย์รหัสผ่านไปใส่ใน GitHub เด็ดขาด เพราะถ้าโดนแฮกจะจบเห่... ให้ไปใช้อะไรสักอย่างที่ชื่อว่า โอ-ไอ-ดี-ซี แทน!"
        },
        {
            "id": 7,
            "en": "\"O-I-D-C...?\" Arthur repeated quietly.\n\n\"Yes, OIDC.\" Elena nodded once. She picked up a marker from Arthur's desk and wrote bold capital letters on a notepad for him:\n\nGitHub OIDC -> AWS IAM Role (Temporary Token)\n\n\"Look up this keyword in our internal Confluence wiki. I wrote a security blueprint about it last month. Once you write the config, send a Pull Request to Green Team for approval.\"\n\nWith that, the formidable security chief set the pen down, turned gracefully on her heels, and walked back to the Green Team zone, leaving Arthur holding the notepad mid-air.",
            "th": "\"โอ-ไอ-ดี-ซี...?\" อาร์เทอร์ทวนคำเสียงเบา\n\n\"Yes, OIDC.\" เอเลน่าพยักหน้าครั้งหนึ่ง ก่อนจะหยิบปากกาเมจิกบนโต๊ะของอาร์เทอร์ขึ้นมาเขียนตัวอักษรภาษาอังกฤษตัวใหญ่ๆ ลงบนกระดาษโน้ตให้เขา\n\nGitHub OIDC -> AWS IAM Role (Temporary Token)\n\n\"Look up this keyword in our internal Confluence wiki. I wrote a security guide about it last month. Once you write the config, send a Pull Request to Green Team for approval.\"\n(ลองค้นหาคีย์เวิร์ดนี้ในเว็บคู่มือภายในบริษัทดูนะคะ ฉันเขียนคู่มือความปลอดภัยเรื่องนี้ไว้เมื่อเดือนก่อน พอเขียนคอนฟิกเสร็จแล้ว ส่งคำขออนุมัติมาให้ทีมสีเขียวตรวจด้วย)\n\nพูดจบ สาวสายเฮี้ยบก็วางปากกาลง หมุนตัวเดินกลับไปยังโซนของทีมสีเขียวอย่างสง่างาม ทิ้งให้อาร์เทอร์นั่งถือกระดาษโน้ตแผ่นนั้นค้างอยู่กลางอากาศ"
        },
        {
            "id": 8,
            "en": "\"That was a narrow escape, Arthur!\" Phop slid his chair over the second Elena was out of earshot. \"Good thing you didn't paste an Access Key and hit run, or the sirens on Elena's dashboard would have wailed and your account would have been locked!\"\n\nKarn, who had observed the whole exchange, chuckled softly. \"Told you checkpoint number three from Elena was the real deal. But she was kind to personally write down the exact keywords for you. Normally, she just sends a cold link to the policy documentation in chat.\"\n\nArthur looked down at Elena's precise handwriting. \"P'Karn... In plain layman's terms, what on earth is this OIDC thing?\"",
            "th": "\"รอดตายหวุดหวิดนะครับพี่อาร์เทอร์!\" ภพรีบไถลเก้าอี้เข้ามาหาทันทีที่เอเลน่าเดินพ้นระยะ \"ดีนะพี่ไม่เผลอเอา Access Key ไปใส่แล้วกดรัน ไม่งั้นสัญญาณเตือนภัยที่จอของเอเลน่าดังปี๊บๆ แล้วโดนสั่งล็อกแอ็กเคานต์แน่ๆ!\"\n\nพี่กานต์ที่นั่งฟังอยู่ตั้งแต่ต้นหัวเราะในลำคอเบาๆ \"บอกแล้วว่าด่านข้อที่ 3 ของเอเลน่านี่แหละของจริง... แต่เขาก็ใจดีนะอุตส่าห์เดินมาเขียนคีย์เวิร์ดให้ ปกติถ้าเป็นคนอื่นทำผิดกฎ เขาแค่ส่งลิงก์กฎระเบียบมาในแชทสั้นๆ แค่นั้นแหละ\"\n\nอาร์เทอร์ก้มมองลายมือเฉียบคมของเอเลน่าบนกระดาษ \"พี่กานต์ครับ ไอ้เจ้า OIDC ที่คุณเอเลน่าบอกเนี่ย... ถ้าแปลเป็นภาษาชาวบ้าน มันคืออะไรเหรอครับ?\""
        },
        {
            "id": 9,
            "en": "\"Think of it like this, Arthur,\" Karn swiveled his chair to explain. \"Putting an AWS Access Key into GitHub is like copying the physical master key to your house and leaving it at the guardhouse outside your neighborhood. If someone robs the guardhouse, they hold the key to unlock your home forever, right?\"\n\n\"Ah... I see. That is genuinely dangerous!\" Arthur nodded firmly.\n\n\"OIDC, on the other hand, is keyless authentication,\" Karn pointed to Temporary Token on the paper. \"Every time GitHub Actions starts running, it walks over to AWS and says, *'Hey, I am a legitimate runner from Blue Team's repository. Give me a temporary visitor pass.'* AWS verifies the identity and issues a pass valid for only 15 minutes. Once the container is uploaded, that pass expires immediately. Even if a hacker intercepted it, it's completely useless!\"\n\nArthur's eyes lit up with wonder. Karn's real-world metaphor transformed alien jargon into something deeply logical and brilliant!\n\n\"Amazing... No keys to lose, because we issue short-lived passes instead!\"",
            "th": "\"เปรียบเทียบง่ายๆ นะอาร์เทอร์\" พี่กานต์หมุนเก้าอี้มาอธิบาย \"การเอา Access Key ไปใส่ไว้ใน GitHub มันเหมือนกับอาร์เทอร์ปั๊ม 'กุญแจบ้านตัวจริง' เอาไปฝากไว้ที่ป้อมยามหน้าหมู่บ้าน ถ้าวันไหนโจรปล้นป้อมยาม โจรก็ได้กุญแจบ้านเราไปไขเข้าบ้านได้ตลอดกาลถูกไหม?\"\n\n\"อ๋อ... เข้าใจแล้วครับ แบบนั้นอันตรายจริงด้วย\" อาร์เทอร์พยักหน้าหงึกๆ\n\n\"ส่วน OIDC ที่เอเลน่าให้ใช้เนี่ย มันคือระบบยืนยันตัวตนแบบไม่ต้องใช้กุญแจถาวร\" พี่กานต์ชี้ไปที่คำว่า Temporary Token บนกระดาษ \"ทุกครั้งที่ GitHub Actions เริ่มทำงาน มันจะเดินไปบอก AWS ว่า 'เฮ้ ฉันมาจากโปรเจกต์ของทีม Blue ตัวจริงนะ ขอบัตรผ่านชั่วคราวหน่อย' พอ AWS ตรวจสอบว่าใช่ตัวจริง ก็จะออก 'บัตรผ่านชั่วคราวที่มีอายุแค่ 15 นาที' มาให้ พอส่งกล่องโค้ดเข้าโกดังเสร็จ บัตรนั้นก็หมดอายุทันที... โจรขโมยไปก็เอาไปทำอะไรต่อไม่ได้\"\n\nดวงตาของอาร์เทอร์เป็นประกายวาววับขึ้นมาทันที การเปรียบเทียบของพี่กานต์ทำให้เรื่องยากๆ ที่ดูเหมือนภาษามนุษย์ต่างดาว กลายเป็นเรื่องที่สมเหตุสมผลและน่าทึ่งมาก!\n\n\"สุดยอดเลยครับพี่... ไม่ต้องมีกุญแจให้หาย เพราะใช้วิธีออกบัตรชั่วคราวเอา!\""
        },
        {
            "id": 10,
            "en": "With the principle crystal clear, fear melted away. Arthur searched the company's Confluence wiki for the guide written by Elena. The article was long and entirely in English, but Arthur persevered. He spent the afternoon dissecting it paragraph by paragraph, jotting down terms like Authentication, Assume Role, and Trust Policy in his notebook.\n\nHe meticulously edited his YAML file, counting every single space on every line, and submitted a Pull Request to the Green Team following official procedures.\n\nAt 04:45 PM.\n\nA notification popped up: Elena approved your pull request.\n\nArthur's hands trembled with anticipation. He returned to his terminal and triggered GitHub Actions once again!",
            "th": "เมื่อเข้าใจหลักการแล้ว ความกลัวก็มลายหายไป อาร์เทอร์รีบเปิดหน้าเว็บคู่มือของบริษัท (Confluence) พิมพ์ค้นหาบทความที่เอเลน่าเป็นคนเขียนไว้ บทความนั้นยาวเหยียดและเป็นภาษาอังกฤษล้วนๆ แต่อาร์เทอร์ไม่ย่อท้อ เขาใช้เวลาช่วงบ่ายค่อยๆ แกะทีละย่อหน้า จดคำศัพท์ใหม่อย่างคำว่า Authentication (การยืนยันตัวตน), Assume Role (การสวมบทบาทรับสิทธิ์), และ Trust Policy (นโยบายความเชื่อถือ) ลงในสมุดโน้ต\n\nเขาค่อยๆ แก้ไขไฟล์ YAML ของตัวเองอย่างระมัดระวัง นับช่องไฟการเคาะวรรคทุกบรรทัด และส่งคำขอเชื่อมต่อไปให้ทีมสีเขียวอนุมัติตามขั้นตอนเป๊ะๆ\n\nเวลา 16:45 น.\n\nแจ้งเตือนจากระบบเด้งขึ้นมาว่า Elena approved your pull request. (เอเลน่าอนุมัติคำขอของคุณแล้ว)\n\nมือของอาร์เทอร์แทบจะสั่นด้วยความตื่นเต้น เขากลับไปที่หน้าต่างโค้ดของตัวเอง แล้วกดสั่งให้ GitHub Actions เริ่มทำงานอีกครั้ง!"
        },
        {
            "id": 11,
            "en": "This time, both Karn and Phop peered over Arthur's shoulder, holding their breath.\n\nThe yellow progress wheels began to spin on screen...\n\nSet up job -> Green checkmark ✅\n\nConfigure AWS Credentials via OIDC -> spun for three seconds... then flashed a Green checkmark ✅!\n\nBuild and Push Docker Image to Sydney ECR -> upload percentages climbed rapidly... culminating in: Post Build: SUCCESS accompanied by a giant green checkmark ✅!\n\n\"YESSSS! You passed, Arthur! Solid green across the board!\" Phop yelled in delight, giving the thirty-year-old colleague a hearty slap on the back.\n\n\"Great job, Arthur! Writing your first workflow and wiring up OIDC in a single day is no small feat,\" Karn smiled with genuine pride.",
            "th": "คราวนี้ ทั้งพี่กานต์และภพต่างก็ชะโงกหน้ามาช่วยลุ้นอยู่ข้างหลังเก้าอี้ของอาร์เทอร์\n\nวงล้อสีเหลืองบนหน้าจอหมุนติ้วๆ...\n\nSet up job -> เครื่องหมายถูกสีเขียว ✅\n\nConfigure AWS Credentials via OIDC -> หมุนอยู่สามวินาที... แล้วเปลี่ยนเป็น เครื่องหมายถูกสีเขียว ✅!\n\nBuild and Push Docker Image to Sydney ECR -> ตัวเลขเปอร์เซ็นต์การอัปโหลดวิ่งขึ้นอย่างรวดเร็ว... จนกระทั่งจบที่คำว่า Post Build: SUCCESS พร้อมเครื่องหมายถูกสีเขียวดวงใหญ่ ✅!\n\n\"เฮ้ยยยย ผ่านแล้วพี่อาร์เทอร์! สีเขียวทั้งกระดานเลย!\" ภพร้องเสียงหลง ตบไหล่รุ่นพี่วัยสามสิบดังป้าบ\n\n\"เก่งมากอาร์เทอร์! เขียน Workflow ตัวแรกพร้อมผูก OIDC ผ่านได้ในวันเดียว ไม่ธรรมดาเลยนะเรา\" พี่กานต์ยิ้มกว้างอย่างภูมิใจ"
        },
        {
            "id": 12,
            "en": "Arthur leaned back in his chair and exhaled in sheer relief. A broad smile broke across his face. The fatigue from counting indentation spaces and deciphering English documentation all day dissolved completely at the sight of those beautiful green checkmarks.\n\nHe glanced across to the Green Team zone and saw Elena heading to the water dispenser. Their eyes met. The strict, stoic security chief said nothing, but she offered a subtle nod and the faintest smile at the corner of her lips—a silent recognition that he had passed her trial.\n\nArthur glanced at the clock: 05:15 PM.\n\nHe had fifteen bonus minutes before clocking out! The father of one quickly opened his notebook to record a summary of his newly conquered GitHub Actions and OIDC blueprint.\n\nBecause he knew full well... this was merely the first milestone in retiring Grandpa Jenkins. Tomorrow, he would link this GitHub Actions pipeline directly to the orange octopus, Argo CD, orchestrating the entire system into 100% automated harmony!",
            "th": "อาร์เทอร์เอนหลังพิงพนักเก้าอี้ ถอนหายใจออกมาด้วยความโล่งอก รอยยิ้มกว้างปรากฏขึ้นบนใบหน้า ความเหนื่อยล้าจากการนั่งนับช่องไฟและแปลเอกสารภาษาอังกฤษมาทั้งวัน หายไปเป็นปลิดทิ้งเมื่อเห็นเครื่องหมายถูกสีเขียวเรียงกันสวยงามบนหน้าจอ\n\nเขาหันไปมองทางโซนของทีมสีเขียว เห็นเอเลน่าที่กำลังจะลุกไปกดน้ำหันมาสบตาเขาพอดี สาวสายเฮี้ยบหน้านิ่งไม่ได้พูดอะไร แต่เธอพยักหน้าให้เขาครั้งหนึ่งพร้อมรอยยิ้มบางๆ ที่มุมปาก แทนคำยอมรับว่าเขาผ่านด่านตรวจของเธอแล้ว\n\nอาร์เทอร์เหลือบมองนาฬิกาที่มุมจอ... 17:15 น.\n\nวันนี้เขามีกำไรเวลาเหลือตั้งสิบห้านาทีก่อนเลิกงาน! คุณพ่อลูกหนึ่งรีบเปิดสมุดโน้ตขึ้นมาจดสรุปขั้นตอนการทำ GitHub Actions ที่เพิ่งสำเร็จไปสดๆ ร้อนๆ เก็บไว้เป็นคัมภีร์ประจำตัว\n\nเพราะเขารู้ดีว่า... นี่เป็นเพียงก้าวแรกของการโละคุณปู่ Jenkins เท่านั้น ในวันพรุ่งนี้ เขายังต้องเอาเจ้า GitHub Actions ตัวนี้ ไปผูกเข้ากับเจ้าปลาหมึกสีส้ม Argo CD เพื่อให้ระบบทั้งหมดทำงานสอดประสานกันแบบอัตโนมัติ 100% ให้จงได้!"
        }
    ],
    "quiz": [
        {
            "id": "zd4-q1",
            "question": "Why does Elena strictly forbid using static AWS Access Keys in GitHub?",
            "options": [
                "If GitHub is compromised, hackers gain perpetual access to company cloud resources",
                "Static keys cost more money per month than temporary tokens",
                "Static keys make the build run 10 times slower",
                "Elena personally dislikes Amazon Web Services"
            ],
            "answer": 0,
            "explanation": "เอเลน่าอธิบายว่าการใส่ Access Key แบบถาวรใน GitHub หากถูกแฮก คนร้ายจะได้กุญแจเข้าถึงระบบตลอดไป จึงต้องใช้ OIDC เพื่อออกบัตรชั่วคราวแทน"
        },
        {
            "id": "zd4-q2",
            "question": "How does Karn explain OIDC using a real-world analogy?",
            "options": [
                "Like obtaining a 15-minute temporary visitor badge instead of leaving a permanent house key at the guardhouse",
                "Like opening a bank account with a debit card",
                "Like hiring a bodyguard to watch the computer screen",
                "Like changing the WiFi password every morning"
            ],
            "answer": 0,
            "explanation": "พี่กานต์เปรียบเทียบว่า OIDC คือการขอ 'บัตรผ่านชั่วคราวอายุ 15 นาที' แทนการปั๊ม 'กุญแจบ้านตัวจริง' ไปฝากไว้ที่ป้อมยาม"
        },
        {
            "id": "zd4-q3",
            "question": "What is crucial when structuring YAML files in DevOps?",
            "options": [
                "Strict whitespace indentation using the spacebar",
                "Using semicolons at the end of every line",
                "Wrapping all commands in parentheses and brackets",
                "Capitalizing every word in the document"
            ],
            "answer": 0,
            "explanation": "ไฟล์ YAML วัดโครงสร้างและลำดับชั้นทั้งหมดด้วยการเคาะเว้นวรรค (Indentation) หากเคาะขาดหรือเกินระบบจะไม่สามารถอ่านได้"
        }
    ]
}

