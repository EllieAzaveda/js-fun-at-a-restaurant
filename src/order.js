
function takeOrder(newOrders, deliveryOrders) {
  if (deliveryOrders.length < 3){
    deliveryOrders.push(newOrders);
  }
}

function refundOrder() {
  
}

module.exports = {
  takeOrder,
  refundOrder,
  // listItems,
  // searchOrder
}
