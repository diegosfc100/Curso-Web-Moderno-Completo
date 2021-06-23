# Javascript: Fundamentos

## Índice

- [Índice](#índice)
- [Comentários de Códigos](#comentários-de-códigos)
- [O Básico de Var , Let e Const](#o-básico-de-var--let-e-const)
- [Tipagem Fraca](#tipagem-fraca)
- [Tipos em JavaScript: Number](#tipos-em-javascript-number)
- [Number: Alguns Cuidados](#number-alguns-cuidados)
- [Usando Math](#usando-math)
- [Tipos em JavaScript: String](#tipos-em-javascript-string)
- [Usando Template Strings](#usando-template-strings)
- [Tipos em JavaScript: Boolean](#tipos-em-javascript-boolean)
- [Tipos em JavaScript: Array](#tipos-em-javascript-array)
- [Tipos em JavaScript: Object](#tipos-em-javascript-object)
- [Entendo o Null & Undefined](#entendo-o-null--undefined)
- [Quase Tudo é Função!!!](#quase-tudo-é-função)
- [Exemplos Básicos de Funções #01](#exemplos-básicos-de-funções-01)
- [Exemplos Básicos de Funções #02](#exemplos-básicos-de-funções-02)
- [Declaração de Variáveis Com Var #01](#declaração-de-variáveis-com-var-01)
- [Declaração de Variáveis Com Var #02](#declaração-de-variáveis-com-var-02)
- [Declaração de Variáveis Com Let](#declaração-de-variáveis-com-let)
- [Usando Var em Loop #01](#usando-var-em-loop-01)
- [Usando Let em Loop #01](#usando-let-em-loop-01)
- [Usando Var em Loop #02](#usando-var-em-loop-02)
- [Usando Let em Loop #02](#usando-let-em-loop-02)
- [Entendendo o Hoisting](#entendendo-o-hoisting)
- [Função Vs Objeto](#função-vs-objeto)
- [Par Nome/Valor](#par-nomevalor)
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