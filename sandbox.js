// function expression
// const sayHi = function(){
//     console.log("Hello world");
// };

// sayHiTo();

// function sayHiTo(name = 'Ahmad', time = 5){
//     console.log(`Hello, ${name}. It's ${time} O'Clock.`);
// }

// const calcArea = function(radius){
//     let area = 3.14 * radius**2;
//     return area;
// }

const calcArea = (radius) =>{
    let area = 3.14 * radius**2;
    return area;
}

let area = calcArea(2);
console.log("area of the circle is " + area);