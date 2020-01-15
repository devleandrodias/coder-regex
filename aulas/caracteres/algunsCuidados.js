const textoUmaLinha = '...' // Aspas simples ou duplas
const textoMultiplasLinhas = // backticks crases
	` Template
	String de 
	multiplas linhas
`

console.log(textoUmaLinha);
console.log(textoMultiplasLinhas);

// Cuidado com tab e espaço em branco
console.log(' '.match(/\s/g));