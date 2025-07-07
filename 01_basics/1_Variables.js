const accountId = 334455;
let accountEmail = "suraj@google.com"
var accountPassword = "12345";
accountCity = "Pune"; // This will throw an error because accountCity is not declared with let or var

// accountId = 2 // This will throw an error because accountId is a constant and cannot be reassigned

accountEmail = "sg@gmail.com"; // This is allowed because accountEmail is declared with let
accountPassword = "67890"; // This is allowed because accountPassword is declared with var
accountCity = "Mumbai"; // This is allowed because accountCity is not declared with let or var

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.log(accountId, accountEmail, accountPassword, accountCity);
console.table([accountId, accountEmail, accountPassword, accountCity]);

