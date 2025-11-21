let accountemail = "Kusum@123gmail.com";
var accountPassword = "1234";
accountCity = "jaipur";

//accountId = 2; //not allowed
console.log(accountId);
/* Prefer not to use var because of issue in block scope and function scope */

accountEmail = "abc@gmail.com";
accountPassword = "0032";
accountCity = "bokaro";

console.log("store multiple tables");
console.table([accountemail, accountPassword, accountCity]); // to print in table format
