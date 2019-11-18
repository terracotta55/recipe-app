import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "../App";
import OneRecipe from "./OneRecipe";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/recipe/:id" component={OneRecipe} />
        <Route component={() => <div>404 Not found 1</div>} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
