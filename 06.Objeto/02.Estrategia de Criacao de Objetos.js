//OBJETOS

//Usando a notação literal
const obj1 = {}


//Object em JS
const obj2 = new Object //new Object = função construtora
console.log(typeof Object, typeof new Object) // Function, Object


//Funções construtoras
function Produto(nome, preco, desconto){
    this.nome = nome // com a colocação do this, significa q esse atributo será público
    this.getPrecoComDesconto = () => {
        return preco * (1 - desconto)
    }
}

const prod1 = new Produto('Caneta', 5.00, 0.10)
const prod2 = new Produto('Celular', 1000.00, 0.10)
// Se eu quiser acessar prod2.nome e altarar o nome do produto eu posso por causa do this.
// Alterar 'preco' e 'desconto' eu não consigo devido esses valores estarem disponiveis apenas dentro da função.

console.log(prod1.getPrecoComDesconto(), prod2.getPrecoComDesconto())


//Função Factory
function criarFuncionario(nome, salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Diego', 8000.00, 5);
const f2 = criarFuncionario('Maria', 2000, 2)

console.log(f1.getSalario(), f2.getSalario())


//Object.create
const dog = Object.create(null)
dog.nome = 'Zulu'
console.log(dog)