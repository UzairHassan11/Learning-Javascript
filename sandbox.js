let user = {
    name: 'Ali',
    age: 30,
    email: 'ali@gmail.com',
    location: 'Lahore',
    blogs: ['Thesis', 'Minions'],
    login(){
        console.log('this is login function');
    },
    logAge: ()=> {
        this.age = 19;
        console.log(this.age);
    },
    logBlogs() {
        console.log(`blogs written by ${this.name}`);
        this.blogs.forEach(blog => {
            console.log(blog);
        });
    }
};

user.login();
user.logAge();
user.logBlogs();