/**
 * There are features in every prog lang is typer interconversion
 * Js have 4 pillers
 * 1. coersion - typer interconversion
 * 2. object oriented
 * 3. scopes
 * 4. asynchronous nature
 * coersion  - typer interconversion
 * - implicit  : lang autometically did interconversion
 * - explicit  : manually doing
 * c, c++, java : types exists for the veriable the bucket have a type
 * js : the bucket does not have a type
 * let x = 10 later x = "str"
 * How Js han
 */
// console.log("1" + "2");
// console.log(1 + "2");
// console.log(1 - "1");
// let a = 10 - { a: 10 };

// a =
//   10 -
//   {
//     a: 10,
//     valueOf() {
//       return 9;
//     },
//   };
// console.log(a);

// toNumber demo
// console.log(12 - 6);

// console.log(undefined - 3);
/**
 * undefined is not a valid num so toNumber abstruct covnersion will convert it to NAN
 * NaN- 3 => NaN any ops with NAN will result to NaN
 */
// console.log(null - 5);
/**
 * similarly toNumber(NULL) => +0
 * 0 - 5 = -5
 */

// console.log("125" - 5);
// console.log(5 - "125");
// console.log(5 - "ab");
// console.log("12f5" - 5);
// console.log(Symbol("123") - 5);
console.log(4 - true);
