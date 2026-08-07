// CLASSE - MODELO PARA CRIAR OBJETOS
class Carro {

    // MÉTODO QUE DEFINE OS VALORES INICIAIS DO OBJETO
    constructor(marca, modelo, ano, cor) {

        // SIGNIFICA "ESTE OBJETO"; 
        // this.marca: atributo do objeto | marca: valor recebido pelo construtor
        // "A marca deste carro recebe o valor informado."
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;

    }
    //
    ligar() {
        console.log("Carro ligado");
    }
    //
    acelerar() {
        console.log("Acelerando");
    }

    frear() {
        console.log(`${this.modelo} freiou.`);
    }


}

//
const carro1 = new Carro("Volkswagen", "Gol", 2022, "Branco");
console.log("Carro 1: ", carro1);

//
const carro2 = new Carro("Toyota", "Corolla", 2025, "Preto");
console.log("Carro 2: ", carro2);

console.log("--------------------------");
console.log("Atributos do Carro 1: ");
console.log("- ", carro1.marca);
console.log("- ", carro1.modelo);
console.log("- ", carro1.ano);
console.log("- ", carro1.cor);
console.log("--------------------------");

//
carro1.ligar();
//
carro1.acelerar();
//
carro2.frear();