const texto = `Email dos aprovados:
- fulando@cod3r.com.br
- leandrodbdias@gmail.com
- joao@empresa.info.br
- maria_silva@registro.br
- rafa.sampaio@yahoo.com`;

console.log(texto.match(/\S+@\w+\.\w{2,6}(\.\w{2})?/g));
