import "./App.css";
import { Body } from "./components/Body/Body";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

import logo from "./logo.svg";
import fakeData from "./Fakedata/fakeData";
import bannerImage from "./images/topGreenBanner.webp";
import Courses from "./components/Courses/Courses";
import Service from "./components/Service/Service";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Programming from "./components/Programming/Programming";
import Crafts from "./components/Crafts/Crafts";
import Design from "./components/Design/Design";

function App() {
  return (
    <div className="App">
      <Header logo={logo} />
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={[
              <Body courseList={fakeData} halfBanner={bannerImage} />,
              <Service />,
              <Courses courseList={fakeData} />,
            ]}
          />
          <Route path="/programming" element={<Programming />} />
          <Route path="/crafts" element={<Crafts />} />
          <Route path="/design" element={<Design />} />
        </Routes>
      </Router>
      <Footer />
    </div>
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
