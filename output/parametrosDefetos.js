"use strict";

function registrarUsuario(nombre) {
  var pais = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "No especificado";
  var correo = arguments.length > 2 ? arguments[2] : undefined;
  var telefono = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "000000";
  return "Nombre: ".concat(nombre, ", Pais: ").concat(pais, ", Corres: ").concat(correo, ", telefono: ").concat(telefono);
} //Telefono tiene un valor por defecto


console.log(registrarUsuario("Carlo", undefined, "correos"));