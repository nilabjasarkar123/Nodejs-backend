let arr = [1, 2, 3, 4];

let x = arr.map(function process(v, i) {
  /**
   * v-> value
   * i-> index
   */
  console.log(v, i);
  return v;
});

console.log(x);
