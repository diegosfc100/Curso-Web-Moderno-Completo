//USANDO VAR.
// Ao declara var fora do escopo de uma função, ela vai para escopo global.

{
    { 
        {
            {         
                var sera = 'Será???'
            }
        }
    }
}
console.log(sera);// Será???


function teste() {
  var local = 123
}
// console.log(local); // ERRO


var numero = 1;

{
  var numero = 2;
  console.log('dentro =', numero); // dentro = 2
}

console.log('fora =', numero); // fora = 2