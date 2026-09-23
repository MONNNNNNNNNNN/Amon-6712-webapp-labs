import readline from 'readline';
let yourname = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

yourname.question('What is your name? ', (name) => {
    console.log(`Hello ${name}`);
    yourname.close();
})