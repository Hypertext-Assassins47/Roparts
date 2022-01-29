import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { getPurchaseHistory } from "./apiUser";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { FaGem } from "react-icons/fa";

import { FaHeart } from "react-icons/fa";

import moment from "moment";

const Dashboard = () => {
  const [history, setHistory] = useState([]);
  const {
    user: { _id, name, email, role },
  } = isAuthenticated();
  const token = isAuthenticated().token;
  const init = (userId, token) => {
    getPurchaseHistory(userId, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setHistory(data);
      }
    });
  };

  useEffect(() => {
    init(_id, token);
  }, []);

  const userLinks = () => {
    return (
      <div className="shadow-lg card bg-info col-2 mt-4" style={{}}>
        <h4
          className=" card-header text-center text-white"
          style={{
            fontWeight: "bold",
          }}
        >
          User Links
        </h4>
        <ul className="list-group">
          <li className="list-group-item bg-info btn-outline-primary btn-block">
            <Link
              className="nav-link"
              to="/cart"
              style={{
                color: "white",
                fontWeight: "bold",
              }}
            >
              My Cart
            </Link>
          </li>
          <li className="list-group-item bg-info btn-outline-primary btn-block">
            <Link
              className="nav-link"
              to="/profile/update"
              style={{
                color: "white",
                fontWeight: "bold",
              }}
            >
              Update Profile
            </Link>
          </li>
        </ul>
      </div>
    );
  };

  const userInfo = () => {
    return (
      <div className="shadow-lg card bg-info col-2 mt-4" style={{}}>
        <h3
          className="card-header"
          style={{
            color: "white",
            fontWeight: "bold",
          }}
        >
          User Information
        </h3>
        <ul className="list-group">
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
            className="list-group-item bg-info"
            style={{
              color: "white",
              fontWeight: "bold",
            }}
          >
            {role === 1 ? "Admin" : "Registered User"}
          </li>
        </ul>
      </div>
    );
  };

  const purchaseHistory = (history) => {
    return (
      <div
        className="shadow-sm container float-end"
        style={{
          marginRight: "200px",
          width: "80%",
          height: "100%",
          background: "transparent",
        }}
      >
        <div class="table-wrapper" style={{ background: "#E6E2EB" }}>
          <div class="table-title m-2">
            <div class="row">
              <div class="col-sm-4 text-center" style={{ marginLeft: "430px" }}>
                <h2>Purchase History</h2>
              </div>

              <div>
                <hr />
                <tr className="d-flex justify-content-between">
                  <th>Product Name</th>

                  <th style={{ marginLeft: "380px" }}>Order Date</th>
                  <th>Status</th>
                  <th style={{ marginRight: "40px" }}>Net Amount</th>
                </tr>
              </div>
            </div>
          </div>
          {history.map((h, i) => {
            return (
              <div>
                {h.products.map((p, i) => {
                  return (
                    <div key={i}>
                      <table class="table table-striped table-hover">
                        <tbody>
                          <tr className="" style={{ fontWeight: "bold" }}>
                            <td style={{ width: "50%" }}>{p.name}</td>
                            <td style={{ width: "20%" }}>
                              {moment(h.createdAt).format(
                                "DD-MM-YY , HH:mm:ss"
                              )}
                            </td>
                            <td style={{ width: "20%" }}>
                              <span class="status text-success">&bull;</span>{" "}
                              {h.status}
                            </td>
                            <td className="">RM{p.price}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <Layout title="Dashboard" description={`G'day ${name}!`} className="">
      <div className="">
        <div class="">
          <div>
            <ProSidebar style={{ position: "absolute", height: "auto" }}>
              <Menu iconShape="round">
                <SubMenu title="User Info" icon={<FaHeart />}>
                  <MenuItem>Name: {name} </MenuItem>
                  <MenuItem>Email: {email} </MenuItem>
                  <MenuItem>
                    Role: {role === 1 ? "Admin" : "Registered User"}{" "}
                  </MenuItem>
                </SubMenu>
                <MenuItem icon={<FaGem />}>
                  My Cart
                  <Link to="/cart" />
                </MenuItem>
                <MenuItem icon={<FaGem />}>
                  Update Profile <Link to="/user/dashboard" />
                </MenuItem>
              </Menu>
            </ProSidebar>
          </div>
          <div class="">
            {purchaseHistory(history)}
            {/* 
        {userInfo()}
        {userLinks()}
        */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
