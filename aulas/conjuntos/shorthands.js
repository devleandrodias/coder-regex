const texto = '1,2,3,4,5,6,a.b c!d?e[f	-f_g';

// \d - pega todos os dígitos (números) [1-9]
console.log(texto.match(/\d/g));

// \D - tudo o que não for dígito (número) [^0-9]
console.log(texto.match(/\D/g));

// \w - representa o conjunto de [a-zA-Z0-9_]
console.log(texto.match(/\w/g));

// \W - tudo aquilo que não são caracteres [^a-zA-Z0-9_]
console.log(texto.match(/\W/g));

// \s - espaços ' ', '\r', '\f', '\t', '\n' [ \r\f\t\n]
console.log(texto.match(/\W/g));

// \S - tudo aquilo que não é espaços [^ \r\f\t\n]
console.log(texto.match(/\W/g));