const assertEqual = function(actual, expected) {
  if (actual === expected)
    console.log(`✅ Assertion Passed: [${actual}] === [${expected}] ✅`);
  else console.log(`❌ Assertion Failed: [${actual}] !== [${expected}] ❌`);
};

const eqArrays = (arr1, arr2)=>{
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    // check if both elements are arrays
    let isBothArrays = Array.isArray(arr1[i]) && Array.isArray(arr2[i]);
    if (isBothArrays) return eqArrays(arr1[i], arr2[i]);

    // check if primitive elements are the same
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]),true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2], [1, 2, 3]), false);
assertEqual(eqArrays([1, 2], []), false);
assertEqual(eqArrays([], []), true);
assertEqual(eqArrays([], [[]]), false);

assertEqual(eqArrays(["1", [3], "2", "3"], ["1", [3], "2", "3"]),true);
assertEqual(eqArrays(["1", "2", 3,[5,[6, [7]]]], ["1", "2", 3,[5,[6, [7]]]]), true);
