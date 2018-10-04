const inquirer = require('inquirer');
const ContactController = require("./ContactController");

 module.exports = class MenuController {
  constructor() {
    this.mainMenuQuestions = [
      {
       type: "list",
        name: "mainMenuChoice",
        message: "Please choose from an option below: ",
        choices: [
          "Add New Contact",
          "Just want to know the date",
          "Exit"
        ]
      }
    ];
    this.book = new ContactController();
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
          case "Just want to know the date":
            this.getDate();
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

  getDate(){
    // see why the "+1" 
    // https://skillcrush.com/2013/01/17/why-programmers-start-counting-at-zero/
    const setDate = new Date();
    const date = {
      day: `${setDate.getDate()}`,
      month: `${setDate.getMonth() + 1}`,
      year: `${setDate.getFullYear()}`,
      hours: `${setDate.getHours()}`,
      minutes: `${setDate.getMinutes()}`,
      seconds: `${setDate.getSeconds()}`
    };
    const monthFormat = `${date.day}/${date.month}/${date.year}`;
    const timeFormat = `${date.hours}:${date.minutes}:${date.seconds}`
    const printDateOnConsole = `Today's date: ${monthFormat} @ ${timeFormat}`; 
    
    this.clear();
    console.log(printDateOnConsole);
    this.main();
  }

  addContact(){
    this.clear();
    inquirer
      .prompt(this.book.addContactQuestions)
      .then((answers) => {
        this.book.addContact(answers.name, answers.phone).then((contact) => {
          console.log("Contact added successfully!");
          this.main();
        }).catch((error) => {
          console.log(error);
          this.main();
        });
    });
  }

  exit(){
    console.log("Thanks for using Node Address Book!");
    process.exit();
  }

  getContactCount(){
    return this.book.length;
  }

  remindMe() {
    return 'Learning is a life-long pursuit';
  }
 }
