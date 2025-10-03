import React, { useEffect, useState, useCallback } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';  
import Cacio from './components/products/Cacio';  
import Seiko from './components/products/Seiko';  
import Omega from './components/products/Omega';  
import Profile from './components/profilecard/Profile';  
import Rolex from './components/products/Rolex';  
import Menouicon from "./components/menouicon/Menouicon";   
import Videoback from "./components/videoback/Videoback";   
import Home from './components/Home/Home';  
import { CartProvider } from './components/shopping-cart/CartContext';
import Footer from './components/Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

  
function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
const [, setSticky] = useState(false);

  const handleScroll = useCallback(() => {
    const mahvscroolElement = document.getElementById("mahvscrool");  
    if (mahvscroolElement) {  
      const rect = mahvscroolElement.getBoundingClientRect();  
      setSticky(rect.bottom <= window.innerHeight);  
    }  
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (  
    <CartProvider> {/* فراهم کردن context برای کل اپلیکیشن | Provide cart context to entire app */}
      <BrowserRouter> {/* فعال‌سازی مسیرهای SPA | Enable single-page routing */}
        <Routes>
          {/* مسیرهای مختلف اپلیکیشن | Application routes */}
          <Route path="/" element={<Home />} />  
          <Route path="/profile" element={<Profile />} />  
          <Route path="/cacio" element={<Cacio />} />  
          <Route path="/seiko" element={<Seiko />} />  
          <Route path="/omega" element={<Omega />} />  
          <Route path="/rolex" element={<Rolex />} />  
          <Route path="/menouicon" element={<Menouicon />} />  
          <Route path="/videoback" element={<Videoback />} />  
          <Route path="/footer" element={<Footer />} />  
        </Routes>  
      </BrowserRouter>  
    </CartProvider>  
  );  
}  


export default App;