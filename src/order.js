
function takeOrder(newOrders, deliveryOrders) {
  if (deliveryOrders.length < 3){
    deliveryOrders.push(newOrders);
  }
}

function refundOrder(newOrders, deliveryOrders) {
  deliveryOrders.splice(newOrders - 1, 1);
}

function listItems(deliveryOrders) {

}

// function searchOrder(deliveryOrders, item) {
//   deliveryOrders.find(item);
// }


module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  // searchOrder
}
