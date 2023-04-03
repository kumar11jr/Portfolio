import React from "react";

const MySkills = () => {
  return (
    <>
      <div>
        <div className="mx-5 md:px-20 lg:px-30 lg:py-10 md:py-10">
          <div className="py-5">
            <h3 className="text-3xl text-teal-700 font-medium">My Skills</h3>
          </div>
          <div className="md:px-10 md:py-10 lg:px-20 lg:py-10 md:flex lg:flex md:space-x-10 lg:space-x-10 lg:justify-between grid grid-cols-2 ">
            <div className="my-10">
              <img
                style={{ display: "block", margin: "0px auto" }}
                width={100}
                src="images/html-5.png"
                alt=""
              />
            </div>
            <div className="my-10">
              <img
                style={{ display: "block", margin: "0px auto" }}
                width={100}
                src="images/css-3.png"
                alt=""
              />
            </div>
            <div className="my-10">
              <img
                style={{ display: "block", margin: "0px auto" }}
                width={100}
                src="images/js.png"
                alt=""
              />
            </div>
            <div className="my-10">
              <img
                style={{ display: "block", margin: "0px auto" }}
                width={100}
                src="images/java.png"
                alt=""
              />
            </div>
            <div className="my-10">
              <img
                style={{ display: "block", margin: "0px auto" }}
                width={100}
                src="images/react1.png"
                alt=""
              />
            </div>
            <div className="my-10">
              <img
                style={{ display: "block", margin: "0px auto" }}
                width={100}
                src="images/database.png"
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
