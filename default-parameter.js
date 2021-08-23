function add(num1, num2=90){
    // option -1
    /* if(num2 ==undefined){
        num2=0
    } */
    // optipn-2
    // num2 = num2||13
    const sum = num1 + num2;
    return sum;
}
const mySum = add(12)
console.log(mySum)
function fullName(first, last='rani'){
    const fullName = first + ' ' + last;
    return fullName
}
const myName = fullName('Lipi', 'Rani')
console.log(myName)