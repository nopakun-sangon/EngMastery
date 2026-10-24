/**
 * Unit & Integration Test for Instant Word & Sentence Tooltips
 * Verifies two-stage translation: word click shows [ 📖 แปลคำนี้ ], selection shows [ 📖 แปลประโยคนี้ ]
 */

const fs = require('fs');
const vm = require('vm');

function runTests() {
  console.log("🧪 Starting Instant Word Tooltip Tests...\n");

  const appCode = fs.readFileSync('js/app.js', 'utf8');

  // Create lightweight mock DOM
  const elements = {};

  function createElement(tag) {
    const el = {
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
      querySelector: function(sel) {
        if (sel === '.tooltip-label') {
          return this._labelEl || (this._labelEl = createElement('span'));
        }
        return null;
      },
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
    return el;
  }

  const documentMock = {
    createElement: createElement,
    documentElement: createElement("html"),
    querySelectorAll: () => [],
    querySelector: () => null,
    getElementById: function(id) {
      return elements[id] || null;
    },
    body: {
      appendChild: function(el) {
        if (el.id) elements[el.id] = el;
      },
      removeChild: function(el) {
        if (el.id) delete elements[el.id];
      }
    },
    addEventListener: function() {}
  };

  const windowMock = {
    document: documentMock,
    location: { hash: '' },
    innerWidth: 1024,
    innerHeight: 768,
    soundFx: { playClick: () => {}, playCorrect: () => {} },
    speechEngine: { speak: () => {}, stop: () => {} },
    storageManager: {
      getOverallProgress: () => 50,
      state: {
        preferences: { instantVocab: true, selectionTranslate: true }
      }
    },
    addEventListener: () => {}
  };

  const localStorageMock = {
    getItem: () => null,
    setItem: () => {},
    removeItem: () => {}
  };
  windowMock.localStorage = localStorageMock;

  const mockModule = { exports: {} };
  const sandbox = {
    window: windowMock,
    document: documentMock,
    localStorage: localStorageMock,
    module: mockModule,
    exports: mockModule.exports,
    console: console,
    setTimeout: setTimeout,
    clearTimeout: clearTimeout,
    Date: Date,
    Math: Math
  };

  vm.createContext(sandbox);
  vm.runInContext(appCode, sandbox);

  const AppClass = mockModule.exports;
  const app = new AppClass();
  windowMock.app = app;

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

  // --- Test 1: showWordTranslateTooltip creates tooltip with "แปลคำนี้" ---
  console.log("Test Suite 1: Word Click Tooltip [แปลคำนี้]");
  const rect = { left: 150, right: 220, top: 300, bottom: 320, width: 70, height: 20 };
  app.showWordTranslateTooltip(rect, "containerization", "Containerization simplifies deployment.");

  const tooltip = documentMock.getElementById("selection-translate-tooltip");
  assert("Tooltip element is created in DOM", !!tooltip);
  assert("Tooltip is displayed (display === 'flex')", tooltip.style.display === "flex");
  assert("Tooltip dataset.text is 'containerization'", tooltip.dataset.text === "containerization");
  assert("Tooltip dataset.mode is 'word'", tooltip.dataset.mode === "word");
  assert("Tooltip label text is 'แปลคำนี้'", tooltip.querySelector(".tooltip-label").textContent === "แปลคำนี้");

  // --- Test 2: Clicking the tooltip triggers translateSelectedText -> handleReadingWordClick ---
  console.log("\nTest Suite 2: Tooltip Click to Open Modal");
  let wordClickedArgs = null;
  app.handleReadingWordClick = function(event, word, sentence, th) {
    wordClickedArgs = { word, sentence, th };
  };

  // Simulate click on tooltip
  let clickPrevented = false;
  let clickStopped = false;
  const mockClickEvent = {
    type: "click",
    preventDefault: () => { clickPrevented = true; },
    stopPropagation: () => { clickStopped = true; }
  };
  tooltip.dispatchEvent(mockClickEvent);

  assert("Clicking tooltip stops propagation", clickStopped);
  assert("Clicking tooltip invokes handleReadingWordClick", !!wordClickedArgs);
  assert("Word passed is 'containerization'", wordClickedArgs && wordClickedArgs.word === "containerization");
  assert("Sentence context is preserved", wordClickedArgs && wordClickedArgs.sentence === "Containerization simplifies deployment.");
  assert("Tooltip is hidden after click", tooltip.style.display === "none");

  // --- Test 3: Sentence Drag / Selection Tooltip [แปลประโยคนี้] ---
  console.log("\nTest Suite 3: Sentence Selection Tooltip [แปลประโยคนี้]");
  const longSentence = "Kubernetes coordinates a highly available cluster of connected computers.";
  app.showSelectionTranslateTooltip(rect, longSentence);
  assert("Selection tooltip is displayed", tooltip.style.display === "flex");
  assert("Sentence selection tooltip label is 'แปลประโยคนี้'", tooltip.querySelector(".tooltip-label").textContent === "แปลประโยคนี้");
  assert("Selection dataset.text is the full sentence", tooltip.dataset.text === longSentence);

  // --- Test 4: Short Selection (single word selection) shows [แปลคำนี้] ---
  console.log("\nTest Suite 4: Short Word Selection Tooltip [แปลคำนี้]");
  app.showSelectionTranslateTooltip(rect, "pipeline");
  assert("Short single-word selection label is 'แปลคำนี้'", tooltip.querySelector(".tooltip-label").textContent === "แปลคำนี้");

  // --- Test 5: Reading Lab token click (handleReadingWordTokenClick) ---
  console.log("\nTest Suite 5: Reading Lab Token Click");
  const mockTokenEl = createElement("span");
  mockTokenEl.getBoundingClientRect = () => ({ left: 200, right: 260, top: 400, bottom: 420, width: 60, height: 20 });
  const mockTokenEvent = {
    currentTarget: mockTokenEl,
    stopPropagation: () => {},
    preventDefault: () => {}
  };
  app.handleReadingWordTokenClick(mockTokenEvent, "latency", "Low latency is critical for APIs.", "ความหน่วงต่ำ");

  assert("Reading Lab token click displays tooltip", tooltip.style.display === "flex");
  assert("Reading Lab token label is 'แปลคำนี้'", tooltip.querySelector(".tooltip-label").textContent === "แปลคำนี้");
  assert("Reading Lab token dataset.text is 'latency'", tooltip.dataset.text === "latency");
  assert("Reading Lab token dataset.sentence is 'Low latency is critical for APIs.'", tooltip.dataset.sentence === "Low latency is critical for APIs.");
  assert("Reading Lab token dataset.sentenceTh is 'ความหน่วงต่ำ'", tooltip.dataset.sentenceTh === "ความหน่วงต่ำ");

  // --- Test 6: Flashcard Exclusion ---
  console.log("\nTest Suite 6: Flashcard Mode Exclusion");
  tooltip.style.display = "none";
  app.currentView = "vocabulary";
  app.vocabMode = "flashcard";

  const cardMock = createElement("div");
  cardMock.classList.add("flashcard");
  app.handleGlobalWordClick({
    target: cardMock,
    clientX: 200,
    clientY: 200
  });
  assert("Flashcard click NEVER opens tooltip", tooltip.style.display === "none");

  // --- Test 7: Dismissing Tooltip on Outside Click ---
  console.log("\nTest Suite 7: Dismissal on Click Away");
  app.vocabMode = "list";
  app.showWordTranslateTooltip(rect, "database");
  assert("Tooltip is visible before click away", tooltip.style.display === "flex");

  app.hideSelectionTranslateTooltip();
  assert("hideSelectionTranslateTooltip hides the tooltip", tooltip.style.display === "none");
  assert("Dataset text cleared", tooltip.dataset.text === "");

  console.log(`\n========================================`);
  console.log(`Total: ${passed + failed} | Passed: ${passed} | Failed: ${failed}`);
  console.log(`========================================\n`);

  if (failed > 0) {
    process.exit(1);
  }
}

runTests();
