import React from "react";
import ButtonApp from "../../components/atoms/Button";

const Home = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline text-secondary">Home</h1>
      <ButtonApp className="py-none" name="Button" />
    </div>
  );
};

export default Home;
