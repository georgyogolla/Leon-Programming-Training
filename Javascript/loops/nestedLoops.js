// NESTED LOOPS
let str = "LEON";
for(let i = 0; i <= 5; i++){
    console.log("Outer: ", i);
    for(let j = 0; j < str.length; j++){
        console.log("  Inner: ", str[j])
    }
};
