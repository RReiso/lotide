const countLetters = (str) =>{
  let result = {};
  str = str.split(" ").join("");

  for (let char of str) {
    result[char] ? result[char]++ : result[char] = 1;
  }
  return result;
};

module.exports = countLetters;
