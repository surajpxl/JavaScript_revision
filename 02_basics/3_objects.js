// singleton
//Object.create


// object literals

const mySymbol = Symbol("key1")

const JsUser = {
    name: "Suraj",
    "full name": "Suraj Gupta",
    [mySymbol]: "mykey1", 
    age: 22,
    location:"Delhi",
    email: "suraj@gmail.com",
    isLoggedIn: false,
    lastLogginDays: ["Monday", "Tuesday", "Wednesday"],
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySymbol]);

JsUser.email = "jarvis@ai.com"
// Object.freeze(JsUser) // Freezes the object, preventing any changes to its properties
JsUser.email = "jarvis@ultron.com" // This will not change the email property
//  console.log(JsUser.email); // Still "

JsUser.greeting = function(){
    console.log("Hello JS user");  
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user ${this.name}`);  
    
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
