//Method Example
let user = {
    name: "John",
    age:  30,
};
user.sayHi = function(){
    alert("Hello");
}
user.sayHi();

//pre-declared function as a method
let user1 = {
    name: "John",
    age: 30,
};
function sayHello(){
    alert("Hello");
}
user1.sayHello = sayHello;
user1.sayHello();

//Method shorthand
let user2 = {
    sayHi: function(){
        alert("Hello");
    },
};

let user3 = {
    sayHi(){
        alert("Hello");
    }
}

//this in methods
let user4 = {
    name: "John",
    age: 30,
    sayHi(){
        alert(this.name);
    }
};
user4.sayHi();

//without this
let user5 = {
    name: "John",
    age: 30,
    sayHi(){
        alert(user5.name);
    }
};
user5.sayHi();