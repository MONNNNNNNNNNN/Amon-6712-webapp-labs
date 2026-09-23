

import inquirer from "inquirer";

const add = (n1,n2) => parseFloat(n1) + parseFloat(n2);

const args = process.argv.slice(2);
const n1 = args[0];
const n2 = args[1];
console.log(n1 + " + " + n2 + " = " + add(n1,n2));
