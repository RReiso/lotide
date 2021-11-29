const map = require('../map');
const assert = require('chai').assert;

describe("#map", () => {
  const words = ["ground", "control", "to"];
  it("returns ['GROUND', 'CONTROL', 'TO'] for (words, word=>word.toUpperCase())", () => {
    assert.deepEqual(map(words, word=>word.toUpperCase()), ["GROUND", "CONTROL", "TO"]);
  });

  const nums = [1,2,3];
  it("returns [10,20,30] for (words, word=>word.toUpperCase())", () => {
    assert.deepEqual(map(nums, num=>num * 10), [10,20,30]);
  });
});
