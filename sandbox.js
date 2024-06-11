// const blogs = [
//     {title: 'Thesis', likes: 20},
//     {title: 'Minions', likes: 30}
// ]

let user = {
    name: 'Ali',
    age: 30,
    email: 'ali@gmail.com',
    location: 'Lahore',
    blogs: [
        {title: 'Thesis', likes: 20},
        {title: 'Minions', likes: 30}
    ],
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
            console.log(`The blog named ${blog.title} has ${blog.likes} likes.`);
        });
    }
};

user.login();
user.logAge();
user.logBlogs();