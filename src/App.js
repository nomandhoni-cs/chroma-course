import "./App.css";
import { Body } from "./components/Body/Body";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

import logo from "./logo.svg";
import fakeData from "./Fakedata/fakeData";
import bannerImage from "./images/topGreenBanner.webp";
import backgroundImg from "./images/commingsoon.webp"
import Courses from "./components/Courses/Courses";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Programming from "./components/Programming/Programming";
import Crafts from "./components/Crafts/Crafts";
import Design from "./components/Design/Design";
import { useState } from "react";
import Checkout from "./components/Checkout/Checkout";
import WhyUs from "./components/WhyUs/WhyUs";
import Faq from "./components/Faq/Faq";

function App() {
  const [cart, setCart] = useState([]);
  const [unitPrice, setUnitPrice] = useState(0);

  // Add cart function
  const addToCart = (course, in_cart) => {
    setCart([...cart, course]);
    setUnitPrice(course.price)
    in_cart = !in_cart;
    console.log("Course added ", course, in_cart);
  };

  const giveAlert = () => {
    alert('Comming Soon!');
  }
  return (
    <>
      <BrowserRouter>
      <Header giveAlert = {giveAlert}logo={logo} cart={cart}/>
        <Routes>
          <Route
            exact
            path="/"
            element={[
              <Body courseList={fakeData} halfBanner={bannerImage} />,
              <WhyUs />,
              <Courses addToCart={addToCart} cart={cart} unitPrice={unitPrice} courseList={fakeData} />,
              <Faq />
            ]}
          />
          <Route path="checkout" element={<Checkout cart={cart} unitPrice={unitPrice}/>} />
          <Route path="programming" element={<Programming backgroundImg={backgroundImg}/>} />
          <Route path="crafts" element={<Crafts backgroundImg={backgroundImg}/>} />
          <Route path="design" element={<Design backgroundImg={backgroundImg}/>} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

//! Scraped data code from skill share

// var time = document.querySelectorAll('.ss-class__stats__duration');
// var isss = document.querySelectorAll('.thumbnail-img');
// var title = document.querySelectorAll('.ss-card__title');
// for(let i = 0; i < isss.length; i++){
// console.log(`"length": "${time[i].innerText}",`)
// console.log(`"title": "${title[i].innerText}",`);
// console.log(`"course_thumbnail": "${isss[i].src}"`);
// }
