class ShoppingItem {
  constructor(name, quantity, price) {
    this.itemName = name;
    this.quantity = quantity;
    this.price = price;
  }

  getTotal() {
    return this.quantity * this.price;
  }

  removeQuantity(amount) {
    if (amount >= this.quantity) {
      return true;
    } else {
      this.quantity -= amount;
      return false;
    }
  }
}

const shoppingListCart = [];

function addItem(name, quantity, price) {
  shoppingListCart.push(new ShoppingItem(name, quantity, price));
}

function removeItem(name, quantity) {
  const index = shoppingListCart.findIndex(
    (item) => item.itemName.toLowerCase() === name.toLowerCase()
  );

  if (index === -1) return false;

  const item = shoppingListCart[index];
  const shouldRemove = item.removeQuantity(quantity);

  if (shouldRemove) {
    shoppingListCart.splice(index, 1);
  }

  return true;
}

function getList() {
  return shoppingListCart;
}

function getTotals() {
  let totalItems = 0;
  let totalPrice = 0;

  shoppingListCart.forEach((item) => {
    totalItems += item.quantity;
    totalPrice += item.getTotal();
  });

  return { totalItems, totalPrice };
}

module.exports = { addItem, removeItem, getList, getTotals, ShoppingItem };
