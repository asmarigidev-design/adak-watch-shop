import React from "react";  
import "./ProfileCard.css";   
import image1 from './img/11.jfif';  
import image2 from './img/12.jfif';  
import image3 from './img/13.jfif';  
import image4 from './img/14.jfif';  
import { Link } from "react-router-dom";  


// داده‌های مربوط به برندها | Brand profile data
const data = [  
  { name: "Swiss", city: "Rolex", followers: "محصولات", datals:'رولکس یکی از معروف‌ترین و لوکس‌ترین برندهای ساعت در جهان است...', img: image1 },  
  { name: "Japan", city: "Cacio", followers: "محصولات", datals:'کاسیو برند ژاپنی است...', img: image2 },  
  { name: "Japan", city: "Seiko", followers: "محصولات", datals:'سایکو یک برند ژاپنی دیگر است...', img: image3 },  
  { name: "Swiss", city: "Omega", followers: "محصولات", datals:'اُمگا از معروف‌ترین برندهای ساعت سوئیسی است...', img: image4 }  
];  

function Profile() {  
  return (   
    <div className="background">  
      <div className="bg-pattern-top"></div>  
      <div className="bg-pattern-bottom"></div>  

      {/* نمایش کارت هر برند | Render each brand card */}
      {data.map((profile, index) => (  
        <div className="card-container" key={index}>  
          <header>  
            <img className="imgg" src={profile.img} alt={profile.name} /> {/* تصویر برند | Brand image */}
          </header>  
          <h1 className="bold-text">
            {profile.name} <span className="normal-text">{profile.age}</span> {/* نام کشور | Country name */}
          </h1>  
          <h2 className="normal-text">{profile.city}</h2> {/* نام برند | Brand name */}

          <div className="social-container">  
            <div className="followers">
              {/* لینک به صفحه برند | Link to brand page */}
              <Link to={`/${profile.city.toLowerCase()}`}>  
                <h1 className="bold-text">{profile.followers}</h1> {/* عنوان بخش | Section title */}
                <h2 className="text">{profile.datals}</h2> {/* توضیحات برند | Brand description */}
              </Link>  
            </div>  
          </div>  
        </div>  
      ))}  
    </div>  
  );  
}  


export default Profile;
