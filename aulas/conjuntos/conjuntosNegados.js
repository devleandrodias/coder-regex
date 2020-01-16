const texto = '1,2,3,4,5,6,a.b c!d?e[f';

// tudo o que não for [0-9]
console.log(texto.match(/\D/g));

// Negação de tudo aquilo do conjunto
console.log(texto.match(/[^0-9]/g));
console.log(texto.match(/[^\d!\?\[\s,\.]/g));

// Intervalos da tabela AASC
const texto2 = '1: !"#$%&\'()*+,-./ 2: :;<=>?@';

console.log(texto2.match(/[^!-/:-@\s]/g));