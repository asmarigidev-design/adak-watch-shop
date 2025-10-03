import React, { useState, useRef, useEffect } from 'react';  
import Card from "../shopping-cart/Card";  
import Products from "./Products";  
import data from './data.json';  
import { useCart } from '../shopping-cart/CartContext';  
import { FaHome, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom'; 

function Omega() {  
  const [item, setItem] = useState(data.productssss || []);
  const [sort, setSort] = useState("asc");
  const [brand, setBrand] = useState("");
  const { cartItems, addProducts, removeProducts } = useCart();
  const topRef = useRef(null);
  const [showMobileCart, setShowMobileCart] = useState(false);

  useEffect(() => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const sortProducts = (event) => {
    const newSort = event.target.value;
    setSort(newSort);
    const sortedItems = [...item];
    sortedItems.sort((a, b) =>
      (newSort || sort) === "asc" ? a.id - b.id : b.id - a.id
    );
    setItem(sortedItems);
  };

  const filterProducts = (event) => {
    const selectedBrand = event.target.value;
    setBrand(selectedBrand);
    if (selectedBrand === "") {
      setItem(data.productssss || []);
    } else {
      setItem(data.productssss.filter(product =>
        product.availableBrand && product.availableBrand.includes(selectedBrand)
      ));
    }
  };

  return (
    <div className="container">
      <header className="homeicon" ref={topRef}>
        <Link to="/"> <FaHome /></Link>
        <div className="logo">Adak</div>

        {/* آیکن سبد خرید فقط در موبایل */}
        <button className="mobile-cart-icon" onClick={() => setShowMobileCart(!showMobileCart)}>
          <FaShoppingCart />
          {cartItems.length > 0 && (
            <span className="cart-count">{cartItems.length}</span>
          )}
        </button>
      </header>

      <main>
        <div className="content">
          <div className="main">
            <div className="filter">
              <div className="result">
                تعداد محصولات: {item.length}
              </div>
              <div className="sort">
                <div className="form-checkbox">
                  <div className="form-group">
                    <input type="radio" value="asc" name="radiovalues" onChange={sortProducts} />
                    <label> جدیدترین محصولات </label>
                  </div>
                  <div className="form-group">
                    <input type="radio" value="desc" name="radiovalues" onChange={sortProducts} />
                    <label> قدیمی‌ترین محصولات </label>
                  </div>
                </div>
              </div>
              <div className="brandha">
                <label>محصولات</label>
                <select value={brand} onChange={filterProducts}>
                  <option value=""> همه‌ی محصولات </option>
                  <option value="Omegam">امگا مردانه</option>
                  <option value="Omegaw">امگا زنانه</option>
                  <option value="Omegas">ست امگا</option>
                </select>
              </div>
            </div>
            <Products item={item} addProducts={addProducts} />
          </div>

          {/* Sidebar for desktop only  سایدبار فقط برای دسکتاپ  */}
          <div className="sidebarr">
            <Card cartItems={cartItems} removeProducts={removeProducts} />
          </div>
        </div>
      </main>

      {/*Floating shopping cart only on mobile  سبد خرید شناور فقط در موبایل */}
      {showMobileCart && (
        <div className="mobile-cart-popup">
         <Card
      cartItems={cartItems}
      removeProducts={removeProducts}
      onClose={() => setShowMobileCart(false)} //It just closes the shopping cart. فقط سبد خرید رو می‌بنده
    />
        </div>
      )}
    </div>
  );
}


export default Omega;
