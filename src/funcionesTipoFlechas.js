const nombres = ['Carlos', 'Alejandro', 'Manu', 'Joy'];

// const numero_caracteres = nombres.map(function (nombre){
//     console.log(`${nombre} tiene ${nombre.lenght} letras`);
// });

const numero_caracteres = nombres.map( nombre => `${nombre} tiene ${nombre.lenght} letras`);

console.log(numero_caracteres);

// (parametro) => {
//     return //codigo a ejecutar
// }