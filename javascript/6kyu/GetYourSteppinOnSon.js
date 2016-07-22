function wordStep(str) {
 	var words = str.split(" ");
  var horizontalTotal = 0;
  var verticalTotal = 0;
  for ( var i = 0; i < words.length; i++) {
  	if (i % 2 == 0) {
    	horizontalTotal += words[i].length;
      if (i > 1) {
        horizontalTotal -= 1;
      }
    }
    else {
    	verticalTotal += words[i].length;
      if (i > 1) {
        verticalTotal -= 1;
      }
    }
  }

  console.log(words + ": h - " + horizontalTotal + ", v - " + verticalTotal);
  var tmp = [];
  var board = [];
  for (var i = 0; i < verticalTotal; i++){
  	tmp = [];
  	for (var j = 0; j < horizontalTotal; j++){
    	tmp.push(' ');
    }
    board.push(tmp);
  }
  console.log(board);
  console.log();

  var isHorizontal = true;

  var newHorizontalSize = horizontalTotal;
  var newVerticalSize = verticalTotal;

  for (var i = 0; i < words.length; i++) {
    if (isHorizontal) {
      for (var j = 0; j < words[i].length; j++) {
        board[i][j] = words[i][j];
      }
      isHorizontal = false;

    } else {
    	for (var j = 0; j < words[i].length; j++) {
      	board[

      }

    }

       //   board[i][j + verticalTotal - 1] = words[i][j];
  }
  console.log(board);

  return words;
}
