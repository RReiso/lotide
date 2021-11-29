const flatten = (arr,res = [])=>{
  for (let el of arr) {
    if (Array.isArray(el)) {
      flatten(el,res);
    } else {
      res.push(el);
    }
  }
  return res;
};

module.exports = flatten;
