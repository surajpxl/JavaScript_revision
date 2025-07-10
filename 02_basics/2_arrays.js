const marvel_heros = ["thor", "ironman", "hulk"]
const dc_heros = ["batman", "superman", "flash", "aquaman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]); // Accessing "superman" from the nested array

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] // Using spread operator to merge arrays
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, 8, [9, 10, 11, [12, 13, 14]]]

const flat_array = another_array.flat(Infinity)
console.log(flat_array);




console.log(Array.isArray("Jarvis")); // false
console.log(Array.isArray(another_array)); // true
console.log(Array.from("Jarvis")); // ['J', 'a', 'r', 'v', 'i', 's'] (converts string to array)
console.log(Array.from({name: "jarvis", age: 22})); // [{name: "jarvis", age: 22}] (converts object to array)


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // [100, 200, 300] (creates an array from the arguments)
