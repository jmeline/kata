var assert = require("/usr/local/lib/node_modules/chai").assert;
var cipher = require('./cipher.js');
var phoneNumber = require('./createPhoneNumber.js');

describe("Kata testing...", function(){
    describe("Simple Substitution Cipher", function(){
        // Runs before all tests in this block
        var sub;
        before(function(){
            var abc1 = "abcdefghijklmnopqrstuvwxyz";
            var abc2 = "etaoinshrdlucmfwypvbgkjqxz";
            sub = new cipher.SubstitutionCipher(abc1, abc2);
        })
        // console.log(sub);
        describe("Test Substitution Cipher Encoding...", function(){
            it('Encoding examples', function(){
                assert.equal(sub.encode("abc"), "eta");
                assert.equal(sub.encode("_b_"), "_t_");
            })  
        })
        describe("Test Substitution Cipher Decoding...", function(){
            it('Decoding examples', function(){
                assert.equal(sub.decode("kjpphi"), 'vwrrhe');
                assert.equal(sub.decode("aeiou"), "caedl");

            })
        })

    })
    describe("Simple Create a Phone Number", function(){
        var phone
        it('Test creating regex', function(){
            var numbers = [1,2,3,4,5,6,7,8,9,0];

            assert.equal("aaa".replace(/a(a)a/, 'b($1)($1)b'), 'b(a)(a)b');
            assert.equal(phoneNumber.createPhoneNumber(numbers), "(123) 456-7890");   
        })
    })
})
