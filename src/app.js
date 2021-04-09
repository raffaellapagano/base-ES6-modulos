import {mensajeAlerta, saludo} from "./modulos/mensajeAlerta";
import Persona from "./modulos/clasePersona"; //quita llave entre Persona si es por default

// mensajeAlerta("Hola");
// saludo();

const carlos = new Persona ("CArlo", 23);
carlos.mostrarInfo();