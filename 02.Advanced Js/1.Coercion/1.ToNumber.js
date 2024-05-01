
/**
 * abstract ops 
 * ToNumber => "-"
 * a - b
 * lval = a, rval = b
 * lnum = ToNumber(a)
 * rnum = ToNumber(b)
 *
 */
console.log(12 - 1);

console.log(undefined - 3);
/**
 *
 * undefined is not a valid number, it undergo toNumber abstract operation
 * toNumber(undefined) ->NaN
 * NaN - 3 = NaN
 */
console.log(null - 3);
/**
 * toNumber(null) ->+0
 */
console.log("132" - 2);
/**
 * toNumber("132") ->132
 */
console.log("13f2" - 2);
/**
 * toNumber("13f2") ->NaN
 */
console.log("132" - true);
console.log("0xf" - true);
console.log("0xz" - true);// z is not valid hex 
