// fetch('https://alunos.b7web.com.br/api/ping')
// 	.then((r)=>r.json())
// 	.then((json)=>{
// 		console.log(json);
// 	});
function requisitar() {
const url = 'https://alunos.b7web.com.br/api/ping';
const params = {
	method: 'POST',
	body: JSON.stringify({
		nome: 'Thiago',
		idade: 99
	})
};
fetch(url, params)
	.then((r)=>r.json())
	.then((json)=>{
		console.log(json);
	});
}

requisitar();

// async function requisitar2(){
// 	const url = 'https://alunos.b7web.com.br/api/ping;';
// 	const params = {
// 		method: 'POST',
// 		body: JSON.stringify({
// 			nome: 'Thiago',
// 			idade: 99
// 		})
// 	};

// 	const r = await fetch(url, params);
// 	const json = await r.json();

// 	console.log(json);
// 	console.log('Alguma coisa');
// }

// requisitar2();

