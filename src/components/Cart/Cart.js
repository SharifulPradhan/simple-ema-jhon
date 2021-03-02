import React from 'react';
import "./Cart.css";


const Cart = (props) => {
  const cart = props.cart;
  const total = cart.reduce((total, prd) => total + prd.price, 0);
  let shippingCharges = 0;
  if(total > 250){
    shippingCharges = 0;
  }
  else if (total > 100){
    shippingCharges = 2.35;
  }
  else if (total > 15){
    shippingCharges = 4.89;
  }

  const tax = total / 10;
  const totalAmount = total + shippingCharges + tax;


  return (
    <div>
      <h4 style={{color:"red"}}>Shopping Details</h4>
      <h6>Product Added: {cart.length}</h6>
      <h6>Items Price: ${total.toFixed(2)}</h6>
      <h6>Shipping Charges: ${shippingCharges.toFixed(2)}</h6>
      <h6>Tax and Vat: ${tax.toFixed(2)}</h6>
      <h6>Total Amount: {totalAmount.toFixed(2)}</h6>
    </div>
  );
};

export default Cart;