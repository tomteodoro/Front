if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js")
  .then(() => console.log("Service Worker: Registrado!"))
  .catch(err => console.error("Erro ao registrar:", err));
}

const form = document.getElementById("formulario");
const status = document.getElementById("status");

form.addEventListener("submit", async e => {
  e.preventDefault();
  const dados = new FormData(form);
  const mensagem = dados.get("mensagem");

  if (navigator.onLine) {
    // Se tem internet, envia direto
    try {
      await fetch("/api/mensagens", { // servidor fictício
        method: "POST",
        body: JSON.stringify({ mensagem }),
        headers: { "Content-Type": "application/json" }
      });
      status.textContent = "Mensagem enviada com sucesso!";
      console.log("Mensagem enviada para o servidor instantaneamente: ", mensagem);
    } catch (err) {
      status.textContent = "Erro no envio, salvando para tentar novamente...";
      navigator.serviceWorker.ready.then(reg => {
        reg.active.postMessage({ mensagem });
      });
    }
  } else {
    // Se está offline, salva e agenda o sincronismo
    navigator.serviceWorker.ready.then(reg => {
      reg.active.postMessage({ mensagem });
      status.textContent = "Mensagem salva! Será enviada quando houver internet.";
    });
  }

  form.reset();
});