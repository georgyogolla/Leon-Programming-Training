// NESTED LOOPS
let str = "LEONLIECH";
for(let i = 0; i <= 7; i++){
    console.log("Outer: ", i);
    for(let j = 0; j < str.length; j++){
        console.log("  Inner: ", str[j])
    }
};
