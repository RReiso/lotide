const head = (arr) => {
  return arr[0] || undefined;
};

console.log(head([1, 2, 3]));
console.log(head([2]));
console.log(head([]));

module.exports = head;
