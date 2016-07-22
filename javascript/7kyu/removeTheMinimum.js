var removeSmallest = (numbers) => {
  numbers.splice(numbers.indexOf(Math.min.apply(Math, numbers)), 1);
  return numbers;
}

exports.removeSmallest = removeSmallest;
