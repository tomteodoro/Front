// E-MAIL
let email = document.querySelector("#email");
let validar = document.querySelector("#validar");
let mensagem = document.querySelector("#mensagem");

validar.addEventListener("click", function () {

    if (!email.value.includes("@") || !email.value.includes(".")) {
        mensagem.textContent = "E-mail inválido.";
        mensagem.style.color = "red";
    } else {
        mensagem.textContent = "E-mail válido!";
        mensagem.style.color = "green";
    }

});

// SENHA
let senha = document.querySelector("#senha");
let feedback = document.querySelector("#feedback");

senha.addEventListener("keyup", function () {

    if (senha.value.length < 6) {
        feedback.textContent = "Senha fraca";
        feedback.style.color = "red";
    } else if (senha.value.length >= 6 && senha.value.length < 10) {
        feedback.textContent = "Senha aceitável";
        feedback.style.color = "orange";
    } else {
        feedback.textContent = "Senha forte";
        feedback.style.color = "green";
    }

});