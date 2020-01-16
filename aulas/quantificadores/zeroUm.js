const textoBR = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOO!';
const textoUS = 'There is a big fog in NYC';

// ? - Zero ou Um

// Aqui o o caractere 'o' pode ter zero ou uma instância na frase
const regex = /fogo?/gi;

console.log(textoBR.match(regex));
console.log(textoUS.match(regex));