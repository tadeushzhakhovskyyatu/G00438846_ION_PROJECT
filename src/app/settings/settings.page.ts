import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonRadioGroup, IonRadio, IonItem, IonLabel, IonListHeader, IonList } from '@ionic/angular/standalone';
import { MyDataService } from '../services/my-data.service';
import { Router } from '@angular/router';
import { NgModelGroup } from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: true,
  imports: [IonList, IonListHeader, IonLabel, IonItem, IonRadio, IonRadioGroup, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})

export class SettingsPage {
  personModel: string = "";
  keywordSeti: string = "";
  metric: string = "metric";
  scientific: string = "scientific";
  fahreneit: string = "fahreneit";
  m: string = "m";
  s: string = "s";
  f: string = "f";


  constructor(private router: Router, private dsSe: MyDataService) { }
  //radioChecked(){



  async radioChecked(keywordSeti: string) {//to pass unit-word of this extremely time-consuming project - as the Radio-checked word to the weather page
    if (keywordSeti == null) {//if no one checked, it passes pre-selected 'm' thing
      keywordSeti = this.m;
    }

    await this.dsSe.set("kwUnit", keywordSeti);

    console.log("this Radio")
    console.log(keywordSeti)
    alert('You checked: ' + keywordSeti);
    //this.router.navigate(['/home'])

  }


}