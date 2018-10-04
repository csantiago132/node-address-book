const inquirer = require('inquirer');
const ContactController = require('./ContactController');

module.exports = class MenuController {
  constructor() {
    this.mainMenuQuestions = [
      {
        type: 'list',
        name: 'mainMenuChoice',
        message: 'Please choose from an option below: ',
        choices: [
          'Add New Contact',
          'View All Contacts',
          'Search for Contact',
          'Just want to know the date',
          'Exit',
        ],
      },
    ];
    this.book = new ContactController();
  }

  main() {
    console.log(`Welcome to Node Address Book!`);
    inquirer
      .prompt(this.mainMenuQuestions)
      .then((response) => {
        switch (response.mainMenuChoice) {
          case 'Add New Contact':
            this.addContact();
            break;
          case 'View All Contacts':
            this.getContacts();
            break;
          case 'Search for Contact':
            this.search();
            break;
          case 'Exit':
            this.exit();
            break;
          case 'Just want to know the date':
            this.getDate();
            break;
          default:
            console.log('Invalid input');
            this.main();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  clear() {
    console.log('\x1Bc');
  }

  getDate() {
    // see why the "+1"
    // https://skillcrush.com/2013/01/17/why-programmers-start-counting-at-zero/
    const setDate = new Date();
    const date = {
      day: `${setDate.getDate()}`,
      month: `${setDate.getMonth() + 1}`,
      year: `${setDate.getFullYear()}`,
      hours: `${setDate.getHours()}`,
      minutes: `${setDate.getMinutes()}`,
      seconds: `${setDate.getSeconds()}`,
    };
    const monthFormat = `${date.day}/${date.month}/${date.year}`;
    const timeFormat = `${date.hours}:${date.minutes}:${date.seconds}`;
    const printDateOnConsole = `Today's date: ${monthFormat} @ ${timeFormat}`;

    this.clear();
    console.log(printDateOnConsole);
    this.main();
  }

  addContact() {
    this.clear();
    inquirer.prompt(this.book.addContactQuestions).then((answers) => {
      this.book
        .addContact(answers.name, answers.phone, answers.email)
        .then(() => {
          console.log('Contact added successfully!');
          this.main();
        })
        .catch((error) => {
          console.log(error);
          this.main();
        });
    });
  }

  exit() {
    console.log('Thanks for using Node Address Book!');
    process.exit();
  }

  getContacts() {
    this.clear();
    this.book
      .getContacts()
      .then((contacts) => {
        for (let contact of contacts) {
          console.log(`
        name: ${contact.name}
        phone number: ${contact.phone}
        email: ${contact.email}
        ---------------`);
        }
        this.main();
      })
      .catch((error) => {
        console.log(error);
        this.main();
      });
  }

  search() {
    inquirer
      .prompt(this.book.searchQuestions)
      .then((target) => {
        this.book.search(target.name).then((contact) => {
          if (contact === null) {
            this.clear();
            console.log('contact not found');
            this.search();
          } else {
            this.showContact(contact);
          }
        });
      })
      .catch((error) => {
        console.log(error);
        this.main();
      });
  }

  showContact(contact) {
    this._printContact(contact);
    inquirer
      .prompt(this.book.showContactQuestions)
      .then((answer) => {
        switch (answer.selected) {
          case 'Delete contact':
            this.delete(contact);
            break;
          case 'Main menu':
            this.main();
            break;
          default:
            console.log('Something went wrong.');
            this.showContact(contact);
        }
      })
      .catch((error) => {
        console.log(error);
        this.showContact(contact);
      });
  }

  _printContact(contact) {
    console.log(`
    name: ${contact.name}
    phone number: ${contact.phone}
    email: ${contact.email}
    ---------------`);
  }

  delete(contact) {
    inquirer
      .prompt(this.book.deleteConfirmQuestions)
      .then((answer) => {
        if (answer.confirmation) {
          this.book.delete(contact.id);
          console.log('contact deleted!');
          this.main();
        } else {
          console.log('contact not deleted');
          this.showContact(contact);
        }
      })
      .catch((err) => {
        console.log(err);
        this.main();
      });
  }

  getContactCount() {
    return this.book.length;
  }

  remindMe() {
    return 'Learning is a life-long pursuit';
  }
};
