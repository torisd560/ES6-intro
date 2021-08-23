//function declaration
function add(num1,num2){
    return num1+num2;
}
const sum = add(25,25)

// function Expression
const add1 = function add1(num1, num2){
    return num1 + num2;
}
const sum1 = add1(30, 20)

// function Expression (anonymous)
const add2 = function(num1, num2){
    return num1 + num2;
}
const sum2 = add2(23, 42)
// arrow function 
const add3 = (num1 , num2) => num1 + num2;
const sum3 =add3 (60, 40)
console.log(sum, sum1,sum2 ,sum3)