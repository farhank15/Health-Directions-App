// ButtonApp.js
import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook

const ButtonApp = ({ className, name }) => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleClick = () => {
    navigate("/consul"); // Use navigate to redirect
  };

  return (
    <button className={className} onClick={handleClick}>
      {name}
    </button>
  );
};

export default ButtonApp;
