const letterPositions = function(sentence) {
  const results = {};
  for (let indx in sentence) {
    if (results[sentence[indx]]) {
      results[sentence[indx]].push(Number(indx));
    } else if (sentence[indx] !== " ") {
      results[sentence[indx]] = [Number(indx)];
    }
  }
  return results;
};

module.exports = letterPositions;





