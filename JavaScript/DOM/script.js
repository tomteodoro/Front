let botao = document.getElementById("botao");

botao.addEventListener("click", function() {
//   document.getElementById("mensagem").textContent = "Texto simples, sem HTML.";
// //   document.getElementById("caixa").style.backgroundColor = "lightblue";



let item = document.getElementById("item1");
document.getElementById("lista").removeChild(item);



});

let novoItem = document.createElement("li");
novoItem.textContent = "Item novo";
document.getElementById("lista").appendChild(novoItem);



