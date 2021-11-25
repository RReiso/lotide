const eqArrays = (arr1, arr2)=>{
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};


const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) return false;

  for (const key in object1) {
    let obj1Val = object1[key];
    let obj2Val = object2[key];
    let bothArrays = Array.isArray(obj1Val) && Array.isArray(obj2Val);

    if (bothArrays && !eqArrays(obj1Val, obj2Val)) return false;
    if (obj1Val !== obj2Val) return false;
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const { inspect } = require('util');

  const isEqual = eqObjects(actual,expected);
  if (isEqual)
    console.log(`✅ Assertion Passed: [${inspect(actual)}] === [${inspect(expected)}] ✅`);
  else console.log(`❌ Assertion Failed: [${inspect(actual)}] !== [${inspect(expected)}] ❌`);
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(eqObjects(ab, abc),false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(eqObjects(cd, cd2), false); // => false