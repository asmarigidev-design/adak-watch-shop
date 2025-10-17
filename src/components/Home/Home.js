import React, { useEffect, useRef, useState } from "react";
import './Home.css'; 
import Profile from "../profilecard/Profile"; 
import Menouicon from "../menouicon/Menouicon"; 
import Videoback from "../videoback/Videoback"; 
import Footer from '../Footer/Footer';
import Articles from "../videoback/Articles"; 
import { useMemo } from 'react';

function Home() { 
    const text = useMemo(() => ['لحظه‌ها را با دقت و زیبایی به یادگار بگذارید', ''], []);
    const [count, setCount] = useState(0); // وضعیت شمارنده برای انتخاب متن // State for text counter
    const [index, setIndex] = useState(0); // وضعیت ایندکس حرف فعلی در متن // State for current character index
    const [letter, setLetter] = useState(""); // وضعیت متن تایپ‌شده فعلی // State for currently typed text

    useEffect(() => { // افکت برای اجرای انیمیشن تایپ متن // Effect to run typing animation
        const type = () => {
            const currentText = text[count % text.length]; // انتخاب متن فعلی با استفاده از شمارنده // Select current text using counter
            const newLetter = currentText.slice(0, index + 1); // گرفتن حروف تا ایندکس فعلی // Get characters up to current index
            setLetter(newLetter); // به‌روزرسانی متن تایپ‌شده // Update typed text

            if (newLetter.length === currentText.length) { // بررسی پایان تایپ متن // Check if typing is complete
                setCount(prevCount => (prevCount + 1) % text.length); // رفتن به متن بعدی به صورت حلقه‌ای // Cycle to next text
                setIndex(0); // بازنشانی ایندکس برای شروع متن جدید // Reset index for new text
            } else {
                setIndex(prevIndex => prevIndex + 1); // افزایش ایندکس برای تایپ حرف بعدی // Increment index for next character
            }
        };

        const timer = setTimeout(type, 200); // تنظیم تایمر برای اجرای تایپ بعدی // Set timer for next typing step
        return () => clearTimeout(timer); // پاکسازی تایمر هنگام خروج کامپوننت // Cleanup timer on component unmount
    }, [count, index, text]); // وابستگی به شمارنده، ایندکس و متن‌ها // Dependencies: count, index, text

    const bgRef = useRef(null); // ایجاد مرجع برای عنصر پس‌زمینه // Create ref for background element

    useEffect(() => { // افکت برای تنظیم شفافیت پس‌زمینه هنگام اسکرول // Effect to adjust background opacity on scroll
        const handleScroll = () => {
            if (bgRef.current) {
                bgRef.current.style.opacity = 1 - window.pageYOffset / 600; // کاهش شفافیت با افزایش اسکرول // Reduce opacity as scroll increases
            }
        };

        window.addEventListener('scroll', handleScroll); // افزودن شنونده اسکرول به پنجره // Add scroll listener to window
        return () => {
            window.removeEventListener('scroll', handleScroll); // حذف شنونده هنگام خروج کامپوننت // Remove listener on component unmount
        };
    }, []); // اجرای افکت فقط یک‌بار پس از بارگذاری // Run effect only once after mount

    return (
        <div className="mahv"> {/* کانتینر اصلی صفحه خانه // Main container for Home page */}
            <div className="header">
                <div id="bg" ref={bgRef}></div> {/* عنصر پس‌زمینه با مرجع برای افکت اسکرول // Background element with ref for scroll effect */}
            </div>

            <section>
                <div className="containerr"> {/* بخش معرفی با متن تایپ‌شونده و توضیح برند // Intro section with typing text and brand description */}
                    <h1 className="top-layer"><span>{letter}</span></h1> {/* نمایش متن تایپ‌شده در هدر // Display typed text in header */}
                    <p>ساعت‌های آداک سفیر زمان و سبک زندگی شما </p> {/* توضیح کوتاه درباره برند آداک // Short description about Adak brand */}
                </div>
            </section>

            <Menouicon /> {/* نمایش کامپوننت آیکون منو // Render menu icon component */}
            <Profile /> {/* نمایش کامپوننت پروفایل // Render profile component */}
            <Articles /> {/* نمایش کامپوننت مقالات آموزشی // Render articles component */}
            <Videoback /> {/* نمایش کامپوننت ویدیو پس‌زمینه // Render video background component */}
            <Footer /> {/* نمایش کامپوننت فوتر سایت // Render site footer component */}
        </div>
    );
}

export default Home; 
