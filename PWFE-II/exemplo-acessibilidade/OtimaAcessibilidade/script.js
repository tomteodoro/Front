// Coloca foco no main ao usar o link "pular para conteúdo"
document.querySelector('.skip-link')?.addEventListener('click', function () {
  const main = document.getElementById('conteudo-principal');
  main?.focus();
});

// Validação simples com mensagens acessíveis
const form = document.querySelector('form');
const mensagens = document.getElementById('mensagens');

form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const nome = document.getElementById('nome');
  const email = document.getElementById('email');
  const evento = document.getElementById('evento');

  let erros = [];
  if (!nome.value.trim()) erros.push('Informe seu nome.');
  if (!email.value.trim()) erros.push('Informe um e-mail válido.');
  if (!evento.value.trim()) erros.push('Selecione um evento.');

  if (erros.length) {
    mensagens.textContent = erros.join(' ');
    mensagens.className = 'live-region erro';
    // move foco para a região de mensagens
    mensagens.setAttribute('tabindex', '-1');
    mensagens.focus();
  } else {
    mensagens.textContent = 'Inscrição enviada com sucesso! Verifique seu e-mail.';
    mensagens.className = 'live-region sucesso';
    form.reset();
  }
});
