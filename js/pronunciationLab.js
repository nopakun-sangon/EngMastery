/**
 * EngMastery: Pronunciation Lab & Speech Scorer
 * Interactive voice pronunciation assessment using browser Web Speech Recognition.
 */

(function () {
  'use strict';

  class PronunciationLab {
    constructor() {
      this.isOpen = false;
      this.targetWord = '';
      this.phonetic = '';
      this.exampleSentence = '';
      this.isListening = false;
      this.lastResult = null;

      this.initModal();
    }

    initModal() {
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => this.injectDOM());
      } else {
        this.injectDOM();
      }
    }

    injectDOM() {
      if (document.getElementById('pronunciation-lab-modal')) return;

      const modal = document.createElement('div');
      modal.id = 'pronunciation-lab-modal';
      modal.className = 'fixed inset-0 z-50 hidden items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md transition-opacity duration-200';
      modal.setAttribute('role', 'dialog');
      modal.setAttribute('aria-modal', 'true');
      modal.onclick = (e) => {
        if (e.target === modal) this.close();
      };

      modal.innerHTML = `
        <div class="w-full max-w-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-7 shadow-2xl relative space-y-5 animate-fadeIn">
          
          <!-- Header -->
          <div class="flex items-start justify-between gap-3">
            <div class="flex items-center gap-3">
              <div class="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-white text-2xl shadow-md shrink-0">
                🎙️
              </div>
              <div>
                <h3 class="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                  ฝึกออกเสียงคำศัพท์ (Pronunciation Lab)
                </h3>
                <p class="text-xs text-slate-500 dark:text-slate-400">
                  ระบบวิเคราะห์สำเนียงด้วย AI Speech Recognition
                </p>
              </div>
            </div>
            <button onclick="window.pronunciationLab.close()" class="p-1.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
          </div>

          <!-- Target Word Display Card -->
          <div class="bg-slate-50 dark:bg-slate-800/60 p-5 rounded-2xl border border-slate-200 dark:border-slate-700/60 text-center space-y-2">
            <div class="flex items-center justify-center gap-2">
              <h2 id="pron-target-word" class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                Kubernetes
              </h2>
              <button onclick="window.pronunciationLab.speakTarget()" class="p-2 rounded-xl bg-cyan-100 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-300 hover:bg-cyan-200 transition-all text-sm shrink-0" title="ฟังเสียงต้นฉบับ">
                🔊
              </button>
            </div>
            <p id="pron-phonetic" class="text-sm font-mono text-cyan-600 dark:text-cyan-400">
              /ˌkuːbərˈnɛtiːz/
            </p>
            <p id="pron-example" class="text-xs text-slate-500 dark:text-slate-400 italic pt-1 hidden">
              "We deployed the microservice to our production cluster."
            </p>
          </div>

          <!-- Interactive Microphone & Waveform Area -->
          <div class="text-center space-y-3 py-2">
            <div class="relative inline-flex items-center justify-center">
              <div id="pron-pulse-ring" class="absolute w-24 h-24 rounded-full bg-cyan-500/20 animate-ping hidden pointer-events-none"></div>
              <button id="pron-mic-btn" onclick="window.pronunciationLab.toggleListening()"
                class="relative w-20 h-20 rounded-full bg-gradient-to-tr from-cyan-600 to-indigo-600 hover:from-cyan-700 hover:to-indigo-700 text-white text-3xl flex items-center justify-center shadow-xl hover:shadow-cyan-500/30 transition-all active:scale-95 focus:outline-none">
                <span id="pron-mic-icon">🎙️</span>
              </button>
            </div>
            <p id="pron-status-text" class="text-xs font-bold text-slate-500 dark:text-slate-400">
              แตะที่ไมโครโฟน แล้วพูดคำศัพท์ได้เลย
            </p>
          </div>

          <!-- Score & Feedback Result Card -->
          <div id="pron-result-card" class="hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 space-y-3">
            <div class="flex items-center justify-between">
              <span class="text-xs font-bold text-slate-400">ผลการประเมินการออกเสียง:</span>
              <span id="pron-score-badge" class="px-3 py-1 rounded-full text-xs font-black bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
                95% ยอดเยี่ยม
              </span>
            </div>

            <!-- Spoken text output -->
            <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/40 text-xs">
              <span class="text-slate-400">ระบบได้ยินว่า:</span>
              <p id="pron-spoken-text" class="font-bold text-slate-800 dark:text-slate-200 mt-0.5">
                "kubernetes"
              </p>
            </div>

            <p id="pron-feedback-tip" class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              สำเนียงชัดเจนมาก สื่อสารเข้าใจได้ตรงเป้าหมาย
            </p>
          </div>

          <!-- Footer Actions -->
          <div class="flex items-center justify-between gap-3 pt-2">
            <button onclick="window.pronunciationLab.speakTarget()" class="py-2.5 px-4 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5">
              <span>🔊</span>
              <span>ฟังเสียงตัวอย่างอีกครั้ง</span>
            </button>
            <button onclick="window.pronunciationLab.close()" class="py-2.5 px-4 bg-cyan-600 hover:bg-cyan-700 text-white rounded-xl text-xs font-bold transition-all shadow-md">
              เสร็จสิ้น
            </button>
          </div>
        </div>
      `;

      document.body.appendChild(modal);
    }

    open(targetWord, phonetic = '', exampleSentence = '') {
      this.targetWord = (targetWord || '').trim();
      this.phonetic = phonetic;
      this.exampleSentence = exampleSentence;
      this.isOpen = true;
      this.lastResult = null;
      this.isListening = false;

      const modal = document.getElementById('pronunciation-lab-modal');
      const wordEl = document.getElementById('pron-target-word');
      const phoneticEl = document.getElementById('pron-phonetic');
      const exampleEl = document.getElementById('pron-example');
      const resultCard = document.getElementById('pron-result-card');
      const statusText = document.getElementById('pron-status-text');

      if (wordEl) wordEl.textContent = this.targetWord;
      if (phoneticEl) phoneticEl.textContent = this.phonetic ? `/${this.phonetic.replace(/[/]/g, '')}/` : '';
      if (exampleEl) {
        if (this.exampleSentence) {
          exampleEl.textContent = `"${this.exampleSentence}"`;
          exampleEl.classList.remove('hidden');
        } else {
          exampleEl.classList.add('hidden');
        }
      }
      if (resultCard) resultCard.classList.add('hidden');
      if (statusText) statusText.textContent = 'แตะที่ไมโครโฟน แล้วพูดคำศัพท์ได้เลย';

      this.updateMicUI(false);

      if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
      }

      // Automatically play the target word once for reference
      setTimeout(() => this.speakTarget(), 300);
    }

    close() {
      this.isOpen = false;
      this.stopListening();
      const modal = document.getElementById('pronunciation-lab-modal');
      if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
      }
    }

    speakTarget() {
      if (window.speechEngine && this.targetWord) {
        window.speechEngine.speak(this.targetWord);
      }
    }

    toggleListening() {
      if (this.isListening) {
        this.stopListening();
      } else {
        this.startListening();
      }
    }

    startListening() {
      if (!window.speechEngine) return;

      this.isListening = true;
      this.updateMicUI(true);

      const statusText = document.getElementById('pron-status-text');
      if (statusText) {
        statusText.textContent = '🎙️ กำลังฟังเสียงของคุณ... กรุณาออกเสียงเลยครับ!';
        statusText.classList.add('text-cyan-600', 'dark:text-cyan-400');
      }

      window.speechEngine.listenAndScore(this.targetWord, {
        onStart: () => {
          if (window.soundFx && window.soundFx.playClick) window.soundFx.playClick();
        },
        onResult: (res) => {
          this.isListening = false;
          this.updateMicUI(false);
          this.displayScore(res);
        },
        onError: (err) => {
          this.isListening = false;
          this.updateMicUI(false);
          if (statusText) {
            statusText.textContent = err.message || 'เกิดข้อผิดพลาดในการฟังเสียง ลองใหม่อีกครั้ง';
            statusText.classList.remove('text-cyan-600', 'dark:text-cyan-400');
            statusText.classList.add('text-red-500');
          }
        },
        onEnd: () => {
          this.isListening = false;
          this.updateMicUI(false);
        }
      });
    }

    stopListening() {
      this.isListening = false;
      this.updateMicUI(false);
      if (window.speechEngine && window.speechEngine.recognition) {
        try {
          window.speechEngine.recognition.stop();
        } catch (e) {}
      }
    }

    updateMicUI(recording) {
      const pulseRing = document.getElementById('pron-pulse-ring');
      const micBtn = document.getElementById('pron-mic-btn');
      const micIcon = document.getElementById('pron-mic-icon');

      if (pulseRing) {
        if (recording) pulseRing.classList.remove('hidden');
        else pulseRing.classList.add('hidden');
      }

      if (micBtn) {
        if (recording) {
          micBtn.classList.remove('from-cyan-600', 'to-indigo-600');
          micBtn.classList.add('from-red-500', 'to-rose-600', 'scale-110');
        } else {
          micBtn.classList.remove('from-red-500', 'to-rose-600', 'scale-110');
          micBtn.classList.add('from-cyan-600', 'to-indigo-600');
        }
      }

      if (micIcon) {
        micIcon.textContent = recording ? '⏹️' : '🎙️';
      }
    }

    displayScore(res) {
      const resultCard = document.getElementById('pron-result-card');
      const badge = document.getElementById('pron-score-badge');
      const spokenText = document.getElementById('pron-spoken-text');
      const feedbackTip = document.getElementById('pron-feedback-tip');
      const statusText = document.getElementById('pron-status-text');

      if (!resultCard) return;

      resultCard.classList.remove('hidden');

      if (spokenText) {
        spokenText.textContent = `"${res.spokenText}"`;
      }

      const score = res.score || 0;
      let badgeClass = '';
      let badgeText = '';
      let tip = '';

      if (score >= 90) {
        badgeClass = 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-200';
        badgeText = `${score}% 🌟 ยอดเยี่ยมระดับ Native!`;
        tip = 'สำเนียงและการเน้นเสียง (Stress) ถูกต้องเป็นธรรมชาติมาก สื่อสารได้ระดับสากล';
        if (window.soundFx && window.soundFx.playVictory) window.soundFx.playVictory();
        if (window.app && window.app.addXP) window.app.addXP(20, `ฝึกพูดคำว่า: ${this.targetWord}`);
      } else if (score >= 75) {
        badgeClass = 'bg-cyan-100 text-cyan-800 dark:bg-cyan-950 dark:text-cyan-200';
        badgeText = `${score}% 👍 ดีมาก`;
        tip = 'ออกเสียงได้ชัดเจน สื่อสารเข้าใจได้เป็นอย่างดีในการประชุม';
        if (window.soundFx && window.soundFx.playCorrect) window.soundFx.playCorrect();
        if (window.app && window.app.addXP) window.app.addXP(10, `ฝึกพูดคำว่า: ${this.targetWord}`);
      } else {
        badgeClass = 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-200';
        badgeText = `${score}% 💡 กำลังพัฒนา`;
        tip = 'ลองกดฟังเสียงตัวอย่าง 🔊 อีกครั้ง แล้วสังเกตการเน้นพยางค์ (Stress) จากนั้นแตะไมค์พูดใหม่อีกรอบนะครับ';
        if (window.soundFx && window.soundFx.playWrong) window.soundFx.playWrong();
      }

      if (badge) {
        badge.className = `px-3 py-1 rounded-full text-xs font-black ${badgeClass}`;
        badge.textContent = badgeText;
      }

      if (feedbackTip) {
        feedbackTip.textContent = tip;
      }

      if (statusText) {
        statusText.textContent = 'วิเคราะห์เสร็จสิ้น! คุณสามารถแตะไมค์เพื่อฝึกพูดใหม่อีกครั้งได้เสมอ';
        statusText.className = 'text-xs font-bold text-slate-500 dark:text-slate-400';
      }
    }
  }

  window.pronunciationLab = new PronunciationLab();
})();
