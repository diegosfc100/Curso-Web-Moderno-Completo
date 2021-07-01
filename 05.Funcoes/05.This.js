//Browser:

function f1(){console.log(this === window)} // o This aponta para o objeto global do browser

f1() // true

document.getElementsByTagName('body')[0].onclick = f1 // ao clicar no body o retorno será 'false'
// o this varia de acordo com a forma q a função é chamada.

function f2() {console.log(this === document)}

f2() // false

const body = document.getElementsByTagName('body')[0]

function f2() { console.log(this === body)}

document.getElementsByTagName('body')[0].onclick = f2 // true


//Em uma função arrow o this não varia nunca.
const f3 = () => console.log(this === window)

> f3() // true

document.getElementsByTagName('body')[0].onclick = f3 // true

> f3() // true
