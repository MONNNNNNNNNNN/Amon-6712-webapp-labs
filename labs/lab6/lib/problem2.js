

/**
 * @returns {number[]} 
 */
function readInput() {
  const numbers = [];

  while (true) {
    const input = prompt("Enter a positive integer (negative to stop):");

    if (input === null) break; // Cancel also stops collection

    const trimmed = input.trim();
    const num = Number(trimmed);

    
    if (trimmed === "" || Number.isNaN(num) || !Number.isInteger(num)) {
      continue;
    }

    if (num < 0) break; 

    numbers.push(num);
  }

  return numbers;
}

/**
 * @param {number[]} list
 */
function displayStats(list) {
  const isEmpty = list.length === 0;

  const sum = isEmpty ? 0 : list.reduce((total, n) => total + n, 0);
  const average = isEmpty ? 0 : sum / list.length;
  const min = isEmpty ? 0 : Math.min(...list);
  const max = isEmpty ? 0 : Math.max(...list);

  const statsDiv = document.getElementById("stats");
  statsDiv.innerHTML = `
    <p>Average: ${average.toFixed(2)}</p>
    <p>Min: ${min}</p>
    <p>Max: ${max}</p>
  `;
}

const numbers = readInput();
displayStats(numbers);
