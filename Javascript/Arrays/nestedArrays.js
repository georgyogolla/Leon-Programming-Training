// NESTED ARRAYS
// We can store arrays inside other arrays!

const footballTeams = [
    ['man u', 'man city', 'arsenal', 'EPL'],
    ['juve', 'inter', 'napoli', 'ITALY'],
    ['real', 'barca', 'celta', 'SPAIN']
];
const eplTeams = footballTeams[2] // [ 'real', 'barca', 'celta', 'SPAIN' ]
const arsenal = footballTeams[0][2]; // arsenal
footballTeams[2].splice(3, 0, 'Atletico');
console.log(arsenal);
console.log(eplTeams);
console.log(footballTeams);