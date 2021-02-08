
function takeOrder(newOrders, deliveryOrders) {
  if (deliveryOrders.length < 3){
    deliveryOrders.push(newOrders);
  }
}

function refundOrder(newOrders, deliveryOrders) {
  deliveryOrders.splice(newOrders - 1, 1);
}

function listItems(deliveryOrders) {
  return `${deliveryOrders[0].item}, ${deliveryOrders[1].item}, ${deliveryOrders[2].item}`;
}

function searchOrder(deliveryOrders, inputItem) {
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[0].item === inputItem) {
      return true;
    } else if (deliveryOrders[1].item === inputItem){
      return true;
    } else {
      return false;
    }
  }
}
// But how do I make the last two dynamic??

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
