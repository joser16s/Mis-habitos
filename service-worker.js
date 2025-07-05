self.addEventListener('install', event => {
  console.log('🛠️ Service Worker instalado');
  event.waitUntil(
    caches.open('app-cache').then(cache => {
      return cache.addAll([
        './',
        './index.html',
        './manifest.json',
        './icono-192.png',
        './icono-512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(respuesta => {
      return respuesta || fetch(event.request);
    })
  );
});