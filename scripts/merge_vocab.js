const fs = require("fs");
const path = require("path");

const vocabFilePath = path.join(__dirname, "../data/vocabData.js");
const p1Path = path.join(__dirname, "oxford_part1.json");
const p2Path = path.join(__dirname, "oxford_part2.json");
const p3Path = path.join(__dirname, "oxford_part3.json");

// 1. Read existing non-oxford items from data/vocabData.js
const currentCode = fs.readFileSync(vocabFilePath, "utf8");
const existing = eval(currentCode + "; vocabData;");
const techItems = existing.filter(x => x.category === "tech-devops");
const bizItems = existing.filter(x => x.category === "workplace-business");
const idiomItems = existing.filter(x => x.category === "phrasal-idioms");

console.log(`Found existing categories: Tech (${techItems.length}), Business (${bizItems.length}), Idioms (${idiomItems.length})`);

// 2. Read Oxford batches
const p1 = eval("(" + fs.readFileSync(p1Path, "utf8") + ")");
const p2 = eval("(" + fs.readFileSync(p2Path, "utf8") + ")");
const p3 = JSON.parse(fs.readFileSync(p3Path, "utf8"));
const oxfordAll = [...p1, ...p2, ...p3];

console.log(`Loaded Oxford items: Part 1 (${p1.length}), Part 2 (${p2.length}), Part 3 (${p3.length}) = Total Oxford (${oxfordAll.length})`);

// 3. Construct clean JS file content
function formatItem(item) {
  return `  {
    id: ${JSON.stringify(item.id)},
    word: ${JSON.stringify(item.word)},
    ipa: ${JSON.stringify(item.ipa)},
    pos: ${JSON.stringify(item.pos)},
    level: ${JSON.stringify(item.level)},
    category: ${JSON.stringify(item.category)},
    categoryLabel: ${JSON.stringify(item.categoryLabel)},
    th: ${JSON.stringify(item.th)},
    definition: ${JSON.stringify(item.definition)},
    exampleEn: ${JSON.stringify(item.exampleEn)},
    exampleTh: ${JSON.stringify(item.exampleTh)},
    collocations: ${JSON.stringify(item.collocations || [])},
    synonyms: ${JSON.stringify(item.synonyms || [])}
  }`;
}

const header = `/**
 * EngMastery: Zero to Pro - Vocabulary & Chunks Database (vocabData)
 * Categorized by: Oxford 3000™ / CEFR, Workplace & Business, Tech & DevOps, and Phrasal Verbs & Idioms
 * Schema: Future-proof standard JSON / JavaScript Object array
 */

const vocabData = [
  // =========================================================================
  // CATEGORY 1: TECH & DEVOPS / CLOUD INFRASTRUCTURE JARGON
  // =========================================================================
${techItems.map(formatItem).join(",\n")},

  // =========================================================================
  // CATEGORY 2: WORKPLACE & BUSINESS COMMUNICATION
  // =========================================================================
${bizItems.map(formatItem).join(",\n")},

  // =========================================================================
  // CATEGORY 3: PHRASAL VERBS & NATURAL IDIOMS
  // =========================================================================
${idiomItems.map(formatItem).join(",\n")},

  // =========================================================================
  // CATEGORY 4: THE OXFORD 3000™ (AMERICAN ENGLISH CEFR CORE)
  // =========================================================================
${oxfordAll.map(formatItem).join(",\n")}
];

if (typeof window !== "undefined") {
  window.vocabData = vocabData;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = vocabData;
}
`;

fs.writeFileSync(vocabFilePath, header, "utf8");
console.log(`Successfully written ${techItems.length + bizItems.length + idiomItems.length + oxfordAll.length} items to data/vocabData.js`);

