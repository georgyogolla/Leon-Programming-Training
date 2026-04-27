// SCOPE
// Variable "visibility"
// The location where a
// variable is defined
// dictates where we have
// access to that variable

// FUNCTION SCOPE

function helpMe(){
    let msg = 'I\'m on fire';
    console.log(msg); // msg is scoped to the helpMe function
}
// console.log(msg);  ReferenceError: msg is not defined
helpMe()



let bird = "Akuru";

function accesBirds(){
    let bird = 'Awendo';
    console.log(bird) //bird is scoped to the accesBirds function
};
console.log(bird)// bird is globally scoped
accesBirds(); 

// BLOCK SCOPE

let radius = 8;
if(radius > 0){
    const PI = 3.142;
    let circ = 2 * PI * radius;
    console.log(circ)
}
console.log(radius);
// console.log(PI); PI is not defined
// console.log(circ); circ is not defined
// PI & circ are scoped to the BLOCK
