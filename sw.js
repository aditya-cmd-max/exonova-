self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('exonova-cache').then((cache) => {
      return cache.addAll([
        '/',
        '/exonova-/offline.html',
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match('/exonova-/offline.html');
    })
  );
});
