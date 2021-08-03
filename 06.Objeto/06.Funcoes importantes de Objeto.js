const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13,
  };
  
  // Object.keys >> retorna array com todas chaves de um Objeto.
  console.log(Object.keys(pessoa));   // [ 'nome', 'idade', 'peso' ]

  // Object.values >> retorna array com todos valores de um Objeto.
  console.log(Object.values(pessoa));  // [ 'Rebeca', 2, 13 ]

  // Object.entries >> retorna um array com todas chaves e valores dentro de sub-arrays.
  console.log(Object.entries(pessoa));  // [ [ 'nome', 'Rebeca' ], [ 'idade', 2 ], [ 'peso', 13 ] ]
  
  Object.entries(pessoa).forEach((element) => {
    console.log(`${element[0]}: ${element[1]}`);
  });
  /*
  nome: Rebeca
  idade: 2
  peso: 13
  */
  
  Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`);
  });
  /*
  nome: Rebeca
  idade: 2
  peso: 13
  */
  
  Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2021',
  });
  

  pessoa.dataNascimento = '20/03/1978';
  console.log(pessoa.dataNascimento);  // 01/01/2021
  console.log(Object.keys(pessoa));  // [ 'nome', 'idade', 'peso', 'dataNascimento' ]
  

  // Object.assing (ECMAScript 2015)
  const dest = { a: 1 };
  const o1 = { b: 2 };
  const o2 = { c: 3, a: 4 };
  const obj = Object.assign(dest, o1, o2);
  console.log(obj); // { a: 4, b: 2, c: 3 }
  

  Object.freeze(obj);
  obj.c = 1234;
  console.log(obj); // { a: 4, b: 2, c: 3 }