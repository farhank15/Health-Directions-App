import "aos/dist/aos.css";
import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Appshell = ({ children }) => {
  const location = useLocation();
  const hideFooterPaths = ["/konsultasi-medis"];

  return (
    <>
      <Navbar />
      <div className="m-auto">{children}</div>
      {!hideFooterPaths.includes(location.pathname) && <Footer />}
    </>
  );
};

export default Appshell;
