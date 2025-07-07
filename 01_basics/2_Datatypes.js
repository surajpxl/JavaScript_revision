"use strict"; // treat all JS code as newer version

// alert ( 3 + 3) // we are using nodejs, not browser, so alert will not work

console.log(3
     +
      3); // code readability should be high


console.log("Hitesh");



// Primitive Datatypes
let name = "Hitesh";
let age = 22
let isLoggedIn = false;
let state; // undefined
let nullVariable = null; // explicitly setting a variable to null
      

// number => 2 to power 53
// bigint =>
// string => "" or '' or ``
// boolean => true or false
// undefined =>    // variable is declared but not assigned
// null => standalone value
// symbol => unique and immutable value


//object

console.log(typeof undefined); // undefined
console.log(typeof null); // object (this is a bug in JS, null is not an object, but it is treated as an object in JS)
console.log(typeof 3); // number
console.log(typeof "Hitesh"); // string
console.log(typeof true); // boolean
console.log(typeof Symbol("foo")); // symbol


