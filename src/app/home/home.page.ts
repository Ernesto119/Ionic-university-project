import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent } from '@ionic/angular';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/angular';
import { Estudiante } from "../Clases/estudiante";
import { Perro } from "../Clases/perro";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonMenuButton,
    IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonButtons
    ]
})
export class HomePage implements OnInit {
  name: string = "Pica";
  suma: number = 0;
  area: number = 0;

  estudiantes: Estudiante;
  negrita: Perro;

  constructor() {
    this.estudiantes = new Estudiante("isaais", "12321312");
    this.negrita = new Perro("Negrita");
  }

  ngOnInit() {
    this.name = "pica pollo chino";
    this.suma = this.Sumar(1, 9);
    this.area = this.CalcularAreaTriangulo(7, 21);
    this.estudiantes.iniciarSession();
    this.negrita.ladrar()

}
  Sumar(a: number, b: number): number {
    return a + b;
  }
  CalcularAreaTriangulo(base: number, altura: number): number {
    return (altura + base) /2

  }


}
