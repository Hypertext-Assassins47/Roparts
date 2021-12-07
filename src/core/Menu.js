import React, { Fragment } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { signout, isAuthenticated } from "../auth";
import logo from "../images/logo.png";
import "./styles.css";
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
      <ul className="nav navber-default">
        <li className="nav-item">
          <Link className="nav-link" style={isActive(history, "/")} to="/">
            Home
          </Link>
        </li>
        <li className="nav-item navber-default">
          <Link className="nav-link">Professional</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link">Education</Link>
        </li>
        <li className="">
          <form method="get" action="">
            <input
              type="text"
              name="term"
              class="search-bar"
              placeholder="Search"
            />
          </form>
        </li>
        <li class="btn cart" style={{ margin: "0px 10px 0px 10px" }}>
          <svg
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            id="wishlist"
            viewBox="0 0 20 18"
            class="bi bi-cart2"
          >
            <path
              d="M19.7491 6C19.7578 6.69695 19.6254 7.38846 19.3599 8.03291C19.0944 8.67737 18.7013 9.26144 18.2041 9.75L10.5391 17.7675C10.4692 17.8401 10.3853 17.8978 10.2925 17.9373C10.1997 17.9767 10.1 17.997 9.99914 17.997C9.89833 17.997 9.79855 17.9767 9.70577 17.9373C9.61299 17.8978 9.52911 17.8401 9.45914 17.7675L1.74914 9.6975C0.769042 8.71354 0.21875 7.38131 0.21875 5.9925C0.21875 4.60369 0.769042 3.27147 1.74914 2.2875C2.73342 1.30511 4.06725 0.753368 5.45789 0.753368C6.84854 0.753368 8.18237 1.30511 9.16664 2.2875L9.99914 3.0825L10.7866 2.2875C11.521 1.53776 12.4632 1.02532 13.4917 0.816322C14.5202 0.607326 15.5877 0.711366 16.5564 1.11502C17.5252 1.51866 18.3507 2.20339 18.9265 3.08083C19.5023 3.95826 19.8019 4.98813 19.7866 6.0375L19.7491 6Z"
              fill="currentColor"
            ></path>
          </svg>
        </li>
        <li class="btn cart" style={{ marginLeft: "10px" }}>
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
        </li>
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
            <span
              className="nav-link"
              style={{ cursor: "pointer", color: "#008184" }}
              onClick={() =>
                signout(() => {
                  history.push("/");
                })
              }
            >
              SignOut
            </span>
          </li>
        )}
      </ul>
    </div>

    <div className="second-level">
      <ul class="nav navbar-expand-md navber-default">
        <img
          src={logo}
          alt="logo"
          style={{ width: "150px", marginRight: "600px", marginLeft: "1px" }}
          // style="width: 320px; margin-right: 1em; "
        />

        <li class="nav-item">
          <a class="nav-link" href="/#">
            Most Popular
          </a>
        </li>
        <NavDropdown title="Category" id="nav-dropdown">
          <NavDropdown.Item>Home&Industrial Automation</NavDropdown.Item>
          <NavDropdown.Item>Iot - Internet Of Things</NavDropdown.Item>
          <NavDropdown.Item>Robotics&Drones</NavDropdown.Item>

          <NavDropdown.Item>Sensors&Environment</NavDropdown.Item>
          <NavDropdown.Item> Green & Sustainability</NavDropdown.Item>
        </NavDropdown>
        <li class="nav-item">
          <a class="nav-link" href="/#">
            New Produts
          </a>
        </li>
      </ul>
    </div>
  </nav>
);

export default withRouter(Menu);
