import { Injectable } from '@angular/core';

/*
Generated class for the DataProvider provider.

See https://angular.io/guide/dependency-injection for more info on providers
and Angular DI.
*/
@Injectable()
export class DataProvider {

  public quotes:any
  constructor() {
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


}
