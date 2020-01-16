const texto = 'ABC [abc] a-c 1234';

// isso é um intervalo válido
console.log(texto.match(/[a-c]/g));

// não define um range
console.log(texto.match(/a-c/g));

// intervalos usam a ordem da tabela UNICODE
// entra A-Z e (tem alguns símbolos no meio [ \ ] ^ _ `) a-z

console.log(texto.match(/[A-z]/g));

// intervalos tem que respeitar a ordem da tabela UNICODE
console.log(texto.match(/[a-Z]/g));
console.log(texto.match(/[4-1]/g)); 
