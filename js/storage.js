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
        return {
          ...this.getDefaultState(),
          ...parsed,
          profile: { ...this.getDefaultState().profile, ...(parsed.profile || {}) },
          stats: { ...this.getDefaultState().stats, ...(parsed.stats || {}) },
          preferences: { ...this.getDefaultState().preferences, ...(parsed.preferences || {}) }
        };
      }
    } catch (e) {
      console.warn("StorageManager: Could not load state, using defaults.", e);
    }
    return this.getDefaultState();
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

window.storageManager = new StorageManager();
