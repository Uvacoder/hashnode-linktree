import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";

const Home = () => {
  const [username, setUsername] = useState("");
  const [theme, setTheme] = useState("default-white");
  const history = useHistory();

  const getLinkTree = (e) => {
    if (username) {
      history.push("/" + username + "/" + theme);
    } else {
      alert("Add your hashnode username ✌");
    }
  };

  return (
    <div className="home flex">
      <div className="home__left flex animate__animated animate__fadeInLeft">
        <h1>
          Indroducing <span>HashTree</span>
        </h1>
        <p>A link tree for all Hashnode users ✌</p>
      </div>
      <div className="home__right flex animate__animated animate__fadeInRight">
        <div className="form">
          <TextField
            label="Hashnode Username"
            variant="outlined"
            className="input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <div className="themes flex">
            <div
              className={`theme ${
                theme === "default-white" ? "border-theme" : ""
              }`}
              onClick={() => setTheme("default-white")}
            >
              <div className="cover default-white"></div>
              <p>Default White</p>
            </div>
            <div
              className={`theme ${
                theme === "ocean-blue" ? "border-theme" : ""
              }`}
              onClick={() => setTheme("ocean-blue")}
            >
              <div className="cover ocean-blue"></div>
              <p>Ocean Blue</p>
            </div>
            <div
              className={`theme ${
                theme === "stylish-yellow" ? "border-theme" : ""
              }`}
              onClick={() => setTheme("stylish-yellow")}
            >
              <div className="cover stylish-yellow"></div>
              <p>Stylish Yellow</p>
            </div>
            <div
              className={`theme ${
                theme === "rocket-green" ? "border-theme" : ""
              }`}
              onClick={() => setTheme("rocket-green")}
            >
              <div className="cover rocket-green"></div>
              <p>Rocket Green</p>
            </div>
          </div>

          <Button variant="contained" className="btn" onClick={getLinkTree}>
            Generate my Hashtree! 🚀
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
