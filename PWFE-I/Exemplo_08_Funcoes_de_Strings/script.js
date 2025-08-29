// **1.2.3 Funções de Strings**

function manipulacaoString(){
    let texto = "Curso Dev. SENAI - JavaScript";
    console.log("Tamanho da string: ", texto.length);
    console.log("Texto em maiúsculo: ", texto.toLocaleUpperCase());
    console.log("Texto em minúsculo: ", texto.toLocaleLowerCase());
    console.log("Posição da palavra 'SENAI': ", texto.indexOf("SENAI"));
    console.log("Substituir S po P: ", texto.replace("S", "P"));

    //

    document.write("Tamanho da string: ", texto.length);
    document.write("Texto em maiúsculo: ", texto.toLocaleUpperCase());
    document.write("Texto em minúsculo: ", texto.toLocaleLowerCase());
    document.write("Posição da palavra 'SENAI': ", texto.indexOf("SENAI"));
    document.write("Substituir S po P: ", texto.replace("S", "P"));
}

manipulacaoString();