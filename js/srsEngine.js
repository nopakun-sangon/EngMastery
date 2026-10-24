/**
 * EngMastery: Spaced Repetition System (SRS)
 * Implements the SuperMemo-2 (SM-2) retention algorithm.
 * Automatically schedules flashcards based on individual memory retention intervals.
 */

(function () {
  'use strict';

  class SRSEngine {
    constructor() {
      this.STORAGE_KEY = 'engmastery_srs_cards';
      this.STATS_KEY = 'engmastery_srs_stats';
      this.cards = this.loadCards();
      this.stats = this.loadStats();
    }

    loadCards() {
      try {
        const raw = localStorage.getItem(this.STORAGE_KEY);
        return raw ? JSON.parse(raw) : {};
      } catch (e) {
        return {};
      }
    }

    saveCards() {
      try {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.cards));
      } catch (e) {}
    }

    loadStats() {
      try {
        const raw = localStorage.getItem(this.STATS_KEY);
        return raw ? JSON.parse(raw) : { totalReviewed: 0, streakDays: 0, lastReviewDate: '' };
      } catch (e) {
        return { totalReviewed: 0, streakDays: 0, lastReviewDate: '' };
      }
    }

    saveStats() {
      try {
        localStorage.setItem(this.STATS_KEY, JSON.stringify(this.stats));
      } catch (e) {}
    }

    getTodayStr() {
      const d = new Date();
      return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    }

    addDays(dateStr, days) {
      const d = new Date(dateStr);
      d.setDate(d.getDate() + days);
      return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    }

    /**
     * Get or initialize card state
     */
    getCardState(wordId) {
      if (!this.cards[wordId]) {
        this.cards[wordId] = {
          id: wordId,
          repetitions: 0,
          interval: 0,
          easeFactor: 2.5,
          dueDate: this.getTodayStr(),
          lastReviewed: null,
          history: []
        };
      }
      return this.cards[wordId];
    }

    /**
     * Submit an SM-2 rating:
     * 1: Again (ลืม / ตอบผิด) -> Reset interval to 1 day
     * 2: Hard (ยาก / นึกนาน) -> Short interval
     * 3: Good (จำได้ / ปกติ) -> Standard SM-2 interval
     * 4: Easy (ง่ายมาก / ตอบได้ทันที) -> Bonus interval
     */
    recordReview(wordId, rating) {
      const card = this.getCardState(wordId);
      const today = this.getTodayStr();

      let nextInterval = 1;
      let nextRepetitions = card.repetitions;
      let nextEF = card.easeFactor;

      // SM-2 Calculation
      if (rating === 1) {
        // Again
        nextRepetitions = 0;
        nextInterval = 1;
        nextEF = Math.max(1.3, nextEF - 0.2);
      } else if (rating === 2) {
        // Hard
        nextRepetitions = nextRepetitions + 1;
        nextInterval = Math.max(1, Math.round((card.interval || 1) * 1.2));
        nextEF = Math.max(1.3, nextEF - 0.15);
      } else if (rating === 3) {
        // Good
        if (nextRepetitions === 0) {
          nextInterval = 1;
        } else if (nextRepetitions === 1) {
          nextInterval = 4;
        } else {
          nextInterval = Math.round(card.interval * nextEF);
        }
        nextRepetitions = nextRepetitions + 1;
      } else if (rating === 4) {
        // Easy
        if (nextRepetitions === 0) {
          nextInterval = 3;
        } else if (nextRepetitions === 1) {
          nextInterval = 7;
        } else {
          nextInterval = Math.round(card.interval * nextEF * 1.3);
        }
        nextRepetitions = nextRepetitions + 1;
        nextEF = nextEF + 0.15;
      }

      card.repetitions = nextRepetitions;
      card.interval = nextInterval;
      card.easeFactor = parseFloat(nextEF.toFixed(2));
      card.lastReviewed = today;
      card.dueDate = this.addDays(today, nextInterval);
      card.history.push({ date: today, rating, interval: nextInterval });

      this.saveCards();

      // Update daily stats & streak
      this.stats.totalReviewed = (this.stats.totalReviewed || 0) + 1;
      if (this.stats.lastReviewDate !== today) {
        // New day review
        const yesterday = this.addDays(today, -1);
        if (this.stats.lastReviewDate === yesterday) {
          this.stats.streakDays = (this.stats.streakDays || 0) + 1;
        } else if (!this.stats.lastReviewDate) {
          this.stats.streakDays = 1;
        } else {
          this.stats.streakDays = 1; // streak reset
        }
        this.stats.lastReviewDate = today;
      }
      this.saveStats();

      // Award XP
      const xp = rating === 4 ? 20 : (rating === 3 ? 15 : (rating === 2 ? 10 : 5));
      if (window.app && window.app.addXP) {
        window.app.addXP(xp, `ทบทวนคำศัพท์ SRS: ${wordId}`);
      }

      return {
        nextInterval,
        dueDate: card.dueDate,
        xp
      };
    }

    /**
     * Get review queue for today
     * @param {Array} allVocab - List of all vocab objects
     * @param {number} maxNewCards - Maximum new unlearned cards to include
     */
    getDueCards(allVocab = [], maxNewCards = 10) {
      const today = this.getTodayStr();
      const due = [];
      const unlearned = [];

      allVocab.forEach((v) => {
        const id = v.id || v.word;
        const state = this.cards[id];

        if (state) {
          if (state.dueDate <= today) {
            due.push({ vocab: v, state, isNew: false });
          }
        } else {
          unlearned.push({ vocab: v, state: null, isNew: true });
        }
      });

      // Sort due cards by urgency (overdue first)
      due.sort((a, b) => (a.state.dueDate > b.state.dueDate ? 1 : -1));

      // Append up to maxNewCards
      const newBatch = unlearned.slice(0, maxNewCards);

      return [...due, ...newBatch];
    }

    getStatsSummary(allVocab = []) {
      const today = this.getTodayStr();
      let dueToday = 0;
      let learning = 0;
      let mastered = 0; // interval >= 21 days

      Object.values(this.cards).forEach((c) => {
        if (c.dueDate <= today) dueToday++;
        if (c.interval >= 21) mastered++;
        else if (c.repetitions > 0) learning++;
      });

      return {
        dueToday,
        learning,
        mastered,
        totalTracked: Object.keys(this.cards).length,
        streakDays: this.stats.streakDays || 0,
        totalReviewed: this.stats.totalReviewed || 0
      };
    }
  }

  window.srsEngine = new SRSEngine();
})();
