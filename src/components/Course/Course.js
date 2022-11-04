import React from "react";
import { Col } from "react-bootstrap";
import "./Course.css";

export const Course = ({
  id,
  duration,
  price,
  instructor_photo,
  title,
  instructor,
  course_thumbnail,
}) => {
  return (
    <Col xl={4}>
      <div className='single-course' key={id}>
        <img src={course_thumbnail} alt={title} />
        <div className="course-description">
        <h6>{title}</h6>
        </div>
      </div>
    </Col>
  );
};
