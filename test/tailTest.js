const tail = require('../tail');
const assertEqual = require('../assertEqual');

let words = ["Yo Yo", "Lighthouse", "Labs"];
let result = tail(words);
assertEqual(words.length, 3); // original array  // should PASS
assertEqual(result.length, 2); // should PASS
assertEqual(result[0], "Lighthouse"); // should PASS
assertEqual(result[1], "Labs"); // should PASS

words = ["Hello", "Lighthouse", "Labs", "haha"];
result = tail(words);
assertEqual(words.length, 4); // original array // should PASS
assertEqual(result.length, 3); // should PASS
assertEqual(result[0], "Lighthouse"); // should PASS
assertEqual(result[1], "Labs"); // should PASS
assertEqual(result[2], "haha"); // should PASS

let nums = [1, 2, 3, 4];
result = tail(nums);
assertEqual(nums.length, 4); // original array // should PASS
assertEqual(result.length, 3); // should PASS
assertEqual(result[0], 2); // should PASS
assertEqual(result[1], 3); // should PASS
assertEqual(result[2], 4); // should PASS

nums = [5];
result = tail(nums);
assertEqual(nums.length, 1); // original array // should PASS
assertEqual(result.length, 0); // should PASS

let arr = [];
result = tail(arr);
assertEqual(arr.length, 0); // original array // should PASS
assertEqual(result.length, 0); // should PASS

const words1 = ["Yo Yo"];
tail(words1);
assertEqual(words1.length, 1); // should PASS

const words0 = [];
tail(words0);
assertEqual(words0.length, 0); // should PASS
