class Carro{ 
    constructor(nome){
        this.nome = nome;
    }
    static alo(){
        return "Aló!";
    }
}

const meuCarro = new Carro('Porsche');

console.log(Carro.alo());