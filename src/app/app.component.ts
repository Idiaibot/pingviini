import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { SettingsPage } from '../pages/settings/settings';
import { FridgePage } from '../pages/fridge/fridge';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<any>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
    // used for an example of ngFor and navigation
    this.pages = [
      { icon: 'wifi', title: 'Etusivu', component: HomePage },
      { icon: 'thermometer', title: 'Jääkaapin aukioloaika', component: FridgePage },
      { icon: 'sync', title: 'Vessanpönttön vetokerrat'},
      { icon: 'sad', title: 'Lapsienergiapyörä'},
      { icon: 'pint', title: 'Vedenkulutus eteisessä'},
      { icon: 'speedometer', title: 'Ilmanpaine autotallissa'},
      { icon: 'flame', title: 'Sängyn lämpötila'}
    ];

  }

asetukset=()=>{
  this.nav.push(SettingsPage);
}
menesivulle=(p)=>{
  if(p.component){
    this.nav.push(p.component);
  }
}
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
