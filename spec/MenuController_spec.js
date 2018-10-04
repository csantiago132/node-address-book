const MenuController = require('../controllers/MenuController');

describe('MenuController', () => {
  beforeEach(() => {
    this.menu = new MenuController();
  });

  describe('remindMe() method', () => {
    it('should return "Learning is a life-long pursuit"', () => {
      expect(this.menu.remindMe()).toEqual('Learning is a life-long pursuit');
    });
  });
});
