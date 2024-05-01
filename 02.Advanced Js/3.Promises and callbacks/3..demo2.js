function a(name) {
  return function b() {
    console.log(name, "1");
  };
}
let x = a("nil");
console.log(x, "2");
x();
