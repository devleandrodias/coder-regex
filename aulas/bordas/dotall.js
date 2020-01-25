const texto = 'Romário era um execlente jogador\n, mas hoje é um político questionador';

// console.log(texto.match(/^r.*r$/gi)); // problema do dotall (\n não é resolvido com .)

// Resolver...

console.log(texto.match(/^r[\s\S]*r$/gi));
