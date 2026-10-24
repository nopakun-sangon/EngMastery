/**
 * EngMastery: Standup Lab & Generator Module
 * Provides:
 * 1. ⚡ Standup Generator (3-Lock Interactive Script Builder)
 * 2. 🎯 Standup Scenarios (6 Real-World Incident & DevOps Simulation Scenarios)
 * 3. 💬 PREP Q&A Lab (5 Deep-Dive Interview & Technical Question Solvers)
 * 4. 🛡️ Savior Phrases & 15 Tech Verbs
 * 5. 🎙️ Quick Phonics & Categorized Speaking Drills
 */

(function () {
  const StandupLab = {
    currentTab: "generator", // "generator" | "scenarios" | "prep" | "verbs" | "phrases"
    activeScenarioIdx: 0,
    activePrepIdx: 0,
    activeVerbCategory: "all",

    // Default Generator State
    generatorState: {
      greeting: "Good morning team.",
      yesterdayText: "",
      todayText: "",
      blockerType: "no_blocker",
      blockerCustomText: "",
      wrapUp: "No blockers on my end, passing it over to the next person.",
      generatedScript: null
    },

    init(app) {
      this.app = app;
      // Pre-fill default generator text from templates
      if (window.STANDUP_TEMPLATES) {
        if (!this.generatorState.yesterdayText && window.STANDUP_TEMPLATES.yesterdayActions?.length) {
          this.generatorState.yesterdayText = "Yesterday, I " + window.STANDUP_TEMPLATES.yesterdayActions[0].text + ".";
        }
        if (!this.generatorState.todayText && window.STANDUP_TEMPLATES.todayActions?.length) {
          this.generatorState.todayText = "Today, I will " + window.STANDUP_TEMPLATES.todayActions[0].text + ".";
        }
      }
    },

    switchTab(tabName) {
      if (window.soundFx) window.soundFx.playClick();
      this.currentTab = tabName;
      if (this.app) {
        this.app.speakingLabTab = tabName;
        if (typeof window !== "undefined" && window.location) {
          const targetHash = `#/speaking-lab?tab=${encodeURIComponent(tabName)}`;
          if (window.location.hash !== targetHash) {
            if (this.app._isSyncingHash !== undefined) this.app._isSyncingHash = true;
            window.location.hash = targetHash;
          }
        }
        const container = document.getElementById("main-content-view");
        if (container) this.render(this.app, container);
      }
    },

    setYesterdayPreset(index) {
      if (!window.STANDUP_TEMPLATES?.yesterdayActions?.[index]) return;
      const item = window.STANDUP_TEMPLATES.yesterdayActions[index];
      const input = document.getElementById("generator-yesterday-input");
      const fullText = "Yesterday, I " + item.text + ".";
      if (input) input.value = fullText;
      this.generatorState.yesterdayText = fullText;
      if (window.soundFx) window.soundFx.playClick();
    },

    setTodayPreset(index) {
      if (!window.STANDUP_TEMPLATES?.todayActions?.[index]) return;
      const item = window.STANDUP_TEMPLATES.todayActions[index];
      const input = document.getElementById("generator-today-input");
      const fullText = "Today, I will " + item.text + ".";
      if (input) input.value = fullText;
      this.generatorState.todayText = fullText;
      if (window.soundFx) window.soundFx.playClick();
    },

    setBlockerPreset(type) {
      this.generatorState.blockerType = type;
      const customContainer = document.getElementById("generator-blocker-custom-container");
      const customInput = document.getElementById("generator-blocker-custom-input");

      if (type === "custom") {
        if (customContainer) customContainer.classList.remove("hidden");
        if (customInput) customInput.focus();
      } else {
        if (customContainer) customContainer.classList.add("hidden");
        const found = window.STANDUP_TEMPLATES?.blockerOptions?.find(b => b.id === type);
        if (found) {
          this.generatorState.blockerCustomText = found.text;
        }
      }
      if (window.soundFx) window.soundFx.playClick();
    },

    randomizeScenario() {
      if (!window.STANDUP_TEMPLATES) return;
      if (window.soundFx) window.soundFx.playClick();

      const yActions = window.STANDUP_TEMPLATES.yesterdayActions || [];
      const tActions = window.STANDUP_TEMPLATES.todayActions || [];
      const bOptions = window.STANDUP_TEMPLATES.blockerOptions || [];

      const randY = yActions[Math.floor(Math.random() * yActions.length)];
      const randT = tActions[Math.floor(Math.random() * tActions.length)];
      const randB = bOptions[Math.floor(Math.random() * bOptions.length)];

      const greetings = [
        "Good morning team.",
        "Hi everyone, good morning.",
        "Morning all, here's my quick update.",
        "Good morning everyone, hope you are having a productive week."
      ];
      const randGreeting = greetings[Math.floor(Math.random() * greetings.length)];

      const yInput = document.getElementById("generator-yesterday-input");
      const tInput = document.getElementById("generator-today-input");
      const greetingSelect = document.getElementById("generator-greeting-select");

      const yText = randY ? "Yesterday, I " + randY.text + "." : "";
      const tText = randT ? "Today, I will " + randT.text + "." : "";

      if (yInput) yInput.value = yText;
      if (tInput) tInput.value = tText;
      if (greetingSelect) greetingSelect.value = randGreeting;

      this.generatorState.greeting = randGreeting;
      this.generatorState.yesterdayText = yText;
      this.generatorState.todayText = tText;

      if (randB) {
        this.setBlockerPreset(randB.id);
        const radio = document.querySelector(`input[name="blocker-choice"][value="${randB.id}"]`);
        if (radio) radio.checked = true;
      }

      this.generateScript();
      if (this.app) this.app.showToast("🎲 สุ่มกรณีศึกษาการเดลี่เรียบร้อยแล้ว!", "info");
    },

    generateScript() {
      if (window.soundFx) window.soundFx.playClick();

      const greetingSelect = document.getElementById("generator-greeting-select");
      const yInput = document.getElementById("generator-yesterday-input");
      const tInput = document.getElementById("generator-today-input");
      const wrapUpSelect = document.getElementById("generator-wrapup-select");
      const customBlockerInput = document.getElementById("generator-blocker-custom-input");

      const greeting = greetingSelect ? greetingSelect.value : this.generatorState.greeting;
      const yesterday = (yInput ? yInput.value.trim() : this.generatorState.yesterdayText) || "Yesterday, I completed our sprint backlog tasks.";
      const today = (tInput ? tInput.value.trim() : this.generatorState.todayText) || "Today, I will continue implementing the planned feature stories.";
      const wrapUp = wrapUpSelect ? wrapUpSelect.value : "That wraps up my update, back to you.";

      let blockerText = "";
      if (this.generatorState.blockerType === "custom") {
        blockerText = customBlockerInput ? customBlockerInput.value.trim() : "";
        if (!blockerText) blockerText = "I have no critical blockers at this moment.";
      } else {
        const found = window.STANDUP_TEMPLATES?.blockerOptions?.find(b => b.id === this.generatorState.blockerType);
        blockerText = found ? found.text : "No blockers on my end, everything is proceeding on schedule.";
      }

      // Compose full script
      const scriptParts = [
        greeting,
        yesterday,
        today,
        blockerText,
        wrapUp
      ];

      const fullScript = scriptParts.filter(Boolean).join(" ");
      const wordCount = fullScript.split(/\s+/).length;
      const estSeconds = Math.round((wordCount / 130) * 60);

      this.generatorState.generatedScript = {
        fullScript,
        wordCount,
        estSeconds,
        yesterday,
        today,
        blockerText,
        greeting,
        wrapUp
      };

      const resultBox = document.getElementById("generator-result-box");
      if (resultBox) {
        resultBox.innerHTML = this.renderGeneratedResultHtml();
        resultBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }

      if (this.app) {
        this.app.showToast("✨ สร้างบทเดลี่ 3 ล็อคเสร็จสมบูรณ์!", "success");
      }
    },

    copyScript() {
      if (!this.generatorState.generatedScript?.fullScript) return;
      navigator.clipboard.writeText(this.generatorState.generatedScript.fullScript).then(() => {
        if (window.soundFx) window.soundFx.playClick();
        if (this.app) this.app.showToast("📋 คัดลอกสคริปต์เดลี่ลง Clipboard เรียบร้อยแล้ว!", "success");
      }).catch(() => {
        if (this.app) this.app.showToast("กรุณาเลือกคลุมข้อความแล้วกด Ctrl+C ด้วยตนเอง", "info");
      });
    },

    playScriptAudio(text) {
      if (window.speechEngine) {
        window.speechEngine.speak(text);
      }
    },

    recordAndScoreScript(text) {
      const statusEl = document.getElementById("generator-mic-status");
      const micBtn = document.getElementById("generator-mic-btn");

      if (statusEl) statusEl.textContent = "🎙️ กำลังฟังเสียงของคุณ... กรุณาอ่านสคริปต์เดลี่เลยครับ";
      if (micBtn) micBtn.classList.add("recording-pulse");

      if (!window.speechEngine) return;
      window.speechEngine.listenAndScore(text, {
        onStart: () => {
          if (window.soundFx) window.soundFx.playClick();
        },
        onResult: (res) => {
          if (micBtn) micBtn.classList.remove("recording-pulse");
          if (statusEl) {
            statusEl.innerHTML = `<span class="font-bold text-indigo-600 dark:text-indigo-400">คะแนนความแม่นยำ: ${res.score}%</span><br><span class="text-xs text-slate-500">"${res.spokenText}"</span>`;
          }
          if (res.isPass) {
            if (window.soundFx) window.soundFx.playCorrect();
            if (window.storageManager) {
              window.storageManager.addXP(30);
              window.storageManager.recordSpeakingDrill();
              window.storageManager.recordQuestProgress("speakSentences", 1);
            }
            if (this.app) {
              this.app.renderHeaderStats();
              this.app.showToast(`🎉 ยอดเยี่ยมมาก! คะแนน ${res.score}% (+30 XP)`, "success");
            }
          } else {
            if (window.soundFx) window.soundFx.playIncorrect();
            if (this.app) {
              this.app.showToast(`ได้คะแนน ${res.score}% ลองเว้นวรรคและออกเสียง Tech Verbs ให้ชัดขึ้นนะครับ`, "info");
            }
          }
        },
        onError: (err) => {
          if (micBtn) micBtn.classList.remove("recording-pulse");
          if (statusEl) statusEl.textContent = err.message || "เกิดข้อผิดพลาดในการรับเสียง";
          if (this.app) this.app.showToast(err.message || "ไมโครโฟนขัดข้อง", "error");
        },
        onEnd: () => {
          if (micBtn) micBtn.classList.remove("recording-pulse");
        }
      });
    },

    renderGeneratedResultHtml() {
      const scriptData = this.generatorState.generatedScript;
      if (!scriptData) return "";

      const safeText = scriptData.fullScript.replace(/'/g, "\\'");

      return `
        <div class="mt-8 p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-indigo-50/90 via-white to-purple-50/70 dark:from-slate-900 dark:via-indigo-950/20 dark:to-slate-900 border-2 border-indigo-200 dark:border-indigo-800 shadow-xl space-y-6 animate-fadeIn">
          <!-- Result Card Header -->
          <div class="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-indigo-100 dark:border-indigo-900/60">
            <div class="flex items-center gap-2.5">
              <span class="w-8 h-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center text-sm shadow-md">
                ⚡
              </span>
              <div>
                <h3 class="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                  สคริปต์เดลี่ 3 ล็อคของคุณ (Professional Standup Script)
                </h3>
                <p class="text-xs text-slate-500 dark:text-slate-400">
                  โครงสร้างกระชับ ตรงประเด็น ไวยากรณ์ถูกต้องตามมาตรฐานสากล
                </p>
              </div>
            </div>
            <div class="flex items-center gap-2">
              <span class="px-3 py-1 rounded-full text-xs font-bold bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
                📝 ${scriptData.wordCount} คำ
              </span>
              <span class="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                ⏱️ ~${scriptData.estSeconds} วินาที
              </span>
            </div>
          </div>

          <!-- The English Script -->
          <div class="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-inner">
            <p class="text-base sm:text-lg leading-relaxed text-slate-800 dark:text-slate-100 font-medium font-sans selection:bg-indigo-200">
              ${scriptData.fullScript}
            </p>
          </div>

          <!-- 3-Lock Breakdown Pills -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div class="p-3.5 rounded-xl bg-blue-50/80 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/40 text-xs space-y-1">
              <span class="font-bold text-blue-700 dark:text-blue-300 uppercase tracking-wider block">🔒 ล็อคที่ 1: Yesterday</span>
              <p class="text-slate-600 dark:text-slate-400 line-clamp-2">${scriptData.yesterday}</p>
            </div>
            <div class="p-3.5 rounded-xl bg-purple-50/80 dark:bg-purple-950/40 border border-purple-100 dark:border-purple-900/40 text-xs space-y-1">
              <span class="font-bold text-purple-700 dark:text-purple-300 uppercase tracking-wider block">🔒 ล็อคที่ 2: Today</span>
              <p class="text-slate-600 dark:text-slate-400 line-clamp-2">${scriptData.today}</p>
            </div>
            <div class="p-3.5 rounded-xl bg-emerald-50/80 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900/40 text-xs space-y-1">
              <span class="font-bold text-emerald-700 dark:text-emerald-300 uppercase tracking-wider block">🔒 ล็อคที่ 3: Blockers</span>
              <p class="text-slate-600 dark:text-slate-400 line-clamp-2">${scriptData.blockerText}</p>
            </div>
          </div>

          <!-- Action Toolbar: Listen, Copy, Mic Practice -->
          <div class="flex flex-wrap items-center justify-between gap-3 pt-2">
            <div class="flex flex-wrap items-center gap-2.5">
              <button onclick="window.standupLab.playScriptAudio('${safeText}')"
                class="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-md transition-all flex items-center gap-2 active:scale-95">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/></svg>
                <span>ฟังเสียง AI ต้นแบบ (TTS)</span>
              </button>

              <button onclick="window.standupLab.copyScript()"
                class="px-4 py-2.5 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold rounded-xl border border-slate-300 dark:border-slate-600 shadow-sm transition-all flex items-center gap-2 active:scale-95">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"/></svg>
                <span>คัดลอกสคริปต์ (Copy)</span>
              </button>
            </div>

            <!-- Mic Scoring Button -->
            <div class="flex items-center gap-2 flex-wrap">
              <button id="generator-mic-btn" onclick="window.standupLab.recordAndScoreScript('${safeText}')"
                class="px-4 py-2.5 bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold rounded-xl shadow-md transition-all flex items-center gap-2 active:scale-95">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"/></svg>
                <span>ซ้อมอ่านวัดคะแนน (+30 XP)</span>
              </button>
              <button onclick="window.pronunciationLab.open('${safeText}', '', '')"
                class="px-4 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white text-xs font-bold rounded-xl shadow-md transition-all flex items-center gap-1.5 active:scale-95"
                title="วิเคราะห์สำเนียงเจาะลึกด้วย Pronunciation Lab">
                <span>🎙️</span>
                <span>วิเคราะห์สำเนียง</span>
              </button>
            </div>
          </div>

          <div id="generator-mic-status" class="text-xs text-center text-slate-500 dark:text-slate-400 min-h-[1.5rem] pt-1">
            กดปุ่มสีแดงเพื่อซ้อมอ่านสคริปต์ ระบบจะให้คะแนนความแม่นยำและช่วยตรวจการออกเสียง
          </div>
        </div>
      `;
    },

    render(app, container) {
      this.init(app);
      const activeTab = this.currentTab;

      container.innerHTML = `
        <div class="space-y-8 animate-fadeIn max-w-6xl mx-auto pb-14 w-full">
          <!-- Main Hero Banner -->
          <div class="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-indigo-900 via-indigo-950 to-slate-900 text-white shadow-xl relative overflow-hidden border border-indigo-800/40">
            <div class="relative z-10 max-w-3xl space-y-3">
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-400/30 text-xs font-bold tracking-wide uppercase">
                <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Developer & DevOps Communication Suite</span>
              </div>
              <h1 class="text-2xl sm:text-4xl font-black tracking-tight text-white">
                Tech Standup Lab & Generator 🎙️
              </h1>
              <p class="text-indigo-200 text-xs sm:text-sm leading-relaxed max-w-2xl">
                ศูนย์ฝึกการสื่อสารทางเทคนิคสำหรับ Developer, DevOps และ Cloud Engineer ปูพื้นฐานด้วยสูตรเดลี่ 3 ล็อค, สูตร PREP ตอบคำถามเจาะลึก และเครื่องมือร่างบทอัตโนมัติก่อนเข้าประชุมจริง
              </p>
            </div>
            <!-- Decorative Accent -->
            <div class="absolute -right-10 -bottom-10 w-64 h-64 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none"></div>
          </div>

          <!-- Main Feature Navigation Tabs (5 Tabs) -->
          <div class="flex items-center gap-2 p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-x-auto shadow-inner">
            <button onclick="window.standupLab.switchTab('generator')"
              class="flex-1 min-w-[170px] py-3 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 shrink-0 ${
                activeTab === 'generator'
                  ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-md border border-slate-200/60 dark:border-slate-700'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }">
              <span class="text-base">⚡</span>
              <span>Standup Generator</span>
            </button>

            <button onclick="window.standupLab.switchTab('scenarios')"
              class="flex-1 min-w-[170px] py-3 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 shrink-0 ${
                activeTab === 'scenarios'
                  ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-md border border-slate-200/60 dark:border-slate-700'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }">
              <span class="text-base">🎯</span>
              <span>ซิมูเลเตอร์เดลี่ 6 สถานการณ์</span>
            </button>

            <button onclick="window.standupLab.switchTab('prep')"
              class="flex-1 min-w-[170px] py-3 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 shrink-0 ${
                activeTab === 'prep'
                  ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-md border border-slate-200/60 dark:border-slate-700'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }">
              <span class="text-base">💬</span>
              <span>สูตร PREP เจาะลึก</span>
            </button>

            <button onclick="window.standupLab.switchTab('verbs')"
              class="flex-1 min-w-[170px] py-3 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 shrink-0 ${
                activeTab === 'verbs'
                  ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-md border border-slate-200/60 dark:border-slate-700'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }">
              <span class="text-base">🛡️</span>
              <span>15 Tech Verbs & เอาตัวรอด</span>
            </button>

            <button onclick="window.standupLab.switchTab('phrases')"
              class="flex-1 min-w-[170px] py-3 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 shrink-0 ${
                activeTab === 'phrases'
                  ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-md border border-slate-200/60 dark:border-slate-700'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }">
              <span class="text-base">🎙️</span>
              <span>คลังประโยค 5 หมวด</span>
            </button>
          </div>

          <!-- Tab Content Injection -->
          <div id="standup-tab-container">
            ${this.renderActiveTabContent()}
          </div>
        </div>
      `;

      // Auto-generate initial script if in generator tab and no script yet
      if (activeTab === "generator" && !this.generatorState.generatedScript) {
        this.generateScript();
      }
    },

    renderActiveTabContent() {
      switch (this.currentTab) {
        case "generator":
          return this.renderGeneratorTab();
        case "scenarios":
          return this.renderScenariosTab();
        case "prep":
          return this.renderPrepTab();
        case "verbs":
          return this.renderVerbsAndSaviorTab();
        case "phrases":
          return this.renderPhrasesTab();
        default:
          return this.renderGeneratorTab();
      }
    },

    // =========================================================================
    // TAB 1: STANDUP GENERATOR (3-LOCK INTERACTIVE SCRIPT BUILDER)
    // =========================================================================
    renderGeneratorTab() {
      const templates = window.STANDUP_TEMPLATES || { yesterdayActions: [], todayActions: [], blockerOptions: [] };

      return `
        <div class="space-y-8 animate-fadeIn">
          <!-- Section Intro -->
          <div class="flex flex-wrap items-center justify-between gap-4 p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
            <div class="space-y-1">
              <h2 class="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span>⚡</span>
                <span>เครื่องมือร่างบทเดลี่อัตโนมัติ (Standup Generator)</span>
              </h2>
              <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                กรอกหรือเลือกเทมเพลต 3 ล็อค ระบบจะประกอบเป็นสคริปต์ภาษาอังกฤษที่ไวยากรณ์เป๊ะ พร้อมฟังเสียงและซ้อมพูดทันที
              </p>
            </div>
            <div class="flex items-center gap-2">
              <button onclick="window.standupLab.randomizeScenario()"
                class="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold rounded-xl shadow-sm transition-all flex items-center gap-1.5 active:scale-95">
                <span>🎲</span>
                <span>สุ่มตัวอย่างจริง</span>
              </button>
            </div>
          </div>

          <!-- Form Grid -->
          <div class="grid grid-cols-1 gap-6 bg-white dark:bg-slate-900/80 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
            
            <!-- 0. Greeting & Tone -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
              <div class="space-y-1.5">
                <label class="block text-xs font-bold text-slate-700 dark:text-slate-300">
                  👋 คำทักทายเปิดหัว (Opening Greeting):
                </label>
                <select id="generator-greeting-select" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-medium text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-indigo-500">
                  <option value="Good morning team.">Good morning team. (สุภาพ เป็นทางการ เป็นมาตรฐาน)</option>
                  <option value="Hi everyone, good morning.">Hi everyone, good morning. (เป็นกันเอง สบายๆ)</option>
                  <option value="Morning all, here's my quick update.">Morning all, here's my quick update. (กระชับ เข้าประเด็นทันที)</option>
                  <option value="Good morning everyone, happy Monday.">Good morning everyone, happy Monday. (ทักทายวันจันทร์)</option>
                </select>
              </div>

              <div class="space-y-1.5">
                <label class="block text-xs font-bold text-slate-700 dark:text-slate-300">
                  🤝 คำส่งไม้ต่อท้ายบท (Closing & Hand-off):
                </label>
                <select id="generator-wrapup-select" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-medium text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-indigo-500">
                  <option value="No blockers on my end, passing it over to the next person.">No blockers on my end, passing it over... (ส่งต่อคนถัดไป)</option>
                  <option value="That wraps up my update, back to you.">That wraps up my update, back to you. (ส่งไมค์กลับหา Scrum Master / Lead)</option>
                  <option value="That's all from me. Any quick questions before we move on?">That's all from me. Any quick questions? (เปิดรับคำถามสั้นๆ)</option>
                  <option value="That's it for my side, thanks everyone.">That's it for my side, thanks everyone. (สั้นกระชับ)</option>
                </select>
              </div>
            </div>

            <!-- LOCK 1: Yesterday -->
            <div class="space-y-3">
              <div class="flex flex-wrap items-center justify-between gap-2">
                <label class="text-sm font-black text-blue-600 dark:text-blue-400 flex items-center gap-1.5">
                  <span class="w-5 h-5 rounded-md bg-blue-100 dark:bg-blue-900/60 flex items-center justify-center text-xs">1</span>
                  <span>🔒 ล็อคที่ 1: เมื่อวานทำอะไรสำเร็จ (Yesterday - Past Simple V2)</span>
                </label>
                <span class="text-xs text-slate-400">เน้นผลลัพธ์ ไม่ใช่กระบวนการ</span>
              </div>

              <!-- Quick Presets -->
              <div class="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
                <span class="text-slate-400 shrink-0 font-medium">ตัวเลือกด่วน:</span>
                ${templates.yesterdayActions.map((y, idx) => `
                  <button type="button" onclick="window.standupLab.setYesterdayPreset(${idx})"
                    class="px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950/50 hover:bg-blue-100 dark:hover:bg-blue-900 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/60 shrink-0 text-xs font-medium transition-all">
                    ${y.label.split("(")[0]}
                  </button>
                `).join("")}
              </div>

              <textarea id="generator-yesterday-input" rows="2"
                placeholder="เช่น Yesterday, I investigated the Kubernetes pod CrashLoopBackOff issue and fixed the container memory limit."
                class="w-full px-4 py-3 rounded-2xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs sm:text-sm text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-blue-500 font-mono">${this.generatorState.yesterdayText}</textarea>
            </div>

            <!-- LOCK 2: Today -->
            <div class="space-y-3">
              <div class="flex flex-wrap items-center justify-between gap-2">
                <label class="text-sm font-black text-purple-600 dark:text-purple-400 flex items-center gap-1.5">
                  <span class="w-5 h-5 rounded-md bg-purple-100 dark:bg-purple-900/60 flex items-center justify-center text-xs">2</span>
                  <span>🔒 ล็อคที่ 2: วันนี้จะลุยอะไรต่อ (Today - Plan & Focus)</span>
                </label>
                <span class="text-xs text-slate-400">บอกเป้าหมายหลัก 1-2 ข้อ ไม่เล่าทุกอย่าง</span>
              </div>

              <!-- Quick Presets -->
              <div class="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
                <span class="text-slate-400 shrink-0 font-medium">ตัวเลือกด่วน:</span>
                ${templates.todayActions.map((t, idx) => `
                  <button type="button" onclick="window.standupLab.setTodayPreset(${idx})"
                    class="px-2.5 py-1 rounded-lg bg-purple-50 dark:bg-purple-950/50 hover:bg-purple-100 dark:hover:bg-purple-900 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800/60 shrink-0 text-xs font-medium transition-all">
                    ${t.label.split("(")[0]}
                  </button>
                `).join("")}
              </div>

              <textarea id="generator-today-input" rows="2"
                placeholder="เช่น Today, I will continue implementing the payment webhook handler and open a pull request for review."
                class="w-full px-4 py-3 rounded-2xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs sm:text-sm text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-purple-500 font-mono">${this.generatorState.todayText}</textarea>
            </div>

            <!-- LOCK 3: Blockers -->
            <div class="space-y-3">
              <div class="flex flex-wrap items-center justify-between gap-2">
                <label class="text-sm font-black text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                  <span class="w-5 h-5 rounded-md bg-emerald-100 dark:bg-emerald-900/60 flex items-center justify-center text-xs">3</span>
                  <span>🔒 ล็อคที่ 3: ปัญหาติดขัด (Blockers & Dependencies)</span>
                </label>
                <span class="text-xs text-slate-400">ถ้าไม่มีให้บอกชัดเจน ถ้ามีให้บอกสิ่งที่ทำไปแล้ว</span>
              </div>

              <!-- Blocker Radio Tiles -->
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                ${templates.blockerOptions.map((b, idx) => `
                  <label class="flex items-start gap-2.5 p-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/60 cursor-pointer transition-all text-xs font-medium ${
                    this.generatorState.blockerType === b.id ? 'bg-emerald-50/80 dark:bg-emerald-950/30 border-emerald-400 dark:border-emerald-700' : ''
                  }">
                    <input type="radio" name="blocker-choice" value="${b.id}"
                      ${this.generatorState.blockerType === b.id ? 'checked' : ''}
                      onchange="window.standupLab.setBlockerPreset('${b.id}')"
                      class="mt-0.5 text-emerald-600 focus:ring-emerald-500">
                    <span class="text-slate-700 dark:text-slate-300">${b.label}</span>
                  </label>
                `).join("")}

                <label class="flex items-start gap-2.5 p-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/60 cursor-pointer transition-all text-xs font-medium ${
                  this.generatorState.blockerType === 'custom' ? 'bg-emerald-50/80 dark:bg-emerald-950/30 border-emerald-400 dark:border-emerald-700' : ''
                }">
                  <input type="radio" name="blocker-choice" value="custom"
                    ${this.generatorState.blockerType === 'custom' ? 'checked' : ''}
                    onchange="window.standupLab.setBlockerPreset('custom')"
                    class="mt-0.5 text-emerald-600 focus:ring-emerald-500">
                  <span class="text-slate-700 dark:text-slate-300">✏️ พิมพ์ปัญหาอื่นเอง (Custom Blocker)</span>
                </label>
              </div>

              <!-- Custom Blocker Text Area -->
              <div id="generator-blocker-custom-container" class="${this.generatorState.blockerType === 'custom' ? '' : 'hidden'} pt-2">
                <textarea id="generator-blocker-custom-input" rows="2"
                  placeholder="พิมพ์ Blocker ของคุณ เช่น I am blocked by the staging database credential sync; I will ping DevOps right after this call."
                  class="w-full px-4 py-3 rounded-2xl border border-emerald-300 dark:border-emerald-700 bg-white dark:bg-slate-800 text-xs sm:text-sm text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-emerald-500 font-mono">${this.generatorState.blockerCustomText}</textarea>
              </div>
            </div>

            <!-- Submit Button -->
            <div class="pt-4">
              <button onclick="window.standupLab.generateScript()"
                class="w-full py-4 bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-black text-sm sm:text-base rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2 active:scale-98">
                <span>✨</span>
                <span>สร้างสคริปต์เดลี่ทันที (Generate Standup Script)</span>
              </button>
            </div>
          </div>

          <!-- Result Container Anchor -->
          <div id="generator-result-box">
            ${this.renderGeneratedResultHtml()}
          </div>
        </div>
      `;
    },

    // =========================================================================
    // TAB 2: STANDUP SCENARIOS (6 REAL-WORLD INCIDENT & DEVOPS SIMULATIONS)
    // =========================================================================
    renderScenariosTab() {
      const scenarios = window.STANDUP_SCENARIOS || [];
      const activeIdx = this.activeScenarioIdx;
      const cur = scenarios[activeIdx] || scenarios[0];

      if (!cur) return `<p class="text-slate-500 text-center py-10">ไม่พบข้อมูลสถานการณ์</p>`;

      const safeSpeech = cur.fullSpeech.replace(/'/g, "\\'");

      return `
        <div class="space-y-8 animate-fadeIn">
          <!-- Header -->
          <div class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div class="space-y-1">
              <h2 class="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span>🎯</span>
                <span>ซิมูเลเตอร์เดลี่ 6 สถานการณ์จริง (Standup Scenarios)</span>
              </h2>
              <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                เรียนรู้โครงสร้างการรายงานจากกรณีศึกษาจริงในวงการ Tech: K8s Upgrade, Database Latency, Production Deploy, Terraform IaC
              </p>
            </div>
            <span class="px-3 py-1 rounded-full text-xs font-bold bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
              ${activeIdx + 1} / ${scenarios.length} เคส
            </span>
          </div>

          <!-- Scenario Pills Switcher -->
          <div class="flex items-center gap-2 overflow-x-auto pb-2">
            ${scenarios.map((sc, idx) => `
              <button onclick="window.standupLab.selectScenario(${idx})"
                class="px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 shrink-0 ${
                  activeIdx === idx
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
                }">
                <span>${idx + 1}.</span>
                <span>${sc.titleTh.split(" ")[0]}</span>
              </button>
            `).join("")}
          </div>

          <!-- Scenario Detail Card -->
          <div class="bg-white dark:bg-slate-900/90 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            <div class="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
              <div>
                <div class="flex items-center gap-2 mb-1">
                  <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
                    ${cur.badge || 'Engineering'}
                  </span>
                  <span class="text-xs text-slate-400 font-medium">Role: ${cur.role}</span>
                </div>
                <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
                  ${cur.title}
                </h3>
                <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                  ${cur.titleTh}
                </p>
              </div>

              <div class="flex items-center gap-2">
                <button onclick="window.standupLab.playScriptAudio('${safeSpeech}')"
                  class="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-sm transition-all flex items-center gap-2">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/></svg>
                  <span>ฟังเสียงเต็ม (Listen)</span>
                </button>
              </div>
            </div>

            <!-- 3 Locks Content Breakdown -->
            <div class="space-y-4">
              <!-- Yesterday -->
              <div class="p-4 rounded-2xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/40 space-y-1.5">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-black text-blue-700 dark:text-blue-300 uppercase tracking-wider">🔒 Yesterday:</span>
                  <button onclick="window.standupLab.playScriptAudio('${cur.yesterday.en.replace(/'/g, "\\'")}')" class="text-blue-600 dark:text-blue-400 text-xs font-semibold hover:underline">🔊 ฟังท่อนนี้</button>
                </div>
                <p class="text-sm font-semibold text-slate-800 dark:text-slate-100">${cur.yesterday.en}</p>
                <p class="text-xs text-slate-500 dark:text-slate-400">${cur.yesterday.th}</p>
                ${cur.yesterday.tip ? `<p class="text-[11px] text-blue-600 dark:text-blue-400 font-medium pt-1">💡 Tips: ${cur.yesterday.tip}</p>` : ''}
              </div>

              <!-- Today -->
              <div class="p-4 rounded-2xl bg-purple-50/60 dark:bg-purple-950/30 border border-purple-100 dark:border-purple-900/40 space-y-1.5">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-black text-purple-700 dark:text-purple-300 uppercase tracking-wider">🔒 Today:</span>
                  <button onclick="window.standupLab.playScriptAudio('${cur.today.en.replace(/'/g, "\\'")}')" class="text-purple-600 dark:text-purple-400 text-xs font-semibold hover:underline">🔊 ฟังท่อนนี้</button>
                </div>
                <p class="text-sm font-semibold text-slate-800 dark:text-slate-100">${cur.today.en}</p>
                <p class="text-xs text-slate-500 dark:text-slate-400">${cur.today.th}</p>
                ${cur.today.tip ? `<p class="text-[11px] text-purple-600 dark:text-purple-400 font-medium pt-1">💡 Tips: ${cur.today.tip}</p>` : ''}
              </div>

              <!-- Blocker -->
              <div class="p-4 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/40 space-y-1.5">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-black text-emerald-700 dark:text-emerald-300 uppercase tracking-wider">🔒 Blocker:</span>
                  <button onclick="window.standupLab.playScriptAudio('${cur.blocker.en.replace(/'/g, "\\'")}')" class="text-emerald-600 dark:text-emerald-400 text-xs font-semibold hover:underline">🔊 ฟังท่อนนี้</button>
                </div>
                <p class="text-sm font-semibold text-slate-800 dark:text-slate-100">${cur.blocker.en}</p>
                <p class="text-xs text-slate-500 dark:text-slate-400">${cur.blocker.th}</p>
                ${cur.blocker.tip ? `<p class="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium pt-1">💡 Tips: ${cur.blocker.tip}</p>` : ''}
              </div>
            </div>

            <!-- Full Speech & Mic Practice -->
            <div class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-4">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">🎙️ สคริปต์ฉบับเต็มสำหรับซ้อมพูด:</span>
                <span class="text-xs text-indigo-600 dark:text-indigo-400 font-bold">+${cur.xpReward || 35} XP</span>
              </div>
              <p class="text-sm leading-relaxed text-slate-800 dark:text-slate-200 font-medium">
                "${cur.fullSpeech}"
              </p>
              <div class="flex items-center justify-between gap-3 pt-2">
                <div id="scenario-mic-status-${activeIdx}" class="text-xs text-slate-500 dark:text-slate-400">
                  กดปุ่มเพื่อเริ่มซ้อมพูดและรับคะแนนความแม่นยำ AI
                </div>
                <button id="scenario-mic-btn-${activeIdx}" onclick="window.standupLab.recordAndScoreScenario(${activeIdx}, '${safeSpeech}')"
                  class="px-5 py-2.5 bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold rounded-xl shadow-md transition-all flex items-center gap-2 active:scale-95 shrink-0">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"/></svg>
                  <span>ซ้อมอ่านสคริปต์นี้</span>
                </button>
              </div>
            </div>

            <!-- Key Vocab Tags -->
            ${cur.keyVocab?.length ? `
              <div class="space-y-2 pt-2">
                <span class="text-xs font-bold text-slate-600 dark:text-slate-400">คำศัพท์เฉพาะทางในเคสนี้:</span>
                <div class="flex flex-wrap gap-2">
                  ${cur.keyVocab.map(v => `
                    <div class="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center gap-2 text-xs">
                      <span class="font-bold text-indigo-600 dark:text-indigo-400">${v.word}</span>
                      <span class="text-slate-400 text-[11px] font-mono">${v.ipa || ''}</span>
                      <span class="text-slate-600 dark:text-slate-300">${v.th}</span>
                      <button onclick="window.speechEngine.speak('${v.word}')" class="text-slate-400 hover:text-indigo-500">🔊</button>
                    </div>
                  `).join("")}
                </div>
              </div>
            ` : ''}
          </div>
        </div>
      `;
    },

    selectScenario(idx) {
      if (window.soundFx) window.soundFx.playClick();
      this.activeScenarioIdx = idx;
      const container = document.getElementById("standup-tab-container");
      if (container) container.innerHTML = this.renderScenariosTab();
    },

    recordAndScoreScenario(idx, text) {
      const statusEl = document.getElementById(`scenario-mic-status-${idx}`);
      const micBtn = document.getElementById(`scenario-mic-btn-${idx}`);

      if (statusEl) statusEl.textContent = "🎙️ กำลังฟังเสียงของคุณ... กรุณาอ่านเลยครับ";
      if (micBtn) micBtn.classList.add("recording-pulse");

      if (!window.speechEngine) return;
      window.speechEngine.listenAndScore(text, {
        onStart: () => {
          if (window.soundFx) window.soundFx.playClick();
        },
        onResult: (res) => {
          if (micBtn) micBtn.classList.remove("recording-pulse");
          if (statusEl) {
            statusEl.innerHTML = `<span class="font-bold text-indigo-600 dark:text-indigo-400">ความแม่นยำ: ${res.score}%</span> ("${res.spokenText}")`;
          }
          if (res.isPass) {
            if (window.soundFx) window.soundFx.playCorrect();
            if (window.storageManager) {
              window.storageManager.addXP(35);
              window.storageManager.recordSpeakingDrill();
              window.storageManager.recordQuestProgress("speakSentences", 1);
            }
            if (this.app) {
              this.app.renderHeaderStats();
              this.app.showToast(`🎉 ออกเสียงได้ ${res.score}% ผ่านฉลุย! (+35 XP)`, "success");
            }
          } else {
            if (window.soundFx) window.soundFx.playIncorrect();
            if (this.app) {
              this.app.showToast(`ได้คะแนน ${res.score}% ลองอ่านใหม่อีกรอบนะครับ`, "info");
            }
          }
        },
        onError: (err) => {
          if (micBtn) micBtn.classList.remove("recording-pulse");
          if (statusEl) statusEl.textContent = err.message || "เกิดข้อผิดพลาด";
        },
        onEnd: () => {
          if (micBtn) micBtn.classList.remove("recording-pulse");
        }
      });
    },

    // =========================================================================
    // TAB 3: PREP Q&A LAB (DEEP-DIVE QUESTIONS)
    // =========================================================================
    renderPrepTab() {
      const questions = window.PREP_QA_SCENARIOS || [];
      const activeIdx = this.activePrepIdx;
      const cur = questions[activeIdx] || questions[0];

      if (!cur) return `<p class="text-slate-500 text-center py-10">ไม่พบข้อมูล PREP</p>`;

      const safeAnswer = cur.fullAnswer.replace(/'/g, "\\'");

      return `
        <div class="space-y-8 animate-fadeIn">
          <!-- Header -->
          <div class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div class="space-y-1">
              <h2 class="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span>💬</span>
                <span>สูตร "PREP" ตอบคำถามเมื่อโดนเจาะลึก (PREP Q&A Lab)</span>
              </h2>
              <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                หมดปัญหาตอบไม่ตรงคำถาม เล่าเรื่องเยิ่นเย้อ ด้วยโครงสร้าง: Point (ประเด็น) ➔ Reason (เหตุผล) ➔ Example (หลักฐาน) ➔ Point (สรุปย้ำ)
              </p>
            </div>
            <span class="px-3 py-1 rounded-full text-xs font-bold bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300">
              5 คำถามเจาะลึกยอดฮิต
            </span>
          </div>

          <!-- Question Pills -->
          <div class="flex items-center gap-2 overflow-x-auto pb-2">
            ${questions.map((q, idx) => `
              <button onclick="window.standupLab.selectPrep(${idx})"
                class="px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 shrink-0 ${
                  activeIdx === idx
                    ? 'bg-purple-600 text-white shadow-md'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
                }">
                <span>Q${idx + 1}:</span>
                <span>${q.questionTh.split(" ")[0]}</span>
              </button>
            `).join("")}
          </div>

          <!-- Question & PREP Structure Card -->
          <div class="bg-white dark:bg-slate-900/90 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            <!-- Question Box -->
            <div class="p-5 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 space-y-2">
              <div class="flex items-center justify-between">
                <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-amber-200 dark:bg-amber-900 text-amber-800 dark:text-amber-200">
                  🎯 คำถามที่โดนยิงใส่ (Deep-Dive Question)
                </span>
                <span class="text-xs text-amber-700 dark:text-amber-300 font-medium">${cur.category || ''}</span>
              </div>
              <h3 class="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                "${cur.question}"
              </h3>
              <p class="text-xs text-slate-600 dark:text-slate-400 font-medium">
                คำแปล: ${cur.questionTh}
              </p>
            </div>

            <!-- Savior Opener -->
            ${cur.saviorOpener ? `
              <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-between gap-3 text-xs">
                <div class="space-y-0.5">
                  <span class="font-bold text-indigo-600 dark:text-indigo-400">🛡️ ประโยคซื้อเวลาเปิดหัว (Savior Opener):</span>
                  <p class="font-medium text-slate-800 dark:text-slate-200">"${cur.saviorOpener}"</p>
                  <p class="text-slate-500 dark:text-slate-400 text-[11px]">${cur.saviorOpenerTh || ''}</p>
                </div>
                <button onclick="window.speechEngine.speak('${cur.saviorOpener.replace(/'/g, "\\'")}')" class="px-3 py-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-300 font-bold shrink-0 hover:bg-indigo-100">
                  🔊 ฟัง
                </button>
              </div>
            ` : ''}

            <!-- 4 PREP Blocks -->
            <div class="space-y-3">
              <!-- P -->
              <div class="p-4 rounded-2xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/50 space-y-1">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-black text-blue-700 dark:text-blue-300">🔵 P - Point (ตอบตรงประเด็นทันที)</span>
                  <button onclick="window.speechEngine.speak('${cur.prep.point.en.replace(/'/g, "\\'")}')" class="text-blue-600 dark:text-blue-400 text-xs font-semibold hover:underline">🔊 ฟัง</button>
                </div>
                <p class="text-sm font-semibold text-slate-800 dark:text-slate-100">${cur.prep.point.en}</p>
                <p class="text-xs text-slate-500 dark:text-slate-400">${cur.prep.point.th}</p>
              </div>

              <!-- R -->
              <div class="p-4 rounded-2xl bg-purple-50/70 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-900/50 space-y-1">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-black text-purple-700 dark:text-purple-300">🟣 R - Reason (ให้เหตุผลเชิงเทคนิค)</span>
                  <button onclick="window.speechEngine.speak('${cur.prep.reason.en.replace(/'/g, "\\'")}')" class="text-purple-600 dark:text-purple-400 text-xs font-semibold hover:underline">🔊 ฟัง</button>
                </div>
                <p class="text-sm font-semibold text-slate-800 dark:text-slate-100">${cur.prep.reason.en}</p>
                <p class="text-xs text-slate-500 dark:text-slate-400">${cur.prep.reason.th}</p>
              </div>

              <!-- E -->
              <div class="p-4 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/50 space-y-1">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-black text-emerald-700 dark:text-emerald-300">🟢 E - Example / Evidence (หลักฐาน / สิ่งที่ทำไปแล้ว)</span>
                  <button onclick="window.speechEngine.speak('${cur.prep.example.en.replace(/'/g, "\\'")}')" class="text-emerald-600 dark:text-emerald-400 text-xs font-semibold hover:underline">🔊 ฟัง</button>
                </div>
                <p class="text-sm font-semibold text-slate-800 dark:text-slate-100">${cur.prep.example.en}</p>
                <p class="text-xs text-slate-500 dark:text-slate-400">${cur.prep.example.th}</p>
              </div>

              <!-- P -->
              <div class="p-4 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 space-y-1">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-black text-amber-700 dark:text-amber-300">🟡 P - Point / Next Step (สรุปย้ำผลลัพธ์และสเต็ปถัดไป)</span>
                  <button onclick="window.speechEngine.speak('${cur.prep.pointNext.en.replace(/'/g, "\\'")}')" class="text-amber-600 dark:text-amber-400 text-xs font-semibold hover:underline">🔊 ฟัง</button>
                </div>
                <p class="text-sm font-semibold text-slate-800 dark:text-slate-100">${cur.prep.pointNext.en}</p>
                <p class="text-xs text-slate-500 dark:text-slate-400">${cur.prep.pointNext.th}</p>
              </div>
            </div>

            <!-- Full Answer & Mic -->
            <div class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-slate-700 dark:text-slate-300">คำตอบเต็มสูตร PREP สำหรับซ้อมพูด:</span>
                <button onclick="window.standupLab.playScriptAudio('${safeAnswer}')" class="text-xs font-bold text-purple-600 dark:text-purple-400 hover:underline">
                  🔊 ฟังเสียงทั้งหมด
                </button>
              </div>
              <p class="text-sm leading-relaxed text-slate-800 dark:text-slate-200 font-medium">
                "${cur.fullAnswer}"
              </p>
              ${cur.keyTip ? `<p class="text-xs text-indigo-600 dark:text-indigo-400 font-medium">💡 คำแนะนำ: ${cur.keyTip}</p>` : ''}
              <div class="flex items-center justify-between gap-3 pt-2">
                <div id="prep-mic-status-${activeIdx}" class="text-xs text-slate-500">
                  ซ้อมตอบคำถามนี้เพื่อความมั่นใจในห้องประชุม
                </div>
                <button id="prep-mic-btn-${activeIdx}" onclick="window.standupLab.recordAndScorePrep(${activeIdx}, '${safeAnswer}')"
                  class="px-5 py-2.5 bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold rounded-xl shadow-md transition-all flex items-center gap-2 active:scale-95 shrink-0">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"/></svg>
                  <span>ซ้อมตอบคำถามนี้</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      `;
    },

    selectPrep(idx) {
      if (window.soundFx) window.soundFx.playClick();
      this.activePrepIdx = idx;
      const container = document.getElementById("standup-tab-container");
      if (container) container.innerHTML = this.renderPrepTab();
    },

    recordAndScorePrep(idx, text) {
      const statusEl = document.getElementById(`prep-mic-status-${idx}`);
      const micBtn = document.getElementById(`prep-mic-btn-${idx}`);

      if (statusEl) statusEl.textContent = "🎙️ กำลังฟังเสียงของคุณ... กรุณาตอบเลยครับ";
      if (micBtn) micBtn.classList.add("recording-pulse");

      if (!window.speechEngine) return;
      window.speechEngine.listenAndScore(text, {
        onStart: () => {
          if (window.soundFx) window.soundFx.playClick();
        },
        onResult: (res) => {
          if (micBtn) micBtn.classList.remove("recording-pulse");
          if (statusEl) {
            statusEl.innerHTML = `<span class="font-bold text-indigo-600 dark:text-indigo-400">ความแม่นยำ: ${res.score}%</span> ("${res.spokenText}")`;
          }
          if (res.isPass) {
            if (window.soundFx) window.soundFx.playCorrect();
            if (window.storageManager) {
              window.storageManager.addXP(30);
              window.storageManager.recordSpeakingDrill();
              window.storageManager.recordQuestProgress("speakSentences", 1);
            }
            if (this.app) {
              this.app.renderHeaderStats();
              this.app.showToast(`🎉 ตอบได้ดีมาก! ได้คะแนน ${res.score}% (+30 XP)`, "success");
            }
          } else {
            if (window.soundFx) window.soundFx.playIncorrect();
            if (this.app) this.app.showToast(`ได้คะแนน ${res.score}% ลองเว้นวรรคให้ชัดเจนขึ้นนะครับ`, "info");
          }
        },
        onError: (err) => {
          if (micBtn) micBtn.classList.remove("recording-pulse");
          if (statusEl) statusEl.textContent = err.message || "เกิดข้อผิดพลาด";
        },
        onEnd: () => {
          if (micBtn) micBtn.classList.remove("recording-pulse");
        }
      });
    },

    // =========================================================================
    // TAB 4: SAVIOR PHRASES & 15 TECH VERBS
    // =========================================================================
    renderVerbsAndSaviorTab() {
      const data = window.TECH_VERBS_AND_SAVIOR_PHRASES || { saviorCategories: [], techVerbs: [] };

      return `
        <div class="space-y-8 animate-fadeIn">
          <!-- Section 1: Savior Phrases -->
          <div class="space-y-4">
            <div class="p-5 rounded-2xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/40">
              <h2 class="text-lg sm:text-xl font-bold text-amber-900 dark:text-amber-200 flex items-center gap-2">
                <span>🛡️</span>
                <span>ประโยคทองคำ "เอาตัวรอด" เมื่อโดนถามแล้วคิดไม่ออก / ยังไม่พร้อมตอบ</span>
              </h2>
              <p class="text-xs sm:text-sm text-amber-800 dark:text-amber-300 mt-1">
                อย่าปล่อยให้เกิด Dead Air นิ่งเงียบเด็ดขาด! ใช้ประโยคเหล่านี้เพื่อซื้อเวลา 3-5 วินาที หรือขอคุยนอกรอบอย่างมืออาชีพ
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              ${data.saviorCategories.map(cat => `
                <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
                  <div>
                    <h3 class="text-sm font-black text-slate-900 dark:text-white">${cat.title}</h3>
                    <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">${cat.description}</p>
                  </div>

                  <div class="space-y-2 pt-1">
                    ${cat.phrases.map(p => `
                      <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60 flex items-start justify-between gap-3 text-xs">
                        <div class="space-y-0.5">
                          <p class="font-bold text-slate-800 dark:text-slate-200">"${p.en}"</p>
                          <p class="text-slate-500 dark:text-slate-400">${p.th}</p>
                        </div>
                        <button onclick="window.speechEngine.speak('${p.en.replace(/'/g, "\\'")}')"
                          class="p-1.5 rounded-lg text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950 shrink-0">
                          🔊
                        </button>
                      </div>
                    `).join("")}
                  </div>
                </div>
              `).join("")}
            </div>
          </div>

          <!-- Section 2: 15 Essential Tech Verbs -->
          <div class="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
            <div class="p-5 rounded-2xl bg-indigo-50/80 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-900/40">
              <h2 class="text-lg sm:text-xl font-bold text-indigo-900 dark:text-indigo-200 flex items-center gap-2">
                <span>⚡</span>
                <span>15 คำกริยาเฉพาะทาง (Tech Verbs) ที่ควรมีติดปาก</span>
              </h2>
              <p class="text-xs sm:text-sm text-indigo-800 dark:text-indigo-300 mt-1">
                เปลี่ยนจากคำกว้างๆ เช่น "fix", "do", "make" มาเป็นกริยาทางวิศวกรรมที่ตรงจุด สื่อสารได้แม่นยำและเพิ่มความน่าเชื่อถือ
              </p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              ${data.techVerbs.map(v => `
                <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2 hover:border-indigo-300 dark:hover:border-indigo-700 transition-all">
                  <div class="flex items-center justify-between">
                    <span class="text-base font-black text-indigo-600 dark:text-indigo-400">${v.verb}</span>
                    <div class="flex items-center gap-1.5">
                      <span class="text-xs font-mono text-slate-400">${v.ipa}</span>
                      <button onclick="window.speechEngine.speak('${v.verb}')" class="p-1 text-slate-400 hover:text-indigo-600">🔊</button>
                    </div>
                  </div>
                  <p class="text-xs font-semibold text-slate-700 dark:text-slate-300">${v.th}</p>
                  <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 text-[11px] space-y-0.5 border border-slate-100 dark:border-slate-700/40">
                    <p class="font-medium text-slate-800 dark:text-slate-200">"${v.example}"</p>
                    <p class="text-slate-500 dark:text-slate-400">${v.exampleTh}</p>
                  </div>
                </div>
              `).join("")}
            </div>
          </div>
        </div>
      `;
    },

    // =========================================================================
    // TAB 5: QUICK CATEGORIZED PHRASES (ORIGINAL 5 CATEGORIES)
    // =========================================================================
    renderPhrasesTab() {
      const categories = [
        { id: "standup", label: "Daily Stand-up & Sprint", emoji: "🚀", badge: "Agile" },
        { id: "incidents", label: "Incident & Outage Alerts", emoji: "🚨", badge: "SRE" },
        { id: "meetings", label: "Meetings & Polite Proposals", emoji: "💼", badge: "Discussions" },
        { id: "phonics", label: "Phonics & Tricky Sounds", emoji: "🗣️", badge: "Pronunciation" },
        { id: "social", label: "Office Small Talk & Social", emoji: "☕", badge: "Team" }
      ];

      const phraseMap = {
        standup: [
          { en: "Yesterday, I completed the database indexing task and verified it on staging.", th: "เมื่อวานผมทำ Indexing ฐานข้อมูลเสร็จและตรวจสอบบน Staging เรียบร้อยแล้วครับ" },
          { en: "Today, I will focus on integrating the payment gateway webhooks.", th: "วันนี้ผมจะโฟกัสที่การเชื่อมต่อ Webhook ของระบบชำระเงินครับ" },
          { en: "I have no blockers at the moment, everything is progressing on track.", th: "ตอนนี้ผมไม่มีปัญหาติดขัดอะไร ทุกอย่างดำเนินไปตามแผนครับ" },
          { en: "Could we sync up after the stand-up regarding the API schema changes?", th: "หลังจบ Stand-up เรามาซิงก์กันเรื่องการเปลี่ยน Schema ของ API ได้ไหมครับ?" },
          { en: "I am currently blocked by missing IAM permissions on the GCP service account.", th: "ตอนนี้ผมติดขัดเรื่องสิทธิ์การเข้าถึง Service Account บน GCP ครับ" },
          { en: "The pull request is ready for review, please take a look when you have time.", th: "PR พร้อมให้รีวิวแล้วครับ รบกวนช่วยตรวจดูเมื่อมีเวลาว่างนะครับ" }
        ],
        incidents: [
          { en: "We are experiencing a sudden spike in latency across all microservices.", th: "เรากำลังพบว่า Latency พุ่งสูงขึ้นกะทันหันในทุก Microservices ครับ" },
          { en: "The database connection pool has been exhausted, leading to HTTP 500 errors.", th: "Connection pool ของฐานข้อมูลเต็ม ส่งผลให้เกิด Error 500 ครับ" },
          { en: "I have initiated an immediate rollback to the previous stable release container.", th: "ผมได้สั่ง Rollback กลับไปเวอร์ชันก่อนหน้าที่เสถียรทันทีแล้วครับ" },
          { en: "Traffic has stabilized, and error rates have returned to normal baseline levels.", th: "ปริมาณทราฟฟิกนิ่งแล้ว และอัตรา Error กลับสู่ระดับปกติแล้วครับ" },
          { en: "Let's schedule a blameless post-mortem meeting for tomorrow morning.", th: "เรามานัดประชุม Post-mortem แบบไม่จับผิดกันพรุ่งนี้เช้านะครับ" },
          { en: "Please isolate the compromised pod and inspect the security audit logs immediately.", th: "กรุณาแยก Pod ที่มีความเสี่ยงออกและตรวจสอบ Audit Log ทันทีครับ" }
        ],
        meetings: [
          { en: "I agree with your proposal, but we also need to consider the maintenance overhead.", th: "ผมเห็นด้วยกับข้อเสนอครับ แต่เราต้องพิจารณาภาระด้านการดูแลรักษาระยะยาวด้วย" },
          { en: "Could you please elaborate on how this caching mechanism handles cache invalidation?", th: "ช่วยอธิบายเพิ่มเติมได้ไหมครับว่ากลไกแคชนี้จัดการการล้างข้อมูลแคชอย่างไร?" },
          { en: "From my perspective, migrating to a serverless architecture will reduce idle infrastructure costs.", th: "ในมุมมองของผม การย้ายไปสถาปัตยกรรม Serverless จะช่วยลดค่าใช้จ่ายคลาวด์ช่วงที่ไม่มีการใช้งานลงได้ครับ" },
          { en: "Let's align on the action items and assign clear owners before wrapping up the call.", th: "ก่อนจบการประชุม เรามาสรุป Action items และผู้รับผิดชอบให้ตรงกันก่อนนะครับ" },
          { en: "Just to clarify, does this database migration require scheduled maintenance downtime?", th: "ขอความชัดเจนอีกนิด การย้ายระบบครั้งนี้จำเป็นต้องมีช่วงเวลาปิดปรับปรุงระบบหรือไม่ครับ?" },
          { en: "I propose we run a small proof of concept before rolling this out to all regions.", th: "ผมขอเสนอให้เราทำ Proof of Concept ดูก่อนที่จะปล่อยไปยังทุก Region ครับ" }
        ],
        phonics: [
          { en: "Verify that the wireless virtual network is working reliably.", th: "ตรวจสอบว่าเครือข่ายเสมือนไร้สายทำงานได้อย่างน่าเชื่อถือ (/v/ vs /w/)" },
          { en: "Think about the security of these three interconnected systems.", th: "ลองคิดถึงความปลอดภัยของทั้งสามระบบที่เชื่อมโยงกันนี้ (/θ/ vs /s/)" },
          { en: "Read the release notes carefully before loading the container cluster.", th: "อ่าน Release notes อย่างละเอียดก่อนโหลด Container Cluster (/r/ vs /l/)" },
          { en: "Please configure the production firewall rules properly.", th: "กรุณากำหนดค่าไฟร์วอลล์ของโปรดักชันให้ถูกต้องสมบูรณ์ (/p/ vs /f/)" },
          { en: "The build succeeded and passed all integration test suites.", th: "การ Build สำเร็จและผ่านชุดการทดสอบทั้งหมด (เสียงลงท้าย -ed)" },
          { en: "Ship the feature branch directly to the testing sandbox environment.", th: "ส่ง Feature branch ตรงไปยังพื้นที่ทดสอบ Sandbox (/ʃ/ vs /tʃ/)" }
        ],
        social: [
          { en: "How has your week been going so far? Anything exciting on your radar?", th: "สัปดาห์นี้การทำงานของคุณเป็นอย่างไรบ้างครับ มีอะไรน่าตื่นเต้นไหม?" },
          { en: "Are you planning to do anything fun this upcoming weekend?", th: "สุดสัปดาห์ที่จะถึงนี้มีแผนไปเที่ยวพักผ่อนที่ไหนสนุก ๆ ไหมครับ?" },
          { en: "I really enjoyed your presentation during the engineering all-hands meeting.", th: "ผมชอบสไลด์นำเสนอของคุณในที่ประชุมใหญ่มากเลยครับ" },
          { en: "Do you fancy grabbing a cup of freshly brewed coffee downstairs?", th: "อยากลงไปดื่มกาแฟสดข้างล่างด้วยกันสักแก้วไหมครับ?" },
          { en: "Congratulations on successfully launching the new service, fantastic work team!", th: "ยินดีด้วยกับการเปิดตัวบริการใหม่ สำเร็จลุล่วง ยอดเยี่ยมมากครับ!" },
          { en: "Feel free to reach out anytime if you need an extra pair of eyes on that pull request.", th: "ติดต่อมาได้ตลอดเลยนะครับถ้าต้องการคนช่วยตรวจดู Pull Request" }
        ]
      };

      const activeCatId = this.app.speakingLabCategory || "standup";
      const phrases = phraseMap[activeCatId] || phraseMap.standup;

      return `
        <div class="space-y-6 animate-fadeIn">
          <!-- Category Selector -->
          <div class="flex items-center gap-2 overflow-x-auto pb-2">
            ${categories.map(c => `
              <button onclick="window.app.switchSpeakingCategory('${c.id}')"
                class="px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 shrink-0 ${
                  activeCatId === c.id
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
                }">
                <span>${c.emoji}</span>
                <span>${c.label}</span>
              </button>
            `).join("")}
          </div>

          <!-- Phrase Cards -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            ${phrases.map((p, idx) => `
              <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
                <div class="flex items-start justify-between gap-3">
                  <p class="text-sm font-bold text-slate-900 dark:text-white leading-relaxed">
                    "${p.en}"
                  </p>
                  <button onclick="window.speechEngine.speak('${p.en.replace(/'/g, "\\'")}')"
                    class="p-2 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950 rounded-xl transition-all shrink-0">
                    🔊
                  </button>
                </div>
                <p class="text-xs text-slate-500 dark:text-slate-400">
                  ${p.th}
                </p>
                <div class="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2">
                  <span id="standalone-mic-status-${idx}" class="text-[11px] text-slate-400">
                    กดไมค์เพื่อฝึกพูดประโยคนี้
                  </span>
                  <button id="standalone-mic-btn-${idx}" onclick="window.app.startStandaloneSpeaking(${idx}, '${p.en.replace(/'/g, "\\'")}')"
                    class="px-3.5 py-1.5 bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold rounded-xl shadow-xs transition-all flex items-center gap-1.5 active:scale-95 shrink-0">
                    🎙️ <span>ฝึกพูด</span>
                  </button>
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      `;
    }
  };

  // Expose to window
  window.standupLab = StandupLab;

  // Enhance EngMasteryApp if defined
  if (typeof EngMasteryApp !== "undefined") {
    // Intercept renderSpeakingLabView
    EngMasteryApp.prototype.renderSpeakingLabView = function (container) {
      StandupLab.render(this, container);
    };

    // Support navigateTo with params.tab
    const origNavigateTo = EngMasteryApp.prototype.navigateTo;
    EngMasteryApp.prototype.navigateTo = function (viewName, params = {}, updateHash = true) {
      if (viewName === "speaking-lab" && params && params.tab) {
        StandupLab.currentTab = params.tab;
        this.speakingLabTab = params.tab;
      }
      return origNavigateTo.call(this, viewName, params, updateHash);
    };
  }
})();

