import React from "react";
import { Col, Row } from "react-bootstrap";
import Button from "../Button/Button";
import "./Course.css";

export const Course = (props) => {
  const {
    duration,
    price,
    instructor_photo,
    title,
    instructor,
    course_thumbnail,
  } = props.singleCourse;
  return (
    <Col xl={4}>
      <div className="single-course" >
        <img src={course_thumbnail} alt={title} />
        <div className="course-description">
          <h5>{title}</h5>
          <div className="instructor-info align-items-center">
            <div className="instructor-photo">
              <img src={instructor_photo} alt={instructor} />
            </div>
            <div className="instructor-name">
              <p>{instructor}</p>
            </div>
          </div>
          <div className="price-duration">
            <Row>
              <Col xl={6}>
                <p>
                  <small>Price: </small>${price}
                </p>
              </Col>
              <Col xl={6}>
                <p>
                  <small>Duration: </small>
                  {duration}
                </p>
              </Col>
            </Row>
          </div>
        </div>
        <Button text='Add to Cart' styleClass='btn-warning' onClick={() => props.addToCart(props.singleCourse)} />
      </div>
    </Col>
  );
};
