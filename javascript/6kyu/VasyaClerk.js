
export const tickets = (people) => {
	const ticketCost = 25;
	let isValid = true;
  let count25 = 0, count50 = 0, count100 = 0;
  // const addBills = x => bills[x] === 0 ? bills[x] += 1 : bills[x] = 0;
  people.forEach(x => {
  	switch(x) {
    	case 25: count25++; break;
      case 50: count50++; break;
      case 100: count100++; break;
    }

 		if (x > ticketCost){
      if (x === 50) {
        if (count25 > 0) {
          --count25;
        } else {
          isValid = "NO";
        }
      } else if (x === 100){
        if (count25)
      }
      console.log("i need to make change for: " + x);
    }

  });

  console.log(`I have ${count25} 25's, ${count50} 50's, and ${count100} 100's`);

  return "YES";
}
