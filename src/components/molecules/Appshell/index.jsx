import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Appshell = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Appshell;
