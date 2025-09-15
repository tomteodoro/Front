// Registrar SW
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js")
      .then(() => console.log("SW registrado"));
}

const form = document.getElementById("meuForm");
const status = document.getElementById("status");

form.addEventListener("submit", async e => {
  e.preventDefault();
  const data = new FormData(form);
  const mensagem = data.get("mensagem");

  if (navigator.onLine) {
    // Se tem internet, envia direto
    try {
      await fetch("/api/mensagens", { // servidor fictício
        method: "POST",
        body: JSON.stringify({ mensagem }),
        headers: { "Content-Type": "application/json" }
      });
      status.textContent = "Mensagem enviada com sucesso!";
    } catch (err) {
      status.textContent = "Erro no envio, salvando para retry...";
      navigator.serviceWorker.ready.then(reg => {
        reg.active.postMessage({ mensagem });
      });
    }
  } else {
    // Se está offline, salva e agenda sync
    navigator.serviceWorker.ready.then(reg => {
      reg.active.postMessage({ mensagem });
      status.textContent = "Mensagem salva! Será enviada quando houver internet.";
    });
  }

  form.reset();
});