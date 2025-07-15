var c = 300
let a = 100;
if(true){
    let b = 200;
    // console.log("Inside if block", a, b, c); // 100, 200, 300
}

// console.log(a);
// console.log(b); // ReferenceError: b is not defined
// console.log(c); // 300


function one(){
    const username = "suraj";

    function two(){
        const website = "youtube"
        console.log(username); // suraj

    }
    // console.log(website); // ReferenceError: website is not defined

    two(); // calling the inner function to access the outer variable

}

// one()

if (true){
    const username = "Jarvis"
    if(username === "Jarvis"){
        const website = "youtube";
        // console.log(username + website);
        
    }
    // console.log(website); 
}

// console.log(username); 


// ++++++++++++++++++++++ interesting part ++++++++++++++++++++++

console.log(addone(5));

function addone(num){
    return num + 1;
}




console.log(addTwo(5));
const addTwo = function(num){
    return num + 2;
}
