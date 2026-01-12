const { showMenu } = require("./menu");

const startApp = () => {
  console.clear();
  console.log("🛒 Welcome to the Shop\n");
  showMenu();
  console.log("Goodbye! Thanks for shopping.");
};

startApp();
