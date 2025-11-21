/*-------------Numbers & Number Methods----------------- */
const score = 400;
console.log(score);

const balance = new Number(200);
console.log(balance);
console.log(balance.toString()); // it will convert number to string
console.log(balance.toString().length); // it will give length of number after converting it to string
console.log(balance.toFixed(2)); // it will convert number to string with 2 decimal point
console.log(balance.toFixed(1)); //range 0-20

const otherNumber = 23.89666;
console.log(otherNumber.toPrecision(3));

const numbers = 1000000;
console.log(numbers.toLocaleString());
console.log(numbers.toLocaleString("en-IN"));

/*-------------Maths Library----------------- */
console.log(Math.abs(-4)); //absolute value
console.log(Math.round(4.6)); //round to nearest integer
console.log(Math.ceil(4.2)); //round up
console.log(Math.floor(4.9)); //round down
console.log(Math.min(2, 9, 6, 4)); //minimum value
console.log("Max value:", Math.max(5, 4, 9, 3)); //maximum value

console.log(Math.random()); //random number between 0 and 1
console.log(Math.random() * 10 + 1); //random number between 1 and 11
console.log(Math.floor(Math.random() * 10) + 1); //random integer between 1 and 10
const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); //random integer between min and max (inclusive)
