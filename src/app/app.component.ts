import { Component } from '@angular/core';
import { AppareilService } from './service/appareil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  isAuth = false;

  lastUpdate = new Date();

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

  constructor(private appareilService: AppareilService) {
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