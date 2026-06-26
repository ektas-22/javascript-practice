console.log(`My\n`.length);     //3

//Accessing characters
let str2 = "Hello";
console.log(str2[0]);
console.log(str2.at[0]);

console.log(str2.length-1);
console.log(str2.at[-1]);

//iterate over character using for of
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
//str.lastIndexOf(substr, position) -  searches from end 
let a = "Widget with id";
if(a.indexOf('Widget')){                //wont work 0 is false in if
    console.log('We found it');
}

if(a.indexOf('Widget')!=-1){
    console.log('We found it');
}

//includes, startsWith, endsWith
let strA = "Widget with id";
console.log(strA.includes('Widget'));   //true
console.log(strA.includes('Bye'));      //false

console.log(strA.includes('id'));       //true
console.log('Widget'.includes('id',3));     //false

console.log(strA.startsWith('Wid'));        //true
console.log(strA.endsWith('id'));       //true

//Getting a substring
//Slice - str.slice(start [, end])
let strB = "Stringify";
console.log(strB.slice(0,5));       //'strin'
console.log(str8.slice(0,1));       //'s'

console.log(strB.slice(2)) ;     //'ringify'
console.log(strB.slice(-4,-1));      //'gif'

//Substring : str.substring(start [, end])
let strC = "Stringiy";
console.log(strC.substring(2,6));       //'ring'
console.log(strC.substring(6,2));       //'ring'

alert( str.slice(2, 6) ); // "ring" (the same)
alert( str.slice(6, 2) ); // "" (an empty string)

//str.substr(start [, length])
let strD = "Strigify";
console.log(strD.substring(2,4));       // 'ring'
console.log(strD.substring(-4,2));      // 'gi'

//Comparing strings
alert( 'a' > 'Z' ); // true
alert( 'Österreich' > 'Zealand' ); // true

//str.codePointAt(pos)
// different case letters have different codes
alert( "Z".codePointAt(0) ); // 90
alert( "z".codePointAt(0) ); // 122
alert( "z".codePointAt(0).toString(16) ); // 7a (if we need a hexadecimal value)

//String.fromCodePoint(code)
alert( String.fromCodePoint(90) ); // Z
alert( String.fromCodePoint(0x5a) ); // Z (we can also use a hex value as an argument)

let str = '';
for (let i = 65; i <= 220; i++) {
  str += String.fromCodePoint(i);
}
alert( str );
// Output:
// ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~
// ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜ

//str.localeCompare(str2) 
// Returns a negative number if str is less than str2.
// Returns a positive number if str is greater than str2.
// Returns 0 if they are equivalent.
console.log('Österreich'.localeCompare('Zealand'));     //-1




// Tasks
// Uppercase the first character  - ucFirst("john") == "John";
function ucFirst(str){
    //   return str.substring(0,1).toUpperCase()+str.substring(1);
     if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
}
console.log(ucFirst('john'));

//Check for spam
function checkSpam(str){
    // if(str.toLowerCase().includes('viagra')||str.toUpperCase().includes('XXX')){
    //     return true;
    // }else{
    //     return false;
    // }
     let lowerStr = str.toLowerCase();

  return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}
console.log(checkSpam('buy ViAgRA now')); //== true
console.log(checkSpam('free xxxxx')); //== true
console.log(checkSpam("innocent rabbit"))   //== false


//Truncate the text
function truncate(str, maxlength){
    if(str.length>maxlength){
        return str.slice(0, maxlength-1)+"...";
    }
    return str;
}

console.log(truncate("What I'd like to tell on this topic is:", 20));  // == "What I'd like to te…"
console.log(truncate("Hi everyone!", 20));  // == "Hi everyone!"

//Extract the money
function extractCurrencyValue(str){
    return str.slice(1);
}
alert( extractCurrencyValue('$120') === 120 ); // true - === 120 








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


