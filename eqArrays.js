const eqArrays = (arr1, arr2)=>{
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    // check if both elements are arrays
    let isBothArrays = Array.isArray(arr1[i]) && Array.isArray(arr2[i]);
    if (isBothArrays) return eqArrays(arr1[i], arr2[i]);

    // check if primitive elements are the same
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};
 
module.exports = eqArrays;
