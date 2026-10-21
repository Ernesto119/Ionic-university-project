import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonMenuButton,
  IonButtons,
  IonRow,
  IonText,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonIcon,
} from '@ionic/angular';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { addIcons } from 'ionicons/components';
import {
  callOutline,
  locationOutline,
  logoWhatsapp,
  manOutline,
} from 'ionicons/icons';
import { map } from 'rxjs';

@Component({
  selector: 'app-catalogo-detalle',
  templateUrl: './catalogo-detalle.page.html',
  styleUrls: ['./catalogo-detalle.page.scss'],
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonMenuButton,
    IonButtons,
    IonRow,
    IonText,
    IonCol,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonButton,
    IonIcon,
    RouterModule,
  ],
})
export class CatalogoDetallePage implements OnInit {
  finalid: any;
  id: any;
  nombre: string = '';
  image: string = '';
  description: string = '';
  telefono: string = '';
  lugar: any;

  constructor(
    private router: Router,
    private http: HttpClient,
    private activateRoute: ActivatedRoute,
    private cdr: ChangeDetectorRef,
  ) {
    addIcons({ logoWhatsapp, callOutline, locationOutline });
  }

  ngOnInit() {
    this.id = this.activateRoute.snapshot.paramMap.get('id');
    this.finalid = Number(this.id) - 1;
    this.getLugares().subscribe((res: any) => {
      this.lugar = res[this.finalid];
      if (this.lugar) {
        this.nombre = this.lugar.nombre;
        this.image = this.lugar.image;
        this.description = this.lugar.description;
        this.telefono = this.lugar.telefono;
        this.cdr.detectChanges();
      }
    });
  }

  getLugares() {
    return this.http.get('assets/files/data.json').pipe(
      map((res: any) => {
        return res.data;
      }),
    );
  }

  abrirMapa() {
    window.open('');
  }

  llamar(telefono: string) {
    if (!telefono) {
      return;
    }
    window.location.href = `tel:${telefono}`;
  }

  abrirWhatsapp(telefono: string) {
    if (!telefono) {
      return;
    }

    const numero = telefono.replace(/\D/g, ``);

    const numeroWhatsapp = `1${numero}`;
    const url = `https://wa.me/${numeroWhatsapp}`;

    window.open(url, '_blank');
  }
}
