const MenuController = require("../controllers/MenuController");

describe('MenuController', () => {
  
  beforeEach(() => {
    this.menu = new MenuController();
  });
  
  describe('getContactCount() method', () => {
    it('should return 0 when there are no contacts in the Address Book', () => {
      expect(menu.getContactCount()).toBe(0);
    });

    it("should return 1 when there is exactly one contact in the book", () => {
      menu.contacts.push("Bob");
      expect(menu.getContactCount()).toBe(1)
    });
  });
});