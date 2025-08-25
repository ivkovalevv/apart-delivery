import React from "react";
import "./notfound.css";

const NotFound = () => {
  return (
    <div className="notfound-wrapper">
      <h1 className="notfound-heading">404</h1>
      <h2 className="notfound-description">
        К сожалению, такой странцы не существует :(
      </h2>
    </div>
  );
};

export default NotFound;
