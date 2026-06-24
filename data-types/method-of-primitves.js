let john = {
    name : "John",
    age : 30,
    sayHi : function(){
        alert("Hi Buddy");
    }
};
john.sayHi();

//Object Wrapper
let str = "Hello World!";
alert(str.toUpperCase());

let n = 1.532;
alert(n.toFixed(2));

let num = Number("123");    //convert string -> number 

//Task
let str = "Hello";
str.test = 5;
alert(str.test);