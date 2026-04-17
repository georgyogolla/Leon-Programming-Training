// FOR...IN

// Loop over the keys in an object
// for (variable in object) {
// statement
// }

const jeopardyWinnings = {
    regularPlay: 2522700,
    watsonChallenge: 300000,
    tournamentOfChampions: 500000,
    battleOfTheDecades: 100000,
};

let total = 0;
for(let key in jeopardyWinnings){
    total += jeopardyWinnings[key];
};
console.log(`Ken Jenning's Total Winnings: $${total}`);
