let num1 = 50;
let num2 = 50;

console.log(`first number ${num1} , second number ${num2}`);
num2 = 100;
console.log(`first number ${num1} , second number ${num2}`);

const user1 = {name: 'Ali', gender: 'Male',age: 30};
console.log(user1);
const user2 = user1;
console.log(user2);
user2.age = 40;
console.log(user1);
console.log(user2);