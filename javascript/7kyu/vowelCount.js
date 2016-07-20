// 2016-07-15 08:32
// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, and u as vowels for this Kata.

var getCount = function(str) {
  return str.split('').reduce(function(prev, curr){
    return curr.match(/[aeiou]/) ? prev + 1 : prev;
  }, 0);
};

// best answer was
// function getCount(str) {
//   return (str.match(/[aeiou]/ig)||[]).length;
// }
exports.getCount = getCount;
