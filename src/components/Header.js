import React from "react";

const Header = ({ profileImg, name }) => {
  return (
    <div className="header flex">
      <img src={profileImg} alt="image" />
      <h1>{name}</h1>
    </div>
  );
};

export default Header;
