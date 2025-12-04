// sw.js - Service Worker for Tappy Bird
const CACHE_NAME = 'tappy-bird-v1';
const urlsToCache = [
  './',
  './index.html',
  './tappy-bird-logo.png',
  './favicon.ico',
  './site.webmanifest',
  './android-chrome-192x192.png',
  './android-chrome-512x512.png'
];

// 1. Install Event - Caches core assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        // We use 'addAll' but catch errors so one missing file doesn't break the whole app
        return cache.addAll(urlsToCache).catch(err => {
            console.error('Caching failed:', err);
        });
      })
  );
});

// 2. Fetch Event - Serves from cache if available, otherwise network
self.addEventListener('fetch', (event) => {
  // CRITICAL FIX: Ignore Firestore/Google API requests
  // Let the browser handle these directly without Service Worker interference
  if (event.request.url.includes('firestore.googleapis.com') || 
      event.request.url.includes('googleapis.com')) {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});

// 3. Activate Event - Clean up old caches
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});