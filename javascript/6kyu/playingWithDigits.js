
export const digPow = (n, p) => {
	let values = [];
  let nParam = n;
	while(nParam > 0) {
  	values.push(nParam % 10);
    nParam = parseInt(nParam / 10);
  }
  // console.log(values);
  let result = values.reverse().reduce(
    (prev, curr, currIndex) => prev + Math.pow(curr, p++)
    , 0);
  let k = parseInt(result/n);
  // console.log( "result: ", result, " k: ", k);
  return result === n * k ? k : -1;
}
