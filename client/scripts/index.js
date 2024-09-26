if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('sw.js', { type: 'module' })
    .then(() => console.log('Service Worker registered'))
    .catch(error => console.error('Failed to register service worker', error));
}
