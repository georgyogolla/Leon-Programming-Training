// ARRAY METHODS
// Push - add to end
// Pop - remove from end
// Shift - remove from start
// Unshift - add to start

// SYNTAX 
// Array.Method()

// Push - add to end
let arr = [];
arr.push("Books");
arr.push(200, "Deep Work", "Motivational");
console.log(arr);

let arr2 = ['undefined', 23, NaN];
arr2.push("This goes to the end");
console.log(arr2);

// Pop - remove from end
let popped = [1, 2,3, 'hello', 'fruit', 'kenya', 'food', null];
popped.pop();
popped.pop();
popped.pop();
console.log(popped);

// Shift - remove from start
let arr3 = [25, 'nairobi', undefined, 'yooh'];
arr3.shift();
arr3.shift();
console.log(arr3);

// Unshift - add to start
let arr4 = [25, 'nairobi', undefined, 'yooh'];
arr4.unshift("Milk", 20, "Gold Crown");
console.log(arr4);


// concat - merge arrays
let merged = arr4.concat(arr, arr3);
console.log(merged);

// includes - look for a value
let arr5 = [ 'Milk', 20, 'Gold Crown', 25, 'nairobi', undefined,'yooh', 'Books',
  200,            'Deep Work',
  'Motivational', undefined,
  'yooh'
]
let drink = arr5.includes("Milk");
console.log(drink); // true

// indexOf - just like str.indexOf
let arr6 = [1, 'hello', null, 'countries'];
console.log(arr6.indexOf('countries')); // returns the index


