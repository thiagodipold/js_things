/*//alert("boa noite");
//askaopskaospko(); // vai aparecer o erro no console
document.getElementById("titulo").innerHTML = "opa";
document.write("Algum texto");

//window.alert("josé da silva"); //mostra na janela

console.log("a mensagem está aqui no console do navegador");

//variaveis
var nome = "João";
var idade = 90;

console.log("o "+nome+" tem "+idade+" anos de idade");*/

/*var x = 10;
var y = 15;

var total = x + y;

alert(total);

*/

// var nome = "Joao";
// var sobrenome = "Silva";

// var nomeCompleto = nome +" "+ sobrenome;

// console.log(nomeCompleto);

// // condicionais

// var hora = 23;

// if(hora < 12){
// 	console.log("Bom dia");
// }
// else if( hora >= 12 && hora < 18){
// 	console.log("Boa tarde");
// }
// else if( hora >= 18 && hora < 24){
// 	console.log("Boa noite");
// }
// else{
// 	console.log("Horário não existente");
// }

var nome = "nome"; // --> utiliza o HOISTING, podendo acessar de qualquer local

let nome2 = "nome2"; // fica apeans disponivel naquele local onde foi criada --> segue exemplo

if (nome2 == "nome2"){
	let idade = 18;
}

//console.log(idade); //a variavel idade so funcionara dentro do escopo dela, ou seja, apenas dentro do 'if' utilizado

// alem disso, se for utilziado duas vezes let nome = ; let nome =; ele acusará erro, ou seja, devemos utilziar apenas nome=".."

const nome3 = "nome";

//nome3 = "nome1"; // se redeclaramos a variavel, ela acusará erro, pois é uma constante

console.log(nome3);

const nomearray = {nome:'joao', codinome:'lacerda'};

nomearray.nome = 'joaozada';

console.log(nomearray);
