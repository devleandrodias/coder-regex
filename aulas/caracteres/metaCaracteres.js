// -- Representantes --

// .   - ponto - um caractere qualquer
// []  - conjunto - um conjunto de caracteres permitidos
// [^] - conjunto negado - conjunto de caracteres proibidos

// -- Quantificadores --

// ?      - Opcional - Zero ou um 
// *      - Asterisco - Zero ou mais
// +      - Mais - Um ou mais
// {n, m} - Chaves - de n até m

// -- Âncoras --

// ^  - Circunflexo - Início da linha
// $  - Cifrão - Fim da linha
// \b - Borda - Início ou fim de palavra

// -- Outros Meta Caracteres --

// \       - Escape - Uso de metacaracteres como literal
// |       - Ou - Operação de ou
// ()      - Grupo - Define um grupo
// \1...\9 - Retovisor - Regasta grupos já definidos

// -- Exemplos --

const texto = '1,2,3,4,5,6,a.b c!d?e';

const regexPonto = /\./g

console.log(texto.split(regexPonto));

const regexSimbolo = /,|\.|\?|!|/g

console.log(texto.split(regexSimbolo));