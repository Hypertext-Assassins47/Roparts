import React from "react";

import { BrowserRouter } from "react-router-dom";

import { Route, Switch } from "react-router";

import Signup from "./user/Signup";
import Signin from "./user/Signin";
import Home from "./core/Home";
// import Menu from "./core/Menu";

let Routes = () => {
  return (
    <BrowserRouter>
      {/* <Menu /> */}
      <Switch>
        <Route path="/signin" exact component={Signin} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
};
export * from "react-router";
export default Routes;
