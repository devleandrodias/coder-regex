const textoBR = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOO!';
const textoUS = 'There is a big fog in NYC';

// + - Um ou mais

// Aqui o o caractere 'o' pode ter uma ou mais instâncias na frase
const regex = /fogo+/gi;

console.log(textoBR.match(regex));
console.log(textoUS.match(regex));

const texto2 = 'Os números: 0123456789.';
console.log(texto2.match(/\d/g));

// máximo de digitos um ao lado do outro (Gulosos) 
console.log(texto2.match(/\d+/g));