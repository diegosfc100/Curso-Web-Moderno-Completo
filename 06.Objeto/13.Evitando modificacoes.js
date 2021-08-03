//O Object.preventExtensions permite excluir e modificar os atributos mas não permite adicionar atributos

const produto = Object.preventExtensions({
  nome: 'Qualquer',
  preco: 1.99,
  tag: 'Promoção',
});

console.log('Extensível:', Object.isExtensible(produto));
// Extensível: false

produto.nome = 'Borracha';
produto.descricao = 'Borracha escolar branca';
delete produto.tag;

console.log(produto);
//{ nome: 'Borracha', preco: 1.99 }


//O Object.seal permite modificar os atributos, mas não permite excluir nem adicionar atributos
const pessoa = { nome: 'Juliana', idade: 35 };
Object.seal(pessoa);

console.log('Selado:', Object.isSealed(pessoa));
// Selado: true

pessoa.sobrenome = 'Silva';
delete pessoa.nome;
pessoa.idade = 29;
console.log(pessoa);
// { nome: 'Juliana', idade: 29 }


//O Object.freeze é igual a um objeto selado e com os valores constantes