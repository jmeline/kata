
export const accum = (s) => {
  s = s.toLowerCase();
  let len = s.length;
  let output = '';
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < i+1 ; j++) {
      if (j === 0) {
        output += s[i].toUpperCase();
      } else {
        output += s[i];
      }
    }
    output += '-';
  }
  return output.substr(0, output.length-1);
};
