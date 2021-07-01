//This e a função Bind.

const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar() // Bom dia!


const falar = pessoa.falar // conflito entre paradigmas: funcional e OO
falar() // undefined


//Bind - método responsável por amarrar um determinado objeto para ele ser o dono da execução daquele método sempre q chamado.
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()
// Bom dia

const falar2 = pessoa.falar
falar2() 
// undefined