let user = {
    name: 'Ali',
    age: 30,
    email: 'ali@gmail.com',
    location: 'Lahore',
    blog: ['Thesis', 'Minions'],
    login: function(){
        console.log('this is login function');
    },
    logAge: ()=> console.log(this.age),
    
};

user.login();
user.logAge();