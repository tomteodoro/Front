let nome = "Caminhão";
let anoAtual = 2090;

console.log("Bem vindo ao " + nome); //Mensagem simples
console.log("Bem vindo ao ", anoAtual); //Com vírgula

console.error("Este é um erro!") //Exibe erros no console em vermelho

console.warn("Considere isso um aviso! ") //Exibe avisos no console em amarelo


// Mostra dados tabulados:
const dados = [
    { nome: "Ana", idade: 18},
    { nome: "José", idade: 17},
    { nome: "Camila", idade: 18},
    ];
    console.table(dados)

//Agrupa mensagens:

console.group("Grupo de mensagens");
console.log("Mensagem 1");
console.log("Mensagem 2");
console.groupEnd();

console.write(dados);