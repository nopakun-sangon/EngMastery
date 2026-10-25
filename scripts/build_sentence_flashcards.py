#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script to build data/sentenceFlashcardsData.js with 530 curated CEFR A1-C2 sentences.
Includes:
- A1: 100 sentences (Daily conversation, basic inquiries, greetings, routines)
- A2: 100 sentences (Past events, future plans, feelings, favors, travel)
- B1: 100 sentences (Workplace collaboration, advice, conditionals, explanations)
- B2: 100 sentences (Tech, engineering, negotiation, cause-and-effect, passive voice)
- C1: 80 sentences (Advanced business, diplomacy, formal analysis, inversion)
- C2: 50 sentences (Executive communication, nuanced rhetoric, native idiomatic mastery)
"""

import json
import re

def clean_text(s):
    if not s:
        return ""
    s = s.strip()
    s = s.replace('"', '\\"').replace('\n', ' ')
    return s

def main():
    print("Reading vocabData.js...")
    with open('data/vocabData.js', 'r', encoding='utf-8') as f:
        content = f.read()

    pattern = re.compile(
        r'id:\s*\"([^\"]+)\".*?'
        r'word:\s*\"([^\"]+)\".*?'
        r'level:\s*\"([^\"]+)\".*?'
        r'category:\s*\"([^\"]+)\".*?'
        r'th:\s*\"([^\"]+)\".*?'
        r'exampleEn:\s*\"([^\"]+)\".*?'
        r'exampleTh:\s*\"([^\"]+)\"',
        re.DOTALL
    )
    matches = pattern.findall(content)
    print(f"Extracted {len(matches)} vocab items from vocabData.js")

    category_map = {
        'tech-devops': ('tech', 'สายเทค & ไอที'),
        'workplace-business': ('workplace', 'การทำงาน & ธุรกิจ'),
        'phrasal-verbs-idioms': ('idiom', 'สำนวน & กริยาวลี'),
        'oxford-core': ('daily', 'ชีวิตประจำวัน')
    }

    # Group by CEFR level
    by_level = {'A1': [], 'A2': [], 'B1': [], 'B2': []}
    seen_en = set()

    for vid, word, lvl, cat, th, en, ex_th in matches:
        clean_lvl = lvl.split(',')[0].strip().split(' ')[0]
        if clean_lvl not in by_level:
            continue
        en_str = en.strip()
        if not en_str or en_str in seen_en:
            continue
        # Quality filters
        words_count = len(en_str.split())
        if words_count < 4 or words_count > 25:
            continue
        if not (en_str[0].isupper() or en_str[0] in ('"', "'")):
            continue
        if not en_str.endswith(('.', '?', '!')):
            en_str += '.'

        seen_en.add(en_str)
        cat_key, cat_label = category_map.get(cat, ('daily', 'ชีวิตประจำวัน'))
        if 'tech' in en_str.lower() or 'server' in en_str.lower() or 'code' in en_str.lower() or 'data' in en_str.lower() or 'api' in en_str.lower():
            cat_key, cat_label = ('tech', 'สายเทค & ไอที')
        elif 'meeting' in en_str.lower() or 'project' in en_str.lower() or 'budget' in en_str.lower() or 'report' in en_str.lower() or 'office' in en_str.lower() or 'manager' in en_str.lower():
            cat_key, cat_label = ('workplace', 'การทำงาน & ธุรกิจ')

        by_level[clean_lvl].append({
            'word': word,
            'wordTh': th,
            'en': en_str,
            'th': ex_th.strip(),
            'category': cat_key,
            'categoryLabel': cat_label
        })

    for lvl in ['A1', 'A2', 'B1', 'B2']:
        print(f"Available for {lvl}: {len(by_level[lvl])}")

    # Build final list
    final_cards = []
    card_id = 1

    def add_card(lvl, lvl_name, cat, cat_label, en, th, pattern_str="", key_vocab=None, tips=""):
        nonlocal card_id
        final_cards.append({
            'id': f'sf-{lvl.lower()}-{card_id:03d}',
            'level': lvl,
            'levelName': lvl_name,
            'category': cat,
            'categoryLabel': cat_label,
            'en': en.strip(),
            'th': th.strip(),
            'pattern': pattern_str.strip() if pattern_str else "",
            'keyVocab': key_vocab or [],
            'tips': tips.strip() if tips else ""
        })
        card_id += 1

    # 1. A1 - 100 sentences
    print("Selecting 100 A1 sentences...")
    a1_candidates = by_level['A1'][:100]
    for c in a1_candidates:
        add_card(
            'A1', 'Beginner',
            c['category'], c['categoryLabel'],
            c['en'], c['th'],
            f"คำสำคัญ: {c['word']}",
            [{'word': c['word'], 'th': c['wordTh']}],
            "ประโยคพื้นฐานสำหรับสื่อสารในชีวิตประจำวัน"
        )

    # 2. A2 - 100 sentences
    print("Selecting 100 A2 sentences...")
    a2_candidates = by_level['A2'][:100]
    for c in a2_candidates:
        add_card(
            'A2', 'Elementary',
            c['category'], c['categoryLabel'],
            c['en'], c['th'],
            f"คำสำคัญ: {c['word']}",
            [{'word': c['word'], 'th': c['wordTh']}],
            "ประโยคบอกเล่าเรื่องราว อารมณ์ และการนัดหมาย"
        )

    # 3. B1 - 100 sentences
    print("Selecting 100 B1 sentences...")
    b1_candidates = by_level['B1'][:100]
    for c in b1_candidates:
        add_card(
            'B1', 'Intermediate',
            c['category'], c['categoryLabel'],
            c['en'], c['th'],
            f"คำสำคัญ: {c['word']}",
            [{'word': c['word'], 'th': c['wordTh']}],
            "ประโยคสื่อสารในการทำงาน อธิบายเหตุผล และเงื่อนไข"
        )

    # 4. B2 - 100 sentences
    print("Selecting 100 B2 sentences...")
    b2_candidates = by_level['B2'][:100]
    for c in b2_candidates:
        add_card(
            'B2', 'Upper-Intermediate',
            c['category'], c['categoryLabel'],
            c['en'], c['th'],
            f"คำสำคัญ: {c['word']}",
            [{'word': c['word'], 'th': c['wordTh']}],
            "ประโยคเจรจา นำเสนองาน และวิเคราะห์ปัญหาเชิงเทคนิค"
        )

    # 5. C1 - 80 sentences (Advanced Business, Diplomacy, Technical, Inversion)
    print("Adding 80 C1 sentences...")
    c1_sentences = [
        ("Had it not been for the backup cluster, the entire system would have experienced catastrophic downtime.",
         "หากไม่ใช่เพราะมีคลัสเตอร์สำรอง ระบบทั้งหมดคงต้องเผชิญกับช่วงระบบล่มอย่างรุนแรง",
         "workplace", "การทำงาน & ธุรกิจ",
         "Inversion: Had it not been for + Noun, Subject would have + V.3",
         [{"word": "catastrophic", "th": "ร้ายแรงมหันต์"}, {"word": "downtime", "th": "ระยะเวลาที่ระบบหยุดทำงาน"}],
         "ใช้รูปประโยค Inversion แสดงสมมติฐานเงื่อนไขในอดีตอย่างเป็นทางการระดับสูง"),

        ("Under no circumstances should sensitive database credentials be committed directly to version control.",
         "ไม่ว่ากรณีใดก็ตาม ข้อมูลรับรองฐานข้อมูลที่เป็นความลับจะต้องไม่ถูกคอมมิตขึ้นระบบจัดการเวอร์ชันโดยตรง",
         "tech", "สายเทค & ไอที",
         "Negative Inversion: Under no circumstances + should + Subject + V.inf",
         [{"word": "credentials", "th": "ข้อมูลประจำตัว/รหัสผ่าน"}, {"word": "version control", "th": "ระบบจัดการเวอร์ชันโค้ด"}],
         "การเน้นย้ำข้อห้ามอย่างเด็ดขาดและเป็นทางการด้วย Under no circumstances"),

        ("The executive committee reached a unanimous consensus regarding the cloud migration roadmap.",
         "คณะกรรมการบริหารได้ข้อสรุปที่เป็นเอกฉันท์เกี่ยวกับแผนกลยุทธ์การย้ายระบบขึ้นคลาวด์",
         "workplace", "การทำงาน & ธุรกิจ",
         "Collocation: reach a unanimous consensus on/regarding...",
         [{"word": "unanimous", "th": "เป็นเอกฉันท์"}, {"word": "consensus", "th": "ความเห็นพ้องต้องกัน"}],
         "สำนวนธุรกิจทางการที่ใช้บ่อยมากในการประชุมระดับผู้บริหาร"),

        ("Not only does this microservice reduce latency, but it also optimizes server resource utilization.",
         "ไมโครเซอร์วิสนี้ไม่เพียงแต่ลดความหน่วงเวลาเท่านั้น แต่ยังช่วยปรับปรุงการใช้ทรัพยากรเซิร์ฟเวอร์ให้คุ้มค่าที่สุดอีกด้วย",
         "tech", "สายเทค & ไอที",
         "Parallel structure: Not only does A do X, but it also does Y",
         [{"word": "utilization", "th": "การนำไปใช้ประโยชน์"}, {"word": "latency", "th": "ความหน่วงเวลา"}],
         "โครงสร้างเปรียบเทียบข้อดีคู่ขนานแบบเป็นทางการ"),

        ("Seldom have we witnessed such an exponential surge in concurrent user traffic.",
         "แทบไม่เคยมีครั้งไหนเลยที่เราได้เห็นการเพิ่มขึ้นอย่างก้าวกระโดดของปริมาณผู้ใช้งานพร้อมกันมากขนาดนี้",
         "tech", "สายเทค & ไอที",
         "Negative Inversion: Seldom + have + Subject + V.3",
         [{"word": "exponential", "th": "ทวีคูณ/ก้าวกระโดด"}, {"word": "concurrent", "th": "ที่เกิดขึ้นพร้อมกัน"}],
         "ใช้ขึ้นต้นประโยคเพื่อเน้นย้ำความพิเศษของเหตุการณ์"),

        ("We must strike a delicate balance between rapid feature deployment and architectural stability.",
         "เราจำเป็นต้องสร้างสมดุลอย่างประณีตระหว่างการปล่อยฟีเจอร์ที่รวดเร็วกับความเสถียรของสถาปัตยกรรมระบบ",
         "workplace", "การทำงาน & ธุรกิจ",
         "Idiomatic collocation: strike a delicate balance between A and B",
         [{"word": "delicate", "th": "ประณีต/ละเอียดอ่อน"}, {"word": "deployment", "th": "การนำระบบขึ้นใช้งาน"}],
         "สำนวนยอดนิยมในการสื่อสารระดับผู้จัดการและผู้นำทางเทคนิค"),

        ("The legacy monolithic infrastructure is susceptible to intermittent performance degradation under heavy load.",
         "โครงสร้างพื้นฐานระบบเดิมแบบโมโนลิธิกนั้นเสี่ยงต่อการเกิดประสิทธิภาพลดลงเป็นพักๆ ภายใต้การโหลดข้อมูลหนัก",
         "tech", "สายเทค & ไอที",
         "Pattern: be susceptible to + Noun (เสี่ยงต่อ/อ่อนไหวต่อ)",
         [{"word": "susceptible", "th": "อ่อนไหว/มีแนวโน้มได้รับผลกระทบ"}, {"word": "intermittent", "th": "เป็นพักๆ/ไม่สม่ำเสมอ"}],
         "ศัพท์เทคนิคและธุรกิจระดับสูงเพื่ออธิบายพฤติกรรมของระบบ"),

        ("Should any discrepancies arise during the audit, please bring them to my attention immediately.",
         "หากเกิดข้อขัดแย้งหรือไม่สอดคล้องกันใดๆ ขึ้นระหว่างการตรวจสอบ กรุณาแจ้งให้ฉันทราบทันที",
         "workplace", "การทำงาน & ธุรกิจ",
         "Conditional Inversion: Should + Subject + V.inf (แทน If any discrepancies arise)",
         [{"word": "discrepancies", "th": "ข้อแตกต่าง/ความไม่ลงรอยกัน"}, {"word": "audit", "th": "การตรวจประเมิน"}],
         "รูป Inversion สุภาพสูงสุดในหนังสือหรืออีเมลทางการ"),

        ("The stakeholder feedback was overwhelmingly positive, albeit with a few reservations about the timeline.",
         "ข้อเสนอแนะจากผู้มีส่วนได้ส่วนเสียเป็นไปในเชิงบวกอย่างท่วมท้น แม้ว่าจะมีข้อกังวลเล็กน้อยเกี่ยวกับกรอบเวลาก็ตาม",
         "workplace", "การทำงาน & ธุรกิจ",
         "Conjunction: albeit + prepositional phrase/clause (แม้ว่า/ถึงแม้)",
         [{"word": "overwhelmingly", "th": "อย่างท่วมท้น/ล้นหลาม"}, {"word": "reservations", "th": "ข้อกังขา/ความกังวลใจ"}],
         "คำว่า albeit ใช้เพื่อบอกเงื่อนไขยกเว้นอย่างสละสลวยในภาษาทางการ"),

        ("By virtue of our proactive monitoring, potential bottlenecks were mitigated before affecting end users.",
         "ด้วยอานิสงส์ของการมอนิเตอร์เชิงรุก คอขวดที่อาจเกิดขึ้นจึงได้รับการบรรเทาก่อนที่จะส่งผลกระทบต่อผู้ใช้งานจริง",
         "tech", "สายเทค & ไอที",
         "Prepositional phrase: By virtue of + Noun (โดยอาศัย/เนื่องด้วย)",
         [{"word": "mitigated", "th": "บรรเทาลง/ลดความรุนแรง"}, {"word": "bottlenecks", "th": "จุดคอขวด"}],
         "วลีเชื่อมโยงเหตุผลระดับ C1 แสดงถึงผลลัพธ์จากความเชี่ยวชาญ"),

        ("It is imperative that all microservices adhere strictly to the established security protocols.",
         "มีความจำเป็นอย่างยิ่งที่ไมโครเซอร์วิสทั้งหมดจะต้องปฏิบัติตามเกณฑ์วิธีความปลอดภัยที่กำหนดไว้อย่างเคร่งครัด",
         "tech", "สายเทค & ไอที",
         "Subjunctive mood: It is imperative that + Subject + (should) V.inf",
         [{"word": "imperative", "th": "จำเป็นยิ่ง/เลี่ยงไม่ได้"}, {"word": "adhere to", "th": "ยึดถือ/ปฏิบัติตาม"}],
         "Subjunctive Mood แสดงคำสั่งหรือข้อกำหนดที่มีความสำคัญสูงสุด"),

        ("Notwithstanding the initial supply chain disruptions, the quarterly revenue exceeded analysts' projections.",
         "แม้จะมีปัญหาการหยุดชะงักของห่วงโซ่อุปทานในช่วงแรก แต่รายได้รายไตรมาสก็ยังคงสูงกว่าที่นักวิเคราะห์คาดการณ์ไว้",
         "workplace", "การทำงาน & ธุรกิจ",
         "Preposition: Notwithstanding + Noun (แม้ว่าจะมี/ทั้งๆ ที่มี)",
         [{"word": "notwithstanding", "th": "แม้ว่า/ทั้งๆ ที่"}, {"word": "projections", "th": "ตัวเลขคาดการณ์"}],
         "คำเชื่อมระดับสูงใช้บ่อยในรายงานผลประกอบการและเศรษฐกิจ"),

        ("Only when we automated our regression testing did our release velocity improve substantially.",
         "เฉพาะเมื่อเราทำแบบทดสอบรีเกรสชันให้เป็นอัตโนมัติเท่านั้น ความเร็วในการส่งมอบงานของเราจึงเพิ่มขึ้นอย่างมีนัยสำคัญ",
         "tech", "สายเทค & ไอที",
         "Inversion: Only when + clause + did + Subject + V.inf",
         [{"word": "velocity", "th": "ความเร็วในการส่งมอบ"}, {"word": "substantially", "th": "อย่างมีนัยสำคัญ"}],
         "เน้นย้ำถึงจุดเปลี่ยนสำคัญในการทำงาน"),

        ("The sudden drop in user retention prompted a comprehensive overhaul of our onboarding process.",
         "ยอดการคงอยู่ของผู้ใช้ที่ลดลงอย่างกะทันหัน ส่งผลให้เกิดการยกเครื่องกระบวนการต้อนรับผู้ใช้ใหม่อย่างครอบคลุม",
         "workplace", "การทำงาน & ธุรกิจ",
         "Collocation: prompt a comprehensive overhaul (กระตุ้นให้เกิดการยกเครื่องใหม่ทั้งหมด)",
         [{"word": "prompted", "th": "กระตุ้น/จุดชนวนให้ทำ"}, {"word": "overhaul", "th": "การยกเครื่องปรับปรุงใหญ่"}],
         "คำศัพท์สำหรับบรรยายการตัดสินใจเชิงกลยุทธ์ของผลิตภัณฑ์"),

        ("In retrospect, adhering to domain-driven design principles spared us countless refactoring headaches.",
         "เมื่อมองย้อนกลับไป การยึดมั่นในหลักการ Domain-Driven Design ช่วยให้เราไม่ต้องปวดหัวกับการรื้อโค้ดนับครั้งไม่ถ้วน",
         "tech", "สายเทค & ไอที",
         "Introductory phrase: In retrospect, + Subject + V... (เมื่อมองย้อนหลัง)",
         [{"word": "in retrospect", "th": "เมื่อมองย้อนกลับไป"}, {"word": "refactoring", "th": "การปรับปรุงโครงสร้างโค้ด"}],
         "สำนวนพูดเล่าบทเรียนจากการทำงานจริงในอดีต"),

        ("The vendor was reluctant to renegotiate contract terms without additional concessions on our end.",
         "ผู้จัดจำหน่ายรายนั้นลังเลที่จะเจรจาต่อรองเงื่อนไขสัญญาใหม่ หากฝ่ายเราไม่มีข้อเสนอประนีประนอมเพิ่มเติมให้",
         "workplace", "การทำงาน & ธุรกิจ",
         "Pattern: be reluctant to + V.inf / concessions on someone's end",
         [{"word": "reluctant", "th": "ลังเล/ไม่เต็มใจ"}, {"word": "concessions", "th": "การยอมผ่อนปรน/การยอมให้"}],
         "ภาษาการเจรจาต่อรองธุรกิจระดับมืออาชีพ"),

        ("Scarcely had the production deployment completed when the alerting system triggered a severity-one incident.",
         "ทันทีที่การนำขึ้นระบบจริงเสร็จสิ้น ระบบแจ้งเตือนก็ส่งสัญญาณแจ้งเหตุร้ายแรงระดับหนึ่งขึ้นทันที",
         "tech", "สายเทค & ไอที",
         "Negative Inversion: Scarcely had Subject V.3 when...",
         [{"word": "scarcely", "th": "แทบจะไม่ทัน... (ก็เกิด...)"}, {"word": "severity", "th": "ระดับความรุนแรง"}],
         "สำนวนเล่าเหตุการณ์ที่เกิดขึ้นไล่เลี่ยกันในบริบท On-call"),

        ("His diplomatic approach paved the way for a mutually beneficial resolution to the protracted dispute.",
         "แนวทางที่เปี่ยมด้วยการทูตของเขาได้ปูทางไปสู่ข้อยุติที่เป็นประโยชน์ร่วมกันสำหรับข้อพิพาทที่ยืดเยื้อ",
         "workplace", "การทำงาน & ธุรกิจ",
         "Idiomatic collocations: pave the way for / mutually beneficial / protracted dispute",
         [{"word": "diplomatic", "th": "ประนีประนอม/มีศิลปะการทูต"}, {"word": "protracted", "th": "ยืดเยื้อยาวนาน"}],
         "ภาษาเจรจาระดับสูงเพื่อสื่อถึงการคลี่คลายปัญหาอย่างสร้างสรรค์"),

        ("We need to ascertain whether the third-party API meets our rigorous data sovereignty compliance requirements.",
         "เราจำเป็นต้องสืบหาข้อเท็จจริงให้แน่ชัดว่า API ของบุคคลที่สามเป็นไปตามข้อกำหนดความสอดคล้องด้านอธิปไตยของข้อมูลที่เข้มงวดหรือไม่",
         "tech", "สายเทค & ไอที",
         "Formal verb: ascertain whether... (สืบหาความจริงว่า...)",
         [{"word": "ascertain", "th": "สืบหาความจริง/ตรวจสอบแน่ชัด"}, {"word": "rigorous", "th": "เข้มงวด/ถี่ถ้วน"}],
         "คำศัพท์ทางการด้านความปลอดภัยและการปฏิบัติตามกฎหมาย"),

        ("The newly implemented caching layer yielded dividends in terms of overall system throughput.",
         "เลเยอร์การทำแคชที่เพิ่งนำมาใช้ได้ผลิดอกออกผลอย่างงดงามในแง่ของปริมาณงานรวมที่ระบบรับได้",
         "tech", "สายเทค & ไอที",
         "Metaphorical idiom: yield dividends (ผลิดอกออกผล/ให้ผลตอบแทนคุ้มค่า)",
         [{"word": "throughput", "th": "ปริมาณงานที่ประมวลผลได้"}, {"word": "caching", "th": "การจัดเก็บข้อมูลชั่วคราว"}],
         "สำนวนเชิงเปรียบเทียบทางการเพื่อบรรยายความคุ้มค่าของการลงทุนทางวิศวกรรม")
    ]

    # Generate additional C1 sentences up to 80
    c1_templates = [
        ("Despite the overarching economic headwinds, our strategic investments enabled us to consolidate our market position.",
         "แม้จะมีกระแสลมต้านทางเศรษฐกิจในภาพรวม แต่การลงทุนเชิงกลยุทธ์ก็ช่วยให้เราสามารถเสริมความแข็งแกร่งให้กับตำแหน่งในตลาดได้",
         "workplace", "การทำงาน & ธุรกิจ", "Collocation: economic headwinds / consolidate market position",
         [{"word": "headwinds", "th": "อุปสรรค/ลมต้าน"}, {"word": "consolidate", "th": "รวมพลัง/ทำให้มั่นคง"}]),
        ("Were the team to encounter unforeseen hurdles, we have an established escalation path ready to deploy.",
         "หากทีมงานต้องเผชิญกับอุปสรรคที่ไม่คาดคิด เราก็มีเส้นทางการส่งต่อเรื่องฉุกเฉินที่พร้อมใช้งานไว้แล้ว",
         "workplace", "การทำงาน & ธุรกิจ", "Inversion with Were: Were Subject to V.inf...",
         [{"word": "unforeseen", "th": "ที่ไม่ได้คาดการณ์ไว้"}, {"word": "escalation", "th": "การส่งต่อระดับผู้มีอำนาจ"}]),
        ("The architecture decoupled front-end rendering from back-end state orchestration, thereby enhancing maintainability.",
         "สถาปัตยกรรมนี้แยกการเรนเดอร์หน้าบ้านออกจากการจัดการสถานะหลังบ้านอย่างอิสระ จึงส่งผลให้ระบบดูแลรักษาง่ายขึ้น",
         "tech", "สายเทค & ไอที", "Participle clause: thereby + V.ing (จึงส่งผลให้...)",
         [{"word": "decoupled", "th": "ตัดการผูกติดกัน/แยกส่วน"}, {"word": "orchestration", "th": "การประสานการทำงาน"}]),
        ("It is widely acknowledged that technical debt, if left unaddressed, will severely jeopardize product scalability.",
         "เป็นที่ยอมรับกันอย่างกว้างขวางว่าหนี้ทางเทคนิค หากปล่อยทิ้งไว้โดยไม่แก้ไข จะส่งผลกระทบอย่างร้ายแรงต่อการขยายตัวของผลิตภัณฑ์",
         "tech", "สายเทค & ไอที", "Passive reporting: It is widely acknowledged that...",
         [{"word": "jeopardize", "th": "ทำให้ตกอยู่ในอันตราย"}, {"word": "scalability", "th": "ความสามารถในการรองรับการขยายตัว"}]),
        ("The marketing department spearheaded an initiative aimed at revitalizing our customer engagement channels.",
         "ฝ่ายการตลาดได้เป็นหัวหอกในการขับเคลื่อนโครงการที่มุ่งเน้นการฟื้นฟูช่องทางการมีส่วนร่วมของลูกค้า",
         "workplace", "การทำงาน & ธุรกิจ", "Collocation: spearhead an initiative (เป็นผู้นำโครงการริเริ่ม)",
         [{"word": "spearheaded", "th": "เป็นผู้นำหน้า/เป็นหัวหอก"}, {"word": "revitalizing", "th": "ฟื้นคืนความมีชีวิตชีวา"}]),
        ("Little did the engineers anticipate that an unindexed foreign key would degrade throughput by fifty percent.",
         "วิศวกรแทบไม่ได้คาดคิดเลยว่า Foreign Key ที่ไม่มี Index จะทำให้ประสิทธิภาพการประมวลผลลดลงถึงห้าสิบเปอร์เซ็นต์",
         "tech", "สายเทค & ไอที", "Negative Inversion: Little did Subject + V.inf",
         [{"word": "unindexed", "th": "ที่ไม่ได้สร้างดัชนีไว้"}, {"word": "degrade", "th": "ลดทอนลง"}])
    ]

    # Combine fixed C1 list
    all_c1 = list(c1_sentences)
    for t in c1_templates:
        all_c1.append((t[0], t[1], t[2], t[3], t[4], t[5], "ประโยคทางการระดับ C1 สำหรับผู้เชี่ยวชาญ"))

    # If we need more up to 80, expand systematically with verified sentences
    extra_c1_words = [
        ("aggregate", "รวบรวมเป็นกลุ่มก้อน", "The analytics engine aggregates millions of real-time telemetry events per second.", "เครื่องมือวิเคราะห์ทำการรวบรวมข้อมูลเหตุการณ์ทางไกลแบบเรียลไทม์หลายล้านรายการต่อวินาที", "tech", "สายเทค & ไอที"),
        ("authenticate", "พิสูจน์ตัวตน", "Zero-trust architecture mandates that every microservice authenticate incoming requests rigorously.", "สถาปัตยกรรมแบบ Zero-trust บังคับให้ทุกไมโครเซอร์วิสต้องพิสูจน์ตัวตนคำขอที่เข้ามาอย่างเข้มงวด", "tech", "สายเทค & ไอที"),
        ("benchmark", "เกณฑ์มาตรฐานเปรียบเทียบ", "We must benchmark our response times against industry standards before signing the SLA.", "เราจำเป็นต้องเทียบเคียงเวลาตอบสนองกับมาตรฐานอุตสาหกรรมก่อนจะลงนามในข้อตกลง SLA", "tech", "สายเทค & ไอที"),
        ("contingency", "แผนรองรับเหตุฉุกเฉิน", "The risk management framework incorporates rigorous contingency plans for cloud provider outages.", "กรอบการบริหารความเสี่ยงได้รวมแผนรองรับเหตุฉุกเฉินที่รัดกุมสำหรับกรณีผู้ให้บริการคลาวด์หยุดทำงาน", "workplace", "การทำงาน & ธุรกิจ"),
        ("differentiate", "สร้างความแตกต่างโดดเด่น", "Our ability to deliver personalized user experiences differentiates our platform from competitors.", "ความสามารถของเราในการส่งมอบประสบการณ์เฉพาะบุคคลช่วยสร้างความแตกต่างให้กับแพลตฟอร์มของเราจากคู่แข่ง", "workplace", "การทำงาน & ธุรกิจ"),
        ("exemplify", "เป็นแบบอย่างที่ดีเลิศ", "Her pragmatic approach to resolving complex architectural trade-offs exemplifies true engineering leadership.", "แนวทางที่เน้นการปฏิบัติจริงของเธอในการคลี่คลายข้อแลกเปลี่ยนทางสถาปัตยกรรมที่ซับซ้อน เป็นแบบอย่างของผู้นำทางวิศวกรรมที่แท้จริง", "workplace", "การทำงาน & ธุรกิจ"),
        ("facilitate", "อำนวยความสะดวกให้ราบรื่น", "Continuous delivery pipelines facilitate frictionless collaboration between software developers and operations teams.", "ไปป์ไลน์การส่งมอบงานอย่างต่อเนื่องช่วยอำนวยความสะดวกในการทำงานร่วมกันอย่างไร้รอยต่อระหว่างนักพัฒนาและทีมปฏิบัติการ", "tech", "สายเทค & ไอที"),
        ("harmonize", "ประสานให้สอดคล้องกัน", "We need to harmonize our data schemas across distributed services to eliminate semantic inconsistencies.", "เราจำเป็นต้องประสานสคีมาข้อมูลในทุกบริการแบบกระจายศูนย์ให้สอดคล้องกันเพื่อกำจัดความขัดแย้งเชิงความหมาย", "tech", "สายเทค & ไอที"),
        ("leverage", "ต่อยอดใช้ประโยชน์สูงสุด", "By leveraging asynchronous event streams, we decoupled heavy computational workloads from user requests.", "ด้วยการใช้ประโยชน์จาก Event Stream แบบอะซิงโครนัส เราจึงแยกภาระงานประมวลผลหนักออกจากคำขอของผู้ใช้ได้", "tech", "สายเทค & ไอที"),
        ("modular", "แยกส่วนได้อิสระ", "A modular software architecture allows independent cross-functional squads to release updates autonomously.", "สถาปัตยกรรมซอฟต์แวร์แบบแยกส่วนช่วยให้ทีมข้ามสายงานที่ทำงานอิสระสามารถปล่อยการอัปเดตได้ด้วยตนเอง", "tech", "สายเทค & ไอที"),
        ("nuance", "ความแตกต่างเล็กน้อยที่มีนัยสำคัญ", "Understanding the cultural nuances of distributed international teams fosters mutual trust and empathy.", "การทำความเข้าใจความละเอียดอ่อนทางวัฒนธรรมของทีมที่กระจายอยู่ทั่วโลกช่วยส่งเสริมความไว้วางใจและความเข้าอกเข้าใจกัน", "workplace", "การทำงาน & ธุรกิจ"),
        ("obsolete", "ล้าสมัยและเลิกใช้แล้ว", "Migrating away from legacy libraries prevents security vulnerabilities from lingering in obsolete codebases.", "การย้ายออกจากไลบรารีรุ่นเก่าช่วยป้องกันช่องโหว่ความปลอดภัยไม่ให้หลงเหลืออยู่ในฐานโค้ดที่ล้าสมัย", "tech", "สายเทค & ไอที"),
        ("paradigm", "กระบวนทัศน์/แบบจำลองความคิด", "Adopting event-driven architecture represented a fundamental paradigm shift for our engineering division.", "การนำสถาปัตยกรรมแบบขับเคลื่อนด้วยอีเวนต์มาใช้ ถือเป็นการเปลี่ยนกระบวนทัศน์ครั้งสำคัญสำหรับแผนกวิศวกรรมของเรา", "tech", "สายเทค & ไอที"),
        ("redundancy", "ระบบสำรองเพื่อความปลอดภัย", "Building geographic redundancy into our storage layer guarantees zero data loss in the event of an outage.", "การสร้างระบบสำรองข้ามภูมิภาคไว้ในชั้นการจัดเก็บข้อมูล ช่วยรับประกันว่าจะไม่มีข้อมูลสูญหายหากเกิดเหตุระบบล่ม", "tech", "สายเทค & ไอที"),
        ("streamline", "ปรับกระบวนการให้คล่องตัว", "Automating our code review linting and testing streamlined our pull request approval cycle significantly.", "การนำระบบตรวจสอบโค้ดและการทดสอบอัตโนมัติมาใช้ ช่วยปรับกระบวนการอนุมัติ Pull Request ให้คล่องตัวขึ้นอย่างมาก", "tech", "สายเทค & ไอที"),
        ("transparent", "โปร่งใสตรวจสอบได้", "Maintaining transparent incident post-mortems cultivates a healthy blameless culture across engineering.", "การจัดทำรายงานสรุปเหตุการณ์หลังระบบขัดข้องอย่างโปร่งใส ช่วยปลูกฝังวัฒนธรรมการไม่ชี้นิ้วโทษกันในสายงานวิศวกรรม", "workplace", "การทำงาน & ธุรกิจ"),
        ("validate", "ตรวจสอบยืนยันความถูกต้อง", "Strict schema validation at the API gateway layer thwarts malicious payload injections effortlessly.", "การตรวจสอบสคีมาอย่างเข้มงวดที่ชั้น API Gateway ช่วยสกัดกั้นการฉีดโค้ดประสงค์ร้ายได้อย่างง่ายดาย", "tech", "สายเทค & ไอที"),
        ("warrant", "มีความสมเหตุสมผลพอที่จะทำ", "The performance regression was deemed severe enough to warrant an immediate production rollback.", "ประสิทธิภาพที่ถดถอยลงนั้นถูกมองว่ารุนแรงพอที่จะสร้างความชอบธรรมให้ทำการย้อนคืนระบบในทันที", "tech", "สายเทค & ไอที")
    ]

    for item in extra_c1_words:
        all_c1.append((
            item[2], item[3], item[4], item[5],
            f"คำสำคัญ: {item[0]} ({item[1]})",
            [{"word": item[0], "th": item[1]}],
            "ประโยคทางการระดับ C1 สำหรับงานระดับวิศวกรรมและธุรกิจ"
        ))

    # Add more curated C1 to hit 80
    c1_idioms = [
        ("We must not lose sight of the overarching customer journey while optimizing individual microservices.",
         "เราจะต้องไม่มองข้ามเส้นทางประสบการณ์ของผู้ใช้ในภาพรวม ในขณะที่กำลังปรับปรุงไมโครเซอร์วิสแต่ละตัว",
         "workplace", "การทำงาน & ธุรกิจ", "Idiom: lose sight of something (ละเลย/มองข้ามสิ่งสำคัญ)",
         [{"word": "overarching", "th": "ครอบคลุมทั้งหมด"}, {"word": "journey", "th": "เส้นทางการเดินทาง/ประสบการณ์"}]),
        ("The leadership team unanimously agreed to double down on developer experience initiatives this fiscal year.",
         "ทีมผู้นำเห็นพ้องต้องกันเป็นเอกฉันท์ที่จะทุ่มเทเป็นสองเท่าให้กับโครงการพัฒนาประสบการณ์ของนักพัฒนาในปีงบประมาณนี้",
         "workplace", "การทำงาน & ธุรกิจ", "Idiom: double down on something (ทุ่มเทเป็นสองเท่า)",
         [{"word": "unanimously", "th": "อย่างเป็นเอกฉันท์"}, {"word": "fiscal year", "th": "ปีงบประมาณ"}]),
        ("He managed to navigate the turbulent organizational restructuring with remarkable composure and tact.",
         "เขาสามารถนำพาทีมผ่านพ้นการปรับโครงสร้างองค์กรที่ปั่นป่วนได้อย่างสงบนิ่งและมีชั้นเชิงที่น่าทึ่ง",
         "workplace", "การทำงาน & ธุรกิจ", "Collocation: navigate turbulent restructuring with composure",
         [{"word": "turbulent", "th": "ปั่นป่วนวุ่นวาย"}, {"word": "composure", "th": "ความสงบเยือกเย็น"}]),
        ("Before embarking on a complete rewrite, we should explore incremental modernization alternatives.",
         "ก่อนที่จะเริ่มลงมือเขียนระบบใหม่ทั้งหมด เราควรสำรวจทางเลือกในการปรับปรุงระบบให้ทันสมัยแบบค่อยเป็นค่อยไปก่อน",
         "tech", "สายเทค & ไอที", "Pattern: embark on + Noun / incremental modernization",
         [{"word": "embark on", "th": "เริ่มลงมือทำสิ่งสำคัญ"}, {"word": "incremental", "th": "เพิ่มขึ้นทีละขั้น"}]),
        ("Her insightful analysis shed light on subtle behavioral discrepancies between mobile and web cohorts.",
         "บทวิเคราะห์อันเฉียบแหลมของเธอช่วยฉายแสงให้เห็นความแตกต่างทางพฤติกรรมที่ละเอียดอ่อนระหว่างกลุ่มผู้ใช้มือถือและเว็บ",
         "workplace", "การทำงาน & ธุรกิจ", "Idiom: shed light on something (ทำให้กระจ่าง/ฉายแสงให้เห็น)",
         [{"word": "insightful", "th": "เฉียบแหลมลึกซึ้ง"}, {"word": "cohorts", "th": "กลุ่มประชากรที่ศึกษา"}]),
        ("We should tread carefully so as not to alienate our most loyal enterprise customers.",
         "เราควรดำเนินการด้วยความระมัดระวัง เพื่อไม่ให้ลูกค้าองค์กรที่ภักดีที่สุดของเรารู้สึกถูกทอดทิ้งหรือเหินห่าง",
         "workplace", "การทำงาน & ธุรกิจ", "Idiom: tread carefully / alienate customers",
         [{"word": "tread", "th": "ก้าวเดินอย่างระมัดระวัง"}, {"word": "alienate", "th": "ทำให้เหินห่าง/ขับไส"}]),
        ("The sudden spike in memory consumption precipitated an emergency failover across clusters.",
         "ปริมาณการใช้หน่วยความจำที่พุ่งสูงขึ้นอย่างกะทันหัน เป็นชนวนเหตุให้เกิดการสลับระบบฉุกเฉินข้ามคลัสเตอร์",
         "tech", "สายเทค & ไอที", "Verb: precipitate (เร่งให้เกิด/เป็นชนวนเหตุ)",
         [{"word": "precipitated", "th": "เร่งให้เกิด/เป็นชนวน"}, {"word": "failover", "th": "การสลับการทำงานไปยังระบบสำรอง"}]),
        ("Our product strategy hinges upon our ability to maintain double-digit year-over-year user growth.",
         "กลยุทธ์ผลิตภัณฑ์ของเราขึ้นอยู่กับความสามารถในการรักษาอัตราการเติบโตของผู้ใช้สองหลักแบบปีต่อปี",
         "workplace", "การทำงาน & ธุรกิจ", "Phrasal verb: hinge upon (ขึ้นอยู่กับ/ผูกพันกับ)",
         [{"word": "hinges upon", "th": "ขึ้นอยู่กับเป็นหลัก"}, {"word": "year-over-year", "th": "เทียบแบบปีต่อปี"}]),
        ("The architectural committee reached consensus that monolithic repositories hinder independent release cadences.",
         "คณะกรรมการสถาปัตยกรรมมีความเห็นตรงกันว่าคลังโค้ดแบบโมโนลิธิกขัดขวางจังหวะการปล่อยงานที่เป็นอิสระของแต่ละทีม",
         "tech", "สายเทค & ไอที", "Collocation: reach consensus that...",
         [{"word": "hinder", "th": "ขัดขวาง/เป็นอุปสรรค"}, {"word": "cadences", "th": "จังหวะก้าวสม่ำเสมอ"}]),
        ("We need to articulate our value proposition more compellingly to prospective enterprise clients.",
         "เราจำเป็นต้องสื่อสารข้อเสนอคุณค่าของเราให้น่าสนใจและดึงดูดใจมากยิ่งขึ้นแก่กลุ่มลูกค้าองค์กรเป้าหมาย",
         "workplace", "การทำงาน & ธุรกิจ", "Collocation: articulate a value proposition",
         [{"word": "articulate", "th": "สื่อสารอย่างชัดแจ้ง"}, {"word": "proposition", "th": "ข้อเสนอคุณค่า"}]),
        ("Failure to adhere to data privacy standards could incur punitive fines from regulatory agencies.",
         "ความล้มเหลวในการปฏิบัติตามมาตรฐานความเป็นส่วนตัวของข้อมูล อาจนำไปสู่ค่าปรับเชิงลงโทษจากหน่วยงานกำกับดูแล",
         "workplace", "การทำงาน & ธุรกิจ", "Collocation: incur punitive fines",
         [{"word": "punitive", "th": "เชิงลงโทษ"}, {"word": "regulatory", "th": "เกี่ยวกับการกำกับดูแล"}]),
        ("His proactive communication during the crisis served to assuage the fears of anxious stakeholders.",
         "การสื่อสารเชิงรุกของเขาในระหว่างเกิดวิกฤต ช่วยคลายความกังวลใจของผู้มีส่วนได้ส่วนเสียที่กำลังตื่นตระหนกได้อย่างมาก",
         "workplace", "การทำงาน & ธุรกิจ", "Verb: assuage fears (ปลอบประโลม/คลายความกลัว)",
         [{"word": "assuage", "th": "คลี่คลาย/บรรเทาความกลัว"}, {"word": "stakeholders", "th": "ผู้มีส่วนได้ส่วนเสีย"}]),
        ("The newly instituted linting rules enforce consistent code semantics across all software repositories.",
         "กฎการตรวจสอบโค้ดที่เพิ่งเริ่มใช้ ช่วยบังคับใช้ความหมายของโครงสร้างโค้ดให้มีความสม่ำเสมอกันในทุกคลังเก็บโค้ด",
         "tech", "สายเทค & ไอที", "Collocation: enforce consistent code semantics",
         [{"word": "semantics", "th": "ความหมายเชิงโครงสร้าง"}, {"word": "instituted", "th": "จัดตั้ง/นำมาเริ่มใช้"}]),
        ("She exhibited exceptional fortitude when orchestrating the high-stakes database migration overnight.",
         "เธอได้แสดงให้เห็นถึงความอดทนเข้มแข็งเป็นพิเศษขณะบริหารจัดการการย้ายฐานข้อมูลที่มีความเสี่ยงสูงข้ามคืน",
         "tech", "สายเทค & ไอที", "Collocation: exceptional fortitude / high-stakes migration",
         [{"word": "fortitude", "th": "ความอดทนเข้มแข็ง"}, {"word": "high-stakes", "th": "ที่มีเดิมพันความเสี่ยงสูง"}]),
        ("The retrospective provided a candid forum for addressing friction between product managers and engineers.",
         "การประชุมทบทวนย้อนหลังได้เปิดพื้นที่ที่จริงใจสำหรับการจัดการกับแรงเสียดทานระหว่างผู้จัดการผลิตภัณฑ์และวิศวกร",
         "workplace", "การทำงาน & ธุรกิจ", "Collocation: candid forum for addressing friction",
         [{"word": "candid", "th": "ตรงไปตรงมา/จริงใจ"}, {"word": "friction", "th": "แรงเสียดทาน/ความขัดแย้ง"}]),
        ("We must substantiate our infrastructure upgrade requests with tangible latency benchmarks.",
         "เราจำเป็นต้องพิสูจน์คำขออัปเกรดโครงสร้างพื้นฐานด้วยเกณฑ์ชี้วัดความหน่วงเวลาที่เป็นรูปธรรม",
         "tech", "สายเทค & ไอที", "Pattern: substantiate requests with metrics",
         [{"word": "substantiate", "th": "พิสูจน์ด้วยพยานหลักฐาน"}, {"word": "tangible", "th": "จับต้องได้/เป็นรูปธรรม"}]),
        ("The microservice architecture enabled horizontal scaling, albeit at the cost of operational complexity.",
         "สถาปัตยกรรมไมโครเซอร์วิสช่วยให้สามารถขยายระบบในแนวนอนได้ แม้ว่าจะต้องแลกมาด้วยความซับซ้อนในการปฏิบัติการก็ตาม",
         "tech", "สายเทค & ไอที", "Conjunction: albeit at the cost of...",
         [{"word": "horizontal", "th": "ในแนวนอน"}, {"word": "complexity", "th": "ความซับซ้อน"}]),
        ("His diplomatic mediation averted a prolonged standoff between the two engineering departments.",
         "การไกล่เกลี่ยอย่างมีชั้นเชิงทางการทูตของเขา ช่วยหลีกเลี่ยงภาวะคุมเชิงที่ยืดเยื้อระหว่างสองแผนกวิศวกรรมได้สำเร็จ",
         "workplace", "การทำงาน & ธุรกิจ", "Collocation: avert a prolonged standoff",
         [{"word": "mediation", "th": "การไกล่เกลี่ยคนกลาง"}, {"word": "averted", "th": "เบี่ยงเบน/หลีกเลี่ยงเหตุร้าย"}]),
        ("The deployment pipeline incorporates canary releases to insulate the broader user base from untested regressions.",
         "ไปป์ไลน์การส่งมอบระบบได้รวมการปล่อยแบบ Canary เพื่อปกป้องฐานผู้ใช้ส่วนใหญ่จากการถดถอยของระบบที่ยังไม่ได้ทดสอบ",
         "tech", "สายเทค & ไอที", "Verb: insulate A from B (ปกป้อง/ป้องกัน)",
         [{"word": "insulate", "th": "ปกป้อง/เป็นฉนวนกัน"}, {"word": "canary", "th": "การปล่อยระบบให้ผู้ใช้กลุ่มเล็กก่อน"}]),
        ("Our team spearheaded an internal symposium to disseminate cutting-edge distributed computing practices.",
         "ทีมของเราได้เป็นหัวหอกจัดงานสัมมนาภายใน เพื่อเผยแพร่องค์ความรู้การประมวลผลแบบกระจายศูนย์ที่ล้ำสมัย",
         "workplace", "การทำงาน & ธุรกิจ", "Collocation: spearhead a symposium / disseminate knowledge",
         [{"word": "symposium", "th": "งานสัมมนาทางวิชาการ"}, {"word": "disseminate", "th": "เผยแพร่/กระจายความรู้"}]),
        ("The company's swift pivot to cloud-native technologies safeguarded its market relevance during the downturn.",
         "การปรับเปลี่ยนทิศทางอย่างรวดเร็วของบริษัทไปสู่เทคโนโลยีคลาวด์เนทีฟ ช่วยปกป้องความสำคัญในตลาดไว้ได้ในช่วงเศรษฐกิจถดถอย",
         "workplace", "การทำงาน & ธุรกิจ", "Collocation: swift pivot / safeguard relevance",
         [{"word": "pivot", "th": "การเปลี่ยนทิศทางกลยุทธ์"}, {"word": "safeguarded", "th": "ปกป้องคุ้มครอง"}]),
        ("An over-reliance on synchronous RPC calls creates brittle coupling across distributed microservices.",
         "การพึ่งพาการเรียก RPC แบบซิงโครนัสมากเกินไป ก่อให้เกิดการผูกติดกันที่เปราะบางระหว่างไมโครเซอร์วิสแบบกระจายศูนย์",
         "tech", "สายเทค & ไอที", "Collocation: brittle coupling across services",
         [{"word": "brittle", "th": "เปราะบาง/แตกหักง่าย"}, {"word": "coupling", "th": "การผูกติดเชื่อมโยงกัน"}]),
        ("The revised user agreement delineates data ownership boundaries with unprecedented clarity.",
         "ข้อตกลงผู้ใช้ฉบับปรับปรุงได้กำหนดขอบเขตความเป็นเจ้าของข้อมูลอย่างชัดเจนเป็นประวัติการณ์",
         "workplace", "การทำงาน & ธุรกิจ", "Verb: delineate boundaries (กำหนดขอบเขตอย่างชัดเจน)",
         [{"word": "delineates", "th": "วาดขอบเขต/แจกแจงละเอียด"}, {"word": "unprecedented", "th": "ไม่เคยมีมาก่อน"}]),
        ("Engineers must temper their enthusiasm for bleeding-edge frameworks with pragmatic business realities.",
         "วิศวกรจะต้องลดทอนความกระตือรือร้นที่มีต่อเฟรมเวิร์กใหม่ล่าสุดลงบ้าง ด้วยการคำนึงถึงความเป็นจริงเชิงปฏิบัติทางธุรกิจ",
         "workplace", "การทำงาน & ธุรกิจ", "Pattern: temper X with Y (ปรับสมดุล/ลดความสุดโต่ง)",
         [{"word": "temper", "th": "ปรับลดให้พอเหมาะ"}, {"word": "bleeding-edge", "th": "ล้ำสมัยสุดโต่งจนอาจมีความเสี่ยง"}]),
        ("The post-incident analysis underscored the critical necessity of comprehensive observability across all tiers.",
         "การวิเคราะห์หลังเกิดเหตุได้เน้นย้ำถึงความจำเป็นอย่างยิ่งยวดในการมีระบบการสังเกตการณ์ที่ครอบคลุมทุกระดับชั้น",
         "tech", "สายเทค & ไอที", "Collocation: critical necessity / comprehensive observability",
         [{"word": "observability", "th": "ความสามารถในการเฝ้าสังเกตระบบ"}, {"word": "tiers", "th": "ระดับชั้นของระบบ"}]),
        ("Our telemetry stack aggregates gigabytes of structured metrics to preempt silent service degradation.",
         "สแตกการวัดผลทางไกลของเรารวบรวมเมตริกที่มีโครงสร้างหลายกิกะไบต์ เพื่อป้องกันไม่ให้เกิดความถดถอยของบริการอย่างเงียบๆ",
         "tech", "สายเทค & ไอที", "Verb: preempt (ชิงลงมือก่อน/ตัดไฟแต่ต้นลม)",
         [{"word": "preempt", "th": "ชิงตัดไฟแต่ต้นลม"}, {"word": "degradation", "th": "ความเสื่อมถอย"}]),
        ("The newly onboarded staff engineer brought a wealth of domain expertise in high-throughput message brokers.",
         "สตาฟฟ์เอนจิเนียร์ที่เพิ่งเข้ามาร่วมทีม ได้นำเอาความเชี่ยวชาญเฉพาะทางอันล้นเหลือในระบบตัวกลางส่งข้อความปริมาณงานสูงมาด้วย",
         "tech", "สายเทค & ไอที", "Collocation: a wealth of domain expertise",
         [{"word": "domain expertise", "th": "ความเชี่ยวชาญเฉพาะด้าน"}, {"word": "throughput", "th": "ปริมาณงานต่อหน่วยเวลา"}]),
        ("We must not underestimate the cognitive overhead that convoluted deployment pipelines inflict upon developers.",
         "เราจะต้องไม่ประเมินภาระทางความคิดที่ไปป์ไลน์การปล่อยงานอันซับซ้อนสร้างความทรมานใจให้กับนักพัฒนาต่ำเกินไป",
         "tech", "สายเทค & ไอที", "Collocation: cognitive overhead / convoluted pipelines",
         [{"word": "cognitive overhead", "th": "ภาระทางสมอง/ความเหนื่อยล้าทางความคิด"}, {"word": "convoluted", "th": "วกวนซับซ้อน"}]),
        ("The committee gave unanimous assent to the proposal after rigorous deliberation on potential downside risks.",
         "คณะกรรมการได้ให้ความเห็นชอบอย่างเป็นเอกฉันท์แก่ข้อเสนอ หลังจากมีการพิจารณาไตร่ตรองอย่างถี่ถ้วนเกี่ยวกับความเสี่ยงด้านลบ",
         "workplace", "การทำงาน & ธุรกิจ", "Collocation: give unanimous assent / rigorous deliberation",
         [{"word": "assent", "th": "การให้ความเห็นชอบ"}, {"word": "deliberation", "th": "การปรึกษาหารืออย่างรอบคอบ"}]),
        ("Adopting asynchronous event choreography fostered greater resilience across independent distributed components.",
         "การนำการจัดท่าทางอีเวนต์แบบอะซิงโครนัสมาใช้ ช่วยส่งเสริมความยืดหยุ่นที่แข็งแกร่งยิ่งขึ้นในทุกองค์ประกอบแบบกระจายศูนย์",
         "tech", "สายเทค & ไอที", "Pattern: foster resilience across components",
         [{"word": "choreography", "th": "การจัดท่วงท่าประสานงาน"}, {"word": "resilience", "th": "ความยืดหยุ่นฟื้นตัวไว"}]),
        ("The executive leadership team lauded the cross-functional squad for resolving the crisis ahead of deadline.",
         "ทีมผู้นำระดับบริหารได้กล่าวสรรเสริญทีมข้ามสายงานสำหรับการแก้ไขวิกฤตการณ์ได้ล่วงหน้าก่อนถึงกำหนดเส้นตาย",
         "workplace", "การทำงาน & ธุรกิจ", "Verb: laud someone for doing something (กล่าวสรรเสริญยกย่อง)",
         [{"word": "lauded", "th": "กล่าวสรรเสริญยกย่อง"}, {"word": "cross-functional", "th": "ที่ข้ามสายงานร่วมกัน"}]),
        ("The team instituted automated semantic versioning to preclude inadvertent breaking changes in downstream libraries.",
         "ทีมได้เริ่มใช้การระบุเวอร์ชันเชิงความหมายแบบอัตโนมัติ เพื่อป้องกันการเปลี่ยนแปลงที่กระทบการทำงานเดิมโดยไม่ตั้งใจ",
         "tech", "สายเทค & ไอที", "Verb: preclude (ขัดขวาง/ป้องกันไม่ให้เกิด)",
         [{"word": "preclude", "th": "ป้องกันไม่ให้เกิดขึ้นได้"}, {"word": "inadvertent", "th": "โดยไม่ได้ตั้งใจ/พลั้งเผลอ"}]),
        ("A resilient engineering culture encourages transparent post-mortems that privilege learning over finger-pointing.",
         "วัฒนธรรมวิศวกรรมที่มีความยืดหยุ่นจะส่งเสริมการทบทวนปัญหาอย่างโปร่งใส โดยให้ความสำคัญกับการเรียนรู้มากกว่าการชี้นิ้วโทษกัน",
         "workplace", "การทำงาน & ธุรกิจ", "Collocation: privilege X over Y (ให้สิทธิพิเศษ/ให้ความสำคัญกับ X มากกว่า Y)",
         [{"word": "post-mortems", "th": "การวิเคราะห์หาสาเหตุหลังเหตุการณ์"}, {"word": "privilege", "th": "ให้ความสำคัญเหนือกว่า"}]),
        ("The new container orchestrator autonomously balances compute workloads across heterogeneous server clusters.",
         "ระบบจัดการคอนเทนเนอร์ตัวใหม่ทำการปรับสมดุลภาระงานประมวลผลโดยอัตโนมัติ ข้ามคลัสเตอร์เซิร์ฟเวอร์ที่มีสถาปัตยกรรมต่างชนิดกัน",
         "tech", "สายเทค & ไอที", "Collocation: heterogeneous server clusters",
         [{"word": "heterogeneous", "th": "ต่างชนิดกัน/มีคุณสมบัติหลากหลาย"}, {"word": "orchestrator", "th": "ระบบควบคุมประสานงาน"}]),
        ("She articulated the product roadmap with such eloquence that even skeptical stakeholders were completely won over.",
         "เธอได้สื่อสารแผนงานผลิตภัณฑ์ด้วยความสละสลวยชัดแจ้ง จนกระทั่งผู้มีส่วนได้ส่วนเสียที่เคยคลางแคลงใจถูกโน้มน้าวใจได้อย่างสมบูรณ์",
         "workplace", "การทำงาน & ธุรกิจ", "Result clause: with such eloquence that...",
         [{"word": "eloquence", "th": "ความคมคายสละสลวยในการพูด"}, {"word": "won over", "th": "ถูกโน้มน้าวใจให้เห็นพ้อง"}]),
        ("Adhering to strict code hygiene standards mitigates the risk of accumulating intractable technical debt.",
         "การยึดมั่นในมาตรฐานสุขอนามัยของโค้ดที่เข้มงวด ช่วยลดความเสี่ยงจากการสะสมหนี้ทางเทคนิคที่ยากเกินจะแก้ไข",
         "tech", "สายเทค & ไอที", "Pattern: mitigate the risk of + V.ing",
         [{"word": "hygiene", "th": "สุขอนามัย/ความสะอาดเรียบร้อย"}, {"word": "intractable", "th": "ยากจะแก้ไข/ดื้อด้าน"}])
    ]
    for c in c1_idioms:
        all_c1.append((c[0], c[1], c[2], c[3], c[4], c[5], "ประโยคสำนวนการทำงานระดับสูง"))

    # Pick 80 C1
    for item in all_c1[:80]:
        add_card('C1', 'Advanced', item[2], item[3], item[0], item[1], item[4], item[5], item[6])

    # 6. C2 - 50 sentences (Proficient, Executive Nuance, Diplomatic Rhetoric)
    print("Adding 50 C2 sentences...")
    c2_sentences = [
        ("The CEO's keynote articulated a compelling vision that resonated deeply across disparate global divisions.",
         "สุนทรพจน์หลักของซีอีโอได้ถ่ายทอดวิสัยทัศน์ที่ตรึงใจ ซึ่งสามารถส่งต่อความรู้สึกร่วมลึกซึ้งไปยังทุกแผนกทั่วโลกที่หลากหลาย",
         "workplace", "การทำงาน & ธุรกิจ",
         "Collocation: articulate a compelling vision / resonate deeply with...",
         [{"word": "articulated", "th": "สื่อสารอย่างชัดเจนสละสลวย"}, {"word": "disparate", "th": "แตกต่างหลากหลาย"}],
         "ภาษาผู้บริหารระดับสูงสุดเพื่อสื่อถึงการสร้างแรงบันดาลใจ"),

        ("Far from being a mere stopgap solution, this architectural refactoring underpins our five-year strategic roadmap.",
         "ห่างไกลจากการเป็นเพียงวิธีแก้ปัญหาชั่วคราว การปรับโครงสร้างสถาปัตยกรรมนี้ถือเป็นรากฐานค้ำจุนแผนกลยุทธ์ห้าปีของเรา",
         "workplace", "การทำงาน & ธุรกิจ",
         "Idiomatic pattern: Far from being X, Y underpins Z",
         [{"word": "stopgap", "th": "ชั่วคราว/แก้ขัด"}, {"word": "underpins", "th": "วางรากฐานค้ำจุน"}],
         "การเปิดประโยคเพื่อลบล้างความเข้าใจผิดอย่างมีวาทศิลป์"),

        ("His consummate negotiation prowess turned what seemed an insurmountable impasse into an amicable partnership.",
         "ความเชี่ยวชาญการเจรจาต่อรองอันไร้ที่ติของเขา ได้เปลี่ยนสิ่งที่ดูเหมือนทางตันที่มิอาจก้าวข้าม ให้กลายเป็นมิตรภาพทางธุรกิจอันราบรื่น",
         "workplace", "การทำงาน & ธุรกิจ",
         "Sophisticated vocabulary: consummate prowess / insurmountable impasse",
         [{"word": "consummate", "th": "สมบูรณ์แบบ/เชี่ยวชาญยิ่ง"}, {"word": "impasse", "th": "ภาวะชะงักงัน/ทางตัน"}],
         "ถ้อยคำยกย่องทักษะการเจรจาขั้นสูงสุดในระดับผู้นำ"),

        ("The board commended the engineering squad for their unflinching resolve during the multi-region failover crisis.",
         "คณะกรรมการบริหารได้กล่าวชื่นชมทีมวิศวกรสำหรับความมุ่งมั่นที่ไม่หวั่นไหวระหว่างวิกฤตการสลับระบบข้ามภูมิภาค",
         "tech", "สายเทค & ไอที",
         "Collocation: unflinching resolve in the face of crisis",
         [{"word": "unflinching", "th": "ไม่หวั่นไหว/ไม่ย่อท้อ"}, {"word": "commended", "th": "ยกย่องสรรเสริญ"}],
         "ภาษาทางการระดับสูงในหนังสือขอบคุณหรือรายงานต่อคณะกรรมการ"),

        ("Such an audacious transformation inevitably engenders institutional friction before bearing tangible fruit.",
         "การปฏิรูปที่กล้าหาญชาญชัยเช่นนี้ ย่อมหลีกเลี่ยงไม่ได้ที่จะก่อให้เกิดแรงเสียดทานในองค์กร ก่อนที่จะผลิดอกออกผลอย่างเป็นรูปธรรม",
         "workplace", "การทำงาน & ธุรกิจ",
         "Rhetorical pairing: audacious transformation / engender friction / bear tangible fruit",
         [{"word": "audacious", "th": "กล้าหาญ/อาจหาญ"}, {"word": "engenders", "th": "ก่อให้เกิด/เป็นบ่อเกิด"}],
         "ศิลปะการอธิบายการเปลี่ยนแปลงองค์กรอย่างผู้มีวิสัยทัศน์"),

        ("The subtle interplay between algorithmic personalization and user privacy warrants scrupulous scrutiny.",
         "ความสัมพันธ์อันละเอียดอ่อนระหว่างการปรับแต่งเนื้อหาด้วยอัลกอริทึมกับความเป็นส่วนตัวของผู้ใช้ จำเป็นต้องได้รับการตรวจสอบอย่างละเอียดถี่ถ้วน",
         "tech", "สายเทค & ไอที",
         "Nuanced phrasing: subtle interplay / warrant scrupulous scrutiny",
         [{"word": "interplay", "th": "ปฏิสัมพันธ์ซึ่งกันและกัน"}, {"word": "scrupulous", "th": "ถี่ถ้วนรอบคอบยิ่ง"}],
         "ภาษาอภิปรายเชิงวิชาการและนโยบายเทคโนโลยีระดับสูง"),

        ("Rather than precipitate an acrimonious confrontation, the director chose to defuse tensions through backchannel diplomacy.",
         "แทนที่จะเร่งให้เกิดการเผชิญหน้าที่ขมขื่น ผู้อำนวยการเลือกที่จะคลี่คลายความตึงเครียดผ่านการเจรจาทางการทูตนอกรอบ",
         "workplace", "การทำงาน & ธุรกิจ",
         "Contrast structure: Rather than precipitate X, Subject chose Y",
         [{"word": "acrimonious", "th": "เผ็ดร้อน/บาดหมาง"}, {"word": "backchannel", "th": "ช่องทางลับ/การทูตนอกรอบ"}],
         "กลยุทธ์การบริหารความขัดแย้งระดับสูงด้วยสำนวนประณีต"),

        ("Her critique was both incisive and constructive, pinpointing systemic flaws without discouraging the core team.",
         "คำวิจารณ์ของเธอทั้งเฉียบคมและสร้างสรรค์ โดยชี้ตรงไปยังจุดบกพร่องเชิงระบบโดยไม่บั่นทอนกำลังใจของทีมงานหลัก",
         "workplace", "การทำงาน & ธุรกิจ",
         "Paired adjectives: incisive and constructive",
         [{"word": "incisive", "th": "เฉียบขาด/แทงใจดำอย่างตรงประเด็น"}, {"word": "pinpointing", "th": "ชี้จุดอย่างแม่นยำ"}],
         "ถ้อยคำบรรยายการให้ Feedback ของผู้นำระดับสูง"),

        ("In the fast-evolving AI landscape, complacency is the precursor to irrelevance.",
         "ในภูมิทัศน์ของปัญญาประดิษฐ์ที่พัฒนาอย่างรวดเร็ว ความชะล่าใจคือจุดเริ่มต้นที่จะนำไปสู่ความไร้ตัวตน",
         "tech", "สายเทค & ไอที",
         "Aphoristic style: X is the precursor to Y (คำคมเชิงปรัชญาธุรกิจ)",
         [{"word": "complacency", "th": "ความนิ่งนอนใจ/ชะล่าใจ"}, {"word": "precursor", "th": "ลางบอกเหตุ/สารตั้งต้น"}],
         "การสร้างประโยคทรงพลังแบบผู้นำทางความคิด (Thought Leadership)"),

        ("The architect demonstrated an uncanny ability to distill baroque distributed systems into intuitive, elegant abstractions.",
         "สถาปนิกท่านนี้ได้แสดงให้เห็นถึงความสามารถอันน่าทึ่งในการกลั่นกรองระบบกระจายตัวที่ซับซ้อนรุงรัง ให้กลายเป็นแบบจำลองที่งดงามและเข้าใจง่าย",
         "tech", "สายเทค & ไอที",
         "Literary adjectives: uncanny ability / baroque systems / elegant abstractions",
         [{"word": "uncanny", "th": "น่าทึ่งเหนือธรรมดา"}, {"word": "baroque", "th": "วิจิตรพิสดาร/ซับซ้อนเกินจำเป็น"}],
         "การใช้คำศัพท์วรรณศิลป์ในการอธิบายศาสตร์ทางคอมพิวเตอร์อย่างลึกซึ้ง")
    ]

    # Additional 40 C2 sentences
    extra_c2 = [
        ("A quintessential hallmark of mature engineering organizations is psychological safety coupled with high accountability.",
         "เครื่องหมายการค้าอันเป็นแบบฉบับขององค์กรวิศวกรรมที่เติบโตเต็มที่ คือความปลอดภัยทางจิตวิทยาที่ผสานกับความรับผิดชอบในระดับสูง",
         "workplace", "การทำงาน & ธุรกิจ", "Hallmark of X is Y coupled with Z",
         [{"word": "quintessential", "th": "ที่เป็นแบบฉบับอย่างแท้จริง"}, {"word": "hallmark", "th": "ตราสัญลักษณ์/จุดเด่น"}]),
        ("The newly drafted security framework seamlessly reconciles strict regulatory compliance with agile delivery cadences.",
         "กรอบความปลอดภัยที่ร่างขึ้นใหม่สามารถประสานการปฏิบัติตามกฎเกณฑ์อันเข้มงวด เข้ากับจังหวะการส่งมอบงานแบบอไจล์ได้อย่างไร้รอยต่อ",
         "tech", "สายเทค & ไอที", "Reconcile X with Y seamlessly",
         [{"word": "reconciles", "th": "ประนีประนอม/ประสานให้เข้ากัน"}, {"word": "cadences", "th": "จังหวะก้าวสม่ำเสมอ"}]),
        ("Notwithstanding its initial skepticism, the consortium ultimately championed our decentralized governance blueprint.",
         "แม้จะมีข้อกังขาในตอนแรก แต่ในท้ายที่สุดกลุ่มความร่วมมือทางธุรกิจก็กลายเป็นผู้สนับสนุนหลักให้พิมพ์เขียวการกำกับดูแลแบบกระจายอำนาจของเรา",
         "workplace", "การทำงาน & ธุรกิจ", "Consortium championed blueprint",
         [{"word": "skepticism", "th": "ความกังขา/ความคลางแคลงใจ"}, {"word": "consortium", "th": "กลุ่มสมาคมธุรกิจ"}]),
        ("To foster genuine innovation, one must cultivate an environment where constructive dissent is welcomed rather than stifled.",
         "การจะส่งเสริมให้เกิดนวัตกรรมที่แท้จริงได้นั้น จำเป็นต้องบ่มเพาะสภาพแวดล้อมที่ความคิดเห็นต่างอย่างสร้างสรรค์ได้รับการต้อนรับ แทนที่จะถูกปิดกั้น",
         "workplace", "การทำงาน & ธุรกิจ", "Constructive dissent welcomed rather than stifled",
         [{"word": "dissent", "th": "ความเห็นต่าง"}, {"word": "stifled", "th": "ถูกกดไว้/ถูกระงับ"}]),
        ("His tenure as chief architect was distinguished by relentless craftsmanship and an uncompromising adherence to software excellence.",
         "วาระการดำรงตำแหน่งหัวหน้าสถาปนิกของเขา โดดเด่นด้วยการสร้างสรรค์ผลงานอย่างไม่ย่อท้อ และการยึดมั่นในความเป็นเลิศของซอฟต์แวร์โดยไร้ข้อประนีประนอม",
         "tech", "สายเทค & ไอที", "Tenure distinguished by relentless craftsmanship",
         [{"word": "tenure", "th": "วาระการดำรงตำแหน่ง"}, {"word": "uncompromising", "th": "ไม่ประนีประนอม"}]),
        ("The retrospective unveiled that subtle communication silos were fundamentally responsible for the integration debacle.",
         "การประชุมทบทวนย้อนหลังเผยให้เห็นว่า การทำงานแบบแยกส่วนขาดการสื่อสารระหว่างกันอย่างเงียบๆ เป็นต้นเหตุหลักของความล้มเหลวในการเชื่อมต่อระบบ",
         "tech", "สายเทค & ไอที", "Silos responsible for debacle",
         [{"word": "silos", "th": "การทำงานแบบไซโลไม่แชร์ข้อมูล"}, {"word": "debacle", "th": "ความพังทลาย/ความล้มเหลวไม่เป็นท่า"}]),
        ("Navigating ambiguous market requirements demands equal parts analytical rigor and intuitive empathy.",
         "การนำทางผ่านความต้องการของตลาดที่คลุมเครือ จำเป็นต้องใช้ทั้งความเคร่งครัดในการวิเคราะห์และความเข้าอกเข้าใจโดยสัญชาตญาณในสัดส่วนที่เท่ากัน",
         "workplace", "การทำงาน & ธุรกิจ", "Equal parts analytical rigor and intuitive empathy",
         [{"word": "ambiguous", "th": "กำกวม/คลุมเครือ"}, {"word": "rigor", "th": "ความเข้มงวดกวดขัน"}]),
        ("Far from an insurmountable hurdle, this regulatory mandate serves as a catalyst for overdue architectural modernization.",
         "ห่างไกลจากการเป็นอุปสรรคที่ข้ามไม่พ้น ข้อบังคับทางกฎหมายนี้ทำหน้าที่เป็นตัวเร่งปฏิกิริยาสำหรับการปรับปรุงสถาปัตยกรรมที่คั่งค้างมานาน",
         "workplace", "การทำงาน & ธุรกิจ", "Catalyst for overdue modernization",
         [{"word": "catalyst", "th": "ตัวเร่งปฏิกิริยา"}, {"word": "overdue", "th": "เกินกำหนด/คั่งค้าง"}]),
        ("True technical mastery lies not in orchestrating ever-greater complexity, but in crafting disarmingly simple solutions.",
         "ความเชี่ยวชาญทางเทคนิคที่แท้จริงไม่ได้อยู่ที่การสรรสร้างความซับซ้อนที่ยิ่งใหญ่ขึ้นเรื่อยๆ แต่อยู่ที่การรังสรรค์วิธีแก้ปัญหาที่เรียบง่ายอย่างน่าประหลาดใจ",
         "tech", "สายเทค & ไอที", "Lies not in X, but in crafting Y",
         [{"word": "disarmingly", "th": "อย่างน่าประทับใจจนคลายความระแวง"}, {"word": "orchestrating", "th": "วางแผนและจัดการ"}]),
        ("The quarterly review underscored the imperative of synchronizing product telemetry with downstream business KPIs.",
         "การทบทวนประจำไตรมาสได้เน้นย้ำถึงความจำเป็นอย่างยิ่งยวดในการเชื่อมโยงข้อมูลการวัดผลของผลิตภัณฑ์ให้สอดคล้องกับตัวชี้วัดธุรกิจปลายน้ำ",
         "workplace", "การทำงาน & ธุรกิจ", "Underscore the imperative of synchronizing",
         [{"word": "underscored", "th": "ขีดเส้นใต้/เน้นย้ำ"}, {"word": "telemetry", "th": "ข้อมูลระบบทางไกล"}])
    ]

    # Expand C2 to 50 items
    all_c2 = list(c2_sentences)
    for c in extra_c2:
        all_c2.append((c[0], c[1], c[2], c[3], c[4], c[5], "ประโยคชั้นครูระดับ C2 ถ่ายทอดความเชี่ยวชาญแบบ Native"))

    c2_vocabulary_gems = [
        ("ephemeral", "คงอยู่เพียงชั่วคราว", "Cloud-native ephemeral storage instances necessitate robust data persistence mechanisms.", "อินสแตนซ์พื้นที่จัดเก็บข้อมูลบนคลาวด์ที่คงอยู่เพียงชั่วคราว ทำให้จำเป็นต้องมีกลไกการคงอยู่ของข้อมูลที่แข็งแกร่ง", "tech", "สายเทค & ไอที"),
        ("ubiquitous", "มีอยู่ทั่วไปทุกหนแห่ง", "With smartphone adoption becoming ubiquitous, responsive design transitioned from an advantage to an absolute prerequisite.", "เมื่อการใช้สมาร์ทโฟนกลายเป็นเรื่องที่มีอยู่ทุกหนทุกแห่ง การออกแบบที่ตอบสนองทุกหน้าจอจึงเปลี่ยนจากการเป็นข้อได้เปรียบไปเป็นข้อกำหนดเบื้องต้นที่ขาดไม่ได้", "tech", "สายเทค & ไอที"),
        ("paradoxical", "ย้อนแย้งในตัวเอง", "It is somewhat paradoxical that simplifying the end-user interface often demands exponentially more convoluted back-end engineering.", "เป็นเรื่องที่ค่อนข้างย้อนแย้งที่ว่า การทำให้หน้าต่างผู้ใช้งานเรียบง่ายขึ้น มักจำเป็นต้องใช้วิศวกรรมหลังบ้านที่ซับซ้อนขึ้นอย่างทวีคูณ", "tech", "สายเทค & ไอที"),
        ("proclivity", "ความโน้มเอียงตามธรรมชาติ", "Engineers frequently exhibit an innate proclivity toward premature architectural optimization.", "วิศวกรมักแสดงความโน้มเอียงตามธรรมชาติในการรีบปรับแต่งสถาปัตยกรรมให้ดีเลิศก่อนเวลาอันควร", "tech", "สายเทค & ไอที"),
        ("cogent", "หนักแน่นน่าเชื่อถือ", "She mounted a remarkably cogent defense of monolithic architectures during the technical debate.", "เธอได้นำเสนอข้อโต้แย้งที่หนักแน่นและน่าเชื่อถืออย่างยิ่งเพื่อปกป้องสถาปัตยกรรมแบบโมโนลิธิกระหว่างการโต้วาทีทางเทคนิค", "workplace", "การทำงาน & ธุรกิจ"),
        ("esoteric", "ลึกซึ้งเฉพาะกลุ่ม", "Deciphering esoteric kernel crash dumps requires intimate familiarity with low-level memory addressing.", "การถอดรหัสรายงานข้อผิดพลาดของเคอร์เนลที่ลึกซึ้งเฉพาะกลุ่ม ต้องอาศัยความคุ้นเคยอย่างใกล้ชิดกับการจัดการแอดเดรสหน่วยความจำระดับล่าง", "tech", "สายเทค & ไอที"),
        ("salient", "โดดเด่นสะดุดตา", "The executive summary succinctly encapsulated the most salient takeaways from the hundred-page market analysis.", "บทสรุปสำหรับผู้บริหารได้รวบรวมข้อคิดสำคัญที่โดดเด่นที่สุดจากการวิเคราะห์ตลาดหนาร้อยหน้าไว้อย่างกระชับ", "workplace", "การทำงาน & ธุรกิจ"),
        ("reticent", "สงวนถ้อยคำ/ไม่พูดมาก", "Developers are often reticent to report subtle near-miss outages unless psychological safety is explicitly nurtured.", "นักพัฒนามักจะสงวนท่าทีไม่ค่อยรายงานเหตุขัดข้องเฉียดฉิว เว้นแต่จะมีการบ่มเพาะความปลอดภัยทางจิตวิทยาอย่างชัดเจน", "workplace", "การทำงาน & ธุรกิจ"),
        ("tenuous", "บอบบาง/เปราะบาง", "The correlation between lines of code written and actual engineering productivity is tenuous at best.", "ความเชื่อมโยงระหว่างจำนวนบรรทัดของโค้ดที่เขียนกับผลผลิตทางวิศวกรรมที่แท้จริงนั้น ถือว่าเปราะบางและแทบไม่มีน้ำหนัก", "tech", "สายเทค & ไอที"),
        ("vicissitudes", "ความผันแปรไม่แน่นอน", "Resilient distributed systems are architected specifically to withstand the inevitable vicissitudes of public cloud infrastructure.", "ระบบกระจายศูนย์ที่มีความยืดหยุ่นสูงได้รับการออกแบบมาโดยเฉพาะเพื่อรับมือกับความผันแปรที่ไม่แน่นอนของโครงสร้างพื้นฐานคลาวด์สาธารณะ", "tech", "สายเทค & ไอที"),
        ("equivocate", "พูดจาเลี่ยงประเด็นกำกวม", "When questioned about the delayed release date, leadership refused to equivocate and offered a candid explanation.", "เมื่อถูกซักถามเกี่ยวกับวันเปิดตัวที่ล่าช้า ทีมผู้นำปฏิเสธที่จะตอบแบบเลี่ยงบาลี และให้คำอธิบายที่ตรงไปตรงมาอย่างจริงใจ", "workplace", "การทำงาน & ธุรกิจ"),
        ("perfunctory", "ทำแบบขอไปที", "Code reviews must never devolve into perfunctory rubber-stamping exercises devoid of critical inquiry.", "การตรวจโค้ดจะต้องไม่ตกต่ำลงกลายเป็นการประทับตราอนุมัติแบบขอไปที โดยปราศจากการตั้งคำถามเชิงวิเคราะห์", "tech", "สายเทค & ไอที"),
        ("propensity", "แนวโน้มหรืออุปนิสัย", "Teams operating under crushing deadlines manifest a heightened propensity toward incurring technical debt.", "ทีมที่ทำงานภายใต้เส้นตายที่กดดันอย่างหนัก จะแสดงแนวโน้มที่สูงขึ้นในการก่อหนี้ทางเทคนิค", "workplace", "การทำงาน & ธุรกิจ"),
        ("incongruous", "ไม่เข้ากัน/ขัดหูขัดตา", "Pairing cutting-edge microservices with antiquated, batch-oriented data processing pipelines felt starkly incongruous.", "การจับคู่ไมโครเซอร์วิสล้ำสมัยเข้ากับไปป์ไลน์การประมวลผลข้อมูลแบบแบตช์รุ่นเก่าแก่ ให้ความรู้สึกขัดหูขัดตาอย่างสิ้นเชิง", "tech", "สายเทค & ไอที"),
        ("tacit", "โดยปริยาย/รู้กันเงียบๆ", "There was tacit consensus among staff engineers that the proposed migration timeline was wildly unrealistic.", "มีข้อตกลงร่วมกันโดยปริยายในหมู่สตาฟฟ์เอนจิเนียร์ว่า กรอบเวลาการย้ายระบบที่เสนอนั้นเพ้อฝันและห่างไกลความจริง", "workplace", "การทำงาน & ธุรกิจ"),
        ("disingenuous", "ไม่จริงใจ/แฝงเจตนา", "To celebrate zero production incidents when observability coverage is virtually non-existent is disingenuous.", "การเฉลิมฉลองว่าระบบไม่มีเหตุขัดข้องเลย ทั้งๆ ที่ระบบการเฝ้าสังเกตการณ์แทบไม่มีอยู่นั้น ถือเป็นการหลอกตัวเองและไม่จริงใจ", "tech", "สายเทค & ไอที"),
        ("panacea", "ยาวิเศษรักษาทุกโรค", "Microservices are a powerful architectural style, but they are by no means a panacea for poor engineering discipline.", "ไมโครเซอร์วิสเป็นรูปแบบสถาปัตยกรรมที่ทรงพลัง แต่ไม่ใช่ยาวิเศษที่จะมารักษาความไร้วินัยทางวิศวกรรมได้", "tech", "สายเทค & ไอที"),
        ("quagmire", "ปลักโคลนดูด/สถานการณ์ยุ่งเหยิง", "Without rigorous governance, an ungoverned multi-cloud strategy swiftly devolves into an operational quagmire.", "หากขาดการกำกับดูแลที่เข้มงวด กลยุทธ์มัลติคลาวด์ที่ไร้การควบคุมจะกลายสภาพเป็นปลักโคลนดูดของการปฏิบัติการอย่างรวดเร็ว", "tech", "สายเทค & ไอที"),
        ("substantiate", "พิสูจน์ด้วยหลักฐานหนักแน่น", "You must substantiate your refactoring proposals with empirical performance metrics rather than aesthetic preferences.", "คุณจะต้องพิสูจน์ข้อเสนอการรื้อโค้ดของคุณด้วยตัวชี้วัดประสิทธิภาพเชิงประจักษ์ แทนที่จะใช้ความพึงพอใจส่วนตัว", "tech", "สายเทค & ไอที"),
        ("polarizing", "สร้างความแตกแยกทางความคิด", "Tabs versus spaces remains one of the most enduringly polarizing debates in programming lore.", "ประเด็นแท็บปะทะสเปซยังคงเป็นการถกเถียงที่แบ่งขั้วทางความคิดได้อย่างยาวนานที่สุดเรื่องหนึ่งในประวัติศาสตร์การเขียนโปรแกรม", "tech", "สายเทค & ไอที"),
        ("chagrin", "ความเจ็บใจ/ผิดหวัง", "Much to the team's chagrin, the database lock contention issue reproduced only in production environments.", "สร้างความเจ็บใจให้ทีมงานเป็นอย่างยิ่ง เมื่อปัญหาการแย่งล็อกฐานข้อมูลนั้นเกิดขึ้นเฉพาะในสภาพแวดล้อมระบบจริงเท่านั้น", "tech", "สายเทค & ไอที"),
        ("unfettered", "เป็นอิสระไร้พันธนาการ", "Granting developers unfettered access to cloud sandboxes accelerates rapid prototyping dramatically.", "การมอบสิทธิ์ให้นักพัฒนาเข้าถึงสิ่งแวดล้อมทดลองบนคลาวด์ได้อย่างอิสระไร้ข้อจำกัด ช่วยเร่งการสร้างต้นแบบได้อย่างน่าทึ่ง", "tech", "สายเทค & ไอที"),
        ("precipitous", "ฮวบฮาบ/รวดเร็วชันดิ่ง", "Failing to validate third-party dependency licenses led to a precipitous drop in our enterprise compliance score.", "การละเลยไม่ตรวจสอบสัญญาอนุญาตของแพ็กเกจภายนอก นำไปสู่การลดลงอย่างฮวบฮาบของคะแนนการปฏิบัติตามกฎเกณฑ์ขององค์กร", "tech", "สายเทค & ไอที"),
        ("inexorable", "ที่ไม่อาจหลีกเลี่ยงหรือหยุดยั้งได้", "The inexorable march toward containerization has redefined modern software packaging and deployment standards.", "การก้าวไปข้างหน้าอย่างมิอาจหยุดยั้งของระบบคอนเทนเนอร์ ได้ให้นิยามใหม่แก่มาตรฐานการบรรจุหีบห่อและการปล่อยซอฟต์แวร์สมัยใหม่", "tech", "สายเทค & ไอที"),
        ("recalcitrant", "ดื้อรั้นเอาแต่ใจ/ยากจะควบคุม", "Taming a recalcitrant legacy database cluster demands equal parts patience, deep telemetry, and domain insight.", "การสยบคลัสเตอร์ฐานข้อมูลเก่าแก่ที่ดื้อดึงและคาดเดายาก ต้องใช้ทั้งความอดทน การวัดผลเชิงลึก และความเข้าใจในเนื้องานอย่างเท่าเทียม", "tech", "สายเทค & ไอที"),
        ("veracity", "ความสัตย์จริง/ความแม่นยำถูกต้อง", "In mission-critical financial software, the veracity of transactional audit logs must be mathematically irrefutable.", "ในซอฟต์แวร์การเงินที่มีความสำคัญระดับวิกฤต ความถูกต้องแม่นยำของบันทึกการทำธุรกรรมจะต้องได้รับการพิสูจน์ทางคณิตศาสตร์อย่างไม่อาจโต้แย้งได้", "tech", "สายเทค & ไอที"),
        ("dichotomy", "การแบ่งแยกสองขั้วตรงข้าม", "The false dichotomy between development velocity and software quality is dismantled by modern automated testing.", "การมองแบบสองขั้วเทียมระหว่างความเร็วในการพัฒนาและคุณภาพซอฟต์แวร์ ถูกทำลายลงด้วยการทดสอบอัตโนมัติสมัยใหม่", "tech", "สายเทค & ไอที"),
        ("ubiquity", "การแพร่หลายครอบคลุมทุกแห่ง", "The sheer ubiquity of RESTful APIs paved the way for unprecedented interconnectivity across global enterprise SaaS platforms.", "การแพร่หลายอย่างกว้างขวางของ RESTful API ได้ปูทางไปสู่การเชื่อมต่อระหว่างกันอย่างที่ไม่เคยมีมาก่อนในแพลตฟอร์ม SaaS ระดับโลก", "tech", "สายเทค & ไอที"),
        ("antithetical", "ที่ตรงกันข้ามโดยสิ้นเชิง", "Hoarding knowledge within isolated silos is fundamentally antithetical to the principles of high-performing DevOps teams.", "การกักตุนองค์ความรู้ไว้ในกลุ่มเฉพาะ เป็นสิ่งที่ตรงกันข้ามโดยสิ้นเชิงกับหลักการของทีม DevOps ที่มีประสิทธิภาพสูง", "workplace", "การทำงาน & ธุรกิจ"),
        ("anachronistic", "ตกยุคไม่เข้ากับกาลสมัย", "Relying on manual spreadsheets for cloud infrastructure tracking is laughably anachronistic in today's GitOps era.", "การพึ่งพาตารางคำนวณแบบทำมือเพื่อติดตามโครงสร้างพื้นฐานคลาวด์ ถือเป็นเรื่องที่ตกยุคล้าสมัยอย่างน่าขันในยุคแห่ง GitOps", "tech", "สายเทค & ไอที")
    ]

    for item in c2_vocabulary_gems:
        all_c2.append((
            item[2], item[3], item[4], item[5],
            f"คำสำคัญ: {item[0]} ({item[1]})",
            [{"word": item[0], "th": item[1]}],
            "ประโยคชั้นครูระดับ C2 ถ่ายทอดความเชี่ยวชาญแบบ Native"
        ))

    # Pick exactly 50 C2
    for item in all_c2[:50]:
        add_card('C2', 'Proficient', item[2], item[3], item[0], item[1], item[4], item[5], item[6])

    print(f"\nTotal curated cards: {len(final_cards)}")
    by_final_lvl = {}
    for c in final_cards:
        by_final_lvl[c['level']] = by_final_lvl.get(c['level'], 0) + 1
    for k, v in sorted(by_final_lvl.items()):
        print(f"  Level {k}: {v} cards")

    # Output to data/sentenceFlashcardsData.js
    header = """/**
 * EngMastery: Zero to Pro - Sentence Flashcards Database
 * Comprehensive CEFR A1-C2 Curated Conversational Sentences
 * 
 * Features:
 * - 530+ Curated Sentences across CEFR A1, A2, B1, B2, C1, C2
 * - Reversible Flip Card Data (EN ➔ TH and TH ➔ EN)
 * - Complete with Native TTS audio, Speech recognition cues, grammar blueprints, and key vocabulary
 */

window.sentenceFlashcardsData = """

    json_str = json.dumps(final_cards, ensure_ascii=False, indent=2)

    with open('data/sentenceFlashcardsData.js', 'w', encoding='utf-8') as f:
        f.write(header + json_str + ";\n")

    print("\nSuccessfully generated data/sentenceFlashcardsData.js!")

if __name__ == '__main__':
    main()
