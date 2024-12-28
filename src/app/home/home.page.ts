import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItemDivider, IonIcon, IonInput, IonButton } from
   '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { settings } from 'ionicons/icons';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MyDataService } from '../services/my-data.service';

@Component({
   selector: 'app-home',
   templateUrl: 'home.page.html',
   styleUrls: ['home.page.scss'],
   standalone: true,
   imports: [IonButton, IonInput, IonIcon, IonItemDivider, IonHeader, IonToolbar, IonTitle, IonContent, FormsModule],
})
export class HomePage {
 

   keyword: string = "";
   constructor(private router: Router, private ds: MyDataService) { 
      addIcons({ settings });
   }
 
   async openCountries() {
     await this.ds.set("kw", this.keyword);
     this.router.navigate(['/countries'])
}
}