const operator = prompt('Enter operator (either +, -, * or /): ');
let x1 = Number(prompt('Please enter first number here: '));
let x2 = Number(prompt(' Please enter second number here: '));

if (operator == '+') {
    result = x1 + x2;
} else if (operator == "-") {
    result = x1 - x2;
} else if (operator == '*') {
    result = x1 * x2;
}
else {
    result = x1 / x2;
}

console.log(`${x1} ${operator} ${x2} = ${result}`);