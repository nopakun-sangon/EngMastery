# scripts/ch3.py
# Chapter 3: Grandpa Jenkins' Last Breath

chapter3 = {
    "id": "zd-ch-03",
    "chapterNumber": 3,
    "collection": "zero-downtime",
    "title": "Chapter 3: Grandpa Jenkins' Last Breath",
    "titleTh": "บทที่ 3: ลมหายใจเฮือกสุดท้ายของคุณปู่ Jenkins",
    "coverEmoji": "👴",
    "level": "B1",
    "levelBadge": "Workplace IT Novel",
    "wordCount": 940,
    "estimatedTime": "6 นาที",
    "xpReward": 30,
    "summary": "เซิร์ฟเวอร์ Jenkins เกิดดิสก์เต็มและล่มด้วย Error 504 ขณะที่โคลอี้ต้องรีบปล่อยโค้ดแก้บั๊กที่ซิดนีย์ อาร์เทอร์ช่วยเคลียร์พื้นที่ดิสก์สำเร็จ เลียมจึงมอบหมายภารกิจใหญ่ชิ้นแรกให้อาร์เทอร์: ย้ายระบบไปใช้ GitHub Actions!",
    "tags": ["Zero Downtime", "Jenkins", "GitHub Actions", "CI/CD"],
    "keyVocab": [
        {
            "word": "Out of commission",
            "ipa": "/aʊt əv kəˈmɪʃ.ən/",
            "th": "พัง หรือใช้งานไม่ได้ชั่วคราว",
            "example": "The Jenkins server is out of commission due to full disk space."
        },
        {
            "word": "Babysit",
            "ipa": "/ˈbeɪ.bi.sɪt/",
            "th": "คอยประคบประหงม / คอยเฝ้าดูแลแก้ปัญหาซ้ำซาก",
            "example": "We can't keep babysitting this old server every single week."
        },
        {
            "word": "Take ownership",
            "ipa": "/teɪk ˈoʊ.nɚ.ʃɪp/",
            "th": "รับผิดชอบเป็นเจ้าของงานอย่างเต็มตัว",
            "example": "How about taking ownership of migrating its pipeline?"
        },
        {
            "word": "That's the spirit!",
            "ipa": "/ðæts ðə ˈspɪr.ɪt/",
            "th": "นั่นแหละยอดเยี่ยมมาก! / ต้องมีใจสู้แบบนี้สิ!",
            "example": "That's the spirit, mate! We know you can do it."
        },
        {
            "word": "Ephemeral runner",
            "ipa": "/ɪˈfem.ər.əl ˈrʌn.ər/",
            "th": "เครื่องรันงานชั่วคราวที่สร้างขึ้นมาใช้แล้วทำลายทิ้งทันที",
            "example": "GitHub Actions spins up an ephemeral runner for every build."
        }
    ],
    "paragraphs": [
        {
            "id": 1,
            "en": "\"Ox... Hospital... Does that mean a cow hospital, Daddy?\"\n\nThe innocent question from little August, who was sitting at the dining table busily coloring a picture, made Arthur burst out laughing. Arthur was sitting right next to him, practicing English vocabulary.\n\nPraew, who was washing dishes at the sink, turned around with a warm smile. \"Where did you hear that word, August?\"\n\n\"Daddy played it on his phone just now! The foreign man kept saying hospital!\" the six-year-old pointed at his father's phone.",
            "th": "\"อ็อกซ์... ฮอสพิทอล... แปลว่าโรงพยาบาลวัวเหรอครับปะป๊า?\"\n\nเสียงถามซื่อๆ ของน้องออกัสที่กำลังนั่งก้มหน้าก้มตาวาดรูประบายสีอยู่บนโต๊ะกินข้าว ทำเอาอาร์เทอร์ที่กำลังนั่งท่องศัพท์ภาษาอังกฤษอยู่ข้างๆ ถึงกับหลุดขำพรืดออกมา\n\nแพรที่กำลังยืนล้างจานอยู่หันมายิ้มตาม \"ลูกไปเอาคำนี้มาจากไหนครับออกัส?\"\n\n\"ปะป๊าเปิดในมือถือเมื่อกี้ครับ มีฝรั่งพูดคำว่าฮอสพิทอลๆ\" เด็กชายวัยหกขวบชี้ไปที่โทรศัพท์ของพ่อ"
        },
        {
            "id": 2,
            "en": "\"Not a cow hospital, sweetheart...\" Arthur chuckled, gently stroking his son's head. \"In the video, he said *'Out of commission'*. It means broken or temporarily out of service. Native speakers link words together very quickly. It took Daddy listening five times to finally decode it too!\"\n\nEver since surviving his first day in the Blue Team, Arthur's evening routine had transformed. After finishing dinner and helping August with homework, father and son sat at the exact same table. The young boy practiced writing Thai alphabets, while the thirty-year-old father practiced listening to IT podcasts and noting tech vocabulary in his journal.\n\nEven when exhaustion made his eyelids heavy, seeing his son's focused determination reminded Arthur that he couldn't afford to slack off.",
            "th": "\"ไม่ใช่โรงพยาบาลวัวลูก...\" อาร์เทอร์หัวเราะ ยื่นมือไปลูบหัวลูกชาย \"ในคลิปเขาพูดว่า Out of commission ต่างหาก แปลว่าพัง หรือใช้งานไม่ได้ชั่วคราวครับ พอดีฝรั่งเขาพูดรวบคำเร็วไปหน่อย ปะป๊าเองก็ฟังรอบที่ห้าถึงจะแกะออกเหมือนกัน\"\n\nตั้งแต่ผ่านวันแรกในทีม Blue มาได้ กิจวัตรยามค่ำคืนของอาร์เทอร์ก็เปลี่ยนไป หลังจากกินข้าวและช่วยดูการบ้านลูกเสร็จ เขากับออกัสจะมานั่งที่โต๊ะตัวเดียวกัน คนลูกฝึกคัด ก.ไก่ ถึง ฮ.นกฮูก ส่วนคนพ่อวัยสามสิบฝึกฟังคลิปสนทนาภาษาอังกฤษของคนสายไอที พร้อมกับจดคำศัพท์เทคนิคลงสมุดโน้ต\n\nแม้จะเหนื่อยจนหนังตาแทบปิด แต่ทุกครั้งที่เห็นลูกชายตั้งใจเขียนหนังสือ อาร์เทอร์ก็บอกตัวเองว่าเขาจะแอบอู้ไม่ได้เด็ดขาด"
        },
        {
            "id": 3,
            "en": "Tuesday Morning, 09:05 AM.\n\n\"Oh come on... Why is Grandpa's page stuck spinning like this?\"\n\nPhop's voice broke out barely five minutes after hanging up the Daily Standup call with the Australian branch.\n\nArthur leaned over to check his junior colleague's monitor. On screen was the exact same Jenkins web interface Arthur had learned to use yesterday. Today, however, it returned a blank white screen with bold black text: 504 Gateway Time-out.",
            "th": "เช้าวันอังคาร เวลา 09:05 น.\n\n\"อ้าวเฮ้ย... ทำไมหน้าเว็บคุณปู่มันหมุนติ้วๆ แบบนี้ล่ะ\"\n\nเสียงของภพดังขึ้นหลังจากเพิ่งกดวางสายประชุม Daily Standup กับฝั่งออสเตรเลียไปได้ไม่ถึงห้านาที\n\nอาร์เทอร์ชะโงกหน้าไปดูจอของรุ่นน้อง บนหน้าจอคือเว็บ Jenkins ตัวเดียวกับที่อาร์เทอร์เพิ่งหัดกดเมื่อวาน แต่วันนี้มันกลับขึ้นหน้าจอสีขาวโพลน พร้อมข้อความตัวโตๆ ว่า 504 Gateway Time-out"
        },
        {
            "id": 4,
            "en": "Right on cue, notifications in the Blue Team's Slack channel fired off like a machine gun.\n\nChloe (ANZ-Dev): *\"Hey Blue team, is Jenkins down again? I need to deploy a hotfix for the Sydney promotion campaign before lunch!\"*\n\nIn Sydney, it was just past 1 PM. The lunchtime flash discount was drawing massive crowds of users, but the backend had a bug that Chloe desperately needed to patch. And Jenkins—the core intermediary packaging the code—had picked this exact moment to have a heart attack!",
            "th": "ไม่ทันขาดคำ เสียงแจ้งเตือนในกลุ่มแชท Slack ของทีม Blue ก็เด้งรัวๆ ขึ้นมาเหมือนปืนกล\n\nChloe (ANZ-Dev): Hey Blue team, is Jenkins down again? I need to deploy a hotfix for the Sydney promotion campaign before lunch!\n(ทีม Blue จ๋า Jenkins ล่มอีกแล้วเหรอ? ฉันต้องรีบอัปเดตโค้ดแก้บั๊กด่วนสำหรับแคมเปญโปรโมชันของซิดนีย์ก่อนเที่ยงนะ!)\n\nที่ซิดนีย์ตอนนี้คือเวลาบ่ายโมงนิดๆ แคมเปญลดราคาช่วงพักเที่ยงกำลังมีลูกค้าเข้ามาใช้งานกันอย่างหนาแน่น แต่ระบบหลังบ้านดันมีบั๊กที่โคลอี้ต้องรีบส่งโค้ดใหม่ขึ้นไปแก้ และตัวกลางในการแพ็กโค้ดอย่าง Jenkins ดันมาหัวใจวายเอาตอนนี้พอดี!"
        },
        {
            "id": 5,
            "en": "\"Trouble has arrived...\" Karn furrowed his brow and issued orders immediately. \"Phop, SSH into the Jenkins server right away to find out why it died. Arthur, open your terminal and shadow Phop so you learn how to diagnose servers during an outage.\"\n\n\"On it, P'Karn!\" Arthur responded, sliding his chair right next to Phop with his trusty notebook in hand.\n\nPhop's fingers flew across the dark terminal screen to inspect the health of the host machine running Jenkins.",
            "th": "\"งานเข้าแล้วไง...\" พี่กานต์ขมวดคิ้ว รีบหันมาสั่งการทันที \"ภพ รีบ SSH เข้าไปดูเซิร์ฟเวอร์ Jenkins ซิว่าตายเพราะอะไร ส่วนอาร์เทอร์ เปิดหน้าจอดูตามภพไปด้วยเลย จะได้รู้วิธีเช็กอาการเซิร์ฟเวอร์เวลาเกิดเหตุฉุกเฉิน\"\n\n\"ครับพี่!\" อาร์เทอร์รับคำ รีบเลื่อนเก้าอี้เข้าไปประกบข้างภพพร้อมสมุดโน้ตคู่ใจ\n\nนิ้วของภพรัวคำสั่งลงบนหน้าจอดำมืดอย่างรวดเร็วเพื่อเข้าไปดูสภาพเครื่องเซิร์ฟเวอร์ที่รัน Jenkins อยู่"
        },
        {
            "id": 6,
            "en": "\"P'Karn, the disk is at 100%! RAM is maxed out, and the whole system has frozen because over ten build jobs from other teams are jammed in the queue!\" Phop reported, his voice full of stress.\n\n\"Sounds like a critical condition...\" Karn leaned in. \"Arthur, do you remember the Linux command to check disk space?\"\n\n\"Yes, I do! It's `df -h`, right?\" Arthur replied without hesitation. This was one of the few foundational commands from his previous job that he could still put to good use.",
            "th": "\"พี่กานต์ ดิสก์เต็ม 100% เลยครับ! แถมหน่วยความจำ (RAM) ก็พุ่งชนเพดานจนเครื่องค้างไปแล้ว เพราะมีงาน Build จากทีมอื่นค้างอยู่ในคิวเป็นสิบงานเลย\" ภพหันมารายงานเสียงเครียด\n\n\"ท่าทางจะอาการหนักแฮะ...\" พี่กานต์ก้มลงมองหน้าจอ \"อาร์เทอร์ จำคำสั่งเช็กพื้นที่ดิสก์ใน Linux ได้ไหม?\"\n\n\"จำได้ครับพี่ df -h ใช่ไหมครับ\" อาร์เทอร์ตอบทันที เพราะนี่คือความรู้พื้นฐานไม่กี่อย่างจากงานเก่าที่เขายังพอเอามาใช้ได้"
        },
        {
            "id": 7,
            "en": "\"Brilliant! Arthur, take the keyboard. Find the directory eating up the most space and purge the leftover junk files from old builds. Phop and I will restart the background service so Chloe can push her hotfix as a temporary rescue.\"\n\nArthur's hands trembled slightly taking over the keyboard amidst an emergency with the Australian team waiting. But following Karn's step-by-step guidance, he methodically ran commands to prune dangling Docker images and old build artifacts. Disk usage dropped back down to 60%, and Grandpa Jenkins gasped back to life.\n\nChloe flooded the chat with thank-you stickers as she successfully deployed her hotfix to AWS EKS just in the nick of time.",
            "th": "\"เยี่ยมมาก งั้นอาร์เทอร์เอาคีย์บอร์ดไปลองพิมพ์หาโฟลเดอร์ที่กินพื้นที่เยอะที่สุด แล้วสั่งเคลียร์ไฟล์ขยะของการ Build รอบเก่าๆ ทิ้งไปก่อน เดี๋ยวพี่กับภพจะช่วยกันสั่งรีสตาร์ทเซอร์วิสให้โคลอี้ใช้งานเฉพาะหน้าไปก่อน\"\n\nมือของอาร์เทอร์สั่นเล็กน้อยเมื่อต้องมาจับคีย์บอร์ดแก้ปัญหาท่ามกลางสถานการณ์ที่ฝั่งออสเตรเลียกำลังรออยู่ แต่ด้วยคำแนะนำทีละสเต็ปของพี่กานต์ เขาก็ค่อยๆ พิมพ์คำสั่งลบไฟล์อิมเมจเก่าๆ ที่ค้างอยู่ในเครื่องออกไปได้สำเร็จ พื้นที่ดิสก์ลดลงมาเหลือ 60% และหน้าเว็บคุณลุงพ่อบ้าน Jenkins ก็กลับมามีชีวิตอีกครั้ง\n\nโคลอี้ส่งสติกเกอร์ขอบคุณรัวๆ มาในแชทเมื่อเธอสามารถส่งโค้ดแก้บั๊กขึ้นไปที่ AWS EKS ได้ทันเวลาพอดี"
        },
        {
            "id": 8,
            "en": "However, the story did not end there...\n\nTen minutes later, an incoming video call chime echoed from Karn, Arthur, and Phop's laptops. The caller was Liam, the engineering manager in Australia.\n\n\"Good job on the quick recovery, team,\" Liam opened in a serious tone. Although appreciative, his eyes showed utter exhaustion with this recurring headache. \"But we can't keep babysitting this old Jenkins server anymore. Every time it crashes, our deployment stops.\"\n\nArthur listened with utmost concentration. Today, he could catch far more words than yesterday. Liam was saying that we can no longer keep babysitting this aging Jenkins box; every crash halts deployments across the board.",
            "th": "แต่เรื่องยังไม่จบแค่นั้น...\n\nสิบนาทีต่อมา เสียงเรียกเข้าจากโปรแกรมประชุมออนไลน์ก็ดังขึ้นที่เครื่องของพี่กานต์ อาร์เทอร์ และภพ คนที่โทรเข้ามาคือ ‘เลียม’ หัวหน้าใหญ่ฝั่งออสเตรเลีย\n\n\"Good job on the quick recovery, team,\" เลียมเปิดฉากด้วยน้ำเสียงจริงจัง แม้จะชมเชยแต่แววตาของเขาดูเหนื่อยหน่ายกับปัญหานี้เต็มทน \"But we can't keep babysitting this old Jenkins server anymore. Every time it crashes, our deployment stops.\"\n\nอาร์เทอร์ตั้งใจฟังอย่างสุดความสามารถ วันนี้เขาจับคำศัพท์ของเลียมได้มากขึ้นกว่าเมื่อวาน เลียมกำลังบอกว่า... เราจะมานั่งคอยประคบประหงมเซิร์ฟเวอร์ Jenkins แก่ๆ ตัวนี้ต่อไปไม่ไหวแล้ว ทุกครั้งที่มันพัง งานของเราก็ชะงักไปด้วย"
        },
        {
            "id": 9,
            "en": "\"Karn, I want Blue Team to accelerate the migration to GitHub Actions (GHA) this week,\" Liam looked directly into Arthur's webcam. \"Arthur, since you successfully handled the payment-service yesterday, how about taking ownership of migrating its pipeline from Jenkins to GitHub Actions? Think of it as your first real project.\"\n\nArthur's heart pounded against his ribs.\n\nMigrate... Move from Jenkins to GitHub Actions... And lead it as his very first project!",
            "th": "\"Karn, I want Blue Team to accelerate the migration to GitHub Actions (GHA) this week,\" เลียมหันมามองที่กล้องของอาร์เทอร์ \"Arthur, since you successfully handled the payment-service yesterday, how about taking ownership of migrating its pipeline from Jenkins to GitHub Actions? Think of it as your first real project.\"\n\nหัวใจของอาร์เทอร์เต้นแรงขึ้นมาทันที\n\nMigrate... ย้ายระบบจาก Jenkins ไป GitHub Actions... แถมให้เขารับผิดชอบเป็นโปรเจกต์แรก!"
        },
        {
            "id": 10,
            "en": "Karn looked at Arthur, silently asking for his stance with his eyes. Arthur swallowed hard. He knew full well that he knew nothing about GitHub Actions yet. But if he declined this golden opportunity, he would remain nothing more than someone who clicked buttons on demand.\n\nArthur unmuted, took a steady breath, and spoke in clear, confident English—a sentence he had practiced repeatedly in front of the mirror the night before:\n\n\"I will... do my best, Liam. Thank you.\"\n\nA broad smile beamed across the Australian lead's face immediately. \"That's the spirit, mate! Karn will help you get started. Cheers!\"",
            "th": "พี่กานต์หันมามองหน้าอาร์เทอร์เหมือนจะถามความเห็นด้วยสายตา อาร์เทอร์กลืนน้ำลายลงคอ เขารู้ดีว่าตัวเองยังไม่เป็น GitHub Actions เลยสักนิด แต่ถ้าเขาปฏิเสธโอกาสนี้ เขาก็จะเป็นได้แค่คนคอยกดปุ่มตามคำสั่งไปวันๆ\n\nอาร์เทอร์กดเปิดไมค์ สูดหายใจลึก แล้วพูดประโยคภาษาอังกฤษที่เขาเพิ่งซ้อมพูดหน้ากระจกเมื่อคืนออกมาอย่างฉะฉาน\n\n\"I will... do my best, Liam. Thank you.\"\n\nรอยยิ้มกว้างปรากฏขึ้นบนใบหน้าของหัวหน้าชาวออสซี่ทันที \"That's the spirit, mate! Karn will help you get started. Cheers!\""
        },
        {
            "id": 11,
            "en": "As the call closed, Phop clapped enthusiastically. \"Whoa, Arthur! So cool! You just took on a massive mission!\"\n\n\"Cool? My hands are freezing cold from nervousness!\" Arthur smiled sheepishly before turning to his mentor. \"P'Karn... How exactly is GitHub Actions different from Grandpa Jenkins? And where do I begin?\"\n\nKarn took a sip of his coffee and pivoted his chair around with the grin of a master about to pass down the next secret art.\n\n\"Remember earlier when we had to purge junk files from Jenkins because the disk filled up?\"\n\n\"Yes, perfectly.\"",
            "th": "เมื่อหน้าต่างประชุมปิดลง ภพก็หันมาปรบมือแปะๆ ให้อาร์เทอร์ \"หูยยย พี่อาร์เทอร์โคตรเท่! รับจบงานใหญ่ซะด้วย\"\n\n\"เท่อะไรล่ะภพ พี่ตื่นเต้นจนมือเย็นไปหมดแล้วเนี่ย\" อาร์เทอร์ยิ้มแหยๆ ก่อนจะหันไปหาพี่เลี้ยงคนสำคัญ \"พี่กานต์ครับ... ไอ้เจ้า GitHub Actions เนี่ย มันต่างจากคุณลุง Jenkins ยังไง แล้วผมต้องเริ่มจากตรงไหนครับ?\"\n\nพี่กานต์ยกแก้วกาแฟขึ้นมาจิบ ก่อนจะหมุนเก้าอี้มาหาพร้อมรอยยิ้มของอาจารย์ที่กำลังจะถ่ายทอดวิชาขั้นต่อไป\n\n\"จำได้ไหมที่เมื่อกี้เราต้องเข้าไปลบไฟล์ขยะในเซิร์ฟเวอร์ Jenkins เพราะดิสก์มันเต็ม?\" พี่กานต์ถาม\n\n\"จำได้ครับ\""
        },
        {
            "id": 12,
            "en": "\"That is the fatal flaw of legacy Jenkins. We must keep a physical or virtual server running 24/7 as our build factory. When dozens of builds run, the factory collapses, the disk fills up, and we have to maintain it ourselves,\" Karn opened GitHub on his screen, pointing to the Actions tab marked with a Play icon.\n\n\"GitHub Actions represents the modern cloud era. We don't host our own build servers anymore. The moment Chloe pushes new code, GitHub conjures a brand-new, temporary virtual machine (ephemeral runner). It packages the code into a Docker image, uploads it to AWS, and then instantly destroys that runner. The disk never fills up, we never restart servers, and we never waste human time.\"\n\nArthur's eyes widened in awe. \"Whoa... Conjuring a server on demand and throwing it away? That means we never have to babysit a server like we just did!\"",
            "th": "\"นั่นแหละคือข้อเสียของ Jenkins ยุคเก่า เราต้องมีเซิร์ฟเวอร์หนึ่งเครื่องเปิดทิ้งไว้ตลอดเวลาเพื่อเป็นโรงงานแพ็กโค้ด พอคนใช้เยอะโรงงานก็พัง ดิสก์ก็เต็ม แถมต้องคอยซ่อมบำรุงเอง\" พี่กานต์เปิดหน้าเว็บ GitHub ขึ้นมาบนจอ แล้วชี้ไปที่เมนูคำว่า Actions ที่มีสัญลักษณ์เป็นรูปปุ่ม Play\n\n\"แต่ GitHub Actions คือยุคใหม่... เราไม่ต้องมีเซิร์ฟเวอร์โรงงานของตัวเองอีกต่อไปแล้ว ทันทีที่โคลอี้ส่งโค้ดเข้ามาใน GitHub ระบบของ GitHub จะเสกเครื่องเซิร์ฟเวอร์ชั่วคราวขึ้นมาให้เรา 1 เครื่อง ทำการแพ็กโค้ดเป็น Docker Image ส่งไปเก็บที่ AWS ให้เสร็จสรรพ แล้วมันก็ทำลายเซิร์ฟเวอร์ชั่วคราวนั้นทิ้งทันที... ดิสก์ไม่มีวันเต็ม ไม่ต้องคอยรีสตาร์ทเครื่อง และไม่เสียเวลาพวกเราด้วย\"\n\nดวงตาของอาร์เทอร์เบิกกว้างขึ้นด้วยความทึ่ง \"โห... เสกเครื่องขึ้นมาใช้แล้วทิ้งเลยเหรอครับ แบบนี้เราก็ไม่ต้องมานั่งเฝ้าเซิร์ฟเวอร์เหมือนเมื่อกี้แล้วสิครับ!\""
        },
        {
            "id": 13,
            "en": "\"Exactly!\" Karn snapped his fingers. \"However, to tell it what to do, we don't click buttons on a web UI like Jenkins. We write an automated blueprint inside the repository using a format called YAML.\"\n\nKarn pulled out a fresh yellow sticky note, writing down this week's challenge and pasting it over yesterday's:\n\n1. Create `.github/workflows/deploy.yml`\n2. Trigger automatically on push (`on: push`)\n3. Authenticate with AWS to upload Docker images (AWS IAM & ECR)\n\n\"This mission is ten times harder than yesterday because you must write the instructions yourself. And the hardest checkpoint is number three... If your AWS security permissions don't pass, Elena, the Green Team lead, will come down hard on you,\" Karn patted his shoulder reassuringly. \"You have until Friday. Go explore how to write GitHub Actions workflows. Ask me if you get stuck. Go get 'em!\"\n\nArthur gazed at the new note on his monitor. The fear from day one was completely gone. In its place burned the excitement of a thirty-year-old engineer about to wield modern cloud-native tools with his own hands!",
            "th": "\"ถูกต้อง!\" พี่กานต์ดีดนิ้ว \"แต่การจะสั่งให้มันทำงานตามที่เราต้องการได้ เราไม่ได้เข้าไปกดปุ่มบนหน้าเว็บเหมือน Jenkins แล้วนะ เราต้องเขียน 'ใบสั่งงาน' ทิ้งไว้ในโปรเจกต์ด้วยไฟล์ที่ชื่อว่า YAML\"\n\nพี่กานต์ดึงกระดาษโพสต์อิทแผ่นใหม่ออกมา เขียนโจทย์ประจำสัปดาห์นี้แปะทับแผ่นเก่าของเมื่อวาน:\n\nสร้างไฟล์ .github/workflows/deploy.yml\nสั่งให้มันทำงานอัตโนมัติเมื่อโคลอี้แก้โค้ด (on: push)\nสั่งให้มันเชื่อมต่อกับ AWS เพื่อส่งกล่องโค้ดไปเก็บ (AWS IAM & ECR)\n\n\"งานนี้ยากกว่าเมื่อวานหลายเท่า เพราะอาร์เทอร์ต้องเขียนโค้ดสั่งการมันเองทั้งหมด และด่านที่ยากที่สุดคือข้อ 3... ถ้าตั้งค่าสิทธิ์ความปลอดภัยของ AWS ไม่ผ่าน เอเลน่า หัวหน้าทีมสีเขียว (Green Team) เอาตายแน่นอน\" พี่กานต์ตบไหล่เขาเบาๆ\n\n\"มีเวลาถึงวันศุกร์นี้... ลองไปงมดูว่าเขียนใบสั่งงานให้ GitHub Actions ยังไง ติดตรงไหนมาถามพี่ ลุยได้!\"\n\nอาร์เทอร์มองโพสต์อิทใบใหม่ที่ขอบจอ ความกลัวเมื่อวันแรกหายไปแล้ว เหลือเพียงความท้าทายของโปรแกรมเมอร์วัยสามสิบที่กำลังจะได้จับเครื่องมือระดับโลกด้วยมือของตัวเองเป็นครั้งแรก!"
        }
    ],
    "quiz": [
        {
            "question": "What caused the Jenkins server to throw a 504 Gateway Time-out error?",
            "options": [
                "(Recommended) The server disk reached 100% capacity due to accumulated build artifacts",
                "Arthur deleted the payment-service repository",
                "The Australian network cable was disconnected",
                "Chloe pushed 1,000 commits at once"
            ],
            "answer": 0,
            "explanation": "ภพตรวจสอบพบว่าดิสก์เต็ม 100% และ RAM พุ่งชนเพดานเพราะมีคิวงานค้างอยู่และไฟล์ขยะจากการ Build สะสม"
        },
        {
            "question": "What is the key advantage of GitHub Actions compared to self-hosted Jenkins according to Karn?",
            "options": [
                "(Recommended) It creates temporary runners on demand and destroys them, eliminating manual server maintenance",
                "It has a prettier web dashboard with colorful buttons",
                "It requires no configuration files or code",
                "It is completely free with no usage limits"
            ],
            "answer": 0,
            "explanation": "พี่กานต์อธิบายว่า GitHub Actions จะเสกเครื่องเซิร์ฟเวอร์ชั่วคราวขึ้นมาทำงานเสร็จแล้วทำลายทิ้งทันที ไม่ต้องมีเซิร์ฟเวอร์เปิดค้างและดิสก์ไม่มีวันเต็ม"
        },
        {
            "question": "What does the expression \"That's the spirit!\" mean?",
            "options": [
                "(Recommended) An expression of encouragement praising a positive, willing attitude",
                "A warning to beware of ghosts or bad luck",
                "A polite way of saying goodbye",
                "A statement of disappointment"
            ],
            "answer": 0,
            "explanation": "'That's the spirit!' เป็นสำนวนชื่นชมและให้กำลังใจ แปลว่า 'นั่นแหละยอดเยี่ยมมาก! / ต้องมีใจสู้แบบนี้สิ!'"
        }
    ]
}
