// BROWSER vs NODE

//Browser:

window // objeto global que reprensenta o escopo global dentro de uma aplicação js rodando no browser.
// Window {0: global, window: Window, self: Window, document: document, name: "", location: Location, …}

this // outra forma de acessar no contexto global o objeto window. 
// Window {0: global, window: Window, self: Window, document: document, name: "", location: Location, …}

this === window // true 

var a = 'Texto'

window.a // 'Texto'

var a = 123

window.a // 123

this.a // 123

let b = 123

window.b // undefined ~> 'b' não está no contexto global apesar de ser uma variável global, porém não irá p/ o objeto window.
this.b // undefined

let b = 123 // ERRO ~> não é possivel re-declarar.

const c = 456

window.c // undefined ~> mesma coisa do let.


function f1() {return this===window}

f1() // true

window.f1() // true
this.f1() // true

const f2 = () => console.log(this === window)

f2() // true

this.f2() // ERRO
window.f2() // ERRO


//Node:

let a = 3

console.log(a) // 3

console.log(global.a) // undefined
console.log(this.a) // undefined

global.b = 123
this.c = 456

console.log(global.b) // 132
console.log(this.c) // 456


console.log(module.exports.c) // 456 ~> dentro de node cada arquivo é um modulo.

console.log(module.exports === this) // true

console.log(module.exports) // { c: 456 }

module.exports = { e: 456, f: false, g: 'teste'}