import React from "react";

const Header = ({ profileImg, name, tagline }) => {
  return (
    <div className="header flex animate__animated animate__fadeInDown">
      <img src={profileImg} alt="image" />
      <h1>{name}</h1>
      <p>{tagline}</p>
    </div>
  );
};

export default Header;
