const assertEqual = function(actual, expected) {
  if (actual === expected)
    console.log(`✅ Assertion Passed: [${actual}] === [${expected}] ✅`);
  else console.log(`❌ Assertion Failed: [${actual}] !== [${expected}] ❌`);
};

const countLetters = (str) =>{
  let result = {};
  str = str.split(" ").join("");

  for (let char of str) {
    result[char] ? result[char]++ : result[char] = 1;
  }
  return result;
};

let obj = countLetters("abc bdb");
assertEqual(obj.a, 1);
assertEqual(obj.b, 3);
assertEqual(obj.e, undefined);

obj = countLetters("lighthouse in the house");
assertEqual(obj.h, 4);
assertEqual(obj.e, 3);
assertEqual(obj.z, undefined);
