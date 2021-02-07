// nameMenuItem
function nameMenuItem(menuItem) {
  return "Delicious " + menuItem;
}

//createMenuItem
function createMenuItem(x, y, z) {
  var menuItem = {
    name: x,
    price: y,
    type: z,
  }
  return menuItem;
}

//addIngredients
function addIngredients(ingName, ingredients) {
if (ingredients.includes(ingName) === false) {
  ingredients.push(ingName);
}
  return ingredients.length;
}

//formatPrice
function formatPrice(formattedPrice, price) {
  return "$" + formattedPrice;
}

//decreasePrice
function decreasePrice(decreasedPrice, price) {
  return decreasedPrice * 0.9;
}

//createRecipe
function createRecipe(a, b, c) {
  var recipe = {
    title: a,
    ingredients: b,
    type: c,
  }
  return recipe;
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
