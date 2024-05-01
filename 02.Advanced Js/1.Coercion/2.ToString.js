/**
 * a+b
 * lval rval
 * lprim = toPrimitve(lval);
 * rprim = toPrimitive(rval);
 *
 * if(lprim is a string (or) rprim is a string)
 *        do string concat
 * lnum = ToNumber(lprim)
 * rnum = ToNumber(rprim);
 *
 * [[],[],[]] -> ,,,
 * [1, 2, 3] -> "1, 2, 3"
 */

console.log("nil" + "abja");

console.log(undefined + "node");

console.log("5" + null);

console.log("nil" + [null, undefined]);

console.log("nil " + [1, 2, 3]);
console.log(typeof [(null, undefined)]);

// value of toString ex:
let a = {
  english: 90,
  math: 100,
  hindi: 60
};
console.log("nil" + a);
console.log(a.toString());
console.log(a.valueOf());

let x = [1, 2, 3];
console.log(x.toString());
console.log(x.valueOf());// print array with brackets 

/***************************** */

console.log("Nilabja" + { a: 10 });
/**
 * nilabja -> is already a primitive
 * {"a" : 10} -> not primitive -> call premitive without hint
 * i.e hint -> number
 * we first call valueOf on {"a" : 10} -> returns same object
 * we call toString will return [object Object] which is a string i.e primitive
 * by default toString on object returnd [object, object]
 * by default valueof on an object returns same object
 */
console.log(10 - { a: 10 });

x = {
  b: 90,
  valueOf() {
    // override the valueOf
    return 2;
  },
};
console.log(x - 10);
