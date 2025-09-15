const { addItem, removeItem, getTotalItems } = require("../cart.js");

describe("Shopping Cart Task", () => {

  describe("addItem()", () => {
    test("Positive: adds an item correctly", () => {
      let cart = [];
      addItem(cart, "Plum", 2);
      expect(cart).toEqual([{ item: "Plum", quantity: 2 }]);
    });

    test("Negative: handles negative quantity", () => {
      let cart = [];
      let output = addItem(cart, "Apricot", -3);
      expect(output).toBe("the value of quantity is invalid");
      expect(cart.length).toBe(0);
    });


    test("Edge Case: adds item with quantity 0", () => {
      let cart = [];
      let output = addItem(cart, "Pineapple", 0);
      expect(output).toEqual("the value of quantity is invalid");
      expect(cart.length).toBe(0);
    });

    test("Edge Case: adds item with empty string", () => {
      let cart = [];
      let output = addItem(cart, "", 50);
      expect(output).toEqual("The value of item is invalid");
      expect(cart.length).toBe(0);
    });
  });

  describe("removeItem()", () => {
    test("Positive: removes an existing item", () => {
      let cart = [{ item: "Plum", quantity: 2 }];
      cart = removeItem(cart, "Plum");
      expect(cart).toEqual([]);
    });

    test("Negative: tries to remove item not in cart", () => {
      let cart = [{ item: "Plum", quantity: 2 }];
      cart = removeItem(cart, "Apricot");
      expect(cart).toEqual([{ item: "Plum", quantity: 2 }]);
    });

    test("Edge Case: remove from empty cart", () => {
      let cart = [];
      cart = removeItem(cart, "Plum");
      expect(cart).toEqual([]);
    });
  });

  describe("getTotalItems()", () => {
    test("Positive: calculates total items correctly", () => {
      let cart = [];
      addItem(cart, "Plum", 2);
      addItem(cart, "Apricot", 3);
      expect(getTotalItems(cart)).toBe(5);
    });

    test("Negative: empty cart returns 0", () => {
      let cart = [];
      expect(getTotalItems(cart)).toBe(0);
    });

    test("Edge Case: large quantities", () => {
      let cart = [];
      addItem(cart, "Mangoes", 30);
      addItem(cart, "Melon", 6);
      expect(getTotalItems(cart)).toBe(36);
    });
  });

});