import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonItem, IonList } from '@ionic/angular/standalone';
import { HttpOptions } from '@capacitor/core';
import { MyHttpService } from '../services/my-http.service';
import { MyDataService } from '../services/my-data.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.page.html',
  styleUrls: ['./countries.page.scss'],
  standalone: true,
  imports: [IonList, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent]
})
export class CountriesPage implements OnInit {


  countryFeature: any = []
  name!: any;
  keyword: string = "";
  countryInfo!: any;
  options: HttpOptions = {
    url: "https://restcountries.com/v3.1/name/"
   
  }

  constructor(private ds: MyDataService, private mhs: MyHttpService) { }

  ngOnInit() {
    this.getkw();
  }

  async getkw() {

    this.keyword = await this.ds.get("kw");
    this.options.url = this.options.url.concat(this.keyword)
      
    let result = await this.mhs.get(this.options)
    
    this.countryInfo = result.data

    console.log(JSON.stringify(this.countryInfo))

    for (const person in result.data){
      this.countryFeature.push({r: person, n: result.data[person].name.official, c: result.data[person].cioc, f: result.data[person].flags.png})
     
    }




  }
   

}


