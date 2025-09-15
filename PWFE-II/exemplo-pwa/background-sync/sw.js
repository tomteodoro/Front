let mensagens = [];

// Recebe dados da página
self.addEventListener("message", event => {
  mensagens.push(event.data.mensagem);
  console.log("Mensagem recebida:", event.data.mensagem);

  // Agenda sincronização
  self.registration.sync.register("enviar-form");
});

// Evento de sincronização
self.addEventListener("sync", event => {
  if (event.tag === "enviar-form") {
    event.waitUntil(enviarMensagens());
  }
});

async function enviarMensagens() {
  while (mensagens.length > 0) {
    const msg = mensagens.shift();

    // Simula envio ao servidor
    console.log("Enviando para o servidor:", msg);

    // Aqui poderia ser um fetch real:
    // await fetch("/api/mensagens", { method: "POST", body: JSON.stringify({ msg }) });
  }
}
