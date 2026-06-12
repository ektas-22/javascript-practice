/* --------------------------------------------------------------- */
//                         STRING METHODS                           
/* --------------------------------------------------------------- */


//QUERY
let str = "Hello World";
console.log(str.at(0)); // H
console.log(str.charAt(0)); // H
console.log(str.charCodeAt(0)); // 72 (code of 'H')
console.log(str.codePointAt(0)); // 72 (code of 'H')

//SEARCH
let str2 = "Hello World";
console.log(str2.indexOf("W")); // 6
console.log(str2.lastIndexOf("o")); // 7
console.log(str2.startsWith("Hello")); // true
console.log(str2.endsWith("World")); // true
console.log(str2.includes("lo")); // true
console.log(str2.match(Hello)); // ["Hello"]
console.log(str2.matchAll());
console.log(str2.search());

//Template Literals
console.log("String text line 1 \nString text line 2");
//Multi line
console.log(`String text line 1
String text line 2`);

//Embedded expressions
//without
let five = 5;
let ten = 10;
console.log("Fifteen is " + (five + ten) + " and not " + (2 * five + ten) + ".");
//with template literals
console.log(`Fifteen is ${five + ten} and not ${2 * five + ten}.`);