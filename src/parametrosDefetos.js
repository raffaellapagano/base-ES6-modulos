function registrarUsuario (nombre, pais = "No especificado", correo, telefono = "000000") {
    return `Nombre: ${nombre}, Pais: ${pais}, Corres: ${correo}, telefono: ${telefono}`
}

//Telefono tiene un valor por defecto

console.log(registrarUsuario("Carlo", undefined, "correos"));