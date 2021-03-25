import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { useHistory } from "react-router-dom";

const Home = () => {
  const [username, setUsername] = useState("S");
  const history = useHistory();

  const getLinkTree = (e) => {
    if (e.keyCode === 13) {
      history.push(`/${username}`);
    }
  };

  return (
    <div className="home flex">
      <div className="home__left flex">
        <h1>
          Indroducing <span>HashTree</span>
        </h1>
        <p>A link tree for all Hashnode users ✌</p>
        <TextField
          label="Hashnode Username"
          variant="outlined"
          className="input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={(e) => getLinkTree(e)}
        />
      </div>
      <div className="home__right"></div>
    </div>
  );
};

export default Home;
