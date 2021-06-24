//NOTAÇÃO PONTO

console.log(Math.ceil(6.1)); // 7


const obj1 = {}

obj1.nome = 'Bola' // criando atributo com notação ponto.
obj1['nome2'] = 'Bola2' // criando atributo com colchetes[].

console.log(obj1.nome); // Bola


function Obj(nome){
  this.nome = nome;
  this.exec = function(){
    console.log('Exec...')
  }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')

console.log(obj2.nome); // Cadeira
console.log(obj3.nome); // Mesa
obj3.exec(); // Exec...