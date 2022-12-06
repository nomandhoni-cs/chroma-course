import "./App.css";
import logo from "./logo.svg";
import fakeData from "./Fakedata/fakeData";
import bannerImage from "./images/topGreenBanner.webp";
import backgroundImg from "./images/commingsoon.webp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Checkout from "./components/Checkout/Checkout";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import Home from "./components/Home/Home";
import CatagoryWiseProduct from "./components/CatagoryWiseProduct/CatagoryWiseProduct";
import ComingSoonPage from "./components/ComingSoonPage.js/ComingSoonPage";

function App() {
  const [cart, setCart] = useState([]);
  const [unitPrice, setUnitPrice] = useState(0);

  // Add cart function
  const addToCart = (course, in_cart) => {
    //Check if the course is already in the cart
    const ifCourseExist = cart.find((singleCourse) => singleCourse.id === course.id);
    if(ifCourseExist){
      alert("Course already added to cart");
    }else{
    const currentProductId = course.id;
    // Add in_cart property to the course object
    fakeData.find((singleCourse) => singleCourse.id === currentProductId).in_cart = true;
    setCart([...cart, course]);
    setUnitPrice(course.price);
    in_cart = !in_cart;
    // console.log("Course", ifCourseExist, fakeData)
    console.log("Course added ", course, in_cart);
    }
  };

  const giveAlert = () => {
    alert("Coming Soon!");
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
              element={<CatagoryWiseProduct fakeData={fakeData} type={"programming"} addToCart={addToCart}
              cart={cart}
              unitPrice={unitPrice}/>}
            />
              <Route
                path="design"
                element={<CatagoryWiseProduct fakeData={fakeData} type={"design"} addToCart={addToCart}
                cart={cart}
                unitPrice={unitPrice}/>}
              />
            <Route
              path="crafts"
              element={<ComingSoonPage backgroundImg={backgroundImg} pageName={"Crafts"}/>}
            />
            <Route
              path="about"
              element={<ComingSoonPage backgroundImg={backgroundImg} pageName={"About Us"}/>}
            />
            <Route
              path="privacy"
              element={<ComingSoonPage backgroundImg={backgroundImg} pageName={"Privacy"}/>}
            />
            <Route
              path="sitemap"
              element={<ComingSoonPage backgroundImg={backgroundImg} pageName={"Sitemap"}/>}
            />
            <Route
              path="terms"
              element={<ComingSoonPage backgroundImg={backgroundImg} pageName={"Terms and Policies"}/>}
            />
            <Route
              path="make-course"
              element={<ComingSoonPage backgroundImg={backgroundImg} pageName={"Make Course"}/>}
            />
            <Route
              path="career"
              element={<ComingSoonPage backgroundImg={backgroundImg} pageName={"Career"}/>}
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
