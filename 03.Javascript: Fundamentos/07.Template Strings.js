//TEMPLATE STRING

const nome = 'Diego'
const concatenacao = 'Olá'+nome + '!'

const template = `
    Olá
    ${ nome }!`

console.log(concatenacao, template)
/*
 OláDiego! 
    Olá
    Diego!
 */


//Expressões
console.log(`1 + 1 = ${1 + 1}`); // 1 + 1 = 2


//Funcoes
const up = texto => texto.toUpperCase() `Ei... ${up('cuidado')}`; // Ei... CUIDADO
