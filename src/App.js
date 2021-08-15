import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Home from "./ui/pages/Home";
import Search from "./ui/pages/Search";

/** TODO: Make app responsive */
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/search">
          <Search />
        </Route>
      </Switch>
    </Router>
  );

  // return (
  //   <div className="app">
  //     <Home />
  //   </div>
  // );
}

export default App;
