//FUNÇÃO DE VALIDAÇÃO DOS DADOS INSERIDOS NO FORMULÁRIO
function validaFormulario() {
  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();

  if (nome === "" || email === "") {
    alert("Por favor, preencha todos os campos!");
    return false;
  }

  alert("Mensagem enviada com sucesso!");
  return true;
}