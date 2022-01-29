import React, { Fragment } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { signout, isAuthenticated } from "../auth";
import logo from "../images/logo.png";
import "./styles.css";
import Search from "./Search";
import { itemTotal } from "./cartHelpers";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import $ from "jquery";
import Popper from "popper.js";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  rel="stylesheet"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>;
<script
  src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"
  integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB"
  crossorigin="anonymous"
></script>;

<script
  src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"
  integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13"
  crossorigin="anonymous"
></script>;

const isActive = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "white" };
  } else {
    return { color: "white" };
  }
};

const Menu = ({ history }) => (
  <nav className="mainNav">
    <div className="first-level">
      <ul
        className="nav navber-default d-flex justify-content-start"
        style={{ color: "white", fontWeight: "bold" }}
      >
        <li className="nav-item">
          <Link className="nav-link" style={isActive(history, "/")} to="/">
            Home
          </Link>
        </li>

        <li className="nav-item navber-default ">
          <a
            class="nav-link"
            href="/professional"
            style={{ color: "white", fontWeight: "bold" }}
          >
            Professional
          </a>
        </li>
        <li className="nav-item navber-default">
          <a
            class="nav-link"
            href="/education"
            style={{ color: "white", fontWeight: "bold" }}
          >
            Eduation
          </a>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link"
            // style={isActive(history, "/cart")}
            style={{ marginLeft: "1300px" }}
            to="/cart"
          >
            Cart
            <sup>
              <small
                className="cart-badge"
                style={{
                  background: "black",
                  borderRadius: "80%",
                  padding: "5px",
                  fontSize: "12px",
                  fontStyle: "italic",
                  color: "white",
                  fontWeight: "bold",
                  margin: "2px",
                }}
              >
                {itemTotal()}
              </small>
            </sup>
          </Link>
        </li>
        {/* <li className="nav-item navber-default" style={{ marginLeft: "600px" }}>
          <Search className="search-bar" />
        </li>
        */}
        {/*   <li className="">
          <form method="get" action="">
            <input
              type="text"
              name="term"
              class="search-bar"
              placeholder="Search"
            />
          </form>
        </li>

        */}
        {/*
        <li class="btn cart" style={{ marginLeft: "1250px" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-cart2"
            viewBox="0 0 16 16"
          >
            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
          </svg>
          <Link
            className="nav-link"
            style={isActive(history, "/cart")}
            to="/cart"
          />{" "}
        </li>
        */}

        {isAuthenticated() && isAuthenticated().user.role === 0 && (
          <li className="nav-item ">
            <Link
              className="nav-link"
              style={isActive(history, "/user/dashboard")}
              to="/user/dashboard"
            >
              Dashboard
            </Link>
          </li>
        )}
        {isAuthenticated() && isAuthenticated().user.role === 1 && (
          <li className="nav-item">
            <Link
              className="nav-link"
              style={isActive(history, "/admin/dashboard")}
              to="/admin/dashboard"
            >
              Dashboard
            </Link>
          </li>
        )}
        {!isAuthenticated() && (
          <Fragment>
            <li className="nav-item">
              <Link
                className="nav-link"
                style={isActive(history, "/signin")}
                to="/signin"
              >
                Sign In
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                style={isActive(history, "/signup")}
                to="/signup"
              >
                Sign Up
              </Link>
            </li>
          </Fragment>
        )}
        {isAuthenticated() && (
          <li className="nav-item">
            <Link
              className="nav-link"
              style={{
                color: "white",
                fontWeight: "bold",
              }}
              onClick={() =>
                signout(() => {
                  history.push("/");
                })
              }
            >
              Sign Out
            </Link>
          </li>
        )}
      </ul>
    </div>

    <div className="second-level">
      <ul class="nav navbar-expand-md navber-default">
        <img
          src={logo}
          alt="logo"
          style={{
            width: "150px",
            marginRight: "600px",
            marginLeft: "1px",
            cursor: "pointer",
          }}
          // style="width: 320px; margin-right: 1em; "
        />

        <li class="nav-item">
          <a
            class="nav-link"
            href="/mostpopular"
            style={{ color: "white", fontWeight: "bold" }}
          >
            Most Popular
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            href="/shop"
            style={{ color: "white", fontWeight: "bold" }}
          >
            Store
          </a>
        </li>
        {/*   <NavDropdown
          style={{ color: "white", fontWeight: "bold" }}
          title="Category"
          id="nav-dropdown"
        >
          <NavDropdown.Item as={Link} to="/shop">
            Home & Industrial Automation
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/iot">
            Iot - Internet Of Things
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/robotics">
            Robotics & Drones
          </NavDropdown.Item>

          <NavDropdown.Item as={Link} to="/sensor">
            Sensors & Environment
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/green">
            {" "}
            Green & Sustainability
          </NavDropdown.Item>
        </NavDropdown>


        */}

        <li class="nav-item">
          <a
            class="nav-link"
            href="/newproduct"
            style={{ color: "white", fontWeight: "bold" }}
          >
            New Produts
          </a>
        </li>
      </ul>
    </div>
  </nav>
);

export default withRouter(Menu);
