//NULL e UNDEFINED

const a = { name: "a"}
console.log(a); // { name: "a"}

const b = a
console.log(b); // { name: "a"}

b.name = 'Opa'
console.log(b); // { name: "Opa"}

console.log(a); // { name: "Opa"}


let valor; // não inicializada
console.log(valor); // undefined

valor = null // ausência de valor
console.log(valor) // null
//console.log(valor.toString()) // Erro!

const produto = {};
console.log(produto.preco); // undefined
console.log(produto); // {}

produto.preco = 3.50
console.log(produto); // { preco: 3.5 }

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco) // false
delete produto.preco
console.log(produto) // {}

produto.preco = null // sem preço
console.log(!!produto.preco) // false
console.log(produto); // { preco: null }