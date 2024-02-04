import React from "react";
import {
  BsStarFill,
  BsGithub,
  BsInfoSquareFill,
  BsFileLockFill,
  BsBriefcaseFill,
} from "react-icons/bs";
import {
  FaScroll,
  FaGithubSquare,
  FaTwitterSquare,
  FaLinkedin,
} from "react-icons/fa";
import { GiCrafting } from "react-icons/gi";
import { AiOutlineFileDone } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const footerItems = [
  [
    { icon: <BsInfoSquareFill />, text: "About", to: "/about" },
    { icon: <BsFileLockFill />, text: "Privacy", to: "/privacy" },
    { icon: <FaScroll />, text: "Sitemap", to: "/sitemap" },
  ],
  [
    { icon: <AiOutlineFileDone />, text: "Terms and Policies", to: "/terms" },
    { icon: <GiCrafting />, text: "Make Course", to: "/make-course" },
    { icon: <BsBriefcaseFill />, text: "Career", to: "/career" },
  ],
  [
    {
      icon: <FaGithubSquare />,
      text: "GitHub",
      to: "https://github.com/nomandhoni-cs/chroma-course",
    },
    {
      icon: <FaTwitterSquare />,
      text: "Twitter",
      to: "https://twitter.com/nomandhoni",
    },
    {
      icon: <FaLinkedin />,
      text: "LinkedIn",
      to: "https://linkedin.com/in/nomandhoni",
    },
  ],
];

const Footer = () => {
  const thisYear = new Date();

  return (
    <footer className="bg-light-secondary dark:bg-dark-secondary">
      <div className="mx-auto container py-10 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 items-center justify-items-center bg-light-tertiary dark:bg-dark-tertiary rounded-lg">
        {footerItems.map((column, columnIndex) => (
          <div key={columnIndex} className="col-span-1 xl:col-span-1">
            <ul className="flex flex-col items-center space-y-2">
              {column.map((item, index) => (
                <li key={index}>
                  {item.to ? (
                    <a
                      href={item.to}
                      target={item.to.startsWith("http") ? "_blank" : ""}
                      rel="noreferrer"
                      className="footer-link font-body inline-flex items-center space-x-2 text-black dark:text-white"
                    >
                      {item.icon} <span className="ml-2">{item.text}</span>
                    </a>
                  ) : (
                    <NavLink
                      to={item.to}
                      className="footer-link inline-flex items-center space-x-2"
                      activeClassName="text-red-500"
                    >
                      {item.icon} <span className="ml-2">{item.text}</span>
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
        <h5 className="inline font-semibold text-lg font-heading text-gray-600 dark:text-dark-primary">
          If you like my project give a <BsStarFill className="inline" /> on{" "}
          <a
            href="https://github.com/nomandhoni-cs/chroma-course"
            target="_blank"
            rel="noreferrer"
            className="text-black dark:text-white inline"
          >
            <BsGithub className="inline" />
          </a>
        </h5>
      </div>
      <section className=" text-black font-body dark:text-white text-center mt-4">
        <h4>Chroma Course - Copyright &#169; {thisYear.getFullYear()}</h4>
      </section>
    </footer>
  );
};

export default Footer;
