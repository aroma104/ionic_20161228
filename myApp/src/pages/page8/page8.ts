import { Component, trigger, state, style, transition, animate, keyframes } from '@angular/core';

import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-page8',
  templateUrl: 'page8.html',
  animations: [

    trigger('flip', [
      state('flipped', style({
        transform: 'rotate(180deg)',
        backgroundColor: '#f50e80'
      })),
      transition('* => flipped', animate('400ms ease'))
    ]),

    trigger('flyInOut', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(150%, 0, 0)'
      })),
      transition('in => out', animate('200ms ease-in')),
      transition('out => in', animate('200ms ease-out'))
    ]),

    trigger('fade', [
      state('visible', style({
        opacity: 1
      })),
      state('invisible', style({
        opacity: 0.1
      })),
      transition('visible <=> invisible', animate('200ms linear'))
    ]),

    trigger('bounce', [
      state('bouncing', style({
        transform: 'translate3d(0,0,0)'
      })),
      transition('* => bouncing', [
        animate('300ms ease-in', keyframes([
          style({transform: 'translate3d(0,0,0)', offset: 0}),
          style({transform: 'translate3d(0,-10px,0)', offset: 0.5}),
          style({transform: 'translate3d(0,0,0)', offset: 1})
        ]))
      ])
    ])

  ]
})
export class Page8 {

  flipState: String = 'notFlipped';
  flyInOutState: String = 'in';
  fadeState: String = 'visible';
  bounceState: String = 'noBounce';

  constructor(
    public alerCtrl: AlertController
  ) {}

  doAlert(){
      let alert=this.alerCtrl.create({

        title:'Button Click',
        subTitle:'Button Clicked in page8',
        buttons:['Ok']

      });
      alert.present();
  }

  toggleFlip(){
    this.flipState = (this.flipState == 'notFlipped') ? 'flipped' : 'notFlipped';
  }

  toggleFlyInOut(){

    this.flyInOutState = 'out';

    setInterval(() => {
      this.flyInOutState = 'in';
    }, 5000);

  }

  toggleFade() {
    this.fadeState = (this.fadeState == 'visible') ? 'invisible' : 'visible';
  }

  toggleBounce(){
    this.bounceState = (this.bounceState == 'noBounce') ? 'bouncing' : 'noBounce';
  }

  doConfirm() {
    let confirm = this.alerCtrl.create({
      title: 'Join your e-mail',
      message: 'Agree or DisAgree selecte',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present()
  }

}
