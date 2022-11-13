import { Container } from "react-bootstrap";
import "./Header.css";
import Button from "../Button/Button.js";
import { Link } from "react-router-dom";
import { BsCartPlusFill } from "react-icons/bs";
import Navbar from "react-bootstrap/Navbar";

export const Header = ({ logo, giveAlert, cart }) => {
  return (
    <>
      <header>
        <div className="header-area">
          <Navbar bg="light" expand="lg">
            <Container className="text-center">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <div className="logo navbar-brand">
                <Link to="/">
                  <img src={logo} alt="Website logo" />
                </Link>
              </div>
              <Navbar.Collapse
                id="basic-navbar-nav"
                className="main-menu text-center me-auto navbar-nav"
              >
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
              </Navbar.Collapse>
              <div className="navbar-brand">
                <Link to="/checkout" className="btn">
                  <BsCartPlusFill /> <p className="cart-count">{cart.length}</p>
                </Link>
              </div>
              <Navbar.Collapse
                id="basic-navbar-nav"
                className="main-menu me-auto navbar-nav login-btn f-right"
              >
                <Button
                  text={"Log In"}
                  onClick={giveAlert}
                  styleClass={"normalBtn"}
                />
                <Button
                  onClick={giveAlert}
                  text={"Sign Up"}
                  styleClass={"filledBtn"}
                />
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </header>
    </>
  );
};
