//let lista = ['Ovo', 'Farinha', 'Corante', 'Massa'];

//let res = lista.toString();

//let res = lista.join('-'); //transforma o array em string com o separador como parametro

//let res = lista.indexOf('Corante'); //procura a posicao do parametro no array, se for maior que -1 é porque achou

//lista.pop(); //remove o ultimo item do array
//lista.shift(); //remove o primeiro item do array

//lista.push('Prato'); //adiciona item no array

//lista[4] = 'Tomate'; //altera o item pela posicao, ou adiciona se nao existir

//lista[lista.length] = 'Liquidificador';

//delete lista[1];

//lista.splice(1, 2); //2 parametros (a partir de, quantos)

//let lista2 = ['Prato', 'Liquidificador', 'Forno'];

//let res = lista.concat(lista2); //concatena o array

//lista.sort(); //ordenacao alfabetica
//lista.reverse(); //ordena de traz pra frente

// let lista = [45, 4, 9, 16, 25];
// let lista2 = [];

// lista2 = lista.map(function (item){
// 	return item *2;
// });

// for(let i in lista){
// 	lista2.push(lista[i]*2);
// }

// lista2 = lista.filter(function(item){
// 	if(item<20){
// 		return true;
// 	}
// 	else{
// 		return false;
// 	}
	
// });

// lista2 = lista.every(function(item){
// 	if (item > 1) {
// 		return true;
// 	}
// 	else{
// 		return false;
// 	}
// });

// lista2 = lista.some(function(item){
// 	return (item> 3)? true: false;
// });

// let res = lista2;




// lista2 = lista.find(function(item){ // acha o primeiro item que o satisfaz
// 	return (item == 16) ? true: false;
// });

// lista2 = lista.findIndex(function(item){ 
// 	return (item == 16) ? true: false;
// });

let lista = [
	{id:1, nome:'Bonieky', sobrenome:'Lacerda'},
	{id:2, nome:'Paulo', sobrenome:'XYZ'},
	{id:3, nome:'Fulano', sobrenome:'da Silva'}
];

let pessoa = lista.find(function(item){
	return (item.sobrenome == 'XYZ') ? true : false;
});

let res = pessoa;

console.log(res);