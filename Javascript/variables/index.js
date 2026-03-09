// Variables are like "labeled jars"
// for a value in JavaScript.
// We can store a value and give it a
// name, so that we can...
// - recall it
// - use it
// - or change it later on.


// BASIC SYNTAX

// **recall it**
// let someName = value;
// let name = "Leon";
// console.log(name); 

// **change it later on**
let name;
name = "Kabambe";
name = "Joshua"; 
console.log(name); // recalling or calling

// UPDATE VALUES 
let hens = 3;
hens - 1; // This doesn't change the original value of hens
hens = hens -1; // This changes the orignal value of hens 
console.log(hens);

// CONST 
const chicken = 5;
// chicken = 10; // ERROR   - const works just like let, except you CANNOT change the value
console.log(chicken)

const rating = 7.5;
// rating = 8; TypeError: Assignment to constant variable.

// BOOLEAN
// camelCaseConvention - Javascript convention for declaring long variable names
let isWaterCold = true;
console.log(isWaterCold);
let isQatarBombed = false;
console.log(isQatarBombed);



