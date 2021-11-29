const without = require('../without');
const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual(without([1, 2, 3], [1]),[2,3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]),["1","2"]);
assertArraysEqual(without(["1", "2", "3"], []),["1","2","3"]);
assertArraysEqual(without([], [1,2]),[]);
