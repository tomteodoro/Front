const msg = document.getElementById("msg");
const inputNome = document.getElementById("nome");
const nomeSalvo = localStorage.getItem("usuario");

// Mostrar saudação se nome estiver salvo
if (nomeSalvo && nomeSalvo.trim() !== "") {
    msg.textContent = `Olá, ${nomeSalvo}!`;
}

// Botão para salvar nome no localStorage
document.getElementById("salvar").addEventListener("click", () => {
    const nome = inputNome.value.trim();
    if (nome !== "") {
        localStorage.setItem("usuario", nome);
        msg.textContent = `Olá, ${nome}!`;
    } else {
        alert("Por favor, digite um nome válido.");
    }
});

// Botão para limpar nome do localStorage
document.getElementById("limpar").addEventListener("click", () => {
    localStorage.removeItem("usuario");
    msg.textContent = "Olá, visitante!";
    inputNome.value = "";
});