// STRING
// TEMPLATE LITERALS
// Template literals are strings that allow
// embedded expressions, which will be evaluated
// and then turned into a resulting string.

// SYNTAX
// `any string, ${embed} any other string or anything else. ${embed}`

let sumSheepAndGoats = "I counted 3 + 4 goats and sheep"; // not template literal
console.log(sumSheepAndGoats);

let sumOfAnimals = `I counted ${3 + 4} animals and ${sumSheepAndGoats}`; //template literal
console.log(sumOfAnimals);

// console.log(`I counted ${3 +4} dogs!!`)
let firstName = "Leon";
let lastName = "Liech";
// let fullName = firstName.concat(lastName);
// let fullName = firstName + lastName;
let fullName = `${firstName} ${lastName}!!`;
console.log(fullName);

let item = "Oranges";
let pricePerUnit = 3;
let quantity = 7;

// "I bought 5 Cucumbers at a total price of $12.5!!"
// let totalPrice = `I bought 5 Cucumbers at a total price of ${2.5 * 5}`;
let totalPrice = `I bought ${quantity} ${item} at a total price of Kshs.${pricePerUnit * quantity}!!`;
console.log(totalPrice);

const num1 = 20;
const num2 = 30;
// The Sum of 20 and 30 is 50
const sum = `The Sum of ${num1} and ${num2} is ${num1 + num2}`;
console.log(sum);



