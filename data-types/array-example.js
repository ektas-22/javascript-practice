//Declaration
let arr = new Array();
let arr = [];

let fruits = ["Apple", "Orange", "Plum"];
//get an element 
alert(fruits[0]);
alert(fruits[1]);

//replace an element
fruits[2] = 'Pear'; // now ["Apple", "Orange", "Pear"]

//add a new one to the array:
fruits[3] = 'Lemon'; // now ["Apple", "Orange", "Pear", "Lemon"]

//total count
alert( fruits.length ); // 3

//whole array
alert(fruits);

// mix of values
let arr = [ 'Apple', { name: 'John' }, true, function() { alert('hello'); } ];
// get the object at index 1 and then show its name
alert( arr[1].name ); // John
// get the function at index 3 and run it
arr[3](); // hello

//Trailing comma
let fruits1 = [
    "Apple",
    "Banana",
    "Mango",
];

//Get last elements with “at”
let fruits = ["Apple", "Orange", "Plum"];
alert( fruits[fruits.length-1] ); // Plum
//shorter version
alert(fruits.at(-1));


//Methods pop/push, shift/unshift
//Queue - #push appends an element to the end. #shift get an element from the beginning  (FIFO)
//Stack - #push adds an element to the end. #pop takes an element from the end.     (LIFO)
//Arrays in JavaScript can work both as a queue and as a stack. -  data structure that allows this, is called deque.

//pop - Extracts the last element of the array and returns it:
let fruitsP = ["Apple", "Orange", "Pear"];
alert(fruitsP.pop());
console.log(fruitsP);

//push - Append the element to the end of the array:
let fruits = ["Apple", "Orange"];
fruits.push("Pear");
alert( fruits ); // Apple, Orange, Pear


//shift -Extracts the first element of the array and returns it:
let fruits = ["Apple", "Orange", "Pear"];
alert( fruits.shift() ); // remove Apple and alert it
alert( fruits ); // Orange, Pear


//unshift - Add the element to the beginning of the array:
let fruits = ["Orange", "Pear"];
fruits.unshift('Apple');
alert( fruits ); // Apple, Orange, Pear

//Methods push and unshift can add multiple elements at once:
let fruits = ["Apple"];
fruits.push("Banana","Mango");
fruits.unshift("Cherry","Kiwi");
console.log(fruits);


//Internals
let fruits = ["Banana"]
let arr = fruits; // copy by reference (two variables reference the same array)
alert( arr === fruits ); // true
arr.push("Pear"); // modify the array by reference
alert( fruits ); // Banana, Pear - 2 items now

let fruits = []; // make an array
fruits[99999] = 5; // assign a property with the index far greater than its length
fruits.age = 25; // create a property with an arbitrary name

//Loops
let arr = ["Apple", "Orange", "Pear"];
for (let i = 0; i < arr.length; i++) {
  alert( arr[i] );
}

let fruits = ["Apple", "Orange", "Plum"];
// iterates over array elements
for (let fruit of fruits) {
  alert( fruit );
}

// we shouldn’t use for..in for arrays.
let arr = ["Apple", "Orange", "Pear"];
for (let key in arr) {
  alert( arr[key] ); // Apple, Orange, Pear
} 


//A word about “length”
let fruits = [];
fruits[123] = "Apple";
alert( fruits.length ); // 124

let arr = [1,2,3,4,5];
arr.length = 2;
console.log(arr);

arr.length = 5; // return length back
alert( arr[3] ); // undefined: the values do not return


//new Array()
let arr = new Array("Apple", "Pear", "etc");
let arr = new Array(2); // will it create an array of [2] ?
alert( arr[0] ); // undefined! no elements.
alert( arr.length ); // length 2

//Multidimensional arrays
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
alert( matrix[0][1] ); // 2, the second value of the first inner array


//toString
let arr = [1, 2, 3];
alert( arr ); // 1,2,3
alert( String(arr) === '1,2,3' ); // true

alert([]+1);        //"1"
alert([1]+1);       //"11"
alert([1,2]+1);     //"1,21"

alert( "" + 1 ); // "1"
alert( "1" + 1 ); // "11"
alert( "1,2" + 1 ); // "1,21"

































