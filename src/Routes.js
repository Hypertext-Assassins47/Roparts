import React from "react";
import { Redirect } from "react-router";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import Home from "./core/Home";
import PrivateRoute from "./auth/PrivateRoute";
import Dashboard from "./user/UserDashboard";
import AdminRoute from "./auth/AdminRoute";
import AdminDashboard from "./user/AdminDashboard";

// import Menu from "./core/Menu";

let Routes = () => {
  return (
    <BrowserRouter>
      {/* <Menu /> */}
      <Switch>
        <Route path="/signin" exact component={Signin} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/" exact component={Home} />
        <PrivateRoute path="/user/dashboard" exact component={Dashboard} />

        <AdminRoute path="/admin/dashboard" exact component={AdminDashboard} />
      </Switch>
    </BrowserRouter>
  );
};
export * from "react-router";
export default Routes;
