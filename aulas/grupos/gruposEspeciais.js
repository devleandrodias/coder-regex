const texto = 'João é calmo, mas no trânsito fica nervoso.';

console.log(texto.match(/[\wÀ-ú]+/gi));

// Positive Lookahead

// Procura uma , que segue esse padrão [/wÀ-ú]+
console.log(texto.match(/[\wÀ-ú]+(?=,)/gi));
console.log(texto.match(/[\wÀ-ú]+(?=\.)/gi));
console.log(texto.match(/[\wÀ-ú]+(?=, mas)/gi));

// Negative lookahead

// Procura palavras que não estejam a frente de vírgula
console.log(texto.match(/[\wÀ-ú]+\b(?!,)/gi));
console.log(texto.match(/[\wÀ-ú]+[\s||\.](?!,)/gi));
