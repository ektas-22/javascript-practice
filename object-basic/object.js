//OBJECT 

//Creating Object
let user = new Object();
let user2 = {};

//Literal and Properties
let user3 = {
    name: "John",
    age: 30
};

//Accessing property value - using dot notation
alert(user3.name);
alert(user3.age);

//value of any type
user.isAdmin = true;

//To remove a property
delete user.age;

// Multiword property names - they must be quoted
let newUser = {
    name: "Trump",
    age: 80,
    "likes birds": true
};


// The last property in the list may end with a comma:
let newUser2 = {
    name: "John",
    age: 40,           //called a “trailing” or “hanging” comma
};


//Multiword property - dot access doesnt work
//Square brackets
// user.likes birds = true;        //error

// alternative “square bracket notation”
let newUser3 = {};
//set
newUser3["like birds"] = true;
//get
alert(newUser3["like birds"]);
//delete
delete newUser3["like birds"];

//Square brackets also provide a way to obtain the property name as the result of any expression 
let key = "likes birds";
user[key] = true;

let newUser4 = {
    name: "John",
    age: 30
};
let key2 = prompt("What do you want to know about the user?", "name");
alert(newUser4[key2]);


let newUser5 = {
    name: "John",
    age: 30
};
let key3 = "name";
alert(newUser5.key3);    //Undefined

//Computed properties
//We can use square brackets in an object literal, when creating an object. That’s called computed properties.
let fruit = prompt("Which fruit to buy?", "apple");
let bag = {
    [fruit]: 5,
}
alert(bag.apple);

let fruit2 = prompt("Which fruit to buy?", "apple");
let bag2 = {};
bag2[fruit] = 5;


let fruit3 = 'apple';
let bag3 = {
    [fruit + 'computer']: 5,
};


//Property value shorthand
function makeUser(name, age) {
    return {
        name: name,
        age: age,
    };
}

let userx = makeUser("John", 30);
alert(userx.name);

//Property names limitations
let obj = {
    0: "test",
};
alert(obj[0]);
alert(obj["0"]);

//Property existence test, “in” operator
let usery = {
    name: "John",
    age: 40,
};
alert("name" in usery);
alert("blaabla" in usery);

//The "for..in" loop
let userz = {
    name : "John",
    surname: "Doe",
};
alert(userz.age);

for (let prop in userz) {
    alert(prop);
}



//Task
//Hello, Object
let userA = {};
userA = {
    name : "John",
};
userA.surname = "Smith";
userA.name = "Pete";
console.log(userA)
delete userA.name;


//Check for emptiness
// let schedule = {};
// alert(isEmpty(schedule));
// shcedule["8:30"] = "get up";
// alert(isEmpty(schedule));

// function isEmpty(schedule) {
//     if (schedule == undefined) {
//         return true;
//     } else {
//         return false;
//     }
// }

//correct answer
function isEmpty(obj) {
    for (let key in obj) {
        // if the loop has started, there is a property
        return false;
    }
    return true;

}

//sum object properties
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}
console.log(sum);



//multiply numeric properties values by 2
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
multiplyNumeric(menu);
function multiplyNumeric(menu) {
    for (let key in menu) {
        if (typeof menu[key] == "number") {
            menu[key] *= 2;
        }
    }
}
console.log(menu);
