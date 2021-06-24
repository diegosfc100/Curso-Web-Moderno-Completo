//STRINGS
/*
O objeto String é usado para representar e manipular uma sequência de caracteres.
Strings são úteis para armazenar dados que podem ser representados na forma de texto.
Algumas das operações mais usadas em strings são: 
-Verificar seu comprimento(length), para construí-los e concatená-los usando os operadores de string + e += 
-Verificar a existência ou localização de substrings com o método indexOf() 
-Extrair substrings com o método substring ().   
*/      

//Strings podem ser criadas como primitivas, a partir de literais de string:
const firstName = 'DIEGO';
const lastName = "OLIVEIRA";
const completeName = `Diego Rodrigues de Oliveira`;

//Ou como objetos, usando o construtor String()
const string4 = new String("A String object"); // [String: 'A String object']


//Existem duas maneiras de acessar um caractere individual em uma string. 
//O primeiro é o método charAt():
firstName.charAt(3); // V

//A outra maneira é tratar a string como um objeto semelhante a uma matriz:
firstName[1]; // D


// A função String e o Construtor String produzem resultados diferentes:
typeof String('Hello world'); // string
typeof new String('Hello world'); // object


//Propriedade de Instância
// A propriedade .length de um objeto String contém o comprimento da string

firstName.length; // 5


//Métodos de instância

charAt();
//Retorna o caractere no índice especificado.

lastName.charAt(0); // D
lastName.charAt(3); // G 
lastName.charAt(4); // O


/*--------------------------------------------------------*/
charCode();
//Retorna um número que é o valor da unidade do código UTF-16 no índice fornecido.

'ABC'.charCode(0); // 65
'ABC'.charCode(1); // 66
'ABC'.charCode(2); // 67


/*--------------------------------------------------------*/
concat();
//Combina o texto de duas(ou mais) strings e retorna uma nova string.

firstName.concat(' ', lastName); // DIEGO OLIVEIRA
lastName.concat(', ', firstName);// OLIVEIRA, DIEGO


/*--------------------------------------------------------*/
includes();
//Determina se a string de chamada contém a string procurada.

lastName.includes('OLI'); // true


/*--------------------------------------------------------*/
indexOf();
//Retorna o índice dentro do objeto String de chamada da primeira ocorrência do valor procurado , ou -1 se não for encontrado.

firstName.indexOf('G'); // 3


/*--------------------------------------------------------*/
lastIndexOf();
//Retorna o índice dentro do objeto String de chamada da última ocorrência do valor procurado, ou -1 se não for encontrado.

lastName.lastIndexOf('I')// 5


/*--------------------------------------------------------*/
repeat();
//Retorna uma string que consiste nos elementos do objeto, repetidas vezes de contagem.

firstName.repeat(3) // 'DIEGODIEGODIEGO'


/*--------------------------------------------------------*/
replace(x,y);
//Usado para substituir as ocorrências de x usando y.
//x pode ser uma string ou regex, e y pode ser uma string ou função.

const happy = 'Feliz Natal';
happy.replace('Natal', 'Ano Novo'); // 'Feliz Ano Novo'

happy.replace(/eliz/i, 'oi ?'); // 'Foi ? Natal'


/*--------------------------------------------------------*/
replaceAll(x,y);
//Usado para substituir todas as ocorrências de x usando y.
//x pode ser uma string ou regex, e y pode ser uma string ou função.

happy.replaceAll('a', 'e') // 'Feliz Netel'


/*--------------------------------------------------------*/
slice();
//Extrai uma seção de uma string e retorna uma nova string.

const str = 'sou alvinegro da vila belmiro';

str.slice(4); // "alvinegro da vila belmiro"
str.slice(4, 19); // "alvinegro da vi"
str.slice(-7); // "belmiro"
str.slice(-12, -8); // "vila"


/*--------------------------------------------------------*/
split();
//Divide uma String em uma lista ordenada de substrings, coloca essas substrings em uma array e retorna a array.
//A divisão é feita procurando um padrão; onde o padrão é fornecido como o primeiro parâmetro na chamada do método.

const str = 'The quick brown fox jumps over the lazy dog.';

console.log(str.split(' ')[2]); // 'brown'
console.log(str.split('')[8]); // 'k'
console.log(str.split()); // Array ["The quick brown fox jumps over the lazy dog."]


/*--------------------------------------------------------*/
substring();
//O método substring () retorna a parte da string entre os índices inicial e final ou para o final da string.

const str = 'Godzilla';

str.substr(0, 3); // 'God'
str.substr(3); // 'zilla'


/*--------------------------------------------------------*/
toString();
//O método toString() retorna uma string que representa o objeto especificado.

const stringObj = new String('Hello World!');

stringObj; // String { "Hello World!" }
typeof stringObj; // 'object'

stringObj.toString(); // "Hello World!"
typeof stringObj.toString(); // 'string'


/*--------------------------------------------------------*/
trim();
//Apara espaços em branco do início e do final da string.

const hello = '   Hello world!   ';

greeting.trim();// "Hello world!"


/*--------------------------------------------------------*/
valueOf();
// O método valueOf() retorna o valor primitivo de um objeto String.

const stringObj = new String('Frontend');

stringObj; // String { 'Frontend' }
stringObj.valueOf(); // 'Frontend'
