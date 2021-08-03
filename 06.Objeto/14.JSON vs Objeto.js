// JSON é um formato de DADOS.

const obj = {
    a: 1,
    b: 2,
    c: 3,
    soma() {
      return a + b + c;
    },
  };
  
  //Convertendo objeto para JSON.
  console.log(JSON.stringify(obj));
  // {"a":1,"b":2,"c":3}
  // os nomes de atributos em JSON são sempre escritos entre aspas duplas " "
  
  
  //Convertendo JSON para objeto.
  console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }'));
  // { a: 1, b: 2, c: 3 }
  
  
  // JSON também aceita string, booleanos, objetos e arrays
  console.log(
    JSON.parse('{ "a": 1.7, "b": "string", "c": true, "d": {}, "e": [] }')
  );
  // { a: 1, b: 'string', c: true, d: {}, e: [] }