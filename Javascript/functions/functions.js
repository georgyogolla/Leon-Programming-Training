// FUNCTIONS
// Reusable procedures
// Functions allow us to write
// reusable, modular code
// We define a "chunk" of code
// that we can then execute at
// a later point.
// We use them ALL THE TIME

// SYNTAX 
//**Regular Functions */
// function funcName(){
// //do something
// }

function sayHi(){
    // do anything
    console.log('Hello guys');
    console.log('Hi guys');
    console.log('How a you?');
}
// RUN/EXECUTE/CALL THE FUNCTION
sayHi();


function sayHello(){
    // do anything
    let name = "Leon";
    console.log(`How a you, ${name}!!`);
}
// RUN/EXECUTE/CALL THE FUNCTION
sayHello();
// sayHello();
// sayHello();


// ARGUMENTS
// We can also write functions that
// accept inputs, called arguments

function greet(person){
    console.log(`Hey, ${person}. How have you been?`)
}
greet("Livondo");

function greetTwo(person = "Livondo"){
    console.log(`Hey, ${person}. How have you been?`)
}
greetTwo();

// Find Largest NUmber 
function findLargest(x, y){
    if(x > y){
        console.log(`${x},  is larger`)
    } else if(x < y){
        console.log(`${y}, is larger`)
    } else {
        console.log(`${x} and ${y} are equal`)
    }
}

findLargest(30, 30);


// RETURN
// Built-in methods return
// values when we call them.
// We can store those values:

// The return statement ends function
// execution AND specifies the value to
// be returned by that function
function add(x, y){
    // console.log(x + y); // debugging
    return x + y; // end of function execeution
    console.log('hello world'); // will be ignored because of return statement
};

const res = add(2,3);
console.log(res);