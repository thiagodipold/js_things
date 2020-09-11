// function fazer() {
// 	let promise = new Promise((resolve, reject)=>{

// 		resolve('OK');

// 	});

// 	return promise;
// }

// fazer().then((resposta)=>{
// 	console.log(resposta);
// })

function fazer() {
	let promise = new Promise((resolve, reject)=>{

		setTimeout(()=>{
			resolve('OK');
		}, 3000);

	});

	return promise;
}

fazer().
	then((resposta)=>{
		console.log(`Resposta: ${resposta}`);
	});
