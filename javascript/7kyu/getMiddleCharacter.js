
const getMiddle = function(s) {
  const strLen = s.length;
  const middle = strLen/2-1;
  return strLen % 2 == 0 ? s[middle] + s[(strLen/2)] : s[(Math.round(middle))];
};

exports.getMiddle = getMiddle;
