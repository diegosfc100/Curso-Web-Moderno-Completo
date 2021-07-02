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
- [Funções Anônimas](#funções-anônimas)
- [Funções Callback](#funções-callback)
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

# Parâmetros Variáveis

[*voltar ao índice*](#índice)

```js
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
```

# Parâmetro Padrão

[*voltar ao índice*](#índice)
```js
//Parâmetros Padrão

//Estratégia 1 para gerar valor padrão
function soma1(a,b,c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1(), soma1(3), soma1(1,2,3), soma1(0,0,0))// 3 5 6 3
// 0 retorna o valor 'false', nessa função '1' tem valor de false.
// Forma perigosa de se utilizar quando algum dos argumentos for 0


//Estratégia 2, 3 e 4 para gerar valor padrão
function soma2(a,b,c){
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c // forma mais segura dentre as 3
    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1,2,3), soma2(0,0,0)) // 3 5 6 0


//Valor padrão do ES2015
function soma3(a = 1, b = 1, c = 1){
    return a + b + c
}

console.log(soma3(),soma3(3), soma3(1,2,3), soma3(0,0,0)) // 3 5 6 0
```

# This
[*voltar ao índice*](#índice)
```js
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
```

# this e a Função bind #01

[*voltar ao índice*](#índice)
```js

//This e a função Bind.

const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar() // Bom dia!


const falar = pessoa.falar // conflito entre paradigmas: funcional e OO
falar() // undefined


//Bind - método responsável por amarrar um determinado objeto para ele ser o dono da execução daquele método sempre q chamado.
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()
// Bom dia

const falar2 = pessoa.falar
falar2() 
// undefined
```

# this e a Função bind #02

[*voltar ao índice*](#índice)

```js
//This e Bind part.II

function Pessoa() {
    this.idade = 0
    
    setInterval(function(){
        this.idade++
        console.log(this.idade)
    }, (1000)) // a cada 1000 mlsg
}

new Pessoa// NaN   

// -------------------------------------------------------------

function Pessoa2() {
    this.idade = 0
    
    setInterval(function(){
        this.idade++
        console.log(this.idade)
    }.bind(this), (1000)) 
}

new Pessoa2 // 0 // 1 // 2 ...
// a cada 1000 mlsg soma 1 na idade

// -------------------------------------------------------------

function Pessoa3 () {
    this.idade = 0
    
    const self = this // armazenando o this numa constante significa q ela não vai mudar nunca.
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }, (1000))
}

new Pessoa3 // 0 // 1 // 2 ...
// a cada 1000 mlsg soma 1 na idade
```

# Funções Arrow

[*voltar ao índice*](#índice)

```js

//Arrow Function
//Tem a snitaxe mais reduzida e o this é sempre associado ao contexto na qual a função foi escrita.


let dobro = function(a) {
    return 2 * a
}

//sobrescrevendo a fnção dobro com arrow
dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // quando a função tiver apenas 1 param. não é necessário () 
// return implícito em função q faz apenas 1 trabalho


let ola = () => 'Olá'

ola = _ => 'Olá' // possui parametro


//sobre This
function Pessoa () {
    this.idade = 0
    
    setInterval(() => { //arrow function literal dentro de setInterval
        this.idade++
        console.log(this.idade)
    }, (1000))
}

new Pessoa


//sobre Bind e This
let comparaComThis = function (param) {
    console.log(this === param)
}

console.log(comparaComThis(global))


const obj2 = {}
comparaComThis = comparaComThis.bind(obj2)

comparaComThis(global)
comparaComThis(obj2)


// A arrow function mantém o this imutável, nem com o bind é possível mudar
let comparaComThisArrow = param => console.log(this === param)

comparaComThisArrow(global)
comparaComThisArrow(module.exports)


const obj = {}
comparaComThis = comparaComThis.bind(obj)

comparaComThis(obj)
comparaComThis(module.exports)
```

# Funções Anônimas

[*voltar ao índice*](#índice)
```js
//FUNÇÕES ANONIMAS
//É uma função que não possui nome

//função anonima armazenada numa constante
const soma = function(x,y) {
    return x + y;
}


const imprimirResultado = function (a,b, operacao = soma) {
    console.log(operacao(a,b))
}

imprimirResultado(3,4) // 7
imprimirResultado(3,4,soma) // 7

imprimirResultado(3,4,function(x,y){ //passando uma função anonima como parametro de uma função
    return x - y
}) // -1

//passando uma função arrow como parametro de uma função
imprimirResultado(3,4,(x,y) => x * y) // 12
```

# Funções Callback

[*voltar ao índice*](#índice)
```js
// Callback é uma função passada por parâmetro que é chamada quando algum determinado evento ocorrer
//Part I
const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir (nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricante.forEach(imprimir)
// 1. Mercedes
// 2. Audi
// 3. Bmw

fabricante.forEach(fabricante => console.log(fabricante))
// Mercedes
// Audi
// Bmw



//Part II
const notas =[7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//Sem callback
let notasBaixas = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas) // [ 6.5, 5.2, 3.6 ]


//Com callback
notasBaixas2 = notas.filter(function(nota) {
    return nota < 7
})
console.log(notasBaixas2) // [ 6.5, 5.2, 3.6 ]

const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas2) // [ 6.5, 5.2, 3.6 ]

   

//Part III
//Exemplo de callback no browser

document.getElementsByTagName('body')[0].onclick = function(e) {
    console.log('Evento ocorreu!')
}

// Se clicar no body imprimi no console: 
// Evento ocorreu!
```

# Funções Construtoras

[*voltar ao índice*](#índice)

```js

//Funções Construtoras tem haver com paradigma OO.

function Carro(velocidadeMaxima = 200, delta = 5) {
    // atributo privado
    let velocidadeAtual = 0

    //metodo publico
    this.acelerar = () => {
        if (velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    // metodo publico
    this.getVelocidadeAtual = () => {
        return velocidadeAtual
    }
}

const uno = new Carro()

uno.acelerar() // 5

console.log(uno.getVelocidadeAtual())
```

# Tipos de Declaração

[*voltar ao índice*](#índice)
```js

// Somente a function declaration consegue ser executado antes da declaração

//Function declaration
function soma(x,y) {
    return x + y
}

//Function expression
const sub = function(x,y) {
    return x - y
}

//Named function expression
const mult = function mult(x,y) {
    return x * y
}
```

# Contexto Léxico

[*voltar ao índice*](#indice)

```js

//Contexto Léxico

const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao() // a função carrega consigo o local onde foi definida.
}

exec()
// Global
```
# Closures

[*voltar ao índice*](#índice)
```js
// Closure é o escopo criado quando uma função é declarada
// Esse escopo permite a função acessar e manipular variáveis externas a função

//Contexto léxico em ação!
const x= 'Global'

function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao()) // Local

```

# Função Factory #01

[*voltar ao índice*](#índice)
```js
//FUNÇÃO FACTORY
//Factory simples:

function criarPessoa(){
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa()) // { nome: 'Ana', sobrenome: 'Silva' }


//Part II
function criarProduto(nome, preco, desconto = 0){
    return {
        nome,
        preco,
        desconto
    }
}

console.log(criarProduto('Notebook',2199.49)) // { nome: 'Notebook', preco: 2199.49, desconto: 0 }

console.log(criarProduto('iPad',1199.49, 0.1)) // { nome: 'iPad', preco: 1199.49, desconto: 0.1 }
```