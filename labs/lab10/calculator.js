
const args = process.argv.slice(2);
const operator = args[0];

if (operator !== 'add' && operator !== 'subtract') {
    console.log("unknown operator");
    process.exit(1);
}

const num1 = Number(args[1]);
const num2 = Number(args[2]);

if (args[1] === undefined || args[2] === undefined || isNaN(num1) || isNaN(num2)) {
    console.log("Please enter numbers");
    process.exit(1);
}

if (operator === 'add') {
    console.log(num1 + num2);
} else if (operator === 'subtract') {
    console.log(num1 - num2);
}