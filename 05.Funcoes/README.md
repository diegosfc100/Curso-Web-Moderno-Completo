# Índice

- [Índice](#índice)
- [Cidadão de Primeira Linha](#cidadão-de-primeira-linha)
- [Parâmetros e Retorno São Opcionais](#parâmetros-e-retorno-são-opcionais)
- [Parâmetros Variáveis](#parâmetros-variáveis)
- [Parâmetro Padrão](#parâmetro-padrão)
- [this pode Variar](#this-pode-variar)
- [this e a Função bind #01](#this-e-a-função-bind-01)
- [this e a Função bind #02](#this-e-a-função-bind-02)
- [Funções Arrow #01](#funções-arrow-01)
- [Funções Arrow #02](#funções-arrow-02)
- [Funções Arrow #03](#funções-arrow-03)
- [Funções Anônimas](#funções-anônimas)
- [Funções Callback #01](#funções-callback-01)
- [Funções Callback #02](#funções-callback-02)
- [Funções Callback #03](#funções-callback-03)
- [Funções Construtoras](#funções-construtoras)
- [Tipos de Declaração](#tipos-de-declaração)
- [Contexto Léxico](#contexto-léxico)
- [Closures](#closures)
- [Função Factory #01](#função-factory-01)
- [Função Factory #02](#função-factory-02)
- [Classe vs Função Factory](#classe-vs-função-factory)
- [Desafio Função Construtora](#desafio-função-construtora)
- [IIFE - Immediately Invoked Function Expression](#iife---immediately-invoked-function-expression)
- [Call & Apply](#call--apply)
- [Comparação entre string e números](#comparação-entre-string-e-números)

# Cidadão de Primeira Linha

[*voltar ao índice*](#índice)

```js
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
```

# Parâmetros e Retorno São Opcionais

[*voltar ao índice*](#índice)

```js
//Parametros e Returns são opcioais.

function area(largura, altura) {
    const area = largura * altura
    if (area >20){
        console.log(`Valor acima do permitido: ${area}m2.`)
    } else {
        return area
    }
}

console.log(area(2,2))// 4

console.log(area(2))// NaN

console.log(area())// NaN

console.log(area(2,3,17,22,44))// 6

console.log(area(5,5))// Valor acima do permitido: 25m2.
// undefined
```