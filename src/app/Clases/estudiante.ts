import { Usuario } from "../Clases/usuario";

export class Estudiante extends Usuario {

  matricula: string;

  constructor(nombre: string, matricula: string) {
    super(nombre)
    this.matricula = matricula
  }
}
