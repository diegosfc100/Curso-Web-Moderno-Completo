// FUNÇÔES
// Quase TUDO é função.
typeof Object; // function

class Produto {};
typeof Produto; // function


// Funcao sem retorno
function imprimirSoma(a, b){
    console.log(a + b);
  }
  
  imprimirSoma(2,3); // 5
  imprimirSoma(); // NaN
  imprimirSoma(2); // NaN
  imprimirSoma(2,3,4,5,6,7,8,9); // 5
  

// Funcao com retorno
  function soma(a, b = 0) { // 'b' tem como padrão o valor 0 caso nenhuma valor seja passado para ele.
    return a + b;
  }
  
  console.log(soma(2,3)); // 5
  console.log(soma(2)); // 2


// Armazenando uma função em uma variável
// funcção anonima é uma função sem nome.
const imprimirSoma = function(a,b) {
    console.log(a + b)
  }

imprimirSoma(2,3); //5

  
// Armazenando uma função arrow em uma variável
  const soma = (a,b) => {
    return a+b;
  }
  console.log(soma(2,3)); //5
  
//retorno implícito
  const subtracao = (a,b) => a - b;

  console.log(subtracao(2,3)) // -1
  
//Função com apenas 1 parâmetro
  const imprimir2 = a => a; // Caso a função tenha apenas um parâmetro, é opcional usar parenteses.

  imprimir2('legal'); // 'legal'
