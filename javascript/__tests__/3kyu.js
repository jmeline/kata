import { assert } from "../node_modules/chai";
var railFenceCipher = require('../3kyu/railfencecipher.js');

describe("3kyu tests", () => {
  const { encode, decode } = railFenceCipher;
  const sampleString = "WE ARE DISCOVERED. FLEE AT ONCE";
  describe('Rail Fence Cipher', () => {
    it("encodes with rail of default, 3, and 4", () => {
      const rail2Result = encode(sampleString);
      const rail3Result = encode(sampleString, 3);
      const rail4Result = encode(sampleString, 4);
      assert.equal("WAEICVRDLETNEERDSOEEFEAOC", rail2Result);
      assert.equal("WECRLTEERDSOEEFEAOCAIVDEN", rail3Result);
      assert.equal("WIREEEDSEEEACAECVDLTNROFO", rail4Result);
    });
    it("encodes an empty string", () => {
      assert.equal(encode(""), "");
    });
  });

  // describe('Rail Fence Cipher Decode', () => {
  //   const sampleEncryptedString = "WECRLTEERDSOEEFEAOCAIVDEN";
  //   const { decode } = railFenceCipher;
  //   assert.equal(decode(sampleEncryptedString, 3),  "WEAREDISCOVEREDFLEEATONCE");
  // });
});
