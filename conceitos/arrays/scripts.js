// // arrays

// let carros = [
// 		'Palio',
// 		'Corolla',
// 		'Uno',
// 		'Ferrari',
// 		function(){
// 			console.log("testando 1,2,3...");
// 		}
// 	];

// carros[4]();

// let ingredientes = [
// 	['Uva', 'pera', 'maça'],
// 	['macarrao', 'arroz']
// ];

// console.log(ingredientes[1][0]);

// objetos
let carro = {
	nome:'Fiat',
	modelo:'Uno',
	peso:'800kg',
	ligado: false,
	ligar:function(){
		this.ligado = true;
		console.log("Vrum vrum");
	},
	acelerar:function(){
		if(this.ligado == true){
			console.log("riiiiir");
		}
		else{
			console.log(this.nome+ " "+ this.modelo+" não está ligado");
		}
		
	}
};

console.log("Nome do carro: "+carro.nome);

//carro.ligar();
//carro.acelerar();

let carrosobj = [
	{nome:'Fiat', modelo:'Palio'},
	{nome:'Fiat', modelo:'Uno'},
	{nome:'Toyota', modelo:'Corolla'},
	{nome:'Ferrari', modelo:'Spider'}
];

console.log(carrosobj[0].nome);