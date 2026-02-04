//Tudo que vem após barras normais duplas é um comentário em linguagem natural.

/*
    Comentário em blocos
*/

//variáveis é um nome simbólico para um valor.
//As variáveis são declaradas com a palavra-chave var, let ou const:
var x; //Declara uma variável chamada x.
var y; //Declara uma variável chamada y.
const z=0; //COnstante de z é 0
//Valores podem ser atrivúidfos às variáveis com o sinal =
x = 0; //Agora a avariável x tem o valor 0
x // => Uma variável é avaliada com seu valor.
//javaScript aceita vários tipós de valores
x = 1; //Números.
x = 0.01; // Apenas um tipo Numver para inteiros e reais.
x = "Hello world"; //String de texto entre aspas.
x = 'JavaScript'; //Apóstrofos também delimitam strings.
x = true; // Valores booleanos.
x = false; // O outro Valore booleano.
x = null; //Null e um valor especial que sifgnifica "nenhum valor".
x = undefined; //Undefined é como null.


// Javascript tamém aceita arrays (listas indexadas numericamente) de valoreS.
var primes = [2, 3, 5, 7]
primes[0] // => 2: o primeiro elemento (índice 0) do array.
primes.length // => 4: quantidade de elementos no array.
primes[primes.length-1] // => 7: o último elemento do array.
primes[4] // => 9: Adiciona um novo elemento por meio de atribuição.
primes[4] // => 11: Ou altera um elemento existente por meio de atribuição.
var empty = []; // [] é um array vazio, sem qualquer elemento.
empty.length // => 0


//o tipo de dados mais importante de JavaScript é o objeto.
//Um objeto é uma coleção de pares nome/valor ou uma string para mapa de valores.

var book = {//Objetos são colocados entre chaves.
    topic: "JavaScript", //A propriedade de um objeto com . ou []:
    fat: true //A propriedade  "fat" tem o valor true.
}; // A chave marca o fim do objeto.

//Acesse as propriedades de um objeto com . ou []:
book.topic // => "JavaScript"
book["fat"] // => true: outro modo de acessar valores de propriedade.
book.author = "Galileu"; //crie novas propriedades por meio de atribuição.
book.contents = {}; // {} é um objeto vazio sem qualquer propriedade.
