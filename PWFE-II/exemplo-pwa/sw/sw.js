// const CACHE_NAME = "Cache do Desenvolvedor";
// const FILES_TO_CACHE = [
//   "index.html",
//   "sw.js"
// ];

// Registra o Service Worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js")
  .then(() => console.log("Service Worker: Registrado!"))
  .catch(err => console.error("Erro ao registrar:", err));
}

// Evento de instalação
self.addEventListener("install", event => {
  console.log("Service Worker: Instalado!");
  // Abre cache e adiciona arquivos
  // event.waitUntil(
  //   caches.open(CACHE_NAME).then(cache => {
  //     console.log("Cache Aberto!");
  //     return cache.addAll(FILES_TO_CACHE);
  //   })
  // );
});

// Evento de ativação
self.addEventListener("activate", event => {
  console.log("Service Worker: Ativado!");
});

// Evento de interceptação de requisições
self.addEventListener("fetch", event => {
  console.log("Interceptando:", event.request.url);

  // Resposta personalizada para qualquer requisição
  event.respondWith(
    new Response("Hello do Service Worker!", {
      headers: { "Content-Type": "text/plain" }
    })
  );

  // Recuperar do cache, se disponível
  // event.respondWith(
  //   caches.match(event.request).then(response => {
  //     // Se tiver no cache, retorna
  //     if (response) {
  //       return response;
  //     }
  //     // Senão, busca na rede
  //     return fetch(event.request);
  //   })
  // );
});

// Evento de push (exemplo de notificação)
// self.addEventListener("push", event => {
//   self.registration.showNotification("Nova mensagem", {
//     body: event.data.text(),
//     icon: "icon.png"
//   });
// });



