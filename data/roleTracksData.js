/**
 * EngMastery: Tech Role-Based Tracks Database (roleTracksData)
 * Specialized English curriculum across 4 Engineering Roles:
 * 1. Backend, Cloud & DevOps
 * 2. Frontend, UI/UX & Mobile
 * 3. Data Engineering & AI/ML
 * 4. Product, QA & Agile
 */

const roleTracksData = [
  {
    "id": "role-backend-devops",
    "title": "Backend, Cloud & DevOps Engineering English",
    "titleTh": "ภาษาอังกฤษสำหรับวิศวกร Backend, Cloud Infrastructure และ DevOps",
    "icon": "⚡",
    "badge": "Cloud & Backend",
    "badgeColor": "indigo",
    "description": "เจาะลึกคำศัพท์ โครงสร้างประโยค และการสื่อสารเฉพาะทางสำหรับ Backend, Distributed Systems, Cloud และ DevOps: ตั้งแต่ Latency, Database Indexing, K8s Incident Triage จนถึง CI/CD Automation",
    "units": [
      {
        "id": "role-be-01",
        "title": "Unit 1: Explaining System Latency & Database Indexing (ความหน่วงและประสิทธิภาพฐานข้อมูล)",
        "summary": "โครงสร้างประโยคในการวิเคราะห์ P95/P99 Latency, การอ่าน Slow Query Logs, การอธิบายสาเหตุ Sequential Scan และการเสนอแนะ Composite Indexes หรือ Caching Layer",
        "formula": "[Metric/Observation] + spiked/degraded due to + [Root Cause] + therefore, we recommend + [Remediation/Optimization]",
        "explanation": "### 1. ความสำคัญของการสื่อสารเรื่อง System Performance\nเมื่อระบบเกิดความหน่วง (Latency) สิ่งที่ Tech Lead หรือ Engineering Manager ต้องการทราบทันทีคือ **\"สถิติเชิงตัวเลข (Quantified Metric) + สาเหตุที่แท้จริง (Root Cause) + แนวทางแก้ไข (Actionable Remediation)\"** การบอกเพียงว่า *\"ระบบช้าครับ\"* ถือว่าขาดความเป็นมืออาชีพ\n\n### 📊 คำศัพท์และสำนวนสำคัญ (Core Terminology)\n| คำศัพท์ทางเทคนิค | คำอ่าน & หน้าที่ | ความหมายในการทำงาน |\n|---|---|---|\n| **P99 latency** | /piː naɪn.ti.naɪn ˈleɪ.tən.si/ (n.) | เวลาตอบสนองของคำขอที่ช้าที่สุด 1% (จุดวัดคอขวดระบบ) |\n| **sequential scan** | /sɪˈkwen.ʃəl skæn/ (n.) | การสแกนอ่านข้อมูลทีละแถวตั้งแต่ต้นจนจบตาราง (ไม่มี Index) |\n| **composite index** | /ˈkɒm.pə.zɪt ˈɪn.deks/ (n.) | อินเด็กซ์ที่ครอบคลุมหลายคอลัมน์พร้อมกัน |\n| **connection pooling** | /kəˈnek.ʃən puː.lɪŋ/ (n.) | การเปิดการเชื่อมต่อฐานข้อมูลค้างไว้เพื่อนำกลับมาใช้ใหม่ |\n| **cache stampede** | /kæʃ stæmˈpiːd/ (n.) | วิกฤตการณ์ที่คำขอจำนวนมากวิ่งชนฐานข้อมูลพร้อมกันเมื่อแคชหมดอายุ |\n\n### 🛠️ โครงสร้างประโยคมาตรฐาน (Sentence Frameworks)\n1. **การรายงานตัวเลขความหน่วง:**\n   - *\"Our P99 response time spiked to 1.8 seconds under peak load.\"* (เวลาตอบสนอง P99 ของเราพุ่งขึ้นไปถึง 1.8 วินาทีในช่วงทราฟฟิกสูงสุด)\n2. **การชี้แจงสาเหตุจาก Slow Query:**\n   - *\"The explain analyze query revealed a sequential scan on the orders table due to a missing compound index.\"* (คำสั่ง Explain Analyze เผยให้เห็น Sequential Scan บนตาราง Orders เพราะขาด Index รวม)\n3. **การเสนอแผนแก้ไข:**\n   - *\"We should introduce a composite index on `(tenant_id, created_at)` and increase our connection pool size.\"* (เราควรสร้าง Composite Index บนคอลัมน์ tenant_id และ created_at พร้อมเพิ่มขนาด Connection Pool)\n\n> 💡 **Pro Tip:** เวลาคุยเรื่อง Database กับทีมต่างชาติ ให้แยกความแตกต่างระหว่าง **\"Throughput\"** (จำนวนงานที่ทำได้ต่อวินาที เช่น RPS) กับ **\"Latency\"** (เวลาที่งานชิ้นหนึ่งใช้ประมวลผล เช่น ms) ให้แม่นยำ",
        "examples": [
          {
            "en": "Our P99 latency degraded from 80ms to 2.4 seconds after the latest database migration.",
            "th": "ความหน่วง P99 ของเราแย่ลงจาก 80ms กลายเป็น 2.4 วินาทีหลังการรัน Database Migration รอบล่าสุด",
            "audio": "Our P99 latency degraded from 80ms to 2.4 seconds after the latest database migration."
          },
          {
            "en": "Adding a composite index dropped the CPU utilization on RDS from 95% down to 18%.",
            "th": "การเพิ่ม Composite Index ช่วยลดการใช้งาน CPU บนฐานข้อมูล RDS จาก 95% ลงมาเหลือเพียง 18%",
            "audio": "Adding a composite index dropped the CPU utilization on RDS from 95% down to 18%."
          },
          {
            "en": "We need to implement a Redis caching layer to avoid direct hits on the primary replica.",
            "th": "เราจำเป็นต้องติดตั้งชั้นแคชของ Redis เพื่อหลีกเลี่ยงการยิงคำขอลงฐานข้อมูลเครื่องหลักโดยตรง",
            "audio": "We need to implement a Redis caching layer to avoid direct hits on the primary replica."
          }
        ],
        "quickCheck": [
          {
            "question": "หากต้องการรายงานว่าคำขอ 99% ตอบสนองเร็วกว่า 200ms แต่มี 1% ที่ช้าผิดปกติ ควรใช้คำศัพท์ใด?",
            "options": [
              "P99 latency",
              "Throughput limit",
              "Bandwidth capacity",
              "Cache hit ratio"
            ],
            "correctIndex": 0,
            "explanation": "ถูกต้อง! P99 latency หมายถึงเวลาตอบสนองที่ครอบคลุม 99% ของคำขอทั้งหมด โดย 1% ที่เหลือคือกรณีที่ช้าที่สุด"
          },
          {
            "question": "ประโยคใดอธิบายสาเหตุของฐานข้อมูลช้าได้อย่างเป็นมืออาชีพที่สุด?",
            "options": [
              "The DB is broken and I don't know why.",
              "The query triggered a full sequential scan because the status column lacked an index.",
              "Database is very slow today, please wait.",
              "We must delete all records to make it faster."
            ],
            "correctIndex": 1,
            "explanation": "ถูกต้อง! ประโยคนี้ระบุทั้งกลไกปัญหา (full sequential scan) และสาเหตุที่แท้จริง (status column lacked an index) อย่างชัดเจน"
          },
          {
            "question": "คำว่า 'cache stampede' หมายถึงสถานการณ์ใด?",
            "options": [
              "การที่เซิร์ฟเวอร์แคชหน่วยความจำเต็ม",
              "การที่แคชหมดอายุพร้อมกัน ทำให้ทราฟฟิกมหาศาลพุ่งเข้าฐานข้อมูลหลักโดยตรง",
              "การลบไฟล์แคชทิ้งด้วยคำสั่ง sudo rm -rf",
              "การที่บราวเซอร์ไม่ยอมโหลดหน้าเว็บ"
            ],
            "correctIndex": 1,
            "explanation": "ถูกต้อง! Cache stampede (หรือ cache thundering herd) คือภาวะที่คีย์แคชหมดอายุแล้วคำขอจำนวนมหาศาลวิ่งลงฐานข้อมูลพร้อมกันจนระบบล่ม"
          }
        ]
      },
      {
        "id": "role-be-02",
        "title": "Unit 2: Kubernetes, Microservices & Incident Triage (สถาปัตยกรรม K8s และการวิเคราะห์ Incident)",
        "summary": "สำนวนการรายงานสถานะของ Pod ในคลัสเตอร์ Kubernetes เช่น CrashLoopBackOff, OOMKilled, Pod Eviction, การเปิด Circuit Breaker และการรับมือวิกฤติตอนเช้า",
        "formula": "[Workload/Pod] + is in + [State] + because + [Resource/Network Constraint] + initiating + [Recovery Action]",
        "explanation": "### 1. การสื่อสารในโลก Container & Kubernetes\nเมื่อระบบ Microservices บน Kubernetes (K8s) พังกลางคัน การสื่อสารต้องกระชับ บอกชื่อ Namespace, Workload และสถานะ Error ให้ชัดเจน\n\n### 📊 คำศัพท์ Kubernetes ยอดนิยม\n| คำศัพท์ทางเทคนิค | คำอ่าน & หน้าที่ | ความหมายในการทำงาน |\n|---|---|---|\n| **CrashLoopBackOff** | /kræʃ luːp bæk ɒf/ (n.) | ภาวะที่คอนเทนเนอร์สตาร์ทติดแล้วพังซ้ำๆ จน K8s ต้องหน่วงเวลารีสตาร์ท |\n| **OOMKilled** | /oʊ oʊ em kɪld/ (adj./v.) | คอนเทนเนอร์ถูกระบบปฏิบัติการสั่งฆ่าเนื่องจากใช้ RAM เกินโควตา |\n| **pod eviction** | /pɒd ɪˈvɪk.ʃən/ (n.) | โหนดมีทรัพยากรไม่พอ จน K8s ต้องเตะ Pod ออกไปหาโหนดอื่น |\n| **ingress controller** | /ˈɪn.ɡres kənˈtrəʊ.lər/ (n.) | ตัวควบคุมเส้นทางทราฟฟิกภายนอกเข้ามายัง Service ภายในคลัสเตอร์ |\n| **circuit breaker** | /ˈsɜː.kɪt ˈbreɪ.kər/ (n.) | กลไกตัดการเรียกเซอร์วิสชั่วคราวเพื่อป้องกันไม่ให้พังลามทั้งระบบ |\n\n### 🛠️ โครงสร้างประโยคมาตรฐาน\n1. **การรายงาน Pod พังเพราะกินแรมเกิน:**\n   - *\"The auth-service pods are in CrashLoopBackOff because they were OOMKilled by the node kernel.\"*\n2. **การชี้แจงเรื่อง Ingress หรือ Gateway:**\n   - *\"The ingress controller is returning 504 Gateway Timeouts because the payment upstream is unresponsive.\"*\n3. **การบอกขั้นตอนการกู้คืน:**\n   - *\"We bumped the pod memory limit to 2Gi and restarted the deployment rollout.\"*",
        "examples": [
          {
            "en": "Two worker pods were evicted from node pool B due to disk pressure.",
            "th": "เวิร์กเกอร์พ็อด 2 ตัวถูกสั่งขับไล่ (Evicted) ออกจากโหนดพูล B เนื่องจากพื้นที่ดิสก์ใกล้เต็ม",
            "audio": "Two worker pods were evicted from node pool B due to disk pressure."
          },
          {
            "en": "The circuit breaker tripped immediately to isolate the failing notification service.",
            "th": "ระบบ Circuit Breaker ตัดการทำงานทันทีเพื่อกักกันเซอร์วิสแจ้งเตือนที่กำลังมีปัญหาไม่ให้กระทบส่วนอื่น",
            "audio": "The circuit breaker tripped immediately to isolate the failing notification service."
          },
          {
            "en": "We are inspecting the container logs using kubectl logs with the previous flag.",
            "th": "เรากำลังตรวจสอบประวัติ Log ของคอนเทนเนอร์รอบก่อนหน้าโดยใช้คำสั่ง kubectl logs พร้อมแฟล็ก --previous",
            "audio": "We are inspecting the container logs using kubectl logs with the previous flag."
          }
        ],
        "quickCheck": [
          {
            "question": "สถานะ 'OOMKilled' ใน Kubernetes เกิดจากสาเหตุใด?",
            "options": [
              "ซีพียูร้อนเกินไป",
              "แอปพลิเคชันใช้หน่วยความจำ (RAM) เกินโควตาที่กำหนดไว้",
              "รหัสผ่านฐานข้อมูลผิด",
              "การเชื่อมต่อเครือข่ายหลุด"
            ],
            "correctIndex": 1,
            "explanation": "ถูกต้อง! OOM ย่อมาจาก Out Of Memory เกิดขึ้นเมื่อโปรเซสกินหน่วยความจำทะลุขีดจำกัด (memory limit)"
          },
          {
            "question": "คำว่า 'Circuit Breaker' ในสถาปัตยกรรม Microservices ทำหน้าที่อะไร?",
            "options": [
              "ช่วยเร่งความเร็วเครือข่าย",
              "ตัดการเชื่อมต่อไปยังเซอร์วิสที่กำลังพัง เพื่อป้องกันไม่ให้เกิดความล้มเหลวแบบลูกโซ่",
              "สลับฐานข้อมูลอัตโนมัติ",
              "ตรวจสอบความปลอดภัยของโค้ด"
            ],
            "correctIndex": 1,
            "explanation": "ถูกต้อง! Circuit Breaker เปรียบเหมือนเบรกเกอร์ตัดไฟ เมื่อเซอร์วิสปลายทางพัง มันจะตัดวงจรไม่ยิงซ้ำ เพื่อรักษาเสถียรภาพระบบส่วนรวม"
          },
          {
            "question": "ควรเติมคำใดลงในประโยค: 'The pods are in ___ because the entrypoint script exited with code 1'?",
            "options": [
              "Pending",
              "CrashLoopBackOff",
              "Running",
              "Succeeded"
            ],
            "correctIndex": 1,
            "explanation": "ถูกต้อง! เมื่อคำสั่งเริ่มต้นของคอนเทนเนอร์จบการทำงานด้วย Error (Code != 0) แล้วรันใหม่ซ้ำๆ จะติดสถานะ CrashLoopBackOff"
          }
        ]
      },
      {
        "id": "role-be-03",
        "title": "Unit 3: Infrastructure as Code & CI/CD Pipelines (IaC และระบบอัตโนมัติ)",
        "summary": "ภาษาอังกฤษสำหรับการตรวจเช็ก Terraform State Drift, การทำ Secret Rotation, กลยุทธ์การ Deploy แบบ Canary vs Blue-Green และการแก้ปัญหา Pipeline ขัดข้อง",
        "formula": "To ensure [Zero Downtime / Compliance], we implemented [IaC/Pipeline Strategy] + by [Mechanism]",
        "explanation": "### 1. การทำงานกับ Cloud Infrastructure & Pipelines\nวิศวกร DevOps ยุคใหม่จัดการโครงสร้างพื้นฐานด้วยโค้ด (Infrastructure as Code) การประชุม Sprint มักเต็มไปด้วยคำศัพท์เรื่อง Deployment Strategy และความปลอดภัย\n\n### 📊 คำศัพท์ IaC & CI/CD\n| คำศัพท์ทางเทคนิค | คำอ่าน & หน้าที่ | ความหมายในการทำงาน |\n|---|---|---|\n| **configuration drift** | /kənˌfɪɡ.jəˈreɪ.ʃən drɪft/ (n.) | สภาพแวดล้อมจริงบนคลาวด์เบี่ยงเบนไปจากโค้ด Terraform ที่ประกาศไว้ |\n| **canary deployment** | /kəˈneə.ri dɪˈplɔɪ.mənt/ (n.) | การปล่อยเวอร์ชันใหม่ให้ผู้ใช้กลุ่มเล็กๆ ลองก่อนปล่อย 100% |\n| **blue-green deployment** | /bluː ɡriːn dɪˈplɔɪ.mənt/ (n.) | การมีเซิร์ฟเวอร์ 2 ชุดพร้อมสลับเราเตอร์ทันทีโดยระบบไม่ดับ |\n| **secret rotation** | /ˈsiː.krət rəʊˈteɪ.ʃən/ (n.) | การสลับเปลี่ยนรหัสผ่าน API Keys เป็นประจำเพื่อความปลอดภัย |\n| **idempotent** | /ˌaɪ.dəmˈpoʊ.tənt/ (adj.) | การสั่งรันซ้ำกี่ครั้งก็ให้ผลลัพธ์เหมือนเดิม ไม่สร้างข้อมูลซ้ำซ้อน |\n\n### 🛠️ ตัวอย่างประโยคใช้งานจริง\n- *\"We detected a configuration drift in our staging security groups; someone made manual changes in the AWS Console.\"*\n- *\"We are using a canary deployment strategy with a 5% traffic split for the first 30 minutes.\"*\n- *\"The CI/CD pipeline failed during the linting stage because of an unformatted YAML file.\"*",
        "examples": [
          {
            "en": "We ran terraform plan to detect any uncommitted infrastructure drift.",
            "th": "เราได้รันคำสั่ง terraform plan เพื่อตรวจสอบว่ามีการแก้ไขโครงสร้างคลาวด์นอกโค้ดหรือไม่",
            "audio": "We ran terraform plan to detect any uncommitted infrastructure drift."
          },
          {
            "en": "A blue-green deployment ensures zero downtime during critical schema upgrades.",
            "th": "การติดตั้งระบบแบบ Blue-Green ช่วยรับประกันว่าจะไม่มีช่วงเวลาที่ระบบหยุดทำงานระหว่างการอัปเกรด",
            "audio": "A blue-green deployment ensures zero downtime during critical schema upgrades."
          },
          {
            "en": "All database credentials must be managed via Vault with automatic 30-day secret rotation.",
            "th": "รหัสผ่านฐานข้อมูลทั้งหมดต้องจัดการผ่าน Vault พร้อมระบบสลับเปลี่ยนรหัสอัตโนมัติทุก 30 วัน",
            "audio": "All database credentials must be managed via Vault with automatic 30-day secret rotation."
          }
        ],
        "quickCheck": [
          {
            "question": "การ Deploy แบบ 'Canary Deployment' มีจุดเด่นอย่างไร?",
            "options": [
              "ลบเซิร์ฟเวอร์เก่าทิ้งทั้งหมดก่อนเริ่มบิลด์ใหม่",
              "ปล่อยฟีเจอร์ใหม่ให้ผู้ใช้งานกลุ่มเล็กๆ ทดสอบก่อน หากมีปัญหาสามารถ Rollback ได้ทันที",
              "ติดตั้งระบบเฉพาะช่วงวันหยุดเสาร์อาทิตย์",
              "ไม่ต้องทดสอบก่อนขึ้น Production"
            ],
            "correctIndex": 1,
            "explanation": "ถูกต้อง! Canary deployment นำชื่อมาจากนกคานารีที่คนงานเหมืองใช้ตรวจจับก๊าซพิษ คือการปล่อยให้ทราฟฟิกกลุ่มเล็กๆ (เช่น 5%) ลองใช้ก่อนเพื่อดูว่ามี Error หรือไม่"
          },
          {
            "question": "คำว่า 'configuration drift' ใน Terraform หมายถึงอะไร?",
            "options": [
              "ความเร็วในการบิลด์ที่ช้าลง",
              "ความไม่ตรงกันระหว่างโค้ดในไฟล์ .tf กับทรัพยากรจริงบนคลาวด์ (เช่น มีคนไปกดมือใน Console)",
              "การลบไฟล์โค้ดทิ้ง",
              "การต่ออินเทอร์เน็ตไม่ติด"
            ],
            "correctIndex": 1,
            "explanation": "ถูกต้อง! Configuration drift เกิดขึ้นเมื่อมีคนแอบไปแก้คอนฟิกมือใน Cloud Console ทำให้ไม่ตรงกับพิมพ์เขียวใน Terraform"
          },
          {
            "question": "คำว่า 'idempotent' (ไอเด็มโพเทนต์) อธิบายพฤติกรรมใดของระบบ?",
            "options": [
              "รันได้เฉพาะครั้งเดียวเท่านั้น",
              "การสั่งรันซ้ำหลายๆ ครั้งด้วยข้อมูลเดิม จะได้ผลลัพธ์คงเดิมเสมอโดยไม่เกิดข้อผิดพลาดหรือข้อมูลซ้ำซ้อน",
              "ทำงานแบบสุ่ม",
              "ต้องใช้แรมสูงมาก"
            ],
            "correctIndex": 1,
            "explanation": "ถูกต้อง! Idempotence เป็นคุณสมบัติสำคัญของ IaC และ REST API (เช่น PUT/DELETE) ที่สั่งรันกี่ครั้ง สถานะของระบบปลายทางก็จะยังคงถูกต้องเหมือนเดิม"
          }
        ]
      }
    ]
  },
  {
    "id": "role-frontend-uiux",
    "title": "Frontend, UI/UX & Mobile Engineering English",
    "titleTh": "ภาษาอังกฤษสำหรับนักพัฒนา Frontend, Mobile และทีม UI/UX",
    "icon": "🎨",
    "badge": "Frontend & Design",
    "badgeColor": "rose",
    "description": "การสื่อสารระหว่าง Frontend Developer, Mobile Engineer และ UI/UX Designer: ตั้งแต่ Design Handoff บน Figma จนถึง Performance (Core Web Vitals), Web Accessibility (a11y) และ State Management",
    "units": [
      {
        "id": "role-fe-01",
        "title": "Unit 1: Design Handoff & Figma Critique (การคุยเรื่องดีไซน์บน Figma)",
        "summary": "ประโยคเจรจาเมื่อดีไซน์ใน Figma ไม่ตรงกับข้อจำกัดทางเทคนิค, การอธิบาย Design Tokens, Responsive Breakpoints และ Spacing Inconsistencies",
        "formula": "I noticed a discrepancy in [Element] between [Figma Spec] and [Implementation]; could we standardize on [Design Token]?",
        "explanation": "### 1. สะพานเชื่อมระหว่าง Designer และ Developer\nการทำงานระหว่างทีมพัฒนาหน้าบ้าน (Frontend) กับ Designer บน Figma มักมีจุดที่ต้องเจรจา การใช้ภาษาที่สุภาพแต่ชัดเจนจะช่วยป้องกันความเข้าใจผิดและลดงานแก้ซ้ำซ้อน\n\n### 📊 คำศัพท์ Design System & UI/UX\n| คำศัพท์ทางเทคนิค | คำอ่าน & หน้าที่ | ความหมายในการทำงาน |\n|---|---|---|\n| **design tokens** | /dɪˈzaɪn ˈtəʊ.kənz/ (n.) | ตัวแปรกลางของดีไซน์ เช่น สี ระยะห่าง ฟอนต์ (เช่น `color-primary-500`) |\n| **breakpoint** | /ˈbreɪk.pɔɪnt/ (n.) | จุดตัดขนาดหน้าจอที่เลย์เอาต์จะเปลี่ยนรูป (Mobile, Tablet, Desktop) |\n| **discrepancy** | /dɪˈskrep.ən.si/ (n.) | ความไม่สอดคล้องกัน หรือความคลาดเคลื่อนระหว่างสองสิ่ง |\n| **layout shift** | /ˈleɪ.aʊt ʃɪft/ (n.) | การที่องค์ประกอบบนหน้าเว็บกระตุกขยับตำแหน่งโดยไม่ตั้งใจ |\n| **viewport** | /ˈvjuː.pɔːt/ (n.) | พื้นที่การมองเห็นหน้าเว็บบนหน้าจอของอุปกรณ์นั้นๆ |\n\n### 🛠️ รูปแบบประโยคเมื่อคุยงานบน Figma\n1. **การทักท้วงเรื่องระยะห่างหรือสีที่ไม่ตรง Design System:**\n   - *\"I noticed a 14px padding here, but our standard spacing token is 16px (`space-4`). Can we align on that?\"*\n2. **การถามเรื่องพฤติกรรมบนจอมือถือ (Responsive Behavior):**\n   - *\"How should this 4-column card grid collapse on smaller viewports below 640px?\"*\n3. **การอธิบายสถานะตกหล่น (Missing States):**\n   - *\"Could you provide the empty state and error state mockups for the search results drawer?\"*",
        "examples": [
          {
            "en": "We should use standard design tokens instead of hardcoding hex color values in CSS.",
            "th": "เราควรใช้ตัวแปร Design Tokens กลาง แทนที่จะพิมพ์ค่ารหัสสี Hex แข็งๆ ลงใน CSS",
            "audio": "We should use standard design tokens instead of hardcoding hex color values in CSS."
          },
          {
            "en": "How should the navigation bar adapt when the user scrolls down on mobile screens?",
            "th": "แถบนำทางควรปรับตัวอย่างไรเมื่อผู้ใช้เลื่อนหน้าจอลงบนอุปกรณ์มือถือ",
            "audio": "How should the navigation bar adapt when the user scrolls down on mobile screens?"
          },
          {
            "en": "There is an inconsistency in the border-radius between the modal and the buttons.",
            "th": "มีความไม่สอดคล้องกันของรัศมีความโค้งมนของขอบ (border-radius) ระหว่างหน้าต่างป๊อปอัปกับปุ่มกด",
            "audio": "There is an inconsistency in the border-radius between the modal and the buttons."
          }
        ],
        "quickCheck": [
          {
            "question": "คำว่า 'design token' ในระบบ Design System หมายถึงอะไร?",
            "options": [
              "เหรียญคริปโตสำหรับจ่ายเงินให้นักออกแบบ",
              "ตัวแปรกลางที่เก็บค่ามาตรฐานของดีไซน์ เช่น รหัสสี ขนาดฟอนต์ หรือระยะห่าง",
              "บัตรผ่านเข้าออฟฟิศ",
              "ปุ่มกดบนหน้าจอ"
            ],
            "correctIndex": 1,
            "explanation": "ถูกต้อง! Design tokens คือตัวแปรพื้นฐาน (เช่น --color-brand, --spacing-md) ที่ช่วยให้โค้ดของโปรแกรมเมอร์ตรงกับดีไซน์ของนักออกแบบเสมอ"
          },
          {
            "question": "หากต้องการถามดีไซเนอร์ว่าหน้าจอจะแสดงผลอย่างไรเมื่อไม่มีข้อมูล ควรขอ Mockup ใด?",
            "options": [
              "Happy state",
              "Empty state",
              "Loading spinner",
              "404 Page"
            ],
            "correctIndex": 1,
            "explanation": "ถูกต้อง! Empty state คือหน้าจอที่แสดงผลเมื่อผู้ใช้ยังไม่มีข้อมูลใดๆ (เช่น ตะกร้าสินค้าว่างเปล่า หรือค้นหาแล้วไม่เจอข้อมูล)"
          },
          {
            "question": "ประโยคใดสุภาพและเหมาะสมที่สุดในการทักว่าระยะห่างไม่ตรงกับดีไซน์ซิสเต็ม?",
            "options": [
              "Your design is wrong, please fix it.",
              "I noticed the padding is 15px. Could we standardize it to our 16px spacing token?",
              "I don't like this spacing, change it now.",
              "Why do you always use random pixels?"
            ],
            "correctIndex": 1,
            "explanation": "ถูกต้อง! ประโยคนี้ชี้จุดที่สังเกตเห็นอย่างสุภาพ (I noticed...) พร้อมเสนอทางออกที่อิงตามมาตรฐานของทีม (Could we standardize...)"
          }
        ]
      },
      {
        "id": "role-fe-02",
        "title": "Unit 2: Web Accessibility (a11y) & Core Web Vitals (การเข้าถึงและประสิทธิภาพเว็บ)",
        "summary": "คำศัพท์และประโยคในการอภิปรายเรื่อง ARIA attributes, Keyboard Navigation, Contrast Ratios, และเมตริกความเร็วของเว็บ (LCP, CLS, INP)",
        "formula": "To improve our [Metric: LCP/CLS/a11y score], we must [Remediation: pre-load font / add alt text] to ensure [User Benefit].",
        "explanation": "### 1. มาตรฐานเว็บสากล: ความเร็วและการเข้าถึง\nบริษัทยักษ์ใหญ่ระดับโลกให้ความสำคัญกับ **a11y (Accessibility)** เพื่อให้ผู้พิการใช้งานได้ และ **Core Web Vitals** เพื่อให้ติดอันดับ Google Search การพูดคุยเรื่องนี้จึงเป็นตัววัดระดับความเป็นมืออาชีพของ Frontend\n\n### 📊 คำศัพท์ Accessibility & Web Vitals\n| คำศัพท์ทางเทคนิค | คำอ่าน & หน้าที่ | ความหมายในการทำงาน |\n|---|---|---|\n| **a11y (accessibility)** | /əˌkses.əˈbɪl.ə.ti/ (n.) | การออกแบบเว็บให้ทุกคน รวมถึงผู้พิการทางสายตาหรือการเคลื่อนไหว เข้าถึงได้ |\n| **screen reader** | /ˈskriːn ˌriː.dər/ (n.) | โปรแกรมอ่านออกเสียงหน้าจอสำหรับผู้พิการทางสายตา |\n| **ARIA label** | /ˈɑː.ri.ə ˈleɪ.bəl/ (n.) | คุณลักษณะใน HTML ที่ช่วยอธิบายหน้าที่ของปุ่มหรือไอคอนให้ Screen Reader |\n| **LCP (Largest Contentful Paint)** | /el siː piː/ (n.) | เวลาที่ใช้ในการโหลดชิ้นส่วนเนื้อหาที่ใหญ่ที่สุดบนหน้าจอ (เป้าหมาย < 2.5s) |\n| **CLS (Cumulative Layout Shift)** | /siː el es/ (n.) | การกระตุกเลื่อนตำแหน่งของหน้าเว็บขณะโหลด (เป้าหมาย < 0.1) |\n\n### 🛠️ โครงสร้างประโยคมาตรฐาน\n1. **การแจ้งเรื่อง Accessibility บกพร่อง:**\n   - *\"This icon button lacks an `aria-label`, which makes it inaccessible to screen readers.\"*\n2. **การอธิบายปัญหา CLS (เว็บกระตุกขยับ):**\n   - *\"The banner image causes layout shift because its width and height attributes are not explicitly set.\"*\n3. **การเสนอแผนปรับปรุงความเร็ว:**\n   - *\"We should pre-load critical web fonts and defer non-essential analytics scripts to improve our LCP score.\"*",
        "examples": [
          {
            "en": "We need to ensure all interactive elements are fully navigable using only the keyboard.",
            "th": "เราต้องมั่นใจว่าปุ่มและลิงก์ทั้งหมดสามารถสั่งงานได้สมบูรณ์โดยใช้เพียงแค่แป้นพิมพ์ (Keyboard Navigation)",
            "audio": "We need to ensure all interactive elements are fully navigable using only the keyboard."
          },
          {
            "en": "The color contrast between this gray text and the white background fails WCAG AA standards.",
            "th": "ความต่างของสีระหว่างตัวหนังสือสีเทานี้กับพื้นหลังสีขาวไม่ผ่านเกณฑ์มาตรฐานความเข้าถึงของ WCAG ระดับ AA",
            "audio": "The color contrast between this gray text and the white background fails WCAG AA standards."
          },
          {
            "en": "Optimizing responsive WebP images significantly reduced our page weight and LCP duration.",
            "th": "การปรับแต่งรูปภาพเป็นฟอร์แมต WebP ที่ตอบสนองตามหน้าจอ ช่วยลดน้ำหนักของหน้าเว็บและเวลา LCP ได้อย่างมีนัยสำคัญ",
            "audio": "Optimizing responsive WebP images significantly reduced our page weight and LCP duration."
          }
        ],
        "quickCheck": [
          {
            "question": "คำย่อ 'a11y' ย่อมาจากคำว่าอะไร?",
            "options": [
              "All in one",
              "Accessibility (มีตัวอักษร 11 ตัวระหว่าง a กับ y)",
              "Analytics year 1",
              "Algorithm 11"
            ],
            "correctIndex": 1,
            "explanation": "ถูกต้อง! a11y เป็นคำย่อแบบ Numeronym ของคำว่า Accessibility (a + ตัวอักษรตรงกลาง 11 ตัว + y)"
          },
          {
            "question": "ปัญหาหน้าเว็บกระตุกขยับตำแหน่งระหว่างกำลังโหลดรูปภาพ วัดผลด้วยเมตริกใดของ Google?",
            "options": [
              "FID (First Input Delay)",
              "CLS (Cumulative Layout Shift)",
              "TTFB (Time to First Byte)",
              "Bounce Rate"
            ],
            "correctIndex": 1,
            "explanation": "ถูกต้อง! CLS (Cumulative Layout Shift) เป็นเมตริกวัดความเสถียรของเลย์เอาต์ ป้องกันไม่ให้ผู้ใช้กดปุ่มผิดเพราะหน้าเว็บกระตุกเลื่อน"
          },
          {
            "question": "ควรใส่สิ่งใดในปุ่มที่มีเพียงรูปไอคอนถังขยะ (Delete Icon) โดยไม่มีข้อความ เพื่อให้ผู้ใช้ Screen Reader ใช้งานได้?",
            "options": [
              "aria-label='Delete item'",
              "style='color: red'",
              "class='trash-icon'",
              "onClick='delete()'"
            ],
            "correctIndex": 0,
            "explanation": "ถูกต้อง! การใส่ aria-label ช่วยให้โปรแกรม Screen reader อ่านออกเสียงให้ผู้พิการทางสายตารู้ว่าปุ่มนี้คือปุ่มลบ"
          }
        ]
      },
      {
        "id": "role-fe-03",
        "title": "Unit 3: State Management & Component Reusability (การจัดการ State และคอมโพเนนต์)",
        "summary": "การอธิบายปัญหา Props Drilling, การเปรียบเทียบ Local State vs Global Store, การทำ Memoization และการป้องกัน Re-render ซ้ำซ้อน",
        "formula": "To prevent [Problem: excessive re-renders / prop drilling], we extracted [Logic] into [Custom Hook / Store].",
        "explanation": "### 1. สถาปัตยกรรมโค้ดฝั่งหน้าบ้าน\nเมื่อโปรเจกต์ขยายตัว การจัดการ State ใน React, Vue หรือ Mobile (Flutter/React Native) กลายเป็นหัวข้อถกเถียงอันดับหนึ่งใน Code Review\n\n### 📊 คำศัพท์ State Management\n| คำศัพท์ทางเทคนิค | คำอ่าน & หน้าที่ | ความหมายในการทำงาน |\n|---|---|---|\n| **prop drilling** | /prɒp ˈdrɪl.ɪŋ/ (n.) | การส่งข้อมูลผ่านคอมโพเนนต์ลูกหลานหลายชั้นเกินความจำเป็น |\n| **re-render** | /riː ˈren.dər/ (v./n.) | การวาดส่วนแสดงผลของหน้าจอใหม่เมื่อ State เปลี่ยนแปลง |\n| **memoization** | /ˌmem.oʊ.aɪˈzeɪ.ʃən/ (n.) | การจำค่าผลลัพธ์จากการคำนวณไว้เพื่อไม่ต้องคำนวณซ้ำ |\n| **hydration** | /haɪˈdreɪ.ʃən/ (n.) | กระบวนการที่ JavaScript เข้าไปผูก Event เข้ากับ HTML ที่เรนเดอร์มาจาก Server |\n| **single source of truth** | /ˈsɪŋ.ɡəl sɔːs əv truːθ/ (n.) | แหล่งข้อมูลหลักแห่งเดียวที่ถูกต้องที่สุด เพื่อป้องกันข้อมูลขัดแย้งกัน |\n\n### 🛠️ โครงสร้างประโยคมาตรฐาน\n1. **การชี้ปัญหาการ Re-render ซ้ำซ้อน:**\n   - *\"This component re-renders on every keystroke because the search query is stored in the global parent state.\"*\n2. **การเสนอแนะย้าย State ไปใช้ Store:**\n   - *\"Let's move the authentication state to Zustand to eliminate prop drilling across the layout tree.\"*\n3. **การอธิบายการใช้ Custom Hook:**\n   - *\"We encapsulated the pagination logic inside a reusable `usePagination` custom hook.\"*",
        "examples": [
          {
            "en": "Wrapping the expensive calculation with useMemo prevents unnecessary layout recalculations.",
            "th": "การครอบการคำนวณที่กินทรัพยากรด้วย useMemo ช่วยป้องกันการคำนวณเลย์เอาต์ซ้ำซ้อนโดยไม่จำเป็น",
            "audio": "Wrapping the expensive calculation with useMemo prevents unnecessary layout recalculations."
          },
          {
            "en": "We should treat the server response as the single source of truth for the user's role.",
            "th": "เราควรถือว่าข้อมูลที่ตอบกลับมาจากเซิร์ฟเวอร์เป็นแหล่งข้อมูลความจริงหลักเพียงหนึ่งเดียวสำหรับบทบาทสิทธิ์ของผู้ใช้",
            "audio": "We should treat the server response as the single source of truth for the user's role."
          },
          {
            "en": "The hydration mismatch error occurs when the server-rendered HTML differs from the client render.",
            "th": "ข้อผิดพลาด Hydration mismatch เกิดขึ้นเมื่อ HTML ที่สร้างจากเซิร์ฟเวอร์ไม่ตรงกับสิ่งที่ไคลเอนต์เรนเดอร์ในเครื่อง",
            "audio": "The hydration mismatch error occurs when the server-rendered HTML differs from the client render."
          }
        ],
        "quickCheck": [
          {
            "question": "คำว่า 'prop drilling' ใน React หมายถึงปัญหาใด?",
            "options": [
              "การเจาะระบบความปลอดภัย",
              "การส่ง props ลึกลงไปหลายชั้นผ่านคอมโพเนนต์ตัวกลางที่ไม่ได้ใช้ค่านั้นจริงๆ",
              "การลบคอมโพเนนต์ทิ้ง",
              "การเชื่อมต่อฐานข้อมูลล้มเหลว"
            ],
            "correctIndex": 1,
            "explanation": "ถูกต้อง! Prop drilling คือการส่งต่อ props ทะลุผ่านหลายชั้นคอมโพเนนต์ ทำให้โค้ดผูกติดกันแน่นและดูแลรักษายาก"
          },
          {
            "question": "เทคนิค 'Memoization' มีประโยชน์หลักอย่างไรในการพัฒนา Frontend?",
            "options": [
              "ช่วยบันทึกรหัสผ่านของผู้ใช้",
              "จดจำผลลัพธ์ของการคำนวณที่หนักหน่วงไว้เพื่อไม่ต้องคำนวณใหม่เมื่อ input ยังคงเดิม",
              "ช่วยแปลภาษาอัตโนมัติ",
              "ทำให้รูปภาพมีความละเอียดสูงขึ้น"
            ],
            "correctIndex": 1,
            "explanation": "ถูกต้อง! Memoization (เช่น useMemo หรือ memo) ช่วยจำผลลัพธ์เดิมไว้ ลดการประมวลผลซ้ำซ้อนและลดการ Re-render หน้าจอ"
          },
          {
            "question": "คำว่า 'Single Source of Truth' (SSOT) หมายถึงแนวคิดใด?",
            "options": [
              "การมีฐานข้อมูลหลายตัวที่เก็บข้อมูลไม่ตรงกัน",
              "การกำหนดจุดจัดเก็บข้อมูลหลักเพียงแห่งเดียว เพื่อป้องกันความสับสนและข้อมูลไม่สอดคล้องกัน",
              "การห้ามเขียนโค้ดซ้ำ",
              "การมีทีมงานเพียงคนเดียวในโปรเจกต์"
            ],
            "correctIndex": 1,
            "explanation": "ถูกต้อง! Single Source of Truth หมายถึงการมีแหล่งข้อมูลที่ถูกต้องที่สุดเพียงจุดเดียว เมื่อข้อมูลเปลี่ยน ทุกส่วนในระบบจะอ้างอิงตรงกันหมด"
          }
        ]
      }
    ]
  },
  {
    "id": "role-data-ai",
    "title": "Data Engineering & AI / Machine Learning English",
    "titleTh": "ภาษาอังกฤษสำหรับทีม Data Engineering, Analytics และ AI/ML",
    "icon": "🤖",
    "badge": "Data & AI",
    "badgeColor": "emerald",
    "description": "ภาษาอังกฤษเฉพาะทางสำหรับวิศวกรข้อมูลและนักวิจัย AI: ตั้งแต่การสร้าง ETL/ELT Pipelines, Data Quality & Governance, จนถึงการนำเสนอเมตริกการเทรนโมเดล (F1-score, Latency, Data Drift)",
    "units": [
      {
        "id": "role-data-01",
        "title": "Unit 1: ETL / ELT Pipelines & Ingestion Bottlenecks (การสร้างไปป์ไลน์และการดึงข้อมูล)",
        "summary": "ประโยคอธิบายปัญหาคอขวดใน Data Pipeline, การจัดการ Schema Drift, การทำ Backfill ข้อมูลย้อนหลัง และคุณสมบัติ Idempotent Data Movement",
        "formula": "The [Pipeline/Job] experienced [Bottleneck/Failure] during [Stage: Extract/Transform/Load] due to [Cause]; we must [Solution].",
        "explanation": "### 1. ภารกิจหลักของ Data Engineering\nการดูแลไปป์ไลน์ข้อมูลขนาดใหญ่ (Big Data) ต้องอาศัยการสื่อสารสถานะที่แม่นยำ หากข้อมูลเข้าช้า (Data Lag) ฝ่ายวิเคราะห์และผู้บริหารจะไม่สามารถตัดสินใจทางธุรกิจได้\n\n### 📊 คำศัพท์ Data Pipelines\n| คำศัพท์ทางเทคนิค | คำอ่าน & หน้าที่ | ความหมายในการทำงาน |\n|---|---|---|\n| **schema drift** | /ˈskiː.mə drɪft/ (n.) | โครงสร้างข้อมูลต้นทางเปลี่ยนรูปกะทันหัน (เช่น มีคอลัมน์ใหม่หรือชนิดข้อมูลเปลี่ยน) |\n| **backfill** | /ˈbæk.fɪl/ (v./n.) | การสั่งรันไปป์ไลน์ย้อนหลังเพื่อประมวลผลข้อมูลในอดีตใหม่ |\n| **data ingestion** | /ˈdeɪ.tə ɪnˈdʒes.tʃən/ (n.) | กระบวนการนำเข้าข้อมูลดิบจากระบบต้นทางเข้าสู่ Data Lake/Warehouse |\n| **idempotent** | /ˌaɪ.dəmˈpoʊ.tənt/ (adj.) | รันซ้ำกี่ครั้งก็ได้ผลลัพธ์ถูกต้องเท่าเดิม ไม่เพิ่มข้อมูลซ้ำซ้อน |\n| **batch vs streaming** | /bætʃ vɜː.səs ˈstriː.mɪŋ/ | การส่งข้อมูลแบบรวมก้อนตามรอบเวลา vs การส่งข้อมูลแบบทันทีเรียลไทม์ |\n\n### 🛠️ ตัวอย่างประโยคใช้งานจริง\n- *\"The nightly ETL batch failed due to an unexpected schema drift in the upstream billing API.\"*\n- *\"We are backfilling three months of historical transaction data using partitioned Spark jobs.\"*\n- *\"We must ensure the pipeline transformation is idempotent so that retries won't create duplicate records.\"*",
        "examples": [
          {
            "en": "The ingestion pipeline is lagging behind by 4 hours due to API rate limits at the source.",
            "th": "ไปป์ไลน์นำเข้าข้อมูลกำลังล่าช้าสะสมไปแล้ว 4 ชั่วโมงเนื่องจากติดข้อจำกัดอัตราการยิง (Rate Limit) ของ API ต้นทาง",
            "audio": "The ingestion pipeline is lagging behind by 4 hours due to API rate limits at the source."
          },
          {
            "en": "We partitioned the BigQuery table by ingestion date to dramatically reduce query scan costs.",
            "th": "เราทำการแบ่งพาร์ทิชันตาราง BigQuery ตามวันที่นำเข้าข้อมูล เพื่อลดต้นทุนค่าสแกนคิวรีลงอย่างมหาศาล",
            "audio": "We partitioned the BigQuery table by ingestion date to dramatically reduce query scan costs."
          },
          {
            "en": "Switching from batch processing to streaming ingestion reduced our data freshness latency to under 30 seconds.",
            "th": "การเปลี่ยนจากการประมวลผลแบบก้อน (Batch) มาเป็นแบบสตรีมมิ่ง ช่วยลดความหน่วงความสดใหม่ของข้อมูลลงเหลือไม่ถึง 30 วินาที",
            "audio": "Switching from batch processing to streaming ingestion reduced our data freshness latency to under 30 seconds."
          }
        ],
        "quickCheck": [
          {
            "question": "คำว่า 'schema drift' ในโลกของ Data Engineering หมายถึงอะไร?",
            "options": [
              "การที่เซิร์ฟเวอร์เปลี่ยน IP address",
              "โครงสร้างคอลัมน์ของข้อมูลต้นทางเปลี่ยนแปลงไปโดยไม่ได้แจ้งล่วงหน้า ทำให้ไปป์ไลน์พัง",
              "การที่โปรแกรมเมอร์ย้ายโต๊ะทำงาน",
              "การลบฐานข้อมูลทิ้งทั้งหมด"
            ],
            "correctIndex": 1,
            "explanation": "ถูกต้อง! Schema drift เกิดขึ้นเมื่อระบบต้นทางเพิ่ม ลบ หรือเปลี่ยน Data type ของคอลัมน์ ทำให้โค้ด ETL ที่รอรับโครงสร้างเดิมเกิด Error"
          },
          {
            "question": "การทำ 'Backfill' ข้อมูลมีวัตถุประสงค์เพื่ออะไร?",
            "options": [
              "เพื่อลบข้อมูลทั้งหมดทิ้ง",
              "เพื่อประมวลผลข้อมูลย้อนหลังในอดีตใหม่ เช่น เมื่อมีการแก้โค้ดคำนวณหรือมีข้อมูลตกหล่น",
              "เพื่อสร้างระบบสำรองข้อมูล",
              "เพื่อเพิ่มความเร็วอินเทอร์เน็ต"
            ],
            "correctIndex": 1,
            "explanation": "ถูกต้อง! Backfilling คือการรันไปป์ไลน์ย้อนหลังสำหรับข้อมูลช่วงเวลาที่ผ่านมา เพื่อให้ข้อมูลในอดีตถูกต้องตรงตามสูตรใหม่"
          },
          {
            "question": "ทำไมกระบวนการ Data Pipeline ที่ดีจึงต้องมีคุณสมบัติ 'Idempotent'?",
            "options": [
              "เพราะทำให้โค้ดทำงานเร็วขึ้น 100 เท่า",
              "เพราะหากไปป์ไลน์ล่มกลางคันแล้วสั่งรันใหม่ จะไม่เกิดข้อมูลซ้ำซ้อนหรือบันทึกยอดเงินเบิ้ล",
              "เพราะไม่ต้องใช้รหัสผ่านในการเข้าถึง",
              "เพราะสามารถรันได้โดยไม่มีอินเทอร์เน็ต"
            ],
            "correctIndex": 1,
            "explanation": "ถูกต้อง! ความเป็น Idempotent รับประกันว่าหาก Job รันล้มเหลวแล้วกดรันซ้ำ ข้อมูลปลายทางจะยังคงถูกต้อง ไม่เกิด Duplicate rows"
          }
        ]
      },
      {
        "id": "role-data-02",
        "title": "Unit 2: Model Training, Evaluation & Inference (การเทรนและประเมินผลโมเดล AI)",
        "summary": "คำศัพท์และประโยคในการนำเสนอผลงาน AI/ML: การเปรียบเทียบ Precision vs Recall, F1-Score, Loss Convergence, Overfitting และ Inference Latency",
        "formula": "The model achieved [Metric: e.g. 94% F1-score] on the test set; however, [Risk: overfitting / high inference latency] requires [Optimization].",
        "explanation": "### 1. การสื่อสารผลงานด้าน Machine Learning\nนักพัฒนาโมเดล AI ต้องสามารถอธิบายผลลัพธ์ให้ทั้งฝ่ายบริหารและฝ่ายวิศวกรรมเข้าใจ โดยชี้ให้เห็นทั้งความแม่นยำ (Accuracy/F1) และข้อจำกัดทางเทคนิค (Latency/Drift)\n\n### 📊 คำศัพท์ Machine Learning & Evaluation\n| คำศัพท์ทางเทคนิค | คำอ่าน & หน้าที่ | ความหมายในการทำงาน |\n|---|---|---|\n| **precision vs recall** | /prɪˈsɪʒ.ən vɜː.səs ˈriː.kɔːl/ | สัดส่วนความแม่นยำเมื่อทายว่าใช่ vs สัดส่วนที่ดึงสิ่งที่ใช่มาได้ครบถ้วน |\n| **F1-score** | /ef wʌn skɔːr/ (n.) | ค่าเฉลี่ยฮาร์โมนิกที่ถ่วงดุลระหว่าง Precision และ Recall |\n| **overfitting** | /ˌoʊ.vərˈfɪt.ɪŋ/ (n.) | ภาวะที่โมเดลจำข้อสอบเก่าได้แม่นยำมาก แต่พอเจอข้อมูลจริงกลับทายผิด |\n| **data drift / model drift** | /ˈdeɪ.tə drɪft/ (n.) | พฤติกรรมข้อมูลในโลกจริงเปลี่ยนไปตามกาลเวลา จนโมเดลเก่าทายไม่แม่น |\n| **inference latency** | /ˈɪn.fər.əns ˈleɪ.tən.si/ (n.) | เวลาที่โมเดลใช้ในการประมวลผลและส่งคำตอบต่อคำขอ 1 ครั้ง |\n\n### 🛠️ โครงสร้างประโยคมาตรฐาน\n1. **การอธิบายผลการทดสอบโมเดล:**\n   - *\"The fine-tuned model achieved an F1-score of 0.92, outperforming the baseline by 8%.\"*\n2. **การอธิบายปัญหา Overfitting:**\n   - *\"We observed validation loss diverging from training loss, indicating clear overfitting.\"*\n3. **การพูดคุยเรื่อง Inference Latency บน Production:**\n   - *\"While the 70B parameter model is more accurate, its inference latency of 4 seconds is unacceptable for real-time chat.\"*",
        "examples": [
          {
            "en": "We prioritized recall over precision because missing a fraudulent transaction is far more costly than a false alarm.",
            "th": "เราให้ความสำคัญกับค่า Recall มากกว่า Precision เพราะการปล่อยให้การทุจริตหลุดรอดไปสร้างความเสียหายมากกว่าการแจ้งเตือนผิดพลาด",
            "audio": "We prioritized recall over precision because missing a fraudulent transaction is far more costly than a false alarm."
          },
          {
            "en": "We applied 4-bit quantization to shrink the model size and cut inference latency in half.",
            "th": "เราได้ใช้เทคนิคการทำ Quantization ขนาด 4-bit เพื่อลดขนาดโมเดลและตัดเวลาการประมวลผล (Inference Latency) ลงครึ่งหนึ่ง",
            "audio": "We applied 4-bit quantization to shrink the model size and cut inference latency in half."
          },
          {
            "en": "Model performance has degraded over the last quarter due to seasonal concept drift in user behavior.",
            "th": "ประสิทธิภาพของโมเดลลดลงในช่วงไตรมาสที่ผ่านมาเนื่องจากการเปลี่ยนแปลงพฤติกรรมของผู้ใช้ตามฤดูกาล (Concept Drift)",
            "audio": "Model performance has degraded over the last quarter due to seasonal concept drift in user behavior."
          }
        ],
        "quickCheck": [
          {
            "question": "ในระบบตรวจจับธุรกรรมการโกง (Fraud Detection) ทำไมเราจึงมักให้ความสำคัญกับค่า 'Recall' เป็นพิเศษ?",
            "options": [
              "เพราะต้องการให้โมเดลทำงานเร็วที่สุด",
              "เพราะการปล่อยให้คนโกงหลุดรอดไป (False Negative) มีผลเสียหายร้ายแรงกว่าการตรวจสอบผิดพลาดเล็กน้อย (False Positive)",
              "เพราะทำให้โมเดลกินแรมน้อยลง",
              "เพราะคำนวณง่ายกว่า"
            ],
            "correctIndex": 1,
            "explanation": "ถูกต้อง! ในงานด้านความปลอดภัยและการแพทย์ ค่า Recall สูงมีความสำคัญมาก เพื่อให้แน่ใจว่าระบบสามารถดักจับเคสอันตรายได้ครอบคลุมที่สุด"
          },
          {
            "question": "คำว่า 'Inference Latency' ในการ Deploy โมเดล AI หมายถึงสิ่งใด?",
            "options": [
              "เวลาที่ใช้ในการเทรนโมเดลตั้งแต่ต้นจนจบ",
              "เวลาที่โมเดลใช้ในการรับ Input แล้วประมวลผลส่งคำทำนายออกมาในระดับ Production",
              "ขนาดของไฟล์โมเดลในฮาร์ดดิสก์",
              "จำนวน GPU ที่ใช้เทรน"
            ],
            "correctIndex": 1,
            "explanation": "ถูกต้อง! Inference latency คือเวลาตอบสนองเมื่อมีผู้ใช้งานยิงคำถามเข้าไปแล้วโมเดลประมวลผลตอบกลับมา"
          },
          {
            "question": "เมื่อเกิดปัญหา 'Overfitting' อาการที่สังเกตได้ชัดเจนที่สุดคือกราฟใด?",
            "options": [
              "Training loss ลดลงเรื่อยๆ แต่ Validation loss เริ่มดีดตัวสูงขึ้น",
              "ซีพียูหยุดทำงานทันที",
              "ขนาดไฟล์เล็กลงจนเหลือ 0 byte",
              "โมเดลไม่ยอมอ่านข้อมูล"
            ],
            "correctIndex": 0,
            "explanation": "ถูกต้อง! Overfitting คือการที่โมเดลจำข้อมูลฝึกสอนได้ดีเกินไป ทำให้ Training loss ต่ำมาก แต่พอทดสอบกับชุด Validation กลับผิดพลาดสูงขึ้น"
          }
        ]
      }
    ]
  },
  {
    "id": "role-product-agile",
    "title": "Product Management, QA & Agile Collaboration English",
    "titleTh": "ภาษาอังกฤษสำหรับ Product Owner, QA Engineer และ Scrum Master",
    "icon": "🎯",
    "badge": "Product & Agile",
    "badgeColor": "amber",
    "description": "การสื่อสารระหว่าง Product Manager, QA Tester และ Scrum Master: การเขียน User Stories (Given-When-Then), การต่อรอง Scope และการคัดกรองจัดลำดับความสำคัญของ Bug (Severity vs Priority)",
    "units": [
      {
        "id": "role-pm-01",
        "title": "Unit 1: User Story Refinement & Acceptance Criteria (การเขียนและถก User Story)",
        "summary": "โครงสร้างสากลในการกำหนดเกณฑ์การตรวจรับงาน (Acceptance Criteria) ตามรูปแบบ Given-When-Then และการนิยาม Definition of Done (DoD)",
        "formula": "As a [User Role], I want [Feature/Action], so that [Business Value/Benefit]. Given [Precondition], When [Action], Then [Result].",
        "explanation": "### 1. ภาษาอังกฤษสำหรับการทำ Sprint Refinement\nการกำหนดเกณฑ์การตรวจรับงาน (Acceptance Criteria) ที่ชัดเจนจะช่วยป้องกันปัญหา \"ทำออกมาแล้วไม่ตรงกับที่ Product คิด\" การใช้รูปแบบ Given-When-Then เป็นมาตรฐานที่ทีมสากลยอมรับมากที่สุด\n\n### 📊 คำศัพท์ Agile & Requirements\n| คำศัพท์ทางเทคนิค | คำอ่าน & หน้าที่ | ความหมายในการทำงาน |\n|---|---|---|\n| **acceptance criteria** | /əkˈsep.təns kraɪˈtɪə.ri.ə/ (n.) | เงื่อนไขที่ฟีเจอร์ต้องผ่านครบทุกข้อก่อนที่ Product จะกดยอมรับงาน |\n| **definition of done (DoD)** | /ˌdef.ɪˈnɪʃ.ən əv dʌn/ (n.) | เช็กลิสต์ความพร้อมของงาน (เช่น ผ่าน Test, มี Document, Deploy Staging แล้ว) |\n| **edge case** | /ˈedʒ ˌkeɪs/ (n.) | กรณีพิเศษที่เกิดขึ้นได้ยากแต่ต้องดักจับ (เช่น กรอกอีเมลยาว 500 ตัวอักษร) |\n| **happy path** | /ˈhæp.i pɑːθ/ (n.) | เส้นทางการใช้งานปกติที่ผู้ใช้ทำถูกต้องทุกขั้นตอนโดยไม่มีข้อผิดพลาด |\n| **scope creep** | /ˈskəʊp kriːp/ (n.) | ภาวะที่ขอบเขตงานงอกเพิ่มขึ้นเรื่อยๆ โดยไม่มีการปรับเดดไลน์ |\n\n### 🛠️ ตัวอย่างการเขียน Given-When-Then\n- **Scenario:** ผู้ใช้กรอกรหัสผ่านผิดเกิน 5 ครั้ง\n  - **Given** the user is on the login page,\n  - **When** they enter an incorrect password 5 consecutive times,\n  - **Then** the account should be locked for 15 minutes and a security alert email must be dispatched.",
        "examples": [
          {
            "en": "What is the expected behavior if the user loses internet connectivity midway through checkout?",
            "th": "พฤติกรรมที่คาดหวังคืออะไรหากผู้ใช้อินเทอร์เน็ตหลุดระหว่างขั้นตอนการชำระเงิน",
            "audio": "What is the expected behavior if the user loses internet connectivity midway through checkout?"
          },
          {
            "en": "This ticket does not meet our Definition of Done because unit test coverage is below 80%.",
            "th": "การ์ดงานนี้ยังไม่ผ่านเกณฑ์ Definition of Done ของเรา เนื่องจากความครอบคลุมของการทดสอบ (Unit Test) ยังต่ำกว่า 80%",
            "audio": "This ticket does not meet our Definition of Done because unit test coverage is below 80%."
          },
          {
            "en": "Let's cover the happy path first in this sprint and tackle edge cases in the next iteration.",
            "th": "เรามาเน้นทำให้เส้นทางการใช้งานปกติ (Happy path) ใช้งานได้ก่อนในสปรินต์นี้ แล้วค่อยไปจัดการกรณีพิเศษ (Edge cases) ในรอบถัดไป",
            "audio": "Let's cover the happy path first in this sprint and tackle edge cases in the next iteration."
          }
        ],
        "quickCheck": [
          {
            "question": "รูปแบบ 'Given-When-Then' ในการเขียน Acceptance Criteria ส่วน 'Given' หมายถึงสิ่งใด?",
            "options": [
              "สิ่งที่ระบบต้องตอบกลับมา",
              "เงื่อนไขตั้งต้นหรือสถานะเริ่มต้นก่อนที่จะเกิดการกระทำ (Precondition)",
              "การกระทำของผู้ใช้ เช่น การกดปุ่ม",
              "ผลลัพธ์สุดท้าย"
            ],
            "correctIndex": 1,
            "explanation": "ถูกต้อง! Given คือเงื่อนไขเริ่มต้น (Preconditions) เช่น 'Given the user is logged in' ก่อนที่จะเกิดเหตุการณ์ถัดไป"
          },
          {
            "question": "คำว่า 'Happy Path' ในการทดสอบระบบหมายถึงอะไร?",
            "options": [
              "เส้นทางการทำงานปกติที่ผู้ใช้กรอกข้อมูลถูกต้องครบถ้วนและไม่มีข้อผิดพลาดใดๆ เกิดขึ้น",
              "การที่โปรแกรมเมอร์ทำงานอย่างมีความสุข",
              "การตรวจหาบั๊กที่ยากที่สุด",
              "การปิดระบบเพื่อปรับปรุง"
            ],
            "correctIndex": 0,
            "explanation": "ถูกต้อง! Happy path คือสถานการณ์ที่ทุกอย่างราบรื่นตามแผน เป็นกรณีแรกสุดที่ต้องพัฒนาและทดสอบให้ผ่าน"
          },
          {
            "question": "คำว่า 'Scope Creep' เป็นอันตรายต่อโปรเจกต์อย่างไร?",
            "options": [
              "ทำให้โค้ดสั้นเกินไป",
              "ทำให้ขอบเขตงานขยายกว้างขึ้นเรื่อยๆ จนเกินงบประมาณและส่งงานไม่ทันกำหนด",
              "ทำให้ฐานข้อมูลทำงานช้า",
              "ทำให้ไม่มีใครยอมเขียนเอกสาร"
            ],
            "correctIndex": 1,
            "explanation": "ถูกต้อง! Scope creep คือการที่งานค่อยๆ งอกเพิ่มระหว่างสปรินต์โดยไม่ปรับลดงานอื่นหรือขยายเวลา ทำให้ทีมเสี่ยงต่อการ Burnout และงานล่าช้า"
          }
        ]
      },
      {
        "id": "role-pm-02",
        "title": "Unit 2: Bug Triaging: Severity vs Priority & QA Sign-off (การคัดกรองบั๊กและการตรวจรับงาน)",
        "summary": "การแยกแยะความต่างระหว่าง Severity (ความรุนแรงเชิงเทคนิค) กับ Priority (ความเร่งด่วนทางธุรกิจ) และสำนวนการปฏิเสธไม่ให้ปล่อยของเมื่อมี Blocker",
        "formula": "While this defect has [High/Low Severity], its Priority is [High/Low] because [Business Context / Workaround Available].",
        "explanation": "### 1. ศิลปะการจัดลำดับความสำคัญของ Bug\nหนึ่งในจุดขัดแย้งที่พบบ่อยที่สุดระหว่างฝ่ายเทคนิคกับฝ่ายธุรกิจ คือการแยกไม่ออกระหว่าง **\"Severity\"** (ระบบพังรุนแรงแค่ไหน) กับ **\"Priority\"** (ต้องรีบแก้ก่อนหลังแค่ไหน)\n\n### 📊 เมทริกซ์ Severity vs Priority\n| ตัวอย่างสถานการณ์จริง | Severity (ความรุนแรง) | Priority (ความสำคัญธุรกิจ) | คำอธิบาย |\n|---|---|---|---|\n| **โลโก้บริษัทสะกดผิดบนหน้าแรกเว็บ** | 🟢 Low (ระบบไม่พัง) | 🔴 High (กระทบภาพลักษณ์แบรนด์ร้ายแรง) | ต้องรีบแก้ทันทีแม้ทางเทคนิคจะไม่เกิด Error |\n| **ฟังก์ชันพิมพ์รายงานยุคเก่า Crash ถ้าดึงข้อมูล 10 ปีย้อนหลัง** | 🔴 High/Critical (เซิร์ฟเวอร์ตาย) | 🟢 Low (แทบไม่มีใครใช้ฟีเจอร์นี้แล้ว) | มีความรุนแรงสูง แต่ผลกระทบต่อผู้ใช้น้อยมาก |\n\n### 🛠️ โครงสร้างประโยคมาตรฐาน\n1. **การคัดค้านไม่ให้ Deploy เพราะติด Blocker:**\n   - *\"We cannot sign off on this release candidate because of a P0 blocker in the checkout flow.\"*\n2. **การอธิบายว่ามีวิธีแก้ปัญหาขัดตาทัพ (Workaround):**\n   - *\"While the bug causes a 500 error, there is an easy workaround, so we can downgrade its priority to P2.\"*\n3. **การขอความเห็นชอบตรวจรับงาน:**\n   - *\"All regression test cases have passed on staging; QA is ready to sign off on the production rollout.\"*",
        "examples": [
          {
            "en": "We downgraded the issue from Critical to Major because it only affects a legacy browser version with fewer than 0.1% users.",
            "th": "เราได้ลดระดับความสำคัญของปัญหาจากระดับวิกฤติลงมาเป็นระดับรอง เนื่องจากส่งผลเฉพาะบราวเซอร์รุ่นเก่าที่มีผู้ใช้ไม่ถึง 0.1%",
            "audio": "We downgraded the issue from Critical to Major because it only affects a legacy browser version with fewer than 0.1% users."
          },
          {
            "en": "QA cannot provide a green light for release until the intermittent payment timeout is resolved.",
            "th": "ทีม QA ไม่สามารถอนุมัติให้ปล่อยเวอร์ชันนี้ได้ จนกว่าปัญหาเรื่อง Payment Timeout ที่เป็นๆ หายๆ จะได้รับการแก้ไข",
            "audio": "QA cannot provide a green light for release until the intermittent payment timeout is resolved."
          },
          {
            "en": "Is there a feasible workaround for the customer support team while we prepare a hotfix?",
            "th": "มีวิธีแก้ปัญหาชั่วคราว (Workaround) ที่พอใช้งานได้สำหรับทีมบริการลูกค้าในระหว่างที่เรากำลังเตรียมตัวแก้ด่วนหรือไม่",
            "audio": "Is there a feasible workaround for the customer support team while we prepare a hotfix?"
          }
        ],
        "quickCheck": [
          {
            "question": "หากโลโก้บริษัทบนหน้าโฮมเพจสะกดชื่อผิด จะจัดระดับอย่างไรตามหลัก Bug Triage?",
            "options": [
              "High Severity, Low Priority",
              "Low Severity, High Priority (ไม่กระทบการทำงานของระบบ แต่ส่งผลต่อความน่าเชื่อถือทางธุรกิจอย่างรุนแรง)",
              "Critical Severity, Critical Priority",
              "ไม่ต้องแก้ไข ปล่อยผ่านได้"
            ],
            "correctIndex": 1,
            "explanation": "ถูกต้อง! Severity วัดผลกระทบทางเทคนิค (หน้าเว็บไม่พัง จึงเป็น Low) แต่ Priority วัดความเร่งด่วนทางธุรกิจ (กระทบภาพลักษณ์ ต้องรีบแก้ทันที จึงเป็น High)"
          },
          {
            "question": "คำว่า 'Workaround' ในบริบทของการแก้ปัญหาทางเทคนิคหมายถึงอะไร?",
            "options": [
              "การทำงานล่วงเวลา",
              "วิธีการหลีกเลี่ยงหรือแก้ปัญหาชั่วคราว เพื่อให้ผู้ใช้ทำงานต่อไปได้ก่อนที่จะมีตัวแก้ถาวร",
              "การลาพักร้อน",
              "การเพิ่มพนักงานใหม่"
            ],
            "correctIndex": 1,
            "explanation": "ถูกต้อง! Workaround คือทางออกชั่วคราวที่ช่วยบรรเทาผลกระทบของผู้ใช้ในระหว่างที่ทีมวิศวกรกำลังพัฒนาตัวแก้จริง (Patch/Hotfix)"
          },
          {
            "question": "เมื่อทีม QA พูดว่า 'We cannot sign off on this release' หมายความว่าอย่างไร?",
            "options": [
              "ทีม QA ไม่ยอมเซ็นชื่อลงในกระดาษ",
              "ทีม QA ยังไม่อนุมัติให้ปล่อยเวอร์ชันนี้ขึ้นสู่ Production เนื่องจากยังมีข้อผิดพลาดที่ร้ายแรงอยู่",
              "ทีม QA ขอลางานทั้งทีม",
              "การทดสอบเสร็จสมบูรณ์ 100% แล้ว"
            ],
            "correctIndex": 1,
            "explanation": "ถูกต้อง! QA Sign-off หมายถึงการตรวจรับรองความพร้อม หาก QA ปฏิเสธไม่ Sign off หมายความว่ามีบั๊กระดับ Blocker ที่ห้ามปล่อยเด็ดขาด"
          }
        ]
      }
    ]
  }
];

if (typeof window !== "undefined") {
  window.roleTracksData = roleTracksData;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = roleTracksData;
}
