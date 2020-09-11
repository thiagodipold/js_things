var nome = "nome";
var idade = 18;
var salvo = true;
var cidade;

// typeof nomedavariavel --> retorna o tipo dela

var tipo = typeof salvo;

if (tipo == typeof salvo){
	console.log(tipo);
}

function alterar(variaveltitulo) {
	var titulo = document.getElementById('titulo');
	titulo.innerHTML = variaveltitulo;
	// let nomecampo = document.getElementById('campo');
	// nomecampo.value = variaveltitulo;
}

alterar("nome do titulo");

function somarexemplo(x, y){
	let total = x + y;

	document.getElementById('campo').value = total;
}

//somarexemplo(10, 5);

function somar(x, y){
	let total = x + y;

	return total;
}

var resultado = somar(10, 5);

console.log(resultado);

function calcularImc(peso, altura){
	let resultadoimc = peso / (altura*altura);
	return resultadoimc;
}

let resultadoimc = calcularImc(71, 1.68);

console.log(resultadoimc);

function mensagem(){
	document.getElementById('titulo').innerHTML = "obrigado";
}

function digitou(e){
	console.log(e);
}

function digitouEnter(e){
	if(e.keyCode == 13 && e.ctrlKey == true){
		let textoEnter = document.getElementById('campo').value;
		console.log(textoEnter);
	}
}

function azul(){
	limpar();
	document.getElementById('titulo').classList.add('azul');
}

function verde(){
	limpar();
	document.getElementById('titulo').classList.add('verde');
}

function vermelho(){
	limpar();
	document.getElementById('titulo').classList.add('vermelho');
}

function limpar(){
	document.getElementById('titulo').classList.remove('azul', 'verde', 'vermelho');
}

function toggleTelefone(){
	document.getElementById('botaoTelefone').style.display = "none";
	document.getElementById('telefone').style.display = "block";
}
