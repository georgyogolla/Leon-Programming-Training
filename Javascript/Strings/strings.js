// STRINGS
// In JavaScript,
// Strings are pieces of text,
// or strings of characters.
// We wrap them in quotes

// Whether you use single or double quotes,
// just make sure you are consistent.

// camelCase - Conventional name for naming javascript variables that have more than one word.

let myName = "Leon Omondi";
console.log(myName.length);
console.log(myName.indexOf("d"));
console.log(myName[9]);
console.log(myName);
// console.log(typeof myName);

// STRING METHODS
// Strings come with a set of built-in methods,
// which are actions that can be performed on or
// with that particular string.
// We can do things like...
// Searching within a string
// Replacing parts of a string
// Changing case (upper/lowercase)


// Change Case
let firstCase = "I am Leon Liech";
let upper = firstCase.toUpperCase();
let lower = firstCase.toLowerCase();
console.log(firstCase);
console.log(upper);
console.log(lower);

// TRIM 
console.log("==========================================");
let spacedBefore = "       Hello Spaced";
console.log(spacedBefore);
let trimmed = spacedBefore.trim();
console.log(trimmed);

// indexOf 
console.log("===== indexOf()=======");
let season = "rainysSeason";
console.log(season.indexOf("rainys"));
console.log(season.indexOf("Season"));
console.log(season.indexOf("d"));

// SLICE
let strTwo = "helloworldkenya";
let sliced = strTwo.slice(5);
let hello = strTwo.slice(0, 5); 
let world = strTwo.slice(5, 10);
console.log(world);
console.log(hello);//hello
console.log(sliced);

// REPLACE
let myLove = "I love my country, Kenya!";
let replaced = myLove.replace("Kenya", "Qatar");
console.log(replaced);
//REPLACEALL
let fruit = "orange, banana, orange, mango, apple, orange";
let newFruits = fruit.replaceAll("orange", "Guava");
console.log(newFruits);

//concatenation
const age = "5" + "4";
console.log(age);
console.log("PUP"[3]); // undefined
console.log("PUP".indexOf("R")); //-1

let userInput = "  TODO@gmail.com";
let cleanedInput = userInput.trim().toLowerCase();
console.log(cleanedInput)
