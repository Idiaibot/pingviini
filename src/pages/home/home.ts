import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
quote: {quote:string, source:string} 
  constructor(public navCtrl: NavController, public dataProvider: DataProvider) {
    this.quote = this.dataProvider.palautarandom(this.dataProvider.quotes)
  }
  doRefresh(refresher) {
      console.log('Begin async operation', refresher);

      setTimeout(() => {
        console.log('Async operation has ended');
        this.quote = this.dataProvider.palautarandom(this.dataProvider.quotes);
        console.log(this.quote);
        refresher.complete();
      }, 250);
    }
}
