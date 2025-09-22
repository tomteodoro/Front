const form = document.getElementById("formNota");
const listaNotas = document.getElementById("listaNotas");
const statusMsg = document.getElementById("status");
const btnLembrar = document.getElementById("lembrar");

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js")
  .then(() => console.log("Service Worker: Registrado!"))
  .catch(err => console.error("Erro ao registrar:", err));
}

let notas = [];

// Adiciona nota
form.addEventListener("submit", async e => {
  e.preventDefault();
  const texto = form.nota.value;

  if (navigator.onLine) {
    // Se estiver online, envia direto
    console.log("Enviando ao servidor:", texto);
    statusMsg.textContent = "Tarefa anotada com sucesso!";
  } else {
    // Se offline, manda para o SW salvar
    navigator.serviceWorker.ready.then(reg => {
      reg.active.postMessage({ nota: texto });
      statusMsg.textContent = "Tarefa salva! Será enviada quando houver internet.";
    });
  }

  notas.push(texto);
  mostraNotas();
  form.reset();
});

// Renderizar lista de notas
function mostraNotas() {
  listaNotas.innerHTML = "";
  notas.forEach(n => {
    const li = document.createElement("li");
    li.textContent = n;
    listaNotas.appendChild(li);
  });
}

// Notificação personalizada
btnLembrar.addEventListener("click", () => {
  Notification.requestPermission().then(permission => {
    if (permission === "granted") {
      new Notification("📓 Lembrete", {
        body: "Não esqueça de anotar as tarefas na agenda hoje!",
        icon: "icon.png"
      });
    }
  });
});
