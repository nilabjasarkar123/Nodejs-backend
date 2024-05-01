// How can we write a fun to download some data from a url using promises
// promise function is immutable
function fetch(url) {
  // new Promise: new constrctor: excepts a new fuction : it has two parameter
  return new Promise(function (resolve, reject) {
    console.log("Starting fetching from", url);
    setTimeout(function process() {
      let data = "dummy data";
      //soemhow we need to return the data
      console.log("completed fetching the data");
      resolve(data); //return some data on success
      console.log("after resolve");
    }, 4000);
  }); //technically a constructor
}
let x = fetch("www.google.com");
console.log(x);

/*
when do we consider the promise fulfilled
if we call resolve() fn, consider it fulfill.
we consdier it rejected if we call reject().
*/
