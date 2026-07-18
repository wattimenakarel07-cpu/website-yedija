const CACHE_NAME = "karel-coding-v2";

const FILES_TO_CACHE = [
  "/website-yedija/",
  "/website-yedija/index.html",
  "/website-yedija/style.css",
  "/website-yedija/script.js",
  "/website-yedija/manifest.json",
  "/website-yedija/logo-192.png",
  "/website-yedija/logo-512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});