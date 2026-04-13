// WHILE LOOPS
// A while loop continues to run as long
// as its test condition is true

let num = 0;
while (num < 10){
    console.log(num);
    num++
};

// A COMMON PATTERN
let targetNum = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);

while(guess !== targetNum){
    console.log(`You guessed: ${guess}...Incorrect`);
    guess = Math.floor(Math.random() * 10);
    
}
console.log(`CORRECT!... Guessed: ${guess} & target was: ${targetNum}`);