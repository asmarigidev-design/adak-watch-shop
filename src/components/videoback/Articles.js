import React from "react";
import './Articles.css';

function Articles () {  
  return (
    <div className="containerr">
      <h3>آموزش‌های آداک</h3> {/* عنوان بخش آموزش‌ها | Section title */}

      {/* دکمه‌های آموزشی در ردیف‌ها | Educational buttons in rows */}
      <div className="row">
        <button className="watch-button">تعمیر ساعت مچی</button>
        <button className="watch-button">تشخیص ساعت اصلی و فیک</button>
      </div>
      <div className="row">
        <button className="watch-button">مراقبت و نگهداری</button>
        <button className="watch-button">تنظیم زمان و تاریخ</button>
      </div>
      <div className="row">
        <button className="watch-button">تاریخچه ساعت‌سازی</button>
        <button className="watch-button">انواع ساعت‌های مچی</button>
      </div>
    </div>
  );
}

export default Articles;
