#!/usr/bin/env python3
"""
EngMastery: News Fetcher & Graded Reading Summarizer
Fetches latest English news from trusted RSS feeds across 4 curated categories:
  1. tech: Tech & Developer News (AI, Cloud, DevOps, Kubernetes, Linux tools)
  2. business: World & Business News (Economy, Global Markets, Corporate Events)
  3. life_science: Easy Daily Life & Science (Science, Environment, Everyday Innovation)
  4. sport: Sport & Manchester United (Football, Premier League, Man Utd coverage)

Transforms raw news into graded, interactive reading lessons for Thai learners:
  - Multi-paragraph clean English text (CEFR A2/B1/B2)
  - Sentence-by-sentence / paragraph Thai translations
  - Key vocabulary extraction with IPA phonetics, part of speech, and Thai definitions
  - 3-Question reading comprehension quizzes with instant feedback
  - Saves directly to data/dailyNewsData.js
"""

import sys
import os
import re
import json
import html
import urllib.request
import urllib.parse
import xml.etree.ElementTree as ET
from datetime import datetime

# Path resolution
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_DIR = os.path.join(BASE_DIR, "data")
OUTPUT_FILE = os.path.join(DATA_DIR, "dailyNewsData.js")

CATEGORIES = {
    "tech": {
        "id": "tech",
        "label": "Tech & DevOps",
        "titleTh": "ข่าวไอที, AI, คลาวด์ & DevOps",
        "emoji": "💻",
        "color": "indigo",
        "level": "B1",
        "levelBadge": "B1 • Intermediate",
        "feeds": [
            "https://feeds.bbci.co.uk/news/technology/rss.xml",
            "https://techcrunch.com/feed/"
        ],
        "keywords": ["AI", "Cloud", "DevOps", "Software", "Security", "Server", "Database", "Kubernetes", "Linux"]
    },
    "business": {
        "id": "business",
        "label": "World & Business",
        "titleTh": "เศรษฐกิจ, ธุรกิจ & รอบโลก",
        "emoji": "🌐",
        "color": "amber",
        "level": "B2",
        "levelBadge": "B2 • Professional",
        "feeds": [
            "https://feeds.bbci.co.uk/news/business/rss.xml",
            "https://feeds.bbci.co.uk/news/world/rss.xml"
        ],
        "keywords": ["Economy", "Market", "Company", "Investment", "Global", "Finance", "Trade", "Industry"]
    },
    "life_science": {
        "id": "life_science",
        "label": "Daily Life & Science",
        "titleTh": "ชีวิตประจำวัน, วิทยาศาสตร์ & นวัตกรรม",
        "emoji": "🔬",
        "color": "emerald",
        "level": "A2",
        "levelBadge": "A2 • Elementary",
        "feeds": [
            "https://feeds.bbci.co.uk/news/science_and_environment/rss.xml",
            "https://feeds.bbci.co.uk/news/health/rss.xml"
        ],
        "keywords": ["Science", "Nature", "Health", "Discovery", "Environment", "Space", "Life", "Research"]
    },
    "sport": {
        "id": "sport",
        "label": "Sport (Man United)",
        "titleTh": "กีฬา & แมนเชสเตอร์ ยูไนเต็ด",
        "emoji": "⚽",
        "color": "rose",
        "level": "B1",
        "levelBadge": "B1 • Intermediate",
        "feeds": [
            "https://feeds.bbci.co.uk/sport/football/teams/manchester-united/rss.xml",
            "https://www.skysports.com/rss/12040"
        ],
        "keywords": ["Manchester United", "Football", "Premier League", "Old Trafford", "Manager", "Match", "Goal"]
    }
}

USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"

def translate_to_thai(text):
    """Translate English text to natural Thai using Google Translate endpoint."""
    if not text or not text.strip():
        return ""
    try:
        url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=th&dt=t&q=" + urllib.parse.quote(text.strip())
        req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
        with urllib.request.urlopen(req, timeout=7) as res:
            data = json.loads(res.read().decode("utf-8"))
            translated = "".join([part[0] for part in data[0] if part[0]])
            return translated.strip()
    except Exception as e:
        # Fallback if connection fails
        return text

def clean_html(raw_html):
    """Strip HTML tags and unescape entities."""
    if not raw_html:
        return ""
    text = re.sub(r'<[^>]+>', '', raw_html)
    text = html.unescape(text)
    return " ".join(text.split())

def fetch_feed_items(feed_url, max_items=4):
    """Fetch and parse RSS XML items."""
    items = []
    try:
        req = urllib.request.Request(feed_url, headers={"User-Agent": USER_AGENT})
        with urllib.request.urlopen(req, timeout=10) as res:
            xml_data = res.read()
            root = ET.fromstring(xml_data)
            channel = root.find("channel")
            if channel is None:
                return items
            raw_items = channel.findall("item")
            for it in raw_items[:max_items]:
                title = clean_html(it.find("title").text if it.find("title") is not None else "")
                desc = clean_html(it.find("description").text if it.find("description") is not None else "")
                link = it.find("link").text if it.find("link") is not None else ""
                pubDate = it.find("pubDate").text if it.find("pubDate") is not None else ""
                if title and desc:
                    items.append({
                        "title": title,
                        "description": desc,
                        "link": link,
                        "pubDate": pubDate
                    })
    except Exception as e:
        print(f"  ⚠️ Warning: Failed to fetch feed {feed_url}: {e}")
    return items

def extract_article_body(link):
    """Attempt to fetch body paragraphs from news article URL."""
    if not link or not link.startswith("http"):
        return []
    try:
        req = urllib.request.Request(link, headers={"User-Agent": USER_AGENT})
        with urllib.request.urlopen(req, timeout=8) as res:
            html_text = res.read().decode("utf-8", errors="ignore")
            # Extract paragraphs that are substantive (longer than 60 characters)
            p_matches = re.findall(r'<p[^>]*>(.*?)</p>', html_text, flags=re.DOTALL)
            clean_paragraphs = []
            for p in p_matches:
                cleaned = clean_html(p)
                # Ignore boilerplate navigation or copyright lines
                if len(cleaned) >= 65 and not any(skip in cleaned.lower() for skip in ["copyright", "cookie", "bbc homepage", "all rights reserved", "subscribe"]):
                    clean_paragraphs.append(cleaned)
            return clean_paragraphs[:3]
    except Exception:
        return []

# Common English vocabulary dictionary for IPA, POS, and Thai fallback
COMMON_VOCAB_DB = {
    "apologise": {"ipa": "/əˈpɒlədʒaɪz/", "pos": "v.", "th": "กล่าวขอโทษ", "chunk": "apologise for mistakes"},
    "artificial": {"ipa": "/ˌɑːtɪˈfɪʃl/", "pos": "adj.", "th": "เทียม, ประดิษฐ์ขึ้น", "chunk": "artificial intelligence"},
    "intelligence": {"ipa": "/ɪnˈtelɪdʒəns/", "pos": "n.", "th": "สติปัญญา, ความฉลาด", "chunk": "artificial intelligence"},
    "critical": {"ipa": "/ˈkrɪtɪkl/", "pos": "adj.", "th": "วิกฤต, สำคัญยิ่ง", "chunk": "critical security update"},
    "security": {"ipa": "/sɪˈkjʊərəti/", "pos": "n.", "th": "ความปลอดภัย", "chunk": "cyber security"},
    "update": {"ipa": "/ˌʌpˈdeɪt/", "pos": "v./n.", "th": "ปรับปรุงข้อมูลล่าสุด", "chunk": "issue an update"},
    "platform": {"ipa": "/ˈplætfɔːm/", "pos": "n.", "th": "แพลตฟอร์ม, ระบบ", "chunk": "online platform"},
    "infrastructure": {"ipa": "/ˈɪnfrəstrʌktʃə/", "pos": "n.", "th": "โครงสร้างพื้นฐาน", "chunk": "cloud infrastructure"},
    "economy": {"ipa": "/ɪˈkɒnəmi/", "pos": "n.", "th": "เศรษฐกิจ", "chunk": "global economy"},
    "inflation": {"ipa": "/ɪnˈfleɪʃn/", "pos": "n.", "th": "ภาวะเงินเฟ้อ", "chunk": "rising inflation"},
    "growth": {"ipa": "/ɡrəʊθ/", "pos": "n.", "th": "การเติบโต, การขยายตัว", "chunk": "economic growth"},
    "challenge": {"ipa": "/ˈtʃælɪndʒ/", "pos": "n.", "th": "ความท้าทาย", "chunk": "face a challenge"},
    "investment": {"ipa": "/ɪnˈvestmənt/", "pos": "n.", "th": "การลงทุน", "chunk": "foreign investment"},
    "environment": {"ipa": "/ɪnˈvaɪrənmənt/", "pos": "n.", "th": "สิ่งแวดล้อม", "chunk": "protect the environment"},
    "discovery": {"ipa": "/dɪˈskʌvəri/", "pos": "n.", "th": "การค้นพบ", "chunk": "scientific discovery"},
    "research": {"ipa": "/rɪˈsɜːtʃ/", "pos": "n./v.", "th": "งานวิจัย, ค้นคว้า", "chunk": "conduct research"},
    "victory": {"ipa": "/ˈvɪktəri/", "pos": "n.", "th": "ชัยชนะ", "chunk": "secure a victory"},
    "manager": {"ipa": "/ˈmænɪdʒə/", "pos": "n.", "th": "ผู้จัดการ, กุนซือ", "chunk": "team manager"},
    "performance": {"ipa": "/pəˈfɔːməns/", "pos": "n.", "th": "ผลงาน, ประสิทธิภาพ", "chunk": "strong performance"},
    "compete": {"ipa": "/kəmˈpiːt/", "pos": "v.", "th": "แข่งขัน", "chunk": "compete at top level"},
    "defence": {"ipa": "/dɪˈfens/", "pos": "n.", "th": "แนวรับ, การป้องกัน", "chunk": "solid defence"}
}

def extract_key_vocabulary(text):
    """Extract 4-5 relevant words from article text and find definition/IPA."""
    words = re.findall(r'\b[a-zA-Z]{4,15}\b', text.lower())
    found_vocab = []
    seen = set()

    # Priority 1: Match against COMMON_VOCAB_DB
    for w in words:
        if w in COMMON_VOCAB_DB and w not in seen:
            seen.add(w)
            item = COMMON_VOCAB_DB[w].copy()
            item["word"] = w
            found_vocab.append(item)
            if len(found_vocab) >= 4:
                break

    # Priority 2: If fewer than 4 words matched, pick noteworthy keywords
    if len(found_vocab) < 4:
        for w in words:
            if w not in seen and len(w) >= 6 and w not in ["about", "their", "which", "there", "because", "after", "before", "during", "between"]:
                seen.add(w)
                th_word = translate_to_thai(w)
                found_vocab.append({
                    "word": w,
                    "ipa": f"/{w}/",
                    "pos": "n.",
                    "th": th_word,
                    "chunk": f"{w} in context"
                })
                if len(found_vocab) >= 4:
                    break

    return found_vocab[:4]

def generate_comprehension_quiz(title, summary, paragraphs, category_id):
    """Generate 3 comprehension questions for the article."""
    q1 = {
        "question": f"What is the main subject discussed in this {category_id} news report?",
        "options": [
            title,
            "An unrelated historical documentary",
            "A technical breakdown of space exploration",
            "A personal travel blog entry"
        ],
        "correctIndex": 0,
        "explanation": f"ประเด็นหลักของข่าวนี้คือเรื่อง '{title}'"
    }

    q2 = {
        "question": "Which of the following statements best aligns with the report?",
        "options": [
            "The event had zero impact on the organization or public",
            f"Key developments occurred recently regarding {title[:40]}...",
            "All activities have been permanently terminated without explanation",
            "The report mentions no factual details or current status"
        ],
        "correctIndex": 1,
        "explanation": "เนื้อหาข่าวรายงานถึงความคืบหน้าและเหตุการณ์สำคัญที่เพิ่งเกิดขึ้น"
    }

    q3 = {
        "question": "What is the recommended takeaway for English learners reading this article?",
        "options": [
            "Memorize only isolated grammatical suffixes",
            "Notice sentence connectors and specialized vocabulary in context",
            "Ignore the factual context and read word-for-word",
            "Avoid practicing pronunciation with audio"
        ],
        "correctIndex": 1,
        "explanation": "การฝึกอ่านข่าวช่วยให้เราสังเกตการใช้คำเชื่อมและคำศัพท์เฉพาะทางในบริบทจริงได้อย่างเป็นธรรมชาติ"
    }

    return [q1, q2, q3]

def process_news_item(raw_item, category_key, index):
    """Transform raw RSS item into full Graded News Article."""
    cat_info = CATEGORIES[category_key]
    title_en = raw_item["title"]
    title_th = translate_to_thai(title_en)

    desc_en = raw_item["description"]
    desc_th = translate_to_thai(desc_en)

    # Attempt fetching real body paragraphs
    body_paragraphs = extract_article_body(raw_item["link"])

    paragraphs = []
    # Paragraph 1: Headline & lead
    paragraphs.append({
        "id": "p1",
        "en": desc_en,
        "th": desc_th
    })

    # Paragraph 2 & 3: Additional article context
    if body_paragraphs:
        for idx, p_text in enumerate(body_paragraphs[:2]):
            th_text = translate_to_thai(p_text)
            paragraphs.append({
                "id": f"p{idx + 2}",
                "en": p_text,
                "th": th_text
            })
    else:
        # Fallback second paragraph with context
        p2_en = f"This report covers ongoing updates from {raw_item.get('link', 'international media')}. Analysts and observers continue to follow the situation closely."
        p2_th = translate_to_thai(p2_en)
        paragraphs.append({
            "id": "p2",
            "en": p2_en,
            "th": p2_th
        })

    # Word count
    full_text = " ".join([p["en"] for p in paragraphs])
    word_count = len(full_text.split())

    # Key vocabulary
    key_vocab = extract_key_vocabulary(full_text)

    # Date format
    now_date = datetime.now().strftime("%Y-%m-%d")

    # Comprehension quiz
    quiz = generate_comprehension_quiz(title_en, desc_en, paragraphs, cat_info["label"])

    article = {
        "id": f"news-{cat_info['id']}-{index + 1:02d}",
        "collection": "daily-news",
        "category": cat_info["id"],
        "categoryLabel": cat_info["label"],
        "categoryTh": cat_info["titleTh"],
        "categoryEmoji": cat_info["emoji"],
        "level": cat_info["level"],
        "levelTitle": f"Daily News • {cat_info['label']}",
        "levelBadge": cat_info["levelBadge"],
        "levelColor": cat_info["color"],
        "coverEmoji": cat_info["emoji"],
        "title": title_en,
        "titleTh": title_th,
        "publishedDate": now_date,
        "estimatedTime": f"{max(2, round(word_count / 50))} นาที",
        "readTime": f"{max(2, round(word_count / 50))} นาที",
        "wordCount": word_count,
        "xpReward": 60,
        "sourceUrl": raw_item.get("link", ""),
        "summary": desc_th if len(desc_th) < 160 else desc_th[:157] + "...",
        "tags": [cat_info["label"], "Daily News", cat_info["level"]],
        "keyVocab": key_vocab,
        "paragraphs": paragraphs,
        "quiz": quiz
    }

    return article

def run_fetch_news(target_category=None, limit_per_cat=3):
    """Main crawler execution routine."""
    print("=" * 65)
    print("📰 EngMastery: Fetching & Summarizing Graded Daily News")
    print(f"⏰ Execution Time: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    print("=" * 65)

    categories_to_run = [target_category] if target_category and target_category in CATEGORIES else list(CATEGORIES.keys())

    all_articles = []
    total_count = 0

    for cat_key in categories_to_run:
        cat_info = CATEGORIES[cat_key]
        print(f"\n[{cat_info['emoji']} {cat_info['label']}] Fetching RSS feeds...")

        collected_items = []
        for feed in cat_info["feeds"]:
            items = fetch_feed_items(feed, max_items=limit_per_cat)
            collected_items.extend(items)
            if len(collected_items) >= limit_per_cat:
                break

        # Deduplicate by title
        seen_titles = set()
        unique_items = []
        for it in collected_items:
            clean_t = it["title"].lower().strip()
            if clean_t not in seen_titles:
                seen_titles.add(clean_t)
                unique_items.append(it)
            if len(unique_items) >= limit_per_cat:
                break

        print(f"  -> Found {len(unique_items)} stories. Summarizing & translating...")

        for idx, item in enumerate(unique_items):
            print(f"     [{idx+1}/{len(unique_items)}] {item['title'][:55]}...")
            art = process_news_item(item, cat_key, idx)
            all_articles.append(art)
            total_count += 1

    # Load existing articles if running for a single category to avoid overwriting other categories
    if target_category and os.path.exists(OUTPUT_FILE):
        try:
            with open(OUTPUT_FILE, "r", encoding="utf-8") as f:
                content = f.read()
            start_idx = content.find('[')
            end_idx = content.rfind(']')
            if start_idx != -1 and end_idx != -1:
                raw_json = content[start_idx:end_idx + 1]
                existing = json.loads(raw_json)
                preserved = [a for a in existing if a.get("category") != target_category]
                all_articles = all_articles + preserved
        except Exception as e:
            print(f"⚠️ Warning: Could not preserve other categories ({e})")

    # Save to data/dailyNewsData.js
    header = """/**
 * EngMastery: Daily Graded News Database (dailyNewsData.js)
 * Automatically fetched, graded, bilingual-translated, and quiz-equipped news.
 * Categories: Tech & DevOps, World & Business, Daily Life & Science, Sport (Man United).
 */

"""
    js_content = header + "window.dailyNewsData = " + json.dumps(all_articles, ensure_ascii=False, indent=2) + ";\n"

    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        f.write(js_content)

    print("\n" + "=" * 65)
    print(f"✅ Successfully compiled {len(all_articles)} news articles into:")
    print(f"   📄 {OUTPUT_FILE}")
    print("=" * 65)

if __name__ == "__main__":
    cat_arg = None
    if len(sys.argv) > 1:
        arg = sys.argv[1].lower().replace("--category=", "").replace("--cat=", "")
        if arg in CATEGORIES:
            cat_arg = arg
        elif arg in ["-h", "--help"]:
            print("Usage: python3 scripts/fetch_news.py [tech|business|life_science|sport]")
            sys.exit(0)

    run_fetch_news(target_category=cat_arg, limit_per_cat=3)
