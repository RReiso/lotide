const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) return false;

  for (const key in object1) {
    let obj1Val = object1[key];
    let obj2Val = object2[key];

    // check if both values are arrays
    let isBothArrays = Array.isArray(obj1Val) && Array.isArray(obj2Val);
    if (isBothArrays && !eqArrays(obj1Val, obj2Val)) return false;

    //check if both values are objects
    let isBothObjects = (typeof obj1Val === "object" && typeof obj2Val === "object");
    if (isBothObjects) return eqObjects(obj1Val, obj2Val);

    // check if both values are not the same primitive values
    if (obj1Val !== obj2Val) return false;
  }
  return true;
};

module.exports = eqObjects;
