const ContactController = require('../controllers/ContactController');
const sequelize = require('../db/models/index').sequelize;

describe('ContactController', () => {
  beforeEach((done) => {
    this.book = new ContactController();
    sequelize
      .sync({ force: true })
      .then((res) => {
        done();
      })
      .catch((err) => {
        done();
      });
  });

  it('should be defined', () => {
    expect(ContactController).toBeDefined();
  });

  describe('#addContact()', () => {
    it('should add a single contact into the book', (done) => {
      this.book
        .addContact('Alice', '001-101-1010')
        .then((contact) => {
          expect(contact.name).toBe('Alice');
          expect(contact.phone).toBe('001-101-1010');
          done();
        })
        .catch((error) => {
          console.log(error);
          done();
        });
    });
  });
});
