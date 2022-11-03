import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Header.css";
import Button from '../Button/Button.js'

export const Header = ({ logo }) => {
  return (
    <>
      <header>
        <div className="header-area">
          <Container>
            <Row className='align-items-center'>
              <Col xl={2}>
                <ul>
                  <div className="logo">
                    <a href="/">
                      <img src={logo} alt="Website logo" />
                    </a>
                  </div>
                </ul>
              </Col>
              <Col xl={8}>
                <div className="main-menu text-center">
                  <nav>
                    <ul>
                      <li>
                        <a href="/programming">Programming</a>
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
              <Col xl={2}>
                <div className="login-btn">
                <Button text={"Log In"} link={"/login"} styleClass={'normalBtn'}/>
                </div>
              </Col>
            <hr />
            </Row>
          </Container>
        </div>
      </header>
    </>
  );
};
