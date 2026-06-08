
let user = { name: "John" };
let admin = user;   //copy the reference

let user1 = { name: "John" };
let admin1 = user1;
admin1.name = "Pete";
alert(user1.name);

let a = {};
let b = a;
alert(a == b);
alert(a === b);

let a1 = {};
let b1 = {};
alert(a1 == b1);
//constant objects can be modified
const user3 = {
    name: "John",
};
user.name3 = "Pete";
console.log(user3.name);


//Cloning and merging, Object.assign
let user4 = {
    name: "John",
    age: 30
};
let clone = {};
for (let key in user4) {
    clone[key] = user4[key];
}
clone.name = "Pete";
alert(user4.name);

let user5 = { name: "John" };
let permission1 = { canView: true };
let permission2 = { canEdit: true };
Object.assign(user5, permission1, permission2);

alert(user5.name);
alert(user5.canView);
alert(user5.canEdit);

// If the copied property name already exists, it gets overwritten:

let user6 = { name: "John" };
Object.assign(user6, { name: "Pete" });
alert(user.name);

//We also can use Object.assign to perform a simple object cloning:
let user7 = {
    name: "John",
    age: 30,
};
let clone = Object.assign({}, user7);
alert(clone.name);
alert(clone.age);

//Nested cloning
let user7 = {
    name: "John",
    sizes = {
        height: 20,
        width: 30,
    },
};
let clone2 = Object.assign({}, user7);
alert(user7.sizes.width);
alert(user7.sizes === clone2.sizes);
user7.sizes.height = 25;
alert(clone2.sizes.height);

//structuredClone
let user8 = {
    name: "John",
    sizes = {
        height: 30,
        width: 20
    },
};
let clone3 = structuredClone(user8);
alert(user8.sizes===clone3.sizes);
user8.sizes.width = 25;
alert(clone.sizes.width);
