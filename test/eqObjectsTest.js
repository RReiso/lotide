const assert = require('chai').assert;
const eqObjects = require('../eqObjects');


describe("#eqObjects", () => {
  it("returns true if two objects with primitive values are equal", () => {
    assert.equal(eqObjects({ a: "1", b: "2" }, { b: "2", a: "1" }), true);
  });
  
  it("returns false if two objects have different number of keys", () => {
    assert.equal(eqObjects({ a: "1", b: "2", c: "3" }, { a: "1", b: "2" }), false);
  });
  
  it("returns true if two objects are equal and have an array as value", () => {
    assert.equal(eqObjects({ c: "1", d: ["2", 3] }, { d: ["2", 3], c: "1" }), true);
  });

  it("returns false if two objects are not equal and have an array as value", () => {
    assert.equal(eqObjects({ c: "1", d: ["2", 3, 4] }, { d: ["2", 3], c: "1" }), false);
  });

  it("returns true for two equal nested objects", () => {
    assert.equal(eqObjects({ a: { y: {m: 3}, z: 1 }, b: 2 }, { a: { y: {m: 3}, z: 1 }, b: 2 }), true);
  });

  it("returns true for two equal nested objects with arrays", () => {
    assert.equal(eqObjects({ a: { y: {m: ["2", 3, 4]}, z: 1 }, b: 2 }, { a: { y: {m: ["2", 3, 4]}, z: 1 }, b: 2 }), true);
  });
});
