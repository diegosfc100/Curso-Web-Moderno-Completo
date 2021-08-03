// Array em JS é um objeto.

console.log(typeof Array, typeof new Array(), typeof []);
// function, object, object

let aprovados = new Array('Bia', 'Carlos', 'Ana');
console.log(aprovados);
// [ 'Bia', 'Carlos', 'Ana' ]

aprovados = ['Bia', 'Carlos', 'Ana'];
console.log(aprovados[0]);
// Bia
console.log(aprovados[1]);
// Carlos
console.log(aprovados[2]);
// Ana
console.log(aprovados[3]);
// undefined

aprovados[3] = 'Paulo'; // Adicionando valor no array, tbm é possível substituir um valor no indice escolhido.

aprovados.push('Abia'); // Adicionando valor no final do array.

console.log(aprovados.length);
// 5

aprovados[9] = 'Rafael'; // Valores inexistentes antes do indice 9 sao undefined.
console.log(aprovados.length);
// 10

console.log(aprovados[8] === undefined);
// true

console.log(aprovados);
// [ 'Bia', 'Carlos', 'Ana', 'Paulo', 'Abia', <4 empty items>, 'Rafael' ]

aprovados.sort(); 
console.log(aprovados);
// [ 'Abia', 'Ana', 'Bia', 'Carlos', 'Paulo', 'Rafael', <4 empty items> ]

delete aprovados[1];
console.log(aprovados[1]);
// undefined

console.log(aprovados[2]);
// Bia

aprovados = ['Bia', 'Carlos', 'Ana'];
aprovados.splice(1, 1, 'Elemento1', 'Elemento2');
console.log(aprovados);
// [ 'Bia', 'Elemento1', 'Elemento2', 'Ana' ]