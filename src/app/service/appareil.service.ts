import { identifierModuleUrl } from '@angular/compiler';

export class AppareilService {

    appareils = [
        {
            id: 1,
            name: 'Ampli',
            status: 'allumé'
        },
        {
            id: 2,
            name: 'Ordinateur',
            status: 'eteint'
        },
        {
            id: 3,
            name: 'Enceintes',
            status: 'allumé'
        },
        {
            id: 4,
            name: 'Machine',
            status: 'eteint'
        }
    ];

    getAppareilById(id: number) {
        const appareil = this.appareils.find(
          (s) => {
            return s.id === id;
          }
        );
        return appareil;
    }

    switchOnAll() {
        for (let appareil of this.appareils) {
            appareil.status = 'allumé'
        }
    };

    switchOffAll() {
        for (let appareil of this.appareils) {
            appareil.status = 'eteint'
        }
    };

    swithOnOne(index: number) {
        this.appareils[index].status = 'allumé';
    }

    swithOffOne(index: number) {
        this.appareils[index].status = 'eteint';
    }

}