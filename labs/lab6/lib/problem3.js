
const isValidNumber = (input) => {
  if (input === null) return false;
  const trimmed = String(input).trim();
  if (trimmed === "") return false;
  const num = Number(trimmed);
  return !Number.isNaN(num) && Number.isFinite(num);
};


const parseValidNumber = (input) => {
  if (!isValidNumber(input)) return null;
  return Number(String(input).trim());
};

// ===== Function expressions: operations =====


const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const multiply = function (a, b) {
  return a * b;
};

const divide = function (a, b) {
  if (b === 0) return null;
  return a / b;
};

const getOperationFunction = function (op) {
  switch (op) {
    case "+":
      return add;
    case "-":
      return subtract;
    case "*":
      return multiply;
    case "/":
      return divide;
    default:
      return null; 
  }
};

// ===== Part 2 building blocks =====

/**
 * @returns {number[]}
 */
const readNumbers = function () {
  const numbers = [];

  while (true) {
    const input = prompt("Enter a number (leave blank to finish):");

    if (input === null || input.trim() === "") {
      break; 
    }

    if (!isValidNumber(input)) {
      alert("Invalid number format");
      continue; 
    }

    numbers.push(parseValidNumber(input));
    alert("Current numbers: " + numbers.join(", "));
  }

  return numbers;
};

/**
 * @param {number[]} numbers
 * @param {Function} operationCallback
 * @returns {number|null}
 */
const performCalculationOnNumbers = function (numbers, operationCallback) {
  let result = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    result = operationCallback(result, numbers[i]);
    if (result === null) {
      return null; 
    }
  }

  return result;
};

// ===== Part 1: Two-Number Calculator =====

const runTwoNumberCalculator = function () {
  let op = prompt("Enter operation (+ - * /):");
  while (getOperationFunction(op) === null) {
    op = prompt("Invalid operation. Enter operation (+ - * /):");
  }

  let firstInput = prompt("Enter the first number:");
  while (!isValidNumber(firstInput)) {
    alert("Invalid number format");
    firstInput = prompt("Enter the first number:");
  }
  const first = parseValidNumber(firstInput);

  let secondInput = prompt("Enter the second number:");
  while (!isValidNumber(secondInput)) {
    alert("Invalid number format");
    secondInput = prompt("Enter the second number:");
  }
  const second = parseValidNumber(secondInput);

  const operation = getOperationFunction(op);
  const result = operation(first, second);

  if (result === null) {
    alert("Cannot divide by zero");
    return;
  }

  alert(`${first} ${op} ${second} = ${result}`);
};

// ===== Part 2: Multiple-Number Calculator =====

const runMultipleNumberCalculator = function () {
  let op = prompt("Enter operation (+ - * /):");
  while (getOperationFunction(op) === null) {
    op = prompt("Invalid operation. Enter operation (+ - * /):");
  }

  const numbers = readNumbers();

  if (numbers.length === 0) {
    alert("No numbers entered");
    return;
  }

  const operation = getOperationFunction(op);
  const result = performCalculationOnNumbers(numbers, operation);

  if (result === null) {
    alert("Cannot divide by zero");
    return;
  }

  alert(`${numbers.join(` ${op} `)} = ${result}`);
};

// ===== Driver =====

const calculatorType = prompt(
  "Select calculator type (0 = two numbers, 1 = multiple numbers):"
);

if (calculatorType === "0") {
  runTwoNumberCalculator();
} else if (calculatorType === "1") {
  runMultipleNumberCalculator();
} else {
  alert("No calculator selected");
}
