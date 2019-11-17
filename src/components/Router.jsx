import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "../App.jsx";
import OneRecipe from "./OneRecipe.jsx";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/recipe/:id" component={OneRecipe} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
