const texto = 'Pedrinho (filho de Pedro Silva) é doutor ABC';

// Dentro de um conjunto o grupo morre
console.log(texto.match(/[(abc)]/gi));

// Um conjunto sobrevive dentro de um grupo
console.log(texto.match(/([abc])/gi));

// Tende usar grupos apenas quando for necessário se não for capturaro ou aplicar quantificadores
console.log(texto.match(/(abc)/gi));
