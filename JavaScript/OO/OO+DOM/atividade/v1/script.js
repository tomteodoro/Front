class Produto {
    constructor(nome, preco, categoria, desconto) {
        this.nome = nome;
        this.preco = preco;
        this.categoria = categoria;
        this.desconto = desconto;

    }

    aplicarDesconto() {
        this.preco = this.preco - (this.preco * this.desconto / 100);
    }

    exibir() {

        const resultado = document.querySelector("#resultado");

        resultado.innerHTML = `
             <p><strong>Nome:</strong> ${this.nome}</p>
             <p><strong>Preço:</strong> R$ ${this.preco.toFixed(2)}</p>
             <p><strong>Categoria:</strong> ${this.categoria}</p>
             <p><strong>Desconto:</strong> ${this.desconto} %</p>
         `;
    }
}

const nome = document.querySelector("#nome");
const preco = document.querySelector("#preco");
const categoria = document.querySelector("#categoria");
const desconto = document.querySelector("#desconto");
const botaoCadastrar = document.querySelector("#botaoCadastrar");

botaoCadastrar.addEventListener("click", function () {

    const produto = new Produto(nome.value, preco.value, categoria.value, desconto.value);
    produto.aplicarDesconto();
    localStorage.setItem("produto", JSON.stringify(produto));
    produto.exibir();

});

const dados = localStorage.getItem("produto");

if (dados) {
    const produtoSalvo = JSON.parse(dados);

    const produto = new Produto(produtoSalvo.nome, produtoSalvo.preco, produtoSalvo.categoria, produtoSalvo.desconto);

    produto.exibir();
}