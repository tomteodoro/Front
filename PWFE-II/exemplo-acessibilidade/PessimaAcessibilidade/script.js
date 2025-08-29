function goto(hash) {
  // rolagem suave sem gestão de foco
  document.location.hash = hash;
  // nada de foco no conteúdo
}

function envia() {
  // feedback só visual (alert), sem live region e sem validação real
  alert('Enviado!');
  return false;
}

// Clique com mouse em elementos não interativos
document.querySelectorAll('.item').forEach(el => {
  el.addEventListener('keydown', (e) => {
    // ignora teclado (erro intencional)
  });
});
