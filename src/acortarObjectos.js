// const crearObjeto = (nombre, edad) => {
//     return{
//         nombre: nombre,
//         edad: edad
//     }
// }

// ahora con ES6

const crearObjeto = (nombre, edad) => {
    return{
        nombre,
        edad,
        mostrarInfo() {
            return `${info} tiene ${edad} años`
        }
    }
}

console.log(crearObjeto("Carlos", 23))