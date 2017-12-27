// Rail Fence Cipher: Encoding and Decoding.

export function encode (input, rails = 2) {
  input = input.replace(/[\.\s*]/g, "");
  if (input.length <= rails || input.length <= 3 ){
    return "";
  }

  var cipherArr = [];
  for (var i = 0; i < rails; i++) {
    cipherArr.push([]);
  }

  var w = 0;
  while (w < input.length) {
    for (var i = 0; i < rails; i++) {
      cipherArr[i].push(input[w]);
      w++;
      if (i === rails - 1) {
        for (var j = i - 1; j > 0; j--) {
          cipherArr[j].push(input[w]);
          w++;
        }
      }
    }
  }

  var result = [];
  for (var i = 0; i < cipherArr.length; i++) {
    for (var j = 0; j < cipherArr[i].length; j++) {
      if (cipherArr[i][j]){
        result.push(cipherArr[i][j]);
      }
    }
  }
  return result.join("");
};

export function decode (input, rails) {
  console.log("decode: ", input, rails);

};
