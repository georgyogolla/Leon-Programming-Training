// OBJECTS
// Objects are collections of properties.
// Properties are a key - value pair
// Rather than accessing data using an index, we use custom keys.

const teams  = {
    manchesterUnited : "EPL",
    Juventus : "Italy",
    mixture: ['hello', true, 23, undefined],
    254 : "Kenya"
}
console.log(teams.mixture) // use dot notation for keys that looks like strings to access their values
console.log(teams[254]); // use square brackets for keys that looks like numbers to access their values

