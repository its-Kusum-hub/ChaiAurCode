const name = "kusum";
const age = 20;
//use backtick symbol(``)
console.log(`My name is ${name.toUpperCase()} and i am ${age} years old`);

const gameName = new String("cricket");
console.log(gameName[6]);
console.log(gameName.charAt(5)); // it will give character at index 5
console.log(gameName.indexOf("k")); // it will give index of character k
console.log(gameName.includes("c")); // it will return true if c is present otherwise false
console.log(gameName.substring(0, 4)); // it will give substring from index 0 to 4 but 4 is excluded
console.log(gameName.slice(0, 4)); // it will give substring from index 0 to 4 but 4 is excluded
console.log(gameName.slice(-4)); // it will give last 4 character of string
