const texto = '1,2,3,4,5,6,a.b c!d?e[f';

// Intervalos sempre estão em um conjuntos

console.log(texto.match(/[a-z]/g));
console.log(texto.match(/[b-d]/g));
console.log(texto.match(/[1-5]/g));
console.log(texto.match(/[A-Z1-4]/gi));
