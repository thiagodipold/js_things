let nome = 'Thiago Dipold Cavalcanti';

let resultado = '';

if(nome.indexOf('0') > -1){
	resultado = 'Achou';
} else{
	resultado = 'Não achou!';
}
//nome.length;
console.log(resultado);

let resultado2 = nome.slice(-7, -5);

let resultado3 = nome.substring(10, 15);

let resultado4 = nome.substr(8, 10); //começa da posicao 8 e a quantidade de caracteres que desejo

let posicaoSobrenome = nome.indexOf(' ');
let strSobrenome = nome.substr(posicaoSobrenome);

let resultado5 = nome.replace('Dipold', 'Silva');

let resultado6 = nome.toUpperCase(nome); //toLowerCase

let resultado7 = nome.concat(' ninguem quer saber');

let resultado8 = nome.trim();

let resultado9 = nome.charAt(5);

let resultado10 = nome.split(' ');
console.log(resultado10);

let n = '25';

let res = n.toString();

//let res2 = n.toFixed(2); // arredonda ao numero () de casas decimais

let res3 = parseInt(n) + 25; // parseFloat() preserva a natureza decimal do numero

console.log(res3);