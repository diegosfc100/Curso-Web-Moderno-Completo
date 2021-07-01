//Arrow Function
//Tem a snitaxe mais reduzida e o this é sempre associado ao contexto na qual a função foi escrita.


let dobro = function(a) {
    return 2 * a
}

//sobrescrevendo a fnção dobro com arrow
dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // quando a função tiver apenas 1 param. não é necessário () 
// return implícito em função q faz apenas 1 trabalho


let ola = () => 'Olá'

ola = _ => 'Olá' // possui parametro


//sobre This
function Pessoa () {
    this.idade = 0
    
    setInterval(() => { //arrow function literal dentro de setInterval
        this.idade++
        console.log(this.idade)
    }, (1000))
}

new Pessoa


//sobre Bind e This
let comparaComThis = function (param) {
    console.log(this === param)
}

console.log(comparaComThis(global))


const obj2 = {}
comparaComThis = comparaComThis.bind(obj2)

comparaComThis(global)
comparaComThis(obj2)


// A arrow function mantém o this imutável, nem com o bind é possível mudar
let comparaComThisArrow = param => console.log(this === param)

comparaComThisArrow(global)
comparaComThisArrow(module.exports)


const obj = {}
comparaComThis = comparaComThis.bind(obj)

comparaComThis(obj)
comparaComThis(module.exports)
