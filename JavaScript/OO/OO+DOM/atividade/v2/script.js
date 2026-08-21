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
}

class GerenteProduto {
    constructor() {
        this.produtos = [];
    }

    adicionarProduto(produto) {
        produto.aplicarDesconto();
        this.produtos.push(produto);
    }

    exibir() {
        const resultado = document.querySelector("#resultado");

        resultado.innerHTML = "";

        this.produtos.forEach(produto => {

            resultado.innerHTML += `
             <p><strong>Nome:</strong> ${produto.nome}</p>
             <p><strong>Preço:</strong> R$ ${produto.preco.toFixed(2)}</p>
             <p><strong>Categoria:</strong> ${produto.categoria}</p>
             <p><strong>Desconto:</strong> ${produto.desconto} %</p>
             <hr>
         `;
        });
    }
}

const gerenteProduto = new GerenteProduto();
const nome = document.querySelector("#nome");
const preco = document.querySelector("#preco");
const categoria = document.querySelector("#categoria");
const desconto = document.querySelector("#desconto");
const botaoCadastrar = document.querySelector("#botaoCadastrar");

botaoCadastrar.addEventListener("click", function () {

    const produto = new Produto(nome.value, preco.value, categoria.value, desconto.value);
    gerenteProduto.adicionarProduto(produto);
    gerenteProduto.exibir();
    nome.value = "";
    preco.value = "";
    categoria.value = "";
    desconto.value = "";
    nome.focus();

});