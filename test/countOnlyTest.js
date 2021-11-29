const countOnly = require('../countOnly');
const assertEqual = require('../assertEqual');

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1); // should PASS
assertEqual(result1["Karima"], undefined); // should PASS
assertEqual(result1["Fang"], 2); // should PASS
assertEqual(result1["Agouhanna"], undefined); // should PASS
