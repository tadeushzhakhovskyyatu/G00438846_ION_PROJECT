import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonItem, IonList, IonText, IonButton } from '@ionic/angular/standalone';
import { HttpOptions } from '@capacitor/core';
import { MyHttpService } from '../services/my-http.service';
import { MyDataService } from '../services/my-data.service';
import { Router } from '@angular/router'; 


@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonItem, IonList, IonText, IonButton ]
})
export class NewsPage implements OnInit {

  vovasa: string ="";
  newsFeature: any = []

  apiKey = "pub_636194e7a5f5682c48ad2aa78f27d6f87eef5";
  newsInfo!: any;
  keywordFre: string = "";
  options: HttpOptions = {
   // url: "https://www.omdbapi.com/?apikey=" + this.apiKey + "&s="
    url: "https://newsdata.io/api/1/latest?apikey="+ this.apiKey + "&country="
  }


  constructor(private mhsN: MyHttpService, private dNews: MyDataService) { }

  ngOnInit() {
    this.getkw11();
  }
  async getkw11() {

    this.keywordFre = await this.dNews.get("kwNews");
    this.options.url = this.options.url.concat(this.keywordFre)
      
    let result = await this.mhsN.get(this.options)
    
    this.newsInfo = result.data.results
    console.log( this.keywordFre  )
    console.log(JSON.stringify(this.newsFeature))
    console.log(this.options.url)
    console.log( result.data)

    for (const person in result.data.results){
      this.newsFeature.push({z: person, x: result.data.results[person].title, y: result.data.results[person].description, w: result.data.results[person].image_url })
      
    

  }//END LOOP

 
  console.log( this.newsFeature.valueOf())
  console.log( result.data[0].cca2)

  this.vovasa = result.data[0].cca2

  console.log( this.vovasa)//checking typescript miracles for myself
  
  
}//END async getnames(){
}
