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