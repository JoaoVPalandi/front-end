export class Carro {
    constructor(nome, ano){
        this.nome = nome;
        this.ano = ano;
    }
    idade(){
        const date = new Date();
        return date.getFullYear() - this.ano;
    }
    
}

const meuCarro =  new Carro('Opala', 1972);
const carroDoPradela = new Carro('Palho', 2003);
console.log('O carro do Predela é um ' + carroDoPradela.nome + ' e tem ' + carroDoPradela.idade() + ' anos de idade.')

console.log(meuCarro.nome);
console.log('A idade do meu carro é: ' + meuCarro.idade())
