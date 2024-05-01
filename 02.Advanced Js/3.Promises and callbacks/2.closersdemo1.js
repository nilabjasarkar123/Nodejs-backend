/********eg : 1**************************** */
/**
 * at the time instance when function fun
 * will be called the todo function is alredy over
 *
 * if fun is called after the completion of todo
 * how fun is able to access task var?
 * -> this happens because of closers
 *  closer is when a function remembers its lexical scope
 *  even when it executed outside of lexical scope
 * 
 * every funuction until it executes it remember what scope the variable are coming 
 */
function todo(task) {
  console.log("start of todo");
  // start timer and move ahade
  setTimeout(function fun() {
    console.log("completed", task);
  }, 2000);
  //task = "--->not copy the value but remember the var";
  console.log("end of todo");
}

console.log("start");
todo("assignment"); // calling todo
console.log("ending");
