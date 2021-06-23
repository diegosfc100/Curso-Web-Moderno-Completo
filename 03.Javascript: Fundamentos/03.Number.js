// NUMBER

const peso1 = 1.0; // 1
Number.isInteger(peso1); // true  ~>Number.isInteger retorna true caso valor seja inteiro.

const peso2 = 2.1; // 2.1
Number.isInteger(peso2) // false

let peso3 = Number('2.0') // 2  ~>Number transforma uma String em Número.
peso3 = Number('2.1'); // 2.1

const peso4 = '3.0'; // '3.0'
Number.isInteger(peso4) // false

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2) // 7.8387419354838705

media.toFixed(2) // 7.84  ~>O método toFixed() formata um número usando a notação de ponto fixo. 

media.toString() // "7.8387419354838705"  ~>O método toString() retorna uma string que representa o objeto Number especificado.

media.toString(2) // "111.110101101011011111001010100111101010111111011101"  ~>Retorna o valor convertido para binário.