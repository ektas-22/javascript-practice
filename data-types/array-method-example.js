//Array methods

// arr.push(...items) – adds items to the end,
// arr.pop() – extracts an item from the end,
// arr.shift() – extracts an item from the beginning,
// arr.unshift(...items) – adds items to the beginning.

//SPLICE - can do everything: insert, remove and replace elements.
//arr.splice(start[, deleteCount, elem1, ..., elemN])
let arr = ["I", "study", "JavaScript"];
arr.splice(1, 1); // from index 1 remove 1 element
alert( arr ); // ["I", "JavaScript"]

let arr = [ "I","Study","Javascript","right","now"];
arr.splice(0,3,"lets","dance");
console.log(arr);

// splice returns the array of removed elements:
let arr = [ "I","Study","Javascript","right","now"];
let remove = arr.splice(0,2);
console.log(remove);

//able to insert the elements without any removals
let arr = ["I", "study", "JavaScript"];
// from index 2
// delete 0
// then insert "complex" and "language"
arr.splice(2, 0, "complex", "language");
alert( arr ); // "I", "study", "complex", "language", "JavaScript"

//negative indexes allowed
let arr = [1, 2, 5];
// from index -1 (one step from the end)
// delete 0 elements,
// then insert 3 and 4
arr.splice(-1, 0, 3, 4);
alert( arr ); // 1,2,3,4,5


//SLICE
// arr.slice([start], [end])
let arr = ["t", "e", "s", "t"];
alert( arr.slice(1, 3) ); // e,s (copy from 1 to 3)
alert( arr.slice(-2) ); // s,t (copy from -2 till the end)


//CONCAT - creates a new array that includes values from other arrays and additional items.
//arr.concat(arg1, arg2...)
let arr = [1, 2];
alert( arr.concat([3, 4]) ); // 1,2,3,4
alert( arr.concat([3, 4], [5, 6]) ); // 1,2,3,4,5,6
alert( arr.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6

let arr = [1, 2];
let arrayLike = {
  0: "something",
  length: 1
};
alert( arr.concat(arrayLike) ); // 1,2,[object Object]

let arr = [1, 2];
let arrayLike = {
  0: "something",
  1: "else",
  [Symbol.isConcatSpreadable]: true,
  length: 2
};
alert( arr.concat(arrayLike) ); // 1,2,something,else


// Iterate: forEach - The arr.forEach method allows to run a function for every element of the array.
arr.forEach(function(item, index, array) {
  // ... do something with an item
});

// for each element call alert
["Bilbo", "Gandalf", "Nazgul"].forEach(alert);

["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
  alert(`${item} is at index ${index} in ${array}`);
});


//Searching in array
//indexOf/lastIndexOf and includes
// arr.indexOf(item, from) – looks for item starting from index from, and returns the index where it was found, otherwise -1.
// arr.includes(item, from) – looks for item starting from index from, returns true if found.
let arr = [1, 0, false];
alert( arr.indexOf(0) ); // 1
alert( arr.indexOf(false) ); // 2
alert( arr.indexOf(null) ); // -1
alert( arr.includes(1) ); // true

let fruits = ['Apple', 'Orange', 'Apple']
alert( fruits.indexOf('Apple') ); // 0 (first Apple)
alert( fruits.lastIndexOf('Apple') ); // 2 (last Apple)


const arr = [NaN];
alert( arr.indexOf(NaN) ); // -1 (wrong, should be 0)
alert( arr.includes(NaN) );// true (correct)

//find and findIndex/findLastIndex
let result = arr.find(function(item, index, array) {
  // if true is returned, item is returned and iteration is stopped
  // for falsy scenario returns undefined
});
let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];
let user = users.find(item => item.id == 1);
alert(user.name); // John

let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"},
  {id: 4, name: "John"}
];
alert(users.findIndex(user => user.name == 'John')); // 0
alert(users.findLastIndex(user => user.name == 'John')); // 3


//filter - returns an array of all matching elements:
let results = arr.filter(function(item, index, array) {
  // if true item is pushed to results and the iteration continues
  // returns empty array if nothing found
});

let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];
let someUsers = users.filter(item => item.id < 3);
alert(someUsers.length); // 2


// Transform an array
//map - calls the function for each element of the array and returns the array of results.
let result = arr.map(function(item, index, array) {
  // returns the new value instead of item
});

let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
alert(lengths); // 5,7,6

// sort(fn) -sorts the array in place, changing its element order.
let arr = [ 1, 2, 15 ];
arr.sort();
// alert( arr );  // 1, 15, 2 /The items are sorted as strings by default.

function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}
let arr = [ 1, 2, 15 ];
arr.sort(compareNumeric);
alert(arr);  // 1, 2, 15

let arr = [ 1, 2, 15 ];
arr.sort(function(a, b) { return a - b; });
alert(arr);  // 1, 2, 15

































