// let info = ['Thiago Dipold', 'Thiago', 'Dipold', '@thiagodipold'];

// let [nomeCompleto, , , instagram] = info; // deixo virgula na casa que nao desejar pegar

// console.log(nomeCompleto, instagram);

// let [nome, sobrenome, idade=90] = ['Bonieky', 'Lacerda']; // criar e desconstruir ao mesmo tempo

// console.log(nome, sobrenome, idade);

function criar(){
	let a = [1,2,3];
	return [1,2,3];
}

let numeros = criar();

let [a,b,c] = numeros;

console.log(a,b,c);