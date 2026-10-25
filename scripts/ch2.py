# scripts/ch2.py
# Chapter 2: The Orange Octopus and the Skipping Heartbeat

chapter2 = {
    "id": "zd-ch-02",
    "chapterNumber": 2,
    "collection": "zero-downtime",
    "title": "Chapter 2: The Orange Octopus and the Skipping Heartbeat",
    "titleTh": "บทที่ 2: เจ้าปลาหมึกสีส้มกับหัวใจที่เต้นผิดจังหวะ",
    "coverEmoji": "🐙",
    "level": "B1",
    "levelBadge": "Workplace IT Novel",
    "wordCount": 920,
    "estimatedTime": "6 นาที",
    "xpReward": 30,
    "summary": "อาร์เทอร์ทดลองกด Build ใน Jenkins และกด Sync ใน Argo CD เป็นครั้งแรก แต่กลับเจอหัวใจแตกสลายสีแดงและ CrashLoopBackOff! เขาต้องเรียนรู้วิธีดู Log และรวบรวมความกล้าพิมพ์แชท Slack ภาษาอังกฤษหาโคลอี้ที่ซิดนีย์",
    "tags": ["Zero Downtime", "Argo CD", "Kubernetes", "Workplace English"],
    "keyVocab": [
        {
            "word": "CrashLoopBackOff",
            "ipa": "/kræʃ luːp bæk ɒf/",
            "th": "สถานะพอดที่เปิดทำงานแล้วดับทันที และพยายามเปิดใหม่ซ้ำๆ วนลูป",
            "example": "The pod is in CrashLoopBackOff because an essential config is missing."
        },
        {
            "word": "Environment variable",
            "ipa": "/ɪnˈvaɪ.rən.mənt ˈver.i.ə.bəl/",
            "th": "ตัวแปรสภาพแวดล้อมที่โปรแกรมต้องใช้ในการทำงาน",
            "example": "Application cannot start without the required environment variable."
        },
        {
            "word": "Good catch",
            "ipa": "/ɡʊd kætʃ/",
            "th": "ตรวจจับจุดผิดพลาดได้ดีมาก / สังเกตเห็นจุดสำคัญได้ยอดเยี่ยม",
            "example": "Good catch, Arthur! Thanks for pointing out the missing config."
        },
        {
            "word": "Thanks heaps",
            "ipa": "/θæŋks hiːps/",
            "th": "ขอบคุณมากๆ (สแลงออสเตรเลียยอดนิยม)",
            "example": "Thanks heaps for your help with the deployment today!"
        },
        {
            "word": "My bad",
            "ipa": "/maɪ bæd/",
            "th": "ความผิดฉันเอง / โทษทีนะ",
            "example": "Oh mate! My bad! I forgot to commit that file."
        }
    ],
    "paragraphs": [
        {
            "id": 1,
            "en": "For two full hours, Arthur sat completely glued to his computer screen and a thick notebook.\n\nThe translation website was running non-stop. By now, his notebook was filled with rough, hand-drawn arrows connecting boxes and diagrams, summarizing the technical puzzle Karn had laid out for him that morning.",
            "th": "สองชั่วโมงเต็มๆ ที่อาร์เทอร์นั่งจมอยู่กับหน้าจอคอมพิวเตอร์และสมุดโน้ตเล่มหนา\n\nหน้าเว็บแปลภาษาถูกเปิดใช้งานอย่างหนักหน่วง จนตอนนี้ในสมุดของเขาเต็มไปด้วยภาพวาดลูกศรโยงใยไปมาด้วยลายมือหวัดๆ เพื่อสรุปสิ่งที่พี่กานต์ทิ้งโจทย์ไว้ให้เมื่อเช้า"
        },
        {
            "id": 2,
            "en": "Compared to Arthur's old workflow—where finishing code meant simply dragging files and overwriting them directly on the server—this new setup was far more complex. Yet, it was remarkably structured and organized.\n\n\"Alright... I can see the big picture now,\" Arthur murmured to himself.",
            "th": "ถ้าเทียบกับการทำงานสมัยก่อนของอาร์เทอร์ที่พอเขียนโค้ดเสร็จก็แค่ลากไฟล์ไปวางทับในเซิร์ฟเวอร์ตรงๆ ระบบของที่นี่ซับซ้อนกว่ามาก แต่มันก็เป็นระเบียบอย่างน่าทึ่ง\n\n\"โอเค... พอเห็นภาพแล้ว\" อาร์เทอร์พึมพำกับตัวเอง"
        },
        {
            "id": 3,
            "en": "He began following the steps in the engineering manual. First, he navigated to the web interface of Jenkins. It looked ancient, like a webpage from the 1990s, but it served as the build factory. Arthur clicked the \"Build Now\" button for the Payment Service, which Chloe had just finished updating.\n\nThe progress bar slowly advanced from blue until it reached the end, flashing the word: SUCCESS.\n\nArthur quietly clenched his fist in triumph. Chloe's code was now securely packaged into a box called a Docker Image and shipped off to a cloud storage repository on AWS.",
            "th": "เขาเริ่มลงมือทำตามขั้นตอนในคู่มือ ขั้นแรกคือเข้าไปที่หน้าเว็บของ Jenkins ที่หน้าตาดูโบราณเหมือนเว็บยุคเก้าศูนย์ แต่ทำหน้าที่เป็นโรงงานผลิต อาร์เทอร์คลิกปุ่ม Build Now ของระบบจ่ายเงิน (Payment Service) ที่โคลอี้เพิ่งแก้โค้ดเสร็จ\n\nแถบสถานะค่อยๆ วิ่งจากสีฟ้าไปจนสุด พร้อมขึ้นข้อความว่า SUCCESS\n\nอาร์เทอร์แอบกำหมัดแน่นด้วยความดีใจไปเปราะหนึ่ง ตอนนี้โค้ดของโคลอี้ถูกแพ็กใส่กล่องที่เรียกว่า Docker Image และส่งไปเก็บไว้ในโกดังบนคลาวด์ของ AWS เรียบร้อยแล้ว"
        },
        {
            "id": 4,
            "en": "The next step was the star of the show: Argo CD.\n\nArthur switched his browser tab to the website displaying the round, orange octopus logo. On screen was a clean tree diagram of rectangular nodes connected like tree roots. Every single box was a vibrant green, marked with a little green heart that read Healthy.\n\n\"P'Karn said that once I click Sync, this little octopus will automatically pull the new container box and place it into AWS EKS in Sydney...\"\n\nArthur drew a deep breath. He moved his cursor to the blue SYNC button in the top left corner and clicked.",
            "th": "ขั้นตอนต่อไปคือพระเอกของงาน... Argo CD\n\nอาร์เทอร์สลับหน้าจอไปที่เว็บซึ่งมีโลโก้เจ้าปลาหมึกสีส้มตัวกลม บนหน้าจอแสดงแผนผังกล่องสี่เหลี่ยมเล็กๆ โยงใยกันเหมือนรากไม้ ทุกกล่องมีสีเขียวสดใสและมีรูปหัวใจสีเขียวกำกับไว้ว่า Healthy\n\n\"พี่กานต์บอกว่า แค่กดปุ่ม Sync เจ้าปลาหมึกตัวนี้ก็จะดึงกล่องโค้ดใบใหม่ไปวางลงใน AWS EKS ที่ซิดนีย์ให้เอง...\"\n\nอาร์เทอร์สูดหายใจเข้าลึกๆ เลื่อนเมาส์ไปกดปุ่ม SYNC สีฟ้าที่มุมบนซ้าย"
        },
        {
            "id": 5,
            "en": "The status wheel started spinning. The green turned to yellow, showing Progressing. Arthur stared unblinkingly at the screen, more anxious than checking a winning lottery ticket. One minute passed... two minutes... The system should have turned back to green by now.\n\nSuddenly, the small green heart next to the payment-service box shattered into a vivid red, broken heart icon, accompanied by bold text that read: Degraded!\n\nArthur's heart plummeted straight into his stomach. Cold beads of sweat broke out across his forehead immediately.\n\nBroken... Did it really break the second I pressed it?!",
            "th": "วงล้อสถานะเริ่มหมุนติ้วๆ จากสีเขียวเปลี่ยนเป็นสีเหลือง (Progressing) อาร์เทอร์นั่งจ้องหน้าจอตาไม่กะพริบ ลุ้นยิ่งกว่าตอนตรวจผลสลากกินแบ่งรัฐบาล ผ่านไปหนึ่งนาที... สองนาที... ระบบควรจะเปลี่ยนกลับเป็นสีเขียวได้แล้ว\n\nแต่ทันใดนั้น รูปหัวใจสีเขียวดวงน้อยข้างๆ กล่อง payment-service ก็เปลี่ยนเป็น \"รูปหัวใจแตกสลายสีแดงเถือก\" พร้อมข้อความตัวหนาที่เขียนว่า Degraded!\n\nหัวใจของอาร์เทอร์หล่นวูบไปอยู่ที่ตาตุ่ม เหงื่อเม็ดเป้งผุดขึ้นที่หน้าผากทันที\n\nพัง... กดปุ๊บพังปั๊บเลยเหรอวะเนี่ย!"
        },
        {
            "id": 6,
            "en": "\"Whoa, Arthur! Why is your octopus's heart broken into pieces like that?\"\n\nThe voice of Phop, the junior colleague at the next desk, piped up as he leaned over, sipping boba milk tea. Arthur turned pale and looked over in a panic.\n\n\"Phop! I didn't touch anything else! I followed the manual step by step, and then it suddenly turned red! Is the entire Sydney system going down?!\"\n\n\"Chill out, brother! This is just Staging—real customers can't see it yet,\" Phop chuckled lightly and rolled his wheeled office chair closer. \"Why don't you click into the red Pod box and see what the status says?\"",
            "th": "\"อ้าวเฮ้ย พี่อาร์เทอร์ ทำไมหัวใจน้องปลาหมึกของพี่มันหักแบบนั้นล่ะครับนั่น\"\n\nเสียงของ ‘ภพ’ รุ่นน้องโต๊ะข้างๆ ดังขึ้นขณะชะโงกหน้ามาดูพร้อมกับดูดชานมไข่มุกในมือ อาร์เทอร์หน้าเสีย รีบหันไปหาด้วยความตื่นตระหนก\n\n\"ภพ! พี่ไม่ได้ไปแก้อะไรเลยนะ พี่แค่กด Sync ตามคู่มือเป๊ะๆ เลย แล้วอยู่ดีๆ มันก็แดงแบบนี้ ระบบที่ซิดนีย์จะล่มไหมเนี่ย!\"\n\n\"ใจเย็นพี่ๆ อันนี้มันแค่ระบบทดสอบ (Staging) ลูกค้าจริงยังไม่เห็นหรอกครับ\" ภพหัวเราะเบาๆ แล้วเลื่อนเก้าอี้ล้อเลื่อนไถลเข้ามาใกล้ \"ไหนพี่ลองคลิกเข้าไปดูที่ตัวกล่องพอด (Pod) ที่มันแดงสิครับ ดูว่าสถานะมันฟ้องว่าอะไร\""
        },
        {
            "id": 7,
            "en": "Arthur hurriedly clicked on it as Phop suggested. The screen presented an intimidating English status for beginners: CrashLoopBackOff.\n\n\"Ah, the signature move of the Kubernetes family!\" Phop put down his boba cup. \"This symptom means AWS EKS tried to launch Chloe's container box, but the moment it opened, it died immediately. Then it kept trying to restart, dying and rebooting in an endless loop.\"\n\n\"Wait, then why did it shut down? Did I click something wrong in Jenkins?\"\n\n\"Not your fault at all, brother! That's DevOps life. When a deployment fails, people always blame us first. But in reality, you have to look inside.\" Phop pointed to the Logs tab on the Argo CD dashboard. \"Click on the Logs right here. It's the final dying message recorded before the application took its last breath.\"",
            "th": "อาร์เทอร์รีบคลิกเข้าไปตามที่ภพบอก หน้าจอแสดงข้อความภาษาอังกฤษคำหนึ่งที่ดูน่าขนลุกสำหรับมือใหม่: CrashLoopBackOff\n\n\"โอ้โห ท่าไม้ตายประจำตระกูล Kubernetes เลยครับพี่\" ภพวางแก้วชานมลง \"อาการนี้แปลว่า AWS EKS มันพยายามเปิดกล่องโค้ดของโคลอี้ขึ้นมาทำงานแล้ว แต่มันเปิดปุ๊บก็ดับปั๊บ แล้วก็พยายามเปิดใหม่ วนลูปตายเกิดแบบนี้ไปเรื่อยๆ ครับ\"\n\n\"อ้าว แล้วทำไมมันถึงดับล่ะภพ พี่กด Jenkins ผิดขั้นตอนเหรอ?\"\n\n\"ไม่ใช่ความผิดพี่หรอกครับ งาน DevOps ก็งี้แหละพี่ เวลาระบบรันไม่ขึ้น คนมักจะคิดว่าพวกเราทำพังไว้ก่อน แต่จริงๆ ต้องไปดูไส้ใน\" ภพชี้ไปที่แถบเมนูคำว่า Logs บนหน้าจอ Argo CD \"พี่ลองกดดู Log ตรงนี้เลยครับ มันคือบันทึกข้อความสุดท้ายก่อนที่โปรแกรมมันจะขาดใจตาย\""
        },
        {
            "id": 8,
            "en": "Arthur clicked on the Logs tab immediately. A dark terminal window displayed dozens of scrolling lines of English logs. If this were morning, he would have felt dizzy and closed it. But relying on his instincts as a former programmer, his eyes swiftly scanned for the words Error or Exception.\n\nAnd right at the very bottom line, he found it:\n\nError: Missing required environment variable 'SYDNEY_TAX_RATE_V2'. Application cannot start.\n\nArthur knitted his brows. Even though his English wasn't strong, he could easily translate basic vocabulary like this.\n\n\"It says... it cannot find an environment variable named SYDNEY_TAX_RATE_V2, so the application cannot start,\" Arthur turned to tell Phop.",
            "th": "อาร์เทอร์คลิกไปที่แถบ Logs ทันที หน้าจอดำมืดปรากฏตัวหนังสือภาษาอังกฤษวิ่งยาวเหยียดขึ้นมาหลายสิบบรรทัด ถ้าเป็นเมื่อเช้าเขาคงตาลายและกดปิดหนีไปแล้ว แต่ด้วยสัญชาตญาณของคนที่เคยเป็นโปรแกรมเมอร์มาก่อน สายตาของเขาจึงกวาดหาคำว่า Error หรือ Exception อย่างรวดเร็ว\n\nและเขาก็เจอมันอยู่ที่บรรทัดล่างสุด!\n\nError: Missing required environment variable 'SYDNEY_TAX_RATE_V2'. Application cannot start.\n\nอาร์เทอร์ขมวดคิ้ว แม้ภาษาอังกฤษของเขาจะไม่แข็งแรง แต่คำศัพท์พื้นฐานแค่นี้เขาแปลออก\n\n\"มันบอกว่า... หาตัวแปรที่ชื่อว่า SYDNEY_TAX_RATE_V2 ไม่เจอ โปรแกรมเลยเริ่มทำงานไม่ได้\" อาร์เทอร์หันไปบอกภพ"
        },
        {
            "id": 9,
            "en": "\"Spot on, brother! Bingo!\" Phop snapped his fingers. \"Chloe added a new variable in her code, but forgot to declare it in our deployment configuration file! When deployed onto the server, it couldn't find it... Looks like you need to ping Chloe on Slack and let her know!\"\n\nThe phrase \"ping Chloe on Slack\" instantly wiped away the joy of discovering the root cause.\n\nTyping English to communicate with a native speaker... and telling her that her work had a bug!\n\n\"Phop... could you type the message to Chloe for me? I'm afraid my grammar will be wrong and she won't understand,\" Arthur pleaded softly, self-doubt creeping over him once more.",
            "th": "\"โป๊ะเชะเลยพี่!\" ภพดีดนิ้วดังเปาะ \"โคลอี้แอบเพิ่มตัวแปรใหม่ในโค้ดตัวเอง แต่ลืมมาเพิ่มชื่อตัวแปรนี้ในไฟล์ตั้งค่า Deployment ของฝั่งเรา พอเอาขึ้นระบบจริงมันก็เลยหาไม่เจอไงครับ... แบบนี้พี่อาร์เทอร์ต้องทัก Slack ไปบอกโคลอี้แล้วล่ะ\"\n\nคำว่า \"ทักไปบอกโคลอี้\" ทำเอาความดีใจที่หาสาเหตุเจอเมื่อครู่หายวับไปทันที\n\nต้องพิมพ์ภาษาอังกฤษคุยกับฝรั่ง... แถมเป็นการทักไปบอกว่างานของอีกฝ่ายมีปัญหาด้วย!\n\n\"ภพ... ภพช่วยพิมพ์บอกโคลอี้ให้พี่หน่อยได้ไหม พี่กลัวพิมพ์ผิดไวยากรณ์ เดี๋ยวเขาอ่านไม่รู้เรื่อง\" อาร์เทอร์พูดเสียงอ่อย ความไม่มั่นใจในตัวเองกลับมาเกาะกุมจิตใจอีกครั้ง"
        },
        {
            "id": 10,
            "en": "Right at that moment, Karn, who had just returned from the restroom, placed a hand on the back of Arthur's chair.\n\n\"If Phop types for you today, who will type for you tomorrow, Arthur?\" Karn spoke in a gentle but firm tone. \"Trust me, international tech workers don't judge your grammar. All they care about is clear communication with solid evidence. Just attach that log line. Give it a try yourself first, and I'll review it before you hit send.\"\n\nArthur pressed his lips tightly together. He looked at Karn, then looked down at his son's photograph taped below his monitor.\n\nKarn was right... If he hid behind a junior colleague four years younger over a simple message, how could he ever grow in this company?",
            "th": "จังหวะนั้นเอง ‘พี่กานต์’ ที่เพิ่งเดินกลับมาจากห้องน้ำก็วางมือลงบนพนักเก้าอี้ของอาร์เทอร์พอดี\n\n\"ให้ภพพิมพ์ให้วันนี้ แล้ววันพรุ่งนี้จะให้ใครพิมพ์ให้อีกล่ะอาร์เทอร์?\" พี่กานต์พูดด้วยน้ำเสียงเรียบๆ แต่แฝงความหวังดี \"เชื่อพี่ คนทำงานสายเทคนิคต่างชาติ เขาไม่มานั่งจับผิดแกรมม่าเราหรอก ขอแค่สื่อสารให้ตรงประเด็น มีหลักฐานคือ Log บรรทัดนั้นแปะไปให้เขาดู ลองพิมพ์เองดูก่อน เดี๋ยวพี่ช่วยตรวจให้ก่อนกดส่ง\"\n\nอาร์เทอร์เม้มปากแน่น มองหน้าพี่กานต์สลับกับรูปถ่ายของลูกชายใต้จอมอนิเตอร์\n\nจริงของพี่กานต์... ถ้าเรื่องแค่นี้เขายังต้องหลบหลังรุ่นน้องที่อายุน้อยกว่าตั้งสี่ปี แล้วเขาจะเติบโตในบริษัทนี้ได้ยังไง"
        },
        {
            "id": 11,
            "en": "Arthur turned back to his screen. He opened Slack, searched for Chloe (ANZ-Dev), and began drafting a message with the help of a translation tool before rewording it himself. He edited and deleted for nearly five minutes until he arrived at two concise sentences:\n\n\"Hi Chloe, I deployed payment-service on Staging, but the pod is CrashLoopBackOff. I checked the logs and found this error: Missing required environment variable 'SYDNEY_TAX_RATE_V2'. Could you please check?\"\n\n\"Is this... good enough, P'Karn?\" Arthur asked hesitantly.\n\nKarn read it over and gave his shoulder an encouraging slap. \"Clear, direct, and straight to the point! Any engineer will understand it instantly. Send it away!\"",
            "th": "อาร์เทอร์หันกลับไปที่หน้าจอ เปิดโปรแกรมแชท Slack ขึ้นมา ค้นหาชื่อ Chloe (ANZ-Dev) แล้วเริ่มพิมพ์ข้อความภาษาอังกฤษลงในโปรแกรมแปลภาษาก่อนจะนำมาเรียบเรียงใหม่ด้วยตัวเอง เขาแก้แล้วลบอยู่เกือบห้านาที จนได้ข้อความสั้นๆ สองประโยค:\n\nHi Chloe, I deployed payment-service on Staging, but the pod is CrashLoopBackOff.\nI checked the logs and found this error: Missing required environment variable 'SYDNEY_TAX_RATE_V2'. Could you please check?\n\n\"ประมาณนี้... พอไหวไหมครับพี่กานต์?\" อาร์เทอร์ถามอย่างไม่มั่นใจ\n\nพี่กานต์ก้มลงอ่าน แล้วตบไหล่เขาดังปุๆ \"ชัดเจน ตรงประเด็น ฝรั่งอ่านปุ๊บเข้าใจปั๊บ กดส่งเลย!\""
        },
        {
            "id": 12,
            "en": "Arthur held his breath and pressed Enter. His heart pounded anxiously, waiting for a response from Sydney, where it was already past 2 PM.\n\nIn less than sixty seconds, the green dot next to Chloe's name flickered, and a notification popped up:\n\nChloe: Oh mate! My bad! 😱 I totally forgot to update the deployment YAML file with the new variable. Give me 2 mins, I'll push the fix right now. Good catch, Arthur! Thanks heaps! 👍\n\nArthur stared at the words \"Good catch, Arthur! Thanks heaps!\" on the screen. Even though \"Thanks heaps\" was Australian slang that he had to quickly Google to discover it meant \"Thank you so much,\" a wave of warm pride surged through his chest.",
            "th": "อาร์เทอร์กลั้นใจกดปุ่ม Enter ส่งข้อความนั้นออกไป หัวใจเต้นตุ้มๆ ต่อมๆ รอดูปฏิกิริยาจากปลายทางที่ซิดนีย์ซึ่งตอนนี้เป็นเวลาบ่ายสองโมงกว่าแล้ว\n\nไม่ถึงหนึ่งนาที จุดสีเขียวข้างชื่อของโคลอี้ก็กะพริบ พร้อมข้อความตอบกลับเด้งขึ้นมา:\n\nChloe: Oh mate! My bad! 😱 I totally forgot to update the deployment YAML file with the new variable. Give me 2 mins, I'll push the fix right now. Good catch, Arthur! Thanks heaps!\n\nพร้อมกับอิโมจิรูปยกนิ้วโป้ง 👍 ต่อท้ายข้อความของอาร์เทอร์\n\nอาร์เทอร์จ้องมองคำว่า \"Good catch, Arthur! Thanks heaps!\" บนหน้าจอ แม้คำว่า Thanks heaps จะเป็นคำแสลงออสซี่ที่เขาต้องแอบเอาไปค้นกูเกิลดูว่าแปลว่า ขอบคุณมากๆ แต่ความรู้สึกตื้นตันบางอย่างก็เอ่อล้นขึ้นมาในอก"
        },
        {
            "id": 13,
            "en": "He had done it... He identified the root cause behind a broken deployment entirely on his own, and communicated smoothly with an overseas colleague without anyone making fun of his English!\n\nFive minutes later, Chloe pushed the updated configuration. Arthur clicked Sync in Argo CD once again. This time, every box gradually transitioned into a radiant green, crowned with a healthy little heart beating steadily at normal rhythm.",
            "th": "เขาทำได้... เขาหาสาเหตุที่ระบบพังเจอด้วยตัวเอง และสื่อสารกับเพื่อนร่วมงานต่างชาติรู้เรื่องโดยที่ไม่มีใครหัวเราะเยาะภาษาอังกฤษของเขาเลยสักนิด!\n\nห้านาทีต่อมา โคลอี้ก็ส่งไฟล์แก้ไขเข้ามา อาร์เทอร์กด Sync ใน Argo CD อีกครั้ง และคราวนี้... กล่องสี่เหลี่ยมทุกกล่องค่อยๆ เปลี่ยนเป็นสีเขียวสดใส พร้อมรูปหัวใจดวงน้อยที่กลับมาเต้นเป็นจังหวะปกติ (Healthy)"
        },
        {
            "id": 14,
            "en": "05:30 PM.\n\n\"P'Karn, Phop, I'm heading home for the day! Have a good evening!\"\n\nArthur slung his backpack over his shoulders and walked out of the office right on time on his very first day. Technical terms like Pod, Deployment, and CrashLoopBackOff were still swirling in his head, but they no longer brought the terror they had that morning.\n\nWhile waiting for the skytrain, Arthur pulled out his smartphone, launched an English listening app he had downloaded during lunch, and plugged in his earphones.\n\nTaking his first steps at age thirty might be a little slow and clumsy... but as long as he never stopped walking, tomorrow he would surely be better than today!",
            "th": "17:30 น.\n\n\"พี่กานต์ ภพ ผมกลับก่อนนะครับ สวัสดีครับ\"\n\nอาร์เทอร์สะพายกระเป๋าเป้เดินออกจากออฟฟิศตรงเวลาเป๊ะเป็นวันแรก ในหัวของเขายังคงมีคำศัพท์ใหม่อย่าง Pod, Deployment, และ CrashLoopBackOff วิ่งวนอยู่เต็มไปหมด แต่มันไม่ได้สร้างความหวาดกลัวให้เขาเหมือนเมื่อเช้าอีกแล้ว\n\nระหว่างยืนรอรถไฟฟ้า อาร์เทอร์หยิบสมาร์ทโฟนขึ้นมา เปิดแอปพลิเคชันฝึกฟังภาษาอังกฤษที่เขาเพิ่งดาวน์โหลดมาเมื่อตอนพักเที่ยง แล้วเสียบหูฟังใส่หู\n\nก้าวแรกในวัยสามสิบมันอาจจะช้าและทุลักทุเลไปหน่อย... แต่ตราบใดที่เขายังไม่หยุดเดิน วันพรุ่งนี้เขาจะต้องเก่งขึ้นกว่าวันนี้แน่นอน!"
        }
    ],
    "quiz": [
        {
            "question": "What caused the payment-service pod to enter CrashLoopBackOff?",
            "options": [
                "(Recommended) A required environment variable was missing in the deployment config",
                "Arthur clicked the wrong button in Jenkins",
                "The AWS EKS server in Sydney lost power",
                "Phop spilled milk tea on the production server"
            ],
            "answer": 0,
            "explanation": "Log ฟ้องว่า 'Missing required environment variable SYDNEY_TAX_RATE_V2' เนื่องจากโคลอี้เพิ่มตัวแปรในโค้ดแต่ลืมเพิ่มในไฟล์ Deployment"
        },
        {
            "question": "What advice did Karn give Arthur regarding communicating in English with overseas colleagues?",
            "options": [
                "(Recommended) Foreign technical peers care about direct communication and log evidence, not perfect grammar",
                "He must take an IELTS exam before sending any Slack messages",
                "He should always ask junior colleagues to write messages for him",
                "He should only speak Thai in the company"
            ],
            "answer": 0,
            "explanation": "พี่กานต์บอกว่าคนทำงานสายเทคนิคต่างชาติไม่มาจับผิดแกรมม่า ขอแค่สื่อสารตรงประเด็นและมีหลักฐานคือ Log แนบไป"
        },
        {
            "question": "What does the Australian slang \"Thanks heaps!\" mean?",
            "options": [
                "(Recommended) Thank you very much",
                "Thank you for nothing",
                "Please do it again",
                "No problem at all"
            ],
            "answer": 0,
            "explanation": "'Thanks heaps' เป็นสแลงยอดฮิตของออสเตรเลีย แปลว่า ขอบคุณมากๆ (Thank you very much / thanks a lot)"
        }
    ]
}
