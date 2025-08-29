document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll(".buttons button");

    let valor_atual = ""; //Valor que está no campo input atualmente
    let operador = ""; //valor do operador selecionado
    let valor_antigo = ""; //Ultimo valor adicionado

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const value = this.textContent;

            if (value >= "0" && value <= "9" || value === ".") {
                valor_atual += value;
                display.value = valor_antigo + " " + operador + " " + valor_atual;  // Mostra os valores digitados com o operador
            } 
            
            else if (value === "AC") {
                valor_atual = "";
                valor_antigo = "";
                operador = "";
                display.value = "";
            } 
            
            else if (value === "=") {
                if (valor_antigo && operador && valor_atual) {
                    valor_atual = calculate(valor_antigo, operador, valor_atual);
                    display.value = valor_atual;
                    valor_antigo = "";
                    operador = "";
                }
            } 
            
            else {
                
                if (valor_atual === "") return;
                
                if (valor_antigo !== "") {
                    valor_antigo = calculate(valor_antigo, operador, valor_atual);
                    operador = value;
                    display.value = valor_antigo + " " + operador;  // Exibe o valor calculado junto com o operador
                }
                
                else {
                    valor_antigo = valor_atual;
                    display.value = valor_antigo + " " + value;  // Exibe o valor digitado + operador
                }

                operador = value;  // Atualiza o operador
                valor_atual = "";  // Limpa o valor atual
            }
        });
    });

function calculate(num1, op, num2) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    switch (op) {
        case "+": return (num1 + num2).toString();
        case "−": return (num1 - num2).toString();
        case "×": return (num1 * num2).toString();
        case "÷": return num2 !== 0 ? (num1 / num2).toString() : "Erro";
        default: return "";
    }
}

});