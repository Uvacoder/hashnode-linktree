import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Main from "./Main";
import "./styles/App.css";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/:username/:theme" exact>
          <Main />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
