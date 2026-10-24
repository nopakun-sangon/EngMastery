/**
 * EngMastery Progressive Web App (PWA) Service Worker
 * Version: 1.0.0 (Cache: engmastery-pwa-v1)
 * Enables 100% offline access, instant load, and native-like installation.
 */

const CACHE_NAME = 'engmastery-pwa-v4';

const STATIC_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './css/styles.css',
  './css/fonts/fonts.css',
  './js/vendor/tailwind.min.js',
  './js/audio.js',
  './js/speech.js',
  './js/storage.js',
  './js/app.js',
  './js/standupLab.js',
  './js/pwa.js',
  './js/globalSearch.js',
  './js/srsEngine.js',
  './js/pronunciationLab.js',
  './js/placementTest.js',
  './data/vocabData.js',
  './data/articlesData.js',
  './data/verbsArticlesData.js',
  './data/readingData.js',
  './data/shortStoriesData.js',
  './data/dailyNewsData.js',
  './data/masterclassData.js',
  './data/sentenceBuilderData.js',
  './data/grammarSyllabusData.js',
  './data/standupData.js',
  './lessons/courseData.js',
  './lessons/level-1-survivor/lesson.js',
  './lessons/level-2-storyteller/lesson.js',
  './lessons/level-3-connector/lesson.js',
  './lessons/level-4-communicator/lesson.js',
  './lessons/level-5-professional/lesson.js',
  './lessons/level-6-master/lesson.js',
  './icons/icon.svg',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-180.png',
  './icons/icon-maskable-192.png',
  './icons/icon-maskable-512.png',
  './icons/favicon.ico'
];

// 1. Install Event: Cache Core Shell Assets
self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[EngMastery SW] Pre-caching offline assets...');
      return cache.addAll(STATIC_ASSETS).catch((err) => {
        console.warn('[EngMastery SW] Some assets could not be pre-cached:', err);
      });
    })
  );
});

// 2. Activate Event: Clean up outdated caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((name) => {
          if (name !== CACHE_NAME) {
            console.log('[EngMastery SW] Removing obsolete cache:', name);
            return caches.delete(name);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// 3. Fetch Event: Smart Offline Caching Strategy
self.addEventListener('fetch', (event) => {
  const request = event.request;

  // Ignore non-GET requests and external third-party requests
  if (request.method !== 'GET') return;
  const url = new URL(request.url);

  // Ignore browser extensions or other protocols
  if (!url.protocol.startsWith('http')) return;

  // Navigation requests (HTML pages): Network first, falling back to cached index.html
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, responseClone));
          }
          return networkResponse;
        })
        .catch(() => {
          return caches.match('./index.html') || caches.match(request);
        })
    );
    return;
  }

  // Static Assets (JS, CSS, Data, Images, Fonts): Stale-While-Revalidate
  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      const fetchPromise = fetch(request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, responseClone));
          }
          return networkResponse;
        })
        .catch((err) => {
          // If network fetch fails, it's fine since we have cachedResponse
          return cachedResponse;
        });

      return cachedResponse || fetchPromise;
    })
  );
});

// 4. Message Event: Allow skipWaiting from client
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

