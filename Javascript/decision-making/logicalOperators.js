// LOGICAL
// OPERATORS

// AND (&&)
// Both sides must be true in order for the whole thing to be true

console.log(15 > 1 && 2  === 2); // true
console.log('abcd'.length === 4 && 1 + 3 === 4); // true

// Checking for password validity

// create a variable named password and assign a value to it 
// Check password for length 
// check for spaces in the password 
let password = 'taco tuesday';
if(password.length >= 6 && password.indexOf(' ') === -1){
    console.log("VALID PASSWORD!!")
} else {
    console.log("INVALID PASSWORD!!");
};


// OR (||)
// (pipe character above enter key) If one side is true, the whole thing is true.

console.log('abcde'.length === 4 || 1 + 3 === 4);
console.log('abcd'.length === 4 ||  1 + 4 === 4);

console.log(1 !== 1 || 10 === 10); // both operands evaluates to true - true
console.log(10/2 === 5 || null); // left operand evaluates to true but the right operand is a falsy value - true
console.log(0 || undefined); // both operands are falsy values so the result is false

// Example with conditionals
let age = 7;
if(age < 6 || age >= 65){
    console.log('You get in for free');
} else {
    console.log('You pay $10 please!!');
}

console.log('***** NOT ****')
// NOT (!)
// !expression returns true if the expression is false

let passwordTwo = 'taco tuesday';
if(passwordTwo.length >= 6 && passwordTwo.indexOf(' ') !== -1){
    console.log("INVALID PASSWORD!!")
} else {
    console.log("VALID PASSWORD!!");
};


// OPERATOR PRECEDENCE
// NOT (!) has higher precedence than && and ||
// && has higher precedence than ||
// !
// &&
// | |
// You can alter this using parens ()
console.log("==== Operator Precedence ====");

let result = true || false && false;
console.log(result); // true
console.log(!true && true); // false