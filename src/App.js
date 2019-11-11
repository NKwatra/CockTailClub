import React from "react";
import "./App.css";
import Home from "./Home";
import Detail from "./Detail";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/detail/:drinkId">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
