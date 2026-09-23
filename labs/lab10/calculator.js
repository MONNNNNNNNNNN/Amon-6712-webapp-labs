const readline = require('readline');

const args = process.argv.slice(2);

if (args.length < 2 || isNaN(args[0]) || isNaN(args[1])) {
    console.log("Please enter two numbers");
    process.exit(1);
}

const num1 = Number(args[0]);
const num2 = Number(args[1]);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('\u2714 add | subtract ', (input) => {
    const operator = input.trim();

    if (operator === 'add') {
        console.log(`${num1} + ${num2} = ${num1 + num2}`);
    } else if (operator === 'subtract') {
        console.log(`${num1} - ${num2} = ${num1 - num2}`);
    } else {
        console.log("Unknown operator");
    }
    
    rl.close();
});