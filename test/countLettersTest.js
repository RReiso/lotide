const countLetters = require('../countLetters');
const assertEqual = require('../assertEqual');

let obj = countLetters("abc bdb");
assertEqual(obj.a, 1); // should PASS
assertEqual(obj.b, 3); // should PASS
assertEqual(obj.e, undefined); // should PASS

obj = countLetters("lighthouse in the house");
assertEqual(obj.h, 4); // should PASS
assertEqual(obj.e, 3); // should PASS
assertEqual(obj.z, undefined); // should PASS
