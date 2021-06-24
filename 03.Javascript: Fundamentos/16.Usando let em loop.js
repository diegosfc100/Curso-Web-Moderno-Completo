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