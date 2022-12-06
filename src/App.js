import "./App.css";
import logo from "./logo.svg";
import fakeData from "./Fakedata/fakeData";
import bannerImage from "./images/topGreenBanner.webp";
import backgroundImg from "./images/commingsoon.webp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Programming from "./components/Programming/Programming";
import Crafts from "./components/Crafts/Crafts";
import Design from "./components/Design/Design";
import { useState } from "react";
import Checkout from "./components/Checkout/Checkout";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import Home from "./components/Home/Home";

function App() {
  const [cart, setCart] = useState([]);
  const [unitPrice, setUnitPrice] = useState(0);

  // Add cart function
  const addToCart = (course, in_cart) => {
    setCart([...cart, course]);
    setUnitPrice(course.price);
    in_cart = !in_cart;
    console.log("Course added ", course, in_cart);
  };

  const giveAlert = () => {
    alert("Comming Soon!");
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <SharedLayout giveAlert={giveAlert} logo={logo} cart={cart} />
            }
          >
            <Route
              index
              element={
                <Home
                  fakeData={fakeData}
                  bannerImage={bannerImage}
                  addToCart={addToCart}
                  cart={cart}
                  unitPrice={unitPrice}
                />
              }
            />
            <Route
              path="checkout"
              element={<Checkout cart={cart} unitPrice={unitPrice} />}
            />
            <Route
              path="programming"
              element={<Programming backgroundImg={backgroundImg} />}
            />
            <Route
              path="crafts"
              element={<Crafts backgroundImg={backgroundImg} />}
            />
            <Route
              path="design"
              element={<Design backgroundImg={backgroundImg} />}
            />
          </Route>
        </Routes>
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
//console.log(`"type": "Crafts",`);
// console.log(`"course_thumbnail": "${isss[i].src}"`);
// }
