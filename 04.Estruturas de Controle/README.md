# Índice

- [Índice](#índice)
- [Usando a Estrutura IF](#usando-a-estrutura-if)
- [Usando a Estrutura IF/ELSE](#usando-a-estrutura-ifelse)
- [Usando a Estrutura IF/ELSE IF…](#usando-a-estrutura-ifelse-if)
- [Usando a Estrutura SWITCH](#usando-a-estrutura-switch)
- [Usando a Estrutura WHILE](#usando-a-estrutura-while)
- [Usando a Estrutura DO/WHILE](#usando-a-estrutura-dowhile)
- [Usando a Estrutura FOR](#usando-a-estrutura-for)
- [Usando a Estrutura FOR/IN](#usando-a-estrutura-forin)
- [Usando Break/Continue](#usando-breakcontinue)

# Usando a Estrutura IF

[*voltar ao indice*](#índice)

```js
//IF

function soBoaNoticia(nota){
    if(nota >= 7) {
        console.log('Aprovado com ' + nota)
    }
}

soBoaNoticia(8.1) // Aprovado com 8.1
soBoaNoticia(6.1) // 


function seForVerdadeEuFalo(valor){
    if (valor) { // só irá imprimir caso valor seja true.
        console.log('É verdade...' + valor)
    }
}

seForVerdadeEuFalo() //
seForVerdadeEuFalo(null) //
seForVerdadeEuFalo(undefined) //
seForVerdadeEuFalo(NaN) //
seForVerdadeEuFalo('') //
seForVerdadeEuFalo(0) //
seForVerdadeEuFalo(-1) // É verdade...-1
seForVerdadeEuFalo(' ') // É verdade...  
seForVerdadeEuFalo('?') // É verdade...?
seForVerdadeEuFalo('[]') // É verdade...[]
seForVerdadeEuFalo('[1,2]') // É verdade...[1,2]
seForVerdadeEuFalo('{}') // É verdade...{}


function teste1(num){
    if(num > 7)
        console.log(num)
    
    console.log('Final')
}

teste1(6) // Final
teste1(8)// 8 Final


function teste2(num){
    if(num > 7); { // cuidado com o ';', não usar com as estruturas de controle
        console.log(num)
    }
}
teste2(6) // 6
teste2(8) // 8 
```

# Usando a Estrutura IF/ELSE

[*voltar ao indice*](#índice)

```js

// IF, ELSE

const imprimirResultado = function(nota){
    if (nota >= 7) {
        console.log('Aprovado!')
    } else {
        console.log('Reprovado!')
    }
}

imprimirResultado(10) // Aprovado!
imprimirResultado(4) // Reprovado!
imprimirResultado('Epa') // Reprovado!



Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimirResultado = function (nota) {
    if(nota.entre(9,10)) {
        console.log('Quadro de Honra')
    } else if (nota.entre(7,8.99)) {
        console.log('Aprovado')
    } else if (nota.entre(4, 6.99)) {
        console.log('Recuperacao')
    } else if (nota.entre(0, 3.99)) {
        console.log('Reprovado')
    } else {
        console.log('Nota inválida')
    }

}

imprimirResultado(10) // Quadro de Honra
imprimirResultado(8.9) // Aprovado
imprimirResultado(6.55) // Recuperacao
imprimirResultado(2.3) // Reprovado
imprimirResultado(-1) // Nota inválida
imprimirResultado(11) // Nota inválida
```
# Usando a Estrutura SWITCH

[*voltar ao indice*](#índice)

```js

//SWITCH

const imprimirResultado = function(nota){
    switch (Math.floor(nota)){
        case 10:
        case 9:
            console.log('Quadro de Honra1')
            break
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6:
        case 5:
        case 4:
            console.log('Recuperação')
            break
        case 3:
        case 2:
        case 1:
        case 0:
            console.log('Reprovado')
            break
        default:
        console.log('Nota inválida')
    }
}

imprimirResultado(10) // Quadro de Honra
imprimirResultado(8.9) // Aprovado
imprimirResultado(6.55) // Recuperação
imprimirResultado(2.3) // Reprovado
imprimirResultado(-1) // Nota inválida
```

# Usando a Estrutura WHILE

[*voltar ao indice*](#índice)

```js

//WHILE
// Estrutura própria para executar laços q tenha uma quantidade indeterminada de execuções.

function getInteiroAleatorioEntre(min,max) {
    const valor = Math.random() * (max - min)+ min
    return Math.floor(valor)
}

let opcao = 0;

while (opcao != -1){
    opcao = getInteiroAleatorioEntre(-1,10)
    console.log(`Opção escolhida foi ${opcao}`)
}

console.log('Até a próxima!')
```
# Usando a Estrutura DO/WHILE

[*voltar ao indice*](#índice)

```js

//DO WHILE
// pouco utilizado

function getInteiroAleatorioEntre(min,max) {
    const valor = Math.random() * (max - min)+ min
    return Math.floor(valor)
}

let opcao = -1

do {
    opcao = getInteiroAleatorioEntre(-1,10)
    console.log(`Opção escolhida foi ${opcao}`)
}while (opcao != -1)
```
# Usando a Estrutura FOR

[*voltar ao indice*](#índice)

```js

// FOR

for(let i=0; i <= 10; i++){
    console.log(`5 x ${i} = ${5*i}`)
}
/* 
5 x 0 = 0
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
5 x 6 = 30
5 x 7 = 35
5 x 8 = 40
5 x 9 = 45
5 x 10 = 50
*/


let str = '';
for (let i = 0; i <= 10; i++) {
  str += i;
}

console.log(str); // "012345678910"



const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for(let i=0; i < notas.length; i++) {
    console.log(`nota = ${notas[i]}`)
}
/* 
nota = 6.7
nota = 7.4
nota = 9.8
nota = 8.1
nota = 7.7
 */
```

