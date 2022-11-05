import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Cart } from "../Cart/Cart";
import { Course } from "../Course/Course";
import "./Courses.css";

function Courses({ courseList }) {
  const [cart, setCart] = useState([]);
  // Add cart function
  const addToCart = (course, in_cart) => {
    // const newCart = 
    setCart([...cart, course]);
    in_cart = !in_cart;

    console.log("Course added ", course, in_cart);
  };
  return (
    <div className="container">
      <Row>
        <Col xl={10}>
          <div className="country-container">
            <Row>
              {
                courseList.map((singleCourse) =>
                  <Course singleCourse={singleCourse} addToCart={addToCart} key={singleCourse.id}/>)
                // console.log(singleCourse.id)
              }
            </Row>
          </div>
        </Col>
        <Col xl={2} className="text-center">
          <Cart cart={cart} />
        </Col>
      </Row>
    </div>
  );
}

export default Courses;
