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