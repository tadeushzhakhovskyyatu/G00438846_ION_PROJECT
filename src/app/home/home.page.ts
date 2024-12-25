import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItemDivider, IonIcon } from
   '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { settings } from 'ionicons/icons';


@Component({
   selector: 'app-home',
   templateUrl: 'home.page.html',
   styleUrls: ['home.page.scss'],
   standalone: true,
   imports: [IonIcon, IonItemDivider, IonHeader, IonToolbar, IonTitle, IonContent, RouterLink],
})
export class HomePage {
   constructor() {
      addIcons({ settings });
   }
}
