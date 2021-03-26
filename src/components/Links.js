import { Button } from "@material-ui/core";
import React from "react";

const Link = ({ linkTitle, linkIcon, link }) => {
  return (
    <Button
      variant="contained"
      className="link animate__animated animate__fadeInDown"
      onClick={() => window.open(link)}
    >
      <h3>{linkTitle}</h3>
      <i className={`bx ${linkIcon}`}></i>
    </Button>
  );
};

export default Link;
