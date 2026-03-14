// STRING
// TEMPLATE LITERALS
// Template literals are strings that allow
// embedded expressions, which will be evaluated
// and then turned into a resulting string.
let sumSheepAndGoats = "I counted 3 + 4 goats and sheep"; // not template literal
console.log(sumSheepAndGoats);

let sumOfAnimals = `I counted ${3 + 4} animals and ${sumSheepAndGoats}`; //template literal
console.log(sumOfAnimals);