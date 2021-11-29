const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([1, 2, 3], [1, 2, 3]); //Should PASS
assertArraysEqual([1, 2, 3], [1, 2]); //Should FAIL
assertArraysEqual([1, 2, 3], [1, 2, "3"]); //Should FAIL
assertArraysEqual([1, 2, 3], []); //Should FAIL
assertArraysEqual([], []); //Should PASS
