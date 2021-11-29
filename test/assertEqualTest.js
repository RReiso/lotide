const assertEqual = require('../assertEqual');

assertEqual("Lighthouse Labs", "Bootcamp"); // should FAIL
assertEqual(1, 1); // should PASS
assertEqual(1, "1"); // should FAIL
assertEqual("1", "1"); // should PASS
