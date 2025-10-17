// Mahvscrool.js  
import React, { useEffect, useRef,useState } from "react";  
import './Mahvscrool.css';  
import Profile from "../profilecard/Profile";  
import Menouicon from "../menouicon/Menouicon";   
import Videoback from "../videoback/Videoback";   
import Footer from '../Footer';
import But from "../videoback/But";


function Mahvscrool() {   

        const text = [ 'لحظه‌ها را با دقت و زیبایی به یادگار بگذارید ',''];  
        const [count, setCount] = useState(0);  
        const [index, setIndex] = useState(0);  
        const [letter, setLetter] = useState("");  
    
        useEffect(() => {  
            const type = () => {  
                // اطمینان از اینکه count در محدوده صحیح باشد  
                const currentText = text[count % text.length]; // استفاده از modulo برای جلوگیری از overflow  
    
                const newLetter = currentText.slice(0, index + 1);  
                setLetter(newLetter);  
    
                if (newLetter.length === currentText.length) {  
                    // اگر تمام حروف تایپ شدند  
                    setCount(prevCount => (prevCount + 1) % text.length); // به طور دایره‌ای بین متن‌ها حرکت می‌کند  
                    setIndex(0); // بازگشت به ابتدا برای متن بعدی  
                } else {  
                    setIndex(prevIndex => prevIndex + 1); // افزایش ایندکس برای تایپ حرف بعدی  
                }  
            };  
    
            const timer = setTimeout(type, 300); // تنظیم تایمر برای تایپ بعدی  
            return () => clearTimeout(timer); // پاکسازی تایمر  
        }, [count, index, text]);  
    








    const bgRef = useRef(null); // ایجاد مرجع برای پس‌زمینه  

    useEffect(() => {  
        const handleScroll = () => {  
            if (bgRef.current) {  
                bgRef.current.style.opacity = 1 - window.pageYOffset / 600; // تنظیم شفافیت  
            }  
        };  

        window.addEventListener('scroll', handleScroll); // اضافه کردن شنونده اسکرول  

        return () => {  
            window.removeEventListener('scroll', handleScroll); // حذف شنونده در زمان unmount  
        };  
    }, []); // وابستگی خالی  

    return (   
        <div className="mahv">  
            <div className="header">  
                <div id="bg" ref={bgRef}></div> {/* استفاده از مرجع برای bg */}  
            </div>  
            <section>  
                <div className="containerr">   
                <h1 className="top-layer"> <span>{letter}</span> </h1>
                <p> ساعت‌های آداک سفیر زمان و سبک زندگی شما هستند</p>   
                </div>  
            </section> 

            <Menouicon /> 
         <Profile />
         <But />

         <Videoback />
         <Footer />

        </div>   
    );  
}  

export default Mahvscrool; // صادرات کامپوننت