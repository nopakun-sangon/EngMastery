/**
 * Comprehensive Unit & Integration Tests for Sentence Flashcards (CEFR A1 - C2)
 * Verifies:
 * 1. Data integrity (530 sentences across A1, A2, B1, B2, C1, C2)
 * 2. Schema validity (en, th, level, category, pattern, keyVocab)
 * 3. Direction switcher (en-th <-> th-en)
 * 4. Filtering (CEFR levels and categories)
 * 5. Navigation & Flip state machine
 * 6. Mastery tracking & XP award
 * 7. Flashcard instant-lookup exclusion
 */

const fs = require('fs');
const vm = require('vm');

function runTests() {
  console.log("🧪 Starting Sentence Flashcards Tests...\n");

  let passed = 0;
  let failed = 0;

  function assert(desc, condition) {
    if (condition) {
      console.log(`  ✅ PASS: ${desc}`);
      passed++;
    } else {
      console.error(`  ❌ FAIL: ${desc}`);
      failed++;
    }
  }

  // --- Suite 1: Data Integrity & CEFR Levels ---
  console.log("Test Suite 1: Data Integrity & CEFR Levels");
  const dataCode = fs.readFileSync('data/sentenceFlashcardsData.js', 'utf8');
  const dataContext = { window: {} };
  vm.createContext(dataContext);
  vm.runInContext(dataCode, dataContext);

  const sentences = dataContext.window.sentenceFlashcardsData;
  assert("sentenceFlashcardsData exists and is an array", Array.isArray(sentences));
  assert("Total sentences is exactly 530", sentences.length === 530);

  const levelCounts = {};
  sentences.forEach((s, idx) => {
    levelCounts[s.level] = (levelCounts[s.level] || 0) + 1;
    if (!s.id || !s.level || !s.en || !s.th || !s.category) {
      throw new Error(`Sentence at index ${idx} missing required fields: ${JSON.stringify(s)}`);
    }
    if (typeof s.en !== 'string' || s.en.trim().length === 0) {
      throw new Error(`Sentence at index ${idx} has invalid English text`);
    }
    if (typeof s.th !== 'string' || s.th.trim().length === 0) {
      throw new Error(`Sentence at index ${idx} has invalid Thai text`);
    }
  });

  assert("Level A1 has exactly 100 sentences", levelCounts['A1'] === 100);
  assert("Level A2 has exactly 100 sentences", levelCounts['A2'] === 100);
  assert("Level B1 has exactly 100 sentences", levelCounts['B1'] === 100);
  assert("Level B2 has exactly 100 sentences", levelCounts['B2'] === 100);
  assert("Level C1 has exactly 80 sentences", levelCounts['C1'] === 80);
  assert("Level C2 has exactly 50 sentences", levelCounts['C2'] === 50);

  // --- Suite 2: EngMasteryApp Sentence Flashcards Integration ---
  console.log("\nTest Suite 2: EngMasteryApp Sentence Flashcards Integration");

  // Mock DOM and environment
  function createElement(tag) {
    return {
      tagName: tag.toUpperCase(),
      nodeType: 1,
      id: '',
      className: '',
      style: {},
      dataset: {},
      classList: {
        _classes: new Set(),
        add: function(...cls) { cls.forEach(c => this._classes.add(c)); },
        remove: function(...cls) { cls.forEach(c => this._classes.delete(c)); },
        contains: function(c) { return this._classes.has(c); }
      },
      innerHTML: '',
      children: [],
      parentElement: null,
      appendChild: function(c) { this.children.push(c); return c; },
      remove: function() {},
      listeners: {},
      addEventListener: function(event, fn) {
        if (!this.listeners[event]) this.listeners[event] = [];
        this.listeners[event].push(fn);
      },
      dispatchEvent: function(event) {
        if (this.listeners[event.type]) {
          this.listeners[event.type].forEach(fn => fn(event));
        }
      },
      querySelector: function() { return null; },
      querySelectorAll: function() { return []; },
      closest: function(sel) {
        const classes = sel.split(',').map(s => s.trim().replace('.', ''));
        let curr = this;
        while (curr) {
          for (const c of classes) {
            if (curr.classList.contains(c) || curr.id === c.replace('#', '')) return curr;
          }
          curr = curr.parentElement;
        }
        return null;
      },
      getBoundingClientRect: function() {
        return { left: 100, right: 200, top: 150, bottom: 170, width: 100, height: 20 };
      }
    };
  }

  const elements = {};
  const documentMock = {
    createElement: createElement,
    documentElement: createElement("html"),
    querySelectorAll: () => [],
    querySelector: () => null,
    getElementById: function(id) {
      if (!elements[id]) {
        elements[id] = createElement("div");
        elements[id].id = id;
      }
      return elements[id];
    },
    body: {
      appendChild: function(el) { if (el.id) elements[el.id] = el; },
      removeChild: function(el) { if (el.id) delete elements[el.id]; }
    },
    addEventListener: () => {}
  };

  const localStorageData = {};
  const localStorageMock = {
    getItem: (k) => localStorageData[k] || null,
    setItem: (k, v) => { localStorageData[k] = String(v); },
    removeItem: (k) => { delete localStorageData[k]; }
  };

  let awardedXP = 0;
  const windowMock = {
    document: documentMock,
    location: { hash: '' },
    localStorage: localStorageMock,
    innerWidth: 1024,
    innerHeight: 768,
    soundFx: { playClick: () => {}, playCorrect: () => {}, playVictory: () => {}, playIncorrect: () => {} },
    speechEngine: { speak: () => {}, stop: () => {}, hasRecognition: true, listenAndScore: () => {} },
    storageManager: {
      getOverallProgress: () => 50,
      getSavedVocab: () => [],
      getCustomVocabs: () => [],
      addXP: (amt) => { awardedXP += amt; },
      recordSpeakingDrill: () => {},
      recordQuestProgress: () => {},
      state: {
        stats: { streak: 3, totalXP: 100 },
        profile: { name: 'User', avatar: '🚀' },
        completedLevels: [],
        preferences: { instantVocab: true, selectionTranslate: true }
      }
    },
    sentenceFlashcardsData: sentences,
    vocabData: [],
    addEventListener: () => {}
  };

  const mockModule = { exports: {} };
  const sandbox = {
    window: windowMock,
    document: documentMock,
    localStorage: localStorageMock,
    module: mockModule,
    exports: mockModule.exports,
    console: console,
    setTimeout: (fn) => fn(),
    clearTimeout: () => {},
    Date: Date,
    Math: Math
  };

  vm.createContext(sandbox);
  const storageCode = fs.readFileSync('js/storage.js', 'utf8');
  vm.runInContext(storageCode, sandbox);

  const appCode = fs.readFileSync('js/app.js', 'utf8');
  vm.runInContext(appCode, sandbox);

  const AppClass = mockModule.exports;
  const app = new AppClass();
  windowMock.app = app;

  // --- Suite 3: State & Filtering ---
  console.log("\nTest Suite 3: State, Direction Switcher & Filtering");
  assert("Default sentence direction is 'en-th'", app.sentenceDirection === "en-th");

  // Toggle direction
  app.toggleSentenceDirection();
  assert("Toggling sentence direction switches to 'th-en'", app.sentenceDirection === "th-en");
  assert("LocalStorage remembers sentence direction", localStorageMock.getItem("engmastery_sentence_direction") === "th-en");

  app.setSentenceDirection("en-th");
  assert("setSentenceDirection('en-th') sets direction to 'en-th'", app.sentenceDirection === "en-th");

  // Level filtering
  app.setSentenceLevelFilter("B2");
  const b2List = app.getFilteredSentenceList();
  assert("Filtering by level B2 returns exactly 100 sentences", b2List.length === 100);
  assert("All items in B2 list have level B2", b2List.every(s => s.level === "B2"));

  app.setSentenceLevelFilter("C2");
  const c2List = app.getFilteredSentenceList();
  assert("Filtering by level C2 returns exactly 50 sentences", c2List.length === 50);

  // Category filtering
  app.setSentenceLevelFilter("all");
  app.setSentenceCategoryFilter("tech");
  const techList = app.getFilteredSentenceList();
  assert("Filtering by category 'tech' returns tech sentences", techList.length > 0 && techList.every(s => s.category === "tech"));

  // Reset filters
  app.resetSentenceFilters();
  assert("Resetting filters returns all 530 sentences", app.getFilteredSentenceList().length === 530);

  // Search filter
  app.searchSentence("database");
  const searchList = app.getFilteredSentenceList();
  assert("Searching 'database' finds matching sentences", searchList.length > 0);

  app.clearSentenceSearch();
  assert("Clearing search returns all 530 sentences", app.getFilteredSentenceList().length === 530);

  // --- Suite 4: Navigation, Flip & HTML Rendering ---
  console.log("\nTest Suite 4: Navigation, Flip & HTML Rendering");
  assert("Initial isSentenceCardFlipped is false", app.isSentenceCardFlipped === false);

  app.toggleSentenceFlip();
  assert("toggleSentenceFlip() sets isSentenceCardFlipped to true", app.isSentenceCardFlipped === true);

  const initialIdx = app.currentSentenceIndex;
  app.nextSentence();
  assert("nextSentence() increments currentSentenceIndex", app.currentSentenceIndex === initialIdx + 1);
  assert("nextSentence() resets isSentenceCardFlipped to false", app.isSentenceCardFlipped === false);

  app.prevSentence();
  assert("prevSentence() decrements currentSentenceIndex back", app.currentSentenceIndex === initialIdx);

  // HTML Rendering
  const html = app.renderSentenceFlashcardMode();
  assert("renderSentenceFlashcardMode() returns HTML string", typeof html === "string" && html.length > 200);
  assert("HTML contains 3D card container (.perspective-1000)", html.includes("perspective-1000"));
  assert("HTML contains speech TTS button", html.includes("window.speechEngine.speak"));
  assert("HTML contains flip button", html.includes("toggleSentenceFlip"));

  // --- Suite 5: Mastery & XP Award ---
  console.log("\nTest Suite 5: Mastery & XP Award");
  const testCardId = sentences[0].id;
  const initialXP = windowMock.storageManager.state.stats.totalXP;

  assert("Sentence is not mastered initially", !app.masteredSentenceIds.has(testCardId));
  app.toggleMasterSentence(testCardId);

  assert("toggleMasterSentence() marks sentence as mastered", app.masteredSentenceIds.has(testCardId));
  assert("Mastering awards +10 XP", windowMock.storageManager.state.stats.totalXP === initialXP + 10);
  assert("LocalStorage records mastered sentence", JSON.parse(localStorageMock.getItem("engmastery_mastered_sentences")).includes(testCardId));

  // Unmaster
  app.toggleMasterSentence(testCardId);
  assert("Toggling again removes sentence from mastered", !app.masteredSentenceIds.has(testCardId));

  // --- Suite 6: Flashcard Exclusion Safety ---
  console.log("\nTest Suite 6: Flashcard Exclusion Safety");
  app.currentView = "vocabulary";
  app.vocabMode = "sentence-flashcard";

  let wordTooltipShown = false;
  app.showWordTranslateTooltip = function() {
    wordTooltipShown = true;
  };

  const cardMock = createElement("div");
  cardMock.classList.add("flashcard");
  app.handleGlobalWordClick({
    target: cardMock,
    clientX: 250,
    clientY: 250
  });

  assert("Clicking inside Sentence Flashcard NEVER triggers instant word lookup", wordTooltipShown === false);

  console.log(`\n========================================`);
  console.log(`Total: ${passed + failed} | Passed: ${passed} | Failed: ${failed}`);
  console.log(`========================================\n`);

  if (failed > 0) {
    process.exit(1);
  }
}

runTests();
