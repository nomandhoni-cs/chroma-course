import { useState } from "react";
import { HiTrash } from "react-icons/hi";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log("Subscribed with email:", email);
    setEmail("");
  };

  const quickLinks = ["Home", "About Us", "Services", "Contact"];
  const socialLinks = ["Link 1", "Link 2", "Link 3", "Link 4"];

  return (
    <footer className="bg-light-primary dark:bg-dark-primary text-gray-200">
      <div className="container mx-auto py-8 px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Newsletter Section */}
          <div className="col-span-2 lg:col-span-1">
            <h2 className="text-xl mb-4 dark:text-gray-950">
              Subscribe to our Newsletter
            </h2>
            <form onSubmit={handleSubscribe} className="flex">
              <input
                type="email"
                className="w-full rounded-l-md px-4 py-2 bg-gray-800 focus:outline-none focus:ring focus:ring-gray-500"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                className="bg-gray-800 rounded-r-md px-4 py-2 font-semibold hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-500"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Navigation Links */}
          <div className="col-span-2 lg:col-span-1">
            <h2 className="text-xl mb-4 dark:text-black font-heading">
              Quick Links
            </h2>
            <ul className="flex flex-col space-y-2">
              {quickLinks.map((link) => (
                <li
                  key={link}
                  className="flex items-center space-x-2 dark:text-dark-secondary font-body"
                >
                  <HiTrash />
                  <NavLink to={`/${link.toLowerCase()}`}>{link}</NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="col-span-2 lg:col-span-1">
            <h2 className="text-xl mb-4 dark:text-black font-heading">
              Contact Us
            </h2>
            <p className="dark:text-dark-secondary font-body">
              123 Main Street
            </p>
            <p className="dark:text-dark-secondary font-body">
              City, State ZIP
            </p>
            <p className="dark:text-dark-secondary font-body">
              info@example.com
            </p>
            <p className="dark:text-dark-secondary font-body">(123) 456-7890</p>
          </div>

          {/* Social Media Links */}
          <div className="col-span-2 lg:col-span-1 flex flex-col">
            <h2 className="text-xl mb-4 dark:text-black font-heading">
              Connect with Us
            </h2>
            <div className="flex flex-col space-y-2">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex items-center font-body space-x-2 text-gray-200 hover:text-white dark:text-dark-secondary"
                >
                  <HiTrash />
                  <span>{link}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
