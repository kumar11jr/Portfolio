import React from "react";
import app from "./../assets/images/app-development.png"
import code from "./../assets/images/code.png"
import science from "./../assets/images/science.png"
const Services = () => {
  return (
    <>
      <div>
        <div className="mx-5 md:px-20 lg:px-25 lg:py-10 md:py-10">
          <div className="py-5">
            <h3 className="text-3xl text-teal-700 font-medium">
              Services offered
            </h3>
            <p className="text-md py-4">
              Make any project with me or any kind of help in the following
              fields.
            </p>
            <p>
              Main motive is to grow yourself as a person as well as help
              everyone to grow in this world.
            </p>
          </div>
          <div className="md:px-10 md:py-10 lg:px-20 lg:py-10 md:flex lg:flex md:space-x-10 lg:space-x-10">
            <div className="">
              <div className="text-center shadow-2xl p-10 rounded-xl transition ease-in-out delay-150 hover:scale-110">
                <img
                  style={{ display: "block", margin: "0px auto" }}
                  width={100}
                  src={app}
                  alt=""
                />
                <h3 className="text-lg font-medium pt-8 pb-2">
                  Web Development & Designing
                </h3>
                <p>
                  Experienced web developer specializing in creating
                  user-friendly websites using HTML, CSS, JavaScript, and
                  various web frameworks. Passionate about creating visually
                  appealing and functional websites.
                </p>
              </div>
            </div>
            <div>
              <div className="text-center shadow-2xl p-10 rounded-xl transition ease-in-out delay-150  hover:scale-110">
                <img
                  style={{ display: "block", margin: "0px auto" }}
                  width={100}
                  src={code}
                  alt=""
                />
                <h3 className="text-lg font-medium pt-8 pb-2">
                  Data Structure & Algorithm
                </h3>
                <p>
                  Skilled data structures and algorithms engineer with
                  experience in designing and implementing efficient solutions.
                  Proficient in various programming languages including C,
                  Python, and Java. Keen eye for detail and a passion for
                  finding optimal solutions to complex problems.
                </p>
              </div>
            </div>
            <div>
              <div className="text-center shadow-2xl p-10 rounded-xl transition ease-in-out delay-150  hover:scale-110">
                <img
                  style={{ display: "block", margin: "0px auto" }}
                  width={100}
                  src={science}
                  alt=""
                />
                <h3 className="text-lg font-medium pt-8 pb-2">
                  App with React-Native
                </h3>
                <p>
                  Experienced app developer with a strong background in
                  developing high-quality and user-friendly mobile applications
                  for iOS and Android platforms. Proficient in using various
                  programming languages such as Swift, Java, and Kotlin.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
