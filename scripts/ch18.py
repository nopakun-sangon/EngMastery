# scripts/ch18.py
# Chapter 18: Crisis upon Crisis: When the Data Center Goes Down
# "บทที่ 18: วิกฤตซ้อนวิกฤตเมื่อ Data Center ล่ม!"

chapter18 = {
    "id": "zd-ch-18",
    "chapterNumber": 18,
    "collection": "zero-downtime",
    "title": "Chapter 18: Crisis upon Crisis: When the Data Center Goes Down",
    "titleTh": "บทที่ 18: วิกฤตซ้อนวิกฤตเมื่อ Data Center ล่ม!",
    "coverEmoji": "⚡",
    "level": "B1",
    "levelBadge": "Workplace IT Novel",
    "wordCount": 1180,
    "estimatedTime": "8 นาที",
    "xpReward": 30,
    "summary": "ช่วงบ่ายของวัน Black Friday เกิดเหตุไฟดับและเครือข่ายล่มครั้งใหญ่ที่ Data Center โซน ap-southeast-2a ในซิดนีย์ เซิร์ฟเวอร์หายไปครึ่งคลัสเตอร์ สัญญาณพี่กานต์และเลียมจากเมลเบิร์นขาดหาย อาร์เทอร์สวมบทแม่ทัพใหญ่ คุมสติสั่งการราจและภพ กู้คลัสเตอร์ด้วย Terraform Multi-AZ, CKA force drain, และ topologySpreadConstraints จนเว็บไม่ล่มเลยแม้แต่วินาทีเดียว!",
    "tags": ["Zero Downtime", "Kubernetes", "Multi-AZ", "High Availability", "CKA", "Workplace English", "Story"],
    "keyVocab": [
        {
            "word": "Availability Zone (AZ)",
            "ipa": "/əˌveɪ.ləˈbɪl.ə.t̬i zoʊn/",
            "th": "โซนความพร้อมใช้งาน (ศูนย์ข้อมูล Data Center ที่แยกระบบไฟฟ้าและเครือข่ายอิสระในภูมิภาคเดียวกัน)",
            "example": "Deploying applications across multiple Availability Zones protects against single data center failures."
        },
        {
            "word": "Failover",
            "ipa": "/ˈfeɪl.oʊ.vɚ/",
            "th": "การสลับการทำงานอัตโนมัติไปยังระบบสำรองเมื่อระบบหลักหยุดทำงาน",
            "example": "The automated failover diverted all checkout traffic to surviving zones without dropping a single order."
        },
        {
            "word": "Cordon & Drain",
            "ipa": "/ˈkɔːr.dən ænd dreɪn/",
            "th": "คำสั่งกักกันและอพยพพอดออกจากเครื่องโหนดที่เสียหายใน Kubernetes",
            "example": "Arthur ordered an immediate cordon and drain on all unreachable nodes."
        },
        {
            "word": "topologySpreadConstraints",
            "ipa": "/təˈpɑː.lə.dʒi spred kənˈstreɪnts/",
            "th": "กฎควบคุมการกระจายตัวของพอดใน Kubernetes ให้สมดุลข้ามโซนศูนย์ข้อมูล (AZ)",
            "example": "Setting topologySpreadConstraints ensured pods were distributed evenly 50/50 across remaining zones."
        },
        {
            "word": "Outage",
            "ipa": "/ˈaʊ.t̬ɪdʒ/",
            "th": "เหตุการณ์ไฟฟ้า โครงข่าย หรือระบบเซิร์ฟเวอร์หยุดทำงานขัดข้อง",
            "example": "A catastrophic power outage in Sydney knocked out an entire AWS data center."
        }
    ],
    "paragraphs": [
        {
            "id": 1,
            "en": "Friday afternoon, 1:45 PM Bangkok time (5:45 PM in Sydney—the climactic final peak of the workday as Australians rushed to shop before heading home).\n\nArthur had barely managed half of the lunchbox Jane packed for him, his eyes locked unwaveringly on his twin monitors.\n\nThen, an event with a 0.01% multi-year probability in cloud infrastructure unfolded right before their eyes!",
            "th": "เวลา 13:45 น. (ห้าโมงสี่สิบห้านาทีที่ซิดนีย์ — ช่วงเวลาโค้งสุดท้ายของแคมเปญที่คนแห่ซื้อของก่อนกลับบ้านสูงสุด)\n\nหลังจากผ่านศึกเมื่อเช้ามาได้ อาร์เทอร์เพิ่งจะมีเวลากินข้าวกล่องที่แพรห่อมาให้ได้แค่ครึ่งกล่อง สายตาของเขายังคงจับจ้องอยู่ที่หน้าจอมอนิเตอร์ทั้งสองจออย่างไม่วางตา\n\nทันใดนั้นเอง... เหตุการณ์ที่มีโอกาสเกิดขึ้นเพียงแค่ 0.01% ในรอบหลายปีของระบบคลาวด์ระดับโลก ก็เกิดขึ้นต่อหน้าต่อตาทุกคน!"
        },
        {
            "id": 2,
            "en": "On the right monitor displaying the 20 EKS worker nodes in Sydney, ten nodes located in Availability Zone `ap-southeast-2a` suddenly snapped from green `Ready`... to blinding red `NotReady` all at once!\n\nIt looked as if a giant hand had yanked the master power breaker on half of Sydney's data centers!\n\n\"HOLY CRAP!! Half of our entire cluster just vanished, Arthur!!\" Phop shrieked, nearly tumbling out of his chair.",
            "th": "หน้าจอมอนิเตอร์ฝั่งขวาที่แสดงแผนผังเครื่องเซิร์ฟเวอร์ทั้ง 20 เครื่องของคลัสเตอร์ซิดนีย์ จู่ๆ เครื่องเซิร์ฟเวอร์จำนวน 10 เครื่อง ที่ตั้งอยู่ในศูนย์ข้อมูลย่อยโซนเอ (Availability Zone: ap-southeast-2a) ก็เปลี่ยนสถานะจากสีเขียว Ready... กลายเป็นสีแดงเถือก NotReady พร้อมกันในวินาทีเดียว!\n\nเหมือนมีใครบางคนเดินไปสับสวิตช์ไฟดับตึก Data Center ของ AWS ไปครึ่งซีกเมืองซิดนีย์!\n\n\"เฮ้ยยยยย!! เซิร์ฟเวอร์หายไปครึ่งคลัสเตอร์เลยครับพี่อาร์เทอร์!!\" ภพร้องเสียงหลงจนเกือบตกเก้าอี้"
        },
        {
            "id": 3,
            "en": "\"Guys! AWS Health Dashboard just posted a critical alert: Major power and network outage in Sydney AZ-2a!\" Raj shouted with trembling urgency. \"Half of our EC2 worker instances are completely unreachable!\"\n\nIn cloud textbooks, high availability means spreading workloads across three isolated zones (2a, 2b, 2c) so that if one fails, the others carry the load automatically.\n\nYet textbook theory meets brutal reality in a live crisis!",
            "th": "\"Guys! AWS Health Dashboard just reported a major power and network outage in Sydney AZ-2a!\" ราจตะโกนรายงานด้วยเสียงสั่นเครือ \"Half of our EC2 worker nodes are completely unreachable!\"(ทุกคน! หน้าเว็บแจ้งสถานะของ AWS เพิ่งประกาศว่าเกิดเหตุไฟดับและเครือข่ายล่มครั้งใหญ่ในตึกโซน 2a ของซิดนีย์! เซิร์ฟเวอร์ของเราครึ่งหนึ่งติดต่อไม่ได้โดยสมบูรณ์แล้ว!)\n\nในตำราสอบ AWS ที่อาร์เทอร์เรียนมา ระบบคลาวด์ถูกออกแบบให้กระจายเซิร์ฟเวอร์ไว้ในตึกที่อยู่ห่างกัน 3 โซน (2a, 2b, 2c) เพื่อที่ว่าถ้าตึกไหนไฟไหม้หรือไฟดับ อีกสองตึกที่เหลือจะรับงานแทนได้อัตโนมัติ (Multi-AZ High Availability)\n\nแต่ทฤษฎีในหนังสือ กับความโหดร้ายในโลกความจริงนั้นต่างกัน!"
        },
        {
            "id": 4,
            "en": "When zone 2a blacked out, over 150 pods died on the spot. Kubernetes attempted to reschedule them onto surviving nodes in zones 2b and 2c...\n\nHowever, Arthur spotted two compounding catastrophes on his Argo CD screen:\n\n**Crisis 1 (Eviction Delay Bottleneck):** By default, when a node becomes uncontactable, Kubernetes assumes it might recover and waits five full minutes (`pod-eviction-timeout`) before evicting pods. During Black Friday, letting 50% of customer requests hit dead nodes for five minutes meant total commercial bankruptcy!\n\n**Crisis 2 (Pod Clustering Collapse):** The mission-critical `payment-service` had 12 pods, but 10 of them had randomly clustered inside zone 2a! Only 2 surviving pods remained in zone 2b, currently choking under national traffic and hurtling toward an inevitable OOMKilled crash!",
            "th": "เมื่อตึกโซน 2a ดับวูบลงกะทันหัน... พอดกว่า 150 ตัวที่เคยรันอยู่ในตึกนั้นขาดใจตายทันที! ระบบของ Kubernetes พยายามสั่งย้ายพอดทั้งหมดหนีตายไปเกิดใหม่ในตึกโซน 2b และ 2c ที่ยังรอดชีวิตอยู่...\n\nแต่ทว่า! อาร์เทอร์สังเกตเห็นความผิดปกติที่กำลังจะทำให้ระบบล่มสลายซ้ำสองจากหน้าจอ Argo CD!\n\nวิกฤตที่ 1 (คอขวดการย้ายบ้าน): โดยค่าเริ่มต้นของ Kubernetes เมื่อตึกไฟดับแบบไม่บอกกล่าว สมองกลของมันจะยังมีความหวังว่าตึกนั้นอาจจะแค่เน็ตหลุดเดี๋ยวก็กลับมา มันจึงตั้งเวลารอคอย (Pod Eviction Timeout) นานถึง 5 นาทีเต็ม ก่อนจะยอมสั่งย้ายพอดไปตึกอื่น... แต่ในศึก Black Friday การปล่อยให้ทราฟฟิกครึ่งหนึ่งวิ่งไปชนตึกที่ตายแล้วนานถึง 5 นาที แปลว่าเว็บล่มสนิท!\n\nวิกฤตที่ 2 (พอดกระจุกตัวทับกันตาย): เซอร์วิสสำคัญอย่างระบบจ่ายเงิน (payment-service) มีพอดอยู่ 12 ตัว แต่บังเอิญว่าก่อนหน้านี้ 10 ตัวดันไปกระจุกตัวอยู่ในตึก 2a ที่เพิ่งดับไป เหลือรอดอยู่ในตึก 2b แค่ 2 ตัว! ตอนนี้พอด 2 ตัวที่เหลือกำลังโดนทราฟฟิกคนทั้งประเทศรุมทึ้งจนกำลังจะ OOMKilled ตายตามไปในไม่กี่วินาทีข้างหน้า!"
        },
        {
            "id": 5,
            "en": "In Melbourne, chaotic alarms blared through the Zoom call. Liam and Karn were frantically scrambling with AWS enterprise support.\n\n\"Arthur! Can you hear me?!\" Karn shouted through static. \"Melbourne office network just lost its uplink through Sydney 2a! We've lost SSH and console access from here! Arthur, you must command the cluster recovery from Bangkok immediately!\"\n\nThe video feed froze... and snapped to a black disconnect screen!\n\nNo mentors. No foreign leads. Only Arthur, Phop, and Raj standing alone against a data center blackout!",
            "th": "ในห้องประชุมออนไลน์ที่เมลเบิร์น เสียงแจ้งเตือนดังระงมจนฟังไม่ได้ศัพท์ พี่กานต์และเลียมกำลังพยายามติดต่อซัพพอร์ตของ AWS อย่างโกลาหล\n\n\"Arthur! Can you hear me?!\" เสียงพี่กานต์ตะโกนฝ่าความวุ่นวายเข้ามาในไมโครโฟน \"เน็ตที่ออฟฟิศเมลเบิร์นก็กำลังรวนเพราะใช้เส้นทางเดียวกับโซน 2a พี่เข้าหน้าจอดำไปคุมคลัสเตอร์จากที่นี่ไม่ได้! อาร์เทอร์ต้องเป็นคนสั่งการกู้คลัสเตอร์จากกรุงเทพฯ เดี๋ยวนี้เลย!\"\n\nสัญญาณภาพของเลียมและพี่กานต์กระตุกค้างแล้วตัดหายไปทันที!\n\nตอนนี้... ไม่มีพี่เลี้ยง ไม่มีหัวหน้าต่างชาติ เหลือเพียงอาร์เทอร์ ภพ และราจ ที่ต้องรับมือกับภัยพิบัติระดับศูนย์ข้อมูลล่มด้วยตัวเอง!"
        },
        {
            "id": 6,
            "en": "\"Arthur... what do we do?! Karn got disconnected, and half our servers are dead!\" Phop gasped, gazing at his acting lead with raw desperation.\n\nArthur drew the deepest breath of his life.\n\nIn this crucible of chaos, three months of relentless discipline crystallized in his mind: Multi-AZ architecture from AWS SAA, emergency node triage from CKA, Helm chart templating, and Argo CD GitOps synchronization!\n\nHis demeanor turned calm as still water, sharp as a diamond. He unmuted his mic and spoke with the unshakeable authority of a battlefield general.",
            "th": "\"พี่อาร์เทอร์... เราจะทำยังไงกันดีครับ พี่กานต์หลุดไปแล้ว เซิร์ฟเวอร์ก็หายไปครึ่งหนึ่ง!\" ภพหน้าซีดเผือด มองมาที่รักษาการหัวหน้าทีมด้วยความหวังทั้งหมดที่มี\n\nอาร์เทอร์สูดลมหายใจเข้าปอดลึกที่สุดเท่าที่เคยทำมา\n\nในวินาทีที่ทุกคนกำลังตื่นตระหนก ภาพความทรงจำตลอดสามเดือนที่ผ่านมาไหลผ่านเข้ามาในหัวของชายวัยสามสิบอย่างเป็นลำดับขั้น... ทั้งความรู้เรื่องโครงสร้าง Multi-AZ จากสนามสอบ AWS, คำสั่งจัดการโหนดที่ตายจากสนามสอบ CKA, และการทำงานของแม่พิมพ์ Helm กับ Argo CD!\n\nดวงตาของอาร์เทอร์นิ่งสงบและคมกริบ เขากดเปิดไมค์และเริ่มสั่งการลูกทีมทั้งสองคนด้วยน้ำเสียงที่เด็ดขาดและมั่นใจราวกับแม่ทัพใหญ่!"
        },
        {
            "id": 7,
            "en": "\"Listen to me, Phop, Raj! Zone 2a is down, but zones 2b and 2c are fully functional! If we execute these three steps with precision, the platform will survive!\"\n\nArthur issued English commands to Raj without missing a beat:\n\n\"Raj! Step 1: Open Terraform and AWS Auto Scaling Groups right now! Disable subnet `ap-southeast-2a` so AWS stops trying to provision replacements in the dead zone! Force it to launch 15 replacement nodes exclusively in zones 2b and 2c!\"\n\n\"Got it! Restricting Auto Scaling to 2b and 2c only... Executing now!\" Raj pounded his keyboard without a shred of hesitation.",
            "th": "\"ฟังพี่นะภพ พี่ราจ! ตึกโซน 2a ดับไปแล้ว แต่เรายังมีตึกโซน 2b กับ 2c เหลืออยู่! ถ้าเราทำตามขั้นตอนนี้อย่างแม่นยำ ระบบจะไม่ล่ม!\"\n\nอาร์เทอร์หันไปสั่งราจเป็นภาษาอังกฤษทันที:\"Raj! Step 1: Go to Terraform and AWS Auto Scaling Group right now! Disable subnet ap-southeast-2a so AWS stops trying to create new servers in the dead zone! Force it to launch 15 replacement nodes only in zone 2b and 2c!\"(พี่ราจ! ขั้นแรก เข้าไปที่ Terraform และระบบขยายเครื่องของ AWS เดี๋ยวนี้! สั่งปิดการใช้งานโซน 2a ที่ตายแล้วซะ เพื่อไม่ให้ระบบพยายามสร้างเครื่องใหม่ในตึกที่ไฟดับ! บังคับให้มันสร้างเครื่องทดแทน 15 เครื่องในตึก 2b และ 2c เท่านั้นครับ!)\n\n\"Got it! Modifying Auto Scaling zones to 2b and 2c only... Executing now!\" ราจรับคำสั่งและรัวคีย์บอร์ดทันทีโดยไม่มีข้อกังขา!"
        },
        {
            "id": 8,
            "en": "\"Phop! Step 2!\" Arthur turned to his Thai junior. \"We cannot wait for Kubernetes' default five-minute eviction timer! Remember our CKA drills: Run `kubectl cordon` and an emergency `drain` on all 10 `NotReady` nodes right now with `--force --grace-period=0`! Force every orphaned pod to reschedule onto surviving hosts in ten seconds!\"\n\n\"On it, Arthur!\" Reassured by crystal-clear direction, Phop's panic vanished. His fingers executed the eviction commands with blistering precision, exactly as they had rehearsed during lunch boot camps.",
            "th": "\"ส่วนภพ! ขั้นที่สอง!\" อาร์เทอร์หันกลับมาสั่งรุ่นน้องคนไทย \"เราจะรอให้ Kubernetes มันนั่งนับถอยหลัง 5 นาทีเพื่อย้ายพอดไม่ได้! ใช้คำสั่งวิชา CKA ที่เราซ้อมกันตอนพักเที่ยง... สั่ง cordon และ force drain (บังคับอพยพแบบฉุกเฉิน) โหนดทั้ง 10 เครื่องที่ขึ้นสถานะ NotReady ทิ้งเดี๋ยวนี้! บังคับให้พอดทั้งหมดไปเกิดใหม่ในตึกที่เหลือภายใน 10 วินาที!\"\n\n\"รับทราบครับพี่อาร์เทอร์!\" ภพที่ได้ฟังคำสั่งชัดเจนก็หายลนลานเป็นปลิดทิ้ง นิ้วของเขารัวคำสั่งอพยพพอดแบบบังคับ (--force --grace-period=0) ตามที่เคยเป็นคู่ซ้อมให้อาร์เทอร์อย่างรวดเร็ว!"
        },
        {
            "id": 9,
            "en": "And for Step 3—the masterstroke—Arthur took the wheel himself.\n\n\"And to guarantee newly scheduled pods don't clump onto a single zone again... I am injecting `topologySpreadConstraints` into our master Helm chart!\"\n\nThis was an advanced CKA superpower Arthur had reviewed just the previous weekend.\n\nArthur's fingers danced across his mechanical keyboard. In the shared Helm template, he enforced strict multi-zone spreading:\n\n```yaml\ntopologySpreadConstraints:\n  - maxSkew: 1\n    topologyKey: \"topology.kubernetes.io/zone\"\n    whenUnsatisfiable: DoNotSchedule\n    labelSelector:\n      matchLabels:\n        app: payment-service\n```\n\nArthur pushed to Git, triggering Argo CD to sync across all 40 services in EKS instantly!",
            "th": "และสำหรับขั้นตอนที่สาม... ขั้นตอนที่สำคัญที่สุด อาร์เทอร์เป็นคนลงมือทำด้วยตัวเอง!\n\n\"และเพื่อไม่ให้พอดที่เกิดใหม่ไปกระจุกตัวอยู่ในตึกเดียวเหมือนเมื่อกี้อีก... พี่จะใส่คำสั่ง topologySpreadConstraints (กฎการกระจายตัวพอดข้ามตึกอย่างเท่าเทียม) ลงไปในไฟล์แม่พิมพ์ Helm Chart ของเรา!\"\n\nนี่คือวิชาขั้นสูงจากสนามสอบ CKA ที่อาร์เทอร์เพิ่งอ่านทบทวนมาเมื่อสุดสัปดาห์!\n\nนิ้วทั้งสิบของอาร์เทอร์พรมลงบนคีย์บอร์ดด้วยความเร็วสูงสุด เขาเปิดไฟล์แม่พิมพ์กลางของทั้ง 40 เซอร์วิส พิมพ์โค้ดบังคับว่านับจากวินาทีนี้เป็นต้นไป พอดทุกตัวจะต้องถูกจัดวางสลับฟันปลาแยกกันอยู่คนละตึก (topologyKey: topology.kubernetes.io/zone) อย่างเท่าเทียมกันเสมอ!\n\nอาร์เทอร์กดส่งโค้ดขึ้น GitHub Actions และสั่งให้เจ้าปลาหมึกสีส้ม Argo CD ซิงค์คำสั่งกระจายกำลังพลลงสู่ AWS EKS ทันที!"
        },
        {
            "id": 10,
            "en": "On the central wall monitor, a miraculous recovery played out in real time:\n\nThe 10 dead nodes in 2a were pruned immediately from the cluster.\n\n15 pristine EC2 instances spun up in unaffected zones 2b and 2c courtesy of Raj's Auto Scaling tweak.\n\nAnd as the new hosts joined, Argo CD deployed over 200 fresh pods, distributing them in an impeccable 50/50 balance between 2b and 2c!\n\nSeconds ticked by... one minute... two minutes...\n\nThe error rate line, which had begun to flicker, plummeted flat to **0.00%**! Australian shoppers checking out that second never noticed that half a city's cloud infrastructure had collapsed, because Blue Team's mid-air failover completed in under 120 seconds!",
            "th": "บนหน้าจอมอนิเตอร์ขนาดใหญ่ ภาพการกู้วิกฤตที่งดงามราวกับปาฏิหาริย์กำลังเกิดขึ้น:\n\nโหนดที่ตายแล้วทั้ง 10 เครื่องในตึก 2a ถูกภพตัดหางปล่อยวัดออกจากสารบบทันทีโดยไม่ต้องรอ 5 นาที!\n\nเครื่องเซิร์ฟเวอร์ใหม่เอี่ยม 15 เครื่องถูกราจสั่งเปิดขึ้นมาในตึก 2b และ 2c ที่ไฟไม่ดับ!\n\nและทันทีที่ตึกใหม่พร้อม... เจ้าปลาหมึก Argo CD ที่รับคำสั่งจากแม่พิมพ์ Helm ของอาร์เทอร์ ก็ทำการเสกพอดชุดใหม่กว่า 200 ตัว กระจายเข้าประจำการในตึก 2b และ 2c อย่างสมดุลเป๊ะๆ 50 ต่อ 50!\n\nเข็มวินาทีเดินผ่านไป... หนึ่งนาที... สองนาที...\n\nกราฟความผิดพลาด (Error Rate) ที่ทำท่าจะพุ่งขึ้นตอนตึกไฟดับ ถูกกดหัวลงจนราบคาบกลับมาอยู่ที่ 0.00%! ลูกค้าชาวออสเตรเลียที่กำลังกดจ่ายเงินในวินาทีนั้น แทบไม่รู้ตัวเลยด้วยซ้ำว่าศูนย์ข้อมูลระดับประเทศเพิ่งเกิดเหตุไฟดับไปครึ่งซีก เพราะระบบของทีม Blue ได้ทำการสลับรางรถไฟกลางอากาศ (Failover) เสร็จสิ้นภายในเวลาไม่ถึงสองนาที!"
        },
        {
            "id": 11,
            "en": "\"W-we did it, Arthur!!\" Phop sank back into his chair, panting heavily with an enormous grin. \"Half of Sydney blacked out, and our app didn't drop for a single second!!\"\n\n\"Look at Australian tech news right now!\" Raj beamed, pointing to breaking headlines. \"Several major Sydney retailers just went totally dark due to the AZ-2a failure... while ANZ SuperApp is running at 100% velocity! Customers are swarming over to our platform in droves!\"\n\nArthur looked at the sales counter breaking all company records. Looking down at the photo of August and Jane taped beneath his screen, his hands were still warm from typing.\n\nWithout mentors to hold his hand... he had proven to everyone—and to himself—that he had truly crossed from a follower to a trusted leader!",
            "th": "\"สะ... สำเร็จแล้วครับพี่อาร์เทอร์!!\" ภพทิ้งตัวลงพิงพนักเก้าอี้ หอบหายใจแฮ่กๆ แต่ใบหน้าเปื้อนไปด้วยรอยยิ้มกว้าง \"ตึกไฟดับไปครึ่งเมืองซิดนีย์ แต่เว็บเราไม่ล่มเลยแม้แต่วินาทีเดียว!!\"\n\n\"Look at the tech news in Australia right now!\" ราจชี้ไปที่หน้าเว็บข่าวไอทีของออสเตรเลียที่เพิ่งรายงานข่าวด่วน \"Several major shopping websites in Sydney just crashed completely because of the AZ-2a outage... but our ANZ SuperApp is still running at 100% speed! Customers are flooding to our app instead!\"(ดูข่าวไอทีของออสเตรเลียตอนนี้สิ! เว็บช้อปปิ้งรายใหญ่หลายเจ้าในซิดนีย์เพิ่งล่มสนิทไปเพราะเหตุไฟดับที่โซน 2a... แต่แอปของเรายังรันด้วยความเร็วเต็ม 100%! ตอนนี้ลูกค้าจากเว็บอื่นเลยแห่กันมาซื้อของในแอปของเรากันใหญ่เลย!)\n\nอาร์เทอร์มองดูกราฟยอดขายบนหน้าจอที่พุ่งทะลุเป้าหมายประจำปีของบริษัทขึ้นไปอีกเท่าตัว มือของชายวัยสามสิบที่วางอยู่บนเมาส์ยังคงอุ่นวาบจากการพิมพ์คำสั่งเมื่อครู่ เขามองดูเพื่อนร่วมทีมทั้งสองคน มองดูเอเลน่าและซันที่เดินมาปรบมือให้จากโต๊ะข้างๆ แล้วมองลงไปที่รูปถ่ายของน้องออกัสและแพรที่แปะอยู่ใต้จอมอนิเตอร์ ในวันที่ไม่มีพี่เลี้ยงคอยจับมือสอน... เขาได้พิสูจน์ให้ตัวเองและทุกคนเห็นแล้วว่า บัดนี้ เขาได้ก้าวข้ามจากการเป็นผู้ตาม มาเป็น \"ผู้นำที่พึ่งพาได้\" อย่างแท้จริงแล้ว!"
        }
    ],
    "quiz": [
        {
            "id": "zd18-q1",
            "question": "What disaster occurred in Sydney that knocked out 10 out of 20 worker nodes simultaneously?",
            "options": [
                "A major power and network outage in AWS Availability Zone ap-southeast-2a.",
                "Someone spilled coffee on the local server rack.",
                "A lightning strike hit the Bangkok office.",
                "An expired domain name registration."
            ],
            "answer": 0,
            "explanation": "Correct! A catastrophic power and network outage in AWS Sydney AZ `ap-southeast-2a` knocked out half of the cluster's EC2 worker instances."
        },
        {
            "id": "zd18-q2",
            "question": "Why did Arthur instruct Phop to execute an emergency force drain rather than waiting for Kubernetes default behavior?",
            "options": [
                "Because Kubernetes defaults to waiting 5 minutes before evicting pods from unreachable nodes, which would have meant 5 minutes of downtime.",
                "Because draining nodes gives developers double XP.",
                "Because the Linux kernel required an operating system reboot.",
                "To save battery power on Arthur's laptop."
            ],
            "answer": 0,
            "explanation": "Correct! Waiting 5 minutes for default pod eviction would have caused prolonged checkout failures during peak Black Friday sales."
        },
        {
            "id": "zd18-q3",
            "question": "Which Kubernetes configuration in Helm charts guaranteed that new pods were distributed evenly 50/50 across remaining zones?",
            "options": [
                "`topologySpreadConstraints` using `topology.kubernetes.io/zone` as the topologyKey.",
                "`horizontalPodAutoscaler` with minReplicas 50.",
                "`serviceAccountName: admin-user`.",
                "`restartPolicy: Never`."
            ],
            "answer": 0,
            "explanation": "Correct! `topologySpreadConstraints` enforces even distribution of pods across specified topology zones, preventing critical services from clustering into a single vulnerable datacenter."
        }
    ]
}
