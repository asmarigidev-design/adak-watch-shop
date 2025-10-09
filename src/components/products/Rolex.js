import React, { useState, useRef, useEffect } from 'react';  
import Card from "../shopping-cart/Card";  
import Products from "./Products";  
import data from './data.json';  
import { useCart } from '../shopping-cart/CartContext'; // استفاده از Context برای مدیریت سبد خرید | Using Context for cart management
import { FaHome, FaShoppingCart } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom'; // اضافه‌شده برای مسیر فعلی | Added for current route

function Rolex() {  
  const [item, setItem] = useState(data.products || []);  // لیست محصولات | Product list
  const [sort, setSort] = useState("asc");  // وضعیت مرتب‌سازی | Sorting state
  const [brand, setBrand] = useState("");  // فیلتر برند | Brand filter
  const { cartItems, addProducts, removeProducts } = useCart(); // دسترسی به آیتم‌های سبد خرید | Access cart items
  const topRef = useRef(null); // مرجع برای اسکرول به بالا | Ref for scroll-to-top
  const [showMobileCart, setShowMobileCart] = useState(false); // وضعیت نمایش سبد خرید موبایل | Mobile cart visibility
  const location = useLocation(); // مسیر فعلی | Current route

  useEffect(() => {  
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: 'smooth' }); // اسکرول نرم به ابتدای صفحه | Smooth scroll to top
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
      setItem(data.products);  // نمایش همه محصولات | Show all products
    } else {  
      setItem(data.products.filter((product) => 
        product.availableBrand && product.availableBrand.includes(selectedBrand)
      ));
    }  
  };  

  return (  
    <div className="container">  
      <header className="homeicon" ref={topRef}>
        <Link to="/"> <FaHome /></Link>  
        <div className="logo">Adak</div>
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
                تعداد محصولات: {item.length} {/* نمایش تعداد محصولات | Show product count */}
              </div>  
              <div className="sort">  
                <div className="form-checkbox">  
                  <div className="form-group">  
                    <input type="radio" value="asc" name="radiovalues" onChange={sortProducts} />  
                    <label> جدیدترین محصولات </label>  
                  </div>  
                  <div className="form-group">  
                    <input type="radio" value="desc" name="radiovalues" onChange={sortProducts} />  
                    <label>قدیمی‌ترین محصولات </label>  
                  </div>  
                </div>  
              </div>  
              <div className="brandha">  
                <label>محصولات</label>  
                <select value={brand} onChange={filterProducts}>  
                  <option value=""> همه‌ی محصولات </option>  
                  <option value="Rolexm">رولکس مردانه</option>  
                  <option value="Rolexw">رولکس زنانه</option>  
                  <option value="Rolexs">ست رولکس</option>  
                </select>  
              </div>  
            </div>  
            <Products item={item} addProducts={addProducts} /> {/* نمایش محصولات | Display products */}
          </div>  
          <div className="sidebarr">  
            <Card cartItems={cartItems} removeProducts={removeProducts} /> {/* نمایش سبد خرید | Display cart */}
          </div>  
        </div>  
      </main>  

      {/* سبد خرید موبایل با قابلیت بستن | Mobile cart with close functionality */}
      {showMobileCart && (
        <div className="mobile-cart-popup">
          <Card
            cartItems={cartItems}
            removeProducts={removeProducts}
            onClose={() => setShowMobileCart(false)} // بستن سبد خرید موبایل | Close mobile cart
            locationState={{ background: location }} // ارسال مسیر فعلی | Send current route
          />
        </div>
      )}
    </div>  
  );  
}  
export default Rolex;
