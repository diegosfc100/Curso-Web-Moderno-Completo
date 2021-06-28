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