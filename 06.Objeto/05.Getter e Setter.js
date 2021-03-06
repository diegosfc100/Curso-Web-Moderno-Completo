// Get p/ ler o valor de uma variável
// Set p/ alterar.
// Get e Set são funções e dentro dessas funções os valores dos objetos são acessados.


const seq = {
    _valor: 1, // convenção - essa variável é pretendida ser acessável apenas internamente.
    get valor() {return this._valor++},
    set valor(valor){
        if(valor > this._valor){
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor); // 1 2

sequencia.valor = 1000;
console.log(sequencia.valor, sequencia.valor); // 1000 1001

sequencia.valor = 900;
console.log(sequencia.valor, sequencia.valor); // 1002 1003