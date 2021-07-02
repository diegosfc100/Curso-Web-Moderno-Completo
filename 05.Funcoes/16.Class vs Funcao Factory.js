// CLASS vs FUNÇÃO FACTORY
// Class é uma forma diferente de construir função.
//Dentro do browser na forma class, o this aponta pra window, então perde a propriedade nome

class Pessoa {
    constructor(nome) {
        this.nome = nome
    }
    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}
const p1 = new Pessoa('João')

p1.falar() // Meu nome é joão - 
//node


document.getElementsByTagName('body')[0].onclick = p1.falar()
// Meu nome é undefined  
// Browser


//Já com uma função factory, a propriedade continua
const pessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}


const p2 = new Pessoa('João')

p2.falar()
// Meu nome é João   - node

document.getElementsByTagName('body')[0].onclick = p2.falar()
// Meu nome é João  -  Browser