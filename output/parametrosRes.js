"use strict";

//parametros Rest
// const mostrarDatos = (nombre, edad, correo) => {
//     console.log(nombre, edad, correo);
// }
// mostrarDatos("Carlos", 23, "correos");
var mostrarDatos = function mostrarDatos() {
  for (var _len = arguments.length, datos = new Array(_len), _key = 0; _key < _len; _key++) {
    datos[_key] = arguments[_key];
  }

  console.log(datos);
};

mostrarDatos("Carlos", 23, "correos"); //mostra un arreglo
//parametros Spre