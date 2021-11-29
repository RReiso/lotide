const middle = (arr) => {
  if (arr.length < 3) return [];
  if (arr.length % 2 === 1) return [arr[Math.floor(arr.length / 2)]];
  else return [arr[arr.length / 2 - 1], arr[arr.length / 2]];
};

module.exports = middle;
