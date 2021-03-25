import React from "react";

const Link = ({ linkTitle, linkIcon, link }) => {
  return (
    <a href={link} target="_blank" className="link flex">
      <h3>{linkTitle}</h3>
      <i className={`bx ${linkIcon}`}></i>
    </a>
  );
};

export default Link;
