"use strict";

//para Ajax Codigo espera que esperas algo y mientras hace otra cosa
var promesa = new Promise(function (resolve, reject) {
  //accion que se ejecutará
  // resolve();
  // reject();
  setTimeout(function () {
    var exito = true;

    if (exito) {
      resolve("La operacio está ok");
    } else {
      reject("La operacio NO está ok");
    }
  }, 4000);
});
promesa.then(function (mensaje) {
  alert(mensaje);
});
promesa["catch"](function (mensaje) {
  alert(mensaje);
});