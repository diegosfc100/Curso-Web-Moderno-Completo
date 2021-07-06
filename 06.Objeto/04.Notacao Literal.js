const nome = 'Diego'
const idade = 31
const peso = 70
const colchao = 'Probel'
const preco = 5000.00

const personObj = { nome, idade, peso}
console.log(personObj)// { nome: 'Diego', idade: 31, peso: 70 }


const obj2 = {}
obj2[colchao] = preco
console.log(obj2) // { Probel: 5000 }


const obj3 = {[colchao]: preco}
console.log(obj3) // { Probel: 5000 }


//função dentro de objeto
const obj4 = {
    funçãoExemple(){ //forma reduzida de se escrever, add no ES6.
        // ...
    }
}

console.log(obj4)