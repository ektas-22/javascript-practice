//----------------------------------------------------------------------------------------------               
//                       DATATYPES IN JAVASCRIPT 
//----------------------------------------------------------------------------------------------
//===============METHODS OF PRIMITIVES==========================
let john = {
    name: "John",
    sayHi: function () {
        alert("Hi, I'm " + this.name);
    }
};

john.sayHi();
/* A primitive as an object */
let str = "Hello";
alert(str.toUpperCase()); // HELLO

let n = 1.23456
alert(n.toFixed(2));

alert(typeof 0);
alert(typeof new Number(0));

let zero = new Number(0);
if (zero) {
    alert("zero is truthy?!");
}

let num = Number("123");
alert(num);

/* Task */
let str = "Hello";
str.test = 5; // (*)
alert(str.test);
// o/p  - undefined

//====================================NUMBERS==============================================
/* More ways to write a number */
let billion = 1000000000;
let billion1 = 1_000_000_000;

//shorten 
let billion2 = 1e9; //1 billion, literally : 1 and 9 zeros.
alert(7.3e9); // 7.3 billion

1e3 === 1 * 1000; // e3 means *1000
1.23e6 === 1.23 * 1000000; // e6 means *1000000

let mcs = 0.000001; // 1 microsecond
let mcs1 = 1e-6; // 1 microsecond, literally: 1 and 6 zeros to the left of the decimal point.

// Hex, binary and octal numbers
alert(0xff); // 255
alert(0xFF); // 255 (case does not matter)

let a = 0b11111111; // binary form of 255
let b = 0o377; // octal form of 255
alert(a==b); // true

// toString(base)
let num = 255;
alert(num.toString(16)); // ff
alert(num.toString(2)); // 11111111

alert(123456..toString(36)); // 2n9c

// /Rounding
//Math.round, Math.floor, Math.ceil, Math.trunc 
Math.round(1.5); // 2
Math.round(1.4); // 1   
Math.floor(1.5); // 1
Math.ceil(1.4); // 2
Math.ceil(1.4); // 2
Math.trunc(1.5); // 1
Math.trunc(-1.5); // -1

//round the number to n-th digit after the decimal
//Two ways Multiply and method toFixed()
//Multiply and divide
let num = 1.23456;
alert(Math.round(num*100)/100); // 1.23

let num = 12.34;
alert(num.toFixed(1)); // 12.3
alert(num.toFixed(2)); // 12.34
let num = 12.36;
alert(num.toFixed(1)); // 12.4
let num = 12.34;
alert(num.toFixed(5)); // 12.34000



//====================================== Strings===========================================


//=======================================Arrays============================================


//===================================Array methods=========================================


//======================================Iterables===========================================


//====================================Map and Set===========================================


//=================================WeakMap and WeakSet======================================


//============================Object.keys, values, entries==================================



//=========================Destructuring assignment=========================================


//===================================Date and time==========================================


//================================JSON methods, toJSON======================================