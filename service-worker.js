self.addEventListener('install', event => {
  self.skipWaiting();
  console.log('✅ Service Worker instalado');
  caches.open('mis-habitos-cache').then(cache => {
  return cache.addAll([
    './',
    './index.html',
    './manifest.json',
    './icono-192.png',
    './icono-512.png'
  ]);
});
});

self.addEventListener('activate', event => {
  console.log('🎉 Service Worker activado');
});

self.addEventListener('periodicsync', event => {
  if (event.tag === 'actualizar-habitos') {
    event.waitUntil(
      self.registration.showNotification('📌 Revisión diaria', {
        body: '¿Ya completaste tus hábitos de hoy?',
        icon: 'icono-192.png',
        badge: 'icono-192.png'
      })
    );
  }
});