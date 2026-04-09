// OBJECTS
// Objects are collections of properties.
// Properties are a key - value pair
// Rather than accessing data using an index, we use custom keys.

const teams  = {
    manchesterUnited : "EPL",
    Juventus : "Italy",
    mixture: ['hello', true, 23, undefined],
    254 : "Kenya",
    totalPoints: 120
}
console.log(teams.mixture) // use dot notation for keys that looks like strings to access their values
console.log(teams['254']); // use square brackets for keys that looks like numbers to access their values
console.log(teams["manchesterUnited"]);

// UPDATING & ADDING PROPERTIES
teams.Juventus = 'Spain'; // Updating values in an object
teams.France = "PSG"; // Adding properties in an object
console.log(teams.totalPoints += 30); // Updating object properties
console.log(teams);

const shoppingCart = [
  {
    product: "Jenga Classic",
    price: 6.88,
    quantity: 1,
  },
];

const price = shoppingCart[0]['price'];
const priceTwo = shoppingCart[0].price;
const product = shoppingCart[0].product
console.log("=== Object.Key() ====");
console.log(Object.keys(teams));
console.log("=== Object.Values() ====");
console.log(Object.values(teams));
console.log(price);
console.log(priceTwo);
console.log(product);