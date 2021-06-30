// Função em JS é First-Class Object (Citizens)
// Higher-order function

// Criar de forma literal
function fun(){
    // função sem 'return' retorna 'undefined'
}


// Armazenar função em uma variável
const fun2 = function() { // Função anonima ; Para invocar a função deve colocar os ( )

} 


//Armazenar função em um array
const array = [function (a,b){ return a + b }, fun1, fun2]
console.log(array[0](2,3)) // chamando a função.


//Armazenar função em um atributo de objeto
const obj = {}
obj.falar = function() {return 'Opa'}
console.log(obj.falar()) // Opa


//Passar função como parametro
function run(fun) {
    fun()
} 

run(function() {console.log('Execurando...')})


//Uma função pode retornar/conter uma função
function soma(a,b) {
    return function(c) {
        console.log(a + b +c)
    }
}