//let d = new Date(); // instancio a classe Date do js

//let d = new Date(2020, 0, 1, 12, 30, 12); //ano, mes(comeca em 0), dia, hora, minutos, segundos

//let d = new Date('2020-01-01 15:42:17');

//let d = new Date(2022, 2, 15);

//let d = new Date(0);
//console.log(d.toDateString() ); //retorna data resumida

//console.log(d.toUTCString() ); //remove o fuso horario e retorna o horario oficial de Greenwich

let d = new Date();
//let novoValor = d.getFullYear();

//let novoValor = d.getMonth();

//let novoValor = d.getDay(); // dias da semana, comecando no domingo

//let novoValor = d.getDate();

//let novoValor = d.getHours();

//let novoValor = d.getMinutes();

//let novoValor = d.getSeconds();

//let novoValor = d.getTime();

//let novoValor = Date.now(); //pega o atual valor

d.setFullYear(2022); // muda o ano

d.setMonth(7); // muda o mes

//d.setDate(15);

//d.setDate( d.getDate() + 1500); //adiciona dias a partir da data atual

d.setHours( d.getHours() + 24);; // adiciono horas a partir da hora atual

let novoValor = d;
console.log(novoValor); // atual hora do Hardware
