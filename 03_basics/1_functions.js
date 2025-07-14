function myFunction(){
    console.log("Hello, World!");
    console.log("Welcome to JavaScript functions!");
    console.log("This is a simple function example.");
        
}
// myFunction()


function addTwoNumber(num1, num2){
    // let result = num1 + num2;
    // return result;
    return num1 + num2;
    
}

const sum = addTwoNumber(2, 3);
// console.log("Result", sum);


function loginUserMessage(username = "suraj"){ // default parameter
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Jarvis"));
// console.log(loginUserMessage(""));
// console.log(loginUserMessage("Jarvis"));


function calculateCartPrice(val1, val2, ...num1){ // rest operator
    return num1
}

// console.log(calculateCartPrice(100, 220, 300, 400));

// ----------------------------------

const user = {
    username: "suraj",
    price: 100,
}

function handleObject(anyObject){ 
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`); 
}
// handleObject(user)
// handleObject({
//     username: "jarvis",
//     price: 999,
// })


const myNewArray = [100, 200, 300, 400];
function returnSecondValue(getArray){
    return getArray[1]; // returns the second value}
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100, 200, 300, 400])); // passing array directly
