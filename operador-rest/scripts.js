// function adicionar(...numeros){
// 	console.log(numeros);
// } //independentes de quantos itens forem enviados, ele mostrará

// adicionar(5, 10, 15, 18, 9);



function adicionar(nomes, ...novosNomes) {

	let todosNomes = [...nomes, ...novosNomes];

	return todosNomes;
}

let nomes = ['Thiago', 'Paulo'];
let outros = adicionar(nomes, 'Joao', 'Maria', 'Lucas');
console.log(outros);