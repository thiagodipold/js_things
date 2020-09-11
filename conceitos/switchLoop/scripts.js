let dia = new Date().getDay();
console.log(dia);

let diaNome = '';

// switch(dia){
// 	case 1:
// 		diaNome = 'segunda-feira';
// 		break;

// 	case 2:
// 		diaNome = 'terca-feira';
// 		break;
// 	case 3:
// 		diaNome = 'quarta-feira';
// 			break;
// 	case 4:
// 		diaNome = 'quinta-feira';
// 			break;
// 	case 5:
// 		diaNome = 'sexta-feira';
// 			break;
// 	case 6:
// 		diaNome = 'sabado';
// 			break;
// 	case 7:
// 		diaNome = 'domingo';
// 			break;
// }

switch(dia){
	case 6:
	case 7:
		diaNome = 'final de semana';
		break

	default:
		diaNome = "dia comercial";
		break;
}

document.getElementById('dia').innerHTML = "hoje é dia "+diaNome;


// FOR LOOP
// FOR LOOP ARRAY

let texto = '';
let carros = 
	[
	'Ferrari',
	'Corolla',
	'Uno',
	'Palio'
	];

let html = '<ul>';

for(let car in carros){
	html += '<li>' + carros[car] + '</li>';
}

html += '</ul>';


for(let i = 0; i <= 50; i++){
	texto += i + '<br/>';
}

// document.getElementById('demo').innerHTML = texto;
document.getElementById('demo').innerHTML = html;

//WHILE

let htmlloop = '';

let cont = 0;

while(cont <= 10){
	htmlloop += 'O numero é: '+cont+'<br/>';
	cont++;
}

document.getElementById('demoLoop').innerHTML = htmlloop;