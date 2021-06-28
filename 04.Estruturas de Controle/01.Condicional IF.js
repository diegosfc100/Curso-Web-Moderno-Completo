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