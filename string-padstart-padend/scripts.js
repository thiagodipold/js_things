let telefone = '54545';

console.log(telefone.padEnd(9, '*'));// primeiro parametro -> tem que ter no minimo, segundo parametro -> se nao tiver, substituirei pelo o que?
console.log(telefone.padStart(9, '*'));// primeiro parametro -> tem que ter no minimo, segundo parametro -> se nao tiver, substituirei pelo o que?

let cartao = '1234123412341234';

let lastDigitos = cartao.slice(-4);
console.log(lastDigitos);

let cartaoMascarado = lastDigitos.padStart(16, '*');
console.log(cartaoMascarado);