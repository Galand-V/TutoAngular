import { Component } from '@angular/core';
import { AppareilComponent } from './appareil/appareil.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  isAuth = false;

  appareils = [
    {
      name: 'Ampli',
      status: 'allumé'
    },
    {
      name: 'Ordinateur',
      status: 'eteint'
    },
    {
      name: 'Enceintes',
      status: 'allumé'
    },
    {
      name: 'Machine',
      status: 'eteint'
    }
  ];


  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }
  onAllumer() {
    console.log('On allume tout');
  }
}