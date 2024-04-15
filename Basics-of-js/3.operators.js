// typeof operator == > the answer we get is in from of string
console.log(typeof "abc"); // string
console.log(typeof 12); // number
console.log(typeof true); // boolean

// corner cases
console.log(typeof undefined); // undefined
console.log(typeof null); // object
console.log(typeof { key: 123 }); // object
console.log(typeof NaN); // number

// operators
// arithmetic
console.log(10 + 2);
console.log(10 - 2);
console.log(5 / 2); // non floor div ans = 2.5
console.log(10 * 2);
console.log(10 % 2);

// if we want floor division there are 2 way
// 1. parseInt(5/2);
// 2. Math.floor(5/2);
console.log(parseInt(5 / 2));

// assignment
let x = 10;
x += 2; // x = x + 2

// logical operators : and && , or || , not ! convert to bool then do ops
console.log(10 > 5 && 7 < 6);
console.log(10 > 5 || 7 < 6);
console.log(4 && 0);
console.log(4 || 0);
console.log(0 && 4);
console.log(0 || 4); // short circuiting
console.log(4 && 5);
console.log(4 || 5);

// Comparison operator
// >, >=, <, <=, != : abstract not equal to, !== strict not equal to
// == abstruct equality operator , === strict equality operator => coercion


// bitwise operator=> operat on binary rep of num

// bitwise and = &
console.log(5 & 3);

// bitwise or = |
console.log(5 | 3);

// bitwise xor = ^
console.log(5 ^ 3);

// bitwise not = ~
console.log(~5);

// leftshift = >>
console.log(2 >> 1);

// rightshift = <<
console.log(2 << 1 );

// string based operator => + => concatination
console.log("hi" + "there");

// ternary operator
console.log((2>1) ? "nilabja": "sarkar")
