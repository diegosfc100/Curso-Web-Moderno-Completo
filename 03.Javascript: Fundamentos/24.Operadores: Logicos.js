// AND / OR / NOT

var curso = "JavaScript"
var legal = true

// AND (&&) ambas expressões precisam ser verdadeiras.

if(curso === "JavaScript" && legal === true){
    console.log("O curso de JavaScript é legal.")
}else{
    console.log("O curso não e legal.")
}

true && true // true
true && false // false
false && true // false
false && (3 == 4) // false
'Cat' && 'Dog' // "Dog"
false && 'Cat' // false
'Cat' && false // false
'' && false // ""
false && ''// false



// OR (||) pelo menos uma expressão precisa ser verdadeira.

if(curso === "JavaScript" || legal === true){
    console.log("O curso de JavaScript é legal.")
}else{
    console.log("O curso não e legal.")
}

true  || true       // t || t retorna true
false || true       // f || t retorna true
true  || false      // t || f retorna true
false || (3 == 4)   // f || f retorna false
'Cat' || 'Dog'      // t || t retorna "Cat"
false || 'Cat'      // f || t retorna "Cat"
'Cat' || false      // t || f retorna "Cat"
''    || false      // f || f retorna false
false || ''         // f || f retorna ""



// NOT (!) quando queremos fazer uma negação.

if(curso != "JavaScript"){ // ==(igual) ; !=(diferente)
    console.log(" O curso não é JavaScript")
}else{
    console.log("O curso é JavaScript.")
}

!true  // false
!false // true
!'Cat' // false


function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2;
    const comprarTv50 = trabalho1 && trabalho2;
    const comprarTv32 = trabalho1 != trabalho2;
    const manterSaudavel = !comprarSorvete;
    
    return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel};
  }
    
console.log(compras(true, true)); 
/*{
    comprarSorvete: true,
    comprarTv50: true,
    comprarTv32: false,
    manterSaudavel: false
  }*/

console.log(compras(false, true)); 
/*{
    comprarSorvete: true,
    comprarTv50: false,
    comprarTv32: true,
    manterSaudavel: false
  }*/

console.log(compras(false, false)); 
/*{
    comprarSorvete: false,
    comprarTv50: false,
    comprarTv32: false,
    manterSaudavel: true
  }*/