const MenuController = require("../controllers/MenuController");

describe('MenuController', () => {
  
  beforeEach(() => {
    this.menu = new MenuController();
  });
  
  describe('getContactCount() method', () => {
    it('should return 0 when there are no contacts in the Address Book', () => {
      expect(this.menu.getContactCount()).toBe(0);
    });

    it("should return 1 when there is exactly one contact in the book", () => {
      this.menu.contacts.push("Bob");
      expect(this.menu.getContactCount()).toBe(1)
    });
  });

  describe('remindMe() method', () => {
    it('should return "Learning is a life-long pursuit"', () => {
      expect(this.menu.remindMe()).toEqual('Learning is a life-long pursuit');
    })
  })
});