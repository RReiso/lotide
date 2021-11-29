const without = (source, itemsToRemove)=>{
  let newArr = [];
  for (let el of source) {
    let match = false;
    for (let item of itemsToRemove) {
      if (el === item) match = true;
    }
    if (match === false) newArr.push(el);
  }
  return newArr;
};

module.exports = without;
