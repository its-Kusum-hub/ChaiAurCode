const name = "kusum";
const age = 20;
//use backtick symbol(``)
console.log(`My name is ${name.toUpperCase()} and i am ${age} years old`);

const gamName = new String("cricket");
console.log(gamName[6]);
console.log(gamName.charAt(5)); // it will give character at index 5
console.log(gamName.indexOf("k")); // it will give index of character k
console.log(gamName.includes("c")); // it will return true if c is present otherwise false
console.log(gamName.substring(0, 4)); // it will give substring from index 0 to 4 but 4 is excluded
console.log(gamName.slice(0, 4)); // it will give substring from index 0 to 4 but 4 is excluded
console.log(gamName.slice(-4)); // it will give last 4 character of string
