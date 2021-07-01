//This e Bind part.II

function Pessoa() {
    this.idade = 0
    
    setInterval(function(){
        this.idade++
        console.log(this.idade)
    }, (1000)) // a cada 1000 mlsg
}

new Pessoa// NaN   

// -------------------------------------------------------------

function Pessoa2() {
    this.idade = 0
    
    setInterval(function(){
        this.idade++
        console.log(this.idade)
    }.bind(this), (1000)) 
}

new Pessoa2 // 0 // 1 // 2 ...
// a cada 1000 mlsg soma 1 na idade

// -------------------------------------------------------------

function Pessoa3 () {
    this.idade = 0
    
    const self = this // armazenando o this numa constante significa q ela não vai mudar nunca.
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }, (1000))
}

new Pessoa3 // 0 // 1 // 2 ...
// a cada 1000 mlsg soma 1 na idade
