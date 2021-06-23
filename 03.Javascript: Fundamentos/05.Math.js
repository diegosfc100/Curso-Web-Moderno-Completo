// MATH
    // Math é um objeto embutido que possui propriedades e métodos para constantes e funções matemáticas.
    // Não é um objeto de função. 
    // Math funciona com o tipo Number. Não funciona com BigInt.
    typeof Math // object


//Propriedades Estáticas:

Math.PI // aproximadamente 3,14159


//Métodos estáticos:

Math.abs();
/*Retorna o valor absoluto de um número. Ou seja, ele retorna x se x for positivo ou zero,
e a negação de x se x for negativo. */
Math.abs('-1'); // 1
Math.abs(-2); // 2
Math.abs(10); // 10

//Exemplo:
const difference = (a, b) => Math.abs(a - b);

difference(3, 5) // 2
difference(5, 3) // 2


/*--------------------------------------------------------*/
Math.ceil();
//Sempre arredonda um número até o próximo maior inteiro.

Math.ceil(.95); // 1
Math.ceil(7.204) // 8
Math.ceil(-0.95); // -0
Math.ceil(-7.004); // -7


/*--------------------------------------------------------*/
Math.floor();
//Retorna o maior inteiro menor ou igual a um determinado número.
// Ao contrario de Math.cei()

Math.floor( 45.95); // 45
Math.floor( 7.001); // 7
Math.floor(-45.2); // -46


/*--------------------------------------------------------*/
Math.max();
//Retorna o maior de zero ou mais números dados como parâmetros de entrada.
//NaN se algum parâmetro não for um número e não puder ser convertido em um.

Math.max(22,3,15,2,27,4); // 27
Math.max(-1, -3, -2); // -1

const array1 = [10,20,55,9,17];
Math.max(...array1); // 55


/*--------------------------------------------------------*/
Math.min();
//Retorna o número de menor valor passado para ela.
//NaN se algum parâmetro não for um número e não puder ser convertido em um.

Math.min(22,3,15,2,27,4); // 2
Math.min(-1, -3, -2); // -3

const array2 = [10,20,55,9,17];
Math.min(...array1); // 9


/*--------------------------------------------------------*/
Math.pow(x, y)
//Retorna a base para a potência do expoente.

Math.pow(7, 2); // 49
Math.pow(5, 2); // 25


/*--------------------------------------------------------*/
Math.randon();
//Retorna um número pseudoaleatório entre 0 e 1.
//Exemplo:

const getRandomInt = max => Math.floor(Math.random() * max);
  
getRandomInt(2); // 0 ou 1


/*--------------------------------------------------------*/
Math.round();
//Retorna o valor de um número arredondado para o inteiro mais próximo.

Math.round(20.49); // 20
Math.round(20.5); // 21
Math.round(20.4); // 20
Math.round(-20.5 ); // -20
Math.round(-20.51); // -21


/*--------------------------------------------------------*/
Math.sign();
//Retorna um positivo ou negativo +/- 1, indicando o sinal de um número passado para o argumento.
//Se o número passado para Math.sign () for 0, ele retornará um +/- 0. 
//Observe que se o número for positivo, um (+) explícito não será retornado.

Math.sign(3); // 1
Math.sign(-3); // -1
Math.sign('-3'); // -1
Math.sign(0); // 0
Math.sign(-0); // -0
Math.sign(NaN); // NaN
Math.sign('foo'); // NaN
Math.sign(); // NaN


