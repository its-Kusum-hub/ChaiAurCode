//for run cd Javascript , cd 01-basic then node 03-ConversionOrOperation.js

const score = "33";

console.log(typeof score);
console.log(typeof score);

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
/*
."33"= 33
."33abc" =NaN
.true = 1 / false = 0*/

console.log("----------------------------------");
let isLoggedIn = 1;
let booleanIsloggedIn = Boolean(isLoggedIn); //
console.log(booleanIsloggedIn);

//***********************operations*********************************** */
console.log("----operations-------");
let value = 3;
let negValue = -value;
console.log(negValue);

/*operations
console.log(2 + 2);//addition output 4
console.log(2 - 2);//subtraction output 0
console.log(2 * 2);//multiplication output 4
console.log(2 ** 2);//exponentiation output 4
console.log(2 / 2);//division output 1
console.log(2 % 2);   */
console.log(+true);
console.log(+"");
//Link to Study
//https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
