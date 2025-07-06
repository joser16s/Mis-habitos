self.addEventListener('install', event => {
  self.skipWaiting();
  console.log('✅ Service Worker instalado');
});

self.addEventListener('activate', () => {
  console.log('🎉 Service Worker activado');

  // Crear notificación cada 24 h (sólo en apps instaladas)
  setInterval(() => {
    self.registration.showNotification('📌 Recordatorio diario', {
      body: 'Revisa tus hábitos para hoy 💪',
      icon: 'icono-192.png',
      badge: 'icono-192.png'
    });
  }, 24 * 60 * 60 * 1000); // cada 24 horas
});
self.addEventListener('periodicsync', event => {
  if (event.tag === 'actualizar-habitos') {
    event.waitUntil(
      // Aquí puedes hacer cosas como actualizar datos o mostrar una notificación
      self.registration.showNotification('📌 Revisión diaria', {
        body: '¿Ya completaste tus hábitos de hoy?',
        icon: 'icono-192.png'
      })
    );
  }
});