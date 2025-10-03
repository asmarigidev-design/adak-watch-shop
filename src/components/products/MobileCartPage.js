import React from 'react';
import Card from '../shopping-cart/Card';
import { useCart } from '../shopping-cart/CartContext';

function MobileCartPage() {
  const { cartItems, removeProducts } = useCart();

  return (
    <div className="mobile-cart-page">
      <Card cartItems={cartItems} removeProducts={removeProducts} />
    </div>
  );
}

<<<<<<< HEAD
export default MobileCartPage;
=======
export default MobileCartPage;
>>>>>>> 3507f23 (Add built files for deployment)
