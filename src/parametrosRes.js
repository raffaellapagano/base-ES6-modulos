//parametros Rest

// const mostrarDatos = (nombre, edad, correo) => {
//     console.log(nombre, edad, correo);
// }

// mostrarDatos("Carlos", 23, "correos");

const mostrarDatos = (...datos) => {
    console.log(datos);
}

mostrarDatos("Carlos", 23, "correos"); //mostra un arreglo


//parametros Spread

const mostrarDatos = () => {
    console.log();
}

const arregloDatos = ["Carlos", 23, "correos"];
mostrarDatos(...arregloDatos); // de arreglo a objecto