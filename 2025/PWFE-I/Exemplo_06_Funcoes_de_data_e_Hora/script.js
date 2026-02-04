// **1.2. Funções**
// **1.2.1 Funções de data e Hora**

function exibirDataHora(){
    const dataAtual = new Date();

    console.log("Data atual: ", dataAtual.toLocaleDateString());
    console.log("Hora atual: ", dataAtual.toLocaleTimeString());

//

    document.write("Data atual: ", dataAtual.toLocaleDateString());
    document.write("Hora atual: ", dataAtual.toLocaleTimeString());
    
}


exibirDataHora();