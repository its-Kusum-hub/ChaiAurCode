//Dates
let myDate = new Date();
console.log(myDate); //2025-11-20T09:11:56.312Z (current date and time in UTC)
console.log(myDate.toString()); //Thu Nov 20 2025 14:41:56 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); //Thu Nov 20 2025
console.log(myDate.toTimeString()); //14:41:56 GMT+0530 (India Standard Time)
console.log(myDate.toISOString()); //2025-11-20T09:11:56.312Z (in ISO format)
console.log(myDate.toLocaleString()); //11/20/2025, 2:11:56 PM (in local format)
console.log(myDate.toLocaleDateString()); //11/20/2025 (in local date format)
console.log(myDate.toLocaleTimeString()); //2:11:56 PM (in local time format)
console.log(myDate.toJSON()); //2025-11-20T09:11:56.312Z (in JSON format)

console.log(typeof myDate);

//in JavaScript months are start from 0(january) to 11 (december)
let mycreatedDate = new Date(2023, 0, 23); //23 January 2023
console.log(mycreatedDate.toDateString());
let MycreatedDate = new Date("01-14-2023");
console.log(MycreatedDate.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(MycreatedDate.getTime());
console.log(Math.floor(Date.now() / 1000)); //change time in seconds
console.log(Date.now() / 1000);

let newDate = new Date();
console.log(newDate.getDay());

newDate.toLocaleString("default", {
  weekday: "long",
});
console.log(newDate);
