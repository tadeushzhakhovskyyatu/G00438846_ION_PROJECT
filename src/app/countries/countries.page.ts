import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonItem, IonList, IonButton } from '@ionic/angular/standalone';
import { HttpOptions } from '@capacitor/core';
import { MyHttpService } from '../services/my-http.service';
import { MyDataService } from '../services/my-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.page.html',
  styleUrls: ['./countries.page.scss'],
  standalone: true,
  imports: [IonButton, IonList, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent]
})
export class CountriesPage implements OnInit {

  vova: string = "";
  countryFeature: any = []
  name!: any;
  keyword: string = "";
  countryInfo!: any;
  options: HttpOptions = {
    url: "https://restcountries.com/v3.1/name/"

  }


  keywordNews: string = "";
  keywordWeather: string = "";
  array: any = [];

  constructor(private ds: MyDataService, private mhs: MyHttpService, private routerNews: Router, private dNews: MyDataService) { }


  async openNews(keywordNews: string) {     //WITH ARGS
    await this.dNews.set("kwNews", keywordNews);
    this.routerNews.navigate(['/news'])
    console.log(keywordNews)
    console.log("BUBA")//helps me to quickly spot around through pages where is what I need
  }

  async openWeather(keywordWeatherLot: string) {     //WITH ARGS

    this.array = keywordWeatherLot.split(",");
    this.array = keywordWeatherLot.split(" ");

    this.keywordWeather = this.array[0].replace(",", "");
    await this.dNews.set("kwPassingName", keywordWeatherLot);//to pass the [string array long-capital-name] gotten from rest API, as to thee Project task
    await this.dNews.set("kwWeather", this.keywordWeather);//to pass the cropped to 'one-word' shape out of the upper one to align to Weatherstack API
    this.routerNews.navigate(['/weather'])
    console.log(this.keywordWeather)
    console.log("MAMBO")//helps me to quickly spot around through pages where is what I need
    console.log(keywordWeatherLot)
  }

  ngOnInit() {
    this.getkw();

  }

  async getkw() {

    this.keyword = await this.ds.get("kw");
    this.options.url = this.options.url.concat(this.keyword)

    let result = await this.mhs.get(this.options)

    this.countryInfo = result.data

    //console.log(JSON.stringify(this.countryInfo))

    for (const person in result.data) {
      this.countryFeature.push({ r: person, n: result.data[person].name.official, c: result.data[person].cioc, f: result.data[person].flags.png, a: result.data[person].cca2, z: result.data[person].capital.toString() })



    }//END LOOP


    console.log(this.countryFeature.valueOf())
    console.log(result.data[0].cca2)

    this.vova = result.data[0].cca2

    console.log(this.vova)//checking typescript miracles for myself


  }//END async getnames(){




}

