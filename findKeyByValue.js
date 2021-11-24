const assertEqual = function(actual, expected) {
  if (actual === expected)
    console.log(`✅ Assertion Passed: [${actual}] === [${expected}] ✅`);
  else console.log(`❌ Assertion Failed: [${actual}] !== [${expected}] ❌`);
};


const findKeyByValue = (obj, value)=>{
  for (const key in obj) {
    if (obj[key] === value) return key;
  }
};

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
