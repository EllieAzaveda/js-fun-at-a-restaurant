

function createRestaurant(restaurantName) {
  restaurantName = {
    name: restaurantName,
      menus: {
        breakfast: [],
        lunch: [],
        dinner: [],
      }
  }
  return restaurantName;
};

function addMenuItem(restaurantName, menuItem) {
  var chooseMenu = menuItem.type;
  restaurantName.menus[chooseMenu].push(menuItem);
}


module.exports = {
  createRestaurant,
  addMenuItem,
  // removeMenuItem
}
