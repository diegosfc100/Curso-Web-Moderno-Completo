//HERANÇA
//Entre e Herança e Composição, priorize Compozição.
//Herança refere-se a habilidade de um objeto acessar métodos e outras propriedades de outro objeto.
//Estes objetos então herdam essas informações de outros objetos e podem utilizá-las da forma que preferirem.

const ferrari = {
    modelo: 'F40',
    velMax: 324,
  };
  
const volvo = {
    modelo: 'V40',
    velMax: 200,
};
  
  console.log(ferrari.__proto__); // [Object: null prototype] {}
  
  console.log(ferrari.__proto__ === Object.prototype); // true
  
  console.log(volvo.__proto__ === Object.prototype); // true
  
  console.log(Object.prototype.__proto__); // null
  
  function MeuObjeto() {}
  console.log(typeof Object, typeof MeuObjeto); // function function
  
  console.log(Object.prototype, MeuObjeto.prototype); // [Object: null prototype] {} {}