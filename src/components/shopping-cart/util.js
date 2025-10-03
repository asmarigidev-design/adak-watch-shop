// در util.js

// تابع قالب‌بندی قیمت | Price formatting function
const formatCurrency = (amount) => {  
     if (amount === undefined || amount === null) {  
         return "قیمت موجود نیست"; // مقدار پیش‌فرض در صورت نبود قیمت | Default message if price is missing
     }  
     return amount.toFixed() + " تومان"; // نمایش قیمت به صورت عدد صحیح همراه با واحد | Show price as integer with currency
};  
 
export default formatCurrency; // خروجی گرفتن تابع برای استفاده در سایر فایل‌ها | Export function for reuse
