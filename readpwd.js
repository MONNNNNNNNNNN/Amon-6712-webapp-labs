import inquirer from "inquirer";
var questions = [
  {
    type: "input", name : 'username', message: 'Username'},
  {
    type: "password", name : 'password', message: 'Password'}
]
inquirer.prompt(questions).then(answers => {
  console.log(`Hi ${answers['username']} !`);
});