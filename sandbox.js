let user = {
    name: 'Ali',
    age: 30,
    email: 'ali@gmail.com',
    location: 'Lahore',
    blog: ['Thesis', 'Minions']
}

// console.log(user);

console.log(user['name']);
user['name'] = 'Hassan';
console.log(user['name']);