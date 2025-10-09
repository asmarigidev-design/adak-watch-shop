import React from "react";  
import './Videoback.css';  
import videoSource from './22.mp4'; // ایمپورت ویدیو به‌صورت درست | Correct video import
import Textt from "./Textt.js"; // کامپوننت تاریخچه ساعت | Watch history component
import Text from "./Text.js"; // کامپوننت برندهای محبوب | Popular brands component

function Videoback() {  
  return (
    <div className="vid"> {/* کانتینر اصلی صفحه ویدیو | Main container for video section */}

      <Text /> {/* نمایش برندهای محبوب | Render popular watch brands */}

      <div className="video-container"> {/* بخش ویدیو پس‌زمینه | Background video section */}
        <video className="background-video" autoPlay loop muted playsInline>
          <source src={videoSource} type="video/mp4" /> {/* استفاده از متغیر وارد شده | Use imported video source */}
          مرورگر شما از پخش ویدیو پشتیبانی نمی‌کند. {/* پیام جایگزین در صورت عدم پشتیبانی | Fallback message if video unsupported */}
        </video>

        <div className="overlay"> {/* لایه متنی روی ویدیو | Text overlay on video */}
          <h1>تخفیفات ویژه سال نو</h1> {/* عنوان تبلیغاتی | Promotional headline */}
          <p>در ایام سال نو خرید کنید و از تخفیفات ویژه بهره‌مند شوید!</p> {/* متن تبلیغاتی | Promotional message */}
        </div>
      </div>

      <Textt /> {/* نمایش تاریخچه ساعت مچی | Render watch history content */}

    </div>
  );
}  


export default Videoback;
