//Data Types in JavaScript
/*Two types or data type 1 primitive datatype , 2 Non primitive data type
Primitive datatype 7 types : string, number, boolean, null, undefined, symbols, BigInt*/
const score = 22;
const score2 = "abc";
const id = Symbol("123");
const anotherId = Symbol("123");
const bigNumber = 234567891098n;

/*Non-primitive datatype(also knows reference datatype )
array,object,Functions
javascript is dynamically typed 
*/

const heros = ["shaktiman", "nagraaj", "doga"];

let myObj = {
  name: "Kusum",
  age: 20,
};

const myFunction = function () {
  console.log("Hello world");
};

console.table([
  typeof score,
  typeof id,
  typeof anotherId,
  typeof bigNumber,
  typeof heros,
  typeof myObj,
  typeof myFunction,
]);

//------------------------Memory------------------/
/* Two types of memory 1st one is "Stack"(which is know as Primitive )
stack return copy 
, 2nd one is "Heap" (which is known as Non-primitive) heap return reference*/
let myYoutubeName = "abcdefg";
let anothername = myYoutubeName;
anothername = "chaiOurcode";
console.log(myYoutubeName);
console.log(anothername);

let userOne = {
  email: "user@gmail.com",
  upi: "user@ybl",
};

let userTwo = userOne;
console.log(userTwo.email);

userTwo.email = "kusum@gmail.com";

console.log(userOne.email);//will change because both are reference to same object in heap memory
console.log(userTwo.email);

