/**
 * EngMastery: Daily Standup & Technical Meeting Simulator Data
 * Complete real-world technical communication framework for Developers & DevOps Engineers
 */

window.STANDUP_TEMPLATES = {
  yesterdayActions: [
    {
      id: "fixed_k8s_crash",
      label: "แก้บั๊ก Pod ใน Kubernetes แครช (OOM / CrashLoopBackOff)",
      text: "investigated the Kubernetes pod CrashLoopBackOff issue and fixed the container memory limit in the Helm deployment"
    },
    {
      id: "investigated_latency",
      label: "ไล่เช็คความช้าของระบบฐานข้อมูล (Database Latency)",
      text: "investigated the database latency spike and added composite indexes to speed up the slow query"
    },
    {
      id: "deployed_release",
      label: "ปล่อยรีลีสใหม่ขึ้นโปรดักชัน (Deploy Production Release)",
      text: "deployed the new microservice release to production and verified the canary metrics"
    },
    {
      id: "migrated_db",
      label: "ย้ายโครงสร้างฐานข้อมูล (Database Migration)",
      text: "executed the zero-downtime database migration and backfilled the customer schema records"
    },
    {
      id: "ci_cd_pipeline",
      label: "ปรับแต่ง CI/CD Pipeline อัตโนมัติ (Automated Pipeline)",
      text: "optimized our GitHub Actions CI/CD pipeline, reducing the total build time by 45%"
    },
    {
      id: "refactored_code",
      label: "รีแฟกเตอร์โค้ดระบบหลังบ้าน (Backend Code Refactoring)",
      text: "refactored the authentication middleware to decouple the token verification from database queries"
    },
    {
      id: "terraform_infra",
      label: "สร้างคลาวด์ Infrastructure ด้วย Terraform (Terraform IaC)",
      text: "provisioned the staging VPC peering and managed Redis cluster using Terraform modules"
    },
    {
      id: "unit_tests",
      label: "เขียน Unit & Integration Tests (Testing & Coverage)",
      text: "wrote comprehensive unit and integration tests, increasing our test coverage to over 85%"
    }
  ],
  todayActions: [
    {
      id: "continue_feature",
      label: "ลุยทำฟีเจอร์ต่อให้เสร็จ (Finish Feature & Open PR)",
      text: "continue implementing the payment webhook handler and open a pull request for review"
    },
    {
      id: "sync_team",
      label: "ประชุมซิงก์สเปกกับทีม (Sync with Team on Specs)",
      text: "sync up with the frontend team to finalize the GraphQL query schema and error format"
    },
    {
      id: "troubleshoot_cluster",
      label: "ไล่แก้ปัญหาบน Staging (Troubleshoot Staging Cluster)",
      text: "deep-dive into the intermittent connection timeout on the staging Kubernetes cluster"
    },
    {
      id: "security_patch",
      label: "อัปเดตแพตช์ความปลอดภัย (Apply Security Patches)",
      text: "update our base Docker images and patch the high-severity CVE dependencies"
    },
    {
      id: "load_test",
      label: "รันทดสอบโหลดระบบ (Run Load & Stress Tests)",
      text: "conduct load testing using k6 to benchmark API performance under 5,000 requests per second"
    },
    {
      id: "review_prs",
      label: "ช่วยรีวิวโค้ดและ PRs ในทีม (Review Team Pull Requests)",
      text: "review pending pull requests from the team and assist QA with staging verification"
    },
    {
      id: "monitor_logs",
      label: "มอนิเตอร์ระบบหลังรีลีส (Monitor Grafana/Datadog Logs)",
      text: "monitor application metrics in Datadog and tune the Prometheus alert thresholds"
    }
  ],
  blockerOptions: [
    {
      id: "no_blockers",
      label: "✅ ไม่มีปัญหาติดขัด (No Blockers, on track)",
      text: "No blockers on my end, everything is progressing smoothly according to plan."
    },
    {
      id: "iam_permissions",
      label: "⚠️ ติดเรื่องสิทธิ์การเข้าถึงคลาวด์ (Waiting on IAM/Cloud Permissions)",
      text: "I'm currently blocked by missing IAM permissions for the Cloud Storage bucket; I've already pinged the DevOps admin."
    },
    {
      id: "pr_review",
      label: "⚠️ รอรีวิวโค้ดก่อน Merged (Waiting for Senior PR Review)",
      text: "I'm waiting for a senior code review on PR #402 before I can deploy it to staging."
    },
    {
      id: "api_dependency",
      label: "⚠️ ติดระบบภายนอกหรือ Third-party API ล่ม (Third-Party API Downtime)",
      text: "I'm blocked by the third-party payment sandbox API which has been throwing 503 errors since morning."
    },
    {
      id: "qa_signoff",
      label: "⚠️ รอทีม QA ตรวจสอบยืนยัน (Waiting on QA Regression Sign-off)",
      text: "Waiting for the QA team to complete regression testing before we can green-light the production rollout."
    }
  ]
};

window.STANDUP_SCENARIOS = [
  {
    id: "standup-sc-01",
    title: "Kubernetes Cluster Upgrade & Pod Rescheduling",
    titleTh: "การอัปเกรดเวอร์ชัน K8s และย้าย Pod ข้ามโหนด",
    role: "DevOps / Infrastructure Engineer",
    level: "Intermediate",
    badge: "Cloud & DevOps",
    yesterday: {
      en: "Yesterday, I drained worker node pool A and initiated the Kubernetes cluster upgrade to version 1.30 on staging.",
      th: "เมื่อวานผมทำการ Drain โหนดพูล A และเริ่มขั้นตอนการอัปเกรด K8s คลัสเตอร์เป็นเวอร์ชัน 1.30 บน Staging เรียบร้อยแล้วครับ",
      tip: "คำว่า 'drain' ใน K8s หมายถึงการย้าย Pod ออกจากโหนดอย่างปลอดภัยก่อนปิดซ่อมบำรุง"
    },
    today: {
      en: "Today, I will verify the CoreDNS latency, inspect the ingress controllers, and prepare the node pool B migration.",
      th: "วันนี้ผมจะตรวจสอบ Latency ของ CoreDNS ตรวจ Ingress Controller และเตรียมขั้นตอนย้ายโหนดพูล B ต่อครับ",
      tip: "ใช้ 'I will verify...' หรือ 'I plan to inspect...' แสดงความชัดเจนในเป้าหมายวันนี้"
    },
    blocker: {
      en: "No major blockers on my side, but I would like to sync with the backend team regarding the webhook timeout.",
      th: "ไม่มีบล็อคเกอร์ร้ายแรงอะไรครับ แต่อยากขอซิงก์กับทีมแบ็กเอนด์สั้นๆ เรื่อง Webhook Timeout ครับ",
      tip: "ถ้าอยากคุยนอกรอบ ให้ใช้ 'I would like to sync with [team] regarding [topic]'"
    },
    fullSpeech: "Good morning team. Yesterday, I drained worker node pool A and initiated the Kubernetes cluster upgrade to version 1.30 on staging. Today, I will verify the CoreDNS latency, inspect the ingress controllers, and prepare the node pool B migration. No major blockers on my side, but I would like to sync with the backend team regarding the webhook timeout right after this call.",
    keyVocab: [
      { word: "drain", ipa: "/dreɪn/", pos: "v.", th: "เคลียร์และย้าย Pod ออกจากเซิร์ฟเวอร์" },
      { word: "ingress", ipa: "/ˈɪn.ɡres/", pos: "n.", th: "ประตูทางเข้าทราฟฟิกของคลัสเตอร์ K8s" },
      { word: "latency", ipa: "/ˈleɪ.tən.si/", pos: "n.", th: "ความหน่วงเวลาในการส่งข้อมูล" }
    ],
    xpReward: 35
  },
  {
    id: "standup-sc-02",
    title: "Critical Production Hotfix & Post-Mortem",
    titleTh: "รับมือเหตุการณ์ด่วนระบบล่มและแก้ปัญหาขึ้นโปรดักชัน",
    role: "Site Reliability Engineer / Tech Lead",
    level: "Advanced",
    badge: "Incident Response",
    yesterday: {
      en: "Yesterday, we dealt with a high-severity incident where the database connection pool got exhausted, and I deployed an emergency hotfix at 3 PM.",
      th: "เมื่อวานเราเจอกับเหตุด่วนระดับรุนแรงเรื่อง Connection Pool ของฐานข้อมูลเต็ม และผมได้ปล่อย Hotfix ฉุกเฉินไปตอนบ่ายสามครับ",
      tip: "ใช้ 'dealt with' (รับมือกับ) และ 'deployed an emergency hotfix' แสดงการแก้ปัญหาเฉพาะหน้าอย่างมืออาชีพ"
    },
    today: {
      en: "Today, I am analyzing the Datadog trace logs, writing the blameless post-mortem report, and adding an automated alert threshold.",
      th: "วันนี้ผมกำลังวิเคราะห์ Trace log ใน Datadog เขียนรายงาน Post-mortem แบบไม่จับผิด และตั้ง Alert แจ้งเตือนอัตโนมัติครับ",
      tip: "คำว่า 'blameless post-mortem' เป็นคำสากลในวัฒนธรรม DevOps ที่เน้นแก้ที่ระบบ ไม่ใช่โทษบุคคล"
    },
    blocker: {
      en: "No blockers, everything is currently stable and error rates have returned to normal baseline levels.",
      th: "ไม่มีปัญหาติดขัดครับ ตอนนี้ทุกอย่างเสถียรดีและอัตรา Error กลับสู่ระดับปกติแล้วครับ",
      tip: "ประโยคมาตรฐานเมื่อสถานการณ์กลับสู่ภาวะปกติ: 'returned to normal baseline levels'"
    },
    fullSpeech: "Hi everyone. Yesterday, we dealt with a high-severity incident where the database connection pool got exhausted, and I deployed an emergency hotfix at 3 PM. Today, I am analyzing the Datadog trace logs, writing the blameless post-mortem report, and adding an automated alert threshold. No blockers, everything is currently stable and error rates have returned to normal baseline levels.",
    keyVocab: [
      { word: "exhausted", ipa: "/ɪɡˈzɔː.stɪd/", pos: "adj.", th: "หมดเกลี้ยง / ทรัพยากรเต็มขีดจำกัด" },
      { word: "hotfix", ipa: "/ˈhɒt.fɪks/", pos: "n.", th: "การแก้บั๊กด่วนขึ้น Production ทันที" },
      { word: "baseline", ipa: "/ˈbeɪs.laɪn/", pos: "n.", th: "ค่าเฉลี่ยมาตรฐานระดับปกติ" }
    ],
    xpReward: 35
  },
  {
    id: "standup-sc-03",
    title: "CI/CD Pipeline Automation & Build Time Optimization",
    titleTh: "การทำระบบไปป์ไลน์อัตโนมัติและลดเวลาการบิลด์",
    role: "DevOps Engineer",
    level: "Intermediate",
    badge: "CI/CD & Docker",
    yesterday: {
      en: "Yesterday, I reworked our Docker multi-stage build files and implemented dependency layer caching in GitHub Actions.",
      th: "เมื่อวานผมเขียน Dockerfile แบบ Multi-stage ใหม่ และทำ Layer Caching สำหรับ Dependencies ใน GitHub Actions ครับ",
      tip: "คำว่า 'multi-stage build' และ 'layer caching' เป็นคีย์เวิร์ดสำคัญของ Docker"
    },
    today: {
      en: "Today, I am benchmarking the pipeline runtime and rolling out the updated workflow to all secondary repositories.",
      th: "วันนี้ผมกำลังวัดเวลาประมวลผลไปป์ไลน์ และทยอยนำ Workflow ใหม่นี้ไปใช้กับ Repository ย่อยอื่นๆ ทั้งหมดครับ",
      tip: "ใช้ 'benchmarking' หมายถึงการจับเวลาเปรียบเทียบเชิงประสิทธิภาพ"
    },
    blocker: {
      en: "I am temporarily blocked by the organization runner quota; I've requested additional concurrency from the IT manager.",
      th: "ตอนนี้ติดเรื่องโควตา Runner ขององค์กรชั่วคราวครับ ผมได้ขอเพิ่มจำนวน Concurrency จากผู้จัดการ IT ไปแล้ว",
      tip: "บอกปัญหาพร้อมสิ่งที่ทำไปแล้ว: 'I am blocked by... I've requested...'"
    },
    fullSpeech: "Good morning. Yesterday, I reworked our Docker multi-stage build files and implemented dependency layer caching in GitHub Actions. Today, I am benchmarking the pipeline runtime and rolling out the updated workflow to all secondary repositories. I am temporarily blocked by the organization runner quota; I've requested additional concurrency from the IT manager.",
    keyVocab: [
      { word: "benchmark", ipa: "/ˈbentʃ.mɑːrk/", pos: "v.", th: "วัดและเปรียบเทียบประสิทธิภาพ" },
      { word: "concurrency", ipa: "/kənˈkɜːr.ən.si/", pos: "n.", th: "การประมวลผลพร้อมกันหลายงาน" },
      { word: "rework", ipa: "/ˌriːˈwɜːrk/", pos: "v.", th: "นำกลับมาแก้ไขหรือปรับโครงสร้างใหม่" }
    ],
    xpReward: 35
  },
  {
    id: "standup-sc-04",
    title: "Database Latency & Query Index Tuning",
    titleTh: "การแก้ปัญหาความช้าของระบบฐานข้อมูลและสร้าง Index",
    role: "Backend / Database Engineer",
    level: "Intermediate",
    badge: "Database & Performance",
    yesterday: {
      en: "Yesterday, I investigated the high CPU utilization on our PostgreSQL primary and identified an unindexed sequential scan.",
      th: "เมื่อวานผมไล่เช็คสาเหตุที่ CPU บน PostgreSQL ตัวหลักพุ่งสูง และตรวจพบการสแกนแบบทั้งตาราง (Sequential Scan) ที่ไม่มี Index ครับ",
      tip: "พูดว่า 'identified an unindexed sequential scan' ฟังดูเป็นมืออาชีพกว่า 'found slow SQL'"
    },
    today: {
      en: "Today, I plan to run the index creation concurrently on production and verify query response times using pg_stat_statements.",
      th: "วันนี้ผมวางแผนจะสร้าง Index แบบ Concurrently บน Production และตรวจสอบเวลาตอบสนองของคิวรีผ่าน pg_stat_statements ครับ",
      tip: "ใช้ 'concurrently' เน้นย้ำว่าเราทำแบบไม่ล็อกตาราง ไม่กระทบลูกค้า"
    },
    blocker: {
      en: "No blockers on my end. The query execution time has already dropped from 3 seconds down to under 50 milliseconds in staging.",
      th: "ไม่มีบล็อคเกอร์ครับ ใน Staging เวลาประมวลผลลดลงจาก 3 วินาทีเหลือไม่ถึง 50 มิลลิวินาทีแล้วครับ",
      tip: "การอ้างอิงตัวเลขผลลัพธ์ (เช่น 3s down to 50ms) ทำให้ Standup น่าประทับใจมาก"
    },
    fullSpeech: "Hey team. Yesterday, I investigated the high CPU utilization on our PostgreSQL primary and identified an unindexed sequential scan. Today, I plan to run the index creation concurrently on production and verify query response times using pg_stat_statements. No blockers on my end. The query execution time has already dropped from 3 seconds down to under 50 milliseconds in staging.",
    keyVocab: [
      { word: "sequential", ipa: "/sɪˈkwen.ʃəl/", pos: "adj.", th: "ตามลำดับ (Sequential scan = อ่านทีละแถวตั้งแต่ต้นจนจบ)" },
      { word: "concurrently", ipa: "/kənˈkʌr.ənt.li/", pos: "adv.", th: "ควบคู่กันไปโดยไม่ล็อกหรือหยุดการทำงานอื่น" },
      { word: "utilization", ipa: "/ˌjuː.təl.əˈzeɪ.ʃən/", pos: "n.", th: "อัตราการถูกใช้งานของทรัพยากร" }
    ],
    xpReward: 35
  },
  {
    id: "standup-sc-05",
    title: "Terraform Infrastructure as Code & Cloud Drift",
    titleTh: "การจัดการโครงสร้างพื้นฐานคลาวด์ด้วย Terraform",
    role: "Cloud / Platform Engineer",
    level: "Intermediate",
    badge: "Cloud Infrastructure",
    yesterday: {
      en: "Yesterday, I resolved the infrastructure drift between our Terraform state file and the active GCP cloud resources.",
      th: "เมื่อวานผมจัดการปัญหา Drift (ความไม่ตรงกัน) ระหว่างไฟล์ State ของ Terraform กับทรัพยากรจริงบน GCP เรียบร้อยแล้วครับ",
      tip: "คำว่า 'infrastructure drift' หมายถึงของบน Cloud เปลี่ยนไปไม่ตรงกับโค้ด Terraform"
    },
    today: {
      en: "Today, I'll be modularizing the security group rules and setting up automated Terraform plan checks in our PR review bot.",
      th: "วันนี้ผมจะแยกโมดูลของกฎ Security Group และติดตั้งบอทตรวจ Terraform Plan อัตโนมัติใน PR ครับ",
      tip: "ใช้ 'I'll be modularizing...' แสดงงานที่กำลังลงมือทำอย่างต่อเนื่องในวันนี้"
    },
    blocker: {
      en: "I'm waiting on approval from the security architect for the cross-region VPC peering configuration.",
      th: "ตอนนี้กำลังรอความเห็นชอบจาก Security Architect เรื่องการเชื่อมต่อ VPC ข้าม Region อยู่ครับ",
      tip: "ใช้ 'waiting on approval from [role] for [item]'"
    },
    fullSpeech: "Good morning everyone. Yesterday, I resolved the infrastructure drift between our Terraform state file and the active GCP cloud resources. Today, I'll be modularizing the security group rules and setting up automated Terraform plan checks in our PR review bot. I'm waiting on approval from the security architect for the cross-region VPC peering configuration.",
    keyVocab: [
      { word: "drift", ipa: "/drɪft/", pos: "n.", th: "ความคลาดเคลื่อนระหว่างการตั้งค่าในโค้ดกับระบบจริง" },
      { word: "modularize", ipa: "/ˈmɒdʒ.ə.lər.aɪz/", pos: "v.", th: "แยกย่อยเป็นโมดูลเพื่อให้ใช้ซ้ำได้ง่าย" },
      { word: "peering", ipa: "/ˈpɪə.rɪŋ/", pos: "n.", th: "การเชื่อมต่อโครงข่ายส่วนตัวระหว่างสองเครือข่ายเข้าด้วยกัน" }
    ],
    xpReward: 35
  },
  {
    id: "standup-sc-06",
    title: "Feature Development, API Endpoints & Unit Tests",
    titleTh: "การพัฒนาฟีเจอร์ใหม่ ทำ Endpoint และเขียนเทส",
    role: "Full-Stack / Backend Developer",
    level: "Beginner - Intermediate",
    badge: "Feature Delivery",
    yesterday: {
      en: "Yesterday, I completed the customer billing export endpoint and handled pagination for large datasets.",
      th: "เมื่อวานผมทำ API Endpoint สำหรับ Export บิลค่าใช้จ่ายของลูกค้าเสร็จแล้ว และจัดการเรื่อง Pagination สำหรับชุดข้อมูลขนาดใหญ่แล้วครับ",
      tip: "ใช้ 'handled pagination for large datasets' บ่งบอกถึงการคำนึงถึงประสิทธิภาพ"
    },
    today: {
      en: "Today, I will write the automated unit tests, document the Swagger API specs, and open the pull request for review.",
      th: "วันนี้ผมจะเขียน Unit Test อัตโนมัติ เขียนเอกสาร Swagger API และเปิด PR เพื่อส่งให้ทีมรีวิวครับ",
      tip: "สูตร 3 จังหวะ: 'write tests, document specs, open PR'"
    },
    blocker: {
      en: "No blockers on my end. I should have the PR ready by 2 PM for the team to take a look.",
      th: "ไม่มีอะไรติดขัดครับ คาดว่า PR น่าจะพร้อมให้ทีมตรวจดูได้ช่วงบ่ายสองโมงครับ",
      tip: "การบอกเวลาส่งงานคร่าวๆ เช่น 'ready by 2 PM' สร้างความมั่นใจให้ PM และทีม"
    },
    fullSpeech: "Morning all. Yesterday, I completed the customer billing export endpoint and handled pagination for large datasets. Today, I will write the automated unit tests, document the Swagger API specs, and open the pull request for review. No blockers on my end. I should have the PR ready by 2 PM for the team to take a look.",
    keyVocab: [
      { word: "endpoint", ipa: "/ˈend.pɔɪnt/", pos: "n.", th: "จุดเชื่อมต่อปลายทางของ Web API" },
      { word: "pagination", ipa: "/ˌpædʒ.əˈneɪ.ʃən/", pos: "n.", th: "การแบ่งการแสดงผลข้อมูลออกเป็นหน้าๆ" },
      { word: "dataset", ipa: "/ˈdeɪ.tə.set/", pos: "n.", th: "ชุดข้อมูล" }
    ],
    xpReward: 35
  },
  {
    id: "standup-sc-07",
    title: "Sprint Planning: Story Estimation & Scope Pushback",
    titleTh: "การประชุมวางแผนสปรินต์: การประเมิน Story Points และการต่อรองขอบเขตงานอย่างมืออาชีพ",
    role: "Senior Engineer / Tech Lead",
    level: "Intermediate - Advanced",
    badge: "Sprint Planning",
    yesterday: {
      en: "During backlog refinement, we reviewed the user story for OAuth2 social logins and identified three hidden backend dependencies.",
      th: "ช่วงกลั่นกรอง Backlog เมื่อวาน เราได้ตรวจสอบ User Story สำหรับการล็อกอินโซเชียล OAuth2 และพบว่ามี 3 ส่วนที่ผูกกับระบบหลังบ้านเดิมครับ",
      tip: "ใช้ 'identified hidden dependencies' เพื่อสื่อถึงการมองการณ์ไกลในเชิงสถาปัตยกรรม"
    },
    today: {
      en: "For this sprint, I estimate this story at 8 story points due to third-party rate limits, and I recommend breaking it down into two smaller deliverables.",
      th: "สำหรับสปรินต์นี้ ผมขอประเมินงานนี้ไว้ที่ 8 Story Points เนื่องจากมีเรื่อง Rate Limits ของภายนอก และขอเสนอให้ย่อยงานเป็น 2 เฟสย่อยครับ",
      tip: "สูตรประเมินงาน: 'I estimate this story at [X] points because [reason]'"
    },
    blocker: {
      en: "Given that two senior team members are on leave this sprint, committing to the full epic right now would risk our sprint goal, so let's defer the second half.",
      th: "เนื่องจากในสปรินต์นี้มีวิศวกรซีเนียร์ลาพักร้อน 2 ท่าน หากรับงานมหากาพย์นี้ทั้งก้อนจะเสี่ยงต่อเป้าหมายสปรินต์ จึงขอเสนอเลื่อนครึ่งหลังไปสปรินต์หน้าครับ",
      tip: "การปฏิเสธอย่างมืออาชีพ (Scope Pushback): ชี้แจงเรื่อง Capacity และขอ Defer งานบางส่วน"
    },
    fullSpeech: "Good morning team. During backlog refinement, we reviewed the user story for OAuth2 social logins and identified three hidden backend dependencies. For this sprint, I estimate this story at 8 story points due to third-party rate limits, and I recommend breaking it down into two smaller deliverables. Given that two senior team members are on leave this sprint, committing to the full epic right now would risk our sprint goal, so I suggest we defer the secondary provider to next sprint.",
    keyVocab: [
      { word: "dependency", ipa: "/dɪˈpen.dən.si/", pos: "n.", th: "สิ่งที่ต้องพึ่งพาหรือขึ้นต่อกัน" },
      { word: "deliverable", ipa: "/dɪˈlɪv.ər.ə.bəl/", pos: "n.", th: "ชิ้นงานหรือผลลัพธ์ที่ต้องส่งมอบ" },
      { word: "defer", ipa: "/dɪˈfɜːr/", pos: "v.", th: "เลื่อนเวลาออกไปก่อน" }
    ],
    xpReward: 40
  },
  {
    id: "standup-sc-08",
    title: "Sprint Retrospective: Celebrating Wins & Flaky Test Quarantine",
    titleTh: "การประชุมสรุปบทเรียนสปรินต์: การชื่นชมความสำเร็จและการจัดการหนี้เทคนิค Flaky Tests",
    role: "DevOps / Full-Stack Engineer",
    level: "Intermediate - Advanced",
    badge: "Sprint Retrospective",
    yesterday: {
      en: "What went really well this sprint was the automated preview environments on PRs, which accelerated QA sign-offs by over 30%.",
      th: "สิ่งที่ทำได้ยอดเยี่ยมมากในสปรินต์นี้คือระบบ Automated Preview บน PR ซึ่งช่วยให้ทีม QA ตรวจรับงานได้เร็วขึ้นกว่า 30% ครับ",
      tip: "เริ่ม Retro ด้วยสิ่งที่ดี (Positive Win) เพื่อสร้างบรรยากาศจิตวิทยาที่ปลอดภัย (Psychological Safety)"
    },
    today: {
      en: "What could be improved is our end-to-end test suite; intermittent flaky tests caused false-positive pipeline failures four times this week.",
      th: "สิ่งที่ควรปรับปรุงคือชุดทดสอบ E2E ครับ มี Flaky Tests ที่ติด ๆ ดับ ๆ ทำให้ไปป์ไลน์แจ้งเตือนล้มเหลวแบบไม่จริงถึง 4 ครั้งในสัปดาห์นี้",
      tip: "ชี้ปัญหาที่ระบบ: 'intermittent flaky tests caused false-positive failures'"
    },
    blocker: {
      en: "My proposed action item is to dedicate one technical debt ticket next sprint to quarantine and refactor those three unstable test cases.",
      th: "ข้อเสนอแนะ Action Item ของผมคือขอกำหนดการ์ด Tech Debt 1 ใบในสปรินต์ถัดไป เพื่อแยกกักบริเวณ (Quarantine) และรีแฟกเตอร์ 3 เทสต์เคสนั้นใหม่ครับ",
      tip: "จบด้วยรูปธรรม (Concrete Action Item): 'dedicate one tech-debt ticket to quarantine and refactor'"
    },
    fullSpeech: "Hi everyone. Reflecting on our sprint: What went really well was the automated preview environments on pull requests, which accelerated QA sign-offs by over 30%. What could be improved is our end-to-end test suite; intermittent flaky tests caused false-positive pipeline failures four times this week. My proposed action item is to dedicate one technical debt ticket next sprint to quarantine and refactor those three unstable test cases.",
    keyVocab: [
      { word: "retrospective", ipa: "/ˌret.rəˈspek.tɪv/", pos: "n.", th: "การประชุมทบทวนถอดบทเรียนการทำงาน" },
      { word: "flaky", ipa: "/ˈfleɪ.ki/", pos: "adj.", th: "ไม่เสถียร (ผลทดสอบเปลี่ยนไปมาทั้งที่โค้ดเหมือนเดิม)" },
      { word: "quarantine", ipa: "/ˈkwɒr.ən.tiːn/", pos: "v.", th: "แยกกักกันเพื่อไม่ให้รบกวนส่วนอื่น" }
    ],
    xpReward: 40
  }
];

window.PREP_QA_SCENARIOS = [
  {
    id: "prep-01",
    question: "Why did the deployment fail in staging yesterday?",
    questionTh: "ทำไมการ Deploy บน Staging เมื่อวานถึงพังหรือล้มเหลว?",
    category: "Incident & Debugging",
    saviorOpener: "Good question. Let me walk you through what happened real quick...",
    saviorOpenerTh: "คำถามดีเลยครับ เดี๋ยวผมขออธิบายสิ่งที่เกิดขึ้นให้ฟังคร่าวๆ สักครู่ครับ...",
    prep: {
      point: {
        label: "Point (ตอบตรงประเด็นในประโยคแรก)",
        en: "The staging deployment failed because an environment secret was missing in the new Helm chart.",
        th: "การ Deploy ล้มเหลวเนื่องจากมี Secret ตัวแปรสภาพแวดล้อมตัวหนึ่งตกหล่นไปจาก Helm chart ตัวใหม่ครับ"
      },
      reason: {
        label: "Reason (บอกสาเหตุที่แท้จริง)",
        en: "The backend service was expecting the database password under a newly renamed secret key, which hadn't been synced to the staging Vault yet.",
        th: "ตัวเซอร์วิสหลังบ้านรอรับรหัสผ่านฐานข้อมูลจากชื่อคีย์ใหม่ ซึ่งตอนนั้นยังไม่ได้ซิงก์เข้าไปใน Vault ของ Staging ครับ"
      },
      example: {
        label: "Example/Action (สิ่งที่เราทำไปหรือแก้ไข)",
        en: "I patched the Helm values file locally, injected the missing secret, and re-triggered the pipeline.",
        th: "ผมได้แก้ไฟล์ Helm values นำเข้า Secret ที่ขาดไป และสั่งรันไปป์ไลน์ใหม่อีกครั้งครับ"
      },
      pointNext: {
        label: "Point/Next (สรุปผลและขั้นตอนถัดไป)",
        en: "The build passed cleanly, and the staging environment is now fully healthy and accessible.",
        th: "การ Build ผ่านฉลุยแล้ว และตอนนี้ระบบ Staging กลับมาสมบูรณ์พร้อมใช้งาน 100% แล้วครับ"
      }
    },
    fullAnswer: "Good question. Let me walk you through what happened real quick. The staging deployment failed because an environment secret was missing in the new Helm chart. The backend service was expecting the database password under a newly renamed secret key, which hadn't been synced to the staging Vault yet. I patched the Helm values file locally, injected the missing secret, and re-triggered the pipeline. The build passed cleanly, and the staging environment is now fully healthy and accessible.",
    keyTip: "อย่าตอบว่า 'I don't know' หรือเล่าเยิ่นเย้อ ให้ขึ้นด้วย Point ทันทีว่าอะไรพัง แล้วตบท้ายด้วย Action ที่แก้แล้ว"
  },
  {
    id: "prep-02",
    question: "Can we deploy this change to production before noon today?",
    questionTh: "เราสามารถปล่อยอัปเดตตัวนี้ขึ้น Production ก่อนเที่ยงวันนี้ได้ไหม?",
    category: "Release & Risk Management",
    saviorOpener: "Thanks for checking in. Let's look at our release readiness...",
    saviorOpenerTh: "ขอบคุณที่ถามครับ ขอเช็คความพร้อมของรีลีสสักนิดนะครับ...",
    prep: {
      point: {
        label: "Point (ตอบความเห็นตรงๆ)",
        en: "I would strongly recommend holding off until 2:00 PM after peak business hours.",
        th: "ผมขอแนะนำให้ชะลอไปปล่อยตอนบ่ายสองหลังช่วงทราฟฟิกพีกจะปลอดภัยกว่าครับ"
      },
      reason: {
        label: "Reason (บอกเหตุผลเรื่องความเสี่ยง)",
        en: "While staging tests passed, this release alters the user database schema and requires a brief table lock.",
        th: "แม้จะผ่านการเทสบน Staging แล้ว แต่การแก้รอบนี้มีการปรับ Schema ของฐานข้อมูลซึ่งต้องล็อกตารางครู่หนึ่งครับ"
      },
      example: {
        label: "Example/Action (หลักฐานหรือการเตรียมพร้อม)",
        en: "Deploying during lunch hour when order volume is at its peak introduces unnecessary risk if a rollback is needed.",
        th: "การ Deploy ตอนเที่ยงซึ่งยอดสั่งซื้อหนาแน่นที่สุดจะเพิ่มความเสี่ยงโดยไม่จำเป็นหากต้อง Rollback ครับ"
      },
      pointNext: {
        label: "Point/Next (ข้อสรุปและแนวทางปฏิบัติ)",
        en: "If we deploy at 2:00 PM, traffic drops by 60%, and I will be on standby to monitor error rates in real time.",
        th: "ถ้าขึ้นตอนบ่ายสอง ทราฟฟิกจะลดลงไปถึง 60% และผมจะสแตนด์บายคอยดูอัตรา Error แบบเรียลไทม์ให้ทันทีครับ"
      }
    },
    fullAnswer: "Thanks for checking in. Let's look at our release readiness. I would strongly recommend holding off until 2:00 PM after peak business hours. While staging tests passed, this release alters the user database schema and requires a brief table lock. Deploying during lunch hour when order volume is at its peak introduces unnecessary risk if a rollback is needed. If we deploy at 2:00 PM, traffic drops by 60%, and I will be on standby to monitor error rates in real time.",
    keyTip: "เมื่อต้องปฏิเสธหรือขอเลื่อน ให้มีเหตุผลเชิงสถิติ (Traffic drops by 60%) และเสนอเวลาใหม่ที่ชัดเจนเสมอ"
  },
  {
    id: "prep-03",
    question: "Why is this ticket taking longer than our initial estimate?",
    questionTh: "ทำไมงานในการ์ดนี้ถึงใช้เวลานานกว่าที่เราประเมินไว้แต่แรก?",
    category: "Estimation & Blockers",
    saviorOpener: "That's a fair question. Let me give you the full context on where things stand...",
    saviorOpenerTh: "เป็นคำถามที่ดีครับ ขอผมให้ข้อมูลความคืบหน้าและสิ่งที่พบเพิ่มเติมนะครับ...",
    prep: {
      point: {
        label: "Point (สรุปปัญหาที่เจอจริง)",
        en: "We uncovered legacy edge cases in the data layer that weren't captured in the original ticket requirements.",
        th: "เราตรวจพบเคสตกค้างจากระบบเก่าในชั้นข้อมูล ซึ่งไม่ได้ระบุไว้ใน Requirements ดั้งเดิมของการ์ดนี้ครับ"
      },
      reason: {
        label: "Reason (อธิบายสาเหตุเชิงเทคนิค)",
        en: "Over 15% of historical user records have null values in the newly required telephone field, which broke the serialization logic.",
        th: "กว่า 15% ของข้อมูลลูกค้าเก่าในระบบมีค่าว่างในฟิลด์เบอร์โทรศัพท์ใหม่ ซึ่งทำให้ตรรกะ Serialization เออเร่อครับ"
      },
      example: {
        label: "Example/Action (สิ่งที่เรากำลังแก้ไข)",
        en: "I wrote a database sanitization script and added a fallback handler so the API won't crash on incomplete data.",
        th: "ผมได้เขียนสคริปต์กรองข้อมูลและเพิ่มตัวดัก Fallback เพื่อไม่ให้ API แครชเมื่อเจอข้อมูลที่ไม่สมบูรณ์แล้วครับ"
      },
      pointNext: {
        label: "Point/Next (กำหนดส่งงานใหม่)",
        en: "The fix is tested, and I am confident the entire PR will be ready for review by 4 PM today.",
        th: "การแก้ปัญหาได้รับการทดสอบเรียบร้อย และมั่นใจว่า PR ทั้งหมดจะพร้อมส่งรีวิวภายใน 4 โมงเย็นวันนี้แน่นอนครับ"
      }
    },
    fullAnswer: "That's a fair question. Let me give you the full context on where things stand. We uncovered legacy edge cases in the data layer that weren't captured in the original ticket requirements. Over 15% of historical user records have null values in the newly required telephone field, which broke the serialization logic. I wrote a database sanitization script and added a fallback handler so the API won't crash on incomplete data. The fix is tested, and I am confident the entire PR will be ready for review by 4 PM today.",
    keyTip: "อย่าแก้ตัว ให้ใช้คำว่า 'uncovered edge cases' (ตรวจพบเคสพิเศษ) แล้วระบุเวลาส่งงานใหม่ให้ชัดเจน"
  },
  {
    id: "prep-04",
    question: "What caused the high memory spike in our Kubernetes cluster?",
    questionTh: "อะไรเป็นสาเหตุที่ทำให้ Memory ใน Kubernetes คลัสเตอร์พุ่งสูงผิดปกติ?",
    category: "SRE & Performance",
    saviorOpener: "I investigated that metric alert this morning. Here is what we found...",
    saviorOpenerTh: "ผมไล่เช็คการแจ้งเตือนนี้ตั้งแต่เช้าแล้วครับ นี่คือสิ่งที่เราตรวจพบ...",
    prep: {
      point: {
        label: "Point (ฟันธงสาเหตุทันที)",
        en: "The memory spike was caused by unclosed HTTP connection streams in the PDF export worker pod.",
        th: "สาเหตุเกิดจากการไม่ปิด Stream ของการเชื่อมต่อ HTTP ใน Pod ของระบบ Export ไฟล์ PDF ครับ"
      },
      reason: {
        label: "Reason (อธิบายกลไกปัญหา)",
        en: "Under heavy batch requests, sockets were remaining open in memory until the pod hit its 4GB memory limit and triggered an OOMKill.",
        th: "พองานพร้อมกันเยอะๆ Socket ยังคงค้างอยู่ในแรมจน Pod ชนลิมิต 4GB และถูกระบบ K8s สั่งฆ่า (OOMKill) ครับ"
      },
      example: {
        label: "Example/Action (วิธีแก้ปัญหา)",
        en: "I implemented a proper connection pooling manager and added defer response.Body.Close() in the worker code.",
        th: "ผมได้ใส่ตัวจัดการ Connection Pool และเพิ่มคำสั่งปิด Response Body ในโค้ดของ Worker เรียบร้อยแล้วครับ"
      },
      pointNext: {
        label: "Point/Next (ผลลัพธ์หลังแก้ไข)",
        en: "Memory consumption has stabilized back down to 400 megabytes, and the load test ran smoothly.",
        th: "ปริมาณการใช้แรมกลับมานิ่งที่ 400 MB ตามปกติแล้ว และผลการทดสอบโหลดผ่านไปด้วยดีครับ"
      }
    },
    fullAnswer: "I investigated that metric alert this morning. Here is what we found. The memory spike was caused by unclosed HTTP connection streams in the PDF export worker pod. Under heavy batch requests, sockets were remaining open in memory until the pod hit its 4GB memory limit and triggered an OOMKill. I implemented a proper connection pooling manager and added defer response.Body.Close() in the worker code. Memory consumption has stabilized back down to 400 megabytes, and the load test ran smoothly.",
    keyTip: "ใช้ศัพท์เทคนิคที่กระชับและตรงจุด เช่น 'connection pooling', 'OOMKill', 'stabilized back down'"
  },
  {
    id: "prep-05",
    question: "If this release fails in production, what is our rollback strategy?",
    questionTh: "ถ้าการปล่อยระบบรอบนี้มีปัญหาบน Production เรามีแผน Rollback อย่างไร?",
    category: "DevOps & Safety",
    saviorOpener: "We've carefully architected this release with safety in mind. Here is our rollback plan...",
    saviorOpenerTh: "เราออกแบบรีลีสนี้โดยคำนึงถึงความปลอดภัยเป็นหลักอยู่แล้วครับ แผน Rollback มีดังนี้...",
    prep: {
      point: {
        label: "Point (ระยะเวลาและความมั่นใจ)",
        en: "We can execute a complete rollback within two minutes using our automated Canary deployment pipeline.",
        th: "เราสามารถสั่งย้อนระบบกลับคืนได้อย่างสมบูรณ์ภายใน 2 นาทีผ่านไปป์ไลน์แบบ Canary อัตโนมัติครับ"
      },
      reason: {
        label: "Reason (ทำไมถึงปลอดภัย)",
        en: "The database changes follow the expand-and-contract pattern, so the previous code container can safely read the new columns.",
        th: "การแก้ฐานข้อมูลใช้รูปแบบ Expand-and-contract โค้ดเวอร์ชันเก่าจึงสามารถอ่านข้อมูลในคอลัมน์ใหม่ได้โดยไม่พังครับ"
      },
      example: {
        label: "Example/Action (การซักซ้อมล่วงหน้า)",
        en: "We tested this exact revert sequence on staging yesterday, and traffic switched back instantaneously with zero downtime.",
        th: "เราได้ซักซ้อมขั้นตอนย้อนเวอร์ชันนี้บน Staging เมื่อวานแล้ว ทราฟฟิกสลับกลับทันทีโดยไม่มีช่วงหยุดชะงักเลยครับ"
      },
      pointNext: {
        label: "Point/Next (เงื่อนไขในการตัดสินใจ)",
        en: "If the production HTTP 500 error rate exceeds 1% during the first 10 minutes, ArgoCD will trigger the rollback automatically.",
        th: "ถ้าอัตรา Error 500 บนโปรดักชันเกิน 1% ในช่วง 10 นาทีแรก ArgoCD จะทำการ Rollback ให้โดยอัตโนมัติครับ"
      }
    },
    fullAnswer: "We've carefully architected this release with safety in mind. Here is our rollback plan. We can execute a complete rollback within two minutes using our automated Canary deployment pipeline. The database changes follow the expand-and-contract pattern, so the previous code container can safely read the new columns. We tested this exact revert sequence on staging yesterday, and traffic switched back instantaneously with zero downtime. If the production HTTP 500 error rate exceeds 1% during the first 10 minutes, ArgoCD will trigger the rollback automatically.",
    keyTip: "การมีเงื่อนไขชัดเจน (exceeds 1% error rate) แสดงถึงมาตรฐานทางวิศวกรรมระดับสูง"
  },
  {
    id: "prep-06",
    question: "Can we pull this urgent marketing request into the active sprint?",
    questionTh: "เราสามารถดึงคำขอเร่งด่วนของฝ่ายการตลาดแทรกเข้ามาในสปรินต์ที่กำลังดำเนินอยู่ได้ไหม?",
    category: "Sprint Planning & Scope Negotiation",
    saviorOpener: "I completely understand the business urgency. Let me walk you through our sprint capacity real quick...",
    saviorOpenerTh: "เข้าใจความเร่งด่วนทางธุรกิจเป็นอย่างดีครับ เดี๋ยวผมขออธิบายภาพรวม Capacity ของสปรินต์สักครู่ครับ...",
    prep: {
      point: {
        label: "Point (ชี้แจงจุดยืนและข้อจำกัดตรงไปตรงมา)",
        en: "We cannot take in this new feature without deferring an existing committed user story.",
        th: "เราไม่สามารถรับฟีเจอร์ใหม่นี้เข้ามาได้ เว้นแต่ว่าจะต้องสลับเอางานเดิมที่คอมมิตไว้แล้วออกไปครับ"
      },
      reason: {
        label: "Reason (บอกเหตุผลเรื่องขีดความสามารถ)",
        en: "Our current sprint velocity is at 100% capacity, and our backend team has zero buffer hours left.",
        th: "ขีดความสามารถ (Velocity) ของสปรินต์นี้เต็ม 100% แล้ว และทีมหลังบ้านไม่มีชั่วโมงสำรองเหลืออยู่เลยครับ"
      },
      example: {
        label: "Example/Trade-off (ผลกระทบที่เป็นรูปธรรมหากฝืนรับ)",
        en: "If we force this feature in, the payment security refactor will slip past our compliance deadline next Tuesday.",
        th: "หากเราฝืนดึงงานนี้เข้ามา งานความปลอดภัยระบบชำระเงินจะหลุดเส้นตายการตรวจสอบความปลอดภัยวันอังคารหน้าทันทีครับ"
      },
      pointNext: {
        label: "Point/Next (เสนอทางออกที่สร้างสรรค์ร่วมกัน)",
        en: "If this request takes top priority, let's agree with the Product Owner right now to swap out Ticket 402.",
        th: "ถ้าคำขอนี้มีความสำคัญสูงสุด ขอให้เราตกลงร่วมกับ PO ตอนนี้เพื่อสลับเอา Ticket 402 กลับไปไว้ใน Backlog ก่อนครับ"
      }
    },
    fullAnswer: "I completely understand the business urgency. Let me walk you through our sprint capacity real quick. We cannot take in this new feature without deferring an existing committed user story. Our current sprint velocity is at 100% capacity, and our backend team has zero buffer hours left. If we force this feature in, the payment security refactor will slip past our compliance deadline next Tuesday. If this request takes top priority, let's agree with the Product Owner right now to swap out Ticket 402.",
    keyTip: "การปฏิเสธแบบ Agile ไม่ใช่บอกว่า 'ไม่ทำ' แต่เป็นการบอกว่า 'ถ้าจะทำสิ่งนี้ จะต้องแลกด้วยสิ่งไหน' (Trade-off)"
  },
  {
    id: "prep-07",
    question: "How should our engineering team balance technical debt with new features in our sprint retrospectives?",
    questionTh: "ทีมวิศวกรของเราควรสร้างสมดุลระหว่างการแก้หนี้ทางเทคนิค (Tech Debt) กับการส่งมอบฟีเจอร์ใหม่อย่างไรในการประชุม Retrospective?",
    category: "Agile Retrospectives & Sustainability",
    saviorOpener: "That's a crucial topic for our engineering health and team velocity...",
    saviorOpenerTh: "เป็นประเด็นที่สำคัญยิ่งต่อสุขภาพของระบบและความเร็วระยะยาวของทีมเราเลยครับ...",
    prep: {
      point: {
        label: "Point (กำหนดโควตาที่ชัดเจน)",
        en: "We should formalize a 20% engineering capacity allocation in every sprint dedicated to technical debt.",
        th: "เราควรกำหนดสัดส่วน 20% ของกำลังทีมในทุกสปรินต์สำหรับสะสางหนี้ทางเทคนิคโดยเฉพาะครับ"
      },
      reason: {
        label: "Reason (อธิบายดอกเบี้ยของหนี้เทคนิค)",
        en: "Unaddressed technical debt compounds over time, increasing bug frequency and slowing down new feature delivery.",
        th: "หนี้ทางเทคนิคที่ปล่อยทิ้งไว้จะสะสมเป็นดอกเบี้ย ทำให้เกิดบั๊กบ่อยขึ้นและทำให้การพัฒนาฟีเจอร์ใหม่ช้าลงเรื่อย ๆ ครับ"
      },
      example: {
        label: "Example/Evidence (ยกตัวอย่างผลลัพธ์ที่เคยทำสำเร็จ)",
        en: "When we dedicated two days to refactor the auth pipeline last quarter, our login-related incident tickets dropped by 65%.",
        th: "เมื่อไตรมาสก่อนที่เราจัดเวลา 2 วันรีแฟกเตอร์ระบบยืนยันตัวตน ตั๋วปัญหาเรื่องล็อกอินลดลงไปถึง 65% ครับ"
      },
      pointNext: {
        label: "Point/Next (สรุปข้อตกลงและลงมือปฏิบัติ)",
        en: "I propose we bake this 20% capacity rule into our team's working agreement starting in the next sprint planning.",
        th: "ผมขอเสนอให้บรรจุกฎ 20% นี้เข้าไปใน Working Agreement ของทีมโดยเริ่มตั้งแต่รอบวางแผนสปรินต์ถัดไปทันทีครับ"
      }
    },
    fullAnswer: "That's a crucial topic for our engineering health and team velocity. We should formalize a 20% engineering capacity allocation in every sprint dedicated to technical debt. Unaddressed technical debt compounds over time, increasing bug frequency and slowing down new feature delivery. When we dedicated two days to refactor the auth pipeline last quarter, our login-related incident tickets dropped by 65%. I propose we bake this 20% capacity rule into our team's working agreement starting in the next sprint planning.",
    keyTip: "ใช้ตัวเลขจริง (20% capacity, dropped by 65%) เพื่อโน้มน้าวใจ Product Manager ให้เห็นความคุ้มค่าของการเคลียร์ Tech Debt"
  }
];

window.TECH_VERBS_AND_SAVIOR_PHRASES = {
  saviorCategories: [
    {
      title: "⏳ ขอเวลาคิด / ดึงสติ (Buying Time & Stalling)",
      description: "ใช้เมื่อโดนถามกะทันหันแล้วคิดไม่ออก เพื่อให้มีเวลาหายใจ 3-5 วินาทีโดยไม่เกิด Dead Air",
      phrases: [
        { en: "That's a great question. Let me check the ticket details real quick.", th: "คำถามดีมากครับ ขอผมเช็ครายละเอียดในการ์ดงานสักครู่หนึ่งครับ" },
        { en: "Give me just a second to pull up the latest Grafana metrics.", th: "ขอเวลาสักครู่เดียวเปิดดูกราฟ Metrics ล่าสุดใน Grafana ครับ" },
        { en: "Let me double-check the logs so I can give you the accurate numbers.", th: "ขอผมตรวจดู Log อีกรอบจะได้ให้ตัวเลขที่ถูกต้องแม่นยำครับ" },
        { en: "Let me verify that with the team right after this call and update the thread.", th: "เดี๋ยวผมขอเช็คกับทีมหลังประชุมเสร็จแล้วจะอัปเดตลงใน Thread ให้ครับ" }
      ]
    },
    {
      title: "🚪 ขอยกไปคุยนอกรอบ (Taking it Offline)",
      description: "ประโยคทองคำสำหรับตัดบทเมื่อการคุยเริ่มลงลึกเกินไปหรือกินเวลาคนอื่นใน Standup",
      phrases: [
        { en: "It's a bit technical and detailed, so let's take this offline after standup.", th: "เรื่องนี้ค่อนข้างมีรายละเอียดเชิงเทคนิค เดี๋ยวเราขอยกไปคุยนอกรอบหลังเดลี่นะครับ" },
        { en: "To keep things moving for the team, let's sync up on Slack right after this call.", th: "เพื่อไม่ให้กินเวลาคนอื่นในทีม เดี๋ยวเรามาคุยกันต่อใน Slack หลังประชุมนี้นะครับ" },
        { en: "Let's schedule a quick 10-minute huddle between you, me, and John to hash this out.", th: "เดี๋ยวเรานัดคุยสั้นๆ 10 นาทีระหว่างเรากับ John เพื่อสรุปเรื่องนี้กันครับ" },
        { en: "I'll document the architecture proposal in Confluence and tag you for feedback.", th: "เดี๋ยวผมจะเขียนข้อเสนอสถาปัตยกรรมลงใน Confluence แล้วแท็กให้คุณรีวิวนะครับ" }
      ]
    },
    {
      title: "🤷‍♂️ ไม่แน่ใจ แต่สัญญาว่าจะหาคำตอบ (Handling Uncertainty)",
      description: "เมื่อไม่รู้ อย่าเดาหรือโกหก ให้ตอบแบบมืออาชีพว่าจะไปหาข้อเท็จจริงมาให้",
      phrases: [
        { en: "I'm not 100% sure off the top of my head. Let me confirm with the DevOps team.", th: "ตอนนี้ผมยังไม่ชัวร์ 100% เดี๋ยวขอเช็คข้อมูลยืนยันกับทีม DevOps ก่อนนะครับ" },
        { en: "I want to be careful not to speculate, so let me run a quick query and post it in the channel.", th: "ผมไม่อยากคาดเดาไปเอง ขอรันคิวรีเช็คข้อมูลชัวร์ๆ แล้วจะโพสต์ลงในแชนเนลให้นะครับ" },
        { en: "I don't have the exact latency numbers on hand, but I will get back to you shortly.", th: "ตอนนี้ในมือยังไม่มีตัวเลข Latency เป๊ะๆ แต่เดี๋ยวผมจะรีบนำมาแจ้งให้ทราบครับ" }
      ]
    },
    {
      title: "🔊 เสียงกระตุก / ฟังไม่ทัน (Clarification & Audio Check)",
      description: "ใช้เมื่อฟังสำเนียงไม่ออก หรือสัญญาณเน็ตมีปัญหา เพื่อให้คู่สนทนาพูดซ้ำอย่างเป็นธรรมชาติ",
      phrases: [
        { en: "Sorry, your audio broke up for a second. Could you please repeat that question?", th: "ขอโทษทีครับ พอดีเสียงกระตุกไปนิดหนึ่ง ช่วยทวนคำถามอีกรอบได้ไหมครับ?" },
        { en: "Just to make sure I understand correctly, are you asking about the database or the API?", th: "ขอเช็คเพื่อให้เข้าใจตรงกัน คุณกำลังถามถึงส่วนของฐานข้อมูลหรือส่วน API นะครับ?" },
        { en: "Could you clarify what you mean by latency spike in this context?", th: "ช่วยอธิบายเพิ่มเติมได้ไหมครับว่า Latency พุ่งสูงในบริบทนี้หมายถึงช่วงไหน?" }
      ]
    }
  ],
  techVerbs: [
    {
      verb: "Investigate",
      ipa: "/ɪnˈves.tə.ɡeɪt/",
      th: "ตรวจสอบ / สืบหาสาเหตุของปัญหา",
      example: "I am investigating the memory leak in the staging cluster.",
      exampleTh: "ผมกำลังตรวจสอบหาสาเหตุของปัญหา Memory รั่วในคลัสเตอร์ Staging"
    },
    {
      verb: "Reproduce",
      ipa: "/ˌriː.prəˈdjuːs/",
      th: "จำลองอาการบั๊กให้เกิดขึ้นอีกครั้ง",
      example: "I managed to reproduce the intermittent timeout bug locally.",
      exampleTh: "ผมสามารถจำลองอาการบั๊กเรื่อง Timeout ที่เป็นๆ หายๆ บนเครื่องตัวเองได้แล้ว"
    },
    {
      verb: "Deploy",
      ipa: "/dɪˈplɔɪ/",
      th: "นำโค้ดหรือระบบขึ้นเซิร์ฟเวอร์",
      example: "We deployed the authentication service patch to production.",
      exampleTh: "เราได้ปล่อยแพตช์ของระบบล็อกอินขึ้น Production เรียบร้อยแล้ว"
    },
    {
      verb: "Roll back",
      ipa: "/ˈroʊl.bæk/",
      th: "ย้อนเวอร์ชันกลับไปตัวก่อนหน้าที่เสถียร",
      example: "We rolled back to the previous stable release container tag.",
      exampleTh: "เราได้สั่งย้อนกลับไปใช้ Container แท็กเวอร์ชันก่อนหน้าที่เสถียรแล้ว"
    },
    {
      verb: "Provision",
      ipa: "/prəˈvɪʒ.ən/",
      th: "จัดสรรและสร้างทรัพยากรบนคลาวด์",
      example: "I provisioned a new Redis cache instance using Terraform.",
      exampleTh: "ผมได้สร้าง Redis แคชตัวใหม่บนคลาวด์ผ่านคำสั่ง Terraform แล้ว"
    },
    {
      verb: "Refactor",
      ipa: "/riːˈfæk.tər/",
      th: "ปรับโครงสร้างโค้ดให้สะอาดขึ้นโดยไม่เปลี่ยนผลลัพธ์",
      example: "I am refactoring the payment module to simplify our unit tests.",
      exampleTh: "ผมกำลังรีแฟกเตอร์โมดูลการจ่ายเงินเพื่อให้เขียน Unit Test ได้ง่ายขึ้น"
    },
    {
      verb: "Mitigate",
      ipa: "/ˈmɪt.ɪ.ɡeɪt/",
      th: "บรรเทาความเสียหายหรือลดผลกระทบชั่วคราว",
      example: "We scaled up the pod replicas to mitigate the traffic spike.",
      exampleTh: "เราเพิ่มจำนวน Pod จำลองขึ้นเพื่อบรรเทาผลกระทบจากทราฟฟิกที่พุ่งสูง"
    },
    {
      verb: "Throttle",
      ipa: "/ˈθrɒt.əl/",
      th: "จำกัดความเร็วหรือจำนวนคำขอเพื่อเซฟระบบ",
      example: "The API gateway throttles incoming requests exceeding rate limits.",
      exampleTh: "API Gateway ทำการจำกัดความเร็วของคำขอที่ส่งมาเกินอัตราที่กำหนด"
    },
    {
      verb: "Benchmark",
      ipa: "/ˈbentʃ.mɑːrk/",
      th: "วัดและเปรียบเทียบประสิทธิภาพอย่างเป็นระบบ",
      example: "We benchmarked the new database driver against our legacy client.",
      exampleTh: "เราได้วัดประสิทธิภาพเปรียบเทียบไดรเวอร์ฐานข้อมูลตัวใหม่กับตัวเดิม"
    },
    {
      verb: "Sync with",
      ipa: "/sɪŋk wɪð/",
      th: "ปรึกษาหารือหรืออัปเดตข้อมูลให้ตรงกัน",
      example: "I need to sync with the QA lead regarding the test environment.",
      exampleTh: "ผมต้องปรึกษาอัปเดตกับหัวหน้าทีม QA เรื่องสภาพแวดล้อมการทดสอบ"
    },
    {
      verb: "Deprecate",
      ipa: "/ˈdep.rə.keɪt/",
      th: "ประกาศเลิกใช้งานฟังก์ชัน/API เก่า",
      example: "We plan to deprecate the v1 REST API by the end of this quarter.",
      exampleTh: "เราวางแผนจะประกาศเลิกใช้ REST API v1 ภายในสิ้นไตรมาสนี้"
    },
    {
      verb: "Isolate",
      ipa: "/ˈaɪ.sə.leɪt/",
      th: "แยกส่วนที่มีปัญหาออกจากระบบหลัก",
      example: "We isolated the compromised worker pod from the private network.",
      exampleTh: "เราได้แยก Pod ที่มีความเสี่ยงออกจากเครือข่ายภายในเรียบร้อยแล้ว"
    }
  ]
};

