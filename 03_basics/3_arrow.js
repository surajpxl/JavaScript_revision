const user = {
    username: 'john_doe',
    age: 30,

    greet: function() {
        console.log(this)
        console.log(`Hello, ${this.username}!`);
    }
}

// user.greet()
// user.username = "jarvis"
// user.greet()

// console.log(this);// this refers to the global object in non-strict mode

// function myFun(){
//     let username = "suraj"
//     console.log(this.username); // undefined in strict mode, global object in non-strict mode
// }
// myFun();

// const myFun = function() {
//     let username = "suraj"
//     console.log(this.username); // undefined in strict mode, global object in non-strict mode
// }
// myFun()

const myFun = () => {
    let username = "suraj"
    console.log(this); 
}
myFun()

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

// const addTwo = (num1, num2) => num1 + num2;

// const addTwo = (num1, num2) => (num1 + num2);

const addTwo = (num1, num2) => ({username: "suraj"});
console.log(addTwo(5, 6)); // { username: 'suraj' }

const myArray = [2, 4, 3, 5, 6];
myArray.forEach((num) => {
   
    console.log(num * 2);
});