export class Usuario {
  nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre
  }
  iniciarSession(): void{
    console.log(`${this.nombre} inicio sesion`)
  }
}
