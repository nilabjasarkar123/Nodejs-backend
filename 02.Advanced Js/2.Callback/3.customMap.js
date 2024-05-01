function mapper(arr, fn) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    // i -> index, arr[i] ->value;
    res.push(fn(arr[i], i));
  }
  return res;
}

let arr = [1, 2, 3];
let x = mapper(arr, function cube(v, i) {
  console.log(v, v * v * v, i);
  return v * v * v;
});

console.log(x, arr);
