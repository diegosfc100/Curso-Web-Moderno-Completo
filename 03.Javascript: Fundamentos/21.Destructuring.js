//DESTRUCTURING {}
// Desestruturação, uma forma de estrair atributos, elementos e etc.
// novo recurso do ES2015

//Destructuring em Objeto:

const pessoa = {
  nome: 'Ana',
  idade: 5,
  endereço: {
    logradouro: 'Rua ABC',
    numero: 1000
  }
}
    //{oq extrair} = de onde extrair;
const {nome,idade} = pessoa
console.log(nome, idade); // Ana 5

const {nome: n,idade: i} = pessoa // variavel 'n' vai receber o valor de 'nome', e 'i' recebe o valor de 'idade'.
console.log(n,i); // Ana 5

const {sobrenome,bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada); // undefined true

const { endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep); // RUA ABC 1000 undefined

/* const {conta: {ag, numero}} = pessoa  // Erro ao tentar acssar objeto/propriedade que nao existe.
console.log(ag, numero); // ERRO
 */


//Destructuring em Array:

const [a] = [10]
console.log(a); // 10

const [n1, , n3,n5,n6 = 0] = [10,7,9,8]
console.log(n1,n3,n5,n6); // 10 9 undefined 0

const [,[,nota]] = [[,8,8],[9,6,8]]
console.log(nota); // 6

