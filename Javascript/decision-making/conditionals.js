// GOALS
// Understand Comparison Operators
// Write Conditionals
// Work with Boolean Operators

// COMPARISONS
// > greatter than
// < less than
// >= greater than or equla to 
// <= less than or equal to 

console.log(10 > 1); // true
console.log(-10 < 0); // true



// ==
// VS 
// ===

// ==
// (double equals)
// Checks for equality of value, but
// not equality of data type.
// It coerces both values to the same
// type and then compares them.
// This can lead to some unexpected
// results!

console.log('====== Double Equality  =====');
console.log('5'== 5); //true
console.log('a' == 'A');// false
console.log(true == false); // false

// ===
// (triple equals)
// Checks for equality of value AND type
console.log('====== Tripple Equality  =====');
console.log('5'=== 5); //true
console.log('a' === 'A');// false
console.log(true === false); // false

console.log("==== IF STATEMENTS ====");

// CONDITIONALS
// Making decisions with code
// SYNTAX
// if(condition){
//     console.log('print anything')
// }

let season = "Rainy";
// Run code if a given condition is true
if(season === "Rainy"){
    console.log('You need to have an Umbrella every time'); // print this if the condition is true
}

// ELSE IF
// If not the first thing, maybe this other thing??
let newSeason = "Summer";
if(newSeason === "Summer"){
    console.log('We need to have air conditioners in our houses'); 
} else if(newSeason === "Winter"){
    console.log("We need to have heavy jackets and clothings");
}

let daysOfTheWeek = 8;
if(daysOfTheWeek === 1){
    console.log("Monday");
} else if(daysOfTheWeek === 2){
    console.log("Tuesday");
} else if(daysOfTheWeek === 3){
    console.log("Wednesday");
} else if(daysOfTheWeek === 4){
    console.log("Thursday")
} else if(daysOfTheWeek === 5){
    console.log("Friday");
} else if(daysOfTheWeek === 6){
    console.log("Saturday");
} else if(daysOfTheWeek === 7){
    console.log("Sunday");
} else {
    console.log("Not within the range of days of the week") // "If nothing else was true, do this..."
}
