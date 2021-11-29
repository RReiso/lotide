const findKey = require('../findKey');
const assertEqual = require('../assertEqual');

const obj = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

assertEqual(findKey(obj,  x => x.stars === 2),"noma");
assertEqual(findKey(obj,  x => x.stars % 3 === 0),"Akaleri");
assertEqual(findKey(obj,  x => x.stars + 3 === 0), undefined);
