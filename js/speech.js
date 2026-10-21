/**
 * EngMastery: Speech & Voice Engine
 * Handles Text-to-Speech (TTS) with US/UK accent toggles, rate adjustment
 * Handles Speech Recognition (STT) for interactive pronunciation scoring
 */
class SpeechEngine {
  constructor() {
    this.synth = window.speechSynthesis || null;
    this.voices = [];
    this.accent = localStorage.getItem("engmastery_accent") || "en-US"; // "en-US" or "en-GB"
    this.rate = parseFloat(localStorage.getItem("engmastery_rate")) || 0.95; // Slightly natural pace
    this.currentUtterance = null;

    // Speech Recognition
    const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition || null;
    this.hasRecognition = !!SpeechRec;
    this.recognition = SpeechRec ? new SpeechRec() : null;

    if (this.recognition) {
      this.recognition.continuous = false;
      this.recognition.interimResults = false;
      this.recognition.lang = this.accent;
    }

    this.initVoices();
  }

  initVoices() {
    if (!this.synth) return;
    const loadVoices = () => {
      this.voices = this.synth.getVoices();
    };
    loadVoices();
    if (this.synth.onvoiceschanged !== undefined) {
      this.synth.onvoiceschanged = loadVoices;
    }
  }

  setAccent(accent) {
    this.accent = accent;
    localStorage.setItem("engmastery_accent", accent);
    if (this.recognition) {
      this.recognition.lang = accent;
    }
  }

  setRate(rate) {
    this.rate = rate;
    localStorage.setItem("engmastery_rate", rate);
  }

  /**
   * Speak a given English phrase
   * @param {string} text - The text to speak
   * @param {function} onStart - Callback when audio begins
   * @param {function} onEnd - Callback when audio ends
   */
  speak(text, onStart = null, onEnd = null) {
    let actualOnStart = onStart;
    let actualOnEnd = onEnd;
    let customRate = this.rate;

    if (onStart && typeof onStart === "object" && !Array.isArray(onStart)) {
      actualOnStart = onStart.onStart || null;
      actualOnEnd = onStart.onEnd || null;
      if (typeof onStart.rate === "number") {
        customRate = onStart.rate;
      }
    }

    if (!this.synth) {
      console.warn("Speech Synthesis not supported by this browser.");
      if (actualOnEnd) actualOnEnd();
      return;
    }

    // Cancel any active speech
    this.synth.cancel();

    if (!text || !text.trim()) {
      if (actualOnEnd) actualOnEnd();
      return;
    }

    const cleanText = text.replace(/[/]/g, " ").trim();
    const utterance = new SpeechSynthesisUtterance(cleanText);
    this.currentUtterance = utterance;

    utterance.rate = customRate;
    utterance.pitch = 1.0;
    utterance.lang = this.accent;

    // Find best matching voice
    if (this.voices.length > 0) {
      const preferred = this.voices.find(v => v.lang === this.accent || v.lang.startsWith(this.accent.split("-")[0]));
      if (preferred) utterance.voice = preferred;
    }

    utterance.onstart = () => {
      if (actualOnStart) actualOnStart();
    };

    utterance.onend = () => {
      this.currentUtterance = null;
      if (actualOnEnd) actualOnEnd();
    };

    utterance.onerror = (err) => {
      console.warn("Speech synthesis error:", err);
      this.currentUtterance = null;
      if (actualOnEnd) actualOnEnd();
    };

    this.synth.speak(utterance);
  }

  stop() {
    if (this.synth) {
      this.synth.cancel();
    }
  }

  /**
   * Listen for user speech and score pronunciation against target text
   * @param {string} targetText - The target phrase to match
   * @param {object} callbacks - { onStart, onResult, onError, onEnd }
   */
  listenAndScore(targetText, { onStart, onResult, onError, onEnd }) {
    if (!this.hasRecognition) {
      if (onError) onError({ code: "not_supported", message: "เบราว์เซอร์ของคุณยังไม่รองรับระบบตรวจจับเสียงพูด (แนะนำให้ใช้ Google Chrome หรือ Microsoft Edge)" });
      if (onEnd) onEnd();
      return;
    }

    this.stop(); // Stop any playback

    this.recognition.lang = this.accent;

    let receivedResult = false;

    this.recognition.onstart = () => {
      if (onStart) onStart();
    };

    this.recognition.onresult = (event) => {
      receivedResult = true;
      if (!event.results || !event.results[0]) return;
      const spokenText = event.results[0][0].transcript;
      const confidence = event.results[0][0].confidence;

      const score = this.calculateSimilarity(spokenText, targetText);

      if (onResult) {
        onResult({
          spokenText,
          targetText,
          score,
          isPass: score >= 80,
          isExcellent: score >= 90,
          confidence
        });
      }
    };

    this.recognition.onerror = (event) => {
      console.warn("Speech recognition error:", event.error);
      if (onError) {
        let msg = "เกิดข้อผิดพลาดในการฟังเสียง";
        if (event.error === "not-allowed") {
          msg = "กรุณากด 'อนุญาต' (Allow) ให้เบราว์เซอร์เข้าถึงไมโครโฟนของคุณเพื่อฝึกพูด";
        } else if (event.error === "no-speech") {
          msg = "ไม่ได้ยินเสียงพูด ลองขยับเข้าใกล้ไมโครโฟนแล้วกดใหม่อีกครั้งนะครับ";
        }
        onError({ code: event.error, message: msg });
      }
    };

    this.recognition.onend = () => {
      if (onEnd) onEnd({ receivedResult });
    };

    try {
      this.recognition.start();
    } catch (e) {
      console.warn("Recognition start failed:", e);
      if (onError) onError({ code: "start_failed", message: "ไม่สามารถเริ่มการดักฟังเสียงได้ ลองใหม่อีกครั้ง" });
      if (onEnd) onEnd();
    }
  }

  /**
   * Calculate string similarity score between spoken and target (0 to 100)
   */
  calculateSimilarity(str1, str2) {
    const s1 = this.normalize(str1);
    const s2 = this.normalize(str2);

    if (s1 === s2) return 100;
    if (!s1 || !s2) return 0;

    const words1 = s1.split(" ").filter(Boolean);
    const words2 = s2.split(" ").filter(Boolean);

    // If target is a single word
    if (words2.length === 1) {
      const target = words2[0];
      // 1. Exact match in spoken word list
      if (words1.includes(target)) {
        return 100;
      }
      // 2. Best character similarity match across spoken tokens
      let bestWordScore = 0;
      for (const w of words1) {
        if (w === target) return 100;
        const maxLen = Math.max(w.length, target.length);
        const dist = this.levenshteinDistance(w, target);
        const sim = Math.round(Math.max(0, (1 - dist / maxLen) * 100));
        if (sim > bestWordScore) bestWordScore = sim;
      }
      return bestWordScore;
    }

    // If exact sub-phrase match for multi-word phrases
    if (s1.includes(s2) || s2.includes(s1)) {
      const lenDiff = Math.abs(s1.length - s2.length);
      if (lenDiff <= 3) return 96;
      if (lenDiff <= 8) return 88;
    }

    // Word-level token match & character Levenshtein combined for sentences
    let matchedWords = 0;
    words1.forEach(w => {
      if (words2.includes(w)) matchedWords++;
    });

    const wordScore = (matchedWords / Math.max(words1.length, words2.length)) * 100;
    const charScore = (1 - this.levenshteinDistance(s1, s2) / Math.max(s1.length, s2.length)) * 100;

    return Math.round(Math.max(0, Math.min(100, (wordScore * 0.6) + (charScore * 0.4))));
  }

  normalize(str) {
    return (str || "")
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, "")
      .replace(/\s+/g, " ")
      .trim();
  }

  levenshteinDistance(a, b) {
    const matrix = [];
    for (let i = 0; i <= b.length; i++) matrix[i] = [i];
    for (let j = 0; j <= a.length; j++) matrix[0][j] = j;

    for (let i = 1; i <= b.length; i++) {
      for (let j = 1; j <= a.length; j++) {
        if (b.charAt(i - 1) === a.charAt(j - 1)) {
          matrix[i][j] = matrix[i - 1][j - 1];
        } else {
          matrix[i][j] = Math.min(
            matrix[i - 1][j - 1] + 1, // substitution
            matrix[i][j - 1] + 1,     // insertion
            matrix[i - 1][j] + 1      // deletion
          );
        }
      }
    }
    return matrix[b.length][a.length];
  }
}

window.speechEngine = new SpeechEngine();

