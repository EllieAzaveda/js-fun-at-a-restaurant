

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

  if(!restaurantName.menus[chooseMenu].includes(menuItem)) {
    restaurantName.menus[chooseMenu].push(menuItem);
  }
}

function removeMenuItem(estaurantName, menuItem) {

}

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
