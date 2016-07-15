var assert = require("../node_modules/chai").assert;
var regexBasics = require('../7kyu/regexpbasics.js');
var vowelCount = require('../7kyu/vowelCount.js');
var benefactor = require('../7kyu/lookingForABenefactor.js');

describe("7kyu testing...", function() {
    describe("Regex Basics - Is it all whitespace", function(){
        it('Does it pass basic whitespace example?', function(){
            assert.equal("".whitespace(), true);
            assert.equal(" ".whitespace(), true);
            assert.equal("\n\r\n\r".whitespace(), true);
            assert.equal("a".whitespace(), false);
            assert.equal("w\n".whitespace(), false);
            assert.equal("\t".whitespace(), true);
            assert.equal(" a\n".whitespace(), false);
            assert.equal("\t \n\r\n ".whitespace(), true);
            assert.equal("\n\r\n\r ".whitespace(), true);
            assert.equal("\n\r\n\r 3".whitespace(), false);
        });
    });
    describe("7Kyu - Looking for a benefactor", function(){
        var newAvg = benefactor.Benefactor;

        it('Basic Tests', function() {
            assert.equal(newAvg([14,30,5,7,9,11,16], 90), 628);
            assert.equal(newAvg([14,30,5,7,9,11,15], 92), 645);
            assert.throw(function() {newAvg([14, 30, 5, 7, 9, 11, 15], 2)}, "RangeError");
        });
    });

    describe("7Kyu - Vowel Count", function() {
      it('should be find the correct number of vowels', function() {
        assert.equal(vowelCount.getCount('luminescent'), 4);
        assert.equal(vowelCount.getCount('abracadabra'), 5);
        assert.equal(vowelCount.getCount('unparagoned'), 5);
        assert.equal(vowelCount.getCount('idiosyncratic'), 5);
        assert.equal(vowelCount.getCount('parsimonious'), 6);
        assert.equal(vowelCount.getCount('circumlocution'), 6);
        assert.equal(vowelCount.getCount('corynebacterium'), 6);
      });
    });
});
