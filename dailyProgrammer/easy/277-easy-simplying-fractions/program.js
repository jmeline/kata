const fs = require('fs')

// let filename = process.argv[2];
// let array = fs.readFileSync(filename).toString().split('\n');

// /////////////////// //
// Euclidean Algorithm //
// /////////////////// //
//
// GCD 'g' is the largest natural number that
// divides both a and b without leaving a remainder
//
// division-based //
// /////////////////
const divisionGCD = function(a,b) {
  while (b != 0) {
    console.log(a,b);
    let tmp = b;
    b = a % b;
    a = tmp;
  }
  return a;
};

// substraction-based method //
// ////////////////////////////
const subtractionGCD = function(a,b) {
  while (a != b) {
    if (a > b) {
      a = a - b;
    } else {
      b = b - a;
    }
  }
  return a;
};

// recursive method //
// ////////////////////////////
const recursiveGCD = function(a,b) {
  return b === 0 ? a : recursiveGCD(b, a % b);
}

const isCoPrime = function(a,b) {
  return `Is '${a}' and '${b}' coprime: ${divisionGCD(a,b) === 1}`;
}
// console.log(isCoPrime(6,35));
// divisionGCD(6, 35); // => 1
// divisionGCD(1386, 3213); // => 1
subtractionGCD(1386, 3213); // => 1
recursiveGCD(1386, 3213); // => 1
