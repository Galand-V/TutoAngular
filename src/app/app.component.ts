import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  isAuth = false;

  appareilOne = 'Machine à laver';
  appareilTwo = 'Télévision';
  appareilThree = 'Enceintes';

  appareilEteint = 'Eteint';
  appareilAllume = 'Allumé';


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