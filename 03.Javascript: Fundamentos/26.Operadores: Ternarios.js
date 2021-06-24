//OPERADOR TERNÁRIO
// Unário = 1 operando // Binário = 2 operandos // Ternário = 3 operandos

condição ? se_verdadeiro : se_falso

// ? operador ternário se verdadeiro
// : operador ternário se falso

const resultado = nota =>  nota >= 7 ? 'Aprovado' : 'Reprovado'

console.log(resultado(7.1)); // Aprovado

console.log(resultado(6.1)); // Reprovado