"use strict";

var texto = "hola mundo";
console.log(texto, "empieza con a:", texto.startsWith("a")); //metodo comprueba con true o false

console.log(texto, "empieza con a:", texto.endsWith("o")); //metodo comprueba con true o false

texto.includes('Carlos'); //incluye este texto
//metodo para array

var amigos = ["Carlos", "Cesar", "Manuel"];
console.log(amigos.includes("Manuel")); //encuentra el primer elemento que cumpla con la condición

console.log(amigos.find(function (amigo) {
  return amigo.length > 6;
})); //encontrar el index del array

console.log(amigos.findIndex(function (amigo) {
  return amigo === "Manuel";
}));