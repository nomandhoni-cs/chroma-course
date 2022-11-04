import React from 'react'
// import { BsStarFill, BsGithub } from "react-icons/bs";
import { Col, Container, Row } from 'react-bootstrap'
import './Footer.css'
export const Footer = () => {
    const thisYear = new Date();
  return (
    <footer>
        <Container>
            <Row className='text-center'>
                <Col xl={4}>
                    <ul>
                        <li><a href="">Facebook</a></li>
                        <li><a href="">Twitter</a></li>
                        <li><a href="">LinkedIn</a></li>
                    </ul>
                </Col>
                <Col xl={4}>
                    <ul>
                        <li><a href="">Facebook</a></li>
                        <li><a href="">Twitter</a></li>
                        <li><a href="">LinkedIn</a></li>
                    </ul>
                </Col>
                <Col xl={4}>
                    <ul>
                        <li><a href="">Facebook</a></li>
                        <li><a href="">Twitter</a></li>
                        <li><a href="">LinkedIn</a></li>
                    </ul>
                </Col>
            </Row>
            <div className='text-center'>
            {/* <h5>If you like my project give it a <BsStarFill /> on <BsGithub /></h5> */}
        </div>
        </Container>
        <section className='copyright text-center'><h4>Copyright {thisYear.getYear() + 1900}</h4></section>
    </footer>
  )
}
