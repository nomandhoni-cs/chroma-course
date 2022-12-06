import { Row, Col } from "react-bootstrap";
import { Course } from "../Course/Course";
import "./Courses.css";

function Courses({ courseList, addToCart, unitPrice, cart }) {
  return (
    <div className="container">
      <Row>
        <Col xl={12}>
          <div className="country-container">
            <Row>
              {
                courseList.map((singleCourse) =>
                <Course singleCourse={singleCourse} addToCart={addToCart} key={singleCourse.id}/>)
              }
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Courses;
