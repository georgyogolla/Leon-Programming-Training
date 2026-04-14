// FOR...OF A nice and easy way of iterating over arrays (or other iterable objects)

// SYNTAX
// for (variable of iterable) {
//    statement
// }

let subreddits = ['soccer', 'popheads', 'cringe', 'books'];
for(let sub of subreddits ){
    console.log(`${sub} - www.reddit.com/r/${sub}`);
}
