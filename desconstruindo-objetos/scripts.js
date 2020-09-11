let pessoa = {
	nome: 'Thiago',
	sobrenome: 'Lacerda',
	idade: 90,
	social: {
		facebook:'thiagodip',
		instagram:{
			url: '@thiagodipold',
			seguidores: 1000
		}
	},
	// nomeCompleto: function(){
	// 	return `${this.nome} ${this.sobrenome}`;
	// }
}

// console.log(pessoa.nomeCompleto());


// let {nome, sobrenome, idade = 0} = pessoa; // da um valor padrão caso nao tenha a propriedade do objeto


// console.log(nome, sobrenome, idade);

// let { facebook, instagram } = pessoa.social;

// console.log(facebook, instagram);

// let { nome, idade, social:{instagram:{url:instagram, seguidores} } } = pessoa;

// console.log(nome, idade, instagram, seguidores);

// function pegarNomeCompleto(obj){
// 	let nome = obj.nome;
// 	let sobrenome = obj.sobrenome;	

// 	return `${nome} ${sobrenome}`;
// 	//return `${obj.nome} ${obj.sobrenome}`;
// }

function pegarNomeCompleto({nome, sobrenome = 'silva', social:{instagram:{url: instagram}}}){
	return `${nome} ${sobrenome}, siga em ${instagram}`;
}

console.log(pegarNomeCompleto(pessoa));