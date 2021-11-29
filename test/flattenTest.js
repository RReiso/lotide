const flatten = require('../flatten');
const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual((flatten([1, 2, [3,[0,[5],[[[3]]],9], 4], 5, [6,[4,3,[7,8,[],]]],[7,8]])),[1,2,3,0,5,3,9,4,5,6,4,3,7,8,7,8]);
