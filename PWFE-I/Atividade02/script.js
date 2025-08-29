function inverter(){

    const x = document.getElementById("frase").value;

    invertido = x.split("").reverse().join("");

    document.getElementById("resultado").innerHTML = 
        `<p>Frase invertida: ${invertido}`;
}