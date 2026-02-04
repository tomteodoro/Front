const CACHE_NAME = 'app-shell-v1';
const RUNTIME = 'runtime-v1';
const PRECACHE_URLS = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './icon.png'
];
self.addEventListener('install', event => {
  console.log('SW: install');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});
self.addEventListener('activate', event => {
  console.log('SW: activate');
  const currentCaches = [CACHE_NAME, RUNTIME, 'dynamic-v1'];
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.map(k => {
        if (!currentCaches.includes(k)) return caches.delete(k);
      })
    )).then(() => self.clients.claim())
  );
});
self.addEventListener('fetch', event => {
  const req = event.request;
  const url = new URL(req.url);
  if (url.origin !== location.origin && url.href.includes('jsonplaceholder.typicode.com')) {
    event.respondWith(
      fetch(req).then(networkRes => {
        return caches.open('dynamic-v1').then(cache => {
          cache.put(req, networkRes.clone());
          return networkRes;
        });
      }).catch(() => {
        return caches.match(req).then(resp => resp || new Response(JSON.stringify([]), { headers: { 'Content-Type': 'application/json' } }));
      })
    );
    return;
  }
  event.respondWith(
    caches.match(req).then(cached => {
      if (cached) return cached;
      return fetch(req).then(res => {
        if (req.method === 'GET' && req.url.startsWith(self.location.origin)) {
          return caches.open(RUNTIME).then(cache => {
            cache.put(req, res.clone());
            return res;
          });
        }
        return res;
      }).catch(() => {
        if (req.mode === 'navigate') {
          return caches.match('./index.html');
        }
      });
    })
  );
});