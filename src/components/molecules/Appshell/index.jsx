import "aos/dist/aos.css";
import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Appshell = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="m-auto max-w-7xl">{children}</div>
      <Footer />
    </>
  );
};

export default Appshell;
