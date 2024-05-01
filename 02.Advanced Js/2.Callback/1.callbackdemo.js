function fun(x, fn) {
  /**
   * x -> number
   * fn -> callback funtion
   *  */

  for (let i = 0; i < x; i++) {
    console.log(i);
  } // calling the callback fun passed
  fn();
}

// fun(10, function log() {
//     // this is call back fun
//   console.log("custom log");
// });

fun(10, function adarsh() {
  console.log("hello moto");
});
