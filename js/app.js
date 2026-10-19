/**
 * EngMastery: Zero to Pro - Main Application Controller
 * Handles Mobile-First Navigation, 4-Tab Level Architecture,
 * Interactive Audio TTS, Chat UI with Thai translation toggle,
 * Action Drill & 5-Question Quizzes, and JSON Backup & Restore.
 */

class EngMasteryApp {
  constructor() {
    this.currentView = "dashboard";
    this.activeLevelId = null;
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
    this.flashcardVoiceScore = null;
    this.flashcardIsListening = false;
    this.browseVocabScores = {};

    // --- State for Cheat Sheet Hub & Speaking Lab ---
    this.cheatSheetTab = "tenses";
    this.irregularVerbSearch = "";
    this.speakingLabCategory = "standup";

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
      // Reading Lab State
      this.activeReadingArticleId = null;
      this.selectedReadingLevel = "all";
      this.readingCollectionFilter = "all";
      this.readingSearchQuery = "";
      this.readingPage = 1;
      this.readingItemsPerPage = 12;
      this.readingTtsPlaying = false;
      this.readingTtsIndex = null;
      this.readingTtsRate = 1.0;
      this.showReadingThai = true;
      this.readingFontSize = "base";
      this.readingQuizAnswers = {};
      this.readingQuizSubmitted = JSON.parse(localStorage.getItem("engmastery_reading_quizzes") || "{}");
      this.onlineVocabCache = JSON.parse(localStorage.getItem("engmastery_online_vocab_cache") || "{}");
      this.vocabIndex = null;
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
      // Reading Lab State
      this.activeReadingArticleId = null;
      this.selectedReadingLevel = "all";
      this.readingCollectionFilter = "all";
      this.readingSearchQuery = "";
      this.readingPage = 1;
      this.readingItemsPerPage = 12;
      this.readingTtsPlaying = false;
      this.readingTtsIndex = null;
      this.readingTtsRate = 1.0;
      this.showReadingThai = true;
      this.readingFontSize = "base";
      this.readingQuizAnswers = {};
      this.readingQuizSubmitted = {};
      this.onlineVocabCache = {};
      this.vocabIndex = null;
    }

    this.init();
  }

  init() {
    this.initTheme();
    this.setupNavigation();
    this.renderHeaderStats();
    this.renderView(this.currentView);
    if (typeof window !== "undefined" && typeof window.addEventListener === "function") {
      window.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          this.closeReadingWordPopup();
        }
      });
    }
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

    // Update active nav styling (Desktop sidebar & Mobile drawer)
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

    // Update active nav styling (Mobile bottom nav bar)
    document.querySelectorAll("[data-bottom-nav]").forEach(btn => {
      const target = btn.getAttribute("data-bottom-nav");
      if (target === viewName) {
        btn.classList.add("text-indigo-600", "dark:text-indigo-400", "font-bold");
        btn.classList.remove("text-slate-500", "dark:text-slate-400", "font-medium");
      } else {
        btn.classList.remove("text-indigo-600", "dark:text-indigo-400", "font-bold");
        btn.classList.add("text-slate-500", "dark:text-slate-400", "font-medium");
      }
    });

    if (viewName === "level-detail") {
      this.activeLevelId = params.levelId !== undefined ? params.levelId : null;
    }
    if (viewName === "reading-lab") {
      this.activeReadingArticleId = params.articleId !== undefined ? params.articleId : null;
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

    // Stop active audio if switching away or to another article
    this.stopReadingTts();

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
      case "reading-lab":
        this.renderReadingLabView(container, this.activeReadingArticleId);
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
      case "cheat-sheet":
        this.renderCheatSheetView(container);
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
                  class="w-full sm:w-auto px-5 py-2.5 bg-white text-indigo-700 font-bold text-sm rounded-xl hover:bg-indigo-50 shadow-md transition-all flex items-center justify-center gap-2 active:scale-95">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"/></svg>
                  <span>เริ่มเรียน: ${courses[0] ? courses[0].levelTitle : 'Level A1'}</span>
                </button>
                <button onclick="window.app.navigateTo('speaking-lab')"
                  class="w-full sm:w-auto px-5 py-2.5 bg-indigo-800/60 hover:bg-indigo-800 text-white font-semibold text-sm rounded-xl border border-white/20 transition-all flex items-center justify-center gap-2 active:scale-95">
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

        <!-- DAILY QUESTS & STREAK MISSIONS -->
        ${this.renderDailyQuestsCard()}

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

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
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
                  คลังคำศัพท์ & การ์ด 3D
                </h3>
                <p class="text-xs text-purple-200/80 leading-relaxed">
                  สุ่มคำศัพท์ Oxford 3000™, ศัพท์เทคนิค DevOps & Cloud, และ Phrasal Verbs พร้อมเสียง TTS
                </p>
              </div>
              <div class="pt-3 border-t border-purple-800/40 flex items-center justify-between text-xs font-bold text-purple-300">
                <span>เริ่มสุ่มคำศัพท์</span>
                <span class="group-hover:translate-x-1 transition-transform">➔</span>
              </div>
            </div>

            <!-- Hub 2: Reading Lab (CEFR A1–C2) -->
            <div onclick="window.app.navigateTo('reading-lab')"
              class="group cursor-pointer p-5 rounded-3xl bg-gradient-to-br from-emerald-900/90 to-slate-900 text-white border border-emerald-800/50 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all flex flex-col justify-between space-y-4">
              <div class="space-y-2">
                <div class="flex items-center justify-between">
                  <span class="text-3xl">📖</span>
                  <span class="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase bg-emerald-500/30 text-emerald-200 border border-emerald-400/40">
                    5 Levels (A1-C2)
                  </span>
                </div>
                <h3 class="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                  ห้องฝึกอ่าน (Reading Lab)
                </h3>
                <p class="text-xs text-emerald-200/80 leading-relaxed">
                  บทความแบ่งระดับสากล CEFR พร้อมเสียง Audio Player, แตะดูคำแปล และควิซวัดความเข้าใจ
                </p>
              </div>
              <div class="pt-3 border-t border-emerald-800/40 flex items-center justify-between text-xs font-bold text-emerald-300">
                <span>เข้าห้องฝึกอ่าน</span>
                <span class="group-hover:translate-x-1 transition-transform">➔</span>
              </div>
            </div>

            <!-- Hub 3: Sentence Builder -->
            <div onclick="window.app.navigateTo('sentence-builder')"
              class="group cursor-pointer p-5 rounded-3xl bg-gradient-to-br from-blue-900/90 to-slate-900 text-white border border-blue-800/50 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all flex flex-col justify-between space-y-4">
              <div class="space-y-2">
                <div class="flex items-center justify-between">
                  <span class="text-3xl">🧩</span>
                  <span class="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase bg-blue-500/30 text-blue-200 border border-blue-400/40">
                    Interactive
                  </span>
                </div>
                <h3 class="text-base font-bold text-white group-hover:text-blue-300 transition-colors">
                  ฝึกแต่งประโยค (Builder)
                </h3>
                <p class="text-xs text-blue-200/80 leading-relaxed">
                  ลากวางบล็อกคำศัพท์ 10 หัวข้อการทำงานจริง ฝึกโครงสร้างประโยคไวยากรณ์เป๊ะ
                </p>
              </div>
              <div class="pt-3 border-t border-blue-800/40 flex items-center justify-between text-xs font-bold text-blue-300">
                <span>เริ่มฝึกแต่งประโยค</span>
                <span class="group-hover:translate-x-1 transition-transform">➔</span>
              </div>
            </div>

            <!-- Hub 4: Masterclass Hub -->
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
                  ห้องติวเข้ม (Masterclass)
                </h3>
                <p class="text-xs text-rose-200/80 leading-relaxed">
                  เจาะลึก 12 Tenses Blueprint, Tense คู่ที่ออกสอบบ่อย, และการสื่อสารในงาน
                </p>
              </div>
              <div class="pt-3 border-t border-rose-800/40 flex items-center justify-between text-xs font-bold text-rose-300">
                <span>เข้าห้องติวเข้ม</span>
                <span class="group-hover:translate-x-1 transition-transform">➔</span>
              </div>
            </div>

            <!-- Hub 5: Grammar Cheat Sheet Hub -->
            <div onclick="window.app.navigateTo('cheat-sheet')"
              class="group cursor-pointer p-5 rounded-3xl bg-gradient-to-br from-amber-900/90 to-slate-900 text-white border border-amber-800/50 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all flex flex-col justify-between space-y-4">
              <div class="space-y-2">
                <div class="flex items-center justify-between">
                  <span class="text-3xl">📑</span>
                  <span class="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase bg-amber-500/30 text-amber-200 border border-amber-400/40">
                    Matrix & Maps
                  </span>
                </div>
                <h3 class="text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                  สรุปไวยากรณ์ (Cheat Sheet)
                </h3>
                <p class="text-xs text-amber-200/80 leading-relaxed">
                  12 Tenses Matrix, แผนผัง In/On/At, และกริยา 3 ช่อง 100 คำพร้อมเสียงอ่าน native
                </p>
              </div>
              <div class="pt-3 border-t border-amber-800/40 flex items-center justify-between text-xs font-bold text-amber-300">
                <span>เปิดแผ่นสรุป</span>
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
      </div>
    `;
  }

  // =========================================================================
  // DAILY QUESTS CARD & CLAIM LOGIC
  // =========================================================================
  renderDailyQuestsCard() {
    const quests = window.storageManager.getDailyQuests();
    const questList = [
      {
        key: 'readArticle',
        title: 'อ่านบทความใน Reading Lab 1 เรื่อง',
        icon: '📖',
        target: 1,
        xp: 20,
        view: 'reading-lab'
      },
      {
        key: 'speakSentences',
        title: 'ซ้อมพูดใน Speaking Lab 3 ประโยค',
        icon: '🎙️',
        target: 3,
        xp: 15,
        view: 'speaking-lab'
      },
      {
        key: 'reviewFlashcards',
        title: 'ทบทวน Flashcard 10 คำ',
        icon: '🎲',
        target: 10,
        xp: 10,
        view: 'vocabulary'
      }
    ];

    const completedQuestsCount = questList.filter(q => (quests[q.key] || 0) >= q.target).length;
    const totalBonus = 45; // 20 + 15 + 10

    return `
      <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 sm:p-6 shadow-sm space-y-4">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
          <div>
            <div class="flex items-center gap-2">
              <span class="text-xl">🎯</span>
              <h2 class="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                ภารกิจประจำวัน (Daily Quests & Streak Missions)
              </h2>
            </div>
            <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              ทำภารกิจรายวันเพื่อสะสมคะแนน XP และรักษาเปลวไฟ Daily Streak! (สำเร็จ ${completedQuestsCount}/${questList.length})
            </p>
          </div>
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/40 text-amber-600 dark:text-amber-400 text-xs font-bold shrink-0 self-start sm:self-auto">
            <span>✨</span>
            <span>โบนัสรวม +${totalBonus} XP ต่อวัน</span>
          </span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-3.5">
          ${questList.map(q => {
            const current = quests[q.key] || 0;
            const isCompleted = current >= q.target;
            const isClaimed = quests.claimed && quests.claimed[q.key];
            const pct = Math.min(100, Math.round((current / q.target) * 100));

            return `
              <div class="p-4 rounded-2xl border ${
                isClaimed 
                  ? 'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 opacity-90'
                  : isCompleted 
                    ? 'bg-gradient-to-br from-amber-500/10 via-amber-50/40 to-transparent dark:from-amber-950/40 dark:to-slate-900 border-amber-300 dark:border-amber-800 shadow-xs'
                    : 'bg-slate-50/70 dark:bg-slate-800/30 border-slate-200 dark:border-slate-800'
              } flex flex-col justify-between space-y-3">
                <div class="space-y-1.5">
                  <div class="flex items-center justify-between">
                    <span class="text-2xl">${q.icon}</span>
                    <span class="text-xs font-black text-amber-500 flex items-center gap-1">
                      <span>✨</span>
                      <span>+${q.xp} XP</span>
                    </span>
                  </div>
                  <h3 class="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-100 leading-snug">
                    ${q.title}
                  </h3>
                  <div class="flex items-center justify-between text-[11px] text-slate-400 font-medium">
                    <span>ความคืบหน้า</span>
                    <span class="font-bold ${isCompleted ? 'text-emerald-500' : 'text-slate-600 dark:text-slate-300'}">
                      ${Math.min(current, q.target)} / ${q.target}
                    </span>
                  </div>
                  <div class="w-full bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
                    <div class="h-full rounded-full transition-all duration-500 ${
                      isClaimed ? 'bg-slate-400' : isCompleted ? 'bg-emerald-500' : 'bg-indigo-500'
                    }" style="width: ${pct}%"></div>
                  </div>
                </div>

                <div class="pt-2 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center justify-end">
                  ${
                    isClaimed
                      ? `<span class="px-3 py-1.5 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 text-xs font-bold flex items-center gap-1">
                          <span>✅</span><span>รับรางวัลแล้ว</span>
                        </span>`
                      : isCompleted
                        ? `<button onclick="window.app.claimDailyQuest('${q.key}')" class="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white text-xs font-black shadow-md flex items-center gap-1.5 active:scale-95 animate-bounce">
                            <span>🎉</span><span>รับ +${q.xp} XP</span>
                          </button>`
                        : `<button onclick="window.app.navigateTo('${q.view}')" class="px-3 py-1.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 hover:bg-indigo-100 dark:hover:bg-indigo-900/60 text-indigo-600 dark:text-indigo-400 text-xs font-bold flex items-center gap-1 transition-all active:scale-95">
                            <span>ไปทำภารกิจ</span><span>➔</span>
                          </button>`
                  }
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }

  claimDailyQuest(questKey) {
    const res = window.storageManager.claimQuestReward(questKey);
    if (res.success) {
      window.soundFx.playVictory();
      this.renderHeaderStats();
      this.showToast(`🎉 สำเร็จภารกิจ "${res.name}" รับรางวัล +${res.xp} XP!`, "success");
      const container = document.getElementById("main-content-view");
      if (container && this.currentView === "dashboard") {
        this.renderDashboardView(container);
      }
    } else {
      this.showToast(res.message, "info");
    }
  }

  // =========================================================================
  // VIEW 2: LEVEL DIRECTORY (BLOG LISTING) & LEVEL DETAIL (4 TABS ARCHITECTURE)
  // =========================================================================
  renderLevelListing(container, courses) {
    this.activeLevelId = null;
    const state = window.storageManager.state;
    const completedCount = courses.filter(c => (state.completedLevels || []).includes(c.id)).length;
    const progressPercent = courses.length ? Math.round((completedCount / courses.length) * 100) : 0;
    const totalXP = (state.stats && state.stats.totalXP) || 0;

    container.innerHTML = `
      <div class="space-y-8 animate-fadeIn max-w-5xl mx-auto pb-12">
        <!-- Hero Blog Header -->
        <div class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-900 via-indigo-950 to-slate-900 p-6 sm:p-8 text-white shadow-xl border border-indigo-800/40">
          <div class="relative z-10 space-y-4 max-w-3xl">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-400/30 text-xs font-bold uppercase tracking-wider">
              <span>🌟 CEFR Standardized Roadmap</span>
              <span class="text-indigo-400">•</span>
              <span>A1 ➔ C2 Zero to Pro</span>
            </div>
            
            <h1 class="text-2xl sm:text-4xl font-black tracking-tight text-white leading-tight">
              ห้องเรียน 6 ระดับมาตรฐานสากล (CEFR Level Mastery)
            </h1>
            
            <p class="text-xs sm:text-sm text-indigo-100/90 leading-relaxed">
              หลักสูตรภาษาอังกฤษที่ออกแบบอย่างเป็นระบบตามกรอบสากล CEFR แต่ละระดับร้อยเรียงผ่าน 4 เสาหลักการเรียนรู้: 
              <span class="font-bold text-amber-300">1. Core Grammar</span> (ไวยากรณ์หัวใจหลัก), 
              <span class="font-bold text-amber-300">2. Chunks & Vocab</span> (สำนวนคำศัพท์ติดปาก), 
              <span class="font-bold text-amber-300">3. Chat Dialogue</span> (บทสนทนาการทำงานจริง) และ 
              <span class="font-bold text-amber-300">4. Action Drill & Quiz</span> (ซ้อมพูดและแบบทดสอบ 5 ข้อ)
            </p>

            <!-- Learning Progress Tracker -->
            <div class="pt-2 flex flex-col sm:flex-row sm:items-center gap-4 text-xs">
              <div class="flex-1 bg-white/10 p-3 rounded-2xl border border-white/10 backdrop-blur-xs">
                <div class="flex items-center justify-between mb-1.5 font-bold">
                  <span class="text-indigo-200">ความคืบหน้าการเรียนรวม</span>
                  <span class="text-amber-300">${completedCount} / ${courses.length} ระดับ (${progressPercent}%)</span>
                </div>
                <div class="w-full bg-black/30 rounded-full h-2.5 overflow-hidden">
                  <div class="bg-gradient-to-r from-amber-400 to-emerald-400 h-2.5 rounded-full transition-all duration-500" style="width: ${progressPercent}%"></div>
                </div>
              </div>
              <div class="flex items-center gap-3">
                <div class="bg-white/10 px-4 py-2.5 rounded-2xl border border-white/10 text-center">
                  <div class="text-[10px] text-indigo-200">XP สะสม</div>
                  <div class="text-base font-black text-amber-300">${totalXP} XP</div>
                </div>
                <div class="bg-white/10 px-4 py-2.5 rounded-2xl border border-white/10 text-center">
                  <div class="text-[10px] text-indigo-200">เป้าหมาย</div>
                  <div class="text-base font-black text-emerald-300">C2 Mastery</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Decorative background glow -->
          <div class="absolute -right-10 -bottom-10 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
        </div>

        <!-- 6 Levels Blog Grid -->
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <h2 class="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span>📖 เลือกระดับบทเรียนที่ต้องการเรียน</span>
              <span class="text-xs px-2.5 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 font-bold">${courses.length} ระดับ</span>
            </h2>
            <button onclick="window.app.navigateTo('dashboard')" class="text-xs font-semibold text-slate-500 hover:text-indigo-600 dark:text-slate-400">
              กลับ Dashboard ➔
            </button>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            ${courses.map((course, idx) => {
              const isCompleted = state.completedLevels.includes(course.id);
              const quizRecord = state.quizHistory[course.id];

              return `
                <div onclick="window.app.navigateTo('level-detail', { levelId: '${course.id}' })"
                  class="bg-white dark:bg-slate-900 border ${
                    isCompleted ? "border-emerald-300 dark:border-emerald-800" : "border-slate-200 dark:border-slate-800"
                  } rounded-3xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-4 group cursor-pointer relative overflow-hidden">
                  
                  ${isCompleted ? `
                    <div class="absolute top-0 right-0 w-16 h-16 pointer-events-none overflow-hidden">
                      <div class="bg-emerald-500 text-white text-[9px] font-black uppercase py-0.5 w-24 text-center transform rotate-45 translate-x-5 translate-y-3 shadow-xs">
                        PASSED
                      </div>
                    </div>
                  ` : ''}

                  <div>
                    <!-- Card Top Header -->
                    <div class="flex items-center justify-between mb-3">
                      <span class="px-3 py-1 rounded-xl text-xs font-black uppercase tracking-wider ${course.badgeColor.bg} ${course.badgeColor.text} border ${course.badgeColor.border}">
                        ${course.level}
                      </span>
                      ${isCompleted ? `
                        <span class="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
                          <span>ผ่านแล้ว (${quizRecord ? quizRecord.bestPercent : 100}%)</span>
                        </span>
                      ` : `
                        <span class="text-xs text-slate-400 font-medium flex items-center gap-1">
                          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                          ${course.estimatedTime}
                        </span>
                      `}
                    </div>

                    <!-- Level Title & Subtitle -->
                    <h3 class="text-lg font-black text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      ${course.levelTitle}
                    </h3>
                    <p class="text-xs text-slate-500 dark:text-slate-400 mt-2 line-clamp-3 leading-relaxed">
                      ${course.levelSub}
                    </p>

                    <!-- 4 Learning Pillars Mini Breakdown -->
                    <div class="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 space-y-1.5 text-[11px] text-slate-600 dark:text-slate-400">
                      <div class="flex items-center gap-1.5">
                        <span>📑</span>
                        <span class="font-semibold text-slate-700 dark:text-slate-300 truncate">${course.coreGrammar ? course.coreGrammar.title : 'Core Grammar'}</span>
                      </div>
                      <div class="flex items-center gap-1.5">
                        <span>💬</span>
                        <span class="truncate">${course.chunksAndVocab ? course.chunksAndVocab.title : 'Chunks & Vocab'}</span>
                      </div>
                      <div class="flex items-center gap-1.5">
                        <span>📱</span>
                        <span class="truncate">${course.realLifeDialogue ? course.realLifeDialogue.scenario : 'Workplace Chat Dialogue'}</span>
                      </div>
                      <div class="flex items-center gap-1.5">
                        <span>🎯</span>
                        <span class="text-indigo-600 dark:text-indigo-400 font-bold">Action Drill & ควิซ 5 ข้อ</span>
                      </div>
                    </div>
                  </div>

                  <!-- Card Footer Action -->
                  <div class="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <span class="text-xs font-bold text-amber-500 flex items-center gap-1">
                      <span>✨</span>
                      <span>+${course.xpReward} XP</span>
                    </span>
                    <button onclick="event.stopPropagation(); window.app.navigateTo('level-detail', { levelId: '${course.id}' })"
                      class="px-4 py-2 ${
                        isCompleted
                          ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 hover:bg-emerald-100'
                          : 'bg-indigo-600 hover:bg-indigo-700 text-white'
                      } font-bold text-xs rounded-xl shadow-xs transition-all flex items-center gap-1.5 active:scale-95">
                      <span>${isCompleted ? "ทบทวนบทเรียน" : "เข้าเรียนบทนี้"}</span>
                      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                    </button>
                  </div>
                </div>
              `;
            }).join("")}
          </div>
        </div>
      </div>
    `;
  }

  renderLevelDetailView(container, levelId) {
    const courses = window.courseData || [];
    if (!levelId) {
      this.renderLevelListing(container, courses);
      return;
    }

    const course = courses.find(c => c.id === levelId);
    if (!course) {
      this.renderLevelListing(container, courses);
      return;
    }

    this.activeLevelId = course.id;
    const currentTab = this.activeTabByLevel[course.id] || "grammar";

    const courseIndex = courses.findIndex(c => c.id === course.id);
    const prevCourse = courseIndex > 0 ? courses[courseIndex - 1] : null;
    const nextCourse = courseIndex < courses.length - 1 ? courses[courseIndex + 1] : null;

    container.innerHTML = `
      <div class="space-y-6 animate-fadeIn max-w-4xl mx-auto pb-12">
        <!-- Level Navigation Bar & Breadcrumbs -->
        <div class="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
          <button onclick="window.app.navigateTo('level-detail', { levelId: null })"
            class="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
            <span>กลับสู่หน้ารวมห้องเรียน 6 ระดับ (All Levels Hub)</span>
          </button>
          <div class="flex items-center gap-2">
            ${prevCourse ? `
              <button onclick="window.app.navigateTo('level-detail', { levelId: '${prevCourse.id}' })"
                class="px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-bold text-slate-700 dark:text-slate-200 transition-all flex items-center gap-1" title="ระดับก่อนหน้า: ${prevCourse.levelTitle}">
                <span>←</span>
                <span class="hidden sm:inline">ก่อนหน้า</span>
              </button>
            ` : ''}
            ${nextCourse ? `
              <button onclick="window.app.navigateTo('level-detail', { levelId: '${nextCourse.id}' })"
                class="px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-bold text-slate-700 dark:text-slate-200 transition-all flex items-center gap-1" title="ระดับถัดไป: ${nextCourse.levelTitle}">
                <span class="hidden sm:inline">ถัดไป</span>
                <span>→</span>
              </button>
            ` : ''}
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

        <!-- Unified Previous / Next Level Navigation Footer -->
        <div class="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          ${prevCourse ? `
            <button onclick="window.app.navigateTo('level-detail', { levelId: '${prevCourse.id}' })"
              class="w-full sm:w-auto px-4 py-2.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs flex items-center justify-center sm:justify-start gap-2 shadow-xs transition-all active:scale-95 group">
              <span class="group-hover:-translate-x-1 transition-transform">⬅</span>
              <div class="text-left">
                <div class="text-[10px] text-slate-400 font-medium">ระดับก่อนหน้า (${prevCourse.level})</div>
                <div class="truncate max-w-[200px]">${prevCourse.levelTitle}</div>
              </div>
            </button>
          ` : `
            <button onclick="window.app.navigateTo('level-detail', { levelId: null })"
              class="w-full sm:w-auto px-4 py-2.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs flex items-center justify-center sm:justify-start gap-2 shadow-xs transition-all active:scale-95">
              <span>⬅</span>
              <span>หน้ารวมห้องเรียน 6 ระดับ (Blog)</span>
            </button>
          `}

          <button onclick="window.app.navigateTo('level-detail', { levelId: null })"
            class="w-full sm:w-auto px-4 py-2.5 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold text-xs flex items-center justify-center gap-1.5 transition-all">
            <span>📚 หน้ารวมทุกระดับ (${courseIndex + 1}/${courses.length})</span>
          </button>

          ${nextCourse ? `
            <button onclick="window.app.navigateTo('level-detail', { levelId: '${nextCourse.id}' })"
              class="w-full sm:w-auto px-5 py-2.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center justify-center sm:justify-end gap-2 shadow-md transition-all active:scale-95 group">
              <div class="text-right">
                <div class="text-[10px] text-indigo-200 font-medium">ระดับถัดไป (${nextCourse.level})</div>
                <div class="truncate max-w-[200px]">${nextCourse.levelTitle}</div>
              </div>
              <span class="group-hover:translate-x-1 transition-transform">➔</span>
            </button>
          ` : `
            <button onclick="window.app.navigateTo('level-detail', { levelId: null })"
              class="w-full sm:w-auto px-5 py-2.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md transition-all">
              <span>🎉 จบครบ 6 ระดับแล้ว! (กลับสู่หน้ารวม)</span>
              <span>➔</span>
            </button>
          `}
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

        <!-- Rules Cards as Sub-Units -->
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <h3 class="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider text-xs flex items-center gap-2">
              <span class="text-indigo-600 dark:text-indigo-400">📚</span>
              <span>หน่วยการเรียนรู้ย่อย (Modular Sub-Units):</span>
            </h3>
            <span class="text-[11px] text-slate-400 font-mono">${grammarData.rules.length} Sub-Units</span>
          </div>
          ${grammarData.rules.map((rule, rIdx) => `
            <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-3 relative overflow-hidden">
              <div class="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
                <span class="px-2.5 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800">
                  Unit ${rIdx + 1}
                </span>
                <span class="text-[11px] text-slate-400 font-medium">Core Grammar Rule</span>
              </div>
              <h4 class="text-sm sm:text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
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
          window.storageManager.recordQuestProgress("speakSentences", 1);
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
  // VIEW 3: SPEAKING LAB (5 CATEGORIZED DRILLS PRACTICE ROOM)
  // =========================================================================
  renderSpeakingLabView(container) {
    const categories = [
      {
        id: "standup",
        label: "Daily Stand-up & Sprint",
        emoji: "🚀",
        badge: "Agile & Standup",
        description: "ประโยคอัปเดตงานประจำวัน รายงานความคืบหน้า และเคลียร์ปัญหาติดขัด (Blockers)"
      },
      {
        id: "incidents",
        label: "Incident & Outage Alerts",
        emoji: "🚨",
        badge: "SRE & On-call",
        description: "ประโยคแจ้งเตือนเหตุฉุกเฉิน เซิร์ฟเวอร์ล่ม สั่ง Rollback และวิเคราะห์ Root Cause"
      },
      {
        id: "meetings",
        label: "Meetings & Polite Proposals",
        emoji: "💼",
        badge: "Discussion & Trade-offs",
        description: "ประโยคเสนอความคิดเห็น ถกเถียงเรื่องสถาปัตยกรรม และการสรุป Action items"
      },
      {
        id: "phonics",
        label: "Phonics & Tricky Sounds",
        emoji: "🗣️",
        badge: "Minimal Pairs",
        description: "ฝึกออกเสียงพยางค์และคู่เสียงที่คนไทยมักออกผิด เช่น /v/ vs /w/, /θ/, และเสียงท้ายประโยค"
      },
      {
        id: "social",
        label: "Office Small Talk & Social",
        emoji: "☕",
        badge: "Team Bonding",
        description: "ประโยคชวนคุยผูกมิตรกับเพื่อนร่วมทีม ชื่นชมผลงาน และสร้างบรรยากาศเป็นกันเอง"
      }
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
        { en: "Verify that the wireless virtual network is working reliably.", th: "ตรวจสอบว่าเครือข่ายเสมือนไร้สายทำงานได้อย่างน่าเชื่อถือ (แยกเสียง /v/ กัดริมฝีปาก vs /w/ ห่อปาก)" },
        { en: "Think about the security of these three interconnected systems.", th: "ลองคิดถึงความปลอดภัยของทั้งสามระบบที่เชื่อมโยงกันนี้ (เสียง /θ/ แลบลิ้น vs /s/ ฟันชิด)" },
        { en: "Read the release notes carefully before loading the container cluster.", th: "อ่าน Release notes อย่างละเอียดก่อนที่จะโหลด Container Cluster (แยกเสียง /r/ ห่อลิ้น vs /l/ แตะเพดานปาก)" },
        { en: "Please configure the production firewall rules properly.", th: "กรุณากำหนดค่าไฟร์วอลล์ของโปรดักชันให้ถูกต้องสมบูรณ์ (แยกเสียง /p/ ริมฝีปากปิด vs /f/ ฟันบนแตะริมฝีปากล่าง)" },
        { en: "The build succeeded and passed all integration test suites.", th: "การ Build สำเร็จและผ่านชุดการทดสอบ Integration ทั้งหมดแล้ว (เสียงลงท้าย -ed: /ɪd/ ใน succeeded vs /t/ ใน passed)" },
        { en: "Ship the feature branch directly to the testing sandbox environment.", th: "ส่ง Feature branch ตรงไปยังพื้นที่ทดสอบ Sandbox (แยกเสียง /ʃ/ ชู่ปาก vs /tʃ/ ออกเสียง ช)" }
      ],
      social: [
        { en: "How has your week been going so far? Anything exciting on your radar?", th: "สัปดาห์นี้การทำงานของคุณเป็นอย่างไรบ้างครับ มีอะไรน่าตื่นเต้นไหม?" },
        { en: "Are you planning to do anything fun this upcoming weekend?", th: "สุดสัปดาห์ที่จะถึงนี้มีแผนไปเที่ยวพักผ่อนที่ไหนสนุก ๆ ไหมครับ?" },
        { en: "I really enjoyed your presentation during the engineering all-hands meeting.", th: "ผมชอบสไลด์นำเสนอของคุณในที่ประชุมใหญ่ฝ่ายวิศวกรรมมากเลยครับ" },
        { en: "Do you fancy grabbing a cup of freshly brewed coffee downstairs?", th: "อยากลงไปดื่มกาแฟสดข้างล่างด้วยกันสักแก้วไหมครับ?" },
        { en: "Congratulations on successfully launching the new service, fantastic work team!", th: "ยินดีด้วยกับการเปิดตัวบริการใหม่ สำเร็จลุล่วง เป็นผลงานที่ยอดเยี่ยมมากครับ!" },
        { en: "Feel free to reach out anytime if you need an extra pair of eyes on that pull request.", th: "ติดต่อมาได้ตลอดเลยนะครับถ้าต้องการคนช่วยตรวจดู Pull Request นั้น" }
      ]
    };

    const activeCatId = this.speakingLabCategory || "standup";
    const activeCat = categories.find(c => c.id === activeCatId) || categories[0];
    const phrases = phraseMap[activeCatId] || phraseMap.standup;

    container.innerHTML = `
      <div class="space-y-6 animate-fadeIn max-w-4xl mx-auto pb-12">
        <!-- Header Banner -->
        <div class="text-center space-y-2 max-w-2xl mx-auto">
          <span class="px-3.5 py-1 rounded-full bg-red-100 dark:bg-red-950/60 text-red-600 dark:text-red-400 text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5 shadow-xs">
            <span class="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            <span>AI Voice Recognition & Scoring</span>
          </span>
          <h1 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
            ห้องซ้อมพูดแยกหมวด (AI Speaking Lab)
          </h1>
          <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
            ฝึกพูดออกเสียงภาษาอังกฤษ 5 หมวดหมู่การทำงานจริง วิเคราะห์ความแม่นยำผ่าน Web Speech AI แบบเรียลไทม์ พร้อมสะสม XP และภารกิจประจำวัน
          </p>
        </div>

        <!-- 5 Category Pills Navigation -->
        <div class="flex items-center gap-2 p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-x-auto">
          ${categories.map(c => `
            <button onclick="window.app.switchSpeakingCategory('${c.id}')"
              class="flex-1 min-w-[140px] py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 shrink-0 ${
                activeCatId === c.id
                  ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-sm border border-slate-200/50 dark:border-slate-700'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }">
              <span class="text-base">${c.emoji}</span>
              <span class="truncate">${c.label}</span>
            </button>
          `).join("")}
        </div>

        <!-- Active Category Header Card -->
        <div class="p-4 sm:p-5 rounded-2xl bg-indigo-50/60 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div class="space-y-1">
            <div class="flex items-center gap-2">
              <span class="text-xl">${activeCat.emoji}</span>
              <h2 class="text-sm sm:text-base font-bold text-indigo-950 dark:text-indigo-200">
                ${activeCat.label}
              </h2>
              <span class="text-[10px] px-2 py-0.5 rounded-md font-bold uppercase bg-indigo-200/60 dark:bg-indigo-900/60 text-indigo-800 dark:text-indigo-300">
                ${activeCat.badge}
              </span>
            </div>
            <p class="text-xs text-slate-600 dark:text-slate-300">
              ${activeCat.description}
            </p>
          </div>
          <span class="text-xs font-bold text-amber-500 shrink-0 flex items-center gap-1 self-start sm:self-auto">
            <span>✨</span>
            <span>+15 XP ต่อประโยคที่ผ่านเกณฑ์</span>
          </span>
        </div>

        <!-- Phrases Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          ${phrases.map((p, idx) => `
            <div class="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4">
              <div class="space-y-2">
                <div class="flex items-start justify-between gap-3">
                  <span class="w-6 h-6 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-xs font-bold flex items-center justify-center shrink-0">
                    ${idx + 1}
                  </span>
                  <button onclick="window.speechEngine.speak('${p.en.replace(/'/g, "\\'")}')"
                    class="p-2 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 rounded-xl transition-all shrink-0 active:scale-95"
                    title="ฟังเสียงเจ้าของภาษา">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/></svg>
                  </button>
                </div>
                <p class="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-snug font-serif">
                  "${p.en}"
                </p>
                <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
                  ${p.th}
                </p>
              </div>

              <div class="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex flex-col gap-2">
                <div class="flex items-center justify-between gap-2">
                  <span id="standalone-mic-status-${idx}" class="text-[11px] text-slate-400 truncate">
                    แตะไมค์แล้วเริ่มอ่านประโยค
                  </span>
                  <button id="standalone-mic-btn-${idx}" onclick="window.app.startStandaloneSpeaking(${idx}, '${p.en.replace(/'/g, "\\'")}')"
                    class="px-3.5 py-1.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs rounded-xl shadow-xs transition-all flex items-center gap-1.5 shrink-0 active:scale-95">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"/></svg>
                    <span>แตะเพื่อพูด</span>
                  </button>
                </div>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    `;
  }

  switchSpeakingCategory(categoryKey) {
    window.soundFx.playClick();
    this.speakingLabCategory = categoryKey;
    const container = document.getElementById("main-content-view");
    if (container && this.currentView === "speaking-lab") {
      this.renderSpeakingLabView(container);
    }
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
          window.storageManager.recordQuestProgress("speakSentences", 1);
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
  // VIEW: GRAMMAR CHEAT SHEET HUB (12 TENSES, IN/ON/AT MAP, 100 IRREGULAR VERBS)
  // =========================================================================
  renderCheatSheetView(container) {
    const activeTab = this.cheatSheetTab || "tenses";
    const searchQuery = (this.irregularVerbSearch || "").toLowerCase().trim();

    // 100 Most Common Irregular Verbs Database
    const irregularVerbs = [
      { v1: "be", v2: "was / were", v3: "been", th: "เป็น, อยู่, คือ", pattern: "A-B-C" },
      { v1: "become", v2: "became", v3: "become", th: "กลายเป็น", pattern: "A-B-A" },
      { v1: "begin", v2: "began", v3: "begun", th: "เริ่มต้น", pattern: "A-B-C" },
      { v1: "break", v2: "broke", v3: "broken", th: "แตก, หัก, พัง", pattern: "A-B-C" },
      { v1: "bring", v2: "brought", v3: "brought", th: "นำมา, พามา", pattern: "A-B-B" },
      { v1: "build", v2: "built", v3: "built", th: "สร้าง, ประกอบ", pattern: "A-B-B" },
      { v1: "buy", v2: "bought", v3: "bought", th: "ซื้อ", pattern: "A-B-B" },
      { v1: "catch", v2: "caught", v3: "caught", th: "จับ, คว้า, ดักจับ", pattern: "A-B-B" },
      { v1: "choose", v2: "chose", v3: "chosen", th: "เลือก", pattern: "A-B-C" },
      { v1: "come", v2: "came", v3: "come", th: "มา", pattern: "A-B-A" },
      { v1: "cost", v2: "cost", v3: "cost", th: "มีราคา, มีต้นทุน", pattern: "A-A-A" },
      { v1: "cut", v2: "cut", v3: "cut", th: "ตัด, ลดทอน", pattern: "A-A-A" },
      { v1: "do", v2: "did", v3: "done", th: "ทำ, ปฏิบัติ", pattern: "A-B-C" },
      { v1: "draw", v2: "drew", v3: "drawn", th: "วาด, ดึงดูด", pattern: "A-B-C" },
      { v1: "drink", v2: "drank", v3: "drunk", th: "ดื่ม", pattern: "A-B-C" },
      { v1: "drive", v2: "drove", v3: "driven", th: "ขับรถ, ขับเคลื่อน", pattern: "A-B-C" },
      { v1: "eat", v2: "ate", v3: "eaten", th: "กิน, รับประทาน", pattern: "A-B-C" },
      { v1: "fall", v2: "fell", v3: "fallen", th: "ตก, ร่วง, ล้ม", pattern: "A-B-C" },
      { v1: "feed", v2: "fed", v3: "fed", th: "ป้อน, ส่งข้อมูลเข้า", pattern: "A-B-B" },
      { v1: "feel", v2: "felt", v3: "felt", th: "รู้สึก", pattern: "A-B-B" },
      { v1: "fight", v2: "fought", v3: "fought", th: "ต่อสู้", pattern: "A-B-B" },
      { v1: "find", v2: "found", v3: "found", th: "ค้นหา, พบเจอ", pattern: "A-B-B" },
      { v1: "fly", v2: "flew", v3: "flown", th: "บิน", pattern: "A-B-C" },
      { v1: "forget", v2: "forgot", v3: "forgotten", th: "ลืม", pattern: "A-B-C" },
      { v1: "forgive", v2: "forgave", v3: "forgiven", th: "ให้อภัย", pattern: "A-B-C" },
      { v1: "freeze", v2: "froze", v3: "frozen", th: "แช่แข็ง, ค้าง, หยุดนิ่ง", pattern: "A-B-C" },
      { v1: "get", v2: "got", v3: "got / gotten", th: "ได้รับ, กลายเป็น", pattern: "A-B-C" },
      { v1: "give", v2: "gave", v3: "given", th: "ให้, มอบให้", pattern: "A-B-C" },
      { v1: "go", v2: "went", v3: "gone", th: "ไป", pattern: "A-B-C" },
      { v1: "grow", v2: "grew", v3: "grown", th: "เติบโต, ปลูก", pattern: "A-B-C" },
      { v1: "hang", v2: "hung", v3: "hung", th: "แขวน, ค้าง", pattern: "A-B-B" },
      { v1: "have", v2: "had", v3: "had", th: "มี, รับประทาน", pattern: "A-B-B" },
      { v1: "hear", v2: "heard", v3: "heard", th: "ได้ยิน", pattern: "A-B-B" },
      { v1: "hide", v2: "hid", v3: "hidden", th: "ซ่อน, ปิดบัง", pattern: "A-B-C" },
      { v1: "hit", v2: "hit", v3: "hit", th: "ตี, ชน, ยิงรีเควสต์", pattern: "A-A-A" },
      { v1: "hold", v2: "held", v3: "held", th: "ถือ, ยึด, จัดประชุม", pattern: "A-B-B" },
      { v1: "hurt", v2: "hurt", v3: "hurt", th: "เจ็บปวด, ทำร้าย", pattern: "A-A-A" },
      { v1: "keep", v2: "kept", v3: "kept", th: "เก็บรักษา, ทำต่อไป", pattern: "A-B-B" },
      { v1: "know", v2: "knew", v3: "known", th: "รู้, รู้จัก", pattern: "A-B-C" },
      { v1: "lead", v2: "led", v3: "led", th: "นำทาง, เป็นผู้นำ", pattern: "A-B-B" },
      { v1: "learn", v2: "learned / learnt", v3: "learned / learnt", th: "เรียนรู้", pattern: "A-B-B" },
      { v1: "leave", v2: "left", v3: "left", th: "ออกจาก, ทิ้งไว้", pattern: "A-B-B" },
      { v1: "lend", v2: "lent", v3: "lent", th: "ให้ยืม", pattern: "A-B-B" },
      { v1: "let", v2: "let", v3: "let", th: "อนุญาต, ปล่อยให้", pattern: "A-A-A" },
      { v1: "lie", v2: "lay", v3: "lain", th: "นอนราบ, วางอยู่", pattern: "A-B-C" },
      { v1: "light", v2: "lit", v3: "lit", th: "จุดไฟ, ส่องสว่าง", pattern: "A-B-B" },
      { v1: "lose", v2: "lost", v3: "lost", th: "สูญหาย, พ่ายแพ้", pattern: "A-B-B" },
      { v1: "make", v2: "made", v3: "made", th: "ทำ, สร้าง", pattern: "A-B-B" },
      { v1: "mean", v2: "meant", v3: "meant", th: "หมายถึง, ตั้งใจ", pattern: "A-B-B" },
      { v1: "meet", v2: "met", v3: "met", th: "พบปะ, เจอ", pattern: "A-B-B" },
      { v1: "pay", v2: "paid", v3: "paid", th: "จ่ายเงิน, ชำระ", pattern: "A-B-B" },
      { v1: "put", v2: "put", v3: "put", th: "วาง, ใส่", pattern: "A-A-A" },
      { v1: "quit", v2: "quit", v3: "quit", th: "เลิก, ยุติ, ออกจากงาน", pattern: "A-A-A" },
      { v1: "read", v2: "read (เรด)", v3: "read (เรด)", th: "อ่าน", pattern: "A-B-B" },
      { v1: "ride", v2: "rode", v3: "ridden", th: "ขี่, โดยสาร", pattern: "A-B-C" },
      { v1: "ring", v2: "rang", v3: "rung", th: "สั่นกระดิ่ง, โทรหา", pattern: "A-B-C" },
      { v1: "rise", v2: "rose", v3: "risen", th: "ลอยขึ้น, เพิ่มขึ้น", pattern: "A-B-C" },
      { v1: "run", v2: "ran", v3: "run", th: "วิ่ง, ดำเนินระบบ", pattern: "A-B-A" },
      { v1: "say", v2: "said", v3: "said", th: "พูด, บอก", pattern: "A-B-B" },
      { v1: "see", v2: "saw", v3: "seen", th: "เห็น", pattern: "A-B-C" },
      { v1: "seek", v2: "sought", v3: "sought", th: "ค้นหา, แสวงหา", pattern: "A-B-B" },
      { v1: "sell", v2: "sold", v3: "sold", th: "ขาย", pattern: "A-B-B" },
      { v1: "send", v2: "sent", v3: "sent", th: "ส่ง", pattern: "A-B-B" },
      { v1: "set", v2: "set", v3: "set", th: "ตั้งค่า, วางระบบ", pattern: "A-A-A" },
      { v1: "shake", v2: "shook", v3: "shaken", th: "เขย่า, สั่น", pattern: "A-B-C" },
      { v1: "shine", v2: "shone", v3: "shone", th: "ส่องแสง, เปล่งประกาย", pattern: "A-B-B" },
      { v1: "shoot", v2: "shot", v3: "shot", th: "ยิง, ถ่ายภาพ", pattern: "A-B-B" },
      { v1: "show", v2: "showed", v3: "shown", th: "แสดง, ให้ดู", pattern: "A-B-C" },
      { v1: "shut", v2: "shut", v3: "shut", th: "ปิด, ยุติการทำงาน", pattern: "A-A-A" },
      { v1: "sing", v2: "sang", v3: "sung", th: "ร้องเพลง", pattern: "A-B-C" },
      { v1: "sink", v2: "sank", v3: "sunk", th: "จมลง", pattern: "A-B-C" },
      { v1: "sit", v2: "sat", v3: "sat", th: "นั่ง", pattern: "A-B-B" },
      { v1: "sleep", v2: "slept", v3: "slept", th: "นอนหลับ", pattern: "A-B-B" },
      { v1: "speak", v2: "spoke", v3: "spoken", th: "พูด, สนทนา", pattern: "A-B-C" },
      { v1: "spend", v2: "spent", v3: "spent", th: "ใช้จ่าย, ใช้เวลา", pattern: "A-B-B" },
      { v1: "split", v2: "split", v3: "split", th: "แยก, แบ่งส่วน", pattern: "A-A-A" },
      { v1: "spread", v2: "spread", v3: "spread", th: "แพร่กระจาย, ขยายผล", pattern: "A-A-A" },
      { v1: "stand", v2: "stood", v3: "stood", th: "ยืน, คงอยู่", pattern: "A-B-B" },
      { v1: "steal", v2: "stole", v3: "stolen", th: "ขโมย, โจรกรรม", pattern: "A-B-C" },
      { v1: "stick", v2: "stuck", v3: "stuck", th: "ติดอยู่, เกาะติด", pattern: "A-B-B" },
      { v1: "strike", v2: "struck", v3: "struck", th: "ชน, ตี, ประท้วง", pattern: "A-B-B" },
      { v1: "swear", v2: "swore", v3: "sworn", th: "สาบาน", pattern: "A-B-C" },
      { v1: "sweep", v2: "swept", v3: "swept", th: "กวาด, เคลียร์พื้นที่", pattern: "A-B-B" },
      { v1: "swim", v2: "swam", v3: "swum", th: "ว่ายน้ำ", pattern: "A-B-C" },
      { v1: "take", v2: "took", v3: "taken", th: "นำไป, รับเอา, ใช้เวลา", pattern: "A-B-C" },
      { v1: "teach", v2: "taught", v3: "taught", th: "สอน", pattern: "A-B-B" },
      { v1: "tear", v2: "tore", v3: "torn", th: "ฉีกขาด", pattern: "A-B-C" },
      { v1: "tell", v2: "told", v3: "told", th: "บอก, เล่า", pattern: "A-B-B" },
      { v1: "think", v2: "thought", v3: "thought", th: "คิด, ไตร่ตรอง", pattern: "A-B-B" },
      { v1: "throw", v2: "threw", v3: "thrown", th: "ขว้าง, โยน, พ่น Exception", pattern: "A-B-C" },
      { v1: "understand", v2: "understood", v3: "understood", th: "เข้าใจ", pattern: "A-B-B" },
      { v1: "wake", v2: "woke", v3: "woken", th: "ตื่น, ปลุก", pattern: "A-B-C" },
      { v1: "wear", v2: "wore", v3: "worn", th: "สวมใส่, สึกหรอ", pattern: "A-B-C" },
      { v1: "win", v2: "won", v3: "won", th: "ชนะ, คว้าชัย", pattern: "A-B-B" },
      { v1: "withdraw", v2: "withdrew", v3: "withdrawn", th: "ถอนเงิน, ถอนตัว", pattern: "A-B-C" },
      { v1: "write", v2: "wrote", v3: "written", th: "เขียน, บันทึก", pattern: "A-B-C" }
    ];

    const filteredVerbs = irregularVerbs.filter(v => {
      if (!searchQuery) return true;
      return (
        v.v1.toLowerCase().includes(searchQuery) ||
        v.v2.toLowerCase().includes(searchQuery) ||
        v.v3.toLowerCase().includes(searchQuery) ||
        v.th.toLowerCase().includes(searchQuery)
      );
    });

    container.innerHTML = `
      <div class="space-y-6 animate-fadeIn max-w-5xl mx-auto pb-16">
        <!-- Hub Top Banner -->
        <div class="relative overflow-hidden rounded-3xl bg-gradient-to-r from-amber-600 via-amber-700 to-indigo-900 text-white p-6 sm:p-8 shadow-xl">
          <div class="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div class="max-w-xl space-y-2">
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold uppercase tracking-wider text-amber-100">
                <span>📑</span>
                <span>Visual Summary Hub • แผ่นสรุปไวยากรณ์ด่วน</span>
              </span>
              <h1 class="text-2xl sm:text-4xl font-extrabold tracking-tight">
                Grammar Cheat Sheet Matrix
              </h1>
              <p class="text-xs sm:text-sm text-amber-100/90 leading-relaxed">
                สรุปโครงสร้างสำคัญในหน้าเดียว: ตารางสูตร 12 Tenses (Active vs Passive), แผนผัง In/On/At Map จำง่าย, และตารางกริยา 3 ช่อง 100 คำที่พบบ่อยที่สุดพร้อมเสียงอ่าน Native TTS
              </p>
            </div>
            <div class="flex items-center gap-2 self-start md:self-auto shrink-0">
              <button onclick="window.app.navigateTo('dashboard')"
                class="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/20 transition-all flex items-center gap-1.5 active:scale-95">
                <span>← กลับ Dashboard</span>
              </button>
            </div>
          </div>
        </div>

        <!-- 3 Primary Matrix Tabs -->
        <div class="flex items-center gap-2 p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-x-auto">
          <button onclick="window.app.switchCheatSheetTab('tenses')"
            class="flex-1 min-w-[150px] py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 shrink-0 ${
              activeTab === 'tenses'
                ? 'bg-white dark:bg-slate-800 text-amber-600 dark:text-amber-400 shadow-sm border border-slate-200/50 dark:border-slate-700'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }">
            <span>⏰</span>
            <span>12 Tenses Formula Matrix</span>
          </button>

          <button onclick="window.app.switchCheatSheetTab('prepositions')"
            class="flex-1 min-w-[150px] py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 shrink-0 ${
              activeTab === 'prepositions'
                ? 'bg-white dark:bg-slate-800 text-amber-600 dark:text-amber-400 shadow-sm border border-slate-200/50 dark:border-slate-700'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }">
            <span>🗺️</span>
            <span>In, On, At Visual Map</span>
          </button>

          <button onclick="window.app.switchCheatSheetTab('verbs')"
            class="flex-1 min-w-[150px] py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 shrink-0 ${
              activeTab === 'verbs'
                ? 'bg-white dark:bg-slate-800 text-amber-600 dark:text-amber-400 shadow-sm border border-slate-200/50 dark:border-slate-700'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }">
            <span>🔤</span>
            <span>100 Irregular Verbs Table</span>
          </button>
        </div>

        <!-- Tab 1: 12 Tenses Formula Matrix -->
        ${activeTab === 'tenses' ? `
          <div class="space-y-6">
            <div class="p-4 sm:p-5 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-900/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h2 class="text-sm sm:text-base font-bold text-amber-950 dark:text-amber-200 flex items-center gap-2">
                  <span>ตารางสรุปพิมพ์เขียว 12 Tenses (The Complete Tense Matrix)</span>
                </h2>
                <p class="text-xs text-slate-600 dark:text-slate-300 mt-1">
                  เทียบสูตรโครงสร้าง Active (ประธานทำเอง) vs Passive (ประธานถูกกระทำ), คำบอกเวลา (Time Markers) และตัวอย่างประโยคจริง
                </p>
              </div>
              <span class="text-xs font-bold px-3 py-1 rounded-xl bg-amber-200/60 dark:bg-amber-900/60 text-amber-900 dark:text-amber-300 shrink-0 self-start sm:self-auto">
                12 Tenses • Active & Passive
              </span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <!-- 1. Present Simple -->
              <div class="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
                <div class="flex items-center justify-between">
                  <span class="px-2.5 py-0.5 rounded-lg text-[10px] font-black uppercase bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300">Present</span>
                  <span class="text-xs text-slate-400 font-mono">Simple</span>
                </div>
                <h3 class="text-base font-black text-slate-900 dark:text-white">Present Simple</h3>
                <div class="text-xs text-slate-500 dark:text-slate-400">ใช้กับ: กิจวัตร, ความจริงทั่วไป, งานที่เกิดขึ้นประจำวัน</div>
                <div class="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-2xl space-y-1 text-xs font-mono">
                  <div><strong class="text-indigo-600 dark:text-indigo-400">Active:</strong> S + V.1 (-s/-es)</div>
                  <div><strong class="text-purple-600 dark:text-purple-400">Passive:</strong> S + is/am/are + V.3</div>
                </div>
                <div class="text-[11px] text-slate-400">
                  <span class="font-bold text-slate-500 dark:text-slate-300">Keywords:</span> always, usually, every day, often, runs
                </div>
                <div class="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-start justify-between gap-2">
                  <p class="text-xs italic text-slate-700 dark:text-slate-300">"The server backs up all user databases nightly."</p>
                  <button onclick="window.speechEngine.speak('The server backs up all user databases nightly.')" class="p-1 text-indigo-500 hover:scale-110 shrink-0">🔊</button>
                </div>
              </div>

              <!-- 2. Present Continuous -->
              <div class="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
                <div class="flex items-center justify-between">
                  <span class="px-2.5 py-0.5 rounded-lg text-[10px] font-black uppercase bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300">Present</span>
                  <span class="text-xs text-slate-400 font-mono">Continuous</span>
                </div>
                <h3 class="text-base font-black text-slate-900 dark:text-white">Present Continuous</h3>
                <div class="text-xs text-slate-500 dark:text-slate-400">ใช้กับ: กำลังทำอยู่ ณ วินาทีนี้, โปรเจกต์ชั่วคราว</div>
                <div class="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-2xl space-y-1 text-xs font-mono">
                  <div><strong class="text-indigo-600 dark:text-indigo-400">Active:</strong> S + is/am/are + V.ing</div>
                  <div><strong class="text-purple-600 dark:text-purple-400">Passive:</strong> S + is/am/are + being + V.3</div>
                </div>
                <div class="text-[11px] text-slate-400">
                  <span class="font-bold text-slate-500 dark:text-slate-300">Keywords:</span> now, right now, at the moment, currently
                </div>
                <div class="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-start justify-between gap-2">
                  <p class="text-xs italic text-slate-700 dark:text-slate-300">"We are currently rolling out the new security patch."</p>
                  <button onclick="window.speechEngine.speak('We are currently rolling out the new security patch.')" class="p-1 text-indigo-500 hover:scale-110 shrink-0">🔊</button>
                </div>
              </div>

              <!-- 3. Present Perfect -->
              <div class="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
                <div class="flex items-center justify-between">
                  <span class="px-2.5 py-0.5 rounded-lg text-[10px] font-black uppercase bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300">Present</span>
                  <span class="text-xs text-slate-400 font-mono">Perfect</span>
                </div>
                <h3 class="text-base font-black text-slate-900 dark:text-white">Present Perfect</h3>
                <div class="text-xs text-slate-500 dark:text-slate-400">ใช้กับ: เพิ่งเสร็จสิ้น, ทำตั้งแต่อดีตถึงปัจจุบัน, ประสบการณ์</div>
                <div class="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-2xl space-y-1 text-xs font-mono">
                  <div><strong class="text-indigo-600 dark:text-indigo-400">Active:</strong> S + have/has + V.3</div>
                  <div><strong class="text-purple-600 dark:text-purple-400">Passive:</strong> S + have/has + been + V.3</div>
                </div>
                <div class="text-[11px] text-slate-400">
                  <span class="font-bold text-slate-500 dark:text-slate-300">Keywords:</span> already, just, yet, since, for, ever
                </div>
                <div class="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-start justify-between gap-2">
                  <p class="text-xs italic text-slate-700 dark:text-slate-300">"The pipeline has successfully deployed the release."</p>
                  <button onclick="window.speechEngine.speak('The pipeline has successfully deployed the release.')" class="p-1 text-indigo-500 hover:scale-110 shrink-0">🔊</button>
                </div>
              </div>

              <!-- 4. Present Perfect Continuous -->
              <div class="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
                <div class="flex items-center justify-between">
                  <span class="px-2.5 py-0.5 rounded-lg text-[10px] font-black uppercase bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300">Present</span>
                  <span class="text-xs text-slate-400 font-mono">Perf Con</span>
                </div>
                <h3 class="text-base font-black text-slate-900 dark:text-white">Present Perfect Con</h3>
                <div class="text-xs text-slate-500 dark:text-slate-400">ใช้กับ: ทำต่อเนื่องไม่หยุดตั้งแต่อดีตและยังทำอยู่</div>
                <div class="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-2xl space-y-1 text-xs font-mono">
                  <div><strong class="text-indigo-600 dark:text-indigo-400">Active:</strong> S + have/has + been + V.ing</div>
                  <div><strong class="text-purple-600 dark:text-purple-400">Passive:</strong> (Rarely used in Passive)</div>
                </div>
                <div class="text-[11px] text-slate-400">
                  <span class="font-bold text-slate-500 dark:text-slate-300">Keywords:</span> all day, for 3 hours, since morning
                </div>
                <div class="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-start justify-between gap-2">
                  <p class="text-xs italic text-slate-700 dark:text-slate-300">"I have been debugging this memory leak for 4 hours."</p>
                  <button onclick="window.speechEngine.speak('I have been debugging this memory leak for 4 hours.')" class="p-1 text-indigo-500 hover:scale-110 shrink-0">🔊</button>
                </div>
              </div>

              <!-- 5. Past Simple -->
              <div class="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
                <div class="flex items-center justify-between">
                  <span class="px-2.5 py-0.5 rounded-lg text-[10px] font-black uppercase bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300">Past</span>
                  <span class="text-xs text-slate-400 font-mono">Simple</span>
                </div>
                <h3 class="text-base font-black text-slate-900 dark:text-white">Past Simple</h3>
                <div class="text-xs text-slate-500 dark:text-slate-400">ใช้กับ: เกิดขึ้นและจบลงแล้วในอดีต มีเวลาระบุชัดเจน</div>
                <div class="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-2xl space-y-1 text-xs font-mono">
                  <div><strong class="text-indigo-600 dark:text-indigo-400">Active:</strong> S + V.2</div>
                  <div><strong class="text-purple-600 dark:text-purple-400">Passive:</strong> S + was/were + V.3</div>
                </div>
                <div class="text-[11px] text-slate-400">
                  <span class="font-bold text-slate-500 dark:text-slate-300">Keywords:</span> yesterday, last night, in 2025, 2 days ago
                </div>
                <div class="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-start justify-between gap-2">
                  <p class="text-xs italic text-slate-700 dark:text-slate-300">"The database crashed at midnight yesterday."</p>
                  <button onclick="window.speechEngine.speak('The database crashed at midnight yesterday.')" class="p-1 text-indigo-500 hover:scale-110 shrink-0">🔊</button>
                </div>
              </div>

              <!-- 6. Past Continuous -->
              <div class="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
                <div class="flex items-center justify-between">
                  <span class="px-2.5 py-0.5 rounded-lg text-[10px] font-black uppercase bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300">Past</span>
                  <span class="text-xs text-slate-400 font-mono">Continuous</span>
                </div>
                <h3 class="text-base font-black text-slate-900 dark:text-white">Past Continuous</h3>
                <div class="text-xs text-slate-500 dark:text-slate-400">ใช้กับ: กำลังดำเนินอยู่ในอดีตตอนที่มีอีกเหตุการณ์แทรกเข้ามา</div>
                <div class="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-2xl space-y-1 text-xs font-mono">
                  <div><strong class="text-indigo-600 dark:text-indigo-400">Active:</strong> S + was/were + V.ing</div>
                  <div><strong class="text-purple-600 dark:text-purple-400">Passive:</strong> S + was/were + being + V.3</div>
                </div>
                <div class="text-[11px] text-slate-400">
                  <span class="font-bold text-slate-500 dark:text-slate-300">Keywords:</span> while, when, as, at 8 PM yesterday
                </div>
                <div class="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-start justify-between gap-2">
                  <p class="text-xs italic text-slate-700 dark:text-slate-300">"While I was testing the API, the network went down."</p>
                  <button onclick="window.speechEngine.speak('While I was testing the API, the network went down.')" class="p-1 text-indigo-500 hover:scale-110 shrink-0">🔊</button>
                </div>
              </div>

              <!-- 7. Past Perfect -->
              <div class="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
                <div class="flex items-center justify-between">
                  <span class="px-2.5 py-0.5 rounded-lg text-[10px] font-black uppercase bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300">Past</span>
                  <span class="text-xs text-slate-400 font-mono">Perfect</span>
                </div>
                <h3 class="text-base font-black text-slate-900 dark:text-white">Past Perfect</h3>
                <div class="text-xs text-slate-500 dark:text-slate-400">ใช้กับ: เกิดขึ้นและเสร็จก่อนอีกเหตุการณ์หนึ่งในอดีต (เกิดก่อน)</div>
                <div class="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-2xl space-y-1 text-xs font-mono">
                  <div><strong class="text-indigo-600 dark:text-indigo-400">Active:</strong> S + had + V.3</div>
                  <div><strong class="text-purple-600 dark:text-purple-400">Passive:</strong> S + had + been + V.3</div>
                </div>
                <div class="text-[11px] text-slate-400">
                  <span class="font-bold text-slate-500 dark:text-slate-300">Keywords:</span> before, after, by the time
                </div>
                <div class="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-start justify-between gap-2">
                  <p class="text-xs italic text-slate-700 dark:text-slate-300">"We had tested the code before we merged it into main."</p>
                  <button onclick="window.speechEngine.speak('We had tested the code before we merged it into main.')" class="p-1 text-indigo-500 hover:scale-110 shrink-0">🔊</button>
                </div>
              </div>

              <!-- 8. Past Perfect Continuous -->
              <div class="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
                <div class="flex items-center justify-between">
                  <span class="px-2.5 py-0.5 rounded-lg text-[10px] font-black uppercase bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300">Past</span>
                  <span class="text-xs text-slate-400 font-mono">Perf Con</span>
                </div>
                <h3 class="text-base font-black text-slate-900 dark:text-white">Past Perfect Con</h3>
                <div class="text-xs text-slate-500 dark:text-slate-400">ใช้กับ: ทำต่อเนื่องมาเป็นเวลานานก่อนจะมีเหตุการณ์อดีตตามมา</div>
                <div class="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-2xl space-y-1 text-xs font-mono">
                  <div><strong class="text-indigo-600 dark:text-indigo-400">Active:</strong> S + had + been + V.ing</div>
                  <div><strong class="text-purple-600 dark:text-purple-400">Passive:</strong> (Rarely used)</div>
                </div>
                <div class="text-[11px] text-slate-400">
                  <span class="font-bold text-slate-500 dark:text-slate-300">Keywords:</span> had been doing ... before
                </div>
                <div class="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-start justify-between gap-2">
                  <p class="text-xs italic text-slate-700 dark:text-slate-300">"They had been working on the migration before the alert fired."</p>
                  <button onclick="window.speechEngine.speak('They had been working on the migration before the alert fired.')" class="p-1 text-indigo-500 hover:scale-110 shrink-0">🔊</button>
                </div>
              </div>

              <!-- 9. Future Simple -->
              <div class="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
                <div class="flex items-center justify-between">
                  <span class="px-2.5 py-0.5 rounded-lg text-[10px] font-black uppercase bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300">Future</span>
                  <span class="text-xs text-slate-400 font-mono">Simple</span>
                </div>
                <h3 class="text-base font-black text-slate-900 dark:text-white">Future Simple</h3>
                <div class="text-xs text-slate-500 dark:text-slate-400">ใช้กับ: สิ่งที่จะเกิดขึ้นในอนาคต, การตัดสินใจทันที, สัญญา</div>
                <div class="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-2xl space-y-1 text-xs font-mono">
                  <div><strong class="text-indigo-600 dark:text-indigo-400">Active:</strong> S + will + V.inf</div>
                  <div><strong class="text-purple-600 dark:text-purple-400">Passive:</strong> S + will be + V.3</div>
                </div>
                <div class="text-[11px] text-slate-400">
                  <span class="font-bold text-slate-500 dark:text-slate-300">Keywords:</span> tomorrow, next week, soon, in 2030
                </div>
                <div class="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-start justify-between gap-2">
                  <p class="text-xs italic text-slate-700 dark:text-slate-300">"The new cluster will be provisioned tomorrow morning."</p>
                  <button onclick="window.speechEngine.speak('The new cluster will be provisioned tomorrow morning.')" class="p-1 text-indigo-500 hover:scale-110 shrink-0">🔊</button>
                </div>
              </div>

              <!-- 10. Future Continuous -->
              <div class="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
                <div class="flex items-center justify-between">
                  <span class="px-2.5 py-0.5 rounded-lg text-[10px] font-black uppercase bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300">Future</span>
                  <span class="text-xs text-slate-400 font-mono">Continuous</span>
                </div>
                <h3 class="text-base font-black text-slate-900 dark:text-white">Future Continuous</h3>
                <div class="text-xs text-slate-500 dark:text-slate-400">ใช้กับ: จะกำลังกระทำอยู่ ณ เวลาที่ระบุชัดเจนในอนาคต</div>
                <div class="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-2xl space-y-1 text-xs font-mono">
                  <div><strong class="text-indigo-600 dark:text-indigo-400">Active:</strong> S + will be + V.ing</div>
                  <div><strong class="text-purple-600 dark:text-purple-400">Passive:</strong> (Rarely used)</div>
                </div>
                <div class="text-[11px] text-slate-400">
                  <span class="font-bold text-slate-500 dark:text-slate-300">Keywords:</span> this time tomorrow, at 10 AM tomorrow
                </div>
                <div class="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-start justify-between gap-2">
                  <p class="text-xs italic text-slate-700 dark:text-slate-300">"This time tomorrow, we will be running the load tests."</p>
                  <button onclick="window.speechEngine.speak('This time tomorrow, we will be running the load tests.')" class="p-1 text-indigo-500 hover:scale-110 shrink-0">🔊</button>
                </div>
              </div>

              <!-- 11. Future Perfect -->
              <div class="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
                <div class="flex items-center justify-between">
                  <span class="px-2.5 py-0.5 rounded-lg text-[10px] font-black uppercase bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300">Future</span>
                  <span class="text-xs text-slate-400 font-mono">Perfect</span>
                </div>
                <h3 class="text-base font-black text-slate-900 dark:text-white">Future Perfect</h3>
                <div class="text-xs text-slate-500 dark:text-slate-400">ใช้กับ: จะเสร็จสมบูรณ์เรียบร้อยเมื่อถึงเวลาในอนาคต</div>
                <div class="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-2xl space-y-1 text-xs font-mono">
                  <div><strong class="text-indigo-600 dark:text-indigo-400">Active:</strong> S + will have + V.3</div>
                  <div><strong class="text-purple-600 dark:text-purple-400">Passive:</strong> S + will have been + V.3</div>
                </div>
                <div class="text-[11px] text-slate-400">
                  <span class="font-bold text-slate-500 dark:text-slate-300">Keywords:</span> by Friday, by the end of next month
                </div>
                <div class="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-start justify-between gap-2">
                  <p class="text-xs italic text-slate-700 dark:text-slate-300">"By Friday, our team will have finished the refactor."</p>
                  <button onclick="window.speechEngine.speak('By Friday, our team will have finished the refactor.')" class="p-1 text-indigo-500 hover:scale-110 shrink-0">🔊</button>
                </div>
              </div>

              <!-- 12. Future Perfect Continuous -->
              <div class="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
                <div class="flex items-center justify-between">
                  <span class="px-2.5 py-0.5 rounded-lg text-[10px] font-black uppercase bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300">Future</span>
                  <span class="text-xs text-slate-400 font-mono">Perf Con</span>
                </div>
                <h3 class="text-base font-black text-slate-900 dark:text-white">Future Perfect Con</h3>
                <div class="text-xs text-slate-500 dark:text-slate-400">ใช้กับ: จะทำต่อเนื่องมาครบระยะเวลาหนึ่งในอนาคต</div>
                <div class="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-2xl space-y-1 text-xs font-mono">
                  <div><strong class="text-indigo-600 dark:text-indigo-400">Active:</strong> S + will have been + V.ing</div>
                  <div><strong class="text-purple-600 dark:text-purple-400">Passive:</strong> (Rarely used)</div>
                </div>
                <div class="text-[11px] text-slate-400">
                  <span class="font-bold text-slate-500 dark:text-slate-300">Keywords:</span> for 5 years by next year
                </div>
                <div class="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-start justify-between gap-2">
                  <p class="text-xs italic text-slate-700 dark:text-slate-300">"By December, I will have been writing Go for 3 years."</p>
                  <button onclick="window.speechEngine.speak('By December, I will have been writing Go for 3 years.')" class="p-1 text-indigo-500 hover:scale-110 shrink-0">🔊</button>
                </div>
              </div>
            </div>
          </div>
        ` : ''}

        <!-- Tab 2: Prepositions Visual Map (IN, ON, AT) -->
        ${activeTab === 'prepositions' ? `
          <div class="space-y-6">
            <div class="p-4 sm:p-5 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/30 border border-indigo-200/60 dark:border-indigo-900/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h2 class="text-sm sm:text-base font-bold text-indigo-950 dark:text-indigo-200 flex items-center gap-2">
                  <span>แผนผังปีรามิด In, On, At: จากกว้างที่สุด สู่จุดเป๊ะที่สุด</span>
                </h2>
                <p class="text-xs text-slate-600 dark:text-slate-300 mt-1">
                  กฎจำง่าย: กว้างสุดใช้ <strong>IN</strong>, เจาะจงขึ้นมาใช้ <strong>ON</strong>, และเป๊ะที่สุดใช้ <strong>AT</strong>
                </p>
              </div>
              <span class="text-xs font-bold px-3 py-1 rounded-xl bg-indigo-200/60 dark:bg-indigo-900/60 text-indigo-900 dark:text-indigo-300 shrink-0 self-start sm:self-auto">
                Time & Place Matrix
              </span>
            </div>

            <!-- Inverted Pyramid Cards -->
            <div class="space-y-4">
              <!-- LEVEL 1: IN (BIGGEST & MOST GENERAL) -->
              <div class="p-6 rounded-3xl bg-gradient-to-r from-blue-900/90 to-indigo-900/90 text-white border border-blue-700/60 shadow-md space-y-4">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <span class="w-8 h-8 rounded-xl bg-blue-500/30 border border-blue-400/40 text-blue-200 flex items-center justify-center font-black text-sm">IN</span>
                    <h3 class="text-lg font-black text-white">IN: ระดับกว้างใหญ่ • ห้วงเวลา & อาณาเขตปิด (General)</h3>
                  </div>
                  <span class="text-xs px-2.5 py-0.5 rounded-full bg-blue-500/30 text-blue-200 border border-blue-400/40 font-mono">Broad / Enclosed</span>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div class="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 space-y-2">
                    <h4 class="font-bold text-blue-200 flex items-center gap-1.5">
                      <span>⏰</span>
                      <span>IN กับเวลา (Time: ศตวรรษ, ปี, ฤดู, เดือน, ช่วงวัน)</span>
                    </h4>
                    <p class="text-slate-200 leading-relaxed font-mono">
                      • in the 21st century<br>
                      • in 2026 / in the 90s<br>
                      • in October / in summer<br>
                      • in the morning / afternoon / evening
                    </p>
                    <p class="pt-2 text-[11px] text-blue-200/90 border-t border-white/10">
                      💡 ตัวอย่าง: <em>"We plan to migrate the database in Q4."</em>
                    </p>
                  </div>
                  <div class="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 space-y-2">
                    <h4 class="font-bold text-blue-200 flex items-center gap-1.5">
                      <span>📍</span>
                      <span>IN กับสถานที่ (Place: ประเทศ, เมือง, อาคาร, พื้นที่ปิด)</span>
                    </h4>
                    <p class="text-slate-200 leading-relaxed font-mono">
                      • in Singapore / in Bangkok<br>
                      • in the server room / in the office<br>
                      • in a car / in a taxi (ยานพาหนะยืนไม่ได้)<br>
                      • in the cloud / in the us-central1 region
                    </p>
                    <p class="pt-2 text-[11px] text-blue-200/90 border-t border-white/10">
                      💡 ตัวอย่าง: <em>"The cluster runs in the us-central1 region."</em>
                    </p>
                  </div>
                </div>
              </div>

              <!-- LEVEL 2: ON (MORE SPECIFIC & SURFACES) -->
              <div class="p-6 rounded-3xl bg-gradient-to-r from-emerald-900/90 to-teal-900/90 text-white border border-emerald-700/60 shadow-md space-y-4">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <span class="w-8 h-8 rounded-xl bg-emerald-500/30 border border-emerald-400/40 text-emerald-200 flex items-center justify-center font-black text-sm">ON</span>
                    <h3 class="text-lg font-black text-white">ON: ระดับเจาะจง • วันที่, พื้นผิว & สื่ออิเล็กทรอนิกส์ (Specific)</h3>
                  </div>
                  <span class="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/30 text-emerald-200 border border-emerald-400/40 font-mono">Specific / Surface</span>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div class="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 space-y-2">
                    <h4 class="font-bold text-emerald-200 flex items-center gap-1.5">
                      <span>⏰</span>
                      <span>ON กับเวลา (Time: วันในสัปดาห์, วันที่, วันพิเศษ)</span>
                    </h4>
                    <p class="text-slate-200 leading-relaxed font-mono">
                      • on Monday / on weekends<br>
                      • on October 20th<br>
                      • on my birthday / on New Year's Day<br>
                      • on deployment day
                    </p>
                    <p class="pt-2 text-[11px] text-emerald-200/90 border-t border-white/10">
                      💡 ตัวอย่าง: <em>"The sprint demo will take place on Friday afternoon."</em>
                    </p>
                  </div>
                  <div class="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 space-y-2">
                    <h4 class="font-bold text-emerald-200 flex items-center gap-1.5">
                      <span>📍</span>
                      <span>ON กับสถานที่ (Place: บนพื้นผิว, ถนน, ระบบ/แพลตฟอร์ม)</span>
                    </h4>
                    <p class="text-slate-200 leading-relaxed font-mono">
                      • on the table / on the wall<br>
                      • on Sukhumvit Road / on the 3rd floor<br>
                      • on the bus / on the train (ยานพาหนะยืนได้)<br>
                      • on GitHub / on Slack / on AWS EC2
                    </p>
                    <p class="pt-2 text-[11px] text-emerald-200/90 border-t border-white/10">
                      💡 ตัวอย่าง: <em>"I dropped the logs on the incident channel on Slack."</em>
                    </p>
                  </div>
                </div>
              </div>

              <!-- LEVEL 3: AT (EXACT & PRECISE) -->
              <div class="p-6 rounded-3xl bg-gradient-to-r from-rose-900/90 to-purple-900/90 text-white border border-rose-700/60 shadow-md space-y-4">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <span class="w-8 h-8 rounded-xl bg-rose-500/30 border border-rose-400/40 text-rose-200 flex items-center justify-center font-black text-sm">AT</span>
                    <h3 class="text-lg font-black text-white">AT: ระดับเป๊ะที่สุด • เวลาตามเข็มนาฬิกา & พิกัดจุด (Precise Point)</h3>
                  </div>
                  <span class="text-xs px-2.5 py-0.5 rounded-full bg-rose-500/30 text-rose-200 border border-rose-400/40 font-mono">Exact / Point</span>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div class="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 space-y-2">
                    <h4 class="font-bold text-rose-200 flex items-center gap-1.5">
                      <span>⏰</span>
                      <span>AT กับเวลา (Time: เวลาเป๊ะ ๆ, จุดเวลาสำคัญ)</span>
                    </h4>
                    <p class="text-slate-200 leading-relaxed font-mono">
                      • at 9:00 AM / at 14:30 UTC<br>
                      • at noon / at midnight<br>
                      • at runtime / at startup<br>
                      • at the moment / at sunset
                    </p>
                    <p class="pt-2 text-[11px] text-rose-200/90 border-t border-white/10">
                      💡 ตัวอย่าง: <em>"The backup cron job runs at 02:00 UTC."</em>
                    </p>
                  </div>
                  <div class="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 space-y-2">
                    <h4 class="font-bold text-rose-200 flex items-center gap-1.5">
                      <span>📍</span>
                      <span>AT กับสถานที่ (Place: เลขที่อยู่เฉพาะ, จุดพิกัด, พิกัดโค้ด)</span>
                    </h4>
                    <p class="text-slate-200 leading-relaxed font-mono">
                      • at 123 Silom Road<br>
                      • at the airport / at the bus stop<br>
                      • at the top of the page<br>
                      • at line 42 in main.go
                    </p>
                    <p class="pt-2 text-[11px] text-rose-200/90 border-t border-white/10">
                      💡 ตัวอย่าง: <em>"The NullPointerException occurred at line 84."</em>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ` : ''}

        <!-- Tab 3: 100 Irregular Verbs Table -->
        ${activeTab === 'verbs' ? `
          <div class="space-y-4">
            <!-- Search & Filter Bar -->
            <div class="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div class="relative flex-1 max-w-md">
                <input type="text"
                  value="${this.irregularVerbSearch || ''}"
                  placeholder="ค้นหากริยา 3 ช่อง (เช่น do, broke, eaten, กิน...)"
                  oninput="window.app.searchIrregularVerbs(this.value)"
                  class="w-full pl-9 pr-4 py-2 rounded-xl text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500">
                <svg class="w-4 h-4 text-slate-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
              </div>
              <span class="text-xs text-slate-500 dark:text-slate-400 font-medium">
                พบ <strong class="text-amber-600 dark:text-amber-400 font-bold">${filteredVerbs.length}</strong> จาก 100 คำ
              </span>
            </div>

            <!-- Responsive Verbs Table -->
            <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-xs">
              <div class="overflow-x-auto">
                <table class="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr class="bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-800 text-[11px] font-bold uppercase text-slate-500 dark:text-slate-400">
                      <th class="py-3 px-4">#</th>
                      <th class="py-3 px-4">V.1 (Infinitive)</th>
                      <th class="py-3 px-4">V.2 (Past Simple)</th>
                      <th class="py-3 px-4">V.3 (Past Participle)</th>
                      <th class="py-3 px-4">ความหมายภาษาไทย</th>
                      <th class="py-3 px-4 text-center">แบบรูป</th>
                      <th class="py-3 px-4 text-right">เสียงอ่าน</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-slate-100 dark:divide-slate-800/80">
                    ${filteredVerbs.map((v, idx) => `
                      <tr class="hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors">
                        <td class="py-3 px-4 font-mono text-slate-400">${idx + 1}</td>
                        <td class="py-3 px-4 font-bold text-slate-900 dark:text-white font-mono text-sm">${v.v1}</td>
                        <td class="py-3 px-4 font-bold text-indigo-600 dark:text-indigo-400 font-mono text-sm">${v.v2}</td>
                        <td class="py-3 px-4 font-bold text-purple-600 dark:text-purple-400 font-mono text-sm">${v.v3}</td>
                        <td class="py-3 px-4 text-slate-700 dark:text-slate-300 font-medium">${v.th}</td>
                        <td class="py-3 px-4 text-center">
                          <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold ${
                            v.pattern === 'A-A-A' ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300' :
                            v.pattern === 'A-B-B' ? 'bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300' :
                            v.pattern === 'A-B-A' ? 'bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300' :
                            'bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300'
                          }">
                            ${v.pattern}
                          </span>
                        </td>
                        <td class="py-3 px-4 text-right">
                          <button onclick="window.speechEngine.speak('${v.v1}, ${v.v2}, ${v.v3}')"
                            class="p-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 transition-all active:scale-95"
                            title="ฟังเสียงอ่านกริยาทั้ง 3 ช่อง">
                            🔊
                          </button>
                        </td>
                      </tr>
                    `).join("")}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ` : ''}
      </div>
    `;
  }

  switchCheatSheetTab(tabKey) {
    window.soundFx.playClick();
    this.cheatSheetTab = tabKey;
    const container = document.getElementById("main-content-view");
    if (container && this.currentView === "cheat-sheet") {
      this.renderCheatSheetView(container);
    }
  }

  searchIrregularVerbs(query) {
    this.irregularVerbSearch = query;
    const container = document.getElementById("main-content-view");
    if (container && this.currentView === "cheat-sheet") {
      this.renderCheatSheetView(container);
    }
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
                จำได้แล้ว <span id="vocab-learned-count" class="text-indigo-600 dark:text-indigo-400 font-black">${learnedCount}</span> / ${totalVocabs} คำ (${progressPercent}%)
              </div>
            </div>
          </div>
          <div class="w-full sm:w-48 bg-slate-100 dark:bg-slate-800 rounded-full h-2.5 overflow-hidden">
            <div id="vocab-progress-bar" class="bg-gradient-to-r from-purple-500 to-indigo-600 h-2.5 rounded-full transition-all duration-500" style="width: ${progressPercent}%"></div>
          </div>
        </div>

        <!-- Filters & Search Toolbar -->
        <div class="space-y-3">
          <!-- Search Input -->
          <div class="relative">
            <input type="text"
              id="vocab-search-input"
              placeholder="ค้นหาคำศัพท์ ความหมายภาษาไทย หรือตัวอย่างประโยค..."
              value="${(this.vocabSearch || '').replace(/"/g, '&quot;')}"
              oninput="window.app.searchVocab(this.value)"
              class="w-full pl-10 pr-24 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
            />
            <svg class="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
            <button id="vocab-clear-search-btn"
              onclick="window.app.clearVocabSearch()"
              class="absolute right-3 top-2.5 px-2 py-0.5 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 bg-slate-100 dark:bg-slate-800 rounded-lg ${this.vocabSearch ? '' : 'hidden'}">✕ ล้างคำค้น</button>
          </div>

          <!-- Category Filter Pills -->
          <div class="flex flex-wrap items-center gap-2">
            ${(() => {
              const savedCount = (window.storageManager.getSavedVocab() || []).length;
              return [
                { id: "all", label: "🌟 ทั้งหมด" },
                { id: "saved", label: `⭐ คำที่บันทึกไว้ (${savedCount})` },
                { id: "tech-devops", label: "💻 Tech & DevOps" },
                { id: "workplace-business", label: "💼 Workplace" },
                { id: "phrasal-idioms", label: "⚡ Phrasal Verbs" },
                { id: "daily-oxford", label: "📚 Oxford 3000™" }
              ];
            })().map(cat => `
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
      if (this.vocabFilter === 'saved') {
        return `
          <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-10 text-center space-y-4 max-w-lg mx-auto">
            <div class="text-4xl">⭐</div>
            <h3 class="text-base font-bold text-slate-900 dark:text-white">ยังไม่มีคำศัพท์ที่บันทึกไว้ในสมุดส่วนตัว</h3>
            <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              เมื่อคุณอ่านบทความใน <strong>Reading Lab</strong> แล้วแตะที่คำศัพท์เพื่อดูความหมาย ให้กดปุ่มดาว ⭐ ที่มุมบนขวาของหน้าต่างแปลศัพท์ เพื่อบันทึกคำศัพท์มาทบทวนในหน้านี้ได้ทันทีครับ
            </p>
            <div class="pt-2 flex flex-wrap items-center justify-center gap-3">
              <button onclick="window.app.navigateTo('reading-lab')" class="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-md transition-all active:scale-95">
                ไปฝึกอ่านใน Reading Lab ➔
              </button>
              <button onclick="window.app.resetVocabFilters()" class="px-4 py-2.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold rounded-xl">
                ดูคำศัพท์ทั่วไปทั้งหมด
              </button>
            </div>
          </div>
        `;
      }
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
    const isSaved = window.storageManager.isWordSaved(currentCard.word);
    const voiceScore = this.flashcardVoiceScore;
    const feedback = voiceScore ? this.getVoiceScoreFeedback(voiceScore.score) : null;

    return `
      <div class="space-y-4 max-w-lg mx-auto">
        <!-- Progress Counter -->
        <div class="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 px-1">
          <span>ใบที่ <strong class="text-slate-900 dark:text-white font-bold">${this.currentFlashcardIndex + 1}</strong> จาก ${filtered.length} ใบ</span>
          <span class="text-indigo-600 dark:text-indigo-400 font-semibold">${currentCard.categoryLabel}</span>
        </div>

        <!-- 3D Flashcard Container -->
        <div class="perspective-1000 w-full min-h-[410px] sm:min-h-[430px] h-[420px] sm:h-[450px] cursor-pointer select-none" onclick="window.app.toggleFlashcardFlip()">
          <div class="card-inner w-full h-full relative rounded-3xl transition-transform duration-500 transform-style-3d ${this.isCardFlipped ? 'is-flipped' : ''}">
            
            <!-- FRONT FACE -->
            <div class="card-front absolute inset-0 bg-gradient-to-br from-indigo-900 via-slate-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-7 flex flex-col justify-between border border-indigo-700/50 shadow-2xl backface-hidden">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <span class="px-2.5 py-1 rounded-lg text-[10px] font-black uppercase bg-indigo-500/30 text-indigo-200 border border-indigo-400/30">
                    CEFR ${currentCard.level}
                  </span>
                  <span class="text-xs text-indigo-300 font-medium">
                    ${currentCard.pos}
                  </span>
                </div>
                <div class="flex items-center gap-1.5">
                  <button onclick="event.stopPropagation(); window.app.toggleSaveWordFromFlashcard('${currentCard.word.replace(/'/g, "\\'")}')"
                    class="p-2 rounded-2xl ${isSaved ? 'bg-amber-400/20 text-amber-300 border border-amber-400/40' : 'bg-white/10 text-white/70 hover:text-white'} hover:bg-white/20 active:scale-95 transition-all shadow-md"
                    title="${isSaved ? 'คำที่บันทึกแล้ว (คลิกเพื่อยกเลิก)' : 'บันทึกลงสมุดคำศัพท์ส่วนตัว'}">
                    <span class="text-sm">${isSaved ? '⭐' : '☆'}</span>
                  </button>
                  <button onclick="event.stopPropagation(); window.speechEngine.speak('${currentCard.word.replace(/'/g, "\\'")}')"
                    class="p-2 rounded-2xl bg-white/10 hover:bg-white/20 active:scale-95 text-white transition-all shadow-md"
                    title="ฟังเสียงอ่านออกเสียง">
                    <svg class="w-5 h-5 text-indigo-300" fill="currentColor" viewBox="0 0 20 20"><path d="M10 3.5a.75.75 0 00-1.28-.53l-3.97 3.97H2.75A1.75 1.75 0 001 8.69v2.62c0 .966.784 1.75 1.75 1.75h2l3.97 3.97a.75.75 0 001.28-.53V3.5zM14.5 10a4.5 4.5 0 00-1.32-3.18.75.75 0 111.06-1.06A6 6 0 0116 10a6 6 0 01-1.76 4.24.75.75 0 01-1.06-1.06A4.5 4.5 0 0014.5 10z"/></svg>
                  </button>
                </div>
              </div>

              <!-- Center Word & Pronunciation Test Area -->
              <div class="text-center my-auto space-y-2.5">
                <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-white drop-shadow-md">
                  ${currentCard.word}
                </h2>
                <div class="inline-block px-3 py-1 rounded-full bg-white/10 text-xs sm:text-sm font-mono text-indigo-200">
                  ${currentCard.ipa}
                </div>

                <!-- Voice Scoring / Recording Status Block -->
                <div class="pt-1 w-full max-w-sm mx-auto">
                  ${this.flashcardIsListening ? `
                    <div class="p-3 rounded-2xl bg-red-950/80 border border-red-500/60 shadow-lg text-center space-y-1.5 animate-pulse backdrop-blur-sm">
                      <div class="flex items-center justify-center gap-2 text-red-200 font-bold text-xs">
                        <span class="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping"></span>
                        <span>กำลังฟังเสียง... กรุณาออกเสียง "${currentCard.word}"</span>
                      </div>
                      <p class="text-[11px] text-red-300/80">พูดเข้าไมโครโฟนได้เลยครับ</p>
                    </div>
                  ` : voiceScore && feedback ? `
                    <div class="p-3 sm:p-3.5 rounded-2xl bg-slate-900/95 border ${feedback.passed ? 'border-emerald-500/60 shadow-emerald-500/20' : 'border-amber-500/60 shadow-amber-500/20'} shadow-xl space-y-2 backdrop-blur-md">
                      <div class="flex items-center justify-between">
                        <div class="flex items-center gap-1.5 font-black text-xs sm:text-sm ${feedback.textColor}">
                          <span class="text-base">${feedback.emoji}</span>
                          <span>${feedback.label}</span>
                        </div>
                        <span class="px-2.5 py-0.5 rounded-full text-xs font-black shadow-sm ${feedback.badgeClass}">
                          ความเหมือน ${voiceScore.score}%
                        </span>
                      </div>
                      <div class="w-full bg-slate-800 rounded-full h-2 overflow-hidden border border-white/10">
                        <div class="h-full rounded-full transition-all duration-700 ease-out ${feedback.barColor}" style="width: ${voiceScore.score}%"></div>
                      </div>
                      <p class="text-[11px] sm:text-xs text-slate-200 leading-snug">
                        ${feedback.message}
                      </p>
                      <div class="text-[10px] text-slate-400 font-mono truncate">
                        ได้ยินว่า: <span class="text-white font-sans font-semibold">"${voiceScore.spokenText || '(ไม่ได้ยินคำ)'}"</span>
                      </div>
                      <div class="pt-1.5 border-t border-white/10 flex items-center justify-center gap-2">
                        <button onclick="event.stopPropagation(); window.speechEngine.speak('${currentCard.word.replace(/'/g, "\\'")}')"
                          class="px-2.5 py-1 rounded-xl bg-white/10 hover:bg-white/20 text-indigo-200 text-[11px] font-bold flex items-center gap-1 transition-all">
                          🔊 ฟังต้นฉบับ
                        </button>
                        <button onclick="event.stopPropagation(); window.app.startFlashcardSpeaking('${currentCard.word.replace(/'/g, "\\'")}')"
                          class="px-3 py-1 rounded-xl bg-red-600 hover:bg-red-700 text-white text-[11px] font-bold flex items-center gap-1.5 shadow-md transition-all active:scale-95">
                          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"/></svg>
                          <span>ซ้อมพูดใหม่</span>
                        </button>
                      </div>
                    </div>
                  ` : `
                    <button onclick="event.stopPropagation(); window.app.startFlashcardSpeaking('${currentCard.word.replace(/'/g, "\\'")}')"
                      class="px-4 py-2.5 rounded-2xl bg-gradient-to-r from-red-600 via-rose-600 to-pink-600 hover:from-red-500 hover:to-rose-500 active:scale-95 text-white font-bold text-xs shadow-lg shadow-red-900/40 flex items-center justify-center gap-2 transition-all mx-auto">
                      <svg class="w-4 h-4 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"/></svg>
                      <span>🎙️ กดเพื่อทดสอบการออกเสียงคำนี้</span>
                    </button>
                  `}
                </div>
              </div>

              <div class="text-center pt-2.5 border-t border-white/10">
                <span class="text-xs text-indigo-300/80 flex items-center justify-center gap-1.5 animate-pulse">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
                  <span>แตะที่การ์ดเพื่อพลิกดูคำแปลและความหมาย</span>
                </span>
              </div>
            </div>

            <!-- BACK FACE -->
            <div class="card-back absolute inset-0 bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-3xl p-6 sm:p-7 flex flex-col justify-between border border-indigo-200 dark:border-indigo-900/60 shadow-2xl backface-hidden transform-rotate-y-180 overflow-y-auto">
              <div class="space-y-3">
                <div class="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
                  <div class="flex items-center gap-2">
                    <span class="text-base font-bold text-slate-900 dark:text-white">${currentCard.word}</span>
                    <span class="text-xs font-mono text-slate-400 dark:text-slate-500">${currentCard.ipa}</span>
                  </div>
                  <div class="flex items-center gap-1.5">
                    <button onclick="event.stopPropagation(); window.app.startFlashcardSpeaking('${currentCard.word.replace(/'/g, "\\'")}')"
                      class="p-2 rounded-xl ${this.flashcardIsListening ? 'bg-red-600 text-white recording-pulse' : 'bg-red-50 dark:bg-red-950/60 text-red-600 dark:text-red-400 hover:bg-red-100'} transition-all shadow-xs"
                      title="ซ้อมออกเสียงคำนี้">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"/></svg>
                    </button>
                    <button onclick="event.stopPropagation(); window.speechEngine.speak('${currentCard.word.replace(/'/g, "\\'")}')"
                      class="p-2 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 transition-colors shadow-xs"
                      title="ฟังเสียงอ่าน">
                      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 3.5a.75.75 0 00-1.28-.53l-3.97 3.97H2.75A1.75 1.75 0 001 8.69v2.62c0 .966.784 1.75 1.75 1.75h2l3.97 3.97a.75.75 0 001.28-.53V3.5zM14.5 10a4.5 4.5 0 00-1.32-3.18.75.75 0 111.06-1.06A6 6 0 0116 10a6 6 0 01-1.76 4.24.75.75 0 01-1.06-1.06A4.5 4.5 0 0014.5 10z"/></svg>
                    </button>
                  </div>
                </div>

                <!-- Voice Score Summary on Back Face if scored -->
                ${voiceScore && feedback ? `
                  <div class="p-2.5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex items-center justify-between text-xs">
                    <div class="flex items-center gap-1.5 font-bold ${feedback.textColor}">
                      <span>${feedback.emoji}</span>
                      <span>${feedback.label}</span>
                    </div>
                    <span class="px-2.5 py-0.5 rounded-full text-xs font-black ${feedback.badgeClass}">
                      ความเหมือน ${voiceScore.score}%
                    </span>
                  </div>
                ` : ''}

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
            const scoreData = this.browseVocabScores[v.id];
            const isSaved = window.storageManager.isWordSaved(v.word);
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
                      <button onclick="window.app.toggleSaveWordFromFlashcard('${v.word.replace(/'/g, "\\'")}')"
                        class="p-1.5 rounded-xl ${isSaved ? 'text-amber-500 bg-amber-50 dark:bg-amber-950/40' : 'text-slate-400 hover:text-amber-500 bg-slate-100 dark:bg-slate-800'} transition-colors"
                        title="${isSaved ? 'คำที่บันทึกแล้ว' : 'บันทึกลงสมุดศัพท์'}">
                        <span class="text-xs">${isSaved ? '⭐' : '☆'}</span>
                      </button>
                      <button onclick="window.speechEngine.speak('${v.word.replace(/'/g, "\\'")}')"
                        class="p-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 hover:scale-110 transition-transform"
                        title="ฟังเสียงอ่าน">
                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 3.5a.75.75 0 00-1.28-.53l-3.97 3.97H2.75A1.75 1.75 0 001 8.69v2.62c0 .966.784 1.75 1.75 1.75h2l3.97 3.97a.75.75 0 001.28-.53V3.5zM14.5 10a4.5 4.5 0 00-1.32-3.18.75.75 0 111.06-1.06A6 6 0 0116 10a6 6 0 01-1.76 4.24.75.75 0 01-1.06-1.06A4.5 4.5 0 0014.5 10z"/></svg>
                      </button>
                      <button onclick="window.app.startBrowseVocabSpeaking('${v.id}', '${v.word.replace(/'/g, "\\'")}')"
                        class="p-1.5 rounded-xl ${scoreData?.isListening ? 'bg-red-600 text-white recording-pulse' : 'bg-slate-100 dark:bg-slate-800 text-red-500 hover:bg-red-50 dark:hover:bg-red-950/50'} hover:scale-110 transition-all"
                        title="ทดสอบการออกเสียงคำนี้">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"/></svg>
                      </button>
                    </div>
                  </div>

                  <h3 class="text-lg font-black text-slate-900 dark:text-white flex items-center justify-between">
                    <span>${v.word}</span>
                    <span class="text-sm font-bold text-indigo-600 dark:text-indigo-400 font-sans">${v.th}</span>
                  </h3>
                  <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    ${v.definition}
                  </p>

                  ${scoreData?.isListening ? `
                    <div class="p-2 rounded-xl bg-red-950/60 border border-red-500/50 text-[11px] text-red-200 flex items-center gap-2 animate-pulse">
                      <span class="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
                      <span>กำลังฟังเสียง... ออกเสียง: "${v.word}"</span>
                    </div>
                  ` : scoreData && scoreData.feedback ? `
                    <div class="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex items-center justify-between text-xs">
                      <div class="flex items-center gap-1.5 font-bold ${scoreData.feedback.textColor}">
                        <span>${scoreData.feedback.emoji}</span>
                        <span>${scoreData.feedback.label}</span>
                      </div>
                      <span class="px-2 py-0.5 rounded-full text-xs font-black ${scoreData.feedback.badgeClass}">
                        ${scoreData.score}%
                      </span>
                    </div>
                  ` : ''}

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
    const contentArea = document.getElementById("vocab-content-area");
    if (contentArea) {
      this.renderVocabContentArea();
    } else {
      const container = document.getElementById("main-content-view");
      if (container && this.currentView === "vocabulary") {
        this.renderVocabularyView(container);
      }
    }
  }

  loadAllVocab() {
    window.soundFx.playClick();
    this.browseVisibleCount = 9999;
    const contentArea = document.getElementById("vocab-content-area");
    if (contentArea) {
      this.renderVocabContentArea();
    } else {
      const container = document.getElementById("main-content-view");
      if (container && this.currentView === "vocabulary") {
        this.renderVocabularyView(container);
      }
    }
  }

  getFilteredVocabList(vocabs) {
    let baseList = vocabs;
    if (this.vocabFilter === 'saved') {
      const savedWords = window.storageManager.getSavedVocab() || [];
      const vocabMap = new Map();
      vocabs.forEach(v => {
        if (v.word) vocabMap.set(v.word.toLowerCase(), v);
      });

      baseList = [];
      savedWords.forEach(sw => {
        const found = vocabMap.get(sw.toLowerCase());
        if (found) {
          baseList.push(found);
        } else {
          baseList.push({
            id: `saved-${sw.toLowerCase()}`,
            word: sw,
            ipa: "",
            pos: "Vocab",
            level: "Personal",
            category: "saved",
            categoryLabel: "⭐ My Saved",
            th: "คำศัพท์ที่บันทึกไว้ในสมุดส่วนตัว",
            definition: "Saved from Reading Lab or Dictionary lookup",
            exampleEn: `I saved "${sw}" to review later in my vocabulary notebook.`,
            exampleTh: `ฉันบันทึกคำว่า "${sw}" ไว้ทบทวนในสมุดคำศัพท์ส่วนตัว`
          });
        }
      });
    }

    return baseList.filter(v => {
      const matchCat = this.vocabFilter === 'all' || this.vocabFilter === 'saved' || v.category === this.vocabFilter;
      if (!matchCat) return false;
      if (!this.vocabSearch) return true;
      const q = this.vocabSearch.toLowerCase().trim();
      return (
        (v.word && v.word.toLowerCase().includes(q)) ||
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
    this.flashcardVoiceScore = null;
    this.flashcardIsListening = false;
    const container = document.getElementById("main-content-view");
    if (container && this.currentView === "vocabulary") {
      this.renderVocabularyView(container);
    }
  }

  setVocabMode(mode) {
    window.soundFx.playClick();
    this.vocabMode = mode;
    this.isCardFlipped = false;
    this.flashcardVoiceScore = null;
    this.flashcardIsListening = false;
    const container = document.getElementById("main-content-view");
    if (container && this.currentView === "vocabulary") {
      this.renderVocabularyView(container);
    }
  }

  renderVocabContentArea() {
    const contentArea = document.getElementById("vocab-content-area");
    if (!contentArea) return;
    const vocabs = window.vocabData || [];
    const filtered = this.getFilteredVocabList(vocabs);
    contentArea.innerHTML = this.vocabMode === 'flashcard' 
      ? this.renderFlashcardMode(filtered) 
      : this.renderBrowseVocabMode(filtered);
  }

  searchVocab(query) {
    this.vocabSearch = query;
    this.currentFlashcardIndex = 0;
    this.isCardFlipped = false;
    this.browseVisibleCount = 24;
    this.flashcardVoiceScore = null;
    this.flashcardIsListening = false;

    const clearBtn = document.getElementById("vocab-clear-search-btn");
    if (clearBtn) {
      if (query && query.trim()) {
        clearBtn.classList.remove("hidden");
      } else {
        clearBtn.classList.add("hidden");
      }
    }

    const contentArea = document.getElementById("vocab-content-area");
    if (contentArea) {
      this.renderVocabContentArea();
    } else {
      const container = document.getElementById("main-content-view");
      if (container && this.currentView === "vocabulary") {
        this.renderVocabularyView(container);
      }
    }
  }

  clearVocabSearch() {
    this.vocabSearch = "";
    this.flashcardVoiceScore = null;
    this.flashcardIsListening = false;
    const inputEl = document.getElementById("vocab-search-input");
    if (inputEl) {
      inputEl.value = "";
      inputEl.focus();
    }
    this.searchVocab("");
  }

  resetVocabFilters() {
    this.vocabFilter = "all";
    this.vocabSearch = "";
    this.currentFlashcardIndex = 0;
    this.isCardFlipped = false;
    this.browseVisibleCount = 24;
    this.flashcardVoiceScore = null;
    this.flashcardIsListening = false;
    const container = document.getElementById("main-content-view");
    if (container && this.currentView === "vocabulary") {
      this.renderVocabularyView(container);
    }
  }

  toggleFlashcardFlip() {
    window.soundFx.playFlip();
    this.isCardFlipped = !this.isCardFlipped;
    window.storageManager.recordQuestProgress("reviewFlashcards", 1);
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
      this.flashcardVoiceScore = null;
      this.flashcardIsListening = false;
      this.renderVocabContentArea();
    }
  }

  prevFlashcard() {
    if (this.currentFlashcardIndex > 0) {
      window.soundFx.playClick();
      this.currentFlashcardIndex -= 1;
      this.isCardFlipped = false;
      this.flashcardVoiceScore = null;
      this.flashcardIsListening = false;
      this.renderVocabContentArea();
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
    this.flashcardVoiceScore = null;
    this.flashcardIsListening = false;
    this.renderVocabContentArea();
  }

  markVocabLearned(vocabId) {
    if (!this.reviewedVocabIds.has(vocabId)) {
      this.reviewedVocabIds.add(vocabId);
      try {
        localStorage.setItem("engmastery_reviewed_vocabs", JSON.stringify([...this.reviewedVocabIds]));
      } catch (e) {}
      window.storageManager.addXP(5);
      window.storageManager.recordQuestProgress("reviewFlashcards", 1);
      window.soundFx.playCorrect();
      this.renderHeaderStats();
      this.showToast("+5 XP! จำคำศัพท์ได้แล้ว เก่งมาก 🎉", "success");

      const vocabs = window.vocabData || [];
      const totalVocabs = vocabs.length;
      const learnedCount = [...this.reviewedVocabIds].filter(id => vocabs.some(v => v.id === id)).length;
      const progressPercent = totalVocabs > 0 ? Math.round((learnedCount / totalVocabs) * 100) : 0;

      const countEl = document.getElementById("vocab-learned-count");
      const barEl = document.getElementById("vocab-progress-bar");
      if (countEl) countEl.textContent = learnedCount;
      if (barEl) barEl.style.width = `${progressPercent}%`;

      this.renderVocabContentArea();
    }
  }

  toggleSaveWordFromFlashcard(word) {
    window.soundFx.playFlip();
    const res = window.storageManager.toggleSaveWord(word);
    if (res.saved) {
      this.showToast(`⭐ บันทึกคำว่า "${word}" ลงในสมุดคำศัพท์แล้ว`, "success");
    } else {
      this.showToast(`ลบคำว่า "${word}" ออกจากสมุดคำศัพท์แล้ว`, "info");
    }
    this.renderVocabContentArea();
  }

  /**
   * Tiered Pronunciation Feedback with Emojis and Encouraging Messages
   * Covers: 100% (สมบูรณ์แบบ), 90-99% (ยอดเยี่ยมมาก), 80-89% (ดีมาก ผ่านเกณฑ์),
   * 60-79% (เกือบแล้ว พยายามอีกนิด), 40-59% (กำลังมาถูกทาง พยายามอีกหน่อย), <40% (ลองใหม่อีกครั้ง)
   */
  getVoiceScoreFeedback(score) {
    if (score === 100) {
      return {
        tier: "perfect",
        emoji: "🌟💯",
        label: "สมบูรณ์แบบ!",
        message: "สำเนียงและการออกเสียงเป๊ะเทียบเท่าเจ้าของภาษา 100%",
        badgeClass: "bg-emerald-500 text-white shadow-emerald-500/30",
        textColor: "text-emerald-400",
        barColor: "bg-emerald-400",
        passed: true
      };
    } else if (score >= 90) {
      return {
        tier: "excellent",
        emoji: "🎉✨",
        label: "ยอดเยี่ยมมาก!",
        message: "ออกเสียงชัดเจนมาก ชัดถ้อยชัดคำระดับมืออาชีพ",
        badgeClass: "bg-teal-500 text-white shadow-teal-500/30",
        textColor: "text-teal-400",
        barColor: "bg-teal-400",
        passed: true
      };
    } else if (score >= 80) {
      return {
        tier: "good",
        emoji: "👍🔥",
        label: "ดีมาก ผ่านเกณฑ์แล้ว!",
        message: "ออกเสียงถูกต้อง ชัดเจน และสื่อสารได้อย่างมั่นใจ",
        badgeClass: "bg-blue-500 text-white shadow-blue-500/30",
        textColor: "text-blue-400",
        barColor: "bg-blue-400",
        passed: true
      };
    } else if (score >= 60) {
      return {
        tier: "almost",
        emoji: "💪😊",
        label: "เกือบแล้ว พยายามอีกนิด!",
        message: "ทำได้ดีแล้ว ลองเน้นเสียงสระและเสียงท้ายคำ (Ending sound) ให้ชัดอีกนิดนะ",
        badgeClass: "bg-amber-500 text-white shadow-amber-500/30",
        textColor: "text-amber-400",
        barColor: "bg-amber-400",
        passed: false
      };
    } else if (score >= 40) {
      return {
        tier: "keep_trying",
        emoji: "🎯💡",
        label: "กำลังมาถูกทาง พยายามอีกหน่อย!",
        message: "จังหวะเริ่มได้แล้ว ลองกดฟังเสียงต้นฉบับ 🔊 แล้วออกเสียงตามอีกครั้งนะ",
        badgeClass: "bg-orange-500 text-white shadow-orange-500/30",
        textColor: "text-orange-400",
        barColor: "bg-orange-400",
        passed: false
      };
    } else {
      return {
        tier: "retry",
        emoji: "🎧🌱",
        label: "ลองใหม่อีกครั้งนะ!",
        message: "ไม่ต้องกังวล! ลองกดปุ่ม 🔊 ฟังเสียงเจ้าของภาษา 1-2 ครั้ง แล้วพูดตามใหม่อีกทีนะ สู้ๆ",
        badgeClass: "bg-rose-500 text-white shadow-rose-500/30",
        textColor: "text-rose-400",
        barColor: "bg-rose-400",
        passed: false
      };
    }
  }

  /**
   * Start speech recognition for testing flashcard word pronunciation
   */
  startFlashcardSpeaking(targetWord) {
    if (!window.speechEngine) return;
    if (!window.speechEngine.hasRecognition) {
      this.showToast("เบราว์เซอร์ของคุณยังไม่รองรับระบบตรวจจับเสียงพูด (แนะนำให้ใช้ Google Chrome หรือ Microsoft Edge)", "error");
      return;
    }

    this.flashcardIsListening = true;
    this.renderVocabContentArea();

    window.speechEngine.listenAndScore(targetWord, {
      onStart: () => {
        window.soundFx.playClick();
      },
      onResult: (res) => {
        this.flashcardIsListening = false;
        const feedback = this.getVoiceScoreFeedback(res.score);
        this.flashcardVoiceScore = {
          score: res.score,
          spokenText: res.spokenText,
          feedback: feedback,
          passed: feedback.passed
        };

        if (feedback.passed) {
          window.soundFx.playCorrect();
          window.storageManager.addXP(10);
          window.storageManager.recordSpeakingDrill();
          window.storageManager.recordQuestProgress("speakSentences", 1);
          window.storageManager.recordQuestProgress("reviewFlashcards", 1);
          this.renderHeaderStats();
          this.showToast(`${feedback.emoji} ${feedback.label} (ความเหมือน ${res.score}%) รับ +10 XP!`, "success");
        } else {
          window.soundFx.playIncorrect();
          this.showToast(`${feedback.emoji} ${feedback.label} (ความเหมือน ${res.score}%)`, "info");
        }

        this.renderVocabContentArea();
      },
      onError: (err) => {
        this.flashcardIsListening = false;
        this.renderVocabContentArea();
        this.showToast(err.message || "เกิดข้อผิดพลาดในการฟังเสียง", "error");
      },
      onEnd: () => {
        if (this.flashcardIsListening) {
          this.flashcardIsListening = false;
          this.renderVocabContentArea();
        }
      }
    });
  }

  /**
   * Start speech recognition for testing pronunciation in Browse Vocab Table
   */
  startBrowseVocabSpeaking(vocabId, targetWord) {
    if (!window.speechEngine) return;
    if (!window.speechEngine.hasRecognition) {
      this.showToast("เบราว์เซอร์ของคุณยังไม่รองรับระบบตรวจจับเสียงพูด (แนะนำ Chrome/Edge)", "error");
      return;
    }

    this.browseVocabScores[vocabId] = { isListening: true };
    this.renderVocabContentArea();

    window.speechEngine.listenAndScore(targetWord, {
      onStart: () => {
        window.soundFx.playClick();
      },
      onResult: (res) => {
        const feedback = this.getVoiceScoreFeedback(res.score);
        this.browseVocabScores[vocabId] = {
          score: res.score,
          spokenText: res.spokenText,
          feedback: feedback,
          isListening: false,
          passed: feedback.passed
        };

        if (feedback.passed) {
          window.soundFx.playCorrect();
          window.storageManager.addXP(10);
          window.storageManager.recordSpeakingDrill();
          window.storageManager.recordQuestProgress("speakSentences", 1);
          window.storageManager.recordQuestProgress("reviewFlashcards", 1);
          this.renderHeaderStats();
          this.showToast(`${feedback.emoji} ${feedback.label} ("${targetWord}": ความเหมือน ${res.score}%) รับ +10 XP!`, "success");
        } else {
          window.soundFx.playIncorrect();
          this.showToast(`${feedback.emoji} ${feedback.label} ("${targetWord}": ความเหมือน ${res.score}%)`, "info");
        }

        this.renderVocabContentArea();
      },
      onError: (err) => {
        delete this.browseVocabScores[vocabId];
        this.renderVocabContentArea();
        this.showToast(err.message || "ไม่สามารถฟังเสียงได้", "error");
      },
      onEnd: () => {
        if (this.browseVocabScores[vocabId]?.isListening) {
          delete this.browseVocabScores[vocabId];
          this.renderVocabContentArea();
        }
      }
    });
  }

  getReadingList() {
    const base = window.readingData || [];
    const stories = window.shortStoriesData || [];
    const idSet = new Set(base.map(a => a.id));
    const merged = [...base];
    for (const s of stories) {
      if (!idSet.has(s.id)) {
        merged.push(s);
        idSet.add(s.id);
      }
    }
    return merged;
  }

  // =========================================================================
  // VIEW: READING LAB (GRADED READING PRACTICE & 100 SHORT STORIES)
  // =========================================================================
  renderReadingLabView(container, articleId) {
    const readingList = this.getReadingList();
    if (articleId) {
      const article = readingList.find(a => a.id === articleId) || readingList[0];
      this.renderReadingArticleDetail(container, article);
    } else {
      this.renderReadingListing(container, readingList);
    }
  }

  setReadingLevel(level) {
    this.selectedReadingLevel = level;
    this.readingPage = 1;
    window.soundFx.playClick();
    const container = document.getElementById("main-content-view");
    if (container) this.renderReadingListing(container, this.getReadingList());
  }

  setReadingCollection(col) {
    this.readingCollectionFilter = col;
    this.readingPage = 1;
    window.soundFx.playClick();
    const container = document.getElementById("main-content-view");
    if (container) this.renderReadingListing(container, this.getReadingList());
  }

  setReadingSearch(query) {
    this.readingSearchQuery = query;
    this.readingPage = 1;
    const container = document.getElementById("main-content-view");
    if (container) this.renderReadingListing(container, this.getReadingList());
    const searchInput = document.getElementById("reading-search-input");
    if (searchInput) {
      searchInput.focus();
      const valLen = searchInput.value.length;
      searchInput.setSelectionRange(valLen, valLen);
    }
  }

  setReadingPage(page) {
    this.readingPage = page;
    window.soundFx.playClick();
    const container = document.getElementById("main-content-view");
    if (container) this.renderReadingListing(container, this.getReadingList());
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  renderReadingListing(container, readingList) {
    const collectionFilter = this.readingCollectionFilter || "all";
    const levelFilter = this.selectedReadingLevel || "all";
    const searchQuery = (this.readingSearchQuery || "").trim().toLowerCase();

    // 1. Filter by collection
    let list = readingList;
    if (collectionFilter === "100-short-stories") {
      list = list.filter(a => a.collection === "100-short-stories");
    } else if (collectionFilter === "tech-cefr") {
      list = list.filter(a => a.collection !== "100-short-stories");
    }

    // 2. Filter by level
    if (levelFilter !== "all") {
      list = list.filter(a => a.level === levelFilter);
    }

    // 3. Filter by search query
    if (searchQuery) {
      list = list.filter(a => {
        const titleMatch = (a.title || "").toLowerCase().includes(searchQuery);
        const titleThMatch = (a.titleTh || "").toLowerCase().includes(searchQuery);
        const summaryMatch = (a.summary || "").toLowerCase().includes(searchQuery);
        const vocabMatch = (a.keyVocab || []).some(v => (v.word || "").toLowerCase().includes(searchQuery) || (v.th || "").toLowerCase().includes(searchQuery));
        return titleMatch || titleThMatch || summaryMatch || vocabMatch;
      });
    }

    // Counts for UI badges
    const totalAll = readingList.length;
    const storiesCount = readingList.filter(a => a.collection === "100-short-stories").length;
    const techCount = readingList.filter(a => a.collection !== "100-short-stories").length;
    const completedCount = Object.values(this.readingQuizSubmitted).filter(r => r && r.passed).length;
    const totalXPFromReading = Object.values(this.readingQuizSubmitted).reduce((sum, r) => sum + (r.passed ? r.xpEarned || 0 : 0), 0);

    // Pagination
    const itemsPerPage = this.readingItemsPerPage || 12;
    const totalPages = Math.ceil(list.length / itemsPerPage) || 1;
    const currentPage = Math.max(1, Math.min(this.readingPage || 1, totalPages));
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedItems = list.slice(startIndex, startIndex + itemsPerPage);

    container.innerHTML = `
      <div class="space-y-6 animate-fadeIn max-w-5xl mx-auto">
        <!-- Header Banner -->
        <div class="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-800 via-teal-700 to-indigo-900 text-white p-6 sm:p-8 shadow-xl">
          <div class="absolute -right-10 -bottom-10 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
          <div class="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div class="max-w-xl">
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold uppercase tracking-wider mb-3">
                <span>📖 Graded Reading & 100 Short Stories</span>
                <span>•</span>
                <span>${totalAll} เรื่อง & บทความ</span>
              </div>
              <h1 class="text-2xl sm:text-3xl font-black tracking-tight">
                ห้องฝึกการอ่าน (Reading Lab)
              </h1>
              <p class="mt-2 text-emerald-100 text-xs sm:text-sm leading-relaxed">
                ฝึกอ่านเรื่องสั้นภาษาอังกฤษจุใจกว่า ${totalAll} เรื่อง! ครอบคลุมทั้งชุด <strong>100 English Short Stories</strong> สอดแทรกคำศัพท์ใช้งานจริง และบทความ CEFR A1–C2 พร้อมระบบเสียงอ่าน Audio TTS, สลับดูคำแปล และควิซสะสม XP
              </p>
            </div>

            <!-- Stats Box -->
            <div class="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl md:w-56 shrink-0 flex flex-col justify-between">
              <div>
                <span class="text-xs uppercase text-emerald-200 font-medium">ความคืบหน้าการอ่าน</span>
                <div class="text-2xl font-black mt-1 text-white flex items-center gap-2">
                  <span>${completedCount} / ${totalAll}</span>
                  <span class="text-xs font-normal px-2 py-0.5 rounded bg-emerald-500/80 text-white">เรื่อง</span>
                </div>
                <p class="text-xs text-emerald-200 mt-1">รับไปแล้ว +${totalXPFromReading} XP</p>
              </div>
              <div class="mt-3 pt-3 border-t border-white/10">
                <div class="w-full bg-white/20 h-2 rounded-full overflow-hidden">
                  <div class="bg-emerald-400 h-full rounded-full transition-all duration-500" style="width: ${Math.round((completedCount / (totalAll || 1)) * 100)}%"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Filter & Search Control Panel -->
        <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 shadow-sm space-y-4">
          <!-- Collection Tabs -->
          <div class="flex items-center gap-2 overflow-x-auto pb-1">
            <button onclick="window.app.setReadingCollection('all')"
              class="px-4 py-2 rounded-2xl text-xs font-bold shrink-0 transition-all ${
                collectionFilter === 'all'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }">
              🌟 ทั้งหมด (${totalAll})
            </button>
            <button onclick="window.app.setReadingCollection('100-short-stories')"
              class="px-4 py-2 rounded-2xl text-xs font-bold shrink-0 transition-all ${
                collectionFilter === '100-short-stories'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }">
              📚 100 Short Stories (${storiesCount})
            </button>
            <button onclick="window.app.setReadingCollection('tech-cefr')"
              class="px-4 py-2 rounded-2xl text-xs font-bold shrink-0 transition-all ${
                collectionFilter === 'tech-cefr'
                  ? 'bg-teal-600 text-white shadow-md'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }">
              💼 Tech & Workplace CEFR (${techCount})
            </button>
          </div>

          <!-- Level Filter & Search Bar in one row -->
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-3 pt-2 border-t border-slate-100 dark:border-slate-800/80">
            <!-- CEFR Level Chips -->
            <div class="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
              ${[
                { id: "all", label: "ทุกระดับ" },
                { id: "A1", label: "🟢 A1" },
                { id: "A2", label: "🔵 A2" },
                { id: "B1", label: "🔷 B1" },
                { id: "B2", label: "🟣 B2" },
                { id: "C1", label: "👑 C1-C2" },
              ].map(tab => `
                <button onclick="window.app.setReadingLevel('${tab.id}')"
                  class="px-3 py-1.5 rounded-xl font-bold shrink-0 transition-all ${
                    levelFilter === tab.id
                      ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-sm'
                      : 'bg-slate-50 dark:bg-slate-800/60 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }">
                  ${tab.label}
                </button>
              `).join("")}
            </div>

            <!-- Search Input -->
            <div class="relative min-w-[240px] md:w-72">
              <input type="text" id="reading-search-input"
                placeholder="🔍 ค้นหาชื่อเรื่อง, คำศัพท์..."
                value="${this.readingSearchQuery || ''}"
                oninput="window.app.setReadingSearch(this.value)"
                class="w-full px-3.5 py-1.5 pl-8 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              <span class="absolute left-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 pointer-events-none">🔍</span>
              ${this.readingSearchQuery ? `
                <button onclick="window.app.setReadingSearch('')" class="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-xs">✕</button>
              ` : ''}
            </div>
          </div>
        </div>

        <!-- Result Status -->
        <div class="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 px-1">
          <span>พบ <strong>${list.length}</strong> เรื่อง ${list.length > 0 ? `(${startIndex + 1} - ${Math.min(startIndex + itemsPerPage, list.length)} จากทั้งหมด ${list.length})` : ''}</span>
          ${totalPages > 1 ? `<span>หน้า ${currentPage} / ${totalPages}</span>` : ''}
        </div>

        <!-- Articles Grid -->
        ${list.length === 0 ? `
          <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-12 text-center space-y-3">
            <span class="text-4xl">🔍</span>
            <h3 class="text-base font-bold text-slate-700 dark:text-slate-200">ไม่พบเรื่องสั้นที่ตรงกับคำค้นหา</h3>
            <p class="text-xs text-slate-400">ลองค้นหาด้วยคำอื่น หรือกด "ทั้งหมด" เพื่อดูเรื่องสั้นทั้งหมด</p>
            <button onclick="window.app.setReadingSearch(''); window.app.setReadingLevel('all'); window.app.setReadingCollection('all');"
              class="px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-bold shadow-md hover:bg-indigo-700 transition-all">
              ล้างการค้นหา
            </button>
          </div>
        ` : `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            ${paginatedItems.map(art => {
              const quizRecord = this.readingQuizSubmitted[art.id];
              const isPassed = quizRecord && quizRecord.passed;

              return `
                <div onclick="window.app.navigateTo('reading-lab', { articleId: '${art.id}' })"
                  class="bg-white dark:bg-slate-900 border ${isPassed ? 'border-emerald-300 dark:border-emerald-800/80 shadow-emerald-500/5' : 'border-slate-200 dark:border-slate-800'} rounded-3xl p-6 shadow-sm hover:shadow-xl hover:scale-[1.01] transition-all cursor-pointer flex flex-col justify-between space-y-4 group">
                  
                  <div class="space-y-3">
                    <div class="flex items-center justify-between">
                      <span class="text-3xl">${art.coverEmoji}</span>
                      <div class="flex items-center gap-2">
                        <span class="px-2.5 py-1 rounded-full text-[10px] font-black uppercase bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                          ${art.levelBadge}
                        </span>
                        ${isPassed ? `
                          <span class="px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 text-[10px] font-bold flex items-center gap-1 border border-emerald-200 dark:border-emerald-800">
                            <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
                            <span>ผ่านแล้ว</span>
                          </span>
                        ` : `
                          <span class="px-2 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 text-[10px] font-bold">
                            ✨ +${art.xpReward} XP
                          </span>
                        `}
                      </div>
                    </div>

                    <div>
                      <h2 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                        ${art.title}
                      </h2>
                      <p class="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                        ${art.titleTh}
                      </p>
                    </div>

                    <p class="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                      ${art.summary}
                    </p>

                    <!-- Key vocab tags -->
                    <div class="flex flex-wrap gap-1.5 pt-1">
                      ${(art.keyVocab || []).slice(0, 3).map(v => `
                        <span class="px-2 py-0.5 rounded-lg bg-slate-50 dark:bg-slate-800/80 text-[10px] font-medium text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                          🔑 ${v.word} (${v.th})
                        </span>
                      `).join("")}
                    </div>
                  </div>

                  <div class="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                    <div class="flex items-center gap-3">
                      <span>⏱️ ${art.estimatedTime}</span>
                      <span>•</span>
                      <span>📝 ${art.wordCount} คำ</span>
                    </div>
                    <span class="font-bold text-emerald-600 dark:text-emerald-400 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                      <span>เริ่มอ่าน</span>
                      <span>➔</span>
                    </span>
                  </div>
                </div>
              `;
            }).join("")}
          </div>
        `}

        <!-- Pagination Controls -->
        ${totalPages > 1 ? `
          <div class="flex items-center justify-center gap-2 pt-4">
            <button onclick="window.app.setReadingPage(${currentPage - 1})"
              ${currentPage === 1 ? 'disabled class="opacity-40 cursor-not-allowed px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-400"' : 'class="px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-bold text-slate-700 dark:text-slate-200 transition-all active:scale-95"'}>
              ← หน้าก่อนหน้า
            </button>

            <div class="flex items-center gap-1">
              ${Array.from({ length: totalPages }, (_, i) => i + 1)
                .filter(p => p === 1 || p === totalPages || Math.abs(p - currentPage) <= 2)
                .reduce((acc, p, idx, arr) => {
                  if (idx > 0 && p - arr[idx - 1] > 1) acc.push('ellipsis');
                  acc.push(p);
                  return acc;
                }, [])
                .map(item => {
                  if (item === 'ellipsis') {
                    return `<span class="px-2 text-slate-400 text-xs">...</span>`;
                  }
                  return `
                    <button onclick="window.app.setReadingPage(${item})"
                      class="w-8 h-8 rounded-xl text-xs font-bold transition-all ${
                        currentPage === item
                          ? 'bg-indigo-600 text-white shadow-md'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                      }">
                      ${item}
                    </button>
                  `;
                }).join("")}
            </div>

            <button onclick="window.app.setReadingPage(${currentPage + 1})"
              ${currentPage === totalPages ? 'disabled class="opacity-40 cursor-not-allowed px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-400"' : 'class="px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-bold text-slate-700 dark:text-slate-200 transition-all active:scale-95"'}>
              หน้าถัดไป →
            </button>
          </div>
        ` : ''}
      </div>
    `;
  }

  renderReadingArticleDetail(container, article) {
    const articles = this.getReadingList();
    const artIndex = articles.findIndex(a => a.id === article.id);
    const prevArt = artIndex > 0 ? articles[artIndex - 1] : null;
    const nextArt = artIndex < articles.length - 1 ? articles[artIndex + 1] : null;

    const quizRecord = this.readingQuizSubmitted[article.id];
    const isPassed = quizRecord && quizRecord.passed;
    const currentRate = this.readingTtsRate || 1.0;
    const showThai = this.showReadingThai !== false;
    const fontSize = this.readingFontSize || "base";
    const answers = this.readingQuizAnswers[article.id] || {};
    const isQuizSubmitted = !!quizRecord;

    const fontClasses = {
      sm: "text-sm leading-relaxed",
      base: "text-base leading-relaxed sm:text-lg sm:leading-loose",
      lg: "text-lg leading-loose sm:text-xl sm:leading-loose"
    }[fontSize] || "text-base leading-relaxed sm:text-lg sm:leading-loose";

    container.innerHTML = `
      <div class="space-y-6 animate-fadeIn max-w-4xl mx-auto pb-12">
        <!-- Top Navigation & Breadcrumbs -->
        <div class="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
          <button onclick="window.app.navigateTo('reading-lab')"
            class="px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-bold text-slate-700 dark:text-slate-200 transition-all flex items-center gap-1.5 active:scale-95">
            <span>←</span>
            <span>กลับสู่ห้องฝึกอ่าน (All Readings)</span>
          </button>
          
          <div class="flex items-center gap-2">
            ${prevArt ? `
              <button onclick="window.app.navigateTo('reading-lab', { articleId: '${prevArt.id}' })"
                class="px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-bold text-slate-700 dark:text-slate-200 transition-all flex items-center gap-1" title="เรื่องก่อนหน้า: ${prevArt.title}">
                <span>←</span>
                <span class="hidden sm:inline">ก่อนหน้า</span>
              </button>
            ` : ''}
            ${nextArt ? `
              <button onclick="window.app.navigateTo('reading-lab', { articleId: '${nextArt.id}' })"
                class="px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-bold text-slate-700 dark:text-slate-200 transition-all flex items-center gap-1" title="เรื่องถัดไป: ${nextArt.title}">
                <span class="hidden sm:inline">ถัดไป</span>
                <span>→</span>
              </button>
            ` : ''}
            <span class="px-2.5 py-1 rounded-full text-xs font-black uppercase bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800">
              ${article.levelBadge}
            </span>
            ${isPassed ? `
              <span class="px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 text-xs font-bold flex items-center gap-1 border border-emerald-300 dark:border-emerald-800">
                <span>✓ ผ่านแล้ว</span>
              </span>
            ` : `
              <span class="px-2.5 py-1 rounded-full bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 text-xs font-bold border border-amber-200 dark:border-amber-900/40">
                ✨ +${article.xpReward} XP
              </span>
            `}
          </div>
        </div>

        <!-- Article Title & Meta -->
        <div class="space-y-2">
          <div class="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <span>${article.coverEmoji}</span>
            <span class="font-bold uppercase tracking-wider">${article.levelTitle}</span>
            <span>•</span>
            <span>⏱️ ${article.estimatedTime}</span>
            <span>•</span>
            <span>📝 ${article.wordCount} คำ</span>
          </div>
          <h1 class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            ${article.title}
          </h1>
          <p class="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-medium">
            ${article.titleTh}
          </p>
        </div>

        <!-- Interactive Control Bar -->
        <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-4 shadow-sm flex flex-wrap items-center justify-between gap-3">
          <!-- Audio Playback Controls -->
          <div class="flex items-center gap-2">
            <button id="reading-play-all-btn" onclick="window.app.toggleReadingTts('${article.id}')"
              class="px-4 py-2 rounded-2xl font-bold text-xs flex items-center gap-2 transition-all shadow-sm ${
                this.readingTtsPlaying
                  ? 'bg-amber-500 hover:bg-amber-600 text-white'
                  : 'bg-emerald-600 hover:bg-emerald-700 text-white active:scale-95'
              }">
              <span id="reading-tts-icon">${this.readingTtsPlaying ? '⏸️' : '🎧'}</span>
              <span id="reading-tts-text">${this.readingTtsPlaying ? 'หยุดเสียงอ่าน' : 'ฟังเสียงอ่านทั้งบทความ'}</span>
            </button>

            <!-- Speed selector -->
            <div class="flex items-center bg-slate-100 dark:bg-slate-800 rounded-xl p-0.5 text-xs font-bold text-slate-600 dark:text-slate-300">
              ${[0.75, 1.0, 1.25].map(spd => `
                <button onclick="window.app.setReadingTtsSpeed(${spd}, '${article.id}')"
                  class="px-2 py-1 rounded-lg transition-all ${
                    currentRate === spd
                      ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 shadow-sm'
                      : 'hover:text-slate-900 dark:hover:text-white'
                  }">
                  ${spd}x
                </button>
              `).join("")}
            </div>
          </div>

          <!-- Reading Display Options -->
          <div class="flex items-center gap-2">
            <!-- Toggle Thai Translation -->
            <button onclick="window.app.toggleReadingThai('${article.id}')"
              class="px-3 py-1.5 rounded-xl border text-xs font-bold transition-all flex items-center gap-1.5 ${
                showThai
                  ? 'bg-indigo-50 dark:bg-indigo-950/50 border-indigo-200 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400'
                  : 'bg-slate-50 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400'
              }">
              <span>👁️</span>
              <span>${showThai ? 'คำแปลไทย: เปิดอยู่' : 'คำแปลไทย: ซ่อน'}</span>
            </button>

            <!-- Font Size Toggle -->
            <div class="flex items-center bg-slate-100 dark:bg-slate-800 rounded-xl p-0.5 text-xs font-bold text-slate-600 dark:text-slate-300">
              <button onclick="window.app.setReadingFontSize('sm', '${article.id}')" class="px-2 py-1 rounded-lg ${fontSize === 'sm' ? 'bg-white dark:bg-slate-700 text-indigo-600 shadow-sm' : ''}">A-</button>
              <button onclick="window.app.setReadingFontSize('base', '${article.id}')" class="px-2 py-1 rounded-lg ${fontSize === 'base' ? 'bg-white dark:bg-slate-700 text-indigo-600 shadow-sm' : ''}">A</button>
              <button onclick="window.app.setReadingFontSize('lg', '${article.id}')" class="px-2 py-1 rounded-lg ${fontSize === 'lg' ? 'bg-white dark:bg-slate-700 text-indigo-600 shadow-sm' : ''}">A+</button>
            </div>
          </div>
        </div>

        <!-- Key Vocabulary & Chunks Summary Box -->
        <div class="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/40 dark:to-purple-950/40 border border-indigo-100 dark:border-indigo-900/50 rounded-3xl p-5 shadow-sm space-y-3">
          <div class="flex items-center justify-between">
            <h3 class="text-xs font-black uppercase text-indigo-700 dark:text-indigo-300 tracking-wider flex items-center gap-2">
              <span>💡</span>
              <span>คำศัพท์และก้อนประโยคสำคัญประจำบทความ (Key Vocabulary & Chunks):</span>
            </h3>
            <span class="text-[11px] text-indigo-500 font-medium">แตะไอคอน 🔊 เพื่อฟังเสียง</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            ${article.keyVocab.map(v => `
              <div class="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-indigo-100 dark:border-indigo-900/40 p-2.5 rounded-2xl flex items-center justify-between gap-3">
                <div class="min-w-0">
                  <div class="flex items-center gap-2">
                    <span class="font-bold text-sm text-slate-900 dark:text-white">${v.word}</span>
                    <span class="text-[11px] font-mono text-slate-400">${v.ipa}</span>
                    <span class="text-[10px] px-1.5 py-0.2 rounded bg-indigo-100 dark:bg-indigo-950 text-indigo-600 font-bold">${v.pos}</span>
                  </div>
                  <p class="text-xs text-slate-600 dark:text-slate-300 mt-0.5 truncate">${v.th}</p>
                  ${v.chunk ? `<p class="text-[10px] text-indigo-600 dark:text-indigo-400 italic">“${v.chunk}”</p>` : ''}
                </div>
                <button onclick="window.speechEngine.speak('${v.word.replace(/'/g, "\\'")}')"
                  class="w-7 h-7 rounded-xl bg-indigo-50 dark:bg-indigo-900/60 hover:bg-indigo-100 text-indigo-600 dark:text-indigo-300 flex items-center justify-center shrink-0 active:scale-95 transition-all"
                  title="ฟังเสียงอ่านคำศัพท์">
                  🔊
                </button>
              </div>
            `).join("")}
          </div>
        </div>

        <!-- Main Reading Paragraphs Content -->
        <div class="space-y-4">
          <div class="flex items-center gap-2 px-1 text-xs text-indigo-600 dark:text-indigo-400 font-semibold">
            <span>💡</span>
            <span>แตะหรือคลิกที่คำศัพท์ใดก็ได้ในบทความเพื่อดูคำแปล สัทอักษร IPA และฟังเสียงอ่าน</span>
          </div>
          ${article.paragraphs.map(p => `
            <div id="reading-para-${p.id}"
              class="reading-paragraph-card bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 sm:p-6 shadow-sm transition-all space-y-3">
              <div class="flex items-start justify-between gap-3">
                <p class="${fontClasses} font-serif text-slate-800 dark:text-slate-100 leading-relaxed">
                  ${this.formatClickableReadingText(p.en, p.th)}
                </p>
                <button onclick="window.app.playReadingParagraphTts('${p.id}', '${p.en.replace(/'/g, "\\'")}')"
                  class="p-2 rounded-xl text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/50 transition-all shrink-0 active:scale-95"
                  title="ฟังเสียงอ่านย่อหน้านี้">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/></svg>
                </button>
              </div>

              ${showThai ? `
                <div class="pt-3 border-t border-slate-100 dark:border-slate-800/80">
                  <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-sans leading-relaxed">
                    ${p.th}
                  </p>
                </div>
              ` : ''}
            </div>
          `).join("")}
        </div>

        <!-- Reading Comprehension Quiz Section -->
        <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-200 dark:border-slate-800">
            <div>
              <div class="flex items-center gap-2">
                <span class="text-xl">📝</span>
                <h3 class="text-lg font-bold text-slate-900 dark:text-white">
                  แบบทดสอบวัดความเข้าใจท้ายบทความ (Reading Comprehension Quiz)
                </h3>
              </div>
              <p class="text-xs text-slate-400 mt-0.5">
                ตอบคำถามเพื่อวัดความเข้าใจจากเนื้อหาที่อ่าน และสะสมคะแนน +${article.xpReward} XP
              </p>
            </div>
            ${isPassed ? `
              <span class="px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 text-xs font-black">
                คะแนนล่าสุด: ${quizRecord.score} / ${quizRecord.total} (${quizRecord.percent}%)
              </span>
            ` : ''}
          </div>

          <div class="space-y-6">
            ${article.quiz.map((q, qIdx) => {
              const selectedOpt = answers[qIdx];

              return `
                <div class="space-y-3 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
                  <div class="flex items-start gap-2.5">
                    <span class="w-6 h-6 rounded-lg bg-indigo-600 text-white font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                      ${qIdx + 1}
                    </span>
                    <div class="space-y-1 flex-1">
                      <div class="flex items-center gap-2">
                        <span class="px-2 py-0.2 rounded text-[9px] font-black uppercase ${
                          q.type === 'true-false' ? 'bg-amber-100 text-amber-700 dark:bg-amber-950/80 dark:text-amber-300' : 'bg-blue-100 text-blue-700 dark:bg-blue-950/80 dark:text-blue-300'
                        }">
                          ${q.type === 'true-false' ? 'True / False' : 'Multiple Choice'}
                        </span>
                      </div>
                      <p class="text-sm font-bold text-slate-900 dark:text-white leading-snug">
                        ${q.question}
                      </p>
                    </div>
                  </div>

                  <div class="space-y-2 pt-1 pl-8">
                    ${q.options.map((opt, optIdx) => {
                      const isOptionSelected = selectedOpt === optIdx;
                      let optionClass = "border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700/50 text-slate-700 dark:text-slate-300";

                      if (isQuizSubmitted) {
                        if (optIdx === q.answer) {
                          optionClass = "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-200 font-bold";
                        } else if (isOptionSelected && optIdx !== q.answer) {
                          optionClass = "border-red-500 bg-red-50 dark:bg-red-950/40 text-red-700 dark:text-red-300 line-through";
                        } else {
                          optionClass = "opacity-50 border-slate-200 dark:border-slate-800 text-slate-400";
                        }
                      } else if (isOptionSelected) {
                        optionClass = "border-indigo-600 bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 font-bold shadow-sm";
                      }

                      return `
                        <label class="flex items-center gap-3 p-3 rounded-xl border text-xs cursor-pointer transition-all ${optionClass}">
                          <input type="radio" name="reading_q_${article.id}_${qIdx}"
                            ${isQuizSubmitted ? 'disabled' : ''}
                            ${isOptionSelected ? 'checked' : ''}
                            onchange="window.app.selectReadingQuizOption('${article.id}', ${qIdx}, ${optIdx})"
                            class="text-indigo-600 focus:ring-indigo-500" />
                          <span>${opt}</span>
                          ${isQuizSubmitted && optIdx === q.answer ? '<span class="ml-auto text-emerald-600 font-black">✓ คำตอบที่ถูกต้อง</span>' : ''}
                        </label>
                      `;
                    }).join("")}
                  </div>

                  ${isQuizSubmitted ? `
                    <div class="mt-2 p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/60 text-xs text-indigo-800 dark:text-indigo-200 leading-relaxed ml-8">
                      <span class="font-bold">💡 คำอธิบาย:</span> ${q.explanation}
                    </div>
                  ` : ''}
                </div>
              `;
            }).join("")}
          </div>

          <!-- Quiz Submission / Retry Actions -->
          <div class="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
            ${isQuizSubmitted ? `
              <div class="flex items-center gap-3">
                <span class="text-sm font-bold ${quizRecord.passed ? 'text-emerald-600' : 'text-red-500'}">
                  ${quizRecord.passed ? `🎉 ยอดเยี่ยม! คุณสอบผ่าน (${quizRecord.score}/${quizRecord.total})` : `ยังไม่ผ่านเกณฑ์ (${quizRecord.score}/${quizRecord.total}) ลองทบทวนดูอีกครั้ง`}
                </span>
                <button onclick="window.app.retryReadingQuiz('${article.id}')"
                  class="px-4 py-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-xs font-bold text-slate-700 dark:text-slate-200 rounded-xl transition-all">
                  ทำควิซใหม่อีกครั้ง
                </button>
              </div>
            ` : `
              <button onclick="window.app.submitReadingQuiz('${article.id}')"
                class="px-6 py-3 bg-gradient-to-r from-emerald-600 to-indigo-600 hover:from-emerald-700 hover:to-indigo-700 text-white font-bold text-sm rounded-xl shadow-md transition-all flex items-center gap-2 active:scale-95">
                <span>ส่งคำตอบ (Submit Answers)</span>
                <span>➔</span>
              </button>
            `}
            <button onclick="window.app.navigateTo('reading-lab')" class="text-xs font-bold text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
              กลับไปหน้ารวมบทความ
            </button>
          </div>
        </div>

        <!-- Unified Previous / Next Reading Navigation Footer -->
        <div class="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          ${prevArt ? `
            <button onclick="window.app.navigateTo('reading-lab', { articleId: '${prevArt.id}' })"
              class="w-full sm:w-auto px-4 py-2.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs flex items-center justify-center sm:justify-start gap-2 shadow-xs transition-all active:scale-95 group">
              <span class="group-hover:-translate-x-1 transition-transform">⬅</span>
              <div class="text-left">
                <div class="text-[10px] text-slate-400 font-medium">เรื่องก่อนหน้า (${prevArt.levelBadge || 'Reading'})</div>
                <div class="truncate max-w-[200px]">${prevArt.title}</div>
              </div>
            </button>
          ` : `
            <button onclick="window.app.navigateTo('reading-lab')"
              class="w-full sm:w-auto px-4 py-2.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs flex items-center justify-center sm:justify-start gap-2 shadow-xs transition-all active:scale-95">
              <span>⬅</span>
              <span>หน้ารวมบทความฝึกอ่าน</span>
            </button>
          `}

          <button onclick="window.app.navigateTo('reading-lab')"
            class="w-full sm:w-auto px-4 py-2.5 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold text-xs flex items-center justify-center gap-1.5 transition-all">
            <span>📖 หน้ารวมบทความ (${artIndex + 1}/${articles.length})</span>
          </button>

          ${nextArt ? `
            <button onclick="window.app.navigateTo('reading-lab', { articleId: '${nextArt.id}' })"
              class="w-full sm:w-auto px-5 py-2.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center justify-center sm:justify-end gap-2 shadow-md transition-all active:scale-95 group">
              <div class="text-right">
                <div class="text-[10px] text-indigo-200 font-medium">เรื่องถัดไป (${nextArt.levelBadge || 'Reading'})</div>
                <div class="truncate max-w-[200px]">${nextArt.title}</div>
              </div>
              <span class="group-hover:translate-x-1 transition-transform">➔</span>
            </button>
          ` : `
            <button onclick="window.app.navigateTo('reading-lab')"
              class="w-full sm:w-auto px-5 py-2.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md transition-all">
              <span>🎉 จบครบทุกบทความแล้ว! (กลับสู่หน้ารวม)</span>
              <span>➔</span>
            </button>
          `}
        </div>
      </div>
    `;
  }

  toggleReadingTts(articleId) {
    if (this.readingTtsPlaying) {
      this.stopReadingTts();
    } else {
      this.playReadingArticleTts(articleId);
    }
  }

  playReadingArticleTts(articleId) {
    const articles = this.getReadingList();
    const article = articles.find(a => a.id === articleId);
    if (!article || !article.paragraphs || article.paragraphs.length === 0) return;

    this.stopReadingTts();
    this.readingTtsPlaying = true;
    this.readingTtsIndex = 0;

    const playNextParagraph = () => {
      if (!this.readingTtsPlaying || this.readingTtsIndex >= article.paragraphs.length) {
        this.stopReadingTts();
        return;
      }

      const para = article.paragraphs[this.readingTtsIndex];
      // Highlight current paragraph in UI
      document.querySelectorAll(".reading-paragraph-card").forEach(el => {
        el.classList.remove("ring-2", "ring-emerald-500", "bg-emerald-50/40", "dark:bg-emerald-950/30");
      });
      const currentEl = document.getElementById(`reading-para-${para.id}`);
      if (currentEl) {
        currentEl.classList.add("ring-2", "ring-emerald-500", "bg-emerald-50/40", "dark:bg-emerald-950/30");
        currentEl.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }

      window.speechEngine.speak(
        para.en,
        () => {
          this.updateTtsButtonState(true);
        },
        () => {
          if (this.readingTtsPlaying) {
            this.readingTtsIndex++;
            setTimeout(playNextParagraph, 350);
          }
        }
      );
    };

    playNextParagraph();
  }

  playReadingParagraphTts(paraId, text) {
    this.stopReadingTts();
    document.querySelectorAll(".reading-paragraph-card").forEach(el => {
      el.classList.remove("ring-2", "ring-emerald-500", "bg-emerald-50/40", "dark:bg-emerald-950/30");
    });
    const currentEl = document.getElementById(`reading-para-${paraId}`);
    if (currentEl) {
      currentEl.classList.add("ring-2", "ring-emerald-500", "bg-emerald-50/40", "dark:bg-emerald-950/30");
    }

    window.speechEngine.speak(text, null, () => {
      if (currentEl) {
        currentEl.classList.remove("ring-2", "ring-emerald-500", "bg-emerald-50/40", "dark:bg-emerald-950/30");
      }
    });
  }

  stopReadingTts() {
    this.readingTtsPlaying = false;
    this.readingTtsIndex = null;
    if (window.speechEngine) {
      window.speechEngine.stop();
    }
    document.querySelectorAll(".reading-paragraph-card").forEach(el => {
      el.classList.remove("ring-2", "ring-emerald-500", "bg-emerald-50/40", "dark:bg-emerald-950/30");
    });
    this.updateTtsButtonState(false);
  }

  updateTtsButtonState(isPlaying) {
    const iconEl = document.getElementById("reading-tts-icon");
    const textEl = document.getElementById("reading-tts-text");
    const btnEl = document.getElementById("reading-play-all-btn");
    if (iconEl && textEl && btnEl) {
      if (isPlaying) {
        iconEl.textContent = "⏸️";
        textEl.textContent = "หยุดเสียงอ่าน";
        btnEl.classList.remove("bg-emerald-600", "hover:bg-emerald-700");
        btnEl.classList.add("bg-amber-500", "hover:bg-amber-600");
      } else {
        iconEl.textContent = "🎧";
        textEl.textContent = "ฟังเสียงอ่านทั้งบทความ";
        btnEl.classList.remove("bg-amber-500", "hover:bg-amber-600");
        btnEl.classList.add("bg-emerald-600", "hover:bg-emerald-700");
      }
    }
  }

  toggleReadingThai(articleId) {
    this.showReadingThai = !this.showReadingThai;
    window.soundFx.playClick();
    const container = document.getElementById("main-content-view");
    const articles = this.getReadingList();
    const article = articles.find(a => a.id === articleId);
    if (container && article) {
      this.renderReadingArticleDetail(container, article);
    }
  }

  setReadingFontSize(size, articleId) {
    this.readingFontSize = size;
    window.soundFx.playClick();
    const container = document.getElementById("main-content-view");
    const articles = this.getReadingList();
    const article = articles.find(a => a.id === articleId);
    if (container && article) {
      this.renderReadingArticleDetail(container, article);
    }
  }

  setReadingTtsSpeed(speed, articleId) {
    this.readingTtsRate = speed;
    if (window.speechEngine) {
      window.speechEngine.setRate(speed);
    }
    window.soundFx.playClick();
    const container = document.getElementById("main-content-view");
    const articles = this.getReadingList();
    const article = articles.find(a => a.id === articleId);
    if (container && article) {
      this.renderReadingArticleDetail(container, article);
    }
  }

  selectReadingQuizOption(articleId, qIdx, optIdx) {
    window.soundFx.playClick();
    if (!this.readingQuizAnswers[articleId]) {
      this.readingQuizAnswers[articleId] = {};
    }
    this.readingQuizAnswers[articleId][qIdx] = optIdx;
  }

  submitReadingQuiz(articleId) {
    const articles = this.getReadingList();
    const article = articles.find(a => a.id === articleId);
    if (!article) return;

    const answers = this.readingQuizAnswers[articleId] || {};
    const totalQuestions = article.quiz.length;

    if (Object.keys(answers).length < totalQuestions) {
      alert("กรุณาตอบคำถามให้ครบทุกข้อก่อนส่งคำตอบครับ");
      return;
    }

    let score = 0;
    article.quiz.forEach((q, idx) => {
      if (answers[idx] === q.answer) {
        score++;
      }
    });

    const percent = Math.round((score / totalQuestions) * 100);
    const passed = score >= Math.ceil(totalQuestions * 0.6); // 60%+ passes

    const previousSubmission = this.readingQuizSubmitted[articleId];
    const alreadyEarned = previousSubmission && previousSubmission.passed;

    this.readingQuizSubmitted[articleId] = {
      score,
      total: totalQuestions,
      percent,
      passed,
      xpEarned: article.xpReward
    };

    window.storageManager.recordQuestProgress("readArticle", 1);

    try {
      localStorage.setItem("engmastery_reading_quizzes", JSON.stringify(this.readingQuizSubmitted));
    } catch (e) {}

    if (passed) {
      window.soundFx.playVictory();
      if (!alreadyEarned) {
        window.storageManager.addXP(article.xpReward);
        this.renderHeaderStats();
        this.showToast(`ยอดเยี่ยมมาก! คุณผ่านแบบทดสอบการอ่าน ${score}/${totalQuestions} ข้อ (+${article.xpReward} XP) 🎉`, "success");
      } else {
        this.showToast(`คุณทำแบบทดสอบได้ ${score}/${totalQuestions} ข้อ ⭐`, "info");
      }
    } else {
      window.soundFx.playIncorrect();
      this.showToast(`ได้คะแนน ${score}/${totalQuestions} ข้อ ลองอ่านทบทวนและทำใหม่อีกครั้งนะ`, "error");
    }

    const container = document.getElementById("main-content-view");
    if (container && this.currentView === "reading-lab") {
      this.renderReadingArticleDetail(container, article);
    }
  }

  retryReadingQuiz(articleId) {
    delete this.readingQuizAnswers[articleId];
    delete this.readingQuizSubmitted[articleId];
    try {
      localStorage.setItem("engmastery_reading_quizzes", JSON.stringify(this.readingQuizSubmitted));
    } catch (e) {}

    const container = document.getElementById("main-content-view");
    const articles = this.getReadingList();
    const article = articles.find(a => a.id === articleId);
    if (container && article) {
      this.renderReadingArticleDetail(container, article);
    }
  }

  // =========================================================================
  // INTERACTIVE WORD TAP & POPUP DICTIONARY (HYBRID LOCAL + GOOGLE TRANSLATE)
  // =========================================================================
  getVocabIndex() {
    if (this.vocabIndex) return this.vocabIndex;
    const map = new Map();
    const list = window.vocabData || [];
    for (const v of list) {
      if (v.word) {
        map.set(v.word.toLowerCase(), v);
      }
    }
    this.vocabIndex = map;
    return map;
  }

  lemmatizeWord(word) {
    if (!word) return "";
    word = word.toLowerCase().trim();
    const map = this.getVocabIndex();
    if (map.has(word)) return word;

    const irregulars = {
      went: 'go', came: 'come', saw: 'see', seen: 'see', bought: 'buy', took: 'take',
      taken: 'take', got: 'get', ate: 'eat', eaten: 'eat', wrote: 'write', written: 'write',
      ran: 'run', fell: 'fall', fallen: 'fall', felt: 'feel', met: 'meet', found: 'find',
      told: 'tell', spoke: 'speak', spoken: 'speak', drove: 'drive', driven: 'drive',
      left: 'leave', lost: 'lose', gave: 'give', given: 'give', became: 'become',
      knew: 'know', known: 'know', thought: 'think', brought: 'bring', taught: 'teach',
      caught: 'catch', sold: 'sell', spent: 'spend', began: 'begin', begun: 'begin',
      paid: 'pay', stood: 'stand', understood: 'understand', slept: 'sleep', heard: 'hear',
      swam: 'swim', drank: 'drink', drunk: 'drink', wore: 'wear', worn: 'wear',
      broke: 'break', broken: 'break', better: 'good', best: 'good', worse: 'bad', worst: 'bad'
    };
    if (irregulars[word] && map.has(irregulars[word])) return irregulars[word];

    // Possessive
    if (word.endsWith("'s") || word.endsWith("’s")) {
      const base = word.slice(0, -2);
      if (map.has(base)) return base;
    }

    // -ies -> -y (countries -> country, stories -> story)
    if (word.endsWith("ies")) {
      const base = word.slice(0, -3) + "y";
      if (map.has(base)) return base;
    }

    // -ied -> -y (hurried -> hurry)
    if (word.endsWith("ied")) {
      const base = word.slice(0, -3) + "y";
      if (map.has(base)) return base;
    }

    // -ed
    if (word.endsWith("ed")) {
      const base1 = word.slice(0, -1); // arrived -> arrive, closed -> close
      if (map.has(base1)) return base1;
      const base2 = word.slice(0, -2); // talked -> talk, examined -> examine
      if (map.has(base2)) return base2;
      // double consonant (stopped -> stop, planned -> plan)
      if (word.length > 4 && word[word.length - 3] === word[word.length - 4]) {
        const base3 = word.slice(0, -3);
        if (map.has(base3)) return base3;
      }
    }

    // -ing
    if (word.endsWith("ing")) {
      const base1 = word.slice(0, -3) + "e"; // driving -> drive
      if (map.has(base1)) return base1;
      const base2 = word.slice(0, -3); // jumping -> jump
      if (map.has(base2)) return base2;
      // double consonant (running -> run, swimming -> swim)
      if (word.length > 5 && word[word.length - 4] === word[word.length - 5]) {
        const base3 = word.slice(0, -4);
        if (map.has(base3)) return base3;
      }
    }

    // -es
    if (word.endsWith("es")) {
      const base1 = word.slice(0, -2); // boxes -> box
      if (map.has(base1)) return base1;
      const base2 = word.slice(0, -1); // tastes -> taste
      if (map.has(base2)) return base2;
    }

    // -s
    if (word.endsWith("s")) {
      const base = word.slice(0, -1);
      if (map.has(base)) return base;
    }

    return word;
  }

  async lookupReadingWord(rawWord, sentenceEn = "", sentenceTh = "") {
    const cleanWord = (rawWord || "").replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, '').toLowerCase();
    if (!cleanWord) return null;

    const map = this.getVocabIndex();
    const lemma = this.lemmatizeWord(cleanWord);

    // 1. Check local Oxford 3000 / Tech vocabulary database (100% Offline)
    if (map.has(lemma)) {
      const v = map.get(lemma);
      return {
        word: v.word,
        ipa: v.ipa || "",
        pos: v.pos || "word",
        th: v.th || "",
        definition: v.definition || "",
        exampleEn: v.exampleEn || sentenceEn || "",
        exampleTh: v.exampleTh || sentenceTh || "",
        source: "local"
      };
    }

    // 2. Check cached online translations
    if (this.onlineVocabCache && this.onlineVocabCache[cleanWord]) {
      return {
        word: cleanWord,
        ipa: "",
        pos: "vocabulary",
        th: this.onlineVocabCache[cleanWord],
        definition: "คำแปลจากระบบแปลภาษา (Google Translate)",
        exampleEn: sentenceEn || "",
        exampleTh: sentenceTh || "",
        source: "online"
      };
    }

    // 3. Fallback to Google Translate API
    try {
      const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=th&dt=t&q=${encodeURIComponent(cleanWord)}`;
      const resp = await fetch(url);
      if (resp.ok) {
        const data = await resp.json();
        const translated = (data && data[0] && data[0][0] && data[0][0][0]) || cleanWord;
        this.onlineVocabCache[cleanWord] = translated;
        try {
          localStorage.setItem("engmastery_online_vocab_cache", JSON.stringify(this.onlineVocabCache));
        } catch (e) {}
        return {
          word: cleanWord,
          ipa: "",
          pos: "vocabulary",
          th: translated,
          definition: "คำแปลจากระบบแปลภาษา (Google Translate)",
          exampleEn: sentenceEn || "",
          exampleTh: sentenceTh || "",
          source: "online"
        };
      }
    } catch (err) {
      console.warn("Online translation fallback failed:", err);
    }

    // 4. Offline fallback if word is outside 3,000 database and no connection
    return {
      word: cleanWord,
      ipa: "",
      pos: "word",
      th: "คำศัพท์นี้นอกฐานข้อมูลหลัก (กรุณาเชื่อมต่ออินเทอร์เน็ตเพื่อดูคำแปลสด)",
      definition: "This term is outside the local 3,000 core vocabulary database.",
      exampleEn: sentenceEn || "",
      exampleTh: sentenceTh || "",
      source: "offline"
    };
  }

  formatClickableReadingText(enText, thText = "") {
    if (!enText) return "";
    const safeTh = (thText || "").replace(/['"\\`]/g, " ").trim();
    const sentences = enText.match(/[^.!?]+[.!?]+(?:\s+|$)|[^.!?]+$/g) || [enText];

    return sentences.map(sent => {
      const safeSent = sent.replace(/['"\\`]/g, " ").trim();
      const tokens = sent.split(/([a-zA-Z0-9]+(?:['’][a-zA-Z0-9]+)?)/g);
      return tokens.map(token => {
        if (/[a-zA-Z0-9]/.test(token)) {
          const clean = token.replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, '');
          const escapedClean = clean.replace(/'/g, "\\'");
          return `<span class="reading-word-token" onclick="window.app.handleReadingWordClick(event, '${escapedClean}', '${safeSent.replace(/'/g, "\\'")}', '${safeTh.replace(/'/g, "\\'")}')" title="กดเพื่อดูคำแปล">${token}</span>`;
        }
        return token;
      }).join("");
    }).join("");
  }

  async handleReadingWordClick(event, rawWord, sentenceEn, sentenceTh) {
    if (event) {
      event.stopPropagation();
      event.preventDefault();
    }
    const cleanWord = (rawWord || "").replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, '').toLowerCase();
    if (!cleanWord) return;

    window.soundFx.playClick();
    this.openReadingWordModalLoading(cleanWord);
    const entry = await this.lookupReadingWord(cleanWord, sentenceEn, sentenceTh);
    this.renderReadingWordModalContent(entry);
  }

  openReadingWordModalLoading(word) {
    const modal = document.getElementById("reading-word-modal");
    const card = document.getElementById("reading-word-modal-card");
    if (!modal || !card) return;

    modal.classList.remove("hidden");
    modal.classList.add("flex");

    card.innerHTML = `
      <div class="py-8 flex flex-col items-center justify-center space-y-3">
        <div class="w-8 h-8 border-3 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
        <p class="text-xs text-slate-400 font-medium">กำลังค้นหาคำแปล "${word}"...</p>
      </div>
    `;
  }

  renderReadingWordModalContent(entry) {
    const modal = document.getElementById("reading-word-modal");
    const card = document.getElementById("reading-word-modal-card");
    if (!modal || !card || !entry) return;

    modal.classList.remove("hidden");
    modal.classList.add("flex");

    card.innerHTML = `
      <div class="space-y-4">
        <!-- Top Bar: Word, IPA, POS and Audio Speaker Button + Close -->
        <div class="flex items-center justify-between gap-3">
          <div class="flex items-baseline flex-wrap gap-2">
            <h3 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              ${entry.word}
            </h3>
            ${entry.ipa ? `
              <span class="text-sm sm:text-base font-mono text-slate-400 font-normal">
                ${entry.ipa}
              </span>
            ` : ''}
            ${entry.pos ? `
              <span class="text-[10px] uppercase font-bold px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800">
                ${entry.pos}
              </span>
            ` : ''}
          </div>

          <div class="flex items-center gap-1">
            <button id="reading-word-save-btn" onclick="window.app.toggleSaveWordFromPopup('${entry.word.replace(/'/g, "\\'")}')"
              class="w-10 h-10 rounded-full ${window.storageManager.isWordSaved(entry.word) ? 'bg-amber-100 dark:bg-amber-950/60 text-amber-500 border border-amber-300 dark:border-amber-800' : 'bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-amber-500 hover:bg-amber-50 dark:hover:bg-amber-950/40'} flex items-center justify-center shrink-0 active:scale-95 transition-all shadow-sm"
              title="${window.storageManager.isWordSaved(entry.word) ? 'บันทึกแล้ว (คลิกเพื่อยกเลิก)' : 'บันทึกคำศัพท์นี้ (Save to My Vocab)'}">
              <span class="text-base">${window.storageManager.isWordSaved(entry.word) ? '⭐' : '☆'}</span>
            </button>
            <button onclick="window.speechEngine.speak('${entry.word.replace(/'/g, "\\'")}')"
              class="w-10 h-10 rounded-full bg-indigo-50 dark:bg-indigo-950/60 hover:bg-indigo-100 dark:hover:bg-indigo-900/80 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0 active:scale-95 transition-all shadow-sm"
              title="ฟังเสียงอ่านคำศัพท์ (Pronounce)">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 3.5a.75.75 0 00-1.28-.53l-4.72 4.72H2.5A1.5 1.5 0 001 9.19v1.62c0 .83.67 1.5 1.5 1.5h1.5l4.72 4.72A.75.75 0 0010 16.5V3.5zm3.78 3.22a.75.75 0 011.06 0 6.5 6.5 0 010 9.19.75.75 0 01-1.06-1.06 5 5 0 000-7.07.75.75 0 010-1.06z"/></svg>
            </button>
            <button id="reading-word-mic-btn" onclick="window.app.startReadingWordPopupSpeaking('${entry.word.replace(/'/g, "\\'")}')"
              class="w-10 h-10 rounded-full bg-red-50 dark:bg-red-950/60 hover:bg-red-100 dark:hover:bg-red-900/80 text-red-600 dark:text-red-400 flex items-center justify-center shrink-0 active:scale-95 transition-all shadow-sm"
              title="ทดสอบออกเสียงคำนี้ (Voice Test)">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"/></svg>
            </button>
            <button onclick="window.app.closeReadingWordPopup()"
              class="w-9 h-9 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-center text-sm font-bold transition-all ml-1"
              title="ปิดหน้าต่าง (Esc)">
              ✕
            </button>
          </div>
        </div>

        <!-- Divider Line -->
        <div class="border-b border-slate-100 dark:border-slate-800/80"></div>

        <!-- Thai Meaning (Prominent Bold Purple/Indigo Text) -->
        <div class="space-y-2">
          <div class="text-xl sm:text-2xl font-black text-indigo-600 dark:text-indigo-400 leading-snug tracking-tight">
            ${entry.th}
          </div>
          ${entry.definition ? `
            <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
              ${entry.definition}
            </p>
          ` : ''}
          <div id="reading-word-voice-result-box" class="empty:hidden pt-1"></div>
        </div>

        <!-- Example Sentence Card (if present) -->
        ${entry.exampleEn ? `
          <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800/80 space-y-2">
            <div class="flex items-start justify-between gap-3">
              <p class="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 font-serif leading-relaxed italic">
                "${entry.exampleEn}"
              </p>
              <button onclick="window.speechEngine.speak('${entry.exampleEn.replace(/'/g, "\\'")}')"
                class="w-7 h-7 rounded-lg text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/60 flex items-center justify-center shrink-0 active:scale-95 transition-all"
                title="ฟังเสียงตัวอย่างประโยค">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 3.5a.75.75 0 00-1.28-.53l-4.72 4.72H2.5A1.5 1.5 0 001 9.19v1.62c0 .83.67 1.5 1.5 1.5h1.5l4.72 4.72A.75.75 0 0010 16.5V3.5zm3.78 3.22a.75.75 0 011.06 0 6.5 6.5 0 010 9.19.75.75 0 01-1.06-1.06 5 5 0 000-7.07.75.75 0 010-1.06z"/></svg>
              </button>
            </div>
            ${entry.exampleTh ? `
              <p class="text-xs text-slate-500 dark:text-slate-400 font-sans leading-relaxed">
                ${entry.exampleTh}
              </p>
            ` : ''}
          </div>
        ` : ''}

        <!-- Bottom Action Bar & Attribution -->
        <div class="pt-2 flex items-center justify-between text-xs border-t border-slate-100 dark:border-slate-800/80">
          <span class="text-[11px] text-slate-400 font-medium flex items-center gap-1.5">
            ${entry.source === 'local' ? `
              <span class="inline-block w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>พจนานุกรม Oxford ในระบบ (100% Offline)</span>
            ` : `
              <span class="inline-block w-2 h-2 rounded-full bg-blue-500"></span>
              <span>แปลผ่าน Google Translate</span>
            `}
          </span>

          <div class="flex items-center gap-2">
            <button onclick="window.speechEngine.speak('${entry.word.replace(/'/g, "\\'")}')"
              class="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 font-bold transition-all flex items-center gap-1 active:scale-95">
              <span>🔊 ฟังอีกครั้ง</span>
            </button>
            <button onclick="window.app.closeReadingWordPopup()"
              class="px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold transition-all shadow-sm active:scale-95">
              ปิด
            </button>
          </div>
        </div>
      </div>
    `;
  }

  toggleSaveWordFromPopup(word) {
    window.soundFx.playFlip();
    const res = window.storageManager.toggleSaveWord(word);
    const saveBtn = document.getElementById("reading-word-save-btn");
    if (saveBtn) {
      if (res.saved) {
        saveBtn.className = "w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-500 border border-amber-300 dark:border-amber-800 flex items-center justify-center shrink-0 active:scale-95 transition-all shadow-sm";
        saveBtn.innerHTML = '<span class="text-base">⭐</span>';
        saveBtn.title = "บันทึกแล้ว (คลิกเพื่อยกเลิก)";
      } else {
        saveBtn.className = "w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-amber-500 hover:bg-amber-50 dark:hover:bg-amber-950/40 flex items-center justify-center shrink-0 active:scale-95 transition-all shadow-sm";
        saveBtn.innerHTML = '<span class="text-base">☆</span>';
        saveBtn.title = "บันทึกคำศัพท์นี้ (Save to My Vocab)";
      }
    }
    this.showToast(res.saved ? `⭐ บันทึก "${word}" ลงใน My Vocab แล้ว!` : `นำ "${word}" ออกจาก My Vocab แล้ว`, "success");
    if (this.currentView === "vocabulary" && this.vocabFilter === "saved") {
      const container = document.getElementById("main-content-view");
      if (container) this.renderVocabularyView(container);
    }
  }

  startReadingWordPopupSpeaking(targetWord) {
    if (!window.speechEngine) return;
    if (!window.speechEngine.hasRecognition) {
      this.showToast("เบราว์เซอร์ของคุณยังไม่รองรับระบบตรวจจับเสียงพูด (แนะนำ Chrome/Edge)", "error");
      return;
    }

    const micBtn = document.getElementById("reading-word-mic-btn");
    const resultBox = document.getElementById("reading-word-voice-result-box");

    if (micBtn) micBtn.classList.add("recording-pulse");
    if (resultBox) {
      resultBox.innerHTML = `
        <div class="p-3 rounded-2xl bg-red-950/70 border border-red-500/60 shadow-md text-center space-y-1 animate-pulse">
          <div class="flex items-center justify-center gap-2 text-red-200 font-bold text-xs">
            <span class="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping"></span>
            <span>กำลังฟังเสียง... กรุณาออกเสียง "${targetWord}"</span>
          </div>
          <p class="text-[11px] text-red-300/80">พูดเข้าไมโครโฟนได้เลยครับ</p>
        </div>
      `;
    }

    window.speechEngine.listenAndScore(targetWord, {
      onStart: () => {
        window.soundFx.playClick();
      },
      onResult: (res) => {
        if (micBtn) micBtn.classList.remove("recording-pulse");
        const feedback = this.getVoiceScoreFeedback(res.score);

        if (resultBox) {
          resultBox.innerHTML = `
            <div class="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/90 border ${feedback.passed ? 'border-emerald-500/50' : 'border-amber-500/50'} shadow-md space-y-2">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-1.5 font-black text-xs ${feedback.textColor}">
                  <span class="text-base">${feedback.emoji}</span>
                  <span>${feedback.label}</span>
                </div>
                <span class="px-2.5 py-0.5 rounded-full text-xs font-black shadow-xs ${feedback.badgeClass}">
                  ${res.score}%
                </span>
              </div>
              <div class="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-1.5 overflow-hidden">
                <div class="h-full rounded-full transition-all duration-700 ${feedback.barColor}" style="width: ${res.score}%"></div>
              </div>
              <p class="text-xs text-slate-600 dark:text-slate-300 leading-snug">${feedback.message}</p>
              <div class="text-[10px] text-slate-400 font-mono truncate">
                ได้ยินว่า: <span class="text-slate-700 dark:text-white font-sans font-semibold">"${res.spokenText || '(ไม่ได้ยินคำ)'}"</span>
              </div>
            </div>
          `;
        }

        if (feedback.passed) {
          window.soundFx.playCorrect();
          window.storageManager.addXP(10);
          window.storageManager.recordSpeakingDrill();
          window.storageManager.recordQuestProgress("speakSentences", 1);
          this.renderHeaderStats();
          this.showToast(`${feedback.emoji} ${feedback.label} (ความเหมือน ${res.score}%) รับ +10 XP!`, "success");
        } else {
          window.soundFx.playIncorrect();
          this.showToast(`${feedback.emoji} ${feedback.label} (ความเหมือน ${res.score}%)`, "info");
        }
      },
      onError: (err) => {
        if (micBtn) micBtn.classList.remove("recording-pulse");
        if (resultBox) resultBox.innerHTML = "";
        this.showToast(err.message || "เกิดข้อผิดพลาดในการฟังเสียง", "error");
      },
      onEnd: () => {
        if (micBtn) micBtn.classList.remove("recording-pulse");
      }
    });
  }

  closeReadingWordPopup() {
    const modal = document.getElementById("reading-word-modal");
    if (modal) {
      modal.classList.add("hidden");
      modal.classList.remove("flex");
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
    const articles = window.articlesData || [];
    const artIndex = articles.findIndex(a => a.id === article.id);
    const prevArt = artIndex > 0 ? articles[artIndex - 1] : null;
    const nextArt = artIndex < articles.length - 1 ? articles[artIndex + 1] : null;

    const quizAnswers = this.articleQuizAnswers[article.id] || {};
    const quizResult = this.articleQuizSubmitted[article.id] || null;

    container.innerHTML = `
      <div class="space-y-8 animate-fadeIn max-w-3xl mx-auto pb-12">
        <!-- Back Navigation & Header -->
        <div class="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
          <button onclick="window.app.navigateTo('articles', { articleId: null })"
            class="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
            <span>กลับสู่หน้ารวมบทความ</span>
          </button>
          <div class="flex items-center gap-2">
            ${prevArt ? `
              <button onclick="window.app.navigateTo('articles', { articleId: '${prevArt.id}' })"
                class="px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-bold text-slate-700 dark:text-slate-200 transition-all flex items-center gap-1" title="บทความก่อนหน้า: ${prevArt.title}">
                <span>←</span>
                <span class="hidden sm:inline">ก่อนหน้า</span>
              </button>
            ` : ''}
            ${nextArt ? `
              <button onclick="window.app.navigateTo('articles', { articleId: '${nextArt.id}' })"
                class="px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-bold text-slate-700 dark:text-slate-200 transition-all flex items-center gap-1" title="บทความถัดไป: ${nextArt.title}">
                <span class="hidden sm:inline">ถัดไป</span>
                <span>→</span>
              </button>
            ` : ''}
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

        <!-- Unified Previous / Next Article Navigation Footer -->
        <div class="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          ${prevArt ? `
            <button onclick="window.app.navigateTo('articles', { articleId: '${prevArt.id}' })"
              class="w-full sm:w-auto px-4 py-2.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs flex items-center justify-center sm:justify-start gap-2 shadow-xs transition-all active:scale-95 group">
              <span class="group-hover:-translate-x-1 transition-transform">⬅</span>
              <div class="text-left">
                <div class="text-[10px] text-slate-400 font-medium">บทความก่อนหน้า</div>
                <div class="truncate max-w-[200px]">${prevArt.title}</div>
              </div>
            </button>
          ` : `
            <button onclick="window.app.navigateTo('articles', { articleId: null })"
              class="w-full sm:w-auto px-4 py-2.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs flex items-center justify-center sm:justify-start gap-2 shadow-xs transition-all active:scale-95">
              <span>⬅</span>
              <span>หน้ารวมคลังบทความ</span>
            </button>
          `}

          <button onclick="window.app.navigateTo('articles', { articleId: null })"
            class="w-full sm:w-auto px-4 py-2.5 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold text-xs flex items-center justify-center gap-1.5 transition-all">
            <span>📚 หน้ารวมบทความ (${artIndex + 1}/${articles.length})</span>
          </button>

          ${nextArt ? `
            <button onclick="window.app.navigateTo('articles', { articleId: '${nextArt.id}' })"
              class="w-full sm:w-auto px-5 py-2.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center justify-center sm:justify-end gap-2 shadow-md transition-all active:scale-95 group">
              <div class="text-right">
                <div class="text-[10px] text-indigo-200 font-medium">บทความถัดไป</div>
                <div class="truncate max-w-[200px]">${nextArt.title}</div>
              </div>
              <span class="group-hover:translate-x-1 transition-transform">➔</span>
            </button>
          ` : `
            <button onclick="window.app.navigateTo('articles', { articleId: null })"
              class="w-full sm:w-auto px-5 py-2.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md transition-all">
              <span>🎉 จบครบทุกบทความแล้ว! (กลับสู่หน้ารวม)</span>
              <span>➔</span>
            </button>
          `}
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
    let activeId = masterclassId !== undefined ? masterclassId : this.activeMasterclassId;
    if (activeId === "mc-wh-questions-mastery") {
      activeId = "mc-wh-part-1";
    }
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
    const masterclasses = window.masterclassData || [];
    const mcIndex = masterclasses.findIndex(m => m.id === topic.id);
    const prevMc = mcIndex > 0 ? masterclasses[mcIndex - 1] : null;
    const nextMc = mcIndex < masterclasses.length - 1 ? masterclasses[mcIndex + 1] : null;

    const answers = this.masterclassQuizAnswers[topic.id] || {};
    const quizResult = this.masterclassQuizSubmitted[topic.id] || null;

    container.innerHTML = `
      <div class="space-y-8 animate-fadeIn max-w-4xl mx-auto pb-12">
        <!-- Back Navigation & Top Bar -->
        <div class="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
          <button onclick="window.app.navigateTo('masterclass', { masterclassId: null })"
            class="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
            <span>กลับสู่หน้ารวมห้องติวเข้ม (Masterclass Hub)</span>
          </button>
          <div class="flex items-center gap-2">
            ${prevMc ? `
              <button onclick="window.app.navigateTo('masterclass', { masterclassId: '${prevMc.id}' })"
                class="px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-bold text-slate-700 dark:text-slate-200 transition-all flex items-center gap-1" title="ตอนก่อนหน้า: ${prevMc.title}">
                <span>←</span>
                <span class="hidden sm:inline">ก่อนหน้า</span>
              </button>
            ` : ''}
            ${nextMc ? `
              <button onclick="window.app.navigateTo('masterclass', { masterclassId: '${nextMc.id}' })"
                class="px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-bold text-slate-700 dark:text-slate-200 transition-all flex items-center gap-1" title="ตอนถัดไป: ${nextMc.title}">
                <span class="hidden sm:inline">ถัดไป</span>
                <span>→</span>
              </button>
            ` : ''}
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

        <!-- WH Questions Mastery Series Stepper -->
        ${topic.id.startsWith('mc-wh-part-') ? `
          <div class="p-3.5 sm:p-4 rounded-3xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div class="flex items-center gap-2">
              <span class="px-2 py-0.5 rounded-md bg-indigo-600 text-white font-black text-[10px] uppercase tracking-wider">Series</span>
              <span class="font-bold text-slate-800 dark:text-slate-200">WH Questions Mastery (3 Parts)</span>
            </div>
            <div class="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
              <button onclick="window.app.switchMasterclass('mc-wh-part-1')"
                class="px-3 py-1.5 rounded-xl font-bold transition-all shrink-0 ${topic.id === 'mc-wh-part-1' ? 'bg-indigo-600 text-white shadow-xs font-black' : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:text-indigo-600 border border-slate-200 dark:border-slate-800'}">
                Part 1: Who/What/Where/When
              </button>
              <span class="text-slate-400">➔</span>
              <button onclick="window.app.switchMasterclass('mc-wh-part-2')"
                class="px-3 py-1.5 rounded-xl font-bold transition-all shrink-0 ${topic.id === 'mc-wh-part-2' ? 'bg-indigo-600 text-white shadow-xs font-black' : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:text-indigo-600 border border-slate-200 dark:border-slate-800'}">
                Part 2: Why/Which/How
              </button>
              <span class="text-slate-400">➔</span>
              <button onclick="window.app.switchMasterclass('mc-wh-part-3')"
                class="px-3 py-1.5 rounded-xl font-bold transition-all shrink-0 ${topic.id === 'mc-wh-part-3' ? 'bg-indigo-600 text-white shadow-xs font-black' : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:text-indigo-600 border border-slate-200 dark:border-slate-800'}">
                Part 3: Indirect Questions
              </button>
            </div>
          </div>
        ` : ''}

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
          ${!['mc-12-tenses-complete', 'mc-paired-tenses', 'mc-grammar-pitfalls'].includes(topic.id) ? this.renderGenericMasterclassDetail(topic) : ''}
        </div>

        <!-- Interactive Knowledge Check (Quiz 5 ข้อ) -->
        ${this.renderMasterclassQuiz(topic, answers, quizResult)}

        <!-- Unified Previous / Next Masterclass Navigation Footer -->
        <div class="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          ${prevMc ? `
            <button onclick="window.app.navigateTo('masterclass', { masterclassId: '${prevMc.id}' })"
              class="w-full sm:w-auto px-4 py-2.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs flex items-center justify-center sm:justify-start gap-2 shadow-xs transition-all active:scale-95 group">
              <span class="group-hover:-translate-x-1 transition-transform">⬅</span>
              <div class="text-left">
                <div class="text-[10px] text-slate-400 font-medium">ตอนก่อนหน้า</div>
                <div class="truncate max-w-[200px]">${prevMc.title}</div>
              </div>
            </button>
          ` : `
            <button onclick="window.app.navigateTo('masterclass', { masterclassId: null })"
              class="w-full sm:w-auto px-4 py-2.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs flex items-center justify-center sm:justify-start gap-2 shadow-xs transition-all active:scale-95">
              <span>⬅</span>
              <span>หน้ารวม Masterclass Hub</span>
            </button>
          `}

          <button onclick="window.app.navigateTo('masterclass', { masterclassId: null })"
            class="w-full sm:w-auto px-4 py-2.5 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold text-xs flex items-center justify-center gap-1.5 transition-all">
            <span>🎯 หน้ารวมติวเข้ม (${mcIndex + 1}/${masterclasses.length})</span>
          </button>

          ${nextMc ? `
            <button onclick="window.app.navigateTo('masterclass', { masterclassId: '${nextMc.id}' })"
              class="w-full sm:w-auto px-5 py-2.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center justify-center sm:justify-end gap-2 shadow-md transition-all active:scale-95 group">
              <div class="text-right">
                <div class="text-[10px] text-indigo-200 font-medium">ตอนถัดไป</div>
                <div class="truncate max-w-[200px]">${nextMc.title}</div>
              </div>
              <span class="group-hover:translate-x-1 transition-transform">➔</span>
            </button>
          ` : `
            <button onclick="window.app.navigateTo('masterclass', { masterclassId: null })"
              class="w-full sm:w-auto px-5 py-2.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md transition-all">
              <span>🎉 จบครบทุกบทเรียนติวเข้มแล้ว! (กลับสู่ Hub)</span>
              <span>➔</span>
            </button>
          `}
        </div>
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

  formatInlineContent(str) {
    if (!str) return "";
    let s = str;
    // Code badge
    s = s.replace(/`([^`]+)`/g, `<code class="px-2 py-0.5 mx-0.5 rounded-lg text-xs font-mono font-black text-orange-600 dark:text-orange-400 bg-orange-100/80 dark:bg-orange-950/70 border border-orange-200 dark:border-orange-800/80 shadow-xs">$1</code>`);
    // Bold
    s = s.replace(/\*\*(.*?)\*\*/g, `<strong class="text-slate-900 dark:text-white font-bold">$1</strong>`);
    // Italic
    s = s.replace(/\*([^*]+)\*/g, `<em class="text-indigo-600 dark:text-indigo-400 font-medium not-italic">$1</em>`);
    return s;
  }

  formatMarkdownContent(text) {
    if (!text) return "";

    const lines = text.split("\n");
    const result = [];
    let inTable = false;
    let tableLines = [];

    const flushTable = () => {
      if (tableLines.length === 0) return;
      const rows = tableLines.filter(l => !l.trim().match(/^\|(\s*:?-+:?\s*\|)+$/));
      if (rows.length === 0) return;

      let html = `<div class="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 my-4 shadow-sm bg-white dark:bg-slate-900">\n`;
      html += `  <table class="w-full text-left border-collapse min-w-[550px] text-xs sm:text-sm">\n`;

      const headerCols = rows[0].split("|").map(c => c.trim()).filter((c, i, a) => i > 0 && i < a.length - 1);
      html += `    <thead>\n      <tr class="bg-indigo-50/80 dark:bg-indigo-950/60 border-b border-slate-200 dark:border-slate-800 text-indigo-950 dark:text-indigo-200 font-bold">\n`;
      headerCols.forEach(col => {
        html += `        <th class="p-3.5">${this.formatInlineContent(col)}</th>\n`;
      });
      html += `      </tr>\n    </thead>\n    <tbody class="divide-y divide-slate-100 dark:divide-slate-800/60">\n`;

      for (let r = 1; r < rows.length; r++) {
        const cols = rows[r].split("|").map(c => c.trim()).filter((c, i, a) => i > 0 && i < a.length - 1);
        html += `      <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition-colors">\n`;
        cols.forEach(col => {
          html += `        <td class="p-3.5 align-top text-slate-700 dark:text-slate-300">${this.formatInlineContent(col)}</td>\n`;
        });
        html += `      </tr>\n`;
      }

      html += `    </tbody>\n  </table>\n</div>`;
      result.push(html);
      tableLines = [];
      inTable = false;
    };

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmed = line.trim();

      if (trimmed.startsWith("|") && trimmed.endsWith("|")) {
        inTable = true;
        tableLines.push(trimmed);
        continue;
      } else if (inTable) {
        flushTable();
      }

      if (!trimmed) continue;

      if (trimmed === "---") {
        result.push(`<hr class="my-6 border-slate-200 dark:border-slate-800" />`);
        continue;
      }

      if (trimmed.startsWith("### ")) {
        result.push(`<h3 class="text-base sm:text-lg font-black text-slate-900 dark:text-white mt-6 mb-2 flex items-center gap-2">${this.formatInlineContent(trimmed.slice(4))}</h3>`);
        continue;
      }

      if (trimmed.startsWith("#### ")) {
        result.push(`<h4 class="text-sm sm:text-base font-black text-indigo-600 dark:text-indigo-400 mt-4 mb-2 flex items-center gap-1.5">${this.formatInlineContent(trimmed.slice(5))}</h4>`);
        continue;
      }

      // Formula block: line that starts and ends with backtick and contains formula elements
      if (/^`[^`]+\+[^`]+`$/.test(trimmed)) {
        const rawFormula = trimmed.replace(/^`|`$/g, "");
        result.push(`
          <div class="my-3 p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-orange-500/10 via-amber-500/10 to-indigo-500/10 border border-orange-200 dark:border-orange-800/80 font-mono font-black text-center text-orange-600 dark:text-orange-400 text-xs sm:text-sm shadow-xs">
            ${rawFormula}
          </div>
        `);
        continue;
      }

      // Category badges: • **หมวด A:...** or • **หมวด B:...**
      const catMatch = trimmed.match(/^[•\-]?\s*\*\*หมวด\s*([AB]):\s*([^(*]+)(?:\(([^)]+)\))?\*\*:?/i);
      if (catMatch) {
        const code = catMatch[1].toUpperCase();
        const thTitle = catMatch[2].trim();
        const enTitle = catMatch[3] ? catMatch[3].trim() : "";
        const isA = code === "A";
        result.push(`
          <div class="mt-4 mb-2 flex items-center gap-2">
            <span class="px-2.5 py-0.5 rounded-lg text-xs font-black ${isA ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/70 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800" : "bg-indigo-100 text-indigo-800 dark:bg-indigo-950/70 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800"}">
              ${isA ? "☕" : "🚀"} หมวด ${code}
            </span>
            <span class="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">${thTitle} ${enTitle ? `(${enTitle})` : ""}</span>
          </div>
        `);
        continue;
      }

      // Example sentence with English quote and Thai translation:
      // Examples: - *"Where do you live?"* (คุณอาศัยอยู่ที่ไหน?)
      //          • *"Who approved this pull request?"* (ใครเป็นคนอนุมัติ PR นี้?)
      const quoteMatch = trimmed.match(/^[•\-]?\s*(?:(?:ตัวอย่าง|•)?\s*(?:Daily Life|DevOps)?:?\s*)?\*\"([^\"]+)\"\*\s*\(([^)]+)\)$/i);
      if (quoteMatch) {
        const enText = quoteMatch[1];
        const thText = quoteMatch[2];
        const escapedEn = enText.replace(/'/g, "\\'");
        result.push(`
          <div class="my-2 p-3 sm:p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-800 flex items-start justify-between gap-3 group hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors">
            <div class="space-y-0.5 min-w-0">
              <div class="font-bold text-xs sm:text-sm text-slate-900 dark:text-white tracking-wide">"${enText}"</div>
              <div class="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400">${thText}</div>
            </div>
            <button type="button" onclick="window.speechEngine.speak('${escapedEn}')" class="shrink-0 p-1.5 rounded-xl text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/60 hover:scale-110 active:scale-95 transition-all" title="ฟังการออกเสียง">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 3.5a.75.75 0 00-1.28-.53l-3.97 3.97H2.75A1.75 1.75 0 001 8.69v2.62c0 .966.784 1.75 1.75 1.75h2l3.97 3.97a.75.75 0 001.28-.53V3.5zM14.5 10a4.5 4.5 0 00-1.32-3.18.75.75 0 111.06-1.06A6 6 0 0116 10a6 6 0 01-1.76 4.24.75.75 0 01-1.06-1.06A4.5 4.5 0 0014.5 10z"/></svg>
            </button>
          </div>
        `);
        continue;
      }

      // Callout alert box for ⚠️ or 💡
      if (trimmed.startsWith("⚠️") || trimmed.startsWith("💡")) {
        const isWarn = trimmed.startsWith("⚠️");
        result.push(`
          <div class="my-3 p-3.5 sm:p-4 rounded-2xl ${isWarn ? "bg-amber-50/70 dark:bg-amber-950/30 border-amber-200 dark:border-amber-900/50 text-amber-900 dark:text-amber-200" : "bg-indigo-50/70 dark:bg-indigo-950/30 border-indigo-200 dark:border-indigo-900/50 text-indigo-950 dark:text-indigo-200"} border text-xs sm:text-sm leading-relaxed">
            ${this.formatInlineContent(trimmed)}
          </div>
        `);
        continue;
      }

      // List item
      if (trimmed.match(/^(\d+\.|[•\-])\s+/)) {
        result.push(`<div class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed my-1 pl-2 border-l-2 border-indigo-200 dark:border-indigo-800">${this.formatInlineContent(trimmed)}</div>`);
        continue;
      }

      // Regular paragraph
      result.push(`<p class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed my-1.5">${this.formatInlineContent(trimmed)}</p>`);
    }

    if (inTable) flushTable();
    return result.join("\n");
  }

  renderGenericMasterclassDetail(topic) {
    if (!topic.sections || topic.sections.length === 0) return "";

    return `
      <div class="space-y-8">
        ${topic.sections.map((sec, secIdx) => `
          <div class="p-5 sm:p-7 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div class="flex items-center gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
              <span class="px-2.5 py-1 rounded-full text-xs font-black bg-indigo-50 dark:bg-indigo-950/70 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800/80">
                ตอนที่ ${secIdx + 1}
              </span>
              <h2 class="text-base sm:text-xl font-black text-slate-900 dark:text-white leading-snug">
                ${sec.heading}
              </h2>
            </div>

            <div class="space-y-3">
              ${this.formatMarkdownContent(sec.content)}
            </div>

            ${sec.keyPhrases && sec.keyPhrases.length > 0 ? `
              <div class="mt-4 p-4 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/60 space-y-2">
                <span class="text-xs font-black uppercase tracking-wider text-indigo-700 dark:text-indigo-300 flex items-center gap-1.5">
                  <span>⚡ สรุปประโยคสำคัญประจำตอน (Key Takeaways)</span>
                </span>
                <div class="space-y-2 pt-1">
                  ${sec.keyPhrases.map(kp => `
                    <div class="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-indigo-100 dark:border-indigo-900/60 flex items-start justify-between gap-2 text-xs">
                      <div>
                        <strong class="text-indigo-900 dark:text-indigo-200 font-bold block sm:inline">${kp.en}</strong>
                        <span class="text-slate-500 dark:text-slate-400 block sm:inline sm:ml-2">${kp.th}</span>
                      </div>
                      <button onclick="window.speechEngine.speak('${kp.en.replace(/'/g, "\\'")}')" class="shrink-0 p-1 text-indigo-600 dark:text-indigo-400 hover:scale-110 active:scale-95 transition-all" title="ฟังการออกเสียง">
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
    `;
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
    if (topic.sections) {
      topic.sections.forEach(sec => {
        if (sec.keyPhrases) {
          sec.keyPhrases.forEach(kp => phrases.push(kp.en));
        }
        const quotes = sec.content.match(/\*\"([^\"]+)\"\*/g);
        if (quotes) {
          quotes.forEach(q => {
            const clean = q.replace(/\*\"|\"\*/g, "").trim();
            if (clean && !phrases.includes(clean)) phrases.push(clean);
          });
        }
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
    const questions = topic.quizQuestions || topic.quiz || [];
    const passThreshold = Math.max(1, Math.ceil(questions.length * 0.8));

    return `
      <div class="pt-8 border-t border-slate-200 dark:border-slate-800 space-y-6">
        <div class="flex items-center justify-between">
          <div>
            <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-bold">
              <span>🎯 Masterclass Certification Quiz</span>
              <span>•</span>
              <span>${questions.length} ข้อ</span>
            </div>
            <h3 class="text-xl font-bold text-slate-900 dark:text-white mt-1">
              แบบทดสอบประเมินผลความชำนาญ
            </h3>
            <p class="text-xs text-slate-500 dark:text-slate-400">
              ตอบถูกอย่างน้อย ${passThreshold} ใน ${questions.length} ข้อขึ้นไป เพื่อผ่านและรับโบนัส +50 XP
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
    const questions = topic.quizQuestions || topic.quiz || [];

    if (Object.keys(answers).length < questions.length) {
      alert(`กรุณาตอบคำถามให้ครบทั้ง ${questions.length} ข้อก่อนส่งคำตอบครับ`);
      return;
    }

    let score = 0;
    questions.forEach((q, idx) => {
      if (answers[idx] === q.answer) {
        score++;
      }
    });

    const percent = Math.round((score / questions.length) * 100);
    const passThreshold = Math.max(1, Math.ceil(questions.length * 0.8));
    const passed = score >= passThreshold;

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
      this.showToast(`ได้คะแนน ${score}/${questions.length} ข้อ ต้องตอบถูกอย่างน้อย ${passThreshold} ข้อเพื่อผ่านนะ`, "error");
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
    const topics = window.sentenceBuilderData || [];
    const topicIndex = topics.findIndex(t => t.id === topic.id);
    const prevTopic = topicIndex > 0 ? topics[topicIndex - 1] : null;
    const nextTopic = topicIndex < topics.length - 1 ? topics[topicIndex + 1] : null;

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
        <div class="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
          <button onclick="window.app.navigateTo('sentence-builder')"
                  class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-bold transition-all">
            <span>←</span>
            <span>กลับไปหน้ารวมหัวข้อฝึกแต่งประโยค</span>
          </button>
          <div class="flex items-center gap-2">
            ${prevTopic ? `
              <button onclick="window.app.navigateTo('sentence-builder', { topicId: '${prevTopic.id}' })"
                class="px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-bold text-slate-700 dark:text-slate-200 transition-all flex items-center gap-1" title="หัวข้อก่อนหน้า: ${prevTopic.title}">
                <span>←</span>
                <span class="hidden sm:inline">ก่อนหน้า</span>
              </button>
            ` : ''}
            ${nextTopic ? `
              <button onclick="window.app.navigateTo('sentence-builder', { topicId: '${nextTopic.id}' })"
                class="px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-bold text-slate-700 dark:text-slate-200 transition-all flex items-center gap-1" title="หัวข้อถัดไป: ${nextTopic.title}">
                <span class="hidden sm:inline">ถัดไป</span>
                <span>→</span>
              </button>
            ` : ''}
            <span class="px-3 py-1 rounded-full text-xs font-black bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800">
              บทที่ ${topic.chapterNo || (topicIndex + 1)} จาก ${topics.length || 10}
            </span>
          </div>
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

        <!-- Unified Previous / Next Sentence Topic Navigation Footer -->
        <div class="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          ${prevTopic ? `
            <button onclick="window.app.navigateTo('sentence-builder', { topicId: '${prevTopic.id}' })"
              class="w-full sm:w-auto px-4 py-2.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs flex items-center justify-center sm:justify-start gap-2 shadow-xs transition-all active:scale-95 group">
              <span class="group-hover:-translate-x-1 transition-transform">⬅</span>
              <div class="text-left">
                <div class="text-[10px] text-slate-400 font-medium">หัวข้อก่อนหน้า (บทที่ ${prevTopic.chapterNo || topicIndex})</div>
                <div class="truncate max-w-[200px]">${prevTopic.title}</div>
              </div>
            </button>
          ` : `
            <button onclick="window.app.navigateTo('sentence-builder')"
              class="w-full sm:w-auto px-4 py-2.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs flex items-center justify-center sm:justify-start gap-2 shadow-xs transition-all active:scale-95">
              <span>⬅</span>
              <span>หน้ารวมฝึกแต่งประโยค</span>
            </button>
          `}

          <button onclick="window.app.navigateTo('sentence-builder')"
            class="w-full sm:w-auto px-4 py-2.5 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold text-xs flex items-center justify-center gap-1.5 transition-all">
            <span>🧩 หน้ารวมฝึกแต่งประโยค (${topicIndex + 1}/${topics.length})</span>
          </button>

          ${nextTopic ? `
            <button onclick="window.app.navigateTo('sentence-builder', { topicId: '${nextTopic.id}' })"
              class="w-full sm:w-auto px-5 py-2.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center justify-center sm:justify-end gap-2 shadow-md transition-all active:scale-95 group">
              <div class="text-right">
                <div class="text-[10px] text-indigo-200 font-medium">หัวข้อถัดไป (บทที่ ${nextTopic.chapterNo || topicIndex + 2})</div>
                <div class="truncate max-w-[200px]">${nextTopic.title}</div>
              </div>
              <span class="group-hover:translate-x-1 transition-transform">➔</span>
            </button>
          ` : `
            <button onclick="window.app.navigateTo('sentence-builder')"
              class="w-full sm:w-auto px-5 py-2.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md transition-all">
              <span>🎉 จบครบทุกบทเรียนแต่งประโยคแล้ว! (กลับสู่หน้ารวม)</span>
              <span>➔</span>
            </button>
          `}
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
