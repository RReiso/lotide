const findKeyByValue = require('../findKeyByValue');
const assertEqual = require('../assertEqual');

const bestTVShowsByGenre = {
  scifi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);


const letters = {
  a: 1,
  b: 2,
  c: 3
};

assertEqual(findKeyByValue(letters, 2), "b");
assertEqual(findKeyByValue(letters, 4), undefined);
