const CACHE_VERSION = '4.0';
const CACHE_NAME = `psb-v${CACHE_VERSION}`;
const NETWORK_FIRST = ['/index.html', '/version.json'];
self.addEventListener('install', e => { self.skipWaiting(); });
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
  ).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  const isNetworkFirst = NETWORK_FIRST.some(p => url.pathname.endsWith(p));
  if (isNetworkFirst) {
    e.respondWith(fetch(e.request).then(res => {
      caches.open(CACHE_NAME).then(c => c.put(e.request, res.clone()));
      return res;
    }).catch(() => caches.match(e.request)));
  } else {
    e.respondWith(caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(res => {
        caches.open(CACHE_NAME).then(c => c.put(e.request, res.clone()));
        return res;
      });
    }));
  }
});
