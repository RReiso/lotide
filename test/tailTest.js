const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Yo Yo', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });

  it("returns [2, 3, 4] for [1, 2, 3, 4]", () => {
    assert.deepEqual(tail([1, 2, 3, 4]), [2, 3, 4]);
  });

  it("returns ['Lighthouse', 'Labs', 'haha'] for ['Hello', 'Lighthouse', 'Labs', 'haha']", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs', 'haha']), ['Lighthouse', 'Labs', 'haha']);
  });

  it("returns [] for [5]", () => {
    assert.deepEqual(tail([5]), []);
  });

  it("returns [] for []", () => {
    assert.deepEqual(tail([]), []);
  });

  it("returns [] for ['Yo Yo']", () => {
    assert.deepEqual(tail(['Yo Yo']), []);
  });
});
