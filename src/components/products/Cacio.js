import React, { useEffect, useState, useRef } from 'react'; // ایمپورت ری‌اکت و هوک‌ها // Import React and hooks
import Card from "../shopping-cart/Card"; // کامپوننت سبد خرید // Cart component
import Products from "./Products"; // کامپوننت محصولات // Products component
import data from './data.json'; // داده‌های محصولات // Product data
import { useCart } from '../shopping-cart/CartContext'; // کانتکست سبد خرید // Cart context
import { FaHome, FaShoppingCart } from 'react-icons/fa'; // آیکون‌ها // Icons
import { Link, useLocation } from 'react-router-dom'; // مسیر فعلی برای کنترل برگشت // Routing and location

function Cacio() {
  const [item, setItem] = useState(data.productss || []); // بارگذاری اولیه محصولات // Initial product load
  const [sort, setSort] = useState("asc"); // وضعیت مرتب‌سازی // Sorting state
  const [brand, setBrand] = useState(""); // فیلتر برند انتخاب‌شده // Brand filter
  const { cartItems, addProducts, removeProducts } = useCart(); // توابع سبد خرید // Cart functions
  const topRef = useRef(null); // مرجع اسکرول بالا // Scroll ref
  const [showMobileCart, setShowMobileCart] = useState(false); // نمایش سبد خرید موبایل // Mobile cart toggle
  const location = useLocation(); // مسیر فعلی برای برگشت دقیق // Current route for smart return

  
  useEffect(() => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: 'smooth' }); // اسکرول نرم به بالا // Smooth scroll to top
    }
  }, []);

  const sortProducts = (event) => {
    const newSort = event.target.value;
    setSort(newSort);
    const sortedItems = [...item];
    sortedItems.sort((a, b) =>
      (newSort || sort) === "asc" ? a.id - b.id : b.id - a.id
    );
    setItem(sortedItems); // اعمال مرتب‌سازی // Apply sorting
  };

  const filterProducts = (event) => {
    const selectedBrand = event.target.value;
    setBrand(selectedBrand);
    if (selectedBrand === "") {
      setItem(data.productss || []);
    } else {
      setItem(data.productss.filter(product =>
        product.availableBrand && product.availableBrand.includes(selectedBrand)
      ));
    }
  };

  return (
    <div className="container"> {/* کانتینر اصلی صفحه // Main container */}
      <header className="homeicon" ref={topRef}>
        <Link to="/"> <FaHome /></Link> {/* لینک به خانه // Home link */}
        <div className="logo">Adak</div>

        {/* آیکن سبد خرید فقط در موبایل // Cart icon for mobile only */}
        <button className="mobile-cart-icon" onClick={() => setShowMobileCart(!showMobileCart)}>
          <FaShoppingCart />
          {cartItems.length > 0 && (
            <span className="cart-count">{cartItems.length}</span> // تعداد آیتم‌ها // Item count
          )}
        </button>
      </header>

      <main>
        <div className="content"> {/* بخش اصلی محتوا // Main content area */}
          <div className="main">
            <div className="filter"> {/* فیلترها و مرتب‌سازی // Filters and sorting */}
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
                  <option value="Caciom">کاسیو مردانه</option>
                  <option value="Caciow">کاسیو زنانه</option>
                  <option value="Cacios">ست کاسیو</option>
                </select>
              </div>
            </div>

            <Products item={item} addProducts={addProducts}  /> {/* نمایش محصولات // Display products */}
          </div>

          {/* سایدبار فقط در دسکتاپ // Sidebar for desktop only */}
          <div className="sidebarr">
            <Card cartItems={cartItems} 
            removeProducts={removeProducts} />
          </div>
        </div>
      </main>

      {/* سبد خرید شناور در موبایل // Floating cart for mobile */}
      {showMobileCart && (
        <div className="mobile-cart-popup">
          <Card
            cartItems={cartItems}
            removeProducts={removeProducts}
            onClose={() => setShowMobileCart(false)} // بستن سبد خرید موبایل // Close mobile cart
            locationState={{ background: location }} // ارسال مسیر فعلی برای برگشت دقیق // Send current route for smart return
          />
        </div>
      )}
    </div>
  );
}

export default Cacio;
