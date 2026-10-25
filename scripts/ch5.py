# scripts/ch5.py
# Chapter 5: The Red Siren and the Friday Battlefield

chapter5 = {
    "id": "zd-ch-05",
    "chapterNumber": 5,
    "collection": "zero-downtime",
    "title": "Chapter 5: The Red Siren and the Friday Battlefield",
    "titleTh": "บทที่ 5: เสียงไซเรนสีแดงและศึกหนักวันศุกร์",
    "coverEmoji": "🚨",
    "level": "B1",
    "levelBadge": "Workplace IT Novel",
    "wordCount": 1050,
    "estimatedTime": "7 นาที",
    "xpReward": 30,
    "summary": "เกิดวิกฤตระดับ P1 ในวันศุกร์! ระบบจ่ายเงินที่ซิดนีย์ล่มระหว่างแคมเปญ Flash Sale ด้วยอาการ OOMKilled อาร์เทอร์ตั้งสติ เปิดไมค์พูดภาษาอังกฤษสดๆ กลางห้อง War Room วิเคราะห์ปัญหาขาดแคลน Memory ได้อย่างแม่นยำ และใช้ GitHub Actions กู้ระบบได้ภายใน 1 นาที!",
    "tags": ["Zero Downtime", "Incident Management", "SRE", "Kubernetes", "Workplace English"],
    "keyVocab": [
        {
            "word": "P1 Incident",
            "ipa": "/piː wʌn ˈɪn.sɪ.dənt/",
            "th": "เหตุการณ์ฉุกเฉินระดับสูงสุด (Priority 1) ที่กระทบรายได้หรือระบบหลักของบริษัท",
            "example": "Blue Team! We have a P1 incident on the Sydney payment gateway!"
        },
        {
            "word": "OOMKilled",
            "ipa": "/aʊt əv ˈmem.ər.i kɪld/",
            "th": "สถานะที่พอดถูกระบบสั่งฆ่าทิ้งเพราะกินหน่วยความจำ (RAM) เกินเพดานที่กำหนดไว้",
            "example": "The pods are crashing with OOMKilled under extreme holiday traffic."
        },
        {
            "word": "Rollback",
            "ipa": "/ˈroʊl.bæk/",
            "th": "การย้อนระบบหรือโค้ดกลับไปใช้เวอร์ชันก่อนหน้าเพื่อแก้ปัญหาเฉพาะหน้า",
            "example": "No rollback needed! The code is fine, but we need more memory."
        },
        {
            "word": "Scale up",
            "ipa": "/skeɪl ʌp/",
            "th": "การขยายทรัพยากรหรือเพิ่มจำนวนพอดเพื่อรองรับผู้ใช้งานที่เพิ่มขึ้น",
            "example": "Scale it up to 10 pods and double the memory limit right now."
        },
        {
            "word": "Bloody brilliant",
            "ipa": "/ˈblʌd.i ˈbrɪl.jənt/",
            "th": "ยอดเยี่ยมเหนือชั้นมากๆ (คำอุทานชมเชยแบบออสเตรเลีย/อังกฤษ)",
            "example": "Bloody brilliant, Blue Team! Absolute legend, mate!"
        }
    ],
    "paragraphs": [
        {
            "id": 1,
            "en": "In the technology industry, there is an unwritten golden rule known to every seasoned engineer: *\"Never Deploy on Friday.\"*\n\nYet for fiercely competitive global corporations, this rule is routinely shredded into pieces.\n\nFriday, 10:30 AM (2:30 PM Sydney time).\n\nBarely ten minutes ago, Arthur had completed the automated integration between GitHub Actions and the orange octopus, Argo CD, for the payment service. Now, whenever Chloe pushed code changes, the system built a fresh container image, updated the version tag, and triggered Argo CD to deploy onto AWS EKS in Sydney in under three minutes.\n\nIt was his first major engineering triumph, bringing a smile so wide his cheeks ached... had it not been for the sudden screech of disaster alarms!",
            "th": "คนในวงการไอทีมีกฎเหล็กที่รู้กันดีแต่ไม่เคยมีใครเขียนแปะไว้ข้างฝาอยู่ข้อหนึ่ง นั่นคือ... \"ห้ามเอาโค้ดสำคัญขึ้นระบบจริงในวันศุกร์ (Never Deploy on Friday)\"\n\nแต่สำหรับบริษัทระดับโลกที่กำลังแข่งขันอย่างดุเดือด กฎข้อนี้มักถูกฉีกทิ้งเสมอ\n\nวันศุกร์ เวลา 10:30 น. (ตรงกับเวลาบ่ายสองโมงครึ่งของซิดนีย์)\n\nอาร์เทอร์เพิ่งเชื่อมต่อระบบระหว่าง GitHub Actions กับเจ้าปลาหมึกสีส้ม Argo CD ของระบบจ่ายเงินเสร็จสมบูรณ์เมื่อสิบนาทีที่แล้ว ตอนนี้ทุกครั้งที่โคลอี้แก้โค้ด ระบบจะทำการสร้างกล่องอิมเมจใหม่ เปลี่ยนเลขเวอร์ชันในไฟล์ตั้งค่า และสั่งให้ Argo CD อัปเดตระบบบน AWS EKS ที่ซิดนีย์โดยอัตโนมัติภายในเวลาไม่ถึงสามนาที\n\nมันคือความสำเร็จชิ้นแรกที่ทำให้อาร์เทอร์ภูมิใจจนแทบจะยิ้มแก้มปริ... ถ้าไม่ใช่เพราะเสียงแจ้งเตือนภัยพิบัติที่จู่ๆ ก็แผดร้องขึ้นมา!"
        },
        {
            "id": 2,
            "en": "Beep! Beep! Beep!\n\nPagerDuty alerts screamed in unison from the smartphones of everyone in the Blue Team. Simultaneously, the large monitoring dashboard in the center of the office began flipping from soothing green to blazing crimson, node by node!\n\n\"Holy crap! Sydney's Production Payment Service just went down!\" Phop shouted in horror, his hand holding a boba cup freezing mid-air.\n\nArthur's heart seized violently. A wave of icy dread surged from the soles of his feet straight to his temples... The payment service? The exact pipeline he had just wired up with GitHub Actions minutes ago?!",
            "th": "ตือดึง! ตือดึง! ตือดึง!\n\nเสียงแจ้งเตือนจากแอปพลิเคชัน PagerDuty ดังประสานเสียงกันจากโทรศัพท์มือถือของทุกคนในทีม Blue พร้อมกับหน้าจอมอนิเตอร์ขนาดใหญ่กลางห้องที่แสดงกราฟสถานะของเซิร์ฟเวอร์ฝั่งออสเตรเลีย ค่อยๆ เปลี่ยนจากสีเขียวเป็น สีแดงฉาน ทีละจุด!\n\n\"เฮ้ย! ระบบจ่ายเงินของซิดนีย์ (Production) ร่วง!\" ภพร้องเสียงหลง มือที่ถือแก้วชานมไข่มุกชะงักค้าง\n\nหัวใจของอาร์เทอร์กระตุกวูบ ความเย็นเฉียบแล่นปราดจากปลายเท้าขึ้นมาถึงขมับ... ระบบจ่ายเงิน? ระบบที่เขาเพิ่งผูก GitHub Actions เสร็จเมื่อกี้เนี่ยนะ?!"
        },
        {
            "id": 3,
            "en": "Before Arthur could even catch his breath, an emergency online video meeting window—the dreaded 'War Room'—popped up automatically on everyone's screens.\n\nThe instant they joined, the tense, breathless English voices of Liam and Chloe blasted through their headsets.\n\n\"Blue Team! We have a P1 Incident!\" Liam's voice was grim, stripped of his usual jovial 'G'day mate'. \"The Flash Sale campaign in Sydney just kicked off five minutes ago, and our payment service is throwing 503 Service Unavailable! Customers cannot check out!\"\n\n\"Wait, did Arthur's new GitHub Actions pipeline just deploy something to Production?!\" Chloe chimed in with panic in her voice.\n\nHearing his own name uttered in the middle of a catastrophe where the business was bleeding thousands of dollars per second made Arthur's face turn ghost-white. His hands resting on the keyboard shook uncontrollably.\n\nWas it me...? Did I break Australia's core system?! If I get fired now, what will happen to August and Praew?!",
            "th": "ยังไม่ทันที่อาร์เทอร์จะได้ตั้งสติ หน้าต่างโปรแกรมประชุมออนไลน์ฉุกเฉินที่เรียกว่า ‘War Room’ (ห้องบัญชาการรบ) ก็เด้งขึ้นมาบนหน้าจอของทุกคนโดยอัตโนมัติ\n\nทันทีที่กดรับสาย เสียงภาษาอังกฤษที่เต็มไปด้วยความตึงเครียดของ ‘เลียม’ และ ‘โคลอี้’ ก็ดังทะลุหูฟังเข้ามาทันที\n\n\"Blue Team! We have a P1 Incident!\" เสียงของเลียมเข้มจัด ไม่มีคำว่า G'day mate อย่างเคย \"The Flash Sale campaign in Sydney just started five minutes ago, and our payment service is throwing 503 Service Unavailable! Customers can't checkout!\"\n(ทีม Blue! เราเจอวิกฤตระดับ 1! แคมเปญลดราคาที่ซิดนีย์เพิ่งเริ่มเมื่อห้านาทีที่แล้ว แต่ระบบจ่ายเงินของเราขึ้น Error 503! ลูกค้าจ่ายเงินไม่ได้!)\n\n\"Wait, did Arthur's new GitHub Actions pipeline just deploy something to Production?!\" เสียงของโคลอี้แทรกขึ้นมาด้วยความตกใจ\n\nชื่อของตัวเองที่ถูกเอ่ยออกมาท่ามกลางวิกฤตที่บริษัทกำลังสูญเสียรายได้วินาทีละหลายแสนบาท ทำเอาอาร์เทอร์หน้าซีดเผือด มือที่วางอยู่บนคีย์บอร์ดสั่นเทา\n\nเพราะเราเหรอ... เราทำระบบใหญ่ของออสเตรเลียพังเหรอ?! ถ้าโดนไล่ออกตอนนี้ แล้วออกัสกับแพรจะทำยังไง!"
        },
        {
            "id": 4,
            "en": "\"Get a grip, Arthur!\"\n\nKarn's powerful voice cut through the panic as he slapped Arthur's shoulder with firm force.\n\n\"Don't panic! I reviewed your workflow before we merged it—our pipeline did nothing wrong! Open AWS EKS and Argo CD right this second. See what is actually happening to the pods in Sydney!\"\n\nKarn's unshakable composure pulled Arthur's soul right back into his body. He inhaled deeply, shoved fear aside, and swiftly executed commands to inspect the container pods on AWS EKS.",
            "th": "\"ตั้งสติอาร์เทอร์!\"\n\nเสียงเข้มๆ ของ ‘พี่กานต์’ ตบลงที่ไหล่ของอาร์เทอร์อย่างแรงจนเขาสะดุ้ง\n\n\"อย่าเพิ่งลน! เมื่อกี้พี่ตรวจโค้ดของอาร์เทอร์ก่อนเอาขึ้นแล้ว Pipeline ของเราไม่ได้ทำอะไรผิด! เปิดหน้าจอ AWS EKS กับ Argo CD ขึ้นมาเดี๋ยวนี้ ดูว่ามันเกิดอะไรขึ้นกับพอด (Pod) ที่ซิดนีย์!\"\n\nคำพูดหนักแน่นของหัวหน้าทีมฝั่งไทยช่วยดึงวิญญาณของอาร์เทอร์กลับเข้าร่าง เขาสูดหายใจลึก ข่มความกลัวไว้ข้างหลัง แล้วรัวคำสั่งเปิดดูสถานะของกล่องคอนเทนเนอร์บน AWS EKS ทันที"
        },
        {
            "id": 5,
            "en": "While Raj reported to Liam that databases were healthy and Phop monitored traffic surges, Arthur stared unblinkingly at Argo CD.\n\nAll three pods of the payment-service were not failing on startup like day one... Instead, they were flashing a glaring red status:\n\nOOMKilled (Out Of Memory Killed)\n\nPod number one died... Argo CD spun up a replacement, but ten seconds later, it was struck by OOMKilled and perished too!\n\n\"P'Karn!\" Arthur yelled out. \"The pods didn't fail from code changes! They are dying from OOMKilled... Memory usage exceeded limits and the system keeps killing them off!\"\n\nKarn took one look and cursed under his breath. \"Bingo! Traffic from the Flash Sale is five times higher than anticipated! We only have three pods with tiny memory limits. They couldn't handle the tidal wave and exploded under the pressure!\"",
            "th": "ในขณะที่ ‘ราจ’ หนุ่มอินเดียกำลังรัวภาษาอังกฤษรายงานเลียมว่าฐานข้อมูลยังปกติดี และ ‘ภพ’ กำลังเช็กกราฟทราฟฟิก อาร์เทอร์ก็จ้องมองไปที่หน้าจอ Argo CD ตาไม่กะพริบ\n\nกล่องพอดของ payment-service ทั้ง 3 กล่อง ไม่ได้พังตอนเริ่มรันเหมือนวันแรก... แต่มันกำลังขึ้นสถานะสีแดงตัวโตๆ ว่า:\n\nOOMKilled (Out Of Memory Killed)\n\nพอดตัวที่หนึ่งดับไป... Argo CD พยายามสร้างตัวใหม่ขึ้นมาแทน แต่พอสร้างเสร็จได้แค่สิบวินาที มันก็ขึ้น OOMKilled แล้วดับไปอีก!\n\n\"พี่กานต์ครับ!\" อาร์เทอร์ร้องบอกเสียงดัง \"พอดมันไม่ได้พังเพราะโค้ดอัปเดตครับ แต่มันขึ้นว่า OOMKilled... เมมโมรี่มันเต็มจนระบบสั่งฆ่าพอดทิ้งรัวๆ เลยครับ!\"\n\nพี่กานต์ชะโงกหน้ามาดูแวบเดียวก่อนจะสบถออกมาเบาๆ \"ชัดเลย! คนเข้ามาซื้อของในแคมเปญ Flash Sale เยอะกว่าปกติห้าเท่า แต่พอดของเรามีแค่ 3 ตัว แถมจำกัดเมมโมรี่ไว้แค่นิดเดียว มันเลยรับคนไม่ไหวแล้วระเบิดตายต่อหน้าต่อตา!\""
        },
        {
            "id": 6,
            "en": "\"Karn! What's the status?! Do we need to rollback?!\" Liam shouted from Melbourne. Three minutes had already elapsed, and the revenue chart was taking a nose-dive into the abyss.\n\nKarn was about to unmute, but his hands were busy typing furiously to assist Phop in stabilizing the frontend ingress. Karn turned his gaze to Arthur with grave intensity.\n\n\"Arthur! My hands are tied... Unmute your mic and tell Liam right now: *'No rollback needed! The issue is memory limit starvation, and we need to scale up pods!'* Speak up, Arthur!\"\n\n\"M-me?!\"\n\nIn the virtual room sat Liam, Chloe, Raj, and two senior Australian executives who had just dialed in to monitor the crisis. Speaking English in the middle of a high-stakes emergency was Arthur's worst nightmare.\n\nYet seeing Karn and Phop fighting with every ounce of strength to keep the ship afloat, Arthur gritted his teeth.\n\nThere is no time to fear bad grammar!",
            "th": "\"Karn! What's the status?! Do we need to rollback?!\" เสียงของเลียมตะโกนถามมาจากเมลเบิร์น เพราะตอนนี้เวลาผ่านไปสามนาทีแล้ว และกราฟยอดขายของบริษัทกำลังดิ่งลงเหว\n\nพี่กานต์กำลังจะกดเปิดไมค์ตอบ แต่นิ้วของเขากลับต้องพิมพ์คำสั่งช่วยภพรับมือกับระบบหน้าบ้านที่กำลังจะล่มตามไปด้วย พี่กานต์จึงหันมามองอาร์เทอร์ด้วยสายตาจริงจัง\n\n\"อาร์เทอร์! พี่มือไม่ว่าง... เปิดไมค์บอกเลียมเดี๋ยวนี้ว่า 'ไม่ต้อง Rollback! ปัญหาคือ Memory Limit ไม่พอ และเราต้องเพิ่มจำนวนพอด!' พูดออกไปเลย!\"\n\n\"ผะ... ผมเหรอครับ?!\"\n\nในห้องประชุมออนไลน์ตอนนี้มีทั้งเลียม โคลอี้ ราจ และผู้บริหารฝั่งออสเตรเลียอีกสองคนที่เพิ่งเข้ามาฟังสถานการณ์ การต้องพูดภาษาอังกฤษท่ามกลางวิกฤตระดับนี้คือฝันร้ายที่สุดในชีวิตของอาร์เทอร์\n\nแต่เมื่อเขาเห็นพี่กานต์กับภพกำลังหัวหมุนช่วยกันพยุงระบบอย่างสุดกำลัง อาร์เทอร์ก็กัดฟันแน่น\n\nไม่มีเวลามากลัวพูดผิดแกรมม่าแล้วโว้ย!"
        },
        {
            "id": 7,
            "en": "Arthur hit the unmute button, pulled air into his lungs, and broadcasted essential English keywords with razor-sharp clarity, stripping away all fluff!\n\n\"Liam! No rollback! Your code is fine!\"\n\nArthur's voice rang out so loud and steady that the entire War Room fell dead silent.\n\n\"The problem is... High traffic! Pods are OOMKilled! Memory is full! I will... increase memory and scale pods in Argo CD right now!\"\n\nFor one second, silence hung over the line. Then Liam's response blasted back with absolute decisiveness.\n\n\"Understood, Arthur! Good diagnostic! You have my permission. Scale it up to 10 pods and double the memory limit. Use your new GitHub Actions pipeline to push the change NOW!\"\n\n\"Yes, sir!\"",
            "th": "อาร์เทอร์กดปุ่มเปิดไมค์ สูดลมหายใจเข้าปอด แล้วตะโกนประโยคภาษาอังกฤษที่ตัดคำฟุ่มเฟือยออกทั้งหมด เน้นเฉพาะคีย์เวิร์ดสำคัญออกไปทันที!\n\n\"Liam! No rollback! Your code is fine!\"\n\nเสียงของอาร์เทอร์ดังฟังชัดจนทั้งห้องประชุมเงียบกริบ\n\n\"The problem is... High traffic! Pods are OOMKilled! Memory is full! I will... increase memory and scale pods in Argo CD right now!\"\n(เลียม! ไม่ต้องถอยโค้ดกลับ! โค้ดของคุณปกติ! ปัญหาคือคนเข้าเยอะเกินไป พอดตายเพราะเมมโมรี่เต็ม! ผมจะเพิ่มเมมโมรี่และขยายจำนวนพอดใน Argo CD เดี๋ยวนี้ครับ!)\n\nปลายสายที่ออสเตรเลียเงียบไปหนึ่งวินาที ก่อนที่เสียงของเลียมจะตอบกลับมาอย่างรวดเร็วและเด็ดขาด\n\n\"Understood, Arthur! Good diagnostic! You have my permission. Scale it up to 10 pods and double the memory limit. Use your new GitHub Actions pipeline to push the change NOW!\"\n(เข้าใจแล้วอาร์เทอร์! วิเคราะห์ได้เยี่ยมมาก! ผมอนุญาต ขยายเป็น 10 พอดและเพิ่มเมมโมรี่เป็นสองเท่าเลย ใช้ระบบ GitHub Actions ตัวใหม่ของคุณส่งค่าขึ้นไปเดี๋ยวนี้!)\n\n\"Yes, sir!\""
        },
        {
            "id": 8,
            "en": "Arthur responded succinctly. At this moment, his brain fired ten times faster than ever before. He switched to the payment service's `deployment.yaml` configuration.\n\nHis fingers adjusted the parameters with surgical precision without a single whitespace error:\n\n- Update replicas from `3` to `10`\n- Update memory limits from `512Mi` to `1024Mi`\n\nArthur executed `git commit` and `git push`, sending the fix flying up to GitHub!\n\n\"Fix committed and pushed, P'Karn!\" Arthur announced, his voice vibrating with adrenaline.\n\n\"Phenomenal! Now we'll witness whether the automation pipeline we poured sweat into for two days can truly save our lives!\" Karn watched with burning eyes.",
            "th": "อาร์เทอร์รับคำสั้นๆ วินาทีนี้สมองของเขาทำงานเร็วกว่าตอนเขียนโปรแกรมสมัยก่อนถึงสิบเท่า เขาสลับหน้าจอไปที่ไฟล์ตั้งค่า deployment.yaml ของระบบจ่ายเงิน\n\nนิ้วของเขาพิมพ์แก้ตัวเลขอย่างแม่นยำโดยไม่เคาะวรรคผิดแม้แต่ช่องเดียว:\n\nแก้จำนวนพอด (replicas) จาก 3 เป็น 10\nแก้ขนาดหน่วยความจำ (memory limits) จาก 512Mi เป็น 1024Mi\n\nอาร์เทอร์พิมพ์คำสั่ง git commit และ git push ส่งไฟล์ที่แก้เสร็จขึ้นไปบน GitHub ทันที!\n\n\"ผมส่งโค้ดแก้ขึ้นไปแล้วครับพี่กานต์!\" อาร์เทอร์บอกเสียงสั่นด้วยความตื่นเต้น\n\n\"เยี่ยม! ทีนี้แหละ เราจะได้รู้กันว่าไอ้ระบบอัตโนมัติที่เราอดหลับอดนอนทำมาสองวัน มันจะช่วยชีวิตพวกเราได้จริงไหม!\" พี่กานต์จ้องหน้าจอเขม็ง"
        },
        {
            "id": 9,
            "en": "In the old days of Jenkins, they would have queued behind other jobs for at least ten minutes, by which time Australian shoppers would have abandoned their carts and walked away.\n\nWith Arthur's freshly minted GitHub Actions workflow, however, the commit was authenticated via OIDC within fifteen seconds, triggering Argo CD immediately.\n\nAcross the screens of the Blue Team, the orange octopus began moving its tentacles at lightning speed. Pod boxes on AWS EKS in Sydney multiplied into ten neat rectangles in the blink of an eye!\n\nFrom yellow... to green (Healthy): one pod... two pods... five pods... until all ten pods stood fully operational!\n\nThe tidal wave of customer checkout requests was absorbed seamlessly by the ten expanded pods, now cushioned with generous memory. The catastrophic red curve on the office screen flattened out into a tranquil, beautiful green line.",
            "th": "ถ้าเป็นเมื่อก่อนที่ยังใช้คุณปู่ Jenkins พวกเขาต้องรอคิวอย่างน้อย 10 นาทีกว่าระบบจะอัปเดตเสร็จ ซึ่งป่านนั้นลูกค้าชาวออสเตรเลียคงหนีหายไปหมดแล้ว\n\nแต่ด้วย GitHub Actions ที่อาร์เทอร์เพิ่งสร้างเสร็จ... ทันทีที่เขากดส่งโค้ด ไม่ถึง 15 วินาที มันก็ตรวจสอบสิทธิ์ผ่าน OIDC และส่งคำสั่งต่อไปยัง Argo CD ทันที!\n\nบนหน้าจอของทุกคนในทีม Blue เจ้าปลาหมึกสีส้มเริ่มขยับหนวดทำงานอย่างบ้าคลั่ง กล่องสี่เหลี่ยมของพอดใน AWS EKS ที่ซิดนีย์ ถูกเสกเพิ่มขึ้นมาเรียงรายกัน 10 กล่องรวดภายในพริบตา!\n\nจากสีเหลือง... ค่อยๆ เปลี่ยนเป็น สีเขียว (Healthy) หนึ่งกล่อง... สองกล่อง... ห้ากล่อง... จนกระทั่งครบทั้ง 10 กล่อง!\n\nทราฟฟิกมหาศาลจากลูกค้าในซิดนีย์ถูกกระจายเข้าไปยังพอดทั้ง 10 ตัวที่ตอนนี้มีเมมโมรี่กว้างขวางอย่างนุ่มนวล กราฟสีแดงเถือกบนจอมอนิเตอร์กลางห้องค่อยๆ ลดระดับลง... จนกลายเป็นเส้นสีเขียวที่ราบเรียบและสวยงามในที่สุด!"
        },
        {
            "id": 10,
            "en": "Chime!\n\nA notification banner updated in green: RESOLVED: Payment Service is back to normal.\n\n\"Bloody brilliant, Blue Team!!\"\n\nLiam's ecstatic roar erupted through the speakers, joined by enthusiastic applause from Chloe and the Sydney engineers.\n\n\"Checkout rate is back to 100%! Arthur, your new GitHub Actions pipeline just saved our Friday! It deployed the fix in less than a minute! Legend, mate! Absolute legend!\"\n\nArthur let his hands drop to his sides, drawing a massive breath into his lungs. His shirt was soaked in sweat, but the heart thumping inside his chest swelled with pride unlike anything he had felt in eight years of software engineering.\n\nThe word \"Legend\" from the mouth of the foreign director he had been petrified of on Monday... today he had earned it with his own two hands!",
            "th": "ตือดึง!\n\nเสียงแจ้งเตือนจากระบบดังขึ้นอีกครั้ง แต่คราวนี้เป็นข้อความสีเขียวที่เขียนว่า: RESOLVED: Payment Service is back to normal. (แก้ไขสำเร็จ: ระบบจ่ายเงินกลับสู่สภาวะปกติ)\n\n\"Bloody brilliant, Blue Team!!\"\n\nเสียงร้องตะโกนด้วยความสะใจของเลียมดังลั่นมาจากลำโพง พร้อมกับเสียงปรบมือรัวๆ ของโคลอี้และทีมงานฝั่งออสเตรเลีย\n\n\"Checkout rate is back to 100%! Arthur, your new GitHub Actions pipeline just saved our Friday! It deployed the fix in less than a minute! Legend, mate! Absolute legend!\"\n(อัตราการจ่ายเงินกลับมา 100% แล้ว! อาร์เทอร์ ระบบ GitHub Actions ใหม่ของคุณเพิ่งช่วยชีวิตวันศุกร์ของพวกเราไว้! มันอัปเดตระบบเสร็จในเวลาไม่ถึงนาที! นายคือตำนานเพื่อนยาก! ตำนานตัวจริงเลย!)\n\nอาร์เทอร์ทิ้งมือทั้งสองข้างลงข้างลำตัว ถอนหายใจยาวเหยียดจนสุดปอด แผ่นหลังของเขาชุ่มไปด้วยเหงื่อ แต่หัวใจที่เต้นรัวอยู่ในอกกลับพองโตอย่างที่ไม่เคยเป็นมาก่อนในชีวิตการทำงานตลอดแปดปี\n\nคำว่า \"Legend (ตำนาน)\" จากปากของหัวหน้าชาวต่างชาติที่เขาเคยกลัวจนตัวสั่นเมื่อวันจันทร์... วันนี้เขากลับได้รับมันมาด้วยฝีมือของตัวเอง!"
        },
        {
            "id": 11,
            "en": "\"Incredible, Arthur! Unmuting and commanding in English like a boss, and recovering Sydney's servers in sixty seconds!\" Phop wrapped an arm around Arthur's neck, shaking him in celebration, while Raj gave two big thumbs up from across the aisle.\n\nKarn clapped Arthur's shoulder with a broad, heartfelt grin. \"See? I told you a person isn't measured by what college they attended or how old they are... It's measured by what you do when the pressure is on. Today, you graduated into a full-fledged DevOps engineer, Arthur.\"\n\n\"Thank you so much, P'Karn... If it weren't for you and Phop guiding me, I never could have done this,\" Arthur replied, his voice thick with emotion.",
            "th": "\"สุดยอดเลยพี่อาร์เทอร์! เปิดไมค์สั่งการเป็นภาษาอังกฤษอย่างเท่ แถมกู้เซิร์ฟเวอร์ซิดนีย์ได้ในหนึ่งนาที!\" ภพหันมากอดคอเขย่าตัวรุ่นพี่ด้วยความดีใจ ขณะที่ราจก็ยกนิ้วโป้งทั้งสองข้างส่งมาให้จากโต๊ะข้างๆ\n\nพี่กานต์ตบไหล่อาร์เทอร์เบาๆ ด้วยรอยยิ้มกว้าง \"เห็นไหม พี่บอกแล้วว่าคนเราไม่ได้วัดกันที่ว่าจบจากมหาลัยไหน หรืออายุเท่าไหร่... แต่วัดกันที่ว่าตอนหน้าสิ่วหน้าขวาน เราทำอะไรได้บ้างต่างหาก วันนี้นายสอบผ่านการเป็น DevOps เต็มตัวแล้วนะอาร์เทอร์\"\n\n\"ขอบคุณครับพี่กานต์... ถ้าไม่ได้พี่กับภพคอยสอน ผมคงทำไม่ได้หรอกครับ\" อาร์เทอร์ยิ้มรับด้วยความตื้นตัน"
        },
        {
            "id": 12,
            "en": "He picked up his phone and saw a LINE message from Praew with a picture of little August holding up his family drawing, decorated with three gold stars from his kindergarten teacher, accompanied by the text: *'What would Daddy like to eat for dinner tonight?'*\n\nArthur smiled warmly and texted back that he wanted a Thai BBQ pork grill (Moo Kratha) to celebrate Friday.\n\nThe first week in this new world had come to a close for the thirty-year-old father. While many colossal bosses in the cloud universe still awaited him down the road... today, Arthur knew he would never have to fear them again!",
            "th": "เขาหยิบโทรศัพท์มือถือขึ้นมาดู เห็นข้อความไลน์จาก ‘แพร’ ที่ส่งรูปของ ‘น้องออกัส’ กำลังถือใบงานวาดรูปครอบครัวที่ได้ดาวสีทองสามดวงจากคุณครูมาอวด พร้อมข้อความว่า ‘เย็นนี้ปะป๊าอยากกินอะไรเป็นพิเศษไหมคะ?’\n\nอาร์เทอร์คลี่ยิ้มอบอุ่น พิมพ์ตอบภรรยากลับไปว่าขอเป็นหมูกระทะฉลองวันศุกร์\n\nสัปดาห์แรกในโลกใบใหม่ของคุณพ่อวัยสามสิบผ่านพ้นไปแล้ว แม้หนทางข้างหน้ายังมีบอสตัวใหญ่อีกหลายตัวในโลกของ Cloud รอให้เขาไปปราบ... แต่วันนี้ อาร์เทอร์รู้แล้วว่าเขาไม่จำเป็นต้องกลัวมันอีกต่อไป!"
        }
    ],
    "quiz": [
        {
            "question": "What was the real cause behind the payment service outage during the Flash Sale?",
            "options": [
                "(Recommended) High traffic caused the pods to run out of memory, triggering OOMKilled",
                "Arthur's new GitHub Actions pipeline contained a syntax bug",
                "Chloe pushed broken payment code to production",
                "The Australian cloud provider went bankrupt"
            ],
            "answer": 0,
            "explanation": "พอดไม่ได้พังเพราะโค้ด แต่พังเพราะคนเข้าใช้งานแคมเปญ Flash Sale มากกว่าปกติ 5 เท่า จนเกิดสถานะ OOMKilled เมมโมรี่เต็ม"
        },
        {
            "question": "How did Arthur solve the incident within one minute?",
            "options": [
                "(Recommended) Scaled replicas from 3 to 10 and doubled memory limit to 1024Mi via GitHub Actions",
                "Rolled back Chloe's code to the previous version",
                "Restarted the database server in Melbourne",
                "Shut down the entire company website for the weekend"
            ],
            "answer": 0,
            "explanation": "อาร์เทอร์แก้ไฟล์ deployment.yaml ขยายพอดเป็น 10 ตัวและเพิ่มเมมโมรี่เป็น 1024Mi แล้วส่งผ่าน GitHub Actions ให้ Argo CD ซิงค์ทันที"
        },
        {
            "question": "What does the phrase \"Absolute legend!\" convey in Australian English?",
            "options": [
                "(Recommended) High praise recognizing someone as an extraordinary hero or top performer",
                "A mythical story from ancient history",
                "A warning that someone made a serious mistake",
                "A nickname for someone who is very old"
            ],
            "answer": 0,
            "explanation": "คำว่า 'Absolute legend' ในภาษาอังกฤษสำเนียงออสซี่ใช้ชื่นชมบุคคลที่สร้างผลงานสุดยอด เป็นฮีโร่ตัวจริงของทีม"
        }
    ]
}
