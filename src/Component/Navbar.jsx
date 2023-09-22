import React, { useState } from "react";
import { Link } from "react-scroll";
import darkMd from "./../assets/images/night-mode.png";
import "./Navbar.css";

const Navbar = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="">
        <div className="mx-5 md:px-20 lg:px-30 ">
          <nav className="">
            <div className="flex items-center">
              <h1 className="text-3xl font-bold font-serif">KR18</h1>
            </div>
            <div className="md:hidden ml-2 cursor-pointer">
              <div
                className={`w-6 h-6 ${props.mode === "light" ? "dark" : "light"} `}
                onClick={toggleMenu}
              >
                <img src={darkMd} alt="Toggle Menu"  />
              </div>
            </div>
            <ul
              className={`${
                menuOpen ? "block" : "hidden"
              } md:flex items-center mt-10 md:mt-0`}
            >
              <li>
                <Link
                  className="text-xl font-serif cursor-pointer hover:text-teal-700 transition duration-300 ease-in-out"
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  duration={800}
                  onClick={toggleMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="mx-8 text-xl font-serif cursor-pointer hover:text-teal-700 transition duration-300 ease-in-out"
                  activeClass="active"
                  to="service"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  onClick={toggleMenu}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  className="mx-8 text-xl font-serif cursor-pointer hover:text-teal-700 transition duration-300 ease-in-out"
                  activeClass="active"
                  to="project"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  onClick={toggleMenu}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  className="mx-8 text-xl font-serif cursor-pointer hover:text-teal-700 transition duration-300 ease-in-out"
                  activeClass="active"
                  to="myskills"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  onClick={toggleMenu}
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  className="mx-8 text-xl font-serif cursor-pointer hover:text-teal-700 transition duration-300 ease-in-out"
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  onClick={toggleMenu}
                >
                  Contact
                </Link>
              </li>
              <li>
                <a
                  id="btn"
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-5"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
