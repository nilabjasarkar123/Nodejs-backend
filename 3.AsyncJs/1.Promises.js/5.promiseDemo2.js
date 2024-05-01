// function demo1() {
//   return new Promise((resolve, reject) => {
//     console.log("hi");
//     setTimeout(function process() {
//       console.log("woo ! task done");
//       resolve("yepppi");
//     }, 10000);
//     console.log("by");
//   });
// }

// y = demo1(); //try on console
/************************************************ */
function demo2(val) {
  return new Promise((resolve, reject) => {
    console.log("start");
    setTimeout(function process() {
      console.log("end timer");
      if (val % 2 == 0) {
        resolve("Even");
      } else {
        reject("odd");
      }
    }, 6000);
    console.log("somewhare");
  });
}

a = demo2(function even() {
  return 7;
}); // try on console
console.log(a);
