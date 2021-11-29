const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // should PASS

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]),true); // should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // should PASS

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // should PASS
assertEqual(eqArrays([1, 2], [1, 2, 3]), false); // should PASS
assertEqual(eqArrays([1, 2], []), false); // should PASS
assertEqual(eqArrays([], []), true); // should PASS
assertEqual(eqArrays([], [[]]), false); // should PASS

assertEqual(eqArrays(["1", [3], "2", "3"], ["1", [3], "2", "3"]),true); // should PASS
assertEqual(eqArrays(["1", "2", 3,[5,[6, [7]]]], ["1", "2", 3,[5,[6, [7]]]]), true); // should PASS
