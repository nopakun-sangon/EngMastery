/**
 * Integration Test for Sentence Builder Feature (Kru Dew 1,000 Sentences Ebook)
 */

const fs = require('fs');
const vm = require('vm');

// Mock browser window and DOM
const window = {
  sentenceBuilderData: null,
  masterclassData: null,
  vocabData: null,
  articlesData: null,
  soundFx: {
    playClick: () => {},
    playCorrect: () => {},
    playIncorrect: () => {},
    playVictory: () => {}
  },
  speechEngine: {
    speak: () => {}
  },
  storageManager: {
    state: {
      stats: { totalXP: 100, dailyXP: 50, streak: 3 },
      profile: { name: 'Tester', avatar: '🚀' },
      completedLevels: []
    },
    getOverallProgress: () => 50,
    addXP: function(amt) {
      this.state.stats.totalXP += amt;
      this.state.stats.dailyXP += amt;
      return { totalXP: this.state.stats.totalXP };
    }
  }
};

const localStorageData = {};
const localStorage = {
  getItem: (k) => localStorageData[k] || null,
  setItem: (k, v) => { localStorageData[k] = String(v); },
  removeItem: (k) => { delete localStorageData[k]; }
};

const document = {
  addEventListener: () => {},
  documentElement: {
    classList: {
      add: () => {},
      remove: () => {},
      toggle: () => {},
      contains: () => false
    }
  },
  getElementById: (id) => ({
    id,
    classList: { add: () => {}, remove: () => {} },
    addEventListener: () => {},
    textContent: '',
    innerHTML: '',
    appendChild: () => {},
    remove: () => {}
  }),
  querySelectorAll: () => [],
  createElement: () => ({
    id: '',
    className: '',
    innerHTML: '',
    classList: { add: () => {}, remove: () => {} },
    remove: () => {}
  }),
  body: {
    appendChild: () => {}
  }
};

const context = vm.createContext({
  window,
  document,
  localStorage,
  console,
  setTimeout: (fn) => fn(),
  clearTimeout: () => {}
});

// Load data and app.js into context
const sentenceDataCode = fs.readFileSync('data/sentenceBuilderData.js', 'utf8');
vm.runInContext(sentenceDataCode, context);

const appCode = fs.readFileSync('js/app.js', 'utf8');
vm.runInContext(appCode + '\nwindow.EngMasteryApp = EngMasteryApp;', context);

// Test 1: Verify sentenceBuilderData structure
const topics = window.sentenceBuilderData;
console.log(`[TEST 1] Loaded ${topics.length} sentence builder topics.`);
if (!topics || topics.length !== 10) {
  throw new Error(`Expected 10 topics, got ${topics ? topics.length : 0}`);
}

topics.forEach((t, i) => {
  if (!t.id || !t.title || !t.formulas || !t.vocabBank || !t.drills) {
    throw new Error(`Topic #${i + 1} (${t.id}) is missing mandatory properties`);
  }
  if (t.drills.length < 5) {
    throw new Error(`Topic #${i + 1} (${t.id}) has less than 5 drills`);
  }
  t.drills.forEach((d, dIdx) => {
    if (!d.id || !d.th || !d.targetWords || !d.poolWords || !d.explanation) {
      throw new Error(`Drill #${dIdx + 1} in topic ${t.id} missing mandatory drill properties`);
    }
    // Check that target words can be formed from pool words
    const poolCopy = [...d.poolWords];
    d.targetWords.forEach(tw => {
      const pIdx = poolCopy.indexOf(tw);
      if (pIdx === -1) {
        throw new Error(`Target word "${tw}" not found in poolWords for drill ${d.id}`);
      }
      poolCopy.splice(pIdx, 1);
    });
  });
});
console.log('✓ [TEST 1 PASSED] All 10 topics and 50 drills are structurally valid and complete.');

// Test 2: Test EngMasteryApp Sentence Builder State Machine
const app = new window.EngMasteryApp();
console.log('[TEST 2] Testing Sentence Builder app state machine.');

const topic1 = topics[0];
const drill1 = topic1.drills[0];

// Initialize drill
app.initSentenceDrillState(drill1);
const state1 = app.sentenceBuilderState[drill1.id];
if (!state1 || state1.placedWords.length !== 0 || state1.poolWords.length === 0) {
  throw new Error(`Initial state for drill ${drill1.id} is invalid`);
}
console.log(`  Initial pool count: ${state1.poolWords.length}, placed count: ${state1.placedWords.length}`);

// Place each target word in order
drill1.targetWords.forEach(targetText => {
  const itemInPool = state1.poolWords.find(w => w.text === targetText);
  if (!itemInPool) throw new Error(`Could not find target word "${targetText}" in pool`);
  app.placeSentenceWord(drill1.id, itemInPool.id);
});

if (state1.placedWords.length !== drill1.targetWords.length) {
  throw new Error(`Expected ${drill1.targetWords.length} placed words, got ${state1.placedWords.length}`);
}

// Check answer
const xpBefore = window.storageManager.state.stats.totalXP;
app.checkSentenceAnswer(topic1.id, drill1.id);

if (!state1.isCorrect || !state1.isCompleted) {
  throw new Error(`Expected drill to be correct, but isCorrect=${state1.isCorrect}`);
}
if (!app.sentenceCompletedDrills[drill1.id]) {
  throw new Error(`Expected sentenceCompletedDrills[${drill1.id}] to be true`);
}
if (window.storageManager.state.stats.totalXP !== xpBefore + 15) {
  throw new Error(`Expected XP to increase by 15, from ${xpBefore} to ${xpBefore + 15}`);
}
console.log('✓ [TEST 2 PASSED] Target sentence accurately formed and verified (+15 XP awarded).');

// Test 3: Test incorrect sentence attempt
const drill2 = topic1.drills[1];
app.initSentenceDrillState(drill2);
const state2 = app.sentenceBuilderState[drill2.id];

// Intentionally place wrong first word
const randomWord = state2.poolWords[0];
app.placeSentenceWord(drill2.id, randomWord.id);
app.checkSentenceAnswer(topic1.id, drill2.id);

if (state2.isCorrect) {
  throw new Error(`Expected 1-word incomplete sentence to be incorrect`);
}
if (!state2.errorMessage) {
  throw new Error(`Expected error message on incorrect answer`);
}
console.log('✓ [TEST 3 PASSED] Incorrect sentence properly flagged with error feedback.');

// Test 4: Word return and clear operations
app.returnSentenceWord(drill2.id, randomWord.id);
if (state2.placedWords.length !== 0) {
  throw new Error(`Expected placed words to be 0 after returning word`);
}

// Place multiple words then clear
state2.poolWords.slice(0, 3).forEach(w => app.placeSentenceWord(drill2.id, w.id));
if (state2.placedWords.length !== 3) {
  throw new Error(`Expected 3 placed words`);
}
app.clearSentenceWords(drill2.id);
if (state2.placedWords.length !== 0) {
  throw new Error(`Expected 0 placed words after clearSentenceWords`);
}
console.log('✓ [TEST 4 PASSED] Word return and clear operations functioning seamlessly.');

console.log('\n========================================');
console.log('ALL TESTS PASSED SUCCESSFULLY! (100% OK)');
console.log('========================================');
