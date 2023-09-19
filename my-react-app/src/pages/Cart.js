
import React from 'react';

function Cart({ cartItems }) {
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <ul  style={{ listStyleType:'upper-roman'}}>
        {cartItems.map((item, index) => (
          <li key={index}>{item.name},{item.price}</li>
          
        ))}
      </ul>
    </div>
  );
}

export default Cart;
