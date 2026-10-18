/**
 * EngMastery: Zero to Pro - Main Application Controller
 * Handles Mobile-First Navigation, 4-Tab Level Architecture,
 * Interactive Audio TTS, Chat UI with Thai translation toggle,
 * Action Drill & 5-Question Quizzes, and JSON Backup & Restore.
 */

class EngMasteryApp {
  constructor() {
    this.currentView = "dashboard";
    this.activeLevelId = "level-1-survivor";
    this.activeTabByLevel = {
      "level-1-survivor": "grammar",
      "level-2-storyteller": "grammar",
      "level-3-connector": "grammar",
      "level-4-communicator": "grammar",
      "level-5-professional": "grammar",
      "level-6-master": "grammar"
    };
    this.quizAnswers = {};       // { [levelId]: { [qIndex]: selectedOptionIndex } }
    this.quizSubmitted = {};     // { [levelId]: boolean }
    this.showDialogueThai = true;
    this.isRecording = false;

    // --- State for Vocabulary, Articles & Masterclass Hubs ---
    this.activeArticleId = null;
    this.activeMasterclassId = null;
    this.vocabFilter = "all";
    this.vocabSearch = "";
    this.vocabMode = "flashcard"; // 'flashcard' or 'browse'
    this.browseVisibleCount = 24;
    this.currentFlashcardIndex = 0;
    this.isCardFlipped = false;
    this.isReadingAloud = false;

    // Load persisted progress from localStorage
    try {
      const savedVocabs = JSON.parse(localStorage.getItem("engmastery_reviewed_vocabs") || "[]");
      this.reviewedVocabIds = new Set(savedVocabs);
      this.articleQuizAnswers = {};
      this.articleQuizSubmitted = JSON.parse(localStorage.getItem("engmastery_article_quizzes") || "{}");
      this.masterclassQuizAnswers = {};
      this.masterclassQuizSubmitted = JSON.parse(localStorage.getItem("engmastery_masterclass_quizzes") || "{}");
      this.activeSentenceTopicId = null;
      this.sentenceDrillIndex = {};
      this.sentenceBuilderState = {};
      this.sentenceCompletedDrills = JSON.parse(localStorage.getItem("engmastery_sentence_drills_completed") || "{}");
    } catch (e) {
      this.reviewedVocabIds = new Set();
      this.articleQuizAnswers = {};
      this.articleQuizSubmitted = {};
      this.masterclassQuizAnswers = {};
      this.masterclassQuizSubmitted = {};
      this.activeSentenceTopicId = null;
      this.sentenceDrillIndex = {};
      this.sentenceBuilderState = {};
      this.sentenceCompletedDrills = {};
    }

    this.init();
  }

  init() {
    this.initTheme();
    this.setupNavigation();
    this.renderHeaderStats();
    this.renderView(this.currentView);
  }

  // --- Dark / Light Theme Toggle ---
  initTheme() {
    const saved = localStorage.getItem("engmastery_theme") || "dark";
    if (saved === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    const toggleBtn = document.getElementById("theme-toggle-btn");
    if (toggleBtn) {
      toggleBtn.addEventListener("click", () => {
        document.documentElement.classList.toggle("dark");
        const isDark = document.documentElement.classList.contains("dark");
        localStorage.setItem("engmastery_theme", isDark ? "dark" : "light");
        window.soundFx.playClick();
      });
    }
  }

  // --- Top Navigation & Header Stats ---
  renderHeaderStats() {
    const state = window.storageManager.state;
    const progress = window.storageManager.getOverallProgress();

    const streakEl = document.getElementById("header-streak-count");
    if (streakEl) streakEl.textContent = state.stats.streak;

    const xpEl = document.getElementById("header-xp-count");
    if (xpEl) xpEl.textContent = `${state.stats.totalXP} XP`;

    const avatarEl = document.getElementById("header-avatar");
    if (avatarEl) avatarEl.textContent = state.profile.avatar;

    const nameEl = document.getElementById("header-user-name");
    if (nameEl) nameEl.textContent = state.profile.name;
  }

  setupNavigation() {
    // Navigation buttons
    document.querySelectorAll("[data-nav-target]").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const target = btn.getAttribute("data-nav-target");
        this.navigateTo(target);
      });
    });

    // Mobile drawer toggle
    const mobileMenuBtn = document.getElementById("mobile-menu-btn");
    const mobileDrawer = document.getElementById("mobile-drawer");
    const closeDrawerBtn = document.getElementById("close-drawer-btn");

    if (mobileMenuBtn && mobileDrawer) {
      mobileMenuBtn.addEventListener("click", () => {
        mobileDrawer.classList.remove("hidden");
      });
    }
    if (closeDrawerBtn && mobileDrawer) {
      closeDrawerBtn.addEventListener("click", () => {
        mobileDrawer.classList.add("hidden");
      });
    }
  }

  navigateTo(viewName, params = {}) {
    window.soundFx.playClick();
    this.currentView = viewName;

    // Close mobile drawer if open
    const mobileDrawer = document.getElementById("mobile-drawer");
    if (mobileDrawer) mobileDrawer.classList.add("hidden");

    // Update active nav styling
    document.querySelectorAll("[data-nav-target]").forEach(btn => {
      const target = btn.getAttribute("data-nav-target");
      if (target === viewName) {
        btn.classList.add("text-indigo-600", "dark:text-indigo-400", "bg-indigo-50", "dark:bg-indigo-950/40");
        btn.classList.remove("text-slate-600", "dark:text-slate-400");
      } else {
        btn.classList.remove("text-indigo-600", "dark:text-indigo-400", "bg-indigo-50", "dark:bg-indigo-950/40");
        btn.classList.add("text-slate-600", "dark:text-slate-400");
      }
    });

    if (params.levelId) {
      this.activeLevelId = params.levelId;
    }
    if (viewName === "articles") {
      this.activeArticleId = params.articleId !== undefined ? params.articleId : null;
    }
    if (viewName === "masterclass") {
      this.activeMasterclassId = params.masterclassId !== undefined ? params.masterclassId : null;
    }
    if (viewName === "sentence-builder") {
      this.activeSentenceTopicId = params.topicId !== undefined ? params.topicId : null;
    }

    this.renderView(viewName);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  renderView(viewName) {
    const container = document.getElementById("main-content-view");
    if (!container) return;

    switch (viewName) {
      case "dashboard":
        this.renderDashboardView(container);
        break;
      case "level-detail":
        this.renderLevelDetailView(container, this.activeLevelId);
        break;
      case "vocabulary":
        this.renderVocabularyView(container);
        break;
      case "articles":
        this.renderArticlesView(container, this.activeArticleId);
        break;
      case "masterclass":
        this.renderMasterclassView(container, this.activeMasterclassId);
        break;
      case "sentence-builder":
        this.renderSentenceBuilderView(container, this.activeSentenceTopicId);
        break;
      case "speaking-lab":
        this.renderSpeakingLabView(container);
        break;
      case "profile":
        this.renderProfileAndBackupView(container);
        break;
      default:
        this.renderDashboardView(container);
    }
  }

  // =========================================================================
  // VIEW 1: DASHBOARD (OVERVIEW, CEFR LEVELS & PROGRESS BAR)
  // =========================================================================
  renderDashboardView(container) {
    const state = window.storageManager.state;
    const courses = window.courseData || [];
    const overallProgress = window.storageManager.getOverallProgress();
    const completedCount = state.completedLevels.length;

    container.innerHTML = `
      <div class="space-y-8 animate-fadeIn">
        <!-- Hero Banner -->
        <div class="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-700 via-indigo-600 to-purple-700 text-white p-6 sm:p-8 shadow-xl">
          <div class="absolute -right-10 -bottom-10 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
          <div class="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div class="max-w-xl">
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold uppercase tracking-wider mb-3">
                <span>🔥 Day ${state.stats.streak} Streak Active</span>
                <span>•</span>
                <span>${completedCount} / ${courses.length} Levels Completed</span>
              </div>
              <h1 class="text-2xl sm:text-4xl font-extrabold tracking-tight">
                สวัสดี, ${state.profile.name} 👋
              </h1>
              <p class="mt-2 text-indigo-100 text-sm sm:text-base leading-relaxed">
                ยินดีต้อนรับสู่ "EngMastery: Zero to Pro" เรียนภาษาอังกฤษตามมาตรฐาน CEFR ปูพื้นฐานไวยากรณ์ คลังประโยค บทสนทนา และฝึกพูดด้วยเทคโนโลยี AI
              </p>
              <div class="mt-5 flex flex-wrap items-center gap-3">
                <button onclick="window.app.navigateTo('level-detail', { levelId: '${courses[0] ? courses[0].id : 'level-a1'}' })"
                  class="px-5 py-2.5 bg-white text-indigo-700 font-bold text-sm rounded-xl hover:bg-indigo-50 shadow-md transition-all flex items-center gap-2 active:scale-95">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"/></svg>
                  <span>เริ่มเรียน: ${courses[0] ? courses[0].levelTitle : 'Level A1'}</span>
                </button>
                <button onclick="window.app.navigateTo('speaking-lab')"
                  class="px-5 py-2.5 bg-indigo-800/60 hover:bg-indigo-800 text-white font-semibold text-sm rounded-xl border border-white/20 transition-all flex items-center gap-2">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"/></svg>
                  <span>ห้องซ้อมพูด (Speaking Lab)</span>
                </button>
              </div>
            </div>

            <!-- Progress Metric Card -->
            <div class="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl md:w-64 flex flex-col justify-between">
              <div>
                <span class="text-xs uppercase text-indigo-200 font-medium">ความคืบหน้าภาพรวม</span>
                <div class="text-3xl font-black mt-1 text-white flex items-center gap-2">
                  <span>${overallProgress}%</span>
                  <span class="text-xs font-normal px-2 py-0.5 rounded bg-emerald-500/80 text-white">CEFR Track</span>
                </div>
                <p class="text-xs text-indigo-200 mt-1">ผ่านแล้ว ${completedCount} จากทั้งหมด ${courses.length} ระดับ</p>
              </div>
              <div class="mt-4 pt-3 border-t border-white/10">
                <div class="w-full bg-white/20 h-2 rounded-full overflow-hidden">
                  <div class="bg-emerald-400 h-full rounded-full transition-all duration-500" style="width: ${overallProgress}%"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Metric Grid -->
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <!-- Total XP -->
          <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 rounded-2xl shadow-sm">
            <div class="flex items-center justify-between text-slate-500 dark:text-slate-400 text-xs font-medium">
              <span>คะแนนประสบการณ์ (XP)</span>
              <span class="text-indigo-500 font-bold">✨ Points</span>
            </div>
            <div class="mt-2 text-2xl font-black text-indigo-600 dark:text-indigo-400">
              ${state.stats.totalXP} <span class="text-xs font-normal text-slate-400">XP</span>
            </div>
            <p class="text-[11px] text-slate-400 mt-1">สะสมจากการเรียนและทำข้อสอบ</p>
          </div>

          <!-- Streak -->
          <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 rounded-2xl shadow-sm">
            <div class="flex items-center justify-between text-slate-500 dark:text-slate-400 text-xs font-medium">
              <span>เรียนต่อเนื่อง (Streak)</span>
              <span class="text-amber-500 font-bold">🔥 Days</span>
            </div>
            <div class="mt-2 text-2xl font-black text-amber-500">
              ${state.stats.streak} <span class="text-xs font-normal text-slate-400">วัน</span>
            </div>
            <p class="text-[11px] text-slate-400 mt-1">เข้าเรียนทุกวันเพื่อสะสมสถิติ</p>
          </div>

          <!-- Completed Levels -->
          <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 rounded-2xl shadow-sm">
            <div class="flex items-center justify-between text-slate-500 dark:text-slate-400 text-xs font-medium">
              <span>ระดับที่สอบผ่าน</span>
              <span class="text-emerald-500 font-bold">🏆 Levels</span>
            </div>
            <div class="mt-2 text-2xl font-black text-emerald-600 dark:text-emerald-400">
              ${completedCount} <span class="text-xs font-normal text-slate-400">/ ${courses.length}</span>
            </div>
            <p class="text-[11px] text-slate-400 mt-1">สอบผ่านเกณฑ์ 80% ขึ้นไป</p>
          </div>

          <!-- Speaking Drills -->
          <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 rounded-2xl shadow-sm">
            <div class="flex items-center justify-between text-slate-500 dark:text-slate-400 text-xs font-medium">
              <span>ซ้อมพูดสำเร็จ</span>
              <span class="text-purple-500 font-bold">🎙️ Voice</span>
            </div>
            <div class="mt-2 text-2xl font-black text-purple-600 dark:text-purple-400">
              ${state.stats.speakingDrillsCount || 0} <span class="text-xs font-normal text-slate-400">ครั้ง</span>
            </div>
            <p class="text-[11px] text-slate-400 mt-1">วัดคะแนนด้วย Web Speech AI</p>
          </div>
        </div>

        <!-- NEW FEATURE HUBS (Vocabulary Flashcards, Articles Library, Masterclass Hub) -->
        <div class="space-y-3">
          <div class="flex items-center justify-between">
            <h2 class="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider text-xs flex items-center gap-2">
              <span class="text-indigo-600 dark:text-indigo-400">⚡</span>
              <span>ศูนย์การเรียนรู้เสริมพิเศษ (Learning Power-Ups):</span>
            </h2>
            <span class="text-[11px] text-slate-400">อัปเกรดทักษะรอบด้าน</span>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <!-- Hub 1: Vocabulary & Flashcards -->
            <div onclick="window.app.navigateTo('vocabulary')"
              class="group cursor-pointer p-5 rounded-3xl bg-gradient-to-br from-purple-900/90 to-slate-900 text-white border border-purple-800/50 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all flex flex-col justify-between space-y-4">
              <div class="space-y-2">
                <div class="flex items-center justify-between">
                  <span class="text-3xl">🎲</span>
                  <span class="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase bg-purple-500/30 text-purple-200 border border-purple-400/40">
                    Flashcards
                  </span>
                </div>
                <h3 class="text-base font-bold text-white group-hover:text-purple-300 transition-colors">
                  คลังคำศัพท์ & โหมดสุ่มการ์ด
                </h3>
                <p class="text-xs text-purple-200/80 leading-relaxed">
                  สุ่มคำศัพท์ความถี่สูง Oxford 3000™, ศัพท์เทคนิค DevOps & Cloud, และ Phrasal Verbs พร้อมเสียง TTS และพลิกการ์ด 3D
                </p>
              </div>
              <div class="pt-3 border-t border-purple-800/40 flex items-center justify-between text-xs font-bold text-purple-300">
                <span>เริ่มสุ่มคำศัพท์</span>
                <span class="group-hover:translate-x-1 transition-transform">➔</span>
              </div>
            </div>

            <!-- Hub 2: Articles Library & Reader -->
            <div onclick="window.app.navigateTo('articles')"
              class="group cursor-pointer p-5 rounded-3xl bg-gradient-to-br from-blue-900/90 to-slate-900 text-white border border-blue-800/50 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all flex flex-col justify-between space-y-4">
              <div class="space-y-2">
                <div class="flex items-center justify-between">
                  <span class="text-3xl">📚</span>
                  <span class="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase bg-blue-500/30 text-blue-200 border border-blue-400/40">
                    Deep Reader
                  </span>
                </div>
                <h3 class="text-base font-bold text-white group-hover:text-blue-300 transition-colors">
                  คลังบทความเชิงลึก (Articles)
                </h3>
                <p class="text-xs text-blue-200/80 leading-relaxed">
                  ฝึกคิดเป็นภาษาอังกฤษ, ถอดรหัสสำเนียงอินเดีย-อังกฤษ, และเทคนิคการเขียนอีเมล & แชท Slack ให้ได้ใจทีมงานสากล
                </p>
              </div>
              <div class="pt-3 border-t border-blue-800/40 flex items-center justify-between text-xs font-bold text-blue-300">
                <span>อ่านบทความ & ทำควิซ</span>
                <span class="group-hover:translate-x-1 transition-transform">➔</span>
              </div>
            </div>

            <!-- Hub 3: Masterclass Hub -->
            <div onclick="window.app.navigateTo('masterclass')"
              class="group cursor-pointer p-5 rounded-3xl bg-gradient-to-br from-rose-900/90 to-slate-900 text-white border border-rose-800/50 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all flex flex-col justify-between space-y-4">
              <div class="space-y-2">
                <div class="flex items-center justify-between">
                  <span class="text-3xl">🎯</span>
                  <span class="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase bg-rose-500/30 text-rose-200 border border-rose-400/40">
                    Masterclass
                  </span>
                </div>
                <h3 class="text-base font-bold text-white group-hover:text-rose-300 transition-colors">
                  ห้องติวเข้ม (Masterclass Hub)
                </h3>
                <p class="text-xs text-rose-200/80 leading-relaxed">
                  เจาะลึก Ultimate 12 Tenses Blueprint, Tense คู่ที่ออกสอบบ่อย และกำจัด 4 จุดตายไวยากรณ์ (Passive, Articles, Prepositions)
                </p>
              </div>
              <div class="pt-3 border-t border-rose-800/40 flex items-center justify-between text-xs font-bold text-rose-300">
                <span>เข้าห้องติวเข้ม</span>
                <span class="group-hover:translate-x-1 transition-transform">➔</span>
              </div>
            </div>
          </div>
        </div>

        <!-- CEFR Levels Grid (Modular Courses from Individual Folders) -->
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <div>
              <h2 class="text-xl font-bold text-slate-900 dark:text-white">หลักสูตรแยกตามระดับ CEFR (A1 - C1)</h2>
              <p class="text-xs text-slate-500 dark:text-slate-400">แต่ละระดับประกอบด้วย 4 ส่วนสำคัญ: ไวยากรณ์หลัก, คลังประโยค, แชตจำลอง, และแบบทดสอบ 5 ข้อ</p>
            </div>
            <span class="text-xs font-bold text-indigo-600 dark:text-indigo-400">${courses.length} Modular Levels</span>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            ${courses.map(course => {
              const isCompleted = state.completedLevels.includes(course.id);
              const quizRecord = state.quizHistory[course.id];

              return `
                <div class="bg-white dark:bg-slate-900 border ${
                  isCompleted ? "border-emerald-300 dark:border-emerald-800/80" : "border-slate-200 dark:border-slate-800"
                } rounded-3xl p-6 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between space-y-4 group">
                  
                  <div>
                    <div class="flex items-center justify-between mb-3">
                      <span class="px-3 py-1 rounded-xl text-xs font-black uppercase tracking-wider ${course.badgeColor.bg} ${course.badgeColor.text} border ${course.badgeColor.border}">
                        ${course.level}
                      </span>
                      ${isCompleted ? `
                        <span class="px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 text-xs font-bold flex items-center gap-1">
                          <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
                          <span>ผ่านแล้ว (${quizRecord ? quizRecord.bestPercent : 100}%)</span>
                        </span>
                      ` : `
                        <span class="text-xs text-slate-400 font-medium flex items-center gap-1">
                          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                          ${course.estimatedTime}
                        </span>
                      `}
                    </div>

                    <h3 class="text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      ${course.levelTitle}
                    </h3>
                    <p class="text-xs text-slate-500 dark:text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                      ${course.levelSub}
                    </p>

                    <!-- 4 Sub-Tabs Mini Badges -->
                    <div class="mt-4 flex flex-wrap gap-1.5 text-[10px] font-semibold text-slate-600 dark:text-slate-300">
                      <span class="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800">1. Core Grammar</span>
                      <span class="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800">2. Chunks & Vocab</span>
                      <span class="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800">3. Chat Dialogue</span>
                      <span class="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800">4. 5-Q Quiz</span>
                    </div>
                  </div>

                  <div class="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <span class="text-xs font-bold text-amber-500">+${course.xpReward} XP</span>
                    <button onclick="window.app.navigateTo('level-detail', { levelId: '${course.id}' })"
                      class="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-sm transition-all flex items-center gap-1.5 active:scale-95">
                      <span>${isCompleted ? "ทบทวนบทเรียน" : "เข้าเรียนบทนี้"}</span>
                      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                    </button>
                  </div>
                </div>
              `;
            }).join("")}
          </div>
        </div>

        <!-- Future-Proof Data Management Card (Backup / Restore) -->
        <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div class="space-y-1 text-center sm:text-left">
            <h3 class="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2 justify-center sm:justify-start">
              <span>💾 สำรองและกู้คืนข้อมูลการเรียน (Backup / Restore JSON)</span>
            </h3>
            <p class="text-xs text-slate-500 dark:text-slate-400">
              บันทึกคะแนนสะสม ประวัติการทำข้อสอบ และบทเรียนที่สำเร็จเก็บไว้เป็นไฟล์ JSON หรือนำเข้าข้อมูลเดิมได้ตลอดเวลา
            </p>
          </div>
          <div class="flex items-center gap-3 shrink-0">
            <button onclick="window.storageManager.exportBackupJSON()"
              class="px-4 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold text-xs rounded-xl transition-all shadow-sm flex items-center gap-1.5">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
              <span>ดาวน์โหลด Backup (.json)</span>
            </button>
            <label class="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl transition-all shadow-sm flex items-center gap-1.5 cursor-pointer">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l4-4m0 0l4 4m-4-4v12"/></svg>
              <span>กู้คืนข้อมูล (Restore)</span>
              <input type="file" accept=".json" class="hidden" onchange="window.app.handleRestoreFile(event)">
            </label>
          </div>
        </div>
      </div>
    `;
  }

  // =========================================================================
  // VIEW 2: LEVEL DETAIL (4 TABS ARCHITECTURE)
  // =========================================================================
  renderLevelDetailView(container, levelId) {
    const courses = window.courseData || [];
    const course = courses.find(c => c.id === levelId) || courses[0];
    this.activeLevelId = course.id;

    const currentTab = this.activeTabByLevel[course.id] || "grammar";

    container.innerHTML = `
      <div class="space-y-6 animate-fadeIn max-w-4xl mx-auto">
        <!-- Level Navigation Bar -->
        <div class="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
          <button onclick="window.app.navigateTo('dashboard')"
            class="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
            <span>กลับสู่หน้าแรก (Dashboard)</span>
          </button>
          <div class="flex items-center gap-2">
            <span class="px-2.5 py-1 rounded-full text-xs font-black uppercase ${course.badgeColor.bg} ${course.badgeColor.text} border ${course.badgeColor.border}">
              CEFR ${course.level}
            </span>
            <span class="text-xs font-bold text-amber-500">+${course.xpReward} XP</span>
          </div>
        </div>

        <!-- Level Title Card -->
        <div>
          <h1 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
            ${course.levelTitle}
          </h1>
          <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
            ${course.levelSub}
          </p>
        </div>

        <!-- The 4 Main Tabs Navigation -->
        <div class="flex items-center gap-2 p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-x-auto">
          <button onclick="window.app.switchLevelTab('${course.id}', 'grammar')"
            class="flex-1 min-w-[130px] py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
              currentTab === 'grammar' ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-sm' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }">
            <span>📑</span>
            <span>1. Core Grammar</span>
          </button>

          <button onclick="window.app.switchLevelTab('${course.id}', 'chunks')"
            class="flex-1 min-w-[130px] py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
              currentTab === 'chunks' ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-sm' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }">
            <span>💬</span>
            <span>2. Chunks & Vocab</span>
          </button>

          <button onclick="window.app.switchLevelTab('${course.id}', 'dialogue')"
            class="flex-1 min-w-[130px] py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
              currentTab === 'dialogue' ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-sm' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }">
            <span>📱</span>
            <span>3. Chat Dialogue</span>
          </button>

          <button onclick="window.app.switchLevelTab('${course.id}', 'quiz')"
            class="flex-1 min-w-[130px] py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
              currentTab === 'quiz' ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-sm' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }">
            <span>🎯</span>
            <span>4. Action Drill & Quiz</span>
          </button>
        </div>

        <!-- Tab Content Viewport -->
        <div id="level-tab-content-area">
          ${this.renderActiveTabContent(course, currentTab)}
        </div>
      </div>
    `;
  }

  switchLevelTab(levelId, tabName) {
    window.soundFx.playClick();
    this.activeTabByLevel[levelId] = tabName;
    const container = document.getElementById("main-content-view");
    if (container && this.currentView === "level-detail") {
      this.renderLevelDetailView(container, levelId);
    }
  }

  // --- Render Tab Contents ---
  renderActiveTabContent(course, tabName) {
    switch (tabName) {
      case "grammar":
        return this.renderTab1CoreGrammar(course.coreGrammar);
      case "chunks":
        return this.renderTab2ChunksAndVocab(course.chunksAndVocab);
      case "dialogue":
        return this.renderTab3RealLifeDialogue(course.realLifeDialogue);
      case "quiz":
        return this.renderTab4ActionDrillAndQuiz(course.actionDrillAndQuiz, course.id);
      default:
        return this.renderTab1CoreGrammar(course.coreGrammar);
    }
  }

  // ==========================================
  // TAB 1: CORE GRAMMAR (กฎเหล็ก + ตารางเทียบ + ไฮไลท์)
  // ==========================================
  renderTab1CoreGrammar(grammarData) {
    if (!grammarData) return "<p class='text-xs text-slate-400'>ไม่มีข้อมูลไวยากรณ์</p>";

    return `
      <div class="space-y-6 animate-fadeIn">
        <!-- Header -->
        <div class="p-4 rounded-2xl bg-indigo-50/60 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/40">
          <h2 class="text-base font-bold text-indigo-900 dark:text-indigo-300">${grammarData.title}</h2>
          <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">${grammarData.summary}</p>
        </div>

        <!-- Rules Cards -->
        <div class="space-y-4">
          <h3 class="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider text-xs">กฎเหล็กสำคัญ (Core Rules):</h3>
          ${grammarData.rules.map(rule => `
            <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-3">
              <h4 class="text-sm font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-indigo-600"></span>
                <span>${rule.ruleName}</span>
              </h4>
              <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-line">
                ${rule.explanation}
              </p>
              ${rule.pitfall ? `
                <div class="p-3 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200/60 dark:border-red-900/40 text-xs text-red-700 dark:text-red-300 font-medium">
                  ${rule.pitfall}
                </div>
              ` : ""}
              ${rule.proTip ? `
                <div class="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-900/40 text-xs text-amber-800 dark:text-amber-200 font-medium">
                  💡 <strong>Pro Tip:</strong> ${rule.proTip}
                </div>
              ` : ""}
            </div>
          `).join("")}
        </div>

        <!-- Comparison Table with Highlighted Keywords -->
        ${grammarData.comparisonTable ? `
          <div class="space-y-3">
            <h3 class="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider text-xs">ตารางเปรียบเทียบโครงสร้าง (Structure Matrix):</h3>
            <div class="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <table class="w-full text-left text-xs bg-white dark:bg-slate-900">
                <thead class="bg-slate-50 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 uppercase tracking-wider text-[11px] font-bold">
                  <tr>
                    ${grammarData.comparisonTable.headers.map(h => `<th class="p-3.5 border-b border-slate-200 dark:border-slate-700">${h}</th>`).join("")}
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
                  ${grammarData.comparisonTable.rows.map(row => `
                    <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition-colors">
                      <td class="p-3.5 font-bold text-slate-900 dark:text-white">${row.subject}</td>
                      <td class="p-3.5 text-slate-700 dark:text-slate-200">
                        <div class="flex items-center justify-between gap-2">
                          <span>${row.positive}</span>
                          ${row.audioPositive ? `
                            <button onclick="window.speechEngine.speak('${row.audioPositive.replace(/'/g, "\\'")}')" class="p-1 text-indigo-600 dark:text-indigo-400 hover:scale-110 transition-transform">
                              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/></svg>
                            </button>
                          ` : ""}
                        </div>
                      </td>
                      <td class="p-3.5 text-slate-700 dark:text-slate-200">
                        <div class="flex items-center justify-between gap-2">
                          <span>${row.negative}</span>
                          ${row.audioNegative ? `
                            <button onclick="window.speechEngine.speak('${row.audioNegative.replace(/'/g, "\\'")}')" class="p-1 text-indigo-600 dark:text-indigo-400 hover:scale-110 transition-transform">
                              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/></svg>
                            </button>
                          ` : ""}
                        </div>
                      </td>
                      <td class="p-3.5 text-slate-700 dark:text-slate-200">
                        <div class="flex items-center justify-between gap-2">
                          <span>${row.question}</span>
                          ${row.audioQuestion ? `
                            <button onclick="window.speechEngine.speak('${row.audioQuestion.replace(/'/g, "\\'")}')" class="p-1 text-indigo-600 dark:text-indigo-400 hover:scale-110 transition-transform">
                              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/></svg>
                            </button>
                          ` : ""}
                        </div>
                      </td>
                    </tr>
                  `).join("")}
                </tbody>
              </table>
            </div>
          </div>
        ` : ""}

        <!-- Key Examples with Audio -->
        ${grammarData.keyExamples ? `
          <div class="space-y-3">
            <h3 class="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider text-xs">ตัวอย่างประโยคจริง (Real Context):</h3>
            <div class="space-y-2">
              ${grammarData.keyExamples.map(ex => `
                <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-start justify-between gap-3 shadow-sm">
                  <div class="space-y-0.5">
                    <p class="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">${ex.en}</p>
                    <p class="text-xs text-slate-500 dark:text-slate-400">${ex.th}</p>
                    ${ex.note ? `<p class="text-[11px] text-indigo-600 dark:text-indigo-400 italic">📌 ${ex.note}</p>` : ""}
                  </div>
                  <button onclick="window.speechEngine.speak('${ex.en.replace(/'/g, "\\'")}')"
                    class="p-2 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 rounded-xl transition-all shrink-0"
                    title="ฟังเสียงออกเสียง (TTS)">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/></svg>
                  </button>
                </div>
              `).join("")}
            </div>
          </div>
        ` : ""}
        <!-- Advanced Sub-Rules & Exceptions -->
        ${grammarData.advancedSubRules ? `
          <div class="space-y-3">
            <h3 class="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider text-xs flex items-center gap-2">
              <span class="text-purple-600 dark:text-purple-400">🔬</span>
              <span>B. กฎย่อย ข้อยกเว้น และจุดสังเกตเชิงลึก (Sub-Rules & Exceptions):</span>
            </h3>
            <div class="space-y-3">
              ${grammarData.advancedSubRules.map(sr => `
                <div class="p-4 rounded-2xl bg-purple-50/50 dark:bg-purple-950/20 border border-purple-200/60 dark:border-purple-900/40 space-y-2">
                  <h4 class="text-xs sm:text-sm font-bold text-purple-900 dark:text-purple-300">${sr.title}</h4>
                  <p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line">${sr.explanation}</p>
                  ${sr.examples ? `
                    <div class="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-purple-100 dark:border-purple-950 text-xs space-y-1">
                      ${sr.examples.map(ex => `<div class="text-slate-600 dark:text-slate-300">• <strong class="text-purple-700 dark:text-purple-300">${ex.text}</strong> <span class="text-slate-400">(${ex.th})</span></div>`).join("")}
                    </div>
                  ` : ""}
                </div>
              `).join("")}
            </div>
          </div>
        ` : ""}

        <!-- Pronunciation & Accent Secrets -->
        ${grammarData.pronunciationSecrets ? `
          <div class="space-y-3">
            <h3 class="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider text-xs flex items-center gap-2">
              <span class="text-cyan-600 dark:text-cyan-400">🗣️</span>
              <span>C. เทคนิคการออกเสียงและสำเนียงเจ้าของภาษา (Pronunciation & Accent Secrets):</span>
            </h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              ${grammarData.pronunciationSecrets.map(ps => `
                <div class="p-4 rounded-2xl bg-cyan-50/40 dark:bg-cyan-950/20 border border-cyan-200/60 dark:border-cyan-900/40 space-y-2 flex flex-col justify-between">
                  <div class="space-y-1.5">
                    <div class="flex items-center justify-between">
                      <span class="font-bold text-xs sm:text-sm text-cyan-950 dark:text-cyan-200">${ps.rule}</span>
                      ${ps.audio ? `
                        <button onclick="window.speechEngine.speak('${ps.audio.replace(/'/g, "\\'")}')" class="p-1 text-cyan-600 dark:text-cyan-400 hover:scale-110 transition-transform">
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/></svg>
                        </button>
                      ` : ""}
                    </div>
                    <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">${ps.explanation}</p>
                  </div>
                  ${ps.phoneticExample ? `
                    <div class="pt-2 border-t border-cyan-200/50 dark:border-cyan-900/40 text-xs font-mono text-cyan-800 dark:text-cyan-300">
                      💡 ${ps.phoneticExample}
                    </div>
                  ` : ""}
                </div>
              `).join("")}
            </div>
          </div>
        ` : ""}

        <!-- Common Thai-English Traps -->
        ${grammarData.thaiEnglishTraps ? `
          <div class="space-y-3">
            <h3 class="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider text-xs flex items-center gap-2">
              <span class="text-red-600 dark:text-red-400">⚠️</span>
              <span>D. แก้จุดตายการแปลตรงตัว (Common Thai-English Traps):</span>
            </h3>
            <div class="space-y-3">
              ${grammarData.thaiEnglishTraps.map(trap => `
                <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    <div class="p-2.5 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900/50 text-red-700 dark:text-red-300">
                      <span class="font-bold">❌ ผิดแปลตรงตัว:</span> "${trap.wrong}"
                      ${trap.literalThai ? `<div class="text-[11px] text-red-500 mt-0.5">(ตรงจากไทย: ${trap.literalThai})</div>` : ""}
                    </div>
                    <div class="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/50 text-emerald-800 dark:text-emerald-300 flex items-center justify-between">
                      <div>
                        <span class="font-bold">✅ ฝรั่งพูดว่า:</span> "${trap.right}"
                      </div>
                      <button onclick="window.speechEngine.speak('${trap.right.replace(/'/g, "\\'")}')" class="p-1 text-emerald-600 hover:scale-110 transition-transform">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/></svg>
                      </button>
                    </div>
                  </div>
                  <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                    🧠 <strong>วิธีคิดแบบ Native:</strong> ${trap.why}
                  </p>
                </div>
              `).join("")}
            </div>
          </div>
        ` : ""}
      </div>
    `;
  }

  // ==========================================
  // TAB 2: CHUNKS & VOCAB (ก้อนประโยค + กริยา 3 ช่อง + ศัพท์)
  // ==========================================
  renderTab2ChunksAndVocab(data) {
    if (!data) return "<p class='text-xs text-slate-400'>ไม่มีข้อมูลคลังประโยค</p>";

    return `
      <div class="space-y-6 animate-fadeIn">
        <!-- Ready-to-Use Sentence Chunks -->
        <div class="space-y-3">
          <div class="flex items-center justify-between">
            <h3 class="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider text-xs">ก้อนประโยคสำเร็จรูป (Sentence Chunks):</h3>
            <span class="text-[11px] text-slate-400">จำทั้งก้อน พูดคล่องทันที</span>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            ${data.chunks.map(c => `
              <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm space-y-2 flex flex-col justify-between">
                <div>
                  <div class="flex items-start justify-between gap-2">
                    <span class="font-bold text-sm text-indigo-600 dark:text-indigo-400">"${c.chunk}"</span>
                    <button onclick="window.speechEngine.speak('${(c.example || c.chunk).replace(/'/g, "\\'")}')" class="p-1.5 text-indigo-600 dark:text-indigo-400 hover:scale-110 transition-transform">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/></svg>
                    </button>
                  </div>
                  <p class="text-xs text-slate-600 dark:text-slate-300 font-medium">${c.th}</p>
                </div>
                ${c.example ? `
                  <div class="pt-2 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500">
                    <span class="font-semibold text-slate-700 dark:text-slate-300">ตัวอย่าง:</span> "${c.example}"
                  </div>
                ` : ""}
              </div>
            `).join("")}
          </div>
        </div>

        <!-- Essential Vocabulary Cards -->
        ${data.essentialVocab ? `
          <div class="space-y-3">
            <h3 class="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider text-xs">คำศัพท์ความถี่สูง (Essential Vocab & IPA):</h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              ${data.essentialVocab.map(v => `
                <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-start justify-between gap-3">
                  <div class="space-y-1">
                    <div class="flex items-center gap-2">
                      <span class="font-bold text-sm text-slate-900 dark:text-white">${v.word}</span>
                      <span class="text-xs font-mono text-purple-600 dark:text-purple-400">${v.ipa}</span>
                      <span class="text-[10px] text-slate-400 italic">(${v.pos})</span>
                    </div>
                    <p class="text-xs font-semibold text-slate-800 dark:text-slate-200">${v.th}</p>
                    <p class="text-[11px] text-slate-500 dark:text-slate-400">"${v.example}"</p>
                  </div>
                  <button onclick="window.speechEngine.speak('${v.word.replace(/'/g, "\\'")}')" class="p-2 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 rounded-xl transition-all shrink-0">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/></svg>
                  </button>
                </div>
              `).join("")}
            </div>
          </div>
        ` : ""}

        <!-- Verb Forms 3 ช่อง หรือ Phrasal Verbs -->
        ${data.verbForms ? `
          <div class="space-y-3">
            <h3 class="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider text-xs">กริยา 3 ช่อง & กริยาวลีที่ใช้บ่อย (Verb Forms):</h3>
            <div class="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <table class="w-full text-left text-xs bg-white dark:bg-slate-900">
                <thead class="bg-slate-50 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 uppercase tracking-wider text-[11px] font-bold">
                  <tr>
                    <th class="p-3">รูปช่อง 1 (V1)</th>
                    <th class="p-3">รูปช่อง 2 (V2)</th>
                    <th class="p-3">รูปช่อง 3 (V3)</th>
                    <th class="p-3">คำแปล</th>
                    <th class="p-3">ตัวอย่างประโยค</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
                  ${data.verbForms.map(vf => `
                    <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                      <td class="p-3 font-bold text-indigo-600 dark:text-indigo-400">
                        <button onclick="window.speechEngine.speak('${vf.v1.replace(/'/g, "\\'")}')" class="hover:underline flex items-center gap-1">
                          <span>${vf.v1}</span>
                          <span class="text-[10px]">🔊</span>
                        </button>
                      </td>
                      <td class="p-3 font-semibold text-slate-800 dark:text-slate-200">${vf.v2}</td>
                      <td class="p-3 font-semibold text-slate-800 dark:text-slate-200">${vf.v3}</td>
                      <td class="p-3 text-slate-600 dark:text-slate-300">${vf.th}</td>
                      <td class="p-3 text-slate-500 italic">${vf.example}</td>
                    </tr>
                  `).join("")}
                </tbody>
              </table>
            </div>
          </div>
        ` : ""}

        <!-- Industry-Specific & Tech Chunks -->
        ${data.industryTechChunks ? `
          <div class="space-y-3">
            <div class="flex items-center justify-between">
              <h3 class="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider text-xs flex items-center gap-2">
                <span class="text-emerald-600 dark:text-emerald-400">💻</span>
                <span>วลีเฉพาะทางและการทำงานจริง (Industry & Tech Chunks):</span>
              </h3>
              <span class="text-[11px] text-slate-400">สำหรับ Stand-up & ประชุมงาน</span>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
              ${data.industryTechChunks.map(itc => `
                <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2 flex flex-col justify-between">
                  <div>
                    <div class="flex items-start justify-between gap-2">
                      <span class="font-bold text-xs sm:text-sm text-emerald-600 dark:text-emerald-400">"${itc.chunk}"</span>
                      <button onclick="window.speechEngine.speak('${(itc.example || itc.chunk).replace(/'/g, "\\'")}')" class="p-1.5 text-emerald-600 dark:text-emerald-400 hover:scale-110 transition-transform">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/></svg>
                      </button>
                    </div>
                    <p class="text-xs text-slate-700 dark:text-slate-300 font-medium mt-1">${itc.th}</p>
                    ${itc.context ? `<span class="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-500 mt-1">${itc.context}</span>` : ""}
                  </div>
                  ${itc.example ? `
                    <div class="pt-2 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500">
                      <span class="font-semibold text-slate-700 dark:text-slate-300">ตัวอย่าง:</span> "${itc.example}"
                    </div>
                  ` : ""}
                </div>
              `).join("")}
            </div>
          </div>
        ` : ""}
      </div>
    `;
  }

  // ==========================================
  // TAB 3: REAL-LIFE DIALOGUE (CHAT UI สลับซ้าย-ขวา + ซ่อน/แสดงคำแปลไทย)
  // ==========================================
  renderTab3RealLifeDialogue(dialogueData) {
    if (!dialogueData) return "<p class='text-xs text-slate-400'>ไม่มีบทสนทนา</p>";

    return `
      <div class="space-y-4 animate-fadeIn">
        <!-- Scenario Header & Translation Toggle -->
        <div class="p-4 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-sm">
          <div>
            <span class="text-[10px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">🎬 Real-World Scenario</span>
            <h3 class="text-sm font-bold text-slate-900 dark:text-white mt-0.5">${dialogueData.scenario}</h3>
            <p class="text-xs text-slate-500">${dialogueData.scenarioTh}</p>
          </div>

          <!-- Toggle Button to Show/Hide Thai Translations for Listening Practice -->
          <button onclick="window.app.toggleDialogueTranslation()"
            class="px-3.5 py-2 rounded-xl text-xs font-bold transition-all shadow-sm flex items-center gap-2 self-start sm:self-auto ${
              this.showDialogueThai ? "bg-indigo-600 text-white hover:bg-indigo-700" : "bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-200"
            }">
            <span>${this.showDialogueThai ? "👁️ แสดงคำแปลภาษาไทย" : "🙈 ซ่อนคำแปล (ฝึกฟังล้วน)"}</span>
          </button>
        </div>

        <!-- Tense Selection Rationale -->
        ${dialogueData.grammarRationale ? `
          <div class="p-4 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200/80 dark:border-indigo-800/60 text-xs text-indigo-950 dark:text-indigo-200 space-y-1">
            <div class="font-bold flex items-center gap-1.5 text-indigo-900 dark:text-indigo-300">
              <span>🎯 เบื้องหลังการเลือกใช้ Tense & ไวยากรณ์ในสถานการณ์นี้:</span>
            </div>
            <p class="leading-relaxed text-slate-600 dark:text-slate-300">${dialogueData.grammarRationale}</p>
          </div>
        ` : ""}

        <!-- Chat Conversation Container -->
        <div class="p-4 sm:p-6 rounded-3xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-4 min-h-[380px]">
          ${dialogueData.turns.map(turn => {
            const isRight = turn.side === "right";

            return `
              <div class="flex items-start gap-3 ${isRight ? "flex-row-reverse" : "flex-row"}">
                <!-- Avatar -->
                <div class="w-9 h-9 rounded-2xl flex items-center justify-center text-lg shadow-sm shrink-0 ${
                  isRight ? "bg-indigo-600 text-white" : "bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                }">
                  ${turn.avatar || "💬"}
                </div>

                <!-- Chat Bubble -->
                <div class="max-w-[80%] sm:max-w-[70%] space-y-1.5 ${isRight ? "text-right" : "text-left"}">
                  <span class="text-[10px] font-semibold text-slate-400 block px-1">${turn.name}</span>
                  
                  <div class="p-4 rounded-2xl shadow-sm text-xs sm:text-sm ${
                    isRight ? "bg-indigo-600 text-white rounded-tr-none" : "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded-tl-none"
                  }">
                    <div class="flex items-start justify-between gap-3">
                      <p class="font-semibold leading-relaxed">${turn.en}</p>
                      <button onclick="window.speechEngine.speak('${turn.en.replace(/'/g, "\\'")}')"
                        class="p-1 rounded-lg ${isRight ? "hover:bg-indigo-500 text-indigo-100" : "hover:bg-slate-100 dark:hover:bg-slate-800 text-indigo-600 dark:text-indigo-400"} transition-all shrink-0"
                        title="ฟังเสียง">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/></svg>
                      </button>
                    </div>

                    ${this.showDialogueThai ? `
                      <p class="mt-2 pt-2 border-t ${isRight ? "border-indigo-500 text-indigo-100" : "border-slate-100 dark:border-slate-800 text-slate-500 dark:text-slate-400"} text-xs leading-normal">
                        ${turn.th}
                      </p>
                    ` : ""}

                    ${turn.tenseRationale ? `
                      <div class="mt-2 pt-1.5 border-t ${isRight ? "border-indigo-500/50 text-indigo-200" : "border-slate-100 dark:border-slate-800 text-indigo-600 dark:text-indigo-400"} text-[11px] flex items-center gap-1.5">
                        <span>💡</span>
                        <span class="font-medium">${turn.tenseRationale}</span>
                      </div>
                    ` : ""}
                  </div>
                </div>
              </div>
            `;
          }).join("")}
        </div>
      </div>
    `;
  }

  toggleDialogueTranslation() {
    this.showDialogueThai = !this.showDialogueThai;
    window.soundFx.playClick();
    const container = document.getElementById("main-content-view");
    if (container && this.currentView === "level-detail") {
      this.renderLevelDetailView(container, this.activeLevelId);
    }
  }

  // ==========================================
  // TAB 4: ACTION DRILL & QUIZ (ภารกิจฝึกพูด + แบบทดสอบ 5 ข้อ)
  // ==========================================
  renderTab4ActionDrillAndQuiz(quizData, levelId) {
    if (!quizData) return "<p class='text-xs text-slate-400'>ไม่มีแบบทดสอบ</p>";

    const isSubmitted = !!this.quizSubmitted[levelId];
    const userAnswers = this.quizAnswers[levelId] || {};
    const existingHistory = window.storageManager.getQuizHistory(levelId);

    return `
      <div class="space-y-8 animate-fadeIn">
        <!-- Part A: Daily Speaking Action Mission -->
        ${quizData.dailyMission ? `
          <div class="bg-gradient-to-br from-indigo-900 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-lg border border-indigo-800/60 space-y-4">
            <div class="flex items-center justify-between">
              <span class="px-3 py-1 rounded-full bg-red-500/20 text-red-300 border border-red-500/30 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                <span class="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                <span>${quizData.dailyMission.title}</span>
              </span>
              <span class="text-xs text-slate-300">+20 XP</span>
            </div>

            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">${quizData.dailyMission.instruction}</p>

            <div class="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <p class="text-base sm:text-lg font-bold text-white leading-snug">"${quizData.dailyMission.targetPhrase}"</p>
                <p class="text-xs text-indigo-200 mt-0.5">${quizData.dailyMission.targetTh}</p>
                ${quizData.dailyMission.tip ? `<p class="text-[11px] text-amber-300 mt-1">💡 ${quizData.dailyMission.tip}</p>` : ""}
              </div>
              <button onclick="window.speechEngine.speak('${quizData.dailyMission.targetPhrase.replace(/'/g, "\\'")}')"
                class="p-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white transition-all shadow shrink-0" title="ฟังเสียงต้นฉบับ">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/></svg>
              </button>
            </div>

            <!-- Mic Test Trigger -->
            <div class="flex items-center justify-between pt-2">
              <span id="drill-mic-status-${levelId}" class="text-xs text-slate-300">กดปุ่มไมค์เพื่อฝึกออกเสียง</span>
              <button id="drill-mic-btn-${levelId}" onclick="window.app.startDrillSpeaking('${levelId}', '${quizData.dailyMission.targetPhrase.replace(/'/g, "\\'")}')"
                class="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-bold text-xs rounded-xl shadow transition-all flex items-center gap-2 active:scale-95">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"/></svg>
                <span>บันทึกเสียงฝึกพูด</span>
              </button>
            </div>
          </div>
        ` : ""}

        <!-- Part B: 5-Question Multiple Choice Assessment -->
        <div class="space-y-5">
          <div class="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800">
            <div>
              <h3 class="text-base font-bold text-slate-900 dark:text-white">แบบทดสอบวัดผลหลังเรียน (5 Multiple Choice Questions)</h3>
              <p class="text-xs text-slate-500">ตอบถูก 4 ใน 5 ข้อขึ้นไป (80%) เพื่อผ่านระดับนี้และบันทึกคะแนนสูงสุด</p>
            </div>
            ${existingHistory ? `
              <span class="px-2.5 py-1 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 text-xs font-bold">
                คะแนนสูงสุด: ${existingHistory.bestScore}/${existingHistory.totalQuestions} (${existingHistory.bestPercent}%)
              </span>
            ` : ""}
          </div>

          <!-- Questions List -->
          <div class="space-y-6">
            ${quizData.quizQuestions.map((q, qIndex) => {
              const selectedOpt = userAnswers[qIndex];
              const isCorrect = selectedOpt === q.answer;

              return `
                <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-3">
                  <div class="flex items-start gap-2">
                    <span class="w-6 h-6 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-xs font-bold shrink-0">
                      ${qIndex + 1}
                    </span>
                    <h4 class="text-sm font-bold text-slate-800 dark:text-slate-200 leading-snug">
                      ${q.question}
                    </h4>
                  </div>

                  <!-- Options -->
                  <div class="space-y-2 pt-1">
                    ${q.options.map((opt, optIndex) => {
                      let btnStyle = "border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 text-slate-700 dark:text-slate-300 hover:border-indigo-400";

                      if (isSubmitted) {
                        if (optIndex === q.answer) {
                          btnStyle = "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-200 font-bold";
                        } else if (selectedOpt === optIndex && !isCorrect) {
                          btnStyle = "border-red-500 bg-red-50 dark:bg-red-950/40 text-red-800 dark:text-red-200";
                        }
                      } else if (selectedOpt === optIndex) {
                        btnStyle = "border-indigo-600 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 font-bold";
                      }

                      return `
                        <button onclick="window.app.selectQuizOption('${levelId}', ${qIndex}, ${optIndex})"
                          ${isSubmitted ? "disabled" : ""}
                          class="w-full text-left p-3 rounded-xl border text-xs sm:text-sm transition-all flex items-center justify-between ${btnStyle}">
                          <span>${opt}</span>
                          <span class="w-5 h-5 rounded-full border border-slate-300 dark:border-slate-600 flex items-center justify-center text-[10px] shrink-0 font-bold">
                            ${String.fromCharCode(65 + optIndex)}
                          </span>
                        </button>
                      `;
                    }).join("")}
                  </div>

                  <!-- Detailed Explanation on Submit -->
                  ${isSubmitted ? `
                    <div class="mt-3 p-3 rounded-xl ${
                      isCorrect ? "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-200 border border-emerald-200" : "bg-red-50 dark:bg-red-950/40 text-red-800 dark:text-red-200 border border-red-200"
                    } text-xs space-y-1">
                      <span class="font-bold">${isCorrect ? "✅ ถูกต้อง!" : "❌ ยังไม่ถูกต้อง"}</span>
                      <p class="leading-relaxed">${q.explanation}</p>
                    </div>
                  ` : ""}
                </div>
              `;
            }).join("")}
          </div>

          <!-- Submit / Retake Controls -->
          <div class="pt-4 flex items-center justify-between border-t border-slate-200 dark:border-slate-800">
            ${isSubmitted ? `
              <div class="flex items-center gap-2">
                <span class="text-xs font-bold text-slate-800 dark:text-white">ทำแบบทดสอบเรียบร้อยแล้ว</span>
              </div>
              <button onclick="window.app.retakeQuiz('${levelId}')"
                class="px-5 py-2.5 bg-slate-800 text-white dark:bg-white dark:text-slate-900 font-bold text-xs rounded-xl shadow transition-all hover:opacity-90">
                ทำแบบทดสอบใหม่อีกครั้ง 🔄
              </button>
            ` : `
              <span class="text-xs text-slate-400">เลือกคำตอบให้ครบ 5 ข้อแล้วกดส่ง</span>
              <button onclick="window.app.submitQuiz('${levelId}')"
                class="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow transition-all active:scale-95">
                ส่งคำตอบและตรวจผล ➔
              </button>
            `}
          </div>
        </div>
      </div>
    `;
  }

  selectQuizOption(levelId, qIndex, optIndex) {
    if (!this.quizAnswers[levelId]) {
      this.quizAnswers[levelId] = {};
    }
    this.quizAnswers[levelId][qIndex] = optIndex;
    window.soundFx.playClick();
    const container = document.getElementById("main-content-view");
    if (container && this.currentView === "level-detail") {
      this.renderLevelDetailView(container, levelId);
    }
  }

  submitQuiz(levelId) {
    const course = (window.courseData || []).find(c => c.id === levelId);
    if (!course || !course.actionDrillAndQuiz) return;

    const questions = course.actionDrillAndQuiz.quizQuestions;
    const answers = this.quizAnswers[levelId] || {};

    if (Object.keys(answers).length < questions.length) {
      alert("กรุณาเลือกคำตอบให้ครบทั้ง 5 ข้อก่อนกดส่งคำตอบนะครับ");
      return;
    }

    let correctCount = 0;
    questions.forEach((q, idx) => {
      if (answers[idx] === q.answer) {
        correctCount++;
      }
    });

    this.quizSubmitted[levelId] = true;
    const record = window.storageManager.recordQuizScore(levelId, correctCount, questions.length);

    if (record.lastAttemptPercent >= 80) {
      window.soundFx.playVictory();
      window.storageManager.addXP(course.xpReward);
      this.showToast(`🎉 ยอดเยี่ยมมาก! คุณผ่านเกณฑ์ระดับนี้ด้วยคะแนน ${record.lastAttemptPercent}% (+${course.xpReward} XP)`, "success");
    } else {
      window.soundFx.playIncorrect();
      this.showToast(`คะแนนของคุณ: ${record.lastAttemptPercent}% (เกณฑ์ผ่านคือ 80% ขึ้นไป ลองทำใหม่อีกครั้งนะ!)`, "error");
    }

    this.renderHeaderStats();
    const container = document.getElementById("main-content-view");
    if (container && this.currentView === "level-detail") {
      this.renderLevelDetailView(container, levelId);
    }
  }

  retakeQuiz(levelId) {
    this.quizAnswers[levelId] = {};
    this.quizSubmitted[levelId] = false;
    window.soundFx.playClick();
    const container = document.getElementById("main-content-view");
    if (container && this.currentView === "level-detail") {
      this.renderLevelDetailView(container, levelId);
    }
  }

  startDrillSpeaking(levelId, targetPhrase) {
    const statusEl = document.getElementById(`drill-mic-status-${levelId}`);
    const micBtn = document.getElementById(`drill-mic-btn-${levelId}`);

    if (statusEl) statusEl.textContent = "🎙️ กำลังฟังเสียงของคุณ... กรุณาอ่านออกเสียงประโยคเลยครับ";
    if (micBtn) micBtn.classList.add("recording-pulse");

    window.speechEngine.listenAndScore(targetPhrase, {
      onStart: () => {
        window.soundFx.playClick();
      },
      onResult: (res) => {
        if (micBtn) micBtn.classList.remove("recording-pulse");
        if (statusEl) {
          statusEl.textContent = `คะแนนความแม่นยำ: ${res.score}% ("${res.spokenText}")`;
        }
        if (res.isPass) {
          window.soundFx.playCorrect();
          window.storageManager.addXP(20);
          window.storageManager.recordSpeakingDrill();
          this.renderHeaderStats();
          this.showToast(`🌟 ยอดเยี่ยมมาก! คะแนนการออกเสียง ${res.score}% (+20 XP)`, "success");
        } else {
          window.soundFx.playIncorrect();
          this.showToast(`คะแนนการออกเสียง: ${res.score}% ลองฝึกฟังแล้วพูดใหม่อีกครั้งนะครับ`, "info");
        }
      },
      onError: (err) => {
        if (micBtn) micBtn.classList.remove("recording-pulse");
        if (statusEl) statusEl.textContent = err.message || "เกิดข้อผิดพลาดในการฟังเสียง";
        this.showToast(err.message || "ไมโครโฟนขัดข้อง", "error");
      },
      onEnd: () => {
        if (micBtn) micBtn.classList.remove("recording-pulse");
      }
    });
  }

  // =========================================================================
  // VIEW 3: SPEAKING LAB (STANDALONE PRACTICE ROOM)
  // =========================================================================
  renderSpeakingLabView(container) {
    const defaultPhrases = [
      { en: "Could I please get an iced oat milk latte to go?", th: "ขอกาแฟลาเต้เย็นใส่นมโอ๊ตสั่งกลับบ้านหนึ่งแก้วค่ะ" },
      { en: "Where did you buy this beautiful camera?", th: "คุณซื้อกล้องสวยตัวนี้มาจากที่ไหนหรือครับ?" },
      { en: "If I were in your position, I would negotiate for better terms.", th: "ถ้าฉันอยู่ในสถานการณ์ของคุณ ฉันจะเจรจาขอเงื่อนไขที่ดีกว่านี้" },
      { en: "I see your point, however, we also need to consider the timeline constraint.", th: "ผมเข้าใจประเด็นของคุณครับ อย่างไรก็ตาม เราจำเป็นต้องพิจารณาข้อจำกัดด้านกรอบเวลาด้วยเช่นกัน" },
      { en: "Seldom have we witnessed such remarkable digital transformation and growth.", th: "น้อยครั้งนักที่พวกเราจะได้ประจักษ์ถึงการเติบโตและการเปลี่ยนผ่านสู่ดิจิทัลอันยอดเยี่ยมเช่นนี้" }
    ];

    container.innerHTML = `
      <div class="space-y-6 animate-fadeIn max-w-2xl mx-auto">
        <div class="text-center space-y-2">
          <span class="px-3 py-1 rounded-full bg-red-100 dark:bg-red-950/60 text-red-600 dark:text-red-400 text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5">
            <span class="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            <span>AI Voice Recognition</span>
          </span>
          <h1 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">ห้องซ้อมพูด (AI Speaking Lab)</h1>
          <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            ฝึกพูดออกเสียงภาษาอังกฤษผ่านไมโครโฟน ระบบจะวิเคราะห์ความถูกต้องและให้คะแนนความแม่นยำแบบเรียลไทม์
          </p>
        </div>

        <div class="space-y-3">
          <h3 class="text-xs font-bold uppercase tracking-wider text-slate-400">เลือกประโยคเป้าหมายเพื่อฝึกพูด:</h3>
          <div class="space-y-2.5">
            ${defaultPhrases.map((p, idx) => `
              <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
                <div class="flex items-start justify-between gap-3">
                  <div>
                    <p class="text-sm sm:text-base font-bold text-slate-900 dark:text-white">"${p.en}"</p>
                    <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">${p.th}</p>
                  </div>
                  <button onclick="window.speechEngine.speak('${p.en.replace(/'/g, "\\'")}')" class="p-2 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 rounded-xl transition-all shrink-0">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/></svg>
                  </button>
                </div>
                <div class="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <span id="standalone-mic-status-${idx}" class="text-[11px] text-slate-400">แตะไมค์แล้วเริ่มอ่านประโยค</span>
                  <button id="standalone-mic-btn-${idx}" onclick="window.app.startStandaloneSpeaking(${idx}, '${p.en.replace(/'/g, "\\'")}')"
                    class="px-4 py-1.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs rounded-xl shadow transition-all flex items-center gap-1.5 active:scale-95">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"/></svg>
                    <span>แตะเพื่อพูด</span>
                  </button>
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      </div>
    `;
  }

  startStandaloneSpeaking(idx, targetText) {
    const statusEl = document.getElementById(`standalone-mic-status-${idx}`);
    const micBtn = document.getElementById(`standalone-mic-btn-${idx}`);

    if (statusEl) statusEl.textContent = "🎙️ กำลังฟังเสียงของคุณ... กรุณาพูดเลยครับ";
    if (micBtn) micBtn.classList.add("recording-pulse");

    window.speechEngine.listenAndScore(targetText, {
      onStart: () => {
        window.soundFx.playClick();
      },
      onResult: (res) => {
        if (micBtn) micBtn.classList.remove("recording-pulse");
        if (statusEl) {
          statusEl.textContent = `ความแม่นยำ: ${res.score}% ("${res.spokenText}")`;
        }
        if (res.isPass) {
          window.soundFx.playCorrect();
          window.storageManager.addXP(15);
          window.storageManager.recordSpeakingDrill();
          this.renderHeaderStats();
          this.showToast(`คะแนนการออกเสียง ${res.score}% ยอดเยี่ยมมาก! (+15 XP)`, "success");
        } else {
          window.soundFx.playIncorrect();
          this.showToast(`คะแนน ${res.score}% ลองออกเสียงใหม่อีกครั้งให้ชัดเจนขึ้นนะครับ`, "info");
        }
      },
      onError: (err) => {
        if (micBtn) micBtn.classList.remove("recording-pulse");
        if (statusEl) statusEl.textContent = err.message || "เกิดข้อผิดพลาดในการฟังเสียง";
        this.showToast(err.message || "ไมโครโฟนขัดข้อง", "error");
      },
      onEnd: () => {
        if (micBtn) micBtn.classList.remove("recording-pulse");
      }
    });
  }

  // =========================================================================
  // VIEW 4: PROFILE & BACKUP / RESTORE
  // =========================================================================
  renderProfileAndBackupView(container) {
    const state = window.storageManager.state;
    const courses = window.courseData || [];
    const completedCount = state.completedLevels.length;

    container.innerHTML = `
      <div class="space-y-6 animate-fadeIn max-w-2xl mx-auto">
        <!-- Profile Card -->
        <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm space-y-5">
          <div class="flex items-center gap-4">
            <div class="w-20 h-20 rounded-2xl bg-indigo-100 dark:bg-indigo-950 flex items-center justify-center text-4xl shadow-md border-2 border-indigo-500/20">
              ${state.profile.avatar}
            </div>
            <div class="space-y-1">
              <div class="flex items-center gap-2">
                <h2 class="text-xl font-bold text-slate-900 dark:text-white">${state.profile.name}</h2>
                <button onclick="window.app.promptEditName()" class="text-xs text-indigo-600 dark:text-indigo-400 hover:underline">แก้ไข</button>
              </div>
              <p class="text-xs text-slate-400">เริ่มต้นเรียนเมื่อ: ${state.profile.joinedDate}</p>
              <div class="pt-1 flex items-center gap-2 text-xs">
                <span class="px-2.5 py-0.5 rounded-lg bg-amber-50 dark:bg-amber-950/40 text-amber-600 font-bold">✨ ${state.stats.totalXP} XP</span>
                <span class="px-2.5 py-0.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 font-bold">🏆 ผ่าน ${completedCount} ระดับ</span>
              </div>
            </div>
          </div>

          <!-- Avatar Picker -->
          <div class="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
            <span class="text-slate-400">เลือกไอคอนประจำตัว:</span>
            <div class="flex gap-2">
              ${["🚀", "👩‍💻", "👨‍💼", "🌟", "🦁", "🎯"].map(emoji => `
                <button onclick="window.app.updateAvatarEmoji('${emoji}')" class="text-sm p-1 hover:scale-125 transition-transform">${emoji}</button>
              `).join("")}
            </div>
          </div>
        </div>

        <!-- Future-Proof Backup & Restore Section -->
        <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm space-y-4">
          <div>
            <h3 class="text-base font-bold text-slate-900 dark:text-white">จัดการข้อมูลและการสำรองไฟล์ (Data Management)</h3>
            <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              นำข้อมูลการเรียนของคุณออกไปจัดเก็บ หรือนำเข้าจากเครื่องอื่นได้โดยข้อมูลไม่สูญหาย
            </p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <button onclick="window.storageManager.exportBackupJSON()"
              class="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-indigo-500 bg-slate-50 dark:bg-slate-800/40 text-left space-y-1 transition-all">
              <span class="font-bold text-xs text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
                <span>Export Backup (JSON)</span>
              </span>
              <p class="text-[11px] text-slate-500 dark:text-slate-400">ดาวน์โหลดคะแนนและประวัติทั้งหมดเก็บไว้</p>
            </button>

            <label class="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-indigo-500 bg-slate-50 dark:bg-slate-800/40 text-left space-y-1 transition-all cursor-pointer">
              <span class="font-bold text-xs text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l4-4m0 0l4 4m-4-4v12"/></svg>
                <span>Import Restore (JSON)</span>
              </span>
              <p class="text-[11px] text-slate-500 dark:text-slate-400">เลือกไฟล์ .json เพื่อกู้คืนความคืบหน้า</p>
              <input type="file" accept=".json" class="hidden" onchange="window.app.handleRestoreFile(event)">
            </label>
          </div>

          <div class="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end">
            <button onclick="window.app.confirmResetAll()"
              class="text-xs text-red-500 hover:underline">
              รีเซ็ตล้างข้อมูลทั้งหมด (Reset Data)
            </button>
          </div>
        </div>
      </div>
    `;
  }

  updateAvatarEmoji(emoji) {
    window.storageManager.updateAvatar(emoji);
    window.soundFx.playClick();
    this.renderHeaderStats();
    const container = document.getElementById("main-content-view");
    if (container && this.currentView === "profile") {
      this.renderProfileAndBackupView(container);
    }
  }

  promptEditName() {
    const currentName = window.storageManager.state.profile.name;
    const newName = prompt("กรุณาระบุชื่อของคุณ:", currentName);
    if (newName && newName.trim()) {
      window.storageManager.updateProfileName(newName);
      window.soundFx.playClick();
      this.renderHeaderStats();
      const container = document.getElementById("main-content-view");
      if (container && this.currentView === "profile") {
        this.renderProfileAndBackupView(container);
      }
      this.showToast("บันทึกชื่อเรียบร้อยแล้ว", "success");
    }
  }

  handleRestoreFile(event) {
    const file = event.target.files && event.target.files[0];
    if (!file) return;

    window.storageManager.importRestoreJSON(
      file,
      () => {
        window.soundFx.playVictory();
        this.renderHeaderStats();
        this.renderView(this.currentView);
        this.showToast("กู้คืนข้อมูลสำเร็จเรียบร้อยแล้ว! 🎉", "success");
      },
      (err) => {
        window.soundFx.playIncorrect();
        alert("ไฟล์ที่เลือกไม่ถูกต้อง หรือมีโครงสร้างไม่ตรงตามมาตรฐาน: " + err.message);
      }
    );
  }

  confirmResetAll() {
    if (confirm("คุณแน่ใจหรือไม่ว่าต้องการรีเซ็ตล้างข้อมูลคะแนนและประวัติการเรียนทั้งหมด?")) {
      window.storageManager.resetAllData();
      localStorage.removeItem("engmastery_reviewed_vocabs");
      localStorage.removeItem("engmastery_article_quizzes");
      localStorage.removeItem("engmastery_masterclass_quizzes");
      this.reviewedVocabIds = new Set();
      this.articleQuizAnswers = {};
      this.articleQuizSubmitted = {};
      this.masterclassQuizAnswers = {};
      this.masterclassQuizSubmitted = {};
      window.soundFx.playClick();
      this.renderHeaderStats();
      this.renderView("dashboard");
      this.showToast("รีเซ็ตข้อมูลทั้งหมดเรียบร้อยแล้ว", "info");
    }
  }

  // =========================================================================
  // VIEW: VOCABULARY & RANDOM MODE (FLASHCARDS & BROWSER)
  // =========================================================================
  renderVocabularyView(container) {
    const vocabs = window.vocabData || [];
    const filtered = this.getFilteredVocabList(vocabs);
    const totalVocabs = vocabs.length;
    const learnedCount = [...this.reviewedVocabIds].filter(id => vocabs.some(v => v.id === id)).length;
    const progressPercent = totalVocabs > 0 ? Math.round((learnedCount / totalVocabs) * 100) : 0;

    container.innerHTML = `
      <div class="space-y-6 animate-fadeIn max-w-4xl mx-auto">
        <!-- Header -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
          <div>
            <div class="flex items-center gap-2">
              <span class="text-2xl">🎲</span>
              <h1 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                คลังคำศัพท์ & โหมดสุ่มการ์ด
              </h1>
            </div>
            <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              คำศัพท์ Oxford 3000™, ศัพท์เทคนิค DevOps & Cloud, และ Phrasal Verbs & Idioms พร้อมเสียงอ่าน TTS
            </p>
          </div>
          <div class="flex items-center gap-2">
            <!-- Mode Switcher -->
            <div class="bg-slate-100 dark:bg-slate-800 p-1 rounded-2xl flex items-center gap-1 text-xs font-bold">
              <button onclick="window.app.setVocabMode('flashcard')"
                class="px-3 py-1.5 rounded-xl transition-all flex items-center gap-1.5 ${
                  this.vocabMode === 'flashcard'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }">
                <span>🎴 Flashcards</span>
              </button>
              <button onclick="window.app.setVocabMode('browse')"
                class="px-3 py-1.5 rounded-xl transition-all flex items-center gap-1.5 ${
                  this.vocabMode === 'browse'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }">
                <span>📋 รายการทั้งหมด</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Learning Progress Metric -->
        <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold text-lg">
              ✨
            </div>
            <div>
              <div class="text-xs text-slate-500 dark:text-slate-400 font-medium">ความคืบหน้าการจดจำคำศัพท์</div>
              <div class="text-sm font-bold text-slate-900 dark:text-white">
                จำได้แล้ว <span class="text-indigo-600 dark:text-indigo-400 font-black">${learnedCount}</span> / ${totalVocabs} คำ (${progressPercent}%)
              </div>
            </div>
          </div>
          <div class="w-full sm:w-48 bg-slate-100 dark:bg-slate-800 rounded-full h-2.5 overflow-hidden">
            <div class="bg-gradient-to-r from-purple-500 to-indigo-600 h-2.5 rounded-full transition-all duration-500" style="width: ${progressPercent}%"></div>
          </div>
        </div>

        <!-- Filters & Search Toolbar -->
        <div class="space-y-3">
          <!-- Search Input -->
          <div class="relative">
            <input type="text"
              placeholder="ค้นหาคำศัพท์ ความหมายภาษาไทย หรือตัวอย่างประโยค..."
              value="${this.vocabSearch.replace(/"/g, '&quot;')}"
              oninput="window.app.searchVocab(this.value)"
              class="w-full pl-10 pr-24 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
            />
            <svg class="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
            ${this.vocabSearch ? `
              <button onclick="window.app.searchVocab('')" class="absolute right-3 top-2.5 px-2 py-0.5 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 bg-slate-100 dark:bg-slate-800 rounded-lg">✕ ล้างคำค้น</button>
            ` : ''}
          </div>

          <!-- Category Filter Pills -->
          <div class="flex flex-wrap items-center gap-2">
            ${[
              { id: "all", label: "🌟 ทั้งหมด" },
              { id: "tech-devops", label: "💻 Tech & DevOps" },
              { id: "workplace-business", label: "💼 Workplace" },
              { id: "phrasal-idioms", label: "⚡ Phrasal Verbs" },
              { id: "daily-oxford", label: "📚 Oxford 3000™" }
            ].map(cat => `
              <button onclick="window.app.setVocabCategory('${cat.id}')"
                class="px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  this.vocabFilter === cat.id
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
                }">
                ${cat.label}
              </button>
            `).join("")}
          </div>
        </div>

        <!-- Content Area: Flashcard or Browse List -->
        <div id="vocab-content-area">
          ${this.vocabMode === 'flashcard' ? this.renderFlashcardMode(filtered) : this.renderBrowseVocabMode(filtered)}
        </div>
      </div>
    `;
  }

  renderFlashcardMode(filtered) {
    if (filtered.length === 0) {
      return `
        <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-10 text-center space-y-3">
          <div class="text-4xl">🔍</div>
          <h3 class="text-base font-bold text-slate-900 dark:text-white">ไม่พบคำศัพท์ตามเงื่อนไขที่ค้นหา</h3>
          <p class="text-xs text-slate-500 dark:text-slate-400">ลองเปลี่ยนหมวดหมู่หรือล้างคำค้นหาดูใหม่อีกครั้ง</p>
          <button onclick="window.app.resetVocabFilters()" class="px-4 py-2 bg-indigo-600 text-white text-xs font-bold rounded-xl shadow-sm">
            แสดงคำศัพท์ทั้งหมด
          </button>
        </div>
      `;
    }

    if (this.currentFlashcardIndex >= filtered.length) {
      this.currentFlashcardIndex = 0;
    }
    const currentCard = filtered[this.currentFlashcardIndex];
    const isLearned = this.reviewedVocabIds.has(currentCard.id);

    return `
      <div class="space-y-4 max-w-lg mx-auto">
        <!-- Progress Counter -->
        <div class="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 px-1">
          <span>ใบที่ <strong class="text-slate-900 dark:text-white font-bold">${this.currentFlashcardIndex + 1}</strong> จาก ${filtered.length} ใบ</span>
          <span class="text-indigo-600 dark:text-indigo-400 font-semibold">${currentCard.categoryLabel}</span>
        </div>

        <!-- 3D Flashcard Container -->
        <div class="perspective-1000 w-full h-[370px] sm:h-[390px] cursor-pointer select-none" onclick="window.app.toggleFlashcardFlip()">
          <div class="card-inner w-full h-full relative rounded-3xl transition-transform duration-500 transform-style-3d ${this.isCardFlipped ? 'is-flipped' : ''}">
            
            <!-- FRONT FACE -->
            <div class="card-front absolute inset-0 bg-gradient-to-br from-indigo-900 via-slate-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-indigo-700/50 shadow-2xl backface-hidden">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <span class="px-2.5 py-1 rounded-lg text-[10px] font-black uppercase bg-indigo-500/30 text-indigo-200 border border-indigo-400/30">
                    CEFR ${currentCard.level}
                  </span>
                  <span class="text-xs text-indigo-300 font-medium">
                    ${currentCard.pos}
                  </span>
                </div>
                <button onclick="event.stopPropagation(); window.speechEngine.speak('${currentCard.word.replace(/'/g, "\\'")}')"
                  class="p-2.5 rounded-2xl bg-white/10 hover:bg-white/20 active:scale-95 text-white transition-all shadow-md"
                  title="ฟังเสียงอ่านออกเสียง">
                  <svg class="w-5 h-5 text-indigo-300" fill="currentColor" viewBox="0 0 20 20"><path d="M10 3.5a.75.75 0 00-1.28-.53l-3.97 3.97H2.75A1.75 1.75 0 001 8.69v2.62c0 .966.784 1.75 1.75 1.75h2l3.97 3.97a.75.75 0 001.28-.53V3.5zM14.5 10a4.5 4.5 0 00-1.32-3.18.75.75 0 111.06-1.06A6 6 0 0116 10a6 6 0 01-1.76 4.24.75.75 0 01-1.06-1.06A4.5 4.5 0 0014.5 10z"/></svg>
                </button>
              </div>

              <!-- Center Word -->
              <div class="text-center my-auto space-y-2">
                <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-white drop-shadow-md">
                  ${currentCard.word}
                </h2>
                <div class="inline-block px-3 py-1 rounded-full bg-white/10 text-xs sm:text-sm font-mono text-indigo-200">
                  ${currentCard.ipa}
                </div>
              </div>

              <div class="text-center pt-3 border-t border-white/10">
                <span class="text-xs text-indigo-300/80 flex items-center justify-center gap-1.5 animate-pulse">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
                  <span>แตะที่การ์ดเพื่อพลิกดูคำแปลและความหมาย</span>
                </span>
              </div>
            </div>

            <!-- BACK FACE -->
            <div class="card-back absolute inset-0 bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-3xl p-6 sm:p-7 flex flex-col justify-between border border-indigo-200 dark:border-indigo-900/60 shadow-2xl backface-hidden transform-rotate-y-180">
              <div class="space-y-3">
                <div class="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
                  <div class="flex items-center gap-2">
                    <span class="text-base font-bold text-slate-900 dark:text-white">${currentCard.word}</span>
                    <span class="text-xs font-mono text-slate-400 dark:text-slate-500">${currentCard.ipa}</span>
                  </div>
                  <button onclick="event.stopPropagation(); window.speechEngine.speak('${currentCard.word.replace(/'/g, "\\'")}')"
                    class="p-1.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 transition-colors">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 3.5a.75.75 0 00-1.28-.53l-3.97 3.97H2.75A1.75 1.75 0 001 8.69v2.62c0 .966.784 1.75 1.75 1.75h2l3.97 3.97a.75.75 0 001.28-.53V3.5zM14.5 10a4.5 4.5 0 00-1.32-3.18.75.75 0 111.06-1.06A6 6 0 0116 10a6 6 0 01-1.76 4.24.75.75 0 01-1.06-1.06A4.5 4.5 0 0014.5 10z"/></svg>
                  </button>
                </div>

                <!-- Thai Translation & English Definition -->
                <div>
                  <h3 class="text-lg sm:text-xl font-bold text-indigo-600 dark:text-indigo-400">
                    ${currentCard.th}
                  </h3>
                  <p class="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                    ${currentCard.definition}
                  </p>
                </div>

                <!-- Example Sentence -->
                <div class="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-100 dark:border-slate-800 text-xs space-y-1">
                  <div class="flex items-start justify-between gap-2">
                    <p class="font-medium text-slate-800 dark:text-slate-200">
                      "${currentCard.exampleEn}"
                    </p>
                    <button onclick="event.stopPropagation(); window.speechEngine.speak('${currentCard.exampleEn.replace(/'/g, "\\'")}')"
                      class="shrink-0 p-1 text-indigo-600 dark:text-indigo-400 hover:scale-110 transition-transform">
                      <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 3.5a.75.75 0 00-1.28-.53l-3.97 3.97H2.75A1.75 1.75 0 001 8.69v2.62c0 .966.784 1.75 1.75 1.75h2l3.97 3.97a.75.75 0 001.28-.53V3.5zM14.5 10a4.5 4.5 0 00-1.32-3.18.75.75 0 111.06-1.06A6 6 0 0116 10a6 6 0 01-1.76 4.24.75.75 0 01-1.06-1.06A4.5 4.5 0 0014.5 10z"/></svg>
                    </button>
                  </div>
                  <p class="text-slate-500 dark:text-slate-400 text-[11px]">
                    ${currentCard.exampleTh}
                  </p>
                </div>

                <!-- Collocations / Synonyms -->
                ${currentCard.collocations && currentCard.collocations.length > 0 ? `
                  <div class="flex flex-wrap gap-1 text-[10px]">
                    <span class="text-slate-400 font-semibold mr-1">ใช้คู่กับ:</span>
                    ${currentCard.collocations.map(c => `
                      <span class="px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 font-medium">
                        ${c}
                      </span>
                    `).join("")}
                  </div>
                ` : ''}
              </div>

              <div class="text-center pt-2 border-t border-slate-100 dark:border-slate-800">
                <span class="text-[11px] text-slate-400">แตะเพื่อพลิกกลับไปหน้าการ์ด</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Navigation & Action Controls -->
        <div class="grid grid-cols-4 gap-2 pt-2">
          <button onclick="window.app.prevFlashcard()"
            class="py-2.5 px-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all flex items-center justify-center gap-1 shadow-sm active:scale-95 ${
              this.currentFlashcardIndex === 0 ? 'opacity-40 cursor-not-allowed' : ''
            }">
            <span>◀ ก่อนหน้า</span>
          </button>

          <button onclick="window.app.toggleFlashcardFlip()"
            class="py-2.5 px-3 bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800/60 rounded-2xl text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 transition-all flex items-center justify-center gap-1 shadow-sm active:scale-95">
            <span>🔄 พลิกการ์ด</span>
          </button>

          <button onclick="window.app.randomFlashcard()"
            class="py-2.5 px-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all flex items-center justify-center gap-1 shadow-sm active:scale-95">
            <span>🎲 สุ่มใหม่</span>
          </button>

          <button onclick="window.app.nextFlashcard()"
            class="py-2.5 px-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all flex items-center justify-center gap-1 shadow-sm active:scale-95 ${
              this.currentFlashcardIndex >= filtered.length - 1 ? 'opacity-40 cursor-not-allowed' : ''
            }">
            <span>ถัดไป ▶</span>
          </button>
        </div>

        <!-- Mark as Learned Button -->
        <div class="pt-2">
          ${isLearned ? `
            <div class="w-full py-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs font-bold flex items-center justify-center gap-2">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
              <span>คุณจำคำศัพท์นี้ได้แล้ว ✨ (ได้รับ +5 XP แล้ว)</span>
            </div>
          ` : `
            <button onclick="window.app.markVocabLearned('${currentCard.id}')"
              class="w-full py-3 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 active:scale-[0.99]">
              <span>✅ ฉันจำคำนี้ได้แล้ว (+5 XP)</span>
            </button>
          `}
        </div>
      </div>
    `;
  }

  renderBrowseVocabMode(filtered) {
    if (filtered.length === 0) {
      return `
        <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-10 text-center space-y-3">
          <div class="text-4xl">🔍</div>
          <h3 class="text-base font-bold text-slate-900 dark:text-white">ไม่พบคำศัพท์ตามเงื่อนไขที่ค้นหา</h3>
          <p class="text-xs text-slate-500 dark:text-slate-400">ลองเปลี่ยนหมวดหมู่หรือล้างคำค้นหาดูใหม่อีกครั้ง</p>
        </div>
      `;
    }

    const visibleItems = filtered.slice(0, this.browseVisibleCount);
    const hasMore = this.browseVisibleCount < filtered.length;

    return `
      <div class="space-y-4">
        <div class="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-medium px-1">
          <span>แสดง <strong class="text-slate-900 dark:text-white font-bold">${visibleItems.length}</strong> จากทั้งหมด ${filtered.length} คำศัพท์</span>
          ${filtered.length > 24 ? `<span class="text-indigo-600 dark:text-indigo-400 font-semibold">${Math.round((visibleItems.length / filtered.length) * 100)}%</span>` : ''}
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          ${visibleItems.map(v => {
            const isLearned = this.reviewedVocabIds.has(v.id);
            return `
              <div class="bg-white dark:bg-slate-900 border ${
                isLearned ? 'border-emerald-200 dark:border-emerald-900/60' : 'border-slate-200 dark:border-slate-800'
              } rounded-3xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-3">
                <div class="space-y-2">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-2">
                      <span class="px-2 py-0.5 rounded-lg text-[10px] font-black uppercase bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800">
                        ${v.level}
                      </span>
                      <span class="text-[11px] font-semibold text-slate-400">${v.pos}</span>
                      <span class="text-[11px] font-mono text-slate-400">${v.ipa}</span>
                    </div>
                    <div class="flex items-center gap-1">
                      <button onclick="window.speechEngine.speak('${v.word.replace(/'/g, "\\'")}')"
                        class="p-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 hover:scale-110 transition-transform">
                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 3.5a.75.75 0 00-1.28-.53l-3.97 3.97H2.75A1.75 1.75 0 001 8.69v2.62c0 .966.784 1.75 1.75 1.75h2l3.97 3.97a.75.75 0 001.28-.53V3.5zM14.5 10a4.5 4.5 0 00-1.32-3.18.75.75 0 111.06-1.06A6 6 0 0116 10a6 6 0 01-1.76 4.24.75.75 0 01-1.06-1.06A4.5 4.5 0 0014.5 10z"/></svg>
                      </button>
                    </div>
                  </div>

                  <h3 class="text-lg font-black text-slate-900 dark:text-white">
                    ${v.word}
                  </h3>
                  <div class="text-sm font-bold text-indigo-600 dark:text-indigo-400">
                    ${v.th}
                  </div>
                  <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    ${v.definition}
                  </p>

                  <div class="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-100 dark:border-slate-800 text-xs space-y-1">
                    <div class="flex items-start justify-between gap-2">
                      <p class="font-medium text-slate-800 dark:text-slate-200">
                        "${v.exampleEn}"
                      </p>
                      <button onclick="window.speechEngine.speak('${v.exampleEn.replace(/'/g, "\\'")}')"
                        class="shrink-0 p-1 text-indigo-600 dark:text-indigo-400 hover:scale-110 transition-transform">
                        <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 3.5a.75.75 0 00-1.28-.53l-3.97 3.97H2.75A1.75 1.75 0 001 8.69v2.62c0 .966.784 1.75 1.75 1.75h2l3.97 3.97a.75.75 0 001.28-.53V3.5zM14.5 10a4.5 4.5 0 00-1.32-3.18.75.75 0 111.06-1.06A6 6 0 0116 10a6 6 0 01-1.76 4.24.75.75 0 01-1.06-1.06A4.5 4.5 0 0014.5 10z"/></svg>
                      </button>
                    </div>
                    <p class="text-[11px] text-slate-500 dark:text-slate-400">
                      ${v.exampleTh}
                    </p>
                  </div>

                  ${v.collocations && v.collocations.length > 0 ? `
                    <div class="flex flex-wrap gap-1 text-[10px] pt-1">
                      <span class="text-slate-400 font-semibold mr-1">ใช้คู่กับ:</span>
                      ${v.collocations.map(c => `
                        <span class="px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 font-medium">
                          ${c}
                        </span>
                      `).join("")}
                    </div>
                  ` : ''}
                </div>

                <div class="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <span class="text-[11px] text-slate-400">${v.categoryLabel}</span>
                  ${isLearned ? `
                    <span class="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                      <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
                      <span>จำได้แล้ว</span>
                    </span>
                  ` : `
                    <button onclick="window.app.markVocabLearned('${v.id}')"
                      class="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-emerald-50 hover:text-emerald-600 dark:hover:bg-emerald-950/60 dark:hover:text-emerald-300 text-slate-700 dark:text-slate-300 text-xs font-bold transition-all flex items-center gap-1">
                      <span>+5 XP จำได้แล้ว</span>
                    </button>
                  `}
                </div>
              </div>
            `;
          }).join("")}
        </div>

        ${hasMore ? `
          <div class="pt-4 pb-2 text-center flex flex-col sm:flex-row items-center justify-center gap-3">
            <button onclick="window.app.loadMoreVocab()"
              class="w-full sm:w-auto px-6 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 active:scale-95">
              <span>แสดงคำศัพท์เพิ่ม (+24 คำ)</span>
              <span class="opacity-80 font-normal">(${visibleItems.length}/${filtered.length})</span>
            </button>
            <button onclick="window.app.loadAllVocab()"
              class="w-full sm:w-auto px-4 py-3 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-bold transition-all">
              <span>แสดงทั้งหมด (${filtered.length} คำ)</span>
            </button>
          </div>
        ` : ''}
      </div>
    `;
  }

  loadMoreVocab() {
    window.soundFx.playClick();
    this.browseVisibleCount += 24;
    const container = document.getElementById("main-content-view");
    if (container && this.currentView === "vocabulary") {
      this.renderVocabularyView(container);
    }
  }

  loadAllVocab() {
    window.soundFx.playClick();
    this.browseVisibleCount = 9999;
    const container = document.getElementById("main-content-view");
    if (container && this.currentView === "vocabulary") {
      this.renderVocabularyView(container);
    }
  }

  getFilteredVocabList(vocabs) {
    return vocabs.filter(v => {
      const matchCat = this.vocabFilter === 'all' || v.category === this.vocabFilter;
      if (!matchCat) return false;
      if (!this.vocabSearch) return true;
      const q = this.vocabSearch.toLowerCase().trim();
      return (
        v.word.toLowerCase().includes(q) ||
        (v.th && v.th.toLowerCase().includes(q)) ||
        (v.definition && v.definition.toLowerCase().includes(q)) ||
        (v.exampleEn && v.exampleEn.toLowerCase().includes(q))
      );
    });
  }

  setVocabCategory(catId) {
    window.soundFx.playClick();
    this.vocabFilter = catId;
    this.currentFlashcardIndex = 0;
    this.isCardFlipped = false;
    this.browseVisibleCount = 24;
    const container = document.getElementById("main-content-view");
    if (container && this.currentView === "vocabulary") {
      this.renderVocabularyView(container);
    }
  }

  setVocabMode(mode) {
    window.soundFx.playClick();
    this.vocabMode = mode;
    this.isCardFlipped = false;
    const container = document.getElementById("main-content-view");
    if (container && this.currentView === "vocabulary") {
      this.renderVocabularyView(container);
    }
  }

  searchVocab(query) {
    this.vocabSearch = query;
    this.currentFlashcardIndex = 0;
    this.isCardFlipped = false;
    this.browseVisibleCount = 24;
    const container = document.getElementById("main-content-view");
    if (container && this.currentView === "vocabulary") {
      this.renderVocabularyView(container);
    }
  }

  resetVocabFilters() {
    this.vocabFilter = "all";
    this.vocabSearch = "";
    this.currentFlashcardIndex = 0;
    this.isCardFlipped = false;
    this.browseVisibleCount = 24;
    const container = document.getElementById("main-content-view");
    if (container && this.currentView === "vocabulary") {
      this.renderVocabularyView(container);
    }
  }

  toggleFlashcardFlip() {
    window.soundFx.playFlip();
    this.isCardFlipped = !this.isCardFlipped;
    const cardInner = document.querySelector(".card-inner");
    if (cardInner) {
      if (this.isCardFlipped) {
        cardInner.classList.add("is-flipped");
      } else {
        cardInner.classList.remove("is-flipped");
      }
    }
  }

  nextFlashcard() {
    const vocabs = window.vocabData || [];
    const filtered = this.getFilteredVocabList(vocabs);
    if (this.currentFlashcardIndex < filtered.length - 1) {
      window.soundFx.playClick();
      this.currentFlashcardIndex += 1;
      this.isCardFlipped = false;
      const container = document.getElementById("main-content-view");
      if (container && this.currentView === "vocabulary") {
        this.renderVocabularyView(container);
      }
    }
  }

  prevFlashcard() {
    if (this.currentFlashcardIndex > 0) {
      window.soundFx.playClick();
      this.currentFlashcardIndex -= 1;
      this.isCardFlipped = false;
      const container = document.getElementById("main-content-view");
      if (container && this.currentView === "vocabulary") {
        this.renderVocabularyView(container);
      }
    }
  }

  randomFlashcard() {
    const vocabs = window.vocabData || [];
    const filtered = this.getFilteredVocabList(vocabs);
    if (filtered.length <= 1) return;
    window.soundFx.playFlip();
    let nextIndex;
    do {
      nextIndex = Math.floor(Math.random() * filtered.length);
    } while (nextIndex === this.currentFlashcardIndex && filtered.length > 1);
    this.currentFlashcardIndex = nextIndex;
    this.isCardFlipped = false;
    const container = document.getElementById("main-content-view");
    if (container && this.currentView === "vocabulary") {
      this.renderVocabularyView(container);
    }
  }

  markVocabLearned(vocabId) {
    if (!this.reviewedVocabIds.has(vocabId)) {
      this.reviewedVocabIds.add(vocabId);
      try {
        localStorage.setItem("engmastery_reviewed_vocabs", JSON.stringify([...this.reviewedVocabIds]));
      } catch (e) {}
      window.storageManager.addXP(5);
      window.soundFx.playCorrect();
      this.renderHeaderStats();
      this.showToast("+5 XP! จำคำศัพท์ได้แล้ว เก่งมาก 🎉", "success");
      const container = document.getElementById("main-content-view");
      if (container && this.currentView === "vocabulary") {
        this.renderVocabularyView(container);
      }
    }
  }

  // =========================================================================
  // VIEW: ARTICLES LIBRARY & READER
  // =========================================================================
  renderArticlesView(container, articleId) {
    const articles = window.articlesData || [];
    if (articleId) {
      const article = articles.find(a => a.id === articleId) || articles[0];
      this.renderArticleDetail(container, article);
    } else {
      this.renderArticleListing(container, articles);
    }
  }

  renderArticleListing(container, articles) {
    container.innerHTML = `
      <div class="space-y-6 animate-fadeIn max-w-4xl mx-auto">
        <!-- Header -->
        <div class="pb-4 border-b border-slate-200 dark:border-slate-800">
          <div class="flex items-center gap-2">
            <span class="text-2xl">📚</span>
            <h1 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
              คลังบทความเชิงลึก (Articles Library & Reader)
            </h1>
          </div>
          <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            ฝึกคิดเป็นภาษาอังกฤษ, ถอดรหัสสำเนียงสากล, และเทคนิคการเขียนอีเมล & แชท Slack ให้ได้ใจทีมงานระดับโลก พร้อมเสียง AI อ่านบทความและควิซวัดความเข้าใจ
          </p>
        </div>

        <!-- Articles Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
          ${articles.map(art => {
            const quizRecord = this.articleQuizSubmitted[art.id];
            const isPassed = quizRecord && quizRecord.passed;

            return `
              <div onclick="window.app.navigateTo('articles', { articleId: '${art.id}' })"
                class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between space-y-4 group">
                
                <div class="space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="text-3xl">${art.coverEmoji}</span>
                    <div class="flex items-center gap-2">
                      <span class="px-2.5 py-1 rounded-full text-[10px] font-black uppercase bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800">
                        ${art.readTime}
                      </span>
                      ${isPassed ? `
                        <span class="px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 text-[10px] font-bold flex items-center gap-1">
                          <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
                          <span>ผ่านควิซแล้ว (${quizRecord.score}/${quizRecord.total})</span>
                        </span>
                      ` : ''}
                    </div>
                  </div>

                  <div>
                    <span class="text-xs font-semibold text-indigo-600 dark:text-indigo-400">${art.categoryTh}</span>
                    <h2 class="text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors mt-1">
                      ${art.title}
                    </h2>
                    <p class="text-xs text-slate-400 dark:text-slate-500 font-medium italic mt-0.5">
                      ${art.titleEn}
                    </p>
                  </div>

                  <p class="text-xs text-slate-500 dark:text-slate-400 line-clamp-3 leading-relaxed">
                    ${art.summary}
                  </p>

                  <div class="flex flex-wrap gap-1 pt-1">
                    ${art.tags.map(t => `
                      <span class="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[10px] font-medium">
                        #${t}
                      </span>
                    `).join("")}
                  </div>
                </div>

                <div class="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                  <span class="text-slate-400 text-[11px]">${art.author}</span>
                  <span class="font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>อ่านบทความ & ควิซ</span>
                    <span>➔</span>
                  </span>
                </div>
              </div>
            `;
          }).join("")}
        </div>
      </div>
    `;
  }

  renderArticleDetail(container, article) {
    const quizAnswers = this.articleQuizAnswers[article.id] || {};
    const quizResult = this.articleQuizSubmitted[article.id] || null;

    container.innerHTML = `
      <div class="space-y-8 animate-fadeIn max-w-3xl mx-auto">
        <!-- Back Navigation & Header -->
        <div class="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
          <button onclick="window.app.navigateTo('articles', { articleId: null })"
            class="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
            <span>กลับสู่หน้ารวมบทความ</span>
          </button>
          <div class="flex items-center gap-2">
            <span class="px-2.5 py-1 rounded-full text-xs font-bold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800">
              ${article.readTime}
            </span>
          </div>
        </div>

        <!-- Article Hero Header -->
        <div class="space-y-3">
          <div class="flex items-center gap-2">
            <span class="text-3xl">${article.coverEmoji}</span>
            <span class="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              ${article.categoryTh} • ${article.category}
            </span>
          </div>

          <h1 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white leading-tight">
            ${article.title}
          </h1>
          <p class="text-sm font-semibold text-slate-500 dark:text-slate-400 italic">
            ${article.titleEn}
          </p>

          <div class="flex items-center gap-4 text-xs text-slate-400 pt-1">
            <span>โดย ${article.author}</span>
            <span>•</span>
            <span>เผยแพร่เมื่อ ${article.publishedDate}</span>
          </div>

          <!-- Audio Read Aloud Toolbar -->
          <div class="mt-4 p-4 rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/60 flex items-center justify-between gap-4">
            <div class="flex items-center gap-3">
              <div class="w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold text-sm">
                🎙️
              </div>
              <div>
                <h4 class="text-xs font-bold text-slate-900 dark:text-white">AI Audio Reader</h4>
                <p class="text-[11px] text-slate-500 dark:text-slate-400">ฟังเสียงอ่านออกเสียงภาษาอังกฤษทั้งบทความ</p>
              </div>
            </div>
            <button onclick="window.app.toggleArticleReadAloud('${article.id}')"
              id="article-read-aloud-btn"
              class="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-sm transition-all flex items-center gap-1.5 active:scale-95">
              <span>${this.isReadingAloud ? '⏹ หยุดเสียงอ่าน' : '🔊 ฟังบทความ (Read Aloud)'}</span>
            </button>
          </div>
        </div>

        <!-- Article Summary Box -->
        <div class="p-5 rounded-3xl bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
          <strong class="text-indigo-600 dark:text-indigo-400 block mb-1">💡 สรุปใจความสำคัญ (Summary):</strong>
          ${article.summary}
        </div>

        <!-- Sections Content -->
        <div class="space-y-8 text-slate-800 dark:text-slate-200 leading-relaxed text-sm sm:text-base">
          ${article.sections.map((sec) => `
            <div class="space-y-4 pt-2">
              <h2 class="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span>${sec.heading}</span>
              </h2>

              <div class="prose dark:prose-invert max-w-none text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-3 leading-relaxed whitespace-pre-line">
                ${this.formatRichContent(sec.content)}
              </div>

              <!-- Key Phrases Callout Box -->
              ${sec.keyPhrases && sec.keyPhrases.length > 0 ? `
                <div class="p-4 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/50 space-y-2 mt-3">
                  <span class="text-[11px] font-black uppercase text-indigo-700 dark:text-indigo-300 flex items-center gap-1">
                    <span>⚡ ก้อนประโยคทองคำ (Key Phrases)</span>
                  </span>
                  <div class="space-y-2">
                    ${sec.keyPhrases.map(kp => `
                      <div class="flex items-start justify-between gap-2 p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-indigo-100 dark:border-indigo-950 text-xs">
                        <div>
                          <div class="font-bold text-indigo-950 dark:text-indigo-200">${kp.en}</div>
                          <div class="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">${kp.th}</div>
                        </div>
                        <button onclick="window.speechEngine.speak('${kp.en.replace(/'/g, "\\'")}')"
                          class="p-1.5 text-indigo-600 dark:text-indigo-400 hover:scale-110 transition-transform shrink-0"
                          title="ฟังเสียงอ่าน">
                          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 3.5a.75.75 0 00-1.28-.53l-3.97 3.97H2.75A1.75 1.75 0 001 8.69v2.62c0 .966.784 1.75 1.75 1.75h2l3.97 3.97a.75.75 0 001.28-.53V3.5zM14.5 10a4.5 4.5 0 00-1.32-3.18.75.75 0 111.06-1.06A6 6 0 0116 10a6 6 0 01-1.76 4.24.75.75 0 01-1.06-1.06A4.5 4.5 0 0014.5 10z"/></svg>
                        </button>
                      </div>
                    `).join("")}
                  </div>
                </div>
              ` : ''}
            </div>
          `).join("")}
        </div>

        <!-- Reading Comprehension Quiz Section -->
        <div class="pt-8 border-t border-slate-200 dark:border-slate-800 space-y-6">
          <div class="flex items-center justify-between">
            <div>
              <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-bold">
                <span>🎯 Reading Comprehension Quiz</span>
                <span>•</span>
                <span>3 ข้อ</span>
              </div>
              <h3 class="text-xl font-bold text-slate-900 dark:text-white mt-1">
                แบบทดสอบวัดความเข้าใจท้ายบทความ
              </h3>
              <p class="text-xs text-slate-500 dark:text-slate-400">
                ตอบถูก 2 ใน 3 ข้อขึ้นไป เพื่อปลดล็อกโบนัสความรู้ +30 XP
              </p>
            </div>
            <span class="text-sm font-black text-amber-500">+30 XP</span>
          </div>

          <!-- Quiz Questions -->
          <div class="space-y-5">
            ${article.readingQuiz.map((q, qIdx) => {
              const selectedOpt = quizAnswers[qIdx];
              const isSubmitted = !!quizResult;
              const isCorrect = selectedOpt === q.answer;

              return `
                <div class="p-5 rounded-3xl bg-white dark:bg-slate-900 border ${
                  isSubmitted
                    ? (isCorrect ? 'border-emerald-300 dark:border-emerald-800' : 'border-rose-300 dark:border-rose-800')
                    : 'border-slate-200 dark:border-slate-800'
                } shadow-sm space-y-3">
                  <div class="flex items-start gap-2">
                    <span class="px-2 py-0.5 rounded-lg bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 text-xs font-black">
                      ข้อ ${qIdx + 1}
                    </span>
                    <h4 class="text-xs sm:text-sm font-bold text-slate-900 dark:text-white leading-relaxed">
                      ${q.question}
                    </h4>
                  </div>

                  <!-- Options -->
                  <div class="space-y-2 pt-1">
                    ${q.options.map((opt, optIdx) => {
                      const isSelected = selectedOpt === optIdx;
                      let btnClasses = "w-full text-left p-3 rounded-2xl text-xs font-medium transition-all flex items-center justify-between ";

                      if (!isSubmitted) {
                        btnClasses += isSelected
                          ? "bg-indigo-600 text-white font-bold shadow-md"
                          : "bg-slate-50 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/80 border border-slate-100 dark:border-slate-800";
                      } else {
                        if (optIdx === q.answer) {
                          btnClasses += "bg-emerald-600 text-white font-bold shadow-md";
                        } else if (isSelected && !isCorrect) {
                          btnClasses += "bg-rose-600 text-white font-bold shadow-md";
                        } else {
                          btnClasses += "bg-slate-50 dark:bg-slate-800/40 text-slate-400 dark:text-slate-500 opacity-60";
                        }
                      }

                      return `
                        <button type="button"
                          ${isSubmitted ? 'disabled' : ''}
                          onclick="window.app.selectArticleQuizOption('${article.id}', ${qIdx}, ${optIdx})"
                          class="${btnClasses}">
                          <div class="flex items-center gap-2">
                            <span class="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold border ${
                              isSelected ? 'border-white text-white' : 'border-slate-300 dark:border-slate-600 text-slate-500'
                            }">
                              ${String.fromCharCode(65 + optIdx)}
                            </span>
                            <span>${opt}</span>
                          </div>
                          ${isSubmitted && optIdx === q.answer ? `
                            <svg class="w-4 h-4 text-white shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
                          ` : ''}
                        </button>
                      `;
                    }).join("")}
                  </div>

                  <!-- Explanation upon submission -->
                  ${isSubmitted ? `
                    <div class="p-3 rounded-2xl ${
                      isCorrect ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-200' : 'bg-rose-50 dark:bg-rose-950/40 text-rose-800 dark:text-rose-200'
                    } text-xs space-y-1">
                      <div class="font-bold flex items-center gap-1">
                        <span>${isCorrect ? '✅ ถูกต้อง!' : '❌ ยังไม่ถูกต้อง'}</span>
                      </div>
                      <p class="text-[11px] leading-relaxed">${q.explanation}</p>
                    </div>
                  ` : ''}
                </div>
              `;
            }).join("")}
          </div>

          <!-- Quiz Submit / Result Actions -->
          <div class="pt-4">
            ${quizResult ? `
              <div class="p-5 rounded-3xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-3 text-center">
                <div class="text-3xl">${quizResult.passed ? '🎉' : '💪'}</div>
                <h4 class="text-base font-bold text-slate-900 dark:text-white">
                  ${quizResult.passed ? 'ยินดีด้วย! คุณผ่านแบบทดสอบความเข้าใจบทความ' : 'พยายามได้ดี! ลองศึกษาบทความอีกครั้ง'}
                </h4>
                <p class="text-xs text-slate-500 dark:text-slate-400">
                  ได้คะแนน ${quizResult.score} จาก ${quizResult.total} ข้อ (${quizResult.percent}%)
                </p>
                <div class="flex items-center justify-center gap-3 pt-2">
                  <button onclick="window.app.retryArticleQuiz('${article.id}')"
                    class="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md transition-all">
                    ลองทำใหม่อีกครั้ง
                  </button>
                  <button onclick="window.app.navigateTo('articles', { articleId: null })"
                    class="px-5 py-2.5 rounded-xl bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold text-xs hover:bg-slate-300 transition-all">
                    เลือกบทความอื่น
                  </button>
                </div>
              </div>
            ` : `
              <button onclick="window.app.submitArticleQuiz('${article.id}')"
                class="w-full py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all active:scale-[0.99] flex items-center justify-center gap-2">
                <span>ส่งคำตอบแบบทดสอบ (Submit Quiz)</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </button>
            `}
          </div>
        </div>
      </div>
    `;
  }

  toggleArticleReadAloud(articleId) {
    if (this.isReadingAloud) {
      this.stopArticleAudio();
      return;
    }
    const articles = window.articlesData || [];
    const article = articles.find(a => a.id === articleId);
    if (!article) return;

    // Build speech text from TitleEn + Key Phrases
    const phrases = [];
    phrases.push(article.titleEn);
    article.sections.forEach(s => {
      if (s.keyPhrases) {
        s.keyPhrases.forEach(kp => phrases.push(kp.en));
      }
    });

    const fullSpeechText = phrases.join(". ");
    this.isReadingAloud = true;
    const btn = document.getElementById("article-read-aloud-btn");
    if (btn) btn.innerHTML = `<span>⏹ หยุดเสียงอ่าน</span>`;

    window.speechEngine.speak(
      fullSpeechText,
      () => {
        this.isReadingAloud = true;
      },
      () => {
        this.isReadingAloud = false;
        const b = document.getElementById("article-read-aloud-btn");
        if (b) b.innerHTML = `<span>🔊 ฟังบทความ (Read Aloud)</span>`;
      }
    );
  }

  stopArticleAudio() {
    this.isReadingAloud = false;
    window.speechEngine.stop();
    const btn = document.getElementById("article-read-aloud-btn");
    if (btn) btn.innerHTML = `<span>🔊 ฟังบทความ (Read Aloud)</span>`;
  }

  selectArticleQuizOption(artId, qIdx, optIdx) {
    if (!this.articleQuizAnswers[artId]) {
      this.articleQuizAnswers[artId] = {};
    }
    this.articleQuizAnswers[artId][qIdx] = optIdx;
    window.soundFx.playClick();
    const container = document.getElementById("main-content-view");
    if (container && this.currentView === "articles") {
      this.renderArticlesView(container, artId);
    }
  }

  submitArticleQuiz(artId) {
    const articles = window.articlesData || [];
    const article = articles.find(a => a.id === artId);
    if (!article) return;

    const answers = this.articleQuizAnswers[artId] || {};
    const totalQuestions = article.readingQuiz.length;

    if (Object.keys(answers).length < totalQuestions) {
      alert("กรุณาตอบคำถามให้ครบทุกข้อก่อนส่งคำตอบครับ");
      return;
    }

    let score = 0;
    article.readingQuiz.forEach((q, idx) => {
      if (answers[idx] === q.answer) {
        score++;
      }
    });

    const percent = Math.round((score / totalQuestions) * 100);
    const passed = score >= 2;

    const previousSubmission = this.articleQuizSubmitted[artId];
    const alreadyEarned = previousSubmission && previousSubmission.passed;

    this.articleQuizSubmitted[artId] = {
      score,
      total: totalQuestions,
      percent,
      passed
    };

    try {
      localStorage.setItem("engmastery_article_quizzes", JSON.stringify(this.articleQuizSubmitted));
    } catch (e) {}

    if (passed) {
      window.soundFx.playVictory();
      if (!alreadyEarned) {
        window.storageManager.addXP(30);
        this.renderHeaderStats();
        this.showToast(`ยอดเยี่ยม! คุณผ่านควิซได้ ${score}/${totalQuestions} คะแนน (+30 XP) 🎉`, "success");
      } else {
        this.showToast(`คุณทำคะแนนได้ ${score}/${totalQuestions} คะแนน ⭐`, "info");
      }
    } else {
      window.soundFx.playIncorrect();
      this.showToast(`ได้คะแนน ${score}/${totalQuestions} ข้อ ลองอ่านทบทวนและทำใหม่อีกครั้งนะ`, "error");
    }

    const container = document.getElementById("main-content-view");
    if (container && this.currentView === "articles") {
      this.renderArticlesView(container, artId);
    }
  }

  retryArticleQuiz(artId) {
    delete this.articleQuizAnswers[artId];
    delete this.articleQuizSubmitted[artId];
    try {
      localStorage.setItem("engmastery_article_quizzes", JSON.stringify(this.articleQuizSubmitted));
    } catch (e) {}
    window.soundFx.playClick();
    const container = document.getElementById("main-content-view");
    if (container && this.currentView === "articles") {
      this.renderArticlesView(container, artId);
    }
  }

  // =========================================================================
  // VIEW: MASTERCLASS HUB
  // =========================================================================
  // =========================================================================
  // VIEW: MASTERCLASS HUB & BLOG
  // =========================================================================
  renderMasterclassView(container, masterclassId) {
    const masterclasses = window.masterclassData || [];
    const activeId = masterclassId !== undefined ? masterclassId : this.activeMasterclassId;
    this.activeMasterclassId = activeId;

    if (activeId) {
      const topic = masterclasses.find(m => m.id === activeId) || masterclasses[0];
      this.renderMasterclassDetail(container, topic);
    } else {
      this.renderMasterclassListing(container, masterclasses);
    }
  }

  renderMasterclassListing(container, masterclasses) {
    container.innerHTML = `
      <div class="space-y-6 animate-fadeIn max-w-4xl mx-auto">
        <!-- Header -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
          <div>
            <div class="flex items-center gap-2">
              <span class="text-2xl">🎯</span>
              <h1 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                ห้องติวเข้มเฉพาะหัวข้อ (Masterclass Hub & Blog)
              </h1>
            </div>
            <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              คอร์สติวเข้มสรุป 12 Tenses ฉบับสมบูรณ์, สูตรจำ Tense คู่ 3 คู่เด็ดที่ออกสอบบ่อย, และขจัด 4 จุดตายไวยากรณ์ พร้อมตารางสรุปที่สวยงาม กลอนช่วยจำ และควิซท้าทาย (+50 XP)
            </p>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-xs font-bold text-amber-500 bg-amber-50 dark:bg-amber-950/60 px-3 py-1.5 rounded-full border border-amber-200 dark:border-amber-800 shadow-sm">
              ✨ +50 XP Quiz Bonus
            </span>
          </div>
        </div>

        <!-- Masterclass Blog Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
          ${masterclasses.map(m => {
            const quizRecord = this.masterclassQuizSubmitted[m.id];
            const isPassed = quizRecord && quizRecord.passed;

            return `
              <div onclick="window.app.navigateTo('masterclass', { masterclassId: '${m.id}' })"
                class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between space-y-4 group">
                
                <div class="space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="text-3xl">${m.coverEmoji}</span>
                    <div class="flex items-center gap-2">
                      <span class="px-2.5 py-1 rounded-full text-[10px] font-black uppercase bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800">
                        ${m.readTime}
                      </span>
                      ${isPassed ? `
                        <span class="px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 text-[10px] font-bold flex items-center gap-1">
                          ✓ ผ่านแล้ว
                        </span>
                      ` : ''}
                    </div>
                  </div>

                  <div>
                    <span class="text-xs font-semibold text-indigo-600 dark:text-indigo-400">${m.categoryTh}</span>
                    <h2 class="text-base font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors mt-1 leading-snug">
                      ${m.title}
                    </h2>
                    <p class="text-[11px] text-slate-400 dark:text-slate-500 font-medium italic mt-0.5">
                      ${m.titleEn}
                    </p>
                  </div>

                  <p class="text-xs text-slate-500 dark:text-slate-400 line-clamp-3 leading-relaxed">
                    ${m.summary}
                  </p>

                  <div class="flex flex-wrap gap-1 pt-1">
                    ${m.tags.map(t => `
                      <span class="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[10px] font-medium">
                        #${t}
                      </span>
                    `).join("")}
                  </div>
                </div>

                <div class="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                  <span class="text-slate-400 text-[10px]">${m.badge}</span>
                  <span class="font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>อ่านบทความ & ควิซ</span>
                    <span>➔</span>
                  </span>
                </div>
              </div>
            `;
          }).join("")}
        </div>
      </div>
    `;
  }

  renderMasterclassDetail(container, topic) {
    const answers = this.masterclassQuizAnswers[topic.id] || {};
    const quizResult = this.masterclassQuizSubmitted[topic.id] || null;

    container.innerHTML = `
      <div class="space-y-8 animate-fadeIn max-w-4xl mx-auto">
        <!-- Back Navigation & Top Bar -->
        <div class="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
          <button onclick="window.app.navigateTo('masterclass', { masterclassId: null })"
            class="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
            <span>กลับสู่หน้ารวมห้องติวเข้ม (Masterclass Hub)</span>
          </button>
          <div class="flex items-center gap-2">
            <span class="px-2.5 py-1 rounded-full text-xs font-bold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800">
              ${topic.readTime}
            </span>
          </div>
        </div>

        <!-- Masterclass Hero Header -->
        <div class="space-y-3">
          <div class="flex items-center gap-2">
            <span class="text-3xl">${topic.coverEmoji}</span>
            <span class="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              ${topic.categoryTh} • ${topic.category}
            </span>
          </div>

          <h1 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white leading-tight">
            ${topic.title}
          </h1>
          <p class="text-sm font-semibold text-slate-500 dark:text-slate-400 italic">
            ${topic.titleEn}
          </p>

          <div class="flex flex-wrap items-center gap-3 text-xs text-slate-400 pt-1">
            <span>โดย ${topic.author}</span>
            <span>•</span>
            <span>เผยแพร่เมื่อ ${topic.publishedDate}</span>
          </div>

          <!-- Audio Read Aloud Toolbar -->
          <div class="mt-4 p-4 rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/60 flex items-center justify-between gap-4">
            <div class="flex items-center gap-3">
              <div class="w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold text-sm">
                🎙️
              </div>
              <div>
                <h4 class="text-xs font-bold text-slate-900 dark:text-white">AI Audio Reader</h4>
                <p class="text-[11px] text-slate-500 dark:text-slate-400">ฟังเสียงอ่านออกเสียงภาษาอังกฤษทั้งบทความ</p>
              </div>
            </div>
            <button onclick="window.app.toggleMasterclassReadAloud('${topic.id}')"
              id="masterclass-read-aloud-btn"
              class="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-sm transition-all flex items-center gap-1.5 active:scale-95">
              <span>${this.isReadingAloud ? '⏹ หยุดเสียงอ่าน' : '🔊 ฟังบทความ (Read Aloud)'}</span>
            </button>
          </div>
        </div>

        <!-- Summary Callout Box -->
        <div class="p-5 rounded-3xl bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
          <strong class="text-indigo-600 dark:text-indigo-400 block mb-1">💡 สรุปใจความสำคัญ (Executive Summary):</strong>
          ${topic.summary}
        </div>

        <!-- Custom Content Area Based on Topic -->
        <div class="space-y-8">
          ${topic.id === 'mc-12-tenses-complete' ? this.renderComplete12TensesDetail(topic) : ''}
          ${topic.id === 'mc-paired-tenses' ? this.renderPairedTensesDetail(topic) : ''}
          ${topic.id === 'mc-grammar-pitfalls' ? this.renderPitfallsDetail(topic) : ''}
        </div>

        <!-- Interactive Knowledge Check (Quiz 5 ข้อ) -->
        ${this.renderMasterclassQuiz(topic, answers, quizResult)}
      </div>
    `;
  }

  formatRichContent(content) {
    if (!content) return "";

    // 1. Convert backticks `code` into highlighted orange badge
    let html = content.replace(/`([^`]+)`/g, (match, code) => {
      return `<code class="px-2 py-0.5 mx-0.5 rounded-lg text-xs font-mono font-black text-orange-600 dark:text-orange-400 bg-orange-100/80 dark:bg-orange-950/70 border border-orange-200 dark:border-orange-800/80 shadow-xs">${code}</code>`;
    });

    // 2. Bold text **...** with intelligent formula highlighting
    html = html.replace(/\*\*(.*?)\*\*/g, (match, text) => {
      // If it is a Tense header like **🟢 A. Present Simple Tense (S + V.1 -s/-es)**
      if (/^[🟢🔵🟣]/.test(text)) {
        const highlighted = text.replace(/\(([^)]+)\)/g, '(<span class="text-orange-600 dark:text-orange-400 font-black font-mono">$1</span>)');
        return `<strong class="text-slate-900 dark:text-white font-extrabold text-sm sm:text-base">${highlighted}</strong>`;
      }

      // If it contains grammar/formula elements
      if (/\b(Subject|S)\s*\+|V\.1|V\.2|V\.3|V\.ing|V\.inf|will have been|will have|will be|had been|has\/have been|had \+|has \+|have \+|was\/were|is\/am\/are|don't|doesn't|did not|didn't|will not|won't|be \+ going to/i.test(text)) {
        return `<strong class="px-2 py-0.5 mx-0.5 rounded-lg font-mono font-black text-orange-600 dark:text-orange-400 bg-orange-100/70 dark:bg-orange-950/60 border border-orange-200 dark:border-orange-800/80 inline-block text-xs sm:text-[13px] shadow-xs">${text}</strong>`;
      }

      return `<strong class="text-slate-900 dark:text-white font-bold">${text}</strong>`;
    });

    return html;
  }

  renderComplete12TensesDetail(topic) {
    const matrix = topic.matrixTable;
    const agree = topic.agreementRules;
    const freqs = topic.frequencyScale || [];

    return `
      <div class="space-y-10">
        <!-- 1. The 12 Tenses Master Visual Matrix -->
        <div class="space-y-4">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span class="text-xs font-black uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Master Overview Table</span>
              <h2 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2 mt-0.5">
                <span>📊 จำ 12 Tenses ใน 1 ตาราง (Visual Tense Matrix)</span>
              </h2>
            </div>
            <span class="text-xs px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800 font-semibold self-start sm:self-auto">
              Present • Past • Future
            </span>
          </div>

          <!-- Responsive Table Container -->
          <div class="overflow-x-auto rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-md">
            <table class="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr class="border-b border-slate-200 dark:border-slate-800 text-xs font-black uppercase">
                  <th class="p-4 bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 w-[16%]">
                    ประเภท Tense
                  </th>
                  <th class="p-4 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border-l border-slate-200 dark:border-slate-800 w-[28%]">
                    🟢 Present (ปัจจุบัน)
                  </th>
                  <th class="p-4 bg-sky-50 dark:bg-sky-950/40 text-sky-800 dark:text-sky-300 border-l border-slate-200 dark:border-slate-800 w-[28%]">
                    🔵 Past (อดีต)
                  </th>
                  <th class="p-4 bg-purple-50 dark:bg-purple-950/40 text-purple-800 dark:text-purple-300 border-l border-slate-200 dark:border-slate-800 w-[28%]">
                    🟣 Future (อนาคต)
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 dark:divide-slate-800/60 text-xs">
                ${matrix.rows.map(row => `
                  <tr class="hover:bg-slate-50/60 dark:hover:bg-slate-800/30 transition-colors">
                    <td class="p-4 font-black text-slate-900 dark:text-white bg-slate-50/60 dark:bg-slate-800/40 align-top">
                      <div class="text-xs font-bold text-indigo-600 dark:text-indigo-400">${row.aspect.split(' ')[0]}</div>
                      <div class="text-[10px] text-slate-400">${row.aspect.split('(')[1] ? row.aspect.split('(')[1].replace(')', '') : ''}</div>
                    </td>

                    <!-- Present Cell -->
                    <td class="p-4 border-l border-slate-100 dark:border-slate-800/60 space-y-2 align-top">
                      <div class="flex items-center justify-between">
                        <span class="font-bold text-slate-900 dark:text-white">${row.present.name}</span>
                        <span class="px-2.5 py-1 rounded-xl text-[11px] font-mono font-black bg-orange-100/90 dark:bg-orange-950/80 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-800 shadow-xs">${row.present.formula}</span>
                      </div>
                      <p class="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">${row.present.meaning}</p>
                      <div class="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 text-[11px] flex items-start justify-between gap-1">
                        <div>
                          <div class="font-medium text-slate-800 dark:text-slate-200">"${row.present.exampleEn}"</div>
                          <div class="text-[10px] text-slate-400 mt-0.5">${row.present.exampleTh}</div>
                        </div>
                        <button onclick="window.speechEngine.speak('${row.present.exampleEn.replace(/'/g, "\\'")}')" class="shrink-0 p-1 text-emerald-600 dark:text-emerald-400 hover:scale-110 transition-transform">
                          <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 3.5a.75.75 0 00-1.28-.53l-3.97 3.97H2.75A1.75 1.75 0 001 8.69v2.62c0 .966.784 1.75 1.75 1.75h2l3.97 3.97a.75.75 0 001.28-.53V3.5zM14.5 10a4.5 4.5 0 00-1.32-3.18.75.75 0 111.06-1.06A6 6 0 0116 10a6 6 0 01-1.76 4.24.75.75 0 01-1.06-1.06A4.5 4.5 0 0014.5 10z"/></svg>
                        </button>
                      </div>
                    </td>

                    <!-- Past Cell -->
                    <td class="p-4 border-l border-slate-100 dark:border-slate-800/60 space-y-2 align-top">
                      <div class="flex items-center justify-between">
                        <span class="font-bold text-slate-900 dark:text-white">${row.past.name}</span>
                        <span class="px-2.5 py-1 rounded-xl text-[11px] font-mono font-black bg-orange-100/90 dark:bg-orange-950/80 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-800 shadow-xs">${row.past.formula}</span>
                      </div>
                      <p class="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">${row.past.meaning}</p>
                      <div class="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 text-[11px] flex items-start justify-between gap-1">
                        <div>
                          <div class="font-medium text-slate-800 dark:text-slate-200">"${row.past.exampleEn}"</div>
                          <div class="text-[10px] text-slate-400 mt-0.5">${row.past.exampleTh}</div>
                        </div>
                        <button onclick="window.speechEngine.speak('${row.past.exampleEn.replace(/'/g, "\\'")}')" class="shrink-0 p-1 text-sky-600 dark:text-sky-400 hover:scale-110 transition-transform">
                          <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 3.5a.75.75 0 00-1.28-.53l-3.97 3.97H2.75A1.75 1.75 0 001 8.69v2.62c0 .966.784 1.75 1.75 1.75h2l3.97 3.97a.75.75 0 001.28-.53V3.5zM14.5 10a4.5 4.5 0 00-1.32-3.18.75.75 0 111.06-1.06A6 6 0 0116 10a6 6 0 01-1.76 4.24.75.75 0 01-1.06-1.06A4.5 4.5 0 0014.5 10z"/></svg>
                        </button>
                      </div>
                    </td>

                    <!-- Future Cell -->
                    <td class="p-4 border-l border-slate-100 dark:border-slate-800/60 space-y-2 align-top">
                      <div class="flex items-center justify-between">
                        <span class="font-bold text-slate-900 dark:text-white">${row.future.name}</span>
                        <span class="px-2.5 py-1 rounded-xl text-[11px] font-mono font-black bg-orange-100/90 dark:bg-orange-950/80 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-800 shadow-xs">${row.future.formula}</span>
                      </div>
                      <p class="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">${row.future.meaning}</p>
                      <div class="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 text-[11px] flex items-start justify-between gap-1">
                        <div>
                          <div class="font-medium text-slate-800 dark:text-slate-200">"${row.future.exampleEn}"</div>
                          <div class="text-[10px] text-slate-400 mt-0.5">${row.future.exampleTh}</div>
                        </div>
                        <button onclick="window.speechEngine.speak('${row.future.exampleEn.replace(/'/g, "\\'")}')" class="shrink-0 p-1 text-purple-600 dark:text-purple-400 hover:scale-110 transition-transform">
                          <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 3.5a.75.75 0 00-1.28-.53l-3.97 3.97H2.75A1.75 1.75 0 001 8.69v2.62c0 .966.784 1.75 1.75 1.75h2l3.97 3.97a.75.75 0 001.28-.53V3.5zM14.5 10a4.5 4.5 0 00-1.32-3.18.75.75 0 111.06-1.06A6 6 0 0116 10a6 6 0 01-1.76 4.24.75.75 0 01-1.06-1.06A4.5 4.5 0 0014.5 10z"/></svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                `).join("")}
              </tbody>
            </table>
          </div>
        </div>

        <!-- 2. Subject-Verb Agreement Rules Matrix -->
        <div class="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
          <div>
            <span class="text-xs font-black uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Rules & Subject Concord</span>
            <h3 class="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2 mt-0.5">
              <span>👥 ผันกริยาตามประธาน (Subject-Verb Agreement Matrix)</span>
            </h3>
            <p class="text-xs text-slate-500 dark:text-slate-400">วิธีเลือกใช้รูปกริยาตามประธานเอกพจน์ vs ประธานพหูพจน์</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <!-- Singular Card -->
            <div class="p-6 rounded-3xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/50 space-y-4">
              <div class="flex items-center justify-between">
                <span class="px-3 py-1 rounded-full text-xs font-black bg-amber-200 dark:bg-amber-900 text-amber-900 dark:text-amber-100">
                  ${agree.singular.title}
                </span>
                <span class="text-xs font-mono font-bold text-amber-700 dark:text-amber-300">V. เติม -s / -es</span>
              </div>
              <div class="text-xs text-slate-600 dark:text-slate-300">
                <strong>ประธาน:</strong> <span class="font-mono text-indigo-600 dark:text-indigo-400">${agree.singular.subjects}</span>
              </div>
              <div class="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                <div>• <strong>Present:</strong> ${agree.singular.present}</div>
                <div>• <strong>Past:</strong> ${agree.singular.past}</div>
                <div>• <strong>Future:</strong> ${agree.singular.future}</div>
              </div>
              <div class="space-y-2 pt-2 border-t border-amber-200/60 dark:border-amber-900/40">
                ${agree.singular.examples.map(ex => `
                  <div class="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-amber-100 dark:border-amber-950 text-xs flex items-start justify-between gap-1">
                    <div>
                      <div class="font-bold text-slate-900 dark:text-white">${ex.en}</div>
                      <div class="text-[11px] text-slate-500 dark:text-slate-400">${ex.th}</div>
                    </div>
                    <button onclick="window.speechEngine.speak('${ex.en.replace(/'/g, "\\'")}')" class="shrink-0 p-1 text-amber-600 hover:scale-110 transition-transform">
                      <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 3.5a.75.75 0 00-1.28-.53l-3.97 3.97H2.75A1.75 1.75 0 001 8.69v2.62c0 .966.784 1.75 1.75 1.75h2l3.97 3.97a.75.75 0 001.28-.53V3.5zM14.5 10a4.5 4.5 0 00-1.32-3.18.75.75 0 111.06-1.06A6 6 0 0116 10a6 6 0 01-1.76 4.24.75.75 0 01-1.06-1.06A4.5 4.5 0 0014.5 10z"/></svg>
                    </button>
                  </div>
                `).join("")}
              </div>
            </div>

            <!-- Plural Card -->
            <div class="p-6 rounded-3xl bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-200 dark:border-indigo-900/50 space-y-4">
              <div class="flex items-center justify-between">
                <span class="px-3 py-1 rounded-full text-xs font-black bg-indigo-200 dark:bg-indigo-900 text-indigo-900 dark:text-indigo-100">
                  ${agree.plural.title}
                </span>
                <span class="text-xs font-mono font-bold text-indigo-700 dark:text-indigo-300">V. รูปเดิม (ไม่เติม)</span>
              </div>
              <div class="text-xs text-slate-600 dark:text-slate-300">
                <strong>ประธาน:</strong> <span class="font-mono text-indigo-600 dark:text-indigo-400">${agree.plural.subjects}</span>
              </div>
              <div class="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                <div>• <strong>Present:</strong> ${agree.plural.present}</div>
                <div>• <strong>Past:</strong> ${agree.plural.past}</div>
                <div>• <strong>Future:</strong> ${agree.plural.future}</div>
              </div>
              <div class="space-y-2 pt-2 border-t border-indigo-200/60 dark:border-indigo-900/40">
                ${agree.plural.examples.map(ex => `
                  <div class="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-indigo-100 dark:border-indigo-950 text-xs flex items-start justify-between gap-1">
                    <div>
                      <div class="font-bold text-slate-900 dark:text-white">${ex.en}</div>
                      <div class="text-[11px] text-slate-500 dark:text-slate-400">${ex.th}</div>
                    </div>
                    <button onclick="window.speechEngine.speak('${ex.en.replace(/'/g, "\\'")}')" class="shrink-0 p-1 text-indigo-600 hover:scale-110 transition-transform">
                      <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 3.5a.75.75 0 00-1.28-.53l-3.97 3.97H2.75A1.75 1.75 0 001 8.69v2.62c0 .966.784 1.75 1.75 1.75h2l3.97 3.97a.75.75 0 001.28-.53V3.5zM14.5 10a4.5 4.5 0 00-1.32-3.18.75.75 0 111.06-1.06A6 6 0 0116 10a6 6 0 01-1.76 4.24.75.75 0 01-1.06-1.06A4.5 4.5 0 0014.5 10z"/></svg>
                    </button>
                  </div>
                `).join("")}
              </div>
            </div>
          </div>

          <!-- Pro-Tips Callout -->
          <div class="p-4 rounded-2xl bg-gradient-to-r from-amber-500/10 to-indigo-500/10 border border-amber-300 dark:border-amber-800 space-y-1.5 text-xs">
            <span class="font-black text-amber-700 dark:text-amber-400 flex items-center gap-1.5">
              <span>💡 กลเม็ดกู้ชีพเรื่องประธาน-กริยา (Pro-Tips):</span>
            </span>
            ${agree.proTips.map(pt => `
              <div class="text-slate-700 dark:text-slate-300 leading-relaxed">${pt}</div>
            `).join("")}
          </div>
        </div>

        <!-- 3. Adverbs of Frequency & Percentage Scale -->
        <div class="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
          <div>
            <span class="text-xs font-black uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Frequency Indicators</span>
            <h3 class="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2 mt-0.5">
              <span>📈 เกจวัดระดับความถี่ Adverbs of Frequency (100% ถึง 0%)</span>
            </h3>
            <p class="text-xs text-slate-500 dark:text-slate-400">ระดับความถี่ของการกระทำที่ใช้บ่อยที่สุดใน Present Simple</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
            ${freqs.map(f => `
              <div class="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
                <div class="flex items-center justify-between text-xs">
                  <span class="font-bold text-indigo-600 dark:text-indigo-400">${f.adverb}</span>
                  <span class="px-2 py-0.5 rounded-full text-[10px] font-black bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">${f.percent}%</span>
                </div>
                <div class="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-1.5 overflow-hidden">
                  <div class="bg-indigo-600 h-1.5 rounded-full" style="width: ${f.percent}%"></div>
                </div>
                <div class="text-[11px] text-slate-500 dark:text-slate-400 font-medium">${f.th}</div>
                <div class="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/40 text-[10px] text-slate-700 dark:text-slate-300 flex items-start justify-between gap-1">
                  <span>"${f.example}"</span>
                  <button onclick="window.speechEngine.speak('${f.example.replace(/'/g, "\\'")}')" class="shrink-0 text-indigo-600 hover:scale-110 transition-transform">
                    <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M10 3.5a.75.75 0 00-1.28-.53l-3.97 3.97H2.75A1.75 1.75 0 001 8.69v2.62c0 .966.784 1.75 1.75 1.75h2l3.97 3.97a.75.75 0 001.28-.53V3.5zM14.5 10a4.5 4.5 0 00-1.32-3.18.75.75 0 111.06-1.06A6 6 0 0116 10a6 6 0 01-1.76 4.24.75.75 0 01-1.06-1.06A4.5 4.5 0 0014.5 10z"/></svg>
                  </button>
                </div>
              </div>
            `).join("")}
          </div>
        </div>

        <!-- 4. Mnemonics Callout Cards (สไตล์กลอนช่วยจำจากเอกสาร) -->
        <div class="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
          <div>
            <span class="text-xs font-black uppercase tracking-wider text-purple-600 dark:text-purple-400">Catchy Mnemonics</span>
            <h3 class="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2 mt-0.5">
              <span>🎵 รวมกลอนช่วยจำ 12 Tenses (จำง่าย ติดปาก ใช้ได้ตลอดชีวิต)</span>
            </h3>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <!-- Present Sim Rhyme -->
            <div class="p-5 rounded-3xl bg-gradient-to-br from-emerald-500/10 via-emerald-500/5 to-transparent border border-emerald-300 dark:border-emerald-800 space-y-2">
              <span class="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-200">
                Present Simple
              </span>
              <div class="text-sm font-bold text-emerald-900 dark:text-emerald-100 italic leading-relaxed pt-1">
                "Present Sim. Subject + V.1<br>
                เกิดทุกวัน เกิดประจำ"
              </div>
              <p class="text-[11px] text-slate-500 dark:text-slate-400">ท่องไว้ขึ้นใจ: พูดถึงกิจวัตรและตารางเวลา ให้ใส่กริยาช่อง 1 ทันที</p>
            </div>

            <!-- Present Con Rhyme -->
            <div class="p-5 rounded-3xl bg-gradient-to-br from-sky-500/10 via-sky-500/5 to-transparent border border-sky-300 dark:border-sky-800 space-y-2">
              <span class="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase bg-sky-100 dark:bg-sky-950/60 text-sky-800 dark:text-sky-200">
                Present Continuous
              </span>
              <div class="text-sm font-bold text-sky-900 dark:text-sky-100 italic leading-relaxed pt-1">
                "Present Con. คือปัจจุบัน<br>
                ใช้กับเหตุการณ์ กำลังทำ ตอนนี้<br>
                is am are บวก ing<br>
                now, currently, at the moment"
              </div>
              <p class="text-[11px] text-slate-500 dark:text-slate-400">เจอคำบอกเวลา now, currently ต้องนึกถึง V.ing เสมอ</p>
            </div>

            <!-- Present Perfect Rhyme -->
            <div class="p-5 rounded-3xl bg-gradient-to-br from-purple-500/10 via-purple-500/5 to-transparent border border-purple-300 dark:border-purple-800 space-y-2">
              <span class="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase bg-purple-100 dark:bg-purple-950/60 text-purple-800 dark:text-purple-200">
                Present Perfect
              </span>
              <div class="text-sm font-bold text-purple-900 dark:text-purple-100 italic leading-relaxed pt-1">
                "Present Perfect ทำแต่เด็ก จนถึงตอนนี้<br>
                has, have บวก Verb three (V.3/-ed)<br>
                มองกี่ทีมักมี since, for"
              </div>
              <p class="text-[11px] text-slate-500 dark:text-slate-400">อดีตเชื่อมโยงปัจจุบัน มี since (จุดเวลา) และ for (ระยะเวลา)</p>
            </div>
          </div>
        </div>

        <!-- 5. Detailed Sections Content -->
        <div class="space-y-6 pt-4 border-t border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 leading-relaxed text-xs sm:text-sm">
          ${topic.sections.map(sec => `
            <div class="space-y-3 p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <h3 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span>${sec.heading}</span>
              </h3>
              <div class="prose dark:prose-invert max-w-none text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-2 leading-relaxed whitespace-pre-line">
                ${this.formatRichContent(sec.content)}
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    `;
  }

  renderPairedTensesDetail(topic) {
    const pairs = topic.pairedTensesData || [];

    return `
      <div class="space-y-8">
        <!-- Paired Tenses Overview -->
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <div>
              <span class="text-xs font-black uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Exam-Winning Strategies</span>
              <h2 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-0.5">
                <span>⚡ 3 คู่ Tense ที่ออกสอบบ่อยที่สุด (The 3 Golden Pairs)</span>
              </h2>
            </div>
            <span class="px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
              ข้อสอบเข้า & พูดจริง
            </span>
          </div>

          <div class="space-y-6">
            ${pairs.map(p => `
              <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-100 dark:border-slate-800">
                  <h3 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                    ${p.pairTitle}
                  </h3>
                  <span class="px-3 py-1 rounded-xl text-xs font-mono font-black bg-orange-100/90 dark:bg-orange-950/80 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-800 self-start sm:self-auto shadow-xs">
                    ${p.formula}
                  </span>
                </div>

                <!-- Mnemonic Box -->
                <div class="p-3.5 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-200 dark:border-emerald-800 text-xs font-bold text-emerald-900 dark:text-emerald-200 flex items-center gap-2">
                  <span class="text-base">💡</span>
                  <span>${p.mnemonic}</span>
                </div>

                <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  ${p.explanation}
                </p>

                <!-- Example Sentences Breakdown -->
                <div class="space-y-2.5 pt-1">
                  <span class="text-[11px] font-black uppercase tracking-wider text-slate-400">ตัวอย่างสถานการณ์จริง & การวิเคราะห์:</span>
                  ${p.examples.map(ex => `
                    <div class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 text-xs space-y-1.5">
                      <div class="flex items-start justify-between gap-2">
                        <div class="font-bold text-slate-900 dark:text-white">"${ex.en}"</div>
                        <button onclick="window.speechEngine.speak('${ex.en.replace(/'/g, "\\'")}')" class="shrink-0 p-1 text-emerald-600 dark:text-emerald-400 hover:scale-110 transition-transform">
                          <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 3.5a.75.75 0 00-1.28-.53l-3.97 3.97H2.75A1.75 1.75 0 001 8.69v2.62c0 .966.784 1.75 1.75 1.75h2l3.97 3.97a.75.75 0 001.28-.53V3.5zM14.5 10a4.5 4.5 0 00-1.32-3.18.75.75 0 111.06-1.06A6 6 0 0116 10a6 6 0 01-1.76 4.24.75.75 0 01-1.06-1.06A4.5 4.5 0 0014.5 10z"/></svg>
                        </button>
                      </div>
                      <div class="text-[11px] text-slate-500 dark:text-slate-400 font-medium">${ex.th}</div>
                      <div class="text-[10px] font-mono text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 p-1.5 rounded-lg border border-emerald-100 dark:border-emerald-950">${ex.analysis}</div>
                    </div>
                  `).join("")}
                </div>
              </div>
            `).join("")}
          </div>
        </div>

        <!-- Sections Content -->
        <div class="space-y-6 pt-4 border-t border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 leading-relaxed text-xs sm:text-sm">
          ${topic.sections.map(sec => `
            <div class="space-y-3 p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <h3 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span>${sec.heading}</span>
              </h3>
              <div class="prose dark:prose-invert max-w-none text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-2 leading-relaxed whitespace-pre-line">
                ${this.formatRichContent(sec.content)}
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    `;
  }

  renderPitfallsDetail(topic) {
    const traps = topic.traps || [];

    return `
      <div class="space-y-8">
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <div>
              <span class="text-xs font-black uppercase tracking-wider text-rose-600 dark:text-rose-400">Error Elimination</span>
              <h2 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-0.5">
                <span>⚠️ 4 จุดตายไวยากรณ์ (The 4 Fatal Traps)</span>
              </h2>
            </div>
            <span class="px-3 py-1 rounded-full text-xs font-bold bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800">
              จุดตายคนทำงาน
            </span>
          </div>

          <div class="space-y-5">
            ${traps.map(trap => `
              <div class="p-5 sm:p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
                <h3 class="text-base font-bold text-rose-600 dark:text-rose-400">
                  ${trap.trapName}
                </h3>

                <div class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-line">
                  ${trap.description}
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div class="p-3 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/60 text-xs text-rose-800 dark:text-rose-200 font-mono">
                    ${trap.wrong}
                  </div>
                  <div class="p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/60 text-xs text-emerald-800 dark:text-emerald-200 font-mono">
                    ${trap.right}
                  </div>
                </div>

                <div class="p-3 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/60 text-xs text-amber-800 dark:text-amber-200 flex items-center gap-2">
                  <span class="font-bold shrink-0">💡 Pro-Tip:</span>
                  <span>${trap.proTip}</span>
                </div>
              </div>
            `).join("")}
          </div>
        </div>

        <!-- Sections Content -->
        <div class="space-y-6 pt-4 border-t border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 leading-relaxed text-xs sm:text-sm">
          ${topic.sections.map(sec => `
            <div class="space-y-3 p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <h3 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span>${sec.heading}</span>
              </h3>
              <div class="prose dark:prose-invert max-w-none text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-2 leading-relaxed whitespace-pre-line">
                ${this.formatRichContent(sec.content)}
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    `;
  }

  toggleMasterclassReadAloud(topicId) {
    if (this.isReadingAloud) {
      window.speechEngine.cancel();
      this.isReadingAloud = false;
      const b = document.getElementById("masterclass-read-aloud-btn");
      if (b) b.innerHTML = "<span>🔊 ฟังบทความ (Read Aloud)</span>";
      return;
    }
    const masterclasses = window.masterclassData || [];
    const topic = masterclasses.find(m => m.id === topicId);
    if (!topic) return;

    const phrases = [topic.titleEn];
    if (topic.matrixTable) {
      topic.matrixTable.rows.forEach(r => {
        phrases.push(r.present.name + ": " + r.present.formula + ". " + r.present.exampleEn);
        phrases.push(r.past.name + ": " + r.past.formula + ". " + r.past.exampleEn);
        phrases.push(r.future.name + ": " + r.future.formula + ". " + r.future.exampleEn);
      });
    }
    if (topic.pairedTensesData) {
      topic.pairedTensesData.forEach(pt => {
        phrases.push(pt.pairTitle);
        pt.examples.forEach(ex => phrases.push(ex.en));
      });
    }
    if (topic.traps) {
      topic.traps.forEach(tr => {
        phrases.push(tr.trapName);
        phrases.push(tr.right);
      });
    }

    const fullSpeechText = phrases.join(". ");
    this.isReadingAloud = true;
    const btn = document.getElementById("masterclass-read-aloud-btn");
    if (btn) btn.innerHTML = "<span>⏹ หยุดเสียงอ่าน</span>";

    window.speechEngine.speak(fullSpeechText, () => {
      this.isReadingAloud = false;
      const b = document.getElementById("masterclass-read-aloud-btn");
      if (b) b.innerHTML = "<span>🔊 ฟังบทความ (Read Aloud)</span>";
    });
  }

  renderMasterclassQuiz(topic, answers, quizResult) {
    const questions = topic.quizQuestions || [];

    return `
      <div class="pt-8 border-t border-slate-200 dark:border-slate-800 space-y-6">
        <div class="flex items-center justify-between">
          <div>
            <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-bold">
              <span>🎯 Masterclass Certification Quiz</span>
              <span>•</span>
              <span>5 ข้อ</span>
            </div>
            <h3 class="text-xl font-bold text-slate-900 dark:text-white mt-1">
              แบบทดสอบประเมินผลความชำนาญ
            </h3>
            <p class="text-xs text-slate-500 dark:text-slate-400">
              ตอบถูก 4 ใน 5 ข้อขึ้นไป เพื่อผ่านและรับโบนัส +50 XP
            </p>
          </div>
          <span class="text-sm font-black text-amber-500">+50 XP</span>
        </div>

        <div class="space-y-5">
          ${questions.map((q, qIdx) => {
            const selectedOpt = answers[qIdx];
            const isSubmitted = !!quizResult;
            const isCorrect = selectedOpt === q.answer;

            return `
              <div class="p-5 rounded-3xl bg-white dark:bg-slate-900 border ${
                isSubmitted
                  ? (isCorrect ? 'border-emerald-300 dark:border-emerald-800' : 'border-rose-300 dark:border-rose-800')
                  : 'border-slate-200 dark:border-slate-800'
              } shadow-sm space-y-3">
                <div class="flex items-start gap-2">
                  <span class="px-2 py-0.5 rounded-lg bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 text-xs font-black">
                    ข้อ ${qIdx + 1}
                  </span>
                  <h4 class="text-xs sm:text-sm font-bold text-slate-900 dark:text-white leading-relaxed">
                    ${q.question}
                  </h4>
                </div>

                <div class="space-y-2 pt-1">
                  ${q.options.map((opt, optIdx) => {
                    const isSelected = selectedOpt === optIdx;
                    let btnClasses = "w-full text-left p-3 rounded-2xl text-xs font-medium transition-all flex items-center justify-between ";

                    if (!isSubmitted) {
                      btnClasses += isSelected
                        ? "bg-indigo-600 text-white font-bold shadow-md"
                        : "bg-slate-50 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/80 border border-slate-100 dark:border-slate-800";
                    } else {
                      if (optIdx === q.answer) {
                        btnClasses += "bg-emerald-600 text-white font-bold shadow-md";
                      } else if (isSelected && !isCorrect) {
                        btnClasses += "bg-rose-600 text-white font-bold shadow-md";
                      } else {
                        btnClasses += "bg-slate-50 dark:bg-slate-800/40 text-slate-400 dark:text-slate-500 opacity-60";
                      }
                    }

                    return `
                      <button type="button"
                        ${isSubmitted ? 'disabled' : ''}
                        onclick="window.app.selectMasterclassQuizOption('${topic.id}', ${qIdx}, ${optIdx})"
                        class="${btnClasses}">
                        <div class="flex items-center gap-2">
                          <span class="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold border ${
                            isSelected ? 'border-white text-white' : 'border-slate-300 dark:border-slate-600 text-slate-500'
                          }">
                            ${String.fromCharCode(65 + optIdx)}
                          </span>
                          <span>${opt}</span>
                        </div>
                        ${isSubmitted && optIdx === q.answer ? `
                          <svg class="w-4 h-4 text-white shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
                        ` : ''}
                      </button>
                    `;
                  }).join("")}
                </div>

                ${isSubmitted ? `
                  <div class="p-3 rounded-2xl ${
                    isCorrect ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-200' : 'bg-rose-50 dark:bg-rose-950/40 text-rose-800 dark:text-rose-200'
                  } text-xs space-y-1">
                    <div class="font-bold flex items-center gap-1">
                      <span>${isCorrect ? '✅ ถูกต้อง!' : '❌ ยังไม่ถูกต้อง'}</span>
                    </div>
                    <p class="text-[11px] leading-relaxed">${q.explanation}</p>
                  </div>
                ` : ''}
              </div>
            `;
          }).join("")}
        </div>

        <!-- Quiz Action / Result -->
        <div class="pt-4">
          ${quizResult ? `
            <div class="p-5 rounded-3xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-3 text-center">
              <div class="text-3xl">${quizResult.passed ? '🏆' : '💪'}</div>
              <h4 class="text-base font-bold text-slate-900 dark:text-white">
                ${quizResult.passed ? 'ยินดีด้วย! คุณพิชิต Masterclass นี้สำเร็จ' : 'พยายามได้ดี! ลองทบทวนเนื้อหาและสอบใหม่อีกครั้ง'}
              </h4>
              <p class="text-xs text-slate-500 dark:text-slate-400">
                ได้คะแนน ${quizResult.score} จาก ${quizResult.total} ข้อ (${quizResult.percent}%)
              </p>
              <div class="flex items-center justify-center gap-3 pt-2">
                <button onclick="window.app.retryMasterclassQuiz('${topic.id}')"
                  class="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md transition-all">
                  ลองทำแบบทดสอบใหม่อีกครั้ง
                </button>
              </div>
            </div>
          ` : `
            <button onclick="window.app.submitMasterclassQuiz('${topic.id}')"
              class="w-full py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all active:scale-[0.99] flex items-center justify-center gap-2">
              <span>ส่งคำตอบแบบทดสอบ (Submit Masterclass Quiz)</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </button>
          `}
        </div>
      </div>
    `;
  }

  switchMasterclass(topicId) {
    window.soundFx.playClick();
    this.activeMasterclassId = topicId;
    const container = document.getElementById("main-content-view");
    if (container && this.currentView === "masterclass") {
      this.renderMasterclassView(container, topicId);
    }
  }

  selectMasterclassQuizOption(topicId, qIdx, optIdx) {
    if (!this.masterclassQuizAnswers[topicId]) {
      this.masterclassQuizAnswers[topicId] = {};
    }
    this.masterclassQuizAnswers[topicId][qIdx] = optIdx;
    window.soundFx.playClick();
    const container = document.getElementById("main-content-view");
    if (container && this.currentView === "masterclass") {
      this.renderMasterclassView(container, topicId);
    }
  }

  submitMasterclassQuiz(topicId) {
    const masterclasses = window.masterclassData || [];
    const topic = masterclasses.find(m => m.id === topicId);
    if (!topic) return;

    const answers = this.masterclassQuizAnswers[topicId] || {};
    const questions = topic.quizQuestions || [];

    if (Object.keys(answers).length < questions.length) {
      alert("กรุณาตอบคำถามให้ครบทั้ง 5 ข้อก่อนส่งคำตอบครับ");
      return;
    }

    let score = 0;
    questions.forEach((q, idx) => {
      if (answers[idx] === q.answer) {
        score++;
      }
    });

    const percent = Math.round((score / questions.length) * 100);
    const passed = score >= 4;

    const prevSubmission = this.masterclassQuizSubmitted[topicId];
    const alreadyEarned = prevSubmission && prevSubmission.passed;

    this.masterclassQuizSubmitted[topicId] = {
      score,
      total: questions.length,
      percent,
      passed
    };

    try {
      localStorage.setItem("engmastery_masterclass_quizzes", JSON.stringify(this.masterclassQuizSubmitted));
    } catch (e) {}

    if (passed) {
      window.soundFx.playVictory();
      if (!alreadyEarned) {
        window.storageManager.addXP(50);
        this.renderHeaderStats();
        this.showToast(`สุดยอดมาก! ผ่านแบบทดสอบ Masterclass ${score}/${questions.length} คะแนน (+50 XP) 🏆`, "success");
      } else {
        this.showToast(`คุณทำคะแนนได้ ${score}/${questions.length} คะแนน ⭐`, "info");
      }
    } else {
      window.soundFx.playIncorrect();
      this.showToast(`ได้คะแนน ${score}/${questions.length} ข้อ ต้องตอบถูกอย่างน้อย 4 ข้อเพื่อผ่านนะ`, "error");
    }

    const container = document.getElementById("main-content-view");
    if (container && this.currentView === "masterclass") {
      this.renderMasterclassView(container, topicId);
    }
  }

  retryMasterclassQuiz(topicId) {
    delete this.masterclassQuizAnswers[topicId];
    delete this.masterclassQuizSubmitted[topicId];
    try {
      localStorage.setItem("engmastery_masterclass_quizzes", JSON.stringify(this.masterclassQuizSubmitted));
    } catch (e) {}
    window.soundFx.playClick();
    const container = document.getElementById("main-content-view");
    if (container && this.currentView === "masterclass") {
      this.renderMasterclassView(container, topicId);
    }
  }

  // =========================================================================
  // VIEW 6: SENTENCE BUILDER & GRAMMAR BLUEPRINTS (EBOOK SHEET 1000)
  // =========================================================================
  renderSentenceBuilderView(container, topicId) {
    const topics = window.sentenceBuilderData || [];
    const activeId = topicId !== undefined ? topicId : this.activeSentenceTopicId;
    this.activeSentenceTopicId = activeId;

    if (activeId) {
      const topic = topics.find(t => t.id === activeId) || topics[0];
      this.renderSentenceBuilderDetail(container, topic);
    } else {
      this.renderSentenceBuilderListing(container, topics);
    }
  }

  renderSentenceBuilderListing(container, topics) {
    // Calculate overall stats
    let totalDrills = 0;
    let completedDrills = 0;
    topics.forEach(t => {
      totalDrills += (t.drills || []).length;
      (t.drills || []).forEach(d => {
        if (this.sentenceCompletedDrills[d.id]) completedDrills++;
      });
    });
    const percentOverall = totalDrills > 0 ? Math.round((completedDrills / totalDrills) * 100) : 0;

    container.innerHTML = `
      <div class="space-y-6 animate-fadeIn max-w-5xl mx-auto">
        <!-- Header -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
          <div>
            <div class="flex items-center gap-2">
              <span class="text-3xl">🧩</span>
              <h1 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                ฝึกแต่งประโยคภาษาอังกฤษ (Sentence Builder & Blueprint)
              </h1>
            </div>
            <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed">
              ถอดบทเรียนจากคู่มือ <strong>"ฝึกแต่งภาษาอังกฤษ 1,000 ประโยค"</strong> (Kru Dew / OpenDurian) สรุปสูตรประโยคสำเร็จรูป คลังคำศัพท์ และแบบฝึกหัดลากวางคำศัพท์ (Drag & Drop) ลงช่อง เพื่อฝึกสร้างประโยคอย่างถูกต้องแม่นยำ
            </p>
          </div>
          <div class="flex flex-wrap items-center gap-2">
            <span class="text-xs font-bold text-amber-500 bg-amber-50 dark:bg-amber-950/60 px-3 py-1.5 rounded-full border border-amber-200 dark:border-amber-800 shadow-sm flex items-center gap-1">
              <span>✨ +15 XP ต่อข้อ</span>
            </span>
            <span class="text-xs font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-3 py-1.5 rounded-full border border-indigo-200 dark:border-indigo-800 shadow-sm">
              ${completedDrills} / ${totalDrills} ข้อ (${percentOverall}%)
            </span>
          </div>
        </div>

        <!-- Topics Blog Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          ${topics.map(topic => {
            const drills = topic.drills || [];
            const doneCount = drills.filter(d => this.sentenceCompletedDrills[d.id]).length;
            const isAllDone = drills.length > 0 && doneCount === drills.length;
            const percent = drills.length > 0 ? Math.round((doneCount / drills.length) * 100) : 0;

            return `
              <div onclick="window.app.navigateTo('sentence-builder', { topicId: '${topic.id}' })"
                   class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between space-y-5 group relative overflow-hidden">
                
                ${isAllDone ? `
                  <div class="absolute top-0 right-0 bg-emerald-500 text-white text-[10px] font-black px-3 py-1 rounded-bl-xl shadow-sm flex items-center gap-1">
                    ✓ พิชิตครบ 5 ข้อ
                  </div>
                ` : ''}

                <div class="space-y-3.5">
                  <div class="flex items-center justify-between">
                    <span class="text-4xl p-2.5 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/40 shadow-inner group-hover:scale-110 transition-transform">
                      ${topic.coverEmoji}
                    </span>
                    <span class="px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                      ${topic.level}
                    </span>
                  </div>

                  <div>
                    <div class="text-[11px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                      บทที่ ${topic.chapterNo} • ${topic.category}
                    </div>
                    <h3 class="text-lg font-black text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors mt-0.5 line-clamp-1">
                      ${topic.title.replace(/^บทที่\s*\d+:\s*/, "")}
                    </h3>
                    <p class="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                      ${topic.subtitle}
                    </p>
                  </div>

                  <!-- Formula Snippet Highlight -->
                  ${topic.formulas && topic.formulas[0] ? `
                    <div class="p-2.5 rounded-xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-900/40 text-[11px] text-amber-900 dark:text-amber-200 font-mono">
                      <span class="font-bold text-amber-600 dark:text-amber-400">สูตรเด็ด:</span> ${topic.formulas[0].formula}
                    </div>
                  ` : ''}
                </div>

                <!-- Footer & Progress -->
                <div class="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2">
                  <div class="flex items-center justify-between text-xs font-semibold">
                    <span class="text-slate-500 dark:text-slate-400">ความคืบหน้า</span>
                    <span class="${isAllDone ? 'text-emerald-600 dark:text-emerald-400 font-bold' : 'text-slate-700 dark:text-slate-300'}">
                      ${doneCount} / ${drills.length} ข้อ (${percent}%)
                    </span>
                  </div>
                  <div class="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-1.5 overflow-hidden">
                    <div class="h-1.5 rounded-full transition-all duration-500 ${isAllDone ? 'bg-emerald-500' : 'bg-amber-500'}" style="width: ${percent}%"></div>
                  </div>
                  <div class="flex items-center justify-between pt-1">
                    <span class="text-[11px] text-slate-400">${topic.readTime}</span>
                    <span class="text-xs font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      เริ่มฝึกแต่งประโยค ➔
                    </span>
                  </div>
                </div>

              </div>
            `;
          }).join("")}
        </div>
      </div>
    `;
  }

  renderSentenceBuilderDetail(container, topic) {
    const drills = topic.drills || [];
    const currentDrillIdx = this.sentenceDrillIndex[topic.id] || 0;
    const activeDrill = drills[currentDrillIdx] || drills[0];

    // Ensure drill state is initialized
    if (activeDrill) {
      this.initSentenceDrillState(activeDrill);
    }

    container.innerHTML = `
      <div class="space-y-8 animate-fadeIn max-w-4xl mx-auto pb-12">
        
        <!-- Breadcrumb & Back Button -->
        <div class="flex items-center justify-between">
          <button onclick="window.app.navigateTo('sentence-builder')"
                  class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-bold transition-all">
            <span>←</span>
            <span>กลับไปหน้ารวมหัวข้อฝึกแต่งประโยค</span>
          </button>
          <span class="px-3 py-1 rounded-full text-xs font-black bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800">
            บทที่ ${topic.chapterNo} จาก 10
          </span>
        </div>

        <!-- Article Blog Header -->
        <div class="space-y-4 pb-6 border-b border-slate-200 dark:border-slate-800">
          <div class="flex flex-wrap items-center gap-2">
            <span class="px-3 py-1 rounded-full text-xs font-black uppercase bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800">
              ${topic.level}
            </span>
            <span class="px-3 py-1 rounded-full text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
              ⏱️ ${topic.readTime}
            </span>
            <span class="px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400">
              📂 ${topic.category}
            </span>
          </div>

          <div class="flex items-start gap-4">
            <span class="text-4xl sm:text-5xl shrink-0 p-3 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/40 shadow-sm">
              ${topic.coverEmoji}
            </span>
            <div class="space-y-1">
              <h1 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white leading-tight">
                ${topic.title}
              </h1>
              <p class="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                ${topic.subtitle}
              </p>
            </div>
          </div>

          <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-800/40 p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800">
            ${topic.summary}
          </p>

          <div class="flex items-center gap-3">
            <button onclick="window.speechEngine.speak('${topic.summary.replace(/'/g, "\\'")}', 'th-TH')"
                    class="px-4 py-2 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 hover:bg-indigo-100 dark:hover:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 text-xs font-bold flex items-center gap-2 border border-indigo-200 dark:border-indigo-800 transition-all">
              <svg class="w-4 h-4 text-indigo-600 dark:text-indigo-400" fill="currentColor" viewBox="0 0 20 20"><path d="M10 3.5a.75.75 0 00-1.28-.53l-3.97 3.97H2.75A1.75 1.75 0 001 8.69v2.62c0 .966.784 1.75 1.75 1.75h2l3.97 3.97a.75.75 0 001.28-.53V3.5zM14.5 10a4.5 4.5 0 00-1.32-3.18.75.75 0 111.06-1.06A6 6 0 0116 10a6 6 0 01-1.76 4.24.75.75 0 01-1.06-1.06A4.5 4.5 0 0014.5 10z"/></svg>
              <span>ฟังคำอธิบายภาพรวม (AI Voice)</span>
            </button>
          </div>
        </div>

        <!-- Section 1: โครงสร้างประโยคหลัก (Sentence Blueprints) -->
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <span class="text-2xl">📐</span>
              <h2 class="text-xl font-black text-slate-900 dark:text-white">
                โครงสร้างประโยคหลัก (Sentence Blueprints & Kru Dew Tips)
              </h2>
            </div>
          </div>

          <div class="grid grid-cols-1 gap-4">
            ${topic.formulas.map((f, fIdx) => `
              <div class="p-5 rounded-3xl bg-white dark:bg-slate-900 border-2 border-amber-200/80 dark:border-amber-900/60 shadow-sm space-y-3.5 relative overflow-hidden">
                <div class="flex items-center justify-between">
                  <span class="px-3 py-1 rounded-full text-xs font-black bg-amber-500 text-white shadow-sm flex items-center gap-1">
                    <span>สูตรที่ ${fIdx + 1}</span>
                  </span>
                  <span class="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    ${f.meaning}
                  </span>
                </div>

                <!-- Highlighted Formula Box -->
                <div class="p-3.5 rounded-2xl bg-amber-50/80 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800/80 font-mono text-sm sm:text-base font-extrabold text-amber-950 dark:text-amber-100 leading-relaxed">
                  ${f.formula.replace(/\[(.*?)\]/g, '<span class="text-amber-600 dark:text-amber-400 bg-amber-200/60 dark:bg-amber-900/70 px-1.5 py-0.5 rounded-lg">[$1]</span>')}
                </div>

                <!-- Example Sentence -->
                <div class="flex items-start justify-between gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
                  <div>
                    <div class="text-xs text-slate-400 font-bold uppercase tracking-wider">ตัวอย่างประโยคจริง:</div>
                    <div class="font-bold text-slate-900 dark:text-white text-sm mt-0.5">${f.example}</div>
                    <div class="text-xs text-slate-600 dark:text-slate-300">${f.exampleTh}</div>
                  </div>
                  <button onclick="window.speechEngine.speak('${f.example.replace(/'/g, "\\'")}')"
                          class="shrink-0 p-2 rounded-xl bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300 hover:scale-105 active:scale-95 transition-all"
                          title="ฟังเสียงประโยคตัวอย่าง">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 3.5a.75.75 0 00-1.28-.53l-3.97 3.97H2.75A1.75 1.75 0 001 8.69v2.62c0 .966.784 1.75 1.75 1.75h2l3.97 3.97a.75.75 0 001.28-.53V3.5zM14.5 10a4.5 4.5 0 00-1.32-3.18.75.75 0 111.06-1.06A6 6 0 0116 10a6 6 0 01-1.76 4.24.75.75 0 01-1.06-1.06A4.5 4.5 0 0014.5 10z"/></svg>
                  </button>
                </div>

                <!-- Kru Dew Tip -->
                <div class="p-3 rounded-xl bg-gradient-to-r from-amber-500/10 to-indigo-500/10 border border-amber-300/80 dark:border-amber-800 text-xs text-slate-700 dark:text-slate-300 flex items-start gap-2">
                  <span class="text-base shrink-0">💡</span>
                  <div>
                    <strong class="text-amber-800 dark:text-amber-300">Kru Dew Pro-Tip:</strong> ${f.kruDewTip}
                  </div>
                </div>
              </div>
            `).join("")}
          </div>
        </div>

        <!-- Section 2: คลังคำศัพท์ที่ต้องรู้ (Vocabulary Bank) -->
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <span class="text-2xl">📚</span>
              <h2 class="text-xl font-black text-slate-900 dark:text-white">
                รวมคำศัพท์และก้อนประโยคที่ต้องรู้ในบทนี้
              </h2>
            </div>
            <span class="text-xs text-slate-400 font-medium">${(topic.vocabBank || []).length} คำศัพท์</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            ${(topic.vocabBank || []).map(v => `
              <div class="p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between gap-2 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors">
                <div>
                  <div class="flex items-center gap-1.5">
                    <span class="font-bold text-slate-900 dark:text-white text-xs">${v.en}</span>
                    <span class="px-1.5 py-0.2 rounded text-[9px] font-mono uppercase bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">${v.pos || ''}</span>
                  </div>
                  <div class="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">${v.th}</div>
                </div>
                <button onclick="window.speechEngine.speak('${v.en.replace(/'/g, "\\'")}')"
                        class="p-1.5 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/60 rounded-lg transition-colors"
                        title="ฟังเสียงคำศัพท์">
                  <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 3.5a.75.75 0 00-1.28-.53l-3.97 3.97H2.75A1.75 1.75 0 001 8.69v2.62c0 .966.784 1.75 1.75 1.75h2l3.97 3.97a.75.75 0 001.28-.53V3.5zM14.5 10a4.5 4.5 0 00-1.32-3.18.75.75 0 111.06-1.06A6 6 0 0116 10a6 6 0 01-1.76 4.24.75.75 0 01-1.06-1.06A4.5 4.5 0 0014.5 10z"/></svg>
                </button>
              </div>
            `).join("")}
          </div>
        </div>

        <!-- Section 3: ลองแต่งประโยคกัน! (Interactive Drag & Drop Sentence Builder) -->
        <div id="sentence-workshop-container" class="space-y-5 pt-6 border-t-2 border-indigo-200 dark:border-indigo-900">
          ${this.renderSentenceBuilderWorkshop(topic, activeDrill, currentDrillIdx)}
        </div>

      </div>
    `;
  }

  // --- Sentence Builder Workshop State Machine & Interactive Component ---
  initSentenceDrillState(drill) {
    if (!this.sentenceBuilderState[drill.id]) {
      // Build shuffled pool items with unique ids
      const pool = (drill.poolWords || []).map((word, idx) => ({
        id: `${drill.id}-w-${idx}`,
        text: word
      }));

      // Shuffle using Fisher-Yates
      for (let i = pool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pool[i], pool[j]] = [pool[j], pool[i]];
      }

      this.sentenceBuilderState[drill.id] = {
        placedWords: [],
        poolWords: pool,
        isCompleted: !!this.sentenceCompletedDrills[drill.id],
        isCorrect: !!this.sentenceCompletedDrills[drill.id],
        showSolution: false,
        errorMessage: null
      };

      // If already completed in past, preload the placed words in correct order
      if (this.sentenceCompletedDrills[drill.id]) {
        this.sentenceBuilderState[drill.id].placedWords = (drill.targetWords || []).map((w, idx) => ({
          id: `${drill.id}-placed-${idx}`,
          text: w
        }));
        this.sentenceBuilderState[drill.id].poolWords = [];
      }
    }
  }

  renderSentenceBuilderWorkshop(topic, drill, drillIdx) {
    const drills = topic.drills || [];
    const state = this.sentenceBuilderState[drill.id] || {
      placedWords: [],
      poolWords: [],
      isCompleted: false,
      isCorrect: false,
      showSolution: false,
      errorMessage: null
    };

    const isDone = !!this.sentenceCompletedDrills[drill.id];
    const isTopicFinished = drills.every(d => this.sentenceCompletedDrills[d.id]);

    return `
      <div class="space-y-6">
        <!-- Header & Nav Tabs for Drills -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div class="flex items-center gap-2">
            <span class="text-2xl">✍️</span>
            <div>
              <h3 class="text-xl font-black text-slate-900 dark:text-white">
                ภารกิจลองแต่งประโยคกัน! (Interactive Sentence Drills)
              </h3>
              <p class="text-xs text-slate-500 dark:text-slate-400">
                ลากคำศัพท์มาวางในช่อง หรือแตะคำศัพท์เพื่อเรียงประโยคให้ตรงกับความหมาย
              </p>
            </div>
          </div>
          <div class="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 p-1.5 rounded-2xl overflow-x-auto">
            ${drills.map((d, idx) => {
              const active = idx === drillIdx;
              const completed = !!this.sentenceCompletedDrills[d.id];
              return `
                <button onclick="window.app.navigateSentenceDrill('${topic.id}', ${idx})"
                        class="px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1 ${
                          active
                            ? 'bg-indigo-600 text-white shadow-md'
                            : completed
                              ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300'
                              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                        }">
                  <span>ข้อที่ ${idx + 1}</span>
                  ${completed ? '<span>✓</span>' : ''}
                </button>
              `;
            }).join("")}
          </div>
        </div>

        <!-- Interactive Workshop Board Card -->
        <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border-2 border-indigo-200 dark:border-indigo-900/80 shadow-lg space-y-6">
          
          <!-- Thai Sentence Prompt Banner -->
          <div class="p-4 rounded-2xl bg-gradient-to-r from-amber-500/10 via-indigo-500/10 to-purple-500/10 border border-amber-300 dark:border-amber-800/60 space-y-1">
            <div class="flex items-center justify-between">
              <span class="text-[11px] font-black uppercase tracking-wider text-amber-700 dark:text-amber-400 flex items-center gap-1.5">
                <span>🎯 แปลเป็นภาษาอังกฤษ:</span>
              </span>
              <span class="text-xs font-bold text-slate-500 dark:text-slate-400">
                ข้อที่ ${drillIdx + 1} / ${drills.length}
              </span>
            </div>
            <div class="text-lg sm:text-2xl font-black text-slate-900 dark:text-white pt-1">
              "${drill.th}"
            </div>
          </div>

          <!-- Sentence Drop Zone (ช่องวางคำศัพท์) -->
          <div class="space-y-2">
            <div class="flex items-center justify-between text-xs">
              <span class="font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                <span>📥 ช่องเรียงประโยค (Drop Zone):</span>
                <span class="text-[10px] text-slate-400 font-normal">(ลากวาง หรือ แตะคำเพื่อนำออก)</span>
              </span>
              ${state.placedWords.length > 0 && !state.isCorrect ? `
                <button onclick="window.app.clearSentenceWords('${drill.id}')"
                        class="text-xs font-semibold text-rose-500 hover:text-rose-600 flex items-center gap-1">
                  <span>↺ ล้างคำตอบ</span>
                </button>
              ` : ''}
            </div>

            <div id="sentence-dropzone-${drill.id}"
                 class="slot-dropzone p-4 rounded-2xl ${
                   state.isCorrect
                     ? 'bg-emerald-50 dark:bg-emerald-950/30 border-2 border-emerald-500 correct-pulse'
                     : state.errorMessage
                       ? 'bg-red-50/50 dark:bg-red-950/20 border-2 border-red-400 shake-error'
                       : 'bg-slate-50 dark:bg-slate-800/50 border-2 border-dashed border-indigo-300 dark:border-indigo-800'
                 } flex flex-wrap items-center gap-2.5 min-h-[76px] transition-all relative"
                 ondragover="window.app.handleSentenceDragOver(event)"
                 ondragleave="window.app.handleSentenceDragLeave(event)"
                 ondrop="window.app.handleSentenceDrop(event, '${drill.id}')">
              
              ${state.placedWords.length === 0 ? `
                <div class="w-full text-center py-2 text-xs text-slate-400 dark:text-slate-500 flex items-center justify-center gap-2 pointer-events-none select-none">
                  <span class="text-lg">👆</span>
                  <span>ลากคำศัพท์มาวางในช่องนี้ หรือแตะคำศัพท์จากคลังด้านล่างเพื่อเรียงประโยค</span>
                </div>
              ` : state.placedWords.map((w, wIdx) => `
                <div id="placed-${w.id}"
                     draggable="${!state.isCorrect}"
                     ondragstart="window.app.handleSentenceDragStart(event, '${drill.id}', '${w.id}', 'placed')"
                     ondragend="window.app.handleSentenceDragEnd(event)"
                     ondragover="event.preventDefault()"
                     ondrop="event.stopPropagation(); window.app.handleSentenceDropOnWord(event, '${drill.id}', '${w.id}')"
                     onclick="${state.isCorrect ? '' : `window.app.returnSentenceWord('${drill.id}', '${w.id}')`}"
                     class="word-chip px-4 py-2.5 rounded-xl font-bold text-sm shadow-md flex items-center gap-2 cursor-pointer select-none transition-all active:scale-95 ${
                       state.isCorrect
                         ? 'bg-emerald-600 text-white cursor-default'
                         : 'bg-indigo-600 text-white hover:bg-indigo-700'
                     }">
                  <span>${w.text}</span>
                  ${!state.isCorrect ? `
                    <span class="text-[10px] opacity-70 hover:opacity-100 hover:text-red-200">✕</span>
                  ` : ''}
                </div>
              `).join("")}
            </div>
          </div>

          <!-- Word Bank Pool (คลังคำศัพท์ให้เลือก) -->
          ${!state.isCorrect ? `
            <div class="space-y-2">
              <div class="flex items-center justify-between text-xs">
                <span class="font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                  <span>🎲 คลังคำศัพท์ (Word Bank):</span>
                  <span class="text-[10px] text-slate-400 font-normal">(แตะหรือลากเพื่อนำไปใส่ในประโยค)</span>
                </span>
                <span class="text-[11px] text-slate-400 font-mono">คงเหลือ ${state.poolWords.length} คำ</span>
              </div>

              <div class="flex flex-wrap items-center gap-2.5 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 min-h-[64px]">
                ${state.poolWords.map(w => `
                  <button id="pool-${w.id}"
                          type="button"
                          draggable="true"
                          ondragstart="window.app.handleSentenceDragStart(event, '${drill.id}', '${w.id}', 'pool')"
                          ondragend="window.app.handleSentenceDragEnd(event)"
                          onclick="window.app.placeSentenceWord('${drill.id}', '${w.id}')"
                          class="word-chip px-4 py-2 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 hover:bg-indigo-50 dark:hover:bg-indigo-950/60 hover:text-indigo-600 dark:hover:text-indigo-400 border border-slate-300 dark:border-slate-700 font-bold text-sm shadow-sm active:scale-95 transition-all flex items-center gap-1">
                    <span>${w.text}</span>
                  </button>
                `).join("")}
                ${state.poolWords.length === 0 ? `
                  <span class="text-xs text-slate-400 italic">นำคำศัพท์ทั้งหมดไปวางในประโยคแล้ว กด "ตรวจสอบคำตอบ" ได้เลย!</span>
                ` : ''}
              </div>
            </div>
          ` : ''}

          <!-- Feedback Notification Area -->
          ${state.isCorrect ? `
            <div class="p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border-2 border-emerald-400 dark:border-emerald-700 space-y-3 animate-fadeIn">
              <div class="flex items-center justify-between">
                <span class="text-sm font-black text-emerald-800 dark:text-emerald-300 flex items-center gap-2">
                  <span>🎉</span>
                  <span>ยอดเยี่ยมมาก! คุณเรียงประโยคได้ถูกต้องสมบูรณ์ (+15 XP)</span>
                </span>
                <button onclick="window.speechEngine.speak('${drill.targetWords.join(" ").replace(/'/g, "\\'")}')"
                        class="p-2 rounded-xl bg-emerald-200 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 hover:scale-105 active:scale-95 transition-transform flex items-center gap-1.5 text-xs font-bold shadow-sm">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 3.5a.75.75 0 00-1.28-.53l-3.97 3.97H2.75A1.75 1.75 0 001 8.69v2.62c0 .966.784 1.75 1.75 1.75h2l3.97 3.97a.75.75 0 001.28-.53V3.5zM14.5 10a4.5 4.5 0 00-1.32-3.18.75.75 0 111.06-1.06A6 6 0 0116 10a6 6 0 01-1.76 4.24.75.75 0 01-1.06-1.06A4.5 4.5 0 0014.5 10z"/></svg>
                  <span>ฟังประโยคที่ถูกต้อง</span>
                </button>
              </div>
              <div class="text-base font-extrabold text-emerald-900 dark:text-emerald-100 font-mono">
                "${drill.targetWords.join(" ")}"
              </div>
              <div class="text-xs text-slate-700 dark:text-slate-300 pt-2 border-t border-emerald-200 dark:border-emerald-900/60 leading-relaxed">
                <strong>💡 Kru Dew Grammar Note:</strong> ${drill.explanation}
              </div>
            </div>
          ` : state.errorMessage ? `
            <div class="p-4 rounded-2xl bg-red-50 dark:bg-red-950/40 border border-red-300 dark:border-red-800 text-xs text-red-800 dark:text-red-300 flex items-center justify-between gap-3 animate-fadeIn">
              <div class="flex items-center gap-2">
                <span>⚠️</span>
                <span>${state.errorMessage}</span>
              </div>
              <button onclick="window.app.revealSentenceSolution('${topic.id}', '${drill.id}')"
                      class="shrink-0 px-2.5 py-1 rounded-lg bg-red-200 dark:bg-red-900/60 text-red-900 dark:text-red-200 font-bold text-[11px] hover:bg-red-300 transition-colors">
                ดูเฉลย
              </button>
            </div>
          ` : state.showSolution ? `
            <div class="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 space-y-1.5 animate-fadeIn">
              <div class="text-xs font-bold text-amber-800 dark:text-amber-300 flex items-center gap-1.5">
                <span>💡 เฉลยประโยคที่ถูกต้อง:</span>
              </div>
              <div class="text-sm font-bold font-mono text-slate-900 dark:text-white">
                "${drill.targetWords.join(" ")}"
              </div>
              <div class="text-xs text-slate-600 dark:text-slate-300">
                ${drill.explanation}
              </div>
            </div>
          ` : ''}

          <!-- Workshop Control Action Buttons -->
          <div class="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-100 dark:border-slate-800">
            <div class="flex items-center gap-2">
              <button onclick="window.app.navigateSentenceDrill('${topic.id}', ${Math.max(0, drillIdx - 1)})"
                      ${drillIdx === 0 ? 'disabled' : ''}
                      class="px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-bold disabled:opacity-40 disabled:cursor-not-allowed transition-all">
                ◀ ข้อก่อนหน้า
              </button>
              <button onclick="window.app.navigateSentenceDrill('${topic.id}', ${Math.min(drills.length - 1, drillIdx + 1)})"
                      ${drillIdx === drills.length - 1 ? 'disabled' : ''}
                      class="px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-bold disabled:opacity-40 disabled:cursor-not-allowed transition-all">
                ข้อถัดไป ▶
              </button>
            </div>

            <div class="flex items-center gap-2">
              ${!state.isCorrect ? `
                <button onclick="window.app.revealSentenceSolution('${topic.id}', '${drill.id}')"
                        class="px-3.5 py-2 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-bold transition-all">
                  💡 ดูเฉลย / คำใบ้
                </button>
                <button onclick="window.app.checkSentenceAnswer('${topic.id}', '${drill.id}')"
                        class="px-5 py-2 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 active:scale-95 text-xs font-black shadow-md transition-all flex items-center gap-1.5">
                  <span>✓ ตรวจสอบคำตอบ</span>
                </button>
              ` : `
                ${drillIdx < drills.length - 1 ? `
                  <button onclick="window.app.navigateSentenceDrill('${topic.id}', ${drillIdx + 1})"
                          class="px-5 py-2 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 active:scale-95 text-xs font-black shadow-md transition-all flex items-center gap-1.5">
                    <span>ทำข้อถัดไป ➔</span>
                  </button>
                ` : `
                  <button onclick="window.app.navigateTo('sentence-builder')"
                          class="px-5 py-2 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 active:scale-95 text-xs font-black shadow-md transition-all">
                    <span>กลับไปหน้ารวมบทเรียน ➔</span>
                  </button>
                `}
              `}
            </div>
          </div>

        </div>

        <!-- Topic Finished Celebration Card -->
        ${isTopicFinished ? `
          <div class="p-6 rounded-3xl bg-gradient-to-r from-emerald-500 via-teal-500 to-indigo-600 text-white shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 animate-fadeIn">
            <div class="space-y-1">
              <div class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/20 text-xs font-bold uppercase tracking-wider">
                <span>🏆 สำเร็จสมบูรณ์แบบ</span>
              </div>
              <h4 class="text-xl font-black">
                ยินดีด้วย! คุณพิชิตโจทย์แต่งประโยคบทนี้ครบทั้ง ${drills.length} ข้อแล้ว
              </h4>
              <p class="text-xs text-emerald-100">
                คุณได้รับ XP รวมทั้งหมด +${drills.length * 15} XP และปลดล็อกความแม่นยำทางไวยากรณ์เรียบร้อยแล้ว
              </p>
            </div>
            <button onclick="window.app.navigateTo('sentence-builder')"
                    class="px-5 py-2.5 bg-white text-emerald-800 font-extrabold text-xs rounded-xl hover:bg-emerald-50 shadow-md transition-all shrink-0">
              เลือกบทเรียนถัดไป ➔
            </button>
          </div>
        ` : ''}

      </div>
    `;
  }

  // --- Sentence Drag-and-Drop & Word Slot Interaction Methods ---
  handleSentenceDragStart(e, drillId, wordId, source) {
    e.dataTransfer.setData("text/plain", JSON.stringify({ drillId, wordId, source }));
    e.dataTransfer.effectAllowed = "move";
    if (e.target) {
      e.target.classList.add("dragging");
    }
  }

  handleSentenceDragEnd(e) {
    if (e.target) {
      e.target.classList.remove("dragging");
    }
    document.querySelectorAll(".slot-dropzone").forEach(el => el.classList.remove("drag-over"));
  }

  handleSentenceDragOver(e) {
    e.preventDefault();
    if (e.currentTarget) {
      e.currentTarget.classList.add("drag-over");
    }
  }

  handleSentenceDragLeave(e) {
    if (e.currentTarget) {
      e.currentTarget.classList.remove("drag-over");
    }
  }

  handleSentenceDrop(e, drillId) {
    e.preventDefault();
    if (e.currentTarget) {
      e.currentTarget.classList.remove("drag-over");
    }
    try {
      const data = JSON.parse(e.dataTransfer.getData("text/plain") || "{}");
      if (data.drillId === drillId && data.source === "pool") {
        this.placeSentenceWord(drillId, data.wordId);
      }
    } catch (err) {
      console.warn("handleSentenceDrop error:", err);
    }
  }

  handleSentenceDropOnWord(e, drillId, targetWordId) {
    e.preventDefault();
    e.stopPropagation();
    try {
      const data = JSON.parse(e.dataTransfer.getData("text/plain") || "{}");
      if (data.drillId === drillId) {
        if (data.source === "placed") {
          this.reorderSentenceWords(drillId, data.wordId, targetWordId);
        } else if (data.source === "pool") {
          this.placeSentenceWordBefore(drillId, data.wordId, targetWordId);
        }
      }
    } catch (err) {
      console.warn("handleSentenceDropOnWord error:", err);
    }
  }

  placeSentenceWord(drillId, wordId) {
    const state = this.sentenceBuilderState[drillId];
    if (!state || state.isCorrect) return;

    const poolIdx = state.poolWords.findIndex(w => w.id === wordId);
    if (poolIdx === -1) return;

    const [item] = state.poolWords.splice(poolIdx, 1);
    state.placedWords.push(item);
    state.errorMessage = null;

    window.soundFx.playClick();
    this.refreshSentenceWorkshop();
  }

  placeSentenceWordBefore(drillId, wordId, targetWordId) {
    const state = this.sentenceBuilderState[drillId];
    if (!state || state.isCorrect) return;

    const poolIdx = state.poolWords.findIndex(w => w.id === wordId);
    if (poolIdx === -1) return;

    const targetIdx = state.placedWords.findIndex(w => w.id === targetWordId);
    const [item] = state.poolWords.splice(poolIdx, 1);
    if (targetIdx !== -1) {
      state.placedWords.splice(targetIdx, 0, item);
    } else {
      state.placedWords.push(item);
    }
    state.errorMessage = null;

    window.soundFx.playClick();
    this.refreshSentenceWorkshop();
  }

  returnSentenceWord(drillId, wordId) {
    const state = this.sentenceBuilderState[drillId];
    if (!state || state.isCorrect) return;

    const placedIdx = state.placedWords.findIndex(w => w.id === wordId);
    if (placedIdx === -1) return;

    const [item] = state.placedWords.splice(placedIdx, 1);
    state.poolWords.push(item);
    state.errorMessage = null;

    window.soundFx.playClick();
    this.refreshSentenceWorkshop();
  }

  reorderSentenceWords(drillId, sourceWordId, targetWordId) {
    const state = this.sentenceBuilderState[drillId];
    if (!state || state.isCorrect || sourceWordId === targetWordId) return;

    const sourceIdx = state.placedWords.findIndex(w => w.id === sourceWordId);
    const targetIdx = state.placedWords.findIndex(w => w.id === targetWordId);
    if (sourceIdx === -1 || targetIdx === -1) return;

    const [moved] = state.placedWords.splice(sourceIdx, 1);
    state.placedWords.splice(targetIdx, 0, moved);
    state.errorMessage = null;

    window.soundFx.playClick();
    this.refreshSentenceWorkshop();
  }

  clearSentenceWords(drillId) {
    const state = this.sentenceBuilderState[drillId];
    if (!state || state.isCorrect) return;

    state.poolWords = [...state.poolWords, ...state.placedWords];
    state.placedWords = [];
    state.errorMessage = null;

    window.soundFx.playClick();
    this.refreshSentenceWorkshop();
  }

  checkSentenceAnswer(topicId, drillId) {
    const topic = (window.sentenceBuilderData || []).find(t => t.id === topicId);
    if (!topic) return;
    const drill = (topic.drills || []).find(d => d.id === drillId);
    if (!drill) return;
    const state = this.sentenceBuilderState[drillId];
    if (!state) return;

    if (state.placedWords.length === 0) {
      state.errorMessage = "กรุณาลากหรือแตะคำศัพท์เพื่อเรียงประโยคก่อนตรวจคำตอบ";
      window.soundFx.playIncorrect();
      this.refreshSentenceWorkshop();
      return;
    }

    // Normalization check: compare normalized strings ignoring case and trailing punctuation differences
    const userTokens = state.placedWords.map(w => w.text.trim());
    const targetTokens = drill.targetWords.map(w => w.trim());

    const userNormalized = userTokens.join(" ").toLowerCase().replace(/[.,!?;]/g, "").replace(/\s+/g, " ");
    const targetNormalized = targetTokens.join(" ").toLowerCase().replace(/[.,!?;]/g, "").replace(/\s+/g, " ");

    const isMatch = (userTokens.join(" ") === targetTokens.join(" ")) || (userNormalized === targetNormalized);

    if (isMatch) {
      state.isCorrect = true;
      state.isCompleted = true;
      state.errorMessage = null;

      // Mark in persistent storage
      const wasAlreadyDone = !!this.sentenceCompletedDrills[drill.id];
      this.sentenceCompletedDrills[drill.id] = true;
      try {
        localStorage.setItem("engmastery_sentence_drills_completed", JSON.stringify(this.sentenceCompletedDrills));
      } catch (e) {}

      // Reward XP if first time completing this drill
      if (!wasAlreadyDone) {
        window.storageManager.addXP(15);
        this.renderHeaderStats();
        this.showToast("+15 XP ฝึกแต่งประโยคถูกต้อง!", "success");
      }

      window.soundFx.playCorrect();

      // Check if all drills in topic are finished
      const allDone = (topic.drills || []).every(d => this.sentenceCompletedDrills[d.id]);
      if (allDone) {
        setTimeout(() => window.soundFx.playVictory(), 500);
      }

      // Auto pronounce correct sentence
      setTimeout(() => {
        window.speechEngine.speak(drill.targetWords.join(" "));
      }, 300);

      this.refreshSentenceWorkshop();
    } else {
      state.errorMessage = "คำตอบยังไม่ถูกต้อง ลองตรวจสอบการเรียงลำดับคำ หรือกด 'ดูเฉลย' เพื่อศึกษาแนวทาง";
      window.soundFx.playIncorrect();
      this.refreshSentenceWorkshop();
    }
  }

  revealSentenceSolution(topicId, drillId) {
    const state = this.sentenceBuilderState[drillId];
    if (!state) return;
    state.showSolution = true;
    window.soundFx.playClick();
    this.refreshSentenceWorkshop();
  }

  navigateSentenceDrill(topicId, drillIndex) {
    this.sentenceDrillIndex[topicId] = drillIndex;
    window.soundFx.playClick();
    const container = document.getElementById("main-content-view");
    if (container && this.currentView === "sentence-builder") {
      this.renderSentenceBuilderView(container, topicId);
    }
  }

  refreshSentenceWorkshop() {
    const topic = (window.sentenceBuilderData || []).find(t => t.id === this.activeSentenceTopicId);
    if (!topic) return;
    const drills = topic.drills || [];
    const currentDrillIdx = this.sentenceDrillIndex[topic.id] || 0;
    const activeDrill = drills[currentDrillIdx] || drills[0];

    const workshopContainer = document.getElementById("sentence-workshop-container");
    if (workshopContainer) {
      workshopContainer.innerHTML = this.renderSentenceBuilderWorkshop(topic, activeDrill, currentDrillIdx);
    }
  }

  // --- Toast Notification ---
  showToast(message, type = "info") {
    const existing = document.getElementById("engmastery-toast-container");
    let container = existing;
    if (!container) {
      container = document.createElement("div");
      container.id = "engmastery-toast-container";
      container.className = "fixed bottom-5 right-5 z-50 flex flex-col gap-2 pointer-events-none";
      document.body.appendChild(container);
    }

    const toast = document.createElement("div");
    toast.className = `px-4 py-2.5 rounded-xl text-xs font-semibold shadow-lg text-white transform transition-all duration-300 pointer-events-auto flex items-center gap-2 ${
      type === "success" ? "bg-emerald-600" : type === "error" ? "bg-red-600" : "bg-slate-800 dark:bg-slate-700"
    }`;
    toast.innerHTML = `<span>${message}</span>`;

    container.appendChild(toast);
    setTimeout(() => {
      toast.classList.add("opacity-0", "translate-y-2");
      setTimeout(() => toast.remove(), 300);
    }, 2800);
  }
}

// Bootstrap on DOM ready
document.addEventListener("DOMContentLoaded", () => {
  window.app = new EngMasteryApp();
});

if (typeof module !== "undefined" && module.exports) {
  module.exports = EngMasteryApp;
}
