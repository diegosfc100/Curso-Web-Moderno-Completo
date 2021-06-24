///ARRAY

const valores = [7.7, 8.9, 6.3, 9.2]

console.log(valores[0], valores[3]) // 7.2 9.2
console.log(valores[4])// undefined

valores[4] = 10
console.log(valores[4]); // 10   
   
valores[10] = 9.2
console.log(valores); // [ 7.7, 8.9, 6.3, 9.2, 10, <5 empty items>, 9.2 ]

console.log(valores.length) // 11

valores.push({id: 3}, false, null, 'teste'); // [7.7, 8.9, 6.3, 9.2, 3.5, <5 empty items>, 9.2, { id: 3 }, false, null, 'teste']
// não é ideal misturar valores no array

console.log(valores.pop()); // teste  ~>Extrai o ultimo valor do array.

delete valores[0];// [ <1 empty item>, 8.9, 6.3, 9.2, 3.5, <5 empty items>, 9.2, { id: 3 }, false, null]
 
typeof valores; // object