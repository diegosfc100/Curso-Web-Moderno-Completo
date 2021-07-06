//OBJETOS COSTANTES
// Se não é possível alterar uma const depois de atribuido um valor a ela, como conseguimos alterar objetos?

/*Uma constante aponta para um endereço de memória, e nesse endereço de memória que possui um objeto, é possível modifica-lo
Porem não é possui associar essa constante a outro objeto */

// pessoa -> endereço_de_memória -> {obj}
const pessoa = { nome: 'Diego'}
pessoa.nome = 'João'
console.log(pessoa) // { nome: 'João' }


// Ao tentar atribuir novo atributo e valor, dá erro.
// pessoa = { nome: 'Ana' }
// pessoa -> 456 -> {...}


//Se quiser que o objeto permaneça imutável, use o metódo Object.freeze(objeto)
Object.freeze(pessoa)

pessoa.nome = 'Maria'
console.log(pessoa.nome) // João

pessoa.end = 'Rua ABC' // Não acrescenta
delete pessoa.nome // Não deleta
console.log(pessoa) // {nome: 'João'}

// Criando objeto já com freeze para não ser alterado.
const pessoaConstante = Object.freeze({nome: 'Joao'})
console.log(pessoaConstante)