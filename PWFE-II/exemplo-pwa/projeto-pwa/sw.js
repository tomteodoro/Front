const CACHE_NAME = "diario-cache-v1";
const FILES_TO_CACHE = [
  "index.html",
  "style.css",
  "script.js",
  "sw.js",
  "manifest.json"
];

let notasOffline = [];

// Instala e salva arquivos no cache
self.addEventListener("install", event => {
  console.log("SW: Instalado");
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log("SW: Cache criado");
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

// Ativação
self.addEventListener("activate", () => {
  console.log("SW: Ativo");
});

// Intercepta requisições
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

// Recebe mensagens da página
self.addEventListener("message", event => {
  notasOffline.push(event.data.nota);
  console.log("SW: Nota salva offline:", event.data.nota);
  self.registration.sync.register("sync-notas");
});

// Background Sync
self.addEventListener("sync", event => {
  if (event.tag === "sync-notas") {
    event.waitUntil(enviarNotas());
  }
});

async function enviarNotas() {
  while (notasOffline.length > 0) {
    const nota = notasOffline.shift();
    console.log("SW: Enviando nota ao servidor:", nota);
    // Aqui poderia ser um fetch real para uma API
    await new Promise(r => setTimeout(r, 1000)); // simula envio
  }
}
