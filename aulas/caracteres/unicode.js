// no início...
// um byte = 8 bits - 256 caracteres
// símbolos, Pontuação A-Z, a-z, 0-9

// mais pra frente
// Dois bytes (16 bits) - 65500+ caracteres
// +símbolos, +pontuação

// Unicode
// Quantidade de bytes váriavél - expansível
// Suporta mais de 1 milhão de caracteres
// Atualmente tem mais de 100.000 caracteres atribuidos

// https://unicode-table.com/pt

const texto = 'ʃ' // Caracter unicode

console.log(texto.match(/u0283/));
console.log(texto);