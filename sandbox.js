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

// const calcRectangleArea = (length, width) => length * width;

// let area = calcRectangleArea(2, 3);
// console.log("area of the rectangle is " + area);

// const sayHi = () => 'Hello, world.';
// console.log(sayHi());

const calcBill = (productPrices, tax) => {
    let bill = 0;
    for(let i = 0; i < productPrices.length; i++)
    {
        bill += productPrices[i] + productPrices[i]*tax;
    }
    return bill;
};
const bill = calcBill([10, 20, 30], .2);
console.log(bill);