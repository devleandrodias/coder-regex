// Requisitos, Letras maiusculas, minusculas, simbolos, numeros, mínimo 6 caracteres maximo 20
const texto = `
123456
cod3r
QUASE123!
#OpA1
#DSVDFVEedvdv@4242!#!@311qer1qd3f

#OpA1?
Foi123!
`;

console.log(texto.match(/^.{6,20}$/gm));
console.log(texto.match(/^(?=.*[A-Z]).{6,20}$/gm));
console.log(
  texto.match(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%¨&*^?]).{6,20}$/gm)
);
