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