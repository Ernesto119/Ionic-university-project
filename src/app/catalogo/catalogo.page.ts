import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent, IonHeader, IonTitle, IonToolbar, IonMenuButton,
  IonButtons, IonRow, IonText, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardContent
} from '@ionic/angular';
import { Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map, firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.page.html',
  styleUrls: ['./catalogo.page.scss'],
  imports: [
    IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,
     IonMenuButton,  IonButtons, IonRow, IonText, IonCol, IonCard,
    IonCardHeader, IonCardTitle, IonCardContent, RouterModule
  ]
})
export class CatalogoPage implements OnInit {
  items: any[] = [];

  constructor(
    private router: Router,
    private http: HttpClient,
    private cdr: ChangeDetectorRef,
  ) { }

  async ngOnInit() {
    await this.loadItems();
  }

  // Ionic lifecycle hook: triggers every time the view enters / becomes active
  async ionViewWillEnter() {
    await this.loadItems();
  }

  async loadItems() {
    try {
      this.items = await this.getItems();
      this.cdr.detectChanges();
    } catch (err) {
      console.error('Error fetching data.json: ', err);
      this.items = [];
      this.cdr.detectChanges();
    }
  }

  async getItems(): Promise<any[]> {
    const res: any = await firstValueFrom(
      this.http.get('assets/files/data.json')
    );
    return res?.data || [];
  }

}
