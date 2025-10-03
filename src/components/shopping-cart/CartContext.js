import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addProducts = (product, checkOnly = false) => {
    const exist = cartItems.find((item) => item.id === product.id);
    if (exist) {
      if (checkOnly) return 'exists';
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...exist, qty: exist.qty + 1 } : item
        )
      );
      return 'added';
    } else {
      if (checkOnly) return 'added';
      setCartItems([...cartItems, { ...product, qty: 1 }]);
      return 'added';
    }
  };

  const removeProducts = (product) => {
    const exist = cartItems.find((item) => item.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...exist, qty: exist.qty - 1 } : item
        )
      );
    }
  };

  //New function to completely delete a product تابع جدید برای حذف کامل محصول
  const deleteProductCompletely = (product) => {
    setCartItems(cartItems.filter((item) => item.id !== product.id));
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addProducts, removeProducts, deleteProductCompletely }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
