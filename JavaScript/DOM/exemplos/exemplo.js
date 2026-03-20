const input = document.getElementById("tarefaInput");
const botao = document.getElementById("btnAdicionar");
const lista = document.getElementById("listaTarefas");
botao.addEventListener("click", () => {
    
    const novaTarefa = document.createElement("li");
    const texto = input.value.trim();
    if (texto === "") {
        alert("Digite algo!");
        return;
    }
    
    novaTarefa.textContent = texto;
    
    novaTarefa.classList.add("destaque");
    
    novaTarefa.setAttribute("data-tarefa", texto.toLowerCase());
    
    novaTarefa.style.color = "#333";
    
    lista.appendChild(novaTarefa);

    // Evento para remover item ao clicar
    novaTarefa.addEventListener("click", () => {
        // 6. getAttribute: obtém o valor da tarefa
        const tarefa = novaTarefa.getAttribute("data-tarefa");
        console.log("Removendo:", tarefa);
        // 7. classList.remove: remove classe destaque
        novaTarefa.classList.remove("destaque");
        // 8. classList.add: adiciona classe de removido
        novaTarefa.classList.add("removido");
        // 9. innerHTML: substitui o conteúdo
        novaTarefa.innerHTML += " (removida)";
        // 10. removeChild: remove após 1 segundo
        setTimeout(() => {
            lista.removeChild(novaTarefa);
        }, 1000);
    });
    // Limpa o input
    input.value = "";
});