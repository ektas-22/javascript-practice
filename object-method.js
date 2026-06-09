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

//abvoe code unreliable eg shown below
let user6 = {
    name : "John",
    age :  30,
    sayHi(){
        alert(user6.name);          // this.name would work properly
        //alert(this.name);
    }
};
let admin = user6;
user6 = null;
admin.sayHi();

//"this" is not bound
let user7 = { name:"John"};
let admin2 = {name : "peter"};
function sayHii(){
    alert(this.name);
}

user7.f = sayHii;
admin2.f = sayHii;

user7.f();
admin2.f();

admin2['f']();

//arrow function does not have its own this
let user8 = {
    name : "John",
    sayHi(){
        let arrow = () => alert(this.name);
        arrow();
    }
}
user8.sayHi();

//TASK
//1 - using this in object literal
function makeUser(){
    return{
        name : "John",
        ref : this
    };
}
let user9 = makeUser();
alert(user9.ref.name)
// o/p ??

//2 - create calculator

let calculator = {
    a: 0,
    b: 0,
    read(){
        this.a = Number(prompt("Enter a"));
        this.b = Number(prompt("Enter b"));
       
    },
    sum(){
        return   this.a + this.b;
        
    },
    mul(){
        return this.a * this.b;
    }
};
calculator.read();
alert(calculator.sum());
alert(calculator.mul());

//3 - chaining
let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function() { // shows the current step
    alert( this.step );
  }
};