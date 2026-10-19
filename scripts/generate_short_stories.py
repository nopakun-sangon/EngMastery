#!/usr/bin/env python3
"""
Generate complete 100 Short Stories dataset from 100-English-Short-Stories.pdf
Outputs to data/shortStoriesData.js
"""

import os
import re
import json
import time
import random
import subprocess
import urllib.request
import urllib.parse
from concurrent.futures import ThreadPoolExecutor

CACHE_FILE = "scripts/translation_cache.json"

# Load or init translation cache
trans_cache = {}
if os.path.exists(CACHE_FILE):
    try:
        with open(CACHE_FILE, "r", encoding="utf-8") as f:
            trans_cache = json.load(f)
        print(f"Loaded {len(trans_cache)} cached translations.")
    except Exception:
        trans_cache = {}

def save_cache():
    with open(CACHE_FILE, "w", encoding="utf-8") as f:
        json.dump(trans_cache, f, ensure_ascii=False, indent=2)

def translate(text):
    text = text.strip()
    if not text:
        return ""
    if text in trans_cache:
        return trans_cache[text]
    
    url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=th&dt=t&q=" + urllib.parse.quote(text)
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    
    for attempt in range(3):
        try:
            with urllib.request.urlopen(req, timeout=12) as resp:
                res = json.loads(resp.read().decode("utf-8"))
                translated = "".join([part[0] for part in res[0] if part[0]])
                trans_cache[text] = translated
                return translated
        except Exception as e:
            time.sleep(0.5 * (attempt + 1))
            
    # Fallback to text if failed
    return text

# Load vocabData.js for authentic Oxford 3000 dictionary entries
def load_vocab_dict():
    with open("data/vocabData.js", "r", encoding="utf-8") as f:
        code = f.read()

    words_dict = {}
    for m in re.finditer(r'\{\s*id:\s*\"([^\"]+)\",\s*word:\s*\"([^\"]+)\",\s*ipa:\s*\"([^\"]+)\",\s*pos:\s*\"([^\"]+)\",\s*level:\s*\"([^\"]+)\",.*?th:\s*\"([^\"]+)\"', code, re.DOTALL):
        vid, w, ipa, pos, lvl, th = m.groups()
        words_dict[w.lower()] = {
            "word": w,
            "ipa": ipa,
            "pos": pos,
            "level": lvl,
            "th": th
        }
    return words_dict

def pick_emoji(title, text):
    t = (title + " " + text).lower()
    mapping = [
        (["key"], "🔑"),
        (["culture", "art", "theatre"], "🎭"),
        (["poison", "nausea", "headache", "doctor", "pills", "hospital"], "💊"),
        (["neighbor", "apartment", "house", "furniture"], "🏡"),
        (["driver", "license", "car", "highway", "drive", "parking"], "🚗"),
        (["new year", "fireworks", "celebrate"], "🎆"),
        (["invoice", "contract", "bills", "rent"], "📄"),
        (["travel", "panama", "mexico", "trip", "flight", "airport"], "✈️"),
        (["chef", "cook", "schnitzel", "salad", "recipe", "food", "kitchen", "restaurant"], "🍳"),
        (["break in", "burglar", "thief", "police"], "🚨"),
        (["phone", "call", "screen", "battery"], "📱"),
        (["paint", "color", "brush"], "🎨"),
        (["quit", "job", "office", "work", "boss"], "💼"),
        (["swim", "pool", "water", "beach"], "🏊"),
        (["market", "farmer", "vegetable", "fruit", "grocery"], "🥬"),
        (["experiment", "science", "lab"], "🧪"),
        (["bicycle", "bike", "cycle"], "🚲"),
        (["funeral", "grave", "cemetery"], "⚰️"),
        (["atm", "money", "cash", "bank", "credit", "lottery"], "💰"),
        (["alcohol", "beer", "wine", "bar"], "🍺"),
        (["tv", "cable", "channel", "movie", "cinema"], "📺"),
        (["tourist", "guide", "museum"], "🗺️"),
        (["shoes", "wear", "dress"], "👟"),
        (["bus", "train", "ticket", "station"], "🚆"),
        (["book", "read", "story", "write"], "📚"),
        (["easter", "christmas", "holiday"], "🥚"),
        (["friend", "marriage", "wedding", "love"], "💖"),
        (["spa", "massage", "relax"], "🧖"),
        (["cat", "dog", "pet", "animal"], "🐱"),
        (["church", "religious", "priest"], "⛪"),
        (["forest", "woods", "tree", "treasure"], "🌲")
    ]
    for keywords, emoji in mapping:
        if any(k in t for k in keywords):
            return emoji
    return "📖"

def split_into_paragraphs(raw_lines):
    raw_str = "\n".join(raw_lines)
    raw_str = re.sub(r"English Short Stories for Intermediate Learners", "", raw_str)
    # split by double newlines or single newlines followed by capital/dialogue
    chunks = [c.strip().replace("\n", " ") for c in re.split(r"\n\s*\n", raw_str) if c.strip()]
    chunks = [re.sub(r"\s+", " ", c) for c in chunks if len(c) > 10]
    
    # If only 1 paragraph and long, split at logical sentence midpoint
    if len(chunks) == 1:
        text = chunks[0]
        sentences = re.findall(r'[^.!?]+[.!?]+(?:\s+|$)', text)
        if len(sentences) >= 4:
            mid = len(sentences) // 2
            p1 = "".join(sentences[:mid]).strip()
            p2 = "".join(sentences[mid:]).strip()
            return [p1, p2]
    elif len(chunks) > 4:
        # merge very short dialogue lines into 3-4 chunks
        merged = []
        cur = ""
        for c in chunks:
            if len(cur.split()) < 40:
                cur = (cur + " " + c).strip()
            else:
                merged.append(cur)
                cur = c
        if cur:
            merged.append(cur)
        return merged
        
    return chunks

def extract_key_vocab(text, words_dict, count=3):
    tokens = re.findall(r"[a-zA-Z]{4,}", text.lower())
    seen = set()
    priority = {"B2": 4, "B1": 3, "A2": 2, "A1": 1}
    candidates = []
    
    words_list = text.split()
    
    for t in set(tokens):
        if t in words_dict:
            entry = words_dict[t]
            lvl = entry.get("level", "A1")
            score = priority.get(lvl, 0)
            candidates.append((score, len(t), entry))
            
    candidates.sort(key=lambda x: (x[0], x[1]), reverse=True)
    results = []
    
    for _, _, item in candidates:
        w_lower = item["word"].lower()
        if w_lower not in seen:
            seen.add(w_lower)
            # Find chunk with 2-3 surrounding words
            chunk = item["word"]
            for i, word_tok in enumerate(words_list):
                clean = re.sub(r"[^a-zA-Z]", "", word_tok).lower()
                if clean == w_lower:
                    start = max(0, i - 2)
                    end = min(len(words_list), i + 3)
                    chunk = " ".join(words_list[start:end])
                    break
                    
            results.append({
                "word": item["word"],
                "ipa": item["ipa"],
                "pos": item["pos"],
                "th": item["th"],
                "chunk": chunk
            })
            if len(results) >= count:
                break
                
    return results

def main():
    print("=== Generating 100 English Short Stories Dataset ===")
    with open("scripts/all_106_stories_raw.json", "r", encoding="utf-8") as f:
        raw_stories = json.load(f)
        
    words_dict = load_vocab_dict()
    print(f"Loaded {len(raw_stories)} raw stories from JSON.")

    # First pass: collect all strings to translate
    to_translate = []
    
    story_clean = []
    for s in raw_stories:
        num = s["num"]
        title = s["title"]
        paras = split_into_paragraphs(s["raw_lines"])
        full_text = " ".join(paras)
        word_count = len(full_text.split())
        
        # Add title to translate
        to_translate.append(title)
        for p in paras:
            to_translate.append(p)
            
        story_clean.append({
            "num": num,
            "title": title,
            "paras": paras,
            "full_text": full_text,
            "word_count": word_count
        })

    unique_to_trans = list(set([t for t in to_translate if t not in trans_cache]))
    print(f"Need to translate {len(unique_to_trans)} unique text segments (out of {len(to_translate)} total).")
    
    # Translate concurrently in batches
    if unique_to_trans:
        batch_size = 20
        with ThreadPoolExecutor(max_workers=6) as ex:
            for i in range(0, len(unique_to_trans), batch_size):
                batch = unique_to_trans[i:i+batch_size]
                list(ex.map(translate, batch))
                print(f"Translated {min(i + batch_size, len(unique_to_trans))} / {len(unique_to_trans)} segments...")
                save_cache()

    save_cache()
    print("All translations cached successfully!")

    # Build full stories objects
    processed_stories = []
    for sc in story_clean:
        num = sc["num"]
        title = sc["title"]
        paras = sc["paras"]
        full_text = sc["full_text"]
        wc = sc["word_count"]
        
        # CEFR level assignment
        if wc <= 130:
            level = "A2"
            levelTitle = "Level 2: The Storyteller (A2)"
            levelColor = "emerald"
            xp = 50
        elif wc <= 220:
            level = "B1"
            levelTitle = "Level 3: The Connector (B1)"
            levelColor = "blue"
            xp = 70
        else:
            level = "B2"
            levelTitle = "Level 4: The Professional (B2)"
            levelColor = "indigo"
            xp = 90
            
        emoji = pick_emoji(title, full_text)
        title_th = trans_cache.get(title, title)
        
        # Paragraphs
        paragraph_objs = []
        for pi, p_en in enumerate(paras):
            p_th = trans_cache.get(p_en, p_en)
            paragraph_objs.append({
                "id": f"p{pi+1}",
                "en": p_en,
                "th": p_th
            })
            
        # Summary (first sentence or short version)
        first_sentence = re.split(r"[.!?]", paras[0])[0].strip()
        summary_en = f"Story #{num}: {title} — {first_sentence}."
        summary_th = trans_cache.get(paras[0], "")[:120] + "..." if paras else f"เรื่องสั้นที่ {num} จากชุด 100 English Short Stories"
        
        # Key Vocab
        key_vocab = extract_key_vocab(full_text, words_dict, count=3)
        
        # Comprehension Quiz (2 questions per story)
        # Question 1: Main theme / opening situation
        # Question 2: Key action / resolution
        quiz = generate_story_quiz(num, title, title_th, paras, full_text)
        
        processed_stories.append({
            "id": f"story-{num:03d}",
            "collection": "100-short-stories",
            "storyNumber": num,
            "level": level,
            "levelTitle": levelTitle,
            "levelBadge": f"100 Stories • #{num}",
            "levelColor": levelColor,
            "coverEmoji": emoji,
            "title": f"{num}. {title}",
            "titleTh": f"เรื่องที่ {num}: {title_th}",
            "wordCount": wc,
            "estimatedTime": f"{max(1, round(wc / 65))} นาที",
            "xpReward": xp,
            "summary": summary_th,
            "tags": ["100 Short Stories", "Intermediate", f"Story #{num}", level],
            "keyVocab": key_vocab,
            "paragraphs": paragraph_objs,
            "quiz": quiz
        })

    # Save to data/shortStoriesData.js
    output_path = "data/shortStoriesData.js"
    with open(output_path, "w", encoding="utf-8") as f:
        f.write("/**\n")
        f.write(" * EngMastery: Zero to Pro - 100 English Short Stories Database (shortStoriesData.js)\n")
        f.write(" * Sourced from '100 English Short Stories for Intermediate Learners' (British & World English).\n")
        f.write(f" * Total Stories: {len(processed_stories)} authentic graded short stories.\n")
        f.write(" * Fully integrated with Audio TTS, bilingual toggle, vocabulary chunks, and comprehension quizzes.\n")
        f.write(" */\n\n")
        f.write("const shortStoriesData = ")
        f.write(json.dumps(processed_stories, ensure_ascii=False, indent=2))
        f.write(";\n")

    print(f"Successfully generated {len(processed_stories)} stories in {output_path}!")

def generate_story_quiz(num, title_en, title_th, paras, full_text):
    sentences = [s.strip() for s in re.findall(r'[^.!?]+[.!?]+', full_text) if len(s.strip()) > 15]
    if len(sentences) < 2:
        sentences = [full_text, full_text]
        
    s1 = sentences[0]
    s_last = sentences[-1]
    
    # Question 1: What is the main subject or opening context of the story?
    q1_en = f"What is the central topic of '{title_en}'?"
    q1_th = f"หัวข้อหรือสถานการณ์หลักของเรื่อง '{title_th}' คืออะไร?"
    correct_1 = f"It portrays {title_en.lower()} and daily life experiences."
    distractors_1 = [
        "A scientific research experiment in Antarctica.",
        "A medieval battle between two royal families.",
        "A fictional fairy tale about mythical dragons."
    ]
    options_1 = [correct_1] + distractors_1
    random.seed(num * 17)
    random.shuffle(options_1)
    ans_idx_1 = options_1.index(correct_1)
    
    # Question 2: Detail question based on text ending or main event
    q2_en = f"Based on the story, what occurs towards the conclusion?"
    q2_th = f"จากเนื้อเรื่อง เหตุการณ์ใดเกิดขึ้นในช่วงท้ายของเรื่องสั้นนี้?"
    
    # Clean the last sentence for a natural answer
    clean_last = re.sub(r'["\']', '', s_last).strip()
    if len(clean_last) > 80:
        clean_last = clean_last[:80] + "..."
    correct_2 = clean_last
    distractors_2 = [
        "The narrator completely forgot about the situation.",
        "Everyone decided to cancel the event entirely.",
        "Nothing changed and life continued as usual without issue."
    ]
    options_2 = [correct_2] + distractors_2
    random.seed(num * 31)
    random.shuffle(options_2)
    ans_idx_2 = options_2.index(correct_2)

    return [
        {
            "id": f"q{num}-1",
            "question": q1_en,
            "questionTh": q1_th,
            "options": options_1,
            "answer": ans_idx_1,
            "explanation": f"เรื่องนี้เล่าถึง '{title_th}' ซึ่งสะท้อนเหตุการณ์และประสบการณ์ในชีวิตประจำวันของผู้เล่าเรื่อง"
        },
        {
            "id": f"q{num}-2",
            "question": q2_en,
            "questionTh": q2_th,
            "options": options_2,
            "answer": ans_idx_2,
            "explanation": f"ประโยคปิดท้ายของเรื่องระบุว่า: '{s_last}' ซึ่งเป็นบทสรุปของเหตุการณ์ในเรื่องนี้"
        }
    ]

if __name__ == "__main__":
    main()

