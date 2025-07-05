self.addEventListener('install', event => {
  console.log('Service Worker instalado');
});

self.addEventListener('fetch', event => {
  // Puedes interceptar peticiones si quieres; por ahora lo dejamos pasar todo
});