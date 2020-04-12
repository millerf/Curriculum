import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

@Component({
  selector: 'app-beating-logo',
  templateUrl: './beating-logo.component.html',
  styleUrls: ['./beating-logo.component.scss'],
  animations: [trigger('beatingEffect', [
    state('initial', style({})),
    state('final', style({})),
    transition('*<=>*', animate('1s', keyframes([
      style({ transform: 'scale(1)', offset: 0 }),
      style({ transform: 'scale(0.95)', offset: 8 / 100 }),
      style({ transform: 'scale(1.05)', offset: 17 / 100 }),
      style({ transform: 'scale(0.95)', offset: 25 / 100 }),
      style({ transform: 'scale(0.95)', offset: 87.5 / 100 }),
      style({ transform: 'scale(1)', offset: 1 }),
    ]))),
  ]),
  ]
})
export class BeatingLogoComponent implements OnInit{

  public currentState = 'initial';

  ngOnInit() {
    this.onDone();
  }

  onDone() {
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
  }



}
