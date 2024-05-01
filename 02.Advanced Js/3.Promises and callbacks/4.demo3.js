function fun(task1, task2) {
  task1 = "nil";
  setTimeout(function gun() {
    console.log("completed", task1);
  }, 2000);
  task1 = task2;
  task2 = "assign";
}
fun("10", "32");
