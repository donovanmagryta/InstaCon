const cacheName = 'a2hs-test';
const resourcesToCache = [
  'index.html',
  'manifest.json',
  'meeting.png',
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(resourcesToCache);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
