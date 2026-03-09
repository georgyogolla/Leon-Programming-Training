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
