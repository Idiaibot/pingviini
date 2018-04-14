import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';
import { DataProvider} from '../../providers/data/data';

/**
 * Generated class for the FridgePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fridge',
  templateUrl: 'fridge.html',
})
export class FridgePage {
  @ViewChild("barCanvas") barCanvas;
   barChart: any;
   @ViewChild("tittelit") tittelit;
    titteliChart: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public dataProvider: DataProvider) {
  }


ngOnInit(){
  this.dataProvider.presentToast();
  this.barChart = new Chart(this.barCanvas.nativeElement, {
            type: 'bar',
            data: {
                labels: ["Maanantai", "Tiistai", "Keskiviikko", "Torstai", "Perjantai", "Lauantai", "Sunnuntai"],
                datasets: [{
                    label: 'Aukioloajat',
                    data: this.dataProvider.viikkoarvot,
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                    ],
                    borderColor: [
                      'rgba(54, 162, 235, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 99, 132, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(54, 162, 235, 1)'
                    ],
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true, //skaalaa kun tarjolla oleva tila muttuu
                maintainAspectRatio: false, //skaalaa aina tarjolla olevan tilan mukaan molempiin suuntiin
                legend:{display: false},
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true,
                            callback: function(value, index, values) {
                        return null;
                    }
                        }
                    }]
                }
            }

        });
        this.dataProvider.rekisteroiChart(this.barChart);

        this.titteliChart = new Chart(this.tittelit.nativeElement, {
                  type: 'scatter',
                  data: {
                    labels: this.dataProvider.linearvot,
                      datasets: [{
                          label: 'Lämpötila',
                          showLine: true,

                          data: this.dataProvider.linearvot.map((arvo,i)=>{
                            console.log({x:i,y:arvo})
                            return{x:i,y:arvo}
                          }),
                          backgroundColor:'rgba(54, 162, 235, 0.2)',

                          borderColor:
                            'rgba(54, 162, 235, 1)',
                          borderWidth: 1
                      }]
                  },
                  options: {
                      responsive: true, //skaalaa kun tarjolla oleva tila muttuu
                      maintainAspectRatio: false, //skaalaa aina tarjolla olevan tilan mukaan molempiin suuntiin
                      legend:{display: false},
                      scales: {
                          yAxes: [{
                              ticks: {
                                  beginAtZero:true,
                                  max: 12
                              }
                          }],
                          xAxes: [{
                              ticks: {
                                callback: function(value, index, values) {
                            return null;}
                              }
                          }]
                      }
                  }

              });
}
  }
