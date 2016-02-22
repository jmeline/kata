'use strict';
import R from 'ramda';

const cmdln = process.argv;
const startingValue = parseInt(cmdln[2]) || 31337357;

console.log('----------------------');
console.log('startingValue: ' + startingValue);
console.log('----------------------');
const Threes = ( num ) => {

  if (num === 1){
    console.log(num)
    return;
  }

  if (R.modulo(num, 3) === 0) {
    console.log(num + " " + 0);
    return Threes( num / 3 );
  }
  if (R.modulo(R.inc(num), 3) === 0) {
    console.log(num + " " + 1);
    return Threes( R.inc(num) / 3 );
  }
  if (R.modulo(R.dec(num), 3) === 0) {
    console.log(num + " " + -1);
    return Threes( R.dec(num) / 3 );
  }

}

Threes(startingValue);
