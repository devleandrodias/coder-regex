const texto = '.$+*?-';

// Dentro de um conjunto não é necessário usar o \ escape para meta caracteres

console.log(texto.match(/[+.?*$]/g));

// Intervalo entre $ e ?

console.log(texto.match(/[$-?]/g));

// Não é intervalo

console.log(texto.match(/[$\-?]/g));
console.log(texto.match(/[-?]/g));

// Pode precisar de escape dentro do conjunto