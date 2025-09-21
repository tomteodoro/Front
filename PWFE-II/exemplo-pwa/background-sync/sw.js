let mensagens = [];

self.addEventListener("install", event => {
  console.log("Service Worker: Instalado!");
});

self.addEventListener("activate", event => {
  console.log("Service Worker: Ativo!");
});

// Recebe dados da página
self.addEventListener("message", event => {
  mensagens.push(event.data.mensagem);
  console.log("Mensagem salva e que será enviada quando houver internet:", event.data.mensagem);

  // Agenda sincronização
  self.registration.sync.register("enviar-formulario");
});

// Evento de sincronização
self.addEventListener("sync", event => {
  if (event.tag === "enviar-formulario") {
    event.waitUntil(enviarMensagens());
  }
});

// Fila de mensagens offline 
async function enviarMensagens() {
  while (mensagens.length > 0) {
    const msg = mensagens.shift();

    // Simula envio ao servidor
    console.log("Internet restaurada! Enviando para o servidor:", msg);
  }
}
