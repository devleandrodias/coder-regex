// Desafio Emails

const texto = `Email dos aprovados:
                - fulando@cod3r.com.br
                - leandrodbdias@gmail.com
                - joao@empresa.info.br
                - maria_silva@registro.br
                - rafa.sampaio@yahoo.com`;

const regexEmailSimples = /\w+@\w+\.\w{2,4}/g;
const regexEmailMelhorada = /[\w.]+@\w+\.\w+/g;
const regexEmailFinal = /[\w.]+@\w+\.\w{0,4}\.?\w{0,2}/g;

console.log(texto.match(regexEmailFinal));