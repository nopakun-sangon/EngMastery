# -*- coding: utf-8 -*-
import json
import re

import scripts.devops_articles_batch1 as b1
import scripts.devops_articles_batch2 as b2
import scripts.devops_articles_batch3 as b3
import scripts.devops_articles_batch4 as b4

# 1. Read existing dailyNewsData.js
with open("data/dailyNewsData.js", "r", encoding="utf-8") as f:
    raw_content = f.read()

# Extract existing JSON array
match = re.search(r"window\.dailyNewsData\s*=\s*(\[[\s\S]*\]);?\s*$", raw_content)
if not match:
    raise ValueError("Could not find window.dailyNewsData array in data/dailyNewsData.js")

existing_articles = json.loads(match.group(1))
print(f"Existing articles found: {len(existing_articles)}")

# 2. Combine the 20 new articles
new_articles = (
    b1.ARTICLES_BATCH_1 +
    b2.ARTICLES_BATCH_2 +
    b3.ARTICLES_BATCH_3 +
    b4.ARTICLES_BATCH_4
)
print(f"New DevOps/SRE articles to add: {len(new_articles)}")

# 3. Calculate exact word count and update readTime for new articles
for a in new_articles:
    wc = sum(len(p['en'].split()) for p in a['paragraphs'])
    a['wordCount'] = wc
    # Reading time in minutes: ~100 wpm for non-native engineers
    mins = max(5, round(wc / 95))
    a['readTime'] = f"{mins} นาที"
    a['estimatedTime'] = f"{mins} นาที"
    assert wc >= 500, f"Article {a['id']} has {wc} words (<500)"
    assert len(a['quiz']) >= 10, f"Article {a['id']} has {len(a['quiz'])} questions (<10)"

# 4. Merge: Put the 20 new comprehensive SRE/DevOps articles first, followed by existing articles
all_articles = new_articles + existing_articles
print(f"Total merged articles: {len(all_articles)}")

# 5. Format and write out dailyNewsData.js
header = """/**
 * EngMastery: Daily Graded News Database (dailyNewsData.js)
 * Automatically fetched, graded, bilingual-translated, and quiz-equipped news.
 * Featuring 20 Deep-Dive DevOps, Tools & SRE Articles (500-1000 words, 10 Expert Quiz Questions each)
 * Categories: DevOps & Cloud Native, Tech & AI Innovation, World & Business.
 */

window.dailyNewsData = """

full_json = json.dumps(all_articles, ensure_ascii=False, indent=2)

with open("data/dailyNewsData.js", "w", encoding="utf-8") as f:
    f.write(header + full_json + ";\n")

print("data/dailyNewsData.js updated successfully!")
