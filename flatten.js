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


const flatten = (arr,res = [])=>{
  for (let el of arr) {
    if (Array.isArray(el)) {
      flatten(el,res);
    } else {
      res.push(el);
    }
  }
  return res;
};

assertArraysEqual((flatten([1, 2, [3,[0,[5],[[[3]]],9], 4], 5, [6,[4,3,[7,8,[],]]],[7,8]])),[1,2,3,0,5,3,9,4,5,6,4,3,7,8,7,8]);
