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