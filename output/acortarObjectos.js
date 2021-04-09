"use strict";

// const crearObjeto = (nombre, edad) => {
//     return{
//         nombre: nombre,
//         edad: edad
//     }
// }
// ahora con ES6
var crearObjeto = function crearObjeto(nombre, edad) {
  return {
    nombre: nombre,
    edad: edad,
    mostrarInfo: function mostrarInfo() {
      return "".concat(info, " tiene ").concat(edad, " a\xF1os");
    }
  };
};

console.log(crearObjeto("Carlos", 23));