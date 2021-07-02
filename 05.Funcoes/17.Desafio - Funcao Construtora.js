//Transformar a classe do tópico passado em função construtora

function Pessoa(nome) {
        this.nome = nome
    this.falar= function () {
        console.log(`Meu nome é ${this.nome}`)
    }
}
const p1 = new Pessoa('João')

p1.falar() // Meu nome é joão   - node