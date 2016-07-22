import { assert } from "../node_modules/chai";
var magicZ = require('../6kyu/MagicZeckendorf.js');
var morseCode = require('../6kyu/DecodeMorseCode.js');

describe("6kyu kata tests...", function() {
    describe("Magic Zeckendorf", function(){
        var ZZ = new magicZ.MagicZ();
        var nCompare = function(a,b){return a-b;};

        it("Presented", function(){
            assert.equal(ZZ.gueZZ([1,5,8]), 70, 'Wrong guessed number');
            assert.equal(ZZ.gueZZ([1,1,1]), undefined, 'Wrong guessed number');
            assert.equal(JSON.stringify(ZZ.getMagicZindex(70).sort(nCompare)), JSON.stringify([1,5,8]), 'Wrong index list');
        });
    });

    describe("Decode Morse Code", function() {
      it("basic tests", function() {
        assert.equal(morseCode.decodeMorse('.... . -.--   .--- ..- -.. .'), 'HEY JUDE');
        assert.equal(morseCode.decodeMorse('...---...'), 'SOS');
        assert.equal(morseCode.decodeMorse('... --- ...'), 'SOS');
        assert.equal(morseCode.decodeMorse('  .'), 'E');
        assert.equal(morseCode.decodeMorse(' . .'), 'EE');

      });

      it('more complex tests', function() {
        assert.equal(morseCode.decodeMorse('       ...---... -.-.--   - .... .   --.- ..- .. -.-. -.-  ' +
          ' -... .-. --- .-- -.   ..-. --- -..-   .--- ..- -- .--. ...   --- ...- . .-.   - .... .   .-.. ' +
          '.- --.. -.--   -.. --- --. .-.-.-    '),
        'SOS! THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.');
      });
    });
})
