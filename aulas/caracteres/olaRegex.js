const texto = 'Casa bonita é casa amarela da esquina com a Rua ACASALAR'

// Procure na frase casa de modo global e insensitivo
const regex = /casa/gi

console.log(texto.match(regex));
console.log(texto.match(/a b/));