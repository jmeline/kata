let chai = require('chai'),
    expect = chai.expect,
    should = chai.should();

let path = require('path');

let StringCalculator = require(path.join(__dirname, "..", "lib", "stringCalculator"));

describe("string Calculator testing...", () => {
    describe("calc sample", () => {
        let calc;

        beforeEach(() => {
            // Create a new calc object for each test
            calc = new StringCalculator();
        });

        it('Add 5 should be 5', () => {
            expect(calc.add(5)).to.equal(5);
            calc.add(5).should.equal(5);
        });
        it('Add 5 4 should be 9', () => {
            expect(calc.add(5, 4)).to.equal(9);
            calc.add(5, 4).should.equal(9);
        });

        it('Add 5 4 6 should be 15', () => {
            expect(calc.add(5, 4, 6)).to.equal(15);
            calc.add(5, 4, 6).should.equal(15);
        });
    });
});

