const letterPositions = require('../letterPositions');
const assertArraysEqual = require('../assertArraysEqual');

let obj = letterPositions("abc bdb");
assertArraysEqual(obj.a, [0]);
assertArraysEqual(obj.b, [1,4,6]);


obj = letterPositions("lighthouse in the house");
assertArraysEqual(obj.h, [3,5,15,18]);
assertArraysEqual(obj.e, [9,16,22]);
assertArraysEqual(obj.n, [12]);
