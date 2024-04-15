function fun(x) {
  console.log(x + 10);
  return x * 10; // if we don't return it autometically return undefined
}

var x = fun(10);
console.log(x);
// console.log() fucn return undefined