const inquirer = require("inquirer");

module.exports = class ContactController {

  constructor(){
    this.contacts = [];
  }

  addContact(name, phone){
    this.contacts.push({name, phone});
  }

}