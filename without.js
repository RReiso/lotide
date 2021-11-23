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


const without = (source, itemsToRemove)=>{
  let newArr = [];
  for (let el of source) {
    let match = false;
    for (let item of itemsToRemove) {
      if (el === item) match = true;
    }
    if (match === false) newArr.push(el);
  }
  return newArr;
};


assertArraysEqual(without([1, 2, 3], [1]),[2,3]); // => [2, 3]
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]),["1","2"]); // => ["1", "2"]
assertArraysEqual(without(["1", "2", "3"], []),["1","2","3"]); // => ["1", "2"]
assertArraysEqual(without([], [1,2]),[]); // => ["1", "2"]
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
