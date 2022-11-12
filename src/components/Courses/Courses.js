import { Row, Col } from "react-bootstrap";
import { Cart } from "../Cart/Cart";
import { Course } from "../Course/Course";
import "./Courses.css";

function Courses({ courseList, addToCart, unitPrice, cart }) {
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
          <Cart cart={cart} unitPrice={unitPrice}/>
        </Col>
      </Row>
    </div>
  );
}

export default Courses;
