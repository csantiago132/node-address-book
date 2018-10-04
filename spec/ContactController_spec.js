const ContactController = require('../controllers/ContactController');
const sequelize = require('../db/models/index').sequelize;

describe('ContactController', () => {
  beforeEach((done) => {
    this.book = new ContactController();
    sequelize
      .sync({ force: true })
      .then(() => done())
      .catch((error) => {
        console.error(error)
        done();
      });
  });

  it('should be defined', () => {
    expect(ContactController).toBeDefined();
  });

  describe('#addContact()', () => {
    it('should add a single contact into the book', (done) => {
      this.book
        .addContact('Alice', '001-101-1010', 'test@email.com')
        .then((contact) => {
          expect(contact.name).toBe('Alice');
          expect(contact.phone).toBe('001-101-1010');
          expect(contact.email).toBe('test@email.com');
          done();
        })
        .catch((error) => {
          console.log(error);
          done();
        });
    });
  });

  describe("#getContacts()", () => {

    it("should return an empty array when no contacts are available", (done) => {
      this.book.getContacts()
      .then((contacts) => {
        expect(contacts.length).toBe(0);
        done();
      })
      .catch((error) => {
        console.log(error);
        done();
      });
    });

    it("should return an array of contacts when contacts are available", (done) => {
      this.book.addContact('Alice', '001-101-1010', 'test@email.com')
      .then(() => {
        this.book.getContacts()
        .then((contacts) => {
          expect(contacts.length).toBe(1);
          done();
        });
      })
      .catch((error) => {
        console.log(error);
        done();
      });
    });
  });

});
