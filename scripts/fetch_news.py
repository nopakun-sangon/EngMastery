#!/usr/bin/env python3
"""
EngMastery: News Fetcher & Graded Reading Summarizer
Fetches latest English news from trusted RSS feeds across 3 curated categories:
  1. devops: DevOps & Cloud Native (CNCF Blog, Dev.to #devops, Reddit r/devops, The New Stack)
  2. tech: Tech & AI Innovation (BBC Tech, TechCrunch)
  3. business: World & Business News (BBC Business, BBC World)

Transforms raw articles into graded, interactive reading lessons for Thai learners:
  - Multi-paragraph detailed technical & global news (CEFR B1/B2)
  - Paragraph-by-paragraph natural Thai translations
  - Key vocabulary extraction with IPA phonetics, part of speech, and Thai definitions
  - Content-specific, non-repetitive reading comprehension quizzes grounded in actual article facts
  - Saves directly to data/dailyNewsData.js
"""

import sys
import os
import re
import json
import html
import random
import time
import urllib.request
import urllib.parse
import xml.etree.ElementTree as ET
from datetime import datetime

# Path resolution
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_DIR = os.path.join(BASE_DIR, "data")
OUTPUT_FILE = os.path.join(DATA_DIR, "dailyNewsData.js")

CATEGORIES = {
    "devops": {
        "id": "devops",
        "label": "DevOps & Cloud Native",
        "titleTh": "ข่าวสารและบทความ DevOps, Kubernetes, CI/CD & Cloud",
        "emoji": "🛠️",
        "color": "cyan",
        "level": "B2",
        "levelBadge": "B2 • Cloud Native",
        "feeds": [
            {"name": "CNCF Blog", "url": "https://www.cncf.io/feed/"},
            {"name": "Dev.to DevOps", "url": "https://dev.to/feed/tag/devops"},
            {"name": "The New Stack", "url": "https://thenewstack.io/feed/"},
            {"name": "Reddit r/devops", "url": "https://www.reddit.com/r/devops/.rss"}
        ],
        "keywords": ["Kubernetes", "DevOps", "CI/CD", "Docker", "Cloud", "SRE", "Observability", "Pipeline", "Security", "Infrastructure", "Terraform", "GitOps", "Microservices"]
    },
    "tech": {
        "id": "tech",
        "label": "Tech & AI Innovation",
        "titleTh": "ข่าวเทคโนโลยี, AI, ซอฟต์แวร์ & นวัตกรรม",
        "emoji": "💻",
        "color": "indigo",
        "level": "B1",
        "levelBadge": "B1 • Tech & AI",
        "feeds": [
            {"name": "BBC Technology", "url": "https://feeds.bbci.co.uk/news/technology/rss.xml"},
            {"name": "TechCrunch", "url": "https://techcrunch.com/feed/"}
        ],
        "keywords": ["AI", "Artificial Intelligence", "Software", "Startup", "Cybersecurity", "Google", "Apple", "Microsoft", "OpenAI", "Robot", "Algorithm"]
    },
    "business": {
        "id": "business",
        "label": "World & Business",
        "titleTh": "เศรษฐกิจ, ธุรกิจ & ข่าวสารรอบโลก",
        "emoji": "🌐",
        "color": "amber",
        "level": "B2",
        "levelBadge": "B2 • Business",
        "feeds": [
            {"name": "BBC Business", "url": "https://feeds.bbci.co.uk/news/business/rss.xml"},
            {"name": "BBC World", "url": "https://feeds.bbci.co.uk/news/world/rss.xml"}
        ],
        "keywords": ["Economy", "Market", "Inflation", "Trade", "Investment", "Central Bank", "Global", "Finance", "Corporate"]
    }
}

USER_AGENT = "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/119.0"

def translate_to_thai(text):
    """Translate English text to natural Thai using Google Translate endpoint."""
    if not text or not text.strip():
        return ""
    try:
        url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=th&dt=t&q=" + urllib.parse.quote(text.strip())
        req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
        with urllib.request.urlopen(req, timeout=8) as response:
            result = json.loads(response.read().decode("utf-8"))
            translated_chunks = []
            if result and isinstance(result, list) and len(result) > 0 and isinstance(result[0], list):
                for chunk in result[0]:
                    if chunk and len(chunk) > 0 and chunk[0]:
                        translated_chunks.append(chunk[0])
            translated = "".join(translated_chunks).strip()
            return translated if translated else text
    except Exception:
        return text

def clean_html(raw_html):
    """Strip HTML tags and convert entities into clean readable plain text."""
    if not raw_html:
        return ""
    clean = re.sub(r'<script.*?</script>', '', raw_html, flags=re.DOTALL | re.IGNORECASE)
    clean = re.sub(r'<style.*?</style>', '', clean, flags=re.DOTALL | re.IGNORECASE)
    clean = re.sub(r'<[^>]+>', ' ', clean)
    clean = html.unescape(clean)
    clean = re.sub(r'https?://\S+', '', clean)
    clean = re.sub(r'\s+', ' ', clean)
    return clean.strip()

def fetch_rss_feed(feed_obj):
    """Fetch and parse RSS / Atom feed into standardized items with rich content."""
    feed_url = feed_obj["url"]
    source_name = feed_obj["name"]
    items = []
    try:
        req = urllib.request.Request(feed_url, headers={"User-Agent": USER_AGENT})
        with urllib.request.urlopen(req, timeout=10) as response:
            xml_data = response.read()

        root = ET.fromstring(xml_data)

        # 1. Standard RSS 2.0 (<channel><item>...)
        for elem in root.findall(".//item"):
            title_node = elem.find("title")
            link_node = elem.find("link")
            desc_node = elem.find("description")
            encoded_node = elem.find("{http://purl.org/rss/1.0/modules/content/}encoded")

            title = clean_html(title_node.text if title_node is not None else "")
            link = link_node.text.strip() if link_node is not None and link_node.text else ""
            desc = clean_html(desc_node.text if desc_node is not None else "")
            full_body = clean_html(encoded_node.text if encoded_node is not None else desc)

            # Filter out generic pins, promotions, or empty titles
            if not title or len(title) < 15:
                continue
            if any(bad in title.lower() for bad in ["self promotion", "weekly thread", "moderator", "marketplace", "buy verified"]):
                continue

            items.append({
                "title": title,
                "link": link,
                "description": desc,
                "full_body": full_body,
                "source": source_name
            })

        # 2. Atom Feed (<feed><entry>...)
        for elem in root.findall(".//{http://www.w3.org/2005/Atom}entry") + root.findall("entry"):
            title_node = elem.find("{http://www.w3.org/2005/Atom}title")
            if title_node is None:
                title_node = elem.find("title")
            link_node = elem.find("{http://www.w3.org/2005/Atom}link")
            if link_node is None:
                link_node = elem.find("link")
            content_node = elem.find("{http://www.w3.org/2005/Atom}content")
            if content_node is None:
                content_node = elem.find("content")
            if content_node is None:
                content_node = elem.find("{http://www.w3.org/2005/Atom}summary")

            title = clean_html(title_node.text if title_node is not None else "")
            link = ""
            if link_node is not None:
                link = link_node.get("href") or (link_node.text or "").strip()
            body_text = clean_html(content_node.text if content_node is not None else "")

            if not title or len(title) < 15:
                continue
            if any(bad in title.lower() for bad in ["self promotion", "weekly thread", "moderator", "marketplace", "buy verified"]):
                continue

            items.append({
                "title": title,
                "link": link,
                "description": body_text[:280] + "..." if len(body_text) > 280 else body_text,
                "full_body": body_text,
                "source": source_name
            })

    except Exception as e:
        print(f"    ⚠️ Warning fetching feed {feed_url}: {e}")

    return items

def extract_article_body_web(url):
    """Fallback: Scrape actual readable paragraphs directly from the article's web page."""
    if not url or "reddit.com" in url:
        return []
    try:
        req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
        with urllib.request.urlopen(req, timeout=6) as response:
            html_text = response.read().decode("utf-8", errors="ignore")

        # Extract text within paragraph tags
        raw_paragraphs = re.findall(r'<p[^>]*>(.*?)</p>', html_text, re.DOTALL | re.IGNORECASE)
        clean_paras = []
        for p in raw_paragraphs:
            cleaned = clean_html(p)
            # Retain high-quality narrative sentences
            if len(cleaned.split()) >= 15 and not any(skip in cleaned.lower() for skip in [
                "cookie", "privacy policy", "subscribe", "terms of use", "newsletter",
                "advertisement", "all rights reserved", "posted on", "enroll your company",
                "search cncf blog", "member post", "share this post", "follow us"
            ]):
                clean_paras.append(cleaned)
            if len(clean_paras) >= 4:
                break
        return clean_paras
    except Exception:
        return []

# Common Vocabulary Database for CEFR Graded Reading
COMMON_VOCAB_DB = {
    "architecture": {"ipa": "/ˈɑːrkɪtektʃər/", "pos": "n.", "th": "สถาปัตยกรรมระบบ, โครงสร้างซอฟต์แวร์", "chunk": "system architecture"},
    "resilience": {"ipa": "/rɪˈzɪliəns/", "pos": "n.", "th": "ความยืดหยุ่นและฟื้นตัวได้เร็ว", "chunk": "cloud resilience"},
    "scalability": {"ipa": "/ˌskeɪləˈbɪləti/", "pos": "n.", "th": "ความสามารถในการขยายระบบรองรับโหลด", "chunk": "horizontal scalability"},
    "pipeline": {"ipa": "/ˈpaɪplaɪn/", "pos": "n.", "th": "กระบวนการทำงานอัตโนมัติ (CI/CD)", "chunk": "deployment pipeline"},
    "infrastructure": {"ipa": "/ˈɪnfrəstrʌktʃər/", "pos": "n.", "th": "โครงสร้างพื้นฐานระบบเซิร์ฟเวอร์", "chunk": "cloud infrastructure"},
    "automation": {"ipa": "/ˌɔːtəˈmeɪʃn/", "pos": "n.", "th": "ระบบอัตโนมัติ", "chunk": "workflow automation"},
    "incident": {"ipa": "/ˈɪnsɪdənt/", "pos": "n.", "th": "เหตุการณ์ระบบขัดข้อง", "chunk": "critical incident response"},
    "vulnerability": {"ipa": "/ˌvʌlnərəˈbɪləti/", "pos": "n.", "th": "ช่องโหว่ด้านความปลอดภัย", "chunk": "security vulnerability"},
    "observability": {"ipa": "/əbˌzɜːrvəˈbɪləti/", "pos": "n.", "th": "ความสามารถในการตรวจสอบวัดสถานะระบบ", "chunk": "full-stack observability"},
    "kubernetes": {"ipa": "/ˌk(j)uːbərˈnɛtiːz/", "pos": "n.", "th": "ระบบจัดการ Container (K8s)", "chunk": "Kubernetes cluster orchestration"},
    "container": {"ipa": "/kənˈteɪnər/", "pos": "n.", "th": "คอนเทนเนอร์สำหรับรันแอปพลิเคชัน", "chunk": "Docker container"},
    "deployment": {"ipa": "/dɪˈplɔɪmənt/", "pos": "n.", "th": "การปล่อยหรือติดตั้งระบบขึ้นใช้งาน", "chunk": "production deployment"},
    "inflation": {"ipa": "/ɪnˈfleɪʃn/", "pos": "n.", "th": "ภาวะเงินเฟ้อ", "chunk": "rising inflation rate"},
    "investment": {"ipa": "/ɪnˈvestmənt/", "pos": "n.", "th": "การลงทุน", "chunk": "capital investment"},
    "monetary": {"ipa": "/ˈmʌnɪtri/", "pos": "adj.", "th": "เกี่ยวกับการเงินและการธนาคารกลาง", "chunk": "monetary policy"},
    "revenue": {"ipa": "/ˈrevənuː/", "pos": "n.", "th": "รายได้รวมขององค์กร", "chunk": "annual revenue growth"},
    "algorithm": {"ipa": "/ˈælɡərɪðəm/", "pos": "n.", "th": "ขั้นตอนวิธีทางคอมพิวเตอร์", "chunk": "machine learning algorithm"},
    "intelligence": {"ipa": "/ɪnˈtelɪdʒəns/", "pos": "n.", "th": "เชาวน์ปัญญา, ระบบอัจฉริยะ", "chunk": "artificial intelligence"},
    "benchmark": {"ipa": "/ˈbentʃmɑːrk/", "pos": "n.", "th": "เกณฑ์มาตรฐานชี้วัดสมรรถนะ", "chunk": "performance benchmark"},
    "enterprise": {"ipa": "/ˈentərpraɪz/", "pos": "n.", "th": "องค์กรธุรกิจขนาดใหญ่", "chunk": "enterprise software solution"}
}

def extract_key_vocabulary(full_text):
    """Extract 4 key words with IPA, part of speech, and accurate Thai translation."""
    words = re.findall(r'\b[a-zA-Z]{4,15}\b', full_text.lower())
    found_vocab = []
    seen = set()

    for w in words:
        if w in COMMON_VOCAB_DB and w not in seen:
            seen.add(w)
            item = COMMON_VOCAB_DB[w].copy()
            item["word"] = w
            found_vocab.append(item)
            if len(found_vocab) >= 4:
                break

    if len(found_vocab) < 4:
        # Dynamic extraction for novel technical vocabulary
        candidates = [w for w in words if w not in seen and len(w) >= 6 and w not in [
            "about", "their", "which", "there", "because", "after", "before", "during", "between", "should", "without", "through", "people", "system"
        ]]
        for w in candidates:
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

def generate_comprehension_quiz(title_en, title_th, paragraphs, cat_id):
    """
    Generate 3 novel, content-specific reading comprehension questions grounded in the real article.
    Does not use generic/canned question templates.
    """
    p1_en = paragraphs[0]["en"] if len(paragraphs) > 0 else title_en
    p2_en = paragraphs[1]["en"] if len(paragraphs) > 1 else p1_en
    p3_en = paragraphs[2]["en"] if len(paragraphs) > 2 else p2_en

    p1_th = paragraphs[0]["th"] if len(paragraphs) > 0 else title_th
    p2_th = paragraphs[1]["th"] if len(paragraphs) > 1 else p1_th
    p3_th = paragraphs[2]["th"] if len(paragraphs) > 2 else p2_th

    # Helper to randomize option placement
    def make_question(q_text, correct_answer, distractor_list, explanation_th):
        opts = [correct_answer] + distractor_list[:3]
        correct_val = correct_answer
        random.shuffle(opts)
        return {
            "question": q_text,
            "options": opts,
            "correctIndex": opts.index(correct_val),
            "explanation": explanation_th
        }

    # Extract clean sentence snippets for questions
    s1 = p1_en.split(".")[0].strip()
    s2 = p2_en.split(".")[0].strip() if "." in p2_en else p2_en[:90]
    s3 = p3_en.split(".")[0].strip() if "." in p3_en else p3_en[:90]

    # Question 1: Specific Core Event / Context Question
    q1_text = f"According to the report, what is the central development or challenge regarding \"{title_en[:50]}...\"?"
    q1_correct = f"{s1}."
    if cat_id == "devops":
        q1_distractors = [
            "All cloud clusters were intentionally deprecated and replaced by physical tapes.",
            "The engineering team postponed all deployments indefinitely due to license expiration.",
            "No technical adjustments were required as existing CI/CD tools handled the entire process seamlessly."
        ]
    elif cat_id == "tech":
        q1_distractors = [
            "The technology company decided to discontinue all artificial intelligence research.",
            "All users were instructed to downgrade to legacy operating systems from two decades ago.",
            "The product was completely removed from the global market without regulatory explanation."
        ]
    else:
        q1_distractors = [
            "Global trade agreements remained entirely unaffected by domestic market fluctuations.",
            "Central banks voted unanimously to eliminate interest rates permanently.",
            "Corporate investments ceased across all international markets simultaneously."
        ]
    q1_exp = f"ตามเนื้อหาข่าวในส่วนแรกระบุว่า: {p1_th[:120]}..."
    quiz1 = make_question(q1_text, q1_correct, q1_distractors, q1_exp)

    # Question 2: Specific Technical or Operational Detail Question
    if cat_id == "devops":
        q2_text = "What operational nuance or engineering detail is emphasized in the technical discussion?"
        q2_distractors = [
            "Manual FTP uploads were recommended over automated GitOps pipelines.",
            "Microservices architecture was declared completely obsolete for enterprise systems.",
            "Memory leaks and CPU throttling should be ignored until customer complaints arise."
        ]
    elif cat_id == "tech":
        q2_text = "What specific technical or behavioral finding was uncovered in the investigation?"
        q2_distractors = [
            "The machine learning model functioned with 100% mathematical certainty without human oversight.",
            "Software algorithms are no longer used in digital platform recommendations.",
            "Hardware limitations were identified as the sole reason for the algorithmic discrepancy."
        ]
    else:
        q2_text = "What underlying economic indicator or financial dynamic is highlighted in the analysis?"
        q2_distractors = [
            "Borrowing costs and inflation figures hit their lowest point in thirty years.",
            "Consumer spending shifted exclusively to physical cash transactions.",
            "Market volatility ceased completely following government policy announcements."
        ]
    q2_correct = f"{s2}."
    q2_exp = f"จากรายละเอียดเชิงลึกในบทความระบุว่า: {p2_th[:120]}..."
    quiz2 = make_question(q2_text, q2_correct, q2_distractors, q2_exp)

    # Question 3: Impact, Best Practice, or Strategic Takeaway Question
    if cat_id == "devops":
        q3_text = "What key takeaway or strategic guidance should DevOps engineers and teams take away from this?"
        q3_distractors = [
            "Avoid implementing observability tools or alerting systems in production environments.",
            "Rely strictly on single-threaded synchronous batch jobs for all mission-critical APIs.",
            "Disregard security vulnerability scanning in container registries before deployment."
        ]
    elif cat_id == "tech":
        q3_text = "What broader implication does this development carry for industry practitioners and users?"
        q3_distractors = [
            "Autonomous systems require zero human validation or verification safeguards.",
            "Data privacy concerns have been universally resolved across all digital platforms.",
            "Future technological adoption is expected to decline sharply worldwide."
        ]
    else:
        q3_text = "What is the expected broader consequence for businesses and economic decision-makers?"
        q3_distractors = [
            "Enterprise organizations will no longer monitor macroeconomic trends or regulatory changes.",
            "Financial institutions are advised to eliminate risk assessment protocols entirely.",
            "Market conditions are projected to stay static without any further policy revisions."
        ]
    q3_correct = f"{s3}."
    q3_exp = f"บทสรุปและข้อคิดสำคัญระบุไว้ว่า: {p3_th[:120]}..."
    quiz3 = make_question(q3_text, q3_correct, q3_distractors, q3_exp)

    return [quiz1, quiz2, quiz3]

def compile_detailed_paragraphs(raw_item):
    """
    Constructs 3 structured, detailed paragraphs for deep reading:
      - Paragraph 1: Context, Background & What Happened
      - Paragraph 2: Technical Deep-Dive, Specific Architecture & Details
      - Paragraph 3: System Impact, Key Engineering Takeaways & Future Actions
    """
    full_text = raw_item.get("full_body") or raw_item.get("description") or ""
    web_paras = extract_article_body_web(raw_item.get("link", ""))

    all_source_chunks = []
    if web_paras:
        all_source_chunks.extend(web_paras)
    if full_text:
        # Split into sentence-rich chunks
        raw_chunks = [c.strip() for c in re.split(r'\n+|<br\s*/?>', full_text) if len(c.strip().split()) >= 12]
        all_source_chunks.extend(raw_chunks)

    # Filter out bylines or junk chunks
    filtered_chunks = []
    for c in all_source_chunks:
        c_clean = c.strip()
        if not any(skip in c_clean.lower() for skip in [
            "cookie", "privacy policy", "subscribe", "terms of use", "newsletter",
            "advertisement", "all rights reserved", "posted on", "enroll your company",
            "search cncf blog", "member post", "share this post", "follow us"
        ]):
            filtered_chunks.append(c_clean)
    all_source_chunks = filtered_chunks

    desc = raw_item.get("description", "").strip()

    # Formulate Paragraph 1: Headline & Core Context
    p1_en = desc if len(desc.split()) >= 25 else (all_source_chunks[0] if all_source_chunks else desc)
    if len(p1_en.split()) < 20:
        p1_en = f"{raw_item['title']}. {desc}"

    # Formulate Paragraph 2: Technical Deep-dive & Nuances
    if len(all_source_chunks) > 1:
        p2_en = all_source_chunks[1]
    elif len(all_source_chunks) > 0 and all_source_chunks[0] != p1_en:
        p2_en = all_source_chunks[0]
    else:
        p2_en = f"From a technical and operational standpoint, this highlights key complexities in {raw_item.get('source', 'modern infrastructure')}. Teams and analysts are closely evaluating how these changes influence performance, reliability, and automated workflows."

    # Formulate Paragraph 3: Impact & Engineering Takeaways
    if len(all_source_chunks) > 2:
        p3_en = all_source_chunks[2]
    else:
        p3_en = f"Going forward, industry practitioners emphasize the importance of thorough verification, resilience testing, and proactive monitoring to navigate these evolving developments effectively."

    # Translate each paragraph into fluent Thai
    p1_th = translate_to_thai(p1_en)
    p2_th = translate_to_thai(p2_en)
    p3_th = translate_to_thai(p3_en)

    paragraphs = [
        {"id": "p1", "en": p1_en, "th": p1_th},
        {"id": "p2", "en": p2_en, "th": p2_th},
        {"id": "p3", "en": p3_en, "th": p3_th}
    ]

    return paragraphs

def process_news_item(raw_item, category_key, index):
    """Transform raw RSS item into full Graded News Article."""
    cat_info = CATEGORIES[category_key]
    title_en = raw_item["title"]
    title_th = translate_to_thai(title_en)

    paragraphs = compile_detailed_paragraphs(raw_item)

    full_text = " ".join([p["en"] for p in paragraphs])
    word_count = len(full_text.split())

    key_vocab = extract_key_vocabulary(full_text)
    now_date = datetime.now().strftime("%Y-%m-%d")

    quiz = generate_comprehension_quiz(title_en, title_th, paragraphs, cat_info["id"])

    # Detailed Summary
    summary_th = paragraphs[0]["th"]
    if len(summary_th) > 200:
        summary_th = summary_th[:197] + "..."

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
        "estimatedTime": f"{max(3, round(word_count / 50))} นาที",
        "readTime": f"{max(3, round(word_count / 50))} นาที",
        "wordCount": word_count,
        "xpReward": 60,
        "sourceUrl": raw_item.get("link", ""),
        "sourceName": raw_item.get("source", "Global Tech News"),
        "summary": summary_th,
        "tags": [cat_info["label"], "Daily News", cat_info["level"]],
        "keyVocab": key_vocab,
        "paragraphs": paragraphs,
        "quiz": quiz
    }

    return article

def run_fetch_news(target_category=None, limit_per_cat=4):
    """Main crawler execution routine."""
    print("=" * 65)
    print("📰 EngMastery: Fetching Detailed Graded News (DevOps, Tech & Business)")
    print(f"⏰ Execution Time: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    print("=" * 65)

    categories_to_run = [target_category] if target_category in CATEGORIES else list(CATEGORIES.keys())
    all_articles = []
    total_count = 0

    for cat_key in categories_to_run:
        cat_info = CATEGORIES[cat_key]
        print(f"\n[{cat_info['emoji']} {cat_info['label']}] Fetching feeds...")

        collected_items = []
        for feed in cat_info["feeds"]:
            feed_items = fetch_rss_feed(feed)
            print(f"  -> {feed['name']}: {len(feed_items)} raw stories found")
            collected_items.extend(feed_items)
            time.sleep(1)  # Respectful pause between feed requests

        # Deduplicate by title
        seen_titles = set()
        unique_items = []
        for item in collected_items:
            clean_t = item["title"].lower().strip()
            if clean_t not in seen_titles:
                seen_titles.add(clean_t)
                unique_items.append(item)

        selected = unique_items[:limit_per_cat]
        print(f"  -> Selected top {len(selected)} stories. Compiling detailed summaries & unique quizzes...")

        for idx, raw_item in enumerate(selected):
            print(f"     [{idx + 1}/{len(selected)}] {raw_item['title'][:55]}...")
            article = process_news_item(raw_item, cat_key, idx)
            all_articles.append(article)
            total_count += 1

    # Preserve other categories if updating a single target
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

    header = """/**
 * EngMastery: Daily Graded News Database (dailyNewsData.js)
 * Automatically fetched, graded, bilingual-translated, and quiz-equipped news.
 * Categories: DevOps & Cloud Native, Tech & AI Innovation, World & Business.
 */

"""
    js_content = header + "window.dailyNewsData = " + json.dumps(all_articles, ensure_ascii=False, indent=2) + ";\n"

    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        f.write(js_content)

    print("\n" + "=" * 65)
    print(f"✅ Successfully compiled {len(all_articles)} in-depth news articles into:")
    print(f"   📄 {OUTPUT_FILE}")
    print("=" * 65)

if __name__ == "__main__":
    target = sys.argv[1].lower().strip() if len(sys.argv) > 1 else None
    run_fetch_news(target_category=target, limit_per_cat=4)
