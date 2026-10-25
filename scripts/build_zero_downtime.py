# scripts/build_zero_downtime.py
"""
Build script to generate data/zeroDowntimeData.js
Combines chapters 1 to 7 into window.zeroDowntimeData
"""

import json
import os
import sys

# Add scripts directory to path
sys.path.insert(0, os.path.dirname(__file__))

from ch1 import chapter1
from ch2 import chapter2
from ch3 import chapter3
from ch4 import chapter4
from ch5 import chapter5
from ch6 import chapter6
from ch7 import chapter7

all_chapters = [
    chapter1,
    chapter2,
    chapter3,
    chapter4,
    chapter5,
    chapter6,
    chapter7
]

output_path = os.path.join(os.path.dirname(__file__), "..", "data", "zeroDowntimeData.js")

header = """/**
 * EngMastery: Zero to Pro - Zero Downtime Novel Database
 * "Zero Downtime: คุณพ่อวัย 30 กับภารกิจกู้ชีพการงาน"
 * 
 * Features:
 * - 7 Complete Unabridged Chapters in accessible CEFR A2-B1 English
 * - Bilingual parallel paragraphs (EN & TH)
 * - Curated workplace & tech idioms, IPA phonetics, and sample sentences
 * - Comprehension quizzes with +30 XP per chapter
 */

window.zeroDowntimeData = """

content = header + json.dumps(all_chapters, indent=2, ensure_ascii=False) + ";\n"

if not os.path.exists(os.path.dirname(output_path)):
    os.makedirs(os.path.dirname(output_path))

with open(output_path, "w", encoding="utf-8") as f:
    f.write(content)

print(f"Successfully generated {output_path} with {len(all_chapters)} chapters!")
for ch in all_chapters:
    print(f" - {ch['id']}: {ch['title']} ({len(ch['paragraphs'])} paragraphs, {ch['wordCount']} words)")
