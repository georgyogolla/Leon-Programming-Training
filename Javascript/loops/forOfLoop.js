// FOR...OF A nice and easy way of iterating over arrays (or other iterable objects)

// SYNTAX
// for (variable of iterable) {
//    statement
// }

let subreddits = ["soccer", "popheads", "cringe", "books"];
for (let sub of subreddits) {
  console.log(`${sub} - www.reddit.com/r/${sub}`);
}

// NESTED for..of loop 
let nums = [
  [20, 30, 40, 50], 
  [1, 2, 3, 4, 5],
  [23, 34, 56, 70],
  [97, 100, 20, 45],
];
for (let row of nums) {
  let sum = 0;
  for(let num of row){
    sum += num;
  }
  console.log(`Sum of ${row} is ${sum}`);
}


// Example 2
let numerics = [[10, 20, 30, 40], [34, 56,43, 90], [200, 345, 567,219], [231, 435, 987, 890]];

for(let rows of numerics){
    let total = 0;
    for(let n of rows ){
        total += n;
    }
    console.log(`The total of ${rows} is = ${total}`);
}


// OBJECTS!
// We can loop over the keys of
// an object, using Object.keys()


