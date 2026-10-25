# scripts/ch17.py
# Chapter 17: Attack from the Shadows and the Sky Shield
# "บทที่ 17: การโจมตีจากเงามืดและโล่พิทักษ์ฟ้า"

chapter17 = {
    "id": "zd-ch-17",
    "chapterNumber": 17,
    "collection": "zero-downtime",
    "title": "Chapter 17: Attack from the Shadows and the Sky Shield",
    "titleTh": "บทที่ 17: การโจมตีจากเงามืดและโล่พิทักษ์ฟ้า",
    "coverEmoji": "🛡️",
    "level": "B1",
    "levelBadge": "Workplace IT Novel",
    "wordCount": 1050,
    "estimatedTime": "7 นาที",
    "xpReward": 30,
    "summary": "เช้าวันศุกร์ เทศกาล Black Friday เริ่มขึ้น ทราฟฟิกพุ่ง 15 เท่า แต่จู่ๆ เกิดการโจมตี Layer 7 DDoS แบบ Cache Busting ยิงคำค้นหาสุ่มเพื่อหลบแคช Redis จนเซิร์ฟเวอร์แทบล่ม อาร์เทอร์วิเคราะห์ Log แกะรอยบอทได้อย่างแม่นยำ และแท็กทีมกับเอเลน่ากางโล่ AWS WAF สกัดบอทนับล้านตัวได้อยู่หมัด!",
    "tags": ["Zero Downtime", "AWS WAF", "DDoS", "CloudFront", "Security", "Workplace English", "Story"],
    "keyVocab": [
        {
            "word": "DDoS Attack",
            "ipa": "/ˌdiː.diː.oʊˈes əˈtæk/",
            "th": "การโจมตีปฏิเสธการให้บริการแบบกระจายตัว (ส่งทราฟฟิกมหาศาลเพื่อทำให้ระบบล่ม)",
            "example": "The hackers launched a massive Layer 7 DDoS attack to overwhelm the checkout service."
        },
        {
            "word": "Cache Busting",
            "ipa": "/kæʃ ˈbʌs.tɪŋ/",
            "th": "เทคนิคการส่งพารามิเตอร์สุ่มเพื่อหลบเลี่ยงระบบแคช และพุ่งตรงไปกระแทกฐานข้อมูล",
            "example": "By sending random gibberish search terms, the botnet used cache busting to overload the database."
        },
        {
            "word": "Botnet",
            "ipa": "/ˈbɑːt.net/",
            "th": "กองทัพบอทคอมพิวเตอร์ที่ถูกควบคุมเพื่อระดมยิงโจมตีเป้าหมาย",
            "example": "Elena identified the signature of an automated Python botnet flooding their API."
        },
        {
            "word": "Rate Limiting",
            "ipa": "/reɪt ˈlɪm.ɪ.tɪŋ/",
            "th": "การจำกัดจำนวนคำขอต่อช่วงเวลา เพื่อสกัดกั้นการยิงคำขอที่ผิดปกติ",
            "example": "Applying rate limiting on AWS WAF throttled abusive IP addresses to a maximum of 100 requests per 5 minutes."
        },
        {
            "word": "Edge",
            "ipa": "/edʒ/",
            "th": "ด่านหน้าสุดของระบบเครือข่ายระดับโลก (เช่น CloudFront CDN Points of Presence)",
            "example": "AWS WAF dropped the malicious traffic at the CloudFront edge before it ever reached Sydney servers."
        }
    ],
    "paragraphs": [
        {
            "id": 1,
            "en": "Friday morning, 8:30 AM in Bangkok (12:30 PM in Sydney and Melbourne).\n\nThe 22nd-floor office buzzed with the electric tension of a NASA rocket launch control room. Desks across Blue, Red, and Green teams were littered with jumbo coffee cups and energy drink cans.\n\nThe giant monitor mounted on the central wall showed a bold digital countdown ticking down toward Australia's Black Friday Grand Sale at 1:00 PM Australian time (9:00 AM Bangkok time).",
            "th": "เช้าวันศุกร์ เวลา 08:30 น. (ตรงกับเวลา 12:30 น. ของซิดนีย์ และเมลเบิร์น)\n\nบรรยากาศในออฟฟิศชั้น 22 วันนี้คึกคักราวกับศูนย์บัญชาการปล่อยจรวดอวกาศ บนโต๊ะทำงานของทีม Blue, Red และ Green เต็มไปด้วยกระป๋องเครื่องดื่มชูกำลังและแก้วกาแฟขนาดจัมโบ้\n\nบนหน้าจอมอนิเตอร์ยักษ์กลางห้อง แสดงตัวเลขเวลาถอยหลังสู่การเปิดแคมเปญ Black Friday Grand Sale ของออสเตรเลียที่จะเริ่มขึ้นในเวลาบ่ายโมงตรง (09:00 น. เวลาไทย)"
        },
        {
            "id": 2,
            "en": "In Melbourne, Liam and Karn sat in the headquarters executive boardroom alongside senior leadership watching the revenue dashboards. In Bangkok, Arthur sat at the primary console as Acting Blue Team Lead, flanked by Phop and Raj.\n\n\"All 20 EKS nodes are at 100% health, Arthur!\" Phop reported excitedly. \"HPA autoscaling for all 40 microservices is primed and armed!\"\n\n\"Database connections and the Redis cluster built with Terraform yesterday are crystal clean!\" Raj chimed in, flashing two thumbs up.",
            "th": "ที่เมลเบิร์น ‘เลียม’ และ ‘พี่กานต์’ นั่งอยู่ในห้องประชุมใหญ่ของสำนักงานใหญ่ออสเตรเลีย รายล้อมไปด้วยผู้บริหารระดับสูงที่รอดูยอดขาย ส่วนที่กรุงเทพฯ ‘อาร์เทอร์’ ในฐานะรักษาการหัวหน้าทีม Blue นั่งประจำการอยู่หน้าจอหลัก ขนาบข้างด้วย ‘ภพ’ และ ‘ราจ’\n\n\"ตึกเซิร์ฟเวอร์ EKS ทั้ง 20 เครื่องพร้อมทำงาน 100% ครับพี่อาร์เทอร์! ตัวปั๊มพอด HPA ของทั้ง 40 เซอร์วิสตั้งค่าเตรียมรับศึกหนักไว้หมดแล้ว!\" ภพรายงานด้วยน้ำเสียงตื่นเต้น\n\n\"ฐานข้อมูลและระบบแคช Redis ที่สร้างด้วย Terraform เมื่อวานก็เขียวสะอาดพร้อมรับมือเต็มที่ครับ!\" ราจเสริมพร้อมยกนิ้วโป้งให้"
        },
        {
            "id": 3,
            "en": "**09:00:00 AM — The doors unlocked!**\n\nThe moment the digital storefront opened, the graph of active shoppers from across Australia shot skyward like a SpaceX rocket! Thousands... tens of thousands... blazing past 100,000 active users in under two minutes!\n\nOn Arthur's Argo CD dashboard, their orchestrated automation performed like a world-class symphony. HPAs scaled pods from dozens to hundreds with velvety smoothness. Checkout revenue skyrocketed, drawing loud cheers through the Melbourne speakerphone.",
            "th": "09:00:00 น. — แคมเปญเริ่มต้นขึ้น!\n\nทันทีที่ประตูห้างออนไลน์เปิดออก กราฟผู้ใช้งานจริง (Active Users) จากทั่วทุกมุมเมืองในออสเตรเลียก็พุ่งทะยานขึ้นเป็นเส้นตรงราวกับบั้งไฟ!\n\nจากหลักพัน... เป็นหลักหมื่น... และทะลุหนึ่งแสนคนภายในเวลาแค่สองนาที!\n\nบนหน้าจอ Argo CD ของอาร์เทอร์ ระบบอัตโนมัติที่พวกเขาเตรียมการมาอย่างดีทำงานสอดประสานกันราวกับวงออร์เคสตรา เจ้า HPA สั่งขยายจำนวนพอดจากหลักสิบเป็นหลักร้อยตัวอย่างนุ่มนวล กราฟยอดขายพุ่งกระฉูดจนเสียงเฮจากห้องประชุมที่เมลเบิร์นดังลอดลำโพงออกมา"
        },
        {
            "id": 4,
            "en": "Yet the peace lasted only fifteen minutes...\n\n**09:16 AM.**\n\nSuddenly, the incoming traffic graph spiked exponentially—a vertical 90-degree cliff jumping 10x beyond expected retail levels!\n\nYet here was the terrifying anomaly: While raw incoming requests hit millions per minute, the **Checkout Success Rate** took a catastrophic nosedive!\n\n*Ding! Ding! Ding! Alert sirens screamed.* Pods for search and cart services hit their maximum replica ceilings. The cluster shuddered under an immense tidal wave. Real Aussie shoppers were greeting spinning wheel hangs!",
            "th": "แต่ความสงบสุขอยู่ได้เพียง 15 นาทีเท่านั้น...\n\nเวลา 09:16 น.\n\nจู่ๆ กราฟทราฟฟิกขาเข้า (Incoming Requests) ที่เคยขึ้นลงตามจังหวะการคลิกซื้อของของมนุษย์ ก็ดีดตัวพุ่งทะลุเพดานขึ้นไปอีก 10 เท่าตัว จนเส้นกราฟตั้งฉาก 90 องศา!\n\nแต่สิ่งที่ผิดปกติอย่างร้ายแรงก็คือ... กราฟทราฟฟิกพุ่งขึ้นไปแตะระดับล้านครั้งต่อนาที แต่กราฟ \"ยอดการสั่งซื้อสำเร็จ (Checkout Rate)\" กลับเริ่มหัวทิ่มดิ่งลงเหว!\n\nตือดึง! ตือดึง! ตือดึง!\n\nเสียงไซเรนเตือนภัยดังระงมขึ้นอีกครั้ง พอดของระบบค้นหาสินค้าและระบบตะกร้าสินค้าบน AWS EKS ขยายตัวจนชนเพดานสูงสุดที่ตั้งไว้แล้ว แต่ก็ยังรับคลื่นกระแทกมหาศาลนี้ไม่ไหว จนลูกค้าตัวจริงในซิดนีย์เริ่มกดเข้าหน้าเว็บแล้วเจออาการหมุนค้าง!"
        },
        {
            "id": 5,
            "en": "\"Bangkok Team! What's happening?!\" Liam's voice boomed from Melbourne over speaker. \"Our servers are maxing out, CPU is hitting 95% across all 20 nodes, but sales are dropping! Should we run Terraform to add 20 more servers?!\"\n\n\"I'll trigger the Terraform scaling pipeline right now, Arthur!\" Phop scrambled to click the GitHub action.\n\n\"Wait, Phop! Hold on!\" Arthur shouted, holding out an arm.",
            "th": "\"Bangkok Team! What's happening?!\" เสียงของเลียมตะโกนถามมาจากเมลเบิร์น โดยมีเสียงพี่กานต์ช่วยดูหน้าจออยู่ข้างๆ \"Our servers are maxing out, CPU is hitting 95% across all 20 nodes, but sales are dropping! Should we run Terraform to add 20 more servers?!\"(ทีมกรุงเทพฯ เกิดอะไรขึ้น?! เซิร์ฟเวอร์ของเรากำลังทำงานเต็มพิกัด CPU พุ่ง 95% ทั้ง 20 เครื่อง แต่ยอดขายกลับตกลง! เราควรสั่งรัน Terraform เพื่อเปิดเซิร์ฟเวอร์เพิ่มอีก 20 เครื่องเลยไหม?!)\n\n\"เดี๋ยวผมกดรันโค้ดเพิ่มเครื่องเซิร์ฟเวอร์เดี๋ยวนี้เลยครับพี่อาร์เทอร์!\" ภพรีบสลับหน้าจอไปที่ GitHub เตรียมกดปุ่มสั่งขยายตึก\n\n\"ช้าก่อนภพ! อย่าเพิ่งกด!\"\n\nอาร์เทอร์ยกมือห้ามรุ่นน้องไว้"
        },
        {
            "id": 6,
            "en": "Arthur fixed his gaze on the streaming access logs cascading down his terminal like a waterfall.\n\n\"Raj! Why is this incoming torrent bypassing our Redis cache entirely and hammering the database with weird search queries on every hit?!\"\n\nRaj ran a quick log filter: \"Wait... You're spot on, Arthur! Someone is flooding random gibberish search terms like `/?search=xj8912a`, `/?search=pq0019z` millions of times per second! Because the search keys are completely randomized, our Redis cache is utterly useless—every request punches directly into the PostgreSQL database!\"",
            "th": "สายตาของเขาจ้องเขม็งไปที่หน้าจอแสดงผลบันทึกการเข้าใช้งาน (Access Logs) ที่วิ่งไหลเร็วราวกับน้ำตก\n\n\"พี่ราจ! ทำไมทราฟฟิกที่พุ่งเข้ามาเป็นล้านครั้งเนี่ย มันถึงไม่ได้ไปดึงข้อมูลจากแคช Redis ที่เราตั้งไว้เลย แต่กลับพุ่งทะลุเข้าไปค้นหาคำแปลกๆ ในฐานข้อมูลตรงๆ ทุกครั้งเลยครับ?!\"\n\nราจรีบพิมพ์คำสั่งกรองข้อมูลดูทันที \"Wait... You're right, Arthur! Someone is sending random gibberish search queries like /?search=xj8912a, /?search=pq0019z millions of times per second! Because the search words are never the same, our Redis cache is completely bypassed!\"(เดี๋ยวนะ... นายพูดถูกอาร์เทอร์! มีใครบางคนกำลังส่งคำค้นหามั่วๆ สุ่มตัวอักษรเข้ามาเป็นล้านครั้งต่อวินาที! และเพราะคำค้นหามันไม่ซ้ำกันเลย ระบบแคชของเราก็เลยช่วยสกัดไม่ได้ ข้อมูลเลยพุ่งไปกระแทกฐานข้อมูลเต็มๆ!)"
        },
        {
            "id": 7,
            "en": "Arthur's eyes ignited. Cloud security lessons from his AWS SAA studies flashed instantly into crystal focus.\n\n\"These aren't real shoppers! It's an automated **Layer 7 DDoS Cache-Busting Attack**! The attackers are intentionally flooding un-cached random queries to paralyze our database tier. If we spin up 20 more servers, we'll just burn thousands of company dollars because the bots will simply expand to choke those too!\"\n\nArthur swiveled his chair: \"Elena! We are under a Layer 7 DDoS attack on the search endpoint!\"",
            "th": "ดวงตาของอาร์เทอร์วาวโรจน์ขึ้นมาทันที ความรู้จากบทเรียนความปลอดภัยในข้อสอบ AWS SAA ผุดขึ้นมาในหัวอย่างชัดเจน\n\n\"นี่ไม่ใช่ลูกค้าจริงครับ! แต่มันคือการยิงถล่มด้วยบอทแฮกเกอร์ (Layer 7 DDoS Attack - Cache Busting)! แฮกเกอร์จงใจยิงคำค้นหาสุ่มๆ เข้ามาเพื่อให้เซิร์ฟเวอร์และฐานข้อมูลของเราทำงานหนักจนล่ม... ถ้าเราขยายเซิร์ฟเวอร์เพิ่มตามที่เลียมบอก เราก็แค่ผลาญเงินบริษัทเล่น เพราะบอทมันก็จะยิงตามเข้ามาจนเต็มอยู่ดี!\"\n\nอาร์เทอร์ไม่รอช้า เขาหันเก้าอี้ไปตะโกนเรียกหัวหน้าทีมสีเขียวที่นั่งห่างออกไปสามโต๊ะทันที!\n\n\"Elena! We are under a Layer 7 DDoS attack on the search endpoint!\"(เอเลน่าครับ! เรากำลังโดนโจมตี DDoS ระดับแอปพลิเคชันที่ช่องทางค้นหาสินค้าครับ!)"
        },
        {
            "id": 8,
            "en": "Elena pushed back her chair and strode over in brisk heels. \"Show me the attack signature, Arthur!\"\n\nArthur showed her the dissected HTTP headers he'd extracted with Linux pipeline commands.\n\n\"Look at this, Elena! First, the IP addresses originate from data centers far outside Australia and New Zealand. Second, the User-Agent header reveals an outdated Python requests library. And third, every single bot request includes a dummy cookie: `bf_bot_bypass=true`!\"\n\nKarn clapped his hands over the Melbourne conference speaker: \"Spot on, Arthur! That's a textbook botnet signature!\"",
            "th": "เอเลน่าดีดตัวลุกขึ้นจากเก้าอี้ วิ่งส้นสูงก้าวฉับๆ มายืนข้างหลังอาร์เทอร์ภายในสามวินาที \"Show me the traffic pattern, Arthur!\" (ขอดูรูปแบบการโจมตีหน่อยค่ะอาร์เทอร์!)\n\nอาร์เทอร์เปิดหน้าจอ Log ที่เขาเพิ่งใช้คำสั่ง Linux กรองแยกส่วนหัวของข้อมูล (HTTP Headers) ออกมาให้เอเลน่าดูอย่างคล่องแคล่ว\n\n\"Look at this, Elena!\" อาร์เทอร์ชี้ไปที่จุดสังเกตสำคัญ 3 จุดบนหน้าจอ \"First, the IP addresses are coming from data centers outside Australia and New Zealand! Second, their User-Agent header is an old Python script! And third, they all have a fake cookie named bf_bot_bypass=true!\"\n\nพี่กานต์ที่ได้ยินเสียงวิเคราะห์ของอาร์เทอร์ผ่านลำโพงที่เมลเบิร์น ถึงกับตบโต๊ะด้วยความสะใจ \"Spot on, Arthur! That's a textbook botnet signature!\" (แม่นมากอาร์เทอร์! นั่นคือลายนิ้วมือของกองทัพบอทตามตำราเป๊ะๆ เลย!)"
        },
        {
            "id": 9,
            "en": "Elena flashed a razor-sharp smirk. \"Trying to crash our Black Friday with a cheap Python botnet? Not on my watch.\n\nArthur, keep your eyes on the EKS pods. I will raise the sky shield on **AWS WAF (Web Application Firewall)** right at our CloudFront CDN edge before this garbage even sniffs Sydney!\"\n\nTogether, they operated in flawless harmony. Arthur monitored the bot shifts while Elena drafted two surgical WAF rules:\n\n1. **Geo-Blocking & Rate Limiting:** Rate-limit any non-AU/NZ IP making more than 100 search requests per 5 minutes.\n2. **String Match Rule:** Instantly drop and return `403 Forbidden` for any request matching the `bf_bot_bypass` cookie or Python script User-Agents.",
            "th": "เอเลน่าแสยะยิ้มเย็นเยียบเมื่อเห็นผู้ร้ายตัวจริงคาหนังคาเขา \"Trying to crash our Black Friday with a cheap Python botnet? Not on my watch.\" (คิดจะล้มงาน Black Friday ของพวกเราด้วยบอทไพธอนราคาถูกเนี่ยนะ? ข้ามศพฉันไปก่อนเถอะ)\n\n\"Arthur, keep monitoring the EKS pods. I will raise the shield on AWS WAF (Web Application Firewall) right at the CloudFront CDN edge before the traffic even touches Sydney!\"\n(อาร์เทอร์ คอยดูพอดใน EKS ไว้นะคะ เดี๋ยวฉันจะกางโล่ป้องกันบนไฟร์วอลล์ AWS WAF ตั้งแต่ด่านหน้าสุดของเครือข่าย ก่อนที่ทราฟฟิกพวกนี้จะวิ่งมาถึงซิดนีย์ด้วยซ้ำ!)\n\nอาร์เทอร์และเอเลน่าทำงานประสานกันเป็นทีมเวิร์กที่สมบูรณ์แบบ อาร์เทอร์คอยอ่านค่าตัวแปรแปลกๆ ที่บอทพยายามเปลี่ยนหนีแล้วบอกเป็นภาษาอังกฤษสั้นๆ กระชับๆ ให้เอเลน่าเขียนกฎสกัดกั้น (WAF Rules) ลงไป:\n\nกฎข้อที่ 1 (Geo-Blocking & Rate Limiting): บล็อกหรือจำกัดความเร็ว IP ที่ไม่ได้มาจากออสเตรเลียและนิวซีแลนด์ หากกดค้นหาเกิน 100 ครั้งใน 5 นาที!\n\nกฎข้อที่ 2 (String Match Rule): ทราฟฟิกไหนที่มีคุกกี้ปลอมหรือใช้สคริปต์ Python ยิงเข้ามา ให้สั่ง BLOCK (403 Forbidden) ทิ้งตั้งแต่หน้าประตูบ้านทันที!"
        },
        {
            "id": 10,
            "en": "\"WAF Rules deployed globally!\" Elena confirmed, slamming Enter.\n\nWithin ten seconds of deploying the cloud shield, the massive red spike of malicious traffic on the central display was severed cleanly—plunging straight to zero!\n\nMillions of bot requests were discarded right at CloudFront edge locations, never touching Arthur's EKS cluster.\n\nCPU load dropped instantly from 95% down to a calm 40%. Australian shoppers resumed ordering effortlessly. The checkout counter surged into new all-time company records amid roaring cheers across Bangkok and Melbourne!",
            "th": "\"WAF Rules deployed globally!\" เอเลน่ากดปุ่มยืนยันคำสั่ง\n\nเพียงแค่ 10 วินาทีหลังจากโล่แห่งคลาวด์ถูกกางออก...\n\nบนหน้าจอมอนิเตอร์กลางห้อง กราฟสีแดงของทราฟฟิกขยะที่เคยพุ่งทะลุเพดาน ถูกลำแสงสีเขียวของ AWS WAF ฟันขาดสะบั้นร่วงกราวลงมาเป็นศูนย์ทันที!\n\nบอทแฮกเกอร์นับล้านตัวถูกสกัดกั้นอยู่แค่หน้ากำแพงเมือง ไม่สามารถเล็ดลอดเข้ามาถึงคลัสเตอร์ AWS EKS ของทีม Blue ได้แม้แต่ตัวเดียว!\n\nเมื่อทราฟฟิกขยะหายไป CPU ของเซิร์ฟเวอร์ทั้ง 20 เครื่องก็ลดฮวบจาก 95% ลงมาเหลือเพียง 40%... เปิดทางให้ลูกค้าชาวออสเตรเลียตัวจริงสามารถกดสั่งซื้อและจ่ายเงินได้อย่างลื่นไหลอีกครั้ง กราฟยอดขายดีดตัวพุ่งทะยานกลับขึ้นไปทำลายสถิติใหม่ท่ามกลางเสียงโห่ร้องยินดีของคนทั้งสองซีกโลก!"
        },
        {
            "id": 11,
            "en": "\"Incredible teamwork, Bangkok!!\" Liam shouted jubilantly. \"Arthur, if you hadn't stopped Phop from scaling and spotted that cache-busting pattern in the logs, we would have burnt thousands of dollars and still crashed! You and Elena are a lethal combination!\"\n\nElena met Arthur's gaze and held out a fist. \"Good call on that cookie header, Acting Lead.\"\n\nArthur grinned, fist-bumping her warmly. \"Thanks to your lightning-fast WAF rules, Elena.\"\n\nThe human assault was thwarted. But none of them knew that in the afternoon, nature was about to strike Sydney with the harshest disaster in cloud computing!",
            "th": "\"Incredible teamwork, Bangkok!!\" เลียมตะโกนลั่นห้องประชุมที่เมลเบิร์น \"Arthur, if you hadn't stopped Phop from scaling up and spotted that cache-busting pattern in the logs, we would have wasted thousands of dollars and still crashed! You and Elena make a deadly combo!\"(ทีมเวิร์กสุดยอดมากกรุงเทพฯ!! อาร์เทอร์ ถ้านายไม่ห้ามภพเรื่องขยายเซิร์ฟเวอร์ไว้ แล้วตาไวเห็นรูปแบบการยิงทะลุแคชในบันทึกนั่นซะก่อน เราคงผลาญเงินไปหลายพันดอลลาร์แถมระบบก็คงล่มอยู่ดี! นายกับเอเลน่าเป็นคู่หูที่อันตรายสุดๆ ไปเลย!)\n\nเอเลน่าหันมาสบตากับอาร์เทอร์แล้วยื่นกำปั้นมาตรงหน้า \"Good call on the cookie header, Acting Lead.\" (ตาไวเรื่องคุกกี้มากค่ะ ท่านรักษาการหัวหน้าทีม)\n\nอาร์เทอร์ยิ้มกว้าง ยื่นกำปั้นไปชนกับเธอเบาๆ (Fist bump) \"Thanks to your fast WAF rules, Elena.\" (ต้องขอบคุณกฎไฟร์วอลล์ที่รวดเร็วของคุณเหมือนกันครับเอเลน่า)\n\nพายุลูกแรกจากฝีมือมนุษย์ถูกปัดเป่าไปแล้ว... แต่ไม่มีใครในห้องนั้นรู้เลยว่า ในช่วงบ่ายที่จะถึงนี้ \"ภัยพิบัติทางธรรมชาติของโลกไอที\" ที่โหดร้ายที่สุด กำลังจะเดินทางมาถึงซิดนีย์!"
        }
    ],
    "quiz": [
        {
            "id": "zd17-q1",
            "question": "Why did the attackers use random search strings like `/?search=xj8912a` instead of normal product queries?",
            "options": [
                "To perform cache busting, bypassing the Redis cache and hammering the database with expensive queries.",
                "To test if the search engine supported emojis.",
                "To download free images from the website.",
                "Because they did not speak English."
            ],
            "answer": 0,
            "explanation": "Correct! Random search terms prevent cache hits, causing all traffic to bypass Redis and overwhelm the underlying database."
        },
        {
            "id": "zd17-q2",
            "question": "What three crucial anomalies did Arthur identify in the HTTP request headers?",
            "options": [
                "Non-AU/NZ IP addresses, outdated Python script User-Agents, and a suspicious cookie named `bf_bot_bypass=true`.",
                "Requests with missing SSL certificates, wrong fonts, and outdated Chrome versions.",
                "Requests with Korean text, large MP4 videos, and missing mouse cursors.",
                "Traffic sent entirely via dial-up modems."
            ],
            "answer": 0,
            "explanation": "Correct! Arthur spotted the foreign IP origins, the automated Python client User-Agent, and the telltale dummy bot cookie."
        },
        {
            "id": "zd17-q3",
            "question": "Where did Elena deploy the AWS WAF rules to drop the malicious botnet traffic?",
            "options": [
                "At the CloudFront CDN edge before traffic reached the Sydney infrastructure.",
                "Inside the office Wi-Fi router in Bangkok.",
                "On Arthur's laptop.",
                "Inside the Melbourne meeting room."
            ],
            "answer": 0,
            "explanation": "Correct! CloudFront Edge locations inspect and block malicious traffic at perimeter points of presence globally before it reaches backend servers."
        }
    ]
}
