let lista = ['ovo', 'macarrao', 'pipoca'];

console.log(Object.keys(lista)); // keys = indices do array
console.log(Object.values(lista)); // values = pega os valores do array
console.log(Object.entries(lista)); // entries = pega o keys e o values, retornando cada item em um array com ambos

let pessoa = {
	nome: 'Thiago',
	sobrenome: 'Dipold',
	idade: 90
};

console.log(Object.keys(pessoa)); // retorna as chaves do objeto 
console.log(Object.values(pessoa)); // retorna os valores do array
console.log(Object.entries(pessoa)); //retorna um array com keys e values

//servido principalmente para debugar algumas funcoes e codigos
