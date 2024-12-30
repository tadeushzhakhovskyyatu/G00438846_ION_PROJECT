import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonItem, IonList, IonText, IonButton } from '@ionic/angular/standalone';
import { HttpOptions } from '@capacitor/core';
import { MyHttpService } from '../services/my-http.service';
import { MyDataService } from '../services/my-data.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonItem, IonList, IonText, IonButton ]
})
export class WeatherPage implements OnInit {

 vovasa: string ="";
  WeatherFeature: any = []

  apiKeyWeather = "b3120fa3dff2645896367e00e939d638";
  newsInfo!: any;
  keywordWeaaa: string = ""; 
  passingName: string= "";
  options: HttpOptions = {
       //url: "https://newsdata.io/api/1/latest?apikey="+ this.apiKeyWeather + "&country="
    url: "http://api.weatherstack.com/current?access_key="   + this.apiKeyWeather + "&query="
  }
//IT'S WEATHER.TS==================

  constructor(private mhs: MyHttpService, private ds: MyDataService) { }

  ngOnInit() {
    this.getkw33();//IT'S WEATHER.TS
    //this.getkw44();
  }
/*
    async getkw44() {//IT'S WEATHER.TS

      this.passingName= await this.ds.get("kwPassingName");
  }*/

  async getkw33() {//IT'S WEATHER.TS

   this.passingName= await this.ds.get("kwPassingName");///to get the passed the [string array long-capital-name] gotten from rest API, as to thee Project task

    this.keywordWeaaa = await this.ds.get("kwWeather");//to get the passed the cropped to 'one-word' shape out of the upper one to align to Weatherstack API
    this.options.url = this.options.url.concat(this.keywordWeaaa)
      
    let result = await this.mhs.get(this.options)
    
    this.newsInfo = result.data.results
    console.log( this.keywordWeaaa  )
    console.log( this.passingName  )
    console.log(JSON.stringify(this.WeatherFeature))
    console.log(this.options.url)
    console.log( result.data)

    //No objects, just an array to retrieve on from topics & items there (no need for//for-loop: const person in result.data.current){//REDO THIS!!!!  IT'S WEATHER.TS
      this.WeatherFeature.push({v: result.data.current.temperature, l: result.data.current.weather_descriptions, m: result.data.current.weather_icons })
      
     //NO END LOOP }

 /*
  console.log( this.WeatherFeature.valueOf())
  console.log( result.data.results[0].title)

  this.vovasa = result.data.results[0].title

  console.log( this.vovasa)//checking typescript miracles for myself*/
  
  
}//END async getnames(){


}