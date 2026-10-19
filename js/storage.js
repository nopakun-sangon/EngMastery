/**
 * EngMastery: Local Storage & Data Management
 * Manages gamification (XP, streaks), completed levels, quiz score history,
 * and provides full JSON Backup & Restore capabilities.
 */

class StorageManager {
  constructor() {
    this.STORAGE_KEY = "engmastery_data_v2";
    this.state = this.loadState();
    this.updateDailyStreak();
  }

  getDefaultState() {
    return {
      version: 2,
      profile: {
        name: "Pro Learner",
        avatar: "🚀",
        dailyGoalXP: 50,
        joinedDate: new Date().toISOString().split("T")[0]
      },
      stats: {
        totalXP: 0,
        dailyXP: 0,
        streak: 1,
        lastActiveDate: new Date().toISOString().split("T")[0],
        speakingDrillsCount: 0
      },
      completedLevels: [], // e.g. ["level-a1"]
      quizHistory: {},    // e.g. { "level-a1": { bestScore: 5, totalQuestions: 5, percent: 100, timestamp: "..." } }
      savedVocab: [],     // e.g. ["deploy", "redundancy", "latency"]
      dailyQuests: {
        date: new Date().toISOString().split("T")[0],
        readArticle: 0,       // target: 1 (20 XP)
        speakSentences: 0,    // target: 3 (15 XP)
        reviewFlashcards: 0,  // target: 10 (10 XP)
        claimed: {
          readArticle: false,
          speakSentences: false,
          reviewFlashcards: false
        }
      },
      preferences: {
        theme: "dark",
        accent: "en-US",
        sfx: true,
        showDialogueThai: true
      }
    };
  }

  loadState() {
    try {
      const raw = localStorage.getItem(this.STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        const today = new Date().toISOString().split("T")[0];
        let quests = parsed.dailyQuests;
        if (!quests || quests.date !== today) {
          quests = {
            date: today,
            readArticle: 0,
            speakSentences: 0,
            reviewFlashcards: 0,
            claimed: {
              readArticle: false,
              speakSentences: false,
              reviewFlashcards: false
            }
          };
        }

        return {
          ...this.getDefaultState(),
          ...parsed,
          profile: { ...this.getDefaultState().profile, ...(parsed.profile || {}) },
          stats: { ...this.getDefaultState().stats, ...(parsed.stats || {}) },
          savedVocab: Array.isArray(parsed.savedVocab) ? parsed.savedVocab : [],
          dailyQuests: quests,
          preferences: { ...this.getDefaultState().preferences, ...(parsed.preferences || {}) }
        };
      }
    } catch (e) {
      console.warn("StorageManager: Could not load state, using defaults.", e);
    }
    return this.getDefaultState();
  }

  getState() {
    return this.state;
  }

  save() {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.state));
    } catch (e) {
      console.error("StorageManager: Failed to save state.", e);
    }
  }

  updateDailyStreak() {
    const today = new Date().toISOString().split("T")[0];
    const lastActive = this.state.stats.lastActiveDate;

    if (!lastActive) {
      this.state.stats.lastActiveDate = today;
      this.state.stats.streak = 1;
      this.state.stats.dailyXP = 0;
      this.save();
      return;
    }

    if (lastActive === today) {
      return; // Already logged in today
    }

    const lastDate = new Date(lastActive);
    const currentDate = new Date(today);
    const diffDays = Math.round((currentDate - lastDate) / (1000 * 60 * 60 * 24));

    if (diffDays === 1) {
      this.state.stats.streak += 1;
    } else if (diffDays > 1) {
      this.state.stats.streak = 1; // Streak reset
    }

    this.state.stats.dailyXP = 0;
    this.state.stats.lastActiveDate = today;
    this.save();
  }

  addXP(amount) {
    this.state.stats.totalXP += amount;
    this.state.stats.dailyXP = (this.state.stats.dailyXP || 0) + amount;
    this.save();
    return {
      totalXP: this.state.stats.totalXP,
      dailyXP: this.state.stats.dailyXP
    };
  }

  recordQuizScore(levelId, score, totalQuestions) {
    const percent = Math.round((score / totalQuestions) * 100);
    const existing = this.state.quizHistory[levelId];
    const bestScore = existing ? Math.max(existing.bestScore, score) : score;
    const bestPercent = Math.round((bestScore / totalQuestions) * 100);

    this.state.quizHistory[levelId] = {
      bestScore,
      totalQuestions,
      bestPercent,
      lastAttemptScore: score,
      lastAttemptPercent: percent,
      timestamp: new Date().toISOString()
    };

    // If passed (>= 80%), mark level as completed
    if (bestPercent >= 80) {
      if (!this.state.completedLevels.includes(levelId)) {
        this.state.completedLevels.push(levelId);
      }
    }

    this.save();
    return this.state.quizHistory[levelId];
  }

  isLevelCompleted(levelId) {
    return this.state.completedLevels.includes(levelId);
  }

  getQuizHistory(levelId) {
    return this.state.quizHistory[levelId] || null;
  }

  getOverallProgress() {
    const total = (window.courseData || []).length || 5;
    const completed = this.state.completedLevels.length;
    return Math.min(100, Math.round((completed / total) * 100));
  }

  recordSpeakingDrill() {
    this.state.stats.speakingDrillsCount = (this.state.stats.speakingDrillsCount || 0) + 1;
    this.save();
  }

  updateProfileName(name) {
    if (name && name.trim()) {
      this.state.profile.name = name.trim();
      this.save();
    }
  }

  updateAvatar(avatar) {
    this.state.profile.avatar = avatar;
    this.save();
  }

  toggleDialogueThai(show) {
    this.state.preferences.showDialogueThai = show !== undefined ? show : !this.state.preferences.showDialogueThai;
    this.save();
    return this.state.preferences.showDialogueThai;
  }

  // ==========================================
  // DAILY QUESTS & REWARDS
  // ==========================================
  getDailyQuests() {
    const today = new Date().toISOString().split("T")[0];
    if (!this.state.dailyQuests || this.state.dailyQuests.date !== today) {
      this.state.dailyQuests = {
        date: today,
        readArticle: 0,
        speakSentences: 0,
        reviewFlashcards: 0,
        claimed: {
          readArticle: false,
          speakSentences: false,
          reviewFlashcards: false
        }
      };
      this.save();
    }
    return this.state.dailyQuests;
  }

  recordQuestProgress(type, count = 1) {
    const quests = this.getDailyQuests();
    if (type in quests && typeof quests[type] === "number") {
      quests[type] += count;
      this.save();
    }
    return quests;
  }

  claimQuestReward(questKey) {
    const quests = this.getDailyQuests();
    const targets = {
      readArticle: { target: 1, xp: 20, name: "อ่านบทความใน Reading Lab 1 เรื่อง" },
      speakSentences: { target: 3, xp: 15, name: "ซ้อมพูดใน Speaking Lab 3 ประโยค" },
      reviewFlashcards: { target: 10, xp: 10, name: "ทบทวน Flashcard 10 คำ" }
    };

    const config = targets[questKey];
    if (!config) return { success: false, message: "ภารกิจไม่ถูกต้อง" };

    if (quests.claimed && quests.claimed[questKey]) {
      return { success: false, message: "รับรางวัลภารกิจนี้ไปแล้ววันนี้" };
    }

    if ((quests[questKey] || 0) < config.target) {
      return { success: false, message: `ยังทำภารกิจไม่ครบ (${quests[questKey] || 0}/${config.target})` };
    }

    // Reward XP
    quests.claimed[questKey] = true;
    this.addXP(config.xp);
    this.save();
    return { success: true, xp: config.xp, name: config.name };
  }

  // ==========================================
  // MY SAVED VOCAB (BOOKMARKS)
  // ==========================================
  getSavedVocab() {
    if (!Array.isArray(this.state.savedVocab)) {
      this.state.savedVocab = [];
    }
    return this.state.savedVocab;
  }

  isWordSaved(word) {
    if (!word) return false;
    const clean = word.toLowerCase().trim();
    return this.getSavedVocab().includes(clean);
  }

  toggleSaveWord(word) {
    if (!word) return false;
    const clean = word.toLowerCase().trim();
    const list = this.getSavedVocab();
    const idx = list.indexOf(clean);
    let isSaved = false;

    if (idx >= 0) {
      list.splice(idx, 1);
      isSaved = false;
    } else {
      list.push(clean);
      isSaved = true;
    }

    this.state.savedVocab = list;
    this.save();
    return isSaved;
  }

  // ==========================================
  // BACKUP & RESTORE (JSON Export / Import)
  // ==========================================
  exportBackupJSON() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.state, null, 2));
    const downloadAnchor = document.createElement("a");
    const today = new Date().toISOString().split("T")[0];
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `engmastery-backup-${today}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  }

  importRestoreJSON(file, onSuccess, onError) {
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target.result);
        if (!parsed || typeof parsed !== "object") {
          throw new Error("Invalid backup format");
        }
        // Validate required root keys
        if (!parsed.stats || !parsed.profile) {
          throw new Error("Missing required profile or stats data");
        }

        this.state = {
          ...this.getDefaultState(),
          ...parsed
        };
        this.save();

        if (onSuccess) onSuccess(this.state);
      } catch (err) {
        console.error("Backup import error:", err);
        if (onError) onError(err);
      }
    };
    reader.onerror = () => {
      if (onError) onError(new Error("File read error"));
    };
    reader.readAsText(file);
  }

  resetAllData() {
    localStorage.removeItem(this.STORAGE_KEY);
    this.state = this.getDefaultState();
    this.save();
  }
}

if (typeof window !== "undefined") {
  window.storageManager = new StorageManager();
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = StorageManager;
}
