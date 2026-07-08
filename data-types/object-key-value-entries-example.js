//


//Task
//Sum the properties
function sumSalaries(salaries){
 return Object.values(salaries).reduce((sum,value) => sum+value);
}
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
alert( sumSalaries(salaries) ); // 650

function sumSalaries(salaries) {

  let sum = 0;
  for (let salary of Object.values(salaries)) {
    sum += salary;
  }

  return sum; // 650
}

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

alert( sumSalaries(salaries) ); // 650

// Count properties
function count(user){
    return Object.keys(user).length;
}
let user = {
  name: 'John',
  age: 30
};

alert( count(user) ); // 2