// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected)
    console.log(`✅ Assertion Passed: [${actual}] === [${expected}] ✅`);
  else console.log(`❌ Assertion Failed: [${actual}] !== [${expected}] ❌`);
};

const head = (arr) => {
  return arr[0] || undefined;
};

// TEST CODE
console.log(head([1, 2, 3]));
console.log(head([2]));
console.log(head([]));
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hellllo");
