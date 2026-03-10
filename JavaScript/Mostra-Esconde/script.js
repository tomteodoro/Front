let senha = document.querySelector('#senha')
let botaoSenha = document.querySelector('#botaoSenha')

botaoSenha.addEventListener("click", function () {
    if (senha.type === 'password') {
        senha.setAttribute('type', 'text')
        botaoSenha.classList.replace('bi-eye-fill', 'bi-eye-slash-fill')
    } else {
        senha.setAttribute('type', 'password')
        botaoSenha.classList.replace('bi-eye-slash-fill', 'bi-eye-fill')
    }
});