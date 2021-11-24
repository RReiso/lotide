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

const letterPositions = function(sentence) {
  const results = {};
  for (let indx in sentence) {
    if (results[sentence[indx]]) {
      results[sentence[indx]].push(Number(indx));
    } else if (sentence[indx] !== " ") {
      results[sentence[indx]] = [Number(indx)];
    }
  }
  return results;
};

let obj = letterPositions("abc bdb");
assertArraysEqual(obj.a, [0]);
assertArraysEqual(obj.b, [1,4,6]);


obj = letterPositions("lighthouse in the house");
assertArraysEqual(obj.h, [3,5,15,18]);
assertArraysEqual(obj.e, [9,16,22]);
assertArraysEqual(obj.n, [12]);





