// LEXICAL SCOPE

// One-Way Access: Inner functions have access to variables in their parent (outer) scopes, but outer scopes cannot access variables inside inner functions.
// The Scope Chain: When you use a variable, JavaScript searches for it in the current scope. If it's not found, it moves up to the next outer scope, continuing until it reaches the global scope.

function outer(){
    let hero = "Black Panther";
    // console.log(cryForHelp); ReferenceError: cryForHelp is not defined

    function inner(){
        let cryForHelp = `Hello, ${hero}, please come and help!!`
        console.log(hero); // inner functions have access to the variables of the outer function
        console.log(cryForHelp);
    };
    inner();

}

outer();