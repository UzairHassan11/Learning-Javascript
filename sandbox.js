// function expression
// const sayHi = function(){
//     console.log("Hello world");
// };

sayHiTo();

function sayHiTo(name = 'Ahmad', time = 5){
    console.log(`Hello, ${name}. It's ${time} O'Clock.`);
}