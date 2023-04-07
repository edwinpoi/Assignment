import React from "react";
import Photo from "../asset/heroImg.jpg";

const Main = () => {
  return (
    <div className="HeroContainer">
      <div className="flexDer ">
        <h1>Little Lemon </h1>
        <h4>the best restaurant</h4>
        <p>Try to taste our meals, it is the best meals in our world </p>
        <button>Reserve a table</button>
      </div>
      <div className="flexDer">
        <img src={Photo} className="heroImg" alt="img"></img>
      </div>
    </div>
  );
};

export default Main;
