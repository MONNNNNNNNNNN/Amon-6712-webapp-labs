

/**
 * @param {string|null} input
 * @returns {boolean}
 */
function validateInput(input) {
  if (input === null) return false; 

  const trimmed = input.trim();
  if (trimmed === "") return false;

  const num = Number(trimmed);

  if (Number.isNaN(num)) return false; 
  if (!Number.isFinite(num)) return false; 
  if (!Number.isInteger(num)) return false; 
  if (num <= 0) return false; 

  return true;
}

/**
 * @param {number} limit
 * @returns {number[]}
 */
function findPrimes(limit) {
  const primes = [];

  outer: for (let num = 2; num <= limit; num++) {
    for (let divisor = 2; divisor < num; divisor++) {
      if (num % divisor === 0) {
        continue outer;
      }
    }
    primes.push(num);
  }

  return primes;
}

/**
 * @param {number[]} primes
 * @param {number} limit
 */
function displayPrimes(primes, limit) {
  const output = document.getElementById("output");
  output.innerHTML = "";

  const heading = document.createElement("p");
  heading.textContent =
    primes.length > 0
      ? `Primes up to ${limit}:`
      : `No primes found up to ${limit}.`;
  output.appendChild(heading);

  if (primes.length > 0) {
    const list = document.createElement("ul");
    primes.forEach((prime) => {
      const item = document.createElement("li");
      item.textContent = prime;
      list.appendChild(item);
    });
    output.appendChild(list);
  }
}

let userInput = prompt("Enter a positive integer:");

while (!validateInput(userInput)) {
  userInput = prompt("Invalid input. Please enter a positive integer:");
}

const limit = parseInt(userInput, 10);
const primes = findPrimes(limit);
displayPrimes(primes, limit);
