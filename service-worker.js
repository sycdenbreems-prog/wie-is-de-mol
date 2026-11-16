// Wie is de Mol? — service worker voor volledig offline gebruik.
// Verhoog het versienummer bij elke update van de app-bestanden.
const VERSION = "v2";
const CACHE_NAME = `wie-is-de-mol-${VERSION}`;

const APP_FILES = [
  "./",
  "./index.html",
  "./woorden.js",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png",
  "./icon-maskable-512.png",
  "./apple-touch-icon.png",
  "./favicon-32.png",
  "./img.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(APP_FILES.map(url => new Request(url, { cache: "reload" }))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(
        keys
          .filter(key => key.startsWith("wie-is-de-mol-") && key !== CACHE_NAME)
          .map(key => caches.delete(key))
      );
      await self.clients.claim();
      const clients = await self.clients.matchAll({ type: "window" });
      clients.forEach(client => client.postMessage({ type: "CACHE_READY" }));
    })()
  );
});

self.addEventListener("fetch", event => {
  const request = event.request;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  // Pagina-navigatie: altijd de gecachte app tonen (werkt zonder wifi).
  if (request.mode === "navigate") {
    event.respondWith(
      caches.match("./index.html").then(cached => {
        const network = fetch(request)
          .then(response => {
            if (response && response.ok) {
              const copy = response.clone();
              caches.open(CACHE_NAME).then(cache => cache.put("./index.html", copy));
            }
            return response;
          })
          .catch(() => null);
        return cached || network.then(r => r || caches.match("./"));
      })
    );
    return;
  }

  // Overige bestanden: eerst cache, ondertussen stilletjes verversen.
  event.respondWith(
    caches.match(request, { ignoreSearch: true }).then(cached => {
      const refresh = fetch(request)
        .then(response => {
          if (response && response.ok) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(request, copy));
          }
          return response;
        })
        .catch(() => null);
      return cached || refresh.then(r => r || Response.error());
    })
  );
});
