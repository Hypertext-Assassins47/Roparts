import React from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { FaGem } from "react-icons/fa";

import { FaHeart } from "react-icons/fa";

const AdminDashboard = () => {
  const {
    user: { _id, name, email, role },
  } = isAuthenticated();

  const adminLinks = () => {
    return (
      <div
        className="shadow-lg card bg-info col-12"
        style={{ marginLeft: "400px", width: "300px", height: "300px" }}
      >
        <h4
          className=" card-header text-center text-white"
          style={{
            fontWeight: "bold",
          }}
        >
          Admin Links
        </h4>
        <ul className="list-group">
          <li className="list-group-item bg-info btn-outline-primary btn-block">
            <Link
              className="nav-link "
              to="/create/category"
              style={{
                color: "white",
                fontWeight: "bold",
              }}
            >
              Create Category
            </Link>
          </li>
          <li className="list-group-item bg-info btn-outline-primary btn-block">
            <Link
              className="nav-link"
              to="/create/product"
              style={{
                color: "white",
                fontWeight: "bold",
              }}
            >
              Create Product
            </Link>
          </li>
          <li className="list-group-item bg-info btn-outline-primary btn-block">
            <Link
              className="nav-link"
              to="/admin/products"
              style={{
                color: "white",
                fontWeight: "bold",
              }}
            >
              Manage Products
            </Link>
          </li>

          <li className="list-group-item bg-info btn-outline-primary btn-block">
            <Link
              className="nav-link"
              to="/admin/orders"
              style={{
                color: "white",
                fontWeight: "bold",
              }}
            >
              View Orders
            </Link>
          </li>
        </ul>
      </div>
    );
  };

  const adminInfo = () => {
    return (
      <div
        className="shadow-lg card bg-info col-12"
        style={{ marginLeft: "500px", width: "300px", height: "300px" }}
      >
        <h3
          className="card-header text-center"
          style={{
            color: "white",
            fontWeight: "bold",
          }}
        >
          User Information
        </h3>
        <ul className="list-group ">
          <li
            className="list-group-item bg-info"
            style={{
              color: "white",
              fontWeight: "bold",
            }}
          >
            Name: {name}
          </li>
          <li
            className="list-group-item bg-info"
            style={{
              color: "white",
              fontWeight: "bold",
            }}
          >
            Email: {email}
          </li>
          <li
            className="list-group-item bg-info "
            style={{
              color: "white",
              fontWeight: "bold",
            }}
          >
            Role: {role === 1 ? "Admin" : "Registered User"}
          </li>
        </ul>
      </div>
    );
  };

  return (
    <Layout title="Dashboard" description={`G'day ${name}!`} className="">
      <div class="m-2">
        <div>
          <ProSidebar style={{ position: "absolute", height: "auto" }}>
            <Menu iconShape="round">
              <SubMenu title="Admin Info" icon={<FaHeart />}>
                <MenuItem>Name: {name} </MenuItem>
                <MenuItem>Email: {email} </MenuItem>
                <MenuItem>
                  Role: {role === 1 ? "Admin" : "Registered User"}{" "}
                </MenuItem>
              </SubMenu>
              <MenuItem icon={<FaGem />}>
                Create Category
                <Link to="/create/category" />
              </MenuItem>
              <MenuItem icon={<FaGem />}>
                Create Product <Link to="/create/product" />
              </MenuItem>
              <MenuItem icon={<FaGem />}>
                manage Products
                <Link to="/admin/products" />
              </MenuItem>
              <MenuItem icon={<FaGem />}>
                View Orders <Link to="/admin/orders" />
              </MenuItem>
            </Menu>
          </ProSidebar>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
