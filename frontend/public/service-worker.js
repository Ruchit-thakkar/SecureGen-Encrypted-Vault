const CACHE_NAME = "securegen-vault-cache-v1";

// 📦 UI Assets to cache instantly when the user installs the app
const ASSETS_TO_CACHE = [
  "/",
  "/index.html",
  "/logo2.png", // Ensure this matches your manifest logo
  "/manifest.json",
];

// ==========================================
// 1️⃣ INSTALL EVENT
// ==========================================
self.addEventListener("install", (event) => {
  console.log("[Service Worker] Installing...");
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    }),
  );
  // Force the waiting service worker to become the active service worker
  self.skipWaiting();
});

// ==========================================
// 2️⃣ ACTIVATE EVENT (Clean up old caches)
// ==========================================
self.addEventListener("activate", (event) => {
  console.log("[Service Worker] Activated.");
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log("[Service Worker] Clearing old cache");
            return caches.delete(cache);
          }
        }),
      );
    }),
  );
  self.clients.claim();
});

// ==========================================
// 3️⃣ FETCH EVENT (Network Interceptor)
// ==========================================
self.addEventListener("fetch", (event) => {
  const requestUrl = event.request.url;

  // 🚨 CRITICAL SECURITY RULE:
  // NEVER cache any request going to our backend API.
  // We want live, encrypted data only.
  if (requestUrl.includes("/api/")) {
    event.respondWith(fetch(event.request));
    return;
  }

  // 🌐 UI CACHING STRATEGY: "Network First, Fallback to Cache"
  // This ensures users always get your latest React updates if they have internet,
  // but if they are offline, it loads the app from the cache perfectly.
  if (event.request.mode === "navigate" || event.request.method === "GET") {
    event.respondWith(
      fetch(event.request).catch(() => {
        return caches.match(event.request).then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }
          // If totally offline and not in cache, return the index.html to let React handle it
          return caches.match("/");
        });
      }),
    );
  }
});
