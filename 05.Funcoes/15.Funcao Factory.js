//FUNÇÃO FACTORY
//Factory simples:

function criarPessoa(){
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa()) // { nome: 'Ana', sobrenome: 'Silva' }


//Part II
function criarProduto(nome, preco, desconto = 0){
    return {
        nome,
        preco,
        desconto
    }
}

console.log(criarProduto('Notebook',2199.49)) // { nome: 'Notebook', preco: 2199.49, desconto: 0 }

console.log(criarProduto('iPad',1199.49, 0.1)) // { nome: 'iPad', preco: 1199.49, desconto: 0.1 }