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