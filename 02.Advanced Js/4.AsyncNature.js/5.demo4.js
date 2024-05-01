function fun() {
  console.log("fun called");

  setTimeout(function exce() {
    console.log("executed some task1");
  }, 7000);

  setTimeout(function process() {
    console.log("executed some task2");
  }, 3000);
}

fun();

for (let i = 0; i < 1000000000; i++) {
  //some task
}

setTimeout(function last() {
  console.log("executed last task3");
}, 0);

// what are disadv of call backs?
