const inquirer = require('inquirer');

const questions = [
  {
    type: "list",
    name: "status",
    message: "Are you hungry?: ",
    choices: [
      "Yes",
      "No"
    ]
  }
];

inquirer
  .prompt(questions)
  .then((answers) => (
    answers.status === "Yes" 
      ? console.log("Get up and eat!")
      : console.log("Get back to work!")
  ))
  .catch((err) => {
    console.error(err);
  });
