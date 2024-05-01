/**-----------------------------ex : 1-----------------------------------------------------------*/
// setTimeout(function execute() {
//   console.log("maggi buy task 1 complete");
// }, 5000);
// console.log("water boiling ");

/****************************ex : 2********************************************************************* */

// let id1 = setTimeout(function execute() {
//   console.log("task 1 complete");
// }, 7000);

// // for (let i = 0; i < 10000000000; i++) {}
// let id2 = setTimeout(function execute() {
//   console.log("task 2 complete");
//   clearTimeout(id1); //ex: 3: after line 13 line 14 come and it clear the first timer because 1st timer is still running
// }, 5000);

/****************************ex : 4: setinterval********************************************************************* */
// setInterval(function execute() {
//   console.log("task complete");
// }, 3000);
// console.log("outside");

/****************************ex : 5: setinterval********************************************************************* */
let id3 = setInterval(function execute() {
  console.log("task complete");
}, 1000);
setTimeout(function execute() {
  console.log("task finished");
  clearInterval(id3);
}, 5000);
