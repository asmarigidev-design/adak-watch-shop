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

<<<<<<< HEAD
export default MobileSidebar;
=======
export default MobileSidebar;
>>>>>>> 3507f23 (Add built files for deployment)
