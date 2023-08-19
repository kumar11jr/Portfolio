import React, { useState } from "react";
import { Link } from "react-scroll";
import darkMd from "./../assets/images/night-mode.png"
import "./Navbar.css"
const Navbar = (props) => {
  return (
    <>
      <div className="">
        <div className="mx-5 md:px-20 lg:px-30 ">
          <nav className="py-8 mb-60 flex justify-between nav">
            <h1 className="text-3xl font-bold">KR18</h1>
            <ul className="flex items-center">
              <li>
              <Link className=" text-xl font-serif hover:text-teal-700 transition duration-300 ease-in-out"
              activeClass="active" 
              to="home" 
              spy={true} 
              smooth={true} 
              duration={800}>
              Home
              </Link> 
              </li>
              <li>
              <Link className="mx-8 text-xl font-serif hover:text-teal-700 transition duration-300 ease-in-out"
              activeClass="active" 
              to="service" 
              spy={true} 
              smooth={true} 
              duration={1000}>
              Services
              </Link> 
              </li>
              <li>
              <Link className="mx-8 text-xl font-serif hover:text-teal-700 transition duration-300 ease-in-out"
              activeClass="active" 
              to="project" 
              spy={true} 
              smooth={true} 
              duration={1000}>
              Projects
              </Link> 
              </li>
              <li>
              <Link className="mx-8 text-xl font-serif hover:text-teal-700 transition duration-300 ease-in-out"
              activeClass="active" 
              to="myskills" 
              spy={true} 
              smooth={true} 
              duration={1000}>
              Skills
              </Link> 
              </li>
              <li>
              <Link className="mx-8 text-xl font-serif hover:text-teal-700 transition duration-300 ease-in-out"
              activeClass="active" 
              to="contact" 
              spy={true} 
              smooth={true} 
              duration={1000}>
              Contact
              </Link> 
              </li>
              <li
                className={`w-6 ${props.mode === "light" ? "dark" : "light"} `}
              >
                <img
                  onClick={props.togglemode}
                  src={darkMd}
                  alt="de"
                  srcset=""
                />
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
