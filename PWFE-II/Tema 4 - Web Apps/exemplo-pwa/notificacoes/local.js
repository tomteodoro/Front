const botao = document.getElementById("notificacao");

    // Solicitar permissão ao carregar a página
    Notification.requestPermission().then(permission => {
      console.log("Permissão para notificações:", permission);
    });

    botao.addEventListener("click", () => {
      if (Notification.permission === "granted") {
        new Notification("Olá!", {
          body: "Essa é uma notificação local.",
          icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6X6SlR7kCahU2erUQtNwHMTGyznLddopKDA&s"
        });
      } else {
        alert("Permissão negada para notificações.");
      }
    });