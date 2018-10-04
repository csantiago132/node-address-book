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

  search(name) {
    return Contact.findOne({
      where: { name },
    });
  }

  iterativeSearch(contacts, target) {
    for (let contact of contacts) {
      if (contact.name.toLowerCase() === target.toLowerCase()) {
        return contact;
      }
    }
    return null;
  }

  binarySearch(contacts, target) {
    let min = 0;
    let max = contacts.length - 1;
    let mid;

    while (min <= max) {
      mid = Math.floor((min + max) / 2);
      let currentContact = contacts[mid];

      if (currentContact.name > target) {
        max = mid - 1;
      } else if (currentContact.name < target) {
        min = mid - 1;
      } else {
        return contacts[mid];
      }
    }
    return null;
  }
};
