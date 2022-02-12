import React from "react";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "../../final/src/pages/About";
import Error from "../../final/src/pages/Error";
import Home from "../../final/src/pages/Home";
import SingleCocktail from "../../final/src/pages/SingleCocktail";
import Navbar from "./components/Navbar";

// import pages

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/cocktail/:id">
          <SingleCocktail />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
