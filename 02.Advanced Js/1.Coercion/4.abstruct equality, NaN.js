console.log(null == undefined);
console.log(10 == "10"); // toNumber('10')
console.log(10 == "12");

console.log(
  10 ==
    {
      valueOf() {
        // toPrimitive({valueOf() { return 10;},})
        return 10;
      },
    }
);

let a = 5;
if (a) {
  console.log("hi");
}
if (a == true) {
  console.log("by");
}
