const prompt = require("prompt-sync")({ sigint: true });
const { addItem, removeItem, getList, getTotals } = require("./shoppingList");

const showMenu = () => {
  let running = true;

  while (running) {
    console.log(`Menu:`);
    console.log(`1. Add Item`);
    console.log(`2. Remove Item`);
    console.log(`3. View List`);
    console.log(`4. Exit\n`);

    const menuChoice = prompt("Choose an option Enter (1 - 4): ").trim();

    if (menuChoice === "1") {
      const itemName = prompt("Enter Item name: ").trim();

      const quantity = Number(prompt("Enter Item quantity: "));

      const price = Number(prompt("Enter each Item price: "));

      addItem(itemName, quantity, price);
      console.log(
        `Added ${quantity} ${itemName} at $${price} each to your shopping list!`
      );
    } else if (menuChoice === "2") {
      const userItem = prompt("Enter item name to remove: ").trim();

      const userQuantity = Number(prompt("Enter quantity to remove: "));

      const removed = removeItem(userItem, userQuantity);
      if (removed) {
        console.log(
          `${userQuantity} ${userItem} removed from your shopping cart.`
        );
      } else {
        console.log("Item not found in cart.");
      }
    } else if (menuChoice === "3") {
      const list = getList();
      if (list.length === 0) {
        console.log("Your cart is empty");
      } else {
        console.log("Your Shopping List:");
        list.forEach((item) => {
          console.log(
            `- ${item.quantity} ${item.itemName}: $${(
              item.quantity * item.price
            ).toFixed(2)}`
          );
        });
        const totals = getTotals();
        console.log(`Total Items: ${totals.totalItems}`);
        console.log(`Total Price: $${totals.totalPrice.toFixed(2)}`);
      }
    } else if (menuChoice === "4") {
      console.clear();
      running = false;
    } else {
      console.log("Invalid input");
    }
  }
};

module.exports = { showMenu };
