const texto = `Lista telefônica:
                - (11) 9875-1212
                - (11)9875-1212
                - (235)99875-1212
                - (235) 99875-1212
                - 9875-1212
                - 98765-4321
                - 992080397`;

const regexTelefone = /(\(\d{2,3}\)*\s*)?\d{4,5}-?\d{4}/g;

console.log(texto.match(regexTelefone));
