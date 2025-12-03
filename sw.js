// sw.js - minimal service worker to satisfy PWA install criteria
const CACHE_NAME = 'tappy-bird-v1';
const urlsToCache = [
  './',
  './index.html',
  './tappy-bird-logo.png',
  './favicon.ico',
  './site.webmanifest'
];

// 1. Install Event
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        // Try to cache core assets, but don't fail if one is missing
        return cache.addAll(urlsToCache).catch(err => console.log('Optional assets missing from cache'));
      })
  );
});

// 2. Fetch Event (Required for PWA installation)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request);
    })
  );
});