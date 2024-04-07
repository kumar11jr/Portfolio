import React from "react";
import next from "./../assets/images/next.png"
import ts from "./../assets/images/ts.webp"
import js from "./../assets/images/js.png"
import java from "./../assets/images/java.png"
import react1 from "./../assets/images/react1.png"
import database from "./../assets/images/database.png"
const MySkills = () => {
  return (
    <>
      <div id="myskills">
        <div className="mx-5 md:px-20 lg:px-30 lg:py-10 md:py-10">
          <div className="py-5">
            <h3 className="text-3xl text-teal-700 font-medium">My Skills</h3>
          </div>
          <div className="md:px-10 md:py-10 lg:px-20 lg:py-10 md:flex lg:flex md:space-x-10 lg:space-x-10 lg:justify-between grid grid-cols-2 ">
            <div className="my-10">
              <img
                style={{ display: "block", margin: "0px auto" }}
                width={100}
                src={next}
                alt="next"
              />
            </div>
            <div className="my-10">
              <img
                style={{ display: "block", margin: "0px auto" }}
                width={100}
                src={ts}
                alt=""
              />
            </div>
            <div className="my-10">
              <img
                style={{ display: "block", margin: "0px auto" }}
                width={100}
                src={js}
                alt=""
              />
            </div>
            <div className="my-10">
              <img
                style={{ display: "block", margin: "0px auto" }}
                width={100}
                src={java}
                alt=""
              />
            </div>
            <div className="my-10">
              <img
                style={{ display: "block", margin: "0px auto" }}
                width={100}
                src={react1}
                alt=""
              />
            </div>
            <div className="my-10">
              <img
                style={{ display: "block", margin: "0px auto" }}
                width={100}
                src={database}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MySkills;
