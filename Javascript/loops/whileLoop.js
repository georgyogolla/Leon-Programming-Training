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


// BREAK KEYWORD
let targetNumNew = Math.floor(Math.random() * 10);

let guessNew = Math.floor(Math.random() * 10);


while (true){
    guessNew = Math.floor(Math.random() * 10);
    if(guessNew === targetNumNew){
        console.log(`CORRECT! Guessed: ${guessNew} & target was: ${targetNumNew}`);
        break;
    } else {
        console.log(`Guessed ${guessNew}...Incorrect!`);
    }
}