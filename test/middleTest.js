const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual(middle([1]),[]); // => [] // should PASS
assertArraysEqual(middle([1, 2]),[]); // => [] // should PASS
assertArraysEqual(middle([1, 20, 3,]),[20]); // => [20] // should PASS
assertArraysEqual(middle([1, 2, 30, 4, 5]),[30]); // => [30] // should PASS
assertArraysEqual(middle([1, 20, 30, 4]),[20,30]); // => [20, 30] // should PASS
assertArraysEqual(middle([1, 2, 30, 40, 5, 6]),[30,40]); // => [30, 40] // should PASS
