import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonMenu, IonMenuButton, IonLabel,
  IonButtons, IonRow, IonText, IonCol, IonCard
} from '@ionic/angular';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';


@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.page.html',
  styleUrls: ['./catalogo.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton,
    IonMenu, IonMenuButton, IonLabel, IonButtons, IonRow, IonText, IonCol, IonCard]
})
export class CatalogoPage implements OnInit {
  items: any=[]

  constructor(
    private router: Router,
    private http: HttpClient,
  ) { }

  ngOnInit() {
    this.getitems().subscribe(res => {
      console.log("res: ", res)
      this.items = res
    })
  }


  getitems() {
    return this.http
      .get("/assets/files/data.json")
      .pipe(
        map((res: any) => {
          return res.data;
        }
        )
      )
  }

}
