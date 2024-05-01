// place holder for certain amount of time until we get response from async operation
// container for future value
// promise is an object that you can remember , represent eventual completion of async operation
// -> callback hell -> inversion of control
// ioc-> if there is some part of code whose control we are passing to some one else & we do
// not know how that part will be executed

function fun(inputString, fn) {
  // executes algo on string
  let output = inputString.split(",");
  // name: nil
  // subject: cse
  for (let i = 0; i < output.length; i++) {
    fn(output[i]);
    //fn(output[i]);
  }
}

// use it: here we are giveing authority to fun not in our control
// is called inversion of control
fun("name: nil, subject: cse", function process(ip) { // ip=>output[0]
  let arr = ip.split(":");
  console.log("{", arr[0], "=>", arr[1], "}");
});
