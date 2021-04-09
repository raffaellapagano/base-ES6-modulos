"use strict";

var nombres = ['Carlos', 'Alejandro', 'Manu', 'Joy']; // const numero_caracteres = nombres.map(function (nombre){
//     console.log(`${nombre} tiene ${nombre.lenght} letras`);
// });

var numero_caracteres = nombres.map(function (nombre) {
  return "".concat(nombre, " tiene ").concat(nombre.lenght, " letras");
});
console.log(numero_caracteres); // (parametro) => {
//     return //codigo a ejecutar
// }