//Contexto Léxico

const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao() // a função carrega consigo o local onde foi definida.
}

exec()
// Global