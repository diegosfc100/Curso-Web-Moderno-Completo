//HOISTING
//Iça a variável para o topo do escopo. 
//Não funciona com let.

console.log('a =', a);// // a = undefined

var a = 2
console.log('a =', a); // a = 2


console.log('b =', b); // ReferenceError: b is not defined
let b = 2
console.log('b =', b)