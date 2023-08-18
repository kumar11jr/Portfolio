import React, { useState } from "react";
import darkMd from "./../assets/images/night-mode.png"
const Navbar = (props) => {
  return (
    <>
      <div>
        <div className="mx-5 md:px-20 lg:px-30 ">
          <nav className="py-8 mb-12 flex justify-between">
            <h1 className="text-3xl font-bold">KR18</h1>
            <ul className="flex items-center">
              <li>
                <a className="m-16 relative group">
                  <span>Home</span>
                  <span className="absolute -bottom-1 right-0 w-0 h-2 bg-blue-400 group-hover:w-full group-hover:transition-duration-200"></span>
                </a>
              </li>
              <li>
                <a id="" className="mx-10" href="#">
                  Services
                </a>
              </li>
              <li>
                <a id="" className="mx-10" href="#">
                  Projects
                </a>
              </li>
              <li>
                <a id="btn" className="mx-10" href="#">
                  Contact Me
                </a>
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
