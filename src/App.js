import "./App.css";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import Services from "./Component/Services";
import Work from "./Component/Work";
import { useState } from "react";
import Contact from "./Component/Contact";
import MySkills from "./Component/MySkills";
import Footer from "./Component/Footer";
import Maps from "./Component/Maps";


function App() {
  const [mode, setmode] = useState("light");
  const togglemode = () => {
    if (mode === "dark") {
      setmode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    } else {
      setmode("dark");
      document.body.style.backgroundColor = "#0f172a";
      document.body.style.color = "white";
    }
  };

  return (
    <>
      <Navbar mode={mode} togglemode={togglemode} />
      <Home />
      <Services />
      <Work />
      <MySkills />
      <Contact />
      <Maps/>
      <Footer/>
    </>
  );
}

export default App;
