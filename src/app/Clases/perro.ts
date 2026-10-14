export class Perro {
  nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre
  }
  ladrar(): string {
    return `${this.nombre} ladra`
  }
}
