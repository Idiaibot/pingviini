import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

/*
Generated class for the DataProvider provider.

See https://angular.io/guide/dependency-injection for more info on providers
and Angular DI.
*/
@Injectable()
export class DataProvider {

  public quotes:any
  public jaakaapintila:boolean
  public hothot:boolean
  public aukisekuntti:number = new Date(2018, 1,1).valueOf() + 150000
  public lampotila:number = 5
  public hothothot:number = 4
  public toastesilla = false
  public chartviite: any
  public viikkoarvot = [352, 259, 340, 812]
  public linearvot = []

  constructor( private toastCtrl: ToastController) {
    let arvo = (this.aukisekuntti - new Date(2018, 1,1).valueOf())/1000;
    this.viikkoarvot.push(arvo);
    this.randomarvot();

    this.jaakaappiaika();
    console.log('Hello DataProvider Provider');
    this.quotes = [
      {quote: 'I’m going to make him an offer he can’t refuse, about electricity', source: 'The Godfather'},
      {quote: 'They may take our lives, but they’ll never take our freedom to recycle! ', source: 'Braveheart'},
      {quote: 'Go ahead, make my day by eating veggies', source: 'Sudden Impact'},
      {quote: 'I’m having an old friend for vegan dinner ', source: 'Silence Of the Lambs'},
      {quote: 'I’m the recycling king of the world ', source: 'Titanic'},
      {quote: 'The greatest trick the devil ever pulled was convincing the world climate change didn’t exist', source: 'The Usual Suspects'},
      {quote: 'Meat? Where we’re going we don’t need meat', source: 'Back to the Future'},
      {quote: 'You’ve got to ask yourself one question: Do you feel the effect of climate change? Well, do ya punk? ', source: 'Dirty Harry'},
      {quote: 'Here’s Johnny, with biodegradable bags! ', source: 'The Shining'},
      {quote: 'You had me at renewable energy source ', source: 'Jerry Maguire'},
      {quote: 'Yippie-ki-yay, motherfucker about recycling! ', source: 'Die Hard'},
      {quote: 'You can’t handle the truth about airplane traveling’s environmental foot print! ', source: 'A Few Good Men'},
      {quote: 'I’ll be back, but I’ll still turn the lights off when leaving the room', source: 'The Terminator'},
      {quote: 'I’ll have what she’s having, but vegetarian', source: 'When Harry Met Sally'},
      {quote: 'I am your father, so turn off the faucet while brushing your teeth', source: 'Star Wars: Episode V – The Empire Strikes Back'},
      {quote: 'The first rule of veganism is: you never stop talking about veganism', source: 'Fight Club'},
      {quote: 'There’s no place like home when talking about energy efficiency ', source: 'The Wizard of Oz'},
      {quote: 'You’re gonna need a bigger planet', source: 'Jaws'},
      {quote: 'Frankly, my dear, I give a damn about recycling ', source: 'Gone With the Wind'}
    ]
  }

  palautarandom(taulu){
    let pos = Math.floor(Math.random() *taulu.length)
    var x =taulu[pos];
    console.log(x);
    return x;
  }
randomarvot(){
  for(var i=0; i<4;i++){
    this.linearvot[i] = Math.floor(Math.random() * (8 - 4 + 1)) + 4;
  }

}

  jaakaappiaika=()=>{
    setInterval(()=>{
      this.yolampotila();
      if(this.jaakaapintila){
        this.aukisekuntti += 1000;
        this.apina();
        this.paivitaChart(this.chartviite);
      }
      else{
        this.apina2();
      }
    },1000)
  }

  yolampotila=()=>{
    if(this.hothot){
      this.hothothot = 8;

    }
    else{
      this.hothothot = 4;
    }
  }

  rekisteroiChart(chart){
    this.chartviite = chart;
  }

  paivitaChart(chart){
    if(chart){
      this.viikkoarvot[4] = (this.aukisekuntti - new Date(2018, 1,1).valueOf())/1000;
      // console.log(chart);
      chart.data.datasets[0].data = this.viikkoarvot;
      chart.update();
    }
  }



  presentToast=()=> {
    setTimeout(()=>{
      if(this.hothothot > 6 && this.toastesilla == false){
        this.toastesilla = true
        let toast = this.toastCtrl.create({
          showCloseButton: true,
          message: 'Jääkaapin suosituslämpötila on +2 - +6 astetta. Säädä jääkaappisi lämpötilaa',
          position: 'bottom',
          closeButtonText: 'ok'
        });

        toast.onDidDismiss(() => {
          this.toastesilla = false
          console.log('Dismissed toast');
        });

        toast.present();
      }
    },1500)
  }

  apina=()=>{
    console.log(this.lampotila);
    switch(Math.floor(this.lampotila)) {
      case 4:
      this.lampotila += 1 / 20;
      break;
      case 5:
      this.lampotila += 1 / 53;
      break;
      case 6:
      this.lampotila += 1 / 61;
      break;
      case 7:
      this.lampotila += 1 / 69;
      break;
      case 8:
      this.lampotila += 1 / 80;
      break;
      case 9:
      this.lampotila += 1 / 93;
      break;
      case 10:
      this.lampotila += 1 / 112;
      break;
      case 11:
      this.lampotila += 1 / 140;
      break;
      case 12:
      this.lampotila += 1 / 250;
      break;
    }
  }

  apina2=()=>{
    console.log(this.lampotila);
    switch(Math.floor(this.lampotila)) {
      case 5:
      this.lampotila -= 1 / 53;
      break;
      case 6:
      this.lampotila -= 1 / 261;
      break;
      case 7:
      this.lampotila -= 1 / 190;
      break;
      case 8:
      this.lampotila -= 1 / 160;
      break;
      case 9:
      this.lampotila -= 1 / 100;
      break;
      case 10:
      this.lampotila -= 1 / 60;
      break;
      case 11:
      this.lampotila -= 1 / 35;
      break;
      case 12:
      this.lampotila -= 1 / 20;
      break;
    }
  }
}
