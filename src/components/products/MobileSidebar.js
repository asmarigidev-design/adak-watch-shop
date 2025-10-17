// MobileSidebar.js
import React from 'react';
import Card from "../shopping-cart/Card";
import { useCart } from '../shopping-cart/CartContext';

function MobileSidebar() {
  const { cartItems, removeProducts } = useCart();

  return (
   <div className="side">
    <div className="mobile-sidebar">
      <Card cartItems={cartItems} removeProducts={removeProducts} />
    </div>
    
 </div>

  );
}

export default MobileSidebar;
