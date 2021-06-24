//OBJECT

const prod1 = {}
prod1.nome = 'Samsung Galaxy A50';
prod1.preco = 9800.90;
prod1['Desconto Legal'] = 0.20; // evitar atributos com espaço
prod1.cor = 'Azul';

console.log(prod1); // { nome: 'Samsung Galaxy A30', preco: 9800.9, 'Desconto Legal': 0.2, cor: 'Azul'}


const prod2 = {
  nome: 'Camisa Polo',
  preco: 79.90,
  obj: {
    blabla: 1,
    obj: {
      blabla: 2
    }
  }
}

console.log(prod2) // { nome: 'Camisa Polo', preco: 79.9, obj: { blabla: 1, obj: { blabla: 2 } } }