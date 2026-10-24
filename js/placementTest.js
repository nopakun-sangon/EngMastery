/**
 * EngMastery: CEFR Diagnostic Placement Test Module
 * 15 Calibrated Questions across A1 - C1 to determine the learner's optimal starting level.
 */

(function () {
  const PLACEMENT_QUESTIONS = [
    // A1 (Survivor)
    {
      level: "A1",
      question: "Which sentence is grammatically correct in a daily conversation?",
      options: [
        "She is understand the code logic.",
        "She understands the code logic.",
        "She is understanding the code logic.",
        "She does understands the code logic."
      ],
      answer: 1,
      explanation: "'understand' เป็น Stative Verb ห้ามทำเป็น Continuous (-ing) เมื่อประธานคือ She กริยาจึงผันเติม -s เป็น 'understands'"
    },
    {
      level: "A1",
      question: "How do you form a correct question in Present Simple?",
      options: [
        "Are you agree with this deployment plan?",
        "Do you agree with this deployment plan?",
        "Are you agreeing with this deployment plan?",
        "Does you agree with this deployment plan?"
      ],
      answer: 1,
      explanation: "'agree' เป็นกริยาแท้ เมื่อถามใน Present Simple กับประธาน you ต้องใช้กริยาช่วย 'Do you agree...?' (ห้ามใช้ Are you agree)"
    },
    {
      level: "A1",
      question: "Look at the terminal! The server _____ rapidly right now.",
      options: [
        "reboot",
        "reboots",
        "is rebooting",
        "are rebooting"
      ],
      answer: 2,
      explanation: "มีคำบอกเวลา 'right now' และ 'Look at...!' แสดงเหตุการณ์กำลังเกิดขึ้นตรงหน้า จึงใช้ Present Continuous 'is rebooting'"
    },

    // A2 (Storyteller)
    {
      level: "A2",
      question: "We _____ any security vulnerabilities during yesterday's penetration test.",
      options: [
        "didn't found",
        "didn't find",
        "wasn't found",
        "not found"
      ],
      answer: 1,
      explanation: "ในประโยคปฏิเสธ Past Simple เมื่อใช้กริยาช่วย 'didn't' แล้ว กริยาแท้ต้องคืนรูปเดิมเป็น Base form คือ 'find' (ห้ามใช้ didn't found)"
    },
    {
      level: "A2",
      question: "A teammate says: 'The server is throwing 500 errors!' You volunteer on the spot to help:",
      options: [
        "I will check the logs right now.",
        "I am going to check the logs right now.",
        "I check the logs right now.",
        "I am check the logs right now."
      ],
      answer: 0,
      explanation: "การตัดสินใจสด ๆ เดี๋ยวนั้นเพื่อเสนอตัวช่วยเหลือ (Spontaneous Offer) ต้องใช้ 'will + V1'"
    },
    {
      level: "A2",
      question: "The new query caching mechanism is _____ than the legacy monolith.",
      options: [
        "more faster",
        "much faster",
        "very faster",
        "more fast"
      ],
      answer: 1,
      explanation: "'fast' พยางค์เดียว ขั้นกว่าคือ faster (ห้ามใส่ more) และหากต้องการเน้นว่าเร็วกว่ามาก ต้องใช้ 'much faster'"
    },

    // B1 (Connector)
    {
      level: "B1",
      question: "We _____ the new authentication microservice yesterday afternoon.",
      options: [
        "have deployed",
        "deployed",
        "have been deployed",
        "were deployed"
      ],
      answer: 1,
      explanation: "เมื่อมีเวลาในอดีตที่จบสิ้นแล้วอย่างชัดเจน 'yesterday afternoon' ต้องใช้ Past Simple 'deployed' (ห้ามใช้ Present Perfect กับ yesterday)"
    },
    {
      level: "B1",
      question: "The unexpected network timeout _____ during the database migration.",
      options: [
        "was occurred",
        "occurred",
        "has been occurred",
        "was occurring by"
      ],
      answer: 1,
      explanation: "'occur' เป็น Intransitive Verb (อกรรมกริยา) ห้ามทำเป็น Passive Voice เด็ดขาด จึงใช้ 'occurred' ในรูป Active ปกติ"
    },
    {
      level: "B1",
      question: "If we _____ a distributed Redis cache, our response time _____ dramatically.",
      options: [
        "implemented / would improve",
        "implement / would improve",
        "will implement / will improve",
        "had implemented / will improve"
      ],
      answer: 0,
      explanation: "Second Conditional (สมมุติสิ่งที่เป็นไปได้ยากในปัจจุบัน) โครงสร้างคือ If + Past Simple (V2), S + would + V1"
    },

    // B1+ (Communicator)
    {
      level: "B1+",
      question: "Direct: 'Where does the team store the credentials?' -> Indirect Question:",
      options: [
        "Could you tell me where does the team store the credentials?",
        "Could you tell me where the team stores the credentials?",
        "Could you tell me where is the team storing credentials?",
        "Could you tell me where the team store credentials?"
      ],
      answer: 1,
      explanation: "ใน Indirect Question ลำดับคำในอนุประโยคย่อยต้องเรียงเป็นประโยคบอกเล่า (S + V) ตัด does ออกและผันกริยาเป็น 'stores'"
    },
    {
      level: "B1+",
      question: "By the time the on-call engineer received the alert, the pod _____ automatically.",
      options: [
        "had recovered",
        "recovered",
        "has recovered",
        "recovers"
      ],
      answer: 0,
      explanation: "สำนวน 'By the time + Past Simple' เหตุการณ์ที่เกิดขึ้นและสิ้นสุดลงก่อนหน้านั้นต้องใช้ Past Perfect 'had recovered'"
    },

    // B2 (Professional)
    {
      level: "B2",
      question: "By the end of this sprint, our DevOps lead _____ the zero-downtime failover automation.",
      options: [
        "will complete",
        "will have completed",
        "will be completed",
        "has completed"
      ],
      answer: 1,
      explanation: "'By + เวลาในอนาคต' (By the end of this sprint) กำหนดเส้นตายที่งานจะเสร็จสมบูรณ์ก่อนจุดนั้น ต้องใช้ Future Perfect 'will have completed'"
    },
    {
      level: "B2",
      question: "Could you please _____ the new rate-limiting algorithm to the team?",
      options: [
        "explain",
        "explain about",
        "explain me",
        "explain for"
      ],
      answer: 0,
      explanation: "'explain' เป็น Transitive Verb ไม่ต้องมี about (ห้ามใช้ explain about) และไม่ตามด้วยบุคคลตรง ๆ (ห้ามใช้ explain me)"
    },

    // C1 (Master)
    {
      level: "C1",
      question: "Choose the correct Negative Inversion structure:",
      options: [
        "Not only we met our SLA target, but we also cut cloud costs.",
        "Not only did we meet our SLA target, but we also cut cloud costs.",
        "Not only we did meet our SLA target, but we also cut cloud costs.",
        "Not only met we our SLA target, but we also cut cloud costs."
      ],
      answer: 1,
      explanation: "เมื่อนำ 'Not only' ขึ้นต้นประโยค ต้องเกิด Inversion โดยดึงกริยาช่วย 'did' มาไว้หน้าประธาน 'did we meet'"
    },
    {
      level: "C1",
      question: "Rewrite using formal Conditional Inversion: 'If we had tested the failover earlier, we wouldn't have had downtime.'",
      options: [
        "Had we tested the failover earlier, we wouldn't have had downtime.",
        "Did we test the failover earlier, we wouldn't have had downtime.",
        "Were we tested the failover earlier, we wouldn't have had downtime.",
        "Had we not tested the failover earlier, we wouldn't have had downtime."
      ],
      answer: 0,
      explanation: "การละ If ใน Third Conditional ทำได้โดยการสลับ 'Had' ขึ้นมาหน้าประธาน: 'Had we tested...' (Formal C1)"
    }
  ];

  class PlacementTestManager {
    constructor() {
      this.currentIndex = 0;
      this.score = 0;
      this.userAnswers = [];
      this.isOpen = false;
      this.hasAnswered = false;
    }

    open() {
      this.currentIndex = 0;
      this.score = 0;
      this.userAnswers = [];
      this.hasAnswered = false;
      this.isOpen = true;
      this.render();
      if (window.soundFx) window.soundFx.playClick();
    }

    close() {
      this.isOpen = false;
      const modal = document.getElementById("placement-test-modal");
      if (modal) modal.remove();
      try {
        if (window.app && window.app.currentView === "dashboard") {
          const container = document.getElementById("main-content-view");
          if (container) window.app.renderDashboardView(container);
        }
      } catch (e) {}
    }

    handleSelectAnswer(optionIndex) {
      if (this.hasAnswered) return;
      this.hasAnswered = true;

      const q = PLACEMENT_QUESTIONS[this.currentIndex];
      const isCorrect = optionIndex === q.answer;
      if (isCorrect) {
        this.score++;
        try {
          if (window.soundFx && typeof window.soundFx.playCorrect === "function") {
            window.soundFx.playCorrect();
          } else if (window.soundFx && typeof window.soundFx.playSuccess === "function") {
            window.soundFx.playSuccess();
          }
        } catch (e) {}
      } else {
        try {
          if (window.soundFx && typeof window.soundFx.playIncorrect === "function") {
            window.soundFx.playIncorrect();
          } else if (window.soundFx && typeof window.soundFx.playError === "function") {
            window.soundFx.playError();
          }
        } catch (e) {}
      }

      this.userAnswers.push({
        questionIndex: this.currentIndex,
        selected: optionIndex,
        isCorrect: isCorrect
      });

      this.renderQuestionFeedback(optionIndex, isCorrect);
    }

    renderQuestionFeedback(selectedIndex, isCorrect) {
      const q = PLACEMENT_QUESTIONS[this.currentIndex];
      const feedbackContainer = document.getElementById("placement-feedback-box");
      const nextBtn = document.getElementById("placement-next-btn");
      const optionsContainer = document.getElementById("placement-options-grid");

      if (optionsContainer) {
        const buttons = optionsContainer.querySelectorAll("button");
        buttons.forEach((btn, idx) => {
          btn.disabled = true;
          if (idx === q.answer) {
            btn.className = "w-full text-left p-4 rounded-2xl border-2 border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-200 font-bold flex items-center justify-between";
            btn.innerHTML += `<span class="text-emerald-600 font-black">✓ ถูกต้อง</span>`;
          } else if (idx === selectedIndex && !isCorrect) {
            btn.className = "w-full text-left p-4 rounded-2xl border-2 border-rose-500 bg-rose-50 dark:bg-rose-950/40 text-rose-800 dark:text-rose-200 font-bold flex items-center justify-between";
            btn.innerHTML += `<span class="text-rose-600 font-black">✗ ผิด</span>`;
          } else {
            btn.className = "w-full text-left p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 text-slate-400 opacity-60";
          }
        });
      }

      if (feedbackContainer) {
        feedbackContainer.classList.remove("hidden");
        feedbackContainer.innerHTML = `
          <div class="p-4 rounded-2xl ${isCorrect ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-900 dark:text-emerald-200' : 'bg-rose-500/10 border border-rose-500/30 text-rose-900 dark:text-rose-200'}">
            <div class="flex items-center gap-2 font-black text-sm mb-1">
              <span>${isCorrect ? '🎉 ถูกต้อง!' : '💡 เฉลยที่ถูกต้อง:'}</span>
              <span class="text-xs px-2 py-0.5 rounded bg-white/20 font-mono">ระดับ ${q.level}</span>
            </div>
            <p class="text-xs leading-relaxed font-normal">${q.explanation}</p>
          </div>
        `;
      }

      if (nextBtn) {
        nextBtn.classList.remove("hidden");
        setTimeout(() => {
          try {
            nextBtn.scrollIntoView({ behavior: "smooth", block: "nearest" });
            nextBtn.focus();
          } catch (e) {}
        }, 50);
      }
    }

    nextQuestion() {
      try {
        if (window.soundFx && typeof window.soundFx.playClick === "function") {
          window.soundFx.playClick();
        }
      } catch (e) {}
      this.hasAnswered = false;
      this.currentIndex++;
      if (this.currentIndex >= PLACEMENT_QUESTIONS.length) {
        this.renderResult();
      } else {
        this.render();
      }
    }

    calculateRecommendation() {
      const score = this.score;
      if (score <= 2) {
        return {
          levelId: "level-0-starter",
          levelCode: "Pre-A1",
          title: "Level 0: The Starter Kit (Pre-A1 - ปูรากฐานจากศูนย์)",
          color: "sky",
          description: "คุณกำลังเริ่มต้นก้าวแรกอย่างมั่นใจ! แนะนำให้เริ่มจาก Level 0 เพื่อแม่นยำ 4 ชนิดคำหลัก (Parts of Speech), โครงสร้าง S+V+O, สัญลักษณ์คีย์บอร์ดโค้ดดิ้ง 20 ตัว และตัวเลข Tech ในชีวิตจริง",
          xpBonus: 80
        };
      } else if (score <= 5) {
        return {
          levelId: "level-1-survivor",
          levelCode: "A1",
          title: "Level 1: The Survivor (A1 - ผู้รอดชีวิต)",
          color: "blue",
          description: "คุณมีพื้นฐานเบื้องต้นแล้ว แนะนำให้ลุย Level 1 เพื่อแม่นยำ Present Simple, Verb to Be vs Action Verbs, และการสร้างประโยคถาม-ตอบในการทำงาน",
          xpBonus: 100
        };
      } else if (score <= 8) {
        return {
          levelId: "level-2-storyteller",
          levelCode: "A2",
          title: "Level 2: The Storyteller (A2 - นักเล่าเรื่อง)",
          color: "teal",
          description: "คุณมีพื้นฐานไวยากรณ์ปัจจุบันดีแล้ว แนะนำให้เริ่มจาก Level 2 เพื่อต่อยอด Past Simple กริยา 3 ช่อง การเล่าเรื่องลำดับกาลเวลา และการเปรียบเทียบ",
          xpBonus: 150
        };
      } else if (score <= 10) {
        return {
          levelId: "level-3-connector",
          levelCode: "B1",
          title: "Level 3: The Connector (B1 - นักเชื่อมโยง)",
          color: "emerald",
          description: "คุณสื่อสารอดีตและปัจจุบันได้คล่องแคล่ว แนะนำให้เริ่มจาก Level 3 เพื่อฝึกฝน Present Perfect, Passive Voice ในงาน Tech และ If-Clause",
          xpBonus: 200
        };
      } else if (score <= 12) {
        return {
          levelId: "level-4-communicator",
          levelCode: "B1+",
          title: "Level 4: The Communicator (B1+ - นักสื่อสารมือโปร)",
          color: "amber",
          description: "ทักษะไวยากรณ์ของคุณอยู่ในระดับดี แนะนำให้ฝึก Level 4 เพื่อเน้นความสุภาพ Indirect Questions, Past Continuous & Past Perfect และการถอดบทเรียน",
          xpBonus: 250
        };
      } else if (score <= 14) {
        return {
          levelId: "level-5-professional",
          levelCode: "B2",
          title: "Level 5: The Professional (B2 - มืออาชีพสากล)",
          color: "indigo",
          description: "ยอดเยี่ยมมาก! คุณมีความคล่องแคล่วสูง แนะนำเริ่ม Level 5 เพื่อพิชิต Future Perfect, Standup 3 จังหวะคมกริบ และสำนวนการประชุมธุรกิจ Tech",
          xpBonus: 300
        };
      } else {
        return {
          levelId: "level-6-master",
          levelCode: "C1",
          title: "Level 6: The Master (C1 - ปรมาจารย์ผู้นำ)",
          color: "purple",
          description: "ความแม่นยำระดับปรมาจารย์! คุณมีความเข้าใจในระดับลึกซึ้ง แนะนำข้ามไปลุย Level 6 เพื่อฝึก Negative Inversion, Diplomatic Hedging และ PREP Framework",
          xpBonus: 400
        };
      }
    }

    saveResult(rec) {
      try {
        const resultData = {
          date: new Date().toISOString(),
          score: this.score,
          total: PLACEMENT_QUESTIONS.length,
          percentage: Math.round((this.score / PLACEMENT_QUESTIONS.length) * 100),
          recommendedLevelId: rec.levelId,
          recommendedLevelCode: rec.levelCode,
          recommendedTitle: rec.title
        };
        localStorage.setItem("engmastery_placement_result", JSON.stringify(resultData));
      } catch (e) {
        console.error("Failed to save placement test result", e);
      }
    }

    startRecommendedLevel(levelId) {
      this.close();
      if (window.app && typeof window.app.navigateTo === "function") {
        window.app.navigateTo("level-detail", { levelId: levelId });
      }
    }

    render() {
      let modal = document.getElementById("placement-test-modal");
      if (!modal) {
        modal = document.createElement("div");
        modal.id = "placement-test-modal";
        modal.className = "fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/80 backdrop-blur-md animate-fadeIn";
        document.body.appendChild(modal);
      }

      const q = PLACEMENT_QUESTIONS[this.currentIndex];
      const progressPercent = Math.round(((this.currentIndex) / PLACEMENT_QUESTIONS.length) * 100);

      modal.innerHTML = `
        <div id="placement-modal-card" class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative flex flex-col max-h-[90vh] overflow-y-auto">
          <!-- Top Bar -->
          <div class="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
            <div class="flex items-center gap-3">
              <span class="w-10 h-10 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-xl font-black">
                🎯
              </span>
              <div>
                <h3 class="text-base font-extrabold text-slate-900 dark:text-white">
                  CEFR Diagnostic Placement Test
                </h3>
                <span class="text-xs text-slate-400">แบบทดสอบประเมินระดับความสามารถภาษาอังกฤษ</span>
              </div>
            </div>
            <button onclick="window.placementTest.close()" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-800 dark:hover:text-white flex items-center justify-center transition-colors">
              ✕
            </button>
          </div>

          <!-- Progress Header -->
          <div class="mt-4 space-y-1.5">
            <div class="flex items-center justify-between text-xs font-bold">
              <span class="text-indigo-600 dark:text-indigo-400">ข้อที่ ${this.currentIndex + 1} จาก ${PLACEMENT_QUESTIONS.length}</span>
              <span class="px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-[11px] font-mono text-slate-600 dark:text-slate-300">Milestone: ${q.level}</span>
            </div>
            <div class="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
              <div class="bg-gradient-to-r from-indigo-500 to-purple-600 h-full rounded-full transition-all duration-300" style="width: ${progressPercent}%"></div>
            </div>
          </div>

          <!-- Question Prompt -->
          <div class="my-6">
            <h4 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-relaxed">
              ${q.question}
            </h4>
          </div>

          <!-- Options -->
          <div id="placement-options-grid" class="space-y-3">
            ${q.options.map((opt, idx) => `
              <button onclick="window.placementTest.handleSelectAnswer(${idx})"
                class="w-full text-left p-4 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-indigo-500 dark:hover:border-indigo-400 bg-white dark:bg-slate-800/80 hover:bg-indigo-50/50 dark:hover:bg-indigo-950/30 text-slate-800 dark:text-slate-200 font-medium transition-all flex items-center justify-between group active:scale-[0.99] cursor-pointer">
                <div class="flex items-center gap-3">
                  <span class="w-7 h-7 rounded-xl bg-slate-100 dark:bg-slate-700/60 text-slate-600 dark:text-slate-300 group-hover:bg-indigo-600 group-hover:text-white text-xs font-black flex items-center justify-center transition-colors">
                    ${['A', 'B', 'C', 'D'][idx]}
                  </span>
                  <span class="text-sm font-semibold">${opt}</span>
                </div>
              </button>
            `).join("")}
          </div>

          <!-- Feedback Box (Hidden until answer chosen) -->
          <div id="placement-feedback-box" class="mt-5 hidden"></div>

          <!-- Bottom Action -->
          <div class="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end">
            <button id="placement-next-btn" onclick="window.placementTest.nextQuestion()"
              class="hidden px-6 py-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-sm shadow-lg shadow-indigo-500/25 transition-all flex items-center gap-2 active:scale-95 cursor-pointer">
              <span>${this.currentIndex === PLACEMENT_QUESTIONS.length - 1 ? 'ดูผลการประเมิน' : 'ข้อถัดไป'}</span>
              <span>➔</span>
            </button>
          </div>
        </div>
      `;

      const card = document.getElementById("placement-modal-card");
      if (card) card.scrollTop = 0;
    }

    renderResult() {
      const rec = this.calculateRecommendation();
      this.saveResult(rec);
      if (window.soundFx) window.soundFx.playVictory();

      let modal = document.getElementById("placement-test-modal");
      if (!modal) return;

      const percentage = Math.round((this.score / PLACEMENT_QUESTIONS.length) * 100);

      modal.innerHTML = `
        <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative text-center animate-fadeIn">
          <div class="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-4xl shadow-xl mb-4">
            🎓
          </div>

          <span class="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800">
            ผลการประเมิน CEFR Placement Test
          </span>

          <h3 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-3">
            คะแนนของคุณ: ${this.score} / ${PLACEMENT_QUESTIONS.length} (${percentage}%)
          </h3>

          <!-- Recommended Card -->
          <div class="my-6 p-6 rounded-3xl bg-gradient-to-br from-slate-900 to-indigo-950 text-white text-left border border-indigo-500/30 shadow-xl space-y-3">
            <div class="flex items-center justify-between">
              <span class="text-xs uppercase font-extrabold text-indigo-300 tracking-wider">🎯 ระดับที่แนะนำสำหรับคุณ:</span>
              <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-indigo-500/40 text-indigo-200 border border-indigo-400/30">
                ${rec.levelCode} Certified
              </span>
            </div>

            <h4 class="text-xl font-black text-white">
              ${rec.title}
            </h4>

            <p class="text-xs sm:text-sm text-indigo-100/90 leading-relaxed">
              ${rec.description}
            </p>

            <div class="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-indigo-200">
              <span>โบนัสเริ่มต้น: +${rec.xpBonus} XP</span>
              <span>สถานะ: พร้อมเริ่มเรียนได้ทันที</span>
            </div>
          </div>

          <!-- Buttons -->
          <div class="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button onclick="window.placementTest.startRecommendedLevel('${rec.levelId}')"
              class="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-sm shadow-xl shadow-indigo-500/25 transition-all flex items-center justify-center gap-2 active:scale-95">
              <span>🚀 เริ่มเรียน ${rec.levelCode} ทันที</span>
            </button>
            <button onclick="window.placementTest.close()"
              class="w-full sm:w-auto px-5 py-3.5 rounded-2xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold text-sm transition-all">
              <span>ปิดหน้าต่าง</span>
            </button>
          </div>
        </div>
      `;
    }
  }

  window.placementTest = new PlacementTestManager();
})();

