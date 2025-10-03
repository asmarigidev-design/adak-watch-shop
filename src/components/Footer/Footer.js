
import React from 'react'; 
import './Footer.css'; // ایمپورت فایل CSS برای استایل‌دهی فوتر // Importing CSS file for footer styling
import { FaTelegramPlane, FaWhatsapp, FaInstagram, FaYoutube } from 'react-icons/fa'; // ایمپورت آیکون‌های شبکه اجتماعی از کتابخانه react-icons // Importing social media icons from react-icons

const Footer = () => { // تعریف کامپوننت فوتر // Defining the Footer component
    return (
        <footer className="footer"> {/* عنصر اصلی فوتر سایت // Main footer element */}
            <div className="footer-container"> {/* کانتینر اصلی برای چیدمان بخش‌ها // Main container for layout */}
                <div className="footer-left"> {/* بخش معرفی فروشگاه // Store introduction section */}
                    <h2> فروشگاه ساعت آداک </h2> {/* عنوان فروشگاه // Store title */}
                    <h2>ساعت‌های لوکس و با کیفیت را با بهترین قیمت‌ها خریداری کنید.</h2> {/* توضیح کوتاه درباره فروشگاه // Short store description */}
                </div>
                <div className="footer-middle"> {/* بخش لینک‌های مفید // Useful links section */}
                    <ul>
                        <li><a href="/">درباره ما</a></li> {/* لینک درباره ما // About Us link */}
                        <li><a href="/"> پشتیبانی</a></li> {/* لینک پشتیبانی // Support link */}
                        <li><a href="/">آموزش ها </a></li> {/* لینک آموزش‌ها // Tutorials link */}
                    </ul>
                </div>
                <div className="footer-right"> {/* بخش آیکون‌های شبکه اجتماعی // Social media icons section */}
                    <div className="social-icons">
                        <a href="/"><FaInstagram /><i className="fab fa-facebook-f"></i></a> {/* آیکون اینستاگرام و فیسبوک // Instagram and Facebook icons */}
                        <a href="/"><FaTelegramPlane /><i className="fab fa-instagram"></i></a> {/* آیکون تلگرام و اینستاگرام // Telegram and Instagram icons */}
                        <a href="/"><FaWhatsapp /><i className="fab fa-twitter"></i></a> {/* آیکون واتساپ و توییتر // WhatsApp and Twitter icons */}
                        <a href="/"><FaYoutube /><i className="fab fa-youtube"></i></a> {/* آیکون یوتیوب // YouTube icon */}
                    </div>
                </div>
            </div>
            <div className="footer-bottom"> {/* بخش پایینی فوتر (فعلاً خالی) // Bottom footer section (currently empty) */}
            </div>
        </footer>
    );
};

export default Footer;
