import React from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";

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
    <Layout
      title="Dashboard"
      description={`G'day ${name}!`}
      className="container-fluid"
    >
      <div className="row">
        <div className="col-3">{adminLinks()}</div>
        <div className="col-9">{adminInfo()}</div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
