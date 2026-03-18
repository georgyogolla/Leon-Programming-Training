// How to Convert a String into a Number Using the parseInt() Function
// The general syntax for the parseInt() function is the following:

// parseInt(string, radix)
// The parseInt() function takes two arguments: a string as the first argument and a radix as the second optional argument.

// The string is the value that needs to be converted into a number.

// The radix specifies the mathematical number system you want to use and the base of the number that will be returned – whether the number will be a base 2 (or binary), base 8 (or octal), base 10 (decimal), or base 16 (or hexadecimal) number.

// If the radix is not included, then it is 10 (decimal value) by default.


let num = '8';
let strToNum = parseInt(num, 10);
console.log(strToNum);
console.log(typeof strToNum); //number

// What if the string contains letters and numbers? It will return only the numbers from the string:
// When parseInt() encounters a non-numerical character, it ignores it and all the characters that come after that, even if there are more numbers down the line.
let num2 = '2 different numbers: 8 and 7';
let converted = parseInt(num2, 10);
console.log(converted);

// Something to keep in mind is that if the string does not start with a number, then NaN (which is short for Not a Number) will be returned instead.
let newNum = 'hello number 7';
let convert = parseInt(newNum, 10);
console.log(convert);



// How to Convert a String into a Number Using the parseFloat() Function
// The general syntax for the parseFloat() function is the following:

// parseFloat(string)
// The syntax and behaviors of the parseFloat() function are similar to that of the parseInt() function. The main difference is that parseFloat() takes only one argument and doesn't accept a radix as an argument.

// The parseFloat() function accepts a string as its only argument and returns a float – a number with a decimal point.

// Use the parseFloat() function when you want to retain the decimal part and not just the integer part of a number.

let firstFloat = '2.312';
let convertedFloat = parseFloat(firstFloat);
console.log(convertedFloat); //maintains the float part

let convertedFloat1 = parseInt(firstFloat, 10);
console.log(convertedFloat1); // returns a whole number

// And just like parseInt() again, if the first character is not a valid number, the parseFloat() function will return NaN instead of a number as it cannot convert it into a number:

// let num = 'h7.77';

// let strToNum = parseFloat(num);

// console.log(strToNum);

// NaN


// How to Convert a String into a Number Using the Number() Function
// The general syntax for the Number() function is the following:

// Number(string)
// The difference between the Number() function and the parseInt() and parseFloat() functions is the fact that the Number() function tries to convert the entire string into a number all at once. The parse methods convert a string to a number piece by piece, and they move through the characters that make up the string individually and one at a time.

// let nums = '7 hello 7';
let nums = '77';
let convertedNums = Number(nums);
console.log(convertedNums);
console.log(typeof convertedNums);

// Since Number() attempts to convert and typecast the entire string into a number all at once, it returns NaN since it encounters non-numerical characters and is, therefore, unable to convert to a number.

// The Number() function is a great choice when you want the conversion to fail if the string contains non-numerical characters.

// Something else to note is that the Number() function does not return a whole number when it encounters a decimal number, in contrast to the parseInt() function you saw earlier.

