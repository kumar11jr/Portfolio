import React from "react";
import workspace from "./../assets/images/images-removebg-preview.png"
import database from "./../assets/images/database.png"
import globalbrief from "./../assets/images/globalbrief.png"
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
                  width={120}
                  src={workspace}
                  alt="workspace"
                />
                <h3 className="text-lg font-medium pt-8 pb-2">
                  WorkSpace
                </h3>
                <p>A workspace where users can manage their works.</p>
                <div className="pt-4 transition ease-in-out delay-200 hover:scale-110">
                  <a
                    className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-2 py-2 rounded-md  "
                    href="https://github.com/kumar11jr/workspace"
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
                  TapBio
                </h3>
                <p>A OpenSource link where all link can me managed in one link</p>
                <div className="pt-4 transition ease-in-out delay-200  hover:scale-110">
                  <a
                    className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-2 py-2 rounded-md "
                    href="https://github.com/kumar11jr/tapbio"
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
                  width={130}
                  src={globalbrief}
                  alt="cloud"
                />
                <h3 className="text-lg font-medium pt-8 pb-2">GlobalBrief</h3>
                <p>Get news info of the world using typescript,Api.</p>
                <div className="pt-4 transition ease-in-out delay-200  hover:scale-110">
                  <a
                    className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-2 py-2 rounded-md "
                    href="https://github.com/kumar11jr/GlobalBrief"
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
