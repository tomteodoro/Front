function tempohora(){
    let dataAtual = new Date();
    data = dataAtual.toLocaleDateString();
    hora = dataAtual.toLocaleTimeString();
    document.getElementById("tempo").innerHTML = `${data} ${hora}`;
}
setInterval(tempohora,1000);