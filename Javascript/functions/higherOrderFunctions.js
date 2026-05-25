// HIGHER ORDER FUNCTIONS
// Functions that operate on/with other
// functions. They can:
// 1. Accept other functions as arguments
// 2. Return a function

// 1. Accept other function
function callTwice(func){
    func();
    func();
    func();
};

function laugh(){
    console.log("HAHHHAHHAHHAHAHAHAHA");
};

callTwice(laugh);


// example 2
function greet(name){
    name()
};

function getName(){
    let fName = 'kabambe';
    let lName = 'george';
    console.log(`Hello, my name is, ${fName} ${lName}`);
};

greet(getName);


// RETURNING FUNCTIONS

function makeBetweenFunc(min, max){
    return function(val){
        return val >= min && val <= max;
    }
}

const inAgeRange = makeBetweenFunc(18, 100);
console.log(inAgeRange(16));

console.log(inAgeRange(90));



