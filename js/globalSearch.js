/**
 * EngMastery: Global Spotlight Search (Ctrl+K / Cmd+K)
 * Universal, ultra-fast search across News, Vocabulary, Grammar, Standup, and Lessons.
 */

(function () {
  'use strict';

  class GlobalSearch {
    constructor() {
      this.isOpen = false;
      this.query = '';
      this.activeCategory = 'all'; // all, news, vocab, grammar, standup, lessons
      this.selectedIndex = 0;
      this.results = [];
      this.maxResults = 25;

      this.initKeybindings();
      this.initModal();
    }

    initKeybindings() {
      window.addEventListener('keydown', (e) => {
        // Ctrl+K or Cmd+K to toggle search
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
          e.preventDefault();
          this.toggle();
          return;
        }

        // When search is open:
        if (this.isOpen) {
          if (e.key === 'Escape') {
            e.preventDefault();
            this.close();
          } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            this.navigateResults(1);
          } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            this.navigateResults(-1);
          } else if (e.key === 'Enter') {
            e.preventDefault();
            this.selectActiveResult();
          }
        }
      });
    }

    initModal() {
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => this.injectDOM());
      } else {
        this.injectDOM();
      }
    }

    injectDOM() {
      if (document.getElementById('global-search-modal')) return;

      const modal = document.createElement('div');
      modal.id = 'global-search-modal';
      modal.className = 'fixed inset-0 z-50 hidden items-start justify-center pt-14 sm:pt-20 px-3 sm:px-4 bg-slate-950/70 backdrop-blur-md transition-opacity duration-200';
      modal.setAttribute('role', 'dialog');
      modal.setAttribute('aria-modal', 'true');
      modal.onclick = (e) => {
        if (e.target === modal) this.close();
      };

      modal.innerHTML = `
        <div class="w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh] animate-fadeIn">
          
          <!-- Search Header Input Bar -->
          <div class="p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800 flex items-center gap-3 bg-slate-50/50 dark:bg-slate-900/50">
            <svg class="w-5 h-5 text-cyan-600 dark:text-cyan-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
            <input type="text" id="global-search-input"
              placeholder="ค้นหาทุกอย่าง... (ข่าว DevOps, คำศัพท์, กริยา 3 ช่อง, Standup, บทเรียน)"
              class="w-full bg-transparent text-sm sm:text-base font-medium text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none"
              autocomplete="off" spellcheck="false" />
            <kbd class="hidden sm:inline-block px-2 py-0.5 text-[10px] font-mono font-bold bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-slate-400 rounded-lg shrink-0">ESC</kbd>
          </div>

          <!-- Category Filter Pills -->
          <div class="px-4 py-2.5 bg-slate-100/60 dark:bg-slate-800/40 border-b border-slate-200/80 dark:border-slate-800 flex items-center gap-1.5 overflow-x-auto no-scrollbar text-xs">
            <button onclick="window.globalSearch.setCategory('all')" data-search-cat="all" class="px-3 py-1 rounded-xl font-bold transition-all bg-cyan-600 text-white shadow-xs shrink-0">ทั้งหมด</button>
            <button onclick="window.globalSearch.setCategory('news')" data-search-cat="news" class="px-3 py-1 rounded-xl font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all shrink-0">📰 ข่าว DevOps & SRE</button>
            <button onclick="window.globalSearch.setCategory('vocab')" data-search-cat="vocab" class="px-3 py-1 rounded-xl font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all shrink-0">🎲 คำศัพท์ Vocab</button>
            <button onclick="window.globalSearch.setCategory('grammar')" data-search-cat="grammar" class="px-3 py-1 rounded-xl font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all shrink-0">📑 ไวยากรณ์ (Cheat Sheet)</button>
            <button onclick="window.globalSearch.setCategory('standup')" data-search-cat="standup" class="px-3 py-1 rounded-xl font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all shrink-0">⚡ Standup Lab</button>
            <button onclick="window.globalSearch.setCategory('lessons')" data-search-cat="lessons" class="px-3 py-1 rounded-xl font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all shrink-0">📖 ห้องเรียน CEFR</button>
          </div>

          <!-- Results Scroll Area -->
          <div id="global-search-results" class="flex-1 overflow-y-auto p-3 sm:p-4 space-y-1.5 divide-y divide-slate-100 dark:divide-slate-800/60">
            <!-- Rendered dynamically -->
          </div>

          <!-- Footer Tips -->
          <div class="px-4 py-2.5 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
            <div class="flex items-center gap-3">
              <span><kbd class="font-mono bg-slate-200 dark:bg-slate-800 px-1.5 py-0.5 rounded">↑</kbd> <kbd class="font-mono bg-slate-200 dark:bg-slate-800 px-1.5 py-0.5 rounded">↓</kbd> นำทาง</span>
              <span><kbd class="font-mono bg-slate-200 dark:bg-slate-800 px-1.5 py-0.5 rounded">Enter</kbd> เลือก</span>
              <span><kbd class="font-mono bg-slate-200 dark:bg-slate-800 px-1.5 py-0.5 rounded">Esc</kbd> ปิด</span>
            </div>
            <span id="global-search-count">32 ข่าว • 3000+ คำศัพท์</span>
          </div>
        </div>
      `;

      document.body.appendChild(modal);

      const input = document.getElementById('global-search-input');
      if (input) {
        input.addEventListener('input', (e) => {
          this.query = e.target.value.trim().toLowerCase();
          this.selectedIndex = 0;
          this.executeSearch();
        });
      }
    }

    open() {
      this.isOpen = true;
      const modal = document.getElementById('global-search-modal');
      if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        const input = document.getElementById('global-search-input');
        if (input) {
          input.value = '';
          this.query = '';
          this.selectedIndex = 0;
          this.executeSearch();
          setTimeout(() => input.focus(), 50);
        }
      }
    }

    close() {
      this.isOpen = false;
      const modal = document.getElementById('global-search-modal');
      if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
      }
    }

    toggle() {
      if (this.isOpen) this.close();
      else this.open();
    }

    setCategory(cat) {
      this.activeCategory = cat;
      document.querySelectorAll('[data-search-cat]').forEach((el) => {
        if (el.getAttribute('data-search-cat')) {
          const isMatch = el.getAttribute('data-search-cat') === cat;
          el.className = isMatch
            ? 'px-3 py-1 rounded-xl font-bold transition-all bg-cyan-600 text-white shadow-xs shrink-0'
            : 'px-3 py-1 rounded-xl font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all shrink-0';
        }
      });
      this.selectedIndex = 0;
      this.executeSearch();
    }

    executeSearch() {
      const q = this.query;
      let matched = [];

      // 1. Daily News Search
      if (this.activeCategory === 'all' || this.activeCategory === 'news') {
        const newsList = window.dailyNewsData || [];
        newsList.forEach((n) => {
          if (!q) {
            matched.push({
              type: 'news',
              badge: n.levelBadge || 'News',
              badgeColor: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-950 dark:text-cyan-300',
              icon: n.coverEmoji || '📰',
              title: n.title,
              subtitle: n.titleTh || n.summary,
              extra: `${n.readTime || '5 นาที'} • ${n.wordCount || 500} คำ`,
              action: () => {
                if (window.app && window.app.navigateTo) {
                  window.app.navigateTo('news', n.id);
                }
              }
            });
          } else {
            const matchTitle = (n.title || '').toLowerCase().includes(q);
            const matchTitleTh = (n.titleTh || '').toLowerCase().includes(q);
            const matchSummary = (n.summary || '').toLowerCase().includes(q);
            const matchTag = (n.tags || []).some((t) => t.toLowerCase().includes(q));

            if (matchTitle || matchTitleTh || matchSummary || matchTag) {
              matched.push({
                type: 'news',
                badge: n.levelBadge || 'DevOps',
                badgeColor: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-950 dark:text-cyan-300',
                icon: n.coverEmoji || '📰',
                title: n.title,
                subtitle: n.titleTh || n.summary,
                extra: `${n.readTime || '5 นาที'} • ${n.wordCount || 500} คำ`,
                action: () => {
                  if (window.app && window.app.navigateTo) {
                    window.app.navigateTo('news', n.id);
                  }
                }
              });
            }
          }
        });
      }

      // 2. Grammar Cheat Sheet & Articles Search
      if (this.activeCategory === 'all' || this.activeCategory === 'grammar') {
        const grammarItems = [
          {
            title: "การใช้ Do / Does / Did กฎเหล็ก & ตารางสรุป",
            titleTh: "คู่มือการใช้ Verb to Do ฉบับโปรแกรมเมอร์",
            badge: "Grammar • Do",
            id: "article-do-does-did"
          },
          {
            title: "การใช้ Have / Has / Had ใน Perfect Tenses และงานจริง",
            titleTh: "คู่มือการใช้ Verb to Have & กริยาช่วย",
            badge: "Grammar • Have",
            id: "article-have-has-had"
          },
          {
            title: "การใช้ Is / Am / Are / Was / Were (Verb to Be ครบสูตร)",
            titleTh: "โครงสร้างบอกสถานะและ Passive Voice",
            badge: "Grammar • Be",
            id: "article-is-am-are"
          },
          {
            title: "กริยา 3 ช่อง V1 V2 V3: หน้าที่ทางไวยากรณ์ & ตารางเปรียบเทียบ",
            titleTh: "ตารางเปรียบเทียบ V1 (Base) V2 (Past) V3 (Participle)",
            badge: "Grammar • V1-V3",
            id: "article-v1-v2-v3"
          }
        ];

        grammarItems.forEach((g) => {
          if (!q || g.title.toLowerCase().includes(q) || g.titleTh.toLowerCase().includes(q) || q.includes('do') || q.includes('have') || q.includes('is') || q.includes('v1')) {
            matched.push({
              type: 'grammar',
              badge: g.badge,
              badgeColor: 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300',
              icon: '📑',
              title: g.title,
              subtitle: g.titleTh,
              extra: 'ตารางไวยากรณ์',
              action: () => {
                if (window.app && window.app.navigateTo) {
                  window.app.navigateTo('cheat-sheet', g.id);
                }
              }
            });
          }
        });
      }

      // 3. Vocabulary Search (Oxford 3000 & Tech Vocab)
      if (this.activeCategory === 'all' || this.activeCategory === 'vocab') {
        const vocabList = window.vocabData || [];
        let vocabMatches = 0;
        for (let i = 0; i < vocabList.length; i++) {
          const v = vocabList[i];
          if (!q && vocabMatches >= 5) break; // If no query, limit initial suggestions
          if (q) {
            const matchWord = (v.word || '').toLowerCase().includes(q);
            const matchTh = (v.thai || v.meaning || '').toLowerCase().includes(q);
            if (matchWord || matchTh) {
              matched.push({
                type: 'vocab',
                badge: v.level || v.partOfSpeech || 'Vocab',
                badgeColor: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300',
                icon: '🎲',
                title: `${v.word} ${v.phonetic ? `[${v.phonetic}]` : ''}`,
                subtitle: v.thai || v.meaning || '',
                extra: v.example ? `ตัวอย่าง: ${v.example}` : (v.partOfSpeech || ''),
                action: () => {
                  if (window.app && window.app.navigateTo) {
                    window.app.navigateTo('vocabulary');
                    if (window.app.setVocabSearch) {
                      window.app.setVocabSearch(v.word);
                    }
                  }
                }
              });
              vocabMatches++;
              if (vocabMatches >= 15) break;
            }
          }
        }
      }

      // 4. Standup Lab & Speaking Tools
      if (this.activeCategory === 'all' || this.activeCategory === 'standup') {
        const standupItems = [
          { title: "⚡ เครื่องมือร่างบทเดลี่อัตโนมัติ (Standup Generator)", subtitle: "สร้างบทพูด Yesterday, Today, Blockers พร้อมคำอ่าน", badge: "Standup Tool" },
          { title: "🎙️ แบบฝึกหัดซ้อมพูด Daily Standup 5 สถานการณ์", subtitle: "สถานการณ์งานไหลลื่น, งานติดบล็อกเกอร์, รอรีวิว PR", badge: "Speaking Drill" },
          { title: "🧩 คลังประโยคสำเร็จรูปสำหรับโปรแกรมเมอร์ (Tech Phrases)", subtitle: "ประโยคแจ้ง incident, code review, merge conflict", badge: "Phrases" }
        ];

        standupItems.forEach((s) => {
          if (!q || s.title.toLowerCase().includes(q) || s.subtitle.toLowerCase().includes(q) || q.includes('standup') || q.includes('daily') || q.includes('พูด')) {
            matched.push({
              type: 'standup',
              badge: s.badge,
              badgeColor: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300',
              icon: '⚡',
              title: s.title,
              subtitle: s.subtitle,
              extra: 'Speaking Lab',
              action: () => {
                if (window.app && window.app.navigateTo) {
                  window.app.navigateTo('speaking-lab');
                }
              }
            });
          }
        });
      }

      this.results = matched.slice(0, this.maxResults);
      this.renderResults();
    }

    renderResults() {
      const container = document.getElementById('global-search-results');
      const countEl = document.getElementById('global-search-count');
      if (!container) return;

      if (countEl) {
        countEl.textContent = `พบ ${this.results.length} รายการ`;
      }

      if (this.results.length === 0) {
        container.innerHTML = `
          <div class="py-12 text-center space-y-3">
            <span class="text-4xl">🔍</span>
            <p class="text-sm font-bold text-slate-700 dark:text-slate-300">
              ไม่พบข้อมูลที่ตรงกับ "${this.query}"
            </p>
            <p class="text-xs text-slate-400">
              ลองพิมพ์คำค้นอื่น เช่น 'kubernetes', 'did', 'standup', 'deploy', 'database'
            </p>
          </div>
        `;
        return;
      }

      container.innerHTML = this.results
        .map((r, idx) => {
          const isSelected = idx === this.selectedIndex;
          const activeClass = isSelected
            ? 'bg-cyan-50 dark:bg-cyan-950/40 border-cyan-400 dark:border-cyan-600 shadow-sm'
            : 'border-transparent hover:bg-slate-50 dark:hover:bg-slate-800/60';

          return `
            <div onclick="window.globalSearch.selectResult(${idx})"
              class="w-full text-left p-3 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${activeClass}">
              <div class="flex items-center gap-3 min-w-0">
                <span class="text-xl shrink-0">${r.icon}</span>
                <div class="min-w-0">
                  <div class="flex items-center gap-2">
                    <span class="font-bold text-xs sm:text-sm text-slate-900 dark:text-white truncate">
                      ${this.highlightMatch(r.title, this.query)}
                    </span>
                    <span class="px-2 py-0.5 rounded-md text-[10px] font-bold shrink-0 ${r.badgeColor}">
                      ${r.badge}
                    </span>
                  </div>
                  <p class="text-xs text-slate-500 dark:text-slate-400 truncate mt-0.5">
                    ${this.highlightMatch(r.subtitle || '', this.query)}
                  </p>
                </div>
              </div>
              <div class="text-[11px] text-slate-400 shrink-0 text-right hidden sm:block">
                ${r.extra || ''}
              </div>
            </div>
          `;
        })
        .join('');
    }

    highlightMatch(text, query) {
      if (!query || !text) return text || '';
      const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(`(${escaped})`, 'gi');
      return text.replace(regex, '<mark class="bg-amber-200 dark:bg-amber-800/60 text-slate-900 dark:text-amber-100 rounded px-0.5">$1</mark>');
    }

    navigateResults(direction) {
      if (this.results.length === 0) return;
      this.selectedIndex = (this.selectedIndex + direction + this.results.length) % this.results.length;
      this.renderResults();

      // Scroll active item into view
      const activeEl = document.querySelector('#global-search-results > div:nth-child(' + (this.selectedIndex + 1) + ')');
      if (activeEl) {
        activeEl.scrollIntoView({ block: 'nearest' });
      }
    }

    selectResult(index) {
      const item = this.results[index];
      if (item && item.action) {
        this.close();
        item.action();
      }
    }

    selectActiveResult() {
      this.selectResult(this.selectedIndex);
    }
  }

  window.globalSearch = new GlobalSearch();
})();
