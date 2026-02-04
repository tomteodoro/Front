console.log("*************************** ATIVIDADE-FUNÇÕES ***************************");

function numeros(n1,n2){
    let soma = n1 + n2;
    let media = soma / 2;

    console.log("Soma: ", soma);
    console.log("Média: ", media);
}

function mexendoComString(nome){
    console.log("O nome " + nome + " tem " + nome.length + " caracteres.");
    console.log("Nome todo maiúsculo: " + nome.toUpperCase());
    if (nome.toUpperCase().includes("HTML")) {
        console.log("Contem");
    } else {
        console.log("Não contem");
    }

}

let numero1 = Number(prompt("Digite o número 1: "));
let numero2 = Number(prompt("Digite o número 2: "));

numeros(numero1,numero2);

let nome = prompt("Digite o seu nome: ");

mexendoComString(nome);