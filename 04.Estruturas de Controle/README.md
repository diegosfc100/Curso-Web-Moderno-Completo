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

