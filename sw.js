self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('exonova-cache').then((cache) => {
      return cache.addAll([
        '/',
        '/offline.html',
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match('/offline.html');
    })
  );
});
