const texto = 'Romário era um execlente jogador\n, mas hoje é um político questionador';

console.log(texto.match(/r/gi));

console.log(texto.match(/^r/gi)); // ^ início e linha/string
console.log(texto.match(/r$/gi)); // $ fim da linha/string
console.log(texto.match(/^r.*r$/gi)); // problema do dotall (\n não é resolvido com .)