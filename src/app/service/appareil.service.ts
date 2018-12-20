export class AppareilService {

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

      switchOnAll () {
          for(let appareil of this.appareils) {
              appareil.status = 'allumé'
          }
      };

        switchOffAll () {
            for(let appareil of this.appareils) {
                appareil.status = 'eteint'
            }
        };
    
        swithOnOne (index: number) {
            this.appareils[index].status = 'allumé';
        }

        swithOffOne (index: number) {
            this.appareils[index].status = 'eteint';
        }

    }