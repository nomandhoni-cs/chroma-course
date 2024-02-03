import { Container } from "react-bootstrap";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import { BsCartPlusFill } from "react-icons/bs";
import Navbar from "react-bootstrap/Navbar";

export const Header = ({
  logo,
  cart,
  user,
  loginSignupHandler,
  handleSignOut,
}) => {
  // Login and Signup button
  const loginSignup = (
    <>
      <NavLink to="/login" className="btn normalBtn">
        Login
      </NavLink>
      <NavLink to="/signup" className="btn filledBtn">
        Sign Up
      </NavLink>
    </>
  );
  // Logout button and avatar
  const logoutAndAvatar = (
    <>
      <img className="avatar" src={user.photo} alt={user.name} />
      <NavLink className="btn filledBtn" onClick={handleSignOut}>
        Sign Out
      </NavLink>
    </>
  );
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
                    <NavLink
                      to="/programming"
                      style={({ isActive }) => {
                        return { color: isActive ? "#FE4C55" : "" };
                      }}
                    >
                      Programming
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/design"
                      style={({ isActive }) => {
                        return { color: isActive ? "#FE4C55" : "" };
                      }}
                    >
                      Design
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/crafts"
                      style={({ isActive }) => {
                        return { color: isActive ? "#FE4C55" : "" };
                      }}
                    >
                      Crafts
                    </NavLink>
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
                {user.isSignedIn ? logoutAndAvatar : loginSignup}
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </header>
    </>
  );
};
