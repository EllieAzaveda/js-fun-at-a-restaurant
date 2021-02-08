

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

function removeMenuItem(restaurantName, menuItem, type) {
  for (var i = 0; i < restaurantName.length; i++) {
    restaurantName.menus[chooseMenu].slice(menuItem);
  }
}

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
