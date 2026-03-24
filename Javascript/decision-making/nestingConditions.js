// NESTING
// We can nest conditionals inside conditionals

// create a variable named password and assign a value to it 
// Check password for length 
// check for spaces in the password 

let password = "Hello@2026!";
if(password.length >= 6){
    // check for space in the password 
    if(password.indexOf(' ') !== -1){
        console.log('Passwords should not contain spaces');
    } else {
        console.log('Valid Password');
    }
} else {
    console.log('Password too short');
}

// () - parenthesis
// {} -calibraces
// [] - brackets 

// TRUTHY & FALSY VALUES
// All values have an inherent truthy
// or falsy boolean value
// Falsy values:
// false
// 0
// "" (empty string)
// null
// undefined
// NaN
// Everything else is truthy!

