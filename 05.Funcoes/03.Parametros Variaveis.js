//No JavaScript, mesmo que você não tenha declarado os parâmetros na função, é possível passar pela propriedade arguments.


function soma() {
    let soma = 0
    for (i in arguments) {
        soma += arguments[i]
    }
    return soma
}

console.log(soma()) // 0
console.log(soma(1)) // 1
console.log(soma(1.1,2.2,3.3)) // 6.6
console.log(soma(1.1,2.2,"Teste")) // 3.3000000000000003Teste
console.log(soma('a','b','c')) // 0abc