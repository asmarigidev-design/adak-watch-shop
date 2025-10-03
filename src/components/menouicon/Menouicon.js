<<<<<<< HEAD
// Menouicon.js  
import React, { useState } from "react";  
import './Menouicon.css';  
import prof from "./prof.webp";  
import { FaCog } from 'react-icons/fa'; // وارد کردن آیکن چرخ‌دنده از Font Awesome  

function Menouicon() {  
    const [isActive, setIsActive] = useState(false); // برای مدیریت نمایش sidebar  

    // تابع برای برچسب زدن به دکمه  
    const toggleSidebar = () => {  
        setIsActive(!isActive);  
    };  

    return (  
        <div className="menuu">  

            <div className={`sidebar ${isActive ? 'active' : ''}`}>  
                <div className="btn" onClick={toggleSidebar}>  
                    <div className="cog">  <FaCog /></div>  
                </div>  
                <img src={prof} alt="Profile" />  
                <ul>  
                    <li><a href="#">ثبت سفارش</a></li>  
                    <li><a href="#">پشتیبانی</a></li>  
                    <li><a href="#">پیگیری سفارش</a></li>  
                </ul>  
            </div>  
        </div>  
    );  
}  

export default Menouicon; // صادرات کامپوننت
=======
import React, { useState } from "react"; // مدیریت وضعیت برای باز و بسته شدن سایدبار // State management for sidebar toggle
import './Menouicon.css'; // استایل‌دهی به منو و سایدبار // Styling for menu and sidebar
import prof from "./prof.webp"; // تصویر پروفایل کاربر // User profile image
import { FaCog } from 'react-icons/fa'; // آیکون چرخ‌دنده برای دکمه تنظیمات // Cog icon for settings button

function Menouicon() {
    const [isActive, setIsActive] = useState(false); // وضعیت فعال بودن سایدبار // Sidebar active state

    const toggleSidebar = () => { // تغییر وضعیت سایدبار با کلیک // Toggle sidebar on click
        setIsActive(!isActive);
    };

    return (
        <div className="menuu">
            <div className={`sidebar ${isActive ? 'active' : ''}`}> {/* نمایش یا مخفی‌سازی سایدبار // Show or hide sidebar */}
                <div className="btn" onClick={toggleSidebar}> {/* دکمه چرخ‌دنده برای باز کردن سایدبار // Cog button to open sidebar */}
                    <div className="cog"><FaCog /></div>
                </div>

                <img src={prof} alt="Profile" /> {/* تصویر پروفایل در سایدبار // Profile image in sidebar */}

                <ul> {/* لینک‌های کاربردی در سایدبار // Useful sidebar links */}
                    <li><a href="/">ثبت سفارش</a></li>
                    <li><a href="/">پشتیبانی</a></li>
                    <li><a href="/">پیگیری سفارش</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Menouicon; // خروجی گرفتن از کامپوننت برای استفاده در صفحه اصلی // Exporting component for use in main page
>>>>>>> 3507f23 (Add built files for deployment)
