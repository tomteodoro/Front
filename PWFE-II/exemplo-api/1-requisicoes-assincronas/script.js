document.getElementById("carregar").addEventListener("click", async () => {
    const resposta = await fetch("https://jsonplaceholder.typicode.com/users");
    const usuarios = await resposta.json();

    const lista = document.getElementById("lista");
    lista.innerHTML = ""; // limpa
    usuarios.forEach(u => {
        const li = document.createElement("li");
        li.textContent = `${u.name} - ${u.email}`;
        lista.appendChild(li);
    });
});