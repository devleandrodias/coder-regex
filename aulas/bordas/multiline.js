const texto = `
Leo é muito legal
Emanuel foi jogar em Sergipe
Bianca é casada com Habib
`;

/**
 * Dar match com condição de que a primeira letra da frase
 * seja igual a última letra da frase mesmo em multiplas linhas
 */

console.log(texto.match(/\n/g));
console.log(texto.match(/^(\w).+\1$/gi));
console.log(texto.match(/^(\w).+\1$/gim));