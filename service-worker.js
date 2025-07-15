const CACHE_NAME = 'habitos-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icono-192.png',
  '/icono-512.png',
  // puedes agregar más si usas otros archivos
];

// ✅ Al instalar, guardar archivos esenciales
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('📦 Archivos cacheados');
      return cache.addAll(urlsToCache);
    })
  );
});

// 🧼 Activar: limpiar cachés viejas
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            console.log('🧹 Cache antigua eliminada:', key);
            return caches.delete(key);
          }
        })
      )
    )
  );
});

// 🌐 Fetch: responder desde caché si no hay conexión
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});