console.log("Opening Restaurant");
var orderNumber;
function placeOrder(orderNumber)
  {
    console.log("Order number placed : ",orderNumber);
    Deliverfood(function(){
      console.log("Delivered Food Order : ",orderNumber );
    });
  }
  function Deliverfood(callback)
  {
    setTimeout(callback,5000);
  }
placeOrder(1);
placeOrder(2);
placeOrder(3);

placeOrder(4);

placeOrder(5);

placeOrder(6);
