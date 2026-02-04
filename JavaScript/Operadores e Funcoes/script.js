function saudacao() {
  console.log("Olá, função JavaScript!");
}

saudacao();


let agora = new Date();
console.log(agora);


function mostrarDataHora() {
  let data = new Date();
  let mes = data.getMonth() + 1;

  console.log("Dia:", data.getDate());
  console.log("Mês:", data.getMonth() + 1);
  console.log("Ano:", data.getFullYear());
  console.log("Hora:", data.getHours());
  console.log("Minutos:", data.getMinutes());  
  console.log("Segundos:", data.getSeconds());

  console.log("Desafio: "+data.getHours()+":"+data.getMinutes()+":"+data.getSeconds()+" "+0+data.getDate()+"/"+ 0+mes+"/"+data.getFullYear())
}

mostrarDataHora();


console.log(Math.PI);


function calcularOperacoes(numero) {
  console.log("Raiz:", Math.sqrt(numero));
  console.log("Arredondado:", Math.round(numero));
  console.log("Para cima:", Math.ceil(numero));
  console.log("Para baixo:", Math.floor(numero));
}

calcularOperacoes(7.8);



function analisarTexto(texto) {
  console.log("Tamanho:", texto.length);
  console.log("Maiúsculo:", texto.toUpperCase());
  console.log("Minúsculo:", texto.toLowerCase());
}

analisarTexto("JavaScript");


function oQueFazEssaFuncao(frase) {
  console.log(frase.includes("JavaScript"));
}

oQueFazEssaFuncao("Eu estudo JavaScript");


function eEssaAqui(nome, curso) {
  return "Aluno: " + nome + " | Curso: " + curso;
}

console.log(eEssaAqui("José", "Front-End"));

