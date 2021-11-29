const findKeyByValue = (obj, value)=>{
  for (const key in obj) {
    if (obj[key] === value) return key;
  }
};

module.exports = findKeyByValue;
