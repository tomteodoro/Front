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
        this.recuperarProdutos();
    }

    adicionarProduto(produto) {
        produto.aplicarDesconto();
        this.produtos.push(produto);
        this.salvarProdutos();
    }

    excluirProduto(indice) {
        this.produtos.splice(indice, 1);
        this.salvarProdutos();
        this.exibir();
    }

    salvarProdutos() {
        // if (this.produtos.length === 0) {
        //     localStorage.removeItem("produtos");
        //     return;
        // }
        localStorage.setItem(
            "produtos",
            JSON.stringify(this.produtos)
        );
    }

    recuperarProdutos() {
        const dados = localStorage.getItem("produtos");

        if (dados) {
            const produtoSalvos = JSON.parse(dados);
            this.produtos = produtoSalvos;
        }
    }

    exibir() {
        const resultado = document.querySelector("#resultado");

        resultado.innerHTML = "";

        this.produtos.forEach((produto, indice) => {

            resultado.innerHTML += `
             <p><strong>Nome:</strong> ${produto.nome}</p>
             <p><strong>Preço:</strong> R$ ${produto.preco.toFixed(2)}</p>
             <p><strong>Categoria:</strong> ${produto.categoria}</p>
             <p><strong>Desconto:</strong> ${produto.desconto} %</p>
             <button onclick="gerenteProduto.excluirProduto(${indice})">Excluir</button>
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

gerenteProduto.exibir();