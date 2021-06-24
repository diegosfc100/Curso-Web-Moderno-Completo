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


//Destructuring em Funções:

function rand({min = 0, max = 1000}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
  }
  
  const obj = {max: 50, min: 40}

  console.log(rand(obj)); // 40 - 50  
  console.log(rand({min: 955})); // 0 - 1000
  console.log(rand({})); // 0 - 1000
  console.log(rand()); // ERRO 


  function rand([min = 0, max = 1000]){
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
  }
  
  console.log(rand([50,40]))
  // 40 - 50
  console.log(rand([992]))
  // 0 - 922
  console.log(rand([, 10]))
  // 0 - 10
  console.log(rand([]))
  // 0 - 1000
  console.log(rand())
  // ERRO 
