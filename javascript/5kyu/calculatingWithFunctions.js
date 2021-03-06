export const
  digit = d => opr => opr ? opr(d) : d,
  zero = digit(0),
  one = digit(1),
  two = digit(2),
  three = digit(3),
  four = digit(4),
  five = digit(5),
  six = digit(6),
  seven = digit(7),
  eight = digit(8),
  nine = digit(9),
  sum = (n1, n2) => n1 + n2,
  subtr = (n1, n2) => n1 - n2,
  multi = (n1, n2) => n1 * n2,
  divide = (n1, n2) => n1 / n2,
  plus = x2 => x => sum(x, x2),
  minus = x2 => x => subtr(x, x2),
  times = x2 => x => multi(x, x2),
  dividedBy = x2 => x => divide(x, x2)
