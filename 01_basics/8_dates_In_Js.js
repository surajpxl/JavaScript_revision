// Dates 

let myDate = new Date()
// console.log(myDate.toString()); // Current date and time in string format
// console.log(myDate.toDateString()); // Current date in string format
// console.log(myDate.toLocaleDateString()); // Current date in locale format
// console.log(typeof myDate); // object

// let myCreatedDate = new Date(2023, 0, 23) // January is 0
// let myCreatedDate = new Date(2023, 0, 23, 5, 3) // 
// let myCreatedDate = new Date("2023-01-14") // 
let myCreatedDate = new Date("01-14-2025") 
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now() // Current timestamp in milliseconds

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now() / 1000)); // Current timestamp in seconds


let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1); // getMonth() returns month from 0 to 11, so we add 1 to get the actual month
// console.log(newDate.getDay()); // getDay() returns day from 0 to 6, where 0 is Sunday and 6 is Saturday

// `${newDate.getDay()} and the time`


newDate.toLocaleString('default'
, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
})

console.log(newDate.toLocaleString('default'
, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
}));
