const assertObjectsEqual = require('../assertObjectsEqual');
const eqObjects = require('../eqObjects');

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(eqObjects(ab, ba), true); // should PASS

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(eqObjects(ab, abc),false); // should PASS

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(eqObjects(cd, dc), true); // should PASS

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(eqObjects(cd, cd2), false); // should PASS
