import { NavLink, Link } from "react-router-dom";
import { BsCartPlusFill } from "react-icons/bs";
import { useTheme } from "../ThemeToggle";
import Button from "../Button/Button";

const Header = ({ logo, cart, user, handleSignOut }) => {
  const { isDarkMode, toggleDarkMode } = useTheme();
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

  const logoutAndAvatar = (
    <>
      <img className="avatar" src={user.photo} alt={user.name} />
      <button className="btn filledBtn" onClick={handleSignOut}>
        Sign Out
      </button>
    </>
  );

  return (
    <header className=" bg-white dark:bg-dark-secondary">
      <div className="header-area my-2">
        <nav className="">
          <div className="container mx-auto flex items-center justify-between p-4 rounded-lg bg-light-tertiary dark:bg-dark-tertiary ">
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="Chroma Course Website logo" />
              </Link>
            </div>
            <Button
              text={isDarkMode ? "Light" : "Dark"}
              onClick={toggleDarkMode}
            />
            <div className="main-menu hidden md:flex space-x-4">
              <NavLink
                to="/programming"
                activeClassName="text-primary"
                className="font-body text-black dark:text-white "
              >
                Programming
              </NavLink>
              <NavLink
                to="/design"
                activeClassName="text-primary"
                className="font-body text-black dark:text-white "
              >
                Design
              </NavLink>
              <NavLink
                to="/crafts"
                activeClassName="text-primary"
                className="font-body text-black dark:text-white "
              >
                Crafts
              </NavLink>
            </div>
            <div className="navbar-brand">
              <Link to="/checkout" className="btn">
                <BsCartPlusFill /> <p className="cart-count">{cart.length}</p>
              </Link>
            </div>
            <div className="main-menu hidden md:flex space-x-4">
              {user.isSignedIn ? logoutAndAvatar : loginSignup}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
