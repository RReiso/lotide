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

assertArraysEqual([1, 2, 3], [1, 2, 3]); //Should PASS
assertArraysEqual([1, 2, 3], [1, 2]); //Should FAIL
assertArraysEqual([1, 2, 3], [1, 2, "3"]); //Should FAIL
assertArraysEqual([1, 2, 3], []); //Should FAIL
assertArraysEqual([], []); //Should PASS
