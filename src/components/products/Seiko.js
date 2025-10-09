import React, { useState, useRef, useEffect } from 'react';  
import Card from "../shopping-cart/Card";  // کامپوننت سبد خرید | Cart component
import Products from "./Products";  // کامپوننت محصولات | Products component
import data from './data.json';  // داده‌های محصولات | Product data
import { useCart } from '../shopping-cart/CartContext';  // استفاده از Context برای مدیریت سبد خرید | Using Context for cart management
import { FaHome, FaShoppingCart } from 'react-icons/fa';  // آیکون‌ها | Icons
import { Link, useLocation } from 'react-router-dom';  // مسیر فعلی برای برگشت دقیق | Current route for smart return

function Seiko() {  
  const [item, setItem] = useState(data.productsss);  // وضعیت اولیه محصولات | Initial product state
  const [sort, setSort] = useState("asc");  // وضعیت مرتب‌سازی | Sorting state
  const [brand, setBrand] = useState("");  // فیلتر برند | Brand filter
  const { cartItems, addProducts, removeProducts } = useCart();  // توابع سبد خرید | Cart functions
  const topRef = useRef(null);  // مرجع اسکرول بالا | Scroll ref
  const [showMobileCart, setShowMobileCart] = useState(false);  // نمایش سبد خرید موبایل | Mobile cart toggle
  const location = useLocation();  // مسیر فعلی | Current route

  useEffect(() => {  
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: 'smooth' });  // اسکرول نرم به بالا | Smooth scroll to top
    }
  }, []);

  const sortProducts = (event) => {  
    const newSort = event.target.value;  
    setSort(newSort);
    const sortedItems = [...item];
    sortedItems.sort((a, b) => 
      (newSort || sort) === "asc" ? a.id - b.id : b.id - a.id
    );
    setItem(sortedItems);  // اعمال مرتب‌سازی | Apply sorting
  };

  const filterProducts = (event) => {  
    const selectedBrand = event.target.value;  
    setBrand(selectedBrand);  
    if (selectedBrand === "") {  
      setItem(data.productsss);  // نمایش همه محصولات | Show all products
    } else {  
      setItem(data.productsss.filter((product) => 
        product.availableBrand.includes(selectedBrand)
      ));
    }  
  };  

  return (  
    <div className="container">  {/* کانتینر اصلی صفحه | Main container */}
      <header className="homeicon" ref={topRef}>  {/* هدر با آیکن خانه و لوگو | Header with home icon and logo */}
        <Link to="/"> <FaHome /></Link>  
        <div className="logo">Adak</div>
        <button className="mobile-cart-icon" onClick={() => setShowMobileCart(!showMobileCart)}>
          <FaShoppingCart />
          {cartItems.length > 0 && (
            <span className="cart-count">{cartItems.length}</span>  // تعداد آیتم‌ها | Item count
          )}
        </button>
      </header>  

      <main>
        <div className="content">  {/* بخش اصلی محتوا | Main content area */}
          <div className="main">
            <div className="filter">  {/* فیلترها و مرتب‌سازی | Filters and sorting */}
              <div className="result">
                تعداد محصولات: {item.length}  {/* نمایش تعداد محصولات | Show product count */}
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
                  <option value="Seikom">سایکو مردانه</option>
                  <option value="Seikow">سایکو زنانه</option>
                  <option value="Seikos">ست سایکو</option>
                </select>
              </div>
            </div>

            <Products item={item} addProducts={addProducts} />  {/* نمایش محصولات | Display products */}
          </div>

          <div className="sidebarr">
            <Card cartItems={cartItems} removeProducts={removeProducts} />  {/* سبد خرید دسکتاپ | Desktop cart */}
          </div>
        </div>
      </main>

      {/* سبد خرید موبایل با قابلیت بستن | Mobile cart with close functionality */}
      {showMobileCart && (
        <div className="mobile-cart-popup">
          <Card
            cartItems={cartItems}
            removeProducts={removeProducts}
            onClose={() => setShowMobileCart(false)}  // بستن سبد خرید موبایل | Close mobile cart
            locationState={{ background: location }}  // ارسال مسیر فعلی | Send current route
          />
        </div>
      )}
    </div>
  );
}


export default Seiko;
