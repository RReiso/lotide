// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual === expected)
    console.log(`✅ Assertion Passed: [${actual}] === [${expected}] ✅`);
  else console.log(`❌ Assertion Failed: [${actual}] !== [${expected}] ❌`);
};

const tail = (arr) => {
  return arr.slice(1) || [];
};

// Test Cases:
let words = ["Yo Yo", "Lighthouse", "Labs"];
let result = tail(words);
assertEqual(words.length, 3); // original array
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");

words = ["Hello", "Lighthouse", "Labs", "haha"];
result = tail(words);
assertEqual(words.length, 4); // original array
assertEqual(result.length, 3);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");
assertEqual(result[2], "haha");

let nums = [1, 2, 3, 4];
result = tail(nums);
assertEqual(nums.length, 4); // original array
assertEqual(result.length, 3);
assertEqual(result[0], 2);
assertEqual(result[1], 3);
assertEqual(result[2], 4);

nums = [5];
result = tail(nums);
assertEqual(nums.length, 1); // original array
assertEqual(result.length, 0);

let arr = [];
result = tail(arr);
assertEqual(arr.length, 0); // original array
assertEqual(result.length, 0);

const words1 = ["Yo Yo"];
tail(words1);
assertEqual(words1.length, 1);

const words0 = [];
tail(words0);
assertEqual(words0.length, 0);
