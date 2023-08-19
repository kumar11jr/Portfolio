import React from "react";
import facebook from "./../assets/images/facebook.png"
import database from "./../assets/images/database.png"
import cloud from "./../assets/images/cloudy.png"
const Work = () => {
  return (
    <>
      <div id="project">
        <div className="mx-5 md:px-20 lg:px-30 lg:py-10 md:py-10">
          <div className="py-5">
            <h3 className="text-3xl text-teal-700 font-medium">My Projects</h3>
            <p className="text-md py-4">
              Develop and launch a cutting-edge platform. Utilize modern
              technologies for a seamless user experience.
            </p>
            <p>
              I am a web developer specializing in creating visually appealing
              and functional websites using HTML, CSS, JavaScript, and various
              web frameworks. I am committed to delivering high-quality and
              user-friendly websites that meet clients' needs and expectations.
              My goal is to create beautiful and intuitive websites that solve
              real-world problems.
            </p>
          </div>
          <div className="md:px-10 md:py-10 lg:px-20 lg:py-10 md:flex lg:flex md:space-x-10 lg:space-x-10">
            <div className="">
              <div className="text-center shadow-2xl p-10 rounded-xl ">
                <img
                  style={{ display: "block", margin: "0px auto" }}
                  width={100}
                  src={facebook}
                  alt="facebook"
                />
                <h3 className="text-lg font-medium pt-8 pb-2">
                  Facebook Clone
                </h3>
                <p>Created a landing page of facebook using Html,Css.</p>
                <div className="pt-4 transition ease-in-out delay-200 hover:scale-110">
                  <a
                    className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-2 py-2 rounded-md  "
                    href="https://github.com/kumar11jr/Facebook."
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="text-center shadow-2xl p-10 rounded-xl ">
                <img
                  style={{ display: "block", margin: "0px auto" }}
                  width={100}
                  src={database}
                  alt="database"
                />
                <h3 className="text-lg font-medium pt-8 pb-2">
                  Employee Management
                </h3>
                <p>Employee Management using React and Firebase.</p>
                <div className="pt-4 transition ease-in-out delay-200  hover:scale-110">
                  <a
                    className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-2 py-2 rounded-md "
                    href="https://github.com/kumar11jr/Employee-management-system-with-database"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="text-center shadow-2xl p-10 rounded-xl ">
                <img
                  style={{ display: "block", margin: "0px auto" }}
                  width={100}
                  src={cloud}
                  alt="cloud"
                />
                <h3 className="text-lg font-medium pt-8 pb-2">Weather App</h3>
                <p>Get Weather info of any state using Javascript,Api.</p>
                <div className="pt-4 transition ease-in-out delay-200  hover:scale-110">
                  <a
                    className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-2 py-2 rounded-md "
                    href="https://github.com/kumar11jr/Weather-app-using-API"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
