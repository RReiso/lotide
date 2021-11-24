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

const middle = (arr) => {
  if (arr.length < 3) return [];
  if (arr.length % 2 === 1) return [arr[Math.floor(arr.length / 2)]];
  else return [arr[arr.length / 2 - 1], arr[arr.length / 2]];
};


assertArraysEqual(middle([1]),[]); // => []
assertArraysEqual(middle([1, 2]),[]); // => []
assertArraysEqual(middle([1, 20, 3,]),[20]); // => [20]
assertArraysEqual(middle([1, 2, 30, 4, 5]),[30]); // => [30]
assertArraysEqual(middle([1, 20, 30, 4]),[20,30]); // => [20, 30]
assertArraysEqual(middle([1, 2, 30, 40, 5, 6]),[30,40]); // => [30, 40]
