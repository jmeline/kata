import { assert } from "../node_modules/chai";
import { validate } from '../creditcardvalidator.js';
var cipher = require('../cipher.js');
var phoneNumber = require('../createPhoneNumber.js');
var pangramChecker = require('../pangramChecker.js');

import { Vector } from '../vector.js';
var arrayFunctions = require('../allNoneAny');

describe("Kata testing...", function(){
        // Runs before all tests in this block
    describe("All, None, & Any:", function(){
        var isGreaterThanZero = function(num){ return num > 0; }
        var isLessThanZero = function(num){ return num < 0; }

        it('Is all greater than Zero', function(){
            assert.isTrue([1,2,3].all(isGreaterThanZero), 'All are greater than zero');
            assert.isTrue(![-1,0,2].all(isGreaterThanZero), 'One is less than zero');
        });
        it('Is none greater than Zero', function(){
            assert.isTrue([-1,-2,-3].none(isGreaterThanZero), 'None are greater than zero');
        });
        it('Is any greater than Zero', function(){
            assert.isTrue([-1,2,3].any(isGreaterThanZero), 'Two are greater than zero');
            assert.isTrue(![-1,-2,-3].any(isGreaterThanZero), 'None are greater than zero');
        });
        it('Is none less than Zero', function(){
            assert.isTrue(![-1,2,3].none(isLessThanZero), 'One is less than zero');
        });

    });
    describe("Simple Substitution Cipher", function(){
        var sub;
        before(function(){
            var abc1 = "abcdefghijklmnopqrstuvwxyzi";
            var abc2 = "etaoinshrdlucmfwypvbgkjqxz";
            sub = new cipher.SubstitutionCipher(abc1, abc2);
        });
        describe("Test Substitution Cipher Encoding...", function(){
            it('Encoding examples', function(){
                assert.equal(sub.encode("abc"), "eta");
                assert.equal(sub.encode("_b_"), "_t_");
            });
        });
        describe("Test Substitution Cipher Decoding...", function(){
            it('Decoding examples', function(){
                assert.equal(sub.decode("kjpphi"), 'vwrrhe');
                assert.equal(sub.decode("aeiou"), "caedl");

            });
        });

    });
    describe("Simple Create a Phone Number", function(){
        it('Test creating regex', function(){
            var numbers = [1,2,3,4,5,6,7,8,9,0];

            assert.equal("aaa".replace(/a(a)a/, 'b($1)($1)b'), 'b(a)(a)b');
            assert.equal(phoneNumber.createPhoneNumber(numbers), "(123) 456-7890");
        });
    });

    describe("Validating Credit Card Numbers", function(){
        it('Test validating using 891', function(){
            var number = 891;
            assert.equal(validate(number), false);
        });
        it('Test validating using 1', function(){
            var number = 1;
            assert.isFalse(validate(number));
        });
        it('Test validating using 2,1,2,1', function(){
            var number = 2121;
            assert.isTrue(validate(number));
        });
        it('Test validating using 1,2,3,0', function(){
            var number = 1230;
            assert.isTrue(validate(number));
        });
    });

    describe("Pangram checker", function(){
        it("Test basic string", function(){
            var string = "The quick brown fox jumps over the lazy dog.";
            assert.equal(pangramChecker.isPangram(string), true);
            string = "This is not a pangram.";
            assert.equal(pangramChecker.isPangram(string), false);
        });
    });

    describe("Vector Class", function(){
        it("Test that [1,2,3] + [3,4,5] = [4,6,8]", function(){
            const vec = new Vector([1,2,3]);
            const vec2 = new Vector([3,4,5]);
            assert.isTrue(vec.add(vec2).equals(new Vector([4,6,8])));
        });
        it("Test that [1,2] + [3,4] = [4,6]", function(){
            const vec = new Vector([1,2]);
            const vec2 = new Vector([3,4]);
            assert.isTrue(vec.add(vec2).equals(new Vector([4,6])));
        });
        it("Test that [1,2] - [3,4] = [-2,-2]", function(){
            const vec = new Vector([1,2]);
            const vec2 = new Vector([3,4]);
            assert.isTrue(vec.subtract(vec2).equals(new Vector([-2,-2])));
        });
        it("Test that [1,2,3] - [3,4,5] = [-2,-2,-2]", function(){
            const vec = new Vector([1,2,3]);
            const vec2 = new Vector([3,4,5]);
            assert.isTrue(vec.subtract(vec2).equals(new Vector([-2,-2,-2])));
        });

        it("Test that [1,2] dot [3,4] = 11", function(){
            const vec = new Vector([1,2]);
            const vec2 = new Vector([3,4]);
            assert.equal(vec.dot(vec2), 11);
        });
        it("Test that [1,2,3] dot [-2, 0, 5] = 13", function(){
            const vec = new Vector([1,2,3]);
            const vec2 = new Vector([-2, 0, 5]);
            assert.equal(vec.dot(vec2), 13);
        });
        it("Test that [1,2,3] normalized = sqrt(14)", function(){
            const vec = new Vector([1,2,3]);
            assert.equal(vec.norm(), Math.sqrt(14));
        });
    });
});

