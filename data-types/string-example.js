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


console.log(`My\n`.length);     //3

//Accessing characters
let str2 = "Hello";
console.log(str2[0]);
console.log(str2.at[0]);

console.log(str2.length-1);
console.log(str2.at[-1]);

//iterate over character uaing for of
for(let char of str2){
    console.log(char);
}

//String are Immutable
let str3 =  "Hello";
str3[0] = "h";      //error
console.log(str[0]);        //doesnt work

str = "h"+str3[1];
console.log(str[0]);

//Changing the case
console.log('Interface'.toUpperCase());
console.log('Interface'.toLowerCase());
console.log('Interface'[0].toLowerCase());

//Searching for a substring -  str.indexOf(substr, pos).
let str4 = "Widget with id";
console.log(str4.indexOf('Widget'));    //0
console.log(str4.indexOf('widget'));    //-1, case sensitive
console.log(str4.indexOf('id'));    //1

console.log(str4.indexOf('id',2));  //12
//all occurences
let str5 = "As sly as a fox, as strong as an ox";
let target = 'as';
let pos = 0;
while(true){
    let foundPos = str5.indexOf(target, pos);
    if(foundPos===-1) break;
    console.log(`Found at ${foundPos}`);
    pos=foundPos+1;
}

