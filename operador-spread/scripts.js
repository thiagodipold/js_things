let numeros = [1, 2, 3, 4];

let numeros2 = [...numeros, 5, 6, 7, 8];// complementa com o array numeros

console.log(numeros2);

let info = {
	nome: 'Thiago',
	sobrenome: 'Dipold',
	idade: 19
};
//console.log(info);

let novaInfo = {
	...info,
	cidade:'São Paulo',
	estado: 'SP'
};

console.log(novaInfo);

function adicionarInfo(info){
	let novasInfo = {
		...info, 
		status: 0,
		token: 'saoaskpkoasp',
		data_cadastro: '.....'
	};

	return novasInfo;
}

console.log(adicionarInfo({nome:'Thiago', sobrenome:'Dipold'}));
