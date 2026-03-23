// E-MAIL
let email = document.querySelector("#email");
let msgEmail = document.querySelector("#msgEmail");

// SENHA
let senha = document.querySelector("#senha");
let msgSenha = document.querySelector("#msgSenha");
let forcaSenha = "";

// VALIDAR e ENVIO
let validar = document.querySelector("#validar");
let msgEnvio = document.querySelector("#msgEnvio");

senha.addEventListener("keyup", function () {

    if (senha.value.length < 6) {
        msgSenha.textContent = "Senha fraca...";
        msgSenha.style.color = "red";
        forcaSenha = "fraca";
    } else if (senha.value.length <= 10) {
        msgSenha.textContent = "Senha aceitável.";
        msgSenha.style.color = "orange";
        forcaSenha = "aceitavel";
    } else {
        msgSenha.textContent = "Senha forte!";
        msgSenha.style.color = "green";
        forcaSenha = "forte";
    }

});

validar.addEventListener("click", function () {

    msgEnvio.textContent = "";

    if (!email.value.includes("@") || !email.value.includes(".")) {
        msgEmail.textContent = "E-mail inválido. Exemplo: texto@email.com";
        msgEmail.style.color = "red";
        return;
    } else {
        msgEmail.textContent = "E-mail válido!";
        msgEmail.style.color = "green";
    }

    if (senha.value === "") {
        msgSenha.textContent = "Preencha esse campo.";
        msgSenha.style.color = "red";
        return;
    } else if (forcaSenha === "aceitavel" || forcaSenha === "forte") {
        msgEnvio.textContent = "E-mail e senha validados com sucesso!";
        msgEnvio.style.color = "green";
        email.value = "";
        msgEmail.textContent = "";
        senha.value = "";
        msgSenha.textContent = "";
    }

});