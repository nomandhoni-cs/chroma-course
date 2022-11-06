import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Button from "../Button/Button";
import "./Course.css";
import { BsCartPlusFill, BsFillCartCheckFill} from "react-icons/bs"

export const Course = (props) => {
  const [addCartBtn, setAddCartBtn] = useState(true);
  const stateChange = () => {
    setAddCartBtn(!addCartBtn);
  };
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
      <div className="single-course">
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
                  <small>Price: </small>
                  <b>${price}</b>
                </p>
              </Col>
              <Col xl={6}>
                <p>
                  <b>{duration}</b>
                </p>
              </Col>
            </Row>
          </div>
          <div className="add-cart-btn text-center">
            {addCartBtn === true ? (
              <Button
                icon ={<BsCartPlusFill />}
                text="Add to Cart"
                onClick={() => {
                  props.addToCart(
                    props.singleCourse,
                    props.singleCourse.in_cart
                  );
                  stateChange();
                }}
              />
            ) : (
              <Button icon={<BsFillCartCheckFill />} text="Added" />
            )}
          </div>
        </div>
      </div>
    </Col>
  );
};
