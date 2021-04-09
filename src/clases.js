class Usuario {
    constructor (nombre, edad, correo){
        this.nombre = nombre,
        this.edad = edad,
        this.correo = correo
    }

    mostrarSaludos(mensaje){
        return mensaje;
    }

    mostrarInfo(){
        return `
            <b>Nombre:</b> ${this.nombre} <br />
            <b>Edad:</b> ${this.edad} <br />
            <b>Correo:</b> ${this.correo} <br />
            <hr />
        `;
    }
}

class Estudiante extends Usuario{
    constructor(nombre, edad, correo, carrera){
        super(nombre, edad, correo);
        this.carrera = carrera;
    }
    mostrarInfo(){
        return `
            <b>Nombre:</b> ${this.nombre} <br />
            <b>Edad:</b> ${this.edad} <br />
            <b>Correo:</b> ${this.correo} <br />
            <b>Carrera:</b> ${this.carrera} <br />
            <hr />
        `;
    }
}

const carlos = new Usuario("Carlos Arturo", 32, "correo@correo.com");
document.write(carlos.edad);

const alejandro = new Usuario("Alejandro", 30);
document.write(alejandro.nombre);
document.write(carlos.mostrarInfo());