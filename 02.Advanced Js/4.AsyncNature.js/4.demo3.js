function process() {
  console.log("start");
  for (var i = 0; i < 3; i++) {
    setTimeout(function exec() {
      console.log("executed after some time some task1", i);
    }, 3000);
    console.log("inside loop");
  }

  for (var j = 0; j < 10000000; j++) {}
  console.log("end");
}
process();
