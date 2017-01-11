const fs = require('fs');
const readline = require('readline');

// synchronous read
let filename = process.argv[2];
let array = fs.readFileSync(filename).toString().split('\n');
for (var i in array) {
  console.log("length: " + array.length);
  let splitLine = array[i].split(" ");
  if (splitLine.length === 0) {
    continue;
  }
  let coinA = splitLine[0];
  let coinB = splitLine[1];
  let weight = splitLine[2];

  // console.log("line: " + array[i]);
  console.log("coinA: " + coinA +
    ", coinB: " + coinB +
    ", weight: " + weight);
}

// readline.createInterface({
//   input: fs.createReadStream(filename),
//   terminal: false
// }).on('line', (line) => {
//   console.log("line: " + line);
// });
