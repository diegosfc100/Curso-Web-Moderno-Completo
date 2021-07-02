//Funções Construtoras tem haver com paradigma OO.

function Carro(velocidadeMaxima = 200, delta = 5) {
    // atributo privado
    let velocidadeAtual = 0

    //metodo publico
    this.acelerar = () => {
        if (velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    // metodo publico
    this.getVelocidadeAtual = () => {
        return velocidadeAtual
    }
}

const uno = new Carro()

uno.acelerar() // 5

console.log(uno.getVelocidadeAtual())