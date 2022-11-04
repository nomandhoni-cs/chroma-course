import React from "react";
import { Row, Col } from "react-bootstrap";
import { Course } from "../Course/Course";
import './Courses.css'

function Courses({ courseList }) {
  return (
    <div className="container">
        <Row>
            <Col xl={10}>
            <div className="country-container">
            <Row>
            {courseList.map(singleCourse => {
                // console.log(singleCourse.id)
                return (<Course
                id={singleCourse.id}
                title={singleCourse.title}
                price={singleCourse.price}
                instructor_photo={singleCourse.instructor_photo}
                instructor={singleCourse.instructor}
                course_thumbnail={singleCourse.course_thumbnail}
                duration={singleCourse.duration}
                />)
                })}
            </Row>
            </div>
            </Col>
            <Col xl={2} className='text-center'>
                <h3>Your Cart</h3>
            </Col>
        </Row>
    </div>
  );
}

export default Courses;
