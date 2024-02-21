import { Fragment, useState } from "react";
// import { Dialog, Popover } from "@headlessui/react";
import { HiOutlineX, HiOutlineMenu, HiShoppingCart } from "react-icons/hi";
import { NavLink, Link } from "react-router-dom";
import Button from "../Button/Button";
import { useTheme } from "../ThemeToggle";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { HiSun, HiMoon } from "react-icons/hi2";
const navLinks = [
  { to: "/programming", text: "Programming", current: false },
  { to: "/design", text: "Design", current: false },
  { to: "/crafts", text: "Crafts", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Header = ({ logo, cart, user, handleSignOut }) => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  const loginSignup = (
    <div className="flex space-x-4">
      <NavLink to="/login">
        <Button text={"Log in"} />
      </NavLink>
      <NavLink to="/signup">
        <Button text={"Sign Up"} />
      </NavLink>
    </div>
  );

  return (
    <Disclosure as="nav" className="bg-light-primary dark:bg-dark-primary">
      {({ open }) => (
        <>
          <div className="container px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <HiOutlineX className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <HiOutlineMenu
                      className="block h-6 w-6"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link to="/">
                    <img
                      className="h-8 w-auto"
                      src={logo}
                      alt="Chroma Course"
                    />
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navLinks.map((item) => (
                      <NavLink
                        key={item.to}
                        to={item.to}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-black hover:bg-light-tertiary hover:text-black dark:hover:bg-dark-tertiary dark:hover:text-white ",
                          "rounded-md px-3 py-2 text-sm font-body font-semibold"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.text}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex space-x-4 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  className="hidden sm:block border-2 border-light-tertiary dark:border-dark-tertiary p-2 rounded-lg"
                  onClick={toggleDarkMode}
                >
                  {isDarkMode ? (
                    <HiMoon className="h-6 w-6" />
                  ) : (
                    <HiSun className="h-6 w-6 text-white" />
                  )}
                  <span className="sr-only">Change Theme</span>
                </button>

                <Link
                  to="/checkout"
                  className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 flex-row-reverse"
                >
                  <span className="sr-only">View Cart</span>
                  <div className="relative">
                    <HiShoppingCart className="h-6 w-6" aria-hidden="true" />
                    <span className="absolute left-3 bottom-3 inline-flex items-center justify-center px-2 py-1 text-xs font-bold text-black dark:text-white bg-white dark:bg-red-500 rounded-full">
                      {cart.length}
                    </span>
                  </div>
                </Link>

                {/* Profile dropdown */}
                <Menu as="div" className="invisible sm:visible relative ml-3">
                  <div>
                    {user.isSignedIn ? (
                      <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src={user.photo}
                          alt={user.name}
                        />
                      </Menu.Button>
                    ) : (
                      loginSignup
                    )}
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            onClick={handleSignOut}
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navLinks.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-black hover:bg-light-tertiary hover:text-black dark:hover:bg-dark-tertiary dark:hover:text-white ",
                    "block rounded-md px-3 py-2 text-base font-body font-semibold"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.text}
                </NavLink>
              ))}
            </div>
            <div className="space-y-1 px-2 pb-3 pt-2">
              <button onClick={toggleDarkMode}>
                <span className="font-body font-semibold inline-flex items-center space-x-2">
                  {isDarkMode ? (
                    <HiMoon className="mx-3" />
                  ) : (
                    <HiSun className="mx-3" />
                  )}{" "}
                  Change Theme
                </span>
              </button>
            </div>
            <div className="space-y-1 px-2 pb-3 pt-2">
              <Menu as="div">
                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        onClick={handleSignOut}
                        className={classNames(
                          active ? "bg-gray-100" : "",
                          "block px-4 py-2 text-sm text-gray-700"
                        )}
                      >
                        Sign out
                      </a>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Menu>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

// import { BsCartPlusFill } from "react-icons/bs";

// const Header1 = ({ logo, cart, user, handleSignOut }) => {
//   const loginSignup = (
//     <>
//       <NavLink to="/login" className="btn normalBtn">
//         Login
//       </NavLink>
//       <NavLink to="/signup" className="btn filledBtn">
//         Sign Up
//       </NavLink>
//     </>
//   );

//   const logoutAndAvatar = (
//     <>
//       <img className="avatar" src={user.photo} alt={user.name} />
//       <button className="btn filledBtn" onClick={handleSignOut}>
//         Sign Out
//       </button>
//     </>
//   );

//   return (
//     <header className=" bg-white dark:bg-dark-secondary">
//       <div className="header-area my-2">
//         <nav className="">
//           <div className="container mx-auto flex items-center justify-between p-4 rounded-lg bg-light-tertiary dark:bg-dark-tertiary ">
//             <div className="logo">
//               <Link to="/">
//                 <img src={logo} alt="Chroma Course Website logo" />
//               </Link>
//             </div>
//             <div className="main-menu hidden md:flex space-x-4">
//               <NavLink
//                 to="/programming"
//                 activeClassName="text-primary"
//                 className="font-body text-black dark:text-white "
//               >
//                 Programming
//               </NavLink>
//               <NavLink
//                 to="/design"
//                 activeClassName="text-primary"
//                 className="font-body text-black dark:text-white "
//               >
//                 Design
//               </NavLink>
//               <NavLink
//                 to="/crafts"
//                 activeClassName="text-primary"
//                 className="font-body text-black dark:text-white "
//               >
//                 Crafts
//               </NavLink>
//             </div>
//             <div className="navbar-brand">
//               <Link to="/checkout" className="btn">
//                 <BsCartPlusFill /> <p className="cart-count">{cart.length}</p>
//               </Link>
//             </div>
//             <div className="main-menu hidden md:flex space-x-4">
//               {user.isSignedIn ? logoutAndAvatar : loginSignup}
//             </div>
//           </div>
//         </nav>
//       </div>
//     </header>
//   );
// };

export default Header;
