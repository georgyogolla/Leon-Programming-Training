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


// join - creates a string from arr
let joined = [1,2,3,4, true, false, undefined, NaN];
console.log(joined.join('-'));

let joinedTwo = ['Hello world kenya'];
console.log(joinedTwo.join(','));

// reverse - reverses an array!
let reversed = ['hello', 'fruits', false, 25];
console.log(reversed.reverse());

// slice - copy portion of an arr
let arr7 = ['kenya', 'uganda', 'tanzania', 'rwanda', 'east africa', 1000, null];
let sliced = arr7.slice(1, 4);
console.log(sliced);

let arr8 = ['kenya', 'uganda', 'tanzania', 'rwanda', 'east africa', 1000, null];
console.log(arr8.length);
let slicedNew = arr8.slice(1, -4);
console.log(slicedNew);
console.log(arr8)

// splice - remove/replace elements

// The splice() method is a built-in JavaScript Array function used to add, remove, or replace elements in an existing array. 

// Unlike methods like slice(), splice() is destructive, meaning it directly modifies (mutates) the original array. 


// Syntax
// javascript
// array.splice(start, deleteCount, item1, item2, ...)
let arr9 = ['kenya', 'uganda', 'tanzania', 'rwanda', 'east africa', 1000, null];
let remove = arr9.splice(5, 2); // element at index 5 is removed completely
console.log(remove); // returns the removed items - [ 1000, null ]
console.log(arr9)

// Add elements from sepcific index
let newArr = ['kenya', 'uganda', 'tanzania', 'rwanda', 'east africa', 1000, null];
let addElement = newArr.splice(1, 0, "Nairobi", "Mombasa", "Kisumu"); // element at index 5 is removed completely
console.log(addElement); // add items from index 1 but delete nothing
console.log(newArr);

// Replace elements from sepcific index
let newArrTwo = ['kenya', 'uganda', 'tanzania', 'rwanda', 'east africa', 1000, null];
let addElementNew = newArrTwo.splice(1, 3, "Nairobi", "Mombasa", "Kisumu"); // element at index 5 is removed completely
console.log(addElementNew); // replace items from index 1 but delete nothing
console.log(newArrTwo);

// sort - sorts an array
let toSort = ['kenya', 'uganda', 'tanzania', 'rwanda', 'east africa', 1000, null];
let sorted = toSort.sort();
console.log(sorted);

let nums = [29, 2, 5, 1, 10, 9, 100];
let sortedNums = nums.sort();
console.log(sortedNums); // Innacurate - to get get accurate results, use compare functions



// > const arr = ['egg', 'yello'];
// undefined
// > arr;
// [ 'egg', 'yello' ]
// > arr.push('blue');
// 3
// > arr;
// [ 'egg', 'yello', 'blue' ]
// > arr = [2, 3];
// Uncaught TypeError: Assignment to constant variable.
// > arr2 = arr;
// [ 'egg', 'yello', 'blue' ]
// > arr2;
// [ 'egg', 'yello', 'blue' ]
// > arr2.push(200);
// 4
// > arr2;
// [ 'egg', 'yello', 'blue', 200 ]
// > arr;
// [ 'egg', 'yello', 'blue', 200 ]
// > 






