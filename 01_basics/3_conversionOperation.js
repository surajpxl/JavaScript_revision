let score = "hitesh"

// console.log(typeof score);
// console.log(typeof (score));


let valueInNumber = Number(score); // converts string to number
// console.log(typeof valueInNumber); // number
// console.log(valueInNumber); // NaN (Not a Number)


// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = "jarvis"

let booleanIsLoggedIn = Boolean(isLoggedIn); // converts string to boolean
// console.log(booleanIsLoggedIn); // true (because non-empty string is truthy)

// 1 => true; 0 => false
// "" =>false
// "jarvis" => true

let someNumber = 33;

let stringNumber = String(someNumber); // converts number to string
// console.log(stringNumber); // "33"
// console.log(typeof stringNumber); // string  

// *******************Operations***********************

let value = 3
let negValue = -value; // negates the value
console.log(negValue); // -3

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3); // exponentiation operator (2 to the power of 2)
// console.log(2/2); // division operator
// console.log(2%3); // modulus operator (remainder of division)


let str1 = "hello"
let str2 = "jarvis"

let str3 = str1 +" "+ str2; // concatenation of strings
// console.log(str3); // "hello jarvis"

console.log("1" + 2); // "12" (string concatenation)
console.log(1 + "2"); // "12" (string concatenation)
console.log(1 + 2 + "3"); // "33" (number addition first, then string concatenation)
console.log("1" + "2" + 3); // "123" (string concatenation)
console.log("1" + 2 + 2); // "122" (string concatenation)

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion


