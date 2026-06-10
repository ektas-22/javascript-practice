//constructor function
//main purpose of constructors – to implement reusable object creation code.
function User(name){
    this.name = name;
    this.isAdmin = false;
}
let user = new User("Jack");
alert(user.name);
alert(user.isAdmin);
