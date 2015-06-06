// Number of Rectangles
// Given a grid of size m x n, calculate the total number of rectangles contained in this rectangle. All integer sizes and positions are counted.
//
// Examples:
//
// numberOfRectangles(3, 2) == 18
// numberOfRectangles(4, 4) == 100
// There is a very simple solution to this!
//
// For one column
//
// 1x1 - 1
// 2x1 - 1 (2x1)
//       2 (1x1)
//       3
// 3x1 - 1 (3x1)
//       2 (2x1)
//       3 (1x1)
//       6
// 4x1 - 1 (4x1)
//       2 (3x1)
//       3 (2x1)
//       4 (1x1)
//       10
// therefore sum = n(1+n)/2 for one column 
var numberOfRectangles = function(n, m) { return (n * m * (1 + n) * (1 + m))/4; }
var args = process.argv.slice(2);
console.log("Arg[0]: " + args[0] + " Arg[1]: " + args[1]);
console.log(numberOfRectangles(parseInt(args[0]),parseInt(args[1])));
