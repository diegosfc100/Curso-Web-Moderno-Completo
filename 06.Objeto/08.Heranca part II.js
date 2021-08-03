//Cadeia de protótipos (prototype chain)

Object.prototype.attr0 = '0'; // NÃO FAZER ISSO
const avo = { attr1: 'A' };
const pai = { __proto__: avo, attr2: 'B', attr3: '3' };
const filho = { __proto__: pai, attr3: 'C' };

console.log(filho.attr0,filho.attr1,filho.attr3); // 0 A C


const carro = {
  velAtual: 0,
  velMax: 200,
  acelerarMais(delta) {
    if (this.velAtual + delta <= this.velMax) {
      this.velAtual += delta;
    } else {
      this.velAtual = this.velMax;
    }
  },
  status() {
    return `${this.velAtual}km/h de ${this.velMax}km/h`;
  },
};

const ferrari = {
  modelo: 'f40',
  velMax: 324, // shadowing(sombreamento)
};

const volvo = {
  modelo: 'V40',
  status() {
    return `${this.modelo}: ${super.status()}`;
  },
};

Object.setPrototypeOf(ferrari, carro);
Object.setPrototypeOf(volvo, carro);

console.log(ferrari); // { modelo: 'f40', velMax: 324 }
console.log(volvo); // { modelo: 'V40', status: [Function: status] }


volvo.acelerarMais(100);
console.log(volvo.status());
// V40: 100km/h de 200km/h

ferrari.acelerarMais(300);
console.log(ferrari.status());
// 300km/h de 324km/h