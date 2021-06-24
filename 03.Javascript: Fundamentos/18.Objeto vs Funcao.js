//Ao criar um objeto gera uma função, ao instanciar o objeto, gera um objeto.

typeof Object; // function
typeof new Object; // object

const Cliente = function() {}
console.log(typeof Cliente); // function

console.log(typeof new Cliente); // object

class Produto {} // ES 2015 (ES6)
console.log(typeof Produto); // function

console.log(typeof new Produto()); // object