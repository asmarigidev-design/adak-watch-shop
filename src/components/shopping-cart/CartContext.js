<<<<<<< HEAD
import React, { createContext, useContext, useState } from 'react';  

// ایجاد Context  
const CartContext = createContext();  

// فراهم کردن Context برای استفاده در سایر کامپوننت‌ها  
export const CartProvider = ({ children }) => {  
    const [cartItems, setCartItems] = useState([]);  

    const addProducts = (product) => {  
        const exist = cartItems.find((item) => item.id === product.id);  
        if (exist) {  
            setCartItems(cartItems.map((item) =>  
                item.id === product.id ? { ...exist, qty: exist.qty + 1 } : item  
            ));  
        } else {  
            setCartItems([...cartItems, { ...product, qty: 1 }]);  
        }  
    };  

    const removeProducts = (product) => {  
        const exist = cartItems.find((item) => item.id === product.id);  
        if (exist.qty === 1) {  
            setCartItems(cartItems.filter((item) => item.id !== product.id));  
        } else {  
            setCartItems(cartItems.map((item) =>  
                item.id === product.id ? { ...exist, qty: exist.qty - 1 } : item  
            ));  
        }  
    };  

    return (  
        <CartContext.Provider value={{ cartItems, addProducts, removeProducts }}>  
            {children}  
        </CartContext.Provider>  
    );  
};  

// یک هوک برای استفاده از Context در کامپوننت‌ها  
export const useCart = () => {  
    return useContext(CartContext);  
};  
=======
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

  return (
    <CartContext.Provider value={{ cartItems, addProducts, removeProducts }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
>>>>>>> 3507f23 (Add built files for deployment)
