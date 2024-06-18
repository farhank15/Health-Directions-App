// ButtonApp.js
import React from "react";
import { useNavigate } from "react-router-dom";

const ButtonApp = ({ className, name, custom, navigateTo, ...props }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (navigateTo) {
      navigate(navigateTo);
    }
  };

  return (
    <button
      data-aos={custom}
      className={`btn transition duration-300 ease-in-out transform hover:scale-105 active:scale-95 ${className}`}
      onClick={handleClick}
      {...props}
    >
      {name}
    </button>
  );
};

export default ButtonApp;
