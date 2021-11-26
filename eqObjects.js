const assertEqual = function(actual, expected) {
  if (actual === expected)
    console.log(`✅ Assertion Passed: [${actual}] === [${expected}] ✅`);
  else console.log(`❌ Assertion Failed: [${actual}] !== [${expected}] ❌`);
};


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

    // check if both values are arrays
    let isBothArrays = Array.isArray(obj1Val) && Array.isArray(obj2Val);
    if (isBothArrays && !eqArrays(obj1Val, obj2Val)) return false;

    //check if both values are objects
    let isBothObjects = (typeof obj1Val === "object" && typeof obj2Val === "object");
    if (isBothObjects) return eqObjects(obj1Val, obj2Val);

    // check if both values are not the same primitive values
    if (obj1Val !== obj2Val) return false;
  }
  return true;
};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc),false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false


assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true); // => true
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }),false); // => false
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }),false); // => false
assertEqual(eqObjects({ a: { y: {m: 3}, z: 1 }, b: 2 }, { a: { y: {m: 3}, z: 1 }, b: 2 }),true); //true/
assertEqual(eqObjects({ a: { y: {m: ["2", 3, 4]}, z: 1 }, b: 2 }, { a: { y: {m: ["2", 3, 4]}, z: 1 }, b: 2 }),true); //true/
