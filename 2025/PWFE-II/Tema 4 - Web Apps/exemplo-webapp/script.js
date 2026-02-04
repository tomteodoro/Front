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