"use strict";

var usuario = {
  nombre: "Carlos",
  correo: "correos@correo.com",
  edad: 22,
  profesion: "desarrollador"
};
var nombre = usuario.nombre,
    correo = usuario.correo; //extraemos estos dos atributos

var mostrarInfo = function mostrarInfo(_ref) {
  var nombre = _ref.nombre,
      _ref$profesion = _ref.profesion,
      profesion = _ref$profesion === void 0 ? "estudiante" : _ref$profesion;
  return console.log("".concat(nombre, " es ").concat(profesion));
};

mostrarInfo(usuario);