const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const assertArraysEqual = function(actual, expected) {
  const isEqual = eqArrays(actual,expected);
  if (isEqual)
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

const words = ["ground", "control", "to"];
const nums = [1,2,3];
const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(map(words, word=>word.toUpperCase()),["GROUND", "CONTROL", "TO"]); //Should PASS
assertArraysEqual(map(nums, num=>num * 10),[10,20,30]); //Should PASS

