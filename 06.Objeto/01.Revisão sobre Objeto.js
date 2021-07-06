//OBJETO

//Principios importantes:
//1. Abstração
//2. Encapsulamento
//3. Herança (prototype)
//4. Polimorfismo


const produto = new Object
produto.nome = 'Cadeira';
produto['marca do produto'] = 'Generica';
produto.preco = 220;

console.log(produto)

//Deletando
delete produto.preco;
delete produto['marca do produto'];
console.log(produto);


const carro = {
    modelo: 'Polo',
    valor: 30000,
    proprietario: {
        nome: 'Diego',
        idade: 30,
        endereco: {
            logradouro: 'Rua Diva Ines',
            numero: 31
        }
    },
    condutores: [{
        nome: 'Andreia',
        idade: 31
    }, {
        nome:'Joyce',
        idade: 13
    }],
    calcularSeguro: function() {
        // ...
    }
}

//Alterando valores dos atributos
carro.condutores[1].idade = 15  //alterando com '.'
carro['proprietario']['endereco']['logradouro'] = 'Av Paulista' //alterando com 'stings'

console.log(carro)