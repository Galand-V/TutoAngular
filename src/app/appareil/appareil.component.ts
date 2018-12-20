import { Component, Input, OnInit } from '@angular/core';
import { AppareilService } from '../service/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {
  @Input() appareilName: string;
  @Input() appareilStatus: string;
  @Input() indexOfAppareil:number;
  constructor(private AppareilService: AppareilService) { }

  ngOnInit() {
  }

  getStatus() {
    return this.appareilStatus;
  }

  getColor() {
    if(this.appareilStatus === 'allumé') {
      return 'green';
    } else if(this.appareilStatus === 'eteint') {
      return 'red';
    }
 }

 onSwitchOn() {
   this.AppareilService.swithOnOne(this.indexOfAppareil);
 }

 onSwitchOff() {
  this.AppareilService.swithOffOne(this.indexOfAppareil);
 }

}