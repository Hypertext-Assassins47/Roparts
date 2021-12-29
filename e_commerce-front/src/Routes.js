import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import Home from "./core/Home";
import MostPopular from "./core/MostPopular";
import NewProduct from "./core/NewProduct";
import Education from "./core/Education";
import Professional from "./core/Professional";
import PrivateRoute from "./auth/PrivateRoute";
import Dashboard from "./user/UserDashboard";
import AdminRoute from "./auth/AdminRoute";
import AdminDashboard from "./user/AdminDashboard";
import AddCategory from "./admin/AddCategory";
import AddProduct from "./admin/AddProduct";
import Shop from "./core/Shop";
import Iot from "./core/Iot";
import Robotics from "./core/Robotics";
import Sensor from "./core/Sensor";
import Green from "./core/Green";
import Product from "./core/Product";
import Cart from "./core/Cart";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/shop" exact component={Shop} />
        <Route path="/iot" exact component={Iot} />
        <Route path="/robotics" exact component={Robotics} />
        <Route path="/sensor" exact component={Sensor} />
        <Route path="/green" exact component={Green} />
        <Route path="/signin" exact component={Signin} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/mostpopular" exact component={MostPopular} />
        <Route path="/newproduct" exact component={NewProduct} />

        <Route path="/professional" exact component={Professional} />
        <Route path="/education" exact component={Education} />

        <PrivateRoute path="/user/dashboard" exact component={Dashboard} />
        <AdminRoute path="/admin/dashboard" exact component={AdminDashboard} />
        <AdminRoute path="/create/category" exact component={AddCategory} />
        <AdminRoute path="/create/product" exact component={AddProduct} />

        <Route path="/product/:productId" exact component={Product} />
        <Route path="/cart" exact component={Cart} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
