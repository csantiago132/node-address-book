const Contact = require('../db/models').Contact;

module.exports = class ContactController {
  constructor() {
    this.addContactQuestions = [
      {
        type: 'input',
        name: 'name',
        message: "Contact's name - ",
        validate(val) {
          return val !== '';
        },
      },
      {
        type: 'input',
        name: 'phone',
        message: "Contact's phone number - ",
        validate(val) {
          return val !== '';
        },
      },
      {
        type: 'input',
        name: 'email',
        message: "Contact's e-mail address - ",
        validate(val) {
          return val !== '';
        },
      },
    ];
  }

  addContact(name, phone, email) {
    return Contact.create({ name, phone, email });
  }

  getContacts() {
    return Contact.findAll();
  }
};
