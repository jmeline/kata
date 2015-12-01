var assert = require("/usr/lib/node_modules/chai").assert;
var cipher = require('../cipher.js');
var phoneNumber = require('../createPhoneNumber.js');
var creditcardvalidation = require('../creditcardvalidator.js');
var pangramChecker = require('../pangramChecker.js');
var vector = require('../vector.js');

describe("Kata testing...", function(){
        // Runs before all tests in this block
    describe("Simple Substitution Cipher", function(){
        var sub;
        before(function(){
            var abc1 = "abcdefghijklmnopqrstuvwxyzi";
            var abc2 = "etaoinshrdlucmfwypvbgkjqxz";
            sub = new cipher.SubstitutionCipher(abc1, abc2);
        });
        // console.log(sub);
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
            assert.equal(creditcardvalidation.validate(number), false);
        });
        it('Test validating using 1', function(){
            var number = 1;
            assert.isFalse(creditcardvalidation.validate(number));
        });
        it('Test validating using 2,1,2,1', function(){
            var number = 2121;
            assert.isTrue(creditcardvalidation.validate(number));
        });
        it('Test validating using 1,2,3,0', function(){
            var number = 1230;
            assert.isTrue(creditcardvalidation.validate(number));
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
            var vec = new vector.Vector([1,2,3]);
            var vec2 = new vector.Vector([3,4,5]);
            assert.isTrue(vec.add(vec2).equals(new vector.Vector([4,6,8])));
        });
        it("Test that [1,2] + [3,4] = [4,6]", function(){
            vec = new vector.Vector([1,2]);
            vec2 = new vector.Vector([3,4]);
            assert.isTrue(vec.add(vec2).equals(new vector.Vector([4,6])));
        });
        it("Test that [1,2] - [3,4] = [-2,-2]", function(){
            vec = new vector.Vector([1,2]);
            vec2 = new vector.Vector([3,4]);
            assert.isTrue(vec.subtract(vec2).equals(new vector.Vector([-2,-2])));
        });
        it("Test that [1,2,3] - [3,4,5] = [-2,-2,-2]", function(){
            vec = new vector.Vector([1,2,3]);
            vec2 = new vector.Vector([3,4,5]);
            assert.isTrue(vec.subtract(vec2).equals(new vector.Vector([-2,-2,-2])));
        });

        it("Test that [1,2] dot [3,4] = 11", function(){
            vec = new vector.Vector([1,2]);
            vec2 = new vector.Vector([3,4]);
            assert.equal(vec.dot(vec2), 11);
        });
        it("Test that [1,2,3] dot [-2, 0, 5] = 13", function(){
            vec = new vector.Vector([1,2,3]);
            vec2 = new vector.Vector([-2, 0, 5]);
            assert.equal(vec.dot(vec2), 13);
        });
        it("Test that [1,2,3] normalized = sqrt(14)", function(){
            vec = new vector.Vector([1,2,3]);
            assert.equal(vec.norm(), Math.sqrt(14));
        });
    });
});
