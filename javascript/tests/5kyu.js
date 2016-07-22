import { assert } from "../node_modules/chai";
const ops = require("../5kyu/calculatingWithFunctions.js");

describe("5kyu tests", () => {
  describe('calculating with functions', () => {
    const { one, two, three, four, five, six, seven, eight, nine } = ops;
    const { plus, minus, times, dividedBy } = ops;
    it('practices higher order functions', () => {
      const sum = (n1, n2) => n1 + n2;

      // This is a higher-order function
      const makeSumN = (n) => (p) => sum(n, p);
      const sum1 = makeSumN(1);

      //This is a higher-order function
      const double = n => n * n;
      const makeMoreThanSum = f => (n1, n2) => sum(f(n1), n2);
      const sumSquareOfFirst = makeMoreThanSum(double);

      assert.equal(sum(1,2), 3);
      assert.equal(sum1(2), 3);
      assert.equal(sumSquareOfFirst(2,1), 5);
    });

    it('does return number', () => {
      assert.equal(one(), 1);
      assert.equal(two(), 2);
      assert.equal(three(), 3);
      assert.equal(four(), 4);
      assert.equal(five(), 5);
      assert.equal(six(), 6);
      assert.equal(seven(), 7);
      assert.equal(eight(), 8);
      assert.equal(nine(), 9);
    })

    it('does plus', () => {
      assert.equal(one(plus(one())), 2);
      assert.equal(one(plus(two())), 3);
      assert.equal(two(plus(one())), 3);
      assert.equal(two(plus(two())), 4);
      assert.equal(two(plus(two(plus(one())))), 5);
      assert.equal(one(plus(one(plus(one(plus(one())))))), 4);
    });

    it('does minus', () => {
      assert.equal(one(minus(one())), 0);
      assert.equal(two(minus(one())), 1);
      assert.equal(five(minus(one())), 4);
      assert.equal(nine(minus(two())), 7);
    });

    it('does times', () => {
      assert.equal(three(times(two())), 6);
      assert.equal(four(times(two())), 8);
      assert.equal(five(times(seven())), 35);
      assert.equal(two(times(two(times(two())))), 8);
    });

    it('does dividedBy', () => {
      assert.equal(three(dividedBy(two())), 1.5);
      assert.equal(four(dividedBy(two())), 2);
      assert.equal(nine(dividedBy(three())), 3);
    });
  });
});
