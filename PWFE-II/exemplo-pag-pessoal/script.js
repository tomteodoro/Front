// Exibe data e hora no rodapé
function atualizarDataHora() {
  const agora = new Date();
  const dataHoraFormatada = agora.toLocaleString("pt-BR");
  document.getElementById("data-hora").textContent = `Atualizado em: ${dataHoraFormatada}`;
}
atualizarDataHora();

// Alternar entre temas
document.getElementById("alterar-tema").addEventListener("click", function () {
  document.body.classList.toggle("dark");
});

// Mudar o texto da descrição
function alterarTexto() {
  const descricao = document.getElementById("descricao");
  descricao.textContent = "Agora você me conhece um pouco mais!";
}

// Validação de formulário simples
function validarFormulario() {
  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();

  if (nome === "" || email === "") {
    alert("Por favor, preencha todos os campos!");
    return false;
  }

  alert("Mensagem enviada com sucesso!");
  return true;
}
