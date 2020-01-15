const texto = ` 
ca	r
r		o s!
`

// \t - TAB
// \n - quebra de linha
// \s - espaço em branco

// \s é um shorthand para outros "brancos" \t\n\f
console.log(texto.match(/ca\tr\nr\t\to\ss!/));