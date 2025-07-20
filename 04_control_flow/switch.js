// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = "march"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}


let num = 2;

switch (num) {
  case 1:
    console.log("One");
  case 2:
    console.log("Two"); // This and all below will execute
  case 3:
    console.log("Three");
  default:
    console.log("Default case");
}
// Output:
// Two  
// Three
// Default case