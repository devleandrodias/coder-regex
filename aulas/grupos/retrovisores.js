const texto1 = '<b>Destaque</b><strong>forte</strong><div>Conteudo</div>';
console.log(texto1.match(/<(\w+)>.*<\/\1>/g));

const texto2 = 'Lentamente é mente muito lenta.';
console.log(texto2.match(/(lenta)(mente).*\2.*\1\./gi));
console.log(texto2.match(/(?:lenta)(mente).*\1/gi)); // ?: não captura o valor

/**
 * Um grupo alem de delimitar atraves da expressão ele armazena
 * o valor que foi encontrado através da expressão;
 *
 * Os retrovisdores podem referenciar esses valores armazenados
 */

console.log(texto2.match(/(lenta)(mente)/gi));
console.log(texto2.match(/(lenta)(mente)?/gi));
console.log(texto2.replace(/(lenta)(mente)/gi, 'ABC_$2_DFG')); // Pega o grupo e substitui pelo segundo grupo