# Javascript: Fundamentos

## Índice

- [Índice](#índice)
- [Comentários de Códigos](#comentários-de-códigos)
- [O Básico de Var , Let e Const](#o-básico-de-var--let-e-const)
- [Tipagem Fraca](#tipagem-fraca)
- [Tipos em JavaScript: Number](#tipos-em-javascript-number)
- [Number: Alguns Cuidados](#number-alguns-cuidados)
- [Usando Math](#usando-math)
- [Tipos em JavaScript: Strings](#tipos-em-javascript-strings)
- [Usando Template Strings](#usando-template-strings)
- [Tipos em JavaScript: Boolean](#tipos-em-javascript-boolean)
- [Tipos em JavaScript: Array](#tipos-em-javascript-array)
- [Tipos em JavaScript: Object](#tipos-em-javascript-object)
- [Entendendo o Null & Undefined](#entendendo-o-null--undefined)
- [Exemplos Básicos de Funções](#exemplos-básicos-de-funções)
- [Declaração de Variáveis Com Var](#declaração-de-variáveis-com-var)
- [Declaração de Variáveis Com Let](#declaração-de-variáveis-com-let)
- [Usando Var em Loop](#usando-var-em-loop)
- [Usando Let em Loop](#usando-let-em-loop)
- [Entendendo o Hoisting](#entendendo-o-hoisting)
- [Função Vs Objeto](#função-vs-objeto)
- [Notação Ponto](#notação-ponto)
- [Operadores: Atribuição](#operadores-atribuição)
- [Operadores: Destructuring #01](#operadores-destructuring-01)
- [Operadores: Destructuring #02](#operadores-destructuring-02)
- [Operadores: Destructuring #03](#operadores-destructuring-03)
- [Operadores: Destructuring #04](#operadores-destructuring-04)
- [Operadores: Aritméticos](#operadores-aritméticos)
- [Operadores: Relacionais](#operadores-relacionais)
- [Operadores: Lógicos](#operadores-lógicos)
- [Operadores: Unários](#operadores-unários)
- [Operadores: Ternário](#operadores-ternário)
- [Contexto de Execução: Browser vs Node](#contexto-de-execução-browser-vs-node)
- [Tratamento de Erro (Try/Catch/Throw)](#tratamento-de-erro-trycatchthrow)


# Comentários de Códigos

[*voltar ao indice*](#índice)

Comentar uma linha

```js
// comentário
```

Comentar um bloco

```js
/*
co
men
tá
rio
*/
```

- Evitar comentários desnecessários; 
- Colocar bons nomes em variáveis.

# O Básico de Var , Let e Const

[*voltar ao indice*](#índice)

**Var**

A palavra reservada Var, **permite** que uma variável seja declarada mais de uma vez dentro do mesmo escopo. Forma **mais antiga**. Evite usar.
Var tem escopo global e de função.  

```js
var a = 1;
var a = 10;
```

**Let**

Forma **mais moderna** de se criar as variáveis. O let, diferentemente do var, **não permite** que uma variável seja declarada mais de uma vez dentro do mesmo escopo.  
Let tem **escopo global**, de função e de bloco.

```js
let b = 2;
```

**Const**

Usado para declarar **constantes**, variáveis imutáveis.
Não pode receber um novo valor.

```js
const c = 3;
```

# Tipagem Fraca

[*voltar ao indice*](#índice)

Javascript é uma linguagem com **tipagem fraca**, ou seja, suas variáveis tem tipagem dinâmica. Para saber o tipo de uma variável usasse `typeof variavel`

Todos os tipos, com a exceção de objetos, definem valores imutáveis (valores que são incapazes de mudar).

[ref](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Data_structures)

**Tipo "Boolean"**

Boolean representa uma entidade lógica e pode ter dois valores: verdadeiro(true) ou falso(false).

**Tipo "Null"**

O tipo Null tem exatamente um valor: null(nulo).

**Tipo "Undefined"**

Uma variável que não foi atribuída a um valor específico, assume o valor undefined(indefinido).

**Tipo "Number"**

De acordo com os padrões ECMAScript, existe somente um tipo numérico. O double-precision 64-bit binary format IEEE 754 value (número entre -(253 -1) e 253 -1). Não existe um tipo específico para inteiros. Além de poderem representar números de ponto-flutuante, o tipo number possui três valores simbólicos: +Infinity, -Infinity, e NaN (não numérico).

Para verificar o maior ou o menor valor disponível dentro de +/-Infinity, você pode usar as constantes Number.MAX_VALUE ou Number.MIN_VALUE, e a partir do ECMAScript 6, você também consegue verificar se um número está dentro da região de um ponto flutuante do tipo double-precision, usando Number.isSafeInteger(), como também Number.MAX_SAFE_INTEGER, e Number.MIN_SAFE_INTEGER. Fora dessa região, números inteiros em JavaScript não são mais precisos e serão uma aproximação de um número de ponto flutuante do tipo double-precision

**Tipo "String"**

O tipo String em JavaScript é usado para representar dados textuais. Isto é um conjunto de "elementos" de valores de 16-bits unsigned integer. Cada elemento na string ocupa uma posição na string. O primeiro elemento está no índice 0, o próximo no índice 1, e assim por diante. O comprimento de uma string é o número de elementos nela.

**Symbol type**

Symbols são novos no JavaScript ECMAScript edição 6. Um Symbol é um valor primitivo único e imutável e pode ser usado como chave de uma propriedade de Object (ver abaixo). em algumas linguagens de programação, Symbols são chamados de atoms (átomos). Você também pode compará-los à enumerações nomeadas (enum) em C

**Objetos**

No JavaScript, objetos podem ser vistos como uma coleção de propriedades. Com o object literal syntax, um conjunto limitado de propriedades podem ser inicializados; a partir daí propriedades podem ser adicionadas e removidas. Estas propriedades podem assumir valores de qualquer tipo, incluindo outros objetos, o que permite construir estruturas de dados mais complexas. Propriedades são identificadas usando valores chave. Um valor chave pode ser uma String ou um valor Symbol.

```js
let qualquer = 'Legal';
console.log(typeof qualquer); // string

qualquer = 3.15;
console.log(typeof qualquer); // number

// Evitar nome genérico e sigla
let valor = '';
let numero = 1;
let pqp = false; // Produto Químico Perigoso
```

# Tipos em JavaScript: Number

[*voltar ao indice*](#índice)

```js
const peso1 = 1.1;
const peso2 = Number('2.0');

console.log(peso1, peso2);
// 1.1 2
console.log(Number.isInteger(peso1));
// false
console.log(Number.isInteger(peso2));
// true

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
media = total / (peso1 + peso2);

console.log(media.toFixed(2));
// 7.94
console.log(media.toString());
// 7.935516129032259
console.log(media.toString(2)); //converte em binario
// 111.11101111011111011111110000101011000100101111011001
console.log(typeof media)
// number
console.log(typeof Number)
// function
```

# Number: Alguns Cuidados

[*voltar ao indice*](#índice)

```js
console.log(7 / 0)
// Infinity
console.log("10" / 2)
// 5
console.log("3" + 2)
// 32
console.log("3" - 2)
// 1
console.log("10.2" / 2)
NaN
console.log("Show!" * 2)
NaN
console.log(0.1 + 0.7)
// 0.7999999999999999
// console.log(10.toString()) Gera erro 
console.log((10.345).toFixed(2))
// 10.34
```

# Usando Math

[*voltar ao indice*](#índice)

Math é um objeto embutido que possui propriedades e métodos para constantes e funções matemáticas.
Não é um objeto de função. 
Math funciona com o tipo Number. Não funciona com BigInt.
```js
typeof Math // object
```

## Propriedades Estáticas:
```js
Math.PI // aproximadamente 3,14159
```

## Métodos estáticos:

### Math.abs();
Retorna o valor absoluto de um número. Ou seja, ele retorna x se x for positivo ou zero,
e a negação de x se x for negativo.
```js
Math.abs('-1'); // 1
Math.abs(-2); // 2
Math.abs(10); // 10
```
Exemplo:
```js
const difference = (a, b) => Math.abs(a - b);

difference(3, 5) // 2
difference(5, 3) // 2
```

### Math.ceil();
Sempre arredonda um número até o próximo maior inteiro.

```js
Math.ceil(.95); // 1
Math.ceil(7.204) // 8
Math.ceil(-0.95); // -0
Math.ceil(-7.004); // -7
```

### Math.floor();
Retorna o maior inteiro menor ou igual a um determinado número.
Ao contrario de Math.cei()

```js
Math.floor( 45.95); // 45
Math.floor( 7.001); // 7
Math.floor(-45.2); // -46
```
### Math.max();
Retorna o maior de zero ou mais números dados como parâmetros de entrada.
NaN se algum parâmetro não for um número e não puder ser convertido em um.

```js
Math.max(22,3,15,2,27,4); // 27
Math.max(-1, -3, -2); // -1

const array1 = [10,20,55,9,17];
Math.max(...array1); // 55
```

### Math.min();
Retorna o número de menor valor passado para ela.
NaN se algum parâmetro não for um número e não puder ser convertido em um.

```js
Math.min(22,3,15,2,27,4); // 2
Math.min(-1, -3, -2); // -3

const array2 = [10,20,55,9,17];
Math.min(...array1); // 9
```

### Math.pow(x, y)
Retorna a base para a potência do expoente.

```js
Math.pow(7, 2); // 49
Math.pow(5, 2); // 25
```

### Math.randon();
Retorna um número **pseudoaleatório entre 0 e 1**.
Exemplo:

```js
const getRandomInt = max => Math.floor(Math.random() * max);
  
getRandomInt(2); // 0 ou 1
```

### Math.round();
Retorna o valor de um número arredondado para o **inteiro mais próximo**.

```js
Math.round(20.49); // 20
Math.round(20.5); // 21
Math.round(20.4); // 20
Math.round(-20.5 ); // -20
Math.round(-20.51); // -21
```


### Math.sign();
Retorna um **positivo** ou **negativo** +/- 1, indicando o sinal de um número passado para o argumento.
Se o número passado para Math.sign() for 0, ele retornará um +/- 0. 
Observe que se o número for positivo, um (+) explícito não será retornado.

```js
Math.sign(3); // 1
Math.sign(-3); // -1
Math.sign('-3'); // -1
Math.sign(0); // 0
Math.sign(-0); // -0
Math.sign(NaN); // NaN
Math.sign('foo'); // NaN
Math.sign(); // NaN
```

# Tipos em JavaScript: Strings

[*voltar ao indice*](#índice)

O objeto String é usado para representar e manipular uma sequência de caracteres.
Strings são úteis para armazenar dados que podem ser representados na forma de texto.<br>
Algumas das operações mais usadas em strings são: 
Verificar seu comprimento(length), para construí-los e concatená-los usando os operadores de string + e += <br>
-Verificar a existência ou localização de substrings com o método indexOf() <br>
-Extrair substrings com o método substring ().<br>   
     

Strings podem ser criadas como primitivas, a partir de literais de string:

```js
const firstName = 'DIEGO';
const lastName = "OLIVEIRA";
const completeName = `Diego Rodrigues de Oliveira`;
```

Ou como objetos, usando o construtor String()
```js
const string4 = new String("A String object"); // [String: 'A String object']
```

//Existem duas maneiras de acessar um caractere individual em uma string. 
//O primeiro é o método charAt():
```js
firstName.charAt(3); // V
```
A outra maneira é tratar a string como um objeto semelhante a uma matriz:
```js
firstName[1]; // D
```

A função String e o Construtor String produzem resultados diferentes:
```js
typeof String('Hello world'); // string
typeof new String('Hello world'); // object
```

## Propriedade de Instância
A propriedade .length de um objeto String contém o comprimento da string
```js
firstName.length; // 5
```

## Métodos de instância

### charAt();
Retorna o caractere no índice especificado.
```js
lastName.charAt(0); // D
lastName.charAt(3); // G 
lastName.charAt(4); // O
```


### charCode();
Retorna um número que é o valor da unidade do código UTF-16 no índice fornecido.
```js
'ABC'.charCode(0); // 65
'ABC'.charCode(1); // 66
'ABC'.charCode(2); // 67
```


### concat();
**Concatena** o texto de duas(ou mais) strings e retorna uma nova string.
``` js
firstName.concat(' ', lastName); // DIEGO OLIVEIRA
lastName.concat(', ', firstName);// OLIVEIRA, DIEGO
```


### includes();
Determina se a string de chamada contém a string procurada.
```js
lastName.includes('OLI'); // true
```


### indexOf();

Retorna o índice dentro do objeto String de chamada da primeira ocorrência do valor procurado , ou -1 se não for encontrado.
``` js
firstName.indexOf('G'); // 3
```


### lastIndexOf();

Retorna o índice dentro do objeto String de chamada da última ocorrência do valor procurado, ou -1 se não for encontrado.

```js
lastName.lastIndexOf('I')// 5
```

### repeat();

Retorna uma string que consiste nos elementos do objeto, **repetidas vezes** de contagem.

```js
firstName.repeat(3) // 'DIEGODIEGODIEGO'
```


### replace(x,y);

Usado para **substituir** as ocorrências de x usando y.
x pode ser uma string ou regex, e y pode ser uma string ou função.

```js
const happy = 'Feliz Natal';
happy.replace('Natal', 'Ano Novo'); // 'Feliz Ano Novo'

happy.replace(/eliz/i, 'oi ?'); // 'Foi ? Natal'
```

### replaceAll(x,y);
Usado para **substituir** todas as ocorrências de x usando y.
x pode ser uma string ou regex, e y pode ser uma string ou função.

```js
happy.replaceAll('a', 'e') // 'Feliz Netel'
```

### slice();
**Extrai** uma seção de uma string e retorna uma nova string.

```js
const str = 'sou alvinegro da vila belmiro';

str.slice(4); // "alvinegro da vila belmiro"
str.slice(4, 19); // "alvinegro da vi"
str.slice(-7); // "belmiro"
str.slice(-12, -8); // "vila"
```


### split();
**Divide uma String** em uma lista ordenada de substrings, coloca essas substrings em uma array e retorna a array.
A divisão é feita procurando um padrão; onde o padrão é fornecido como o primeiro parâmetro na chamada do método.
```js
const str = 'The quick brown fox jumps over the lazy dog.';

console.log(str.split(' ')[2]); // 'brown'
console.log(str.split('')[8]); // 'k'
console.log(str.split()); // Array ["The quick brown fox jumps over the lazy dog."]
```


### substring();
O método substring() retorna a parte da string entre os índices inicial e final ou para o final da string.

```js
const str = 'Godzilla';

str.substr(0, 3); // 'God'
str.substr(3); // 'zilla'
```


### toString();

O método toString() retorna uma string que representa o objeto especificado.
```js
const stringObj = new String('Hello World!');

stringObj; // String { "Hello World!" }
typeof stringObj; // 'object'

stringObj.toString(); // "Hello World!"
typeof stringObj.toString(); // 'string'
```


### trim();
**Apara espaços em branco** do início e do final da string.
```js
const hello = '   Hello world!   ';

greeting.trim();// "Hello world!"
```


### valueOf();

O método valueOf() retorna o valor primitivo de um objeto String.
```js
const stringObj = new String('Frontend');

stringObj; // String { 'Frontend' }
stringObj.valueOf(); // 'Frontend'
```

# Usando Template Strings

[*voltar ao indice*](#índice)

```js
const name = 'Diego'

const concatenacao = 'Olá'+name + '!'

const template = `
    Olá
    ${ name }!`

console.log(concatenacao, template)
/*
 *OláDiego! 
 *   Olá
 *   Diego!
 */

//Expressoes
console.log(`1 + 1 = ${1 + 1}`)
// 1 + 1 = 2

//Funcoes
const up = texto => texto.toUpperCase() `Ei... ${up('cuidado')}`; // Ei... CUIDADO
```

# Tipos em JavaScript: Boolean

[*voltar ao indice*](#índice)
```js
let isAtivo = false;
isAtivo = true;

isAtivo = 1 // true

!isAtivo; // false
!!isAtivo; // true


//Verdadeiros:
!!3
!!-1
!!' '
!![]
!!{}
!!Infinity
!!(isAtivo = true)


//Falsos:
!!0
!!''
!!null
!!NaN
!!undefined
!!(isAtivo = false)


let nome = '';
console.log(nome || 'Desconhecido'); // Desconhecido ~>No OU basta que um seja true.
```

# Tipos em JavaScript: Array

[*voltar ao indice*](#índice)

```js
const valores = [7.7, 8.9, 6.3, 9.2]

console.log(valores[0], valores[3]) // 7.2 9.2
console.log(valores[4])// undefined

valores[4] = 10
console.log(valores[4]); // 10   
   
valores[10] = 9.2
console.log(valores); // [ 7.7, 8.9, 6.3, 9.2, 10, <5 empty items>, 9.2 ]

console.log(valores.length) // 11

valores.push({id: 3}, false, null, 'teste'); // [7.7, 8.9, 6.3, 9.2, 3.5, <5 empty items>, 9.2, { id: 3 }, false, null, 'teste']
// não é ideal misturar valores no array

console.log(valores.pop()); // teste  ~>Extrai o ultimo valor do array.

delete valores[0];// [ <1 empty item>, 8.9, 6.3, 9.2, 3.5, <5 empty items>, 9.2, { id: 3 }, false, null]
 
typeof valores; // object
```

# Tipos em JavaScript: Object

[*voltar ao indice*](#índice)

```js
const prod1 = {}
prod1.nome = 'Samsung Galaxy A50';
prod1.preco = 9800.90;
prod1['Desconto Legal'] = 0.20; // evitar atributos com espaço
prod1.cor = 'Azul';

console.log(prod1); // { nome: 'Samsung Galaxy A30', preco: 9800.9, 'Desconto Legal': 0.2, cor: 'Azul'}


const prod2 = {
  nome: 'Camisa Polo',
  preco: 79.90,
  obj: {
    blabla: 1,
    obj: {
      blabla: 2
    }
  }
}

console.log(prod2) // { nome: 'Camisa Polo', preco: 79.9, obj: { blabla: 1, obj: { blabla: 2 } } }
```

# Entendendo o Null & Undefined

[*voltar ao indice*](#índice)

A um conceito em que a diferença é atribuição por valor e por referencia.

> Undefined é a copia por valor . E null por referencia.

Quando o tipo é primitivo, a cópia é por valor
Então quando é objeto, a cópia é por referência
```js
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
```

# Exemplos Básicos de Funções

[*voltar ao indice*](#índice)
```js
typeof Object; // function

class Produto {};
typeof Produto; // function


// Funcao sem retorno
function imprimirSoma(a, b){
    console.log(a + b);
  }
  
  imprimirSoma(2,3); // 5
  imprimirSoma(); // NaN
  imprimirSoma(2); // NaN
  imprimirSoma(2,3,4,5,6,7,8,9); // 5
  

// Funcao com retorno
  function soma(a, b = 0) { // 'b' tem como padrão o valor 0 caso nenhuma valor seja passado para ele.
    return a + b;
  }
  
  console.log(soma(2,3)); // 5
  console.log(soma(2)); // 2


// Armazenando uma função em uma variável
// funcção anonima é uma função sem nome.
const imprimirSoma = function(a,b) {
    console.log(a + b)
  }

imprimirSoma(2,3); //5

  
// Armazenando uma função arrow em uma variável
  const soma = (a,b) => {
    return a+b;
  }
  console.log(soma(2,3)); //5
  
//retorno implícito
  const subtracao = (a,b) => a - b;

  console.log(subtracao(2,3)) // -1
  
//Função com apenas 1 parâmetro
  const imprimir2 = a => a; // Caso a função tenha apenas um parâmetro, é opcional usar parenteses.

  imprimir2('legal'); // 'legal'
```

# Declaração de Variáveis Com Var

[*voltar ao indice*](#índice)

```js
// Ao declara var fora do escopo de uma função, ela vai para escopo global.

{
    { 
        {
            {         
                var sera = 'Será???'
            }
        }
    }
}
console.log(sera);// Será???


function teste() {
  var local = 123
}
// console.log(local); // ERRO


var numero = 1;

{
  var numero = 2;
  console.log('dentro =', numero); // dentro = 2
}

console.log('fora =', numero); // fora = 2
```

# Declaração de Variáveis Com Let

[*voltar ao indice*](#índice)
```js
//Let possui escopo global, de função e de bloco.

let numero = 1

{
  let numero = 2
  console.log('dentro =',numero);// dentro = 2
}

console.log('fora =', numero);// fora = 1
```

# Usando Var em Loop

[*voltar ao indice*](#índice)

```js
// Var não tem escopo de bloco, por isso fica visivel/acessível fora do bloco.
    
for(var i = 0;i<10;i++){
  console.log(i); // 1 2 3 4 5 6 7 8 9
}
console.log('i =', i); // i = 10  ~> a variavel 'i' saiu do laço quando chegou no valor 10(false).


var funcs = [];
for (var i = 0; i < 10 ; i++){
  funcs.push(function() {
    console.log(i)
  })
}

funcs[2](); // 10
funcs[8](); // 10
```

# Usando Let em Loop

[*voltar ao indice*](#índice)
```js
//Let tem escopo de bloco, por isso da erro quando tenta imprimir ela fora do bloco

for(let i = 0; i < 10; i++){
  console.log(i); // 1 2 3 4 5 6 7 8 9
}
console.log('i =', i); // ERRO


let funcs = []
for (let i = 0; i < 10 ; i++){
  funcs.push(function() {
    console.log(i)
  })
}

funcs[2]();// 2
funcs[8]();// 8
```

# Entendendo o Hoisting

[*voltar ao indice*](#índice)

```js
//Iça a variável para o topo do escopo. 
//Não funciona com let.

console.log('a =', a);// // a = undefined

var a = 2
console.log('a =', a); // a = 2


console.log('b =', b); // ReferenceError: b is not defined
let b = 2
console.log('b =', b)
```
# Função Vs Objeto

[*voltar ao indice*](#índice)

```js
//Ao criar um objeto gera uma função, ao instanciar o objeto, gera um objeto.

typeof Object; // function
typeof new Object; // object

const Cliente = function() {}
console.log(typeof Cliente); // function

console.log(typeof new Cliente); // object

class Produto {} // ES 2015 (ES6)
console.log(typeof Produto); // function

console.log(typeof new Produto()); // object
```
# Notação Ponto

[*voltar ao indice*](#índice)

```js
console.log(Math.ceil(6.1)); // 7


const obj1 = {}

obj1.nome = 'Bola' // criando atributo com notação ponto.
obj1['nome2'] = 'Bola2' // criando atributo com colchetes[].

console.log(obj1.nome); // Bola


function Obj(nome){
  this.nome = nome;
  this.exec = function(){
    console.log('Exec...')
  }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')

console.log(obj2.nome); // Cadeira
console.log(obj3.nome); // Mesa
obj3.exec(); // Exec...
```
# Operadores: Atribuição

[*voltar ao indice*](#índice)
```js
const a = 7
let b = 3

b += a; // 10

b -= 4; // 6

b *= 2; // 12

b /= 2; // 6

b **= 2; // 36

b %= 2; // 0
```

