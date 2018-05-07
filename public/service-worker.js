var cacheName = "veille-v0.1";
var filesToCache = [];

self.addEventListener('install', function(e){
    e.waitUntil(function(){
        caches.open(cacheName).then(function(cache){
            return cache.addAll(filesToCache)
        })
    })
});

self.addEventListener('activate', function(e){
    console.log('activate')
    e.waitUntil(
        caches.keys().then(function(keyList) {
            return Promise.all(keyList.map(function(key) {
                if (key !== cacheName) {
                    console.log('[ServiceWorker] Removing old cache', key);
                    return caches.delete(key);
                }
            }));
        })
    );
    return self.clients.claim();
});

self.addEventListener('fetch', function(e) {
    console.log('[ServiceWorker] Fetch', e.request.url);
    e.respondWith(
        caches.match(e.request).then(function(response) {
            return response || fetch(e.request);
        })
    );
});