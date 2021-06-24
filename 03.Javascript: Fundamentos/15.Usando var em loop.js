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