'use strict';
const filename = './input1.txt';
const fs = require('fs');

// const data = fs.readFile(filename, (err, line) => {
//   console.log(line.toString());
//   // console.log(line.split(/\s+/).map(Number));
// });

// const values = data.toString().split(/\s+/).map(Number);

const lineReader = require('readline').createInterface({
  input: require('fs').createReadStream(filename)
});

let array = [];
lineReader.on('line', (line) => {
  let row = line.split(/\s+/).map(Number);
  array.push(row);
}).on('close', () => {
  // console.log(array);
  for(let i = 0; i < 1; i++){
    for(let j = 0; j < array[i].length; j++){
      process.stdout.write(array[i][j] + " ");
    }
  }

});
