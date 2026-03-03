// Atividade 1
let botaoToggle = document.querySelector("#botaoToggle");
let mensagem = document.querySelector("#mensagem");

botaoToggle.addEventListener("click", function() {
  mensagem.classList.toggle("oculto");
});


// Atividade 2
let titulo = document.querySelector("#titulo");
let azul = document.querySelector("#azul");
let vermelho = document.querySelector("#vermelho");

azul.addEventListener("click", function() {
  titulo.style.color = "blue";
});

vermelho.addEventListener("click", function() {
  titulo.style.color = "red";
});

// Atividade 3
let texto = document.querySelector("#texto");
let contador = document.querySelector("#contador");

texto.addEventListener("keyup", function() {
  let quantidade = texto.value.length;
  contador.textContent = "Caracteres digitados: " + quantidade;
});