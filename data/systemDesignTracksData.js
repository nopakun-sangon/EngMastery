/**
 * EngMastery: System Design & Technical Presentation Tracks Database (systemDesignTracksData)
 * Specialized English curriculum across 3 Architectural Presentation Domains:
 * 1. Architectural Trade-offs & Decision Frameworks
 * 2. Writing & Defending Technical RFCs
 * 3. High-Impact 5-Minute Technical Demos
 */

const systemDesignTracksData = [
  {
    "id": "sysdesign-tradeoffs",
    "title": "Architectural Trade-offs & Decision Frameworks",
    "titleTh": "การอธิบายข้อดี-ข้อเสีย (Trade-offs) และการตัดสินใจเชิงสถาปัตยกรรมระบบ",
    "icon": "⚖️",
    "badge": "Architecture Trade-offs",
    "badgeColor": "indigo",
    "description": "ศิลปะการอภิปรายเชิงสถาปัตยกรรม: การเปรียบเทียบ Monolith vs Microservices, การเลือก Database (SQL vs NoSQL), และการอธิบายทฤษฎี CAP Theorem ให้ทั้งวิศวกรและผู้บริหารเข้าใจตรงกัน",
    "units": [
      {
        "id": "sd-trade-01",
        "title": "Unit 1: Monolith vs Microservices Trade-offs (โมโนลิธ vs ไมโครเซอร์วิส)",
        "summary": "ประโยคเปรียบเทียบข้อดีข้อเสียระหว่างความเรียบง่ายของ Monolithic Architecture กับความยืดหยุ่นของ Microservices โดยอิงตามกฎของ Conway's Law",
        "formula": "While [Architecture A] offers [Advantage], it introduces [Overhead/Risk]; given our [Scale/Team Size], [Architecture B] is the pragmatic choice because [Reason].",
        "explanation": "### 1. ไม่มีสถาปัตยกรรมที่สมบูรณ์แบบ มีเพียงข้อแลกเปลี่ยน (Trade-offs)\nในการประชุมระดับ Senior / Lead ไม่มีคำว่า *\"เทคโนโลยีนี้ดีที่สุดในโลก\"* ทุกการตัดสินใจมีต้นทุน (Cost) เสมอ คำว่า **\"Trade-off\"** จึงเป็นคำที่ถูกพูดถึงบ่อยที่สุดในห้องประชุมออกแบบระบบ\n\n### 📊 ตารางเปรียบเทียบ Monolith vs Microservices\n| มิติการเปรียบเทียบ | Monolithic Architecture | Microservices Architecture |\n|---|---|---|\n| **Operational Overhead** | 🟢 ต่ำ (Deploy ก้อนเดียว, รันง่าย) | 🔴 สูง (ต้องมี K8s, Service Mesh, Tracing) |\n| **Data Consistency** | 🟢 สูง (ทำ ACID Transactions ใน DB เดียว) | 🔴 ซับซ้อน (ต้องใช้ Eventual Consistency / Sagas) |\n| **Team Autonomy** | 🔴 ต่ำ (คนเยอะแย่งกันแก้ Repo เดียว) | 🟢 สูง (แต่ละทีมดูแล Service ตัวเองได้อิสระ) |\n| **Network Latency** | 🟢 เร็วมาก (In-memory function calls) | 🔴 มีความหน่วง (Inter-service RPC/REST/gRPC calls) |\n\n### 🛠️ โครงสร้างประโยคมาตรฐานสำหรับการอภิปราย\n1. **การยอมรับข้อดีควบคู่ไปกับข้อจำกัด:**\n   - *\"While microservices provide independent deployment velocity, they introduce significant network serialization overhead and observability complexity.\"*\n2. **การอ้างอิงขนาดทีมและบริบทองค์กร:**\n   - *\"Given that our engineering team consists of only five developers, a well-modularized monolith allows us to iterate much faster than managing 15 microservices.\"*\n3. **การสรุปข้อตัดสินใจแบบ Pragmatic (เน้นใช้งานจริง):**\n   - *\"We recommend starting with a modular monolith and carving out decoupled services only when specific domain bottlenecks emerge.\"*",
        "examples": [
          {
            "en": "We must weigh the benefits of independent deployability against the operational tax of distributed tracing.",
            "th": "เราต้องชั่งน้ำหนักระหว่างข้อดีของการติดตั้งระบบที่แยกเป็นอิสระต่อกัน กับต้นทุนภาระงาน (Operational tax) ในการทำ Distributed Tracing",
            "audio": "We must weigh the benefits of independent deployability against the operational tax of distributed tracing."
          },
          {
            "en": "Splitting this service prematurely will create a distributed monolith with all the downsides and none of the benefits.",
            "th": "การรีบแยกเซอร์วิสนี้เร็วเกินไปจะกลายเป็นการสร้าง Distributed Monolith ที่ได้แต่ข้อเสียทั้งหมดโดยไม่ได้ข้อดีอะไรเลย",
            "audio": "Splitting this service prematurely will create a distributed monolith with all the downsides and none of the benefits."
          },
          {
            "en": "According to Conway's Law, our software architecture will naturally mirror our team communication structure.",
            "th": "ตามกฎของคอนเวย์ (Conway's Law) สถาปัตยกรรมซอฟต์แวร์ของเราจะสะท้อนโครงสร้างการสื่อสารภายในทีมงานอย่างเป็นธรรมชาติ",
            "audio": "According to Conway's Law, our software architecture will naturally mirror our team communication structure."
          }
        ],
        "quickCheck": [
          {
            "question": "คำว่า 'Trade-off' ในการออกแบบสถาปัตยกรรมซอฟต์แวร์หมายถึงอะไร?",
            "options": [
              "การซื้อขายหุ้นทางเทคโนโลยี",
              "ข้อแลกเปลี่ยนที่ต้องยอมเสียสิ่งหนึ่งเพื่อแลกกับข้อดีอีกสิ่งหนึ่ง เพราะไม่มีโซลูชันใดดีพร้อม 100%",
              "การเปลี่ยนงานบ่อยๆ",
              "การลดราคาซอฟต์แวร์"
            ],
            "correctIndex": 1,
            "explanation": "ถูกต้อง! ใน System Design ทุกการตัดสินใจคือ Trade-off เช่น ยอมแลกความเร็วเครือข่ายเพื่อแลกกับความยืดหยุ่นในการ Scale"
          },
          {
            "question": "คำว่า 'Distributed Monolith' (แอนตี้แพทเทิร์นยอดฮิต) หมายถึงสถานการณ์ใด?",
            "options": [
              "ระบบฐานข้อมูลที่เร็วที่สุดในโลก",
              "ระบบที่แยกออกเป็นหลายเซอร์วิส แต่โค้ดยังคงผูกติดกันแน่น (Tightly coupled) จนต้อง Deploy พร้อมกัน ทำให้ได้ข้อเสียของทั้งสองแบบ",
              "การเขียนโค้ดภาษาเดียวทั้งระบบ",
              "การไม่ใช้ระบบคลาวด์"
            ],
            "correctIndex": 1,
            "explanation": "ถูกต้อง! Distributed Monolith คือหายนะของการทำ Microservices แบบผิดวิธี ที่โค้ดแยกกันแต่พึ่งพากันแน่นจนล่มตามกันหมด"
          },
          {
            "question": "ประโยคใดอธิบายเหตุผลในการเลือก Monolith สำหรับทีมขนาดเล็กได้อย่างมีวิจารณญาณที่สุด?",
            "options": [
              "'Microservices are old-fashioned, nobody uses them.'",
              "'Given our team size of 4 engineers, a modular monolith minimizes operational overhead while allowing rapid feature iteration.'",
              "'Because my boss told me to do so.'",
              "'We don't know how to use Docker.'"
            ],
            "correctIndex": 1,
            "explanation": "ถูกต้อง! ประโยคนี้อิงจากขนาดทีม (4 engineers) และอธิบายเหตุผลทางวิศวกรรม (minimizes operational overhead) อย่างชัดเจน"
          }
        ]
      },
      {
        "id": "sd-trade-02",
        "title": "Unit 2: SQL vs NoSQL & Event-Driven Architecture (การเลือกฐานข้อมูลและโมเดลข้อมูล)",
        "summary": "ประโยคอธิบายการเลือกจัดเก็บข้อมูล: ACID Transactions vs Eventual Consistency, Relational Schema vs Document Store, และการใช้ Event Broker (Kafka/RabbitMQ)",
        "formula": "We opted for [SQL/NoSQL/Kafka] because our workload demands [ACID Guarantees / High-throughput Writes / Real-time Fan-out] over [Compromised Aspect].",
        "explanation": "### 1. ศาสตร์แห่งการเลือกฐานข้อมูลและโมเดลข้อมูล\nเวลาสัมภาษณ์ System Design หรือคุยกับ Lead คำถามยอดนิยมคือ *\"Why did you choose Postgres over MongoDB?\"* คุณต้องสามารถให้เหตุผลด้วยคำศัพท์ทางวิชาการที่ถูกต้อง\n\n### 📊 คำศัพท์ Database & Event-Driven\n| คำศัพท์ทางเทคนิค | คำอ่าน & หน้าที่ | ความหมายในการทำงาน |\n|---|---|---|\n| **ACID compliance** | /ˈæs.ɪd kəmˈplaɪ.əns/ (n.) | คุณสมบัติรับประกันความถูกต้องของธุรกรรม (Atomicity, Consistency, Isolation, Durability) |\n| **eventual consistency** | ɪˈven.tʃu.əl kənˈsɪs.tən.si/ (n.) | ข้อมูลในโหนดต่างๆ จะทยอยอัปเดตตรงกันในที่สุด แม้อาจจะไม่ตรงกันทันทีเสี้ยววินาทีแรก |\n| **fan-out pattern** | /ˈfæn.aʊt ˈpæt.ən/ (n.) | การส่ง 1 ข้อความจากผู้ผลิตกระจายต่อไปยังผู้รับหลายๆ เซอร์วิสพร้อมกัน |\n| **sharding / partitioning** | /ˈʃɑː.dɪŋ/ (n.) | การซอยแบ่งข้อมูลในตารางขนาดใหญ่ออกเป็นหลายเซิร์ฟเวอร์เพื่อกระจายโหลด |\n| **write-heavy vs read-heavy** | /raɪt ˈhev.i vɜː.səs riːd ˈhev.i/ | ระบบที่มีการบันทึกข้อมูลมากกว่าการอ่าน หรือมีการอ่านมากกว่าการเขียน |\n\n### 🛠️ โครงสร้างประโยคมาตรฐาน\n1. **การให้เหตุผลเลือก RDBMS สำหรับงานการเงิน:**\n   - *\"Because this service handles financial ledgers, strict ACID compliance and relational integrity are non-negotiable.\"*\n2. **การให้เหตุผลเลือก NoSQL สำหรับงานสตรีมมิ่ง/IoT:**\n   - *\"Our telemetry ingestion pipeline is write-heavy; Cassandra's masterless architecture provides virtually linear horizontal write scalability.\"*\n3. **การอธิบายการนำ Event Broker เข้ามาใช้:**\n   - *\"By publishing domain events to Kafka, we decouple order processing from notification dispatching.\"*",
        "examples": [
          {
            "en": "We chose PostgreSQL because our relational data model requires complex multi-table joins and foreign key constraints.",
            "th": "เราเลือก PostgreSQL เนื่องจากโมเดลข้อมูลแบบสัมพันธ์ของเราจำเป็นต้องมีการ Join หลายตารางและมีข้อกำหนด Foreign Key",
            "audio": "We chose PostgreSQL because our relational data model requires complex multi-table joins and foreign key constraints."
          },
          {
            "en": "To handle sudden traffic spikes during flash sales, we introduced an asynchronous message queue to buffer write operations.",
            "th": "เพื่อรับมือกับทราฟฟิกที่พุ่งกระฉูดระหว่างช่วง Flash Sale เราได้นำคิวข้อความแบบ Asynchronous เข้ามาช่วยบัฟเฟอร์คำสั่งเขียนข้อมูล",
            "audio": "To handle sudden traffic spikes during flash sales, we introduced an asynchronous message queue to buffer write operations."
          },
          {
            "en": "Under the CAP theorem, this distributed datastore sacrifices immediate consistency in favor of 100% partition tolerance and availability.",
            "th": "ภายใต้ทฤษฎี CAP ฐานข้อมูลแบบกระจายตัวนี้ยอมแลกความสอดคล้องทันที เพื่อให้ได้มาซึ่งความทนทานต่อเครือข่ายขาดและความพร้อมทำงาน 100%",
            "audio": "Under the CAP theorem, this distributed datastore sacrifices immediate consistency in favor of 100% partition tolerance and availability."
          }
        ],
        "quickCheck": [
          {
            "question": "คุณสมบัติ 'ACID' ของฐานข้อมูลมีความจำเป็นอย่างยิ่งยวดสำหรับระบบประเภทใด?",
            "options": [
              "ระบบเก็บบันทึกอุณหภูมิเซ็นเซอร์",
              "ระบบการเงิน การตัดยอดบัญชีธนาคาร และธุรกรรมที่ห้ามเงินหายเด็ดขาด",
              "ระบบนับยอดไลก์วิดีโอ",
              "ระบบแสดงภาพโฆษณา"
            ],
            "correctIndex": 1,
            "explanation": "ถูกต้อง! ACID รับประกันว่าธุรกรรมการเงินต้องสำเร็จครบวงจร หากเกิด Error กลางทาง ระบบจะ Rollback คืนยอดเงินเดิมทันที ห้ามสูญหาย"
          },
          {
            "question": "คำว่า 'Eventual Consistency' หมายความว่าอย่างไร?",
            "options": [
              "ข้อมูลจะไม่มีวันตรงกันเลย",
              "ข้อมูลอาจมีความเหลื่อมล้ำกันเล็กน้อยในช่วงเสี้ยววินาที แต่จะทยอยซิงก์จนถูกต้องตรงกันในที่สุด",
              "ฐานข้อมูลพังอย่างถาวร",
              "ต้องมีคนมากรอกข้อมูลด้วยมือ"
            ],
            "correctIndex": 1,
            "explanation": "ถูกต้อง! Eventual Consistency เป็นธรรมชาติของระบบกระจายตัว (เช่น ยอดวิว YouTube หรือเพื่อนกดไลก์) ที่ยอมให้ช้าไปเสี้ยววินาทีเพื่อแลกกับการรองรับทราฟฟิกมหาศาล"
          },
          {
            "question": "เมื่อระบบมีลักษณะเป็น 'Write-heavy' (มีการบันทึกข้อมูลมหาศาลตลอดเวลา) สถาปัตยกรรมใดเหมาะสมที่สุด?",
            "options": [
              "บันทึกตรงเข้าฮาร์ดดิสก์เครื่องเดียว",
              "ใช้ Message Broker (เช่น Kafka) มาช่วยคั่นบัฟเฟอร์คิว ก่อนจะทยอยบันทึกลงฐานข้อมูลแบบไม่บล็อกการทำงาน",
              "ปิดไม่ให้ผู้ใช้กรอกข้อมูล",
              "ส่งอีเมลหาแอดมินทุกครั้ง"
            ],
            "correctIndex": 1,
            "explanation": "ถูกต้อง! การใช้ Message Queue ช่วยดูดซับแรงกระแทกของคำขอเขียนข้อมูล (Buffer writes) ป้องกันไม่ให้ฐานข้อมูลหลักล่ม"
          }
        ]
      }
    ]
  },
  {
    "id": "sysdesign-rfc-defense",
    "title": "Writing & Defending Technical RFCs",
    "titleTh": "การเขียนและนำเสนอเอกสารออกแบบระบบ (RFC) พร้อมรับมือคำถามยากๆ จาก Lead",
    "icon": "📄",
    "badge": "RFC & Architecture Review",
    "badgeColor": "rose",
    "description": "คู่มือการผ่าน Architecture Review Board: โครงสร้างเอกสาร Request for Comments (RFC), การตอบข้อซักถามจาก Principal/Staff Engineer อย่างนิ่งสงบ, และการสร้างฉันทามติทางเทคนิคในองค์กร",
    "units": [
      {
        "id": "sd-rfc-01",
        "title": "Unit 1: Structuring a World-Class RFC (โครงสร้างเอกสาร RFC ที่เป็นเลิศ)",
        "summary": "ส่วนประกอบสำคัญของเอกสาร Request for Comments: Problem Statement, Proposed Architecture, Non-functional Requirements, Alternatives Considered, และ Failure Modes",
        "formula": "The primary objective of this RFC is to solve [Problem Statement] by implementing [Solution]; our fallback and rollback strategy is [Plan B].",
        "explanation": "### 1. RFC คืออะไรและทำไมบริษัทเทคชั้นนำถึงใช้?\n**RFC (Request for Comments)** หรือ **Design Doc** คือเอกสารที่วิศวกรเขียนขึ้นเพื่ออธิบายพิมพ์เขียวของระบบใหม่ก่อนที่จะเริ่มเขียนโค้ดจริง เพื่อให้ทีมและผู้เชี่ยวชาญช่วยกันตรวจหาจุดบกพร่องตั้งแต่เนิ่นๆ\n\n### 📊 โครงสร้าง 5 ส่วนของ RFC มาตรฐานสากล\n1. **Summary & Context (บทสรุปและบริบท):** ปัญหาคืออะไร และทำไมต้องแก้ตอนนี้\n   - *\"Currently, our image processing pipeline drops 3% of uploads during peak flash sales...\"*\n2. **Proposed Solution (ข้อเสนอทางเทคนิค):** ไดอะแกรมสถาปัตยกรรมและโฟลว์การทำงาน\n   - *\"We propose introducing AWS SQS with Lambda event-driven workers...\"*\n3. **Alternatives Considered (ทางเลือกอื่นที่พิจารณาแล้วแต่ปัดตก):** ทำไมถึงไม่เลือกวิธีอื่น (จุดนี้สร้างความประทับใจให้ Lead มากที่สุด)\n   - *\"We evaluated Google Cloud Run, but opted for Lambda due to existing VPC peering constraints.\"*\n4. **Failure Modes & Rollback Strategy (แผนรับมือเมื่อระบบล่ม):** หากพังจะถอยกลับอย่างไร\n5. **Security & Observability (ความปลอดภัยและการมอนิเตอร์):** เมตริกและ Alert ที่จะติดตั้ง",
        "examples": [
          {
            "en": "In section 3 of the RFC, we documented the alternative architectures we explored and the rationale for rejecting them.",
            "th": "ในหัวข้อที่ 3 ของเอกสาร RFC เราได้บันทึกทางเลือกสถาปัตยกรรมอื่นที่เราได้ศึกษาไว้ พร้อมเหตุผลว่าทำไมจึงตัดสินใจไม่เลือกใช้",
            "audio": "In section 3 of the RFC, we documented the alternative architectures we explored and the rationale for rejecting them."
          },
          {
            "en": "What is our zero-downtime rollback mechanism if the database schema migration encounters an unexpected lock?",
            "th": "กลไกการย้อนกลับแบบไม่หยุดทำงานของเราคืออะไร หากการรัน Migration ของฐานข้อมูลเกิดปัญหาการติดล็อคที่คาดไม่ถึง",
            "audio": "What is our zero-downtime rollback mechanism if the database schema migration encounters an unexpected lock?"
          },
          {
            "en": "Please leave your comments and inline suggestions on the Google Doc before the review sync on Thursday.",
            "th": "รบกวนช่วยฝากคอมเมนต์และข้อเสนอแนะไว้บน Google Doc ก่อนการประชุมพิจารณาในวันพฤหัสบดีนี้นะครับ",
            "audio": "Please leave your comments and inline suggestions on the Google Doc before the review sync on Thursday."
          }
        ],
        "quickCheck": [
          {
            "question": "ส่วน 'Alternatives Considered' ในเอกสาร RFC มีความสำคัญอย่างไร?",
            "options": [
              "ช่วยเพิ่มจำนวนหน้ากระดาษให้ดูยาวขึ้น",
              "แสดงให้ผู้ตรวจเอกสารเห็นว่าเราได้ศึกษาตัวเลือกอื่นมาอย่างรอบด้านแล้ว และมีเหตุผลทางวิศวกรรมที่ชัดเจนว่าทำไมถึงไม่เลือกตัวเลือกเหล่านั้น",
              "เป็นการแนะนำคู่แข่งของบริษัท",
              "ไม่ต้องเขียนก็ได้ ไม่สำคัญ"
            ],
            "correctIndex": 1,
            "explanation": "ถูกต้อง! การแสดง Alternatives Considered พิสูจน์ว่าคุณไม่ได้เลือกเทคโนโลยีตามกระแส แต่ผ่านการคิดเปรียบเทียบข้อดีข้อเสียมาแล้วอย่างถี่ถ้วน"
          },
          {
            "question": "เอกสาร RFC ควรเขียนขึ้นในช่วงเวลาใดของโปรเจกต์?",
            "options": [
              "หลังเขียนโค้ดและส่งขึ้น Production เสร็จแล้ว",
              "ก่อนเริ่มลงมือเขียนโค้ด เพื่อให้ทีมและผู้เชี่ยวชาญช่วยรีวิวสถาปัตยกรรมและตรวจหาจุดบกพร่องล่วงหน้า",
              "เมื่อระบบล่มเท่านั้น",
              "ช่วงวันสิ้นปีเพื่อเก็บสะสมผลงาน"
            ],
            "correctIndex": 1,
            "explanation": "ถูกต้อง! RFC คือการวางแผนล่วงหน้า การแก้บั๊กบนกระดาษก่อนเริ่มเขียนโค้ดช่วยประหยัดเวลาและงบประมาณขององค์กรได้นับร้อยชั่วโมง"
          },
          {
            "question": "คำว่า 'Rollback Strategy' ในเอกสารสถาปัตยกรรมระบบหมายถึงสิ่งใด?",
            "options": [
              "แผนการนำโค้ดและฐานข้อมูลย้อนกลับไปสู่สถานะเดิมที่ปลอดภัย หากการติดตั้งระบบเวอร์ชันใหม่เกิดความล้มเหลว",
              "การเลื่อนตำแหน่งงาน",
              "การรีสตาร์ทคอมพิวเตอร์ของผู้ใช้",
              "การขอลดราคาค่าบริการคลาวด์"
            ],
            "correctIndex": 0,
            "explanation": "ถูกต้อง! Rollback Strategy คือแผนสำรองฉุกเฉิน เพื่อให้แน่ใจว่าหากของใหม่พัง ระบบจะสามารถสลับกลับไปเวอร์ชันเดิมได้อย่างปลอดภัยทันที"
          }
        ]
      },
      {
        "id": "sd-rfc-02",
        "title": "Unit 2: Handling Critical Questions from Principal Engineers (การตอบคำถามยากๆ ในที่ประชุม)",
        "summary": "ศิลปะการตอบคำถามเมื่อสถาปัตยกรรมของคุณถูกตั้งคำถามหรือท้าทายจากวิศวกรอาวุโส: การยอมรับมุมมอง, การอธิบายกลไกรับมือ, และการรักษาสมาธิอย่างเป็นมืออาชีพ",
        "formula": "That is an insightful observation regarding [Edge Case]. We considered that risk, and our mitigation strategy is to [Fail-safe Mechanism].",
        "explanation": "### 1. วิธีรับมือกับคำถามยากๆ ในการพิจารณา RFC\nเมื่อ Principal หรือ Staff Engineer ยิงคำถามยากๆ ในที่ประชุม เช่น *\"What happens if Redis dies during network partition?\"* คนที่ไม่พร้อมจะตกใจ ตอบตะกุกตะกัก หรือพยายามแถ\n\nวิศวกรระดับโปรจะใช้เทคนิค **\"Validate + Clarify + Address\"**:\n1. **Validate (ชมและยอมรับมุมมอง):**\n   - *\"That's a very fair concern regarding split-brain...\"*\n   - *\"Great callout on the cache invalidation edge case.\"*\n2. **Address (อธิบายกลไกรับมือที่เตรียมไว้):**\n   - *\"In that specific scenario, the fallback circuit breaker opens, returning stale cached data while alerting the SRE on-call team.\"*\n3. **Acknowledge Gaps with Confidence (ยอมรับจุดที่ต้องศึกษาเพิ่มอย่างมั่นใจ):**\n   - *\"We haven't benchmarked that specific concurrency load yet. Let me run a load test tomorrow and follow up with the numbers in the RFC thread.\"*",
        "examples": [
          {
            "en": "That's a valid concern regarding downstream database backpressure; our proposal incorporates a dead-letter queue to prevent data loss.",
            "th": "นั่นเป็นข้อกังวลที่ตรงประเด็นมากในเรื่องแรงดันสะสม (Backpressure) ของฐานข้อมูล โซลูชันของเราได้รวม Dead-letter Queue ไว้เพื่อป้องกันข้อมูลสูญหายแล้วครับ",
            "audio": "That's a valid concern regarding downstream database backpressure; our proposal incorporates a dead-letter queue to prevent data loss."
          },
          {
            "en": "I don't have the exact benchmark figures for that throughput off the top of my head, but I will follow up by EOD today.",
            "th": "ผมอาจจะยังไม่มีตัวเลขผลทดสอบความเร็วที่แน่ชัดสำหรับทราฟฟิกขนาดนั้นในหัวตอนนี้ แต่เดี๋ยวผมจะตามไปอัปเดตตัวเลขให้ภายในสิ้นวันนี้นะครับ",
            "audio": "I don't have the exact benchmark figures for that throughput off the top of my head, but I will follow up by EOD today."
          },
          {
            "en": "Does this solution satisfy your constraints, or would you prefer us to explore an asynchronous polling alternative?",
            "th": "แนวทางนี้ตอบโจทย์ข้อจำกัดของพี่ไหมครับ หรือพี่อยากให้ทีมเราลองศึกษาทางเลือกแบบ Asynchronous Polling เพิ่มเติมดูครับ",
            "audio": "Does this solution satisfy your constraints, or would you prefer us to explore an asynchronous polling alternative?"
          }
        ],
        "quickCheck": [
          {
            "question": "เมื่อถูก Principal Engineer ถามคำถามเชิงเทคนิคที่เรายังไม่ได้ทดสอบตัวเลขมา ควรตอบอย่างไรอย่างมืออาชีพที่สุด?",
            "options": [
              "เดาสุ่มตัวเลขไปก่อนเพื่อให้ผ่านการประชุมไปได้",
              "ยอมรับตามตรงอย่างมั่นใจว่ายังไม่ได้ทดสอบจุดนี้ พร้อมสัญญาว่าจะรันเบนช์มาร์กและตามไปอัปเดตผลในเอกสารภายในเวลาที่แน่นอน",
              "โต้เถียงกลับว่าคำถามนี้ไม่สำคัญ",
              "เงียบและก้มหน้า"
            ],
            "correctIndex": 1,
            "explanation": "ถูกต้อง! การพูดว่า 'I don't have the exact numbers off the top of my head, but I will follow up by EOD' แสดงถึงความซื่อสัตย์ ความรับผิดชอบ และความน่าเชื่อถือทางวิชาชีพ"
          },
          {
            "question": "ประโยคใดเป็นการเปิดรับฟังข้อซักถามของผู้อาวุโสได้อย่างสุภาพและชาญฉลาด?",
            "options": [
              "'Why are you attacking my design?'",
              "'That's an insightful point regarding the database lock. Here is how our fallback mechanism handles it...'",
              "'You don't understand my architecture.'",
              "'Can you stop interrupting me?'"
            ],
            "correctIndex": 1,
            "explanation": "ถูกต้อง! การเริ่มต้นด้วย 'That's an insightful point...' ช่วยสร้างบรรยากาศการถกเถียงเชิงบวกและแสดงถึงวุฒิภาวะทางอารมณ์"
          },
          {
            "question": "คำว่า 'Dead-Letter Queue (DLQ)' ในระบบคิวข้อความทำหน้าที่อะไร?",
            "options": [
              "คิวที่ใช้ทิ้งข้อความทั้งหมด",
              "คิวปลายทางสำหรับเก็บข้อความที่ประมวลผลล้มเหลวซ้ำๆ เพื่อให้วิศวกรมาตรวจสอบหาสาเหตุภายหลังโดยไม่ทำให้คิวหลักติดขัด",
              "ระบบส่งอีเมลหาลูกค้า",
              "คิวที่ทำงานเร็วที่สุด"
            ],
            "correctIndex": 1,
            "explanation": "ถูกต้อง! DLQ ทำหน้าที่เป็นถังพักข้อความที่มีปัญหา เพื่อไม่ให้ข้อความที่เสีย (Poison pills) วิ่งวนในระบบจนเซอร์วิสค้าง"
          }
        ]
      }
    ]
  },
  {
    "id": "sysdesign-tech-demo",
    "title": "High-Impact 5-Minute Technical Demos",
    "titleTh": "การสาธิตระบบและฟีเจอร์ใหม่ในการประชุม All-Hands ให้กระชับ ทรงพลัง ใน 5 นาที",
    "icon": "🎤",
    "badge": "Tech Demos",
    "badgeColor": "amber",
    "description": "ศิลปะการพรีเซนต์ผลงานใน 5 นาที: โครงสร้างการเล่าเรื่องแบบ 3 องก์ (Problem -> Magic Demo -> Business Impact), คำพูดนำทางระหว่างแชร์หน้าจอ (Signposting), และการเอาตัวรอดอย่างนิ่งสงบเมื่อเดโมพังสดๆ บนเวที",
    "units": [
      {
        "id": "sd-demo-01",
        "title": "Unit 1: The 3-Act Demo Hook & Screen Signposting (โครงสร้าง 3 องก์และคำชี้ทาง)",
        "summary": "โครงสร้างการพรีเซนต์ที่มัดใจทั้งวิศวกรและผู้บริหาร: เปิดด้วยความเจ็บปวดของผู้ใช้, แสดงการทำงานสดๆ บนหน้าจอ, และตบท้ายด้วยตัวเลขผลกระทบทางธุรกิจ",
        "formula": "Act 1: The Pain Point -> Act 2: Live Screen Action ('Notice what happens when...') -> Act 3: Quantified Impact & Next Steps",
        "explanation": "### 1. ความล้มเหลวของการทำ Tech Demo ทั่วไป\nวิศวกรส่วนใหญ่มักเปิดหน้าจอขึ้นมาแล้วเริ่มบรรยายโค้ดบรรทัดที่ 1 ถึง 50 ทันที คนฟังที่เป็นผู้บริหารหรือคนนอกทีมจะหลุดสมาธิใน 30 วินาทีแรก!\n\nการทำเดโม 5 นาทีที่ยอดเยี่ยมต้องใช้ **โครงสร้าง 3 องก์ (The 3-Act Structure)**:\n- **Act 1: The Hook & The Problem (1 นาที):** เริ่มต้นที่ปัญหาของผู้ใช้จริง ไม่ใช่ตัวโค้ด\n  - *\"Last month, our customers waited an average of 45 seconds just to generate an invoice PDF...\"*\n- **Act 2: The Live Magic Demo (3 นาที):** แชร์หน้าจอและชี้ให้เห็นความแตกต่าง\n  - *\"Today, I'm thrilled to show you our new async pipeline. Notice what happens when I click 'Generate'...\"*\n- **Act 3: The Business Impact & Roadmap (1 นาที):** ตัวเลขผลลัพธ์และความคุ้มค่า\n  - *\"This dropped processing time to 800 milliseconds and unlocked $50k in infrastructure savings. Next sprint, we rollout to all users.\"*\n\n---\n\n### 🎙️ ประโยคชี้ทางระหว่างแชร์หน้าจอ (Screen Signposting)\n- *\"As you can see on the left-hand panel...\"* (อย่างที่ทุกท่านเห็นบนแถบด้านซ้าย...)\n- *\"Notice how the status transitions from Pending to Completed in real-time.\"* (สังเกตดูว่าสถานะเปลี่ยนแบบเรียลไทม์...)\n- *\"Behind the scenes, this triggers an asynchronous webhook to Stripe.\"* (เบื้องหลังการทำงาน สิ่งนี้จะยิง Webhook ไปยัง Stripe...)",
        "examples": [
          {
            "en": "Notice how the real-time dashboard updates instantly without requiring a full page refresh.",
            "th": "สังเกตดูนะครับว่าหน้าแดชบอร์ดอัปเดตข้อมูลแบบทันทีโดยที่ผู้ใช้ไม่ต้องกดรีเฟรชหน้าเว็บเลย",
            "audio": "Notice how the real-time dashboard updates instantly without requiring a full page refresh."
          },
          {
            "en": "Behind the scenes, this single user action triggers three event-driven microservices in parallel.",
            "th": "เบื้องหลังการทำงาน การกดปุ่มเพียงครั้งเดียวของผู้ใช้นี้จะไปกระตุ้นการทำงานของ 3 ไมโครเซอร์วิสแบบคู่ขนานกัน",
            "audio": "Behind the scenes, this single user action triggers three event-driven microservices in parallel."
          },
          {
            "en": "To wrap up: this optimization cut our median latency by 80% while keeping memory usage flat.",
            "th": "เพื่อสรุปในตอนท้ายนะครับ: การปรับแต่งครั้งนี้ช่วยตัดความหน่วงเฉลี่ยลงไปถึง 80% ในขณะที่การใช้แรมยังคงราบเรียบเท่าเดิม",
            "audio": "To wrap up: this optimization cut our median latency by 80% while keeping memory usage flat."
          }
        ],
        "quickCheck": [
          {
            "question": "การเปิดการนำเสนอ Tech Demo ในช่วง 1 นาทีแรกควรเริ่มต้นด้วยสิ่งใดจึงจะดึงดูดผู้ฟังได้ดีที่สุด?",
            "options": [
              "อ่านโค้ดทีละบรรทัดตั้งแต่ไฟล์แรก",
              "เล่าถึงปัญหาจริงของผู้ใช้หรือความเจ็บปวดทางธุรกิจที่ระบบเก่าสร้างไว้ (The Pain Point)",
              "บ่นเรื่องเซิร์ฟเวอร์ราคาแพง",
              "ขอโทษที่ไม่ได้เตรียมตัวมา"
            ],
            "correctIndex": 1,
            "explanation": "ถูกต้อง! การเปิดด้วย Pain point ของผู้ใช้หรือปัญหาทางธุรกิจจะทำให้คนฟังทุกคน (รวมถึงผู้บริหารและคนนอกทีม) เข้าใจทันทีว่าทำไมฟีเจอร์นี้จึงสำคัญ"
          },
          {
            "question": "วลี 'Behind the scenes' ในการนำเสนอเดโมมีประโยชน์อย่างไร?",
            "options": [
              "ใช้เล่าเรื่องผี",
              "ใช้อธิบายกลไกการทำงานทางเทคนิคเบื้องหลังหน้าจอที่ผู้ใช้งานมองไม่เห็นด้วยตาเปล่า",
              "ใช้สั่งให้ทุกคนปรบมือ",
              "ใช้จบการนำเสนอ"
            ],
            "correctIndex": 1,
            "explanation": "ถูกต้อง! 'Behind the scenes' ช่วยเชื่อมโยงระหว่างสิ่งที่เห็นบนหน้าจอ UI กับสถาปัตยกรรมระบบเบื้องหลังได้อย่างราบรื่น"
          },
          {
            "question": "เมื่อระบบเดโมเกิดขัดข้อง (Demo Glitch) หน้างานสดๆ ควรปฏิบัติตัวอย่างไร?",
            "options": [
              "โทษเพื่อนร่วมทีมคนอื่นทันที",
              "ควบคุมความนิ่ง ใช้มุกตลกเบาๆ แล้วสลับไปเปิดหน้าต่าง Staging สำรองหรือวิดีโอเดโมที่เตรียมไว้ล่วงหน้าทันที",
              "ร้องไห้แล้วปิดหน้าจอ Zoom หนี",
              "นั่งรีสตาร์ทเครื่องเงียบๆ ไป 10 นาที"
            ],
            "correctIndex": 1,
            "explanation": "ถูกต้อง! มืออาชีพจะมี Plan B เสมอ (เช่น เปิดวิดีโออัดไว้ล่วงหน้า) พร้อมพูดหยอกเบาๆ เช่น 'The demo gods are testing us today! Let me switch to our backup recording.'"
          }
        ]
      }
    ]
  }
];

if (typeof window !== "undefined") {
  window.systemDesignTracksData = systemDesignTracksData;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = systemDesignTracksData;
}
