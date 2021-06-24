//LET
//Let possui escopo global, de função e de bloco.

let numero = 1

{
  let numero = 2
  console.log('dentro =',numero);// dentro = 2
}

console.log('fora =', numero);// fora = 1