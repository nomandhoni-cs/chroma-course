import { Col, Container, Row } from "react-bootstrap";
import "./Header.css";
import Button from "../Button/Button.js";
import { Link } from "react-router-dom";
import { BsCartPlusFill } from "react-icons/bs"

export const Header = ({ logo, giveAlert, cart }) => {

  return (
    <>
      <header>
        <div className="header-area">
          <Container>
            <Row className="align-items-center text-center">
              <Col xl={2}>
                <div className="logo">
                  <Link to='/'>
                    <img src={logo} alt="Website logo" />
                  </Link>
                </div>
              </Col>
              <Col xl={6}>
                <div className="main-menu text-center">
                  <nav>
                    <ul>
                      <li>
                        <Link to="/programming">Programming</Link>
                      </li>
                      <li>
                        <Link to="/crafts">Crafts</Link>
                      </li>
                      <li>
                        <Link to="/design">Design</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </Col>
              <Col xl={1}>
                <Link to='/checkout' className="btn"><BsCartPlusFill /> <p className="cart-count">{cart.length}</p></Link>
              </Col>
              <Col xl={3}>
                <div className="login-btn">
                  <Button
                    text={"Log In"}
                    onClick={giveAlert}
                    // link={""}
                    styleClass={"normalBtn"}
                    />
                  <Button
                    onClick={giveAlert}
                    text={"Sign Up"}
                    // link={""}
                    styleClass={"filledBtn"}
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </header>
    </>
  );
};
