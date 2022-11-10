import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Header.css";
import Button from '../Button/Button.js'
// import { Link } from "react-router-dom";

export const Header = ({ logo }) => {
  return (
    <>
      <header>
        <div className="header-area">
          <Container>
            <Row className='align-items-center text-center'>
              <Col xl={2}>
                  <div className="logo">
                    <a href="/">
                      <img src={logo} alt="Website logo" />
                    </a>
                  </div>
              </Col>
              <Col xl={7}>
                <div className="main-menu text-center">
                  <nav>
                    <ul>
                      <li>
                        <a href="/programming">Programming</a>
                        {/* <Link to="/programming">Programming</Link> */}
                      </li>
                      <li>
                        <a href="/crafts">Crafts</a>
                      </li>
                      <li>
                        <a href="/design">Design</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </Col>
              <Col xl={3}>
                <div className="login-btn">
                <Button text={"Log In"} link={"/login"} styleClass={'normalBtn'}/>
                <Button text={"Sign Up"} link={"/signup"} styleClass={'filledBtn'}/>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </header>
    </>
  );
};
