// single arrow function
const add = (num1, num2) => num1 + num2
const sum = add(12, 23)
console.log(sum)

const multiply = (num1, num2, num3 =5 ) => num1 * num2 * num3
const multiple =multiply (2,3,6)
console.log(multiple)

const tenTimes = num => num*10;
const value = tenTimes(5)
console.log(value)

// template string with arrow function
const addString = (first, last) =>` ${first} ${last}`;
const myName = addString(`lipi`, `rani`)
console.log(myName)

// function without parameter 
const numbers = () => 10 - 20  + 50;
const myNumbers = numbers()
console.log(myNumbers )

const seerToMon = seer => seer/40;
 const mon = seerToMon(40)
 console.log(mon)

// multiline function
 const calculate = (x,y,z) => {
     const firstPart = x-y;
     const secondPart = x+y;
     const thirdPart = x/y;
     const result =(firstPart+secondPart)*thirdPart;
     return result ;
 }
 const myResult = calculate(10,5,4)
 console.log(myResult)