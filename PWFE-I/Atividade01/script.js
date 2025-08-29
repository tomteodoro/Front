function lerDados(){

    const a = parseInt(document.getElementById("a").value);
    const b = parseInt(document.getElementById("b").value);

    document.write('<h1>Resultado</h1>')
    document.write(`<p>Soma: ${a + b}</p>`);    
    document.write(`<p>Subtração: ${a - b}</p>`);   
    document.write(`<p>Multiplicação: ${a * b}</p>`);   
    document.write(`<p>Divisão: ${a / b}</p>`);         
    document.write(`<p>Módulo: ${a % b}</p>`);          
    document.write(`<p>Exponenciação: ${a ** b}</p>`);  
}