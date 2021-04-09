const usuario = {
    nombre: "Carlos",
    correo: "correos@correo.com",
    edad: 22,
    profesion: "desarrollador"
}

const {nombre, correo} = usuario; //extraemos estos dos atributos

const mostrarInfo = ( { nombre, profesion = "estudiante"} ) => console.log(`${nombre} es ${profesion}`);

mostrarInfo(usuario);