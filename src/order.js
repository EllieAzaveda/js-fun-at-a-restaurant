
//takeOrder

function takeOrder(newOrders, deliveryOrders) {
  var newOrders;

  if (newOrders.status === "accepted") {
    deliveryOrders.slice(newOrders);
  }

  for(i = 0; i < deliveryOrders.length; i++) {
    return deliveryOrders[i];
  }
}

  // refundOrder


  // listItems


  // searchOrder



module.exports = {
  takeOrder,
  // refundOrder,
  // listItems,
  // searchOrder
}
