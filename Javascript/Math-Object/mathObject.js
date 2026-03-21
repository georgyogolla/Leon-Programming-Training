// Math is one of JavaScript's global or standard built-in objects, 
// and can be used anywhere you can use JavaScript.
// It contains useful constants like π and Euler’s
//  constant and functions such as floor(), round(), and ceil().


// Math Max
// Math.max() is a function that returns the largest value from a list of numeric values passed as parameters. If a non-numeric value is passed as a parameter, Math.max() will return NaN.

// An array of numeric values can be passed as a single parameter to Math.max() using either spread (...) or apply. Either of these methods can, however, fail when the amount of array values gets too high.

const maximum = Math.max(1,2,3,4,5,6,7,8,9);
console.log(maximum);

// The Math.min() function returns the smallest of zero or more numbers.

// You can pass it any number of arguments.
const minimum = Math.min(1,2,3,4,5,6,7,8,9);
console.log(minimum);

// Math.PI is a static property of the Math object and is defined as the ratio of a circle’s circumference to its diameter. Pi is approximately 3.14149, and is often represented by the Greek letter π.
console.log(Math.PI);

// Math Pow
// Math.pow() returns the value of a number to the power of another number.

// Syntax
// Math.pow(base, exponent), where base is the base number and exponent is the number by which to raise the base.

// pow() is a static method of Math, therefore it is always called as Math.pow() rather than as a method on another object.
const exponentiation = Math.pow(2, 4);
console.log(exponentiation);


// Math Sqrt
// The function Math.sqrt() returns the square root of a number.

// If a negative number is entered, NaN is returned.

// sqrt() is a static method of Math, therefore it is always called as Math.sqrt() rather than as a method on another object.

// Syntax
// Math.sqrt(x), where x is a number.
const squareRoot = Math.sqrt(16);
console.log(squareRoot);

// Math Trunc
// Math.trunc() is a method of the Math standard object that returns only the integer part of a given number by simply removing fractional units. This results in an overall rounding towards zero. Any input that is not a number will result in an output of NaN.

// Careful: This method is an ECMAScript 2015 (ES6) feature and thus is not supported by older browsers.
const num = 34.567;
const truncated = Math.trunc(num);
console.log(truncated);


// Math Ceil
// The Math.ceil() is a method of the Math standard object that rounds a given number upwards to the next integer.
//  Take note that for negative numbers this means that the number will get rounded “towards 0” instead of the number of greater absolute value (see examples).

const valueOne = 2.1;
const ceiled = Math.ceil(valueOne);
console.log(ceiled)

// Math Floor
// Math.floor() is a method of the Math standard object that rounds a given number downwards to the next integer. Take note that for negative numbers this means that the number will get rounded “away from 0” instead of to the number of smaller absolute value since Math.floor() returns the largest integer less than or equal to the given number.
const numTwo = 23.14;
const floored = Math.floor(numTwo);
console.log(floored);

// The Math.round() 
// function returns the number rounded to the nearest integer. That is, 3.87 is rounded to 4 and 3.45 is rounded to 3.
const numThree = 3.57
const numThreeResult = Math.round(numThree);
console.log(numThreeResult);


// The Math.random()
// function returns a floating-point, pseudo-random number between 0 (inclusive) and 1 (exclusive).

let randomNumber = Math.random()

console.log(randomNumber)

let rand = Math.floor(Math.random() * 2)

console.log(rand)

// Output: 0.16668531572829082




