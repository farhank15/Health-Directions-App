import React from "react";

const ButtonApp = ({ className, name, ...props }) => {
  return (
    <button
      className={`btn transition duration-300 ease-in-out transform hover:scale-105 active:scale-95  ${className}`}
      {...props}
    >
      {name}
    </button>
  );
};

export default ButtonApp;
