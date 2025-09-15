function adicionar() {
    const input = document.getElementById("tarefa");
    const texto = input.value.trim();
    if (texto !== "") {
        const li = document.createElement("li");
        li.textContent = texto;
        document.getElementById("lista").appendChild(li);
        input.value = "";
    }
}









// let deferredPrompt;
// const installButton = document.getElementById('installButton'); // Crie um botão para "Instalar"

// window.addEventListener('beforeinstallprompt', (e) => {
//   // Previne o navegador de mostrar automaticamente a prompt de instalação
//   e.preventDefault();
//   deferredPrompt = e;
  
//   // Mostre o botão de instalação
//   installButton.style.display = 'block';

//   // Quando o usuário clicar no botão, mostra a prompt de instalação
//   installButton.addEventListener('click', () => {
//     deferredPrompt.prompt();
//     deferredPrompt.userChoice.then((choiceResult) => {
//       if (choiceResult.outcome === 'accepted') {
//         console.log('O usuário aceitou a instalação');
//       } else {
//         console.log('O usuário rejeitou a instalação');
//       }
//       deferredPrompt = null;
//     });
//   });
// });