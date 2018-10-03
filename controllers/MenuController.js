const inquirer = require('inquirer');

 module.exports = class MenuController {
  constructor() {
    this.mainMenuQuestions = [
      {
       type: "list",
        name: "mainMenuChoice",
        message: "Please choose from an option below: ",
        choices: [
          "Add New Contact",
          "Exit"
        ]
      }
    ];
    this.contacts = [];
  }

  main(){
    console.log(`Welcome to Node Address Book!`);
    inquirer
      .prompt(this.mainMenuQuestions)
      .then((response) => {
        switch(response.mainMenuChoice){
          case "Add New Contact":
            this.addContact();
            break;
          case "Exit":
            this.exit();
            break;
          default:
            console.log("Invalid input");
            this.main();
        }
     })
     .catch((error) => {
       console.log(error);
     });
  }

  clear(){
    console.log("\x1Bc");
  }

  addContact(){
    this.clear();
    console.log('addContact called');
    this.main();
  }

  exit(){
    console.log("Thanks for using Node Address Book!");
    process.exit();
  }
 }
