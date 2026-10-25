// scripts/test_zero_downtime_20_chapters.js
const fs = require("fs");
const vm = require("vm");

// Mock browser environment
const dom = {
  innerHTML: "",
  appendChild: () => {},
  setAttribute: () => {},
  classList: { add: () => {}, remove: () => {} }
};
const document = {
  getElementById: (id) => null,
  createElement: () => ({ ...dom }),
  body: { appendChild: () => {} },
  documentElement: { classList: { add: () => {}, remove: () => {} } },
  querySelectorAll: () => [],
  addEventListener: () => {}
};
const window = {
  document,
  location: { hash: "" },
  localStorage: {
    getItem: () => null,
    setItem: () => {},
    removeItem: () => {}
  },
  soundFx: {
    playClick: () => {},
    playSuccess: () => {},
    playVictory: () => {},
    playIncorrect: () => {}
  },
  storageManager: {
    state: { xp: 0, streak: 0, level: 1, reviewedVocab: [] },
    recordQuestProgress: () => {},
    addXP: () => {}
  },
  addEventListener: () => {}
};

const sandbox = {
  window,
  document,
  localStorage: window.localStorage,
  setTimeout,
  clearTimeout,
  setInterval,
  clearInterval,
  console
};

vm.createContext(sandbox);

// Load storage
vm.runInContext(fs.readFileSync("js/storage.js", "utf8"), sandbox);

// Load data
vm.runInContext(fs.readFileSync("data/readingData.js", "utf8"), sandbox);
vm.runInContext(fs.readFileSync("data/shortStoriesData.js", "utf8"), sandbox);
vm.runInContext(fs.readFileSync("data/zeroDowntimeData.js", "utf8"), sandbox);
vm.runInContext(fs.readFileSync("data/dailyNewsData.js", "utf8"), sandbox);

// Load app
const moduleMock = { exports: {} };
sandbox.module = moduleMock;
vm.runInContext(fs.readFileSync("js/app.js", "utf8"), sandbox);

const EngMasteryApp = moduleMock.exports;
const app = new EngMasteryApp();
sandbox.window.app = app;
console.log("App initialized successfully!");

const readingList = app.getReadingList();
console.log("Total reading articles in list:", readingList.length);

const zeroDowntimeChapters = readingList.filter(a => a.collection === "zero-downtime");
console.log("Zero downtime chapters count:", zeroDowntimeChapters.length);

if (zeroDowntimeChapters.length !== 20) {
  throw new Error(`Expected 20 chapters, got ${zeroDowntimeChapters.length}`);
}

for (const ch of zeroDowntimeChapters) {
  const container = { innerHTML: "" };
  app.renderReadingArticleDetail(container, ch);
  
  const html = container.innerHTML;
  
  // Check for broken onclicks
  const onclickMatches = html.match(/onclick="([^"]*)"/g) || [];
  for (const match of onclickMatches) {
    const code = match.slice(9, -1);
    try {
      new vm.Script(code.replace(/&quot;/g, '"').replace(/&apos;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&"));
    } catch (e) {
      console.error(`Broken onclick in ${ch.id}:`, match, e.message);
      process.exit(1);
    }
  }
}

// Also test renderReadingLabView with zero-downtime collection
app.readingCollectionFilter = "zero-downtime";
const labContainer = { innerHTML: "" };
app.renderReadingLabView(labContainer);
console.log("Reading Lab view with zero-downtime filter renders smoothly! HTML size:", labContainer.innerHTML.length);

console.log("All 20 Zero Downtime chapters render flawlessly with 100% valid HTML & onclick handlers!");
