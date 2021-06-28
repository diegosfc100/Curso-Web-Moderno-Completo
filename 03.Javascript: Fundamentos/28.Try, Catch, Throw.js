//TRY, CATCH THROW
//O programa executa o bloco try, caso ocorra algum erro, passa para o bloco catch, e logo após o finally,
// que sempre é chamado e é opcional. 

function tratarErroELancar(erro){
    throw new Error('...')
    // throw 10
    // throw 'mensagem'
    // throw {
    // nome: erro.nome,
    // msg: erro.message,
    // date: new Date

}


function imprimirNomeGritado(obj) {
    try {
      // name não existe, a chave é nome
      console.log(obj.name.toUpperCase() + "!!!")
    } catch (e){
      tratarErroELancar(e)
    } finally  {
      console.log('final')
    }
}

const obj = { nome: 'Roberto' }

imprimirNomeGritado(obj)
// Error: ...