const assert = require('chai').assert;
const middle   = require('../middle');

describe("#middle", () => {
  it("returns [] for [1]", () => {
    assert.deepEqual(middle([1]), []);
  });

  it("returns [] for [1,2]", () => {
    assert.deepEqual(middle([1,2]), []);
  });

  it("returns [20] for [1,20,3]", () => {
    assert.deepEqual(middle([1,20,3]), [20]);
  });

  it("returns [30] for [1,2,30,4,5]", () => {
    assert.deepEqual(middle([1,2,30,4,5]), [30]);
  });

  it("returns [20,30] for [1,20,30,4]", () => {
    assert.deepEqual(middle([1,20,30,4]), [20,30]);
  });

  it("returns [30,40] for [1,2,30,40,5,6]", () => {
    assert.deepEqual(middle([1,2,30,40,5,6]), [30,40]);
  });
});
