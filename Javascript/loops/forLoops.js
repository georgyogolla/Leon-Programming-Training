// LOOPS
// Doing things repeatedly
// Loops allow us to repeat code
// "Print 'hello' 10 times
// Sum all numbers in an array
// There are multiple types:
// for loop
// while loop
// for...of loop
// for...in loop


// SYNTAX 

// for (
// [initialExpression];
// [condition];
// [incrementExpression]
// )
// i = 0;      // initial expression
// if i < 10; // condition
// i =+ 1    // increment expression

for (let i = 0; i <= 10; i++){
    console.log(i);
};

// Example 2

// Start i at 50
// Subtract 10 each iteration
// Keep going as long as i >= 0

for(let i = 50; i >= 0; i -= 10){
    console.log(i);
}

// i += 1 => i = i + 1
// i -=10 => i = i - 10


// FOR LOOPS + ARRAYS
// To loop over an array, start at 0 and continue to the last index (length-1)

const animals = ['lion', 'pig', 'hen', 'goat'];
for(let i = 0; i < animals.length; i++){
    console.log(`${i} - ${animals[i]}`);
};

// 0 - lion
// 1 - pig
// 2 - hen
// 3 - goat
