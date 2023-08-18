import React, { useEffect } from "react";
import profile from "./../assets/images/profile.jpg"
import instagram from "./../assets/images/instagram.png"
import twitter from "./../assets/images/twitter.png"
import git from "./../assets/images/git.png"
import linkedin from "./../assets/images/linkedin.png"
const Home = () => {
  var i = 0;
  var txt = "Hi, I am Prabhat Kumar. 🙂";
  var speed = 250;

  const typeWriter = () => {
    if (i < txt.length) {
      document.getElementById("demo").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  };

  useEffect(() => {
    typeWriter();
  }, []);

  return ( 
    <>
      <div>
        <div className="mx-5 md:px-20 lg:px-25 lg:py-20">
          <div className="text-center p-4">
            <h2 className="text-5xl text-teal-700 font-medium" id="demo"></h2>
            <h3 className="text-2xl py-2 leading-8 text-grey-200">
              Developer and Programmer
            </h3>
            <p>
              Trying to develop different thing everyday to keep growing in this
              lovely world
            </p>
          </div>

          <div className="md:px-10  lg:px-20 flex space-x-10 lg:space-x-10 sm:justify-center justify-evenly">
            <div className="my-10">
              <a target="_blank" href="https://www.instagram.com/kumar_11jr/?next=%2F&hl=en%2F"><img
                style={{ display: "block", margin: "0px auto" }}
                width="40"
                src={instagram}
                alt="insta"
              /></a>
            </div>
            <div className="my-10">
              <a target="_blank" href="https://twitter.com/Kumar_18jr">
              <img
                style={{ display: "block", margin: "0px auto" }}
                width="40"
                src={twitter}
                alt="hii"
              />
              </a>
            </div>
            <div className="my-10">
              <a target="_blank" href="https://github.com/kumar11jr">
              <img
                style={{ display: "block", margin: "0px auto" }}
                width="40"
                src={git}
                alt="git"
              />
              </a>
            </div>
            <div className="my-10">
            <a target="_blank" href="https://www.linkedin.com/in/prabhat-kumar-157435244/">
            <img
                style={{ display: "block", margin: "0px auto" }}
                width="40"
                src={linkedin}
                alt="linkedin"
              />
            </a>
            </div>
          </div>
          <div className="transition ease-in-out delay-150 hover:scale-110 relative mx-auto mx-16 ">
            <img
              style={{ display: "block", margin: "0px auto" }}
              className="rounded-full w-52 h-52"
              src={profile}
              
              alt="img"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
