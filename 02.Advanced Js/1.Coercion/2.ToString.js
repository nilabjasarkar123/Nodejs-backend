console.log("nil" + "abja");

console.log(undefined + "node");

console.log("5" + null);

console.log("nil" + [null, undefined]);

// value of toString ex:
let a = {
  english: 90,
  math: 100,
};
console.log(a.toString());
console.log(a.valueOf());

let x = [1, 2, 3];
console.log(x.toString()); // print array with brackets
console.log(x.valueOf());

/***************************** */

console.log("Nilabja" + { a: 10 });
/**
 * nilabja -> is already a primitive
 * {"a" : 10} -> not primitive -> call premitive without hint
 * i.e hint -> number
 * we first call valueOf on {"a" : 10} -> returns same object
 * we call toString will return [object Object] which is a string i.e primitive
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
